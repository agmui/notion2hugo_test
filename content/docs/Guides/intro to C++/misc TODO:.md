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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXF4MGG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi58i3Oo2sf5awrYr%2FQJMdRO6X342mzZjTKziDf4q%2FiQIhAN4Uq0vOGE%2FV1Y%2FwWghbz9PPBf479Kv4ZeFWayLJRWyJKv8DCFgQABoMNjM3NDIzMTgzODA1Igx2C3I4cxfq16vSHJAq3AOhoUK8mahBv5E%2Fp10PLxNme65XUAIM%2BiZNlR%2FnfgOje%2FswynK3NUFPIRGLadXMll9fZj0lBPDt3zXBJevXuGbWhQmklQ9fu6IjlFLB74aihjnCPdwFS28%2BKk32rTD9iBs4IwT9Bia1dvjE9YOnr6z1FQeWDV9kA6OijR%2BXNJBzbYcJN%2FsrhkfxcIdqewnoRiJjTmcpkhgkYMR%2BAfl3HPZbRUbkRXvQ0SamXqZga0KBSHmA75v52bJRt5UIyw%2BnRmeXR3RFHLg17NjyDg1piNLNuS4CtY4GLVGBmSbby92gLGwoCmLU69r2Z1pgnlNAzvPe9BRyw%2Feiaf0ne1jf5sSNg63PWK4GB%2Bc1CGEtvvyEsIJDTkaQfNBXHrWZlRI3arHri81n7ZSPFYXA25p6DOQKIQZhVuQT2g0u9hqf%2BAcNUEkjw0k%2BgOyr1ZDUHoCFpj%2FAgUcN%2BemvdxvX2TOjaIy5e1gmVXGAyY2uFee2U8kHK8AGiT5K6Y4e0Qxk%2FULG4OE0fyHlSOE9k0vCi5AEVFcEbEHpMU3X%2B0PFEPp2YBrjGMQJUSIh82zkfFUY30Dxg6Y9gyYp%2B5f9IT4%2FbNOzSpy7QMLmR1zbQs7Cmm7tHz1Ch%2B8UGFA7dfc%2BaNBEzTDSsLfABjqkAWjNOLJ%2F9vXGWC60oTIlEeaG9suOreZ5KSHRCpLejGmNkk5gDXWXzQCzREH8u9t1%2FS6sEQ%2BTIZwjkFf%2FlO3fClP7PbV%2FcKs%2BXYxJJYheJus4gtTYwGjkyjFe1mwYDgEgJC7AL2%2BtkrSh1S%2Br5NJ9GAAV1QhySKQo%2FCXVRn9DWfRF9r21ISTKWp2UPwCmmDtgZ61T60UxrV8qXXmtSXTMV3tJJwnV&X-Amz-Signature=5b0626a065c4c792ece3b0b45f581150ad071c9cbcd0e6d0bdf3141227583112&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXF4MGG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi58i3Oo2sf5awrYr%2FQJMdRO6X342mzZjTKziDf4q%2FiQIhAN4Uq0vOGE%2FV1Y%2FwWghbz9PPBf479Kv4ZeFWayLJRWyJKv8DCFgQABoMNjM3NDIzMTgzODA1Igx2C3I4cxfq16vSHJAq3AOhoUK8mahBv5E%2Fp10PLxNme65XUAIM%2BiZNlR%2FnfgOje%2FswynK3NUFPIRGLadXMll9fZj0lBPDt3zXBJevXuGbWhQmklQ9fu6IjlFLB74aihjnCPdwFS28%2BKk32rTD9iBs4IwT9Bia1dvjE9YOnr6z1FQeWDV9kA6OijR%2BXNJBzbYcJN%2FsrhkfxcIdqewnoRiJjTmcpkhgkYMR%2BAfl3HPZbRUbkRXvQ0SamXqZga0KBSHmA75v52bJRt5UIyw%2BnRmeXR3RFHLg17NjyDg1piNLNuS4CtY4GLVGBmSbby92gLGwoCmLU69r2Z1pgnlNAzvPe9BRyw%2Feiaf0ne1jf5sSNg63PWK4GB%2Bc1CGEtvvyEsIJDTkaQfNBXHrWZlRI3arHri81n7ZSPFYXA25p6DOQKIQZhVuQT2g0u9hqf%2BAcNUEkjw0k%2BgOyr1ZDUHoCFpj%2FAgUcN%2BemvdxvX2TOjaIy5e1gmVXGAyY2uFee2U8kHK8AGiT5K6Y4e0Qxk%2FULG4OE0fyHlSOE9k0vCi5AEVFcEbEHpMU3X%2B0PFEPp2YBrjGMQJUSIh82zkfFUY30Dxg6Y9gyYp%2B5f9IT4%2FbNOzSpy7QMLmR1zbQs7Cmm7tHz1Ch%2B8UGFA7dfc%2BaNBEzTDSsLfABjqkAWjNOLJ%2F9vXGWC60oTIlEeaG9suOreZ5KSHRCpLejGmNkk5gDXWXzQCzREH8u9t1%2FS6sEQ%2BTIZwjkFf%2FlO3fClP7PbV%2FcKs%2BXYxJJYheJus4gtTYwGjkyjFe1mwYDgEgJC7AL2%2BtkrSh1S%2Br5NJ9GAAV1QhySKQo%2FCXVRn9DWfRF9r21ISTKWp2UPwCmmDtgZ61T60UxrV8qXXmtSXTMV3tJJwnV&X-Amz-Signature=af6f0084a3b1614bd0f582a13916c03db596c4981a333451441ac0d544d1cff6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
