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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHM7RUTN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCfji442fw6KXnsAqKa3ufi3Sibq0BOdUHRg1iOZp8aAIhAMTGxm29xMB%2FEPGIs%2Bmz3K9p2nWVIXAwuGhjSAzNwVHzKv8DCEAQABoMNjM3NDIzMTgzODA1Igxxw8OISNzkDzS8%2BT8q3AMX0R72FxdUF%2BK4fvh8RDgJQxSIFQCBNCEG2BdWd9lWdcOopklsM1Z8QC%2B%2FW%2Bhg6Q7u7dROkYIVNmhCtOQ4aVMfjRLxtLI9hLNpezrQ8pDEx%2FyeuyJREJrtfaHGItcdFburh8bQKrsow0vUAHHlMbpcglb9w06MoQ434TMj6pI3EJybKgKPx7MFS0bOvj%2BCao4z2tOvY90iZaCdrm5oqWGaeCKwQzh2DZ5SxfPVOkPFtviJB%2F9gAffOIVDwwPV8d1Q%2Fw0VxHBxupVsj4jz8jxDXY7JKBWVdTjTQbY27JOodhOJDzI4wkwE2NUIQ%2BUEer3%2Fk76sYfGwwZoaGXOrPbWthYmQkqGJUcvLR6IMVl71NsD89%2BtiR0CanXP0qdYI4vuJFGPXe8Qe5vvyO5RLY0F1DYCe9EaTsrJ96HNhjkbwjy6bZReTkxUG%2FARaqvVvrNVyjjPSM8V10DWHSPAPCnqiQ2yPx3JvDopToR8F5cuvM2yIW8O%2BuAYLsnJbFiTlXe8S0rYsaTkaB6RomZP6PEAsTwi%2Fl%2B39mVYpfNHgt%2B0fjnlRuGyqZVKy0qc7Y%2FFcaCyssux67F%2BCISpm8Ajd%2BwLIeyR%2FQdZl1VBs%2B%2B9cXONY8x9dvvUFYbpm4FnQhqjCJuZvBBjqkAcGLx6iMM7wbGIt7jPtITOabqlaEEVgGmvPQf8ZcF41DX9Q4hACPghYJMrTALZRingy9%2FtTBxZzgyuC3BUIYGUekz6WkGUyL%2FPwWSimxJpV0Z%2BE9HjKY%2BRYsPga%2FwUptpeNTxMDx5ICX3vS3LIT1E3nmPGBGdfgHpeJ6OWFH2Vy1Aw2GjLWS2AzGbhQF0yb710NUj%2Fsxkn%2F1PvMPMWwZRWePoV5X&X-Amz-Signature=6ef90815aef392caf4d8ba1c7c74ae85dbb7ab258222b1ee6a82bef44107b23c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHM7RUTN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCfji442fw6KXnsAqKa3ufi3Sibq0BOdUHRg1iOZp8aAIhAMTGxm29xMB%2FEPGIs%2Bmz3K9p2nWVIXAwuGhjSAzNwVHzKv8DCEAQABoMNjM3NDIzMTgzODA1Igxxw8OISNzkDzS8%2BT8q3AMX0R72FxdUF%2BK4fvh8RDgJQxSIFQCBNCEG2BdWd9lWdcOopklsM1Z8QC%2B%2FW%2Bhg6Q7u7dROkYIVNmhCtOQ4aVMfjRLxtLI9hLNpezrQ8pDEx%2FyeuyJREJrtfaHGItcdFburh8bQKrsow0vUAHHlMbpcglb9w06MoQ434TMj6pI3EJybKgKPx7MFS0bOvj%2BCao4z2tOvY90iZaCdrm5oqWGaeCKwQzh2DZ5SxfPVOkPFtviJB%2F9gAffOIVDwwPV8d1Q%2Fw0VxHBxupVsj4jz8jxDXY7JKBWVdTjTQbY27JOodhOJDzI4wkwE2NUIQ%2BUEer3%2Fk76sYfGwwZoaGXOrPbWthYmQkqGJUcvLR6IMVl71NsD89%2BtiR0CanXP0qdYI4vuJFGPXe8Qe5vvyO5RLY0F1DYCe9EaTsrJ96HNhjkbwjy6bZReTkxUG%2FARaqvVvrNVyjjPSM8V10DWHSPAPCnqiQ2yPx3JvDopToR8F5cuvM2yIW8O%2BuAYLsnJbFiTlXe8S0rYsaTkaB6RomZP6PEAsTwi%2Fl%2B39mVYpfNHgt%2B0fjnlRuGyqZVKy0qc7Y%2FFcaCyssux67F%2BCISpm8Ajd%2BwLIeyR%2FQdZl1VBs%2B%2B9cXONY8x9dvvUFYbpm4FnQhqjCJuZvBBjqkAcGLx6iMM7wbGIt7jPtITOabqlaEEVgGmvPQf8ZcF41DX9Q4hACPghYJMrTALZRingy9%2FtTBxZzgyuC3BUIYGUekz6WkGUyL%2FPwWSimxJpV0Z%2BE9HjKY%2BRYsPga%2FwUptpeNTxMDx5ICX3vS3LIT1E3nmPGBGdfgHpeJ6OWFH2Vy1Aw2GjLWS2AzGbhQF0yb710NUj%2Fsxkn%2F1PvMPMWwZRWePoV5X&X-Amz-Signature=1d5a3ad1e13a5698927ae411b4a9fb94d74c30d2bcffab0f6faa046322fe9fce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
