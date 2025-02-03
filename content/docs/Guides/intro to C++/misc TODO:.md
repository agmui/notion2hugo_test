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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCBHLLS7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCkVS6d0qB1CgfIRQe0lZFpPFjmfcvssIejeGZOYObaPQIgQHuO7SDyR%2FhCzGL4IOTKGnaPVq8dgmrnYm%2FJMD3tvK4q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDLalcngN%2B8v%2Bb%2Bw2oircA6vSsaFXH3WQAqN%2FH5ejXRc9lQWIXHj9x5qjLWbEMUKsoU0gx7k%2FaOetzc9rsJXxydp7ZSndrtw4Ym3DK5%2BkTbmgZ1bYtpgk7OFORzTxPz6wJWIIJHCZc32NSsHkSFvZ3aaEtBO2Wtv%2Fc6YT37l14NtkQbotsR1BFUWIbfonFTrC73%2Bn0umYT6NeJMkn6A%2BLpgB17v2j1fF0MyqRdzMSwdsZOZxzoZcPBppKSIvXZ5BwdDYcJKc0TlDigG7YLIEE4%2BKJKCnIPoCcuDjEfQ150OjvLvcEHGY5HO111IysfqoxAMTBaFHLGV5TzJLs20IXYHo6hs3%2BySe6oK0L5E6tf0ipS8ShJndwTFiNGzUyQ0HVS5Yx8BQhQkkY%2B4sEZG9oMJzD%2Bm%2F2dWJhKZQ5gYl7tqgbKJ0pPx0sBzDxCzEIy7fHwTaMBaMEHkcJ%2BSwlkLIhUk7RLEUT%2Fv%2FX%2BymYpHMmtY90kPwbxoeTB5tmKL%2BOOZhqF8BCoJFPVrj%2F4Z22CiTD%2Bv6NDNexhWPBz3Z54B0RZSKurP14dai3gpQvRwtqpRBUUNMCtfaREFBAAgxlBm8tB98AKvttgBKkEci7VBVeTEXdef3RtkqCmhKwL3gAJSPluJ2HfR1vlqC3rhe%2BMP%2B%2FhL0GOqUB%2F7kJPsjPPBwq6y%2FZvk4yibpXb9GPzGNasR6rUuD6MI6XMp%2FGI9%2BXN8mlx9G8ONjkyqwZnYC0bXA0QWhp8xr%2BrywJ7spk2Q5GzG03LTrxqGKcWrAy%2B3z75%2FTHM0rYlHVQuLhZT03MP8%2FJtdvRDef9iBz%2B81BRn%2FVIcBC4iU3NpJ%2FeuKelujdvaf%2FkPApZ1WC2DH%2FhrehgL7XXRjKYbJRtzi51FXfM&X-Amz-Signature=b2672cf1559744fec0fff9e84767202ba942f8bb3779493e187106a930a05751&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCBHLLS7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCkVS6d0qB1CgfIRQe0lZFpPFjmfcvssIejeGZOYObaPQIgQHuO7SDyR%2FhCzGL4IOTKGnaPVq8dgmrnYm%2FJMD3tvK4q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDLalcngN%2B8v%2Bb%2Bw2oircA6vSsaFXH3WQAqN%2FH5ejXRc9lQWIXHj9x5qjLWbEMUKsoU0gx7k%2FaOetzc9rsJXxydp7ZSndrtw4Ym3DK5%2BkTbmgZ1bYtpgk7OFORzTxPz6wJWIIJHCZc32NSsHkSFvZ3aaEtBO2Wtv%2Fc6YT37l14NtkQbotsR1BFUWIbfonFTrC73%2Bn0umYT6NeJMkn6A%2BLpgB17v2j1fF0MyqRdzMSwdsZOZxzoZcPBppKSIvXZ5BwdDYcJKc0TlDigG7YLIEE4%2BKJKCnIPoCcuDjEfQ150OjvLvcEHGY5HO111IysfqoxAMTBaFHLGV5TzJLs20IXYHo6hs3%2BySe6oK0L5E6tf0ipS8ShJndwTFiNGzUyQ0HVS5Yx8BQhQkkY%2B4sEZG9oMJzD%2Bm%2F2dWJhKZQ5gYl7tqgbKJ0pPx0sBzDxCzEIy7fHwTaMBaMEHkcJ%2BSwlkLIhUk7RLEUT%2Fv%2FX%2BymYpHMmtY90kPwbxoeTB5tmKL%2BOOZhqF8BCoJFPVrj%2F4Z22CiTD%2Bv6NDNexhWPBz3Z54B0RZSKurP14dai3gpQvRwtqpRBUUNMCtfaREFBAAgxlBm8tB98AKvttgBKkEci7VBVeTEXdef3RtkqCmhKwL3gAJSPluJ2HfR1vlqC3rhe%2BMP%2B%2FhL0GOqUB%2F7kJPsjPPBwq6y%2FZvk4yibpXb9GPzGNasR6rUuD6MI6XMp%2FGI9%2BXN8mlx9G8ONjkyqwZnYC0bXA0QWhp8xr%2BrywJ7spk2Q5GzG03LTrxqGKcWrAy%2B3z75%2FTHM0rYlHVQuLhZT03MP8%2FJtdvRDef9iBz%2B81BRn%2FVIcBC4iU3NpJ%2FeuKelujdvaf%2FkPApZ1WC2DH%2FhrehgL7XXRjKYbJRtzi51FXfM&X-Amz-Signature=50d0de26f856f0fa5466a5a5472dd7c15c7f1885f9d986b54e89cadab1a37517&X-Amz-SignedHeaders=host&x-id=GetObject)

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
