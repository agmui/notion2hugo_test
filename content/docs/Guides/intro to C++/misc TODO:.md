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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC2H3N32%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEQb3I43BUEpn1cMK2vjs1KTC3d9S5l677a5ApJCHXW1AiEAjmmpLI79OY00hCmYkHBuTvxFQK68IFzZ06MfZUSokHgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfJ0NIZtz%2BOT1Ov6CrcA%2BF5Jf5i88lfDeOWZcxwK0hGsqKrXN0e1k8EdxSzRFyb0eXbqWxW7zFV82VAE2F81HXey3hMaBQ8GFUqWEeCs63hgiPXJWGZIBxiAgIMRb6mZ6lHCMIGMuuRemZU%2FAk5cHhyYCXSnQVylkye98s3TzQoVUY2cCgjx7EMcDPtq6iGiNTkY6NKplDS0PViAY%2F28XQz%2Fg3hYcrl7HNTLFphDOEDGKkR34dgMsddnONa3rXyFZ8oW43sT8OMv9nYMoX%2FW8jRIkhCh7Cqz6RicbU7FibXfEHkcw0tU10vovGplSoryspUycziWV25HfVghsFqxeYO%2BI4rRnNArnSQ7ZPskV09pzC4yYyWqwgGQaq%2F%2FQrQ2rRrzvQ2%2FxmAsVSMA2gCmu4NoA8OY5%2Bai3toe0dsfLfI7JwCKEIkwlRx19ucX22y3XCkySpSKLiVOlY%2FpGtfgIXN1s4YXCPA4lGCC2INamxLQAITd%2FKzs9s%2FGG%2BNhR8fQFyX9%2BX5oSRbb7txAvxQrTiXbBnGE8Fn%2FZGlySuGRU3dgHxbIE3XDf1YIz1TuaUldj7YHyoxzhDqX5ZS2baXdilGFmEn7xu3xHuNLcMB52I9%2FXeuD8CRi7J5OOM%2BizIo2tWsQCIijxI1P8mhMJaa6sMGOqUBSIKzZn13%2FVERJX5jXuborcKWHd6TfaW3IZXM70IjIJq88yvyylDWs6rwPFFCDOgP0ECyGLWoGCA2TCS88F9YDHva8olSNhozsYcCCTFsrYon9Wfhc54eE%2FmnfSSToGTU8YQW31PWwGrQZYd3MLlpFOf07Ary88lLsd50OVdyfWoZJ4ElbAbWT0RgGHkYgAyc8Hfid9%2FFwop7qfOPsZvhpPfpMmyg&X-Amz-Signature=d03b58dd6a88fb45db7350b829bd17c4c4dd70d5986574e1ededfdf10488c2b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC2H3N32%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEQb3I43BUEpn1cMK2vjs1KTC3d9S5l677a5ApJCHXW1AiEAjmmpLI79OY00hCmYkHBuTvxFQK68IFzZ06MfZUSokHgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfJ0NIZtz%2BOT1Ov6CrcA%2BF5Jf5i88lfDeOWZcxwK0hGsqKrXN0e1k8EdxSzRFyb0eXbqWxW7zFV82VAE2F81HXey3hMaBQ8GFUqWEeCs63hgiPXJWGZIBxiAgIMRb6mZ6lHCMIGMuuRemZU%2FAk5cHhyYCXSnQVylkye98s3TzQoVUY2cCgjx7EMcDPtq6iGiNTkY6NKplDS0PViAY%2F28XQz%2Fg3hYcrl7HNTLFphDOEDGKkR34dgMsddnONa3rXyFZ8oW43sT8OMv9nYMoX%2FW8jRIkhCh7Cqz6RicbU7FibXfEHkcw0tU10vovGplSoryspUycziWV25HfVghsFqxeYO%2BI4rRnNArnSQ7ZPskV09pzC4yYyWqwgGQaq%2F%2FQrQ2rRrzvQ2%2FxmAsVSMA2gCmu4NoA8OY5%2Bai3toe0dsfLfI7JwCKEIkwlRx19ucX22y3XCkySpSKLiVOlY%2FpGtfgIXN1s4YXCPA4lGCC2INamxLQAITd%2FKzs9s%2FGG%2BNhR8fQFyX9%2BX5oSRbb7txAvxQrTiXbBnGE8Fn%2FZGlySuGRU3dgHxbIE3XDf1YIz1TuaUldj7YHyoxzhDqX5ZS2baXdilGFmEn7xu3xHuNLcMB52I9%2FXeuD8CRi7J5OOM%2BizIo2tWsQCIijxI1P8mhMJaa6sMGOqUBSIKzZn13%2FVERJX5jXuborcKWHd6TfaW3IZXM70IjIJq88yvyylDWs6rwPFFCDOgP0ECyGLWoGCA2TCS88F9YDHva8olSNhozsYcCCTFsrYon9Wfhc54eE%2FmnfSSToGTU8YQW31PWwGrQZYd3MLlpFOf07Ary88lLsd50OVdyfWoZJ4ElbAbWT0RgGHkYgAyc8Hfid9%2FFwop7qfOPsZvhpPfpMmyg&X-Amz-Signature=93f40a0a46fc7850d01659e13cb6dac1f714ce019c10abd5d7e58dc40bbcadfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
