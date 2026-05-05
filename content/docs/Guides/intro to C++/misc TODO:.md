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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMBSONJR%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPjx3OP%2BhXRq4kodJAZppxADfbide89fvCD0615Y%2Bc0AiBrc%2FPO632ZBucnK3DDnLuQKXZTYYSsi4KlSYHCEsvlcCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMF30tYc%2BKy8SjNWpTKtwDO%2B2rGUpEDeVW9w4XOFQIPXD8U%2Bfp%2Bv4utjg00W0dcInK%2BBYHwC%2BMbiI0sjLk0ziP1u9XuG4Ef0%2FFOW9prshdu%2BwJooZdYzA6JeER6yN%2BlZIz%2FM310k1ACgRuF54njULuc%2BDVNes9KLVEO%2Fyy%2FLFGQ2tR%2FEmmL0DHEKbKsp9aqM%2BJgJdMNVT7FT%2F%2BtJSDd9etPlNZP8%2B%2BpACz82OPKqRTaBQWygUYzvUq9BogYryGCWwPKNpE6oWzIVlhEhS7kc70n2IKbhi%2F9TaOti2LwB4jS6mmaTw7%2BMGl0i153%2Fj6FP7yAPddJOXZOOX1%2FsqQr8w5zfKZEDFyfaCPe1nNBa7wltvF52bjATvAoEuftSGukC%2FukJkUXklnW4DruroS30azyDJ58UDD6H2PM7qpsvkizg3jO2opHGxVwLKdhXzTPYWesj%2BC%2Bk9zYo2pfl0wvP8TMpKwIZbDmL9YR%2B0Xw%2FKR4t65AMWw%2FJap7rpiqS2jt3PGGov6AciVJEsDZ6oL3EpSq0qMnNqspWWiTHNgoqNM0d710pJZHlXSa7YJ7C2kCpoljaMWa4sw23mk3AeeV%2BIq0Bu7rl%2F0kc6PP96PkT3L2cHs%2BZXJiT9OBk1H3VgVaotcF0lv%2FzscLxkY7DMw3KXlzwY6pgFZntkKEEFuQWSenuCwno5VFcxMHI5COsR%2FXxhCUIPWwt%2FXqynW7MN24WXmd9NgxgFZsa21JbxYGVliM3WS5QxKGz%2BDWiqlj53F96pR18c5WkOYugcM5GAn%2BBNflsAv2RGYuNsWsCShflNxFcjWTyLLB5po%2FpvhaBHZI%2FZFKyfbzklKYVWYUDLo7xm1tdjsl3rSfac41BES4HxcOdSeZB86x2PvbO1G&X-Amz-Signature=cea6a1969f582cfd2d9512d4e8eb00ae63295f55f0de6358bbd546228b7196a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMBSONJR%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPjx3OP%2BhXRq4kodJAZppxADfbide89fvCD0615Y%2Bc0AiBrc%2FPO632ZBucnK3DDnLuQKXZTYYSsi4KlSYHCEsvlcCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMF30tYc%2BKy8SjNWpTKtwDO%2B2rGUpEDeVW9w4XOFQIPXD8U%2Bfp%2Bv4utjg00W0dcInK%2BBYHwC%2BMbiI0sjLk0ziP1u9XuG4Ef0%2FFOW9prshdu%2BwJooZdYzA6JeER6yN%2BlZIz%2FM310k1ACgRuF54njULuc%2BDVNes9KLVEO%2Fyy%2FLFGQ2tR%2FEmmL0DHEKbKsp9aqM%2BJgJdMNVT7FT%2F%2BtJSDd9etPlNZP8%2B%2BpACz82OPKqRTaBQWygUYzvUq9BogYryGCWwPKNpE6oWzIVlhEhS7kc70n2IKbhi%2F9TaOti2LwB4jS6mmaTw7%2BMGl0i153%2Fj6FP7yAPddJOXZOOX1%2FsqQr8w5zfKZEDFyfaCPe1nNBa7wltvF52bjATvAoEuftSGukC%2FukJkUXklnW4DruroS30azyDJ58UDD6H2PM7qpsvkizg3jO2opHGxVwLKdhXzTPYWesj%2BC%2Bk9zYo2pfl0wvP8TMpKwIZbDmL9YR%2B0Xw%2FKR4t65AMWw%2FJap7rpiqS2jt3PGGov6AciVJEsDZ6oL3EpSq0qMnNqspWWiTHNgoqNM0d710pJZHlXSa7YJ7C2kCpoljaMWa4sw23mk3AeeV%2BIq0Bu7rl%2F0kc6PP96PkT3L2cHs%2BZXJiT9OBk1H3VgVaotcF0lv%2FzscLxkY7DMw3KXlzwY6pgFZntkKEEFuQWSenuCwno5VFcxMHI5COsR%2FXxhCUIPWwt%2FXqynW7MN24WXmd9NgxgFZsa21JbxYGVliM3WS5QxKGz%2BDWiqlj53F96pR18c5WkOYugcM5GAn%2BBNflsAv2RGYuNsWsCShflNxFcjWTyLLB5po%2FpvhaBHZI%2FZFKyfbzklKYVWYUDLo7xm1tdjsl3rSfac41BES4HxcOdSeZB86x2PvbO1G&X-Amz-Signature=59221a885d23cfd835870a08e4accb8d70528fe7965ecec1256fbd2cbf88d1f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
