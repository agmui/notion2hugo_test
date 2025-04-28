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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4N5PT3K%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFpL2FOy6elW1%2FEdmPeAnK64N2uL6tKFY1Y%2FDWiWc5IAiAn4IWFUo1dbwWecdTmqZbZIliOJtTqxIcO9HnHQNLy7Cr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMh6Of16EKPYIsGkuDKtwDctT7tQpfHgr09WG8wAY8C%2BDXu%2BVABvh0Ug9fMOO0MPtCcgNbMRy0pYExtXqoOoJ2o0UiCbnvc%2BbUzC4lXDEZm8UxOv9b3bvTTTBE8DcZZAqpnNs3jP%2BHrnnijuKpQEkKrcEKzhdp0b6ZPoVAp7ocYSQeDh07SuF2NJl4SVlNQV8CrYL92F9iopeX%2BzPz1fgpD%2FlnNz7ELGficBHQMQi9mNuG2akIBkLam6SE6pNhfGPFxsCu33nVRhfLkZX%2FR0Ph64CzlnZRyhZKO02M%2Bf6KLSmO%2FOfJOsJZXeF7oohHnriEzQZsND%2BhUb3Oy8%2B9VUb29wkA6vaMyM0AhZXQo8FcJwQXmbZLCNW%2FXYTEgPk31kgN9O40sQG2R5A2s932TJv5xMQ2cRnNpz6%2BTs3u%2FibmyyBcUvwuH%2FvVEc2f5J%2FTS4zMcX2p1XxXLx3LwH7Brf4FV0oeVyKDLPy2ZixhFTYfxocjc4RhRK3h3h8Xih5z%2F4uZvi30sIQklrQxET2MPDHoVG92e9Ux2KNGWeeS46UM5TijhICR%2Fm%2F%2BjvQrNclhlsL%2FBwwblrbO%2FYkqc8VroiZgY5T5fjp6CZA51PHLOuHliDNUlUUHKfvOzuEvrLg5yx6OUScWIocnXdAxhtMwk9K%2FwAY6pgHTJ%2BJVklo0UlYZYfPeE3rvruV9KMKcjlI3TqoG8dgfZ2PQbdI86mMlOWeLF5cFlGgE77QvGfwC5KCkB%2Fldnox7WG1SBXBFkkUNV%2BKO9C17F5Bb7W3g%2BKujpQTjkxTeqN1QM9KgS2XxKwybEH2UjbxK4wwHu9B9bQCmzKhMzpKFOAxLOWqGjr%2BadvZpMjo2iQNsuweiNNTrzwws1%2BD5caPZqhG3K%2B31&X-Amz-Signature=08f3416f01e37c4329e1cb2d77a1dce6eb6e25b044cf481aad33e5bc7c26eb97&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4N5PT3K%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFpL2FOy6elW1%2FEdmPeAnK64N2uL6tKFY1Y%2FDWiWc5IAiAn4IWFUo1dbwWecdTmqZbZIliOJtTqxIcO9HnHQNLy7Cr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMh6Of16EKPYIsGkuDKtwDctT7tQpfHgr09WG8wAY8C%2BDXu%2BVABvh0Ug9fMOO0MPtCcgNbMRy0pYExtXqoOoJ2o0UiCbnvc%2BbUzC4lXDEZm8UxOv9b3bvTTTBE8DcZZAqpnNs3jP%2BHrnnijuKpQEkKrcEKzhdp0b6ZPoVAp7ocYSQeDh07SuF2NJl4SVlNQV8CrYL92F9iopeX%2BzPz1fgpD%2FlnNz7ELGficBHQMQi9mNuG2akIBkLam6SE6pNhfGPFxsCu33nVRhfLkZX%2FR0Ph64CzlnZRyhZKO02M%2Bf6KLSmO%2FOfJOsJZXeF7oohHnriEzQZsND%2BhUb3Oy8%2B9VUb29wkA6vaMyM0AhZXQo8FcJwQXmbZLCNW%2FXYTEgPk31kgN9O40sQG2R5A2s932TJv5xMQ2cRnNpz6%2BTs3u%2FibmyyBcUvwuH%2FvVEc2f5J%2FTS4zMcX2p1XxXLx3LwH7Brf4FV0oeVyKDLPy2ZixhFTYfxocjc4RhRK3h3h8Xih5z%2F4uZvi30sIQklrQxET2MPDHoVG92e9Ux2KNGWeeS46UM5TijhICR%2Fm%2F%2BjvQrNclhlsL%2FBwwblrbO%2FYkqc8VroiZgY5T5fjp6CZA51PHLOuHliDNUlUUHKfvOzuEvrLg5yx6OUScWIocnXdAxhtMwk9K%2FwAY6pgHTJ%2BJVklo0UlYZYfPeE3rvruV9KMKcjlI3TqoG8dgfZ2PQbdI86mMlOWeLF5cFlGgE77QvGfwC5KCkB%2Fldnox7WG1SBXBFkkUNV%2BKO9C17F5Bb7W3g%2BKujpQTjkxTeqN1QM9KgS2XxKwybEH2UjbxK4wwHu9B9bQCmzKhMzpKFOAxLOWqGjr%2BadvZpMjo2iQNsuweiNNTrzwws1%2BD5caPZqhG3K%2B31&X-Amz-Signature=132744650114c85a31404d522da820164e3465a5f7d8335f41acd578ecd0660f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
