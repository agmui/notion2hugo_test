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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IUXKVPW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC1XgG%2FK28ABMibb9zuui0YUXx6tGXoj5wmbH%2FyHEe%2F4AIhAP90JPHISz8hK4PILsBVbWwtt2Eo2xTSLBT8aoNZV6B2Kv8DCBsQABoMNjM3NDIzMTgzODA1IgxnTq7t9AuXThUjZRwq3ANlNazF6YcmUYepQj7%2FNn1XGNS4UUcTZKcEK5h2TglSpC1ERraqrGVRIyZVPmVrgzYDtpd9swdtSRpE8zKNzC29Bwjlyx7f1w%2FKBNH9gl%2BZr%2B%2B3upymSGTX7jPdoT9djhwCQIGkYdumuqH6gXS47rDTbpGdTEm20FbssKUmPkMvJrP5dH6kj8Yq8fOlLh47pBmxK1hXySVCZRC7ZI4ekNQI7X0oxZRM9GioIzqbMWrXwZRsjH%2B%2B9ZbfXtGd9Psb8qz2WcW7wfjSGkqltWW9LNInDmUmdQ9y6tJxCbPof41oJkISUM4TKzwBNWWUnk3Y9AonThZ7rWBOQ0T2v8jtDc9YfvTpYnRGfHEX8FAqNmqC9BCqnPFznUOH045hTiagaHYcONVQ6K2DrXU2z1W323p%2FBMotzuYYNzos4YMGui91eBO9%2BzGrzIANTmt80Za%2BsZ4crnZCeiCDLaJsyq%2BKaO2zHjpHFc9nQ6Cq%2ByH8wNHuknIYbGWAN2Pn5Ks7fzPSVedGPlM99wxMIFk5%2BWnOS%2Be2HxuphRJZmivIiDDYwLfAuVI%2FO5lVSaw5SY4lI6zHdVyMIa5wPMcJOAjy3BI1Wh3lgP1U%2BiaIx7Cec5sKZ6cGi1ZCO0SOvushC8Y4lDCP58%2FDBjqkASZM5%2FzMjVuYQmRUUije3f98LCfVM%2FSCiClgEaHF4AOaWzU2tbiyKs37bzkVuMkka0ZD51LwLr%2BUws6%2Fd8nuvuVy%2B4bivvp819CPUPzWtrqSst0zmUfNVS22BRi3elcyTpIcwP4fcGjw7dvIJuX9%2BsDMZ1nh82ey2N9q0FNZRg6d6xWXcmw4S2CrcZJQPBEPZw4%2Bo%2BC4uKHSLSdnLvYQWklpvmir&X-Amz-Signature=81e6c96cf3d7f70e368be116d86b4903a6996b66375de05ed62c27d0b8bd7317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IUXKVPW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC1XgG%2FK28ABMibb9zuui0YUXx6tGXoj5wmbH%2FyHEe%2F4AIhAP90JPHISz8hK4PILsBVbWwtt2Eo2xTSLBT8aoNZV6B2Kv8DCBsQABoMNjM3NDIzMTgzODA1IgxnTq7t9AuXThUjZRwq3ANlNazF6YcmUYepQj7%2FNn1XGNS4UUcTZKcEK5h2TglSpC1ERraqrGVRIyZVPmVrgzYDtpd9swdtSRpE8zKNzC29Bwjlyx7f1w%2FKBNH9gl%2BZr%2B%2B3upymSGTX7jPdoT9djhwCQIGkYdumuqH6gXS47rDTbpGdTEm20FbssKUmPkMvJrP5dH6kj8Yq8fOlLh47pBmxK1hXySVCZRC7ZI4ekNQI7X0oxZRM9GioIzqbMWrXwZRsjH%2B%2B9ZbfXtGd9Psb8qz2WcW7wfjSGkqltWW9LNInDmUmdQ9y6tJxCbPof41oJkISUM4TKzwBNWWUnk3Y9AonThZ7rWBOQ0T2v8jtDc9YfvTpYnRGfHEX8FAqNmqC9BCqnPFznUOH045hTiagaHYcONVQ6K2DrXU2z1W323p%2FBMotzuYYNzos4YMGui91eBO9%2BzGrzIANTmt80Za%2BsZ4crnZCeiCDLaJsyq%2BKaO2zHjpHFc9nQ6Cq%2ByH8wNHuknIYbGWAN2Pn5Ks7fzPSVedGPlM99wxMIFk5%2BWnOS%2Be2HxuphRJZmivIiDDYwLfAuVI%2FO5lVSaw5SY4lI6zHdVyMIa5wPMcJOAjy3BI1Wh3lgP1U%2BiaIx7Cec5sKZ6cGi1ZCO0SOvushC8Y4lDCP58%2FDBjqkASZM5%2FzMjVuYQmRUUije3f98LCfVM%2FSCiClgEaHF4AOaWzU2tbiyKs37bzkVuMkka0ZD51LwLr%2BUws6%2Fd8nuvuVy%2B4bivvp819CPUPzWtrqSst0zmUfNVS22BRi3elcyTpIcwP4fcGjw7dvIJuX9%2BsDMZ1nh82ey2N9q0FNZRg6d6xWXcmw4S2CrcZJQPBEPZw4%2Bo%2BC4uKHSLSdnLvYQWklpvmir&X-Amz-Signature=78f838e81e2ec78e0270caaa7f1c1bed646f1b0f1d1f224cc411f68d4d87512c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
