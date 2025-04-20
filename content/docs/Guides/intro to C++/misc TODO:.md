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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U7OB7TP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFKpq256cV2usKAHPtdXqeLSgLvB3nt%2BOz3tVv1wMaJgAiEA1bw5Brc4g%2F6ZwCzWReslL%2B%2FfmxF5dKnJGwlDleMsHxIqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoMfG1pU6oCt9tkpCrcA0g5XHiU2JXslpf0R7xuU2DoCwpnuj%2B0b2hSRCtiDFbN4VerUVvv6XJyJDLdNqUEZjE6RTnLlhJ228xgD6siT4BqlVZ3bxiDGm5dnaeBWD4yk9EMU8Z5fuGj29WQKzLi7F16i01u1jqbeazGRpaPld69kM9DbWYDNekIYAg7jmgs22%2FqHtHX0UQTK2avhxWW5UxT1PzvyLvFpMZ0q9xLRS22M%2ByU%2BrunKy%2FQE0XdmxE4P9ePK0%2FR2VcadGFctRU0UBuxHQxF4DTrSf5EwpEMZSlh19seNhZS8govhwdWx1Y56QH%2FJ153dDHiroWjliUy%2B9PTqTqb9rM9WRSJDP8sbFfe2G2V3aLwWjeH39sjBFhlgWpdB5UTaAl1cuN3T%2B6jojXC%2Fbjm6piHktnaGvIsy06dM2Foshr16CR3F2KhwUOMH0lxOFbZ6GrgM4QZDd9X10RXOPTctGMpV1MEV6O9%2F%2BEdcTEG4gjClB5fuJPmH7SNWkwTHsMm8JgOAG3IatK0GFrB5a54Ud1DkBBGpulJBhqGfXf5%2BkeqewNGD9DOU%2BtW29dQcaei7fDO3WJdchTFSXoBiCuhL9iLr3S%2FSBwqyf%2BuIFg3829x6yWY14tx0WKV8clibbSN3P1I8XbfMJfylMAGOqUBRRIEbpErh%2FqTbJAc5APDITjKgtNpO6jDwQZm4WPrQZYjCSknL4enQPLtgoSmlcvzGytHdvied74SnKouwh7vYD%2FzJZ6B9Gv0%2BkCBTqi50zao4pOIF%2BUDAF14f5ybpAEfci0fOWjiHr0l%2B%2BErD1KPWiT32pl3HYsxFKM4LC3jUKWAyY1b9Mw6CBEnF4occfsM3Goo1lj8npn9gRullrb3BDvSb9Eq&X-Amz-Signature=912ebe5c37dc0ac7ca931ad610fcf262b42aec7f5b2a40e5ea3c6630e52e597a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U7OB7TP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFKpq256cV2usKAHPtdXqeLSgLvB3nt%2BOz3tVv1wMaJgAiEA1bw5Brc4g%2F6ZwCzWReslL%2B%2FfmxF5dKnJGwlDleMsHxIqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoMfG1pU6oCt9tkpCrcA0g5XHiU2JXslpf0R7xuU2DoCwpnuj%2B0b2hSRCtiDFbN4VerUVvv6XJyJDLdNqUEZjE6RTnLlhJ228xgD6siT4BqlVZ3bxiDGm5dnaeBWD4yk9EMU8Z5fuGj29WQKzLi7F16i01u1jqbeazGRpaPld69kM9DbWYDNekIYAg7jmgs22%2FqHtHX0UQTK2avhxWW5UxT1PzvyLvFpMZ0q9xLRS22M%2ByU%2BrunKy%2FQE0XdmxE4P9ePK0%2FR2VcadGFctRU0UBuxHQxF4DTrSf5EwpEMZSlh19seNhZS8govhwdWx1Y56QH%2FJ153dDHiroWjliUy%2B9PTqTqb9rM9WRSJDP8sbFfe2G2V3aLwWjeH39sjBFhlgWpdB5UTaAl1cuN3T%2B6jojXC%2Fbjm6piHktnaGvIsy06dM2Foshr16CR3F2KhwUOMH0lxOFbZ6GrgM4QZDd9X10RXOPTctGMpV1MEV6O9%2F%2BEdcTEG4gjClB5fuJPmH7SNWkwTHsMm8JgOAG3IatK0GFrB5a54Ud1DkBBGpulJBhqGfXf5%2BkeqewNGD9DOU%2BtW29dQcaei7fDO3WJdchTFSXoBiCuhL9iLr3S%2FSBwqyf%2BuIFg3829x6yWY14tx0WKV8clibbSN3P1I8XbfMJfylMAGOqUBRRIEbpErh%2FqTbJAc5APDITjKgtNpO6jDwQZm4WPrQZYjCSknL4enQPLtgoSmlcvzGytHdvied74SnKouwh7vYD%2FzJZ6B9Gv0%2BkCBTqi50zao4pOIF%2BUDAF14f5ybpAEfci0fOWjiHr0l%2B%2BErD1KPWiT32pl3HYsxFKM4LC3jUKWAyY1b9Mw6CBEnF4occfsM3Goo1lj8npn9gRullrb3BDvSb9Eq&X-Amz-Signature=5249f909207385cc5e07cff9251cd50b5015d3f418f055b7fe35c9955e9d1bc4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
