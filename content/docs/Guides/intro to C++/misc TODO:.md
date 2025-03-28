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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWRSUAEI%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqzwFYJMr2h%2FL3sRQOxCWY7ZRrF68NAa2APfxgnqkNowIhAL6AdsdKwPzsk0Dn8WnDy0jexdSIy760y7Dp4xOj3xzBKv8DCGAQABoMNjM3NDIzMTgzODA1Igx3mH6ufYQwmxkCFNsq3AM6zKCFIP7lS5VWyV3QoKUZD6gDvSyuxeBn3r38YmH6rhdAzc1T7%2BmU6p88WVYzrWUMRvUlzYjruz9PCA9QZcsxj%2BRlQU8kcJ8D1S3CrB8DYnuGPZ5BORPXJU2NmiYTmzeDIOk4WdeiBaeDXjS7IUvsa%2BPlrZJq8OX7eR88NXKZcC9RhipbAKXoJzkifmjXYr0rZSeKbFwYwpLQuWVbiF%2B58wDJe7XLqfExEGuy%2FlxB8MaLulro5B14gCuiTfObFcoziWLirF46WAnHqqj46o4A%2B15%2BLVJXLtlxFKuuCaUQbnRXbGIevOnJqF6pkx9VD8R1i3t8ULOB6LFmv9Qqyw%2FA%2BDohPnTSM8WusQdR07yVO%2BVKNd%2FFqxFQxTeFj3wWDjU1qGw%2BAF8typtYGm89i0vExqFJwiwJrcwqN23y4JWMaqUF49qxh62eVnneZHN1cE5i9ujUMlkuOas4oUBIo8boQUEL9%2FNy6SlZMiF9yMloNPA9grjzXa%2Boin5N2mPiB2z7BAkC4oor01szm41vs5ImTwJPv%2BvaCQp7Ke1H7bQwDkne45olzm%2FJOVZ0umXxZZ0Aub%2FVOa1uqIQ6VaAjwGdetrizqBlAVdW4FikZ4L2zDV8tqGSAP%2BsQWvk3czC57Zq%2FBjqkAZEWqGTnrSzpEsFb7NcZihVoOzr08NV3%2FQpY0AvnRfskxaVUyVmgsvm04dHvtvVaq%2FeWLa%2Fb1isG2Ftx%2BqT6Bq80%2FQrgEByXJDII1lGJ1WbRnRvFd%2FjXKSWwSDmGXZ3LgleOcg5Q3uReT%2BqKS7v%2F3sWEFAjdHBLBl3fotfv9Xo4Jbx5GrPTdZvRT%2FLV1xH%2FI0yLd9D%2B1Fl%2FTuOGBHRbzwWotwTP2&X-Amz-Signature=5f28a95fc4068093b4682383147d49fa555e5545ce1ec35dd59c901803503423&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWRSUAEI%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqzwFYJMr2h%2FL3sRQOxCWY7ZRrF68NAa2APfxgnqkNowIhAL6AdsdKwPzsk0Dn8WnDy0jexdSIy760y7Dp4xOj3xzBKv8DCGAQABoMNjM3NDIzMTgzODA1Igx3mH6ufYQwmxkCFNsq3AM6zKCFIP7lS5VWyV3QoKUZD6gDvSyuxeBn3r38YmH6rhdAzc1T7%2BmU6p88WVYzrWUMRvUlzYjruz9PCA9QZcsxj%2BRlQU8kcJ8D1S3CrB8DYnuGPZ5BORPXJU2NmiYTmzeDIOk4WdeiBaeDXjS7IUvsa%2BPlrZJq8OX7eR88NXKZcC9RhipbAKXoJzkifmjXYr0rZSeKbFwYwpLQuWVbiF%2B58wDJe7XLqfExEGuy%2FlxB8MaLulro5B14gCuiTfObFcoziWLirF46WAnHqqj46o4A%2B15%2BLVJXLtlxFKuuCaUQbnRXbGIevOnJqF6pkx9VD8R1i3t8ULOB6LFmv9Qqyw%2FA%2BDohPnTSM8WusQdR07yVO%2BVKNd%2FFqxFQxTeFj3wWDjU1qGw%2BAF8typtYGm89i0vExqFJwiwJrcwqN23y4JWMaqUF49qxh62eVnneZHN1cE5i9ujUMlkuOas4oUBIo8boQUEL9%2FNy6SlZMiF9yMloNPA9grjzXa%2Boin5N2mPiB2z7BAkC4oor01szm41vs5ImTwJPv%2BvaCQp7Ke1H7bQwDkne45olzm%2FJOVZ0umXxZZ0Aub%2FVOa1uqIQ6VaAjwGdetrizqBlAVdW4FikZ4L2zDV8tqGSAP%2BsQWvk3czC57Zq%2FBjqkAZEWqGTnrSzpEsFb7NcZihVoOzr08NV3%2FQpY0AvnRfskxaVUyVmgsvm04dHvtvVaq%2FeWLa%2Fb1isG2Ftx%2BqT6Bq80%2FQrgEByXJDII1lGJ1WbRnRvFd%2FjXKSWwSDmGXZ3LgleOcg5Q3uReT%2BqKS7v%2F3sWEFAjdHBLBl3fotfv9Xo4Jbx5GrPTdZvRT%2FLV1xH%2FI0yLd9D%2B1Fl%2FTuOGBHRbzwWotwTP2&X-Amz-Signature=7ce9e9b9bff71145743d266ef69d3828bb77d7e63920fa873799a07cfbe079f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
