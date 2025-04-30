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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD444VCA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCe1oMrvNZhnT9FkrugK7NSHdiLsRDGUQcXqykezmWNDAIgR9fr%2FP55DeWaVCxuWWUWRe%2FBLUMlmwUy5WhQ17bMCdgqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1lZ4j0PRqztOk8BCrcA4leq0mtABT7XSldqxdjPAU1wBIaHuV5z7%2BxFqn40hpu0%2FSj%2BG4PcGvL7bqNtP7bJXhv%2FQ201XcIo3GUGucXvoiiO6bUhXzp8VHVAOdzRfabtrUWehueR3YdcKSDGWJWdBm%2B1I9vAkn1Q%2BulbuPyxtTIKfpfOv8MWCdK0hQtofp3mzhNmANqzowjfnJTX%2B6p3oIR4jcps7eR7SpDTEKZ07ssgiw763Zh1mQIQQLk1RbKLWcJcCB8fIFC%2FN8HiMcGlIHE73lgJcPnWYtfYp1TDEUqADK0%2FpYXgBqcbqkD6zOdlotFClcrffIGZCuiD6U4oRFGxn1xPSIT%2BBpSo8x9%2FRB%2Bcv11z5%2FxuK98PuHoguun1pZlca2exJYpBGD9ufafV7NrIYFrZsTfYVzjXiVg5st7RwMvrX3ItV0tLzc7F5%2FM2H3En3CwLy9ubLuFIMAbnXFqDGCj9qEb5XJVuvreDlLauS40%2BBgb%2FAtrCZtn9WmS%2BCM54dQHO60VENOqj0A69IJoqPB%2FvXF7c0ggAQT7w4GMD%2F6zEfiOhmZZlRdbOrgV%2FZflYcwrVa5NbY3IZLHGVTiyAj8Ns%2BAvNS%2Ff9VI5yBH4Df5xnzK6tnswkAwLIhiQS0rHU1bZ5BH1lEAYMKGdycAGOqUBXV%2BkcdvAKsfIlci9BXpazvi5Zrte8pVNM4QalGy1SOnNmytmk7I6WbcUWZCCZ%2BuXzJZEtqdldJH1XRBKbSTWKzpMqSdOeSzrCN%2FX065yaYK0hrTrr9CwnD4Lbh9EFdMVviIC569adiJUdQ8%2B%2FmMbBUHhHLh43f6HYaTxtQ%2FbHzA5myf6a95Z2xQL11XYnG%2B0imSYXkqNUf3P%2Bn08J0p4LOmIYN83&X-Amz-Signature=13b8e52d7818f7d0ed057ed92530981cb296da3aa12c9582fc400dacd797dc8c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD444VCA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCe1oMrvNZhnT9FkrugK7NSHdiLsRDGUQcXqykezmWNDAIgR9fr%2FP55DeWaVCxuWWUWRe%2FBLUMlmwUy5WhQ17bMCdgqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1lZ4j0PRqztOk8BCrcA4leq0mtABT7XSldqxdjPAU1wBIaHuV5z7%2BxFqn40hpu0%2FSj%2BG4PcGvL7bqNtP7bJXhv%2FQ201XcIo3GUGucXvoiiO6bUhXzp8VHVAOdzRfabtrUWehueR3YdcKSDGWJWdBm%2B1I9vAkn1Q%2BulbuPyxtTIKfpfOv8MWCdK0hQtofp3mzhNmANqzowjfnJTX%2B6p3oIR4jcps7eR7SpDTEKZ07ssgiw763Zh1mQIQQLk1RbKLWcJcCB8fIFC%2FN8HiMcGlIHE73lgJcPnWYtfYp1TDEUqADK0%2FpYXgBqcbqkD6zOdlotFClcrffIGZCuiD6U4oRFGxn1xPSIT%2BBpSo8x9%2FRB%2Bcv11z5%2FxuK98PuHoguun1pZlca2exJYpBGD9ufafV7NrIYFrZsTfYVzjXiVg5st7RwMvrX3ItV0tLzc7F5%2FM2H3En3CwLy9ubLuFIMAbnXFqDGCj9qEb5XJVuvreDlLauS40%2BBgb%2FAtrCZtn9WmS%2BCM54dQHO60VENOqj0A69IJoqPB%2FvXF7c0ggAQT7w4GMD%2F6zEfiOhmZZlRdbOrgV%2FZflYcwrVa5NbY3IZLHGVTiyAj8Ns%2BAvNS%2Ff9VI5yBH4Df5xnzK6tnswkAwLIhiQS0rHU1bZ5BH1lEAYMKGdycAGOqUBXV%2BkcdvAKsfIlci9BXpazvi5Zrte8pVNM4QalGy1SOnNmytmk7I6WbcUWZCCZ%2BuXzJZEtqdldJH1XRBKbSTWKzpMqSdOeSzrCN%2FX065yaYK0hrTrr9CwnD4Lbh9EFdMVviIC569adiJUdQ8%2B%2FmMbBUHhHLh43f6HYaTxtQ%2FbHzA5myf6a95Z2xQL11XYnG%2B0imSYXkqNUf3P%2Bn08J0p4LOmIYN83&X-Amz-Signature=46b720881372b5e254f5f3bce6db72684164d85c74bbb82eb07bd13d7edf6e42&X-Amz-SignedHeaders=host&x-id=GetObject)

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
