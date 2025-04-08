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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQGHINE%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDDd22OYqdg6seZWpn4sPc9M3m91lomuCZ1i6vIXHXx%2BAIhANNFXsD2%2FdYEF2qkK32IQUmM%2FNA3t%2FiVTu1dbyCfqEU%2FKv8DCHkQABoMNjM3NDIzMTgzODA1IgyA2CmC9Jvt4g%2B60wMq3AMoNzNtz38N6oD7wMFU8YDJuAlmMT7qHXaYbCqPMg5JtOdEJIastvQxjVn8owNm1x%2Fu7mZugI3cxmmu5BjU%2BH9l1uVXjLzgUX4IP%2BPqjWjFoz9w2mLGUyVtmXUaU0pylx2ExEhczHgYhMdKqujHIzBl6K5vbx56fjxFZspDJgm5hNWs9BSW34wOcC360eH%2BrOhZFDN1FRsGyIeDgULc9VSGr1J%2F1QaVEVltutprZYPiMmw40hWKhXUTk00h1eAGdqw8KBGDWHHw1Azo1YHm%2B23%2BEw3PzezGhxLIVBavWYMg0ntz%2B0yXgAdN72%2BOR7AbR6dN2HpGGbGPvM1pddnZIgfoXOrGv1k9og%2BHYWqxHmuUfTBPda98i5ruNOujX6LEyH49gbtmi3QixhdQRYWHF2FSntChEusI3ls0D6MfJcF56I6EzDSNnKxN%2B760s6wO4YsNHVr7dTVblOeZSfkyQJYBRiYaxt0Ilry%2FdRhb%2B6XQuWr1d3J7Pumxcj2ssHViNZccYX6%2BCLLV2rRDkTE%2FF2ATHhUkSfJt4g0LyPKdoO2i49bi74NliQelmIjZOXfQ1pZzbt7Bh%2BFcePx%2F%2F%2FxxnRZUV47fQIeFi3n9zefIiV%2BpTyfEiQY5OnwV%2FIZeXDDlhtW%2FBjqkAYf2AQWUUbQ1IdteU5JXmHsAruN408n45tDjBCCdbl9Xlu2ovBCHYf2cmcJrYiJqECGF9KIi3Gk5JPl3nqVW%2F3JNDFHP50HE8kj%2BEXOfarxGSsyYAcnIkXVSkoSsAbNEb8DIHTvorfFVbvoMzwohAB%2FcT9IsdvdFZ3eBas8v34ZuLZBVQug01lzfLDkTRc0u9ZyYpUALkeUkQ1XhFzMdLEg3OFzn&X-Amz-Signature=ff75e0537c6ae3f02c990df4fe7c2d10bc6555a4867e841bc0315e934cc04abc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQGHINE%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDDd22OYqdg6seZWpn4sPc9M3m91lomuCZ1i6vIXHXx%2BAIhANNFXsD2%2FdYEF2qkK32IQUmM%2FNA3t%2FiVTu1dbyCfqEU%2FKv8DCHkQABoMNjM3NDIzMTgzODA1IgyA2CmC9Jvt4g%2B60wMq3AMoNzNtz38N6oD7wMFU8YDJuAlmMT7qHXaYbCqPMg5JtOdEJIastvQxjVn8owNm1x%2Fu7mZugI3cxmmu5BjU%2BH9l1uVXjLzgUX4IP%2BPqjWjFoz9w2mLGUyVtmXUaU0pylx2ExEhczHgYhMdKqujHIzBl6K5vbx56fjxFZspDJgm5hNWs9BSW34wOcC360eH%2BrOhZFDN1FRsGyIeDgULc9VSGr1J%2F1QaVEVltutprZYPiMmw40hWKhXUTk00h1eAGdqw8KBGDWHHw1Azo1YHm%2B23%2BEw3PzezGhxLIVBavWYMg0ntz%2B0yXgAdN72%2BOR7AbR6dN2HpGGbGPvM1pddnZIgfoXOrGv1k9og%2BHYWqxHmuUfTBPda98i5ruNOujX6LEyH49gbtmi3QixhdQRYWHF2FSntChEusI3ls0D6MfJcF56I6EzDSNnKxN%2B760s6wO4YsNHVr7dTVblOeZSfkyQJYBRiYaxt0Ilry%2FdRhb%2B6XQuWr1d3J7Pumxcj2ssHViNZccYX6%2BCLLV2rRDkTE%2FF2ATHhUkSfJt4g0LyPKdoO2i49bi74NliQelmIjZOXfQ1pZzbt7Bh%2BFcePx%2F%2F%2FxxnRZUV47fQIeFi3n9zefIiV%2BpTyfEiQY5OnwV%2FIZeXDDlhtW%2FBjqkAYf2AQWUUbQ1IdteU5JXmHsAruN408n45tDjBCCdbl9Xlu2ovBCHYf2cmcJrYiJqECGF9KIi3Gk5JPl3nqVW%2F3JNDFHP50HE8kj%2BEXOfarxGSsyYAcnIkXVSkoSsAbNEb8DIHTvorfFVbvoMzwohAB%2FcT9IsdvdFZ3eBas8v34ZuLZBVQug01lzfLDkTRc0u9ZyYpUALkeUkQ1XhFzMdLEg3OFzn&X-Amz-Signature=56049dff21337164b5054e5e667acd9644bfe06437b9879d6d23d7bce5d26176&X-Amz-SignedHeaders=host&x-id=GetObject)

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
