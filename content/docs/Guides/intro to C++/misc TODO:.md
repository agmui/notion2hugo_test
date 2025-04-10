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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM3QW653%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCFLIBXIkT5Q6XKts3eLfgAF%2Be4GCoYqVVWTk1CYk2jXAIgF%2FSz%2BlBjet1Biyduvd3LmtHhKarXUXrnrhzmeBql3HsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcLnSqvPvGXKBC7OircA%2FrM2fXW6oXKaHUEy3JJie6e2rscHRL5DVLrdKmIkOgvWkdpS0qLrMRfbCVLygFa22s5NpqKpXOsyNWnx9XVYt7ehWurSw3Mjy%2FPaFRs6ukx13KAFqhoqykXJbRnF2TvpfGRkh3ZQLO%2BXwaQNNPlJObPgFncJHQ%2B7mIgxTuZqQwHuwWmuKj3uSKXq6d7Ebj%2F14jBS1BQbOoXQVInOWO3Yyr3IfwikbI%2BPGOx5VF1u0y7Rul3VpXk6Dh%2BlikUvgU0c4AGdogdL3anxWmx80GvFX7mJpZj7BrcmGShjdU%2FCEBdv9K344kqLoAUijknM1%2B75KRzgwAXJ5XagL3VdTBJX3UvaGVcPgo1pA%2F01DsWTUa7XmForIcozW%2BuvlxEI2D0nGuSVVAEuZoxMa%2BUkTthO423JRc9CIZaD%2FdLAj%2BhHYYcPwxXE%2Bw1fDVJf5WlTYccgoOuClrYz7JbdDpzjFKE%2BckG2MbXNWMV9Z4BiSlzJ0uKxPA42XVM8psOy0Vb%2FsIs%2BlZSelWSR1tq7etVQCInusK3Fm%2F78PRd8ZjyJIqroV%2BHxrlt6fbNQus8pJk67MUFLoXO1ahYDV7xkAeLqvywK5ju4%2BINVtr2Nl11NqQ8NFVyLJ3bVN9pUVhcTpEBMMjd3L8GOqUBseKQtEqzJxOBrHan70ZSOox4TBp2VYvxofXVn87UlQ3Ak4kqmuT5QRElpJOBdTO%2F6Qg4vtShf%2FbihPXi1Hi5Apt7UD9K1pT%2B8kLAsyTjfJsyTYjaNZWCB9RU692SlcAoGOCZTAOaciV8UiXjmQVdiCY1z92TCN0x1u%2Fw9RK4hjOZCH6i7TUXYLoKkakbKCtOr8b6BaQemKLNDVbhWhrhOX5mYV8l&X-Amz-Signature=2f8c947a444c360acbb0a3dae3ab4b9a2b0f9c5dafa76824e662ef8e9cc9ab9b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM3QW653%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCFLIBXIkT5Q6XKts3eLfgAF%2Be4GCoYqVVWTk1CYk2jXAIgF%2FSz%2BlBjet1Biyduvd3LmtHhKarXUXrnrhzmeBql3HsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcLnSqvPvGXKBC7OircA%2FrM2fXW6oXKaHUEy3JJie6e2rscHRL5DVLrdKmIkOgvWkdpS0qLrMRfbCVLygFa22s5NpqKpXOsyNWnx9XVYt7ehWurSw3Mjy%2FPaFRs6ukx13KAFqhoqykXJbRnF2TvpfGRkh3ZQLO%2BXwaQNNPlJObPgFncJHQ%2B7mIgxTuZqQwHuwWmuKj3uSKXq6d7Ebj%2F14jBS1BQbOoXQVInOWO3Yyr3IfwikbI%2BPGOx5VF1u0y7Rul3VpXk6Dh%2BlikUvgU0c4AGdogdL3anxWmx80GvFX7mJpZj7BrcmGShjdU%2FCEBdv9K344kqLoAUijknM1%2B75KRzgwAXJ5XagL3VdTBJX3UvaGVcPgo1pA%2F01DsWTUa7XmForIcozW%2BuvlxEI2D0nGuSVVAEuZoxMa%2BUkTthO423JRc9CIZaD%2FdLAj%2BhHYYcPwxXE%2Bw1fDVJf5WlTYccgoOuClrYz7JbdDpzjFKE%2BckG2MbXNWMV9Z4BiSlzJ0uKxPA42XVM8psOy0Vb%2FsIs%2BlZSelWSR1tq7etVQCInusK3Fm%2F78PRd8ZjyJIqroV%2BHxrlt6fbNQus8pJk67MUFLoXO1ahYDV7xkAeLqvywK5ju4%2BINVtr2Nl11NqQ8NFVyLJ3bVN9pUVhcTpEBMMjd3L8GOqUBseKQtEqzJxOBrHan70ZSOox4TBp2VYvxofXVn87UlQ3Ak4kqmuT5QRElpJOBdTO%2F6Qg4vtShf%2FbihPXi1Hi5Apt7UD9K1pT%2B8kLAsyTjfJsyTYjaNZWCB9RU692SlcAoGOCZTAOaciV8UiXjmQVdiCY1z92TCN0x1u%2Fw9RK4hjOZCH6i7TUXYLoKkakbKCtOr8b6BaQemKLNDVbhWhrhOX5mYV8l&X-Amz-Signature=b4a30f7371bda6cd28140bf1615914497ca1f5461d8d56269d5e14ccf968f268&X-Amz-SignedHeaders=host&x-id=GetObject)

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
