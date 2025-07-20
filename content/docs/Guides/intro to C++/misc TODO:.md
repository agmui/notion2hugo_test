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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VIQHRWY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdbyGHxni%2F5F%2FL%2FTmmjzf6grImxfBIhJZuvtrHtn2SxgIgSS9HscTH0WteXv7ymZUaZskGRR9GBJ5RsbyRnCBBTNsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8Q71b5tzkUTbrZuircA5yt1sqitSEXV5d4XPOpX4%2F2dS%2Fc%2FFwkJiAwOu%2BU4eugxi1GEEKi7oMU7lFurMpk%2FL7sqcGWL3GFiWTvqMWLw%2BDx8SHuoyC99vHh6%2FoOjhgNOFc1orhqLRqXssDKyzpH4LM1DpD9c3%2FDWN3NiTgc2k8k5IHZ1BiIX4YlkfVynkkVADAaAo3ofbD7NXJK7vJn6PpNIQGQkIUajmLjHSeUItgSSXHJjH2ltZa0%2BQcGv2CZCiH56MfFjBqcyomGI4OiGwj5ixK5tv1leGu64TXZdw7xAn8NbJJkBHc83bvuOaM9MDjHVNpAAjeNDMOmig9wKelFPU3qHXn6Xrl1iOqAfRdcrVU4ddRMMJfR3R8j%2FvjSgteERnplnHzokLyj4jgOcCUrsVpB84YbKothAdh7siKFPONLCCoTNtiG6rkh3tHQQRCmAvEXzsJ9amo%2FFvyETcrHn%2BvcAkfAnZhIfrlQGaBhmc203BJuUtjVNoRCdosgIrydm0GYmn%2F51IqZS4OQ09fCjOTVMwiGt2cbjU8wShheg0ya9siLHV7ADD8zkGZWQqQb4yPq1FhzSuVRkdF81CBRhE89bAu7JWjuCOPYtBUsMc2RLRPbiiuIlE3cBuVGMx9FfKHZc4FbyZ8oMJv278MGOqUBBk5ettb61nLvkB5ts%2FOn7M6w2a4rL0yF602zcjfCvmnI9QBfweeEgDH6XyuRniAlEChVmIQI%2FRrzJ%2B%2FKkW8eQBo26w2LJpfoJZfMfqBc1T%2FNjjaoB5tXUM8XEvFkoa88XZXN5h01FAy3XMBKyEIGQGNma%2Fwdg0yxDh5y5Y7tBmTBuUPk2Pr0BfQ%2FYisnvdWnszWk%2BwKdshvzDz44glRQPw%2BF9tKd&X-Amz-Signature=2c0400fb2c1e467a4f38dd47c9d85968fd40e6f813f3f204655ff753d3058b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VIQHRWY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdbyGHxni%2F5F%2FL%2FTmmjzf6grImxfBIhJZuvtrHtn2SxgIgSS9HscTH0WteXv7ymZUaZskGRR9GBJ5RsbyRnCBBTNsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8Q71b5tzkUTbrZuircA5yt1sqitSEXV5d4XPOpX4%2F2dS%2Fc%2FFwkJiAwOu%2BU4eugxi1GEEKi7oMU7lFurMpk%2FL7sqcGWL3GFiWTvqMWLw%2BDx8SHuoyC99vHh6%2FoOjhgNOFc1orhqLRqXssDKyzpH4LM1DpD9c3%2FDWN3NiTgc2k8k5IHZ1BiIX4YlkfVynkkVADAaAo3ofbD7NXJK7vJn6PpNIQGQkIUajmLjHSeUItgSSXHJjH2ltZa0%2BQcGv2CZCiH56MfFjBqcyomGI4OiGwj5ixK5tv1leGu64TXZdw7xAn8NbJJkBHc83bvuOaM9MDjHVNpAAjeNDMOmig9wKelFPU3qHXn6Xrl1iOqAfRdcrVU4ddRMMJfR3R8j%2FvjSgteERnplnHzokLyj4jgOcCUrsVpB84YbKothAdh7siKFPONLCCoTNtiG6rkh3tHQQRCmAvEXzsJ9amo%2FFvyETcrHn%2BvcAkfAnZhIfrlQGaBhmc203BJuUtjVNoRCdosgIrydm0GYmn%2F51IqZS4OQ09fCjOTVMwiGt2cbjU8wShheg0ya9siLHV7ADD8zkGZWQqQb4yPq1FhzSuVRkdF81CBRhE89bAu7JWjuCOPYtBUsMc2RLRPbiiuIlE3cBuVGMx9FfKHZc4FbyZ8oMJv278MGOqUBBk5ettb61nLvkB5ts%2FOn7M6w2a4rL0yF602zcjfCvmnI9QBfweeEgDH6XyuRniAlEChVmIQI%2FRrzJ%2B%2FKkW8eQBo26w2LJpfoJZfMfqBc1T%2FNjjaoB5tXUM8XEvFkoa88XZXN5h01FAy3XMBKyEIGQGNma%2Fwdg0yxDh5y5Y7tBmTBuUPk2Pr0BfQ%2FYisnvdWnszWk%2BwKdshvzDz44glRQPw%2BF9tKd&X-Amz-Signature=29018ce7c7f99aacf6710d115cf9c79263c9d125ae8282bc44467d0c48e09be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
