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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMOHQ2GD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIGOWnIwLcAY12%2B5kfLbcpZ7CVulgqtYMGhAXqhvj2F1MAiEAxuW%2Bb5NB8HyaZwQqZulyvq%2F5M4GGYk2N7kLtl08%2Bnngq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGA5O62Xj0XI8lRffSrcA4WhNyJosbMQk5BXdA%2F3FsBXBJo1okQB3%2BAxt1GiM74VfnmhKSc7QAukjSCzev6vDzU8GnGfj6M%2BwslMw5fjW51%2FxJ0HkvUrVCwDRSa7xnhfbMAkabvI2ehWiGkaWUEOA1l0bR%2Fq0S%2F2B0nEXTTq9STPbRHoMwf4Yr98z3xHTMq4ituCzvNcumuuEExQMRB34EPuBAtZ%2BWXUzQyrcPhCsUeVCOd%2Fyy0uC%2FFdfrTGMoxdaW90y1Eh7CqM%2FsxS%2BYo7GH4OZCPUrErK733k9XEeAKyleHn4a7QF9RRnDEtWRZbdiQM2R%2FY0GOSzvdAm3IbZNR2kauKJkBOsxBRmyhjUp07FY7opGWEJ2lu4SwWyxFFjIGQ1xEbSmnlEM5u6%2BKTzfYu7wvDIMN%2Bg9OHWplzOjl3Ae6YNA9n0ZZnM64UYAPqWoHhvVlTuFMeC6%2FeLFWA7wSMfSBCBFT0iuHGuMcUQoAqO4TCUHCzas5d6y9zJzgtEnzuNWu9tFkVugeFVKztysJkkFS57K4g2GwHmgicFiutXa9UwupApnd244J08MwydSwyjrV1HIIDBqRBz3km%2FGRf14lus%2Fk2eJTC%2BMMxvJlTPlm9szNeuHcHU43yMIcVrPokZvpFqbqHw4teOMIWq%2BL0GOqUB0N1dBIgwa23vsw%2FZwZm8r4Khz0ZQXPB9%2Byc%2FJzuEr%2F%2FM0kOyaTx%2BVDMMXgL9jiN4wAKYOfEcWTywL22Qfpujz%2BEY88s3QtJHrTxw%2FPH95XzzCT7sld4B3D94ptw%2FkF30GD23xEncVdUVJvi%2BrnqoLuRgzMqZMMsyrYRoYGG%2BeP65iFz9q8xVQIsem%2BGoHcAv5bGnb6h6R76XkMYPU%2B5jAdbeuJ14&X-Amz-Signature=847f6c142154e752fd58c19b772830a792a82229cdb42fe152acf7af1757202e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMOHQ2GD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIGOWnIwLcAY12%2B5kfLbcpZ7CVulgqtYMGhAXqhvj2F1MAiEAxuW%2Bb5NB8HyaZwQqZulyvq%2F5M4GGYk2N7kLtl08%2Bnngq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGA5O62Xj0XI8lRffSrcA4WhNyJosbMQk5BXdA%2F3FsBXBJo1okQB3%2BAxt1GiM74VfnmhKSc7QAukjSCzev6vDzU8GnGfj6M%2BwslMw5fjW51%2FxJ0HkvUrVCwDRSa7xnhfbMAkabvI2ehWiGkaWUEOA1l0bR%2Fq0S%2F2B0nEXTTq9STPbRHoMwf4Yr98z3xHTMq4ituCzvNcumuuEExQMRB34EPuBAtZ%2BWXUzQyrcPhCsUeVCOd%2Fyy0uC%2FFdfrTGMoxdaW90y1Eh7CqM%2FsxS%2BYo7GH4OZCPUrErK733k9XEeAKyleHn4a7QF9RRnDEtWRZbdiQM2R%2FY0GOSzvdAm3IbZNR2kauKJkBOsxBRmyhjUp07FY7opGWEJ2lu4SwWyxFFjIGQ1xEbSmnlEM5u6%2BKTzfYu7wvDIMN%2Bg9OHWplzOjl3Ae6YNA9n0ZZnM64UYAPqWoHhvVlTuFMeC6%2FeLFWA7wSMfSBCBFT0iuHGuMcUQoAqO4TCUHCzas5d6y9zJzgtEnzuNWu9tFkVugeFVKztysJkkFS57K4g2GwHmgicFiutXa9UwupApnd244J08MwydSwyjrV1HIIDBqRBz3km%2FGRf14lus%2Fk2eJTC%2BMMxvJlTPlm9szNeuHcHU43yMIcVrPokZvpFqbqHw4teOMIWq%2BL0GOqUB0N1dBIgwa23vsw%2FZwZm8r4Khz0ZQXPB9%2Byc%2FJzuEr%2F%2FM0kOyaTx%2BVDMMXgL9jiN4wAKYOfEcWTywL22Qfpujz%2BEY88s3QtJHrTxw%2FPH95XzzCT7sld4B3D94ptw%2FkF30GD23xEncVdUVJvi%2BrnqoLuRgzMqZMMsyrYRoYGG%2BeP65iFz9q8xVQIsem%2BGoHcAv5bGnb6h6R76XkMYPU%2B5jAdbeuJ14&X-Amz-Signature=abb76776bb95fd9c63df6aa7c364bd6190c315f94c3423da5efd9f3730b19a4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
