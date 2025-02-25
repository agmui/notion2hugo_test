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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHX77KW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDW3d%2BkTlDV36ykkzJuCihp2EbjPiWrfsqXG5GkmbFgWAiEAkLuw4F5EpdDJ3HM%2BGcVP8Jh22CYJoXQR7hFNZ%2BAR1f4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDA2rCy%2B52%2Bg4qoTJ8CrcA2SANaUFmo3sblja3dTjDP1ko3MotDfSHXLUR563zQTbeajoxFzh68QHvfFNlVQPi5F8rQsNNFB9QwRv7kKCCaCLylwiwVlObg%2BRIC6KHUEre4aZoh%2FxBCd5w5y6QvLoqjSUXb1%2FJNiUBLevc6Aj%2FeMDgwl1OFfgw9uaV9NEO3qsLgGfAtEKcQNr9AZZbcuNmteRR73nYJRntU59lCSle8jbHzxcxByjQ7PUf5G7EvR8kBCoo8uH%2BPfaqjcyL0baU%2BLhrOt40Xs%2FZek3V2dhXBIGSyHNS4hB64D9wipuymrravyMQu5AWcxnopeVfTzMMjhQ3u2eScwmLSTpd87wMYiTAXwuPp197pC%2BINSdMT2iCwoc03jamDrlSmt4G%2FlRxrQ%2BVWMLvBWp%2FwyJIUM797amyuy9akfgZNM1M6sXKksKGEtk19xXhzYmPEdwK3sFy7chwRRTGg8ve3amw3QqXUz6Qm3Zrx0YMXRk9QalIJTNJARfLTtie%2Bf1yPhVbHxkybLU9TrlXK3%2F0r%2BDgyNutdi2pMqLxce7CGsXjZobt6VCBJG7QWqYSBDCaQQMIZIQHVkI4Eqkoi1LGHwAEHMHItei34m8E%2FjEw%2BjxRpdyN8J8cokx%2BYCer%2B2f%2F95aMIrS970GOqUBL2EhQmbm5CIdqfF6GdBIzUnsRcR5FB4R6UQ4%2BlRQ%2BmanD2L1GHZs9qJdBixP9wCDOZJyPf40gyjlnz6cxnXnxEQsCX8chhMwHJg66buSwTo2oUeT4fn%2Fv7P%2BRuRGR13cCI350NADoG1XpsNt0O15xx%2FaxP0Mkg0tSjLHtCvlasjKWM1c94nI8UHO3kCLrC9ZvDonzXgD8QVfpOPz0sIsdwdOLqGA&X-Amz-Signature=118ac8f7248b216297378ee7becc8b5d87fabbd85569639a16d1edca6d1e8137&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHX77KW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDW3d%2BkTlDV36ykkzJuCihp2EbjPiWrfsqXG5GkmbFgWAiEAkLuw4F5EpdDJ3HM%2BGcVP8Jh22CYJoXQR7hFNZ%2BAR1f4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDA2rCy%2B52%2Bg4qoTJ8CrcA2SANaUFmo3sblja3dTjDP1ko3MotDfSHXLUR563zQTbeajoxFzh68QHvfFNlVQPi5F8rQsNNFB9QwRv7kKCCaCLylwiwVlObg%2BRIC6KHUEre4aZoh%2FxBCd5w5y6QvLoqjSUXb1%2FJNiUBLevc6Aj%2FeMDgwl1OFfgw9uaV9NEO3qsLgGfAtEKcQNr9AZZbcuNmteRR73nYJRntU59lCSle8jbHzxcxByjQ7PUf5G7EvR8kBCoo8uH%2BPfaqjcyL0baU%2BLhrOt40Xs%2FZek3V2dhXBIGSyHNS4hB64D9wipuymrravyMQu5AWcxnopeVfTzMMjhQ3u2eScwmLSTpd87wMYiTAXwuPp197pC%2BINSdMT2iCwoc03jamDrlSmt4G%2FlRxrQ%2BVWMLvBWp%2FwyJIUM797amyuy9akfgZNM1M6sXKksKGEtk19xXhzYmPEdwK3sFy7chwRRTGg8ve3amw3QqXUz6Qm3Zrx0YMXRk9QalIJTNJARfLTtie%2Bf1yPhVbHxkybLU9TrlXK3%2F0r%2BDgyNutdi2pMqLxce7CGsXjZobt6VCBJG7QWqYSBDCaQQMIZIQHVkI4Eqkoi1LGHwAEHMHItei34m8E%2FjEw%2BjxRpdyN8J8cokx%2BYCer%2B2f%2F95aMIrS970GOqUBL2EhQmbm5CIdqfF6GdBIzUnsRcR5FB4R6UQ4%2BlRQ%2BmanD2L1GHZs9qJdBixP9wCDOZJyPf40gyjlnz6cxnXnxEQsCX8chhMwHJg66buSwTo2oUeT4fn%2Fv7P%2BRuRGR13cCI350NADoG1XpsNt0O15xx%2FaxP0Mkg0tSjLHtCvlasjKWM1c94nI8UHO3kCLrC9ZvDonzXgD8QVfpOPz0sIsdwdOLqGA&X-Amz-Signature=791a4aa5f13973dc18f6cd896ecdc93b733d1209a56ce655efaee334ad33a238&X-Amz-SignedHeaders=host&x-id=GetObject)

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
