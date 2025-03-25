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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C6TFVDQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU2nJ3mvWevI4CLQgtrskxLz8Z1NHEoppd5y0wT68kLAIgfd%2FRYNU5Ok4bVdO2j0xQ5Tuz2CgKDKwDAZLYrGTnW%2BQqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4u6qOw%2Fex4vJojnyrcA%2BPWPF67N6Z5BoNt5fbbyg7gPZ6%2BpeYXrNSWmJZnw5tL%2BR8nUxh2x7vlm2SXv3RiPzO60fstrl4Cl%2FWoCp4YEpME9h%2Fyg5EHohriYbtRi0jTL3pGnK7oWkQ5cRLdZq3ADgVm54ddj8VBmyWqf%2BNUsZJcd9W2q9cYn79uXgeOQIv%2Bc7yk%2FReFUxQXAg3DEKJ5Ub2APgy7F2n31acRHOesTKDpdTblswdcmBiUMWszkmGsCYqtdcUjmLdNgv6InMOd7XFhebr0w6vNhcZZTV77u4bnvsuLBkDLOeOjNY0rXdHATmfaHAcWkNHan9fazNPGgzi45e%2BTj61uC4G31bVbKB1F9RMhpUZbdw6RCEwDdVlwpidU4cvowxKq%2FjvQmVSZ7X3YLPz42d%2Fc3au5bVYZjGlUg41cRKEvSIcesbroXa0Pu%2BDWl7IGEznJMNpq4ibyBcyB0yyXUQ9QFMKXRiFE49resun74VxY%2BaYny11hnhKxPSUneyvVLEsmNLHbGkijKpWGFbylX23vYWTmIP6oiPuaM8AeJPUGQMglc4t0ght16Wj0gGV8Y7%2FvWubDH9OekGG25jCjYjU57K3ljHegyo8yo2DXMyLlHtUmollIj1yf7EHWiBtJ90yqeTi3MKuOib8GOqUBgeodOO3HjE1jB2ARYh6dmOq9FUAuD2fiq1IIghPgvcpFaKuGbrS4Gn4ltNquNt3NuyjtW%2BbhXgvWWnn82ekgonY3rCa9En2z%2Bel70R0ddBfcqyuNJfkWWDbKuGuZ8yZ0DlgBc1ez6ufXLFCPzcVXrlz6uhtqO4vv6PEK9h3TtxMTk%2BrIwfi1aqvjbEvs2gRpSuVWj2zLl0NgM6kjM5W78uOFycUO&X-Amz-Signature=ab92dd8dfbb2df417431fcc70ec6d7c024436642ac6f0ed07280cbaf89047fad&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C6TFVDQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU2nJ3mvWevI4CLQgtrskxLz8Z1NHEoppd5y0wT68kLAIgfd%2FRYNU5Ok4bVdO2j0xQ5Tuz2CgKDKwDAZLYrGTnW%2BQqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4u6qOw%2Fex4vJojnyrcA%2BPWPF67N6Z5BoNt5fbbyg7gPZ6%2BpeYXrNSWmJZnw5tL%2BR8nUxh2x7vlm2SXv3RiPzO60fstrl4Cl%2FWoCp4YEpME9h%2Fyg5EHohriYbtRi0jTL3pGnK7oWkQ5cRLdZq3ADgVm54ddj8VBmyWqf%2BNUsZJcd9W2q9cYn79uXgeOQIv%2Bc7yk%2FReFUxQXAg3DEKJ5Ub2APgy7F2n31acRHOesTKDpdTblswdcmBiUMWszkmGsCYqtdcUjmLdNgv6InMOd7XFhebr0w6vNhcZZTV77u4bnvsuLBkDLOeOjNY0rXdHATmfaHAcWkNHan9fazNPGgzi45e%2BTj61uC4G31bVbKB1F9RMhpUZbdw6RCEwDdVlwpidU4cvowxKq%2FjvQmVSZ7X3YLPz42d%2Fc3au5bVYZjGlUg41cRKEvSIcesbroXa0Pu%2BDWl7IGEznJMNpq4ibyBcyB0yyXUQ9QFMKXRiFE49resun74VxY%2BaYny11hnhKxPSUneyvVLEsmNLHbGkijKpWGFbylX23vYWTmIP6oiPuaM8AeJPUGQMglc4t0ght16Wj0gGV8Y7%2FvWubDH9OekGG25jCjYjU57K3ljHegyo8yo2DXMyLlHtUmollIj1yf7EHWiBtJ90yqeTi3MKuOib8GOqUBgeodOO3HjE1jB2ARYh6dmOq9FUAuD2fiq1IIghPgvcpFaKuGbrS4Gn4ltNquNt3NuyjtW%2BbhXgvWWnn82ekgonY3rCa9En2z%2Bel70R0ddBfcqyuNJfkWWDbKuGuZ8yZ0DlgBc1ez6ufXLFCPzcVXrlz6uhtqO4vv6PEK9h3TtxMTk%2BrIwfi1aqvjbEvs2gRpSuVWj2zLl0NgM6kjM5W78uOFycUO&X-Amz-Signature=65cff1de6f2ad0d72c8ba1e6e0b8399d5f6e441cc941e9e7c7de19a273390004&X-Amz-SignedHeaders=host&x-id=GetObject)

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
