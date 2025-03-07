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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHKVJHU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6dU%2Fbk5B7MQC%2FO5Nl7j6TLDowrxi14QUZpdghKH%2B5ogIgASfTWGsZ2hu4YBdeEyN9zmXZQWLmgTwLNuhpvH2g5TQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCjbhKB8CoU1Vxpz0ircA0geI4jPPpBbNRAK1F9K3MRLhegqenllLBuUUwA6CNNt%2Fnz4ky%2BMfTuOZRmhho7LHoe1qnW0SRPH4XGNSh8PJ%2BdnayJdPUxCLSnXtuINmiFUGyZ6tj0zo4mdQhaTRCDbxdoyvUDql2OusNueNdJQTCOJDtD5H%2FEcfqibtmKPZZj0lfphZVXcv%2FcWm%2FW2xUjuPrxEuGvXC4KtYcssusAXmr1dBHbG%2FUbbmo46P4M33O4GjbPqxHQRmjjqpcK%2BbctB4m%2FJXgD1fpS2Rjso22bpzNHIUq7ZcLcYURzFttOEZ%2B874heqgbeGB8gEp5%2FPe2%2FYRcu2oN1VeG0PNtvbjNkHdwLb8U1cxAcE88EZzvpJzu8DWp2m3UR7uLX0F%2F6O7eu8sjj4EKzV861tEzcvXnCQsY0z32EkSeWBW%2BLQznxSyBN%2BYAsSrf6uRQiiIfpJsVQ%2Bai8bxewGXQqXPUOAcOSrIOyJcaokJi%2FLwRg5OsDg%2BhfLMD%2F9mzESOLX76269ovuAnBoJjURsS%2FYS193hqIQkTGBVUpPqPTrJsw%2Fxs1k%2FG8%2BkaFzue1x7oLp3dg3DkiZrNqoDpygVvN6zLTXR2%2FmbEWE%2BXIRLydR%2By7YlneRLO%2F5G8elNLymuU74%2FTEbuMKmnqr4GOqUBRcFg3z%2BC1oCujYXA9Zzm%2FsT1YpFu7OtmmyE7y017gMPAgPGjzPpvrAsmXvSeZviggClvCNiMZI5b0AZDT0905tFAzUf%2FkxXpXzJLnRyxU%2FMJVMJ2eULr7jIWBciZ6r5ywUuMd4jkegVt%2BOmc0vKcTO2GZ8adqDUn5lMu3xtc%2FFa3PWzaEiKu1TiX33c%2BpcwMB4WL05tE12hjcADkZHmCGXlaZMwS&X-Amz-Signature=a6d5f993039196390a8fb8db04d4684ebc4a5b445151512000f9bc8ae8b21cf0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHKVJHU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6dU%2Fbk5B7MQC%2FO5Nl7j6TLDowrxi14QUZpdghKH%2B5ogIgASfTWGsZ2hu4YBdeEyN9zmXZQWLmgTwLNuhpvH2g5TQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCjbhKB8CoU1Vxpz0ircA0geI4jPPpBbNRAK1F9K3MRLhegqenllLBuUUwA6CNNt%2Fnz4ky%2BMfTuOZRmhho7LHoe1qnW0SRPH4XGNSh8PJ%2BdnayJdPUxCLSnXtuINmiFUGyZ6tj0zo4mdQhaTRCDbxdoyvUDql2OusNueNdJQTCOJDtD5H%2FEcfqibtmKPZZj0lfphZVXcv%2FcWm%2FW2xUjuPrxEuGvXC4KtYcssusAXmr1dBHbG%2FUbbmo46P4M33O4GjbPqxHQRmjjqpcK%2BbctB4m%2FJXgD1fpS2Rjso22bpzNHIUq7ZcLcYURzFttOEZ%2B874heqgbeGB8gEp5%2FPe2%2FYRcu2oN1VeG0PNtvbjNkHdwLb8U1cxAcE88EZzvpJzu8DWp2m3UR7uLX0F%2F6O7eu8sjj4EKzV861tEzcvXnCQsY0z32EkSeWBW%2BLQznxSyBN%2BYAsSrf6uRQiiIfpJsVQ%2Bai8bxewGXQqXPUOAcOSrIOyJcaokJi%2FLwRg5OsDg%2BhfLMD%2F9mzESOLX76269ovuAnBoJjURsS%2FYS193hqIQkTGBVUpPqPTrJsw%2Fxs1k%2FG8%2BkaFzue1x7oLp3dg3DkiZrNqoDpygVvN6zLTXR2%2FmbEWE%2BXIRLydR%2By7YlneRLO%2F5G8elNLymuU74%2FTEbuMKmnqr4GOqUBRcFg3z%2BC1oCujYXA9Zzm%2FsT1YpFu7OtmmyE7y017gMPAgPGjzPpvrAsmXvSeZviggClvCNiMZI5b0AZDT0905tFAzUf%2FkxXpXzJLnRyxU%2FMJVMJ2eULr7jIWBciZ6r5ywUuMd4jkegVt%2BOmc0vKcTO2GZ8adqDUn5lMu3xtc%2FFa3PWzaEiKu1TiX33c%2BpcwMB4WL05tE12hjcADkZHmCGXlaZMwS&X-Amz-Signature=1806ab4bb451fe1d0c6e381b03b0e03da31f3ffe23b406e71223cb23ccc74ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
