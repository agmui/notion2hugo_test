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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZCRLT6M%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDZHgYLMpTuIsNffDqGrMHbI%2F0%2BtUb3NKvKTjrV9X%2BMpAIgS757O6%2F5P2DPZ09IurjhBSXRaiOqpzeKK7mdboK6V9Iq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDM3u6Dp5UeCmDa25yCrcA4yaRWsTAnf73JcFAX805ZVVTxWnjo7K0HlWfItCGyvhfERWznmlb%2BIqD%2F1TbJ8uPVzfwOjKu4dkDACEaXmuJ4jaYPjcI%2FeBvAANSWD9EBI%2FsvJ%2FaXjzJzPx3ezrfu5CDf2eIIgjjrsRmmwSRv7CWGjlU0vuHP72q2qKmt%2FC9PK%2F9X8Luo5D0lxAht9CubGLsg9Igi20VPzkln5CchdFzqAQHCcz2RHBVLCXOw3iI%2BzXfZ8xtTZvwq6gIuNp%2B9JYkKlB%2FY1r%2B9xyIrn4cbJcUbdxdAd65bVK4ZwaGAi1R9dBdmVzx1CclCz%2FFbi57BGlyeRHRonf%2FN3aMfPS%2BUi4j4mqLIpP9Hfi1ZiOweJgXi6Yyxl5cBnQm%2FIrmvOWxCg8E%2FohowISc19%2FSbScyvzDriJEudi%2B0XtfOyzwcP1FfO1buWmPIWPqFcSKQVNo%2B%2BPQi4hfEaenCYkujZSCXgzumJ8%2BT%2FTxw%2BxvZMOw3OlotAEhN0tay8n52uXP0xZ49Ew7ulQkO16jz3vcKYZerzF9ZpXuepTdSPDV2ZX4fbZkOvLOlz4bm6gq6mYEgo%2FB6rUNBWpxrSN4a4CHqWAXZUfJC682FiYodUDGoeSkxE7374PyPGB2zjd%2B%2BKjW6wp0MLu93cMGOqUB6SDaax%2BFzkC2L4BZCC7DIgsMYS930uazilWMHqjWMWFMlTkZI1z7NinjTRi9nice%2BqvlvqKVt8BfVp%2BTyqTCLMaHekfsX9Dby4CrN58Q97xLHdEPoid2XJxT81w8gbitYDHz8A2%2BKYAMoRBHNOwhLrMM0P5ZM1%2FyBzaDW9ykwT1eAxlfu4Nxh2GK4BpFGuE70cPpJ%2FZlz22P%2FSmU1GN3Iy8p69TO&X-Amz-Signature=29d102d5e3ac2064905bffad4c45da1dfad2eb26cd7fe6606c937964003045d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZCRLT6M%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDZHgYLMpTuIsNffDqGrMHbI%2F0%2BtUb3NKvKTjrV9X%2BMpAIgS757O6%2F5P2DPZ09IurjhBSXRaiOqpzeKK7mdboK6V9Iq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDM3u6Dp5UeCmDa25yCrcA4yaRWsTAnf73JcFAX805ZVVTxWnjo7K0HlWfItCGyvhfERWznmlb%2BIqD%2F1TbJ8uPVzfwOjKu4dkDACEaXmuJ4jaYPjcI%2FeBvAANSWD9EBI%2FsvJ%2FaXjzJzPx3ezrfu5CDf2eIIgjjrsRmmwSRv7CWGjlU0vuHP72q2qKmt%2FC9PK%2F9X8Luo5D0lxAht9CubGLsg9Igi20VPzkln5CchdFzqAQHCcz2RHBVLCXOw3iI%2BzXfZ8xtTZvwq6gIuNp%2B9JYkKlB%2FY1r%2B9xyIrn4cbJcUbdxdAd65bVK4ZwaGAi1R9dBdmVzx1CclCz%2FFbi57BGlyeRHRonf%2FN3aMfPS%2BUi4j4mqLIpP9Hfi1ZiOweJgXi6Yyxl5cBnQm%2FIrmvOWxCg8E%2FohowISc19%2FSbScyvzDriJEudi%2B0XtfOyzwcP1FfO1buWmPIWPqFcSKQVNo%2B%2BPQi4hfEaenCYkujZSCXgzumJ8%2BT%2FTxw%2BxvZMOw3OlotAEhN0tay8n52uXP0xZ49Ew7ulQkO16jz3vcKYZerzF9ZpXuepTdSPDV2ZX4fbZkOvLOlz4bm6gq6mYEgo%2FB6rUNBWpxrSN4a4CHqWAXZUfJC682FiYodUDGoeSkxE7374PyPGB2zjd%2B%2BKjW6wp0MLu93cMGOqUB6SDaax%2BFzkC2L4BZCC7DIgsMYS930uazilWMHqjWMWFMlTkZI1z7NinjTRi9nice%2BqvlvqKVt8BfVp%2BTyqTCLMaHekfsX9Dby4CrN58Q97xLHdEPoid2XJxT81w8gbitYDHz8A2%2BKYAMoRBHNOwhLrMM0P5ZM1%2FyBzaDW9ykwT1eAxlfu4Nxh2GK4BpFGuE70cPpJ%2FZlz22P%2FSmU1GN3Iy8p69TO&X-Amz-Signature=d7a54fd69dd3b93d68a3b354cd47552a45570cc560626ea27b2c3051e63cb3d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
