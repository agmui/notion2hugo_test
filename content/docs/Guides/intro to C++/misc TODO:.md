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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPZMGT7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICRKNt93sdWza2t%2BN8Xp%2BuWVWhDHFTCcpjCyP8sg3ID5AiEAnxZWE2CDX297Omm9e6k2%2B8dt4MCzpDkaMSR0xDu9phQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKC5bTySNdYtegMl3CrcA027C9h2Qrcdz2HLghDhBGJpGOhSuMCAxqKPGpmOWYRTsVL6IEjkHC9To66ctK9W8Fzjw3WM%2Bz403BdzepMcXwR1e0Q2oRJy2Ws%2B5Y4JJH%2FstMrqSD51%2FxJ24bmK8%2F7k5cozmT%2BmNoEm7a14JmtYYalGL8mfFujvSrPvwYxsDE3lSk1Dbp2khUAENT9fNNHo6Cp%2BiRKPGJ1bOQuH5rvraB9I798c5u2EJcbAo23Mm%2FOz6LYzscOFPlrihDjkMOnqNT9Bu6yCkQ2%2BedDvp3Pi5SuAucIkWXXBKCkqeGxoLHHP8%2FQIxc4mi6F4l8aFFh1q6DIOS1K%2B4TyNffZIyDfOELDOcuSsNrzz4cWnR5%2BuCD2BRrMeUHjsfcml22qmtemtWPyW0ctLYwPftpFi3TopMRTAetfycLBL7lE4zJ9qUeihU875sWT1kfUPqMU8GtN4oyWi82K1%2BwDgmLGw0Qb%2BPFEVCFgJxxq0RpkRoXu4%2B%2BI6vwnFelJrMJski4NzAq4nqh1KY76%2FjXcsdhiy2r136j51vrOnxPdTVJ3k1%2B1ySMx9s%2Fg5VIaPmwWQ7a3zxP4H43vn3wqryJBpBNC%2FRnHAo90E1EWmXxoyJguh%2BAN1u5gv008kkIOnNIZR6kU7MKiijsAGOqUBhfuaWiiBkIH71aKfHvkGEvYaYdPvGiuZ0RMdVYAjGgHq0fyz4WaSq24NpL7AV47W1n%2FVET1nqz3GoXdRpVLlcpJUP%2BvF4aURxj9fnUbUlJpCllULfYZv0nN%2B%2Fc7LkUUfsuM4EQyQ2d%2FEX4gmh%2FJaX5Wqy7Tg8wbG7ePwgoXvSSgrph35%2Fi8u8%2BEF%2FCuvSrIL51WHHTKVwHpz5DDXfZdj01PjVx7k&X-Amz-Signature=577e3440a98db6bcc65c69e11c33f4e91f6746152ff97af9b0a5fa32a028b679&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPZMGT7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICRKNt93sdWza2t%2BN8Xp%2BuWVWhDHFTCcpjCyP8sg3ID5AiEAnxZWE2CDX297Omm9e6k2%2B8dt4MCzpDkaMSR0xDu9phQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKC5bTySNdYtegMl3CrcA027C9h2Qrcdz2HLghDhBGJpGOhSuMCAxqKPGpmOWYRTsVL6IEjkHC9To66ctK9W8Fzjw3WM%2Bz403BdzepMcXwR1e0Q2oRJy2Ws%2B5Y4JJH%2FstMrqSD51%2FxJ24bmK8%2F7k5cozmT%2BmNoEm7a14JmtYYalGL8mfFujvSrPvwYxsDE3lSk1Dbp2khUAENT9fNNHo6Cp%2BiRKPGJ1bOQuH5rvraB9I798c5u2EJcbAo23Mm%2FOz6LYzscOFPlrihDjkMOnqNT9Bu6yCkQ2%2BedDvp3Pi5SuAucIkWXXBKCkqeGxoLHHP8%2FQIxc4mi6F4l8aFFh1q6DIOS1K%2B4TyNffZIyDfOELDOcuSsNrzz4cWnR5%2BuCD2BRrMeUHjsfcml22qmtemtWPyW0ctLYwPftpFi3TopMRTAetfycLBL7lE4zJ9qUeihU875sWT1kfUPqMU8GtN4oyWi82K1%2BwDgmLGw0Qb%2BPFEVCFgJxxq0RpkRoXu4%2B%2BI6vwnFelJrMJski4NzAq4nqh1KY76%2FjXcsdhiy2r136j51vrOnxPdTVJ3k1%2B1ySMx9s%2Fg5VIaPmwWQ7a3zxP4H43vn3wqryJBpBNC%2FRnHAo90E1EWmXxoyJguh%2BAN1u5gv008kkIOnNIZR6kU7MKiijsAGOqUBhfuaWiiBkIH71aKfHvkGEvYaYdPvGiuZ0RMdVYAjGgHq0fyz4WaSq24NpL7AV47W1n%2FVET1nqz3GoXdRpVLlcpJUP%2BvF4aURxj9fnUbUlJpCllULfYZv0nN%2B%2Fc7LkUUfsuM4EQyQ2d%2FEX4gmh%2FJaX5Wqy7Tg8wbG7ePwgoXvSSgrph35%2Fi8u8%2BEF%2FCuvSrIL51WHHTKVwHpz5DDXfZdj01PjVx7k&X-Amz-Signature=4d682aae7b920dd4fda5977fa3813422018ef1f9af87d452f8c3f86894cbeb3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
