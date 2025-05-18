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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636EKBE7A%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSi3vRQ1LaggX%2FGso%2F7Q9dV8HyzlQT3qNqX%2FlYtXpA3wIgZVBiTqofIdiSOpIuKyz%2BWlzub66YAdG%2FEgR5CPwv7lwq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDIkKLhI0zcjrUDQpqSrcA7k9pL55t1FjbgO%2B8wwg7W7rLkXhISt4BhXwQk9e5l8mP61HwuWUU0C8bacJqvP2lyHKUWbYXlonNzNpNuyHCWfdxRHsjUpMHrWePzwkmIaPfe9hRGgFQN%2FAsZVoY6lNnLZzq5Akn%2F%2B462IL9lHEbGxi9CdyOoD%2BjslWT9wJ%2Be4RU0OvM%2F77ESX2wkHB29CZiX%2FPswigq%2BZvPbZ48UAvCps%2BJfGnwBdItDvZti6OssrvJ5FECWcWZL7LjIl8FgHwZ2BoYiXrB%2FFNi0Di5q9s%2FySj89IXptitKkFb7pt5kqX%2FASwOqYlqsgHYan2IFm9DlhkAAQssK8qdH7aOwpaxq8Y%2F2DDEau2wDd6kmPN4lQD1NjgH1GAYSsFpIgES1NzF0Ca%2BaMSso0sQbkrSdsXIt4tlgVjMtx8pQbHrHzPbAEuh9jaE8UwUbRddOYkqDwJ9ezFIrwsh9snI3hPEuPKXSzD%2BXkeraxTOHBflS4UsdiMEKDeri18GkqEn9gX4s8UI0JDopSk5s%2FV6ENAxHx3CoyN9IXlF4O%2B8tmsJu5VWjR%2BXLwIX5fWJIXFMuJMxI968CAc%2FFReppFaOXH%2BCjmdq6gpdkBT4Bxi8ZZY3W4OSaYT7mvbYUDMhpmd5TQmlMLvXpMEGOqUBIrC6T9UYv8ES4eqVtvLNgx3ti89bYcl20ZDulFV5bnsA5XfbRDQyyh8IQ8ty6X%2BpOib%2Flv2TNLX6awCNSxxUWvylh2uT45P935eP51DR8ROnCi3YkHor2pdLXWarQS9qhgN5C1Lf2kErQ7qejJWk%2F00ezI8CfT%2BoKoqD2ef2RsWLXKjiCHNmvC%2BwLuMwuVtyEOmqMhemVwiPLlkMsA5wVj%2F5KFlk&X-Amz-Signature=d28dbdd15318521293aa26a3e44e85fba4e7d0f515216d099019b6f9efbc4198&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636EKBE7A%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSi3vRQ1LaggX%2FGso%2F7Q9dV8HyzlQT3qNqX%2FlYtXpA3wIgZVBiTqofIdiSOpIuKyz%2BWlzub66YAdG%2FEgR5CPwv7lwq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDIkKLhI0zcjrUDQpqSrcA7k9pL55t1FjbgO%2B8wwg7W7rLkXhISt4BhXwQk9e5l8mP61HwuWUU0C8bacJqvP2lyHKUWbYXlonNzNpNuyHCWfdxRHsjUpMHrWePzwkmIaPfe9hRGgFQN%2FAsZVoY6lNnLZzq5Akn%2F%2B462IL9lHEbGxi9CdyOoD%2BjslWT9wJ%2Be4RU0OvM%2F77ESX2wkHB29CZiX%2FPswigq%2BZvPbZ48UAvCps%2BJfGnwBdItDvZti6OssrvJ5FECWcWZL7LjIl8FgHwZ2BoYiXrB%2FFNi0Di5q9s%2FySj89IXptitKkFb7pt5kqX%2FASwOqYlqsgHYan2IFm9DlhkAAQssK8qdH7aOwpaxq8Y%2F2DDEau2wDd6kmPN4lQD1NjgH1GAYSsFpIgES1NzF0Ca%2BaMSso0sQbkrSdsXIt4tlgVjMtx8pQbHrHzPbAEuh9jaE8UwUbRddOYkqDwJ9ezFIrwsh9snI3hPEuPKXSzD%2BXkeraxTOHBflS4UsdiMEKDeri18GkqEn9gX4s8UI0JDopSk5s%2FV6ENAxHx3CoyN9IXlF4O%2B8tmsJu5VWjR%2BXLwIX5fWJIXFMuJMxI968CAc%2FFReppFaOXH%2BCjmdq6gpdkBT4Bxi8ZZY3W4OSaYT7mvbYUDMhpmd5TQmlMLvXpMEGOqUBIrC6T9UYv8ES4eqVtvLNgx3ti89bYcl20ZDulFV5bnsA5XfbRDQyyh8IQ8ty6X%2BpOib%2Flv2TNLX6awCNSxxUWvylh2uT45P935eP51DR8ROnCi3YkHor2pdLXWarQS9qhgN5C1Lf2kErQ7qejJWk%2F00ezI8CfT%2BoKoqD2ef2RsWLXKjiCHNmvC%2BwLuMwuVtyEOmqMhemVwiPLlkMsA5wVj%2F5KFlk&X-Amz-Signature=0a0ac74d11de1e36731bdf24d558d3fee5a15a0cff088ca3ba9a4b25a13e9b9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
