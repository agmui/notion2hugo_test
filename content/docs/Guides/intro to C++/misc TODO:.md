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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PUMTOOK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA56VcJkTltsiXKYLgjDIRz9TsjGj%2F%2BXFbtHavzQ%2BxhWAiAgWT1kpIFkpWkTkwLi%2BPJ1YNcLX4b%2BDFZVK1RQDZVyZyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMKuDpSosEaN%2FYPwVtKtwDsHv188ilmXZMMh7%2FQcWmVTmZ%2BGO%2FvF0P8YzoYoEqjiJu1EQjnrOpC4LgdqUj2k8j1F8kSIvO6FRLQye1fiIjgDmHyw0iLuB3P7jFMOnzYMgHqo7QFZRLy98ljavV42qr72d1mmTBntBOLvynEG4xS8XkX%2FU1Cz7I972X6d8aWv2BdMmCdllkhJ7mz2z%2Br83fi9MgH6fdhWpAvkWFJ4k3Y1G589NYZDnhsvi%2FyQQac3qg5LhsgLfm3ug6CnRsVM24gh4ZgiQji3RyjmbIwZULMkL2MHhxI7nRi51LYgAT5WYhm5H9AvP6xv2lRnKh3PZp4B3fpr6o%2BZIlszEH885LWxUfGojJbtiAPogYlPYa5%2BXd6AStLG9lP60x7YbZVnjUTIr%2BF%2FI2DA7uIzMhEuBIayJLaziaXqKua15VOLYR%2B6FNcWfif2p9n1AoKEfhM2KjYI9H9zi5Bh1Z8mW1EvJxwK5tgwtTS80QxOAr7DX881VZPS3%2Fh6i2qbGu1jeTRjxdkEreSmMJgUPmwpQh6Ho6BtgCT8%2Br3Vh3rj4anoEV7Q7Z4qv08Ob852xKKzoeOh4tCi2FDrpykAlN2LCqz1mACNoypJMXDKp8A%2FfEdvv45K3Wdq647rtpnDqZX7AwvoHYvgY6pgGV4uQ1ES3LG1Cb2eSIVza7j68lwJN3XmEXu8ftlYRRvoytthoaLKJ2wfyXzddpw9aU3VJoa0ngT2ZdKr938%2FJt4x8iQk8bhOwezZ%2BD7CF1iKXDIiSV3uomFBce30gFmDF98IP1lYTDSOUH%2F6JjtYV2Cw1WKA11VLNOjBhspzvNU1y7yY7j5NZ7VACvAv1yPgCIL9i66uC1pSbnaNyh%2BBtBDPFlAIf1&X-Amz-Signature=71066dc0ac0002c067658454c5c7bfed010d8b34acdca2624c48fa065a7dd26a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PUMTOOK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA56VcJkTltsiXKYLgjDIRz9TsjGj%2F%2BXFbtHavzQ%2BxhWAiAgWT1kpIFkpWkTkwLi%2BPJ1YNcLX4b%2BDFZVK1RQDZVyZyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMKuDpSosEaN%2FYPwVtKtwDsHv188ilmXZMMh7%2FQcWmVTmZ%2BGO%2FvF0P8YzoYoEqjiJu1EQjnrOpC4LgdqUj2k8j1F8kSIvO6FRLQye1fiIjgDmHyw0iLuB3P7jFMOnzYMgHqo7QFZRLy98ljavV42qr72d1mmTBntBOLvynEG4xS8XkX%2FU1Cz7I972X6d8aWv2BdMmCdllkhJ7mz2z%2Br83fi9MgH6fdhWpAvkWFJ4k3Y1G589NYZDnhsvi%2FyQQac3qg5LhsgLfm3ug6CnRsVM24gh4ZgiQji3RyjmbIwZULMkL2MHhxI7nRi51LYgAT5WYhm5H9AvP6xv2lRnKh3PZp4B3fpr6o%2BZIlszEH885LWxUfGojJbtiAPogYlPYa5%2BXd6AStLG9lP60x7YbZVnjUTIr%2BF%2FI2DA7uIzMhEuBIayJLaziaXqKua15VOLYR%2B6FNcWfif2p9n1AoKEfhM2KjYI9H9zi5Bh1Z8mW1EvJxwK5tgwtTS80QxOAr7DX881VZPS3%2Fh6i2qbGu1jeTRjxdkEreSmMJgUPmwpQh6Ho6BtgCT8%2Br3Vh3rj4anoEV7Q7Z4qv08Ob852xKKzoeOh4tCi2FDrpykAlN2LCqz1mACNoypJMXDKp8A%2FfEdvv45K3Wdq647rtpnDqZX7AwvoHYvgY6pgGV4uQ1ES3LG1Cb2eSIVza7j68lwJN3XmEXu8ftlYRRvoytthoaLKJ2wfyXzddpw9aU3VJoa0ngT2ZdKr938%2FJt4x8iQk8bhOwezZ%2BD7CF1iKXDIiSV3uomFBce30gFmDF98IP1lYTDSOUH%2F6JjtYV2Cw1WKA11VLNOjBhspzvNU1y7yY7j5NZ7VACvAv1yPgCIL9i66uC1pSbnaNyh%2BBtBDPFlAIf1&X-Amz-Signature=097b691f3cf44d81a026bb28217b3d8fd89b9e15567f180eab810ea29cc865c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
