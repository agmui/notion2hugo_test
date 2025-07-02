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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVIBEZAN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrjxdrhpA93kzjh%2FNNg7z8a6vRUCAciOgumiPHXlbu1QIgFtzgvZ%2ByefBl4ICG4Q39QN4SjSPGj06x8AzXwQ4FTIcqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDIZemFv2mTW831VCrcA2DW%2FVTaN9onM%2BGy9wIDhtutsjm6vGldTDYsgY%2FoYG3nuekj89OB35HfKg7WG5kpKRDWDVs7WUwgZPevpljamHjqng9RhskMfy7Dj3rcdb52MUGzOmyt4FnfzvFLW6E1vow%2BlZ6rLnCpeMT3bAEdBHjNhOh%2Bo1xh%2F2fqVwbpYjtbvcnuBelOj3iQGUdQpsQQkcN4FhEQyxe2QfQ2gKHNyOWLUNEQllcVWyTSx4KIdIhLjem5JgGK68AvEdXWkJXN7SgG6B41VBxov387vVRj5g3eCJbQyGgtR76kraGU8k%2BpDE74LG7%2FpDMq7%2BIIkz82zGzBdRcOlZRb06qIzmr0jk7L5DJQd60oLq%2FDijpdSHFiJlLGDG9HYoCU1xEaR7aocM1xZjBnP9c7cdakr5RLIHRdQV4S1Yw7yu0XJW91ukna4DHzp4UICMMCa8AVnGRqwJDIslwe8eC01pRdnNIGDm4SOfpZkhuxyd5EMKPBofVcZDA85AK4SpTINztPcD9yk%2BCW%2Fk8hz1EBeDD4MvrBmrMlpoi5%2B72SntabQNt%2FIdcgTK2nF%2FA7zYuHXnu99was8YkFkisahtR%2FRv5c2P9yDyIIdXVyvvxNUYeshc7DXjizkuEpJShvcFim0fb7MIS7lMMGOqUBgzpcggBhDI5ZY4BZr9GDuUYXpwzTiaEEGIbGlBYFebgiGUvk26WDEz3h6wNGmRtc%2BIdbQveawCBKFdiFB8ixbIumodU0ybqOsRnBt0wSQysgjSvNmQ564gfnMqRiSGPFayjfaXGFnScFU9%2BcfKh4gxOixqkltyvQ9faBaAjEUMVF3FuCtZEF4fndu96hjwZo8CplG45ISjX7HEnO%2BYysiipiared&X-Amz-Signature=46f9cd34feb651a66f90f67f7789f7874567e2a1bb527d491179d5083d7455ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVIBEZAN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrjxdrhpA93kzjh%2FNNg7z8a6vRUCAciOgumiPHXlbu1QIgFtzgvZ%2ByefBl4ICG4Q39QN4SjSPGj06x8AzXwQ4FTIcqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDIZemFv2mTW831VCrcA2DW%2FVTaN9onM%2BGy9wIDhtutsjm6vGldTDYsgY%2FoYG3nuekj89OB35HfKg7WG5kpKRDWDVs7WUwgZPevpljamHjqng9RhskMfy7Dj3rcdb52MUGzOmyt4FnfzvFLW6E1vow%2BlZ6rLnCpeMT3bAEdBHjNhOh%2Bo1xh%2F2fqVwbpYjtbvcnuBelOj3iQGUdQpsQQkcN4FhEQyxe2QfQ2gKHNyOWLUNEQllcVWyTSx4KIdIhLjem5JgGK68AvEdXWkJXN7SgG6B41VBxov387vVRj5g3eCJbQyGgtR76kraGU8k%2BpDE74LG7%2FpDMq7%2BIIkz82zGzBdRcOlZRb06qIzmr0jk7L5DJQd60oLq%2FDijpdSHFiJlLGDG9HYoCU1xEaR7aocM1xZjBnP9c7cdakr5RLIHRdQV4S1Yw7yu0XJW91ukna4DHzp4UICMMCa8AVnGRqwJDIslwe8eC01pRdnNIGDm4SOfpZkhuxyd5EMKPBofVcZDA85AK4SpTINztPcD9yk%2BCW%2Fk8hz1EBeDD4MvrBmrMlpoi5%2B72SntabQNt%2FIdcgTK2nF%2FA7zYuHXnu99was8YkFkisahtR%2FRv5c2P9yDyIIdXVyvvxNUYeshc7DXjizkuEpJShvcFim0fb7MIS7lMMGOqUBgzpcggBhDI5ZY4BZr9GDuUYXpwzTiaEEGIbGlBYFebgiGUvk26WDEz3h6wNGmRtc%2BIdbQveawCBKFdiFB8ixbIumodU0ybqOsRnBt0wSQysgjSvNmQ564gfnMqRiSGPFayjfaXGFnScFU9%2BcfKh4gxOixqkltyvQ9faBaAjEUMVF3FuCtZEF4fndu96hjwZo8CplG45ISjX7HEnO%2BYysiipiared&X-Amz-Signature=2b6b173a65efc3de469c512b475b1fa2f4e9755e88ca11907d68838386b8066c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
