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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH45GUNF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIE5jBiO5oEHBFOmsLqM2oIB2rMg5SyHgqNQiBjpfTzD6AiBpyHMXjsX%2FItEWEf1o6tgvJMjTknd5N3sHE35XAvhHuyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMO%2BfuvR%2B2U06mjmWeKtwDdZu4dHiFQzt8HJUlsE7dcEbp277tAkANho9O3Wgm5qEKXdnMsZAYF5Wo6QSbZzRdrZ2ZUQK7E1AWMGH50qr7VSxIjG4kluBtmyS3P1v8ZBZgXJXWZmAgUEkxB4%2BsSJJgBE7%2F5FENZ%2FjcnM6V%2B36KudxBcwN6DUvBHF0BA%2BHToQP6Jdf%2F5D874BatYHAWt3%2BnUP5D%2Fdz9DJA84on7k62Rlslvi7LD1EaFkX3I5drHH9Pnfm6QP4O%2B7h27lIKMr%2BRY3VIrNohjUsw5uODDY9sNrxLJ7Q5JEEueylWkGeehOM62VS4w1RfrOpjp6js421%2Bu8W6CEOMoZhq4qS2%2BFptawLM5TBb3KyApQ2RsO0mOoE0K80pUo4BSBDnm72DhTQ3zHOwgnHFvp%2BvQY1JcVKHM8FLrszZJEAn1r8wZoR%2BwsG6Ec3YFseCpmo0voBhGN1O2UC5i2cNlUVKAcl3omsaaWpIJMVsSNh8G7GKG9593YBpCiQfHCFJi%2F9oitEOx0MskPDWVMFTLWCVm5rjM3yYK%2FoG2s69Cn26NfNC7F67xZ6NI1JRAVH%2FC9MNdFVwQU37a759PEczGdyw1JsVN8cShrxIkIGO%2FtSfoH9pWvr1zJzolEWce%2FwmQPaerlfUw%2FM6kwwY6pgFSnSIqlAkXRaJpUJQr0s5CkkPvUp8Ydm3dtIfcTNTZU5dHyC0dvbpVLNVj3EjGeTJUty4dV7Kz6NqzpIbDc9xHZ9n%2FcQZ0u%2BmzexmxflyLajwI9KaVZGn4m%2F8Jo9AFgTY37nMFPs2A%2BVBxS7qeXujNsUSnSqIt8YR0X2zjMjp8tnW%2FXW1e44U6rs9Tkr2jziSSVWrl%2BsFWgO3Fa5xsoS255TOCdcaw&X-Amz-Signature=245364aafcec3435bb89bb6742a1ee945ce7c3b3b9bf39a2457cba982e66c71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH45GUNF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIE5jBiO5oEHBFOmsLqM2oIB2rMg5SyHgqNQiBjpfTzD6AiBpyHMXjsX%2FItEWEf1o6tgvJMjTknd5N3sHE35XAvhHuyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMO%2BfuvR%2B2U06mjmWeKtwDdZu4dHiFQzt8HJUlsE7dcEbp277tAkANho9O3Wgm5qEKXdnMsZAYF5Wo6QSbZzRdrZ2ZUQK7E1AWMGH50qr7VSxIjG4kluBtmyS3P1v8ZBZgXJXWZmAgUEkxB4%2BsSJJgBE7%2F5FENZ%2FjcnM6V%2B36KudxBcwN6DUvBHF0BA%2BHToQP6Jdf%2F5D874BatYHAWt3%2BnUP5D%2Fdz9DJA84on7k62Rlslvi7LD1EaFkX3I5drHH9Pnfm6QP4O%2B7h27lIKMr%2BRY3VIrNohjUsw5uODDY9sNrxLJ7Q5JEEueylWkGeehOM62VS4w1RfrOpjp6js421%2Bu8W6CEOMoZhq4qS2%2BFptawLM5TBb3KyApQ2RsO0mOoE0K80pUo4BSBDnm72DhTQ3zHOwgnHFvp%2BvQY1JcVKHM8FLrszZJEAn1r8wZoR%2BwsG6Ec3YFseCpmo0voBhGN1O2UC5i2cNlUVKAcl3omsaaWpIJMVsSNh8G7GKG9593YBpCiQfHCFJi%2F9oitEOx0MskPDWVMFTLWCVm5rjM3yYK%2FoG2s69Cn26NfNC7F67xZ6NI1JRAVH%2FC9MNdFVwQU37a759PEczGdyw1JsVN8cShrxIkIGO%2FtSfoH9pWvr1zJzolEWce%2FwmQPaerlfUw%2FM6kwwY6pgFSnSIqlAkXRaJpUJQr0s5CkkPvUp8Ydm3dtIfcTNTZU5dHyC0dvbpVLNVj3EjGeTJUty4dV7Kz6NqzpIbDc9xHZ9n%2FcQZ0u%2BmzexmxflyLajwI9KaVZGn4m%2F8Jo9AFgTY37nMFPs2A%2BVBxS7qeXujNsUSnSqIt8YR0X2zjMjp8tnW%2FXW1e44U6rs9Tkr2jziSSVWrl%2BsFWgO3Fa5xsoS255TOCdcaw&X-Amz-Signature=4522d6bbeea8c7dae1855973ac1a25ac4fc778dbb566ae86f078d5fefe4c45ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
