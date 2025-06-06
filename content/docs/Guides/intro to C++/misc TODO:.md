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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V24IEG7W%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiBhtDdyimvVeqgZ1VTNL0%2BD5NlrorjUc90TvO08yVBAiEA57VyFmvziRONJgtfTEHxovIHWW%2FGIRGiodR8ayNv2xAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDF7CGuz%2FMFGpnnywUCrcAz6kGHjimeMRWz9e54iJNVqRvAg52lXX0Xz2zTf8Oh7WqoXrOolfOlnS6cIEBJKn%2FgitqVOdwFNfNbE%2B94C9zPCWdYFGOm96NzvMZdK3P5u%2FcBX2GI6D3Pe5bXyNlXqm8S2VEsHEZyuLhSmxVkyhaHoD4gv%2B4KjY%2B1%2BeuajgiuO7Pp9uY4YxVaEFl95NYfZxJyWFI5dBtQIZoJNLXX9UQ20JojU%2FMHc%2BdC%2BC9YQUF%2FK5xMYilzIpSNprAb2IUgYaPQsO%2Bb7nzKyIT4NU9zlQCKIRqwU%2BZSk25SctOugbQNLn8RJTzvfg0yOtpxDa9lVOR0tPGO3wuAdUVXIHcJ%2Bj1eRXluraKHJX6K%2F1tB7l8YyFaMy85%2BjsGmQRrnVni4Y9cNtR6je7%2B2MtU0BnDfCC2Cd3zjWOet43P9LnAYnVF3%2FlJiZ1qYkAjFl7JBXbvQqsEd8%2Bk01s5Az1215JUwcwjcCgwWPcoHmaAxYu%2FdYeecJpWSGhZv5t6oFgQWOMbUUDww1ZSEG2hvkBar%2B76R%2FTJh2G%2B0fxdnMNEyXRcmVwJfGvp0mT%2Fod3SotcWS409vFtIN7xoO1p3z2XE1Byj4F%2BpW8GvW8JMBVWa4HWLhtaf6HmNIFWRJlwnJHpm9NdMLTWjMIGOqUBLd3m7JRS2ZYg9n9UUVBHCg%2BkCRQMDUXkjULClbGv0jQZS2RZop4Rm9xSXC5SJ6R8QL2WaLsH3mBtW7JGOFd33cEcLnWtH%2FTOATg%2FrfsXgGmBdxMEQJFFncE14HZqndqwOKhqo2oRRsiQHirtkrSFZcriXajigfayWuP%2B%2FW23p4sjwYeFkJUPIzw0XQuRkCrmEmU6x8nXk0jdfXhwFuelHln4LdyQ&X-Amz-Signature=92d6083ea1c92b1e38cb5d26fea68f5eceb24b939499917f0bfe4d4be9e4774d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V24IEG7W%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiBhtDdyimvVeqgZ1VTNL0%2BD5NlrorjUc90TvO08yVBAiEA57VyFmvziRONJgtfTEHxovIHWW%2FGIRGiodR8ayNv2xAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDF7CGuz%2FMFGpnnywUCrcAz6kGHjimeMRWz9e54iJNVqRvAg52lXX0Xz2zTf8Oh7WqoXrOolfOlnS6cIEBJKn%2FgitqVOdwFNfNbE%2B94C9zPCWdYFGOm96NzvMZdK3P5u%2FcBX2GI6D3Pe5bXyNlXqm8S2VEsHEZyuLhSmxVkyhaHoD4gv%2B4KjY%2B1%2BeuajgiuO7Pp9uY4YxVaEFl95NYfZxJyWFI5dBtQIZoJNLXX9UQ20JojU%2FMHc%2BdC%2BC9YQUF%2FK5xMYilzIpSNprAb2IUgYaPQsO%2Bb7nzKyIT4NU9zlQCKIRqwU%2BZSk25SctOugbQNLn8RJTzvfg0yOtpxDa9lVOR0tPGO3wuAdUVXIHcJ%2Bj1eRXluraKHJX6K%2F1tB7l8YyFaMy85%2BjsGmQRrnVni4Y9cNtR6je7%2B2MtU0BnDfCC2Cd3zjWOet43P9LnAYnVF3%2FlJiZ1qYkAjFl7JBXbvQqsEd8%2Bk01s5Az1215JUwcwjcCgwWPcoHmaAxYu%2FdYeecJpWSGhZv5t6oFgQWOMbUUDww1ZSEG2hvkBar%2B76R%2FTJh2G%2B0fxdnMNEyXRcmVwJfGvp0mT%2Fod3SotcWS409vFtIN7xoO1p3z2XE1Byj4F%2BpW8GvW8JMBVWa4HWLhtaf6HmNIFWRJlwnJHpm9NdMLTWjMIGOqUBLd3m7JRS2ZYg9n9UUVBHCg%2BkCRQMDUXkjULClbGv0jQZS2RZop4Rm9xSXC5SJ6R8QL2WaLsH3mBtW7JGOFd33cEcLnWtH%2FTOATg%2FrfsXgGmBdxMEQJFFncE14HZqndqwOKhqo2oRRsiQHirtkrSFZcriXajigfayWuP%2B%2FW23p4sjwYeFkJUPIzw0XQuRkCrmEmU6x8nXk0jdfXhwFuelHln4LdyQ&X-Amz-Signature=dff768724065f928bc0801d70c0f9b5abd008e643fd874f21ab17d7a833f03c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
