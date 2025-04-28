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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666537KCFQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn%2FYwRFsJAKpcxLLozQJ8pu7TusffpZIx0jenal%2BXxFQIhAN7%2BWpX2HrBcEaJKqSXxocsXq85vul3uENlE595YHEt%2BKv8DCGUQABoMNjM3NDIzMTgzODA1IgzrsdQ%2BzHisAFl7GRgq3ANR2IM5XyS40crTh%2BYS%2FMWI5jY%2FazQ76Hp2I%2FI7%2Bq2KgA1RoasdUZ5hA6zlgEygzK2AKX8OskZHENv0iMRAA3pbX1xJkcol%2Ft%2BuO5%2FLjbGN6vDYQrdqG10scWn%2BrQjaw9%2BmA1B%2FZZAdv9JnU1ixq4aSkfDyuOh3FoPMfnHKfO3nVkXodtz7%2BzHM51Sj05CzAh5h04wTPAQQXx85Prnt9tk18y8QBCgEvcmbbDiAlA4aB6RWmC35vx8I2htxCxWz97Z%2FSPJ%2BLo7dPjI6N8%2FDdzpmkh%2FZP9t9rGl%2BG3wIH2OGVdsRPvsQVJpbtltJkOdBKUBkXGQxkfOWwakic9JQxip9oVaXsvvDF7tYIXjDCbMrwgSgVXMjvnaFM2ors3SzjO1VHd6DzC29lFyLcSkh5U9JeK9oI8RinD%2Bkn2GF6h64R7%2BcWmd8k0LO7A97EjjXpDsXiNKRqub8CuKrnZ5bA7GhNrZP2cnMuiWhiZmeDh2QSxlnx40ZUWOrubegpSFnitoVYKbOIPppXOWXgJIGxyJU0QG6Vme%2FDCfFYgUgSyvLHN2eu1PP%2Fjk%2FB2ze6rHBwXH4S9g3cJOWqhtx4vRHfoFW758iIsxypiZVEsSHqg3La%2FiSoC1EfCt6CiFGyzD%2BirrABjqkAafvvhiz2dOtxVni6Hiwyxusqa6N%2FoVRPWFCDT1RzP%2BUvqa4jmsIoP3QZxEF71UIW7fUj2QUhhsFLno7DFHvH%2BSJ1aXNkS1B5h7Rt8Z3xEUCylNGYgqmOykk%2BGzg3fT6l7FEccByFv98QIjUUZwE%2BiydqYEJDPd9%2BVy4hjthk%2Ba8qN6X7QCjORGQ1U5LO6J%2F60Hs79z5CX8W14GHq4BdLGrFFEMX&X-Amz-Signature=56c374157177a696f86979c999069ad984ac7c540123cb0729f0fa2277a2e981&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666537KCFQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn%2FYwRFsJAKpcxLLozQJ8pu7TusffpZIx0jenal%2BXxFQIhAN7%2BWpX2HrBcEaJKqSXxocsXq85vul3uENlE595YHEt%2BKv8DCGUQABoMNjM3NDIzMTgzODA1IgzrsdQ%2BzHisAFl7GRgq3ANR2IM5XyS40crTh%2BYS%2FMWI5jY%2FazQ76Hp2I%2FI7%2Bq2KgA1RoasdUZ5hA6zlgEygzK2AKX8OskZHENv0iMRAA3pbX1xJkcol%2Ft%2BuO5%2FLjbGN6vDYQrdqG10scWn%2BrQjaw9%2BmA1B%2FZZAdv9JnU1ixq4aSkfDyuOh3FoPMfnHKfO3nVkXodtz7%2BzHM51Sj05CzAh5h04wTPAQQXx85Prnt9tk18y8QBCgEvcmbbDiAlA4aB6RWmC35vx8I2htxCxWz97Z%2FSPJ%2BLo7dPjI6N8%2FDdzpmkh%2FZP9t9rGl%2BG3wIH2OGVdsRPvsQVJpbtltJkOdBKUBkXGQxkfOWwakic9JQxip9oVaXsvvDF7tYIXjDCbMrwgSgVXMjvnaFM2ors3SzjO1VHd6DzC29lFyLcSkh5U9JeK9oI8RinD%2Bkn2GF6h64R7%2BcWmd8k0LO7A97EjjXpDsXiNKRqub8CuKrnZ5bA7GhNrZP2cnMuiWhiZmeDh2QSxlnx40ZUWOrubegpSFnitoVYKbOIPppXOWXgJIGxyJU0QG6Vme%2FDCfFYgUgSyvLHN2eu1PP%2Fjk%2FB2ze6rHBwXH4S9g3cJOWqhtx4vRHfoFW758iIsxypiZVEsSHqg3La%2FiSoC1EfCt6CiFGyzD%2BirrABjqkAafvvhiz2dOtxVni6Hiwyxusqa6N%2FoVRPWFCDT1RzP%2BUvqa4jmsIoP3QZxEF71UIW7fUj2QUhhsFLno7DFHvH%2BSJ1aXNkS1B5h7Rt8Z3xEUCylNGYgqmOykk%2BGzg3fT6l7FEccByFv98QIjUUZwE%2BiydqYEJDPd9%2BVy4hjthk%2Ba8qN6X7QCjORGQ1U5LO6J%2F60Hs79z5CX8W14GHq4BdLGrFFEMX&X-Amz-Signature=4311407a9dc1386cfab6438a97f4574b782555a9633d9b01f99093b941e7bf68&X-Amz-SignedHeaders=host&x-id=GetObject)

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
