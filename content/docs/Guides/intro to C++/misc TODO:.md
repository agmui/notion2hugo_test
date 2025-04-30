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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLZK5UQ3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDV%2BvBtTUS8tEZyQ5ZTWNiui8DhAZo26h0r3MtHt5r76AiA%2BFEVLj21syIgiqJbnEtihVjXm6HiO1g%2Bs140UfPIQlyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMea7dxNVtIjfnmFEqKtwD6qDjd7oUJX4POboQlTwOhD1W4WH1HUlFywiZHjTJ0AkrHoO%2BZmdQN6AQIG9aqdBA6mQD6IHFfzCJRKYv8HxWkU2WwSAMw0bcoflyclR2PveRvmYPjXNhZEIhJCz4aDU%2BsB%2BxWk8KZU5Ilby1xB0RVflp2dtiJIjFVpSq%2BohGCh9GpNd24xAIICfQlMmAW%2F%2BzfZyMTimq9Pi8Jn9zIRMDYQlnt2mBaQV%2FrS4NXjNokaPoxbfGYXxuVZ1y7k4q9Jo0XxroOsSczHe344h9G0z5bIwxJoOizFQY2L%2Bx3eH7GOfMkZKArC1u357CfyTn3h91FyftnuZT0JT7iVk9vp%2Bp%2F%2FDV83viJ7Kbq6vRLWpoPRZHoetMsvBW7ZA%2FzOyF%2FEhULfNewF5asMN4BmtUxhUbmHnfgg5sCJosQyF7YmozLKAY%2Bh1A2jGpFN2d0d7CQrd6wX3UEp%2Fy9dE66jOCm4xA4ZbVGWMcu%2B1A4tVRLJlgQcrYwwh1ukdVY5z%2Blfo7xQo6SwWn%2BB2TbWQUH4aNPXX9ayKVAwSPtJwCWIXPxklMuAOv%2BzzTJsQ0mqCTyJA8HytlLNH7%2Fd8OTRLxoDzJdJpEAg3ZletJJvcbLvvA9pwHfUmT850XwImy%2FHf8CWow1MvKwAY6pgFd3ZQeBswgBemDr4Bzm8bBVvu5FTahbzvPA24wAkyD5JQ0qSqGfbnYlv0qG6SDQ3Qs2JzfQ7Q8HAoyu8%2BUjBh9wqDhoBA20jmjdLOkZCfAiZZVq0l3t6I%2FNdNzhn3UqcZ6AZ8xlU%2FZmPCW8A47a%2Bh9PYZVPcN5sPn7ZhCNtDFR4eCab0SlOb3JY%2BxZMnaT7Vl3co9xRwWgqmJ4uR4uuDN%2BiEbsDpW%2F&X-Amz-Signature=84fb457bc7f6582f993a1d55a62e0de745f79aaf53d2ed9b5bea90e5eb7bbffa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLZK5UQ3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDV%2BvBtTUS8tEZyQ5ZTWNiui8DhAZo26h0r3MtHt5r76AiA%2BFEVLj21syIgiqJbnEtihVjXm6HiO1g%2Bs140UfPIQlyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMea7dxNVtIjfnmFEqKtwD6qDjd7oUJX4POboQlTwOhD1W4WH1HUlFywiZHjTJ0AkrHoO%2BZmdQN6AQIG9aqdBA6mQD6IHFfzCJRKYv8HxWkU2WwSAMw0bcoflyclR2PveRvmYPjXNhZEIhJCz4aDU%2BsB%2BxWk8KZU5Ilby1xB0RVflp2dtiJIjFVpSq%2BohGCh9GpNd24xAIICfQlMmAW%2F%2BzfZyMTimq9Pi8Jn9zIRMDYQlnt2mBaQV%2FrS4NXjNokaPoxbfGYXxuVZ1y7k4q9Jo0XxroOsSczHe344h9G0z5bIwxJoOizFQY2L%2Bx3eH7GOfMkZKArC1u357CfyTn3h91FyftnuZT0JT7iVk9vp%2Bp%2F%2FDV83viJ7Kbq6vRLWpoPRZHoetMsvBW7ZA%2FzOyF%2FEhULfNewF5asMN4BmtUxhUbmHnfgg5sCJosQyF7YmozLKAY%2Bh1A2jGpFN2d0d7CQrd6wX3UEp%2Fy9dE66jOCm4xA4ZbVGWMcu%2B1A4tVRLJlgQcrYwwh1ukdVY5z%2Blfo7xQo6SwWn%2BB2TbWQUH4aNPXX9ayKVAwSPtJwCWIXPxklMuAOv%2BzzTJsQ0mqCTyJA8HytlLNH7%2Fd8OTRLxoDzJdJpEAg3ZletJJvcbLvvA9pwHfUmT850XwImy%2FHf8CWow1MvKwAY6pgFd3ZQeBswgBemDr4Bzm8bBVvu5FTahbzvPA24wAkyD5JQ0qSqGfbnYlv0qG6SDQ3Qs2JzfQ7Q8HAoyu8%2BUjBh9wqDhoBA20jmjdLOkZCfAiZZVq0l3t6I%2FNdNzhn3UqcZ6AZ8xlU%2FZmPCW8A47a%2Bh9PYZVPcN5sPn7ZhCNtDFR4eCab0SlOb3JY%2BxZMnaT7Vl3co9xRwWgqmJ4uR4uuDN%2BiEbsDpW%2F&X-Amz-Signature=9291baccf1e0df648f545324d0a59beee6eaede6627cf344dd97390b2cf44426&X-Amz-SignedHeaders=host&x-id=GetObject)

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
