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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEK62K2O%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGYO3KPNSwPnBtUhz6OJds1Ek9VV2eNt4ovzDAqpe8TtAiEAlqwDtvnRjZ1yIUtBxPNZKaF%2FJ7txY6loMJFQTh%2FDgz8qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOR0CuZH%2FzxM7X%2F5tyrcAyIBTeijHUu3oRMcCZdBfck2icBXnMwUqfM96lAW3VHtE0ZIYQ9BWi%2FuwUS8ajyYOH4EWBVL%2BLBYs8iPdi4tEDX5Q4Y6afwsA9HjethSOWz0j7d5CmQCSdpRKxLdSZCidUPC9f9BVCOLkfWiLBv%2F2OymIbRHhMcMYPaDjbe5kFRwYNcyq3iq9xOSRAUhUpH%2FJrS5WooOgplkkFoHpD6Pci60OzSLwERh%2FB9PNaux%2BpjE4HlW9K0BhPccuPDsS9Tykr6Iv57bSSFBpDhxcuQOuDeSMY%2Fwnpop0QsRNAHxrJiTwEi6febcCTIWTcEPr6nhh8OLTagdC9r5FPbbp0JQWtF5Et76XggblB6prLmuEj%2BCpL4i8lBB9KPeH08CBzg5zWmDAJDr24FWX3j7bwugj%2BtX26bXOyd%2FApfjrScpT40KD7KCI3LpB%2BJfe4IxSYzlXx60unmRqoQqAQVdwipbNcvFFgyrFD6KcTY8Moy6kdkKY7QXRGbIub9RffdB%2BAIaK1eYb1OEU0f3knrFf0%2BgAPA6rPX0RfMLkH94%2BbSLwl%2F4%2BxMANFzeZZMuLK6hN2Z2r7RT445XpPnO7TEqy1dcWlxbZ%2FDVR0oZr8J72mh1zZNcJA3Qayc67ApuVPnXMJaR9cEGOqUBad%2FrZqMRbty851PNWPU9OB7Y90oyMhTBUBwDOcqrv5FXGinUCdgHQOlLxHjQFzQUIqYPTZ5m8V%2B4OnxCl4JpqYevFhM9YEODOs1wirFRbHHGDHAhAG%2BytyUeK%2FiF365yUq7DV99LRRoyirXhqNrilBZrjqEJsFn0xWDR3sCnaSON1y9r3AiElRoCWnS8MbRjE4bcjO2KZ7BJm%2BDWBPO70GjEScT6&X-Amz-Signature=22950ef46f6ba90cbd7972d3d33c08c4fcf69ffe62ea67d5d9ce78160273cf25&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEK62K2O%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGYO3KPNSwPnBtUhz6OJds1Ek9VV2eNt4ovzDAqpe8TtAiEAlqwDtvnRjZ1yIUtBxPNZKaF%2FJ7txY6loMJFQTh%2FDgz8qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOR0CuZH%2FzxM7X%2F5tyrcAyIBTeijHUu3oRMcCZdBfck2icBXnMwUqfM96lAW3VHtE0ZIYQ9BWi%2FuwUS8ajyYOH4EWBVL%2BLBYs8iPdi4tEDX5Q4Y6afwsA9HjethSOWz0j7d5CmQCSdpRKxLdSZCidUPC9f9BVCOLkfWiLBv%2F2OymIbRHhMcMYPaDjbe5kFRwYNcyq3iq9xOSRAUhUpH%2FJrS5WooOgplkkFoHpD6Pci60OzSLwERh%2FB9PNaux%2BpjE4HlW9K0BhPccuPDsS9Tykr6Iv57bSSFBpDhxcuQOuDeSMY%2Fwnpop0QsRNAHxrJiTwEi6febcCTIWTcEPr6nhh8OLTagdC9r5FPbbp0JQWtF5Et76XggblB6prLmuEj%2BCpL4i8lBB9KPeH08CBzg5zWmDAJDr24FWX3j7bwugj%2BtX26bXOyd%2FApfjrScpT40KD7KCI3LpB%2BJfe4IxSYzlXx60unmRqoQqAQVdwipbNcvFFgyrFD6KcTY8Moy6kdkKY7QXRGbIub9RffdB%2BAIaK1eYb1OEU0f3knrFf0%2BgAPA6rPX0RfMLkH94%2BbSLwl%2F4%2BxMANFzeZZMuLK6hN2Z2r7RT445XpPnO7TEqy1dcWlxbZ%2FDVR0oZr8J72mh1zZNcJA3Qayc67ApuVPnXMJaR9cEGOqUBad%2FrZqMRbty851PNWPU9OB7Y90oyMhTBUBwDOcqrv5FXGinUCdgHQOlLxHjQFzQUIqYPTZ5m8V%2B4OnxCl4JpqYevFhM9YEODOs1wirFRbHHGDHAhAG%2BytyUeK%2FiF365yUq7DV99LRRoyirXhqNrilBZrjqEJsFn0xWDR3sCnaSON1y9r3AiElRoCWnS8MbRjE4bcjO2KZ7BJm%2BDWBPO70GjEScT6&X-Amz-Signature=4f06ca3c4d8f9e59f7fd2363dea7cd4536fc610336bb9091d690fc2755b3a997&X-Amz-SignedHeaders=host&x-id=GetObject)

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
