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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6R35NPI%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCq6df%2BBTmzCtYPb242frFo%2BQuCM%2Bsye67N5pW32S7ETAIgSIaFqFEAMd%2FA1hYkbuw4BDj2%2ByWRuaTKSmVvlMX%2BNbAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPoIw6ZrbtoL0EssOCrcA30A9cUsgIsYHGF%2F3ycDkv6n37mCqqIfxr9AOEkXA3vEcw2UcUgv76mNE0nkVZO6iwOBo3uwXL901o1auFIVo%2Bfq7kQZJFjJkXpIzLCDsIHAjRS%2Fwa0ELpl8YXPj8PB9kghvOHU2xGBwW0Fi0a5JNWBEs%2BkCCyuGZfYn%2BYdCyeD5oT6p8MWfPc2n%2FvkkpH%2FHV5%2FKeQQt97PAu8sNMPa6VxcvNQIX1ip9S2O%2BIZLbFencj0WGP44LvCUVkwXfri1nE32eBZupPexyRB5aXjjeuwdWwT9Lxb1cx1urtBHZn7DOKGwm3RWKL5td4aeoWMKJhhwozY1D7epVWB4I2tV84ajmqYHbkuozucoAri%2BJx%2FOYG968XK1wXDcoln5P9x1GQbMGjpoB5waHCslp3gX9Kr7uhp8P1iHChywP7gM22wtNzgAxZXb7erSsCyDL4o9xhcZ5H91G3s7Jkf1gphe1YAYLLEr0BSuZIr9SbQjJoXi2%2BzbW%2F%2BfJw%2B06y0lnL19SHnWyrkM2yYD%2Fdlk352WHH%2FNjdW9QqUtDYPW1r5Ugku3hLuomP10gc1rBReheUls6I%2Ft41QMuEPkXgBqP5qg5mhLxR2lbwSYA142%2FxrxJ0mdh%2BwoIFrSamC1Ert%2BdMPKa4cAGOqUBM%2Bqt4zxzsvSjN02HaD%2FJqGGm0ForE3nG15GEnfU%2B9pDvpQk4M01YnvGXXvLYwlwIL6%2BeOmUsGviYJh8YqowiMv6iEJKl2RI36UOHs0IRNJAygfrmFpAIyIslohKSxczELiN2qCvu%2Bo%2BuAgQTTkOduY2puwpVc3oBcLyEFvqJbmeZfqv%2FDN1np2rPTPMrIRAfB3fGkIf9ZwkBvPiN9bjSGYbewj%2Bt&X-Amz-Signature=b3dc1b90fee0b669192e3aec1c6b2d3dd8f3b12ede0673761546e34c4d44a50e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6R35NPI%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCq6df%2BBTmzCtYPb242frFo%2BQuCM%2Bsye67N5pW32S7ETAIgSIaFqFEAMd%2FA1hYkbuw4BDj2%2ByWRuaTKSmVvlMX%2BNbAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPoIw6ZrbtoL0EssOCrcA30A9cUsgIsYHGF%2F3ycDkv6n37mCqqIfxr9AOEkXA3vEcw2UcUgv76mNE0nkVZO6iwOBo3uwXL901o1auFIVo%2Bfq7kQZJFjJkXpIzLCDsIHAjRS%2Fwa0ELpl8YXPj8PB9kghvOHU2xGBwW0Fi0a5JNWBEs%2BkCCyuGZfYn%2BYdCyeD5oT6p8MWfPc2n%2FvkkpH%2FHV5%2FKeQQt97PAu8sNMPa6VxcvNQIX1ip9S2O%2BIZLbFencj0WGP44LvCUVkwXfri1nE32eBZupPexyRB5aXjjeuwdWwT9Lxb1cx1urtBHZn7DOKGwm3RWKL5td4aeoWMKJhhwozY1D7epVWB4I2tV84ajmqYHbkuozucoAri%2BJx%2FOYG968XK1wXDcoln5P9x1GQbMGjpoB5waHCslp3gX9Kr7uhp8P1iHChywP7gM22wtNzgAxZXb7erSsCyDL4o9xhcZ5H91G3s7Jkf1gphe1YAYLLEr0BSuZIr9SbQjJoXi2%2BzbW%2F%2BfJw%2B06y0lnL19SHnWyrkM2yYD%2Fdlk352WHH%2FNjdW9QqUtDYPW1r5Ugku3hLuomP10gc1rBReheUls6I%2Ft41QMuEPkXgBqP5qg5mhLxR2lbwSYA142%2FxrxJ0mdh%2BwoIFrSamC1Ert%2BdMPKa4cAGOqUBM%2Bqt4zxzsvSjN02HaD%2FJqGGm0ForE3nG15GEnfU%2B9pDvpQk4M01YnvGXXvLYwlwIL6%2BeOmUsGviYJh8YqowiMv6iEJKl2RI36UOHs0IRNJAygfrmFpAIyIslohKSxczELiN2qCvu%2Bo%2BuAgQTTkOduY2puwpVc3oBcLyEFvqJbmeZfqv%2FDN1np2rPTPMrIRAfB3fGkIf9ZwkBvPiN9bjSGYbewj%2Bt&X-Amz-Signature=0e30919c9c13f66744423da721267fe8285d6fb8ba6f8d64d2d2e407b365d706&X-Amz-SignedHeaders=host&x-id=GetObject)

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
