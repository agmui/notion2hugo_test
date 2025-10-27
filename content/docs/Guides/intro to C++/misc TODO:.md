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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2VJSD7S%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDINklbvTQqQAXlihGQLpMADkcwDiWEI3OEUYy0wbVOQIhAM4nxPnucPvaBcTFDeyRIGXqp5YzhlgxYFMMZiQ9olZpKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTjWjQOQWxkwS76LMq3AN%2F447XZZVq%2FQNKDJxG7gWklGDKT1cUaRa2XJJgItb9F91Xtp8ZPl0BsSndKK%2BaCRa781G8b9PxrXAVT%2B1E05T9WxDzVKzHJVT%2BTX7NZ%2BZLKny5VVA%2Foz0NoZ7eB3VpNl2aUMmCy4i0c9Ev2caG%2BPuPlbxbqhZsEu1CC4YHbHk9WWLnIVlcE%2FaKXKSm0PacmhXMYQcaSyBUZsM335DsBt5k2oJpwBdPO%2BLVCjAWdW913woYh1bzRjqn9D%2B1%2Brlh%2Bld9YZRe536hYBmi5Ic2zjDBtJp0b3WC0RucEyARok5LH0YMs0Udrug0J8JInvkGq9II6VS0T1FcK4eok8QQA8XIH0y57PoPUlTheSDtPxxakqpSb%2FYk2QLc9YbpQBV8SnCK47h2ilILjw1Kf5cuW3yn72eWeS0cNusthTkNdi7VTilattGzP7awVa6sS2OctAuoJn6I13r0kU%2F%2FFN7zTMz0u3ABRUlOEZg2Q1VzRmdlvMoVzJJZGkaVw6htg0dIiGn%2BYBQwIRcpm%2Bs11eqy2zzF9bmRO7DKsNUr4quY%2B08kocm4YBJsZVYqowQldM%2FB2avhpe28p6n7O%2BVQZ9LpHYdf6H7%2BbY9J5p%2Bd4Ge5Pgw%2BHxe4IXd4FDfKiYkjTDDUjvvHBjqkAU%2FpIMKHdt6O%2BaqjN%2FSeIbPV3%2BwgtCpp0epXzwHIY4lzdI9R6RqwUveLYsOF20QfQd%2FfEwbgl%2BOYcGH3buCyBVQ%2BNVHrL513DDLkzGvgVE52y9RjP%2FhY6DEQ4YOhc%2BzrnzL8RUHtcKJEas02ruA6%2B36twcyQu5nukMsW0UquoqykMy7%2BXjMO4mo2ruhp6bRSn2gH6dgTrx%2BAw7OU9o8GRr2mIOjM&X-Amz-Signature=da09339815faaa9a45279e2e8a4f48c0f8ea6c0d5223d7384e23fc7f3195023f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2VJSD7S%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDINklbvTQqQAXlihGQLpMADkcwDiWEI3OEUYy0wbVOQIhAM4nxPnucPvaBcTFDeyRIGXqp5YzhlgxYFMMZiQ9olZpKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTjWjQOQWxkwS76LMq3AN%2F447XZZVq%2FQNKDJxG7gWklGDKT1cUaRa2XJJgItb9F91Xtp8ZPl0BsSndKK%2BaCRa781G8b9PxrXAVT%2B1E05T9WxDzVKzHJVT%2BTX7NZ%2BZLKny5VVA%2Foz0NoZ7eB3VpNl2aUMmCy4i0c9Ev2caG%2BPuPlbxbqhZsEu1CC4YHbHk9WWLnIVlcE%2FaKXKSm0PacmhXMYQcaSyBUZsM335DsBt5k2oJpwBdPO%2BLVCjAWdW913woYh1bzRjqn9D%2B1%2Brlh%2Bld9YZRe536hYBmi5Ic2zjDBtJp0b3WC0RucEyARok5LH0YMs0Udrug0J8JInvkGq9II6VS0T1FcK4eok8QQA8XIH0y57PoPUlTheSDtPxxakqpSb%2FYk2QLc9YbpQBV8SnCK47h2ilILjw1Kf5cuW3yn72eWeS0cNusthTkNdi7VTilattGzP7awVa6sS2OctAuoJn6I13r0kU%2F%2FFN7zTMz0u3ABRUlOEZg2Q1VzRmdlvMoVzJJZGkaVw6htg0dIiGn%2BYBQwIRcpm%2Bs11eqy2zzF9bmRO7DKsNUr4quY%2B08kocm4YBJsZVYqowQldM%2FB2avhpe28p6n7O%2BVQZ9LpHYdf6H7%2BbY9J5p%2Bd4Ge5Pgw%2BHxe4IXd4FDfKiYkjTDDUjvvHBjqkAU%2FpIMKHdt6O%2BaqjN%2FSeIbPV3%2BwgtCpp0epXzwHIY4lzdI9R6RqwUveLYsOF20QfQd%2FfEwbgl%2BOYcGH3buCyBVQ%2BNVHrL513DDLkzGvgVE52y9RjP%2FhY6DEQ4YOhc%2BzrnzL8RUHtcKJEas02ruA6%2B36twcyQu5nukMsW0UquoqykMy7%2BXjMO4mo2ruhp6bRSn2gH6dgTrx%2BAw7OU9o8GRr2mIOjM&X-Amz-Signature=22b1e35973a1c6d34bfd06b55e3ae7df17f1865354d83b80163e1d3bc170ae8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
