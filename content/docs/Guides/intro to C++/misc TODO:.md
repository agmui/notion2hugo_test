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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVLNJLR%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6Cp5BaQzM5Znfp%2FVHmBpkgx1XUfuco6ZKNLPhtLtudAiEA341kHqHSNtGe6rozRFEeGxk%2BxpFjQX4VjrOrefNpSY4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPla7jcRDgGV%2FPmDBSrcAycAQpQSSc31NcGwlhMMDLIQZH31cOAzpJcDgs6rKtdMpNPr0I%2BDl62cdQ01MR9tG1RTTbDLizsd1N6DJvORA4fxFyPa9D1JGfImGryoTW5amq%2BqNO0WTc96P1OABSIuuXj2AZYkzYC1hzUXaQtq8hqhlOBgUq7NHDftiSzvlpOWQknLgRz4bVTgd1uxUO4Ob1%2BEmoHvLhyE9QkEaNHA0cZp4vqKe9DKG5k6CrE%2F4N4NZiYjxryWvMt445phRWURryZwkKhsbfl6Bh3SGG%2B%2BP%2FADBBIGVppW0u8Aeobd7VFX6FIUuOPzz9vu6kcvnJtpEDt9108QbUf1n3SuQmgWiMGTV0MQxAT31hFCptI3ynjjFWzlJoHTtrLTOGcR2bRRAtOqqeN%2BQti3GninIo0sGCoCkxsxEYXj%2F10zCupWc409Rp%2FbotczRojmhVZIadO%2FfMxQoWClvdcdWutqHDJOnhk3Io1IFIaDm7WNGa2XcD3LkRDPG3EKTfSm4mFCAsX98RJf0xePZ9LyImaUP7uD4PbX%2B8By6WH4Jw85rO%2BHd2Uh54aSmhlJIdiY53fjP3SNmpkpiyuwU%2BbxVlbkO71TEGHICzmbYWbYAG9wN19dzG5XnHTfjlRw5d33yjnAMPikk78GOqUBXfTN8uMv6xEft%2BFD6B1p%2F9zU3dyCGkEMo8YaZBo2%2BtcTuogsybCduKVOxWWitzff9fAJ318bGvtDZ6A3TW7OGxLgd2%2BEi3lvu8rPXSRxzIOw0eIgcVALRB3gcQBv8sWJntmX2DUorgvL43q9puiuBx2TqmAZiCdJd9xrFnFzE4tSqWuemMQinhGCDeyErbscJZNYnUXbz639wb4xONra7h61EVsp&X-Amz-Signature=1c32a3dcbf0c3ec17c85ad2de0dcaeaab13068e55a3a8543a1e2f1d60b5f8b76&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVLNJLR%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6Cp5BaQzM5Znfp%2FVHmBpkgx1XUfuco6ZKNLPhtLtudAiEA341kHqHSNtGe6rozRFEeGxk%2BxpFjQX4VjrOrefNpSY4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPla7jcRDgGV%2FPmDBSrcAycAQpQSSc31NcGwlhMMDLIQZH31cOAzpJcDgs6rKtdMpNPr0I%2BDl62cdQ01MR9tG1RTTbDLizsd1N6DJvORA4fxFyPa9D1JGfImGryoTW5amq%2BqNO0WTc96P1OABSIuuXj2AZYkzYC1hzUXaQtq8hqhlOBgUq7NHDftiSzvlpOWQknLgRz4bVTgd1uxUO4Ob1%2BEmoHvLhyE9QkEaNHA0cZp4vqKe9DKG5k6CrE%2F4N4NZiYjxryWvMt445phRWURryZwkKhsbfl6Bh3SGG%2B%2BP%2FADBBIGVppW0u8Aeobd7VFX6FIUuOPzz9vu6kcvnJtpEDt9108QbUf1n3SuQmgWiMGTV0MQxAT31hFCptI3ynjjFWzlJoHTtrLTOGcR2bRRAtOqqeN%2BQti3GninIo0sGCoCkxsxEYXj%2F10zCupWc409Rp%2FbotczRojmhVZIadO%2FfMxQoWClvdcdWutqHDJOnhk3Io1IFIaDm7WNGa2XcD3LkRDPG3EKTfSm4mFCAsX98RJf0xePZ9LyImaUP7uD4PbX%2B8By6WH4Jw85rO%2BHd2Uh54aSmhlJIdiY53fjP3SNmpkpiyuwU%2BbxVlbkO71TEGHICzmbYWbYAG9wN19dzG5XnHTfjlRw5d33yjnAMPikk78GOqUBXfTN8uMv6xEft%2BFD6B1p%2F9zU3dyCGkEMo8YaZBo2%2BtcTuogsybCduKVOxWWitzff9fAJ318bGvtDZ6A3TW7OGxLgd2%2BEi3lvu8rPXSRxzIOw0eIgcVALRB3gcQBv8sWJntmX2DUorgvL43q9puiuBx2TqmAZiCdJd9xrFnFzE4tSqWuemMQinhGCDeyErbscJZNYnUXbz639wb4xONra7h61EVsp&X-Amz-Signature=43357e9cf8cfb6bd373e025bd01c823be91b2102d0f81f12926b94e30cdf10cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
