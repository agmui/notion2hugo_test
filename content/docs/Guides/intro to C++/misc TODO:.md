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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LUVTRYY%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDIaaGhKipDiWsBZ4m8yn4KcT%2BiA%2B1DNNVr41IAfV0UWAiBA%2B0cgC5mdBTXCqXvurAjlBvqybysJTaaqqydXc7apvyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIM75WTCNp2c1xTh7VsKtwDOhxEKqDVy0X%2BfOUUnax44vnhjp4C1IzPR%2FJjz93EGqomkjKLZA1jh6e6nAW%2FpRBzNFNHwiSTHEoh4uNoXIueQDz7TaeSW7DUwKxIFB6YTUFfT9gUjuBGTa6QwqEPM%2FbidPFTl70xGOSuaryQKPKhfwnhBiXnDj8GDADp7Vr%2BFB1bFLbre2FJclu0rmWVzN3xAIBv%2FRCknqfF%2FG39j2ygbqO2IZ%2FQeMYBf4PvVOMmCmKgm7hI%2FxskimB7ZpD5wOBoZMwMxpCY0%2FCTQ2SlTzvp%2FUcPUsWZz%2Fz785%2BM3eY9zZEguCsXN7zEuAflsr2LubCOpYLRf3U8GmAuFccxHsDCa%2B7KX0a2GrKpF2qIepWnPWobYjiXyOtAwoIKeGGdkKbmWHdD0w4UsZ9%2BlChSbKtA5UOkW2kp4S7zr7LkmE%2FDtd1zmWR78SEyVmcE4ISyXqktwdrnpNbj0rAxyOgALOKmzs%2FwH4%2FmTrNeVDLUdAENpswkYsvtc7QFcoayiWA7%2FG7Z6OXYXfa%2BIq22kLQaVfO5WAqlzQbMNrHKmhb6lNnZnAu1U6vfHQYsErbspjl0wHQdP0DwYRTsXHKmTDe8g6S9%2FPWszocEvY3j3TYLqzYjVJzAeKDlukFhddZV978wkeqFvQY6pgFDRZ0rAsQ3WnCeAxuuuyYjl3DdapJwoUyWFA%2FVzxosbeQbb%2FuZht7pafPfUgeeQy5wZIPT8Cy6R69NtWXewUWv0VyW%2FdBIFi9Pc09BtzFdw5Xied4Sl5vge5aods4Vpz806m35m5Q1n6IX5UBM88Inptm3E%2FsmPD5DICygNY58tTZPhUc7SUvfXA8ZJSczzzD%2BEJKOVuUin53INtTm7D4pGnlHwdc4&X-Amz-Signature=fd62c24db75fbe55ccd8885bc633aefd5f3e7dbd0512951974e5362a3e3bda04&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LUVTRYY%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDIaaGhKipDiWsBZ4m8yn4KcT%2BiA%2B1DNNVr41IAfV0UWAiBA%2B0cgC5mdBTXCqXvurAjlBvqybysJTaaqqydXc7apvyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIM75WTCNp2c1xTh7VsKtwDOhxEKqDVy0X%2BfOUUnax44vnhjp4C1IzPR%2FJjz93EGqomkjKLZA1jh6e6nAW%2FpRBzNFNHwiSTHEoh4uNoXIueQDz7TaeSW7DUwKxIFB6YTUFfT9gUjuBGTa6QwqEPM%2FbidPFTl70xGOSuaryQKPKhfwnhBiXnDj8GDADp7Vr%2BFB1bFLbre2FJclu0rmWVzN3xAIBv%2FRCknqfF%2FG39j2ygbqO2IZ%2FQeMYBf4PvVOMmCmKgm7hI%2FxskimB7ZpD5wOBoZMwMxpCY0%2FCTQ2SlTzvp%2FUcPUsWZz%2Fz785%2BM3eY9zZEguCsXN7zEuAflsr2LubCOpYLRf3U8GmAuFccxHsDCa%2B7KX0a2GrKpF2qIepWnPWobYjiXyOtAwoIKeGGdkKbmWHdD0w4UsZ9%2BlChSbKtA5UOkW2kp4S7zr7LkmE%2FDtd1zmWR78SEyVmcE4ISyXqktwdrnpNbj0rAxyOgALOKmzs%2FwH4%2FmTrNeVDLUdAENpswkYsvtc7QFcoayiWA7%2FG7Z6OXYXfa%2BIq22kLQaVfO5WAqlzQbMNrHKmhb6lNnZnAu1U6vfHQYsErbspjl0wHQdP0DwYRTsXHKmTDe8g6S9%2FPWszocEvY3j3TYLqzYjVJzAeKDlukFhddZV978wkeqFvQY6pgFDRZ0rAsQ3WnCeAxuuuyYjl3DdapJwoUyWFA%2FVzxosbeQbb%2FuZht7pafPfUgeeQy5wZIPT8Cy6R69NtWXewUWv0VyW%2FdBIFi9Pc09BtzFdw5Xied4Sl5vge5aods4Vpz806m35m5Q1n6IX5UBM88Inptm3E%2FsmPD5DICygNY58tTZPhUc7SUvfXA8ZJSczzzD%2BEJKOVuUin53INtTm7D4pGnlHwdc4&X-Amz-Signature=6791ed5577f8eefbaf5ff53d4c2a5b714705e8b31945bae0fdc1aebcf2190306&X-Amz-SignedHeaders=host&x-id=GetObject)

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
