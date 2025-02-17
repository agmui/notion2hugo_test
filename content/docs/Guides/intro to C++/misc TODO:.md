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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q3KUDAM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHs%2BNW78DiD9iLxNR9tkmLGax4SePMaVNnGe75rqVgxcAiEA5U9A6H1eLzLaVzCxaPjcjdAZ5qFECs%2BACOKFhquV0fQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAwh3aAowGzuGUPKgSrcAyKuVbI3AG6S44L52RSdgQ5l3Yzv0NVDLwq9Va6Mw5z6HbucHcS8ITU4pxwkIxvQEHvxPyLBvtXZ0B6zgWgSyTggTEGCj%2B2Tuv3g%2B9cC8%2FQfJ6Fh0s5vaLl6JIalDiozmAWS%2F54xkIojaSPKKLe7%2Bm%2BEN26MCqECkTLStm0zeLyo9nF0B7CHwO8DB6lxe4gYMj4DbXgmyjAxHxv8kcHkfOjBMyBHRjdHso9H6Iju1YgRKJ9iOZML589RRygecxv%2Bl4phYN4NAejywooWZ4HoY94inK7MGfI7Ro5tekmi09XYWem%2BKmZA3ISFsmUrt5iC0X6gTErthqaa66Y51BPNt%2FApgsIB4THXD4YetG%2FZRvR5XcumcvgzrPEiJHsN4dIyPRxRU%2Bw5dK1WbmxpU6ex%2FStM7EF73xG3PPaNw2e4kUXZgR1vDzU4Qe%2FSneJIOJlN9C0aYD1TgQZAqdbonS4lqqn8Qt8S0Zj6NnlYD8mzRYqqWXoI56UjggD%2BJHBPGiFu4%2B55mL5iy1rI0tvjsw1Jm%2Bue%2BIrkA7BVe8tPF0Vrz1cysH5hruPsinbOghRzy0%2BK%2B2IyWRmNYoF3NuhDn8nyyimSiLFiZA73GRyiBRqDK657UC5fWPUlNLQd7fxxMLHCzb0GOqUBdlhPE1Qcr7XNo028gKKcz3fDkUf2HIvliX15m04RtXPxjVO%2BuYRqeUZqjr3DYUdYRmitEThdLzO%2BoS%2FQTHwUkVOqP21uC7fvSFOmfUyaso3vxdNPEWGnxjtSR9ucBlN1TCQjbezTykkdJybqZi3sNJeOspksDMpKMNa4DPnHan5PcCl%2FAlOZU9sIa8rIrjNdZROENsZ9ZtYwzEIql6o2cA5msWLb&X-Amz-Signature=e931e5c4609f290fd95424917dd83c222a9c5e4e6365aae51056fff245b006b7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q3KUDAM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHs%2BNW78DiD9iLxNR9tkmLGax4SePMaVNnGe75rqVgxcAiEA5U9A6H1eLzLaVzCxaPjcjdAZ5qFECs%2BACOKFhquV0fQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAwh3aAowGzuGUPKgSrcAyKuVbI3AG6S44L52RSdgQ5l3Yzv0NVDLwq9Va6Mw5z6HbucHcS8ITU4pxwkIxvQEHvxPyLBvtXZ0B6zgWgSyTggTEGCj%2B2Tuv3g%2B9cC8%2FQfJ6Fh0s5vaLl6JIalDiozmAWS%2F54xkIojaSPKKLe7%2Bm%2BEN26MCqECkTLStm0zeLyo9nF0B7CHwO8DB6lxe4gYMj4DbXgmyjAxHxv8kcHkfOjBMyBHRjdHso9H6Iju1YgRKJ9iOZML589RRygecxv%2Bl4phYN4NAejywooWZ4HoY94inK7MGfI7Ro5tekmi09XYWem%2BKmZA3ISFsmUrt5iC0X6gTErthqaa66Y51BPNt%2FApgsIB4THXD4YetG%2FZRvR5XcumcvgzrPEiJHsN4dIyPRxRU%2Bw5dK1WbmxpU6ex%2FStM7EF73xG3PPaNw2e4kUXZgR1vDzU4Qe%2FSneJIOJlN9C0aYD1TgQZAqdbonS4lqqn8Qt8S0Zj6NnlYD8mzRYqqWXoI56UjggD%2BJHBPGiFu4%2B55mL5iy1rI0tvjsw1Jm%2Bue%2BIrkA7BVe8tPF0Vrz1cysH5hruPsinbOghRzy0%2BK%2B2IyWRmNYoF3NuhDn8nyyimSiLFiZA73GRyiBRqDK657UC5fWPUlNLQd7fxxMLHCzb0GOqUBdlhPE1Qcr7XNo028gKKcz3fDkUf2HIvliX15m04RtXPxjVO%2BuYRqeUZqjr3DYUdYRmitEThdLzO%2BoS%2FQTHwUkVOqP21uC7fvSFOmfUyaso3vxdNPEWGnxjtSR9ucBlN1TCQjbezTykkdJybqZi3sNJeOspksDMpKMNa4DPnHan5PcCl%2FAlOZU9sIa8rIrjNdZROENsZ9ZtYwzEIql6o2cA5msWLb&X-Amz-Signature=bed81815d19f5e5b6d6d8aa9db9fdb9e6283c22dfb2384c6e853415809e798f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
