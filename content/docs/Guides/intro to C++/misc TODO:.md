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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OFNQHJD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDtBkcYUbwdCd5L07uRIDw%2Bi%2F2QG7UVmhAR69kP23JR8QIgdwAN5vtULjRaFpx%2FlnnYvaiJtCcpPhiWn%2FlyarxS%2B6Uq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDozr3BBPo7pCWXcnircA73TeyFaMG62C0TfDb%2BDxWA%2BWu%2FdlZLrbmsFTiqiGzbqAhyzQRdnEQoqd8D5MKE9uFN8mw72TxHnwkQCnn1IUG6x4pRu2doyJyq0nxKTMNgxxwVcCr1U7mVVi6NGBdXq3oFgo7xavBDd%2BAUzop8egFl2zLM5VITxR0ltwyhA3KOkUJIUPhdrvvjvXRkgav2d9bHBfYrTKYIzDJhZNw6MTbgUB88vVWSRGM3nz2CkOIY9cDMJyBI3cBBbCD9MkZT%2FucztsXpOiHMRhld82VWad0FzaUeq5ctaaexccFoYJXUFaSg3ak2hmJ1FciTJcuXFiW9usOZasQrNzDKwURH6CJuXObm50XFdcNx5L%2BihyaVFHPXfB2qr9%2FI%2FHEZYWh97Y%2BthITNJh2NB3CROqs%2BJm1X4R60e5iKlVRecnB3U0QWIPPwHDoAarmGrFTiHQA2fPmAwRFxHzfAMbO1ipmw%2B2Hvze9nRIepPZ%2FkO6yDTf4YArg%2FcN0KDCo2Sof9J9kkAKT7wvFrmRNG7s6xkO4vKnoJnJrUE0%2FBIVMUT4TXwsaBGmZq6msX6Ppsnfy9T3vwCSoIYN8IbJeedfYmup3GxGAJ%2BpZWJl8guULYpLcwlSFPIDL%2BR7gTa57Qaj2sSMJSbyr0GOqUBqszjcjGMDsouuY5gK0T73QrkqsqPvJBZKr7im%2B3%2FDyuGZ5Lmb2HpjTnBUSPPbZlnyxMhJU6tP3J%2F0HTkFiHUOVJOva3XPT%2BthHP%2FTwUlZOjXeDzuxJW9%2BK0fbSzsoNoKeBE0oTnMXCWRdT7RVIyMr3zQF9M9QwbKsRwsL5I0Hc5LNZ8D7hs0COzyJ7GaFKmVEL5DRjWP31jyqUjRf6nctmttlkgf&X-Amz-Signature=057306b2032b74acb39bd9aa9d242e3f0e2b6681f5cd28fab389703bf42c8576&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OFNQHJD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDtBkcYUbwdCd5L07uRIDw%2Bi%2F2QG7UVmhAR69kP23JR8QIgdwAN5vtULjRaFpx%2FlnnYvaiJtCcpPhiWn%2FlyarxS%2B6Uq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDozr3BBPo7pCWXcnircA73TeyFaMG62C0TfDb%2BDxWA%2BWu%2FdlZLrbmsFTiqiGzbqAhyzQRdnEQoqd8D5MKE9uFN8mw72TxHnwkQCnn1IUG6x4pRu2doyJyq0nxKTMNgxxwVcCr1U7mVVi6NGBdXq3oFgo7xavBDd%2BAUzop8egFl2zLM5VITxR0ltwyhA3KOkUJIUPhdrvvjvXRkgav2d9bHBfYrTKYIzDJhZNw6MTbgUB88vVWSRGM3nz2CkOIY9cDMJyBI3cBBbCD9MkZT%2FucztsXpOiHMRhld82VWad0FzaUeq5ctaaexccFoYJXUFaSg3ak2hmJ1FciTJcuXFiW9usOZasQrNzDKwURH6CJuXObm50XFdcNx5L%2BihyaVFHPXfB2qr9%2FI%2FHEZYWh97Y%2BthITNJh2NB3CROqs%2BJm1X4R60e5iKlVRecnB3U0QWIPPwHDoAarmGrFTiHQA2fPmAwRFxHzfAMbO1ipmw%2B2Hvze9nRIepPZ%2FkO6yDTf4YArg%2FcN0KDCo2Sof9J9kkAKT7wvFrmRNG7s6xkO4vKnoJnJrUE0%2FBIVMUT4TXwsaBGmZq6msX6Ppsnfy9T3vwCSoIYN8IbJeedfYmup3GxGAJ%2BpZWJl8guULYpLcwlSFPIDL%2BR7gTa57Qaj2sSMJSbyr0GOqUBqszjcjGMDsouuY5gK0T73QrkqsqPvJBZKr7im%2B3%2FDyuGZ5Lmb2HpjTnBUSPPbZlnyxMhJU6tP3J%2F0HTkFiHUOVJOva3XPT%2BthHP%2FTwUlZOjXeDzuxJW9%2BK0fbSzsoNoKeBE0oTnMXCWRdT7RVIyMr3zQF9M9QwbKsRwsL5I0Hc5LNZ8D7hs0COzyJ7GaFKmVEL5DRjWP31jyqUjRf6nctmttlkgf&X-Amz-Signature=dcbe998446acdbb74dba7678a05fca3933a44014e93757e8cccf6a589ed0f145&X-Amz-SignedHeaders=host&x-id=GetObject)

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
