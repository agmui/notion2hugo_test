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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAIYIMFH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDdlaZ0wvfPzpjhzaf6nTYOP2g1SeRXv6KuawqqOtACugIgK%2Fgo8hxWNBqHW0zxIjVkaX7o4Qq7o0YX9gYjJ8OCnxIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFrD5nLhsOg%2FKLTJtSrcA0OnE4uvalc9Zu0FKGBZgWPpnBG5CnY2Eu5QVTPNYxMykv0gFz4%2Fn1l%2FG%2FTsljCxecDbCsExQbOu8nL3z9Xn22bJZOfZX1zwDJgQFP6roeW9Xa3LLNXLUDDn843vZGcnGymNrjjuSKXKH9qaq8eGmlAiy0hJIvjIj7JiqTbFdy3JSMeJxeAChd02jpqrvDTm5gejmyx2wK5%2BG4DoG1%2FD%2F1sH5eKvLCnsUbKDeMg7JKWahI8Y3q%2B4mOklS6WK4RL%2FhTEQkldHAlQrbpIq8P%2BmahAQZgDKxZv6uduq%2BYZZL%2FliG1qlDHmSkm3q%2BtpeC%2BQYC31Pvc8TQwSvWtGT%2BlB57fHPLxLE7Et7FC6xOlvg4LbsGzaSgrIwk4ug2wd8RlHhEZMj%2F2X7p2hdDzHOl%2FyiSNVg4QfNA5Xk1QNDA5xbQFtTV8UlfUyHZAt6EUE7mGLzEWtBCvH%2FoeSKXdGbb7ibII5lJ%2FRE66tmmu416Uy4vQMQ1bAFf5aHBKtakkKGJFAla7nnP3D%2FzllJMvNq2ldWbzqYfVklLkL3noqUc78nCBoGJvKBjlTGkuZXFKQ%2FqDCbZdnm9qeTOuFtJwdEoP5RfLKIspNFiDsg0M0CcoVxcUHbMDZSvx7DSMvYM%2BqPMNu1kb0GOqUBU01JesI8CkLclXlE5BDY00eszWCv4x%2FZYLwP1GeYjzNEb9NlexiSCxlBx1d7CjwgEn9JNXYCD5GcKmOJ5wf%2BDuIhfNm20aGGz%2BQ2eGX3%2FxOcPK68vTbDlk9ebGvlwD26FJpKgp7RWTK9iWjnUn9SujbjGPeEqoXClCgtsIwDclxCJNcu7ZPJF9zgzZWtiXGhAvhYc6NneBYL%2F6jKCLbhkR5w3Njb&X-Amz-Signature=7b4c962ae5b577de06ff4f05e1c78a1cf5fc3a79dd7bd0fa3080b946591933a6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAIYIMFH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDdlaZ0wvfPzpjhzaf6nTYOP2g1SeRXv6KuawqqOtACugIgK%2Fgo8hxWNBqHW0zxIjVkaX7o4Qq7o0YX9gYjJ8OCnxIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFrD5nLhsOg%2FKLTJtSrcA0OnE4uvalc9Zu0FKGBZgWPpnBG5CnY2Eu5QVTPNYxMykv0gFz4%2Fn1l%2FG%2FTsljCxecDbCsExQbOu8nL3z9Xn22bJZOfZX1zwDJgQFP6roeW9Xa3LLNXLUDDn843vZGcnGymNrjjuSKXKH9qaq8eGmlAiy0hJIvjIj7JiqTbFdy3JSMeJxeAChd02jpqrvDTm5gejmyx2wK5%2BG4DoG1%2FD%2F1sH5eKvLCnsUbKDeMg7JKWahI8Y3q%2B4mOklS6WK4RL%2FhTEQkldHAlQrbpIq8P%2BmahAQZgDKxZv6uduq%2BYZZL%2FliG1qlDHmSkm3q%2BtpeC%2BQYC31Pvc8TQwSvWtGT%2BlB57fHPLxLE7Et7FC6xOlvg4LbsGzaSgrIwk4ug2wd8RlHhEZMj%2F2X7p2hdDzHOl%2FyiSNVg4QfNA5Xk1QNDA5xbQFtTV8UlfUyHZAt6EUE7mGLzEWtBCvH%2FoeSKXdGbb7ibII5lJ%2FRE66tmmu416Uy4vQMQ1bAFf5aHBKtakkKGJFAla7nnP3D%2FzllJMvNq2ldWbzqYfVklLkL3noqUc78nCBoGJvKBjlTGkuZXFKQ%2FqDCbZdnm9qeTOuFtJwdEoP5RfLKIspNFiDsg0M0CcoVxcUHbMDZSvx7DSMvYM%2BqPMNu1kb0GOqUBU01JesI8CkLclXlE5BDY00eszWCv4x%2FZYLwP1GeYjzNEb9NlexiSCxlBx1d7CjwgEn9JNXYCD5GcKmOJ5wf%2BDuIhfNm20aGGz%2BQ2eGX3%2FxOcPK68vTbDlk9ebGvlwD26FJpKgp7RWTK9iWjnUn9SujbjGPeEqoXClCgtsIwDclxCJNcu7ZPJF9zgzZWtiXGhAvhYc6NneBYL%2F6jKCLbhkR5w3Njb&X-Amz-Signature=50fc88647f3e1eb6afc4302c3f6b04f482010b4bdff6a4adc912b2f0333ebdae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
