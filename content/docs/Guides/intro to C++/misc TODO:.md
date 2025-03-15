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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW4P4SZJ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTbclcFtEw6Udm3RqKi0Pf0Bwr8P5XkZCj9voRfzgykQIgQKjChh%2BSFTyLwahTTQCJ3ZXfzs2zgTzTl4BK%2B5sepHAq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDKehS93VJsGDPwGgzCrcA8lZ2uQ3YZjIuJHj8wnfWk3vyXOEnPAx6KNDG9m8gLZJHXw1ykQugAcVdb1CXl9CUN7sVwMdpLkVWrnCaaRm4avdjdBslb9MIqpui%2FQR5PHHXAoi7Ci9g9%2FnB9I3uKwvKyKwn1fI28wDjEVyRIs%2FZ3HoxyplTVQ01nsgzhsHPDJsdSrsB0fwcIqxKSKq1C0w5MomPs1FLC7aqdS7Lfck1dCkkXTvp5x1VFAjLMGKvV1jJAm7gR6IkFupRlf%2BBrt5X0f2Gi407mGHSTJqAwdjUUzoc%2BAoq%2BtoUeye7aKcQlBMBbAhpOWJD%2F%2FZ5RnjCl02Nls2kRRzPvzi2KSHOq8sprF%2FEXwFomCsJlUwAacMGx4dVE7wTGGRdlKEleJZ7sMzbuSfdjQxH5Bj1WV5lCxNVZ6jdEh5tjwYyw9NJP6KT8iUtvEE5VCllvIP8yiDA9EHS%2Bi6h2L%2FvaLdskWoEfSQQEKPgNLeDvulCe1strtP3TtC1Cl2pT3lI3wb7ADkByNjdGDcDTvfUcgDmtuzD46MmT8DhjSIy57q602sNW71RJ8TnkVSsS%2B%2Bi%2BNM6GQGIdf0L3aNo6ExLZcVgVdu2mPk6wJtPNXTdoGiqyHt50E%2FzEErHuHj1YN%2B1ECOnA9UMOfh1L4GOqUB%2Bh70visp1yTOZ5eUOdZJw6pbtWq9y%2FhaENdpRxpVcJyYPaZ9SDuIyrprvcwXN%2FhXymNh1xos3U9nAmzBJzvLcTQa2GPv4mpK0aaz0FwXDs1I%2BdmB5rPdbi8yap1GcKz%2B5IAdDZDO5FPKp%2Fz7vyd0ViIorfZYqEHu%2FoxEjXukViGQziZVp13G7uof3HOaPprgSQbeRPY%2F%2Fj6GHN1cBOsn9IOSpy0O&X-Amz-Signature=4d8fecdaa34674bc9a460cf15933a6d3a719c6acb9c73fc3877eaebc8adb8db8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW4P4SZJ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTbclcFtEw6Udm3RqKi0Pf0Bwr8P5XkZCj9voRfzgykQIgQKjChh%2BSFTyLwahTTQCJ3ZXfzs2zgTzTl4BK%2B5sepHAq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDKehS93VJsGDPwGgzCrcA8lZ2uQ3YZjIuJHj8wnfWk3vyXOEnPAx6KNDG9m8gLZJHXw1ykQugAcVdb1CXl9CUN7sVwMdpLkVWrnCaaRm4avdjdBslb9MIqpui%2FQR5PHHXAoi7Ci9g9%2FnB9I3uKwvKyKwn1fI28wDjEVyRIs%2FZ3HoxyplTVQ01nsgzhsHPDJsdSrsB0fwcIqxKSKq1C0w5MomPs1FLC7aqdS7Lfck1dCkkXTvp5x1VFAjLMGKvV1jJAm7gR6IkFupRlf%2BBrt5X0f2Gi407mGHSTJqAwdjUUzoc%2BAoq%2BtoUeye7aKcQlBMBbAhpOWJD%2F%2FZ5RnjCl02Nls2kRRzPvzi2KSHOq8sprF%2FEXwFomCsJlUwAacMGx4dVE7wTGGRdlKEleJZ7sMzbuSfdjQxH5Bj1WV5lCxNVZ6jdEh5tjwYyw9NJP6KT8iUtvEE5VCllvIP8yiDA9EHS%2Bi6h2L%2FvaLdskWoEfSQQEKPgNLeDvulCe1strtP3TtC1Cl2pT3lI3wb7ADkByNjdGDcDTvfUcgDmtuzD46MmT8DhjSIy57q602sNW71RJ8TnkVSsS%2B%2Bi%2BNM6GQGIdf0L3aNo6ExLZcVgVdu2mPk6wJtPNXTdoGiqyHt50E%2FzEErHuHj1YN%2B1ECOnA9UMOfh1L4GOqUB%2Bh70visp1yTOZ5eUOdZJw6pbtWq9y%2FhaENdpRxpVcJyYPaZ9SDuIyrprvcwXN%2FhXymNh1xos3U9nAmzBJzvLcTQa2GPv4mpK0aaz0FwXDs1I%2BdmB5rPdbi8yap1GcKz%2B5IAdDZDO5FPKp%2Fz7vyd0ViIorfZYqEHu%2FoxEjXukViGQziZVp13G7uof3HOaPprgSQbeRPY%2F%2Fj6GHN1cBOsn9IOSpy0O&X-Amz-Signature=f069c00cc5c1be4f645712b5917d037a01052c48585eb2550f3f55ec136accb6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
