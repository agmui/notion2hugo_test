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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S43Z5KY4%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUKE3zy3CU2iiijNHRtGvR2Gv%2Bfh81dTMgpdeW3TNRQwIhAK4iiBLBdlFqlBLCaroU6C7fazIyJ8wbp0ljNhJvi7VPKv8DCFMQABoMNjM3NDIzMTgzODA1IgzshN6bamEImuGmMXEq3APmurlr4VRlGOh1Si2HV7DRmB0Ab9fPcbn1MeUdwbpQLvQqOWysQjTIzBlY2ZYvW%2BlhJGpKtdiGtugOT77CraEF%2FS%2FJ7pBcabMUxBxBSO%2FM5d%2FYjQntiK2xpWnqySb7mP10Crwu9WMZ1uGI8kvwEQsD16d6WjOL09OoLW5xqO%2Fe%2FHi82fMgsaRTaB3DPRcZ8ZXhUuQgwTJiNJSMgVnD0rLCR6un%2FTNKhDghx0B2MNvUjhUraNlixbJVvPN0SBHbquEHzTOU3EIBXnQ0BTrm0hTXIwKK84VLPUopDK3pH1N2UjkoK0Zp%2BfqJqPJwN3ySHI1m%2BA%2B%2BMwKv9RPkkCwCELyjs%2BruStcJY4segc9iXmwBtKaHEeO3yNfmvT8wTg1UcfwdwaII0tmCfeSOGgFxEQTC7RIg7AyNvIvRzeRRlyqE27lJHKd0zXiCFiXLXMXD4en0XBZ6N2CBmKJf4yzj7nkyIyHZzKLtXon6V9Td0GeXsB5Mp3ekT%2BxqbtNgyCHRWbSbTmpZ5c2gD8j7vNi6lNEPhEcGBcwzPDbaIZ2tcQUVJEP6LuTrvoLs77Z4vKPhMcgVZz91NqbWyOXc8b%2Bb08rDsarFqgCNbLrTvOpbuyM%2FUOzCpDRXuJ9spL7llDCc3J%2FBBjqkAT3Br0q8OlJ2Wl46exWVbmb5Tttc%2FtHJlZ6cVqJtl8kMN9ghzRvUM35GrdTCsLO9o33oS%2FjeRnNwV0%2BNlc7sbqvqNDk%2BuI9Ijkbx5wIUtl%2BzIXxbvUYgiU88yHGjWGJoNWFZMhWzAXGfHfJMhe96U4fIZMtHXzhVTepN%2FTcuAYp5a9TzuEPPKH%2BL3WI4M%2FH1ezFwz7w7Qqrz2PLCXX6eD9mMUiwx&X-Amz-Signature=b51d46d4a192d6a55391361db8eacf50e0b4d1b2b88cd39b4a8cb9e166290658&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S43Z5KY4%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUKE3zy3CU2iiijNHRtGvR2Gv%2Bfh81dTMgpdeW3TNRQwIhAK4iiBLBdlFqlBLCaroU6C7fazIyJ8wbp0ljNhJvi7VPKv8DCFMQABoMNjM3NDIzMTgzODA1IgzshN6bamEImuGmMXEq3APmurlr4VRlGOh1Si2HV7DRmB0Ab9fPcbn1MeUdwbpQLvQqOWysQjTIzBlY2ZYvW%2BlhJGpKtdiGtugOT77CraEF%2FS%2FJ7pBcabMUxBxBSO%2FM5d%2FYjQntiK2xpWnqySb7mP10Crwu9WMZ1uGI8kvwEQsD16d6WjOL09OoLW5xqO%2Fe%2FHi82fMgsaRTaB3DPRcZ8ZXhUuQgwTJiNJSMgVnD0rLCR6un%2FTNKhDghx0B2MNvUjhUraNlixbJVvPN0SBHbquEHzTOU3EIBXnQ0BTrm0hTXIwKK84VLPUopDK3pH1N2UjkoK0Zp%2BfqJqPJwN3ySHI1m%2BA%2B%2BMwKv9RPkkCwCELyjs%2BruStcJY4segc9iXmwBtKaHEeO3yNfmvT8wTg1UcfwdwaII0tmCfeSOGgFxEQTC7RIg7AyNvIvRzeRRlyqE27lJHKd0zXiCFiXLXMXD4en0XBZ6N2CBmKJf4yzj7nkyIyHZzKLtXon6V9Td0GeXsB5Mp3ekT%2BxqbtNgyCHRWbSbTmpZ5c2gD8j7vNi6lNEPhEcGBcwzPDbaIZ2tcQUVJEP6LuTrvoLs77Z4vKPhMcgVZz91NqbWyOXc8b%2Bb08rDsarFqgCNbLrTvOpbuyM%2FUOzCpDRXuJ9spL7llDCc3J%2FBBjqkAT3Br0q8OlJ2Wl46exWVbmb5Tttc%2FtHJlZ6cVqJtl8kMN9ghzRvUM35GrdTCsLO9o33oS%2FjeRnNwV0%2BNlc7sbqvqNDk%2BuI9Ijkbx5wIUtl%2BzIXxbvUYgiU88yHGjWGJoNWFZMhWzAXGfHfJMhe96U4fIZMtHXzhVTepN%2FTcuAYp5a9TzuEPPKH%2BL3WI4M%2FH1ezFwz7w7Qqrz2PLCXX6eD9mMUiwx&X-Amz-Signature=94e8de87b3417c588ec508c874cd0df27a91839e8c3f3df1dcf5f104386f7dec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
