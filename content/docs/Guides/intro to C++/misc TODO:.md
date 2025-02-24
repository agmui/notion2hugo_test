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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKEX2Q55%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgR1gYQ8pMZeQYkMc5KsavlXA4yvmd9KMDbqfOyKBhQAiEAmJGBYaXdynzB461Iz%2FD7pGxvnIhNwr%2BqN%2B9AKOttph4q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIpyV3So2h3bMqjQ8yrcAwDC4%2FkGImGD34y30uXTX1eYDirsbHqCY8Scr4tNqRLan%2FaBo6FXIM9x7khjpWgxYYlfIuH4llcz8dxLYum9ySxDEqPK0xPX00v%2Bucc01puq0rh93PcF04Q3B4aDAXXRF11JtEzEjRkYDwXxyjmkGFxmpXv8EbL0iztFTYSzrMzayB%2F6MmLOmnj%2FB7gkchzZwQaWs%2FwtPK6wJ6KjSNa%2FFYmcai0zJIO6LA1chNtBIrdKbnAX3g%2FW5vvKc%2FWTnj2mUV6kPfExn%2BYCNlM3b1%2FkyJ3Tur5%2BX0T1RxcDo8wAwnbOt2BK%2FyUrPnUGJ2NBPocZYJZpmlbWDbWxQ8xVS9dY9ii6exLV4cGtjMBnjfNFWMIjiffUJWGjk06EnO5YrtJw1sbvWM6gsp%2BoHG4r3NRZLx%2BjE2QMKBKGEikkwbTVEddwnqbwehcKbrDSNjempwJCiovid4oAJtkOKaPiIuDdBX23usMxskvWlYVDKmr0auyBB3T07BdifSnVWryskLB%2BMwLtQjMkRhffCgIgQu8EE6BNNR0yFIfALkyTLhV%2B7WPJX4P72sSD%2BLUgDzUe3sRyhbokM0Ds3nOX%2FJKluxPsXC0JpHThqp%2BEYkuJryTxo3dsWE4HaGSAg11Rz8pDMKWU8L0GOqUB2kjtRe3CSseNqI5lJMB7lVIjHUls51YZByfX6af%2FJrfEyf%2Bu9RU16UZfNZ4DI5tnGvcsWTHpnJiDWsusf3TlAGkje5%2FB1IqhopqIx5gBmQcx%2FU71YwDRhedNQSrUD3A4TgRyGQqYc1MevmnnEpuXFlwRqc1nn8dZ4xR54UIFH0AIBCUJdItxJFeyacTJsH5VUYnrqhGUwFXt9CfSVgLhZhRyqnPA&X-Amz-Signature=2f1faabdd89b400d58e0c32d919e457edda7602f6d5f35fdc957df84f104fa6f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKEX2Q55%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgR1gYQ8pMZeQYkMc5KsavlXA4yvmd9KMDbqfOyKBhQAiEAmJGBYaXdynzB461Iz%2FD7pGxvnIhNwr%2BqN%2B9AKOttph4q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIpyV3So2h3bMqjQ8yrcAwDC4%2FkGImGD34y30uXTX1eYDirsbHqCY8Scr4tNqRLan%2FaBo6FXIM9x7khjpWgxYYlfIuH4llcz8dxLYum9ySxDEqPK0xPX00v%2Bucc01puq0rh93PcF04Q3B4aDAXXRF11JtEzEjRkYDwXxyjmkGFxmpXv8EbL0iztFTYSzrMzayB%2F6MmLOmnj%2FB7gkchzZwQaWs%2FwtPK6wJ6KjSNa%2FFYmcai0zJIO6LA1chNtBIrdKbnAX3g%2FW5vvKc%2FWTnj2mUV6kPfExn%2BYCNlM3b1%2FkyJ3Tur5%2BX0T1RxcDo8wAwnbOt2BK%2FyUrPnUGJ2NBPocZYJZpmlbWDbWxQ8xVS9dY9ii6exLV4cGtjMBnjfNFWMIjiffUJWGjk06EnO5YrtJw1sbvWM6gsp%2BoHG4r3NRZLx%2BjE2QMKBKGEikkwbTVEddwnqbwehcKbrDSNjempwJCiovid4oAJtkOKaPiIuDdBX23usMxskvWlYVDKmr0auyBB3T07BdifSnVWryskLB%2BMwLtQjMkRhffCgIgQu8EE6BNNR0yFIfALkyTLhV%2B7WPJX4P72sSD%2BLUgDzUe3sRyhbokM0Ds3nOX%2FJKluxPsXC0JpHThqp%2BEYkuJryTxo3dsWE4HaGSAg11Rz8pDMKWU8L0GOqUB2kjtRe3CSseNqI5lJMB7lVIjHUls51YZByfX6af%2FJrfEyf%2Bu9RU16UZfNZ4DI5tnGvcsWTHpnJiDWsusf3TlAGkje5%2FB1IqhopqIx5gBmQcx%2FU71YwDRhedNQSrUD3A4TgRyGQqYc1MevmnnEpuXFlwRqc1nn8dZ4xR54UIFH0AIBCUJdItxJFeyacTJsH5VUYnrqhGUwFXt9CfSVgLhZhRyqnPA&X-Amz-Signature=803374742f701b4c34b457b2034288c837528b099a73f98a4459f63cd43b1304&X-Amz-SignedHeaders=host&x-id=GetObject)

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
