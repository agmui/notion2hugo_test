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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBTP4KE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCMZ1YpJ07q0FtkVOsWpo3Cg1ARbY94SPA5WhwBbR2evwIhAObc%2BjH8gUDoCT5rDL9IdbdTElwNjweIh4uLzqBi%2FCe2KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdjWb6dQDK%2BcR2Zn4q3APd5DkU67xdKKWu9q0J5LvqqX%2F9ejQTf5qkm2OV6StN3wcxZdWGdX1iFUejXbA9OiB8o5mRvNfaxD%2Fn%2B5Ssl3YE%2BDAu9cSCmspQCnrFdsO4ZipU3UVMhycuo92R7yahgRHNnZNgdXiTvFdUn3HOpLQYXTo2kzjMWB1E7YYlHFlqINHvcmyG4Di7qeBapDRSiQT6N6Zi280bz%2FFWThOUBAhtE89fXHpU9lWVMDl0Wx4eNIDjLBDkq%2Bz9eU87iG9D75548SS3%2BxX%2Ftp%2Fvm4m6OJkr5IWmNJDzjb6%2BmdJAWbD%2Fo9o61%2FvFJcudvakOEJUm8RLS3d4JWjS742m0RP5MFKdrAQgEffsuCFvh38ltkwhMR%2Fp12ulY9qiizEAFwk5J%2B8iNrxpkguDIuBV8n86fv2HhNnn0vRbHXW9DXbZeLinMi59AYSVJWy%2FugGUbnjOPdTfIhWd0wnB9XcLCNwbT351K2YnSSoctI7iJQAViqAOwxh3baOEvJhpDFyicBqwUGCkmQlVPlJdY%2FDExS5X7s6KKX9dA1nKYcBU3Iu0zwJiX9u9UHXzMyVdOBWS8X87mB7QlzF2ZWDdePiT8NY33nkJIvGkg%2FIxrb7Phj5r9mqh8yKJe0lE%2Bt7ZtInj6zDC7ktnEBjqkASrre7ujisbIR7kpiR2QouXqsDIoGRyoTlzVgFjBBKeQj5zto8QwG3w%2BUDeVBO2W69icDcnp5kW%2BjVQp0CkA2b33F7yYq%2BfNjGUeaIIJaVFDR%2FE2ceRa3SdpbXxgya0PvGWVulyk7tHkTZXstyBocYnN1BKlucVENKCvcXhRC%2FFOBOP8Tlpuu5lAjRVVVD%2F6nZkioLl%2BJMK%2BKO0wD59h1VwYgCxX&X-Amz-Signature=22260b8ab64ac6f5f1555134e38bff2a73993b6f3f24285a38aa00e54993ca24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBTP4KE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCMZ1YpJ07q0FtkVOsWpo3Cg1ARbY94SPA5WhwBbR2evwIhAObc%2BjH8gUDoCT5rDL9IdbdTElwNjweIh4uLzqBi%2FCe2KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdjWb6dQDK%2BcR2Zn4q3APd5DkU67xdKKWu9q0J5LvqqX%2F9ejQTf5qkm2OV6StN3wcxZdWGdX1iFUejXbA9OiB8o5mRvNfaxD%2Fn%2B5Ssl3YE%2BDAu9cSCmspQCnrFdsO4ZipU3UVMhycuo92R7yahgRHNnZNgdXiTvFdUn3HOpLQYXTo2kzjMWB1E7YYlHFlqINHvcmyG4Di7qeBapDRSiQT6N6Zi280bz%2FFWThOUBAhtE89fXHpU9lWVMDl0Wx4eNIDjLBDkq%2Bz9eU87iG9D75548SS3%2BxX%2Ftp%2Fvm4m6OJkr5IWmNJDzjb6%2BmdJAWbD%2Fo9o61%2FvFJcudvakOEJUm8RLS3d4JWjS742m0RP5MFKdrAQgEffsuCFvh38ltkwhMR%2Fp12ulY9qiizEAFwk5J%2B8iNrxpkguDIuBV8n86fv2HhNnn0vRbHXW9DXbZeLinMi59AYSVJWy%2FugGUbnjOPdTfIhWd0wnB9XcLCNwbT351K2YnSSoctI7iJQAViqAOwxh3baOEvJhpDFyicBqwUGCkmQlVPlJdY%2FDExS5X7s6KKX9dA1nKYcBU3Iu0zwJiX9u9UHXzMyVdOBWS8X87mB7QlzF2ZWDdePiT8NY33nkJIvGkg%2FIxrb7Phj5r9mqh8yKJe0lE%2Bt7ZtInj6zDC7ktnEBjqkASrre7ujisbIR7kpiR2QouXqsDIoGRyoTlzVgFjBBKeQj5zto8QwG3w%2BUDeVBO2W69icDcnp5kW%2BjVQp0CkA2b33F7yYq%2BfNjGUeaIIJaVFDR%2FE2ceRa3SdpbXxgya0PvGWVulyk7tHkTZXstyBocYnN1BKlucVENKCvcXhRC%2FFOBOP8Tlpuu5lAjRVVVD%2F6nZkioLl%2BJMK%2BKO0wD59h1VwYgCxX&X-Amz-Signature=986b0b625b0703c40e3aac1d853a905be05c142543a1d6d56bb2515e93abb9fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
