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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JFJGULX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDHSrXbcL0lptoTs%2FvfWjc843fbRJU1f1N6HWQq6eZZyQIgdl5hufTA%2Bko3suTUKF0voLeiLjVd2xdRzSO0ny0I04sq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDC05k1K6bRhDiNZMrCrcA%2FgPsc8nUkUCVP%2Bw2c%2FwadOb%2F7cjSqfrZNBI3G14KCTShSFxzN8TbRvHgDqRCU6Tdp%2BgNNC0wH6SRZEjhy7ZUyHc%2B1cEAXVxbYFX4eKzhRJGh0yX%2BYvf667W99y3kJBjK2oF56CC64SzCrZuPA2PiBXaaEkZ%2Ffj6YRiA0fJrL61y5U7SY85VPNvDN1VpSCdvj98S5%2BYxkw3p78cxZiN7ctZKCBsafQzZqPA1N0qtfq%2BXHO%2FDupPZbzQaxzt8eUpK0dfi5%2Bzsfvukp6nntP5rGF7cpOQer%2FuBTg60%2Bdqg3TE%2FRGPVUSzwCzVr%2BF6UYyMpDunHf3mLXTwGfKbeqRKqjbwRT86%2Fqs1viL1NCJBfsqirzrTEM9jmN6dpTsUlEJO%2BYnb3Jcg9nCR959npm94AksLssUlkgEhLgdpACcwlfz8otNwTvyjqHehVwxQp6eK9%2BvMmSqcN7Q37yy8JR2CAX9ycItGyr53DljX9LvQQ70uH4DOpZCsas6YJpN3nLF80z0vxueEcXf2lTaapxmdyRiXmd1o9dyvWyDq1X9rQ7RscA1t5Z9HZ3749IOSM7d3rpyMFCYrSQ8Es7QuPFF1oz2otW536cA%2B3l9xUY8bqlk%2FbHI1ub3XdPzM7Y7B1MJWF1MMGOqUBWJBBaHnjX3o57nV%2F0IwSMTfUGsj5mOFPDqafSjO%2F5oHCF%2BAAhGNpSAr0PyN%2Ba2hBPwS5doloj3%2BTFY%2BlwOHJKtQJYASC1LJYQ06alnECq%2FEapx2VIcTc3JK9z9x%2FJR6hJldyC8y8BZa%2F%2BGdwOrMMcpEOgk4bVSXoAq6lpz5FifFjqjsdU7g4StVQttv8TqIOupJazbV7279tfgl0So7jNHfVKpw%2B&X-Amz-Signature=264d70e1da742169f17e7999199cf579085e982c1d077a30aa999c59eae35059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JFJGULX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDHSrXbcL0lptoTs%2FvfWjc843fbRJU1f1N6HWQq6eZZyQIgdl5hufTA%2Bko3suTUKF0voLeiLjVd2xdRzSO0ny0I04sq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDC05k1K6bRhDiNZMrCrcA%2FgPsc8nUkUCVP%2Bw2c%2FwadOb%2F7cjSqfrZNBI3G14KCTShSFxzN8TbRvHgDqRCU6Tdp%2BgNNC0wH6SRZEjhy7ZUyHc%2B1cEAXVxbYFX4eKzhRJGh0yX%2BYvf667W99y3kJBjK2oF56CC64SzCrZuPA2PiBXaaEkZ%2Ffj6YRiA0fJrL61y5U7SY85VPNvDN1VpSCdvj98S5%2BYxkw3p78cxZiN7ctZKCBsafQzZqPA1N0qtfq%2BXHO%2FDupPZbzQaxzt8eUpK0dfi5%2Bzsfvukp6nntP5rGF7cpOQer%2FuBTg60%2Bdqg3TE%2FRGPVUSzwCzVr%2BF6UYyMpDunHf3mLXTwGfKbeqRKqjbwRT86%2Fqs1viL1NCJBfsqirzrTEM9jmN6dpTsUlEJO%2BYnb3Jcg9nCR959npm94AksLssUlkgEhLgdpACcwlfz8otNwTvyjqHehVwxQp6eK9%2BvMmSqcN7Q37yy8JR2CAX9ycItGyr53DljX9LvQQ70uH4DOpZCsas6YJpN3nLF80z0vxueEcXf2lTaapxmdyRiXmd1o9dyvWyDq1X9rQ7RscA1t5Z9HZ3749IOSM7d3rpyMFCYrSQ8Es7QuPFF1oz2otW536cA%2B3l9xUY8bqlk%2FbHI1ub3XdPzM7Y7B1MJWF1MMGOqUBWJBBaHnjX3o57nV%2F0IwSMTfUGsj5mOFPDqafSjO%2F5oHCF%2BAAhGNpSAr0PyN%2Ba2hBPwS5doloj3%2BTFY%2BlwOHJKtQJYASC1LJYQ06alnECq%2FEapx2VIcTc3JK9z9x%2FJR6hJldyC8y8BZa%2F%2BGdwOrMMcpEOgk4bVSXoAq6lpz5FifFjqjsdU7g4StVQttv8TqIOupJazbV7279tfgl0So7jNHfVKpw%2B&X-Amz-Signature=6264c0df05cb4b08ba994ca94e1547e2f332c95efb3ce9911f211e7311775426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
