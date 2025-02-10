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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZINHIBVC%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOs6d7um7K0YNwVJYGGvAkGkLBX7SwMRxdOtgJa42oqgIgLA6noy6OLkoSChbDmgiplqxq6%2FbJd57a6%2F5Cfr3ESOwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAwmfWDbiB0ZmVzGyrcA%2BBRurK6g9J%2BpHbuZ9kg1R%2BXhJBqsRVBMjFMEgopdAVJvnTReHlwZemztInNJY2NaPOw%2FZE2vTMqLokHl4ktpK%2F5A6z9Xy42YpwA%2Fs83eNGolKIX1qbtP9bBboCTuO3ewPF5Bzj2sZV7KK9IqiHUHNzjH1dyAIqEr4rqFVbFV6QNzQh0e5Cif92R6QgZqJ0zriG6LMZelwm1jrr6FDcv5Fg6ge63zMJbfmIo1Q7W7N47bdqPNlt5GVeAyr3XahSFNDUA8e%2FuEUNcK5lejShSxVB3KFb59WwGI9ce7VmH4e0LJOQNpzvu%2FjjP9DodXnWCG%2Frvmtvza6WQclev6heEL2ET3hht%2BxVr2xvg8PC0hdJhS%2F%2BG7koEwZlE7tvkDeQXaJ4ACH2xdfPU8YXUjVrc7p3KgAu4jnOUsniMbxQ5IOxzqizM0t3j759QgSIzgT%2B7LcYoTG9OmcnIWAdXGalcgpJpYWGo8IhLhepleJilDomt%2FwL2cZJSSqpHSFO%2BageUWh6Ih6sIRzBjVCOFxi8Jau6Wch0XZV1M2NoJWEsEQ7DGuCwDiGCd2cuyxd%2FCpXt6A2l0D4H6biR%2BWOkIsbcmL6W6XbCSZhFO7TyE5Brte0AlRW95bKj%2BToPHU6dXMNmbpb0GOqUBHuxbm2kHpGNlUYDtFZsOgJZwgKkZ2%2Faamo0z0aUyh3lH48X6vB0Jem7tx6CLMhxsdyvuK8IRII1dD9wA7TNa3gz4KHyP4tXzXs0RJkDyd7XeNXCS8fRMHNgKPzQ08yXB1Aqh9XM2yPf%2F8tL6CWHU2%2BBXmGK1XLI%2B3jIx31bP35K5JZD15ALav5efjU7nAwvkRWvzRfPJcgnXgP4LVN4kS%2Bio5kzL&X-Amz-Signature=f1643524752a331a11ef8cd968dbb1ebd53cd0587419cf7c30fc2f531dd87fb3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZINHIBVC%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOs6d7um7K0YNwVJYGGvAkGkLBX7SwMRxdOtgJa42oqgIgLA6noy6OLkoSChbDmgiplqxq6%2FbJd57a6%2F5Cfr3ESOwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAwmfWDbiB0ZmVzGyrcA%2BBRurK6g9J%2BpHbuZ9kg1R%2BXhJBqsRVBMjFMEgopdAVJvnTReHlwZemztInNJY2NaPOw%2FZE2vTMqLokHl4ktpK%2F5A6z9Xy42YpwA%2Fs83eNGolKIX1qbtP9bBboCTuO3ewPF5Bzj2sZV7KK9IqiHUHNzjH1dyAIqEr4rqFVbFV6QNzQh0e5Cif92R6QgZqJ0zriG6LMZelwm1jrr6FDcv5Fg6ge63zMJbfmIo1Q7W7N47bdqPNlt5GVeAyr3XahSFNDUA8e%2FuEUNcK5lejShSxVB3KFb59WwGI9ce7VmH4e0LJOQNpzvu%2FjjP9DodXnWCG%2Frvmtvza6WQclev6heEL2ET3hht%2BxVr2xvg8PC0hdJhS%2F%2BG7koEwZlE7tvkDeQXaJ4ACH2xdfPU8YXUjVrc7p3KgAu4jnOUsniMbxQ5IOxzqizM0t3j759QgSIzgT%2B7LcYoTG9OmcnIWAdXGalcgpJpYWGo8IhLhepleJilDomt%2FwL2cZJSSqpHSFO%2BageUWh6Ih6sIRzBjVCOFxi8Jau6Wch0XZV1M2NoJWEsEQ7DGuCwDiGCd2cuyxd%2FCpXt6A2l0D4H6biR%2BWOkIsbcmL6W6XbCSZhFO7TyE5Brte0AlRW95bKj%2BToPHU6dXMNmbpb0GOqUBHuxbm2kHpGNlUYDtFZsOgJZwgKkZ2%2Faamo0z0aUyh3lH48X6vB0Jem7tx6CLMhxsdyvuK8IRII1dD9wA7TNa3gz4KHyP4tXzXs0RJkDyd7XeNXCS8fRMHNgKPzQ08yXB1Aqh9XM2yPf%2F8tL6CWHU2%2BBXmGK1XLI%2B3jIx31bP35K5JZD15ALav5efjU7nAwvkRWvzRfPJcgnXgP4LVN4kS%2Bio5kzL&X-Amz-Signature=763459cd18683ade15d94d3ebdbcb5332f660b7537147d18705e2d8bd1c9bd52&X-Amz-SignedHeaders=host&x-id=GetObject)

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
