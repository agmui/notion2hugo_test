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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYWKHBUX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDeVUtQ8fhKet8e8Mv2Uh%2BUqlHcqWLTA9AnOTXtzb%2B6bAIhAPH6jehpI2yBZGLpAi5Drzaf5pefT9qPLznshLlZfWMZKv8DCGkQABoMNjM3NDIzMTgzODA1IgwWjeh42v9ZbNOr%2FDAq3AMBbZBnQPy8TjSDUrIMJ2ywr%2Bcr3slJ4Gb7xrSbIhLnNSKAAygl2SRDi0PTFoY7s%2Fka4L3v3bPVKEZAmuVVGe5WPGv91L%2FykO8OiK0V91r85egARS1CjpWdghn3Ockf6EImYr%2BR4PjvOgZ34rWbb88YcJLhpehnXBenNacDPtPepa%2Bv3UapK2NjCZeFdLp2R1KPt4yzTP6L1EhQkbavt4MILn53JCK%2BH2inuPTNFjIWnnZPud1EbGtMi5iICzrMzrwiIqg669nriMFsa3906sGbig1JctCwt%2BM5%2FRejQ2Lgou7RLgboNAzdcAZUAIyuClVpsiPz7fDoOa9DlvAbtS6Cdz6%2FQhXkXGoDoBgSs08ReQPl6gCo7xXhdIrYQxbm%2BimfRhS0ZP1C3a6ImAfurFaNgndmyOSOpXxqxJ6VK6K6Yg83pl2C5bzVpG7UNC8dpVxZiui%2B0ndDeFkY641PCuiVw1KX%2BswaQKqTQUcdJDNzqxK6SPYn7eCsH5aOXgtsFnMzRJebk5IZjnlnzJc6pSojB%2FEnjFbrxSl38Ks6KzwglOKpZ%2Fa8JbPpScVccxZw2l7f2jFFISsIe7b9SOiKXmY8ZXkEbKpKbCsBdxT5em2ueMuDYqxiiKDrWwS0UzCGnJW9BjqkAWBI2zb4tfmKvZk11q0jtZR2%2BsMemjSoTV2SOklkZj6EXWF7aOHjKpKbyQfwS%2BMVoiOTBZJNAUI8QM8XD5A1hcv714147GhlsZtXw1qUBxCEt1lWkphmUkQJL6Un7TfpdGFhRrIRzDldp32706KqiqBULc8aOUAKIIYkwFK8yrMfMMSh2q8GaIXYgyI9o4E4OrFzqrIpUw0xVL2eij1T%2FCq1KFm%2F&X-Amz-Signature=6beba5da3e1b337a78aef0788e03a2527778a3e96a0b097d4e2fdb41117cb9af&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYWKHBUX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDeVUtQ8fhKet8e8Mv2Uh%2BUqlHcqWLTA9AnOTXtzb%2B6bAIhAPH6jehpI2yBZGLpAi5Drzaf5pefT9qPLznshLlZfWMZKv8DCGkQABoMNjM3NDIzMTgzODA1IgwWjeh42v9ZbNOr%2FDAq3AMBbZBnQPy8TjSDUrIMJ2ywr%2Bcr3slJ4Gb7xrSbIhLnNSKAAygl2SRDi0PTFoY7s%2Fka4L3v3bPVKEZAmuVVGe5WPGv91L%2FykO8OiK0V91r85egARS1CjpWdghn3Ockf6EImYr%2BR4PjvOgZ34rWbb88YcJLhpehnXBenNacDPtPepa%2Bv3UapK2NjCZeFdLp2R1KPt4yzTP6L1EhQkbavt4MILn53JCK%2BH2inuPTNFjIWnnZPud1EbGtMi5iICzrMzrwiIqg669nriMFsa3906sGbig1JctCwt%2BM5%2FRejQ2Lgou7RLgboNAzdcAZUAIyuClVpsiPz7fDoOa9DlvAbtS6Cdz6%2FQhXkXGoDoBgSs08ReQPl6gCo7xXhdIrYQxbm%2BimfRhS0ZP1C3a6ImAfurFaNgndmyOSOpXxqxJ6VK6K6Yg83pl2C5bzVpG7UNC8dpVxZiui%2B0ndDeFkY641PCuiVw1KX%2BswaQKqTQUcdJDNzqxK6SPYn7eCsH5aOXgtsFnMzRJebk5IZjnlnzJc6pSojB%2FEnjFbrxSl38Ks6KzwglOKpZ%2Fa8JbPpScVccxZw2l7f2jFFISsIe7b9SOiKXmY8ZXkEbKpKbCsBdxT5em2ueMuDYqxiiKDrWwS0UzCGnJW9BjqkAWBI2zb4tfmKvZk11q0jtZR2%2BsMemjSoTV2SOklkZj6EXWF7aOHjKpKbyQfwS%2BMVoiOTBZJNAUI8QM8XD5A1hcv714147GhlsZtXw1qUBxCEt1lWkphmUkQJL6Un7TfpdGFhRrIRzDldp32706KqiqBULc8aOUAKIIYkwFK8yrMfMMSh2q8GaIXYgyI9o4E4OrFzqrIpUw0xVL2eij1T%2FCq1KFm%2F&X-Amz-Signature=2bd4b1ac358ed97e7744ca6041db013c89c931e9dc52a6bbe7073c632d859ece&X-Amz-SignedHeaders=host&x-id=GetObject)

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
