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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EUIQS4W%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIH9EtuWrye0BhRpjMoLy7xp3ib0KKyJoFhzKr1gFOBT4AiBqzLkdXZqhplf4aYhEHAn4SYW44TNw3UKANLqf8xE8dCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBKr%2FJoeFSRyykzS7KtwDBeVChaGMshGmkTxTXxgy%2FDUc9Jv6OG1vX2KvQXTdzobrIw076WjrKA7EQddOQBqobuo6Y%2BzGp5ItY1aX74O%2FLBo%2Fd4Gn9yUn9FAFNZwy8VLBR%2B9OwIy43m7yxZ3nWrvrPkKAAxIa61PzZc86Sod82DKUdKdi6B5F7CdvTxuLu%2FCwr3J5%2BUMrud5oTt3BaLEHr6rwiu0KR1DFBfiw%2Fsx0gy9WXXKxMUKLxbtkx0dHAifjWuPeO3%2F7lxeuZb9icXk%2BkukPVI%2B%2BTqXMeKdf%2Bxp3TDiHQQ5jd2yUun1X0wkUDM1j7ZNRTwIS3oEePoseN0Gavz1S0MV6Rj5K%2FNJsvAJrZxexJYncDIbfL4vKyUAqNiN0wFjyYSzdX4ex39Tz4qF17PJLFxKBruwgZ0BoIvZSy9gfd3BUpmbmj8srCEOMCMcpZwZlOUAUqDqbxHGQk8ReaBQc5ClVASWbsQhPYYwCo%2FBraE8%2BshbHMcbTZNDSsZGvqvWogZ6te2tDSIL3yo6kInM75gAog4%2Bf7LIBs%2F9R0eN21ev%2Fs%2BOn8H3MoUJ8iDuTz3PQO6tQNqv%2B%2Bp7LBxxTr0IQqsAKY9bH2FWqn4Mi0twKR7TUAoeVU3ByC3fdkn7q9mxNJN3rwN%2FQ9MgwjYu9vgY6pgEHPL2tVJdO0xPwCeW%2Fa4uANHUSxYv3EwhZnTmB%2FSzjzLeUTGz%2BefBy0gBAzML90vIi2SErP6HydtiiaslJhSsg63LGjP5mkQan9M4NE25qX53Y96snvGpYuYummvs2z34ho7wSvWVHNAT5LXSDR0j5fjlY5bh02au3dl9hCN5z%2BDYRtMPEWjRNXr2xS8ufGxioj8XW1Wo1J2Vcb96KBWZrJ4DOc38T&X-Amz-Signature=29c61e361f1ff7b8f82b933206faafab4640e39fd7742d069f8574c38a593748&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EUIQS4W%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIH9EtuWrye0BhRpjMoLy7xp3ib0KKyJoFhzKr1gFOBT4AiBqzLkdXZqhplf4aYhEHAn4SYW44TNw3UKANLqf8xE8dCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBKr%2FJoeFSRyykzS7KtwDBeVChaGMshGmkTxTXxgy%2FDUc9Jv6OG1vX2KvQXTdzobrIw076WjrKA7EQddOQBqobuo6Y%2BzGp5ItY1aX74O%2FLBo%2Fd4Gn9yUn9FAFNZwy8VLBR%2B9OwIy43m7yxZ3nWrvrPkKAAxIa61PzZc86Sod82DKUdKdi6B5F7CdvTxuLu%2FCwr3J5%2BUMrud5oTt3BaLEHr6rwiu0KR1DFBfiw%2Fsx0gy9WXXKxMUKLxbtkx0dHAifjWuPeO3%2F7lxeuZb9icXk%2BkukPVI%2B%2BTqXMeKdf%2Bxp3TDiHQQ5jd2yUun1X0wkUDM1j7ZNRTwIS3oEePoseN0Gavz1S0MV6Rj5K%2FNJsvAJrZxexJYncDIbfL4vKyUAqNiN0wFjyYSzdX4ex39Tz4qF17PJLFxKBruwgZ0BoIvZSy9gfd3BUpmbmj8srCEOMCMcpZwZlOUAUqDqbxHGQk8ReaBQc5ClVASWbsQhPYYwCo%2FBraE8%2BshbHMcbTZNDSsZGvqvWogZ6te2tDSIL3yo6kInM75gAog4%2Bf7LIBs%2F9R0eN21ev%2Fs%2BOn8H3MoUJ8iDuTz3PQO6tQNqv%2B%2Bp7LBxxTr0IQqsAKY9bH2FWqn4Mi0twKR7TUAoeVU3ByC3fdkn7q9mxNJN3rwN%2FQ9MgwjYu9vgY6pgEHPL2tVJdO0xPwCeW%2Fa4uANHUSxYv3EwhZnTmB%2FSzjzLeUTGz%2BefBy0gBAzML90vIi2SErP6HydtiiaslJhSsg63LGjP5mkQan9M4NE25qX53Y96snvGpYuYummvs2z34ho7wSvWVHNAT5LXSDR0j5fjlY5bh02au3dl9hCN5z%2BDYRtMPEWjRNXr2xS8ufGxioj8XW1Wo1J2Vcb96KBWZrJ4DOc38T&X-Amz-Signature=f879055254da53c693926495d2f4bd4f8cc2d65352ea257a0511ba008fcabfda&X-Amz-SignedHeaders=host&x-id=GetObject)

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
