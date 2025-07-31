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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3PNQ7D%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzlmaTS9xcRrcGVgnZI3%2Fh1xb%2Fn8GzNFrcv8TiXjxcCAiBLz9Vi06IA5UXlg%2F3Ggbc5rg0c5ZUPZpDhqnR7bOUyAiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMPoCFc7C%2B7tsZQ1LKtwD31S0UgQawhmpPD7dINvR382%2BG2N8BVd93%2F19WPqEsFY659dcvBFOvrEnoTP9N6QLuOTop3Znw54UHEgUB87ZjBwCZYfP4LCsoBc6BLr0SI4vAVMty5RaEBrJTREo22DeHo0cGcVoAgf82AX5wvvtt%2BIJ5xokJzLv6T0wmvVwLUXucZnn9dV3J2y0v6HtGsSDdEbby4kGos7TYmyzyHE11Z1ZgKoQ7e6%2BjEcjVqGGlJWqOBsiqsia3Qhg6%2BfuNPtjWqyoX4GtwvuveSPn2ZvD41smKv4rHVDVDEoa%2BZlijXxG6zlWJegITfljMq4sW4GjvGWuSlSJdbmI0RsxaVZ2KFwdCWsYkMM5OEucSEu%2BB1DdFSubJv%2B%2B4ZmOaDYCLC1IqxCZFMIpWykm8beKOCVO7NKCEYt82o%2B%2Fze35wWYHiTyuWJcC4Cr8y22aMnXb8YklSZx6Fj5hkh9dBrhI01CJsUNNEf1zMHRXDI0sX4KwjAoXDp2aziatOPBq6zsf%2FRV4hphQAFoEmhKV6rLfARcr7HkB8eXG4OXKFuiOAmzas7ZXjDGI7UDkyo9qAxwIg%2Bm5Xf6GvQsXFMhQ9scXA9W7h5SpD7%2FNKLB53z%2BpNURMSSCpE5yp71vrUaKezBswnc2vxAY6pgFuW%2Fppb1qACP9PXU7dhTYWuiYY8GtYHfpadeZYDDxb%2FQsmfe4TYnOxYyE2Vd1XRvSfv5ll8nm1SPSPfTaohjQuePiLJkNs4vHaLm27A6vTDaC9hPpzFE7cWzIpWdTfn%2BxzLvEDkqZOVviekWCVpDzPwQQZn1AQQHC7ELVkM3YnFVuLHBA009x4YjT%2BE%2F6p%2FS%2Fez0jfJk4d1aIZP6%2BGj33Ilv9maFDp&X-Amz-Signature=b417deabf8e9f8a9612eecd3bded81f20f5151183cb0182923aba10c1d22f951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3PNQ7D%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzlmaTS9xcRrcGVgnZI3%2Fh1xb%2Fn8GzNFrcv8TiXjxcCAiBLz9Vi06IA5UXlg%2F3Ggbc5rg0c5ZUPZpDhqnR7bOUyAiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMPoCFc7C%2B7tsZQ1LKtwD31S0UgQawhmpPD7dINvR382%2BG2N8BVd93%2F19WPqEsFY659dcvBFOvrEnoTP9N6QLuOTop3Znw54UHEgUB87ZjBwCZYfP4LCsoBc6BLr0SI4vAVMty5RaEBrJTREo22DeHo0cGcVoAgf82AX5wvvtt%2BIJ5xokJzLv6T0wmvVwLUXucZnn9dV3J2y0v6HtGsSDdEbby4kGos7TYmyzyHE11Z1ZgKoQ7e6%2BjEcjVqGGlJWqOBsiqsia3Qhg6%2BfuNPtjWqyoX4GtwvuveSPn2ZvD41smKv4rHVDVDEoa%2BZlijXxG6zlWJegITfljMq4sW4GjvGWuSlSJdbmI0RsxaVZ2KFwdCWsYkMM5OEucSEu%2BB1DdFSubJv%2B%2B4ZmOaDYCLC1IqxCZFMIpWykm8beKOCVO7NKCEYt82o%2B%2Fze35wWYHiTyuWJcC4Cr8y22aMnXb8YklSZx6Fj5hkh9dBrhI01CJsUNNEf1zMHRXDI0sX4KwjAoXDp2aziatOPBq6zsf%2FRV4hphQAFoEmhKV6rLfARcr7HkB8eXG4OXKFuiOAmzas7ZXjDGI7UDkyo9qAxwIg%2Bm5Xf6GvQsXFMhQ9scXA9W7h5SpD7%2FNKLB53z%2BpNURMSSCpE5yp71vrUaKezBswnc2vxAY6pgFuW%2Fppb1qACP9PXU7dhTYWuiYY8GtYHfpadeZYDDxb%2FQsmfe4TYnOxYyE2Vd1XRvSfv5ll8nm1SPSPfTaohjQuePiLJkNs4vHaLm27A6vTDaC9hPpzFE7cWzIpWdTfn%2BxzLvEDkqZOVviekWCVpDzPwQQZn1AQQHC7ELVkM3YnFVuLHBA009x4YjT%2BE%2F6p%2FS%2Fez0jfJk4d1aIZP6%2BGj33Ilv9maFDp&X-Amz-Signature=6d44c942f7ab1bb3d3e0079402589a179fa554de27b03e4720ad3a45c5e7e39c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
