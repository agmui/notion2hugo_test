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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7WW6AGS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFqAcDD1la4T4cxLlN3Kx02io%2FndCwJr1bEnPT455u%2BUAiAoiIReW5gVKwPcZkCOlId1vQHDLV0GiehP2kGlkKX72ir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM47sAIGgwqfGIL5HiKtwD90GwaqYw0QP5%2FHRa6v76%2BAPxiMFFU66LuywWYJLX04qGYtm2fiiSwN7QTQMLkloprjgCaMsZYSQLJsjpNq4kJTR4MNgZ75JlbE%2BZrLSZQPYXcMhX%2BCw9U2j1oiOnH7Grnt044BJUx0j5mA6Zxg7A0JR2jvAVwgZQp9Tja2XlGgIjQAwZOTTn%2Bz60jvkMbPGGW%2FqmLqlM8KqhfIf%2BLOGxPlq0tEkksk%2Bw0LiahXEbZZZpC0Jm5EfTq7u%2BFIuwvHaoPWg2BbZxMdgCFJMUTvr0TjosoJ0K6dLBCjVAQus9KgSXVqVrlilndVHDIJsp8XNvzhRt%2Fl9xthk0XClxhtxW5%2FNR5GDlmn%2BInx5ApG9CT3XAzLcoXt4bXXyjIMnh1zwgePqN1jMH1VB45gqDzy99JMXGygTbM7Q5JUBzVujsyRfAUI4gCk1OCn9gb2rmq%2F2zqCYkCjj%2BN2tnb7QHxDNMbClCq%2FtSmtOD7LYGkaP50IyaeE5cx%2FIxWdaNK2edIXkACfMwTbY83ultX68WzW8MOfcr0FdOsaLzw%2FPU0gJ%2Fh8riYnphXFgVBpVvShXQE68rprKtAJecTNpAjSYbTjRxzWUSB3j0AraILja5BVX7nsXBg3phdlLztuQq%2BFswqI%2FdwAY6pgE9mqCGSDYUaVm3L2o4m0pcG7lq3nHhae9nObeJIs%2BsJFUNupMYmutuVwGIdWj9cmMVVSqJ8WdK%2FjcYw%2FmLD%2FG%2FbGAS3hCaOfXgW8VDCqBFKwZvjumnRCyHmY23elGonlaNcARCV0kKMhSjs8KVhHnirnKnnAkhOrZZ91HLfAJHV%2B9WXWgpDrh2tHlNMk5IC3KITGA7aNNkSRgkCtwHQZLjI0WGRXs%2F&X-Amz-Signature=f8f37ca2db1ffc4930d86276aa731fad58365c873dc6acc1f03b8ef577d77ef3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7WW6AGS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFqAcDD1la4T4cxLlN3Kx02io%2FndCwJr1bEnPT455u%2BUAiAoiIReW5gVKwPcZkCOlId1vQHDLV0GiehP2kGlkKX72ir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM47sAIGgwqfGIL5HiKtwD90GwaqYw0QP5%2FHRa6v76%2BAPxiMFFU66LuywWYJLX04qGYtm2fiiSwN7QTQMLkloprjgCaMsZYSQLJsjpNq4kJTR4MNgZ75JlbE%2BZrLSZQPYXcMhX%2BCw9U2j1oiOnH7Grnt044BJUx0j5mA6Zxg7A0JR2jvAVwgZQp9Tja2XlGgIjQAwZOTTn%2Bz60jvkMbPGGW%2FqmLqlM8KqhfIf%2BLOGxPlq0tEkksk%2Bw0LiahXEbZZZpC0Jm5EfTq7u%2BFIuwvHaoPWg2BbZxMdgCFJMUTvr0TjosoJ0K6dLBCjVAQus9KgSXVqVrlilndVHDIJsp8XNvzhRt%2Fl9xthk0XClxhtxW5%2FNR5GDlmn%2BInx5ApG9CT3XAzLcoXt4bXXyjIMnh1zwgePqN1jMH1VB45gqDzy99JMXGygTbM7Q5JUBzVujsyRfAUI4gCk1OCn9gb2rmq%2F2zqCYkCjj%2BN2tnb7QHxDNMbClCq%2FtSmtOD7LYGkaP50IyaeE5cx%2FIxWdaNK2edIXkACfMwTbY83ultX68WzW8MOfcr0FdOsaLzw%2FPU0gJ%2Fh8riYnphXFgVBpVvShXQE68rprKtAJecTNpAjSYbTjRxzWUSB3j0AraILja5BVX7nsXBg3phdlLztuQq%2BFswqI%2FdwAY6pgE9mqCGSDYUaVm3L2o4m0pcG7lq3nHhae9nObeJIs%2BsJFUNupMYmutuVwGIdWj9cmMVVSqJ8WdK%2FjcYw%2FmLD%2FG%2FbGAS3hCaOfXgW8VDCqBFKwZvjumnRCyHmY23elGonlaNcARCV0kKMhSjs8KVhHnirnKnnAkhOrZZ91HLfAJHV%2B9WXWgpDrh2tHlNMk5IC3KITGA7aNNkSRgkCtwHQZLjI0WGRXs%2F&X-Amz-Signature=30f5bbab9c9881b95a040e515c5ef368708631f032185d0452ce283c174987e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
