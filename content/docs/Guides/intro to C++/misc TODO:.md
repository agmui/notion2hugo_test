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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEXVG6V7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj0IaC3%2F3o4NwfgMlJQZ3o3ISWtr7VduT7GQmgtedIAAiBv3JB1vZq9xbeeOFerT9wKYVNfdrkBJ8NrACYTB54FNSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzuufu6R69hR02YWCKtwDmPf6Hwc21kMewvKdFloieL7msfgoJzBmH8BSyUqfI6znR0RGGYdcK84SCb4b5MK9MC1b8NAdCB2aExNX%2B%2F1X7dinImJNSVcpqowCrlp4xpCBMUrY1o4vgcRvUtC0igkMjbRWwH0p1AJNeoc8ng2zxeCU7gb5n4Oztpxn2Wqayo9ryeBL3oVq2yHZsmgYV0MivEEeXKQ9iRe5W6iTMIQyzsdcn18AB7Jp7p7dfLr%2B6X7sKVCWq29fpM0dZjq8OPsO7BefJioGMi2fJ0mZxeDnTcAVzs85BsaUoiGk2IYBqBswDEsrpcgIF%2B5bAcZhFlcFTxKcKlxhrzgec95OdnTDWMrSmSM9WWI8omxcCcH7Ejn%2FYHY4oLIuniwy%2FqKm2O9NuMDYIB0AGYtJwMNnzbAozXy2%2FVfJIonXXf6aykcA5EmVxGd5sFqW6u%2FEjFLt707ryNmiNW4ATzbvAcY6A6kyAZSZp7IJU%2Fy%2FLIEho%2BFVuadNinqFlrkBfwn1FkxPOJILN%2FW3oDz2xjQxs5KRbLhS5Rw3tU7fKooqjnlO0pkHdKRc5kXUnMfFzDgVKCKY8RcZnax7a6SfkejXAzpR3TPGQF6qvhSBFDh0iEUBfv8E4guBQg9ASv4XlMj%2BSbYw%2BvLnxAY6pgGLjj0RNytmJamBNmb%2FnaIS14s2gq5zdDInZzM%2FzxB%2B2Vspwlc7BeLFUQlmkojstfEsDH796Uuw1L0HIIkKKrZrPLumIIvGtfm%2FpnryKHJs%2BbTfcMkGssBia36R8wHTiG4xx2Lk8PcT5iPTPoSBnxChyvZXzi%2BBpgsp0qulxetu3GQyFEnQbniCt4xRPkYwJ9MrM8MJLcCXRhQn7JwTfsu8ckG2I%2F8e&X-Amz-Signature=e32dfed936caac59dc9435bec17f4d43f51271984539730ae7588abd023a563d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEXVG6V7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj0IaC3%2F3o4NwfgMlJQZ3o3ISWtr7VduT7GQmgtedIAAiBv3JB1vZq9xbeeOFerT9wKYVNfdrkBJ8NrACYTB54FNSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzuufu6R69hR02YWCKtwDmPf6Hwc21kMewvKdFloieL7msfgoJzBmH8BSyUqfI6znR0RGGYdcK84SCb4b5MK9MC1b8NAdCB2aExNX%2B%2F1X7dinImJNSVcpqowCrlp4xpCBMUrY1o4vgcRvUtC0igkMjbRWwH0p1AJNeoc8ng2zxeCU7gb5n4Oztpxn2Wqayo9ryeBL3oVq2yHZsmgYV0MivEEeXKQ9iRe5W6iTMIQyzsdcn18AB7Jp7p7dfLr%2B6X7sKVCWq29fpM0dZjq8OPsO7BefJioGMi2fJ0mZxeDnTcAVzs85BsaUoiGk2IYBqBswDEsrpcgIF%2B5bAcZhFlcFTxKcKlxhrzgec95OdnTDWMrSmSM9WWI8omxcCcH7Ejn%2FYHY4oLIuniwy%2FqKm2O9NuMDYIB0AGYtJwMNnzbAozXy2%2FVfJIonXXf6aykcA5EmVxGd5sFqW6u%2FEjFLt707ryNmiNW4ATzbvAcY6A6kyAZSZp7IJU%2Fy%2FLIEho%2BFVuadNinqFlrkBfwn1FkxPOJILN%2FW3oDz2xjQxs5KRbLhS5Rw3tU7fKooqjnlO0pkHdKRc5kXUnMfFzDgVKCKY8RcZnax7a6SfkejXAzpR3TPGQF6qvhSBFDh0iEUBfv8E4guBQg9ASv4XlMj%2BSbYw%2BvLnxAY6pgGLjj0RNytmJamBNmb%2FnaIS14s2gq5zdDInZzM%2FzxB%2B2Vspwlc7BeLFUQlmkojstfEsDH796Uuw1L0HIIkKKrZrPLumIIvGtfm%2FpnryKHJs%2BbTfcMkGssBia36R8wHTiG4xx2Lk8PcT5iPTPoSBnxChyvZXzi%2BBpgsp0qulxetu3GQyFEnQbniCt4xRPkYwJ9MrM8MJLcCXRhQn7JwTfsu8ckG2I%2F8e&X-Amz-Signature=835898ed8bbbf016846b52aa4073d55b5263047175925aab86cfad39bbb73a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
