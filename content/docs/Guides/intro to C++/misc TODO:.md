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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OKBWK2H%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHpkcf%2BsrF1zHO7gG%2B3Vp%2Fgs0E8BzX0G8AXirsJFP6o8AiEA3KJw9rvFAEuscFeok%2Fr7A2Ax6BDEpJaz6gVHXsB%2F9Tsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJpd2bXYgCeoq6T8ZSrcA55tBm1tfFxx6Q8l%2FwNYG8uJGIeIPIwgY4janU6xGbiJb86C%2BvwBszk1fRFWjz6S%2F%2BoJ%2BDyeDwxAZHIyf%2BhWsKjZ97aUgOlelqnL%2BETG5%2FzvEC4MusoBbAqRaKZRuBHusPYZy9z%2FhRthUXus93kEcdWaPheedfhE25LvPUi8KnUgQIRJRxot6AOVG0yEvqcKxxW2nwCblop13ba7hPNMfaZmjbiA%2BkZuOnpvMAZDyja4X8CaKfwe%2BWTeHFFONMilBMkF46fuKwGhiP84tt9hIw7AqaINTXmoMYM1lnpCgD%2FaO1EV2n7WUbUYiaTyCulZvj8IdQ060A6r6EAvDAAHypqMOWZbeLuKiq7qIug7v%2B8iblLQ6Pxx4EUGLLC0mJL6i6fPbwEY4G9F8u0I%2FAee%2Bvsc2q5%2FNga5meQzWaNr0kb2aNmcjbSHl9tncqV7OdNLjt%2F%2FyCplEIQs1C0I7%2F4xPwu2jAooqDAJwKKIjQIRqLfIP3EC%2FeM9GKrCtPgd%2BSzAEqVoPBBgxns5Ry2aMkaJjY45C4DB8GK5Q0mu%2FevM9N%2Be0ZJNfKDkWzfwgsuJlWGyHvCXRKHZv7eh3uJW7lKnfXms8RrszZbI4Qhu9f%2B0kRv%2FLBmz4SVS95WUeRptMMH%2BlL0GOqUBzTfBpmPLnn2u4BdQR2NpSOs6Q5GsWYcnJvslkRz19oWA%2B6EUMjVL4Bfn%2B7gGVuQsMRxRP96opps%2BqV2hKypSY6rur1OGVMgn4rB%2BMDOKOO%2FPhaPbGjv%2B2Q3WbTpzwu1vHzVUXGAvtrnC62ixxeoB9wKzHn7Jd27rmA4tftE26qgM%2BTOk3sMOcNzZmvyCRlIFvn%2BaaVdLj6YVi3mxa%2BCXL2YwoDs9&X-Amz-Signature=772d5d9f6f1960a2a38699be1f1a7719a684610a2ad6ab0339d84cd7fee51f98&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OKBWK2H%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHpkcf%2BsrF1zHO7gG%2B3Vp%2Fgs0E8BzX0G8AXirsJFP6o8AiEA3KJw9rvFAEuscFeok%2Fr7A2Ax6BDEpJaz6gVHXsB%2F9Tsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJpd2bXYgCeoq6T8ZSrcA55tBm1tfFxx6Q8l%2FwNYG8uJGIeIPIwgY4janU6xGbiJb86C%2BvwBszk1fRFWjz6S%2F%2BoJ%2BDyeDwxAZHIyf%2BhWsKjZ97aUgOlelqnL%2BETG5%2FzvEC4MusoBbAqRaKZRuBHusPYZy9z%2FhRthUXus93kEcdWaPheedfhE25LvPUi8KnUgQIRJRxot6AOVG0yEvqcKxxW2nwCblop13ba7hPNMfaZmjbiA%2BkZuOnpvMAZDyja4X8CaKfwe%2BWTeHFFONMilBMkF46fuKwGhiP84tt9hIw7AqaINTXmoMYM1lnpCgD%2FaO1EV2n7WUbUYiaTyCulZvj8IdQ060A6r6EAvDAAHypqMOWZbeLuKiq7qIug7v%2B8iblLQ6Pxx4EUGLLC0mJL6i6fPbwEY4G9F8u0I%2FAee%2Bvsc2q5%2FNga5meQzWaNr0kb2aNmcjbSHl9tncqV7OdNLjt%2F%2FyCplEIQs1C0I7%2F4xPwu2jAooqDAJwKKIjQIRqLfIP3EC%2FeM9GKrCtPgd%2BSzAEqVoPBBgxns5Ry2aMkaJjY45C4DB8GK5Q0mu%2FevM9N%2Be0ZJNfKDkWzfwgsuJlWGyHvCXRKHZv7eh3uJW7lKnfXms8RrszZbI4Qhu9f%2B0kRv%2FLBmz4SVS95WUeRptMMH%2BlL0GOqUBzTfBpmPLnn2u4BdQR2NpSOs6Q5GsWYcnJvslkRz19oWA%2B6EUMjVL4Bfn%2B7gGVuQsMRxRP96opps%2BqV2hKypSY6rur1OGVMgn4rB%2BMDOKOO%2FPhaPbGjv%2B2Q3WbTpzwu1vHzVUXGAvtrnC62ixxeoB9wKzHn7Jd27rmA4tftE26qgM%2BTOk3sMOcNzZmvyCRlIFvn%2BaaVdLj6YVi3mxa%2BCXL2YwoDs9&X-Amz-Signature=a6a4a54f358b27fc8ecde8bac994ac17952f1e9c5ac55694632bab6170b181be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
