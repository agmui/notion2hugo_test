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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TREMOYJ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAM9L4N7X50PQxjJ2sbF8AnL%2F3z1GfTdvN1%2F9OVv2uRBAiEA%2Bh2w7pOlrfi%2BzLzNyHqpoHvCBnUJHHsUJdnfRaNIG6sqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOH5sWiNpFQjgQsmSrcA0FDKDnA6F3O0XSp5lvTQvvGqkj4HoIzViGTbe6lAk5JMyfddmexasKY%2BKJWHUtsDU4V1yO5Pvx10xdw5Xa2ksKrlUUzfRV77%2FNCOqP71poemXiKUZsyPuIlQTE3%2BALmwfTPhwJ%2Bbf2w9OAa%2FlIAVkll1s3wrAi3NzWNCGlKFfCxeV4S42Gv3TsdrkQ0v7FMr7a3noUQ5YgaunRHy7jQzk2iX3MLQ0odtFRGZ17sUvUjHKg%2Bp7LasilDOAFZ1KX9fyxAqpvfSUZa5yU0URSs3MOEP931GtyQm3%2Fz1zeWXWs2eVtlVDUDUbG9sV%2FV2kuPU70vSdey6zfHyNBaAxGXB3Z5WU%2BkDr4FRDh99hck1stlaJBPVCdvTu3jH%2FknVgdowuaPAMz1KQqJ9OCcsd332CNa%2F%2BNguYhviivUGJwJbMMRSbnKYX7PPz0BVtNqEU7NGOIolmdKUQ5C4Km7cws%2FR9718bG8%2BoARYB%2FdPjiWhdfFJrAP%2BIrCJmLFXJou%2FEjl68V6Al%2BW5UObRndO7mLXMi1mBSdrVBJ%2FVEB%2FxRk0stlCBE1IG%2FFxAJW8x57CSUP4XPW32OwfZ2MfkHDsadU40bGaUR6pmDaBq03ijalAv%2BwH22Ut0GZsypG%2FYxeSMLud%2FLwGOqUBTJ0y%2FAVzqQcgMv0eA3GnABotRxyw4DfeGDOaYW3LVJddJikZKchNEcQwFVYOOXUhUP7UhTNInsl90QNtkUdB97gMAF9vehprCOBGFom5YKtPz6RkOnLh2L6Jd%2BvpA66pMObGI9gTJ64QEWVE%2FsvETjUpnpaH52p2lVjXHc4D1zugCgGCarHYrfw7SVVxdJhkwrrrEooju0opD4zaSvZpN4uZsREb&X-Amz-Signature=e3cfc617bc0972f6127fbd4f14294709efdc3869a7ab75c3b44fefdd4abbd1ee&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TREMOYJ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAM9L4N7X50PQxjJ2sbF8AnL%2F3z1GfTdvN1%2F9OVv2uRBAiEA%2Bh2w7pOlrfi%2BzLzNyHqpoHvCBnUJHHsUJdnfRaNIG6sqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOH5sWiNpFQjgQsmSrcA0FDKDnA6F3O0XSp5lvTQvvGqkj4HoIzViGTbe6lAk5JMyfddmexasKY%2BKJWHUtsDU4V1yO5Pvx10xdw5Xa2ksKrlUUzfRV77%2FNCOqP71poemXiKUZsyPuIlQTE3%2BALmwfTPhwJ%2Bbf2w9OAa%2FlIAVkll1s3wrAi3NzWNCGlKFfCxeV4S42Gv3TsdrkQ0v7FMr7a3noUQ5YgaunRHy7jQzk2iX3MLQ0odtFRGZ17sUvUjHKg%2Bp7LasilDOAFZ1KX9fyxAqpvfSUZa5yU0URSs3MOEP931GtyQm3%2Fz1zeWXWs2eVtlVDUDUbG9sV%2FV2kuPU70vSdey6zfHyNBaAxGXB3Z5WU%2BkDr4FRDh99hck1stlaJBPVCdvTu3jH%2FknVgdowuaPAMz1KQqJ9OCcsd332CNa%2F%2BNguYhviivUGJwJbMMRSbnKYX7PPz0BVtNqEU7NGOIolmdKUQ5C4Km7cws%2FR9718bG8%2BoARYB%2FdPjiWhdfFJrAP%2BIrCJmLFXJou%2FEjl68V6Al%2BW5UObRndO7mLXMi1mBSdrVBJ%2FVEB%2FxRk0stlCBE1IG%2FFxAJW8x57CSUP4XPW32OwfZ2MfkHDsadU40bGaUR6pmDaBq03ijalAv%2BwH22Ut0GZsypG%2FYxeSMLud%2FLwGOqUBTJ0y%2FAVzqQcgMv0eA3GnABotRxyw4DfeGDOaYW3LVJddJikZKchNEcQwFVYOOXUhUP7UhTNInsl90QNtkUdB97gMAF9vehprCOBGFom5YKtPz6RkOnLh2L6Jd%2BvpA66pMObGI9gTJ64QEWVE%2FsvETjUpnpaH52p2lVjXHc4D1zugCgGCarHYrfw7SVVxdJhkwrrrEooju0opD4zaSvZpN4uZsREb&X-Amz-Signature=1cb22d5ce22a1de66f6d376ebd08c71e80f30e6e8191e34c34225c6cdc2de871&X-Amz-SignedHeaders=host&x-id=GetObject)

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
