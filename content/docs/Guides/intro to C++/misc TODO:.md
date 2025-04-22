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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626DUOIXL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC3MX5vJBvjpvWqrErYri64Jzk7DC9Lvyrpw%2FjywznPXQIhAIA6z8EJYCZ71m%2F1o96vOcBfcuKrSqE%2BrKcKypRVWTrDKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FrRACqPyEYowYDYoq3AO%2BVaAk%2Flv%2FNxJTndGBoAwTvBkHK0QjUwasWcb2AzIooRpGhBXGuU6Rnf%2Fdho1ADyQVFnwgkQgW1FRwXCXi5vruh67P2%2FZirxsqyPtZFeS7oM6JlrDRS1MyC%2FBgp5zyonJDIGCdySl2nbE0dFzDn61NG5zbtZfRY1VhPEMAccKPBYorpxtk6dS5ZBJbcjvsK%2Fe02bskMAqgHvYVRy4bZs7zQQ%2BDPVyzRGmmpLhUM6bea21kuplCs7JRoNfWH%2FBire3hjr7axAQCnV7ElPzPGsEj%2Bc0nGwhEKg%2FSKCYM2ru1aewcVHxmOBW7dZOQSeVidbQlr4UuIiz8JsSQ%2BptBV2EBGX8c9YwK5nsZaSpyQGdbQq4FBt0vC1lFUXPmv9ep1IH9aceedfN5L92WbL0NP20yv4%2BLhLiOgP1LdfcyBiK3fDoIZGUeVJaKemzyf%2B%2FCRuQRIiKL4%2FrBhRQdxYJSGZafrpgmjhtpZu2PWiXuXLVWcbq6%2FDAsXgklEEqFalIOsWZlljxfAv5k7E0v0UuXREZ0PCHMN0bStbDyzUnwI8yT8PkswELDTe64iGozbB1F6cXyiZ6u%2B4YuVLdTFL8dq0vWDkh66EUbFHndQ4fx6wC03C0EYv5BWVeqQx87zTD8up%2FABjqkAbdHO9I5OiYJS%2B4Wa32jDymRD1H5d%2BApBG9nHY9ezek%2FZxZCsVEGBnzv3tZnvQU5L%2BsQeppPz92kwtOnnD9feUzeqdDrSmFhjlbo8J4FfQdaRFmipEZcAiu2s%2Bj7pHJAz6CoQUXZ85aVASNMEa2cguVi7nM9ZQewfDSM7qiLxPeOeW%2BZTHqbfKDhO57HCFqwdVW6YGBJziStU1y26DLjvhiKAJ9S&X-Amz-Signature=d4f1e03f9cd5a8e274ebcf6c4cd2ee6147ca080d8dabd32153d544eded58b865&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626DUOIXL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC3MX5vJBvjpvWqrErYri64Jzk7DC9Lvyrpw%2FjywznPXQIhAIA6z8EJYCZ71m%2F1o96vOcBfcuKrSqE%2BrKcKypRVWTrDKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FrRACqPyEYowYDYoq3AO%2BVaAk%2Flv%2FNxJTndGBoAwTvBkHK0QjUwasWcb2AzIooRpGhBXGuU6Rnf%2Fdho1ADyQVFnwgkQgW1FRwXCXi5vruh67P2%2FZirxsqyPtZFeS7oM6JlrDRS1MyC%2FBgp5zyonJDIGCdySl2nbE0dFzDn61NG5zbtZfRY1VhPEMAccKPBYorpxtk6dS5ZBJbcjvsK%2Fe02bskMAqgHvYVRy4bZs7zQQ%2BDPVyzRGmmpLhUM6bea21kuplCs7JRoNfWH%2FBire3hjr7axAQCnV7ElPzPGsEj%2Bc0nGwhEKg%2FSKCYM2ru1aewcVHxmOBW7dZOQSeVidbQlr4UuIiz8JsSQ%2BptBV2EBGX8c9YwK5nsZaSpyQGdbQq4FBt0vC1lFUXPmv9ep1IH9aceedfN5L92WbL0NP20yv4%2BLhLiOgP1LdfcyBiK3fDoIZGUeVJaKemzyf%2B%2FCRuQRIiKL4%2FrBhRQdxYJSGZafrpgmjhtpZu2PWiXuXLVWcbq6%2FDAsXgklEEqFalIOsWZlljxfAv5k7E0v0UuXREZ0PCHMN0bStbDyzUnwI8yT8PkswELDTe64iGozbB1F6cXyiZ6u%2B4YuVLdTFL8dq0vWDkh66EUbFHndQ4fx6wC03C0EYv5BWVeqQx87zTD8up%2FABjqkAbdHO9I5OiYJS%2B4Wa32jDymRD1H5d%2BApBG9nHY9ezek%2FZxZCsVEGBnzv3tZnvQU5L%2BsQeppPz92kwtOnnD9feUzeqdDrSmFhjlbo8J4FfQdaRFmipEZcAiu2s%2Bj7pHJAz6CoQUXZ85aVASNMEa2cguVi7nM9ZQewfDSM7qiLxPeOeW%2BZTHqbfKDhO57HCFqwdVW6YGBJziStU1y26DLjvhiKAJ9S&X-Amz-Signature=635f4171f89ca6ace93498a70ec4a73a7533a848c82afc63e0966700808791df&X-Amz-SignedHeaders=host&x-id=GetObject)

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
