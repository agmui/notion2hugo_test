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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3GDC2XX%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJMNIjwNNp4%2F8Jfxsc1%2FdRFlLSHCaHRN2ybM137Wo%2FRAiEA5FqKO3GduKs8IAuk8HizeYVIFvlLoVmQes0iv%2BkG%2BBAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDWAq0q8kOZtKftj3yrcA1ByO2Lx4XHGc2e9IMnM3eZ3vk%2FFlBrJ%2BHJRl1wSvatLHDKrEoRdcfQRXDbJ57wIf9CpuZ%2BBv71CDQu0o9X0TncgFJmSUv0dWx%2B11nGwjNEKcM0mZeZ%2FgA9kbqjTCfCGVy8PYNFxFXCt%2B475BG9wLdfB6t9Bi1pujBGqhKlkZ3VLOJvTvqktS%2Fo1kSV1h1xdIrzRSNFmmqcqi7k3%2BXkXk4XIaY%2B7E%2B3s%2FogSIv5ldzag4S01Ot44BL1dRRJbsSZkuY%2FPSBL%2BlVyCasTDhLcD3zjbBfdWSBlHJcjRcrsJVZJmZMj65S6IKsVoozws1If6YiwBNELd9u28znnUz67SBu1Uqlhz%2B2cUXjwFu%2BSzhdxwdQyOz7uRwYHQR20qC09N4c86sKiD27A2aYQ8y6UQDxRJjp0Wns%2B8Dz57L4s7f%2Fn5GgDWTxWI7pcOwWhYJTtcT%2BPVxrePGRZTmICEB%2Fivt%2B%2FrRAycaYW74OZ8XCs8WQCg223ZM%2BaIVpttyTHF2PqrQq2Ev7EnNPol7B5K3bp4yP2PD2p0MdLMi2Pu7XAv27R8DiqTMvm0MflM9QIZfDcAHbdYdCFsX9cZXUTSNxzbhXg63CO2UWhQY0a4KuX94SL8yfWdM6mzFtv5uVa%2FMI65kL8GOqUBOGR3HfPE39yu5FQD9%2Ful%2BXU0Y1RaLmwbJ5EqYTkUbACRf6TOx2qZQo55QE1nRQX0hJ5eZoij1cm4m8GVKXNAxCqqOpLwKlJtX2mXm18EMbNo%2FrlCyDFJPInU1%2B62RC8NfFBuTsRNIbTqmjua%2F60NMxYIGNq5pTkK8%2Bx8mbliZTpo%2BN6OwIDIbtlaOmdNxH9TJos3OFTQXaYerDBFkTrQkcp6leun&X-Amz-Signature=5c79bedebc804756bb46b6c03e2c115f540ceff02bb84d90e78c98cfb21f7215&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3GDC2XX%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJMNIjwNNp4%2F8Jfxsc1%2FdRFlLSHCaHRN2ybM137Wo%2FRAiEA5FqKO3GduKs8IAuk8HizeYVIFvlLoVmQes0iv%2BkG%2BBAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDWAq0q8kOZtKftj3yrcA1ByO2Lx4XHGc2e9IMnM3eZ3vk%2FFlBrJ%2BHJRl1wSvatLHDKrEoRdcfQRXDbJ57wIf9CpuZ%2BBv71CDQu0o9X0TncgFJmSUv0dWx%2B11nGwjNEKcM0mZeZ%2FgA9kbqjTCfCGVy8PYNFxFXCt%2B475BG9wLdfB6t9Bi1pujBGqhKlkZ3VLOJvTvqktS%2Fo1kSV1h1xdIrzRSNFmmqcqi7k3%2BXkXk4XIaY%2B7E%2B3s%2FogSIv5ldzag4S01Ot44BL1dRRJbsSZkuY%2FPSBL%2BlVyCasTDhLcD3zjbBfdWSBlHJcjRcrsJVZJmZMj65S6IKsVoozws1If6YiwBNELd9u28znnUz67SBu1Uqlhz%2B2cUXjwFu%2BSzhdxwdQyOz7uRwYHQR20qC09N4c86sKiD27A2aYQ8y6UQDxRJjp0Wns%2B8Dz57L4s7f%2Fn5GgDWTxWI7pcOwWhYJTtcT%2BPVxrePGRZTmICEB%2Fivt%2B%2FrRAycaYW74OZ8XCs8WQCg223ZM%2BaIVpttyTHF2PqrQq2Ev7EnNPol7B5K3bp4yP2PD2p0MdLMi2Pu7XAv27R8DiqTMvm0MflM9QIZfDcAHbdYdCFsX9cZXUTSNxzbhXg63CO2UWhQY0a4KuX94SL8yfWdM6mzFtv5uVa%2FMI65kL8GOqUBOGR3HfPE39yu5FQD9%2Ful%2BXU0Y1RaLmwbJ5EqYTkUbACRf6TOx2qZQo55QE1nRQX0hJ5eZoij1cm4m8GVKXNAxCqqOpLwKlJtX2mXm18EMbNo%2FrlCyDFJPInU1%2B62RC8NfFBuTsRNIbTqmjua%2F60NMxYIGNq5pTkK8%2Bx8mbliZTpo%2BN6OwIDIbtlaOmdNxH9TJos3OFTQXaYerDBFkTrQkcp6leun&X-Amz-Signature=b4da4092625b6574c051443fa0c7eca687de33fda2efca70c1188f915d40e01f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
