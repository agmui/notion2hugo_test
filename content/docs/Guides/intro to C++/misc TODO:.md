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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGPKLKBT%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrLqC1AqAYVIxSBTONg0v0H%2B47%2FbWJvUNDjael7SEzswIgWDn7jPGulLYmU4hDExekM%2BaOr1cLB%2B%2BedNPOIwqdFaUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIWdh6nMO5RuG%2FCXoSrcA76XGs%2FuE3AEamNqkeDpytkMZh3SKTbQFIq1OhnrbUmSv34S8bUrzW6BWXYOWdJdD0P4skyIPTKmvkQJt1EbcmjgmcF%2Fu2YL0eegux%2FULptUcnqEcvOyKpF1YRHA%2BoKerno%2FH0KkM%2BEWhH74qPYipNJDmH6%2FMJcmGJaistIX2AmmoVQ4yvSOk6i%2Bow%2Fe19425jZ%2BfLgy6CUjkGxip3vMJXW8ydirlpN%2BUmW6ttdR34ZuiPqDoIBGV9gitiPg2WxvwVTumPbFYbdNwGFELkKbdJOHfKR0kc9cRGiHTadUeE4LdciV5Hk%2B10dfDE6KAIJlcU1MLgwCAtJhTgYVxLOklxNshFntoAsrAP%2BTZzREKV7cSvqAVS1HolPJVqdgSJrmv%2F7NWWwPHt8X9mxoqEEKzsjHy%2BQDUC0kSfG%2Bqt2XLplcX2N3vBf28mV6MHZN%2F4%2BkFb4fMMJG82o7C6g%2FGn8z7zdJhWjx5PLV85t7IcpulUgFNEuwRfGP9oVCSRBgflkvVyyRgRMofkmELu%2Bfvb97EM2QP%2FcsYyASCvrnr9P4cuRx4ePshv3bEoJ3gYRvqrWzq3bgDmEmWnZjGCFMSyJuBvdVBdV%2Bvm5nD2MduT%2FEx4VEb1FMgHUmnwo9Xs4IMJyL9cQGOqUB5UEJicW%2FaTZzmYg9K1U3Q66WWDA3UmFvYlJNVnIR2%2BpVMwlImp7Ux8QarA7YHN%2Fm1Bfhuznaxv74IfM%2Fjw4eXD%2FLpcybrd%2Bl3uE3Iq4gjwLd%2BbZJapCj%2FGVsZyOVFtQaKhT54ayjGrpWkB8BE0nOBr0%2BuqFvJ72JjuKg%2FWCRdtHL0gBIKkEAsf3o2WzRgiTcEht4zJ6v5ChLTZ1DvHCi2J9P6N5I&X-Amz-Signature=8d82e63f10a7004c1b116151a448bbc374487ae3eb618ea5db45f1fb97393f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGPKLKBT%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrLqC1AqAYVIxSBTONg0v0H%2B47%2FbWJvUNDjael7SEzswIgWDn7jPGulLYmU4hDExekM%2BaOr1cLB%2B%2BedNPOIwqdFaUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIWdh6nMO5RuG%2FCXoSrcA76XGs%2FuE3AEamNqkeDpytkMZh3SKTbQFIq1OhnrbUmSv34S8bUrzW6BWXYOWdJdD0P4skyIPTKmvkQJt1EbcmjgmcF%2Fu2YL0eegux%2FULptUcnqEcvOyKpF1YRHA%2BoKerno%2FH0KkM%2BEWhH74qPYipNJDmH6%2FMJcmGJaistIX2AmmoVQ4yvSOk6i%2Bow%2Fe19425jZ%2BfLgy6CUjkGxip3vMJXW8ydirlpN%2BUmW6ttdR34ZuiPqDoIBGV9gitiPg2WxvwVTumPbFYbdNwGFELkKbdJOHfKR0kc9cRGiHTadUeE4LdciV5Hk%2B10dfDE6KAIJlcU1MLgwCAtJhTgYVxLOklxNshFntoAsrAP%2BTZzREKV7cSvqAVS1HolPJVqdgSJrmv%2F7NWWwPHt8X9mxoqEEKzsjHy%2BQDUC0kSfG%2Bqt2XLplcX2N3vBf28mV6MHZN%2F4%2BkFb4fMMJG82o7C6g%2FGn8z7zdJhWjx5PLV85t7IcpulUgFNEuwRfGP9oVCSRBgflkvVyyRgRMofkmELu%2Bfvb97EM2QP%2FcsYyASCvrnr9P4cuRx4ePshv3bEoJ3gYRvqrWzq3bgDmEmWnZjGCFMSyJuBvdVBdV%2Bvm5nD2MduT%2FEx4VEb1FMgHUmnwo9Xs4IMJyL9cQGOqUB5UEJicW%2FaTZzmYg9K1U3Q66WWDA3UmFvYlJNVnIR2%2BpVMwlImp7Ux8QarA7YHN%2Fm1Bfhuznaxv74IfM%2Fjw4eXD%2FLpcybrd%2Bl3uE3Iq4gjwLd%2BbZJapCj%2FGVsZyOVFtQaKhT54ayjGrpWkB8BE0nOBr0%2BuqFvJ72JjuKg%2FWCRdtHL0gBIKkEAsf3o2WzRgiTcEht4zJ6v5ChLTZ1DvHCi2J9P6N5I&X-Amz-Signature=d89d395a7576793a4dff4d5a598afc849950eb07aad48e8f423b0bc03e19569a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
