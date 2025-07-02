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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL25TN6P%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4MOQhAtK3Znrp4ciXT4OSfbfNMI1yvdaIJb8kkfvEzAiA5KZSi9O6CcJjMpdtOZ74OF44XvTyjzw9Y9RKJ6OBQhCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKOjRvAz%2FZ3qeML1gKtwDiBiyzQ6p3kBrEhlSX1DFKxMTvxN%2BM0O9j36EefhBaosxMR8T4dFdptyxSBF3lxm3EbnQvgQEXq%2FGktVkAGp%2FbO%2FE%2Fh7claBzIBt2BI6n%2BhRpsUTYuQJ0AF6Yrs2hxsIWcL0hkUoipp7KL75KBheeQY7wFIk8%2FH64kPJL1vbdtVhBDi6VM%2FKcRq9LFMGGK6AH8Zp0r3VoK5Rvt3oZpPiK%2BMX3IcF30yRIiharq%2FiIwwbErRR8wgn6chNJ%2FSh9u7V0DY2cG0ZSzC%2Fa1KlLHnJwNnDk%2B%2F3rNhvPcQDITvuKpELrkrv1Cd1PPQjTMOt7xgMD1PBzSMsRhlCZtY7NybuBJCAB%2BqW2jS0FVe8%2FQZOeBJvHYo8WiIRXrwBPgFGP5QwNc9ei19u8Z44w43abqgt7j34eSUje96jhFfVjNZCsUhCDS3DBWkZ6T2qZCijaQJHH8yDEjKhIeRhqO%2BXP%2Bin%2FD7sQ6PdkElCHqf5pzkDl9zNm8W%2BPqQSBjaV%2BSIRHEuljxN3wYnGSrRmg8weme0%2FOfzO3dCC%2FLC08v5JvZsKcaWzB233MKsw55V1G9bXFDEbXb%2BV7fnXku5wub0PdLbPjnR%2FzGXlEMt%2FNozM3KuHXCRl3HypixNsi84RL1D4w8p2SwwY6pgG87GQ2hezvPA%2FNb0PWklWEs13l2IdLm3DPAYMnXUyVrAKNy3ps0K5iPWxIWcv0RbcdP4c60o80PQijz6s1hKzjMngNcQ3Bqgy4LnLrvd%2BFvCu5uhu0AcAsFMR28jLxsyWrjBRYBc2TYSe5Hee%2BhxpJ6gSJMzbrs74BKG6gRcjUiYrubwEyYjwDOdX8MDluvJ9zu8Dc%2BiTjH2LRqNWlFU0u3VM9CE74&X-Amz-Signature=46331349d897c7c6e13ea5f6e9e0e3ccccb49a2d602f25d8ab73ed202e03cbe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL25TN6P%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4MOQhAtK3Znrp4ciXT4OSfbfNMI1yvdaIJb8kkfvEzAiA5KZSi9O6CcJjMpdtOZ74OF44XvTyjzw9Y9RKJ6OBQhCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKOjRvAz%2FZ3qeML1gKtwDiBiyzQ6p3kBrEhlSX1DFKxMTvxN%2BM0O9j36EefhBaosxMR8T4dFdptyxSBF3lxm3EbnQvgQEXq%2FGktVkAGp%2FbO%2FE%2Fh7claBzIBt2BI6n%2BhRpsUTYuQJ0AF6Yrs2hxsIWcL0hkUoipp7KL75KBheeQY7wFIk8%2FH64kPJL1vbdtVhBDi6VM%2FKcRq9LFMGGK6AH8Zp0r3VoK5Rvt3oZpPiK%2BMX3IcF30yRIiharq%2FiIwwbErRR8wgn6chNJ%2FSh9u7V0DY2cG0ZSzC%2Fa1KlLHnJwNnDk%2B%2F3rNhvPcQDITvuKpELrkrv1Cd1PPQjTMOt7xgMD1PBzSMsRhlCZtY7NybuBJCAB%2BqW2jS0FVe8%2FQZOeBJvHYo8WiIRXrwBPgFGP5QwNc9ei19u8Z44w43abqgt7j34eSUje96jhFfVjNZCsUhCDS3DBWkZ6T2qZCijaQJHH8yDEjKhIeRhqO%2BXP%2Bin%2FD7sQ6PdkElCHqf5pzkDl9zNm8W%2BPqQSBjaV%2BSIRHEuljxN3wYnGSrRmg8weme0%2FOfzO3dCC%2FLC08v5JvZsKcaWzB233MKsw55V1G9bXFDEbXb%2BV7fnXku5wub0PdLbPjnR%2FzGXlEMt%2FNozM3KuHXCRl3HypixNsi84RL1D4w8p2SwwY6pgG87GQ2hezvPA%2FNb0PWklWEs13l2IdLm3DPAYMnXUyVrAKNy3ps0K5iPWxIWcv0RbcdP4c60o80PQijz6s1hKzjMngNcQ3Bqgy4LnLrvd%2BFvCu5uhu0AcAsFMR28jLxsyWrjBRYBc2TYSe5Hee%2BhxpJ6gSJMzbrs74BKG6gRcjUiYrubwEyYjwDOdX8MDluvJ9zu8Dc%2BiTjH2LRqNWlFU0u3VM9CE74&X-Amz-Signature=7af58e8c53aa95fc74aa9aa0d826a415d38e5b939dd8f3446d7905b073df0124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
