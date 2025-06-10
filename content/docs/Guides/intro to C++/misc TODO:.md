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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWJ3JTNJ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUAIrkeAnJ2bNZ1%2ByHgeupLqDfjXnC7y%2Beaya2bchi7AiBXO3qwNlLc4cqR%2FHWhN%2FjXlvSaioBrbJ6rsxJnOmFbiSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPtWXC5I8O%2BoK0r1xKtwD91bJFx9PtCA6IJrFquItO8eE%2BGkHmWHa1aXf%2B1HqUoaj0NQVbro4M2VQNkyMvsZmcJ%2Bf1K7PdELPWh7%2F2w%2B678rlDfO84H3jQrKS7wopx%2ByIEx41eu9oMxtcw83ZWD9M%2Bu8XYVmK0TN0n3ngaY3SsRflw08VQ6WYVqF4N4oXLg3N4%2FXMqIYrjpDEfspVVyRqA9GF1DBRR0uxfPhrk685k7V22unTWlrz9VBH64ArUY%2FQEHRr5%2BF4oK%2FOCrEz%2Bd690hzfLC5Nf3TbYR6g2gFE4Qpmu3UW6%2FHI6AJPJHX1wDFQ6%2F8fKxLlBbusImZ7ehZjyIf3Qr%2B6qrdqpynBHZoIwvQusVEouMZ4RNT%2FvgaMkgIccFvF23PM%2BHmflEoXz1Qhguph0PO5fECdsPBUmpAeMxCVFEPj%2Fl4pgEFErXf87LnL3SmolzT6uCv4t%2BH9HRE5CZUm41j7zODnYeXYIOAUavHpLNxiHFqmoWeYiyHIJw%2B3vD7RihbQodfiRj5K7NnYQgLJaffP6CU6DoitXLlVdO7bldEOG8U6505h2BEojXTDdmaIiMP4y9uCeRjOkfbOGoiS1VMYeE8c1%2FDrIeihhggO4ShKXu5EMN6Z4XHBh77DAETur5KlbxmTfiAwzMCgwgY6pgHy1Dol2Bar%2FciyojFlc9SAqq4RHU%2BoZipi%2BrOGlKw%2BsvFAokq6D5dqxGCHN2%2B%2BfmvR9%2FRCojqSsOXgGZ%2FIvEos57iTsRLhJQh4l%2Fuj8lmMLkGammctCkfz7eEiqGMv4vk9vo9aVYvPuMG7Phx9zDk%2Bjao577ZxUDQp2%2FI1Ijxu9AOtAbH7qGHrt1SBnHA2sZemzxkNU1XW3wlh4FAwRR1veFKuH5Ec&X-Amz-Signature=042a6599a331b6592148bd474af5a01dc13d49e9e510dc25e0119cec0c4d61e6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWJ3JTNJ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUAIrkeAnJ2bNZ1%2ByHgeupLqDfjXnC7y%2Beaya2bchi7AiBXO3qwNlLc4cqR%2FHWhN%2FjXlvSaioBrbJ6rsxJnOmFbiSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPtWXC5I8O%2BoK0r1xKtwD91bJFx9PtCA6IJrFquItO8eE%2BGkHmWHa1aXf%2B1HqUoaj0NQVbro4M2VQNkyMvsZmcJ%2Bf1K7PdELPWh7%2F2w%2B678rlDfO84H3jQrKS7wopx%2ByIEx41eu9oMxtcw83ZWD9M%2Bu8XYVmK0TN0n3ngaY3SsRflw08VQ6WYVqF4N4oXLg3N4%2FXMqIYrjpDEfspVVyRqA9GF1DBRR0uxfPhrk685k7V22unTWlrz9VBH64ArUY%2FQEHRr5%2BF4oK%2FOCrEz%2Bd690hzfLC5Nf3TbYR6g2gFE4Qpmu3UW6%2FHI6AJPJHX1wDFQ6%2F8fKxLlBbusImZ7ehZjyIf3Qr%2B6qrdqpynBHZoIwvQusVEouMZ4RNT%2FvgaMkgIccFvF23PM%2BHmflEoXz1Qhguph0PO5fECdsPBUmpAeMxCVFEPj%2Fl4pgEFErXf87LnL3SmolzT6uCv4t%2BH9HRE5CZUm41j7zODnYeXYIOAUavHpLNxiHFqmoWeYiyHIJw%2B3vD7RihbQodfiRj5K7NnYQgLJaffP6CU6DoitXLlVdO7bldEOG8U6505h2BEojXTDdmaIiMP4y9uCeRjOkfbOGoiS1VMYeE8c1%2FDrIeihhggO4ShKXu5EMN6Z4XHBh77DAETur5KlbxmTfiAwzMCgwgY6pgHy1Dol2Bar%2FciyojFlc9SAqq4RHU%2BoZipi%2BrOGlKw%2BsvFAokq6D5dqxGCHN2%2B%2BfmvR9%2FRCojqSsOXgGZ%2FIvEos57iTsRLhJQh4l%2Fuj8lmMLkGammctCkfz7eEiqGMv4vk9vo9aVYvPuMG7Phx9zDk%2Bjao577ZxUDQp2%2FI1Ijxu9AOtAbH7qGHrt1SBnHA2sZemzxkNU1XW3wlh4FAwRR1veFKuH5Ec&X-Amz-Signature=8baffa4fb8eead5be408634cf08caef48c9e25a7605349cd5f50d94309bd0b4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
