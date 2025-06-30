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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YELZT37W%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo0Zl%2FUUuf5iQb6onqqVwQqZhyQLCqLQ9%2BrNrIJAOGIgIhAID00z3gHtCXn40K90XfJjjn90UPU1z5me3si9deb111KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIHugz9yJpIGb43s8q3AN%2BsMPze3hKSk5TKqdpzBa%2Ft41%2Fatr%2Fxw1EzfgWIjqCvMDU8RCTW2182sv%2Fip1bw4rIXg%2B8jADMqQNAs6a%2FdLuJWjNY3qKT9DxzohtWw00Hmfd4dDFLeF6S4jmodEocV1cved8RyXGHPxX7%2FgbfkcCkTYK55wTgF4%2FHtKXdv3EdFKnpRzTHg15r9q%2BfrGIVjx3%2Flq%2Bv441lwQqDfQmiO9ixPtiatXr0ZvAg3dtd6%2Bm2wD0FMedRLPLFFIp099cBgrH8u1%2FQ4XtIjg5aUj%2F1vxqAS3voi1JDK5h1xDlYTdXMjqBeIQmtMnkVmc%2B3kTfry%2BRRQqNUn3C8WThc57zmjED84lVopc8Dt66TSxmHba276g7m1gBnHhoE%2FTrEr1CFiELgCy%2Fdi4fWNt49BUiWuyXf4Hp%2BB27HaQKahmiyKzmVFg%2BhwfgftRdoXQSfpj9Rf%2FbbLFsinwR%2FsYrKXtHUb1uy46e24bbqAz%2BGt7gbRs3fXTuyu8kfgpHV1ox5LyaCI1Ze2aePCySOFngGPfFg65ikM15Boskbg1DlXGHZs9jHnd9wVPil%2BRl0ufAeKdSq1a7%2FSb4TLiY%2FFhhsLTVWT6C7bOrhvjXdfV7dDdKWL8R%2BgI35S6LYFQZTn6k95zCg7YfDBjqkAcGoKZjd2aP%2F1JM6v%2BQhJo8WRwKHIV7PXSh9uxApZukEPdrJYg14Vomcs8%2B00Aa%2FUM7ayoYj8%2FpeuP2LbccacheMfoleiv5liXO%2FVP8ncW0h%2FBUnEqP7f61LDnA%2Bf%2BrevwqG7F3bu3B7gJg8EPoe8k3cV0DYOzt3ISHMou8AIYCcOso1cTCQpiArwIJEGVVGbCoffmRht0rQe98IWJfjqgBeZnx8&X-Amz-Signature=04adfdb3f36d248e2e934e754d95858b95b34e857c6eb50f3a239dc9fdc5144b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YELZT37W%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo0Zl%2FUUuf5iQb6onqqVwQqZhyQLCqLQ9%2BrNrIJAOGIgIhAID00z3gHtCXn40K90XfJjjn90UPU1z5me3si9deb111KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIHugz9yJpIGb43s8q3AN%2BsMPze3hKSk5TKqdpzBa%2Ft41%2Fatr%2Fxw1EzfgWIjqCvMDU8RCTW2182sv%2Fip1bw4rIXg%2B8jADMqQNAs6a%2FdLuJWjNY3qKT9DxzohtWw00Hmfd4dDFLeF6S4jmodEocV1cved8RyXGHPxX7%2FgbfkcCkTYK55wTgF4%2FHtKXdv3EdFKnpRzTHg15r9q%2BfrGIVjx3%2Flq%2Bv441lwQqDfQmiO9ixPtiatXr0ZvAg3dtd6%2Bm2wD0FMedRLPLFFIp099cBgrH8u1%2FQ4XtIjg5aUj%2F1vxqAS3voi1JDK5h1xDlYTdXMjqBeIQmtMnkVmc%2B3kTfry%2BRRQqNUn3C8WThc57zmjED84lVopc8Dt66TSxmHba276g7m1gBnHhoE%2FTrEr1CFiELgCy%2Fdi4fWNt49BUiWuyXf4Hp%2BB27HaQKahmiyKzmVFg%2BhwfgftRdoXQSfpj9Rf%2FbbLFsinwR%2FsYrKXtHUb1uy46e24bbqAz%2BGt7gbRs3fXTuyu8kfgpHV1ox5LyaCI1Ze2aePCySOFngGPfFg65ikM15Boskbg1DlXGHZs9jHnd9wVPil%2BRl0ufAeKdSq1a7%2FSb4TLiY%2FFhhsLTVWT6C7bOrhvjXdfV7dDdKWL8R%2BgI35S6LYFQZTn6k95zCg7YfDBjqkAcGoKZjd2aP%2F1JM6v%2BQhJo8WRwKHIV7PXSh9uxApZukEPdrJYg14Vomcs8%2B00Aa%2FUM7ayoYj8%2FpeuP2LbccacheMfoleiv5liXO%2FVP8ncW0h%2FBUnEqP7f61LDnA%2Bf%2BrevwqG7F3bu3B7gJg8EPoe8k3cV0DYOzt3ISHMou8AIYCcOso1cTCQpiArwIJEGVVGbCoffmRht0rQe98IWJfjqgBeZnx8&X-Amz-Signature=06035971d3f4f2b6b9380a038567cbad57dc24dd502a6e55a599152f5f2b7532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
