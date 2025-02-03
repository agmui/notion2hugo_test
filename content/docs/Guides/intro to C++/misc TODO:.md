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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZTRSVW%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7UgMGbyjyvaRbg6m%2FfT4u4QTlpURN8WqlN2WgMcGnoAiEA7NIPVbHVYgk0bf6UpDn6DTrycJWykYCIq053B8uLBosq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDC33SSi8TPKqkuetpircA6m9Lp0WsDflD83nAsTx%2Baqi%2BIrVn6YomVf37LvdMcz%2Fu85u3R%2FLgrnei%2B0a20WAghd%2FX864sN3PWTqI%2FzEgmJVWcXljeZEwODK5Az%2FUNPPVSvK0zev75A%2BkyymBpJXsyJJJP9GW%2FvTkJVId5r%2FozTj4Y0bcAVMTnpafUTKOriTWuBn3UpPaTx82ZqfoHNYeGVGyiT8HxAp%2FhIoR7qHHyu%2B5MYN5126diHPi3Dwi4sXVJVTTUc3kKu5wiq4BuA47BlsLdSpfN7krb2LqteAmORqwh6mDF%2B7Rb%2FhrQzOo%2FvLZ7apRDINpzMr%2FJ8grMYEe%2BX%2B%2BHz1fyBz8d2eiSP3yfsSPcLLDj2vFjTCKXwg9bPf9vQSchLEw57jW9PXOHCSfLnudRqAyZNUdClkWgmKYM4gP0taKU85lCGDCQTfiYwgBTCGiLZKCA0O1RLStXm%2BxQRPaw1rmYJgHZDIBvOFnk%2FVJlichbsQmO599LC%2BZcID%2BdZR2U2G8S8a71216aGmlCuwG4TWbs%2B7f9saOnxI1FpMutXSB47qq5yh%2BUQnOPx43CQqCpQDbEUSCWnyqlH%2BO2qZasp9PR7qNZ41k0u7Dw0cseODpIkfB71Bpe4wuet2yyU%2FjBynz313ICZbbMMTUgr0GOqUBSBJUPrGtbF%2FjMELMIfNN3F3kfzXTRAfVqKQKf89IN3u4WRLDFOlxiAMbyz2139GL6l3563d6ca3PrzmQMk3684QeyHfIBcfpTayOJsSB3M0%2FaFcjtmeWAf6o9Uutru4JOPkc1F7s%2BbUogkGjU1BILzsGNkpwp3yD1b8ogXxlW4o88t%2Blmqd9PmfuPwdwI0TL2B3Vg7uS0mVME8wqZz6gTlwC8bwg&X-Amz-Signature=dded9651fbda39f27a177aad9086be8e7c35e3b46df40e3bf2ecb8a0cc05b238&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZTRSVW%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7UgMGbyjyvaRbg6m%2FfT4u4QTlpURN8WqlN2WgMcGnoAiEA7NIPVbHVYgk0bf6UpDn6DTrycJWykYCIq053B8uLBosq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDC33SSi8TPKqkuetpircA6m9Lp0WsDflD83nAsTx%2Baqi%2BIrVn6YomVf37LvdMcz%2Fu85u3R%2FLgrnei%2B0a20WAghd%2FX864sN3PWTqI%2FzEgmJVWcXljeZEwODK5Az%2FUNPPVSvK0zev75A%2BkyymBpJXsyJJJP9GW%2FvTkJVId5r%2FozTj4Y0bcAVMTnpafUTKOriTWuBn3UpPaTx82ZqfoHNYeGVGyiT8HxAp%2FhIoR7qHHyu%2B5MYN5126diHPi3Dwi4sXVJVTTUc3kKu5wiq4BuA47BlsLdSpfN7krb2LqteAmORqwh6mDF%2B7Rb%2FhrQzOo%2FvLZ7apRDINpzMr%2FJ8grMYEe%2BX%2B%2BHz1fyBz8d2eiSP3yfsSPcLLDj2vFjTCKXwg9bPf9vQSchLEw57jW9PXOHCSfLnudRqAyZNUdClkWgmKYM4gP0taKU85lCGDCQTfiYwgBTCGiLZKCA0O1RLStXm%2BxQRPaw1rmYJgHZDIBvOFnk%2FVJlichbsQmO599LC%2BZcID%2BdZR2U2G8S8a71216aGmlCuwG4TWbs%2B7f9saOnxI1FpMutXSB47qq5yh%2BUQnOPx43CQqCpQDbEUSCWnyqlH%2BO2qZasp9PR7qNZ41k0u7Dw0cseODpIkfB71Bpe4wuet2yyU%2FjBynz313ICZbbMMTUgr0GOqUBSBJUPrGtbF%2FjMELMIfNN3F3kfzXTRAfVqKQKf89IN3u4WRLDFOlxiAMbyz2139GL6l3563d6ca3PrzmQMk3684QeyHfIBcfpTayOJsSB3M0%2FaFcjtmeWAf6o9Uutru4JOPkc1F7s%2BbUogkGjU1BILzsGNkpwp3yD1b8ogXxlW4o88t%2Blmqd9PmfuPwdwI0TL2B3Vg7uS0mVME8wqZz6gTlwC8bwg&X-Amz-Signature=85b0747d0797d7ed55d297b103d0cb5d73435b930e1453243af0feab75c35215&X-Amz-SignedHeaders=host&x-id=GetObject)

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
