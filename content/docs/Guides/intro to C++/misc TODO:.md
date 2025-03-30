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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STL4SKDD%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCBWafE7U6h7T6B46VRF5c3bomWD360VFAIqtj%2FczO57gIgOSjxq3tc8n9OI7ysKY0YWK2UEeEjm%2F%2BCV%2BoSs2UDiYEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXPUOc9EYrWcGlrhSrcA3g4cVN8iXVmFXEbRrUlkW0o9GKcDo0wS2gdSXxiCUiraq29rQ6ZBe2aidX69HaKBE%2BjfBOtT4%2BoN2R2vC28sLVJC1AG5KxDK3eAet3M6YmLbnqhk8oTYFWvW5koWUnoK7RqlVS9I45Axk4HG7fPtwTGrA7%2B%2FnRHMIchBLr4aoSB5tLO84TvjtHXCA%2BFs6sdcGrVgPsCWzdGYWUu%2BwjDkhsoczCyTFvW15hQki2c4xreHBZoPkbbxeGYHO%2FGgBV%2BFiiqTHHqaZi3FNO3EHjHwdmuuutUDDiJV2dCFC2Bw8t%2BTKRmT%2F1fDPxDNkc19FbXnp9Zm8PsKvY%2FH2J4yS0qB3SCpEeECprVOV0%2Fvbj0oq4atzE%2Fs41hXy%2Fy48RF6EkWXLUBG%2B8B0SAx38Of48KZswyikJdGv%2F4o17MuxAI2yaZojNHmk9neT1VSpgGMyWjvz8bI709yPZ5NOMoazKY85ke7NW9fwliZqk%2BAwMWq9qfeQaq53g0veXL0x9yWKTr1F7QZA%2BfNRcC5XkxZijQBRXbyY%2F6%2BQZNvGfd81SeU320xzcH4zepo%2BBBIAaCQbkcUP6XkJ%2BigPpNZ05o10R1oVNDcsmGXndwwblCpSKqN8FOzKu6AZmEmpyaIVY4gMIvYpr8GOqUBRqzFjxuTRNTk9UWD%2F7B34BikdHnw7pk79ZlghF1bXLceYw0n06R5UUdCHOTdl4eWezRXHFo90BLF%2B9jvrknbbyMHn8vRj%2Fs%2F05PllVXdKWmcb%2Fd9gcz0XrN1VgT4GC2W0NDkPvG59RFq2nt1Z60RstsP4%2BzRoMeuLDjtTN83CIFfHJxbc7OS%2F8KV5oBZs%2FM7B6Fqb2rwlq%2FV6mBCUDhUSkFsmqHC&X-Amz-Signature=f898bd435cce1bd173175697c076ab7775adebf0de0bda0669a31b4336dafe3e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STL4SKDD%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCBWafE7U6h7T6B46VRF5c3bomWD360VFAIqtj%2FczO57gIgOSjxq3tc8n9OI7ysKY0YWK2UEeEjm%2F%2BCV%2BoSs2UDiYEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXPUOc9EYrWcGlrhSrcA3g4cVN8iXVmFXEbRrUlkW0o9GKcDo0wS2gdSXxiCUiraq29rQ6ZBe2aidX69HaKBE%2BjfBOtT4%2BoN2R2vC28sLVJC1AG5KxDK3eAet3M6YmLbnqhk8oTYFWvW5koWUnoK7RqlVS9I45Axk4HG7fPtwTGrA7%2B%2FnRHMIchBLr4aoSB5tLO84TvjtHXCA%2BFs6sdcGrVgPsCWzdGYWUu%2BwjDkhsoczCyTFvW15hQki2c4xreHBZoPkbbxeGYHO%2FGgBV%2BFiiqTHHqaZi3FNO3EHjHwdmuuutUDDiJV2dCFC2Bw8t%2BTKRmT%2F1fDPxDNkc19FbXnp9Zm8PsKvY%2FH2J4yS0qB3SCpEeECprVOV0%2Fvbj0oq4atzE%2Fs41hXy%2Fy48RF6EkWXLUBG%2B8B0SAx38Of48KZswyikJdGv%2F4o17MuxAI2yaZojNHmk9neT1VSpgGMyWjvz8bI709yPZ5NOMoazKY85ke7NW9fwliZqk%2BAwMWq9qfeQaq53g0veXL0x9yWKTr1F7QZA%2BfNRcC5XkxZijQBRXbyY%2F6%2BQZNvGfd81SeU320xzcH4zepo%2BBBIAaCQbkcUP6XkJ%2BigPpNZ05o10R1oVNDcsmGXndwwblCpSKqN8FOzKu6AZmEmpyaIVY4gMIvYpr8GOqUBRqzFjxuTRNTk9UWD%2F7B34BikdHnw7pk79ZlghF1bXLceYw0n06R5UUdCHOTdl4eWezRXHFo90BLF%2B9jvrknbbyMHn8vRj%2Fs%2F05PllVXdKWmcb%2Fd9gcz0XrN1VgT4GC2W0NDkPvG59RFq2nt1Z60RstsP4%2BzRoMeuLDjtTN83CIFfHJxbc7OS%2F8KV5oBZs%2FM7B6Fqb2rwlq%2FV6mBCUDhUSkFsmqHC&X-Amz-Signature=9531fe3d67c19d8d217b3384076522f35774890b17650851aabe45dbfe512d92&X-Amz-SignedHeaders=host&x-id=GetObject)

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
