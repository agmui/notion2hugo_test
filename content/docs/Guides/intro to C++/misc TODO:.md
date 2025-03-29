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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UYJJOQS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFerdILJXON8J2VE03XyAObYnXkn2l85nP5CnJEsX4BnAiEA58qJJkN4al63ts3N6CTMl1WlDkQTluCYE38h3Nu2H8Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFEW6VBCRm4G%2F9nOmSrcA%2Fz3dKB%2BuC9aiC0YgCX48i0hs1Je89FpNwDgfxMnHMhDJ%2FXprkdO3Eddi3UMYAXggtLndYVv5FCNytludh3RKwM794wghe79F1QFiW%2FpmkBmkXJi8v46hG4W5tVsK9nJijfsJall06NjFHmZani9KpAXxISwddhljlFO7QcpgpVTBT%2Fh13sOAyoNP7A1Ti%2Fee1M%2FqhNrseiCKOkaHA8LsNQdkKYZlDheUF9St%2BsDu1qK3PfJiR9BenZuYz5ihVG%2FBgjZsG8w7cEZ3qULj3V8xoJR489PC8bOlnmMYjRC3bPdjR4hK6rPrM3W9q1PYBsPDQGwlnLP0uO9%2F3D5AWJgH4x%2BFiF%2BnVNlyrs%2FsuMWt6j6gTa3R5hmZdE9fiTE13T%2BkscIKLc3M2P3Fxu75wjan%2FKSvZbMjrbGUesHwuGp3cuECWtcGwtGOwWRCyCPjnL%2BhittuIatZDxJ5%2BsszQkYZQ7EkpjWF1SR2wExTA7gSkc%2FxywlxYZsiHSd0qnx1nlrNZlFK6XhV32XNw1QXiZgoo3M1WGQl3U59VQ%2BcN3scGpwVCpSebr3JR7k%2BYXcn38AJJJqXHKYF6Og6zqklJku%2BPBE4lz%2F6vPa2zEBJnKRke6INxJOUIiern0cSbcjMKzinr8GOqUBF1UkOMQtCSLH2c3LDeYQHL0rTSQxLxjCKjRbbqarR%2FPLeEpukmLWnrxgZyvyUNGLGcVZP3ga09KtAVUhxGKTMqqDsiLkJKSFnucuE3zYPGi82uQHgbXKZ%2FG%2Bo1KcrFo9esB6RxIEomt%2BbKQTvl1r8OJs0tFd74H5mvltRUFJoLYFObSDetxTrkCNK%2FZ1RG6ssQUvR%2BjqRAACWrl9QxkDNvcM%2BrPJ&X-Amz-Signature=da2143e1212b507d12f2bec0c436062b6d3d45be25b23bc8d29131451be8beb8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UYJJOQS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFerdILJXON8J2VE03XyAObYnXkn2l85nP5CnJEsX4BnAiEA58qJJkN4al63ts3N6CTMl1WlDkQTluCYE38h3Nu2H8Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFEW6VBCRm4G%2F9nOmSrcA%2Fz3dKB%2BuC9aiC0YgCX48i0hs1Je89FpNwDgfxMnHMhDJ%2FXprkdO3Eddi3UMYAXggtLndYVv5FCNytludh3RKwM794wghe79F1QFiW%2FpmkBmkXJi8v46hG4W5tVsK9nJijfsJall06NjFHmZani9KpAXxISwddhljlFO7QcpgpVTBT%2Fh13sOAyoNP7A1Ti%2Fee1M%2FqhNrseiCKOkaHA8LsNQdkKYZlDheUF9St%2BsDu1qK3PfJiR9BenZuYz5ihVG%2FBgjZsG8w7cEZ3qULj3V8xoJR489PC8bOlnmMYjRC3bPdjR4hK6rPrM3W9q1PYBsPDQGwlnLP0uO9%2F3D5AWJgH4x%2BFiF%2BnVNlyrs%2FsuMWt6j6gTa3R5hmZdE9fiTE13T%2BkscIKLc3M2P3Fxu75wjan%2FKSvZbMjrbGUesHwuGp3cuECWtcGwtGOwWRCyCPjnL%2BhittuIatZDxJ5%2BsszQkYZQ7EkpjWF1SR2wExTA7gSkc%2FxywlxYZsiHSd0qnx1nlrNZlFK6XhV32XNw1QXiZgoo3M1WGQl3U59VQ%2BcN3scGpwVCpSebr3JR7k%2BYXcn38AJJJqXHKYF6Og6zqklJku%2BPBE4lz%2F6vPa2zEBJnKRke6INxJOUIiern0cSbcjMKzinr8GOqUBF1UkOMQtCSLH2c3LDeYQHL0rTSQxLxjCKjRbbqarR%2FPLeEpukmLWnrxgZyvyUNGLGcVZP3ga09KtAVUhxGKTMqqDsiLkJKSFnucuE3zYPGi82uQHgbXKZ%2FG%2Bo1KcrFo9esB6RxIEomt%2BbKQTvl1r8OJs0tFd74H5mvltRUFJoLYFObSDetxTrkCNK%2FZ1RG6ssQUvR%2BjqRAACWrl9QxkDNvcM%2BrPJ&X-Amz-Signature=63f0a09d2ed5f6485868e32824851af88f16cbd461718fabba4941ff47a43cf0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
