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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S276HAB%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHrQMx2gbah%2FOCs2r5MRVbQMCZHQzHbDjeQ%2BJOC91Jd7AiAKGyt4ymSeO3SLDpn2Tfe0cNgAEiY03qzA6BBdaxWFJCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkY3AwncRlj0h9B6FKtwD2bJ6RveJN93MPORE%2FsP%2Bj5T75nWLZ5pfZ2lP9BT%2FJEZi8mxW2kqjxQVpmj9%2FUhTJ0%2B1hFH9d%2BMEZkQaYqy2O%2FMVP7A0FyZXpsN59lRacjskuHGy5xWvnLSK8g34iNpM2TnXH7Rh9p6KWAVkNzz3lmQ10xnNH%2BP%2FeqlDnr%2BXSYZaYdWakyk0bBjNJKc7koWxl6zVBOekv3U%2F4amVXZXUPBci2HdfLfUyMAnvOzMsAKsy%2BE3qU5kEzhx8EOKu1YkDtV7qH%2FwV5G6mSBE1651k5lnYq3Q39UbBuX%2FbC6oRbHVqC%2FjfjfXApG2Q8PXZ%2FALx2KYEo%2B7fEH5dUhzfWGTUTUQevNwocnQO7m%2Bl65XxpD1WjKQEeiZmqjn24h5OjYjJMhC%2FLhNTyQoSpA9iXOJObLShSOkMYac94Rc4eSR2ooZQnVm5HC2bQ026nu0Sb4HBlUCugSC3leO372IbKwcpoQo5K1zyWSyfHQ1xT6pVL0hUVvDeFKTm8PVSgm7WiupFMk8kTFXZTmbm6Vde4cg1kKsx9BScqzYUka4CSl1P5CfKD41dHNr6zevLObq%2FhQhOcM82%2FSOCxIv9Jy0yIbYhGmPIN5OtB%2Bypgb%2BDSHbO8cF4Mn98MziQh1Z9%2Fv5cwo8navwY6pgHCkLLJFzLtJZDzIbjPxtIKAwg1tgc9pOkjpW9yKXVo3bASuIqYloCWhINecQ41ZVwysdtyQZjw8WK00ulH50Hwz3BEHueEGJm9Xxh121sjTO6e4UB8TFWaP6NmtCWeIDQrP%2FXDAfUKUmL3fvmjmvOL8mxmyK7bMEenJkE40qXMu62RyrhQZMo%2BU43eBBxCkyLjO3bncHo7%2BmXDJnYi0qB%2Boq%2Bfaqdy&X-Amz-Signature=98c6bcd5e9f67c601edb99ebc285dd547f28cf4849869d2841dc63e4c5d54f6e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S276HAB%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHrQMx2gbah%2FOCs2r5MRVbQMCZHQzHbDjeQ%2BJOC91Jd7AiAKGyt4ymSeO3SLDpn2Tfe0cNgAEiY03qzA6BBdaxWFJCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkY3AwncRlj0h9B6FKtwD2bJ6RveJN93MPORE%2FsP%2Bj5T75nWLZ5pfZ2lP9BT%2FJEZi8mxW2kqjxQVpmj9%2FUhTJ0%2B1hFH9d%2BMEZkQaYqy2O%2FMVP7A0FyZXpsN59lRacjskuHGy5xWvnLSK8g34iNpM2TnXH7Rh9p6KWAVkNzz3lmQ10xnNH%2BP%2FeqlDnr%2BXSYZaYdWakyk0bBjNJKc7koWxl6zVBOekv3U%2F4amVXZXUPBci2HdfLfUyMAnvOzMsAKsy%2BE3qU5kEzhx8EOKu1YkDtV7qH%2FwV5G6mSBE1651k5lnYq3Q39UbBuX%2FbC6oRbHVqC%2FjfjfXApG2Q8PXZ%2FALx2KYEo%2B7fEH5dUhzfWGTUTUQevNwocnQO7m%2Bl65XxpD1WjKQEeiZmqjn24h5OjYjJMhC%2FLhNTyQoSpA9iXOJObLShSOkMYac94Rc4eSR2ooZQnVm5HC2bQ026nu0Sb4HBlUCugSC3leO372IbKwcpoQo5K1zyWSyfHQ1xT6pVL0hUVvDeFKTm8PVSgm7WiupFMk8kTFXZTmbm6Vde4cg1kKsx9BScqzYUka4CSl1P5CfKD41dHNr6zevLObq%2FhQhOcM82%2FSOCxIv9Jy0yIbYhGmPIN5OtB%2Bypgb%2BDSHbO8cF4Mn98MziQh1Z9%2Fv5cwo8navwY6pgHCkLLJFzLtJZDzIbjPxtIKAwg1tgc9pOkjpW9yKXVo3bASuIqYloCWhINecQ41ZVwysdtyQZjw8WK00ulH50Hwz3BEHueEGJm9Xxh121sjTO6e4UB8TFWaP6NmtCWeIDQrP%2FXDAfUKUmL3fvmjmvOL8mxmyK7bMEenJkE40qXMu62RyrhQZMo%2BU43eBBxCkyLjO3bncHo7%2BmXDJnYi0qB%2Boq%2Bfaqdy&X-Amz-Signature=8b52daf6cb61f783e1dddc79daa256dc69945cb8232b03bd923909bfdedc9597&X-Amz-SignedHeaders=host&x-id=GetObject)

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
