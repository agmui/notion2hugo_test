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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MX7Q2TX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEHgcF7pw1pj2%2FiEbDMg5A0UmTs%2B4X81oLGCXAphC6LNAiBuXogdQvzyQnlVfLPzQ8LNK14hBDcBs6ZxrZqc1Gtd4CqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcdn%2B6ikvYqanJH2FKtwD0jcdq97WQ%2FfzOeqhgSuGRVuf9YuOoWXzni%2BgggWLkxeSela4%2FA2TOmWHy0%2F6Z%2FL4Bu9eVuvPX1LLFY4SaRB6K7O5WWu65Kuglojf1oIHxLRHZcq%2FzeKHh1lEWzv4zHRMRsKENxmz5ereby4Z3smftRANqc2YxppC353V12D1Arrk%2BfqCL6HowWpYSlREG%2BwtsBs620I6j0RX66dsRyT6b5lmP0VmWNHa6IEhhFlZW6e4d7%2FimFSRhHsMbw63zuDPGvzi%2FVh0JtpYubR0PFMRdGJKmYUi1VOxRAfB4pyFIrLJ88UbiDaDtrRSlicrrDncRcJwmiChqa5pU%2Bs8cv6%2BDn7m0LENsVra6YYLVgY1yUVHDhiDbCbEJW5On3VYl5FFQkOxvvhY92ouj%2BDVvKHvHhVaDnIHVArB7IYfPOPZ%2BYppjmltxYho05JX0sVeXWtFhw3ZedW68AiA%2BRDu9GBXOwli0D3ybRLLTMbHGGYgYgm2mwkzucFK6rgfrOpYOt7DNaJIipxDEjnIsPD3xPDXIEienYGH%2F6mK%2FpI1%2FuG1IJFkbsZUdVvHsTzIAa4e7yjXuQI9cRh6BzbqU0NBC3mCYtIm3udor0GwYrGqjKh8ufD%2FdcsJ29BL8%2Blvxhgw3obwvgY6pgFoFbKZdkGEU%2BvWB3TNDkfWQB%2FbphQ3Eo7ny2MRy4wcQxHN14SEuHRxAzCu2PoYBxdBrC4b%2FfpSDXEYujkRn7RxvgzT0PB2kcHYgu3KQjidHuY3T%2FBJV2Xpqx12HA4noeFsqFgUcIzAWXAPMC7NlD%2F8NDfGAQWrpBRL%2FJhTqyhd3Uw6caX0DFKMbnetJyUdHnVvI%2BB3rLICg%2BLFr7mtQj%2FlREfj4Ggr&X-Amz-Signature=3a9bfafa4d1b65c74a435e9315f5926a2750200edd6c383d5a89f2a68d28608a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MX7Q2TX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEHgcF7pw1pj2%2FiEbDMg5A0UmTs%2B4X81oLGCXAphC6LNAiBuXogdQvzyQnlVfLPzQ8LNK14hBDcBs6ZxrZqc1Gtd4CqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcdn%2B6ikvYqanJH2FKtwD0jcdq97WQ%2FfzOeqhgSuGRVuf9YuOoWXzni%2BgggWLkxeSela4%2FA2TOmWHy0%2F6Z%2FL4Bu9eVuvPX1LLFY4SaRB6K7O5WWu65Kuglojf1oIHxLRHZcq%2FzeKHh1lEWzv4zHRMRsKENxmz5ereby4Z3smftRANqc2YxppC353V12D1Arrk%2BfqCL6HowWpYSlREG%2BwtsBs620I6j0RX66dsRyT6b5lmP0VmWNHa6IEhhFlZW6e4d7%2FimFSRhHsMbw63zuDPGvzi%2FVh0JtpYubR0PFMRdGJKmYUi1VOxRAfB4pyFIrLJ88UbiDaDtrRSlicrrDncRcJwmiChqa5pU%2Bs8cv6%2BDn7m0LENsVra6YYLVgY1yUVHDhiDbCbEJW5On3VYl5FFQkOxvvhY92ouj%2BDVvKHvHhVaDnIHVArB7IYfPOPZ%2BYppjmltxYho05JX0sVeXWtFhw3ZedW68AiA%2BRDu9GBXOwli0D3ybRLLTMbHGGYgYgm2mwkzucFK6rgfrOpYOt7DNaJIipxDEjnIsPD3xPDXIEienYGH%2F6mK%2FpI1%2FuG1IJFkbsZUdVvHsTzIAa4e7yjXuQI9cRh6BzbqU0NBC3mCYtIm3udor0GwYrGqjKh8ufD%2FdcsJ29BL8%2Blvxhgw3obwvgY6pgFoFbKZdkGEU%2BvWB3TNDkfWQB%2FbphQ3Eo7ny2MRy4wcQxHN14SEuHRxAzCu2PoYBxdBrC4b%2FfpSDXEYujkRn7RxvgzT0PB2kcHYgu3KQjidHuY3T%2FBJV2Xpqx12HA4noeFsqFgUcIzAWXAPMC7NlD%2F8NDfGAQWrpBRL%2FJhTqyhd3Uw6caX0DFKMbnetJyUdHnVvI%2BB3rLICg%2BLFr7mtQj%2FlREfj4Ggr&X-Amz-Signature=7e0e6a5120a2bc5700cfa1d79d457777988463de39a23e3374dada0c2c082001&X-Amz-SignedHeaders=host&x-id=GetObject)

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
