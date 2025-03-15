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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3FPEZUJ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAV8kS9LGkV52Zs%2B%2BzPt%2BfyCG54snuYROTf5jxKyxaVCAiEA0VpgceDQkcfKonEVOdaAuTg9fXgwsd%2Fx%2BU7xx8dwhwkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKWu7Iak%2FgF5eFMJOircAztEGTlXUVm9HUUNPRqKKcOpJPsdHfnKbNzz9yxbwaT7rAanKBFIH3yAhbBxhWIiRMg0css3LpRvzDvkwFSMlYyeCdSj43DkzLNZLKXBWmafvnufzhxD%2BcHiqmb%2FOfk5MsERClRuomVCh17UMaqE1WvQ7478kppJLtFvvN9yPbbfd%2FBD4D2uO00thU7PpE6Lg%2FawFoC76HdqX4j5bp54qLCrdUAypjtW6uA6shClU2LXQIlg5rrdkMIl487IN1i%2F1OEGNVsSdAkiFowUm4Czt%2Fb0hMRiuHX3Rr6M1enUylaAZbFZ1ORAiFdbU3gHY%2F9PW0HwvuDeruk0meTksDdtgzOs4gwD1jZyiTouLJfFHD%2F%2FnU%2BYyBXObilfijuJQ7utC5uorj3M4KYxMbQBVR6cAvtdSwPZ1SJs8Vhg9yFesfKFIlkWnTapdMbFntcFBedR1sUUpYKlR7sQVP%2ByUB3KX2BOviEAstj82W1VplXFwB5WC539PO%2FCXF81UBoJEWWQAAjzmMcONwnJ%2BitpdXr80%2FuBrps8B%2FY1zZdBwQXPRmqS7pQ%2Bw011SQj5FgU2bO2ghi%2FNK9iqevNsqu3CAvgchEBe35j3N6y6vLL%2FzzgrH7peI8gpKecn9wSThWNEMKzE1L4GOqUBzS6xyhBeT00cDkTcfYijWZD1xJZjJtqg4OMMvjIfB8vKc%2F3OAZzZLST1mE4vrZSAazl2hLO39Bdp88RVn6yRV6sQsNWm1zJOqx7aHRLt2M88J1bBaYxTwo1bmE6wISzZHa7cTwisUHcmZs5C6hAkBvpGGuze0TYuThel2qhbUkzQwf7Uncfv2ZjIIHQ6sqmhsFHXy5fCaj6p4r2AYPaON6eCDJ%2B8&X-Amz-Signature=0668f0abb9f6237b7ce2c5f44c51c82d3621cd9be1e69659081ee0f28b7d4d43&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3FPEZUJ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAV8kS9LGkV52Zs%2B%2BzPt%2BfyCG54snuYROTf5jxKyxaVCAiEA0VpgceDQkcfKonEVOdaAuTg9fXgwsd%2Fx%2BU7xx8dwhwkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKWu7Iak%2FgF5eFMJOircAztEGTlXUVm9HUUNPRqKKcOpJPsdHfnKbNzz9yxbwaT7rAanKBFIH3yAhbBxhWIiRMg0css3LpRvzDvkwFSMlYyeCdSj43DkzLNZLKXBWmafvnufzhxD%2BcHiqmb%2FOfk5MsERClRuomVCh17UMaqE1WvQ7478kppJLtFvvN9yPbbfd%2FBD4D2uO00thU7PpE6Lg%2FawFoC76HdqX4j5bp54qLCrdUAypjtW6uA6shClU2LXQIlg5rrdkMIl487IN1i%2F1OEGNVsSdAkiFowUm4Czt%2Fb0hMRiuHX3Rr6M1enUylaAZbFZ1ORAiFdbU3gHY%2F9PW0HwvuDeruk0meTksDdtgzOs4gwD1jZyiTouLJfFHD%2F%2FnU%2BYyBXObilfijuJQ7utC5uorj3M4KYxMbQBVR6cAvtdSwPZ1SJs8Vhg9yFesfKFIlkWnTapdMbFntcFBedR1sUUpYKlR7sQVP%2ByUB3KX2BOviEAstj82W1VplXFwB5WC539PO%2FCXF81UBoJEWWQAAjzmMcONwnJ%2BitpdXr80%2FuBrps8B%2FY1zZdBwQXPRmqS7pQ%2Bw011SQj5FgU2bO2ghi%2FNK9iqevNsqu3CAvgchEBe35j3N6y6vLL%2FzzgrH7peI8gpKecn9wSThWNEMKzE1L4GOqUBzS6xyhBeT00cDkTcfYijWZD1xJZjJtqg4OMMvjIfB8vKc%2F3OAZzZLST1mE4vrZSAazl2hLO39Bdp88RVn6yRV6sQsNWm1zJOqx7aHRLt2M88J1bBaYxTwo1bmE6wISzZHa7cTwisUHcmZs5C6hAkBvpGGuze0TYuThel2qhbUkzQwf7Uncfv2ZjIIHQ6sqmhsFHXy5fCaj6p4r2AYPaON6eCDJ%2B8&X-Amz-Signature=e7484923bb4922dc51391ea244882841d9f56d2a21ae7354cdc1418eb308c341&X-Amz-SignedHeaders=host&x-id=GetObject)

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
