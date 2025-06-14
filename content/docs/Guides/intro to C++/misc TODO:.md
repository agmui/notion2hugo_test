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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT36DSG6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIBTLiZZ4fJQZiIPccdR8Grdwa3mssRVG26TX7cUHdbz3AiEAr750c5x3M6LAKvJTD1dxeYJ2TD%2BU7LXqS%2BveJZ6%2Fumkq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDOk0dGSuQZTH6pRxTircAwFC80X47SP2b6E8jjPfZ4810FL2ABHvvWNbI2IrbtcikIYDJ2yMgpkq1iNyNRn%2FSoP7eQeCDHP0X03J0X4RnSX007854kIGmkwTNAMBS9vWt4RpqP8RhowI4Ncmsfgn9Qiwm%2BhfEUkSm%2BarKBYEYVaN9%2FOMU3J9FOKKdHy8bLL9OPhIjkWjwfkO%2FasMWkOkMhFMLlNatF8WkuGdA4SQ%2FYzPDOgH%2BokJaGy6kEgH9UX3mxpHo7yNuXtE0%2F2OWNdKNzP0hHUIK7lkQYiC%2F%2FREIIGQZZm3xqpwTjBrRjtMwWTpJ1Mb7659T%2Fs7JbMzjTALKH0chfrsok6TWHZLXh8yVxV1eFCZ%2F5Z0SqSkFOV%2FEjoqjlEdqKskcAazWpHGGvlt5R4qC64vuy%2FZWUwHQl%2Br9i0n1%2BxvH5KbcjwWWp4C8oVfNV5ICFYJrPEd6Om4qvOMLqOscAX0CEjvNF1YAVHdoqem%2F0QGhGJGmsuppoKWnvT5fDhvr9A3mNWEKh7L1TsWJ%2BI7HsBKT7dyprhiLdq2E7cyA6Al0KUpFeg%2FJK4op6S7TzE7NLmgKs2u49w8GP6QxUUXaBohJEABX0ewc0iKxzz0kJd0f4Q2PlfoKRDFe2zk%2BcFU6pqxNIxTtF%2FCMJykt8IGOqUBg49j87U1FLXOZ7VvhjHExqcOlg%2Fa6556Rd13DGosjp%2BPtoHvbH0gIUcFzBtg%2B%2B8EoyiTPrvLXhycaWtWy%2BYEz6aRMXxz4wEXscc6KdDA44CNBqAVhWbjonGgD1wiispWxy7SADL5ui94G3h1Zr9qautbMUcU3YWeoCoG5ykB5NK4qoIF684jak6NiUoVkX4cwWvtdg6HKxp%2FbFjRYPG9JmBtLdtY&X-Amz-Signature=2c32a807aa50e2feaba3c8d62421a048ca6611947fefb6c2dba2d74bf83b9909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT36DSG6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIBTLiZZ4fJQZiIPccdR8Grdwa3mssRVG26TX7cUHdbz3AiEAr750c5x3M6LAKvJTD1dxeYJ2TD%2BU7LXqS%2BveJZ6%2Fumkq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDOk0dGSuQZTH6pRxTircAwFC80X47SP2b6E8jjPfZ4810FL2ABHvvWNbI2IrbtcikIYDJ2yMgpkq1iNyNRn%2FSoP7eQeCDHP0X03J0X4RnSX007854kIGmkwTNAMBS9vWt4RpqP8RhowI4Ncmsfgn9Qiwm%2BhfEUkSm%2BarKBYEYVaN9%2FOMU3J9FOKKdHy8bLL9OPhIjkWjwfkO%2FasMWkOkMhFMLlNatF8WkuGdA4SQ%2FYzPDOgH%2BokJaGy6kEgH9UX3mxpHo7yNuXtE0%2F2OWNdKNzP0hHUIK7lkQYiC%2F%2FREIIGQZZm3xqpwTjBrRjtMwWTpJ1Mb7659T%2Fs7JbMzjTALKH0chfrsok6TWHZLXh8yVxV1eFCZ%2F5Z0SqSkFOV%2FEjoqjlEdqKskcAazWpHGGvlt5R4qC64vuy%2FZWUwHQl%2Br9i0n1%2BxvH5KbcjwWWp4C8oVfNV5ICFYJrPEd6Om4qvOMLqOscAX0CEjvNF1YAVHdoqem%2F0QGhGJGmsuppoKWnvT5fDhvr9A3mNWEKh7L1TsWJ%2BI7HsBKT7dyprhiLdq2E7cyA6Al0KUpFeg%2FJK4op6S7TzE7NLmgKs2u49w8GP6QxUUXaBohJEABX0ewc0iKxzz0kJd0f4Q2PlfoKRDFe2zk%2BcFU6pqxNIxTtF%2FCMJykt8IGOqUBg49j87U1FLXOZ7VvhjHExqcOlg%2Fa6556Rd13DGosjp%2BPtoHvbH0gIUcFzBtg%2B%2B8EoyiTPrvLXhycaWtWy%2BYEz6aRMXxz4wEXscc6KdDA44CNBqAVhWbjonGgD1wiispWxy7SADL5ui94G3h1Zr9qautbMUcU3YWeoCoG5ykB5NK4qoIF684jak6NiUoVkX4cwWvtdg6HKxp%2FbFjRYPG9JmBtLdtY&X-Amz-Signature=4c1e9a3af6385b0f529ea4439cc07156c50c586bf4e84746cee58b1cc36b973b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
