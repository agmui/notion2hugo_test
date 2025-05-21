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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GCE3NVG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQD6lle3Nwq%2Fgmc0TMxERWry9Bv8GlwgVYnVDSUsY0rfNAIhALL5lGhCe%2FFQHl%2BAfJ6Qq%2FmgybFylC8ji%2BAMiYxHfuJoKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxqzFGzDzAnjBx6lsq3ANTVRHbH24LpdwEMgNQsXjaqqKotoGnv%2FCe9Wb5%2Bw1pqghoZbc6GAz3YohINFROeo0Ifb17HEnvr9vg3eTb6sQ76b5DgW6V7kUI9WdtZtpx7foXiKnwd9oGySSaH3TioXs0XZqWAm8c2YAsOCH0Wugx3vOKUhgwIayKMzh%2BADGOiP%2FV15H57rDmzEpQF9DBBqfgCONQ77MrMYeOPhIp9POn7WJNlU%2BztDTpqwhniudI5%2BWNtpDKIRubd9%2BzCnJxMen7Q50XCB2oDrDHMWtwviEZ5U5dZBAw0rMVPxWCxSnwrdx5gzJPpyWf9Oi8vE%2Be3zHtT2FM8bzz7a78XFy%2FphNYD2fC%2BSe8Rw4l9NDSgQZGVFLNz4ZRU4c%2FfkRs8aCahm20LYawi%2BbswVtlQk7zQzIbMaebwxutjk8f%2Ft50Fd0u5Qa4JtKtny6FlP70OLPjdp4oH%2Fy4DrHktJSj8pupbUToF85UykLpDu7qOvJIaPGP1wdVX2MINixWb9S4jz6%2BEZ%2BWaAasuLkKDlXuUnqt5oqjepw0%2ButYJkrvGvybNH69brR4QSKTDuR1veGGBoEn1JRvaen2mfJkX%2ByJM%2BpcbmPGT0DJZsxfWQkIXmaS7m3J86jQBiHW%2F52hw0JcGTCo1LbBBjqkAa7trOsVfb6Sf%2Bkh2yVPendRiywLlazTKNu2S%2BqAyEe1SNnVOiBqxDhMO%2FZC11eUydT9OcOz7Pt4ZgSWY1c1%2FHa7yt1FpWqnrcA1XfaZo4lQ6umfQw8sz%2FCF6TU9%2Bi1whW5v13tBU78%2FyBLORNDYIaqxQ9GMSHtoqiDnYfbcIyG3R4yMaxIhvyOmtdF5r%2F0Z4RJ2Ri20M1tJVEU0EaQkOc4%2FeLgD&X-Amz-Signature=28593019ee771c6dffe1af6481bce7b2e734fe913cb5c5bf9f617008c8d8251c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GCE3NVG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQD6lle3Nwq%2Fgmc0TMxERWry9Bv8GlwgVYnVDSUsY0rfNAIhALL5lGhCe%2FFQHl%2BAfJ6Qq%2FmgybFylC8ji%2BAMiYxHfuJoKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxqzFGzDzAnjBx6lsq3ANTVRHbH24LpdwEMgNQsXjaqqKotoGnv%2FCe9Wb5%2Bw1pqghoZbc6GAz3YohINFROeo0Ifb17HEnvr9vg3eTb6sQ76b5DgW6V7kUI9WdtZtpx7foXiKnwd9oGySSaH3TioXs0XZqWAm8c2YAsOCH0Wugx3vOKUhgwIayKMzh%2BADGOiP%2FV15H57rDmzEpQF9DBBqfgCONQ77MrMYeOPhIp9POn7WJNlU%2BztDTpqwhniudI5%2BWNtpDKIRubd9%2BzCnJxMen7Q50XCB2oDrDHMWtwviEZ5U5dZBAw0rMVPxWCxSnwrdx5gzJPpyWf9Oi8vE%2Be3zHtT2FM8bzz7a78XFy%2FphNYD2fC%2BSe8Rw4l9NDSgQZGVFLNz4ZRU4c%2FfkRs8aCahm20LYawi%2BbswVtlQk7zQzIbMaebwxutjk8f%2Ft50Fd0u5Qa4JtKtny6FlP70OLPjdp4oH%2Fy4DrHktJSj8pupbUToF85UykLpDu7qOvJIaPGP1wdVX2MINixWb9S4jz6%2BEZ%2BWaAasuLkKDlXuUnqt5oqjepw0%2ButYJkrvGvybNH69brR4QSKTDuR1veGGBoEn1JRvaen2mfJkX%2ByJM%2BpcbmPGT0DJZsxfWQkIXmaS7m3J86jQBiHW%2F52hw0JcGTCo1LbBBjqkAa7trOsVfb6Sf%2Bkh2yVPendRiywLlazTKNu2S%2BqAyEe1SNnVOiBqxDhMO%2FZC11eUydT9OcOz7Pt4ZgSWY1c1%2FHa7yt1FpWqnrcA1XfaZo4lQ6umfQw8sz%2FCF6TU9%2Bi1whW5v13tBU78%2FyBLORNDYIaqxQ9GMSHtoqiDnYfbcIyG3R4yMaxIhvyOmtdF5r%2F0Z4RJ2Ri20M1tJVEU0EaQkOc4%2FeLgD&X-Amz-Signature=3c0ac685a37b4641b1d39f00d3a672cb8b3006ccdf6c14e488a17a72df81f0b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
