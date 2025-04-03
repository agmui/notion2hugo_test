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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG7LP2H2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCus%2FuCbnETfBfp52tsJhRTzti6cD88eebIys7mioh%2BfQIhAPdPxSKsk9Ax%2FYBhYQuvqJio24Swp9eKVuy1BQMvxUW1KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv31WEqs29JSxccZcq3APndBSXtYUqCYE1F63mLWZqO%2BFjtvr%2Fn1WgDb%2F85kGVkkaXZG0TmsZolKx6PcNlYwtZoEVdwE7lRY3MrP0ssurIaLgDyLZyS%2FZmO8JDMeH6kgE9CR%2Fk6QlyUO1a1Hu7YRhO%2FAjZ%2BI1igT4h%2BK7AMbVHWsKhljSi1tx1P7yPHsM5yp7VmTGapG64EcGMT2z0yoVkwi8yLnohmFvE96AEUV%2FPQCu7fN51Tt8Eb4p0aGuDEZPKoCm3ZHHY8Vy0Xr6Geo62ou3axFM0HYYjWgap7wgQXbxRrJVgCGELy6yj%2BOpM%2FdhVAIKQfXBTstzmsSXwPupAps7NEh%2BxF6rgozRvf6BkZmQOPMbg6Od2wFvsp9r6HDIEVuJWvbpy0msfQ8%2F12VeNBd%2FTyTlKcgq1a24VboalBBTZiUtxi2VBFYtl7RGzk9efKOZTv0x7uAMuH6sMA%2Boy97UECkSUIFHLih%2Bvs%2BQ3dcSBEiyniMebUKhnJ6gZxEiBnQqSiK19KfrzVR36unarr6CwKY2nojD8mjxgJ4yC8ENk0%2BfJINJp8e0%2BUBwQVXNDHxNtnLzJ7x%2BrQSFtyF4mm35OoXqNGQYNWhorYBag%2Fi1pm%2B0mA4RjO9Mf1XwPKdJ9aaGJIxJMHDZIyDCc47m%2FBjqkAYaQzpw8rynxZh2V2iE5CVEBZR76aTlIFULUWnVbNLmOWNsA8zIcmnZQ0w5cQiyBDBLxLtUXVcu33kKA0q4%2B1zoFhPH9YfbhVeGZTM%2BFxzUQdWIrM2KhoLR7x8aiuCh70h2TA7avaL%2Fz411y56c%2F3jtzfj7Fb5wdxHRbUdxZ6a2HsbE846%2BVL3P87BjJRPU3fpKB%2FU%2BlXZOjNxyrZboA3IFEoihP&X-Amz-Signature=090af88f214a9b1e0e2b0dc49746f970a0e8f8f2643c0e193a224e9659a43d86&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG7LP2H2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCus%2FuCbnETfBfp52tsJhRTzti6cD88eebIys7mioh%2BfQIhAPdPxSKsk9Ax%2FYBhYQuvqJio24Swp9eKVuy1BQMvxUW1KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv31WEqs29JSxccZcq3APndBSXtYUqCYE1F63mLWZqO%2BFjtvr%2Fn1WgDb%2F85kGVkkaXZG0TmsZolKx6PcNlYwtZoEVdwE7lRY3MrP0ssurIaLgDyLZyS%2FZmO8JDMeH6kgE9CR%2Fk6QlyUO1a1Hu7YRhO%2FAjZ%2BI1igT4h%2BK7AMbVHWsKhljSi1tx1P7yPHsM5yp7VmTGapG64EcGMT2z0yoVkwi8yLnohmFvE96AEUV%2FPQCu7fN51Tt8Eb4p0aGuDEZPKoCm3ZHHY8Vy0Xr6Geo62ou3axFM0HYYjWgap7wgQXbxRrJVgCGELy6yj%2BOpM%2FdhVAIKQfXBTstzmsSXwPupAps7NEh%2BxF6rgozRvf6BkZmQOPMbg6Od2wFvsp9r6HDIEVuJWvbpy0msfQ8%2F12VeNBd%2FTyTlKcgq1a24VboalBBTZiUtxi2VBFYtl7RGzk9efKOZTv0x7uAMuH6sMA%2Boy97UECkSUIFHLih%2Bvs%2BQ3dcSBEiyniMebUKhnJ6gZxEiBnQqSiK19KfrzVR36unarr6CwKY2nojD8mjxgJ4yC8ENk0%2BfJINJp8e0%2BUBwQVXNDHxNtnLzJ7x%2BrQSFtyF4mm35OoXqNGQYNWhorYBag%2Fi1pm%2B0mA4RjO9Mf1XwPKdJ9aaGJIxJMHDZIyDCc47m%2FBjqkAYaQzpw8rynxZh2V2iE5CVEBZR76aTlIFULUWnVbNLmOWNsA8zIcmnZQ0w5cQiyBDBLxLtUXVcu33kKA0q4%2B1zoFhPH9YfbhVeGZTM%2BFxzUQdWIrM2KhoLR7x8aiuCh70h2TA7avaL%2Fz411y56c%2F3jtzfj7Fb5wdxHRbUdxZ6a2HsbE846%2BVL3P87BjJRPU3fpKB%2FU%2BlXZOjNxyrZboA3IFEoihP&X-Amz-Signature=9ea3940839daa6bdaca734b5d4b1db0f919fd6a8d9b8941e7cbf1b0dacfbdf59&X-Amz-SignedHeaders=host&x-id=GetObject)

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
