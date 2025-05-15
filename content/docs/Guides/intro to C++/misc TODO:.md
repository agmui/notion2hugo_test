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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKBXQMW%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDMDndeyVgNPGxIpnYe5Ej9K%2FMhncLsydaop%2B91XzG5LgIhAO0iPja8C3ROjJvKHVV%2FM%2FsPCz6sy4VHXnYRArWa2tfTKv8DCCMQABoMNjM3NDIzMTgzODA1IgwIFVQ8IC5LHiJFCc4q3APDALbFRYaCkBqlxZj%2FZ9iCvPHytTgTtsP2zeNXERkBgzOX8v%2FuHhdzV7N2smDEIFnJZ7cM3oSoycY1b9cSGXgazKpyvuBRl4Y27V%2B8pfKqa4h134zNWOSt6klzp1y%2B1rHXvBJrcSj5gOboTF%2BwUeHTRevxLFXSxzJk%2F2zToUmt0mMBuh5gkN8Um8AfVVX6mFD3Rb3iOyQNGTsqLiM7Kn2%2FPecKQI4wLEmogltgucJBdkYJbY%2BN24QhdgELP4JjD2YrfLFl7m2ovbRRid%2Fz6c%2B1f0vtRt0Py0wDkwfFilec0e42ZDCpYlngE5bDJ3pmCeh7lVmhaAM3mKwOTSK3BEdhvRfNhXoRTXaFI%2Bv5d%2FcBgHSi6NyJbnrTRhzIWVV1AMJA1WaP8XLdVC7%2Fr%2FA4ooyN9Y7EVaOq3GA5LUItTX%2Fyd56WY%2BoAbIhiJDpDfII8yPBdxuRaRA6x%2FlDEbzlizVj2fkaUtn0UFR5OmVcGEH0YOoQGyH5HohlY8czRU3Mr8LiqUdTC%2FjPO8nVKAAHUMjpQZJFTp2%2FmJ6MzOl0TkMdyjhUzIXxqBu8n3uqxkzo5JZvF7TAxQwcvBtOmYjf0fYnaikzvOrACRaDD0YQ811WgYhODDnJuzP9pvQCDbjD6nJXBBjqkAe7hJVee7ECmd47PhPIE3O3F67fu%2BkkuutVy3Dq%2Fkx72c7o7YZvQsUF8DU4JTX3UmOwKCGCh1PeWneT1lmpByq54G6N8Js0hEDZioDckw%2BerHNf4jVqR5THZ0Emwhfu82nCwjSrOKg7Sg8SSJpKW28XTsgsiZqlDYdtk%2Fh0F5YK%2BrHZqZ2JkGKlfE0hUId4wUj%2BUDW3diYsr2Ou3NistX0geUKt8&X-Amz-Signature=6bfbd2ff945f23b61ccbf994045f8bea3a1cb1954f3195354ac15825857b0c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKBXQMW%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDMDndeyVgNPGxIpnYe5Ej9K%2FMhncLsydaop%2B91XzG5LgIhAO0iPja8C3ROjJvKHVV%2FM%2FsPCz6sy4VHXnYRArWa2tfTKv8DCCMQABoMNjM3NDIzMTgzODA1IgwIFVQ8IC5LHiJFCc4q3APDALbFRYaCkBqlxZj%2FZ9iCvPHytTgTtsP2zeNXERkBgzOX8v%2FuHhdzV7N2smDEIFnJZ7cM3oSoycY1b9cSGXgazKpyvuBRl4Y27V%2B8pfKqa4h134zNWOSt6klzp1y%2B1rHXvBJrcSj5gOboTF%2BwUeHTRevxLFXSxzJk%2F2zToUmt0mMBuh5gkN8Um8AfVVX6mFD3Rb3iOyQNGTsqLiM7Kn2%2FPecKQI4wLEmogltgucJBdkYJbY%2BN24QhdgELP4JjD2YrfLFl7m2ovbRRid%2Fz6c%2B1f0vtRt0Py0wDkwfFilec0e42ZDCpYlngE5bDJ3pmCeh7lVmhaAM3mKwOTSK3BEdhvRfNhXoRTXaFI%2Bv5d%2FcBgHSi6NyJbnrTRhzIWVV1AMJA1WaP8XLdVC7%2Fr%2FA4ooyN9Y7EVaOq3GA5LUItTX%2Fyd56WY%2BoAbIhiJDpDfII8yPBdxuRaRA6x%2FlDEbzlizVj2fkaUtn0UFR5OmVcGEH0YOoQGyH5HohlY8czRU3Mr8LiqUdTC%2FjPO8nVKAAHUMjpQZJFTp2%2FmJ6MzOl0TkMdyjhUzIXxqBu8n3uqxkzo5JZvF7TAxQwcvBtOmYjf0fYnaikzvOrACRaDD0YQ811WgYhODDnJuzP9pvQCDbjD6nJXBBjqkAe7hJVee7ECmd47PhPIE3O3F67fu%2BkkuutVy3Dq%2Fkx72c7o7YZvQsUF8DU4JTX3UmOwKCGCh1PeWneT1lmpByq54G6N8Js0hEDZioDckw%2BerHNf4jVqR5THZ0Emwhfu82nCwjSrOKg7Sg8SSJpKW28XTsgsiZqlDYdtk%2Fh0F5YK%2BrHZqZ2JkGKlfE0hUId4wUj%2BUDW3diYsr2Ou3NistX0geUKt8&X-Amz-Signature=9c844a00fe2881c0548da614e3cbf08bf9f39d3e1ee6f68a48775288fad7ff37&X-Amz-SignedHeaders=host&x-id=GetObject)

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
