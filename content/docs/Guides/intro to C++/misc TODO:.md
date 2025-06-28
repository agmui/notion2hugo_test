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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BNXNGF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FkI8py0Zpt9J5RhWTG6l2PXs9H%2B%2BklEi9z%2BTbDvewyAiEAyXhTNVIf%2FTFFp7QrJJVPr5IOrdnhEYrIGZ8OckPKbeQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARNe%2BW5zEBvM%2FmOVircA6AQqw5agFg4pgSNT%2B48EavQ%2BzeWu6eQXOWTAS4MPrmkdcoE7BtixMQrO02dZkcVNqLwRGNAJIKgEZdePm2cww2qFco7HaByG7x1PRvpB7%2F38cZjIGYycgkYUB75ybBSYKw6Gq5oC%2BFPb3puYUqB8sJuRLv%2FBDQfCsrrA78qyWu%2BEgCqC7LAz%2FrdD8XucJ4GF9IoqfQPhP3Vg5zLFl2DRk92Ffvoy84irB1phyNlZk%2FRr8VsOazoKDLdhN3KVZncCXfeWmygQRM%2B5mmtrRjIzj1NRFIMJCIHIWSzlPdsKCZimSJ6u8iP5WVz8L%2B5hqrmujsjgbQP7QexztMy3CyFAGquNlPa6vtLZsWdlRbcqXx7CLOF%2FjUceSdLR32TGImIHp2HVPmqGWlIHK0vXBhOgLiMZ99zuFayEsTZEDZ13WUU3s%2Faxx04XURGRnK5e3MKho7pppEWE%2F9IOPR0tkSyuookVs6Yql60GjFIqnV30NjiTntS4WNXKYL7r6x6q9ghFWVWNE9qYAbAqO0S5l5ftzUmNO83oSU86fRj6Kx3JcauNqBUb%2FrEeKiO30b2uXAHiFcBZdyAhNLO0pHl0kpnwpgEcS%2F6Cv7RLaKW32jLqr3vBQcYAbiAiLzcp3iFMMj0gMMGOqUB37X0zgEgDflLOj81NY7v%2FZpeILeBhDfTUcsTweGAikYAdFdKzT5VnFj4b6xdtfnb6DiYO9sJUnMC7%2B3Wd5qsUhFMWyjDMJqHazOClcdW93EhQepQ13mMKZzrKOvG0y2O03g73DfS4T2RTWJIFnvjkty78A%2FneJSs4P3iEI5Ik4ex57ghEDb0sC5YMVHDiz2nGD8KZKYk7JI10DZ1oGLEhoYH1pbO&X-Amz-Signature=089fff86a70712ab58d5dddd7acd7aef4354209d295f918477b1686a1f6982fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BNXNGF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FkI8py0Zpt9J5RhWTG6l2PXs9H%2B%2BklEi9z%2BTbDvewyAiEAyXhTNVIf%2FTFFp7QrJJVPr5IOrdnhEYrIGZ8OckPKbeQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARNe%2BW5zEBvM%2FmOVircA6AQqw5agFg4pgSNT%2B48EavQ%2BzeWu6eQXOWTAS4MPrmkdcoE7BtixMQrO02dZkcVNqLwRGNAJIKgEZdePm2cww2qFco7HaByG7x1PRvpB7%2F38cZjIGYycgkYUB75ybBSYKw6Gq5oC%2BFPb3puYUqB8sJuRLv%2FBDQfCsrrA78qyWu%2BEgCqC7LAz%2FrdD8XucJ4GF9IoqfQPhP3Vg5zLFl2DRk92Ffvoy84irB1phyNlZk%2FRr8VsOazoKDLdhN3KVZncCXfeWmygQRM%2B5mmtrRjIzj1NRFIMJCIHIWSzlPdsKCZimSJ6u8iP5WVz8L%2B5hqrmujsjgbQP7QexztMy3CyFAGquNlPa6vtLZsWdlRbcqXx7CLOF%2FjUceSdLR32TGImIHp2HVPmqGWlIHK0vXBhOgLiMZ99zuFayEsTZEDZ13WUU3s%2Faxx04XURGRnK5e3MKho7pppEWE%2F9IOPR0tkSyuookVs6Yql60GjFIqnV30NjiTntS4WNXKYL7r6x6q9ghFWVWNE9qYAbAqO0S5l5ftzUmNO83oSU86fRj6Kx3JcauNqBUb%2FrEeKiO30b2uXAHiFcBZdyAhNLO0pHl0kpnwpgEcS%2F6Cv7RLaKW32jLqr3vBQcYAbiAiLzcp3iFMMj0gMMGOqUB37X0zgEgDflLOj81NY7v%2FZpeILeBhDfTUcsTweGAikYAdFdKzT5VnFj4b6xdtfnb6DiYO9sJUnMC7%2B3Wd5qsUhFMWyjDMJqHazOClcdW93EhQepQ13mMKZzrKOvG0y2O03g73DfS4T2RTWJIFnvjkty78A%2FneJSs4P3iEI5Ik4ex57ghEDb0sC5YMVHDiz2nGD8KZKYk7JI10DZ1oGLEhoYH1pbO&X-Amz-Signature=417e416b6dbd8fee91ef8ed4eaf610aa4f9efccb4ad5eaa904784ea9909278cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
