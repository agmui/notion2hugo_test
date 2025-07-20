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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE75TPLJ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAoW8BWL2Rq6o9%2BBGiLwsPs6330rl1pplxYQxBz9mWzWAiEA8TnZftW8okdZQAPzfGHK3lH%2BtpwjFOntyJ2O0Vv2B3AqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOm3NMuX1uo1hNpw%2ByrcA2j8QQ8Oo0z5jKYrI6rO5FtagIiILZQ1hPCcE3xVHbOuBFtgF522kTmUW8I0RlItC%2FpkaGslVY4bz%2BikWasflRdzbWAmQ2wC2ZVszYLZ2n13lQw2qdAFwVzLhj0j7qwleeNdM1l3pXPgTM3ua%2B0SlVBC55wb1TsQtfR9F94eEo6L%2FynPT%2FLRIlqCBDzSrYo%2Bje5y4c8kVS%2BcVE2Okn5%2Bw4OIdaL2EEpsz98jkfjHc3XRtlWDN%2FC2OyoTOLlJbqWGtzuDiIe9Gq1WxOJMwVWirh4w499v9%2FJqTJZBTZvaphEEiomt5Q%2BxPD2T1CSI55TrS97E3Hjjrmr0BKykdgK6rrEoVvs5VKUe29uWp%2BNzT4MoXKNmCbTgcyJt%2BoP7CgC%2FLuDQf%2Bed590WxpgSKKZQ7NHdSlDhc98VdD048ZogfLunyQ%2B212dmhFzvExVra1Rnw6I6TQjZ3qxx2jF94noacFFme8T2LvtDwsFfvDgHNxydSILaDJn%2BNE5IDFxlaEErEG5uz54YH3qFX%2BmWUViXkxBeFjpevj1sjqaMs%2BmA684B18%2BMoelVuHujZhAmFJBoMv2WiVlIkdX%2BNumRkPuKH%2FvpYPBPnXjjOp3VOortN%2Fq3FoHC2rCMVqXnXbdnMPu18sMGOqUB6Q%2Bt1XKYAEFUi3ui7bwj0maE2jUAsDJ2CRK5sSIjeLoPhPrLf1%2Bp24G3s9hF4A83ItBS96hMTzpdqeIbQZbkyfMaUsDnQNJCVRNMzZFkYxZ%2FFVwCSmOzssmN1NuU5mJdRN88eWX4YsILjF4sc8ct%2BfxNLN9HJwrwx8hzkqyxLrxVb0LxEJxIWvQCTEmDCXFyhzSflYhyG8WOrPMoz0o9ATo9%2FgtW&X-Amz-Signature=c81d4649b9775c112e71c38e1b68da5b8824d0433ef4ce9961a58bcca489cd8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE75TPLJ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAoW8BWL2Rq6o9%2BBGiLwsPs6330rl1pplxYQxBz9mWzWAiEA8TnZftW8okdZQAPzfGHK3lH%2BtpwjFOntyJ2O0Vv2B3AqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOm3NMuX1uo1hNpw%2ByrcA2j8QQ8Oo0z5jKYrI6rO5FtagIiILZQ1hPCcE3xVHbOuBFtgF522kTmUW8I0RlItC%2FpkaGslVY4bz%2BikWasflRdzbWAmQ2wC2ZVszYLZ2n13lQw2qdAFwVzLhj0j7qwleeNdM1l3pXPgTM3ua%2B0SlVBC55wb1TsQtfR9F94eEo6L%2FynPT%2FLRIlqCBDzSrYo%2Bje5y4c8kVS%2BcVE2Okn5%2Bw4OIdaL2EEpsz98jkfjHc3XRtlWDN%2FC2OyoTOLlJbqWGtzuDiIe9Gq1WxOJMwVWirh4w499v9%2FJqTJZBTZvaphEEiomt5Q%2BxPD2T1CSI55TrS97E3Hjjrmr0BKykdgK6rrEoVvs5VKUe29uWp%2BNzT4MoXKNmCbTgcyJt%2BoP7CgC%2FLuDQf%2Bed590WxpgSKKZQ7NHdSlDhc98VdD048ZogfLunyQ%2B212dmhFzvExVra1Rnw6I6TQjZ3qxx2jF94noacFFme8T2LvtDwsFfvDgHNxydSILaDJn%2BNE5IDFxlaEErEG5uz54YH3qFX%2BmWUViXkxBeFjpevj1sjqaMs%2BmA684B18%2BMoelVuHujZhAmFJBoMv2WiVlIkdX%2BNumRkPuKH%2FvpYPBPnXjjOp3VOortN%2Fq3FoHC2rCMVqXnXbdnMPu18sMGOqUB6Q%2Bt1XKYAEFUi3ui7bwj0maE2jUAsDJ2CRK5sSIjeLoPhPrLf1%2Bp24G3s9hF4A83ItBS96hMTzpdqeIbQZbkyfMaUsDnQNJCVRNMzZFkYxZ%2FFVwCSmOzssmN1NuU5mJdRN88eWX4YsILjF4sc8ct%2BfxNLN9HJwrwx8hzkqyxLrxVb0LxEJxIWvQCTEmDCXFyhzSflYhyG8WOrPMoz0o9ATo9%2FgtW&X-Amz-Signature=fc2196732c240c74b0847a8934da307dcfbeb5089cb656cf78f8ab65f0fc6f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
