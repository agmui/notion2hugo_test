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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6PFELUV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDVZgSmA5PGqshQMpdJDREzpTMdMffNfDQ7%2BqD9oe4VpAIgBhBwrvpL7VUONswpBIitKorJfLSYsC88bVEX4TFW5DUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDI7%2Bhe75th%2BePFzoZircAz4ucbai11rwMd0rrZIxu1fevsok94Sjw5qEAbOFRRRifMOnmITRy90QcNRKTzUUNf%2Fz0BsXHqKerocIvnPCRi64MweZKA86FVuv13jFKJ67YP6Uw5f77nlNpI2ZwXnv%2BSaED4J7uRL16NZiOI55kvSYWiQ3CQOTSAkO99g3ndoagSf8sCxv97WjLF1kMaAN25Bd6NvLoB0k7lL6OqSVURIyl%2BB6cw%2Bx8xDR6LPPap7Pg4yeBcn9vliNzltRmyw5%2F6pPbPNMCRUvtIuNB4Yk4ZotmdxXRmKG%2BgIAimDabqdQIwc9rF5V8Y2x2bT0PdCqSpNCx4%2F5ZvNQofry%2Bjm%2BzhvCGFaMFXZEI57snLpwSd1fy13oP1DD%2BKbd5S8wqEH2mQeaLMSXmlt9R6m%2FT8LlAU1iG9FKm7Reuw%2BmfERDsNo4SOhvFgbqkNFtGHuFqlVnGL5DCsWaWNAgl2ePbz6GhnMt2GjKQhSSWf9B1dBA9IZvleFO4P%2Fx%2FEfVCECYjKbUT2%2BnEAW10bVBFgrN8Ch%2F2X8NSyKL0DlExrgMN5ywgKr1wR6L9I%2FuTIXUPdz3L82VHJus4AZH7qEhQb5I8hjmPYn8uOU0OfsiTEfPy%2BTl5cTYuxCRhMNNN1c%2B7uWoMIqXscIGOqUB3TzqFRaAPVoBCMUBeITSPdN2hmL5OrMwBOxnWAqBs0moh7foUplo3fdNpGTZYvvHl4VXtxzcq73dYVjSClgakkHVQjBSrHjw6LfLj0YPV%2BLRhshSLkvkcbCeIdFAl3bjvRD5tcgJiEAOB3MU37dv7b%2FHLElGgCG0mjLB2aRQoTcLCqNl0jtJsTb4iahxDumjN8EHx72fdFt2LFlqaJOn9wjGYKaP&X-Amz-Signature=adb0d04beddf3a77664c79b78c29afd97713d2992c4bed505964acccee64592d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6PFELUV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDVZgSmA5PGqshQMpdJDREzpTMdMffNfDQ7%2BqD9oe4VpAIgBhBwrvpL7VUONswpBIitKorJfLSYsC88bVEX4TFW5DUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDI7%2Bhe75th%2BePFzoZircAz4ucbai11rwMd0rrZIxu1fevsok94Sjw5qEAbOFRRRifMOnmITRy90QcNRKTzUUNf%2Fz0BsXHqKerocIvnPCRi64MweZKA86FVuv13jFKJ67YP6Uw5f77nlNpI2ZwXnv%2BSaED4J7uRL16NZiOI55kvSYWiQ3CQOTSAkO99g3ndoagSf8sCxv97WjLF1kMaAN25Bd6NvLoB0k7lL6OqSVURIyl%2BB6cw%2Bx8xDR6LPPap7Pg4yeBcn9vliNzltRmyw5%2F6pPbPNMCRUvtIuNB4Yk4ZotmdxXRmKG%2BgIAimDabqdQIwc9rF5V8Y2x2bT0PdCqSpNCx4%2F5ZvNQofry%2Bjm%2BzhvCGFaMFXZEI57snLpwSd1fy13oP1DD%2BKbd5S8wqEH2mQeaLMSXmlt9R6m%2FT8LlAU1iG9FKm7Reuw%2BmfERDsNo4SOhvFgbqkNFtGHuFqlVnGL5DCsWaWNAgl2ePbz6GhnMt2GjKQhSSWf9B1dBA9IZvleFO4P%2Fx%2FEfVCECYjKbUT2%2BnEAW10bVBFgrN8Ch%2F2X8NSyKL0DlExrgMN5ywgKr1wR6L9I%2FuTIXUPdz3L82VHJus4AZH7qEhQb5I8hjmPYn8uOU0OfsiTEfPy%2BTl5cTYuxCRhMNNN1c%2B7uWoMIqXscIGOqUB3TzqFRaAPVoBCMUBeITSPdN2hmL5OrMwBOxnWAqBs0moh7foUplo3fdNpGTZYvvHl4VXtxzcq73dYVjSClgakkHVQjBSrHjw6LfLj0YPV%2BLRhshSLkvkcbCeIdFAl3bjvRD5tcgJiEAOB3MU37dv7b%2FHLElGgCG0mjLB2aRQoTcLCqNl0jtJsTb4iahxDumjN8EHx72fdFt2LFlqaJOn9wjGYKaP&X-Amz-Signature=7bf53e67ed8673c48bc5dbf18182b41e4406e93938efde46d27238ce74c713c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
