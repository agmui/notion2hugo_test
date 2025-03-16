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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFIEQNO2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLLPsnvf1J3A%2BRzycw9oRMsWAOSRwpLWJEhzigcu1AyAiEA40C7vYPHPhLalCaM2%2F8nN0SsWO5ihCIJ6L2n%2B3tddfwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBcyZjdyEWoxxlNK7ircA2DHv%2B0XfmerFc6gZL3aQLCmP0qYgjI5wm4JHSl8vHSM5ayT7hKdviiymEfTUUp24rIisB32fclUH9giiOfzkxKiFfmudJ3LpemZJy8FnsCd0KaVAMIxNAj76xJLKo9%2FxeXjGRaFteDXuNeHe70n1CgNaEzHlUARGIv19eoR2IsSYZO0ovNZm8W%2F2d1X7QWuLxmesMc7qGPZ%2F2HL%2FDEB93DxItBxKTyeg2h4wW2bwvsqJa5ozEEcTyFUfixaoVP%2F8kOAoMolvfQgEmfll4LeTb6ISUPYibVxs76EafTtYZ%2BPZesSLFadqVwhGspz07Xr%2BQA6ZUoS%2BQ1CYF0DhjxZq1m%2FZ%2B5xE%2FqwfwNf2jZx%2F9vgD6FWJoxAUFRV5Ea%2BfjgLffFeNCCE4uj24P5Wn%2Fi6%2BZmjGsJhApU95r65lSbwZpUR38p2zsPqRTz3FtvamMd1eh95CvT14ZpkSDr6g4gU1Zpxib%2FEosUQjcUmM3IYCMaBMuBhJHCwDH9wqdP3JzIHuYmCIrUYS8GoOE7ScEUKIY6Fkk9UVVqiMtfbUc4%2BrCxQYyPGG7wIbVAuZFdLjVUOiKj8dYYS8eDZ5N2wDrVUClIqyEd2DTcsxAmmTQYg11BC%2Ftfk3kU2o5g6gfV1MO%2B93L4GOqUBHT2EzR7qhbi1W2KsFhckcDPKAvfgXaRjFCoV82LiS%2FqYAoDpro7ukVu09hPfdzUnnBtok8ygIJ5YNrpeHF%2FFQqsnmm9uSX4iteM%2B42iQR3pADAthxsHt8bzwtUyWDvgmPxDmpbAX3QEsmX%2BjsIH7zMLdOz3I0kQL8Am3nOBgKNj2SBmSKXCG0JUWB4HUeZ8y627db4kPzgL89qYb2cQo5G0EgxT6&X-Amz-Signature=9aa8759d20855866f288d78836b68575c042c80404e05dc6eca1f6d4a4ee8ea7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFIEQNO2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLLPsnvf1J3A%2BRzycw9oRMsWAOSRwpLWJEhzigcu1AyAiEA40C7vYPHPhLalCaM2%2F8nN0SsWO5ihCIJ6L2n%2B3tddfwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBcyZjdyEWoxxlNK7ircA2DHv%2B0XfmerFc6gZL3aQLCmP0qYgjI5wm4JHSl8vHSM5ayT7hKdviiymEfTUUp24rIisB32fclUH9giiOfzkxKiFfmudJ3LpemZJy8FnsCd0KaVAMIxNAj76xJLKo9%2FxeXjGRaFteDXuNeHe70n1CgNaEzHlUARGIv19eoR2IsSYZO0ovNZm8W%2F2d1X7QWuLxmesMc7qGPZ%2F2HL%2FDEB93DxItBxKTyeg2h4wW2bwvsqJa5ozEEcTyFUfixaoVP%2F8kOAoMolvfQgEmfll4LeTb6ISUPYibVxs76EafTtYZ%2BPZesSLFadqVwhGspz07Xr%2BQA6ZUoS%2BQ1CYF0DhjxZq1m%2FZ%2B5xE%2FqwfwNf2jZx%2F9vgD6FWJoxAUFRV5Ea%2BfjgLffFeNCCE4uj24P5Wn%2Fi6%2BZmjGsJhApU95r65lSbwZpUR38p2zsPqRTz3FtvamMd1eh95CvT14ZpkSDr6g4gU1Zpxib%2FEosUQjcUmM3IYCMaBMuBhJHCwDH9wqdP3JzIHuYmCIrUYS8GoOE7ScEUKIY6Fkk9UVVqiMtfbUc4%2BrCxQYyPGG7wIbVAuZFdLjVUOiKj8dYYS8eDZ5N2wDrVUClIqyEd2DTcsxAmmTQYg11BC%2Ftfk3kU2o5g6gfV1MO%2B93L4GOqUBHT2EzR7qhbi1W2KsFhckcDPKAvfgXaRjFCoV82LiS%2FqYAoDpro7ukVu09hPfdzUnnBtok8ygIJ5YNrpeHF%2FFQqsnmm9uSX4iteM%2B42iQR3pADAthxsHt8bzwtUyWDvgmPxDmpbAX3QEsmX%2BjsIH7zMLdOz3I0kQL8Am3nOBgKNj2SBmSKXCG0JUWB4HUeZ8y627db4kPzgL89qYb2cQo5G0EgxT6&X-Amz-Signature=9c628ec455b228338a9fc5a54376ab6aab9415fdc8e724dab2ef68cb553af121&X-Amz-SignedHeaders=host&x-id=GetObject)

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
