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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPBXAUKI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDjIlSRozQUXY3QxEYMo60ik1njPW319dMfaj3qEB1FygIhANzP7yb5qwKoscyymuhHO63mykaXF8F%2F3mQ8cE0oNzjBKv8DCDIQABoMNjM3NDIzMTgzODA1IgzA2%2BJHJI4J1TuCRAMq3ANt%2Bp89%2F8a2jvvexsOsuTSdwU53MPx0F576t1eQv7LAy%2FvXdBDe%2F9FE6Bl%2BFoG5Gps1%2FS5McPcacIvAhT6r7eS3Ju5Q1rajX3%2B5i2cG7uOihhWxvHibilBkXhnvE2%2F%2Br85yKqJHXYDihZn%2BlYB9xDjXaQ4cKMRiQ%2B%2B7JMSqioiiBQscBhctDeiqcjtqBIM5uHh5KKOk2d7RS6%2B7ekX1a%2FXoOav%2F8kj75FTvyFYenpVYEMpKyjU9eO0yV9YNiqicded%2Fsd43WpSC5fn9rLjvbK7xB2eOxy9h7C4iUSdFVykuZgYE%2F9R3hud2%2BTdDsiTM0tm%2FFqRyGkdUQAF5TGalrXD9LY5AV6OUNa5ltWxAn5%2BNiP2tzpG7ojDZ%2B18uzU1%2FKwWwQHTHLZB%2FrG3BQof504%2FBJFM%2FKU4X5LLelx5dMGV%2BusI04x5GjQVY6z5aekjzXsbsmNRhygKwwKBIqbuLJhAHi9OS1UmTqIP87OcBN2stkRrP6TAtfDs5pNIfSYnaS7zneleeUbVuSye7HTXRs6oAaJs4BSQwl3NcgwZ7l1WM082kGskBEvtYmRmPyC11IzqggJLQxuxjbCipzMA%2BjmpWhxMD3wURHodYMgvzbaAGHuoS2iJHRrfPcNLN0TCoyrbCBjqkAf8HZ7A1e6fYO%2B7yfsNJv0ugMUpYxtEny1uLu7LANTdrD3GQTmZzxJl4P9vnDHzsIPfWnQFGrXn562y61rHKFEiYRSniZ8lYUwDOkVPT7yPu6M%2FmYg68fwgFO9NEsGTPtNcs193Fi8PB9iaM%2FhKwYXiP8rzdmvaA5YqJhoj7tFhSLpzA8bcEqTp8%2BS0UPH%2By%2FcciqvvTCPt%2FGhyC09fZjboAVYzm&X-Amz-Signature=5e22d879d9b3077817bf3d36747bc8f0819698f2cb2200cc0e9da9191a2599d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPBXAUKI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDjIlSRozQUXY3QxEYMo60ik1njPW319dMfaj3qEB1FygIhANzP7yb5qwKoscyymuhHO63mykaXF8F%2F3mQ8cE0oNzjBKv8DCDIQABoMNjM3NDIzMTgzODA1IgzA2%2BJHJI4J1TuCRAMq3ANt%2Bp89%2F8a2jvvexsOsuTSdwU53MPx0F576t1eQv7LAy%2FvXdBDe%2F9FE6Bl%2BFoG5Gps1%2FS5McPcacIvAhT6r7eS3Ju5Q1rajX3%2B5i2cG7uOihhWxvHibilBkXhnvE2%2F%2Br85yKqJHXYDihZn%2BlYB9xDjXaQ4cKMRiQ%2B%2B7JMSqioiiBQscBhctDeiqcjtqBIM5uHh5KKOk2d7RS6%2B7ekX1a%2FXoOav%2F8kj75FTvyFYenpVYEMpKyjU9eO0yV9YNiqicded%2Fsd43WpSC5fn9rLjvbK7xB2eOxy9h7C4iUSdFVykuZgYE%2F9R3hud2%2BTdDsiTM0tm%2FFqRyGkdUQAF5TGalrXD9LY5AV6OUNa5ltWxAn5%2BNiP2tzpG7ojDZ%2B18uzU1%2FKwWwQHTHLZB%2FrG3BQof504%2FBJFM%2FKU4X5LLelx5dMGV%2BusI04x5GjQVY6z5aekjzXsbsmNRhygKwwKBIqbuLJhAHi9OS1UmTqIP87OcBN2stkRrP6TAtfDs5pNIfSYnaS7zneleeUbVuSye7HTXRs6oAaJs4BSQwl3NcgwZ7l1WM082kGskBEvtYmRmPyC11IzqggJLQxuxjbCipzMA%2BjmpWhxMD3wURHodYMgvzbaAGHuoS2iJHRrfPcNLN0TCoyrbCBjqkAf8HZ7A1e6fYO%2B7yfsNJv0ugMUpYxtEny1uLu7LANTdrD3GQTmZzxJl4P9vnDHzsIPfWnQFGrXn562y61rHKFEiYRSniZ8lYUwDOkVPT7yPu6M%2FmYg68fwgFO9NEsGTPtNcs193Fi8PB9iaM%2FhKwYXiP8rzdmvaA5YqJhoj7tFhSLpzA8bcEqTp8%2BS0UPH%2By%2FcciqvvTCPt%2FGhyC09fZjboAVYzm&X-Amz-Signature=fd1990ae3b7cbc33ca9ed93c55ca8a204724f5a4f14a247fb64cb7caf75845e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
