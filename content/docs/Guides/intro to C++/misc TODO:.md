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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLV6AYS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVvWQzwT7CUR%2FlkTCvABfNmP922gKHZbuxtlrrv4lglQIgco3J%2FoWlDQV5P5Sng3DicnJ%2BZk%2BYJ29vmWOLnOqkA0QqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITAhoXeZ%2FSMuJMFEircA7xXpOzkTKaV9Jweoj%2Fb0D4BNJff2mibdy8xFGBRxc1LMGW%2B0T84%2FXItI8oBkrYKi0lLTKRrAfb1KY3xDchVd6KaPhCYj%2F0IhW7IH3X8NxKzX2nw9kaXog%2BOrRexKp79LzT2lDAZRUX2uMi0Fo7HTcHOII29B7uXIQVOUrjDCyZnTmpbtBGOmJFFijJHxiAZ44e5EIhkcb7mB2z0Vk69YOo1SZtsvoTQuqkfvEScyJK4NU%2BaY0LTav85cIocRaHuvATk8KgKWoNAtOEFsJ%2F9%2BmRBBoVyBDmAGj%2Fg6ZtCd%2FxOmAfy9VwvUbbhkFJD5KF4rq65W9oIYqFzmhPWqC7QEh0yTpKc%2BX1v30L%2BKwT7oueiE1kmK3rNxE8xmY1JmKmaSG725WMjtf8%2BSjqZlEJyuNq4kDGxF8bccgSGVo2gMPIQYRZZL5NZSHGoVRbshaETN9Y%2Bs6J3U7TwOk%2FRWzGn8VPu0kppdXmapvhonxcMOABcONAM7AscoMNhg9x5NZefaAjmhWrO3fOThSuhjdPne9kxt%2F%2BaPDgXCcOKGA0Os8z0ONvnM1Q64IZr9CCsHCT03OzFKA2uO%2BoIYIxkr6FdOuup1Xryau4AKqM%2FrgKboVXkDtWOQ%2F8gOvDpA8y%2FMMe47sMGOqUBYf%2BTg1QEVKuvadacju9axAumMh5VZw1qq1rgZljP1DLmiwvlLOnUsj2kCDRMZKJsopk24h2gMEtpy6BmZMGeSAolT3a4QY2WuoaX6p2uQQaqR3QqVGCarLg7w8oJpqE6paGlR%2BIhmxBO%2FgExQTK9UCe8BiF1fB1%2F9%2FeOL5wqMbT%2BKal58rbMKmIoCm6pOq71rg6wPaVJr5oWF158H37kBS05PQ7n&X-Amz-Signature=78f57bab608235cb746431c94201959b5c81802ee52b6c67b59d9a49cd4f9e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLV6AYS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVvWQzwT7CUR%2FlkTCvABfNmP922gKHZbuxtlrrv4lglQIgco3J%2FoWlDQV5P5Sng3DicnJ%2BZk%2BYJ29vmWOLnOqkA0QqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITAhoXeZ%2FSMuJMFEircA7xXpOzkTKaV9Jweoj%2Fb0D4BNJff2mibdy8xFGBRxc1LMGW%2B0T84%2FXItI8oBkrYKi0lLTKRrAfb1KY3xDchVd6KaPhCYj%2F0IhW7IH3X8NxKzX2nw9kaXog%2BOrRexKp79LzT2lDAZRUX2uMi0Fo7HTcHOII29B7uXIQVOUrjDCyZnTmpbtBGOmJFFijJHxiAZ44e5EIhkcb7mB2z0Vk69YOo1SZtsvoTQuqkfvEScyJK4NU%2BaY0LTav85cIocRaHuvATk8KgKWoNAtOEFsJ%2F9%2BmRBBoVyBDmAGj%2Fg6ZtCd%2FxOmAfy9VwvUbbhkFJD5KF4rq65W9oIYqFzmhPWqC7QEh0yTpKc%2BX1v30L%2BKwT7oueiE1kmK3rNxE8xmY1JmKmaSG725WMjtf8%2BSjqZlEJyuNq4kDGxF8bccgSGVo2gMPIQYRZZL5NZSHGoVRbshaETN9Y%2Bs6J3U7TwOk%2FRWzGn8VPu0kppdXmapvhonxcMOABcONAM7AscoMNhg9x5NZefaAjmhWrO3fOThSuhjdPne9kxt%2F%2BaPDgXCcOKGA0Os8z0ONvnM1Q64IZr9CCsHCT03OzFKA2uO%2BoIYIxkr6FdOuup1Xryau4AKqM%2FrgKboVXkDtWOQ%2F8gOvDpA8y%2FMMe47sMGOqUBYf%2BTg1QEVKuvadacju9axAumMh5VZw1qq1rgZljP1DLmiwvlLOnUsj2kCDRMZKJsopk24h2gMEtpy6BmZMGeSAolT3a4QY2WuoaX6p2uQQaqR3QqVGCarLg7w8oJpqE6paGlR%2BIhmxBO%2FgExQTK9UCe8BiF1fB1%2F9%2FeOL5wqMbT%2BKal58rbMKmIoCm6pOq71rg6wPaVJr5oWF158H37kBS05PQ7n&X-Amz-Signature=18f338daeba5e92f80b6c18b7f8e2f2956816c8a85656641a74eeaf54a3cb54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
