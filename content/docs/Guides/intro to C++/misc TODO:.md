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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667ZI2MF4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwV7YMbSxyzhoEA3t7CUgL5hiexfrlvIDzG5qlT3PrBwIhAP5uEEHvb1FMJifxVn7TdVV7txdbVgOcKYqKQerAIp7uKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkzepYsbuockq9mPEq3AN48gQcLrHQIAVXui2xGcOs4Q5hH6rrVJwP0cSzbPHgpBz%2FoNcZeZxyFoPolXsmTu1%2B1G0Rw22lOlyCc50saHqTnIhaNGCCqEsnYrjZl3zNA8qRlvl5u1AlfBUuZIusrDh8zudWLByiaYZlHDiqZ4qICJVhVqtUAzBoBjLaSZtEXFYhdpnN%2F16jFVVphrIPbOykc8902IBxTu%2Bpljg0mp8fijDWLswSkxuG5kbSxqaNcLnnY%2F%2B5P4B2JfxVkUMblzx1pJ8niZ5E5EiCZJOLeD%2FnridboITlxVmIOe0TUxHDSXwDIAOXxlyvqiCv9dn%2FC7MFwJtaLKtesywyMsfz1sDFyVJvSaXMDdIN%2FPOGkufG8cfjQFU3W9qk5GAVpiXy23TH%2F7iziTTNbF0yDnTYqsd%2FZH3HSQMMGeAgNvtXtYT0JpZDenF5XrHRK7UK%2BCDip%2BhzDuKtGZC2zIrkDfcIGz6ZOvIuWRdCKRc47%2B1zop5SNGUDeGvwZGtEaidVdWoieDhx%2Bbi5J%2BUTBXdl1eWJwS7s2LbdT%2BkMZLACnqtcML1vTroKlyPYGE5SisDY6ZLyoxuJTcQPNNZUidHH8v4lSlXlROz6PYtfzhECqggpSIP09%2BI%2FER4InlE4tGaeXjD2%2BaW9BjqkAZNUr0Kx5d6B1WpbEbqJu%2FiJeqaHyertdLnswS2mpPX5pv4AEWVi2v6ef15bK9cyJhEAR3kSZ79b3iRjzt3W4xGK8bl0zcxBujzQNmZ9wHRicE3RAZbuK2u4cOcFDyR5sFnJFKOgbvlh1yFMR6y0VtIKK9vx3l2FSkEL%2Bn5cAXiIAgbaMUdkP5HI3Djc8DLp%2BYi8hcgm0f%2Fst9fcM62FISTjHtoa&X-Amz-Signature=9f2201b4381741fa6e9414c81ef3ba78db2f1b53d3e28bc90e4f950c60e5255f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667ZI2MF4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwV7YMbSxyzhoEA3t7CUgL5hiexfrlvIDzG5qlT3PrBwIhAP5uEEHvb1FMJifxVn7TdVV7txdbVgOcKYqKQerAIp7uKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkzepYsbuockq9mPEq3AN48gQcLrHQIAVXui2xGcOs4Q5hH6rrVJwP0cSzbPHgpBz%2FoNcZeZxyFoPolXsmTu1%2B1G0Rw22lOlyCc50saHqTnIhaNGCCqEsnYrjZl3zNA8qRlvl5u1AlfBUuZIusrDh8zudWLByiaYZlHDiqZ4qICJVhVqtUAzBoBjLaSZtEXFYhdpnN%2F16jFVVphrIPbOykc8902IBxTu%2Bpljg0mp8fijDWLswSkxuG5kbSxqaNcLnnY%2F%2B5P4B2JfxVkUMblzx1pJ8niZ5E5EiCZJOLeD%2FnridboITlxVmIOe0TUxHDSXwDIAOXxlyvqiCv9dn%2FC7MFwJtaLKtesywyMsfz1sDFyVJvSaXMDdIN%2FPOGkufG8cfjQFU3W9qk5GAVpiXy23TH%2F7iziTTNbF0yDnTYqsd%2FZH3HSQMMGeAgNvtXtYT0JpZDenF5XrHRK7UK%2BCDip%2BhzDuKtGZC2zIrkDfcIGz6ZOvIuWRdCKRc47%2B1zop5SNGUDeGvwZGtEaidVdWoieDhx%2Bbi5J%2BUTBXdl1eWJwS7s2LbdT%2BkMZLACnqtcML1vTroKlyPYGE5SisDY6ZLyoxuJTcQPNNZUidHH8v4lSlXlROz6PYtfzhECqggpSIP09%2BI%2FER4InlE4tGaeXjD2%2BaW9BjqkAZNUr0Kx5d6B1WpbEbqJu%2FiJeqaHyertdLnswS2mpPX5pv4AEWVi2v6ef15bK9cyJhEAR3kSZ79b3iRjzt3W4xGK8bl0zcxBujzQNmZ9wHRicE3RAZbuK2u4cOcFDyR5sFnJFKOgbvlh1yFMR6y0VtIKK9vx3l2FSkEL%2Bn5cAXiIAgbaMUdkP5HI3Djc8DLp%2BYi8hcgm0f%2Fst9fcM62FISTjHtoa&X-Amz-Signature=770a886c7aab99d594e4d6ffa196394642f913c63fc120371d1f6bb13195fa1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
