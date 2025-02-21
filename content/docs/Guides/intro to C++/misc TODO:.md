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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KJVJS26%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuGIO3AcXhEJMnRxWojNys6fKf3by1GHGENgF2lbwlGAiAevRSfAgjZuEjCwvaWDT1xHNqjllxd%2BUPln16d2jggpiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2BcgCWU16BZEpC75KtwDAoMO8u4TMweV00PKlJ%2Bo6X%2BtycbuqDPD1Mrsa%2FXLUDjlbxGxfc8ZFJtOyP4wWKCNUgE9oXJnCkM6s6YUw9cZxGGTWCHnMQJ4eVsa7qMpwURo1fQnqDL7bZ%2BH8%2BAsRLPmyhii%2BADi%2FO%2B3kyHnTivSugA9IBu%2BxUQS4ZvjVpST7LzvXP%2B49dlL8DJXAihmuznGKjyCfM4kfO20Oe8O1fKMm%2FH5GL8cZpuOcNNhtDS2UJneGrfR%2FGIsscZkCCepgC1QG7WfCXQcqEkVIDN1jq0hw%2F8aT7MCQ9cR2wxpD2zlkP4liG3IEbj22N77tAJli50IW5rfpqMBGQA7v3AgiWWwdpzC7GoROwJRZun8W%2FaZMnRMQWvzgw7284qXg%2BVB5AfFuYJrRUj%2BYnXO%2FHQWcaKhrZeOVJAXZwBzPXUsSjegeaO4BnHY5631KODVlyab9NGUYNUwImu9zkfIqQeWz6C4Igez2nqAsYkVv17n1GzYlWaHWahCmQkQjJPVksE9Q11DaCuuaOzznWACx%2Bwc7oKOMsZBb%2FEjRG0c3ewfFD9F3FHGBt42KxtN2OmnjfEJKi6WN9%2FeCTCOMQXgPpvhpPZCToPd0wLkXjivT2JzU4%2BtU2q1BqbBTS4J%2FMi2sLIw%2BrvjvQY6pgGMornHtxcMRb%2FlA0NjpYd88vssUY%2BW7UDip3%2FnnHAeYrd0BQCwJDMIt%2BoPD%2Bd0FTWFWlZnq2tqX38jLIGe4pcr7meCdbr8Pg%2FBowANYsrjz%2BGK4u2v2T48wiG38xqkKkmj%2B8IBjGyHVeN6amqxVL1vjQWrffXF6L5CTjHosIdfhyQqLY%2BNlw8uYwx%2FMR3gX52ekQdH%2BRpNoUhe5%2Fx5zKBIxa1dmv30&X-Amz-Signature=c66de1539a8b5e72ac66001786908dbd5e1108f06dab402028a4762c826d5cf0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KJVJS26%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuGIO3AcXhEJMnRxWojNys6fKf3by1GHGENgF2lbwlGAiAevRSfAgjZuEjCwvaWDT1xHNqjllxd%2BUPln16d2jggpiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2BcgCWU16BZEpC75KtwDAoMO8u4TMweV00PKlJ%2Bo6X%2BtycbuqDPD1Mrsa%2FXLUDjlbxGxfc8ZFJtOyP4wWKCNUgE9oXJnCkM6s6YUw9cZxGGTWCHnMQJ4eVsa7qMpwURo1fQnqDL7bZ%2BH8%2BAsRLPmyhii%2BADi%2FO%2B3kyHnTivSugA9IBu%2BxUQS4ZvjVpST7LzvXP%2B49dlL8DJXAihmuznGKjyCfM4kfO20Oe8O1fKMm%2FH5GL8cZpuOcNNhtDS2UJneGrfR%2FGIsscZkCCepgC1QG7WfCXQcqEkVIDN1jq0hw%2F8aT7MCQ9cR2wxpD2zlkP4liG3IEbj22N77tAJli50IW5rfpqMBGQA7v3AgiWWwdpzC7GoROwJRZun8W%2FaZMnRMQWvzgw7284qXg%2BVB5AfFuYJrRUj%2BYnXO%2FHQWcaKhrZeOVJAXZwBzPXUsSjegeaO4BnHY5631KODVlyab9NGUYNUwImu9zkfIqQeWz6C4Igez2nqAsYkVv17n1GzYlWaHWahCmQkQjJPVksE9Q11DaCuuaOzznWACx%2Bwc7oKOMsZBb%2FEjRG0c3ewfFD9F3FHGBt42KxtN2OmnjfEJKi6WN9%2FeCTCOMQXgPpvhpPZCToPd0wLkXjivT2JzU4%2BtU2q1BqbBTS4J%2FMi2sLIw%2BrvjvQY6pgGMornHtxcMRb%2FlA0NjpYd88vssUY%2BW7UDip3%2FnnHAeYrd0BQCwJDMIt%2BoPD%2Bd0FTWFWlZnq2tqX38jLIGe4pcr7meCdbr8Pg%2FBowANYsrjz%2BGK4u2v2T48wiG38xqkKkmj%2B8IBjGyHVeN6amqxVL1vjQWrffXF6L5CTjHosIdfhyQqLY%2BNlw8uYwx%2FMR3gX52ekQdH%2BRpNoUhe5%2Fx5zKBIxa1dmv30&X-Amz-Signature=6ad4f002b99cb7ce657faccbd46bd172811bbd081332f19b11db7b3ebce348d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
