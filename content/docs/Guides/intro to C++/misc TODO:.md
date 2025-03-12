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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BVKUQO5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDw2DOYSelw8mTvRbXwnxwXloq0rJyplwyg%2Fudw91ENNgIgIwc0FR6GIeKMH8dfzeEazbndTGneHr74A1mWibQIcwMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnmvJE5Kz9wSyZwsSrcA4bnUulGzBgQsIpPsOT%2Fc%2FIVuneGYXtloNJ7cDolLOWOqaT%2FwgaeVmMHoalqisKZ%2FBJ1XaYo4AzbIF11ZdUTE%2FyUe9IoMdB%2FbyY%2Bqt6y3DE%2BlLX8bHvyqg2sQtRY8M6UR8aRtLFQAU8Q2kbfm9gNKajIsnWgTZw3fXp3LlR99aiKmOQnyfXiIzAGOJR4uxbY9BeYv%2B0jsmyAjTJndsOVFxya%2BLWQnyZbo6YcKFGl0A%2FF8k1BwX7oNuVuoHbh8gRqWzE9VOjt7FxZyZbR0h1JhlShgr8fh2Rtw%2FrXimBmP%2Fdl%2BNAr32EPw%2BPaIM1kd2BN%2FVM6z%2B9A456rXXEw5JJIO0B6cnWSg1RdiKtL6%2B5%2FxJfpHfCe1HBiJimxEJOtQ5i0nQZoHerz%2F4kztof2E2ro2Ted9NsXMgBWS2bFrV24kvldWdWQrWMcGTFjJLZhQ%2Brjnsxf9wnkG5JjhV3%2FRG8FJoEninhC0ZcnmZIWH4ZlSYHF5%2F2LBBNz1uYa31MB6e0nwIkqv79nuOgE0IIothEdLNh%2BeY6n56xJ4VXnmHIol5B8%2FoLuG1NrAYvGlDZ6gpdZuudOYzUmqsJUtM7yXS41xVPALEba4RbhRK0epMQrIti9fVkvUcOa2ImFKuUtMKm7xL4GOqUBU55TLM8nxlEysoyl9rGC4nJ7awePnjJow5PwGfj%2BYODSO%2BZt4o%2Fy66md%2FkretPoT5AkqlJxg%2FZY57gNzbg0jNXrXaX6IcNlBzMnGUQWV9MBsJXyfncimQLafK0O81MxEohu5pUQL1JHMveNqEmJK%2BODJrvrCShID62y4ltyKRRCkE3kMAf9g%2B4pNOwfJycLY3sCl47phjDaIh%2FI35SlWu%2FahuSrI&X-Amz-Signature=e07dcdff795cadb275cd4b7be408c8478cef85858f4ea429f8d36d3b47c2183c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BVKUQO5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDw2DOYSelw8mTvRbXwnxwXloq0rJyplwyg%2Fudw91ENNgIgIwc0FR6GIeKMH8dfzeEazbndTGneHr74A1mWibQIcwMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnmvJE5Kz9wSyZwsSrcA4bnUulGzBgQsIpPsOT%2Fc%2FIVuneGYXtloNJ7cDolLOWOqaT%2FwgaeVmMHoalqisKZ%2FBJ1XaYo4AzbIF11ZdUTE%2FyUe9IoMdB%2FbyY%2Bqt6y3DE%2BlLX8bHvyqg2sQtRY8M6UR8aRtLFQAU8Q2kbfm9gNKajIsnWgTZw3fXp3LlR99aiKmOQnyfXiIzAGOJR4uxbY9BeYv%2B0jsmyAjTJndsOVFxya%2BLWQnyZbo6YcKFGl0A%2FF8k1BwX7oNuVuoHbh8gRqWzE9VOjt7FxZyZbR0h1JhlShgr8fh2Rtw%2FrXimBmP%2Fdl%2BNAr32EPw%2BPaIM1kd2BN%2FVM6z%2B9A456rXXEw5JJIO0B6cnWSg1RdiKtL6%2B5%2FxJfpHfCe1HBiJimxEJOtQ5i0nQZoHerz%2F4kztof2E2ro2Ted9NsXMgBWS2bFrV24kvldWdWQrWMcGTFjJLZhQ%2Brjnsxf9wnkG5JjhV3%2FRG8FJoEninhC0ZcnmZIWH4ZlSYHF5%2F2LBBNz1uYa31MB6e0nwIkqv79nuOgE0IIothEdLNh%2BeY6n56xJ4VXnmHIol5B8%2FoLuG1NrAYvGlDZ6gpdZuudOYzUmqsJUtM7yXS41xVPALEba4RbhRK0epMQrIti9fVkvUcOa2ImFKuUtMKm7xL4GOqUBU55TLM8nxlEysoyl9rGC4nJ7awePnjJow5PwGfj%2BYODSO%2BZt4o%2Fy66md%2FkretPoT5AkqlJxg%2FZY57gNzbg0jNXrXaX6IcNlBzMnGUQWV9MBsJXyfncimQLafK0O81MxEohu5pUQL1JHMveNqEmJK%2BODJrvrCShID62y4ltyKRRCkE3kMAf9g%2B4pNOwfJycLY3sCl47phjDaIh%2FI35SlWu%2FahuSrI&X-Amz-Signature=b520cadd167bb89d436ffd34bd71e7dbf038696f40d4b06c3042c32bb9b56675&X-Amz-SignedHeaders=host&x-id=GetObject)

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
