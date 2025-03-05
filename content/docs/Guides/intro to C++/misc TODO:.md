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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664565UZLU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMUN8NAAkUWIcAUE0wFpvbVfmbl1fEd72no%2BNVtvutLAiEA5gkqV6BFdNLwX8HUK3KWsswTKxh9iNJvUHB%2F10xj8BMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGG2pdfniXrGI4S%2BiCrcA3ZAfOiF%2BILCcwYcfvbomKtpziq4hq8NFN2B2JZ%2FYOU6uCbxhOpXtzQq1qkEoNINkFw5PLhpNB3co3Rpn2WgAAL%2BZ%2FtoojM5K7Gz9lhTNrH9IeZG3W%2BwM9QhOabDtmFYb5upWaAYyKI%2BbL%2BNVKaP3sTqa22e1ZH859e%2FTD1aZo7R1hWpDdsCHhE0SmPSnUToVkJCdYTu2GsPkaQUCEq4bdaN5BmLrm3kRDhjldpfAQC51wScRC3uVZJLzJOGj9u3XqSLiBJ%2BZ9Z%2B93igFXNP0%2Bdk%2BUy%2BquNLo2zinOLSmpKSCssmZRGelB8oxQNevOEGrD%2F%2FCySSQIRtXcTJevTHT%2FZECGzEzm2OK5SvG0g2k0yHF2M%2BhQTG6GEivnMpMqNedrLeM9BOeHmBcM7kiYpO0MslNU%2FVBy%2B4BgeDG%2Bq7vedLYTUFvUE9dlWb6ozSlyqgh9oMr7EMUnWIq1fObUoWEhxAivs1B6fsDHQHSh%2BjwXD8iYeekwTAhU43%2B9Dtoi6CZnF9wB6VE3BcZZYA0c6Ves9eB3%2F%2FDe3ObRA6S5CauG0k8l9EEWK2UgXzimzIvluAYWj9SZvwxw%2BZR%2FrvqYSK8t3v90To6wiMrxRoIdlmGZfgTvb9cPd479fjaY0RMIuEor4GOqUB%2FyB73hiK%2FtCFXVxSoe8E3jE8qvhGJUw4N5X7HjU0Fg%2FkFSoQ5h1RFmUDB4DbYaFvgha3hNMt08FctCja%2BqN3Ch76ISRStZ4j3W4sua9nu1Hfkroy7dnskzphW42r0JYSjcG85XDjxctYkAMK9HLRSs9YU9V2p7MPMTkRnjoCWLNdE7h85yi%2BJLZ3xbpXCGwZtb3gRAtSd6O6XsDrlPpXLPuHmXaY&X-Amz-Signature=feab7b685437590c6d9789c8029cecc3cf6cb20bb912ff074fe083e9871c5af1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664565UZLU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMUN8NAAkUWIcAUE0wFpvbVfmbl1fEd72no%2BNVtvutLAiEA5gkqV6BFdNLwX8HUK3KWsswTKxh9iNJvUHB%2F10xj8BMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGG2pdfniXrGI4S%2BiCrcA3ZAfOiF%2BILCcwYcfvbomKtpziq4hq8NFN2B2JZ%2FYOU6uCbxhOpXtzQq1qkEoNINkFw5PLhpNB3co3Rpn2WgAAL%2BZ%2FtoojM5K7Gz9lhTNrH9IeZG3W%2BwM9QhOabDtmFYb5upWaAYyKI%2BbL%2BNVKaP3sTqa22e1ZH859e%2FTD1aZo7R1hWpDdsCHhE0SmPSnUToVkJCdYTu2GsPkaQUCEq4bdaN5BmLrm3kRDhjldpfAQC51wScRC3uVZJLzJOGj9u3XqSLiBJ%2BZ9Z%2B93igFXNP0%2Bdk%2BUy%2BquNLo2zinOLSmpKSCssmZRGelB8oxQNevOEGrD%2F%2FCySSQIRtXcTJevTHT%2FZECGzEzm2OK5SvG0g2k0yHF2M%2BhQTG6GEivnMpMqNedrLeM9BOeHmBcM7kiYpO0MslNU%2FVBy%2B4BgeDG%2Bq7vedLYTUFvUE9dlWb6ozSlyqgh9oMr7EMUnWIq1fObUoWEhxAivs1B6fsDHQHSh%2BjwXD8iYeekwTAhU43%2B9Dtoi6CZnF9wB6VE3BcZZYA0c6Ves9eB3%2F%2FDe3ObRA6S5CauG0k8l9EEWK2UgXzimzIvluAYWj9SZvwxw%2BZR%2FrvqYSK8t3v90To6wiMrxRoIdlmGZfgTvb9cPd479fjaY0RMIuEor4GOqUB%2FyB73hiK%2FtCFXVxSoe8E3jE8qvhGJUw4N5X7HjU0Fg%2FkFSoQ5h1RFmUDB4DbYaFvgha3hNMt08FctCja%2BqN3Ch76ISRStZ4j3W4sua9nu1Hfkroy7dnskzphW42r0JYSjcG85XDjxctYkAMK9HLRSs9YU9V2p7MPMTkRnjoCWLNdE7h85yi%2BJLZ3xbpXCGwZtb3gRAtSd6O6XsDrlPpXLPuHmXaY&X-Amz-Signature=44cababe4170a90e0ee284594ada7d7f163a7df55113940d560f4feec4ed9341&X-Amz-SignedHeaders=host&x-id=GetObject)

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
