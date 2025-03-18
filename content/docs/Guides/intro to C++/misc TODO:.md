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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBUBYVJ5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BirNydzABK3QsPngsHxds8LJQVP3KaN8mH4I2FyvTygIhAMv3NePHzbWr8ZcPRpQs5GQ6ymMxGnMW5MaXIF0lnxwWKv8DCFYQABoMNjM3NDIzMTgzODA1IgynmyyTPsRy1Asm3acq3ANvwxRmD5bzRibFofW4kP8rRNwM3AxDYEwqhGovgzHSw9FVAa03MV1jX%2BcZGjMf7GBDp6XDH1Zybcq6YGrOtYcPr45Y9ZVZFxMuvCMHDjSmIxm7lz4%2B55w9gDii4AVftZDQaUBREC15EZ%2FaUhszSFe%2Br%2FLWaiK9lEhczPQAQL7m1bcxj5%2BfQ2ZhQNnI772%2F0B4zSBzcGUsb5jUOJ6MYb1lZQPLgdD0dCMMO4sCzTV7rDhpw2nGEAbi9A0U%2B75HhCPThgZSBs78EgA%2B7xzrqXkSCog9VBPRwqjHSJG8Tc4zJ4Sje2WJIFQcawx1kmsa%2BXZy8m1CnsnCa7FbD8gOLLaW9%2FkEX1xQK9ZtuVKoo%2B7TTwd2ar5G75neNmfBZ0%2FiYn9gsv3AgYNzj8ID4BWN9uQOxWBVnHJ7Cd89h3%2FyxjtiHvyotKadMEuzxTS1zs438vtdezkIXBZsKfs1bhQDlr0Gn0PZp7V%2BsJNWZbcXZwK%2BtqLY6KQ9EcfN8yJJR5ZRmGZo1UZo8d%2FDcm5XiQCNgftnN00LhSBcln9OspUT7R8wjtlz6AdxqmDhIZoUGL4eyTyRk96hvATTn9MiLnqEe8JPTvCx8%2Fgi9Ez5%2F8EDJGcoWKpYSiGd0cW0EqMGhxTD2huS%2BBjqkAczPd9tf%2FDAE48ig6ZIF5XkTOvyat%2BU1uSpyYMo7kl3cyyWc0BRzYyLmhH2LRiQj8J2t5OaNKGpF8mhrRqOqj9n0XiAYF09o0yyDBtLLoyos9ls9sD11O3Ac%2B2D1O%2BL9UCI15JJL2jVlixwRgEvngYgvlQLuUTbcIDitZ4EZ0at1Tu4enb0VniVGe1jyvn3K0KG0KUJnTjGG93gX8JmWnaf0OoV1&X-Amz-Signature=de15ff1d64420892290d006ac4eae867c768442b06a3bdb3f6455a758faa33b8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBUBYVJ5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BirNydzABK3QsPngsHxds8LJQVP3KaN8mH4I2FyvTygIhAMv3NePHzbWr8ZcPRpQs5GQ6ymMxGnMW5MaXIF0lnxwWKv8DCFYQABoMNjM3NDIzMTgzODA1IgynmyyTPsRy1Asm3acq3ANvwxRmD5bzRibFofW4kP8rRNwM3AxDYEwqhGovgzHSw9FVAa03MV1jX%2BcZGjMf7GBDp6XDH1Zybcq6YGrOtYcPr45Y9ZVZFxMuvCMHDjSmIxm7lz4%2B55w9gDii4AVftZDQaUBREC15EZ%2FaUhszSFe%2Br%2FLWaiK9lEhczPQAQL7m1bcxj5%2BfQ2ZhQNnI772%2F0B4zSBzcGUsb5jUOJ6MYb1lZQPLgdD0dCMMO4sCzTV7rDhpw2nGEAbi9A0U%2B75HhCPThgZSBs78EgA%2B7xzrqXkSCog9VBPRwqjHSJG8Tc4zJ4Sje2WJIFQcawx1kmsa%2BXZy8m1CnsnCa7FbD8gOLLaW9%2FkEX1xQK9ZtuVKoo%2B7TTwd2ar5G75neNmfBZ0%2FiYn9gsv3AgYNzj8ID4BWN9uQOxWBVnHJ7Cd89h3%2FyxjtiHvyotKadMEuzxTS1zs438vtdezkIXBZsKfs1bhQDlr0Gn0PZp7V%2BsJNWZbcXZwK%2BtqLY6KQ9EcfN8yJJR5ZRmGZo1UZo8d%2FDcm5XiQCNgftnN00LhSBcln9OspUT7R8wjtlz6AdxqmDhIZoUGL4eyTyRk96hvATTn9MiLnqEe8JPTvCx8%2Fgi9Ez5%2F8EDJGcoWKpYSiGd0cW0EqMGhxTD2huS%2BBjqkAczPd9tf%2FDAE48ig6ZIF5XkTOvyat%2BU1uSpyYMo7kl3cyyWc0BRzYyLmhH2LRiQj8J2t5OaNKGpF8mhrRqOqj9n0XiAYF09o0yyDBtLLoyos9ls9sD11O3Ac%2B2D1O%2BL9UCI15JJL2jVlixwRgEvngYgvlQLuUTbcIDitZ4EZ0at1Tu4enb0VniVGe1jyvn3K0KG0KUJnTjGG93gX8JmWnaf0OoV1&X-Amz-Signature=01a1f34b7c6e73dcf21ff87eed9d5c5d87b07580f46d409dc736b7331fad2267&X-Amz-SignedHeaders=host&x-id=GetObject)

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
