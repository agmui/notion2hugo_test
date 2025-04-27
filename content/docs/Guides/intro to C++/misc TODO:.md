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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TYNKRHS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiFAEtZ%2BZ9n%2FrtrsEbT36ea6QOKx1LjkyJUrVF9MCBtAiEArqDScwBlrgJBulSe70ACCJKpttUaJ9z9TNN76IzwNsAq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDFQItqCaHgnhLoweFSrcAz8i1owN7X8sPzUp7EAEDO%2Fo7zk%2ByEEPS2ZsRYwvXGsamn89ZB9N9KzK3ozYLH%2Be%2Bm9vRvpVfBSbuUU9eb9%2FGR%2BtY95hNi5IXNURXNL5P46NApL4NpK4hSEalud%2B%2BR4%2FSPft5v6NVezl41V%2BIziqj2qu6j1QOQEBpq7DwNaZ4AJSPa8gTAT6Ojth3o4hFBvWADH2wWjOzmaj5ZREb%2F%2Fa%2FHhj0zFQ%2BJiOdc715ZC0mNvapfkCNcoD9lg%2BoqAu2%2FSXs%2BSqak8o7iMDGltYQpKO2Hcovd4dsSfAvRD1FwiQ47nmfCk3lQuB6ZZfzwwE6DD1MEpJcLd%2BFwON5wTnoX2eHkZ8IJpoIO9SV4LXFlvCSoMBimGWmx4xQbnqZ3MWult0qxvAW%2BcA1JnOgNKtjBtTERrana07d6cxUn4C1FmfJK8h1PsJeO1WVTHj20P9Qiw1GVfuUeJRUZ6oZQoakZrNrSjU2OSm%2BOMCWLN6%2FVmQVZVC7kvZNHCh%2B5mH6BoQb3DRJRgAIBIrVy5D6qn%2BPBSl6IzccpCbEYQKONHOHoXXQF7xwJBginliMn9IBGp0LB%2B2sZ60OB%2BKRSyOxD4YyNWF2%2Fsb6jQuQTZ9uVqfopT9IsmvjTJ3uUAB0hk2PNfMMP2LuMAGOqUB9XIa4OCusld4RW09QjKs239%2BmdGbABKw7nirjIrlBQ2UHTBXxXs4FCT5yiwowYC4wXT%2Fg5spTt8%2FhHWypJI54%2FGM5S%2BYcrL%2Bl2KZ0rEmIZGTM0yBP3mNX9WqKnTj919V0fwU7QOtpexDUqcyjcThQa82svxEqa%2FBPxFBSXc9KOOCBpUE3q1AXQnyzqTvsj3fIg5gVVVq32LsE77aRS%2FtnAO2sMem&X-Amz-Signature=9bb8c36e331726a7d91a30b6ac7e3e66b84b58e5d088c4894db1799ce68f35c3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TYNKRHS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiFAEtZ%2BZ9n%2FrtrsEbT36ea6QOKx1LjkyJUrVF9MCBtAiEArqDScwBlrgJBulSe70ACCJKpttUaJ9z9TNN76IzwNsAq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDFQItqCaHgnhLoweFSrcAz8i1owN7X8sPzUp7EAEDO%2Fo7zk%2ByEEPS2ZsRYwvXGsamn89ZB9N9KzK3ozYLH%2Be%2Bm9vRvpVfBSbuUU9eb9%2FGR%2BtY95hNi5IXNURXNL5P46NApL4NpK4hSEalud%2B%2BR4%2FSPft5v6NVezl41V%2BIziqj2qu6j1QOQEBpq7DwNaZ4AJSPa8gTAT6Ojth3o4hFBvWADH2wWjOzmaj5ZREb%2F%2Fa%2FHhj0zFQ%2BJiOdc715ZC0mNvapfkCNcoD9lg%2BoqAu2%2FSXs%2BSqak8o7iMDGltYQpKO2Hcovd4dsSfAvRD1FwiQ47nmfCk3lQuB6ZZfzwwE6DD1MEpJcLd%2BFwON5wTnoX2eHkZ8IJpoIO9SV4LXFlvCSoMBimGWmx4xQbnqZ3MWult0qxvAW%2BcA1JnOgNKtjBtTERrana07d6cxUn4C1FmfJK8h1PsJeO1WVTHj20P9Qiw1GVfuUeJRUZ6oZQoakZrNrSjU2OSm%2BOMCWLN6%2FVmQVZVC7kvZNHCh%2B5mH6BoQb3DRJRgAIBIrVy5D6qn%2BPBSl6IzccpCbEYQKONHOHoXXQF7xwJBginliMn9IBGp0LB%2B2sZ60OB%2BKRSyOxD4YyNWF2%2Fsb6jQuQTZ9uVqfopT9IsmvjTJ3uUAB0hk2PNfMMP2LuMAGOqUB9XIa4OCusld4RW09QjKs239%2BmdGbABKw7nirjIrlBQ2UHTBXxXs4FCT5yiwowYC4wXT%2Fg5spTt8%2FhHWypJI54%2FGM5S%2BYcrL%2Bl2KZ0rEmIZGTM0yBP3mNX9WqKnTj919V0fwU7QOtpexDUqcyjcThQa82svxEqa%2FBPxFBSXc9KOOCBpUE3q1AXQnyzqTvsj3fIg5gVVVq32LsE77aRS%2FtnAO2sMem&X-Amz-Signature=a7cb84bd990b3ae90103dbb6684b38e5fc0e77e51f5d11848355077e178b4ada&X-Amz-SignedHeaders=host&x-id=GetObject)

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
