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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3FKZ6M%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T170950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2B27a69QxcHuOEWy%2BSFSUH9%2FBsxN80zD32GTJ78JM13AiB3OT4LLyBvDQ17UkiWoa61q6gwaQbUJjxYWUeOH35MGir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMoNLbOt3u37bI6fd7KtwDPf21s1sffWVgTLVBYUUP3BjN2kHk6XDSE0bQS1OF1b7DQfufgEghKwK%2FGPst%2BxJkDH5mZaCCW%2BcDyBF2xLNd30I%2FKxrsG0UrNEJga2Qb1zigCfzzHGYNze%2Fj1yeS9TUGGCoAGAZs6pQgIjgIe7fRiWp8Vs3SadQBjYlTTCt5QkYJ0krR8tsOChhZjeHte%2BvfTDrm%2Ba5b0o3RGS2yDL6RNgOs06Iwosb2Eaiw9Vw6kZqwl8RErJUeCoZcuf25nf0SQIDTD4VSM8ysnjDSnqW7D7Danses1GN5sYOT9qrRxUb0XnX51iXJtKPutkuZZe5zR2EzY3nxDBfjJqbRbd06WNqWrHHQt2corLv7zwbUzNCjdLbYhFr4qfWzbcppLqO1BygbalGntjJREHUtU1sfj71iZg4rQId628VOPnvTsto39RDX5se4rZzVivqAF1kvsJdSkmerJd9LVSdzqfof6lbz%2Bsio%2FlXLhutziyu%2B5TALfKq6eE7Gc7RFW0rUPhKScb6nJvPJrcM8IfrV12o3Lo%2B%2Fmdua9EH5laOUZm%2BFPqErppKT6OBrDqM3EKL%2BFGOWwDmag3OxzwkLmYf5P%2F%2BLqme4g5bkCYcbm4Mo%2BFwTOKUbDZChumabmrK%2FJr8wvLXGwgY6pgEqd0EgubZl4eW72Q0I0gL5OifGJiFfaCypJ0EE0xGUFQSp4Zp2racZL%2Fen%2FxvjkvwgQiaQcvkt5mym1h2g9n9fbSRM7az1LpRQvU2zrHQNSlVz7J9cXdOV852pmyVLe2xawYobMpa8QJrmvy9EKrZ%2BwCHPwHdFFWUivWzgAKYD3oCelmG9eV2xPLV0OZFljpwzi1qq%2BlF3XQ6uncL2y%2FvMCDNnIcuj&X-Amz-Signature=9c755c4ebd522c95af15ed3d230adf42e9d401dab1f8f14c0d254db520ab7f09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3FKZ6M%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T170950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2B27a69QxcHuOEWy%2BSFSUH9%2FBsxN80zD32GTJ78JM13AiB3OT4LLyBvDQ17UkiWoa61q6gwaQbUJjxYWUeOH35MGir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMoNLbOt3u37bI6fd7KtwDPf21s1sffWVgTLVBYUUP3BjN2kHk6XDSE0bQS1OF1b7DQfufgEghKwK%2FGPst%2BxJkDH5mZaCCW%2BcDyBF2xLNd30I%2FKxrsG0UrNEJga2Qb1zigCfzzHGYNze%2Fj1yeS9TUGGCoAGAZs6pQgIjgIe7fRiWp8Vs3SadQBjYlTTCt5QkYJ0krR8tsOChhZjeHte%2BvfTDrm%2Ba5b0o3RGS2yDL6RNgOs06Iwosb2Eaiw9Vw6kZqwl8RErJUeCoZcuf25nf0SQIDTD4VSM8ysnjDSnqW7D7Danses1GN5sYOT9qrRxUb0XnX51iXJtKPutkuZZe5zR2EzY3nxDBfjJqbRbd06WNqWrHHQt2corLv7zwbUzNCjdLbYhFr4qfWzbcppLqO1BygbalGntjJREHUtU1sfj71iZg4rQId628VOPnvTsto39RDX5se4rZzVivqAF1kvsJdSkmerJd9LVSdzqfof6lbz%2Bsio%2FlXLhutziyu%2B5TALfKq6eE7Gc7RFW0rUPhKScb6nJvPJrcM8IfrV12o3Lo%2B%2Fmdua9EH5laOUZm%2BFPqErppKT6OBrDqM3EKL%2BFGOWwDmag3OxzwkLmYf5P%2F%2BLqme4g5bkCYcbm4Mo%2BFwTOKUbDZChumabmrK%2FJr8wvLXGwgY6pgEqd0EgubZl4eW72Q0I0gL5OifGJiFfaCypJ0EE0xGUFQSp4Zp2racZL%2Fen%2FxvjkvwgQiaQcvkt5mym1h2g9n9fbSRM7az1LpRQvU2zrHQNSlVz7J9cXdOV852pmyVLe2xawYobMpa8QJrmvy9EKrZ%2BwCHPwHdFFWUivWzgAKYD3oCelmG9eV2xPLV0OZFljpwzi1qq%2BlF3XQ6uncL2y%2FvMCDNnIcuj&X-Amz-Signature=e54cb2f029d9450f7ad6ac45e42fde3acd415c7c03cff90b3f1deaf48f798e0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
