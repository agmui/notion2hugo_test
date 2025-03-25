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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSIBWMLL%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClR%2BA3qX0phl1IUNPdngx6N5PP94ZXzI%2F9tdRpgQ2bjQIgegNcrQ6cCqExJJMPUBRvguNlcH%2FIVKRsUEC9OM0jP7YqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDo3kLSAzr3iqT4mCrcA1AVJyrdsuGEQ7GdgCTsiFypr5mI4ZjW%2FN7tT6AJR33C83Ca8%2FbHPHUmQdTNLAqzjZzUfSKWbTqASrM2MsNhen1DJj1CpMvo98rMzIaF3addY4u%2FIfv7gQjeO0ppu1sMtY5J9sfoRB9mjZMMBV1kwSQvKS6nc5jvLLL6yc6zpgWGfDfQ%2FidQFB1TUbSxSHGDD8jFHsHSClmmSpKSpwCy9eVqGwlo6lSBlGNPPSO5Hp9S1oGLKdjIKWLorKEuP%2Bwwjk9nR19QLcSMreExODyf4J%2F%2BbAf7lo6xz1A77YyrD5iImCXDkSePYFWDLHm8jlsvvg1iZ2JhUz7H%2BgNczzibdn%2FeyE3nhRz%2Bm3AOyh9esF282OkEsZzkZ4jye3BRvAVRBtYw12HH77ME3YnEWGzEdsjP2yzwKc2UgY6WiRrpfI%2BBbLhsQoxihjm1aGx9Yqdze1ct%2FGei0Xd9zruGjHXmMEY1KvjBfcf1RoXewifsUFTaSGPokj%2BYt2QE0vuwRhdNbG5N0TOk72reQYuRZhN%2Fm6KYXgUMh%2BesOdLG%2FBAIPDwnzth34RFsbG1WtOgpJ3q6LSFmidyALma4xKyvCcboUiO5287E0QQUVocYk%2B%2FnSU%2B8C3lQgyokozsyqwhnMN%2Fvh78GOqUBedL7KWGNe8E2Tk8%2F2tsk29jczLbqNCeZYhvWxHMRB4FYd5hDPtha6IKmbwiXHgWgpQ%2F9CrVPHiFXyTzThOP%2BBBhMuMlCQAG9JtqOLPTwkotzb%2FiuTiUSh6c1ggm4rqmCymOxTU0O4rii1d7q4G83f7UJ6mhzLTbq6fWgzRGNvIgrc7ctAW014tmGJZd31vGBCpw0wcZHvHo3AHwbL8IUuPRSfuNK&X-Amz-Signature=68effe378b6499644b838012fdfe43ced8ce18c59f372d351ad1d25a77eee52d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSIBWMLL%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClR%2BA3qX0phl1IUNPdngx6N5PP94ZXzI%2F9tdRpgQ2bjQIgegNcrQ6cCqExJJMPUBRvguNlcH%2FIVKRsUEC9OM0jP7YqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDo3kLSAzr3iqT4mCrcA1AVJyrdsuGEQ7GdgCTsiFypr5mI4ZjW%2FN7tT6AJR33C83Ca8%2FbHPHUmQdTNLAqzjZzUfSKWbTqASrM2MsNhen1DJj1CpMvo98rMzIaF3addY4u%2FIfv7gQjeO0ppu1sMtY5J9sfoRB9mjZMMBV1kwSQvKS6nc5jvLLL6yc6zpgWGfDfQ%2FidQFB1TUbSxSHGDD8jFHsHSClmmSpKSpwCy9eVqGwlo6lSBlGNPPSO5Hp9S1oGLKdjIKWLorKEuP%2Bwwjk9nR19QLcSMreExODyf4J%2F%2BbAf7lo6xz1A77YyrD5iImCXDkSePYFWDLHm8jlsvvg1iZ2JhUz7H%2BgNczzibdn%2FeyE3nhRz%2Bm3AOyh9esF282OkEsZzkZ4jye3BRvAVRBtYw12HH77ME3YnEWGzEdsjP2yzwKc2UgY6WiRrpfI%2BBbLhsQoxihjm1aGx9Yqdze1ct%2FGei0Xd9zruGjHXmMEY1KvjBfcf1RoXewifsUFTaSGPokj%2BYt2QE0vuwRhdNbG5N0TOk72reQYuRZhN%2Fm6KYXgUMh%2BesOdLG%2FBAIPDwnzth34RFsbG1WtOgpJ3q6LSFmidyALma4xKyvCcboUiO5287E0QQUVocYk%2B%2FnSU%2B8C3lQgyokozsyqwhnMN%2Fvh78GOqUBedL7KWGNe8E2Tk8%2F2tsk29jczLbqNCeZYhvWxHMRB4FYd5hDPtha6IKmbwiXHgWgpQ%2F9CrVPHiFXyTzThOP%2BBBhMuMlCQAG9JtqOLPTwkotzb%2FiuTiUSh6c1ggm4rqmCymOxTU0O4rii1d7q4G83f7UJ6mhzLTbq6fWgzRGNvIgrc7ctAW014tmGJZd31vGBCpw0wcZHvHo3AHwbL8IUuPRSfuNK&X-Amz-Signature=5916d4c5a015f8364e1f51f1135cbe7b1ec5bdb064e8c89fc64a5005fae5569c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
