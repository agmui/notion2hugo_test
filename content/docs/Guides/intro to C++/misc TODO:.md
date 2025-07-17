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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZD52XD3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCF6eQncyyysSY3F6dAOdeMf4fQcjuEyVN4vioSHUaZZgIgVnNbwv4G0XguK5z7dvWCWcTdzzrMIu40pnrCQq2IH%2BUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKIyTm4KRU5jrTM25CrcA%2FB0ipRmtZRSdw2S0%2BLGsqjmQoRCrNWxHgoiFFj5lWjSPnpjxm4iHnN5rcMhpmdFx1goNw4KlZFWv4wMGyxgNf4nbg4ABRFySefApqy04BhVlJJRpA3oqfYP%2Fkf6u%2Fx3yyYnotjBw1qza2zAzpWujYzr7sQScFChKJK7ZLndtD8tMeC7mmdhjVYeDYuGXcKxckMvoHIExCLC0ElmeteoqvIxkwX5HYG2c5116tcsuFKKUdmNbExlF3NaRWOo5auhDetjT44iZJ5ca8vpE0pZfSREp8DZAHe9m7DX5oLMNTRYnYs00IWH3WRgGs3AjRpM73tMNmv4wjx3%2Ba%2Bnw1vXL0p898GWIJM7wa5XzFoP2Iaqy264wD5PKhXHeBeY%2FFIiKoXv9AMO2TAfi72AyeYV%2BgKYID5VCknT7KuNLjGxMMEm%2BPYmju%2BFSJV2%2FPbphYzm7GbmTkRPzxISlOS1jZ%2BTud1uqHwtar4RJzcNi6oJElcVv%2Fhq7iYOAoazEapN%2BgLCH%2FsdTjNmCkZYFl%2B7a5T1e7qBHkz9vh8RhK14dezrSlipZUEOUbkt43lSzC4NgA3aiPRKK7meM6PIVFCHox3tL9mNaevixjskOzcipJtUyNrIE1HP%2FZsj6weDaw6ZMPaV4sMGOqUB2Ob8RwRpO70FR%2BWB6z8VV1FTuCeVhNYCg7A2oEXwGlAdGSrjCwZDrcwUpBtFtJ%2FtHUmdn67ROztPg6N481flq0HyvhPBQMyowT1A4ct5F9nfvU6g0yYDTi9LKt0di2re8NKvOJu8nXhMUf9FTcafBKMX93NGUqP1HL8Xw8XD5DbQzFYG0Q4O11viV81oao43%2FJ8n8yKD9lEC7K6Ei2aoS%2FGH4XH5&X-Amz-Signature=47bb3767093de831708037a4452bd03c9c0bf3ebee545588523cfdfe4aab7599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZD52XD3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCF6eQncyyysSY3F6dAOdeMf4fQcjuEyVN4vioSHUaZZgIgVnNbwv4G0XguK5z7dvWCWcTdzzrMIu40pnrCQq2IH%2BUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKIyTm4KRU5jrTM25CrcA%2FB0ipRmtZRSdw2S0%2BLGsqjmQoRCrNWxHgoiFFj5lWjSPnpjxm4iHnN5rcMhpmdFx1goNw4KlZFWv4wMGyxgNf4nbg4ABRFySefApqy04BhVlJJRpA3oqfYP%2Fkf6u%2Fx3yyYnotjBw1qza2zAzpWujYzr7sQScFChKJK7ZLndtD8tMeC7mmdhjVYeDYuGXcKxckMvoHIExCLC0ElmeteoqvIxkwX5HYG2c5116tcsuFKKUdmNbExlF3NaRWOo5auhDetjT44iZJ5ca8vpE0pZfSREp8DZAHe9m7DX5oLMNTRYnYs00IWH3WRgGs3AjRpM73tMNmv4wjx3%2Ba%2Bnw1vXL0p898GWIJM7wa5XzFoP2Iaqy264wD5PKhXHeBeY%2FFIiKoXv9AMO2TAfi72AyeYV%2BgKYID5VCknT7KuNLjGxMMEm%2BPYmju%2BFSJV2%2FPbphYzm7GbmTkRPzxISlOS1jZ%2BTud1uqHwtar4RJzcNi6oJElcVv%2Fhq7iYOAoazEapN%2BgLCH%2FsdTjNmCkZYFl%2B7a5T1e7qBHkz9vh8RhK14dezrSlipZUEOUbkt43lSzC4NgA3aiPRKK7meM6PIVFCHox3tL9mNaevixjskOzcipJtUyNrIE1HP%2FZsj6weDaw6ZMPaV4sMGOqUB2Ob8RwRpO70FR%2BWB6z8VV1FTuCeVhNYCg7A2oEXwGlAdGSrjCwZDrcwUpBtFtJ%2FtHUmdn67ROztPg6N481flq0HyvhPBQMyowT1A4ct5F9nfvU6g0yYDTi9LKt0di2re8NKvOJu8nXhMUf9FTcafBKMX93NGUqP1HL8Xw8XD5DbQzFYG0Q4O11viV81oao43%2FJ8n8yKD9lEC7K6Ei2aoS%2FGH4XH5&X-Amz-Signature=0c05dbadacfd600323d8462c38518cb52cfaf4c1cafd719a502bd2b49a9471bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
