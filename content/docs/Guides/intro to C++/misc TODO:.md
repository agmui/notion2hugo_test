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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHZEUYCZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCBxPmiHUamcc5d6G9BVI1um239ieBX7u3u6JBgSlrCDwIgBVqEud0N8mjhfHslGlZjciNLWxeJ%2Fa7mV1S74a2bhhAq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOECk7YsIrVolYH3xyrcA4nyftdmiZlzTRAZdtQT%2BDU9JT00z7k%2F0qa4nNXCl6YsMH9HP%2B1Mkpb%2FAoxOTXZCmorD%2BppWu2DYf1v6eLI0SluPLcznRFw9p8w%2BE3Oekip%2F42tG2AfWCbUCoKlhb9dPWsxFMLxMFs1fxbzJtnoUWfbBkhk5Ppquip4KjUzlEukk6cLhvxIi4SPi6hbMuYhc8JQ8k0uySlR5S2auwwff6s1TbGpnG%2Fq0D7octFPtW8SX%2FiJoLtqmrOXFfDJYFca2HIBaq8abvBz5%2BydKeJYPhs%2BqpiMRdWVpPZatCNMCuGlpVo5LroDGz2yPRCHqYXeeWqU7YftMq%2BMcvqEckEhfPkyEHEBNduIXBox16CaC0EsMeZqH5DkNsU1jJWTEKkDEMnr1Y4rN%2BOYmZG7eFfX0I02BcraEvrLpxLsTH74dCldOJl5g6IePjcaWQHvVjKYQwfl%2FNxmIu50KZOw7ZwsJAndyHvgaQMGdsqKHywTCITgbxNwSqsbrCiMfpkAee8qEOGA74VEW1QsUXC41bBttTwbECmOMKMrFzXznv3Bift6iiplIECeoRHD1v%2FdYMa44FaBzxy8XjbocXbvD2oW%2FXs6o%2FcFjHHH2eZ7j8ganOeIXXmzgpLJjb%2BVkXurSMOKEyMQGOqUBFOhh5elXONKabkqjZ0SABh%2FoKgLBZza7f3oSUpWxoSAlIDYdVVMzcmwzD0hs5hORuVCS48zCeidndJluxU4D4hIBv5JDbhH2pfwcWju6QiHT0aAsD6fO41nQHb%2B5xGnLc7mKfLsUJWK6NnfqZj4QNAaDaNVFtQ1gVcG8nfwyQHLNS8LlxE4hAdZEmYGNFpyi5XFMcGXE3w0Pz7BCJ3x%2BwX7twYgh&X-Amz-Signature=39b213974d6a450eaf03cfb7923d16a21fee30287b72b2863966507eb5c597c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHZEUYCZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCBxPmiHUamcc5d6G9BVI1um239ieBX7u3u6JBgSlrCDwIgBVqEud0N8mjhfHslGlZjciNLWxeJ%2Fa7mV1S74a2bhhAq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOECk7YsIrVolYH3xyrcA4nyftdmiZlzTRAZdtQT%2BDU9JT00z7k%2F0qa4nNXCl6YsMH9HP%2B1Mkpb%2FAoxOTXZCmorD%2BppWu2DYf1v6eLI0SluPLcznRFw9p8w%2BE3Oekip%2F42tG2AfWCbUCoKlhb9dPWsxFMLxMFs1fxbzJtnoUWfbBkhk5Ppquip4KjUzlEukk6cLhvxIi4SPi6hbMuYhc8JQ8k0uySlR5S2auwwff6s1TbGpnG%2Fq0D7octFPtW8SX%2FiJoLtqmrOXFfDJYFca2HIBaq8abvBz5%2BydKeJYPhs%2BqpiMRdWVpPZatCNMCuGlpVo5LroDGz2yPRCHqYXeeWqU7YftMq%2BMcvqEckEhfPkyEHEBNduIXBox16CaC0EsMeZqH5DkNsU1jJWTEKkDEMnr1Y4rN%2BOYmZG7eFfX0I02BcraEvrLpxLsTH74dCldOJl5g6IePjcaWQHvVjKYQwfl%2FNxmIu50KZOw7ZwsJAndyHvgaQMGdsqKHywTCITgbxNwSqsbrCiMfpkAee8qEOGA74VEW1QsUXC41bBttTwbECmOMKMrFzXznv3Bift6iiplIECeoRHD1v%2FdYMa44FaBzxy8XjbocXbvD2oW%2FXs6o%2FcFjHHH2eZ7j8ganOeIXXmzgpLJjb%2BVkXurSMOKEyMQGOqUBFOhh5elXONKabkqjZ0SABh%2FoKgLBZza7f3oSUpWxoSAlIDYdVVMzcmwzD0hs5hORuVCS48zCeidndJluxU4D4hIBv5JDbhH2pfwcWju6QiHT0aAsD6fO41nQHb%2B5xGnLc7mKfLsUJWK6NnfqZj4QNAaDaNVFtQ1gVcG8nfwyQHLNS8LlxE4hAdZEmYGNFpyi5XFMcGXE3w0Pz7BCJ3x%2BwX7twYgh&X-Amz-Signature=dceb0e1b008f5437cc7fdfb5fa9e677a2d6377aba0c2e4c5cea4195c7bb5e311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
