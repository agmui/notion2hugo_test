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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZEDQMVB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJ3jli3FAu8KDclLX6RsKrRbrsMZXpIC0VotyOjpw%2BFAiEAzMEFskQPgWtLp1B4dVvgglCXI0vQ0Wd6vU6Y74%2BT1W4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGy7pGILDDXpRElCDircA7fWdy8e6z%2FVOwOBMViaz4m8Y23CkhdIEIeHKzrJS%2BV4Y5V9KEuyKAGYpe%2FNUs%2BReexwv%2B1Ex97XqJtq0r%2Fvp2OHCDy1cO9Wfz9dsz6ifoHkDij%2FgwAN4G%2BmdTNzOENgQKJpJFIj9qVSU2Cqx2lN2y03Vo%2BQ4tBBJlNs3nsawwaq3yjg0u3K%2BTCbFpCmxkqq41L7cLn%2BJVTasS0l44lThkPTyrAj4UlxmxM8XqcRdP57mXSEGBtOuvLP4S%2BfMbAQkm1Lv21pg1AN3a%2FJ3NFnzNuUrm5CM0OMVlOItfscy8MQll7ERtW2iAqUQBpo%2BmsrcDcTe%2FC0CCto3k8wiksKboHdBielUC13Y8akR53B3FNLNRts%2FEJRpSxhSqshjWlLCMjwYYnvrTPZ9tzo8j2AYucI46v3ifPn6a%2F9L3RZT50fpwx5XBUrFVjMFWdXOvJbM6hXS3NX2NXW5wF%2FVTk4tVk7E7v8HIxMxTlH3jMLhLqUMuJfAZd9zbwYzSb5JBye2RjWjVZ9b9%2BZBQXnPBc30UoSoopSDaIarSjC4C0hU7dE2IuheI957DmOtcwPLZn8PCJxgr1PD63LWvR3tX83%2F8GdX70y0pOF8geCkVvvcEmh4F5Oyuni0GfotiirMNTns8AGOqUBvxKm8mrKI1kfdKIYQyLh2YihrMRZENYaMTFeL3%2B4IHGVQEgFxCUNePbG9paIfm2LlJk6%2BrAptpkghKJQRyPijQRmbTuKOSLJMqTK4H3juCBIPkPGfJrKxodkdGJA0w7cwooG8Bj0%2FKaoQ1OpT814jsW1ePikKyO%2BT8ACR7%2F2HYNvt4h41j4WpfJzxvc5GQpQDdt3Lj4ia2jHI%2FWOmlL34L0g24CX&X-Amz-Signature=b4e47c4c9cad8c17b854550d7620f9a7ce0a7b25c24d4b3db89afedf78188911&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZEDQMVB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJ3jli3FAu8KDclLX6RsKrRbrsMZXpIC0VotyOjpw%2BFAiEAzMEFskQPgWtLp1B4dVvgglCXI0vQ0Wd6vU6Y74%2BT1W4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGy7pGILDDXpRElCDircA7fWdy8e6z%2FVOwOBMViaz4m8Y23CkhdIEIeHKzrJS%2BV4Y5V9KEuyKAGYpe%2FNUs%2BReexwv%2B1Ex97XqJtq0r%2Fvp2OHCDy1cO9Wfz9dsz6ifoHkDij%2FgwAN4G%2BmdTNzOENgQKJpJFIj9qVSU2Cqx2lN2y03Vo%2BQ4tBBJlNs3nsawwaq3yjg0u3K%2BTCbFpCmxkqq41L7cLn%2BJVTasS0l44lThkPTyrAj4UlxmxM8XqcRdP57mXSEGBtOuvLP4S%2BfMbAQkm1Lv21pg1AN3a%2FJ3NFnzNuUrm5CM0OMVlOItfscy8MQll7ERtW2iAqUQBpo%2BmsrcDcTe%2FC0CCto3k8wiksKboHdBielUC13Y8akR53B3FNLNRts%2FEJRpSxhSqshjWlLCMjwYYnvrTPZ9tzo8j2AYucI46v3ifPn6a%2F9L3RZT50fpwx5XBUrFVjMFWdXOvJbM6hXS3NX2NXW5wF%2FVTk4tVk7E7v8HIxMxTlH3jMLhLqUMuJfAZd9zbwYzSb5JBye2RjWjVZ9b9%2BZBQXnPBc30UoSoopSDaIarSjC4C0hU7dE2IuheI957DmOtcwPLZn8PCJxgr1PD63LWvR3tX83%2F8GdX70y0pOF8geCkVvvcEmh4F5Oyuni0GfotiirMNTns8AGOqUBvxKm8mrKI1kfdKIYQyLh2YihrMRZENYaMTFeL3%2B4IHGVQEgFxCUNePbG9paIfm2LlJk6%2BrAptpkghKJQRyPijQRmbTuKOSLJMqTK4H3juCBIPkPGfJrKxodkdGJA0w7cwooG8Bj0%2FKaoQ1OpT814jsW1ePikKyO%2BT8ACR7%2F2HYNvt4h41j4WpfJzxvc5GQpQDdt3Lj4ia2jHI%2FWOmlL34L0g24CX&X-Amz-Signature=8f0c3cf130511e75ce6d32df59b8ae2a5dee7955cf659698343b7cdf763191a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
