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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GBQXKO%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCPBrIrLOZmo6YaQulnvMFNjbqHAMEyPLQWz3t3vSSFWwIhAIrjrHbpzHXJM3LXIfmUfjVKx6j9cgPwmcL9RQ9c4HHOKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9jDxOf9p6ppzPt1wq3ANcpkFzxvbqfPcrPPXK0M6aW2ZTp0t0KuKO%2BWjRU9fmleVbBgOc1X93kxINjnedLyM%2BMLjZqMGrJmWO11G27CCKAzYemltivUSHNQQ35b%2BEp1JidksQ1HI6JR%2FPch3K%2F6aqoAtiZlky46DJXKUdxaIOqI%2BqrpGrau%2FAzjiH2S45%2Blpmc8ehTW%2FZywo0XCI3Oeza0xRj%2FPsLWGtsT5dBFSv5RcGAUlOLIeXdNS1lWjk6NQH9O7EhCE4784L1S1X5cYbGxVPFyW35qbfJ0%2FMX%2FrzmRNJI%2BOZVf%2BTZU7DfOgD0pVSfEMQVQfBkpugLKluMUKlyWH%2F6veW4daAyCjJSV%2BHgO05ZFhIwDZDrZ%2FFACWdV3zWvUwnUKexiwWIoQSWxYoPyGMlhlduBsu3E7a5F9EbHVVglccJ8UkSejek4SHj4sr4L3%2BXCbTqeiOoSbasPRP2TlJr9mZJAsD3cUBNEneSYzGYa58n8Z%2FtIvtqlrosDRM22mhKSIoMoPK4vDkEsPpDDvLHBbmRYr9sLP0vxkR%2BDpoWimf%2BMvpuXJco7GBKF4ytYjPmbpDlzqMnJzGU4pe3lemVmpNrfg5yMMi48og2d3hYEAlgjITvsiNxYp8Awr0mmbFZPAvu6En7okDCou6PABjqkAVWASLFMFZzLHnaVMbqkEyAtNbFM2ZsgYq2xSt0cMijYyEga4Rnpwgj5iW0enjkJq9M02H8bcL7xFDhg%2Bz3A%2Bnpv9fQZPyghZ9T2LDdgoarNRmgET%2BeIkGHQ0ShRpz2pjYJedCjL3UFWn4dN6AH4zsu3tfikghaaCBoJ3dCC0BYLe%2Ffc2%2FzEseMcR3oMXUNxKvwQb5DfkhglRF%2BDZjOcERSbDFNa&X-Amz-Signature=c9f1d2f27ba1e7bc49f64cdc47f40336f05994b382cd17ac42ba7797328568e4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GBQXKO%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCPBrIrLOZmo6YaQulnvMFNjbqHAMEyPLQWz3t3vSSFWwIhAIrjrHbpzHXJM3LXIfmUfjVKx6j9cgPwmcL9RQ9c4HHOKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9jDxOf9p6ppzPt1wq3ANcpkFzxvbqfPcrPPXK0M6aW2ZTp0t0KuKO%2BWjRU9fmleVbBgOc1X93kxINjnedLyM%2BMLjZqMGrJmWO11G27CCKAzYemltivUSHNQQ35b%2BEp1JidksQ1HI6JR%2FPch3K%2F6aqoAtiZlky46DJXKUdxaIOqI%2BqrpGrau%2FAzjiH2S45%2Blpmc8ehTW%2FZywo0XCI3Oeza0xRj%2FPsLWGtsT5dBFSv5RcGAUlOLIeXdNS1lWjk6NQH9O7EhCE4784L1S1X5cYbGxVPFyW35qbfJ0%2FMX%2FrzmRNJI%2BOZVf%2BTZU7DfOgD0pVSfEMQVQfBkpugLKluMUKlyWH%2F6veW4daAyCjJSV%2BHgO05ZFhIwDZDrZ%2FFACWdV3zWvUwnUKexiwWIoQSWxYoPyGMlhlduBsu3E7a5F9EbHVVglccJ8UkSejek4SHj4sr4L3%2BXCbTqeiOoSbasPRP2TlJr9mZJAsD3cUBNEneSYzGYa58n8Z%2FtIvtqlrosDRM22mhKSIoMoPK4vDkEsPpDDvLHBbmRYr9sLP0vxkR%2BDpoWimf%2BMvpuXJco7GBKF4ytYjPmbpDlzqMnJzGU4pe3lemVmpNrfg5yMMi48og2d3hYEAlgjITvsiNxYp8Awr0mmbFZPAvu6En7okDCou6PABjqkAVWASLFMFZzLHnaVMbqkEyAtNbFM2ZsgYq2xSt0cMijYyEga4Rnpwgj5iW0enjkJq9M02H8bcL7xFDhg%2Bz3A%2Bnpv9fQZPyghZ9T2LDdgoarNRmgET%2BeIkGHQ0ShRpz2pjYJedCjL3UFWn4dN6AH4zsu3tfikghaaCBoJ3dCC0BYLe%2Ffc2%2FzEseMcR3oMXUNxKvwQb5DfkhglRF%2BDZjOcERSbDFNa&X-Amz-Signature=0a56ea0c9c8073707aac637b7437d84c49ff37d3c0d724275f441a2d819b1436&X-Amz-SignedHeaders=host&x-id=GetObject)

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
