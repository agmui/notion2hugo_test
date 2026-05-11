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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5VEJYKU%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCNr6%2FoyZ8fwjKg5rTVKsTx5iDMqdIIH%2BCYgycCAEgTegIhAJWwrpOuBjJ6ZMk3HftCoy7tthEQDDs0WHVJwoNFAmF7Kv8DCAwQABoMNjM3NDIzMTgzODA1IgwkdafPjtBCh6t8OhMq3AOMl5fuK8xKIMF5yzur7%2BLzUWMvw%2BqSk8JEUvBeoHlCs41Ng%2FZwxY5zGIxQn7%2FgONJQZjywI%2FWnns3BhH0hsaTlTyJa%2ByN8TnAJ0yKqm7bt5%2BjD1uD8g1x8MQQpQ1jG9U2ftroLlGEds2FKwoQrvzWrDPzbZ07qBlUBmh7javnogpjYsUb8Fh5ual%2FF54eycFq6U%2FOd5KmJxywmO5bJtZ%2Fg3DpUUQkS1%2FhZ56TI%2BmPqyNrMNUTzi2vP5xit6L693MGvyGpeiruKJVEPYNvLAwOpel8iCBiweu5GUbCUZgN9uMGkNo20a9TwHKXLU%2FI1qA6Hc6NtnX5f97NUXHzKFEt2j%2B4hXq5roPGm8DO6%2BvM5TMv%2BXLG5QwhjzPr3mEl%2BMfAfuRFn%2FXREcbrs005W9XKq7PenisQaIqufwJQfmzNeTDmJkBpWfmFcZB9vAcsdSIacmU2vpgOMRz0Myzs5t382V%2Fx%2B0YDEOTSKe%2BPbcHP0dH3XBULna35h45MYtkThQC24mxx6AdJuY0Zmjh%2F5RBbIVaPrQWENfjeM1L65J0k9CsYS9jB2V58OmLC7FnHaE11Eb5GdlL4L3XW18WFJZucQcdgkfzVD0%2FTDcKbh20nMT1y4f0nqcgi8EI3tezCNhIXQBjqkASse3Gl9VbO9ZudyoQJai3BGmMmCtVS0ASn%2F4T%2FEF%2BQZPnwnuGRA1BBCDfq1B6%2BWLfyXLRQcHQf4Y21AaoEIGm3tgfWNOvfkeCJJ5ciRzoo6SLSW6cOeSes4BKWSgmnKlKcGEIldNRxAM%2BNa%2FMSfDgUQs1wsCGyxQtWzbQC%2FGaqxNc%2BuR6uUzZSN42iXzYhSWN8oh0kTV3%2FXa5l8AqSVde3O6V%2FY&X-Amz-Signature=96cc42dc9834276db9e829aab026ea0e298106968c13f8558a8681a9ae301920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5VEJYKU%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCNr6%2FoyZ8fwjKg5rTVKsTx5iDMqdIIH%2BCYgycCAEgTegIhAJWwrpOuBjJ6ZMk3HftCoy7tthEQDDs0WHVJwoNFAmF7Kv8DCAwQABoMNjM3NDIzMTgzODA1IgwkdafPjtBCh6t8OhMq3AOMl5fuK8xKIMF5yzur7%2BLzUWMvw%2BqSk8JEUvBeoHlCs41Ng%2FZwxY5zGIxQn7%2FgONJQZjywI%2FWnns3BhH0hsaTlTyJa%2ByN8TnAJ0yKqm7bt5%2BjD1uD8g1x8MQQpQ1jG9U2ftroLlGEds2FKwoQrvzWrDPzbZ07qBlUBmh7javnogpjYsUb8Fh5ual%2FF54eycFq6U%2FOd5KmJxywmO5bJtZ%2Fg3DpUUQkS1%2FhZ56TI%2BmPqyNrMNUTzi2vP5xit6L693MGvyGpeiruKJVEPYNvLAwOpel8iCBiweu5GUbCUZgN9uMGkNo20a9TwHKXLU%2FI1qA6Hc6NtnX5f97NUXHzKFEt2j%2B4hXq5roPGm8DO6%2BvM5TMv%2BXLG5QwhjzPr3mEl%2BMfAfuRFn%2FXREcbrs005W9XKq7PenisQaIqufwJQfmzNeTDmJkBpWfmFcZB9vAcsdSIacmU2vpgOMRz0Myzs5t382V%2Fx%2B0YDEOTSKe%2BPbcHP0dH3XBULna35h45MYtkThQC24mxx6AdJuY0Zmjh%2F5RBbIVaPrQWENfjeM1L65J0k9CsYS9jB2V58OmLC7FnHaE11Eb5GdlL4L3XW18WFJZucQcdgkfzVD0%2FTDcKbh20nMT1y4f0nqcgi8EI3tezCNhIXQBjqkASse3Gl9VbO9ZudyoQJai3BGmMmCtVS0ASn%2F4T%2FEF%2BQZPnwnuGRA1BBCDfq1B6%2BWLfyXLRQcHQf4Y21AaoEIGm3tgfWNOvfkeCJJ5ciRzoo6SLSW6cOeSes4BKWSgmnKlKcGEIldNRxAM%2BNa%2FMSfDgUQs1wsCGyxQtWzbQC%2FGaqxNc%2BuR6uUzZSN42iXzYhSWN8oh0kTV3%2FXa5l8AqSVde3O6V%2FY&X-Amz-Signature=9d5ce1e07c1dd16672242d0c4758cfec5e81e3d539a238ff93c25d6649acca96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
