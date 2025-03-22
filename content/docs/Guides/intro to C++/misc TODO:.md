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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRQZVUIC%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFwAFlgbKTIGvgzcWtnozaBcIqw5TMovoTHREskBtxyHAiEA2cko3%2BDggwRs5eib83vLympBwrHuzVupxgeoZ2lIYp0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOT7W5lUmUUAtqJtircAyHyuGKypFDknEyz8HMXnYEM0dnVhuinQeK8ZRml4YgzmLxZ7PdQSaxQuRl4qeagQ5RCfNfSZYBkUB2xQxo9ticqvuq2mwf0Iy%2FQ9Gn%2FVAb1GVimd%2BuGz0qB9YKEKyxapVVaA05b4VNCuujxvNK4D2C4E%2FYiLhHEWdAXC0%2BV76%2FIvXxRQ8wPSLA0B%2Bx5GGgrjg7LbzxRreI5RY%2BCH5Tn%2BZFFH47Aq7p3icnkf0vZVVWeJbF1nz3pFNb7ManHH55ECCbi84uOgfez4kLp6eCFI2TPlOABbFIOVWur1%2Fh2DO1sZhWhnpREfzkng5WPhrhQm93ImhCiQV%2FMFu2hI8HqZwWmDcvJVcr0XkunhfbQTm08yAwh89eVAcIL5v8S4gFYQ%2BnJ0jn0pzls5lz7lKFuGWX65b066nWgQvQt%2FdI%2BJmHyB%2BrjrJqoDEg1x8yb2K2bR2%2B2Zhdsbj53hzSBf40dFNAT%2FzJiXIOoc5O5J28KLzjP4FzU8OT1Ev%2FJtmkBC%2BfBwaFwgSFRDkqxccaxM4nRpT7FzhTyXzNxILLInEk3lR%2F4QviLcOxXKLdKB7SPzLSlyoGkRUoSqhtCj1gdZRwmtrxyvtLTrySbuWaMFTAJ64xFZhdcR4LpUQqfeU2MMMqL%2Bb4GOqUBUVm54TZq0PCxzIHNpc9NFvD1HnyYAiuGmAGAqst1iJnddiVwGNZfZrc4ewpn3GJTWBph9jeGcEP1A%2BIumC46KB31Fu227or7d4Xmpx0mfUV%2B77Rr1BNLyc5u%2BZxOb7px2l6JIgsjLUQWHX5JL%2FwFydNj6SRM%2BhCpPV3NJuhaN6UbYBEU4p6k%2FCdj3WhyhVlnGdVEku7874w6e7NbmGjJLFyTGHp1&X-Amz-Signature=c3d215b27b11f715a47515fa91a865c0edb6c9743b4133a08e988c916b684968&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRQZVUIC%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFwAFlgbKTIGvgzcWtnozaBcIqw5TMovoTHREskBtxyHAiEA2cko3%2BDggwRs5eib83vLympBwrHuzVupxgeoZ2lIYp0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOT7W5lUmUUAtqJtircAyHyuGKypFDknEyz8HMXnYEM0dnVhuinQeK8ZRml4YgzmLxZ7PdQSaxQuRl4qeagQ5RCfNfSZYBkUB2xQxo9ticqvuq2mwf0Iy%2FQ9Gn%2FVAb1GVimd%2BuGz0qB9YKEKyxapVVaA05b4VNCuujxvNK4D2C4E%2FYiLhHEWdAXC0%2BV76%2FIvXxRQ8wPSLA0B%2Bx5GGgrjg7LbzxRreI5RY%2BCH5Tn%2BZFFH47Aq7p3icnkf0vZVVWeJbF1nz3pFNb7ManHH55ECCbi84uOgfez4kLp6eCFI2TPlOABbFIOVWur1%2Fh2DO1sZhWhnpREfzkng5WPhrhQm93ImhCiQV%2FMFu2hI8HqZwWmDcvJVcr0XkunhfbQTm08yAwh89eVAcIL5v8S4gFYQ%2BnJ0jn0pzls5lz7lKFuGWX65b066nWgQvQt%2FdI%2BJmHyB%2BrjrJqoDEg1x8yb2K2bR2%2B2Zhdsbj53hzSBf40dFNAT%2FzJiXIOoc5O5J28KLzjP4FzU8OT1Ev%2FJtmkBC%2BfBwaFwgSFRDkqxccaxM4nRpT7FzhTyXzNxILLInEk3lR%2F4QviLcOxXKLdKB7SPzLSlyoGkRUoSqhtCj1gdZRwmtrxyvtLTrySbuWaMFTAJ64xFZhdcR4LpUQqfeU2MMMqL%2Bb4GOqUBUVm54TZq0PCxzIHNpc9NFvD1HnyYAiuGmAGAqst1iJnddiVwGNZfZrc4ewpn3GJTWBph9jeGcEP1A%2BIumC46KB31Fu227or7d4Xmpx0mfUV%2B77Rr1BNLyc5u%2BZxOb7px2l6JIgsjLUQWHX5JL%2FwFydNj6SRM%2BhCpPV3NJuhaN6UbYBEU4p6k%2FCdj3WhyhVlnGdVEku7874w6e7NbmGjJLFyTGHp1&X-Amz-Signature=52d32be81a4b3adf8d6a98ab1fb308af37f60cddcf2a1001b0c0e4721808a572&X-Amz-SignedHeaders=host&x-id=GetObject)

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
