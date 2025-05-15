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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5PSYKS%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIB%2BFrF8IeZNjn2FfSHxD62%2BiCUcAT61POpJ3kriNKjN7AiEAsbQYMtqXRiac6UE3uYRQdk62%2FRYBa1d7I02bIY%2BaiQIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJBueffrgx9Q6NoYTircAzWWdZ14I9MS01UpjAuWcOovEaBb67zuW8wipV4eM7hdAxo1JMxTpV7mSoBarSwKFLs7CEk3zHs6ZV2Lt38IHw0NqvTnWVuWrHia9LVvp%2B9zsqf2yUev1zo9HYMnw4ody1NwhmdpOaNw%2Bs6dibitqWm26U9ox6bh%2B9TW6r7%2BRYmXhbEbSzqjc1vKx6J0U7n1F6JS2o2PknZC%2B7cEkUwou0JNX95TkI2WdhMyQZ%2FpZtnnjEEoxArqdTn9CtbpUlszHuQo4YSqNXR%2B7yh4qdlOYxYVC1bGPHaSQSW6nQSbe9Oy%2FAW9LndgX7JMubmUx0Taz%2FmZh1YJwo19miuWkK%2BAgLfSOi5jELqW5HOgiUk2rbFKIvbh7cQnwN2xRjMXD2K7dHvHLOhnKdE02XIgLIaCxbz7qt%2BYQ2CAuvSexvd7Ut5FjKWm88bNU1hlE4321DDyWdRnjC20ZtWuMCW%2FQDi7uh9quxuFJxDb1sPgeon8f5uczZVdlqSh3q4fbLEkuFoECdlrnoTdyzqpzxcWFvDWMvRzjmjV2fx%2B7SIQpOzB9ZGMmC1fhSn04vqsEIL%2BwCgAQ38lYgeiSVF3WS6Vt7BqqtivxELAKHdP2Gwg7yoU%2Fd894OqEqWAFMWnYWi8AMIPjmcEGOqUBqyQ6Y1K1eA3KhyhDrxcDI1zQWP%2FnzV1qwP1r6LgYdNuc0ouGmk0BXPiCNyLq6nY99%2FiddIHYflZAULfe3c09Ru8reNxHhccBDbDs7pAJe%2BMDVqxP1lnijsknYVYWOnIT9Uv8IgfcHMDghAnK%2FytuYjAOYA2PUetuhEYoXxSlqL%2BpDVlZXWtV6b6mcHpHY9AhT2YOtB%2B6PjYM0UpyMc1RiFjOtfuB&X-Amz-Signature=deb8cbde63ae6563f63c54532bed942f2f59947a9210c1ba999c707775dd1615&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5PSYKS%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIB%2BFrF8IeZNjn2FfSHxD62%2BiCUcAT61POpJ3kriNKjN7AiEAsbQYMtqXRiac6UE3uYRQdk62%2FRYBa1d7I02bIY%2BaiQIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJBueffrgx9Q6NoYTircAzWWdZ14I9MS01UpjAuWcOovEaBb67zuW8wipV4eM7hdAxo1JMxTpV7mSoBarSwKFLs7CEk3zHs6ZV2Lt38IHw0NqvTnWVuWrHia9LVvp%2B9zsqf2yUev1zo9HYMnw4ody1NwhmdpOaNw%2Bs6dibitqWm26U9ox6bh%2B9TW6r7%2BRYmXhbEbSzqjc1vKx6J0U7n1F6JS2o2PknZC%2B7cEkUwou0JNX95TkI2WdhMyQZ%2FpZtnnjEEoxArqdTn9CtbpUlszHuQo4YSqNXR%2B7yh4qdlOYxYVC1bGPHaSQSW6nQSbe9Oy%2FAW9LndgX7JMubmUx0Taz%2FmZh1YJwo19miuWkK%2BAgLfSOi5jELqW5HOgiUk2rbFKIvbh7cQnwN2xRjMXD2K7dHvHLOhnKdE02XIgLIaCxbz7qt%2BYQ2CAuvSexvd7Ut5FjKWm88bNU1hlE4321DDyWdRnjC20ZtWuMCW%2FQDi7uh9quxuFJxDb1sPgeon8f5uczZVdlqSh3q4fbLEkuFoECdlrnoTdyzqpzxcWFvDWMvRzjmjV2fx%2B7SIQpOzB9ZGMmC1fhSn04vqsEIL%2BwCgAQ38lYgeiSVF3WS6Vt7BqqtivxELAKHdP2Gwg7yoU%2Fd894OqEqWAFMWnYWi8AMIPjmcEGOqUBqyQ6Y1K1eA3KhyhDrxcDI1zQWP%2FnzV1qwP1r6LgYdNuc0ouGmk0BXPiCNyLq6nY99%2FiddIHYflZAULfe3c09Ru8reNxHhccBDbDs7pAJe%2BMDVqxP1lnijsknYVYWOnIT9Uv8IgfcHMDghAnK%2FytuYjAOYA2PUetuhEYoXxSlqL%2BpDVlZXWtV6b6mcHpHY9AhT2YOtB%2B6PjYM0UpyMc1RiFjOtfuB&X-Amz-Signature=7a6ad82a4d84fff1af8734d7d451fa3198106464a8177cf0bb91fbbe3aae3b4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
