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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NIWDC2X%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIEaHjkJSnQY40%2FvFzfeo%2BMdNhrqxexdyDdJll5bYXuJCAiACZ71ES3GdcHoQDMFGfHX0j7hGRpqjP5c9KwuCBm0DDyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGejMjptx5Fe6%2FHByKtwDnejLqhgiYdOOGJWqENTxHNJRBKk4Knf3fXjj%2BMUy8mfq%2FzZwRBcE%2FH8Mny986flYNDlbQlSJlh4WjcRjzLBHJfNgyC19Oxv4X69pj6tiHdXuxr7WJ9s9Qy7spFbZ%2Fsh8zkqivzSYQ3XuAgPSgE3twT8Xc37%2Br%2FohoKs3cxE%2F8M480pySiNnmK4q4dKRmx9ZpJqJaYw%2FQvQzbLwr6jCbFqBU6P6teMs6QkxFDgqNs%2BedfGyAwajlcSXl8akpzrfsfaX5kQy20j%2F7uO2sMfJfMGcHMd3eY0EYjmwCRG1hD%2FxXhgJfqBOkMMXfb9u%2FHIEhGvK4B8errGO1SNvXlMphVyHJl8A4cXR10KIhvoIpp2VFCwmuvWAd%2BirImg7LZOFn1TYFU1U0oTJmoDaWH7%2B5hcXf4ZVo1xXtAUNJf6fyx5FPzDoBCjH0YjbYEEhCBJnReanTcK719%2BN1gr1XHnTZ6J2aXU0Z7xkQelpGzXgwvU7eKgO2UV7r9IqwJnQBQO2efLIoSPBu35%2BL56jFJ6%2B9MnaVVBEWK8fX%2FTQaW5TvUZKgzODJ7jFyTCNG8uBP%2FU%2FtI2HRzhzg0JVYR9goRziE%2FP6208xa1ZghKkT0psCB958mI5n96LLvmcqGJYQ0whY64wQY6pgERbepy9%2BOOr0soMbbKBc4LBhYo7xzYsH2YbtL%2BWleW58X8tmiLmIdacRVjaMDSHE9W0XEruGVnZXuZ5MAWDzUhbHmi9apjgzEoow2Yb6qrzpgigIdrQVsgCFqXb1yDb9v7u67G0AGzY0VncZVzsw9xeCmBWtv66bwzCRnUL5cIqcMLkqNwicGqykUtz7T3jUUyg4I3Irsu63NG9viowmb1YLSL8C7P&X-Amz-Signature=500ff45baf227c591e119795f82a4958975ae1362351d4e303a757f95a9a742f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NIWDC2X%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIEaHjkJSnQY40%2FvFzfeo%2BMdNhrqxexdyDdJll5bYXuJCAiACZ71ES3GdcHoQDMFGfHX0j7hGRpqjP5c9KwuCBm0DDyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGejMjptx5Fe6%2FHByKtwDnejLqhgiYdOOGJWqENTxHNJRBKk4Knf3fXjj%2BMUy8mfq%2FzZwRBcE%2FH8Mny986flYNDlbQlSJlh4WjcRjzLBHJfNgyC19Oxv4X69pj6tiHdXuxr7WJ9s9Qy7spFbZ%2Fsh8zkqivzSYQ3XuAgPSgE3twT8Xc37%2Br%2FohoKs3cxE%2F8M480pySiNnmK4q4dKRmx9ZpJqJaYw%2FQvQzbLwr6jCbFqBU6P6teMs6QkxFDgqNs%2BedfGyAwajlcSXl8akpzrfsfaX5kQy20j%2F7uO2sMfJfMGcHMd3eY0EYjmwCRG1hD%2FxXhgJfqBOkMMXfb9u%2FHIEhGvK4B8errGO1SNvXlMphVyHJl8A4cXR10KIhvoIpp2VFCwmuvWAd%2BirImg7LZOFn1TYFU1U0oTJmoDaWH7%2B5hcXf4ZVo1xXtAUNJf6fyx5FPzDoBCjH0YjbYEEhCBJnReanTcK719%2BN1gr1XHnTZ6J2aXU0Z7xkQelpGzXgwvU7eKgO2UV7r9IqwJnQBQO2efLIoSPBu35%2BL56jFJ6%2B9MnaVVBEWK8fX%2FTQaW5TvUZKgzODJ7jFyTCNG8uBP%2FU%2FtI2HRzhzg0JVYR9goRziE%2FP6208xa1ZghKkT0psCB958mI5n96LLvmcqGJYQ0whY64wQY6pgERbepy9%2BOOr0soMbbKBc4LBhYo7xzYsH2YbtL%2BWleW58X8tmiLmIdacRVjaMDSHE9W0XEruGVnZXuZ5MAWDzUhbHmi9apjgzEoow2Yb6qrzpgigIdrQVsgCFqXb1yDb9v7u67G0AGzY0VncZVzsw9xeCmBWtv66bwzCRnUL5cIqcMLkqNwicGqykUtz7T3jUUyg4I3Irsu63NG9viowmb1YLSL8C7P&X-Amz-Signature=68fdedc27d36d81032bd5ec1a818e858f059eee340f42ecc1400bd60253e1440&X-Amz-SignedHeaders=host&x-id=GetObject)

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
