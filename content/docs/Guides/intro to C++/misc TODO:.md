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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MAJHVPK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBy9bZL6gcXi%2Bmi%2FONjkDAiKsBZHuqCusdjQVPZJogakAiEA8foBu%2BnrjA3mqu1rQaGSqOEolpoUDsoPF1YgV6%2BBhW0qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxU6tVjfNm1lzd20SrcA%2Bmdx65ADlpo6MfOhPpIEGUBQL5XVXgesaA6bZJpy8V5kWC7JAsPQuL8r4fxKHI9OUyMx2VolZyDfAQU1nuUB6hOjmWWZ0M2S3bgJGvt9Yh44oQjz66okDR%2FdnF7TxwaRM9hIfs8PoLCIDhLiAHvSHx5kP9pKMuuoSVbPTIHOSa4jK%2FCKBllEwM9ad4fn4AytyUiqMyIyxSNcUdnHW1y%2BBpmXe78UOFfy%2BYOJoYTXa89WOhK3RWhsUscgOx8eutMgE6%2FnFq9buQay7ZNLWgZPl2GxSXcter2EfxV63y3AEoT9SN5FAzNaMFU74I57NEAUi%2FF0q00FSYDmdTlH3AA7yhVFO06HodQc5OflFHjpduH8GYrS8vnOnxjXGmKRFQrzg6P9t5da1PjvUeIJClR6N7gTQyqcZq4ZWzapFOwojmvGdqeLcHsCl7ZFOjZeZZBUw0tICjOmMuaZPrR04NNlu34cPvUI8FGB2uIIXDWlpcZld77VecwEQ7vljEAgVFeKVUaTv%2BR08dMygnL45Js%2FD4gfCnzlhK7zv%2BWXGQRgSQ8ET1DBjBgjercRbMkSGDQ%2BOkhoNgC%2FDzt5Ed5C21q33JIfBitAxJt7btbegIA1kd7Oa8aPTz5jya1ki49MJq498EGOqUBeMy17wNSZjl12dolOm%2FVE3i3Ij1iFxc%2FCMQiFhPBgXQoMxiokb907Pmj%2B5sLejG32Afy6vD8rub51qoWidXk7y55FJ9v%2BQs9z7ioSugwanlRRxL1gLFkW7QVdHlT9%2B5%2BcJPxNV08ITmUx513Mpvj05la%2F%2BWH67GQbGLyKu6VRSbuJEHyZEGvBVcLm0CfGr8SrN09kWVyRLoiGlgOeZC0ZaZusadz&X-Amz-Signature=51651f9c921cc95fd84020f2d27f048ee5a5a84fab081bba48ccc967de11206f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MAJHVPK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBy9bZL6gcXi%2Bmi%2FONjkDAiKsBZHuqCusdjQVPZJogakAiEA8foBu%2BnrjA3mqu1rQaGSqOEolpoUDsoPF1YgV6%2BBhW0qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxU6tVjfNm1lzd20SrcA%2Bmdx65ADlpo6MfOhPpIEGUBQL5XVXgesaA6bZJpy8V5kWC7JAsPQuL8r4fxKHI9OUyMx2VolZyDfAQU1nuUB6hOjmWWZ0M2S3bgJGvt9Yh44oQjz66okDR%2FdnF7TxwaRM9hIfs8PoLCIDhLiAHvSHx5kP9pKMuuoSVbPTIHOSa4jK%2FCKBllEwM9ad4fn4AytyUiqMyIyxSNcUdnHW1y%2BBpmXe78UOFfy%2BYOJoYTXa89WOhK3RWhsUscgOx8eutMgE6%2FnFq9buQay7ZNLWgZPl2GxSXcter2EfxV63y3AEoT9SN5FAzNaMFU74I57NEAUi%2FF0q00FSYDmdTlH3AA7yhVFO06HodQc5OflFHjpduH8GYrS8vnOnxjXGmKRFQrzg6P9t5da1PjvUeIJClR6N7gTQyqcZq4ZWzapFOwojmvGdqeLcHsCl7ZFOjZeZZBUw0tICjOmMuaZPrR04NNlu34cPvUI8FGB2uIIXDWlpcZld77VecwEQ7vljEAgVFeKVUaTv%2BR08dMygnL45Js%2FD4gfCnzlhK7zv%2BWXGQRgSQ8ET1DBjBgjercRbMkSGDQ%2BOkhoNgC%2FDzt5Ed5C21q33JIfBitAxJt7btbegIA1kd7Oa8aPTz5jya1ki49MJq498EGOqUBeMy17wNSZjl12dolOm%2FVE3i3Ij1iFxc%2FCMQiFhPBgXQoMxiokb907Pmj%2B5sLejG32Afy6vD8rub51qoWidXk7y55FJ9v%2BQs9z7ioSugwanlRRxL1gLFkW7QVdHlT9%2B5%2BcJPxNV08ITmUx513Mpvj05la%2F%2BWH67GQbGLyKu6VRSbuJEHyZEGvBVcLm0CfGr8SrN09kWVyRLoiGlgOeZC0ZaZusadz&X-Amz-Signature=939a2442b0962f6a41e898fc4ca2f09c8c9b01ce5143b791dc38590af428f125&X-Amz-SignedHeaders=host&x-id=GetObject)

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
