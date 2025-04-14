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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYW6IPP7%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHt%2FUDWZ0lYnioQEiWQsit1zJcCpa91Ku3Qsi7axskUUAiEA1nGNVX0Q%2FnYdLMTW3epGF2wFE3zNRYjrisgstoDki84q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDBZ8jd3gAiPiKnfzYCrcA%2BNGsWNY0lc75k6%2BKJZlVt%2BvTbyRmPVOpf0en%2BFNn40aWr9NT6qKA3KHWClBpk%2FypDmQSpxy4Vl4Ic%2BWOpTu%2FGINZrT8L3CQm%2BArrePPgbHZupWRwdSH27g2dNlEP4Isg13iyztluO5ac2hMnMtG1WrpJrBiHA1BMu%2BdTOsKTsxXu08SV42FNy0LtjfJRli1Keu%2FGfTcDeFvJLvNLRf%2F%2FgmycFcuGDuI9p80QndiCk5c%2F%2F1jCFnvGjiSlNhP3f4CkAKqCIUQPbSOS%2BLLb0b2VIA9xRel9Je9tRzXGBitqrybYLBGOUC1O%2BqraPgF%2Bz%2B80DXUyOVFUR0zLbHjOYoLD2%2B9QJ3NF71Yxgd5xmPJlwcOoUHQ52KYaitNFYld4qSamBxJ7PSMPBl3s3E7J%2Btkk7OfJgadYOwZSoTOlV8hlIbTUH8VWG6KksctRd%2BpY00bk5mvwGH8RDcZOZOYor4flhFFrQ0PIBbi9BXphPgSko6JkwtROV9OYQxaAirSuFIAMlt2WoGKPxNyYhDnED7uva0TxKFt8YWREJjQB%2FN%2F3lfQ6PKHilT118BtoxSJzEXmx35MIVWo2Av052L7MwHXB2IpgAot43oyYLavB%2BA974U9MhiZUdI3Ka6ketSEMJb79L8GOqUB6555BIej1bqyGkd0%2B%2BJtrtYRbxN2ltLcTwKGJjrI0qvTNoq45OgjlFksYGx06Zg%2FqGCC1eNxXSSvbA5ruqM9rFYG2FPTdW%2FjGRpqHt9rJ%2FhylunKmAR3xYoFyKBhL62PC9H0Aw9aLrnFREEnC%2BK%2BfPVlU4XMAGlkD6qQ84NEizMLdAsaTUQWkvtVnle6iSzeUer0GxmGAPCIy55LxUQizZWdnSSf&X-Amz-Signature=34ead035c6d390d0bd246d1ded27547d0ce23c2bda683521a0d354f28fe4a77c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYW6IPP7%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHt%2FUDWZ0lYnioQEiWQsit1zJcCpa91Ku3Qsi7axskUUAiEA1nGNVX0Q%2FnYdLMTW3epGF2wFE3zNRYjrisgstoDki84q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDBZ8jd3gAiPiKnfzYCrcA%2BNGsWNY0lc75k6%2BKJZlVt%2BvTbyRmPVOpf0en%2BFNn40aWr9NT6qKA3KHWClBpk%2FypDmQSpxy4Vl4Ic%2BWOpTu%2FGINZrT8L3CQm%2BArrePPgbHZupWRwdSH27g2dNlEP4Isg13iyztluO5ac2hMnMtG1WrpJrBiHA1BMu%2BdTOsKTsxXu08SV42FNy0LtjfJRli1Keu%2FGfTcDeFvJLvNLRf%2F%2FgmycFcuGDuI9p80QndiCk5c%2F%2F1jCFnvGjiSlNhP3f4CkAKqCIUQPbSOS%2BLLb0b2VIA9xRel9Je9tRzXGBitqrybYLBGOUC1O%2BqraPgF%2Bz%2B80DXUyOVFUR0zLbHjOYoLD2%2B9QJ3NF71Yxgd5xmPJlwcOoUHQ52KYaitNFYld4qSamBxJ7PSMPBl3s3E7J%2Btkk7OfJgadYOwZSoTOlV8hlIbTUH8VWG6KksctRd%2BpY00bk5mvwGH8RDcZOZOYor4flhFFrQ0PIBbi9BXphPgSko6JkwtROV9OYQxaAirSuFIAMlt2WoGKPxNyYhDnED7uva0TxKFt8YWREJjQB%2FN%2F3lfQ6PKHilT118BtoxSJzEXmx35MIVWo2Av052L7MwHXB2IpgAot43oyYLavB%2BA974U9MhiZUdI3Ka6ketSEMJb79L8GOqUB6555BIej1bqyGkd0%2B%2BJtrtYRbxN2ltLcTwKGJjrI0qvTNoq45OgjlFksYGx06Zg%2FqGCC1eNxXSSvbA5ruqM9rFYG2FPTdW%2FjGRpqHt9rJ%2FhylunKmAR3xYoFyKBhL62PC9H0Aw9aLrnFREEnC%2BK%2BfPVlU4XMAGlkD6qQ84NEizMLdAsaTUQWkvtVnle6iSzeUer0GxmGAPCIy55LxUQizZWdnSSf&X-Amz-Signature=ca2667eb87478c54dc277631caeabe61290fa589b97312c01cd2ea5ecf09f303&X-Amz-SignedHeaders=host&x-id=GetObject)

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
