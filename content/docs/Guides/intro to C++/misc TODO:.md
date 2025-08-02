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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBGKK66%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL%2FCqTztS7eoVLwHJsj9EQV5snOGFDWrwm8L6GM6rrJAiEAxOEnhD7%2BB4C7tp%2Fh0uYtJ28rVm1sbAOh4k4qd0eUH2Iq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDPm0J9DSlnMtNz6cQyrcA9L43z6bE%2B0GBMBF2oX%2BbuY%2B2AARGLqnWv8c0xyESH8nTU4OQeCl7eVphkH7x7rn4GL9ottURRTY1dBanAz5%2FgQEM9UN4AXLw56R8OiNRWaE%2FmlKBiFM7Un8BUBnj3JtBnkkUj9ZZcizq%2FUpspuUDIqiUSll8GToWYtCGQnnXWBCZZWyTxfHMAnuwoXIDvVIdPFRIaKYs01Lha54Cg5sAbXYPYMoXrO8aRf0PtBccpQBzvX1SoO%2BsbwUTqC0wZjWIZ4MDJNFBTmvOsSwYpONntUcoUqjPxJhNqn%2BMROlv6R0TrCkgJ%2FIlZBLjiImvHZqia6Nnqza3KdkDly9ioGwMjWJr9AwAMcwkt0hfOPBfOK3%2BJ4MwG%2FXyK%2Fo%2B9LeXH3g7XfpxUeed8WB1nTN3NIHICRK6JqwrB6KofYaIc0QMljLmoOsoOMF4eT%2FDKrqEZK3pyhAXM0LrODtsmZOi%2FW%2F7PIxhPcUUMaFJGJzwp%2Bw3BWd7PabPZ%2BZfX9H1WCXBoD5iHPzN1Da5DdRIOloJX27ewM6d1kyU5v%2BSPlYZj7UbgyfaSnNYwdEB1kC7wMb3TAYeztxXj3TX8eQV%2BHAaZeD1Ui4EFuuS5gKiMwe1dNo%2BG8wnagzdSvz7syFMNy%2FMKGBusQGOqUBKTGlu4JmHIDq0ByzIcu6sRCKElU5jBGDQmWtzxm6QjtlO39H%2BcdRVMT5SkT17ia4L%2BK4srBp7DDaYJ%2FsPVyKknYYnZALyCHv1M95bESMUoN4ZWmKdOzBbB6AwexwL7RPQADXQttOIZ0rvK1t0lJWkzVUaNCEm%2BqY17LrIHzK4pzReUDLhjnuMxJikgpN7vo37UmLF8yyX87LvaIIUEp2T1haMRcP&X-Amz-Signature=f9e04bff93cf88484caeb643c5f6a4485980a18be4a01c697827e38dd687f1de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBGKK66%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL%2FCqTztS7eoVLwHJsj9EQV5snOGFDWrwm8L6GM6rrJAiEAxOEnhD7%2BB4C7tp%2Fh0uYtJ28rVm1sbAOh4k4qd0eUH2Iq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDPm0J9DSlnMtNz6cQyrcA9L43z6bE%2B0GBMBF2oX%2BbuY%2B2AARGLqnWv8c0xyESH8nTU4OQeCl7eVphkH7x7rn4GL9ottURRTY1dBanAz5%2FgQEM9UN4AXLw56R8OiNRWaE%2FmlKBiFM7Un8BUBnj3JtBnkkUj9ZZcizq%2FUpspuUDIqiUSll8GToWYtCGQnnXWBCZZWyTxfHMAnuwoXIDvVIdPFRIaKYs01Lha54Cg5sAbXYPYMoXrO8aRf0PtBccpQBzvX1SoO%2BsbwUTqC0wZjWIZ4MDJNFBTmvOsSwYpONntUcoUqjPxJhNqn%2BMROlv6R0TrCkgJ%2FIlZBLjiImvHZqia6Nnqza3KdkDly9ioGwMjWJr9AwAMcwkt0hfOPBfOK3%2BJ4MwG%2FXyK%2Fo%2B9LeXH3g7XfpxUeed8WB1nTN3NIHICRK6JqwrB6KofYaIc0QMljLmoOsoOMF4eT%2FDKrqEZK3pyhAXM0LrODtsmZOi%2FW%2F7PIxhPcUUMaFJGJzwp%2Bw3BWd7PabPZ%2BZfX9H1WCXBoD5iHPzN1Da5DdRIOloJX27ewM6d1kyU5v%2BSPlYZj7UbgyfaSnNYwdEB1kC7wMb3TAYeztxXj3TX8eQV%2BHAaZeD1Ui4EFuuS5gKiMwe1dNo%2BG8wnagzdSvz7syFMNy%2FMKGBusQGOqUBKTGlu4JmHIDq0ByzIcu6sRCKElU5jBGDQmWtzxm6QjtlO39H%2BcdRVMT5SkT17ia4L%2BK4srBp7DDaYJ%2FsPVyKknYYnZALyCHv1M95bESMUoN4ZWmKdOzBbB6AwexwL7RPQADXQttOIZ0rvK1t0lJWkzVUaNCEm%2BqY17LrIHzK4pzReUDLhjnuMxJikgpN7vo37UmLF8yyX87LvaIIUEp2T1haMRcP&X-Amz-Signature=ee358cdeef22c60863974e7c46d35087f3689aaf76ff3864ccfafbc4b18cdf78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
