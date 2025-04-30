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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSPVTYRN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC6YKWFMIMA8fhQhUwZWJ9HCklLcu0Rd2i4ZRyORnb6QAIgfjtIB7miDfxoSJCTB9ndYqQQJP%2Bx7tdQagxndbLYdV0qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpcItyJdgFSRf1bkSrcA2R%2BlFGgRSCfkzXzWDTObOQYPQookstdk356oQGrm7jJyAm0GceJuDoJhNOgSIlkc8lm28NyL3lqWzDt2o%2FYwU7%2F7stitDw2omK%2BCYLeFmDuSNyx5BdtVyssm75R3Pf9sgr8H6DCFHk0U%2FXKc3%2FIklPxZrsAFMP55wG3kzKNdpu%2BAkIBlEfFac9t8%2F2NhnEeqIsaJbresvaj117HniS4tCcu4JgbTdBRTBKElW30pb7MzXFV%2BrOfeh5IFtMETxE0L%2B4RxpnqrBt4q67DrMSBM4wmmGNQk%2BMDzP2IAL1EKOYVdgO3VelRWxCBG8vPhXx3H79vrfDgKjhA4QnDqwzOlhh0UgtlxJS76XfHBeMTAbNAsXk2rK1Pq8L73of7Ac9Pz4nCruSxxLaM4t2rlg4lYbtdsjqCC99GHlxV%2BXenK10xULdanFADThQP5i1EQ%2B1QKBuxr%2Fi6gI2DtB%2FV0vYjzw6muCHliQpYx%2BB4CJv2Kw2I%2B4IIYdpAZUf5iCMQYDEz5lJpm0R7B4YaOxc%2BVvl94w7xzInpbpCqlwyTEDUFwK%2FbjAUrs6QYXJtcDc5BLyy8bXJ%2FkBe3%2Be3Mjiro8CrM968LWbPMEBcvF9jPBhGFfEr6NUB921xFb6w927YhMNXTycAGOqUBOoG4VOqm7yPINqFrmvuNalwTMcDI%2FYyzykvhJtIleAYSUx17OGiHM8UP5Y23KxHBGdKOQpmE%2BGtW7UrA93HXi6PvvwFcmCBwQP2Qx1cA0vLBzfC99TfiwLFPtjz9qmXq3OG0nxCeAlux%2B58atm52uCl0dBSiCJAIaGLkcxP90i9FEJRZRKpGkv%2FpCDeWuXSRqTppTXhJjfUluTHQbphjH5tFy94B&X-Amz-Signature=176f4fb17a689ba509c85f2a88b7a2ae8348baad40c4c1b6057bf10dcfe2b36d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSPVTYRN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC6YKWFMIMA8fhQhUwZWJ9HCklLcu0Rd2i4ZRyORnb6QAIgfjtIB7miDfxoSJCTB9ndYqQQJP%2Bx7tdQagxndbLYdV0qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpcItyJdgFSRf1bkSrcA2R%2BlFGgRSCfkzXzWDTObOQYPQookstdk356oQGrm7jJyAm0GceJuDoJhNOgSIlkc8lm28NyL3lqWzDt2o%2FYwU7%2F7stitDw2omK%2BCYLeFmDuSNyx5BdtVyssm75R3Pf9sgr8H6DCFHk0U%2FXKc3%2FIklPxZrsAFMP55wG3kzKNdpu%2BAkIBlEfFac9t8%2F2NhnEeqIsaJbresvaj117HniS4tCcu4JgbTdBRTBKElW30pb7MzXFV%2BrOfeh5IFtMETxE0L%2B4RxpnqrBt4q67DrMSBM4wmmGNQk%2BMDzP2IAL1EKOYVdgO3VelRWxCBG8vPhXx3H79vrfDgKjhA4QnDqwzOlhh0UgtlxJS76XfHBeMTAbNAsXk2rK1Pq8L73of7Ac9Pz4nCruSxxLaM4t2rlg4lYbtdsjqCC99GHlxV%2BXenK10xULdanFADThQP5i1EQ%2B1QKBuxr%2Fi6gI2DtB%2FV0vYjzw6muCHliQpYx%2BB4CJv2Kw2I%2B4IIYdpAZUf5iCMQYDEz5lJpm0R7B4YaOxc%2BVvl94w7xzInpbpCqlwyTEDUFwK%2FbjAUrs6QYXJtcDc5BLyy8bXJ%2FkBe3%2Be3Mjiro8CrM968LWbPMEBcvF9jPBhGFfEr6NUB921xFb6w927YhMNXTycAGOqUBOoG4VOqm7yPINqFrmvuNalwTMcDI%2FYyzykvhJtIleAYSUx17OGiHM8UP5Y23KxHBGdKOQpmE%2BGtW7UrA93HXi6PvvwFcmCBwQP2Qx1cA0vLBzfC99TfiwLFPtjz9qmXq3OG0nxCeAlux%2B58atm52uCl0dBSiCJAIaGLkcxP90i9FEJRZRKpGkv%2FpCDeWuXSRqTppTXhJjfUluTHQbphjH5tFy94B&X-Amz-Signature=c531a620c8c6e818a2d7b08ef87705c1e93e92a2fd2aa09fdd9978afc4814807&X-Amz-SignedHeaders=host&x-id=GetObject)

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
