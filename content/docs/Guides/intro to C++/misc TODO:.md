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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPWOX4HY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDw7Lctqt965Pjl%2BP8%2FgnzK0wXm3fhMrnFtBdOHDQHjKAIgTKm6rF0eD6RXGA6DhlDYED9jg4lgJl4lDZAPR38IYlEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIFxXvEh7kZO%2BC4%2FJircA7xJN97Upmh5q4ChZbsfbIaaGrw%2BfeLu0GLf1mK%2BryVCvItS2Tv0hCcomkBBJTogL97Pydg%2FOqgFqTea4nNSLIi4t%2Fy83i%2Bm0IBbz9r5xaOk61xK6bimNs%2Bw5ZL6%2BG1hfWzY%2F4kRyXCrCdY1YRW8l3gnruvXKjIKObvt6c4ZGzy2QIt0OcJW3Hw%2FyzTq9b6vz59enqDWURCZpdg7bN5DEYj6H6pMnMVEX2B3x1Wx5d5Tvpz7Agi7OGsoXl355e8UFtWY4BXMd2ifvMV0Gu3MXJVn19AueCq4LOhEibTwzqFmXRopKZa6qAU6yfP%2Fn1nKdVjn5MUtCsVCJmIo2iOIRRnwyr5rNgLVkwOwSJlfdRN3sGbEyzTQr95Mf9Uu5pXXV5XBbUQluzG5RIaI5aVydq%2BdB0z7fNjxTzM5Ozyldw9ir1SE6a%2Fq%2BKJfvFtF749s7Yo9FylWImwv7MhuLQ2InJyWRoq3rMzQBSld45a%2Fgd2QBwKJD%2BIR0RbTxKEmKWm3Tk%2B9CdjPnRT80YfMmTD08DIgSssKfUC8DGi66vF%2FSiqhZItpbmtHPPPc0HB32Mbi29Egkdd%2BHYOhqB%2Fd9S4IEKsoQTzB0U9FqwRqtZWBqpxrf%2BPDbQsfY5uw3Wd0MJW57MIGOqUBgPQdsUkudrMPU3IuSO1Lncu4BtYNkgQ%2FZ0iM8mR7p7%2B1X4vd0z977hx8RM9nZIL82cwto7EB2rvJZt3S01F9dgYIuWHXciLo38tDh0uGABdWcTCASL4FRPnUgwxgWhYfzeRR6Go4ADpjxglear9NZ2EHX1VROHLNVVIFOV03eLNqEYTYz9YeIKJmaJhT7%2BnVpuKo6b%2F8NoDrlCY7%2BKqELh8MMiqa&X-Amz-Signature=9bc0a8c1c57232e44f8336abe9d3e14dd0bc8848aa6d6a898807dc11622cc4d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPWOX4HY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDw7Lctqt965Pjl%2BP8%2FgnzK0wXm3fhMrnFtBdOHDQHjKAIgTKm6rF0eD6RXGA6DhlDYED9jg4lgJl4lDZAPR38IYlEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIFxXvEh7kZO%2BC4%2FJircA7xJN97Upmh5q4ChZbsfbIaaGrw%2BfeLu0GLf1mK%2BryVCvItS2Tv0hCcomkBBJTogL97Pydg%2FOqgFqTea4nNSLIi4t%2Fy83i%2Bm0IBbz9r5xaOk61xK6bimNs%2Bw5ZL6%2BG1hfWzY%2F4kRyXCrCdY1YRW8l3gnruvXKjIKObvt6c4ZGzy2QIt0OcJW3Hw%2FyzTq9b6vz59enqDWURCZpdg7bN5DEYj6H6pMnMVEX2B3x1Wx5d5Tvpz7Agi7OGsoXl355e8UFtWY4BXMd2ifvMV0Gu3MXJVn19AueCq4LOhEibTwzqFmXRopKZa6qAU6yfP%2Fn1nKdVjn5MUtCsVCJmIo2iOIRRnwyr5rNgLVkwOwSJlfdRN3sGbEyzTQr95Mf9Uu5pXXV5XBbUQluzG5RIaI5aVydq%2BdB0z7fNjxTzM5Ozyldw9ir1SE6a%2Fq%2BKJfvFtF749s7Yo9FylWImwv7MhuLQ2InJyWRoq3rMzQBSld45a%2Fgd2QBwKJD%2BIR0RbTxKEmKWm3Tk%2B9CdjPnRT80YfMmTD08DIgSssKfUC8DGi66vF%2FSiqhZItpbmtHPPPc0HB32Mbi29Egkdd%2BHYOhqB%2Fd9S4IEKsoQTzB0U9FqwRqtZWBqpxrf%2BPDbQsfY5uw3Wd0MJW57MIGOqUBgPQdsUkudrMPU3IuSO1Lncu4BtYNkgQ%2FZ0iM8mR7p7%2B1X4vd0z977hx8RM9nZIL82cwto7EB2rvJZt3S01F9dgYIuWHXciLo38tDh0uGABdWcTCASL4FRPnUgwxgWhYfzeRR6Go4ADpjxglear9NZ2EHX1VROHLNVVIFOV03eLNqEYTYz9YeIKJmaJhT7%2BnVpuKo6b%2F8NoDrlCY7%2BKqELh8MMiqa&X-Amz-Signature=9202c6edb542103aa257826fbf38e5481f96e488979e459c7904d12a9dc3cd5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
