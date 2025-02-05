---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "null/Guides/intro to C++/misc TODO:.md"
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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6E4EDHF%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCZ55YtU40AIFIg2VVbXQyUhELMbu61Acr0tX14unWJCQIgYVKZHmmJcVM4qs63I7zI9sj%2FZwgRs%2BLGjA1deiH7Mgkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKbSkK7qh7WquLumQSrcAw5biqKkHDbVj1c3PpYp%2BgWfp66qK0oKMhT%2BJLF%2Byw9LkjDQZaa730pa3l16oGtK4ur%2BcVZjJyhb5lL6jG7VJzX30sZ9Kid6FyEXPYbrYGnVoYLrbYclnTJK7HPJS%2FBHYzVXCo%2BmitvK3WaahgeZZ3RpXP0tWhCeHHlGlU4EHCJ%2FUzCF89UzX50%2BqluTbPM0IeIN9doKrqgrNSe%2FufbF4uIRp7saHxGgBJZQIF81rbhIV7tJYKAKrqkQk%2FvjNKRIqCJfB%2FzYU3ntHSZVB%2FpP7oSPCUsy3i1CSiRfEVM0eSeUUlXHGqPw%2FAOEUBDquZhMwlQBvixd%2BxK%2FpZP5nFoljmH59qxsMZ59%2F3wO%2BeBamHfA%2F1BDYVLLsx4f9XQyRSFHzzz0stAHbwlWgq%2Bj3RcCDACgHlwxbdzeRGrd1jqVewS4x%2Fwr8dvyIFJqaBx5EFzn4gFhBCNFC%2BHJjkTs5EWBdyMWLU7NcqjIPNjSBpO%2B0qtQ0qMiXEEXqOjwB%2BbovEhfKXZqiunv%2FsaCApfXdu0H8smDbYOrP1%2F6UIwHEMKUGxgdb4QFM0sR3mRIi3hjdjCmvRO5BWaJ%2F3YLxzF4%2F%2FJ6NVa%2BFzyv%2BsraKaJYDgAUwJJHYOZeTOW4YjFowWTtMOPei70GOqUBHelRms%2FM61zcKJ6USfVOAAWFsF3wQzEANtiXg%2FcSuUs3ga%2BN9FvmhxA1QKuH266pOf6yORakc%2Bbqw3jH2M%2BeEm8WNtNXGiBDVfe8Px9gRek%2BdJv7wHgG%2BJ9eFSQDAryg%2Fg%2BWwxG%2BrJDxv7%2FnI6o13RNJCJb1dkJ1H%2FYDeL0gFj7IOXyJKWwVyjY9vTGim4XPHnPVxT4HfTtrac%2FlGXLsEJ1bRG6P&X-Amz-Signature=7d6432bb2f69d2afdbb2d8954a4df25252c9fad56c587c01197c16fd8c84b67b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6E4EDHF%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCZ55YtU40AIFIg2VVbXQyUhELMbu61Acr0tX14unWJCQIgYVKZHmmJcVM4qs63I7zI9sj%2FZwgRs%2BLGjA1deiH7Mgkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKbSkK7qh7WquLumQSrcAw5biqKkHDbVj1c3PpYp%2BgWfp66qK0oKMhT%2BJLF%2Byw9LkjDQZaa730pa3l16oGtK4ur%2BcVZjJyhb5lL6jG7VJzX30sZ9Kid6FyEXPYbrYGnVoYLrbYclnTJK7HPJS%2FBHYzVXCo%2BmitvK3WaahgeZZ3RpXP0tWhCeHHlGlU4EHCJ%2FUzCF89UzX50%2BqluTbPM0IeIN9doKrqgrNSe%2FufbF4uIRp7saHxGgBJZQIF81rbhIV7tJYKAKrqkQk%2FvjNKRIqCJfB%2FzYU3ntHSZVB%2FpP7oSPCUsy3i1CSiRfEVM0eSeUUlXHGqPw%2FAOEUBDquZhMwlQBvixd%2BxK%2FpZP5nFoljmH59qxsMZ59%2F3wO%2BeBamHfA%2F1BDYVLLsx4f9XQyRSFHzzz0stAHbwlWgq%2Bj3RcCDACgHlwxbdzeRGrd1jqVewS4x%2Fwr8dvyIFJqaBx5EFzn4gFhBCNFC%2BHJjkTs5EWBdyMWLU7NcqjIPNjSBpO%2B0qtQ0qMiXEEXqOjwB%2BbovEhfKXZqiunv%2FsaCApfXdu0H8smDbYOrP1%2F6UIwHEMKUGxgdb4QFM0sR3mRIi3hjdjCmvRO5BWaJ%2F3YLxzF4%2F%2FJ6NVa%2BFzyv%2BsraKaJYDgAUwJJHYOZeTOW4YjFowWTtMOPei70GOqUBHelRms%2FM61zcKJ6USfVOAAWFsF3wQzEANtiXg%2FcSuUs3ga%2BN9FvmhxA1QKuH266pOf6yORakc%2Bbqw3jH2M%2BeEm8WNtNXGiBDVfe8Px9gRek%2BdJv7wHgG%2BJ9eFSQDAryg%2Fg%2BWwxG%2BrJDxv7%2FnI6o13RNJCJb1dkJ1H%2FYDeL0gFj7IOXyJKWwVyjY9vTGim4XPHnPVxT4HfTtrac%2FlGXLsEJ1bRG6P&X-Amz-Signature=311daeae7ad69b2cbb9253c32c3d588df4b5fe3b694d9bb921ca7d7e6d1fa99f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
