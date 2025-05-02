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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYQ3H4X%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCvKDEkDemVZHOUxzCoOwfgpj%2B9LhKzJiOHws6TComiggIhAIphjWxx4RdFqdC7Z9NjJ3bp7qsdNDKSJuSKbvIhNG6KKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx74n%2Fun1aBg1dFdogq3ANGjM%2BtteN%2BKKJGf%2FmN6dTalhchrSvsVFWG2NA89qnTgyLqqrt1FPWJavSwBHnyMLpt1AZPXLgZRQ8LHhi0DE4XUH8HeTK%2BYJRoxpiwaGXmn%2Fgh9zw1gI9krcPxd9ok%2FLnsoPiPEYGVO1Nt9WcXdYmZj1UrUgsowZUennjsypoP3Ogxf1IUahDcB4Dq%2B9Rh%2B9YPxCy8dgOb8E8B1KbAmY6xtYgizaGskp51qO2tqH1xc4iSmUwmYTNYDA8YgtBrQdAWJM882HptBmOXFw0n%2FIWDI0UzxDIFgV27h3uo0kN7NK44TxJfkkEsRQIofhdi4YoODxuMD%2Ft3WgzbzS7tfmh4W%2BPt0gI3MAaSiqUWvF8%2F6ktIV2c08RviSOKL1z%2B10tSeUbyEmqoukblzFQR%2BJ87t4J1XGbB6UbbdArW0kKpXq8UimdqSJhz%2B9JbsjZ2zuuGMEcPgAiNBgZvDZL3x%2Bbd9cwu5XFVE03%2Bu4XYHUC2P%2Fows0lyEdfC9ICJxKsbgJmqRGpQg74bnvAmPUcsotwkB4BKC6FACzEM8tkM6Elu4HF%2BiDjWUS4pOO2%2FBVs1%2BXzZxMD7SQ%2F7DHaJP4vkcxwqPg2LNj1IWN38PzMJ2RZZXy%2BQHSeAiYsN8Gsts4TDs5NPABjqkAbsv85gligHlzd9AEGVNtms4d6z8mSeY7eqfOLt92RKPcpFce7vTSp7Ru1MqTJXWHpRQ3H8WdJyndM8Yai68FT0Wv%2BCO%2BuYnTtAvc%2Fh0TdtbdA5E%2FXUqHg3m1X9nxFbnoXdNj4amz82e3WbTdJ%2FFHRt6C08OAZJ6soTaOKaoLYRQIvYnD%2FToQ3P2T0tW%2BGKwYyPxtoF2q%2FMoVusBkP%2FZmwmRPqdP&X-Amz-Signature=789daa0e9671b726b62efa658f1df01862cc10274226b8ff5b80b10906b764cf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYQ3H4X%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCvKDEkDemVZHOUxzCoOwfgpj%2B9LhKzJiOHws6TComiggIhAIphjWxx4RdFqdC7Z9NjJ3bp7qsdNDKSJuSKbvIhNG6KKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx74n%2Fun1aBg1dFdogq3ANGjM%2BtteN%2BKKJGf%2FmN6dTalhchrSvsVFWG2NA89qnTgyLqqrt1FPWJavSwBHnyMLpt1AZPXLgZRQ8LHhi0DE4XUH8HeTK%2BYJRoxpiwaGXmn%2Fgh9zw1gI9krcPxd9ok%2FLnsoPiPEYGVO1Nt9WcXdYmZj1UrUgsowZUennjsypoP3Ogxf1IUahDcB4Dq%2B9Rh%2B9YPxCy8dgOb8E8B1KbAmY6xtYgizaGskp51qO2tqH1xc4iSmUwmYTNYDA8YgtBrQdAWJM882HptBmOXFw0n%2FIWDI0UzxDIFgV27h3uo0kN7NK44TxJfkkEsRQIofhdi4YoODxuMD%2Ft3WgzbzS7tfmh4W%2BPt0gI3MAaSiqUWvF8%2F6ktIV2c08RviSOKL1z%2B10tSeUbyEmqoukblzFQR%2BJ87t4J1XGbB6UbbdArW0kKpXq8UimdqSJhz%2B9JbsjZ2zuuGMEcPgAiNBgZvDZL3x%2Bbd9cwu5XFVE03%2Bu4XYHUC2P%2Fows0lyEdfC9ICJxKsbgJmqRGpQg74bnvAmPUcsotwkB4BKC6FACzEM8tkM6Elu4HF%2BiDjWUS4pOO2%2FBVs1%2BXzZxMD7SQ%2F7DHaJP4vkcxwqPg2LNj1IWN38PzMJ2RZZXy%2BQHSeAiYsN8Gsts4TDs5NPABjqkAbsv85gligHlzd9AEGVNtms4d6z8mSeY7eqfOLt92RKPcpFce7vTSp7Ru1MqTJXWHpRQ3H8WdJyndM8Yai68FT0Wv%2BCO%2BuYnTtAvc%2Fh0TdtbdA5E%2FXUqHg3m1X9nxFbnoXdNj4amz82e3WbTdJ%2FFHRt6C08OAZJ6soTaOKaoLYRQIvYnD%2FToQ3P2T0tW%2BGKwYyPxtoF2q%2FMoVusBkP%2FZmwmRPqdP&X-Amz-Signature=1954d4db3e2fe8cb168de70208209bee95ffc4d337954e08893c8ff1b6fdeea2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
