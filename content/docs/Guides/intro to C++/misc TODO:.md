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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7JBAJ2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFz0rqyQ5914Ut%2FSbfF4g2oKeg8IDmgwQIEEo0QwKNdVAiBtgMfIf60QaTpr9eBFVTLWGw2ZvZDtaMeZm0i%2FzPoLTyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC4CqtIXsx6lui1hXKtwDrWgjs8w2BwJAGfzv9887g2jBe9KDz2FJDFQiBffq3bQRR%2Bz371ywQPpDUVS72EM9XrsWLeGPpM235aUFEG7m8zCiWmqs20uZdLlDoW257yNlvZQUIbt0qLWssg0zCWEn1XTEKmvRH4Ur4x5rTG2cImOiDGwNPSKNSTAuzBEpG40LNKLezY5iE28FRNZSqDkq9OLicvHpVqOpeySqQg2yb5LOj7o4P0e5fHYyKYGFK9ol2U0BDHu6B%2Fc78fuAXrQ0VlASs5cfM%2BJgSs3TE5mwiGGPrSX0%2FfOla0rJ7iOo0YZyLlcpCgWJZJzmlh0O1YgEJGMDxAI4Cp1dzCITfWehAL96UD1QrsncaL1KLJRIjnJ0hq0J2FlBkuxTws1WxnHC86CSoBLkzTAW7mIkhq%2FTvyAuRNKT9K79t0bTnURc7mXKBm3E9vRnnWwqfUl0KWcvLTmTWAHEg1UrriMlicIGlntjaB2vh%2BmwT6grBaHu85YqLI5SD%2Fi648uClXAPhISHv9MIR0BjwRaAica0y9FgEkMAYF09bhKp5KxvWVzuj8bx0puYzF0DPPNENrMCSlcF1qrSyhN%2F3b0ucARvseHhApcJTkNjWrtFautp1dzC9zWbCbrukiRZ9CHxx7Iw2Pu0vwY6pgH26H53NgAzDqBc771NzW2Lqk83EhjcVPkbMZjznnmX1UVI7PF3klpNy27R293ZcOSDU8R3%2F20LWDVbvs3ubQmexqXbj4BiAr%2FLEgU0h9XDE%2Fz1hTN87HOxNpENFYrlEBztT%2BBK73tP9Ii0Mz9tstohKM0YVHTnhx79YGnvEIzfa4AIzi3GHnAf%2FORTvPkFEsQeXY4rvS1s7TlOUgajsbcTek3eT8lt&X-Amz-Signature=2c5b20d5bb86c39df5a2b8fdf797943e7d420675c39eae1c21c04ed7992afefb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7JBAJ2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFz0rqyQ5914Ut%2FSbfF4g2oKeg8IDmgwQIEEo0QwKNdVAiBtgMfIf60QaTpr9eBFVTLWGw2ZvZDtaMeZm0i%2FzPoLTyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC4CqtIXsx6lui1hXKtwDrWgjs8w2BwJAGfzv9887g2jBe9KDz2FJDFQiBffq3bQRR%2Bz371ywQPpDUVS72EM9XrsWLeGPpM235aUFEG7m8zCiWmqs20uZdLlDoW257yNlvZQUIbt0qLWssg0zCWEn1XTEKmvRH4Ur4x5rTG2cImOiDGwNPSKNSTAuzBEpG40LNKLezY5iE28FRNZSqDkq9OLicvHpVqOpeySqQg2yb5LOj7o4P0e5fHYyKYGFK9ol2U0BDHu6B%2Fc78fuAXrQ0VlASs5cfM%2BJgSs3TE5mwiGGPrSX0%2FfOla0rJ7iOo0YZyLlcpCgWJZJzmlh0O1YgEJGMDxAI4Cp1dzCITfWehAL96UD1QrsncaL1KLJRIjnJ0hq0J2FlBkuxTws1WxnHC86CSoBLkzTAW7mIkhq%2FTvyAuRNKT9K79t0bTnURc7mXKBm3E9vRnnWwqfUl0KWcvLTmTWAHEg1UrriMlicIGlntjaB2vh%2BmwT6grBaHu85YqLI5SD%2Fi648uClXAPhISHv9MIR0BjwRaAica0y9FgEkMAYF09bhKp5KxvWVzuj8bx0puYzF0DPPNENrMCSlcF1qrSyhN%2F3b0ucARvseHhApcJTkNjWrtFautp1dzC9zWbCbrukiRZ9CHxx7Iw2Pu0vwY6pgH26H53NgAzDqBc771NzW2Lqk83EhjcVPkbMZjznnmX1UVI7PF3klpNy27R293ZcOSDU8R3%2F20LWDVbvs3ubQmexqXbj4BiAr%2FLEgU0h9XDE%2Fz1hTN87HOxNpENFYrlEBztT%2BBK73tP9Ii0Mz9tstohKM0YVHTnhx79YGnvEIzfa4AIzi3GHnAf%2FORTvPkFEsQeXY4rvS1s7TlOUgajsbcTek3eT8lt&X-Amz-Signature=7aebb609c879fd198688515e749662ac4682d86cc2d95d783f9f3268a6c4730c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
