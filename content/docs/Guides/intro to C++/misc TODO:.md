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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI5N2PGS%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDAaRVSRn23ZrXRiOwlD0DIro8vGh3aDcm6R%2FLeg%2BwfAIgaiIKRL%2BzQGtrCcY7h6p5e7lrZ7%2FHEeEj%2BmKMFZpwQj4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXXBZ5FPS2Rhp%2BBYCrcA2QTfN4RhFB29eKdG%2B58qMr8CdGB9dDUxs5VLqWoP2w7tK%2B6Twr3HBBncigpdwJZ%2B2FejdK1AFINW%2BCGKBusRG9rzL%2BFDnEd33h6zahPmyG5PHNSBPWYboXiw7xxpyuDIrjfdp61viBDCkkPB0M3w41SsBD8DpRl0s5SshoGIKxL96ISXLblWZWUEOjnF%2FJNb11V6nc%2BfHHqpxemxaik%2BAmn3UQjPAfHbPDm%2FCHnKaySrXgeyM6R9Dn2mrHCLmeGjUAEUgh8Osu99MWJFbjs%2BIoL%2BbnLv6Whx5lZyJm4oxQxXBNv5Bk6Pb4aHThABiS%2Bc3J1hg0WD2oF0WUMahXLsqLG0dt3MVSzPxoTnFAgSDthsvpyqu%2BzE3WjJ%2Bw2SGzt4POMopl3V0lhVVFNMwEsHKhfmHILW0k5MvHVSpBeEjp8zHijeNUSzTTEl8joNmvqKwut9vSpNma2yRYDn%2BqUep9IVht%2FZrXomsLTXTll%2BxJDA3n9P%2BRDnCqE7XtGeGGpmhfbR9WveGiOpEftdXU0uh5bumkJi1sNZ2rZE8ZP3NHJ1Agp3ms9iB%2Fv0f48G1y56d%2FLwIMCrbqphL10zcJEeGXzFDC%2FAe96pUniX7QAtJO%2B3xX5wPNJT87fFhoPMPCAzMMGOqUBqqAYoK2bKKSC1iK2olESji8eJLsnYfnr1dplgwfoWnxQuDasY3LFhu5LgayNt1ge931yFfzQaXLtPYOdkP%2Baj7%2FA3ZDxRfBEw07XHqijsbvsn8uW0uMtmXV8Ma7pZ1uOdY%2FZOwXD9YTX8KPWubMYLkv7yGJ44iYW7Ym2NI%2F%2F6az%2FX%2BXhQTK5TH%2FCXAnz%2F4chG6x6quQ%2FuMQpQBsGpIg6pXGpSNwl&X-Amz-Signature=93064128ae44e30ca899b6c9f45b03ab952fcbbc129485eaa835882c03d024c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI5N2PGS%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDAaRVSRn23ZrXRiOwlD0DIro8vGh3aDcm6R%2FLeg%2BwfAIgaiIKRL%2BzQGtrCcY7h6p5e7lrZ7%2FHEeEj%2BmKMFZpwQj4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXXBZ5FPS2Rhp%2BBYCrcA2QTfN4RhFB29eKdG%2B58qMr8CdGB9dDUxs5VLqWoP2w7tK%2B6Twr3HBBncigpdwJZ%2B2FejdK1AFINW%2BCGKBusRG9rzL%2BFDnEd33h6zahPmyG5PHNSBPWYboXiw7xxpyuDIrjfdp61viBDCkkPB0M3w41SsBD8DpRl0s5SshoGIKxL96ISXLblWZWUEOjnF%2FJNb11V6nc%2BfHHqpxemxaik%2BAmn3UQjPAfHbPDm%2FCHnKaySrXgeyM6R9Dn2mrHCLmeGjUAEUgh8Osu99MWJFbjs%2BIoL%2BbnLv6Whx5lZyJm4oxQxXBNv5Bk6Pb4aHThABiS%2Bc3J1hg0WD2oF0WUMahXLsqLG0dt3MVSzPxoTnFAgSDthsvpyqu%2BzE3WjJ%2Bw2SGzt4POMopl3V0lhVVFNMwEsHKhfmHILW0k5MvHVSpBeEjp8zHijeNUSzTTEl8joNmvqKwut9vSpNma2yRYDn%2BqUep9IVht%2FZrXomsLTXTll%2BxJDA3n9P%2BRDnCqE7XtGeGGpmhfbR9WveGiOpEftdXU0uh5bumkJi1sNZ2rZE8ZP3NHJ1Agp3ms9iB%2Fv0f48G1y56d%2FLwIMCrbqphL10zcJEeGXzFDC%2FAe96pUniX7QAtJO%2B3xX5wPNJT87fFhoPMPCAzMMGOqUBqqAYoK2bKKSC1iK2olESji8eJLsnYfnr1dplgwfoWnxQuDasY3LFhu5LgayNt1ge931yFfzQaXLtPYOdkP%2Baj7%2FA3ZDxRfBEw07XHqijsbvsn8uW0uMtmXV8Ma7pZ1uOdY%2FZOwXD9YTX8KPWubMYLkv7yGJ44iYW7Ym2NI%2F%2F6az%2FX%2BXhQTK5TH%2FCXAnz%2F4chG6x6quQ%2FuMQpQBsGpIg6pXGpSNwl&X-Amz-Signature=b8aa6218fb183479ed29522a155172f2de41b5006302786baeb27f85a74a6d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
