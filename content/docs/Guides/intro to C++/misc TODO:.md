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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSU6ODA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCnEepLJ2kgpxBB%2BbYu75kvDF7N269Adf3B1qt6e8U80AIhAMXL8WQWcDWjN4DtYNN6tCLArLVZPdw1Jmwjcy6v0cU2KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYCVjjAHLy5AkLiwEq3AOzyrCCyjNwFKEdUpBIXSSeZIMPGDEBo%2BWTKjTJqjhKNZUB2OGoFcUtxf4W7OfTybLpe8lLEgcXBx858%2FRsPe1AzIRSqFyEqHyTLGtL2zHPil%2FE76rk%2F06%2BXeYB9Wwt71lZXTe7ef0IBGDUzSl1ehHlch%2FodU0BOfjNY8J%2F1Wos4DdPFv4HcTwS%2FqWvqrm%2FG8vKYyNuWqXIVbejvL8iAkYyMifudAAPjG4WvfLHiqYWLQFHGLHZDo%2FHv%2B9q2oX2183%2FzVM7NU8Auv6rEYvQ20tLY5NNiXzHoV0Gsyc6%2FHywauOAvclNZvyrc%2BOwPlT4%2BOYPq%2BQ37VtxW5KlUHO9lcNPkzrZRxc2bi2ZPldqzupyc%2FENwc3C9OKDPTS7typsvK5dwjdvbTnt6bvMtPRkfJy16SffXSpKC%2BVgH%2FuibsA4hz490Xy9HHPwK9qQa12nyVoiGN7%2FsU%2FIBaPrMuIaL8e%2BkZwyXafJbpxsO7mVjq%2FrYGEiwwj8gUrgPfBO8WZTZ%2BPjcDDv%2B57N269Yxu4%2BcMOSUjjTnInon5cOkjpM9ycaju%2BJ%2F8zdQFWoDZwbKZzdrX7AZcBsWzrgV6BBTUN%2BDjaTsP8Mh%2FUr5v%2FC8NDw5W1JY2N%2B592gdCPejufYszDh68C%2BBjqkASiRBTq4tY7LiiDcN3JWStgGEtljRJaxNSCj5wyiL0Xrx0%2FcQa7jzKff08Ut9XWMnmYIvzzw%2FT5NRsxwz%2BXun%2Bu%2Fn%2FLZPltUelxb3w1aDagB7PY%2BwRCqwlFvGKv%2BZ7IG3MjcSbZrSCoNA%2BY8bRcKadCKb8HOgtBbHMAcvJd1d7dFKlAJSTB5iiz8bOwF0X%2Fe2Q1Logsln704AMjFSBwXqUPeV4v4&X-Amz-Signature=2b8facee3988285df6f23d41e3d6456a6a7d1adcd6da00c2502df02661e53bb2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSU6ODA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCnEepLJ2kgpxBB%2BbYu75kvDF7N269Adf3B1qt6e8U80AIhAMXL8WQWcDWjN4DtYNN6tCLArLVZPdw1Jmwjcy6v0cU2KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYCVjjAHLy5AkLiwEq3AOzyrCCyjNwFKEdUpBIXSSeZIMPGDEBo%2BWTKjTJqjhKNZUB2OGoFcUtxf4W7OfTybLpe8lLEgcXBx858%2FRsPe1AzIRSqFyEqHyTLGtL2zHPil%2FE76rk%2F06%2BXeYB9Wwt71lZXTe7ef0IBGDUzSl1ehHlch%2FodU0BOfjNY8J%2F1Wos4DdPFv4HcTwS%2FqWvqrm%2FG8vKYyNuWqXIVbejvL8iAkYyMifudAAPjG4WvfLHiqYWLQFHGLHZDo%2FHv%2B9q2oX2183%2FzVM7NU8Auv6rEYvQ20tLY5NNiXzHoV0Gsyc6%2FHywauOAvclNZvyrc%2BOwPlT4%2BOYPq%2BQ37VtxW5KlUHO9lcNPkzrZRxc2bi2ZPldqzupyc%2FENwc3C9OKDPTS7typsvK5dwjdvbTnt6bvMtPRkfJy16SffXSpKC%2BVgH%2FuibsA4hz490Xy9HHPwK9qQa12nyVoiGN7%2FsU%2FIBaPrMuIaL8e%2BkZwyXafJbpxsO7mVjq%2FrYGEiwwj8gUrgPfBO8WZTZ%2BPjcDDv%2B57N269Yxu4%2BcMOSUjjTnInon5cOkjpM9ycaju%2BJ%2F8zdQFWoDZwbKZzdrX7AZcBsWzrgV6BBTUN%2BDjaTsP8Mh%2FUr5v%2FC8NDw5W1JY2N%2B592gdCPejufYszDh68C%2BBjqkASiRBTq4tY7LiiDcN3JWStgGEtljRJaxNSCj5wyiL0Xrx0%2FcQa7jzKff08Ut9XWMnmYIvzzw%2FT5NRsxwz%2BXun%2Bu%2Fn%2FLZPltUelxb3w1aDagB7PY%2BwRCqwlFvGKv%2BZ7IG3MjcSbZrSCoNA%2BY8bRcKadCKb8HOgtBbHMAcvJd1d7dFKlAJSTB5iiz8bOwF0X%2Fe2Q1Logsln704AMjFSBwXqUPeV4v4&X-Amz-Signature=52771372cc91c8a5d7cf57122c64ad4b6268f4880953d98be11b396ac72bd815&X-Amz-SignedHeaders=host&x-id=GetObject)

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
