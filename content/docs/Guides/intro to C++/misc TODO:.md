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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656V4V5VC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzYX5%2FNUzDDfSlIBt%2BkypmUQwYXR%2BT4joxE1xUoAY%2BxwIhANjhGEH4qz0%2BhZQsc653tEKAjXfj32xmI9wjR7fA4%2FUZKv8DCHkQABoMNjM3NDIzMTgzODA1IgypHyJ4D9d%2Fi2WJ9%2BQq3APDuEgucvAmE%2F36r4CJbf%2Fr8QDf%2BaOYI2XE0fhokVIVIbzw13HLLpX8AIsGydgsVeIhQk0%2FT%2FXWhS%2FEaFnNgL0xz88zc5BcoDsFmwOJIWv1UkXYA6wxnk7bMQlXSztl%2BK9osxS9hX6EkaHfcNgqDF0YhBbtA6tf89Z2mSIo8Xz%2FARge2of3sM41U6fmcc4CafT%2Bit89rfJg85b3HPYQMeTpD4rA0WksWsZrrOQeiG8TXkyNBXefMb8WzgP9zWmlmqjzlWjONCNInWipSq%2BvwdzTeMC6ENC1Q3RDq8bIWx1FsRA3CHT5hJ%2Fx5yroUJPsTKKryjSQJaYhBytGQOpD%2BvLvXdr9BYSnw4HCzHH5TXLIfQsDNk0V5VqVUeAhjgT3c6%2BSdId7j0j%2BGI5EJ1jB%2B9rjZCxcpCHYcIuuiwebqzcTf0uYLiz6q0bMS3eK1iLLgmrErxg%2Fs5hNt8Hw1KslEXlX%2BOUXPIpohGlyINjq7mjJpR9TENEgCFQz%2FPHS5ngUOvdxZaM6qVUlNn%2Fg9NiFdEMOjTPNUSFxHRmes%2FTzAp%2BzxHr2TmiNHRvO9%2F4v8cx2wDVlPWKD6tR8IhpjR%2F59mz3yh%2Bl7IFuMeD73AnkKtn4hoHwDMWDykFV80qsXHDDe9vrCBjqkAU6dV9K2ttHjBWV2bP2buVvQhnpSKLi6EFHj%2F0uHhVO1ujgiQ%2FHyXqusxdEDhs7KOw6ufGFtzwto9J5OIVEojZa4EcbYRbUw8FUr4RSuBuJC7yFtkVzxN2t7MFJnTiv11mk%2BgLQ0doQ%2FNy329gH568mhNpT3xLgOR4Cl4zGazy8111%2BUeS9UPBW%2BNqQKyDrPHYMAV9BbfCTz8aDRVMxoWPrSpCFN&X-Amz-Signature=6f3896c32ced7795d941ab1706fadf72cd1551a77020ff5d0e54a26d547adbc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656V4V5VC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzYX5%2FNUzDDfSlIBt%2BkypmUQwYXR%2BT4joxE1xUoAY%2BxwIhANjhGEH4qz0%2BhZQsc653tEKAjXfj32xmI9wjR7fA4%2FUZKv8DCHkQABoMNjM3NDIzMTgzODA1IgypHyJ4D9d%2Fi2WJ9%2BQq3APDuEgucvAmE%2F36r4CJbf%2Fr8QDf%2BaOYI2XE0fhokVIVIbzw13HLLpX8AIsGydgsVeIhQk0%2FT%2FXWhS%2FEaFnNgL0xz88zc5BcoDsFmwOJIWv1UkXYA6wxnk7bMQlXSztl%2BK9osxS9hX6EkaHfcNgqDF0YhBbtA6tf89Z2mSIo8Xz%2FARge2of3sM41U6fmcc4CafT%2Bit89rfJg85b3HPYQMeTpD4rA0WksWsZrrOQeiG8TXkyNBXefMb8WzgP9zWmlmqjzlWjONCNInWipSq%2BvwdzTeMC6ENC1Q3RDq8bIWx1FsRA3CHT5hJ%2Fx5yroUJPsTKKryjSQJaYhBytGQOpD%2BvLvXdr9BYSnw4HCzHH5TXLIfQsDNk0V5VqVUeAhjgT3c6%2BSdId7j0j%2BGI5EJ1jB%2B9rjZCxcpCHYcIuuiwebqzcTf0uYLiz6q0bMS3eK1iLLgmrErxg%2Fs5hNt8Hw1KslEXlX%2BOUXPIpohGlyINjq7mjJpR9TENEgCFQz%2FPHS5ngUOvdxZaM6qVUlNn%2Fg9NiFdEMOjTPNUSFxHRmes%2FTzAp%2BzxHr2TmiNHRvO9%2F4v8cx2wDVlPWKD6tR8IhpjR%2F59mz3yh%2Bl7IFuMeD73AnkKtn4hoHwDMWDykFV80qsXHDDe9vrCBjqkAU6dV9K2ttHjBWV2bP2buVvQhnpSKLi6EFHj%2F0uHhVO1ujgiQ%2FHyXqusxdEDhs7KOw6ufGFtzwto9J5OIVEojZa4EcbYRbUw8FUr4RSuBuJC7yFtkVzxN2t7MFJnTiv11mk%2BgLQ0doQ%2FNy329gH568mhNpT3xLgOR4Cl4zGazy8111%2BUeS9UPBW%2BNqQKyDrPHYMAV9BbfCTz8aDRVMxoWPrSpCFN&X-Amz-Signature=f721e8e4149b963f50a8da34498c5735fc230dc9b05df002571d7c038a38ff8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
