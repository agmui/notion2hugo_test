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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSLHHTY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIGrbcWGrqhIadhmfpx8UwV5xtqWn%2BoAW%2FYllMDjUgZeAAiEAz5yLzRO7ibPynhwWsYYQlDlkZT91ML2NJaM0OlPddwEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIa%2B6qtg2gEfWIHiircA2gkRWBGCPYFl5m6pAkc%2FDFmm8NH4aaXR3G10mPXralHezBxH3qouWphclnwls19NeZRuaopYZ0pDbSY3KNKQjc1QwL7dyvB%2Fwi%2BYlkLZtXDnPc5LhQbEHhNVtf0e91izk6aRSfdzdBbWLii3VVH1DwMnhbczEAayAmjTvGku87hq2Ts72FPZDutC%2BUXQhlbDlMm1RwKLRwA6qRmfoVXGLEIpTXOCujFS054jsECvRFaeQFsDSOOjUWSPM5s5TSXUSjhX3jQ8iH9iZmL%2FthVKOSvVd65cFRhijB%2BIlVQjWixStidFeZfj8BpILdfVmmGwgHLNXpRJh2I%2BFkdRT5EGtngfmqTw1CIyG4PvbE12%2FuPb6qs51Kb3LluoO%2FVorLJ3DJq2m9YeKetxDIRo%2FKzc7R04qZCTYOjUnHaWlJwcMtqxAqdxdD068iKs3DVxwP61Zo6whT0PZfn80tW8cLKiOrarjGBLKTjGOpreU767SfsgmxSv0LLLXrBKKI47R9T7YK78WS0mkRIUb%2BA%2BjmcXPwUk57TvtBKKZQsLVQlPdRuxRm5uBrPGxXuIypaLItmrqeAZO%2FEIbSK8qXOIXp%2Fr8IUL5bZMO8wg7AoSmpxpf387wwWycVKMcD45PVcMPTRwr4GOqUB%2F0rCxVtBVMi%2B8ynuEMDlsntFoQp2Og5LyUxFuOTmI1rCKfrlO%2FQr0QnwHqe9jzYdND1eJmv3NatHLptuIyAOqjjAdI79mJb0p%2Ff3gwvyDbt%2FadLq2d6VbL2dgwCWsUAj6vQKUA%2Fr0tiB37iWuxVdhnTUQT5GYtRGMJk2pYjY3BJs92bJlj1%2FrrP1rwp1OswpcKYKbik%2F00EfNPY45qhdUY7WJG37&X-Amz-Signature=e3c0aedebd24fe9fb7d59c3f515d406489d5be2e9dbc1242ae317fb5af249223&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSLHHTY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIGrbcWGrqhIadhmfpx8UwV5xtqWn%2BoAW%2FYllMDjUgZeAAiEAz5yLzRO7ibPynhwWsYYQlDlkZT91ML2NJaM0OlPddwEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIa%2B6qtg2gEfWIHiircA2gkRWBGCPYFl5m6pAkc%2FDFmm8NH4aaXR3G10mPXralHezBxH3qouWphclnwls19NeZRuaopYZ0pDbSY3KNKQjc1QwL7dyvB%2Fwi%2BYlkLZtXDnPc5LhQbEHhNVtf0e91izk6aRSfdzdBbWLii3VVH1DwMnhbczEAayAmjTvGku87hq2Ts72FPZDutC%2BUXQhlbDlMm1RwKLRwA6qRmfoVXGLEIpTXOCujFS054jsECvRFaeQFsDSOOjUWSPM5s5TSXUSjhX3jQ8iH9iZmL%2FthVKOSvVd65cFRhijB%2BIlVQjWixStidFeZfj8BpILdfVmmGwgHLNXpRJh2I%2BFkdRT5EGtngfmqTw1CIyG4PvbE12%2FuPb6qs51Kb3LluoO%2FVorLJ3DJq2m9YeKetxDIRo%2FKzc7R04qZCTYOjUnHaWlJwcMtqxAqdxdD068iKs3DVxwP61Zo6whT0PZfn80tW8cLKiOrarjGBLKTjGOpreU767SfsgmxSv0LLLXrBKKI47R9T7YK78WS0mkRIUb%2BA%2BjmcXPwUk57TvtBKKZQsLVQlPdRuxRm5uBrPGxXuIypaLItmrqeAZO%2FEIbSK8qXOIXp%2Fr8IUL5bZMO8wg7AoSmpxpf387wwWycVKMcD45PVcMPTRwr4GOqUB%2F0rCxVtBVMi%2B8ynuEMDlsntFoQp2Og5LyUxFuOTmI1rCKfrlO%2FQr0QnwHqe9jzYdND1eJmv3NatHLptuIyAOqjjAdI79mJb0p%2Ff3gwvyDbt%2FadLq2d6VbL2dgwCWsUAj6vQKUA%2Fr0tiB37iWuxVdhnTUQT5GYtRGMJk2pYjY3BJs92bJlj1%2FrrP1rwp1OswpcKYKbik%2F00EfNPY45qhdUY7WJG37&X-Amz-Signature=30a8bf416c19280241230003cb6fe4bd715f6305c51d4c5d347637069de7d11f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
