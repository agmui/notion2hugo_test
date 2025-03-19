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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642OXX3KH%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQC3MopsEED2J5Zdz2js%2BjfNM%2BUt8x3LTFd%2F4iuurDR2YwIge9L2haYMbwgvagqdljv5DIHosnn%2BGZ7ranFK5Yf9n%2FIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMuVVRlHyW%2B5VdFC4ircA%2FukS5U9bGzI6UBmkZkogkW%2F5Rs2kv4OhP%2BRXDbeT3KMPEZyaJrwVa4VcpenGEqPW1fG2Uef1Jtlh3YEY7x17fTfWe4bYLsb5rzk%2BzkXWK8P%2B1nGWhCPY%2FaUhjEtsC1d4CWSxHfsXgKX01K%2BaknC4pHiLBowcusj8XnQyaLO7dH1Z0qn0u7aFrS8wN6zaJGnEML6JKLp87S0r%2FD1d3ilnhF24LOMazMcsf9rZk15BJr385DbtsHsnpsXFC0O3K6SY9AXSSVuA2uvZI2exGhA3SjKA6M3a4nXfnHHMW3jk4LuzHG38JkAm%2FGn2kKm8dL89PNeSQBkZ9zBh%2Blgd76U39Irev1XxFbrdtkhdCIG3EKzrCYNWMR0VApDChTxVAXE7YrxRAaSDJ7OungRQ7PSHi5ixBrt6sZpy5DEX%2BUroQLmC2%2FGGoX4TVZJ4FnTLtpohTMNd4sycdLHrPpqRyNiKsIlubRt0xZ4%2F7Nj2nwNCi%2BahQ5N4eJBp6PFK4Hzr6qLVNiAk0nO%2FfhYdk06I7nLaaztCirIlpNs0F%2Foqdp4HK8Sq6%2Br54MRc61p1ubRTSanAyUI%2B1%2BRPl178xhfzh%2BAHDyh07dXXNk9xs33vOIBhoi5DhdgzCTtpDI9IuXTMKW96L4GOqUB5keH93uRha1mem5MYPx3hqhdk4vm7bvqIsBqBDKrKQaMH9L6npqAAomy5YIs3rRN6LyFRPosBrhJsMCmxPHVRZ1fDx4R%2F5kj%2B7PTd1UYV4rd%2BTtE3KaLkljXBkjj4Lq0dkPYVm1SWdsBIdXHQF19oz8PUc14HT7XlmPHO%2FQBnBbYpRMDogQfXCIxHG09TIWpQiYO6EjI8EvNVxf0ZBBIXDP1R7PY&X-Amz-Signature=54e9646fd50313c743dceace7effbbb011f263acda004c891951fefbb8504710&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642OXX3KH%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQC3MopsEED2J5Zdz2js%2BjfNM%2BUt8x3LTFd%2F4iuurDR2YwIge9L2haYMbwgvagqdljv5DIHosnn%2BGZ7ranFK5Yf9n%2FIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMuVVRlHyW%2B5VdFC4ircA%2FukS5U9bGzI6UBmkZkogkW%2F5Rs2kv4OhP%2BRXDbeT3KMPEZyaJrwVa4VcpenGEqPW1fG2Uef1Jtlh3YEY7x17fTfWe4bYLsb5rzk%2BzkXWK8P%2B1nGWhCPY%2FaUhjEtsC1d4CWSxHfsXgKX01K%2BaknC4pHiLBowcusj8XnQyaLO7dH1Z0qn0u7aFrS8wN6zaJGnEML6JKLp87S0r%2FD1d3ilnhF24LOMazMcsf9rZk15BJr385DbtsHsnpsXFC0O3K6SY9AXSSVuA2uvZI2exGhA3SjKA6M3a4nXfnHHMW3jk4LuzHG38JkAm%2FGn2kKm8dL89PNeSQBkZ9zBh%2Blgd76U39Irev1XxFbrdtkhdCIG3EKzrCYNWMR0VApDChTxVAXE7YrxRAaSDJ7OungRQ7PSHi5ixBrt6sZpy5DEX%2BUroQLmC2%2FGGoX4TVZJ4FnTLtpohTMNd4sycdLHrPpqRyNiKsIlubRt0xZ4%2F7Nj2nwNCi%2BahQ5N4eJBp6PFK4Hzr6qLVNiAk0nO%2FfhYdk06I7nLaaztCirIlpNs0F%2Foqdp4HK8Sq6%2Br54MRc61p1ubRTSanAyUI%2B1%2BRPl178xhfzh%2BAHDyh07dXXNk9xs33vOIBhoi5DhdgzCTtpDI9IuXTMKW96L4GOqUB5keH93uRha1mem5MYPx3hqhdk4vm7bvqIsBqBDKrKQaMH9L6npqAAomy5YIs3rRN6LyFRPosBrhJsMCmxPHVRZ1fDx4R%2F5kj%2B7PTd1UYV4rd%2BTtE3KaLkljXBkjj4Lq0dkPYVm1SWdsBIdXHQF19oz8PUc14HT7XlmPHO%2FQBnBbYpRMDogQfXCIxHG09TIWpQiYO6EjI8EvNVxf0ZBBIXDP1R7PY&X-Amz-Signature=9dcdce74f0c12cb6053916e37f87eb24dfc62d41002380bc6e5a55b37fe99577&X-Amz-SignedHeaders=host&x-id=GetObject)

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
