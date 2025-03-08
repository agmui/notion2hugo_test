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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLMBG7B%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC%2Byj0vYTQ93sImMEy6YRGuec4n3DCWDhLtMQIiidjPNAIhAI4iNLT%2FfoxMx1vWWHGvMo8fZnzUYHxltfiPI9vbOQleKv8DCGcQABoMNjM3NDIzMTgzODA1Igzw9MeX%2F4Cy3n2Az8oq3AMjFkO0kuAyRFwNHiYhdPnPs1TWqofXdh4j%2BBk7nYGWMPBYrZ08llcWLGJIn8SiUAjCY7yBiLNKUledjvqpLCC0G3WYVDZdvls%2Bd8plfDJ%2BPAnZ6cRQ%2BSPW3k0Vi7mc0J52SneuOHHQeWZpkww1BCnGulFkg23a%2FdZKkZ%2BMDPxDC9Ag%2FfH1ExxAISolFTnVLj83AXj4NgqVZHqGhIOg%2Fozh%2FYR1Xdt6a8%2B%2BemyhEkJ1LjRR4lsaOEoD6UAtryRZM4WBXZTVkE56q6%2B%2F7bkqXwraMp%2Bj3d9yWKW6oYBsvc%2Fah9tefVJBTcTeDB7b2nWU1FQxpBzeBl37EW96vrpZpBu6LxtWnUpK84AGSWS%2BHrcp5NnH6%2FmDSTdb3x5zt68iH7SD1gqxwdqnKFSNqXDvHVfwd2vEbwV38M5%2F%2Fib0YewuLe%2FjNvs3Bawk9RRA1oiiWe8Vm8eNjTKzJMJtKZpH%2BhSZHNRovgLU7tt51hlzekor%2BWm3ouq3%2F%2BqKkHHfgkpnGGtdaLZTZL%2B9BTcEXlw44EkJK58G8e%2FWl0LsUU%2BxoV4dxC8taBnu9srZCsi2OtSyzcRSAGcULrTLuDhdMsdwN6mOYrM5f7lGmAVl73AXm5A8n%2F64EX94B8UxE8O8VDDy8rK%2BBjqkAehw3ti9ftDiHuN29idzqW0RC%2Bh2fv4rQQgpVcInKP87fJnmtPbkvtuE%2FCens5niy0aYbofU8uxLuOyCx16%2B5Zs1vABgRW79ZNSZ0Tvf4%2B4UBJhWHm6p24PGIEIPOtU81prqYm9fwEJQSBgwR6LvR0K%2BuMFQreEgnq5Vj%2Bfb9Cn1oS2AS4LXwH13vDxiQLqNuRThTOL37Lve%2BFk5oMJAr2587H0T&X-Amz-Signature=1bfdf5fbf13e98c3028c0c85ba5c60beff895017d38550adec29f299e0497b54&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLMBG7B%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC%2Byj0vYTQ93sImMEy6YRGuec4n3DCWDhLtMQIiidjPNAIhAI4iNLT%2FfoxMx1vWWHGvMo8fZnzUYHxltfiPI9vbOQleKv8DCGcQABoMNjM3NDIzMTgzODA1Igzw9MeX%2F4Cy3n2Az8oq3AMjFkO0kuAyRFwNHiYhdPnPs1TWqofXdh4j%2BBk7nYGWMPBYrZ08llcWLGJIn8SiUAjCY7yBiLNKUledjvqpLCC0G3WYVDZdvls%2Bd8plfDJ%2BPAnZ6cRQ%2BSPW3k0Vi7mc0J52SneuOHHQeWZpkww1BCnGulFkg23a%2FdZKkZ%2BMDPxDC9Ag%2FfH1ExxAISolFTnVLj83AXj4NgqVZHqGhIOg%2Fozh%2FYR1Xdt6a8%2B%2BemyhEkJ1LjRR4lsaOEoD6UAtryRZM4WBXZTVkE56q6%2B%2F7bkqXwraMp%2Bj3d9yWKW6oYBsvc%2Fah9tefVJBTcTeDB7b2nWU1FQxpBzeBl37EW96vrpZpBu6LxtWnUpK84AGSWS%2BHrcp5NnH6%2FmDSTdb3x5zt68iH7SD1gqxwdqnKFSNqXDvHVfwd2vEbwV38M5%2F%2Fib0YewuLe%2FjNvs3Bawk9RRA1oiiWe8Vm8eNjTKzJMJtKZpH%2BhSZHNRovgLU7tt51hlzekor%2BWm3ouq3%2F%2BqKkHHfgkpnGGtdaLZTZL%2B9BTcEXlw44EkJK58G8e%2FWl0LsUU%2BxoV4dxC8taBnu9srZCsi2OtSyzcRSAGcULrTLuDhdMsdwN6mOYrM5f7lGmAVl73AXm5A8n%2F64EX94B8UxE8O8VDDy8rK%2BBjqkAehw3ti9ftDiHuN29idzqW0RC%2Bh2fv4rQQgpVcInKP87fJnmtPbkvtuE%2FCens5niy0aYbofU8uxLuOyCx16%2B5Zs1vABgRW79ZNSZ0Tvf4%2B4UBJhWHm6p24PGIEIPOtU81prqYm9fwEJQSBgwR6LvR0K%2BuMFQreEgnq5Vj%2Bfb9Cn1oS2AS4LXwH13vDxiQLqNuRThTOL37Lve%2BFk5oMJAr2587H0T&X-Amz-Signature=b9a8cf7879dce56a98e5ac152ec1b8e74b8d3da9098c46238efc1f6419688f53&X-Amz-SignedHeaders=host&x-id=GetObject)

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
