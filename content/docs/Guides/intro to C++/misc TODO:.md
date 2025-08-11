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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWRIN43%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICy8SyvaSD%2BLWWMMBGhPVa1f1hAl3T7uHoObr9I6MeLGAiEAuiWRD8REPFsX1dPoDkbKDNaB9O3JLbH24U9ZnzCaTWoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwgqahySYLGsD1hJircA5DXW3I5R%2Bmk8xya9%2FxviZu%2BEaheVSOseTR7oRhofskX2sm8i%2FN3ByrD%2F5HiXO3xHYEKa157weV4zP7muHI4QamSp7iEV%2BUoN9XISgs3ASPEYSKrCrDKjPct8WhN3B%2Fx0EWuPIFIfwSHxusISe%2BEI23ldef697tRcRj0aqcEWXHy1kQllYthJwZvKr%2BYlOd9PF7A1WwNzLT%2FZ92M8MPzSKlf8XSeUdZSkoHeMpZBs%2F6xLgB8LXg6hLF6ZE1vyAfmij2kOJ1NvVECNJYxeQIvnMMBYAxXrKPiDbZ2vcOStUrVx9zdR8xUXCiw0qvZAwrSnKohmXYuvzTUo3OpKCsJPpkeEtrW1yrQ9iDrnUjTcMnWc1s4W%2Bt8cKG7yz65Ku%2B7TRGnViddJtuGQWVZ87cjYu4%2BrJ7KtbY6UxA0aSoMr%2FeLZPyYEEGd4Hq%2F5tp0wQ1RdhD8viMB15cC%2Bj4RU0zShKbiVPujx2bl13059FlzR8JJJSEOKncnI3mfqPMFYifh%2FLY3IF2xYZ%2BsWGUiO8idNWXQaXYCm9ln4jeGJOpgr3Y7lutXsY1dd0xoL02OgHxxbu3KJeE4HGXETvCu9qwT%2BEskErgxNN7uiL90WGliYMNGz7J3cnlBp0vDVPk6MIv55sQGOqUBrVXuzxuouVj2%2FD9rg9YoCvbC9QyzrAyroYHtQyEd5LjUnLGtn1RX%2FDAbVljOsDHcSrvEIDAGAJgfs0TmG%2Bgf9CgZdYmh1X%2F9GLp1MqBYKwyjSwI9N2kQdwCuHiyxgsE82QWIV1usCxdeTg51OzoR6AbNtTLishWPu37KrAbKsZS00V7Js1f%2B%2FFpd9Pw%2Foq5MfaNYMEf0PEQtdv5X6T%2BFKdKIA%2FmM&X-Amz-Signature=e1096397b1232890ff542dd089e766c75272296b82ff5a79b4be52ed4a985c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWRIN43%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICy8SyvaSD%2BLWWMMBGhPVa1f1hAl3T7uHoObr9I6MeLGAiEAuiWRD8REPFsX1dPoDkbKDNaB9O3JLbH24U9ZnzCaTWoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwgqahySYLGsD1hJircA5DXW3I5R%2Bmk8xya9%2FxviZu%2BEaheVSOseTR7oRhofskX2sm8i%2FN3ByrD%2F5HiXO3xHYEKa157weV4zP7muHI4QamSp7iEV%2BUoN9XISgs3ASPEYSKrCrDKjPct8WhN3B%2Fx0EWuPIFIfwSHxusISe%2BEI23ldef697tRcRj0aqcEWXHy1kQllYthJwZvKr%2BYlOd9PF7A1WwNzLT%2FZ92M8MPzSKlf8XSeUdZSkoHeMpZBs%2F6xLgB8LXg6hLF6ZE1vyAfmij2kOJ1NvVECNJYxeQIvnMMBYAxXrKPiDbZ2vcOStUrVx9zdR8xUXCiw0qvZAwrSnKohmXYuvzTUo3OpKCsJPpkeEtrW1yrQ9iDrnUjTcMnWc1s4W%2Bt8cKG7yz65Ku%2B7TRGnViddJtuGQWVZ87cjYu4%2BrJ7KtbY6UxA0aSoMr%2FeLZPyYEEGd4Hq%2F5tp0wQ1RdhD8viMB15cC%2Bj4RU0zShKbiVPujx2bl13059FlzR8JJJSEOKncnI3mfqPMFYifh%2FLY3IF2xYZ%2BsWGUiO8idNWXQaXYCm9ln4jeGJOpgr3Y7lutXsY1dd0xoL02OgHxxbu3KJeE4HGXETvCu9qwT%2BEskErgxNN7uiL90WGliYMNGz7J3cnlBp0vDVPk6MIv55sQGOqUBrVXuzxuouVj2%2FD9rg9YoCvbC9QyzrAyroYHtQyEd5LjUnLGtn1RX%2FDAbVljOsDHcSrvEIDAGAJgfs0TmG%2Bgf9CgZdYmh1X%2F9GLp1MqBYKwyjSwI9N2kQdwCuHiyxgsE82QWIV1usCxdeTg51OzoR6AbNtTLishWPu37KrAbKsZS00V7Js1f%2B%2FFpd9Pw%2Foq5MfaNYMEf0PEQtdv5X6T%2BFKdKIA%2FmM&X-Amz-Signature=a62670556abb70bc620cfd9f29ee927a674d079768d2331e4f5ee0c067984082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
