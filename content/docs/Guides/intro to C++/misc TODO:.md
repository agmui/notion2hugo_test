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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEN3ER33%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDmG4Os0UoeH3fYheRKc1xAejAV4nnLDJfbV9KzeeXCWAIgNEq2en2VGiiyx2Pt6ck8qWiA6vskzskqcb5cqV69oTEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxhH0xeyq0zoBTiyircAz6OdrrlT53wAn2DaADnUhV2xShGDwdUFDCfpg6OAyQ%2BY1Cp5zcqnnYi7SnbqIx2uKvJZXLI7%2BPx%2Bk6eZT4h9KEj5Jjzo9Nual0WULPGDANOZ0E8cVIxITgSd0vVg5jj96KL3ztOznXyhxCIoGpxwYySeDgCPLNTmBuSsC0BBjUYzTIiU7qf%2Fko6ltEjlfqLmHG%2FnhhdnFZ4yy%2BhKmmu%2FGCPZ1g8wCIZOZ6izv3UdcNrj2iVTPDjfpTbM0sb1Tbj9D8gka8r3%2FN%2BB7nHW8jxBLa5BQTXeJONLgoRwYdhftTpTLrDjjw9OimDgn8%2FXFpnnZX%2BiKXIBceZqW6eq4HY59OgKWH0Zaqv7Vn%2FnkxFmJwv2n8G7w6QJDDGu209PHx3fxqXY6mQVwoM%2B1VLfreoQIrrGJGSzWgziUSpNd9UplhyWGx3PgbcRrdmz%2FOlLuRxtyAW3x0br4%2Fk0z8vDScIZqTpFlF31SHXfn%2Bi4OGpaSDXRLji7L40ZoW5a%2BftBIVGS5BwCs1PxcAxSs7auBKZM0HFCqzb8ZXcU5puCGn0KOadsWgKUwYXU96MsLFRKPscp4HFhZQJMY0FL43pUGdd46CV0N80LPnfWwQ6sw7hI5VNLsl8hoLHV9GNfUQOMLX60sQGOqUBnFwwR4kbXuPDPk5UlHxEIFUWauLFVuqtWC%2BMc8ih4edJfyZ23hfuLNbfWlmAlCcAP9vy7UDZLomFX90%2BdzZ%2BC0XME8vL%2FdlYxH4jNGW5rjFE9YyUa50KtFrCHz6otCT13nQNxPjTJnq1sTD6L%2BdRzf4Zoz6MNjb3dJ%2Bd6%2BpDKC3kyTgHwrSyVOZ05cMrUhGVfATBUuDrY9t2R6K8q4%2F%2FP4UCoAY0&X-Amz-Signature=4d9334ba040dcf8803f78ce71dcd7a9ce1b2993aa77b22631a246af2a30a4019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEN3ER33%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDmG4Os0UoeH3fYheRKc1xAejAV4nnLDJfbV9KzeeXCWAIgNEq2en2VGiiyx2Pt6ck8qWiA6vskzskqcb5cqV69oTEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxhH0xeyq0zoBTiyircAz6OdrrlT53wAn2DaADnUhV2xShGDwdUFDCfpg6OAyQ%2BY1Cp5zcqnnYi7SnbqIx2uKvJZXLI7%2BPx%2Bk6eZT4h9KEj5Jjzo9Nual0WULPGDANOZ0E8cVIxITgSd0vVg5jj96KL3ztOznXyhxCIoGpxwYySeDgCPLNTmBuSsC0BBjUYzTIiU7qf%2Fko6ltEjlfqLmHG%2FnhhdnFZ4yy%2BhKmmu%2FGCPZ1g8wCIZOZ6izv3UdcNrj2iVTPDjfpTbM0sb1Tbj9D8gka8r3%2FN%2BB7nHW8jxBLa5BQTXeJONLgoRwYdhftTpTLrDjjw9OimDgn8%2FXFpnnZX%2BiKXIBceZqW6eq4HY59OgKWH0Zaqv7Vn%2FnkxFmJwv2n8G7w6QJDDGu209PHx3fxqXY6mQVwoM%2B1VLfreoQIrrGJGSzWgziUSpNd9UplhyWGx3PgbcRrdmz%2FOlLuRxtyAW3x0br4%2Fk0z8vDScIZqTpFlF31SHXfn%2Bi4OGpaSDXRLji7L40ZoW5a%2BftBIVGS5BwCs1PxcAxSs7auBKZM0HFCqzb8ZXcU5puCGn0KOadsWgKUwYXU96MsLFRKPscp4HFhZQJMY0FL43pUGdd46CV0N80LPnfWwQ6sw7hI5VNLsl8hoLHV9GNfUQOMLX60sQGOqUBnFwwR4kbXuPDPk5UlHxEIFUWauLFVuqtWC%2BMc8ih4edJfyZ23hfuLNbfWlmAlCcAP9vy7UDZLomFX90%2BdzZ%2BC0XME8vL%2FdlYxH4jNGW5rjFE9YyUa50KtFrCHz6otCT13nQNxPjTJnq1sTD6L%2BdRzf4Zoz6MNjb3dJ%2Bd6%2BpDKC3kyTgHwrSyVOZ05cMrUhGVfATBUuDrY9t2R6K8q4%2F%2FP4UCoAY0&X-Amz-Signature=e63f40a8cdcf477a7060c575c04a5cf1668e10c4d9b42a71688456f6543a47eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
