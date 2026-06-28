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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ICDNBVT%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz6ZixD1PNV%2BkTIWsvwmeUqyTtIRi8T5xyQ4vEKkjvmgIgUo4m92qtAMh0GJvsGrO13QsCbHGQIl%2BK5k1ccr522CsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrLUG0pp0iCt1toBCrcA9SVTAR5eHa94zYwBVqT4Q0uyN7yMBph2iTiKfYgqyH9o%2F0PQ%2FBbLRRLiutEM6ebCsYCQI7tqsvByVvq7nmxk1P%2Bs96tcA%2BNyut8X6SJu%2BOs26hqjpceGUQshAddtjkqfmGx7uSGi57ICdYSt7g85D%2BeKGVmn7EsDbYSCAZAwQlV9%2BCycs5o36v%2BbbAuiLVv72%2BjjGaRLXOdM8kOn7dd4IKZrmJU4D41UA7HcqmHzOIyiKmxFlIuyGYJJht1MqZuCjvRvMlSBaya1una2MX9x0iF8oVID6qRlpEMbgPi2Ygw9f6LhyxH9bTEhQ5TQXq3MSey29W0AiKAiXIPlbteRaWn775Q1C5wS7wt7RX5a3sGRQJBj%2BAliru%2FvwpX44LroyRK6bz2Nduc6db%2FcUBDVmefw%2BO54ZWCtCjQ%2FcXEy4Ouvx3T2pTWuBdgluI2nG42sPip0Cw8uKhK%2Bz3NEcRv1EIoZBOaSd1GEuKNbvNufrNK76RqACJyUTcaHJZ%2ByVt92KIWnlOSK8ChUHArIF7zOipijiuG4ON8K8E08UYW4yQJ3VKQh7d%2FwB8EJQqA1JqhAXfIWhfAVyVQ2U2F4ExmdamudsEpMJOL36MP7h%2FSQe04iSDKGUAaNkHzIfuhMPydgtIGOqUBsfp3okaoJsfhqAAkytCp1hdxPtZk86Cm%2FpaPPt1FcO9fWryhSbkKV%2F4B4bLtR74S%2B44rAsmN9Fo9SDFt0B%2Fw7PUF%2BkIRa%2Bu1GB8kdYLkmP4qV0bmf1GwibmDKOHhFWNNtysvu2dOsJyAoy%2F7fXBNZDnKrQ1FM44AUPMFFwJ23kiGnpxbThyIOFqquVZkRFLXuj4oRzAGIAipuPNVZJr5kju9dKIE&X-Amz-Signature=5eac8de53c6ebf107dfc06f8ba6aebaf7c27f2e673626d851d928e6f5a2aaa2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ICDNBVT%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz6ZixD1PNV%2BkTIWsvwmeUqyTtIRi8T5xyQ4vEKkjvmgIgUo4m92qtAMh0GJvsGrO13QsCbHGQIl%2BK5k1ccr522CsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrLUG0pp0iCt1toBCrcA9SVTAR5eHa94zYwBVqT4Q0uyN7yMBph2iTiKfYgqyH9o%2F0PQ%2FBbLRRLiutEM6ebCsYCQI7tqsvByVvq7nmxk1P%2Bs96tcA%2BNyut8X6SJu%2BOs26hqjpceGUQshAddtjkqfmGx7uSGi57ICdYSt7g85D%2BeKGVmn7EsDbYSCAZAwQlV9%2BCycs5o36v%2BbbAuiLVv72%2BjjGaRLXOdM8kOn7dd4IKZrmJU4D41UA7HcqmHzOIyiKmxFlIuyGYJJht1MqZuCjvRvMlSBaya1una2MX9x0iF8oVID6qRlpEMbgPi2Ygw9f6LhyxH9bTEhQ5TQXq3MSey29W0AiKAiXIPlbteRaWn775Q1C5wS7wt7RX5a3sGRQJBj%2BAliru%2FvwpX44LroyRK6bz2Nduc6db%2FcUBDVmefw%2BO54ZWCtCjQ%2FcXEy4Ouvx3T2pTWuBdgluI2nG42sPip0Cw8uKhK%2Bz3NEcRv1EIoZBOaSd1GEuKNbvNufrNK76RqACJyUTcaHJZ%2ByVt92KIWnlOSK8ChUHArIF7zOipijiuG4ON8K8E08UYW4yQJ3VKQh7d%2FwB8EJQqA1JqhAXfIWhfAVyVQ2U2F4ExmdamudsEpMJOL36MP7h%2FSQe04iSDKGUAaNkHzIfuhMPydgtIGOqUBsfp3okaoJsfhqAAkytCp1hdxPtZk86Cm%2FpaPPt1FcO9fWryhSbkKV%2F4B4bLtR74S%2B44rAsmN9Fo9SDFt0B%2Fw7PUF%2BkIRa%2Bu1GB8kdYLkmP4qV0bmf1GwibmDKOHhFWNNtysvu2dOsJyAoy%2F7fXBNZDnKrQ1FM44AUPMFFwJ23kiGnpxbThyIOFqquVZkRFLXuj4oRzAGIAipuPNVZJr5kju9dKIE&X-Amz-Signature=38f3245ffeae3b3f73104b395693105de1332c522ce5dc96d8ed59a5bcbb11d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
