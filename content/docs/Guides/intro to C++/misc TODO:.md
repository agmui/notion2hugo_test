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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UEURCBB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIGLcuMXWDINrKThI4ewTuXkSMzWEdcGZxu2pQG%2B48JTxAiEA6Owp4q2TTpWrjagD4iWnMBx9CXpMyrQuDUXdSgOOgekqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BnHKEgNb3vmNxNnyrcA0ZL5yk3kX7AYdcCwzDoYedOXgs%2BcU2c67h%2FmanQtZgosAugJqS%2BK7swDm1ke9u5vaJ5Vtj0tYInCHeZIH5ytWJklsdsKOQ0%2BFPpGGTHSEv7XapV015zAEV5aTN1ZtWWvSxVfuKGVZbSV8pmEsVoerau%2FDsSdrorDvlzAuWPJILSvRnnSOOAE4Dwbs%2BWP6VmKE2uvQxYcSlVe%2BrvnSggxq%2F3fPBqlezXsZxxscQHy6y%2BMKofQplcbVDx9xB296EjI4sYyi5jrYH%2FbkTdrP6ZkeKwpXjKU14HYN0mLpr%2BqjbKzGyNUXQkSLFGpQSFviaHd2jYB9bdkcpl9UH185V0%2Fu13TSN3leVWqehJqTWzec9cBs3sU8h8Dlfa6dGOl6pcnt%2F0wANuF8eaGidD45ek9szlLEXwQ0aEKRW3SiBnNEquEBcFXkARk%2FvUn3cVHZ9cfLXh%2FMe3810A5VlwtOOp8BtO9y7SjSrB%2BsbbDYLvDuDgHnfn7ZeJv%2B1zpK8aBlpAObxuqm2SpVPMR3%2FF78NcGbsu1UMZRgOTna1McRFaLAR90eCNWc3%2BjYpiEHBcLuBT5SEDQHCSbosRpO9QRFSd8tS9Hxds3SIgfrv9KNLIrm4fNq4njm1qdXi635qaMOix0r0GOqUBu9JtOKi%2FXqFE47KAj6CVfOfXOSdpCbS3myMiyIOlRwrklKobPRbNzXmIIYmWZflfqH6p9y1RsipmTbOswq%2Fe8Yydu2dA%2Bh02seWgPvRyY1%2BPCEIb7einbDGa2pzlA6nzttl3MMCwkhsiAV8Go54KDOdXnACpThbdYLEv9R1GuWo2gu6QiLJkNc3PXazxGxdQ1eJspbuTHEC%2BbPQu4jY2VUNrXqaQ&X-Amz-Signature=915861e8459ce3ad2544ec9c746f1209fe5cb2ffe3e6bfe3f94b74db921e003e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UEURCBB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIGLcuMXWDINrKThI4ewTuXkSMzWEdcGZxu2pQG%2B48JTxAiEA6Owp4q2TTpWrjagD4iWnMBx9CXpMyrQuDUXdSgOOgekqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BnHKEgNb3vmNxNnyrcA0ZL5yk3kX7AYdcCwzDoYedOXgs%2BcU2c67h%2FmanQtZgosAugJqS%2BK7swDm1ke9u5vaJ5Vtj0tYInCHeZIH5ytWJklsdsKOQ0%2BFPpGGTHSEv7XapV015zAEV5aTN1ZtWWvSxVfuKGVZbSV8pmEsVoerau%2FDsSdrorDvlzAuWPJILSvRnnSOOAE4Dwbs%2BWP6VmKE2uvQxYcSlVe%2BrvnSggxq%2F3fPBqlezXsZxxscQHy6y%2BMKofQplcbVDx9xB296EjI4sYyi5jrYH%2FbkTdrP6ZkeKwpXjKU14HYN0mLpr%2BqjbKzGyNUXQkSLFGpQSFviaHd2jYB9bdkcpl9UH185V0%2Fu13TSN3leVWqehJqTWzec9cBs3sU8h8Dlfa6dGOl6pcnt%2F0wANuF8eaGidD45ek9szlLEXwQ0aEKRW3SiBnNEquEBcFXkARk%2FvUn3cVHZ9cfLXh%2FMe3810A5VlwtOOp8BtO9y7SjSrB%2BsbbDYLvDuDgHnfn7ZeJv%2B1zpK8aBlpAObxuqm2SpVPMR3%2FF78NcGbsu1UMZRgOTna1McRFaLAR90eCNWc3%2BjYpiEHBcLuBT5SEDQHCSbosRpO9QRFSd8tS9Hxds3SIgfrv9KNLIrm4fNq4njm1qdXi635qaMOix0r0GOqUBu9JtOKi%2FXqFE47KAj6CVfOfXOSdpCbS3myMiyIOlRwrklKobPRbNzXmIIYmWZflfqH6p9y1RsipmTbOswq%2Fe8Yydu2dA%2Bh02seWgPvRyY1%2BPCEIb7einbDGa2pzlA6nzttl3MMCwkhsiAV8Go54KDOdXnACpThbdYLEv9R1GuWo2gu6QiLJkNc3PXazxGxdQ1eJspbuTHEC%2BbPQu4jY2VUNrXqaQ&X-Amz-Signature=b670ea0feaf7cdcef1dfeb28c3502250c02bfbe0a8e417b8490544b63464c6e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
