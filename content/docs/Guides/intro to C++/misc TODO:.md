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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QEW4QIS%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDZYtCP8FdJukY1RZJfWPxhGNr3GWC%2BHgNSH%2FK5BV0pqAiEAxDwA%2BtChMBUMHCJA5htc%2FpLrzlq%2Fhx%2F6CihDOP6mvekq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDG5Oanifcf6%2FYxwHtyrcA41ywvmbeyY1zfjacwYe0dOhSjlL5mCZOtA5jXf8WASCFT9FmOiLUeTwaHUHixaFjuoGk%2BgMqkdPtzyuHuTt%2BqFxLBlHHJbKuyFYucYLOTdFnKSz4P5AFlIDiBky0laLOUMU4wGlqlsz2xSh2Jxd7%2F2Hro56OrDWuDrPPRWxzfulwHbfuLkzUsIxOn6A96rrKHIF4Y1mEXRLkdBAwwZBkGIRfQ1Z6zrLbmeHZ5ePeFXpnhCMZuhdQ5pzbWhWDtafp74UAtfDmHEv%2B%2BFgkmxw%2FC%2FvlZc%2FPKc5%2BorT055OVILPHcPniUyMJ%2BMxKzuUZ1gvwew1kW70TTvPEtOH%2FnRyv3Y3t7T%2Fk82fpGAhQhGsTNMwfL%2Bb4lSDRs%2F6tZ9fzZBmGMenWPHr90nKdBtXQBOu%2FldX9afCRZDhpbrp1F9qbDgEtj5%2BPEQjB3sbGhHqdnAKXQtxI2zTWm55Kn%2BANnkte6armVYH0AsZmR2J2Tzs9Sz0pDhgMB%2Bceh544Ijh5fRv%2FyQ6phJWobO6vFrHbFUYMbwKlVO2ac1Q0I%2FBjfix4WeawnSrT0q3UX1oHt35ZjZxvsuKtzZ4pgJkWsO5NUMHuOvaPrF6ktzTLQJh25cd7hZLI69ZBBnshROlPgF8MPfY7L4GOqUBTlP0tQT8ErIqocmDbE5s34WiP7r3IvfnDpJNT%2Bs1dugiXy7oHaWZtJwqkru2nlmZyVUC6B69eKN7Jz2arzQjFGJOKTZKy7nCw7e10d1h30ADX8cnxQdr7EjpzqNCAfctLTrKXmsben2kyVGQyiKSLcKliwIgkrMN1JGemwszyZwT8b3JlExu5O13hD%2B%2FeUBid6%2BDEqZ08f%2BiQxpn9LgaP%2Fhh%2BFX2&X-Amz-Signature=2328d22900bbba8f0b99a034c257bec5876783910a9aa04e4977064c9ad6adea&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QEW4QIS%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDZYtCP8FdJukY1RZJfWPxhGNr3GWC%2BHgNSH%2FK5BV0pqAiEAxDwA%2BtChMBUMHCJA5htc%2FpLrzlq%2Fhx%2F6CihDOP6mvekq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDG5Oanifcf6%2FYxwHtyrcA41ywvmbeyY1zfjacwYe0dOhSjlL5mCZOtA5jXf8WASCFT9FmOiLUeTwaHUHixaFjuoGk%2BgMqkdPtzyuHuTt%2BqFxLBlHHJbKuyFYucYLOTdFnKSz4P5AFlIDiBky0laLOUMU4wGlqlsz2xSh2Jxd7%2F2Hro56OrDWuDrPPRWxzfulwHbfuLkzUsIxOn6A96rrKHIF4Y1mEXRLkdBAwwZBkGIRfQ1Z6zrLbmeHZ5ePeFXpnhCMZuhdQ5pzbWhWDtafp74UAtfDmHEv%2B%2BFgkmxw%2FC%2FvlZc%2FPKc5%2BorT055OVILPHcPniUyMJ%2BMxKzuUZ1gvwew1kW70TTvPEtOH%2FnRyv3Y3t7T%2Fk82fpGAhQhGsTNMwfL%2Bb4lSDRs%2F6tZ9fzZBmGMenWPHr90nKdBtXQBOu%2FldX9afCRZDhpbrp1F9qbDgEtj5%2BPEQjB3sbGhHqdnAKXQtxI2zTWm55Kn%2BANnkte6armVYH0AsZmR2J2Tzs9Sz0pDhgMB%2Bceh544Ijh5fRv%2FyQ6phJWobO6vFrHbFUYMbwKlVO2ac1Q0I%2FBjfix4WeawnSrT0q3UX1oHt35ZjZxvsuKtzZ4pgJkWsO5NUMHuOvaPrF6ktzTLQJh25cd7hZLI69ZBBnshROlPgF8MPfY7L4GOqUBTlP0tQT8ErIqocmDbE5s34WiP7r3IvfnDpJNT%2Bs1dugiXy7oHaWZtJwqkru2nlmZyVUC6B69eKN7Jz2arzQjFGJOKTZKy7nCw7e10d1h30ADX8cnxQdr7EjpzqNCAfctLTrKXmsben2kyVGQyiKSLcKliwIgkrMN1JGemwszyZwT8b3JlExu5O13hD%2B%2FeUBid6%2BDEqZ08f%2BiQxpn9LgaP%2Fhh%2BFX2&X-Amz-Signature=22d506d39e061082cca5fa9cbb87628887e8ba4c35ec4d7590d7c8476f737a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
