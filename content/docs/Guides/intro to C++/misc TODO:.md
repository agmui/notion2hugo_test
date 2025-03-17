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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4BIE5Q%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKfKgOix%2FVgtVjxemFOZkEmc7yqV74VI2zZ78bAJ1TywIgTl7riwOgJGNYex1%2BsmnH%2BEmGeWyUoVzoaMGlD1bOMZUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAXthoPPhz0TinrbKSrcAxjlU%2FnR2hEh4Xdpeg1hnN69%2Ba32tHbZxZa748s51ymOQmRyU8Kf%2FVw5cRHJu34S9LiKO6OUQ2ixbsOssHerESQ8SN6FP3q1o2QaV17IGN0Cn%2FD5m5u%2FIcAfQgtE0oRhaxD6cYyyxEN7Frh%2FlAHBX%2B7KSQUShnQxsNn9jIGUFt87h0BfTBxaeUPOckrIhOJYldLy5Z1BXw%2BgJa1aIFvQoKRnPN4SaFwbDvAANHWiUW6Cq2ro0D0iWtU8KNCe3NfJSo71StOh1TgG71Ndd20qotkEMs4mnbUgjJsaFkgAbZCsYlPVp2EVpmb5N8JGPyq2kg4AQe80V2I2cZILBBysT3Bg%2BqcWocSXxX9Bt%2B3h4P%2FfE23oGzgsiREvE4W5iCNLjjEGsmq2dro7e3F5kTWwLsiXIWBJA1%2B7WWlIHJW6sVw3h3KbU2qr2wrrn%2BtJvfZvD2qmRECB1FKbYRn2uAfGgCoxYgBIH6LV1y87uAjjYYE47pqukPBzDFLUrBSpiYh%2BSBJlFeJY%2FowU%2BcuhO5a5l1ANKhpaeHZdHd16bERxfX8UBxDkGVO%2Bml3ZPsdeKYzKSbN7IABbo99bfsqcn6GOZ3Z1Q9jTN6ZZEIfFiRu9i%2BEnDqUvbuiDeqiCcRhRMKbp4L4GOqUBIuHNEFlr9SytRNi53iBEt%2Faxjxq34HHBINyMVcExThVPjAZYp7yepm6o0etXixp%2FrdGswHGpHyKZQYErJPEAL9G%2FW1p%2FpDu0nIotI8lKYeuMiS9NCSwedCbjbnV1gjoxM%2B3nm%2BTOd9LhpN5g0BozB9ql6KuysEDJ11oQzogTuTfLOnDtmd%2FfP8cFye1y25pdlYoLjNFRuxEaPsEAhGJcO2L7Fgdl&X-Amz-Signature=861b5c151d0a7d5bcb418c11cd16264e475a16f0e14d2c0fddfd9f9e6c1cbef6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4BIE5Q%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKfKgOix%2FVgtVjxemFOZkEmc7yqV74VI2zZ78bAJ1TywIgTl7riwOgJGNYex1%2BsmnH%2BEmGeWyUoVzoaMGlD1bOMZUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAXthoPPhz0TinrbKSrcAxjlU%2FnR2hEh4Xdpeg1hnN69%2Ba32tHbZxZa748s51ymOQmRyU8Kf%2FVw5cRHJu34S9LiKO6OUQ2ixbsOssHerESQ8SN6FP3q1o2QaV17IGN0Cn%2FD5m5u%2FIcAfQgtE0oRhaxD6cYyyxEN7Frh%2FlAHBX%2B7KSQUShnQxsNn9jIGUFt87h0BfTBxaeUPOckrIhOJYldLy5Z1BXw%2BgJa1aIFvQoKRnPN4SaFwbDvAANHWiUW6Cq2ro0D0iWtU8KNCe3NfJSo71StOh1TgG71Ndd20qotkEMs4mnbUgjJsaFkgAbZCsYlPVp2EVpmb5N8JGPyq2kg4AQe80V2I2cZILBBysT3Bg%2BqcWocSXxX9Bt%2B3h4P%2FfE23oGzgsiREvE4W5iCNLjjEGsmq2dro7e3F5kTWwLsiXIWBJA1%2B7WWlIHJW6sVw3h3KbU2qr2wrrn%2BtJvfZvD2qmRECB1FKbYRn2uAfGgCoxYgBIH6LV1y87uAjjYYE47pqukPBzDFLUrBSpiYh%2BSBJlFeJY%2FowU%2BcuhO5a5l1ANKhpaeHZdHd16bERxfX8UBxDkGVO%2Bml3ZPsdeKYzKSbN7IABbo99bfsqcn6GOZ3Z1Q9jTN6ZZEIfFiRu9i%2BEnDqUvbuiDeqiCcRhRMKbp4L4GOqUBIuHNEFlr9SytRNi53iBEt%2Faxjxq34HHBINyMVcExThVPjAZYp7yepm6o0etXixp%2FrdGswHGpHyKZQYErJPEAL9G%2FW1p%2FpDu0nIotI8lKYeuMiS9NCSwedCbjbnV1gjoxM%2B3nm%2BTOd9LhpN5g0BozB9ql6KuysEDJ11oQzogTuTfLOnDtmd%2FfP8cFye1y25pdlYoLjNFRuxEaPsEAhGJcO2L7Fgdl&X-Amz-Signature=1ff0cb6a97f609ae117944c27b4a1bd813201b6c311280eedf5009cfd5266751&X-Amz-SignedHeaders=host&x-id=GetObject)

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
