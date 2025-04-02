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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7NU2DR%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAYARteJ5BHrqT5RXWU8FCYeiFAywzrqzwYR4ZzlQXbPAiEA9zl1dHc7lFF4EFHD4Mg5E4qCT44Bcbow6e6EhX75QvMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNru6%2BdcE9HvBD1c4SrcA3XspG0fiBcUxgUSsKjalPJryrQyp%2FAaYiKZFZAiPLOh2f3lDk%2Bj%2FVOhGRhXOd74sHUr7k2P80z3g8L67Y3UxVDVhXNogpWVt348ofq3kwnamy0yY7II7F189H9%2BrypTPpyTnTJH1z2kFwZtnYhetolxI1slVET8F0GpBjzRswzmEn%2BMe%2BqwealgOzLv358eforVEarc3ayl8opAGsYOzsRxuk4ze8fkho25BvMcerCItJG0EzAh8R6gAM9yZQY1nAq4IHJ%2F0bvbQVPyveJQ0XugUcIHxyBkmHhc6afVVBmzjBvazuMNHh1Z08GA4hqTXd4l71Ufp%2F5njT5hs%2Bpi1KSA5iPqockB7VObd2zBEOhpENRVq6smBB8DKYoXzHmdpzGyZxwREA2MV%2BQmhPQH3771Sxz6uIFVhzQZeQRHl7obtZGFLYVQgLn6e18aWEk9FoqIOcJdHSZpm5LYa5AS%2FNfi3TKmd6mRg9Zv6H6IFUnsCSB10jVqBziDAqNAHwSw43qvVFRQ77uwYm1eetbdIxNUwX5N5FSvFKHz2Qic1%2BWh6JoXco1Yjqz%2Fbkwego%2B7QjzQu2M5iVRCNra%2Bn79RMtr6O42a7S%2BqJIn57CDKG8MOVldzOfOKNx6W8oiUMNeltr8GOqUBWGy9y3qRU1XGRNX68RES6aMnFCb1PsDP0rp4vWyaTbWBCltdZ4tV59zht4CDbguC9IfDagV9VuBq0U%2BUy3IscBUx6XptptpXcsUsAhvNobeHR4%2BjzwvZN1LC%2FAntbgKhJmxHIbxe47CbcMZR%2B5BLqtcUgbPO7ZRIU55O8%2B%2BbP5vPeR%2FK2RAVA9WPtogTT5Yg00oSuvAw4OYFSYYldtpz8ZnXXBEm&X-Amz-Signature=011f013ee822ab6114637f53529beabc7ad833265ed7c7c43e67dfaa441e3453&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7NU2DR%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAYARteJ5BHrqT5RXWU8FCYeiFAywzrqzwYR4ZzlQXbPAiEA9zl1dHc7lFF4EFHD4Mg5E4qCT44Bcbow6e6EhX75QvMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNru6%2BdcE9HvBD1c4SrcA3XspG0fiBcUxgUSsKjalPJryrQyp%2FAaYiKZFZAiPLOh2f3lDk%2Bj%2FVOhGRhXOd74sHUr7k2P80z3g8L67Y3UxVDVhXNogpWVt348ofq3kwnamy0yY7II7F189H9%2BrypTPpyTnTJH1z2kFwZtnYhetolxI1slVET8F0GpBjzRswzmEn%2BMe%2BqwealgOzLv358eforVEarc3ayl8opAGsYOzsRxuk4ze8fkho25BvMcerCItJG0EzAh8R6gAM9yZQY1nAq4IHJ%2F0bvbQVPyveJQ0XugUcIHxyBkmHhc6afVVBmzjBvazuMNHh1Z08GA4hqTXd4l71Ufp%2F5njT5hs%2Bpi1KSA5iPqockB7VObd2zBEOhpENRVq6smBB8DKYoXzHmdpzGyZxwREA2MV%2BQmhPQH3771Sxz6uIFVhzQZeQRHl7obtZGFLYVQgLn6e18aWEk9FoqIOcJdHSZpm5LYa5AS%2FNfi3TKmd6mRg9Zv6H6IFUnsCSB10jVqBziDAqNAHwSw43qvVFRQ77uwYm1eetbdIxNUwX5N5FSvFKHz2Qic1%2BWh6JoXco1Yjqz%2Fbkwego%2B7QjzQu2M5iVRCNra%2Bn79RMtr6O42a7S%2BqJIn57CDKG8MOVldzOfOKNx6W8oiUMNeltr8GOqUBWGy9y3qRU1XGRNX68RES6aMnFCb1PsDP0rp4vWyaTbWBCltdZ4tV59zht4CDbguC9IfDagV9VuBq0U%2BUy3IscBUx6XptptpXcsUsAhvNobeHR4%2BjzwvZN1LC%2FAntbgKhJmxHIbxe47CbcMZR%2B5BLqtcUgbPO7ZRIU55O8%2B%2BbP5vPeR%2FK2RAVA9WPtogTT5Yg00oSuvAw4OYFSYYldtpz8ZnXXBEm&X-Amz-Signature=74a8cb5e7545b5dc18ed40613651b2f4899d3f56d0e50f168871b0e60733bae8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
