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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WLYGZR6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCu1ixxg%2Bghwmb3E%2B3UAhVdl7gvdNYpg%2BJJvEAplj88JwIgD8Evc4AxV7DQrkOWOPOdgk1LDTGtR0uaAQ9wyLxouskq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPARpxIs6wHoIAGTKCrcA254mA9awWkqejSVApKWdEfp8RYfCr7pvqrItTK5n9YeX63SqK1uwKKTnmnGuuahn8Wb5xOCgCoPiguzXdltDu1tXBPG0jr%2BkarCSDnQSRv%2FHGx6t3l0nG1ZfGS4TU3vETDqNs3%2F1XouFUbg7FvbYeuFM6P6XWeX4Ef28LLTto5dQmNPwcxfA56HbIdNrsnKqkWVJ8%2FaKwo6BK%2BZ0OIlDYByA07VLtO3wDE9XIKTtOZXPeC9MCMM8bdbrRbVDBcJh4FYrGSrb8SxZXq5juxA3bBx0PAAWd%2B1GJcQ9hL2dlxUrERcLYQNVYAU%2FhSw2ZQzVwnN%2BU9fQezzeQpAdRicQmo9A0EmhrCdBd8CDKP44JSA92YKxrTKNaUg01gUVoBQ5cSVt5xaedv113X36nNdsngSipifIhRxeQRVIabNFLBU6em%2BQMvvmH3gKNaDd9A3zq%2FFvW2M278%2FYeOkBdzvqyn%2F902yFNHnvBU9%2FnG0K3Fd65MbwBK%2Bn3MB0QIVlufvjFyPWNCPPtjg%2Bc2CFVlvYbm8SJcZCcw%2BZM0YVHsa5v%2BGa2vqfalBMpJzbbLLMoKU3BVe1BXbQ%2F8hucSPHGcQ4aWIlO%2F4QAxSpLquIIBtQRzIUaXY5RG%2Frf2LRnhLMLLspcMGOqUBRsvsbdcQPgVDdAe9tVcmm%2B1vNT%2FuK8ltPdrh25zKfzIZWZhkgHuGpltPzd3jdpNBB3Lz%2FVW9Gk76763jC0ICGsksBNxnYngDRZVHPcpzLrT7saQy%2FrkshDA10aiqnPbAvM4ee8G6CnSRQH84k3CPEV71I62FIwVcYBDLvSLPrLKlGb2ELay6Fm0HezH%2BS01eurRHXjKYm2Svlvq6BAXnR%2FlKWrqQ&X-Amz-Signature=8f0b03a68703e50f80f9b39aafaf13b3f87b7f6484d1bdf1141ecdda61d6b15f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WLYGZR6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCu1ixxg%2Bghwmb3E%2B3UAhVdl7gvdNYpg%2BJJvEAplj88JwIgD8Evc4AxV7DQrkOWOPOdgk1LDTGtR0uaAQ9wyLxouskq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPARpxIs6wHoIAGTKCrcA254mA9awWkqejSVApKWdEfp8RYfCr7pvqrItTK5n9YeX63SqK1uwKKTnmnGuuahn8Wb5xOCgCoPiguzXdltDu1tXBPG0jr%2BkarCSDnQSRv%2FHGx6t3l0nG1ZfGS4TU3vETDqNs3%2F1XouFUbg7FvbYeuFM6P6XWeX4Ef28LLTto5dQmNPwcxfA56HbIdNrsnKqkWVJ8%2FaKwo6BK%2BZ0OIlDYByA07VLtO3wDE9XIKTtOZXPeC9MCMM8bdbrRbVDBcJh4FYrGSrb8SxZXq5juxA3bBx0PAAWd%2B1GJcQ9hL2dlxUrERcLYQNVYAU%2FhSw2ZQzVwnN%2BU9fQezzeQpAdRicQmo9A0EmhrCdBd8CDKP44JSA92YKxrTKNaUg01gUVoBQ5cSVt5xaedv113X36nNdsngSipifIhRxeQRVIabNFLBU6em%2BQMvvmH3gKNaDd9A3zq%2FFvW2M278%2FYeOkBdzvqyn%2F902yFNHnvBU9%2FnG0K3Fd65MbwBK%2Bn3MB0QIVlufvjFyPWNCPPtjg%2Bc2CFVlvYbm8SJcZCcw%2BZM0YVHsa5v%2BGa2vqfalBMpJzbbLLMoKU3BVe1BXbQ%2F8hucSPHGcQ4aWIlO%2F4QAxSpLquIIBtQRzIUaXY5RG%2Frf2LRnhLMLLspcMGOqUBRsvsbdcQPgVDdAe9tVcmm%2B1vNT%2FuK8ltPdrh25zKfzIZWZhkgHuGpltPzd3jdpNBB3Lz%2FVW9Gk76763jC0ICGsksBNxnYngDRZVHPcpzLrT7saQy%2FrkshDA10aiqnPbAvM4ee8G6CnSRQH84k3CPEV71I62FIwVcYBDLvSLPrLKlGb2ELay6Fm0HezH%2BS01eurRHXjKYm2Svlvq6BAXnR%2FlKWrqQ&X-Amz-Signature=bb261d858c8f4249e2582eb129fc5a414b1b30af423aca56e21d15c8848e7e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
