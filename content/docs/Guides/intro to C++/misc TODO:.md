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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FVRKEC5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5AePqyw3fcHdoS%2B0u%2Bo5EifLa4eWVk%2BjtTJ%2FuWH2fuAiBnw16b6AF%2FCyfpXPAf8yBHZZ%2FhV255NU9MjfL3xv3RvCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMy1HOlFk%2ByWMVE2X3KtwDiQa%2BEg%2FhIrs3lnK9qQPYh4qKegkPADsG4szYc0b%2B04R5ugLcPK4Bp2FA8h%2FKb4bOyKw9KVGzgvS6x0cgzlDpbJ6KyJTTAYnTz3dbLL40ruyQLC8fuDm4ps0J4iqCYmEXh%2FdMUFN6GeDCcUtwqNM%2BMl50e54ideZBbMfHoiM2gIoK%2BpgQIdHX8OIFjJmJDdcgq3XruoU1LstpFGAgQTF4ymE3wJg8WX5iwBXRvjkIZEQBZHSoAunsO10S8JUb1aBe%2BfNbI7pmFYXBroBIRJxlZH9B75JUGk4AGFt1AN2VWg2qU1Xd24eZdDa1rfEgs8w8Fskx7BkBYI9yOojJuLKUvZEGqVbCT%2BJZPXJwrpdByW8ahyEUvLc4JmanSeXeqJj6ZXnZz6ekIcvJ94WclWmtUobt5h7wC3PvmXy0NKMUaoBoGl9NHfv4%2Bz7m%2FftAmOB7DXWSxupQKcm8omMC3d27BlZ6KppTSKu%2B7zD45Uxf7vUQToai3%2BzWDUxjWGNKCX8LMZXbGSIrcDdVvcNjsjjaLtYApCx5TJsEOjbfI3GOamAMWIHPwaHUpNeoY3z1WIZn7UeZgWlasUCLnFg760reIexJ3YD2ixWSitNU4yUEHu5nlmc%2BRViLFE3XKS0w2uuvwAY6pgEmY9FilBd78lR4mihGxKVy6pSQ%2BTMxwiy7F4%2BvJ9RVf7u%2BWbNoVbBQiabQVJHpZjhk5bfEnQizljqR3tKgfhQ7OB9ooB2V%2FN2I1DGXoHnB6iBG6r1ZddC%2Br2%2FJ55MaM%2BUT8qoGVOScyALdLHmf7IPTVgr%2Brhkwe2CFJVayu%2FeDbtNmvfyfPpA157M67DCcCzgpxsfTC4kSpKhx08vfVLrELa3%2B%2ByCe&X-Amz-Signature=59ef53e2d19da814969e3c2557181ed79002b89512861b0c6e2b1294021f2e2f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FVRKEC5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5AePqyw3fcHdoS%2B0u%2Bo5EifLa4eWVk%2BjtTJ%2FuWH2fuAiBnw16b6AF%2FCyfpXPAf8yBHZZ%2FhV255NU9MjfL3xv3RvCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMy1HOlFk%2ByWMVE2X3KtwDiQa%2BEg%2FhIrs3lnK9qQPYh4qKegkPADsG4szYc0b%2B04R5ugLcPK4Bp2FA8h%2FKb4bOyKw9KVGzgvS6x0cgzlDpbJ6KyJTTAYnTz3dbLL40ruyQLC8fuDm4ps0J4iqCYmEXh%2FdMUFN6GeDCcUtwqNM%2BMl50e54ideZBbMfHoiM2gIoK%2BpgQIdHX8OIFjJmJDdcgq3XruoU1LstpFGAgQTF4ymE3wJg8WX5iwBXRvjkIZEQBZHSoAunsO10S8JUb1aBe%2BfNbI7pmFYXBroBIRJxlZH9B75JUGk4AGFt1AN2VWg2qU1Xd24eZdDa1rfEgs8w8Fskx7BkBYI9yOojJuLKUvZEGqVbCT%2BJZPXJwrpdByW8ahyEUvLc4JmanSeXeqJj6ZXnZz6ekIcvJ94WclWmtUobt5h7wC3PvmXy0NKMUaoBoGl9NHfv4%2Bz7m%2FftAmOB7DXWSxupQKcm8omMC3d27BlZ6KppTSKu%2B7zD45Uxf7vUQToai3%2BzWDUxjWGNKCX8LMZXbGSIrcDdVvcNjsjjaLtYApCx5TJsEOjbfI3GOamAMWIHPwaHUpNeoY3z1WIZn7UeZgWlasUCLnFg760reIexJ3YD2ixWSitNU4yUEHu5nlmc%2BRViLFE3XKS0w2uuvwAY6pgEmY9FilBd78lR4mihGxKVy6pSQ%2BTMxwiy7F4%2BvJ9RVf7u%2BWbNoVbBQiabQVJHpZjhk5bfEnQizljqR3tKgfhQ7OB9ooB2V%2FN2I1DGXoHnB6iBG6r1ZddC%2Br2%2FJ55MaM%2BUT8qoGVOScyALdLHmf7IPTVgr%2Brhkwe2CFJVayu%2FeDbtNmvfyfPpA157M67DCcCzgpxsfTC4kSpKhx08vfVLrELa3%2B%2ByCe&X-Amz-Signature=ce72d85af9ef8be478f3b6b4c0430da865850cd5ef92f20af001d9878cdeb97d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
