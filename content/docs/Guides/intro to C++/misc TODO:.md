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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CURNH3O%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy3L8Dc%2Fytwp6n65x7BSuGRNDwTIKTHb17jm%2FjzAABFQIhAIpqf5iPvQiruPcZn1HSi%2FcY9XaY2uifvRRk0SvwCJ5kKv8DCDYQABoMNjM3NDIzMTgzODA1IgwV2SEm3%2B4cWry23EMq3AMCUOiLvG1Cr8Hbw8oNgy9%2Bj%2FKDrTNFLzF8T31DDgGDZ2cbIv4KFw9xiJYx5p90FOSxLO1e0lXnb3%2BURytaHT5bSLlAX4gOIsEVX4xHJArTSOEdbJdTsbxVbg3dvOr1PL%2B9F%2BqO5KNc95zZ7Z7%2FxeWu4vFWxXgFmDAOyfNumpyPc6Cn%2FFuOcI1vzcEhiRd1FO2EVSFNWfgZ28GtQEu4AewMK2AvtdfuUy3gRWNMbOnQgFeVZhHm3e6x19xydSYL2RHKgnFWzuMlIYedXJVMOkgv8dGkIc6iAnjiXuOVdRGY5pKoMm1CtTJnMl3h4lUDoAC0u9ttWDBJKN73IGK084Y6UhT0XecsCehdxwMx1puEcCtN9H6qV%2BcZWEdSxNPB6O4VWBb0ejcaw7JTlaZ9HBX58YmEjYPTe%2FzDL4ObYxeq9gyTq7O4D%2FdoKwYlHsy0LEbiDKg3yGewk2ERW4OFnF7fkKKBMpQTFydsquUD0yf89MU6p5u0wCeS%2BM8x8Uxh6TnH%2FLDJbdHM3TPHWRyDLnzQsJH2BA%2BIFr2VaQDdDi4at0gndPTF4cPfMIeiQM5ylYoYZFP967RYxkO%2BdEsc2vXZfn7lwewfdo20heQaANa0iNNUe1%2Fwu8UsIGmjmjDc%2Fdy%2BBjqkAQvaVyLlNeIg3GWHCWEQSbTgjyC2COdnJpOU%2BHEnsKALktC3D7bgPC9S5vzm1nEdvRglYHnjMPJhUYnHB%2FOEdkuIs%2Fw1Y4fRJgS8JIwCrD8OjpG57iOW2vkXVh3Voo9gheoFFryNCc3EeqF65A9MDTbPPGl%2BHuemw44qEnhgnjG90AkeZjKCxD8e14ehDy9mT7wp6LHctl1qN1KNTEed5vzcQ1Ly&X-Amz-Signature=c331cef09ac5c75dee0be80eb7bcf1495aa33da2251ac5c2d47dfd34c571daec&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CURNH3O%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy3L8Dc%2Fytwp6n65x7BSuGRNDwTIKTHb17jm%2FjzAABFQIhAIpqf5iPvQiruPcZn1HSi%2FcY9XaY2uifvRRk0SvwCJ5kKv8DCDYQABoMNjM3NDIzMTgzODA1IgwV2SEm3%2B4cWry23EMq3AMCUOiLvG1Cr8Hbw8oNgy9%2Bj%2FKDrTNFLzF8T31DDgGDZ2cbIv4KFw9xiJYx5p90FOSxLO1e0lXnb3%2BURytaHT5bSLlAX4gOIsEVX4xHJArTSOEdbJdTsbxVbg3dvOr1PL%2B9F%2BqO5KNc95zZ7Z7%2FxeWu4vFWxXgFmDAOyfNumpyPc6Cn%2FFuOcI1vzcEhiRd1FO2EVSFNWfgZ28GtQEu4AewMK2AvtdfuUy3gRWNMbOnQgFeVZhHm3e6x19xydSYL2RHKgnFWzuMlIYedXJVMOkgv8dGkIc6iAnjiXuOVdRGY5pKoMm1CtTJnMl3h4lUDoAC0u9ttWDBJKN73IGK084Y6UhT0XecsCehdxwMx1puEcCtN9H6qV%2BcZWEdSxNPB6O4VWBb0ejcaw7JTlaZ9HBX58YmEjYPTe%2FzDL4ObYxeq9gyTq7O4D%2FdoKwYlHsy0LEbiDKg3yGewk2ERW4OFnF7fkKKBMpQTFydsquUD0yf89MU6p5u0wCeS%2BM8x8Uxh6TnH%2FLDJbdHM3TPHWRyDLnzQsJH2BA%2BIFr2VaQDdDi4at0gndPTF4cPfMIeiQM5ylYoYZFP967RYxkO%2BdEsc2vXZfn7lwewfdo20heQaANa0iNNUe1%2Fwu8UsIGmjmjDc%2Fdy%2BBjqkAQvaVyLlNeIg3GWHCWEQSbTgjyC2COdnJpOU%2BHEnsKALktC3D7bgPC9S5vzm1nEdvRglYHnjMPJhUYnHB%2FOEdkuIs%2Fw1Y4fRJgS8JIwCrD8OjpG57iOW2vkXVh3Voo9gheoFFryNCc3EeqF65A9MDTbPPGl%2BHuemw44qEnhgnjG90AkeZjKCxD8e14ehDy9mT7wp6LHctl1qN1KNTEed5vzcQ1Ly&X-Amz-Signature=b62bbe0c35b14fbee462bd2da11b4189a5cc8b3135c01dab53870051f37d356e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
