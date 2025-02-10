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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646T7G6FV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbrgY%2F9%2FfKjMveycsrOz1dVxfucFQWQ92pYe%2BJ5paQ2AiEA4eiQvt1Dn4xELldkAlY5mtaX0mW7qixvCRHxm9P7kMQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Bi%2BjAOnVRKK4pNzSrcA%2BNgr1xgLVPOd8m43O6Kz4ja4hbPlBB%2B3KfAIlB73j%2BpamKdH2xXwZpIN4aVc9R7gGfVuBAjXT%2BnslNTLTNc2y%2FbBc6PXkGHjOfjdoMbmYghHCYq%2FYY2OWHldoK1E6UV77U743NsoLHJMpaMmBb2CPnZKGd62Q2%2BMWJ25fkB1nfgC74BV85SB15p92%2BtrWSU6%2B72RWjtIfKL3nWAPJxEDyAC%2F3ccI2CHejXxiLCJC9IWu%2FTAR9dr9Tnal1wo2EvdEaUQEn1ThKgbHl0a8fUiQzOaal%2FZvFaDDJYj5YiDyFK4%2FpUYI44JRfk01dEfVz0UzJIdFC%2FHu4Y6U%2BdqXP9UVYkdLoqBEhY2xs%2Bfu1hGL96J1W32LN63YvFIv%2Bd4Lg09xYoMI03MpqS4OmU2ucIoDkicD%2BeSWSss6C%2FAly4H5YwpJlXwcp0WwkFxRmAvcmNG7%2BiHKlFi8%2FJI0d9GnNQCURDk8RQMkwdscNURVInYRDpaq79BnR1s%2BARPD3ENOJsh9sET5ANc3W6kF5m76YjYVaKoNSsnHAaUGX3830zBL4O1pR17fXH%2FmeZcU4XFaJXVIZOU6CZWaW6%2FgPvTrQTYummvF0Jww%2FoeiNqtTmP7CnTdLo9MuAGO6XuhHgnNMKGzqb0GOqUBvC3KlSlus63hHSeZFPraqhW1La9N8M3VZpbmIkkXLdTEebJe%2FEY%2BY%2FSTmZHXfOgbrAxyGMjZgipNe9UBivcNrA1PFL4jsdMzJhuxyo4fI%2Bl3pvsz1x%2F2m9uNbdrZVc%2FAddKkfVEGpW2HVE90fTLeGKW5tcvEhSw2pTfw92jzvYC5UO%2Ff%2Brg%2Baxy4toj97fnaGQ%2F07WmuNG5sooCF2YaGrscD1ia3&X-Amz-Signature=9c3cd597a5a00d1174391762b5d9978388d55b6eee66bb0f40a6643ce717e19e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646T7G6FV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbrgY%2F9%2FfKjMveycsrOz1dVxfucFQWQ92pYe%2BJ5paQ2AiEA4eiQvt1Dn4xELldkAlY5mtaX0mW7qixvCRHxm9P7kMQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Bi%2BjAOnVRKK4pNzSrcA%2BNgr1xgLVPOd8m43O6Kz4ja4hbPlBB%2B3KfAIlB73j%2BpamKdH2xXwZpIN4aVc9R7gGfVuBAjXT%2BnslNTLTNc2y%2FbBc6PXkGHjOfjdoMbmYghHCYq%2FYY2OWHldoK1E6UV77U743NsoLHJMpaMmBb2CPnZKGd62Q2%2BMWJ25fkB1nfgC74BV85SB15p92%2BtrWSU6%2B72RWjtIfKL3nWAPJxEDyAC%2F3ccI2CHejXxiLCJC9IWu%2FTAR9dr9Tnal1wo2EvdEaUQEn1ThKgbHl0a8fUiQzOaal%2FZvFaDDJYj5YiDyFK4%2FpUYI44JRfk01dEfVz0UzJIdFC%2FHu4Y6U%2BdqXP9UVYkdLoqBEhY2xs%2Bfu1hGL96J1W32LN63YvFIv%2Bd4Lg09xYoMI03MpqS4OmU2ucIoDkicD%2BeSWSss6C%2FAly4H5YwpJlXwcp0WwkFxRmAvcmNG7%2BiHKlFi8%2FJI0d9GnNQCURDk8RQMkwdscNURVInYRDpaq79BnR1s%2BARPD3ENOJsh9sET5ANc3W6kF5m76YjYVaKoNSsnHAaUGX3830zBL4O1pR17fXH%2FmeZcU4XFaJXVIZOU6CZWaW6%2FgPvTrQTYummvF0Jww%2FoeiNqtTmP7CnTdLo9MuAGO6XuhHgnNMKGzqb0GOqUBvC3KlSlus63hHSeZFPraqhW1La9N8M3VZpbmIkkXLdTEebJe%2FEY%2BY%2FSTmZHXfOgbrAxyGMjZgipNe9UBivcNrA1PFL4jsdMzJhuxyo4fI%2Bl3pvsz1x%2F2m9uNbdrZVc%2FAddKkfVEGpW2HVE90fTLeGKW5tcvEhSw2pTfw92jzvYC5UO%2Ff%2Brg%2Baxy4toj97fnaGQ%2F07WmuNG5sooCF2YaGrscD1ia3&X-Amz-Signature=ff33f25042b75bc7ffb83328d98716efdade493cc07fa979fb15a52cd1f062f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
