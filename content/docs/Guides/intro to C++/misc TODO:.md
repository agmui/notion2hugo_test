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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG2D6Z7N%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7jTEsCiMB%2Fb1Lzq5tUXutf7G%2FzGo%2BJbqBCh%2BbzR2WCgIgdW6FSqCNw9AWWfmDJsgg%2BsIfrrsnYrPapFn1nJieolAqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA30Iv4kKS5PPQNPUyrcAzbMXZbP8hsbfrbtXGzVH9eBQn5TrXg%2FZvcS%2Fai6Z%2BnUuEf14C8Ihiz43blCaux923CixOXI3Z3m7jLam3fwasJ82WpyEQnWESbCxlkyF7wl3GH20w7ctRj3rAL5C%2FM69DVJKYpydmJmvskjR0GiiWwa9Ie7dejEMuds4wqDi5kovQrPg5z223%2FiHlJSxHm8Xk9iBJq9doN4rT3dslwuFCqauqJ4KgvqxnWOwnBimjzG%2B2lpKUt5Aquy%2FSiII6G3CL3PmfgsQ7ai%2F33g%2FjEPmZjhrvQPQXPvQHOF5B1juYUrpzcLZ%2FxmonVnxQ9KjQCjjHX%2FeDN88WG6D7A6RFC6Vl%2ByhsFaK3Gql9dEZNvbck0Of3baYrK40UK9WaPvxhJyeuY3%2B0tzsOqWK5Oc%2BbMUxo5fZZT5oWBOg1IOR%2F9cJypgm6BGcqfEv9DbiYz7ks0UkopC4j47it5pvhJI3tOT8b7B9tsvjx3qeOaHAhZnlG2husVrwmY858neGX6YnFtrD5ZmmZLmMpnSCKR056X0lSxZ1WA1ULxX6EdOwkvXlaXB%2Bz5HQnX2KyHMod6OEdzOeZYcuqn8POVngI4KQjCBeFh0TwBupeQiLjfIDlE1udesnSahn7Qzm%2FQxkIvWMO6S0r4GOqUBYAf%2BcXSs7MWHia46ulq1woeSpLSEQL0jFuGkTxxyottVcIHsk3cnh9ZjkyGcRnjqOpmJ25QBoIlIutrWMA%2FxVjJJbyjEyvW4eQuKS80i8c2oWu78KipoxfjTGBpTg9xX%2FZe6aAfK9ct2An0he3PZ%2FEmymmQOTh4oBsVd2%2F2KvkU%2F6weQR%2B%2FW%2BnpSIhpKmnXvgreUu%2BfTDM7OKBUV0Hpou4UeSDxi&X-Amz-Signature=98d3d0b9046e025165d17a8818e8b869e1ebd3f8b406c839e28d1e4afb2763ac&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG2D6Z7N%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7jTEsCiMB%2Fb1Lzq5tUXutf7G%2FzGo%2BJbqBCh%2BbzR2WCgIgdW6FSqCNw9AWWfmDJsgg%2BsIfrrsnYrPapFn1nJieolAqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA30Iv4kKS5PPQNPUyrcAzbMXZbP8hsbfrbtXGzVH9eBQn5TrXg%2FZvcS%2Fai6Z%2BnUuEf14C8Ihiz43blCaux923CixOXI3Z3m7jLam3fwasJ82WpyEQnWESbCxlkyF7wl3GH20w7ctRj3rAL5C%2FM69DVJKYpydmJmvskjR0GiiWwa9Ie7dejEMuds4wqDi5kovQrPg5z223%2FiHlJSxHm8Xk9iBJq9doN4rT3dslwuFCqauqJ4KgvqxnWOwnBimjzG%2B2lpKUt5Aquy%2FSiII6G3CL3PmfgsQ7ai%2F33g%2FjEPmZjhrvQPQXPvQHOF5B1juYUrpzcLZ%2FxmonVnxQ9KjQCjjHX%2FeDN88WG6D7A6RFC6Vl%2ByhsFaK3Gql9dEZNvbck0Of3baYrK40UK9WaPvxhJyeuY3%2B0tzsOqWK5Oc%2BbMUxo5fZZT5oWBOg1IOR%2F9cJypgm6BGcqfEv9DbiYz7ks0UkopC4j47it5pvhJI3tOT8b7B9tsvjx3qeOaHAhZnlG2husVrwmY858neGX6YnFtrD5ZmmZLmMpnSCKR056X0lSxZ1WA1ULxX6EdOwkvXlaXB%2Bz5HQnX2KyHMod6OEdzOeZYcuqn8POVngI4KQjCBeFh0TwBupeQiLjfIDlE1udesnSahn7Qzm%2FQxkIvWMO6S0r4GOqUBYAf%2BcXSs7MWHia46ulq1woeSpLSEQL0jFuGkTxxyottVcIHsk3cnh9ZjkyGcRnjqOpmJ25QBoIlIutrWMA%2FxVjJJbyjEyvW4eQuKS80i8c2oWu78KipoxfjTGBpTg9xX%2FZe6aAfK9ct2An0he3PZ%2FEmymmQOTh4oBsVd2%2F2KvkU%2F6weQR%2B%2FW%2BnpSIhpKmnXvgreUu%2BfTDM7OKBUV0Hpou4UeSDxi&X-Amz-Signature=2a4e9ac421219cd019b2fd097f0f44f6394a9c1c1b0ebf3a7c55c33e30227380&X-Amz-SignedHeaders=host&x-id=GetObject)

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
