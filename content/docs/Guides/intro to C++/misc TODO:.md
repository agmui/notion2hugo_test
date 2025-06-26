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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZPNHFII%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQC0eS0epr5TwV616SfTRASPIhqfTmb6IilxEujcwnbsAAIgKgMm1WQRwlbobCAXbY%2BI5%2F05n5AJ%2BbiCVHXUYnS2b%2Foq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCfp6pUDuzzw7WR%2FOyrcAw3LOEVcisFwHQGQSxDtzcVBO1MKpm3epGQWCANAJwFUyGBldDm7Xg2ChZ8KnyrVIQuiLzZ1%2BQbL4C8lDpommaJ2YbHBdZxhXln9r34RpSgycDJgClEO%2BtjS4kSM%2BuETu%2BfJQshWNhq%2FQGOrAbW1NCeSFe0%2B6uhVgM53iMW8CvvAVgAMfKh8oYNB%2Bo3pWy1TA2I8xb5hoswKjhuA5KUHohx8Rbv5nRlDKmO95sZoSviMLExXWYDJ8LYu%2BW94FK1vdURI%2Fl9AeDVobnBn8gyMDQrfalP4gQWKL7l5xjRkY3sW%2Febmd9wT61eu1HlhzuJnCdb6csv2%2BUYKSwQWNWTPnL1hILi%2Fv8gLQDUaq%2BFcJAXi4nqlH%2BltTkLKUMoeKiLi3fWZxRCN1OD16yiouzw4rLWPVCrrNAWX4xpcEqBAKbLiSTj6pxmIjqa6TidMfq%2FY3kwDKrtZuMNVGOejwtYuX%2FjjDE1NMJO8UR9pVTGAVdw47h5WiRzkexyyat2Kf%2FkO1vgEzJ48oaZHc50Y6nMhwYc3gkm%2BtSyCo4xOvSx4kjQnpbVmFdgHmIKMqws2aLL55sZLhoigBTZvV23hgdKeEn5KuUeUNsvQt1Cx7%2BKWB%2BuW3gUCC7ieqSQ%2FWsHDMK3y9MIGOqUB6zNQP0%2BYNPhefSnqzLkMLvsDGqf%2FUej4UkeLB4j%2FR3E8wqx4A74lxB58TtMMo8tcjqoAqByzaIakisUzBJA15qcxgVVvXVwarg7TNmqbTbQLAd2qfP4kgb4N0WGBv7lfipdMjroGBmbN%2BDU1EVdMVktpPregv4eFccpSUZyChXmEBr8TtQI5XmkDd4CMk8jKCJ%2BAYJnA%2FUm1iUcB4kWRdw3YPWnF&X-Amz-Signature=a0032e3225d290f16f9813b12ca82f70207f13fdb563654fb253a2e8385d1f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZPNHFII%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQC0eS0epr5TwV616SfTRASPIhqfTmb6IilxEujcwnbsAAIgKgMm1WQRwlbobCAXbY%2BI5%2F05n5AJ%2BbiCVHXUYnS2b%2Foq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCfp6pUDuzzw7WR%2FOyrcAw3LOEVcisFwHQGQSxDtzcVBO1MKpm3epGQWCANAJwFUyGBldDm7Xg2ChZ8KnyrVIQuiLzZ1%2BQbL4C8lDpommaJ2YbHBdZxhXln9r34RpSgycDJgClEO%2BtjS4kSM%2BuETu%2BfJQshWNhq%2FQGOrAbW1NCeSFe0%2B6uhVgM53iMW8CvvAVgAMfKh8oYNB%2Bo3pWy1TA2I8xb5hoswKjhuA5KUHohx8Rbv5nRlDKmO95sZoSviMLExXWYDJ8LYu%2BW94FK1vdURI%2Fl9AeDVobnBn8gyMDQrfalP4gQWKL7l5xjRkY3sW%2Febmd9wT61eu1HlhzuJnCdb6csv2%2BUYKSwQWNWTPnL1hILi%2Fv8gLQDUaq%2BFcJAXi4nqlH%2BltTkLKUMoeKiLi3fWZxRCN1OD16yiouzw4rLWPVCrrNAWX4xpcEqBAKbLiSTj6pxmIjqa6TidMfq%2FY3kwDKrtZuMNVGOejwtYuX%2FjjDE1NMJO8UR9pVTGAVdw47h5WiRzkexyyat2Kf%2FkO1vgEzJ48oaZHc50Y6nMhwYc3gkm%2BtSyCo4xOvSx4kjQnpbVmFdgHmIKMqws2aLL55sZLhoigBTZvV23hgdKeEn5KuUeUNsvQt1Cx7%2BKWB%2BuW3gUCC7ieqSQ%2FWsHDMK3y9MIGOqUB6zNQP0%2BYNPhefSnqzLkMLvsDGqf%2FUej4UkeLB4j%2FR3E8wqx4A74lxB58TtMMo8tcjqoAqByzaIakisUzBJA15qcxgVVvXVwarg7TNmqbTbQLAd2qfP4kgb4N0WGBv7lfipdMjroGBmbN%2BDU1EVdMVktpPregv4eFccpSUZyChXmEBr8TtQI5XmkDd4CMk8jKCJ%2BAYJnA%2FUm1iUcB4kWRdw3YPWnF&X-Amz-Signature=3718f7146ff6297495cd9e551341e46a8bc0f28cdfdc85cb23b8c01624fca9a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
