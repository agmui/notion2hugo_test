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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEMDFYDX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIEh4SBcVfFtoosizYs6RktG8nEbKqs1miQBhQK1pEgWiAiEAv7J2smcOJjsjgC3gAjfuHFg12MAeSzRBAstz4mKyuL8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHM2bHueKjptVELylSrcA939zvosoSPJM3sKmNRWJDckK%2FAoLID5DM41zdZT79SNS6Lsn9z2qo8uNqMhkulg0Z7XVJXcIXI%2Fupydmn5QwJO5o7Dt8izKrds9uLvcdU%2FHHaMfLzgK6PehvsNtiLiS7hjo3LUm%2BHDaLMfttpDYl7gsqcxlYe%2FDxCPDFaxRVxbomhzh6dYjkk6S0%2BDuSFIb8p5ojUodXdNhkPxO08lwPjPLzBGhiFVCP3K0YRGTjTQzlvxpm6FSfzuavnYXwF2Q3wsYqU7CG%2B49JtPF2FeMALC8Nwgh7vIlDez8rhPGXErd9J7vRqgl1KTXolaZ7fPB2NGCa%2BoONRST%2BONX2CpOzxq1NVyepqHS3XtMcJ6q8GTDVQMasROZYToz6iIk%2BHvHCytR4q8ukp8dcqGygJ1eZMFiTSeRJSG3QTl49t4I3rYzGB4gDC%2FBrqJFh0VWI3tAFEiI%2Fwn11NlNKKVRNVFdaKlnfw3CNO7RzLDbrNpFkvEsVCpqA8fgK2EzPAExxPkkTuHIWhKi9iO26YZ8oE6mMKsLQ3yEns4DhhhpYNFFRqYdMud0HDumkBAtzNTlPrxlXySBoBgMBnKaZKJExn30c7lOppWDS2CFesmKJBwup2MKjvoDFcaOeR8evameMK3vtsEGOqUBqMjY7QFyniXDMftVytvFYVtFfBEpmPx4LBPmizVzAUlXKLjafszBFMGnuy4f5AVfAXjIe4s0ARc%2FVpqArvds016FXIf5tHTGp2cIy8UKesDAcsPKTZj4CUgAFe406C6Qcn2JBYBAd%2Fj4eDzpkDK3%2BNM%2BeQ5J7HK5JX%2BrITAejVeamkiOJ2PAX7hsU56Tm1gtel0SwgAerTdPcf0vaFIz%2B6LZHU4N&X-Amz-Signature=ed1df3d230f9b303b00f63cb85d9284a482abd87a9dfa324ff2b80ee58982384&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEMDFYDX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIEh4SBcVfFtoosizYs6RktG8nEbKqs1miQBhQK1pEgWiAiEAv7J2smcOJjsjgC3gAjfuHFg12MAeSzRBAstz4mKyuL8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHM2bHueKjptVELylSrcA939zvosoSPJM3sKmNRWJDckK%2FAoLID5DM41zdZT79SNS6Lsn9z2qo8uNqMhkulg0Z7XVJXcIXI%2Fupydmn5QwJO5o7Dt8izKrds9uLvcdU%2FHHaMfLzgK6PehvsNtiLiS7hjo3LUm%2BHDaLMfttpDYl7gsqcxlYe%2FDxCPDFaxRVxbomhzh6dYjkk6S0%2BDuSFIb8p5ojUodXdNhkPxO08lwPjPLzBGhiFVCP3K0YRGTjTQzlvxpm6FSfzuavnYXwF2Q3wsYqU7CG%2B49JtPF2FeMALC8Nwgh7vIlDez8rhPGXErd9J7vRqgl1KTXolaZ7fPB2NGCa%2BoONRST%2BONX2CpOzxq1NVyepqHS3XtMcJ6q8GTDVQMasROZYToz6iIk%2BHvHCytR4q8ukp8dcqGygJ1eZMFiTSeRJSG3QTl49t4I3rYzGB4gDC%2FBrqJFh0VWI3tAFEiI%2Fwn11NlNKKVRNVFdaKlnfw3CNO7RzLDbrNpFkvEsVCpqA8fgK2EzPAExxPkkTuHIWhKi9iO26YZ8oE6mMKsLQ3yEns4DhhhpYNFFRqYdMud0HDumkBAtzNTlPrxlXySBoBgMBnKaZKJExn30c7lOppWDS2CFesmKJBwup2MKjvoDFcaOeR8evameMK3vtsEGOqUBqMjY7QFyniXDMftVytvFYVtFfBEpmPx4LBPmizVzAUlXKLjafszBFMGnuy4f5AVfAXjIe4s0ARc%2FVpqArvds016FXIf5tHTGp2cIy8UKesDAcsPKTZj4CUgAFe406C6Qcn2JBYBAd%2Fj4eDzpkDK3%2BNM%2BeQ5J7HK5JX%2BrITAejVeamkiOJ2PAX7hsU56Tm1gtel0SwgAerTdPcf0vaFIz%2B6LZHU4N&X-Amz-Signature=0281c37a95806b55aa2c38ff41aa1a1a9d0c03f9abc3e243ac199605b0ccb1b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
