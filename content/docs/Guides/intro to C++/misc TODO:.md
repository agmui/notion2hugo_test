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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7UQ23A%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGULXOUI7mqV6y8sYVdosgOlZLbzvZGq%2FhDZFMa0NdVcAiA%2BvwyaAL2HRNNNLNek%2Bo3zaEtKWiugnpJJsni65C2FRSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMY17pLnlqaoxY6ltNKtwDrn5llEBa4I%2BumL%2Fbn9RJnpbQbvdW48%2FrwRhKB7%2BgXx4g266C6c3XZf1IkWVwTUHuasBjBlrxQybvhCen3EMIR0l6OvMkxQuXybYCWvmuSOpiYl4A%2BzjnzM%2B85DvvAovzmQ78147Pg%2BXw0kHTTDYPgYpzQ5O2C0Ix%2FMCiq75xYO6u6Uj2wxY3%2BM97u9G53JAAMsZlfbKVoQQQ3IVb1ZcA%2B%2BBy5XWanYt1hP3oNuJEmP1uHnQFJyim1gJufvB4v61ytrBfFA4ggjoNjKSxItBQ1h2eP2Vnvlme6wolnFTU0sbSwM9Gu6ACHMZab0sNKc83N7u8%2FgU5bwjBb35xTojKmEHVjI%2FlxjhIn74IK8OFfx2oMOjmr5kTj80OEjIgBu8VMK4JQj575lSVUCasikQI6D%2FVrkQoiaqw7Bclvqzsdtd5zCIa86t%2F3MQzsxNNgdjsOlu6VZOHumAC%2BLbDKbZlroI2vqwDeb2B8uSIh827O1xd3xtvwzq9pckWaennv5fXyQhyGeGANaPQ0bAj00u%2BWtEjLUQpPZwWZlz%2BwtSUtsgW8Lrq0btKAMXScDf5mQwM5OYmY0nh63TgcHSaU75kFEakhMvW%2F2syZM2Y5svcWd8Da7SUhRR%2FoS9VxWEwhu3PvwY6pgH5gy9kzng9g77o7HgwbfasqRYuF1ehpRGx3ERO5r8iKf3jZ%2F1XFTToqXtyXxYV3SrbisrMCrLbQ03hYiN7aG7trjprVmPwkEWmlen4%2F%2FV4VRAipTOdpK72MwjFjQl5eyZOOYAVYfIWJtrnWLGLHav1d4FGhGYrp8Qf6WK%2BuPbW8sj4ACX8ML5lC5VMTUaxFoan%2FNAfIiGSx3JceqwTGoLm3Eaq%2FpHL&X-Amz-Signature=dd8b0ee6c38ae93e8a81c0f3038041dc8cc4891a0a3a3e680adf554e68523036&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7UQ23A%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGULXOUI7mqV6y8sYVdosgOlZLbzvZGq%2FhDZFMa0NdVcAiA%2BvwyaAL2HRNNNLNek%2Bo3zaEtKWiugnpJJsni65C2FRSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMY17pLnlqaoxY6ltNKtwDrn5llEBa4I%2BumL%2Fbn9RJnpbQbvdW48%2FrwRhKB7%2BgXx4g266C6c3XZf1IkWVwTUHuasBjBlrxQybvhCen3EMIR0l6OvMkxQuXybYCWvmuSOpiYl4A%2BzjnzM%2B85DvvAovzmQ78147Pg%2BXw0kHTTDYPgYpzQ5O2C0Ix%2FMCiq75xYO6u6Uj2wxY3%2BM97u9G53JAAMsZlfbKVoQQQ3IVb1ZcA%2B%2BBy5XWanYt1hP3oNuJEmP1uHnQFJyim1gJufvB4v61ytrBfFA4ggjoNjKSxItBQ1h2eP2Vnvlme6wolnFTU0sbSwM9Gu6ACHMZab0sNKc83N7u8%2FgU5bwjBb35xTojKmEHVjI%2FlxjhIn74IK8OFfx2oMOjmr5kTj80OEjIgBu8VMK4JQj575lSVUCasikQI6D%2FVrkQoiaqw7Bclvqzsdtd5zCIa86t%2F3MQzsxNNgdjsOlu6VZOHumAC%2BLbDKbZlroI2vqwDeb2B8uSIh827O1xd3xtvwzq9pckWaennv5fXyQhyGeGANaPQ0bAj00u%2BWtEjLUQpPZwWZlz%2BwtSUtsgW8Lrq0btKAMXScDf5mQwM5OYmY0nh63TgcHSaU75kFEakhMvW%2F2syZM2Y5svcWd8Da7SUhRR%2FoS9VxWEwhu3PvwY6pgH5gy9kzng9g77o7HgwbfasqRYuF1ehpRGx3ERO5r8iKf3jZ%2F1XFTToqXtyXxYV3SrbisrMCrLbQ03hYiN7aG7trjprVmPwkEWmlen4%2F%2FV4VRAipTOdpK72MwjFjQl5eyZOOYAVYfIWJtrnWLGLHav1d4FGhGYrp8Qf6WK%2BuPbW8sj4ACX8ML5lC5VMTUaxFoan%2FNAfIiGSx3JceqwTGoLm3Eaq%2FpHL&X-Amz-Signature=2d6bbe5a21dadc986dd4bda7f74b84a3d05ece428411f9ab036c923f21323815&X-Amz-SignedHeaders=host&x-id=GetObject)

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
