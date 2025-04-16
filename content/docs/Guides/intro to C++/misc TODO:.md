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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOY55I4L%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWjcsRLEzs61g%2Flrb8aRefWfil3JE1pgevGyi2uFdiMgIhAI13Ytn4QnpsTl1ov2WEVCDHcizePXVG25U0665niyL%2BKv8DCEQQABoMNjM3NDIzMTgzODA1Igwf6T3YOitQPQYJwtoq3APERKxL1sp6tTqnyCNn3cjRZ%2B0AIvR3GUQsgZPaLsQrJ0HkA2Lpl7GdOAZ%2FVtOT0ZVCK6cA4SAENm38tewJMHs%2Fvstab8o9MUXt6VSilLVMS9NrUnZoD1o05b404ASQS1ZuIqEyHUNkZ5IzrQqu9olFOcDNGE%2BwUPAu6ZgFlLTCZJnOyPLeNsf9qjnNyk6tC7drXt22zz5AJMDnQyCyDQ6x9mh%2Fagr%2BBE0wGWyohg6A7tuU65b8vbRPTSx%2B%2FH5Lx%2B1KVBT2OlTfc%2BAplo1t05dQ2mwWsXHyXv2N0O2kOXWrp8w7cFS2vVYXDys6DGEmEgTQO6KReyy3iwF%2FmV%2F5SNsq1Ra8O17OfK26duDPwR3m%2FGF8J0nHLiCP3iXDlCFw0QeKFGGKaW4WeNSxsxyrhJYEmi6qafugeFw90l0SMJ9Z2uvM5cUWWKcsqhZLCtHcmSYTe6vOBUlXhTUJyByLeRd9KiVOY%2FpQrM8OAfGRF2aQYfcxN8ETDHwRseemUjPYswUCj9dhAcSBlc35dSmVHbRyK%2F%2F8xfzf%2BLnx1qLGOjttWGSN2cDhRQccNQoe9jNazNKmAPtUU7TI4zXNQ5t74k5oxmUGsI56AGiRgOWRi9g51nZRC96cUHRL2h9N6zCSj%2F6%2FBjqkAeoVylcmh37JP4B2WInc7PedwwwCnIZz2s6Y6zTih3LEOfXzstVzX4BYAtaYJ0HezAb6caRTLtRZ8BgPtDn4aEzuOpTOKGYWDCfASoDIJjoyKf5UhDlLYlRr%2BCIFGiBYTZOtWxcyHNFVvrg9q6feHkl99aJ%2FT0Tw2EkaQKpoXTKfT5yCYcA2LLsFvImQjduXRHprGo2YrPimv%2FVdnSzre%2BzEDMfO&X-Amz-Signature=f28fba088087edcad545da005b3e3e84c4ac1fe31ebf2598ab98ffa6b518cbae&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOY55I4L%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWjcsRLEzs61g%2Flrb8aRefWfil3JE1pgevGyi2uFdiMgIhAI13Ytn4QnpsTl1ov2WEVCDHcizePXVG25U0665niyL%2BKv8DCEQQABoMNjM3NDIzMTgzODA1Igwf6T3YOitQPQYJwtoq3APERKxL1sp6tTqnyCNn3cjRZ%2B0AIvR3GUQsgZPaLsQrJ0HkA2Lpl7GdOAZ%2FVtOT0ZVCK6cA4SAENm38tewJMHs%2Fvstab8o9MUXt6VSilLVMS9NrUnZoD1o05b404ASQS1ZuIqEyHUNkZ5IzrQqu9olFOcDNGE%2BwUPAu6ZgFlLTCZJnOyPLeNsf9qjnNyk6tC7drXt22zz5AJMDnQyCyDQ6x9mh%2Fagr%2BBE0wGWyohg6A7tuU65b8vbRPTSx%2B%2FH5Lx%2B1KVBT2OlTfc%2BAplo1t05dQ2mwWsXHyXv2N0O2kOXWrp8w7cFS2vVYXDys6DGEmEgTQO6KReyy3iwF%2FmV%2F5SNsq1Ra8O17OfK26duDPwR3m%2FGF8J0nHLiCP3iXDlCFw0QeKFGGKaW4WeNSxsxyrhJYEmi6qafugeFw90l0SMJ9Z2uvM5cUWWKcsqhZLCtHcmSYTe6vOBUlXhTUJyByLeRd9KiVOY%2FpQrM8OAfGRF2aQYfcxN8ETDHwRseemUjPYswUCj9dhAcSBlc35dSmVHbRyK%2F%2F8xfzf%2BLnx1qLGOjttWGSN2cDhRQccNQoe9jNazNKmAPtUU7TI4zXNQ5t74k5oxmUGsI56AGiRgOWRi9g51nZRC96cUHRL2h9N6zCSj%2F6%2FBjqkAeoVylcmh37JP4B2WInc7PedwwwCnIZz2s6Y6zTih3LEOfXzstVzX4BYAtaYJ0HezAb6caRTLtRZ8BgPtDn4aEzuOpTOKGYWDCfASoDIJjoyKf5UhDlLYlRr%2BCIFGiBYTZOtWxcyHNFVvrg9q6feHkl99aJ%2FT0Tw2EkaQKpoXTKfT5yCYcA2LLsFvImQjduXRHprGo2YrPimv%2FVdnSzre%2BzEDMfO&X-Amz-Signature=744f3e47e0851de078cc98e2b2e8d479a1ba42d56ba531b1c00d47658ca54214&X-Amz-SignedHeaders=host&x-id=GetObject)

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
