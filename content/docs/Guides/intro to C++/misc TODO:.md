---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDNRIAN2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMbIuzY%2FE9l54FTtkeFxugzw1pWBNsf94Ky7zdqmdhUAiAMRM6GYXCC3ydzJPDJq0rG6RFw0VRM6fIpFZbxl8%2FGbCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMTa180SSNj4mUlnGlKtwDnNXGkdeAj%2Fe1%2BTHvs1R85ExdtM84f7KfPPFDXf9KTyR8HCCngoPnlCK63HJxq%2F6U8OGK5wwGwP7WQ3KrdxmI%2BgjSWi%2BlHcMfhPag6lYp2hX04t67mZpI%2FEeFQZR1o1rJVs0fgoQ3gqBggt%2FaK2nAjv%2FoWPOBWuYbNY6wiHadtOWrHSKgfLM5fRF5DWfCPuuIusKC%2Fk0uI56MR3DmbFVMSHz9CdjkZ0jtm2mCqy3YrgthA42rzB%2BIEtLPv4CcKiXs1Z2KhfI22cPuPDuFEGBx%2BgyoKgeO%2BfEJXzLKaUnxo%2FFS1G%2FioILTA2B%2BEms19tOPhUYbIaGFQi1h7BLKsneijJzoez0yT6zj9Astjv9lQ8QpR%2B%2Bp3gJwzWnP2svlCHOk%2FQfJTUjAIMv8C0WeBbBoTWklOoG3hSeQKIXIDnUbsLY8TGjiWaw0Vc86yiPOgdJmBgSQxM9rr9guZNq7jurRFk%2BfOYN8Zq3RSNDBdTImDfiX8k2KsbqDvPZwjsY56Xyqbd4D21kj0apnhEYdt2QMOD9NeiLaGxQl%2Fz1ZpeRzsRowCX4hRB5Em26ldKT42GwHFzgCMbFu9CXdoMc%2Ff65L3hgmuUBDVBK8e6iPuWXMN%2FMJQ7v%2BLwYYlSb39Xcw%2FLy8wAY6pgEDlJfq3p%2FEILimNzzJ%2BJQwN50aY5wLYcgyfW3yFYXDpWDl6MIcna9I%2F0C23yLF3s6hNbafzGkycwV34qRDW%2Fcy4ASLHavYOteZlpxCJJ4tD6ghfCpucibfczriLK09f4f42dsy2BdSJ%2FbbBuwDYUfIgjjAJZy2liYboJFSloForv%2Bb9%2FA6REjyPAvELYowG0mIMuAgFkteomMHFDM2B%2FPHB%2BPYU94n&X-Amz-Signature=0391cdeccd6e65a7f3c68f4a81c847932333a9af79a839f758873ec2549db3bf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDNRIAN2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMbIuzY%2FE9l54FTtkeFxugzw1pWBNsf94Ky7zdqmdhUAiAMRM6GYXCC3ydzJPDJq0rG6RFw0VRM6fIpFZbxl8%2FGbCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMTa180SSNj4mUlnGlKtwDnNXGkdeAj%2Fe1%2BTHvs1R85ExdtM84f7KfPPFDXf9KTyR8HCCngoPnlCK63HJxq%2F6U8OGK5wwGwP7WQ3KrdxmI%2BgjSWi%2BlHcMfhPag6lYp2hX04t67mZpI%2FEeFQZR1o1rJVs0fgoQ3gqBggt%2FaK2nAjv%2FoWPOBWuYbNY6wiHadtOWrHSKgfLM5fRF5DWfCPuuIusKC%2Fk0uI56MR3DmbFVMSHz9CdjkZ0jtm2mCqy3YrgthA42rzB%2BIEtLPv4CcKiXs1Z2KhfI22cPuPDuFEGBx%2BgyoKgeO%2BfEJXzLKaUnxo%2FFS1G%2FioILTA2B%2BEms19tOPhUYbIaGFQi1h7BLKsneijJzoez0yT6zj9Astjv9lQ8QpR%2B%2Bp3gJwzWnP2svlCHOk%2FQfJTUjAIMv8C0WeBbBoTWklOoG3hSeQKIXIDnUbsLY8TGjiWaw0Vc86yiPOgdJmBgSQxM9rr9guZNq7jurRFk%2BfOYN8Zq3RSNDBdTImDfiX8k2KsbqDvPZwjsY56Xyqbd4D21kj0apnhEYdt2QMOD9NeiLaGxQl%2Fz1ZpeRzsRowCX4hRB5Em26ldKT42GwHFzgCMbFu9CXdoMc%2Ff65L3hgmuUBDVBK8e6iPuWXMN%2FMJQ7v%2BLwYYlSb39Xcw%2FLy8wAY6pgEDlJfq3p%2FEILimNzzJ%2BJQwN50aY5wLYcgyfW3yFYXDpWDl6MIcna9I%2F0C23yLF3s6hNbafzGkycwV34qRDW%2Fcy4ASLHavYOteZlpxCJJ4tD6ghfCpucibfczriLK09f4f42dsy2BdSJ%2FbbBuwDYUfIgjjAJZy2liYboJFSloForv%2Bb9%2FA6REjyPAvELYowG0mIMuAgFkteomMHFDM2B%2FPHB%2BPYU94n&X-Amz-Signature=b3534257adae7add68319e659b51df89dda76240835e6b5513edbfc24ef9c248&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
