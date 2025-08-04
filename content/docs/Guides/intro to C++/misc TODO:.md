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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUMUZH6F%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCbJvR1ip%2BQYTWTxd0s%2B%2BAZbaz2hZMbINog7jdd9iA56QIgUBy9r3bAnPR0IKZrAz0k9M%2FNe1gWJzmJkFKvC399h1Aq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDP%2FynaCEQqtztntYhircAzx4G%2Fla1DeCPJplQsCS07dsnu3FClG%2FaSCJQvcIpBcI0OLHlxuUlnhHjAJcc1jO%2B8zS218934PfhN8Hf8Pt%2BGsLpPw4%2BdPbZNar7mORZpZpfxOrGHZWWJy7Xcb6GtZAF9bQ0O%2B2CHlcfPPNSR2dEjsHM2zj62dwNWlGkyyGNyBKUtbsMnBw32cqH7JcxykWjb8mj%2BzV6xKstyK5gPvtvMm%2FK8%2BdBLa8RIWnNF5T1F6EZvbcMXYbzJCIkR0f%2FHbesiU6Si7oYwT85B23wGhEgk2hR6Ld7BRzC7ARhXuRL%2FEXsBXUWv4ZRY19s%2FfSusKoOhW1qiiSl7d45Lu6p%2Bu588CqvnCI%2FcCg0HFsESr%2BYMJa7YESYaiuREIlmxxsOvy1bvAXn36oDVGkR302neWHJ3WvJcmsN%2FiIzcxuMG4E9VFKs38ubrX6pQfr%2FHj2E%2BZjpxgmeKqZeHz6z2sHn0XWZejsathm72aGvpErISQnIcLvAuclu3AdMFStPANgcjv2FH4Q3nGwo30RnIdHYvKvBnE%2FG5xUxALfJE6WDCPum%2BczXm9WR90LknEwmVL358lKt%2F9GCM8B51n7VGsPnMKPnI31MekCLwP0n2ObkY%2BsUVDOo92lvatAj0Pliq6gMICCwsQGOqUBWiXwtt1XX7reCPB6hQclq6xj0HoOmIr4q6m9%2BZSmWCVeG3vvTq7VP6O0SiOGXLev2isHWJixKAP4yPVbchdFicrBdN8GcYvACxs8d4hU3uCSJWcuAs5XoCUyhYXUc%2Fa5gxHEpprsOTBzu%2BZvbebmWcp7mdUi7%2BejqC3yz9WkpwtMmUb5wJlb4GzeXeh6eSc4ODMWcekckexb6rUgshTNLYim%2BN4I&X-Amz-Signature=a18b3438b9f5739861eb1e5ff76eb112f0e8fd787a1ac31e022ac6ed9fc89709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUMUZH6F%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCbJvR1ip%2BQYTWTxd0s%2B%2BAZbaz2hZMbINog7jdd9iA56QIgUBy9r3bAnPR0IKZrAz0k9M%2FNe1gWJzmJkFKvC399h1Aq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDP%2FynaCEQqtztntYhircAzx4G%2Fla1DeCPJplQsCS07dsnu3FClG%2FaSCJQvcIpBcI0OLHlxuUlnhHjAJcc1jO%2B8zS218934PfhN8Hf8Pt%2BGsLpPw4%2BdPbZNar7mORZpZpfxOrGHZWWJy7Xcb6GtZAF9bQ0O%2B2CHlcfPPNSR2dEjsHM2zj62dwNWlGkyyGNyBKUtbsMnBw32cqH7JcxykWjb8mj%2BzV6xKstyK5gPvtvMm%2FK8%2BdBLa8RIWnNF5T1F6EZvbcMXYbzJCIkR0f%2FHbesiU6Si7oYwT85B23wGhEgk2hR6Ld7BRzC7ARhXuRL%2FEXsBXUWv4ZRY19s%2FfSusKoOhW1qiiSl7d45Lu6p%2Bu588CqvnCI%2FcCg0HFsESr%2BYMJa7YESYaiuREIlmxxsOvy1bvAXn36oDVGkR302neWHJ3WvJcmsN%2FiIzcxuMG4E9VFKs38ubrX6pQfr%2FHj2E%2BZjpxgmeKqZeHz6z2sHn0XWZejsathm72aGvpErISQnIcLvAuclu3AdMFStPANgcjv2FH4Q3nGwo30RnIdHYvKvBnE%2FG5xUxALfJE6WDCPum%2BczXm9WR90LknEwmVL358lKt%2F9GCM8B51n7VGsPnMKPnI31MekCLwP0n2ObkY%2BsUVDOo92lvatAj0Pliq6gMICCwsQGOqUBWiXwtt1XX7reCPB6hQclq6xj0HoOmIr4q6m9%2BZSmWCVeG3vvTq7VP6O0SiOGXLev2isHWJixKAP4yPVbchdFicrBdN8GcYvACxs8d4hU3uCSJWcuAs5XoCUyhYXUc%2Fa5gxHEpprsOTBzu%2BZvbebmWcp7mdUi7%2BejqC3yz9WkpwtMmUb5wJlb4GzeXeh6eSc4ODMWcekckexb6rUgshTNLYim%2BN4I&X-Amz-Signature=abd60a05028b121cec27b9f0b74c6c2fa29fefedf903cd1504c5385d094264ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
