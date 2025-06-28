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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WKI6L5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDH1GAb8eV41aUSw0PmRN3EeGCmVjLZaNGh5LhylFXLbAiEAmVb69sZoDAaPUtsdWDb37OCILkTylH4Ta5WHfPZA4vYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1%2B0FSO%2FTQm05eTTSrcA95qPM1Xf1uuwVwgvL7%2FzI7V0ZkFoUPh0GpverPAY47Ykn%2BIKwKa14kQ6vT2hZ28YpBa41tO3RGMNte2VW830UXy75CN52L%2BEN3iViJ7n4HBEH754vMPBu7Rj1yZHmjHuXS5dsyeU4Nn4XpsyYYzW4QA3i3OksRzK42wejqW1pgy9Vo12C7wEA3EcbkbeO6bXKAcgIs04X57sy7oOJC%2Bq30gCIb3OTLtwaLWWlQfHqqSB65yEI%2BgWxJB92hvCiDGuYsfT1SQhXyu5hZRW5qYAdp4jTkLNHDQuVex8P7E63pfl1vQJTZL6zGvQ0yNF59N3tUm%2BpPdj1ZgRqjjogrTtOKcpzpQ%2BgnOuuKJxcKJN%2FrBXbBJQD0JjgNJipnJxUgh71o4TyenwseiLF559dtbdIb7YHGLdskudvFopDKPi8FGLsnzmGAHuqc6vsM2pWYNRQ56nuSnk6XWROI5SUOiYnIZEraHck5%2B9T49d2cBzs1XvlddrqKKE8x3TqzovI4M9sB7LC6Y9p63X3uI3GBA1wSBG5CTHtRiho5rYs8R297IEbZMn1Ub39WB0JNQbRq0AHhZHT1xCfAj1Qmxd88ysBzTBkifMxjxn88im%2BVMomJYWk9oAVeXGkIp3PP7MIDS%2FcIGOqUBBz7tGad1yiGcYUvpV476lvjLfxflNx0pzbdw46mSLTxlbxm7Be0xui7ytKDyH1f%2FzUQI5hlFu0X%2BUUHMcXWLJ4ZVkeBiS0ITosQZZCGtwo2KgwallvfOGSwlPBzNT4rW%2BC82lDIWZ%2Bnash59utVRUwfXSyO9DZsDwn3QrYhl7bs88M7fWKXLVABr054rm4o1RGCr3eO3DwKhDgESPaq2%2F%2BeQ8kiN&X-Amz-Signature=342f4c01bd8ba517f235f9c596efb5aae32c0e8ee238f3612f11ca762e8432c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WKI6L5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDH1GAb8eV41aUSw0PmRN3EeGCmVjLZaNGh5LhylFXLbAiEAmVb69sZoDAaPUtsdWDb37OCILkTylH4Ta5WHfPZA4vYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1%2B0FSO%2FTQm05eTTSrcA95qPM1Xf1uuwVwgvL7%2FzI7V0ZkFoUPh0GpverPAY47Ykn%2BIKwKa14kQ6vT2hZ28YpBa41tO3RGMNte2VW830UXy75CN52L%2BEN3iViJ7n4HBEH754vMPBu7Rj1yZHmjHuXS5dsyeU4Nn4XpsyYYzW4QA3i3OksRzK42wejqW1pgy9Vo12C7wEA3EcbkbeO6bXKAcgIs04X57sy7oOJC%2Bq30gCIb3OTLtwaLWWlQfHqqSB65yEI%2BgWxJB92hvCiDGuYsfT1SQhXyu5hZRW5qYAdp4jTkLNHDQuVex8P7E63pfl1vQJTZL6zGvQ0yNF59N3tUm%2BpPdj1ZgRqjjogrTtOKcpzpQ%2BgnOuuKJxcKJN%2FrBXbBJQD0JjgNJipnJxUgh71o4TyenwseiLF559dtbdIb7YHGLdskudvFopDKPi8FGLsnzmGAHuqc6vsM2pWYNRQ56nuSnk6XWROI5SUOiYnIZEraHck5%2B9T49d2cBzs1XvlddrqKKE8x3TqzovI4M9sB7LC6Y9p63X3uI3GBA1wSBG5CTHtRiho5rYs8R297IEbZMn1Ub39WB0JNQbRq0AHhZHT1xCfAj1Qmxd88ysBzTBkifMxjxn88im%2BVMomJYWk9oAVeXGkIp3PP7MIDS%2FcIGOqUBBz7tGad1yiGcYUvpV476lvjLfxflNx0pzbdw46mSLTxlbxm7Be0xui7ytKDyH1f%2FzUQI5hlFu0X%2BUUHMcXWLJ4ZVkeBiS0ITosQZZCGtwo2KgwallvfOGSwlPBzNT4rW%2BC82lDIWZ%2Bnash59utVRUwfXSyO9DZsDwn3QrYhl7bs88M7fWKXLVABr054rm4o1RGCr3eO3DwKhDgESPaq2%2F%2BeQ8kiN&X-Amz-Signature=d40b4f623fc43566101bef5972ecdc5edfef87dc534f6897a36dccf8c499bef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
