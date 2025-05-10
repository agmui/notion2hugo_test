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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4FH33T6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDie434T%2FkhlGFBUil6A8B5qUmBWmVIUK8DlIpq10g2ngIgZzupiYcAyGDmfmcRRuAetSzpPlC38ssAHYltWsTllcQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuQI5s2Dc9WTKKHTSrcA4ZIXoM7EO0kKxz6R2aqn2hJAQiwGYXG%2BYvNz5Zq8o%2FjOBNknckYSMp%2FiUJQYU12bX9QhmLK2bzvpRjXx6tyiZp9mgJOcVz24YSEhZCt7lZNZ7YMqQkKmGLrAWwAaTwTZlcCinHC1UkugMuOlD2D8EUgJGnL2%2BVyAY5xQNue13N8ruHw1rfK%2Bp9Sw9eZx2EdrfCb9gzEWTUiNzhxAvXnwsJ51fkM%2Ba9E%2FLZ%2BAWlVo4aBwWLtRSq6b99jdtTmoY98pB%2FxdRBVImp%2Bs%2BYvaT2MI5pUCE%2BM1nBilGocE5sfvVlgJa8SkmK6KB4%2FTKinty8NLDTZnC8%2BTJcOb8G7037hICuOOjBMy0uK00wXGAsyq96DR7nPkN36J1HiN6g%2B3bSjECw9jda65XRcEeivFzkYXIubchh6ae0P%2FvQNmH3WO%2Bmod7p6aop8Xj195HNbp7pju2oHIXS7icvLOcQjZBwzAYJD6kZT56wUDqAOksT%2FuFDdSugLKvYP9uBVqBgKpHQSb7vb12526Ay%2BSHrtNiL8KSDgPCk7yLDs1muacbv%2FHOoVFmm47t0yNFwdxlyB99Zkvom8tKebAi4BzK%2Fzc0E8flGIzL411Y5pmF6lTS7KOkvkzNeDH3jyFL8q3h3XMNiK%2F8AGOqUBIpjAm3832ZgXPCq%2Bpn9tGN%2FjJm%2BXcj3%2FfI9cJ%2BmZPPajuQCLjZ%2F%2BLaUWYvrY%2FrX6Mxa3JqVE2jKmccAad9Iw3xU%2F2ylCuTTPnPgUI9H4fr27qGQL%2Bl5f4jXo%2Bt9PLrLyMSuwLqRAVOYLUNh0BiXLOxvawpvhpENSXcQY3CiauLRN6fUyA6%2BOHvT1MU5Vp6%2B8wMkUkDq1Mmnp7PQwyAqavNJJ0YR0&X-Amz-Signature=eb97a7c3eb0161d90c984869410e3cb4374a93cf29ee1b81031d8d4e56849109&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4FH33T6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDie434T%2FkhlGFBUil6A8B5qUmBWmVIUK8DlIpq10g2ngIgZzupiYcAyGDmfmcRRuAetSzpPlC38ssAHYltWsTllcQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuQI5s2Dc9WTKKHTSrcA4ZIXoM7EO0kKxz6R2aqn2hJAQiwGYXG%2BYvNz5Zq8o%2FjOBNknckYSMp%2FiUJQYU12bX9QhmLK2bzvpRjXx6tyiZp9mgJOcVz24YSEhZCt7lZNZ7YMqQkKmGLrAWwAaTwTZlcCinHC1UkugMuOlD2D8EUgJGnL2%2BVyAY5xQNue13N8ruHw1rfK%2Bp9Sw9eZx2EdrfCb9gzEWTUiNzhxAvXnwsJ51fkM%2Ba9E%2FLZ%2BAWlVo4aBwWLtRSq6b99jdtTmoY98pB%2FxdRBVImp%2Bs%2BYvaT2MI5pUCE%2BM1nBilGocE5sfvVlgJa8SkmK6KB4%2FTKinty8NLDTZnC8%2BTJcOb8G7037hICuOOjBMy0uK00wXGAsyq96DR7nPkN36J1HiN6g%2B3bSjECw9jda65XRcEeivFzkYXIubchh6ae0P%2FvQNmH3WO%2Bmod7p6aop8Xj195HNbp7pju2oHIXS7icvLOcQjZBwzAYJD6kZT56wUDqAOksT%2FuFDdSugLKvYP9uBVqBgKpHQSb7vb12526Ay%2BSHrtNiL8KSDgPCk7yLDs1muacbv%2FHOoVFmm47t0yNFwdxlyB99Zkvom8tKebAi4BzK%2Fzc0E8flGIzL411Y5pmF6lTS7KOkvkzNeDH3jyFL8q3h3XMNiK%2F8AGOqUBIpjAm3832ZgXPCq%2Bpn9tGN%2FjJm%2BXcj3%2FfI9cJ%2BmZPPajuQCLjZ%2F%2BLaUWYvrY%2FrX6Mxa3JqVE2jKmccAad9Iw3xU%2F2ylCuTTPnPgUI9H4fr27qGQL%2Bl5f4jXo%2Bt9PLrLyMSuwLqRAVOYLUNh0BiXLOxvawpvhpENSXcQY3CiauLRN6fUyA6%2BOHvT1MU5Vp6%2B8wMkUkDq1Mmnp7PQwyAqavNJJ0YR0&X-Amz-Signature=cb98dc6c35bf95ea1ffc3eb20a16cef951488eaadb103c38da33b4709b6308a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
