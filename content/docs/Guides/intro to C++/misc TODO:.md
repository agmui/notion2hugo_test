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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TESVTO64%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEK0lndSrnbBBOKDYXwfAmdDYzBy7sR01H4gjNnJGuXaAiA2CDIMc7vUDzaXY4l7uQoj0JqIjtrXORbqgFSrwfV4Dyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMUfyQT3lXA9HdrphxKtwD%2BGvZ8IA%2BYjtKlbDm62MUkj7aS%2FeFB8oMGrSAa9BP%2B2PVltC2aVdKv0TIIQqdXeXZjFCRLNPjcbX9KFGNrpTBb4O3%2B%2BHLU9jV7G725%2FCrOvF8T0OlGdPn2vk1B6oRSgu%2FPJdA1xsH9uHJED75F12%2FjEK8gZ0x1jRf5wMRlE6%2Bi2FVetS2T1Nv9kHHSknCFjiCUTWH%2FgLfg%2FaVNCH9md3uPWfW2N4%2BtM1mDynmlTasdzDwYoaPsdRpQXzQEev19DDan14IwzSQWQai%2BlBv%2BLZN6YuFk%2F64bqH3lClDj6AzT%2BCu37bbiVBOlYOAQTU3smQf8aRSYDuYEGvMPcpzn4Ke6jktnPKpUPVw82cDvxvnuNWdmnw2uSCtDDrMrkA46fWDWp4Kt4mlP7VDsSj4EI%2BpvWrOhmh2XEr07oYuLRSJLldzszaH85Kg3bVIbMJQRU8CNiiG9jVQD85afl5WupRlsXovXoX5SW4m%2Fb0gPi77pOFMuwAs61r3NaUyJMFcVDfEhjqNQo30AXWJB4ATtPEAs60goklcvRbF3Hq3c9ec6Bxi3fr5emcLsbSZShNeew%2FGRbyuDZ06R%2BOf9405Bmgs4g0Wca1HF98JLWE5fi9lMGRCLjJeNAf7OdhYKMowlo%2BIxAY6pgGcv7zTpiOESzZrEytec6pe2ni7oAhj1y%2FQr%2BSwkccbAQ2GFecvsnELzRKZUPcAG3DGPQmB1uiT5rjuq%2B3oGtlzSL2l8eYAOo6kaFbZ2m2c0wXcP%2FTOMuWqEcpAbqb7GsIEBplpIJAMvXZMVDNc%2Bzfgoi9pXXP8Imoh%2BUJV9tLpQKbBBzJKaRB%2B0Jyu6PR7UlKmZ3VIyOEuKfsJo1K6daNX1ea9jzdH&X-Amz-Signature=2e0b64ece15344fb4d6c6464b69188c69921d669efaa95e8300c67d0879542e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TESVTO64%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEK0lndSrnbBBOKDYXwfAmdDYzBy7sR01H4gjNnJGuXaAiA2CDIMc7vUDzaXY4l7uQoj0JqIjtrXORbqgFSrwfV4Dyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMUfyQT3lXA9HdrphxKtwD%2BGvZ8IA%2BYjtKlbDm62MUkj7aS%2FeFB8oMGrSAa9BP%2B2PVltC2aVdKv0TIIQqdXeXZjFCRLNPjcbX9KFGNrpTBb4O3%2B%2BHLU9jV7G725%2FCrOvF8T0OlGdPn2vk1B6oRSgu%2FPJdA1xsH9uHJED75F12%2FjEK8gZ0x1jRf5wMRlE6%2Bi2FVetS2T1Nv9kHHSknCFjiCUTWH%2FgLfg%2FaVNCH9md3uPWfW2N4%2BtM1mDynmlTasdzDwYoaPsdRpQXzQEev19DDan14IwzSQWQai%2BlBv%2BLZN6YuFk%2F64bqH3lClDj6AzT%2BCu37bbiVBOlYOAQTU3smQf8aRSYDuYEGvMPcpzn4Ke6jktnPKpUPVw82cDvxvnuNWdmnw2uSCtDDrMrkA46fWDWp4Kt4mlP7VDsSj4EI%2BpvWrOhmh2XEr07oYuLRSJLldzszaH85Kg3bVIbMJQRU8CNiiG9jVQD85afl5WupRlsXovXoX5SW4m%2Fb0gPi77pOFMuwAs61r3NaUyJMFcVDfEhjqNQo30AXWJB4ATtPEAs60goklcvRbF3Hq3c9ec6Bxi3fr5emcLsbSZShNeew%2FGRbyuDZ06R%2BOf9405Bmgs4g0Wca1HF98JLWE5fi9lMGRCLjJeNAf7OdhYKMowlo%2BIxAY6pgGcv7zTpiOESzZrEytec6pe2ni7oAhj1y%2FQr%2BSwkccbAQ2GFecvsnELzRKZUPcAG3DGPQmB1uiT5rjuq%2B3oGtlzSL2l8eYAOo6kaFbZ2m2c0wXcP%2FTOMuWqEcpAbqb7GsIEBplpIJAMvXZMVDNc%2Bzfgoi9pXXP8Imoh%2BUJV9tLpQKbBBzJKaRB%2B0Jyu6PR7UlKmZ3VIyOEuKfsJo1K6daNX1ea9jzdH&X-Amz-Signature=43af75bc6b1dd63e144aedfe25819e03c4dd060bcd619cbba7e08d20ae0019f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
