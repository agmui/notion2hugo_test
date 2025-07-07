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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIBAEATL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIHNEXdr%2F6P7T94L%2BU81ZNn5dLNbyePxEIvjlAuNTz7dPAiBYbfBwGhn76Qk%2F7vbJhZjHJ%2FqFTUw0AVNNY7jCL%2BeghSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMNBg0iPWXPnGGQJTAKtwDPbCoOM3h2h2hOKupE9eyS7ugVkXEh%2B3jSoelW6oh%2FwBAOBH%2BOtFajX8yE360eLHF%2BvPsSGJjV%2Bx9Jmu67i%2BCOqhmMQx1%2FCowQAGjRejydvXDSSKCsi3cDClu8AMzSjE0DphoWirQ1P3i32cMVJd5FSnd2PkXFiAoJQr2VdcMvBIkESgiEw98lABWcG1uNdVC%2B24TFAFirzbFvA2R7BSSW7nMbMKGydN89JMzqJ5c3jRO35ULsb5xP1w3DhhvrquxUZQcW1wSf9h7NExruafwmHVz37LBnyZZNIamIW55%2B1h6KqvBX317NfANK69ZY1E45UDCHzzc9oImpwhxkh3MF1YmTW1ZhnSShD5Xa8gDdAHwwdHGcE0x82WAWNO2C%2BMt%2B1%2F57sKyapZPvGd3EJITKPfiw06%2FUrgLOs97is6RM1jBYfcjqHvw9Sz5uhr3jzxpf5O3uzJ9LyU09BiuN4kiwMFVg8qlEy8%2FZ8BjH3U%2FejJVfXl4gGkBF1tO%2FhbXy8LnlP4kg5eed1VVxSsITOo400KM5rkJAzx4orDtZaOPvkGQ5mcaFn47i0J0J5l0%2FSno83pugFYo5hyNTGcnlKW9UX%2FNjpZX5940K65Hp1i8lCjV4GBg4Ybvcfev8mow1rmvwwY6pgG5aA0BMdih3A%2B1v7XHXSXLR1%2BzO2WDWfcufQUtDkPsEcs7bf0GB9C5in%2Bu%2F9QqeAnTc5ZgJGDdS0YYV8UOkX9WAMvGexxwKatVDT3t1rp5XCVPTzJwjOug9B0ywm%2By2PlEie7lS3yayv3n7LU4PiJALBYqyaqBlS5q1n9Vd02kkW16OgppP8jSCaocj4q%2Fe7mXkwZkuH0gafzDumCP5EmvkOcWMb%2BJ&X-Amz-Signature=4dce8c8e3b6a0adf53d29782eb9f933ede57270f6a40cb74e1b09fb064dcabbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIBAEATL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIHNEXdr%2F6P7T94L%2BU81ZNn5dLNbyePxEIvjlAuNTz7dPAiBYbfBwGhn76Qk%2F7vbJhZjHJ%2FqFTUw0AVNNY7jCL%2BeghSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMNBg0iPWXPnGGQJTAKtwDPbCoOM3h2h2hOKupE9eyS7ugVkXEh%2B3jSoelW6oh%2FwBAOBH%2BOtFajX8yE360eLHF%2BvPsSGJjV%2Bx9Jmu67i%2BCOqhmMQx1%2FCowQAGjRejydvXDSSKCsi3cDClu8AMzSjE0DphoWirQ1P3i32cMVJd5FSnd2PkXFiAoJQr2VdcMvBIkESgiEw98lABWcG1uNdVC%2B24TFAFirzbFvA2R7BSSW7nMbMKGydN89JMzqJ5c3jRO35ULsb5xP1w3DhhvrquxUZQcW1wSf9h7NExruafwmHVz37LBnyZZNIamIW55%2B1h6KqvBX317NfANK69ZY1E45UDCHzzc9oImpwhxkh3MF1YmTW1ZhnSShD5Xa8gDdAHwwdHGcE0x82WAWNO2C%2BMt%2B1%2F57sKyapZPvGd3EJITKPfiw06%2FUrgLOs97is6RM1jBYfcjqHvw9Sz5uhr3jzxpf5O3uzJ9LyU09BiuN4kiwMFVg8qlEy8%2FZ8BjH3U%2FejJVfXl4gGkBF1tO%2FhbXy8LnlP4kg5eed1VVxSsITOo400KM5rkJAzx4orDtZaOPvkGQ5mcaFn47i0J0J5l0%2FSno83pugFYo5hyNTGcnlKW9UX%2FNjpZX5940K65Hp1i8lCjV4GBg4Ybvcfev8mow1rmvwwY6pgG5aA0BMdih3A%2B1v7XHXSXLR1%2BzO2WDWfcufQUtDkPsEcs7bf0GB9C5in%2Bu%2F9QqeAnTc5ZgJGDdS0YYV8UOkX9WAMvGexxwKatVDT3t1rp5XCVPTzJwjOug9B0ywm%2By2PlEie7lS3yayv3n7LU4PiJALBYqyaqBlS5q1n9Vd02kkW16OgppP8jSCaocj4q%2Fe7mXkwZkuH0gafzDumCP5EmvkOcWMb%2BJ&X-Amz-Signature=1d60f295c2c65d5743073eaedc3401c368dae2e2b8301fc28131b0c4b96068fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
