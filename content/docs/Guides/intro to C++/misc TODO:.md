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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS2NMBX2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDNWVBV5swPjapwJDMbCJ8EAVzuuXDW2OF9XkWvZu6F5QIhAOPRGpeo6VnhacDvdI%2B38Oqe3P%2FWPc%2BsgipaBc5Qv4vhKv8DCGcQABoMNjM3NDIzMTgzODA1IgxByhQSib5FZdTZtOYq3AOSZxTzA97UVCFdUg64t%2Fd2Oq1bjV9EvkVBVC6sRs7lRnJfJez1zhOsCvoHQXxTBBYisGSCA%2F4wFfhHtz74Z6I2EON%2BHdfp7TNLVVojDIMFyAoi53mAJEJky%2FAcQWcZIyEIwqOIfYvffgH8ftEkw3wkU%2FIa7s7R8mXs0ZLY59kGYJy%2BeumzbTHELZwe%2BvWWL7bWdSTB881EPmz%2BRfhdpyOul6Dj2p7VxRVLy52n6qxx3T5Opbpn7MWqyEQPK6i%2FmskmavDD7KVtErhK%2FiDgDBWB0TovYS62EWDJp39619PNFIcRloZEljue5XG8F4TD41u2jQoE%2FesXOdNwVkkK9Q9xiAfKUm4%2FvB7kau9JHkBd7wECnIOsrI2wNcLCKfveAvjred%2BPSsquZBdoYrmD6DVwuaSqf2JsFat%2Fm3f8WYvXL91VPTsuCfuaK%2BqKilcNfKmiPJsCn7LE5mjo4iWaDqcReUoplNg%2Fv0BKYp6Gqf%2FIIgVxC8ZzG8ELhYvTNtddp9kgBbpDIU1jNbm%2FZxeypiLVmmk5hh43lTtLfeP2Lsok0Vias%2FmBnUbekNX308aXYYR1XhK3lA8dnJDJGoi1WY%2FBFxGhasoY5FU1Ft5DQJKpWm1tds8kC2opqKnvLzC5n%2F69BjqkAWNwFFHBRfauWZ90EbLbB%2F1qQbX1yQa%2FrvFB0%2B1T9qyhs8H%2Fn%2BP2otN2ZIF0xlt92EK07HONF2OPca5lQHXFsqcASFaquDsveisRFCmaDU5G1ajIPhteIsLN6BoPSYNaRP4%2BpvuEGgc9HN3qtIs4G2lO7sol%2FxxB42cCgr5vT5M5A4ckPBp%2FV0PBII21PzjB0%2FCRyN5PIZfmFk2keM52GHRdxwrZ&X-Amz-Signature=b6494c78b492fe1aa79239a3db7e34387a2653f13903e34959b68a109ae9e8d8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS2NMBX2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDNWVBV5swPjapwJDMbCJ8EAVzuuXDW2OF9XkWvZu6F5QIhAOPRGpeo6VnhacDvdI%2B38Oqe3P%2FWPc%2BsgipaBc5Qv4vhKv8DCGcQABoMNjM3NDIzMTgzODA1IgxByhQSib5FZdTZtOYq3AOSZxTzA97UVCFdUg64t%2Fd2Oq1bjV9EvkVBVC6sRs7lRnJfJez1zhOsCvoHQXxTBBYisGSCA%2F4wFfhHtz74Z6I2EON%2BHdfp7TNLVVojDIMFyAoi53mAJEJky%2FAcQWcZIyEIwqOIfYvffgH8ftEkw3wkU%2FIa7s7R8mXs0ZLY59kGYJy%2BeumzbTHELZwe%2BvWWL7bWdSTB881EPmz%2BRfhdpyOul6Dj2p7VxRVLy52n6qxx3T5Opbpn7MWqyEQPK6i%2FmskmavDD7KVtErhK%2FiDgDBWB0TovYS62EWDJp39619PNFIcRloZEljue5XG8F4TD41u2jQoE%2FesXOdNwVkkK9Q9xiAfKUm4%2FvB7kau9JHkBd7wECnIOsrI2wNcLCKfveAvjred%2BPSsquZBdoYrmD6DVwuaSqf2JsFat%2Fm3f8WYvXL91VPTsuCfuaK%2BqKilcNfKmiPJsCn7LE5mjo4iWaDqcReUoplNg%2Fv0BKYp6Gqf%2FIIgVxC8ZzG8ELhYvTNtddp9kgBbpDIU1jNbm%2FZxeypiLVmmk5hh43lTtLfeP2Lsok0Vias%2FmBnUbekNX308aXYYR1XhK3lA8dnJDJGoi1WY%2FBFxGhasoY5FU1Ft5DQJKpWm1tds8kC2opqKnvLzC5n%2F69BjqkAWNwFFHBRfauWZ90EbLbB%2F1qQbX1yQa%2FrvFB0%2B1T9qyhs8H%2Fn%2BP2otN2ZIF0xlt92EK07HONF2OPca5lQHXFsqcASFaquDsveisRFCmaDU5G1ajIPhteIsLN6BoPSYNaRP4%2BpvuEGgc9HN3qtIs4G2lO7sol%2FxxB42cCgr5vT5M5A4ckPBp%2FV0PBII21PzjB0%2FCRyN5PIZfmFk2keM52GHRdxwrZ&X-Amz-Signature=d9b1425c3f3e06c12f639cda80d6429e91a198618274e15d4235c096ece63acd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
