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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ7LPQCS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCR1iE%2FtKSu%2B4qLAh6qkcfbpqjjGWNGrJ%2BpKbE0V%2FAWaAIhAK5ScCuRBv9e%2B9Ip6S4ULaGmb0Lr190j%2Bl1z3QG2r6yeKv8DCHkQABoMNjM3NDIzMTgzODA1IgxC63AhyR7xjtqXzakq3AOgO5wao%2Bnul7zHLKOpqoXerNm%2BHfuXXmN4ZvUBySL%2B7djtm5F5274PnQXPraTGSttnOdswOciyCKfw19J4fW1m4kKujNvxTfpXTCg3RSz1W7nkoY%2BXit6NGRGV3lP0mxY%2FH4MG8Rqev%2BOojYIhmkY4qhKb9qdx7tzWu2ySrXy7oDAYV1Phg5pH3eqzO%2BhScWxfTSvOqRewO3OkHBBzB3s9orkWLwF9M8PnFe0iIMsBp4paa7O%2FvUmHBEnzgP1YVwvuLj9pw8dbE4x4EJGqnCt2WMJqeispOR1ot95hWbBw5EVKtdGLn%2Fspj9uPwHl5A6ITsrc6C8vaXA8bf4hfTNuSRpvQi8kfgAoxewrZJqIcN4ObbqTvgg%2B4qHTpvULLBz6ZsDisqs5t4Di4Yv6BXSHnc0H1mgIrORkz5683oUr0BhmC0LmsHlID%2B%2BmXomr4Q73C3FUE7NBSDvssQncNJ0AVH5QUbBDYjwea4pLet2RbwzfgUYMBhlUIoq6YE4seqRT17yKtOvKjg2haRvV%2BsE%2BWmbav%2F2qPy1KcIUDjfBD8svfVCLBDFN3%2FHbLK6LeVJ39MBJ2kTMrZyIBauLhxAMOBW7bLgcO2Iypctq59y2lxnSeuJZR14BWSVMGIkzCMjYK%2BBjqkAedLcEYO6wBFjfcvtnXqlQybhAAKzg9pMocLO%2BQJeQAWHuYTvqxfePNo1e1x%2BrLIsEHhSLYFApgsXTMv29wp9uz2KAuNSrppQpK3MtlyWJiEVhmJcsG4ngz4%2B%2F0FX%2BlM2p301tjCnnYOzzVA4YCTyhA3qffY3wxeu8iVofqXMf7lJAvD4fXPTCeDr4qJ07o3eiToySILz%2FDPDxpMAC2sn7m8p6C3&X-Amz-Signature=c3377551348fd21320a7cafaee243459e1226e542e27cfc63c006f85485622f6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ7LPQCS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCR1iE%2FtKSu%2B4qLAh6qkcfbpqjjGWNGrJ%2BpKbE0V%2FAWaAIhAK5ScCuRBv9e%2B9Ip6S4ULaGmb0Lr190j%2Bl1z3QG2r6yeKv8DCHkQABoMNjM3NDIzMTgzODA1IgxC63AhyR7xjtqXzakq3AOgO5wao%2Bnul7zHLKOpqoXerNm%2BHfuXXmN4ZvUBySL%2B7djtm5F5274PnQXPraTGSttnOdswOciyCKfw19J4fW1m4kKujNvxTfpXTCg3RSz1W7nkoY%2BXit6NGRGV3lP0mxY%2FH4MG8Rqev%2BOojYIhmkY4qhKb9qdx7tzWu2ySrXy7oDAYV1Phg5pH3eqzO%2BhScWxfTSvOqRewO3OkHBBzB3s9orkWLwF9M8PnFe0iIMsBp4paa7O%2FvUmHBEnzgP1YVwvuLj9pw8dbE4x4EJGqnCt2WMJqeispOR1ot95hWbBw5EVKtdGLn%2Fspj9uPwHl5A6ITsrc6C8vaXA8bf4hfTNuSRpvQi8kfgAoxewrZJqIcN4ObbqTvgg%2B4qHTpvULLBz6ZsDisqs5t4Di4Yv6BXSHnc0H1mgIrORkz5683oUr0BhmC0LmsHlID%2B%2BmXomr4Q73C3FUE7NBSDvssQncNJ0AVH5QUbBDYjwea4pLet2RbwzfgUYMBhlUIoq6YE4seqRT17yKtOvKjg2haRvV%2BsE%2BWmbav%2F2qPy1KcIUDjfBD8svfVCLBDFN3%2FHbLK6LeVJ39MBJ2kTMrZyIBauLhxAMOBW7bLgcO2Iypctq59y2lxnSeuJZR14BWSVMGIkzCMjYK%2BBjqkAedLcEYO6wBFjfcvtnXqlQybhAAKzg9pMocLO%2BQJeQAWHuYTvqxfePNo1e1x%2BrLIsEHhSLYFApgsXTMv29wp9uz2KAuNSrppQpK3MtlyWJiEVhmJcsG4ngz4%2B%2F0FX%2BlM2p301tjCnnYOzzVA4YCTyhA3qffY3wxeu8iVofqXMf7lJAvD4fXPTCeDr4qJ07o3eiToySILz%2FDPDxpMAC2sn7m8p6C3&X-Amz-Signature=5d1891a0f8e0c5511750844c23b16f3d7942517c3b78d4f17206e6d3cac4c1a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
