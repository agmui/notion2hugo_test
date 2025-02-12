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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJBNCXI3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbZpJIqEjKr3p6cNOE34Wd7J5SkhYU%2FKWdi9a%2FMd2giAiEAyPrAO6tPNtvnV6ue536zZXIA3%2BAK4cfvT6Zb0Wj3Fg0qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2B4SdYcWGlfrZ7aqCrcAwyFiCSyjOuGqsg7YEaERr49ibNvmIObp9tKOjinr9xyP%2BmnF4asgvb8QUnwQEDt22CYDepdZHNYLju3eA%2F2feFctnUlFTq6DF%2BZ87XYwZ007gKCPUDxfd3kCTFIv4%2B1RW9pI1dFJYke34420x7dPKvQ2OhAgwwaNOatWo%2BHAys7Hva%2Fc5Tum5MKv59ErAch%2Fu4RZ2qeH4P6L0aIr0BXqx8dt1hExtLPr15mUKhzBtU9ZBX%2BdcDtc416E1YTuTA%2FNObm%2B2xXkYGtdO5B3B%2FX7NISWObeAn0DdPjuBVh3%2BH1nsbXcH9gI0KG2j7OznTEGTVwQOaDWU%2FI3I6blmRs5BKz%2BNfulUrxFJD4TawklI5VR80juX2XuAzl%2FLQi%2F3TXKHLvknwcX3L8ec6Nrm5%2BCFL2b1l87aOr5Vt16%2FWQEMgRQidh9axCc0Q1PnBtRqvMB4BXRhiRXGmQpxGms%2FA0Pn3dqFVlwjtWvypCBPNsP71ZZdS%2FYSiZcs7xdo4AtJLbf6VtU6BClaQwDuahH2PPBYClfC4m6BdyVXJPwirIGAB9IfyI2jWQUpTwhUXMshIO7mAK9WKVwjjrabthznTKVy0bemG%2BuKQRSzBDHrk%2BAQGB1p%2ByGcOryRqlHwdhgMO%2BNtL0GOqUB9epj0eyipve4lT5Kxn49hM5xWEbkw8vRA1DD%2BDp2xAxi4WKboqO6%2FDUkSJ58NExepFF9Sl78JRt%2BFA7vdjqzxoG0IpjRNeARwu%2B%2FuFNBcO4KNGCzdUENEj5Orz%2FCSsbyzzYEWgg6j5p56CsfrNwuxeXDSWPAcsuWdIAtCFvIX4vcY%2BLjeaszgpD3jzAokzX64c3%2BjxuEjnA%2BWaYks6OdPw2iS7P%2B&X-Amz-Signature=3c35e0fca568cab2c50aa60fddf669c078979496ad1e9909c56a2a47ea4a76e3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJBNCXI3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbZpJIqEjKr3p6cNOE34Wd7J5SkhYU%2FKWdi9a%2FMd2giAiEAyPrAO6tPNtvnV6ue536zZXIA3%2BAK4cfvT6Zb0Wj3Fg0qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2B4SdYcWGlfrZ7aqCrcAwyFiCSyjOuGqsg7YEaERr49ibNvmIObp9tKOjinr9xyP%2BmnF4asgvb8QUnwQEDt22CYDepdZHNYLju3eA%2F2feFctnUlFTq6DF%2BZ87XYwZ007gKCPUDxfd3kCTFIv4%2B1RW9pI1dFJYke34420x7dPKvQ2OhAgwwaNOatWo%2BHAys7Hva%2Fc5Tum5MKv59ErAch%2Fu4RZ2qeH4P6L0aIr0BXqx8dt1hExtLPr15mUKhzBtU9ZBX%2BdcDtc416E1YTuTA%2FNObm%2B2xXkYGtdO5B3B%2FX7NISWObeAn0DdPjuBVh3%2BH1nsbXcH9gI0KG2j7OznTEGTVwQOaDWU%2FI3I6blmRs5BKz%2BNfulUrxFJD4TawklI5VR80juX2XuAzl%2FLQi%2F3TXKHLvknwcX3L8ec6Nrm5%2BCFL2b1l87aOr5Vt16%2FWQEMgRQidh9axCc0Q1PnBtRqvMB4BXRhiRXGmQpxGms%2FA0Pn3dqFVlwjtWvypCBPNsP71ZZdS%2FYSiZcs7xdo4AtJLbf6VtU6BClaQwDuahH2PPBYClfC4m6BdyVXJPwirIGAB9IfyI2jWQUpTwhUXMshIO7mAK9WKVwjjrabthznTKVy0bemG%2BuKQRSzBDHrk%2BAQGB1p%2ByGcOryRqlHwdhgMO%2BNtL0GOqUB9epj0eyipve4lT5Kxn49hM5xWEbkw8vRA1DD%2BDp2xAxi4WKboqO6%2FDUkSJ58NExepFF9Sl78JRt%2BFA7vdjqzxoG0IpjRNeARwu%2B%2FuFNBcO4KNGCzdUENEj5Orz%2FCSsbyzzYEWgg6j5p56CsfrNwuxeXDSWPAcsuWdIAtCFvIX4vcY%2BLjeaszgpD3jzAokzX64c3%2BjxuEjnA%2BWaYks6OdPw2iS7P%2B&X-Amz-Signature=ac3cc67bcd535996841995ce637347abb0208ead1e6ba5c71581bb56cd97a1d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
