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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SOFAQK3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9AX1172otbHAHPwN76k3JVpA6e2TGXKuVd7OqglHy6AiAWPHre%2FDBu4JCogg0Y6JxkH8TVOStmBESbhizBAyUMNCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMaYsxgRIA604m065SKtwDHerSmuXpio0rUE4nWxk%2F6vH%2BHXCNzLWgzKH9cZI5C37Tstz5%2FpHOhoUTihTRZBcl%2BcoCZMV%2BuE97BAaybexe8B7kmbmkfPat4%2BqpWx3h3InUiTe41kOppriPmtev8wA7tAfgmmdaRC4Ia5fKd6te2O862QKzJIZBQotvlMrEvEPkevYAu1VitcO%2FZ7Wus1C60mVWVVfa61JgiFwVEV1LlfSAqJ8CsulmCPvHsB5XrBquqz4psSJffKxlJeyaTAXdMdvoL7guKPrrvk%2BgJOCXEVmFRij7peChgwygED4OWAKaG%2BjjZSyO62aK%2BUxPNrPrzFhlACcG%2FfEXixbzHdoa%2BkUFVlaz83doy6FiCR2Mu6ugTcnYOO8M6FSmpnF%2B9EPXfy5FAbmh5prU8QbfsRfo1IZ5JALtuX%2BK2JIr72LZgapba4gY%2FZiQw1dSCNVQgIv7DLZx1F%2BqtcVHHzQm0z4KPWzkeGDYhGyvHJyq6Y7OzX57Sim3wmZEXFlicyx6tJ92TJR3H1DR43a9OrWMBQfG0zEXjZ9A%2FQdV0zfsP6hZ0oS%2BSZE8Z7zLT1Z1F96%2FIWTC4looAcWMgaURx9qaB89B%2Fn0fwDNkrpWiFZYrZwdt8XqW1bIBzNQvd2IPWIkwpNTTvwY6pgHKen1rW4tp4pWJZWY7chFHBwTne3Mzo2aPjJe1shTd%2BRMutRbJl%2BQcekGZD2X89ZITs8JIptivtUhDTRm%2FIXdjUNRBPK974cqIdrdFx9Q6zcfVu9YEQL0MCOpGcBjRNhdR0VeQZ5Vmk4HLBsnhjaIylro0rcFx3wplRjCIPPiC7O739k6hvjQBi4VUFJV9XeTY7SOHHU%2Bgs9ayb9M%2F0eEuIg70aKGv&X-Amz-Signature=e7cb65ae2db315555ca71fedd0428df23c8d58a836c26bf5bbde46f98143a5b1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SOFAQK3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9AX1172otbHAHPwN76k3JVpA6e2TGXKuVd7OqglHy6AiAWPHre%2FDBu4JCogg0Y6JxkH8TVOStmBESbhizBAyUMNCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMaYsxgRIA604m065SKtwDHerSmuXpio0rUE4nWxk%2F6vH%2BHXCNzLWgzKH9cZI5C37Tstz5%2FpHOhoUTihTRZBcl%2BcoCZMV%2BuE97BAaybexe8B7kmbmkfPat4%2BqpWx3h3InUiTe41kOppriPmtev8wA7tAfgmmdaRC4Ia5fKd6te2O862QKzJIZBQotvlMrEvEPkevYAu1VitcO%2FZ7Wus1C60mVWVVfa61JgiFwVEV1LlfSAqJ8CsulmCPvHsB5XrBquqz4psSJffKxlJeyaTAXdMdvoL7guKPrrvk%2BgJOCXEVmFRij7peChgwygED4OWAKaG%2BjjZSyO62aK%2BUxPNrPrzFhlACcG%2FfEXixbzHdoa%2BkUFVlaz83doy6FiCR2Mu6ugTcnYOO8M6FSmpnF%2B9EPXfy5FAbmh5prU8QbfsRfo1IZ5JALtuX%2BK2JIr72LZgapba4gY%2FZiQw1dSCNVQgIv7DLZx1F%2BqtcVHHzQm0z4KPWzkeGDYhGyvHJyq6Y7OzX57Sim3wmZEXFlicyx6tJ92TJR3H1DR43a9OrWMBQfG0zEXjZ9A%2FQdV0zfsP6hZ0oS%2BSZE8Z7zLT1Z1F96%2FIWTC4looAcWMgaURx9qaB89B%2Fn0fwDNkrpWiFZYrZwdt8XqW1bIBzNQvd2IPWIkwpNTTvwY6pgHKen1rW4tp4pWJZWY7chFHBwTne3Mzo2aPjJe1shTd%2BRMutRbJl%2BQcekGZD2X89ZITs8JIptivtUhDTRm%2FIXdjUNRBPK974cqIdrdFx9Q6zcfVu9YEQL0MCOpGcBjRNhdR0VeQZ5Vmk4HLBsnhjaIylro0rcFx3wplRjCIPPiC7O739k6hvjQBi4VUFJV9XeTY7SOHHU%2Bgs9ayb9M%2F0eEuIg70aKGv&X-Amz-Signature=d47dd66c5b7a34ddafd683fafdf57a73e12a27d4d4ca930c1cafaa840ea6602d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
