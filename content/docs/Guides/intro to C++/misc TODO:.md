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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4N6ZB6A%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHWCdcA8G8K7fIsRqAf88E%2BqBFjJZHQjoUZ%2FATGn7cqnAiA5aM%2Bf%2BHlaLjRFJoc3MzzlZOslwWuRQrjvOfuhegi71ir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMFBXmM7nxSNxL3D4iKtwDUjtUoscQF%2FdkmhmbogvSlBYumHlyEU0ebRpf7Qy2YwO1%2Br5Dt1D08q%2BSrqgj1gt0gULm1vR2I7jq9aOijujSVkYkUZ3%2FFHMRCiEj8M%2Fwi%2FM%2FNIt4ylXn7wTc5ryia1Km6LyCjilwIq8uLXTceCX2X7lAn8pvbH0kxgPqBBwrqAj15nTOzgoxVaePUDiiFQ6TA60bfIq0488EJKpq8ctCEk9tjZORfIZburlKqAG4JTVkNrgCLo8iPH5ZkyLBVtXImZLWOEBZHkvn04AXJVugE81DYopgaTW%2B0Ppx8t6ZOuSyBM735YQXv9uNa9bVjo5ByAVlWiN9L2FgcxMrI9w8E0EeYJOQjGaivsXlhtIA2mmFazPKDawpwGKxuKZvdcBbs5o6XuCdosCmqqNy9wBX41E%2Bk37VS%2Bpn6xBwf%2BZRv6dAYQHApzTcpqNDmzPDHLthb4pWrHkzAvz1t%2FYc0GF4jJwLObHdCZiJN8VCej9Dp8wXKsBeCGSVF4WPZM5h3JhSklsPQYxCFlkHmTbvOTVONon%2B2%2BCVuhNG9hLR75eOaQbKQR2kGMVVCPgv68nvuAoEPcFxokPCuseNq1dbhKE2VpuwRrw2YGgA86QniMuPCSNSwxeeyh2hFnAXdewwucKkwwY6pgFmbvmMG2ik367uiOtWkEoJhHRy8iN39yjcrqyY7EjNzDB42klOUGWCUo7Tj3eYaR1QT8dFFvJPNPwXxHiL%2BZdnSZEguQqkEoZHW61elroT%2BHJN82R5U5vj92HYiFR%2FyBc%2FezZrjFdcrudgSGGfgHouoHD%2Fa51FNoRZBdbaO25A2AQ%2F12RhK51kXe%2BiO46x2fap5%2B52IKeLF3Dsn6fO7TMVmbm%2BSUSb&X-Amz-Signature=748c9fae268aeb035816940ba473d8b956e0ad52b4593fd47830e659c754f162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4N6ZB6A%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHWCdcA8G8K7fIsRqAf88E%2BqBFjJZHQjoUZ%2FATGn7cqnAiA5aM%2Bf%2BHlaLjRFJoc3MzzlZOslwWuRQrjvOfuhegi71ir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMFBXmM7nxSNxL3D4iKtwDUjtUoscQF%2FdkmhmbogvSlBYumHlyEU0ebRpf7Qy2YwO1%2Br5Dt1D08q%2BSrqgj1gt0gULm1vR2I7jq9aOijujSVkYkUZ3%2FFHMRCiEj8M%2Fwi%2FM%2FNIt4ylXn7wTc5ryia1Km6LyCjilwIq8uLXTceCX2X7lAn8pvbH0kxgPqBBwrqAj15nTOzgoxVaePUDiiFQ6TA60bfIq0488EJKpq8ctCEk9tjZORfIZburlKqAG4JTVkNrgCLo8iPH5ZkyLBVtXImZLWOEBZHkvn04AXJVugE81DYopgaTW%2B0Ppx8t6ZOuSyBM735YQXv9uNa9bVjo5ByAVlWiN9L2FgcxMrI9w8E0EeYJOQjGaivsXlhtIA2mmFazPKDawpwGKxuKZvdcBbs5o6XuCdosCmqqNy9wBX41E%2Bk37VS%2Bpn6xBwf%2BZRv6dAYQHApzTcpqNDmzPDHLthb4pWrHkzAvz1t%2FYc0GF4jJwLObHdCZiJN8VCej9Dp8wXKsBeCGSVF4WPZM5h3JhSklsPQYxCFlkHmTbvOTVONon%2B2%2BCVuhNG9hLR75eOaQbKQR2kGMVVCPgv68nvuAoEPcFxokPCuseNq1dbhKE2VpuwRrw2YGgA86QniMuPCSNSwxeeyh2hFnAXdewwucKkwwY6pgFmbvmMG2ik367uiOtWkEoJhHRy8iN39yjcrqyY7EjNzDB42klOUGWCUo7Tj3eYaR1QT8dFFvJPNPwXxHiL%2BZdnSZEguQqkEoZHW61elroT%2BHJN82R5U5vj92HYiFR%2FyBc%2FezZrjFdcrudgSGGfgHouoHD%2Fa51FNoRZBdbaO25A2AQ%2F12RhK51kXe%2BiO46x2fap5%2B52IKeLF3Dsn6fO7TMVmbm%2BSUSb&X-Amz-Signature=57f7b8a815a6c79cd6037ac747cbce1dfc6e16247e5af23f2849f734a5d1fc1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
