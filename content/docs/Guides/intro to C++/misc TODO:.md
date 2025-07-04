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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTSRGXDN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDQuUr7M4k3zjmS3ib%2BPruDMYgdYDUcsqvWxu9jzDbS2QIhAPuIFVV7MUZyon3UustJ%2BulD87KvEBrkoulvk308vKKEKv8DCCwQABoMNjM3NDIzMTgzODA1Igz6KTmcK5nniVQpMx4q3APJjqKnifXYS47UOY%2BGXzhUeu82Atz%2BNqrDuMbXS6Zn1ZqP17czk%2FTmy0ZCJ98ABALlwG1TLJm10S9UFmBAgfzR99MXGrcyiKljb7iQsQdBYrFoJYy2%2FWxWRrfB%2BTMkNZM7ZvFnBI8fG6EcniAgOgz3OtXIdnEAeIK9H%2BF3Jpt1BMjpNeggXj5nYj816z9%2BWAU5OEb1UwWXfuYZvR0UrlaxI39z9KrWnqNhYoWKSZktKbYPjcMOuUh9aUfpkHOhibRqe9Xu2%2BOu%2FqfZ5F2pBUAZ3%2FY8iM7Hol6byCoH114rUi4hN4vXZDsOxQPu2aPLDwvbYuTNCsazldNDLK3DEpsa6c6atSs%2FIRBKzM6cqnRmp2cdqW6Wl0Y4Yda79lfMus106%2FN0%2BQhQs0AoJnPgfXlbaK3ju582BXfZKX0e4dxpxl1pHxch2aqLhADUgDStFWBydAWWEF0wb04nAgoLKxhft4RhUp9SRrw%2FAVyejYom9GDAxkEHDpiunB%2BPbUNTmLFhm6jLx%2FfTRhfYxeFsm3e%2BDg85%2BDS5M1e31z%2F6pO4kD8OBIrkvaiYjKdG%2F%2BExMUv3t4cVZH9PPQgQs1%2Bp88ztc%2FQzNAa8BKzxQuJJjLIxz%2F6nlzzv4V45Qe2aeIDCb857DBjqkAR5%2B5fWAKljHr%2B1eZ%2B87UeE5Rkia33w1Ot8YgIcg9%2BpUfah1EamhW1M0PVheGZxLeRAjLEmY2PG7w9NxBQejvo%2Bb0R%2BPq8xTzV1NEaRZ02MebguHsfW6ZK%2BI8nSX2MFr0omsc5sUmQzbVStd5MVg0iU4MZHhlZ5dZ5Ha4sJPMPz1IazDrVYJZc5kIzXitRnyhVx6tYHModuj0FM%2BaHbnUcTKXroc&X-Amz-Signature=8100090cecc869359f87fb93d8f727acd5825681588437be418a7fb7b246a88f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTSRGXDN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDQuUr7M4k3zjmS3ib%2BPruDMYgdYDUcsqvWxu9jzDbS2QIhAPuIFVV7MUZyon3UustJ%2BulD87KvEBrkoulvk308vKKEKv8DCCwQABoMNjM3NDIzMTgzODA1Igz6KTmcK5nniVQpMx4q3APJjqKnifXYS47UOY%2BGXzhUeu82Atz%2BNqrDuMbXS6Zn1ZqP17czk%2FTmy0ZCJ98ABALlwG1TLJm10S9UFmBAgfzR99MXGrcyiKljb7iQsQdBYrFoJYy2%2FWxWRrfB%2BTMkNZM7ZvFnBI8fG6EcniAgOgz3OtXIdnEAeIK9H%2BF3Jpt1BMjpNeggXj5nYj816z9%2BWAU5OEb1UwWXfuYZvR0UrlaxI39z9KrWnqNhYoWKSZktKbYPjcMOuUh9aUfpkHOhibRqe9Xu2%2BOu%2FqfZ5F2pBUAZ3%2FY8iM7Hol6byCoH114rUi4hN4vXZDsOxQPu2aPLDwvbYuTNCsazldNDLK3DEpsa6c6atSs%2FIRBKzM6cqnRmp2cdqW6Wl0Y4Yda79lfMus106%2FN0%2BQhQs0AoJnPgfXlbaK3ju582BXfZKX0e4dxpxl1pHxch2aqLhADUgDStFWBydAWWEF0wb04nAgoLKxhft4RhUp9SRrw%2FAVyejYom9GDAxkEHDpiunB%2BPbUNTmLFhm6jLx%2FfTRhfYxeFsm3e%2BDg85%2BDS5M1e31z%2F6pO4kD8OBIrkvaiYjKdG%2F%2BExMUv3t4cVZH9PPQgQs1%2Bp88ztc%2FQzNAa8BKzxQuJJjLIxz%2F6nlzzv4V45Qe2aeIDCb857DBjqkAR5%2B5fWAKljHr%2B1eZ%2B87UeE5Rkia33w1Ot8YgIcg9%2BpUfah1EamhW1M0PVheGZxLeRAjLEmY2PG7w9NxBQejvo%2Bb0R%2BPq8xTzV1NEaRZ02MebguHsfW6ZK%2BI8nSX2MFr0omsc5sUmQzbVStd5MVg0iU4MZHhlZ5dZ5Ha4sJPMPz1IazDrVYJZc5kIzXitRnyhVx6tYHModuj0FM%2BaHbnUcTKXroc&X-Amz-Signature=2a5db492e3e381e45427ee64d4ec2f9095d8b2a72ef0eeac035e6b05d50f40dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
