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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XKRR7P%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIB7vXMFVF1kU2hoODjCr6%2F2Yq44chJ7KjNmlaL1LOfwJAiBvlD0H6l%2Fdn%2Bu9GnoZ%2FiINA9hjiRqq3g7TH0UDUoHP2yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMRj5tJiD4QrOvVW%2F8KtwD4gRo7e4v4X7qdYOOdGPS3OH%2FstDXfPYjEdyXtriDE%2FcppA67jkdEAjfCQO1q5Ft9oTDbiG3t7T5P7TMKm08FWEaBGcZf0HQDxP90nfOGKAer8SDpxOhK2Q1w5zJf5nsqET2ZP6yzjX3hr0qbjHoZOomem0zA1QvtYFOu67n9FH%2B4QBPR33PLndxf8YZenDDHDDIQiykMOvrYOm7BG7xtsDJmvD78YwnQO1zT595edR7FQopm%2FdTE1EeFpXQKOqUgPKoj%2FKySEoXUQ02RDjdiin5qqbxAPl5jZQzOqcTwdQryTP86cdqhwzS569JLYN%2FYKItE5L11A2W2QRS9KPvJoeDnlGDPO85IFbypqZ4a%2FBmEjrJNlZt9FkPlRx84mhr6CH1gz5yLDBRYR0xJhmId%2FLQxeSvnj1OUkF6bzCoA%2F0cHdvSpE1amVTST6K0ppQgF4svHYP0dkCkI2fU1sgzrbX4%2Fg%2FmQgv%2Fswu5OolGy1GvhVa6UkZZtWRf0c6Vq84pc7Pk16XdsI747i0EYSEBTWP1a8JdZHsPMe50yEn41XT17FRsyeRvI4Vf%2BdP%2Fp9CGfM8OAMHl8KRcQ%2BF9ldKTCUfgLAlbd%2Bjl7%2B2pZXfP%2BawsN9VoT9NG2awXQ5m4wi8KhvwY6pgH3I5N2mX5U4Juqwux8NyOqR0f7d8lI%2BPH5oD96ILLZDcYoyo4M1GsBV5IKgUTHIAs1h5is0hK5k1jjl%2Fm2jgRcbsLYdDnob8%2FC33fPoO8mkQD9BDDjyUn4a6A2ZmZTMURhmHdhUrSIAL2Y%2BAHm9fWTvsptDbNMUaK%2BH%2Fv5BYmtULSFKFY6f8pqYobZFz0V4loj%2Bb60%2Bcw8DQFaJb2cCIFWShzqDMpy&X-Amz-Signature=e350e8623a93d705acfd076f86f9af65d59a0c0b4a46b320e4ab29501f3d55da&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XKRR7P%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIB7vXMFVF1kU2hoODjCr6%2F2Yq44chJ7KjNmlaL1LOfwJAiBvlD0H6l%2Fdn%2Bu9GnoZ%2FiINA9hjiRqq3g7TH0UDUoHP2yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMRj5tJiD4QrOvVW%2F8KtwD4gRo7e4v4X7qdYOOdGPS3OH%2FstDXfPYjEdyXtriDE%2FcppA67jkdEAjfCQO1q5Ft9oTDbiG3t7T5P7TMKm08FWEaBGcZf0HQDxP90nfOGKAer8SDpxOhK2Q1w5zJf5nsqET2ZP6yzjX3hr0qbjHoZOomem0zA1QvtYFOu67n9FH%2B4QBPR33PLndxf8YZenDDHDDIQiykMOvrYOm7BG7xtsDJmvD78YwnQO1zT595edR7FQopm%2FdTE1EeFpXQKOqUgPKoj%2FKySEoXUQ02RDjdiin5qqbxAPl5jZQzOqcTwdQryTP86cdqhwzS569JLYN%2FYKItE5L11A2W2QRS9KPvJoeDnlGDPO85IFbypqZ4a%2FBmEjrJNlZt9FkPlRx84mhr6CH1gz5yLDBRYR0xJhmId%2FLQxeSvnj1OUkF6bzCoA%2F0cHdvSpE1amVTST6K0ppQgF4svHYP0dkCkI2fU1sgzrbX4%2Fg%2FmQgv%2Fswu5OolGy1GvhVa6UkZZtWRf0c6Vq84pc7Pk16XdsI747i0EYSEBTWP1a8JdZHsPMe50yEn41XT17FRsyeRvI4Vf%2BdP%2Fp9CGfM8OAMHl8KRcQ%2BF9ldKTCUfgLAlbd%2Bjl7%2B2pZXfP%2BawsN9VoT9NG2awXQ5m4wi8KhvwY6pgH3I5N2mX5U4Juqwux8NyOqR0f7d8lI%2BPH5oD96ILLZDcYoyo4M1GsBV5IKgUTHIAs1h5is0hK5k1jjl%2Fm2jgRcbsLYdDnob8%2FC33fPoO8mkQD9BDDjyUn4a6A2ZmZTMURhmHdhUrSIAL2Y%2BAHm9fWTvsptDbNMUaK%2BH%2Fv5BYmtULSFKFY6f8pqYobZFz0V4loj%2Bb60%2Bcw8DQFaJb2cCIFWShzqDMpy&X-Amz-Signature=488d8c8f12be66b39c18e963863cea575478e993b590dbb16de170a355b70bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
