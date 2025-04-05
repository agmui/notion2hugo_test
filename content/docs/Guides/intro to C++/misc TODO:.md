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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667A7YWCU%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0xXSpMKLZgToskZ6n0WT%2FGzMvinSudmZ0dRC%2BBluwLgIgb%2FNvyVfGeQc0gS%2BM6CxMVF2W70QQ5xRbbx0CKMdg2GUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFEFEAMoWIwkhF%2BuXircA3YS%2BpZbxtor%2FEb3W5oezpLi0wBnX6XvZ8xyiCxYmaFTSfT1YQEo9mmwbbEqikz9N1rqRa2LZKloZNYMe69IcHcaHjg0Hwi2lRxS5SyxFfUTKd3jrcmeXDVnSlT%2FJUZOtpRV76BYAvJi1oIqn%2FUjHBlcCz%2F6flRLOmSKYqGZh9HXH9G0QkNagR0UDnoHbkUvevcG%2BFl5HLo1peaPr85U%2Fo9iIsyG1Q7jsWIDT52CQ7RAERldnyzbohlbTwR0ZSMRBAwG7tYidjG93868RI68niVZci4L3NZu%2BWUksWraig66M5ftIoZNGgbg4qhipL95j79nY91RTMTchGp8lbblr66ybv%2BpXqzxGqxeF2sBuROKmFjZlr6uQzsPEckqhrGnIzLsgUXfu%2FeCgTYnpqiIldRQA7Tnbigo7rtvIie8Hbqs6mQrKecZbWg1bPwXbvE2Uc6RNI9B8r%2F6pbC7W1DoCHBI7d0UcDZjZQhq654S1C2aEAdqoD3aBVtsRWc3SDSodwRHfnuLhGYdxXego5xV4iLnDOOhKJwksgY6kMSV315mVSzNVQj6veYkcaYpLriXJqNEQqPmaxmGGJqxrDiUGBpl6gpZsl9is2WVY0hTUHiCCwvCwTlpVO%2FbpOMXMK3Cxr8GOqUBGmfAzkaQ40JBTeOJgiwEPqFDu6oTe3CF57ylIBScGGkNiM8YWiEXtm9%2Fz1M0m4m2fHLG6H45hoQj9Jh39ECdH1hmdN%2BiSXECyucmodV2sYl6SiAEpnlaDeOzP8CgqOqiiQBq8Kn%2BQl7yQyXEd7yfQ4zzbyW40wi08%2B4Ntc3vO%2BkJf3tT9%2FvYLiGJu3hUG0h3UtaYO1i6TIhozGlB3S2Y3J2%2FVoDB&X-Amz-Signature=1b112bce70e95e0e8fb1dc1917488ffa53f96eda4755cc67b7f90c0c3d0c4ea7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667A7YWCU%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0xXSpMKLZgToskZ6n0WT%2FGzMvinSudmZ0dRC%2BBluwLgIgb%2FNvyVfGeQc0gS%2BM6CxMVF2W70QQ5xRbbx0CKMdg2GUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFEFEAMoWIwkhF%2BuXircA3YS%2BpZbxtor%2FEb3W5oezpLi0wBnX6XvZ8xyiCxYmaFTSfT1YQEo9mmwbbEqikz9N1rqRa2LZKloZNYMe69IcHcaHjg0Hwi2lRxS5SyxFfUTKd3jrcmeXDVnSlT%2FJUZOtpRV76BYAvJi1oIqn%2FUjHBlcCz%2F6flRLOmSKYqGZh9HXH9G0QkNagR0UDnoHbkUvevcG%2BFl5HLo1peaPr85U%2Fo9iIsyG1Q7jsWIDT52CQ7RAERldnyzbohlbTwR0ZSMRBAwG7tYidjG93868RI68niVZci4L3NZu%2BWUksWraig66M5ftIoZNGgbg4qhipL95j79nY91RTMTchGp8lbblr66ybv%2BpXqzxGqxeF2sBuROKmFjZlr6uQzsPEckqhrGnIzLsgUXfu%2FeCgTYnpqiIldRQA7Tnbigo7rtvIie8Hbqs6mQrKecZbWg1bPwXbvE2Uc6RNI9B8r%2F6pbC7W1DoCHBI7d0UcDZjZQhq654S1C2aEAdqoD3aBVtsRWc3SDSodwRHfnuLhGYdxXego5xV4iLnDOOhKJwksgY6kMSV315mVSzNVQj6veYkcaYpLriXJqNEQqPmaxmGGJqxrDiUGBpl6gpZsl9is2WVY0hTUHiCCwvCwTlpVO%2FbpOMXMK3Cxr8GOqUBGmfAzkaQ40JBTeOJgiwEPqFDu6oTe3CF57ylIBScGGkNiM8YWiEXtm9%2Fz1M0m4m2fHLG6H45hoQj9Jh39ECdH1hmdN%2BiSXECyucmodV2sYl6SiAEpnlaDeOzP8CgqOqiiQBq8Kn%2BQl7yQyXEd7yfQ4zzbyW40wi08%2B4Ntc3vO%2BkJf3tT9%2FvYLiGJu3hUG0h3UtaYO1i6TIhozGlB3S2Y3J2%2FVoDB&X-Amz-Signature=a4fe05ed4ffe2f6c74add777ea447a42adad291bfad9247dc65e41b4ce5a33f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
