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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LKRLMAU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpmzOWPQsrPfdahqP7l7tGxbGzqk7pm%2BeoACFP%2B%2BYXmAiEAubuCfnGwC5Y8IqbAlXDnc9CU7HrXj0uiQqgq20kHwxYqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjJxncsyje9tk6CwCrcA%2BaQGANRwclfWm36v5wJiBXsvay2O1aVHeLoC7Fk81uciW4tnpWIsXd0MrqikzXv2Y6Swe0xUty%2BGIuR25aQ%2F9JwGQMUmtktYtNVCm0HdGfGttsQSyVf9%2BRH%2F58Bd0jfu6TmAbUMqPr55mftUWk%2Banio5juVcSgyHni0sLtb%2BULXduDxsmobsKSqsGfNhLBwMfVHQ34yt8H5OnosK2NDbItXEoTrXcgE4BvgcF7%2BzdHetH%2F3b0XJ9FX3FRUmk8KSSMwA8Nccp3xF7ma3TmDDKrEihQRjX%2BDb5aiBJ2Mr2TvgSGApwoCHoEUUzafo01a7hy5lxqrF6ZO%2FFZNwh%2FkjxZmz2CxEX27fOb%2BuJ6YiwQPdctXEdWrwGdwVdwen%2B2vd%2FQeUxXxycQM7RE86vBG2EIvEqlaMOjVEthMZPJJBc5iUvoMIHHUEZIIrQS1tBQEA8HoWYrDqMqanRrYbgcI7gw1aPNBuB9VSMQ00QXlULFEZOcr6PPY4sxMc0ATaTAT8ByDBY%2BtmhOe582feO8KDWftw35kdmcms8PVA4Q75tgAXE5SDbbS4kJSE5r1O%2BJo5%2BirVuundq%2BBETFAzEdsZwlhOuNKKTILo7q7M4IH%2B84iSIlQixyODgPnZAS3MMPfX5MQGOqUBx38mtAtCvIHM01R9bk9AKum3aXJLUhtpDT6P0zTKeTUegTM3lGYk6zG%2BhnRNl2z9mc6JrZZS7cf%2BhGi4QHM0F7d1fcmSa7gIzQJT0cZuN0HFFITtRCWf1%2BVCIbgptcfdtq6943i9%2BvlGAPM52JtRNxiddcHH8%2BTbWRDdGprmlE7s2VRw3GWmd5sQEiF6C%2F2QiMwpCRmGqBwwDUjf4cutUo0dY3vX&X-Amz-Signature=543816d892b666cb65dfbec4772ad02823db853c7c9cb0f560a2c49eca508ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LKRLMAU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpmzOWPQsrPfdahqP7l7tGxbGzqk7pm%2BeoACFP%2B%2BYXmAiEAubuCfnGwC5Y8IqbAlXDnc9CU7HrXj0uiQqgq20kHwxYqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjJxncsyje9tk6CwCrcA%2BaQGANRwclfWm36v5wJiBXsvay2O1aVHeLoC7Fk81uciW4tnpWIsXd0MrqikzXv2Y6Swe0xUty%2BGIuR25aQ%2F9JwGQMUmtktYtNVCm0HdGfGttsQSyVf9%2BRH%2F58Bd0jfu6TmAbUMqPr55mftUWk%2Banio5juVcSgyHni0sLtb%2BULXduDxsmobsKSqsGfNhLBwMfVHQ34yt8H5OnosK2NDbItXEoTrXcgE4BvgcF7%2BzdHetH%2F3b0XJ9FX3FRUmk8KSSMwA8Nccp3xF7ma3TmDDKrEihQRjX%2BDb5aiBJ2Mr2TvgSGApwoCHoEUUzafo01a7hy5lxqrF6ZO%2FFZNwh%2FkjxZmz2CxEX27fOb%2BuJ6YiwQPdctXEdWrwGdwVdwen%2B2vd%2FQeUxXxycQM7RE86vBG2EIvEqlaMOjVEthMZPJJBc5iUvoMIHHUEZIIrQS1tBQEA8HoWYrDqMqanRrYbgcI7gw1aPNBuB9VSMQ00QXlULFEZOcr6PPY4sxMc0ATaTAT8ByDBY%2BtmhOe582feO8KDWftw35kdmcms8PVA4Q75tgAXE5SDbbS4kJSE5r1O%2BJo5%2BirVuundq%2BBETFAzEdsZwlhOuNKKTILo7q7M4IH%2B84iSIlQixyODgPnZAS3MMPfX5MQGOqUBx38mtAtCvIHM01R9bk9AKum3aXJLUhtpDT6P0zTKeTUegTM3lGYk6zG%2BhnRNl2z9mc6JrZZS7cf%2BhGi4QHM0F7d1fcmSa7gIzQJT0cZuN0HFFITtRCWf1%2BVCIbgptcfdtq6943i9%2BvlGAPM52JtRNxiddcHH8%2BTbWRDdGprmlE7s2VRw3GWmd5sQEiF6C%2F2QiMwpCRmGqBwwDUjf4cutUo0dY3vX&X-Amz-Signature=c8121dab2005dd38d1172710166499fee3efa0d095dc367da85194defbd1ba57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
