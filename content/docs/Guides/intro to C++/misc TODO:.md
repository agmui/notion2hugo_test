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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ADCSOU3%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIFS1KEvhwhexsBSoeyF84xHqvP%2FhIwuF9bHDjCY7ceyHAiAu%2FssFJ7pU8sBlcGhzQ5LXHFgt9mlWxGum0gwWtoWvEiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcwGSfVxTFG2qXkz2KtwDxISoxU6qtBInE5MwlZn2P6H7Uv2TpCZxl2oXAI2OxLzJ4LQjEY8zm0ck6lfATCsTJhYQPYgq2waSI4fgwYUnAspyz0nRx5dkaFO91M3CKSzhw1XXe%2B2Espb0SEWht25zRcSsCN88TSkwtrlisjMFEojuZ8%2BVSYhbEuzDhuPwyBZpJ2s3boU0DFWsmbyLjB0bO9yv4%2FWE8oLKt8g%2BSqCgdVUr0W%2Fh96CsfQdyMy9OcJqQfZ3L36NpowmOXp3Znd5LENOlXly9iT5sbyJhVjPZ7MD7JNRBCHdWkN6E5zq2IhYora3KcJkOEBu9W7TjtcSTNlG5fgzJs0tU%2BjFqz5QUaRdpVXlYnLLNhEFyTZVj7drxxXcR4umkz1HI4X6TLIgp9%2BSa5TPuL5IVuWcxpjWnuDVDlruXhzJz8CiUUPZdh6y5YIuCMW6FGe6Rb4pIpiwyotA4POAnVVEtk12nrCGRzRLETd8Hxwf8GVQjisSqZY8FKs3IYFQiCuhlVZLGJfPbkd0ha95dTWFZTAm8zjSP1n03lFbS0skLl9ouKc22qliCz1Bhtbe7JqRm6bfCJDKY669vy0SECu56MLMAs0834FQFNw06WuaXPPm4tRR4hL8ICQ3nacF0fDmuGCgwzJPXxAY6pgFqAN3DoZZJUbZSGbYkShVj845W8GhuSng%2BpXRx2LvMFcuO8RZ634XW46i2ZTHp22TH25962rZLP3gCYce8YhuVeUKDrLEvSAGPgvI1qtKsH31CajZetZsgIfRoNJBSjJus2jI7Erajk%2BuxlOz4RS%2Fm1kxICO2sX%2BUl6ftnaP1WkOOQxyYZAQsBed%2F1qkAklK93c%2FLxlpH11CzFc2pOCRnTe8IS%2BRWo&X-Amz-Signature=f3fd13e08021709b0fea696dbb9b9b9a63d60ea78339da47a1ca904d2985f65e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ADCSOU3%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIFS1KEvhwhexsBSoeyF84xHqvP%2FhIwuF9bHDjCY7ceyHAiAu%2FssFJ7pU8sBlcGhzQ5LXHFgt9mlWxGum0gwWtoWvEiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcwGSfVxTFG2qXkz2KtwDxISoxU6qtBInE5MwlZn2P6H7Uv2TpCZxl2oXAI2OxLzJ4LQjEY8zm0ck6lfATCsTJhYQPYgq2waSI4fgwYUnAspyz0nRx5dkaFO91M3CKSzhw1XXe%2B2Espb0SEWht25zRcSsCN88TSkwtrlisjMFEojuZ8%2BVSYhbEuzDhuPwyBZpJ2s3boU0DFWsmbyLjB0bO9yv4%2FWE8oLKt8g%2BSqCgdVUr0W%2Fh96CsfQdyMy9OcJqQfZ3L36NpowmOXp3Znd5LENOlXly9iT5sbyJhVjPZ7MD7JNRBCHdWkN6E5zq2IhYora3KcJkOEBu9W7TjtcSTNlG5fgzJs0tU%2BjFqz5QUaRdpVXlYnLLNhEFyTZVj7drxxXcR4umkz1HI4X6TLIgp9%2BSa5TPuL5IVuWcxpjWnuDVDlruXhzJz8CiUUPZdh6y5YIuCMW6FGe6Rb4pIpiwyotA4POAnVVEtk12nrCGRzRLETd8Hxwf8GVQjisSqZY8FKs3IYFQiCuhlVZLGJfPbkd0ha95dTWFZTAm8zjSP1n03lFbS0skLl9ouKc22qliCz1Bhtbe7JqRm6bfCJDKY669vy0SECu56MLMAs0834FQFNw06WuaXPPm4tRR4hL8ICQ3nacF0fDmuGCgwzJPXxAY6pgFqAN3DoZZJUbZSGbYkShVj845W8GhuSng%2BpXRx2LvMFcuO8RZ634XW46i2ZTHp22TH25962rZLP3gCYce8YhuVeUKDrLEvSAGPgvI1qtKsH31CajZetZsgIfRoNJBSjJus2jI7Erajk%2BuxlOz4RS%2Fm1kxICO2sX%2BUl6ftnaP1WkOOQxyYZAQsBed%2F1qkAklK93c%2FLxlpH11CzFc2pOCRnTe8IS%2BRWo&X-Amz-Signature=793fa38c47b8e648ec8d517c9d32a7c934c48bc2e57502cbe28c0e624042358f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
