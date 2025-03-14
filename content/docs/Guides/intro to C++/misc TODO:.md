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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XXHR6C%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzHQCRtNX7u1PN9bncOdUQAPy0zd5RyJIwCKhKk7QANwIhAPcCi2l6fh25AekZWCIFCie41vCWpBN1%2FdebM74jHQwXKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3fdObF%2FM5MfLpd04q3AMA0%2ByubeVPBpaIxYvui%2FZrjtkAvUasRVBXSVuA9jTijNV0Sp1WmkWva2a0g6wX56YsAU%2Fath5Q6HTq7mmLDi%2Fsf0XXIo1khLmTDv3K9uBh6Tz8OOueadB8c85EBmckJwayhEtwtHFAGS1gJ8heaWT1yNOCVB7jh2P6WBWwR9A4x4WmWGoilUlSMxlDbz%2FAhzKgWRR%2BmdABYYeMj1sh6inoZ0pJksaWLk38rL%2B6e2XcAX5oi5LeCRyUk3SH76BGZvHv%2B4Vdr2P07npPx4ekjwMRxVfhteY4ARiH%2BFmtdb0ua3K0meIHuzEoLxKJzTNpmxUyM67jTXLtPXB5gjhS4bwUy5V%2Bu7fQP3lBgcY%2BchgQwXLM57Ywsi8A%2BpEOt%2FNcWOH5RCW9o1i%2BbxeW40Jr80q3L4abiclO4Q7e08TqIsdfjO8ZzXEilI7rRN7MwJGspVxgdBs9axi1CtU%2BPUi5JsVsYi3RGhuE%2ByC7pcGOVVz%2FMpv78OTyDlM3dOEEisbpcFRKM63Th3Qqi%2Bx8%2FDiXsLujHyr0h0B2nYyGY2JRcrgVXq6b212WMRnrBkjFd37sXCXTkNCe55TP%2FXzSZUTxCUNDhKgNWfIKCSjq%2B602dQJU1opCdUhE%2FOf%2Bl3L%2FezD%2F7s2%2BBjqkAetZIaTErpSOsoNrpgSIblf%2FYzyLcuq22pJj5yU2fsU8%2BOTaQ55jJQyLV0Ahj9vt0MxkRNH6nH0u%2F7z6IISD0WtuK6sP3OXgWren5I%2Fgn3LqlnlHGLRB6%2B6XShHsvq0EQqlnR0KGCPIxeQIFcUM%2BdE38wcBBYDHarJr2YIRx0yZQ8pWMnAnNs9mUUFd%2FutFCYxuuq6vF2iBdfQTY07eMvNC%2BaKeh&X-Amz-Signature=904acd3bba617175f745170816a0f13c44609a0323ed814ab0df95557a7be751&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XXHR6C%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzHQCRtNX7u1PN9bncOdUQAPy0zd5RyJIwCKhKk7QANwIhAPcCi2l6fh25AekZWCIFCie41vCWpBN1%2FdebM74jHQwXKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3fdObF%2FM5MfLpd04q3AMA0%2ByubeVPBpaIxYvui%2FZrjtkAvUasRVBXSVuA9jTijNV0Sp1WmkWva2a0g6wX56YsAU%2Fath5Q6HTq7mmLDi%2Fsf0XXIo1khLmTDv3K9uBh6Tz8OOueadB8c85EBmckJwayhEtwtHFAGS1gJ8heaWT1yNOCVB7jh2P6WBWwR9A4x4WmWGoilUlSMxlDbz%2FAhzKgWRR%2BmdABYYeMj1sh6inoZ0pJksaWLk38rL%2B6e2XcAX5oi5LeCRyUk3SH76BGZvHv%2B4Vdr2P07npPx4ekjwMRxVfhteY4ARiH%2BFmtdb0ua3K0meIHuzEoLxKJzTNpmxUyM67jTXLtPXB5gjhS4bwUy5V%2Bu7fQP3lBgcY%2BchgQwXLM57Ywsi8A%2BpEOt%2FNcWOH5RCW9o1i%2BbxeW40Jr80q3L4abiclO4Q7e08TqIsdfjO8ZzXEilI7rRN7MwJGspVxgdBs9axi1CtU%2BPUi5JsVsYi3RGhuE%2ByC7pcGOVVz%2FMpv78OTyDlM3dOEEisbpcFRKM63Th3Qqi%2Bx8%2FDiXsLujHyr0h0B2nYyGY2JRcrgVXq6b212WMRnrBkjFd37sXCXTkNCe55TP%2FXzSZUTxCUNDhKgNWfIKCSjq%2B602dQJU1opCdUhE%2FOf%2Bl3L%2FezD%2F7s2%2BBjqkAetZIaTErpSOsoNrpgSIblf%2FYzyLcuq22pJj5yU2fsU8%2BOTaQ55jJQyLV0Ahj9vt0MxkRNH6nH0u%2F7z6IISD0WtuK6sP3OXgWren5I%2Fgn3LqlnlHGLRB6%2B6XShHsvq0EQqlnR0KGCPIxeQIFcUM%2BdE38wcBBYDHarJr2YIRx0yZQ8pWMnAnNs9mUUFd%2FutFCYxuuq6vF2iBdfQTY07eMvNC%2BaKeh&X-Amz-Signature=fcd4f884f56b00913f29eab72d71ee3154812247867007be20e45a728d55e763&X-Amz-SignedHeaders=host&x-id=GetObject)

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
