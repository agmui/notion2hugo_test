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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NZ5DO4J%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBqt4FItWFP6nNK6QPpvy3kBMwTP7N3ABT5XVwN61Te8AiEAhe7HBbIk%2BMSa7lr4GuBsfOQ5pvVTeRbdDB2YEH30cSUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDI3uZ6fwE1I8JuucECrcAzXKLuSzKAuN4IB6C24jCtWYRprm0ZwynJvl%2BtjRhdUKKe4sayRa2W5qHbAEb7ikiQig6mB4v%2BGfdtfp%2BSaJZOq6hvfcZrwOvq%2BFUIclj%2FQ3pNRmLw9yyfGxLoeHDd79zQ07db3wAH28kcnihLOV9itsju%2Fy1UpiNgROo%2BOc08cSQiz9xJG4qELONCdeWtY%2FgFhmebWCdXktgLKdcRyS6xPYP12%2BDQ1ySJDgr9YqXgxR0QqSX18roTmo8%2FNO3U94deUQF4ODE8vjdwLHZ9%2BgCnP09EZvaZB6f3oszoFozFFKN4HVbStJTiBloMGzxf9oM%2BO1LCgvUiaPvgjo%2BCrwMj%2FBxqiAzMCyPhe4K%2FaAkmNDGH5FNobk4B%2B8OA7Mom1nuuoRd9aCyGC4V4bF46GT4kLfPzZN4hvH16Fjy0WnaV46xGX0eAtzbjokfTrNdkJg8X2pr8LX%2FE2z7GS56ZFc7vLF3vf0rI4ufAY5hH3PfcX%2FiIjl%2F2756ByJdNFAGB53AfeyQcMtFuf58BhZhQvAedYx8fzhQ%2FJPpHxwa%2FLY63NgiCrzsH%2BMxm7cPx8bLbIog2LBh6CB2Lbs14Pd9u2Na66GrzdRk8EhTcxalXSsh9LAX3e9IBBHR%2BHgDQywMKDpy70GOqUBIA2XfXbtvPewe4sgqxWfYO1A7MKxLduWfPJboofB5LTHNUhecyR%2BYZdi2Va978WnWUvvJ%2BbOlyTJe7drWMghIrXJQvE2p%2BuK9GJovoIDrODASQaXkO0MvVVyZMPlQUm4kHOa9g%2FEoAqy4TiGT10JJ01aNY0KAUKnUoD6Q4vUtJqvG5b2Io0vk65C75Upr7JiE3mKoXWj6OS6dx4779Z4GsmCpfwQ&X-Amz-Signature=675d3b26b7732019e981ab23b630b924c90c12393efa008520fb82417bf57ec9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NZ5DO4J%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBqt4FItWFP6nNK6QPpvy3kBMwTP7N3ABT5XVwN61Te8AiEAhe7HBbIk%2BMSa7lr4GuBsfOQ5pvVTeRbdDB2YEH30cSUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDI3uZ6fwE1I8JuucECrcAzXKLuSzKAuN4IB6C24jCtWYRprm0ZwynJvl%2BtjRhdUKKe4sayRa2W5qHbAEb7ikiQig6mB4v%2BGfdtfp%2BSaJZOq6hvfcZrwOvq%2BFUIclj%2FQ3pNRmLw9yyfGxLoeHDd79zQ07db3wAH28kcnihLOV9itsju%2Fy1UpiNgROo%2BOc08cSQiz9xJG4qELONCdeWtY%2FgFhmebWCdXktgLKdcRyS6xPYP12%2BDQ1ySJDgr9YqXgxR0QqSX18roTmo8%2FNO3U94deUQF4ODE8vjdwLHZ9%2BgCnP09EZvaZB6f3oszoFozFFKN4HVbStJTiBloMGzxf9oM%2BO1LCgvUiaPvgjo%2BCrwMj%2FBxqiAzMCyPhe4K%2FaAkmNDGH5FNobk4B%2B8OA7Mom1nuuoRd9aCyGC4V4bF46GT4kLfPzZN4hvH16Fjy0WnaV46xGX0eAtzbjokfTrNdkJg8X2pr8LX%2FE2z7GS56ZFc7vLF3vf0rI4ufAY5hH3PfcX%2FiIjl%2F2756ByJdNFAGB53AfeyQcMtFuf58BhZhQvAedYx8fzhQ%2FJPpHxwa%2FLY63NgiCrzsH%2BMxm7cPx8bLbIog2LBh6CB2Lbs14Pd9u2Na66GrzdRk8EhTcxalXSsh9LAX3e9IBBHR%2BHgDQywMKDpy70GOqUBIA2XfXbtvPewe4sgqxWfYO1A7MKxLduWfPJboofB5LTHNUhecyR%2BYZdi2Va978WnWUvvJ%2BbOlyTJe7drWMghIrXJQvE2p%2BuK9GJovoIDrODASQaXkO0MvVVyZMPlQUm4kHOa9g%2FEoAqy4TiGT10JJ01aNY0KAUKnUoD6Q4vUtJqvG5b2Io0vk65C75Upr7JiE3mKoXWj6OS6dx4779Z4GsmCpfwQ&X-Amz-Signature=56e93e8bfadacb526f17f650da4e285c4d7464c51d661eb1201ff77883b0057d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
