#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

int main()
{
    int n;
    cin >> n;

    int nums[n];

    for (int i = 0; i < n; i++)
    {
        cin >> nums[i];
    }

    int left = 0;
    int right = n - 1;

    int s = 0, d = 0;

    for (int i = 0; i < n; i++)
    {
        int leftNum = nums[left], rightNum = nums[right];
        int maxi = max(leftNum, rightNum);

        if (leftNum == maxi)
            left++;
        else
            right--;

        if (i % 2 == 0)
            s += maxi;
        else
            d += maxi;
    }

    cout << s << " " << d << endl;
    
    return 0;
}

