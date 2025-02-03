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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X4F5YGN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHn8rzTWxr320fKvRBPnD%2FzMlc%2FThaAcDxHMxsXtAIBHAiEA%2B%2FmJO7ujSb1FdQ6h15AmRtX8I%2FC64TS%2Ff3OWkYC%2Bn5Iq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKYuRCYqvzXQOQOLHircA%2ByA3C%2FI6cmBr%2BhsLURB8KgtBDf8HbIFdssNZ4gSHq9kSV7%2FVTDe0YIsMKva7uxxkBI1YYH6KS2zbsedKF6hgXmrnMzodmikQSWeRkdV6QVBTXyw2ISpBN89aOIU3Djalg5VrFzF%2FYs7seW4AuucrhOJACFmxHxhzFHN6qA0hD%2BRfjiPrUkAXWUwUa63GxLM3yV9wQ6kl2bpqrt%2FTifHf3BWN7z%2Bhf%2Fsb22H7YhVu2DWfP0gXnrQnqRYOnXNOxVfX1vB7mCg%2FrTcb9NfDrMA0BUvPaxi3xrLuwmSmA6WypRlAZcQxz%2FzLCetDWLlkKJfXqSz4wUeTCjFdS43VscDUtq%2FDPilHRehXh732vNXPBW1oxA4IDrtXEGKust7npXQpFlMT6rzSSNyhFQrsr2uXPhjFFGJJsutyZOZo9r2%2BKyEIPe9QI99iXtiS%2FPitigfCUBXza5wnFr8qjTTAG41RK3lILTXISw4r9D0eckbP66JmoIS1kAla0IFMtYrfivnrRIMO%2FbJLitK73tulW3fCv0iYqCwsLT2q%2BO3%2F45mk%2BPfR25sOB2qA2Nd0bc70%2FEg9T2jVpRKtm%2FD0soQzce44b2ls4hft633izc49jL7iNQYinjMnAXNrmmqVMleMIe3gr0GOqUBcnOq5vKITo8qzOgBJPHSs1zykzd3eoaUOD7JwY7i2y5BHhCKDbaXojC6QPkdNplDpUaF1coB%2FJJApszyxAeO1xRH9dnaGugNDN%2Fz%2BWDLgbBPG1ufCOu4DPMdj9%2FnLkbRdAGcHZLAdi3ArEChziokgsGaFIO8ocm8vIW4GtHrh6dugoofaCMmm0HENUfOCOmMnBWidCBUyqw6odYrzhogt8Qxt5eQ&X-Amz-Signature=e2599e05deedd2412c1389b21ec85820b3db225f8f6bd7212c9381e8d64e46f6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X4F5YGN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHn8rzTWxr320fKvRBPnD%2FzMlc%2FThaAcDxHMxsXtAIBHAiEA%2B%2FmJO7ujSb1FdQ6h15AmRtX8I%2FC64TS%2Ff3OWkYC%2Bn5Iq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKYuRCYqvzXQOQOLHircA%2ByA3C%2FI6cmBr%2BhsLURB8KgtBDf8HbIFdssNZ4gSHq9kSV7%2FVTDe0YIsMKva7uxxkBI1YYH6KS2zbsedKF6hgXmrnMzodmikQSWeRkdV6QVBTXyw2ISpBN89aOIU3Djalg5VrFzF%2FYs7seW4AuucrhOJACFmxHxhzFHN6qA0hD%2BRfjiPrUkAXWUwUa63GxLM3yV9wQ6kl2bpqrt%2FTifHf3BWN7z%2Bhf%2Fsb22H7YhVu2DWfP0gXnrQnqRYOnXNOxVfX1vB7mCg%2FrTcb9NfDrMA0BUvPaxi3xrLuwmSmA6WypRlAZcQxz%2FzLCetDWLlkKJfXqSz4wUeTCjFdS43VscDUtq%2FDPilHRehXh732vNXPBW1oxA4IDrtXEGKust7npXQpFlMT6rzSSNyhFQrsr2uXPhjFFGJJsutyZOZo9r2%2BKyEIPe9QI99iXtiS%2FPitigfCUBXza5wnFr8qjTTAG41RK3lILTXISw4r9D0eckbP66JmoIS1kAla0IFMtYrfivnrRIMO%2FbJLitK73tulW3fCv0iYqCwsLT2q%2BO3%2F45mk%2BPfR25sOB2qA2Nd0bc70%2FEg9T2jVpRKtm%2FD0soQzce44b2ls4hft633izc49jL7iNQYinjMnAXNrmmqVMleMIe3gr0GOqUBcnOq5vKITo8qzOgBJPHSs1zykzd3eoaUOD7JwY7i2y5BHhCKDbaXojC6QPkdNplDpUaF1coB%2FJJApszyxAeO1xRH9dnaGugNDN%2Fz%2BWDLgbBPG1ufCOu4DPMdj9%2FnLkbRdAGcHZLAdi3ArEChziokgsGaFIO8ocm8vIW4GtHrh6dugoofaCMmm0HENUfOCOmMnBWidCBUyqw6odYrzhogt8Qxt5eQ&X-Amz-Signature=a6d74bc84d6fd6e2a03b9b17184dad49baf3e05be22d192e50785baab2786998&X-Amz-SignedHeaders=host&x-id=GetObject)

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
