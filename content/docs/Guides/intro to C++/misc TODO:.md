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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUQZA45O%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICNhmOXlk3bs2oqPu%2BzA4gkxzCMPPs%2BNK6zf4EuWVNltAiEAnL2bCFbxSgXNy4NxkdZtylbIzxTzCPAfMq6vXK15OkEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIVPLhyxK6rx5KUYeCrcAz5V%2BUiF3H%2F7zdaW29%2Ff00HlAuD4Uiq1xj70UgQ5J7oE61R2hh2Fo2GR%2BwADWhhkLpfnLhDqItSvVmhdU4F8nqdkPRg4KXlCk2ZAQOuiWuuxHGTeJ5x9%2BEESTdv9KTyTfeO6v13z0T6S%2BwiaAxVkEtkY%2BSWrTnsfmgslDbUfmZGI7UeOdG7%2Be5bY%2BMMat8CBDUr2Msv8qWGedLKhwkDS4xyt76nzOGuqZVMahZTAVdlmg%2FefSCmg%2FzEzPr%2FhqEj0ncq5%2FiiYWiEo%2BHtFot%2BWAMBeFrPHTSvv6PY4U3%2FZ%2FMpKw6MY%2B2%2FB1Owjz8k%2F3l5PjntJGUxJvZ6%2BzOTn3eWNgzHUQKcTX%2Bz4NYqCUnMPIljVrF09VUiIA1GQbhyPGyj90EASZ2vH62C4XCk%2F7WSFGaK1MT%2F8gFbepUmSsGB9wlHPQG62UVdolwJTkRSaNtrf%2BRnR5fMQxQFLQjfNWidPpG1H86%2B7eAhCeDnx7EAj3iTO7R0aEcoAfmsDhf8AeugVXzU1sQ4ymhPpI7EViUciKnoyrfdjvLUZx20qx9anPw9LmmFH%2BorK9lld0YgroX%2BKxVddcdw0B2lFN4zlz4KztextBifq7oNjtNe0GcOgCc6rn%2FCyF7ACJnkv6510MMet9b0GOqUBZN%2B2RdJJI5AQm7vkvOLY3k%2F%2FxArkzHVwTb1J5g76EoIcoKBW5yq5HUs1s%2Fxuly0EY0I4ynLAfvJEkNXqjAYotrDMebhbvy9RcF4e64NkxVQUGlLyXfG22gjPwqDe25WZOorjSPPYlJgLSVWP8%2B77RHOdiOzszZZlX1XBqt8KSrt2Nw%2BUmEOmMHKjiEJyO3DwEhIt5Fzo9oCsvjuCn0aEGpDk4Qe0&X-Amz-Signature=fe6488c7271d021834d7515e7c7c577df19a744ec3e9a1ceaa3f978b32b921ba&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUQZA45O%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICNhmOXlk3bs2oqPu%2BzA4gkxzCMPPs%2BNK6zf4EuWVNltAiEAnL2bCFbxSgXNy4NxkdZtylbIzxTzCPAfMq6vXK15OkEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIVPLhyxK6rx5KUYeCrcAz5V%2BUiF3H%2F7zdaW29%2Ff00HlAuD4Uiq1xj70UgQ5J7oE61R2hh2Fo2GR%2BwADWhhkLpfnLhDqItSvVmhdU4F8nqdkPRg4KXlCk2ZAQOuiWuuxHGTeJ5x9%2BEESTdv9KTyTfeO6v13z0T6S%2BwiaAxVkEtkY%2BSWrTnsfmgslDbUfmZGI7UeOdG7%2Be5bY%2BMMat8CBDUr2Msv8qWGedLKhwkDS4xyt76nzOGuqZVMahZTAVdlmg%2FefSCmg%2FzEzPr%2FhqEj0ncq5%2FiiYWiEo%2BHtFot%2BWAMBeFrPHTSvv6PY4U3%2FZ%2FMpKw6MY%2B2%2FB1Owjz8k%2F3l5PjntJGUxJvZ6%2BzOTn3eWNgzHUQKcTX%2Bz4NYqCUnMPIljVrF09VUiIA1GQbhyPGyj90EASZ2vH62C4XCk%2F7WSFGaK1MT%2F8gFbepUmSsGB9wlHPQG62UVdolwJTkRSaNtrf%2BRnR5fMQxQFLQjfNWidPpG1H86%2B7eAhCeDnx7EAj3iTO7R0aEcoAfmsDhf8AeugVXzU1sQ4ymhPpI7EViUciKnoyrfdjvLUZx20qx9anPw9LmmFH%2BorK9lld0YgroX%2BKxVddcdw0B2lFN4zlz4KztextBifq7oNjtNe0GcOgCc6rn%2FCyF7ACJnkv6510MMet9b0GOqUBZN%2B2RdJJI5AQm7vkvOLY3k%2F%2FxArkzHVwTb1J5g76EoIcoKBW5yq5HUs1s%2Fxuly0EY0I4ynLAfvJEkNXqjAYotrDMebhbvy9RcF4e64NkxVQUGlLyXfG22gjPwqDe25WZOorjSPPYlJgLSVWP8%2B77RHOdiOzszZZlX1XBqt8KSrt2Nw%2BUmEOmMHKjiEJyO3DwEhIt5Fzo9oCsvjuCn0aEGpDk4Qe0&X-Amz-Signature=e18eeb776c163b6f3b8f889bdb20b5b1eb1519ee42f0921e8302c26e1a206aed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
