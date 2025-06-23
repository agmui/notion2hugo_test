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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZBV6VL%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCMKWgrLD0itp5e4ahgHnE1X9lRSj08Pfh%2F88rdF24tEQIgJH7aoM01cCz28LVZ%2BC%2F%2Fjj8nmtICvq%2FxNTLPjv5CkL0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIJtbH4qX%2FqJv1PxSircA7YvTTpim4IdQeLKETaJYGZhOfIs7J2KFJPfCwvMGLkde46SkRB%2BcAk5%2B1hUygMHaZQKN0xLtTECDRYal3%2BDsKW%2FfoOjdmRJfIhidGFQPvLsER8p8upRDEdI1KinI0JqZgg9ytnAGzABv0HFTLMcVkQkX47rTLQ%2BJuw4tad4Dq6H2NFxthK1hi1lR4m9A3mtHFzmGnLUtOA6IiTrRVmqTLLcT1gJws3StB2LFszOCMaSrGYeA7zhBEUlLXmnY03P3M3rd6VNr2Ky6wzgokUiOawD3jx6UD%2BJUBWB%2BVSDFkNvV90AO4VNW6SK25VqwBs03BF5UKewNLc4EQKZO3kL3QbQ89TonTPtSjeoNJkulTWDg9m3h0ZF8TP0Ix0a%2FRmxbwxQmL6QOuxPF0tsZIoGeaOMWzcsQ2%2FZEfF%2BNWpZFy2vq%2FQehzxtQkMZQ3GQrYewSVtwU41RgIXhVb3NsJ7KVKSAZZr1QEX26b4iasljoniKriRyoL3FAGuG7ItPjdeHWv9cEbGO3HMf5W9yqVI%2FIPmPbowPwPIB%2FTlX5eLyW6kG3Nlzt2zR76n1MiAIpN5Nmm%2ByD%2FPUf708S4FKIEu3dqHHFnNysN%2ButekOoSrZM8zeXTq3cOU737HdnTnGMOL%2F5sIGOqUBpJfC359ZqPgRgLfDI03MjEYJjsTXnucTsWkqetYfcKbmAo5739UhjRV2bmAVKnzxbr7i%2FnaKb4dTOAtRKBzGJFMn14ktQ4LJ6ppZ2LbXXYApWSmW7h%2B877CtTVWqATqi190K%2Fzw81OFp3tFydf3C6BF4wdDXfb9%2F7Gq9w8hpaMFib1tLxdd%2BaewDY39PJ6A44v8rvGBPeIhTWPIWXFHhT534Bx9I&X-Amz-Signature=dea51f649c59dd2be160f5fec843ea7df262c762d1b07b614f43d45b1249d67c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZBV6VL%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCMKWgrLD0itp5e4ahgHnE1X9lRSj08Pfh%2F88rdF24tEQIgJH7aoM01cCz28LVZ%2BC%2F%2Fjj8nmtICvq%2FxNTLPjv5CkL0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIJtbH4qX%2FqJv1PxSircA7YvTTpim4IdQeLKETaJYGZhOfIs7J2KFJPfCwvMGLkde46SkRB%2BcAk5%2B1hUygMHaZQKN0xLtTECDRYal3%2BDsKW%2FfoOjdmRJfIhidGFQPvLsER8p8upRDEdI1KinI0JqZgg9ytnAGzABv0HFTLMcVkQkX47rTLQ%2BJuw4tad4Dq6H2NFxthK1hi1lR4m9A3mtHFzmGnLUtOA6IiTrRVmqTLLcT1gJws3StB2LFszOCMaSrGYeA7zhBEUlLXmnY03P3M3rd6VNr2Ky6wzgokUiOawD3jx6UD%2BJUBWB%2BVSDFkNvV90AO4VNW6SK25VqwBs03BF5UKewNLc4EQKZO3kL3QbQ89TonTPtSjeoNJkulTWDg9m3h0ZF8TP0Ix0a%2FRmxbwxQmL6QOuxPF0tsZIoGeaOMWzcsQ2%2FZEfF%2BNWpZFy2vq%2FQehzxtQkMZQ3GQrYewSVtwU41RgIXhVb3NsJ7KVKSAZZr1QEX26b4iasljoniKriRyoL3FAGuG7ItPjdeHWv9cEbGO3HMf5W9yqVI%2FIPmPbowPwPIB%2FTlX5eLyW6kG3Nlzt2zR76n1MiAIpN5Nmm%2ByD%2FPUf708S4FKIEu3dqHHFnNysN%2ButekOoSrZM8zeXTq3cOU737HdnTnGMOL%2F5sIGOqUBpJfC359ZqPgRgLfDI03MjEYJjsTXnucTsWkqetYfcKbmAo5739UhjRV2bmAVKnzxbr7i%2FnaKb4dTOAtRKBzGJFMn14ktQ4LJ6ppZ2LbXXYApWSmW7h%2B877CtTVWqATqi190K%2Fzw81OFp3tFydf3C6BF4wdDXfb9%2F7Gq9w8hpaMFib1tLxdd%2BaewDY39PJ6A44v8rvGBPeIhTWPIWXFHhT534Bx9I&X-Amz-Signature=9d0ed1cfc8c90b71127142903ddabdecd068ffe8418019d5edef5de00ac5a024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
