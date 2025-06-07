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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K2T42GC%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERdIzs2WqQuLtgsjXXXQtdNRrf8dDY07LV65FFoIKc%2BAiEArxI2B%2Frv9vVbIIyP4DW%2FRZMZ8P2DOI4ER6LyrBDwLlwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCWPTORLziRCHS%2FeZyrcA8Ei77RMPpxoVW6M9WlaIRZlwDKqkTwC6oaMqPwP82saWClImyl8OKmr3O%2B9XLYOSsv8nusQpbnfeJmsOAUFGKVnMv6mKSpfZr7M3StYUKyhRWfVrGYHJ7KQhPirWoIW6UsGu0p%2FGvJeqc7Wr4Zhd4pYxa5%2FWzIaJXcWzVaTzU22AMNDpB05bLV8CTraaqNqIp8MTblzHdNUpnCoI%2BfjV98LnzDP7n%2Frj1OfukeZ4r3iMsjzcEq2D80Jaa2Thb7gx6MM5MTh36X2E%2BvK1nrDkSnjQ6fKZ3TyK3HwaDH01xfDr1bcGn49YH83M6A8xWDzhx6WefgIbE7imHpDH6J04zBkZv5mzrTEA0Q4W6PWEILCA8cZJ42DKFFxYt227vO3RVVLR15rmRPxkaV7zIRadoAR61uzO%2BRJEN5VJf4cX6aDcryKjSDZr8gGYm2LHTySOs81or%2BygsYEwdSuCUfH6y%2B22hSnqkv%2FIT%2BJG5LZUIhptPxji27gJQYIa0EztaTW%2Bu%2BHdKs0LrKg%2BkcUGT%2F5if6aigEjR%2FiMQ2oK3PpOKnRFR4lUNaUMG0hfG4eBdO9bNrCsdSdqhMqQwtGGpitJOIjwSGexEiwOPnJ3pt83tftUdqO34EzPWjEDdR%2BQMLX6jsIGOqUBAGgQEeacOPC2g7P4uXM%2BeKm7wgslFhGqOZKulckMpskiRZHWQC7A8%2BGVFzXZ8N9Hkdfg%2BQnnqgzxY35ILVa8UByC04R4Hi82qUD2z4431g3x9ajzPXs4YxlEh%2F%2F3eA78vi4F9TlUTtO64Sd%2FQykc%2FCD9qnnBeFMg7VL0Ok9kWBb%2BV9XH%2Fw6PL6dpHjDT1Ac9so0MUBfWM0EXV0CfMKocKoZLphYk&X-Amz-Signature=477d33aaac880c701709364edb2e629dbef870c296f1e47cd37ddbeaeafe1b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K2T42GC%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERdIzs2WqQuLtgsjXXXQtdNRrf8dDY07LV65FFoIKc%2BAiEArxI2B%2Frv9vVbIIyP4DW%2FRZMZ8P2DOI4ER6LyrBDwLlwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCWPTORLziRCHS%2FeZyrcA8Ei77RMPpxoVW6M9WlaIRZlwDKqkTwC6oaMqPwP82saWClImyl8OKmr3O%2B9XLYOSsv8nusQpbnfeJmsOAUFGKVnMv6mKSpfZr7M3StYUKyhRWfVrGYHJ7KQhPirWoIW6UsGu0p%2FGvJeqc7Wr4Zhd4pYxa5%2FWzIaJXcWzVaTzU22AMNDpB05bLV8CTraaqNqIp8MTblzHdNUpnCoI%2BfjV98LnzDP7n%2Frj1OfukeZ4r3iMsjzcEq2D80Jaa2Thb7gx6MM5MTh36X2E%2BvK1nrDkSnjQ6fKZ3TyK3HwaDH01xfDr1bcGn49YH83M6A8xWDzhx6WefgIbE7imHpDH6J04zBkZv5mzrTEA0Q4W6PWEILCA8cZJ42DKFFxYt227vO3RVVLR15rmRPxkaV7zIRadoAR61uzO%2BRJEN5VJf4cX6aDcryKjSDZr8gGYm2LHTySOs81or%2BygsYEwdSuCUfH6y%2B22hSnqkv%2FIT%2BJG5LZUIhptPxji27gJQYIa0EztaTW%2Bu%2BHdKs0LrKg%2BkcUGT%2F5if6aigEjR%2FiMQ2oK3PpOKnRFR4lUNaUMG0hfG4eBdO9bNrCsdSdqhMqQwtGGpitJOIjwSGexEiwOPnJ3pt83tftUdqO34EzPWjEDdR%2BQMLX6jsIGOqUBAGgQEeacOPC2g7P4uXM%2BeKm7wgslFhGqOZKulckMpskiRZHWQC7A8%2BGVFzXZ8N9Hkdfg%2BQnnqgzxY35ILVa8UByC04R4Hi82qUD2z4431g3x9ajzPXs4YxlEh%2F%2F3eA78vi4F9TlUTtO64Sd%2FQykc%2FCD9qnnBeFMg7VL0Ok9kWBb%2BV9XH%2Fw6PL6dpHjDT1Ac9so0MUBfWM0EXV0CfMKocKoZLphYk&X-Amz-Signature=e516503460c0d11c6dab49861a9f68234819203c16132e61b283e2cf08beaf34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
