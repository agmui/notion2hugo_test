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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ZSX2SF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW9FHpF4k%2F4lmHbjDDkfolqawqbWQLVQaw3a%2BG9dDD4QIhANuvJy%2FasT5J3k7rpkpsJQSY521SnJ9VR2Mx0QCvX3%2FZKv8DCDwQABoMNjM3NDIzMTgzODA1IgzTF7Ubah0Pchxk6Q8q3AN%2BRPQSEH5wAnsz4eKqc2GlU17YzlneZbYzkpstH7MBbhtH8WGRuq2b11qRUjofY9roCMJuE9%2BZdYmRU5xRxmLO3lXDl4n%2FqBDD3EwLEPBIm%2Fr1dqp7IkKzTLofXVnAah1xpFoXqOGC983er3eacLWO1Jz8dQN4GrGVMrkHYwGVkfOT57kVGgGkya19wG6Y2vcnDfyR%2FBpy37ZKeDS%2FAZkmQ47opcsWTNmuGfec%2FBrbNJ04TWbpZevg7CvX%2F7dGYeiaGYnLd3rp5fvbRmlxefNeKjh5oRONMUDlWJSTCe2lLCnurifcxt8QKwVEm8T5Iz9A6C8mefKWAqO%2BgpEdQN3QJI0tP8WA8haD9jng45aKqZlTzd9sd%2Bv4ohFHnphjpC%2FUKQpY%2FUQOh8Mn1XW5t1qat9rVNYyvG%2F%2BIsDqb7IL2kSU3d25s0peBB8OKtU64ehfjNjbOceLyk0QThcpslUt63FdMynSwrbEU30hVkXH1iANhj1GZpvaqiS4tnHGRqpFuy96DpBG5uHQ6UHI5AmTNnc%2BlRD0XxB3eC%2FHBcPVCJ%2BpDCHPdi1p1jek7dKZCAp006uH3B64JZNwDN2JBrpWgU7yobYPc6B3TDJhG%2BwZHJq1JDdsC1u9sBaIlgTCo%2FuXABjqkAYyeaagtVmpmP2BU%2ByYOUCmZBpt%2FBO2HYZN5KAUgFK0RynQpRkWLUYsPh6q391ATfy1DkSePXoRRpgubDxmdMO0CFxmm0p0umVu3lojVHXok5K0RcspEA9vi8Pz%2FHjjrfkqgjXLsRseqLfHpXkSqplWS7faaVI39XD%2Frl1aZfTjh9VSHmwuaXM2MSubLl4OJCm9WGFF178qqf2t3PvlOGeO3CbnE&X-Amz-Signature=9f60ed5da6c6f4502b77e4c6f03a76f00314739aa6f46fc22b84f557cb317020&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ZSX2SF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW9FHpF4k%2F4lmHbjDDkfolqawqbWQLVQaw3a%2BG9dDD4QIhANuvJy%2FasT5J3k7rpkpsJQSY521SnJ9VR2Mx0QCvX3%2FZKv8DCDwQABoMNjM3NDIzMTgzODA1IgzTF7Ubah0Pchxk6Q8q3AN%2BRPQSEH5wAnsz4eKqc2GlU17YzlneZbYzkpstH7MBbhtH8WGRuq2b11qRUjofY9roCMJuE9%2BZdYmRU5xRxmLO3lXDl4n%2FqBDD3EwLEPBIm%2Fr1dqp7IkKzTLofXVnAah1xpFoXqOGC983er3eacLWO1Jz8dQN4GrGVMrkHYwGVkfOT57kVGgGkya19wG6Y2vcnDfyR%2FBpy37ZKeDS%2FAZkmQ47opcsWTNmuGfec%2FBrbNJ04TWbpZevg7CvX%2F7dGYeiaGYnLd3rp5fvbRmlxefNeKjh5oRONMUDlWJSTCe2lLCnurifcxt8QKwVEm8T5Iz9A6C8mefKWAqO%2BgpEdQN3QJI0tP8WA8haD9jng45aKqZlTzd9sd%2Bv4ohFHnphjpC%2FUKQpY%2FUQOh8Mn1XW5t1qat9rVNYyvG%2F%2BIsDqb7IL2kSU3d25s0peBB8OKtU64ehfjNjbOceLyk0QThcpslUt63FdMynSwrbEU30hVkXH1iANhj1GZpvaqiS4tnHGRqpFuy96DpBG5uHQ6UHI5AmTNnc%2BlRD0XxB3eC%2FHBcPVCJ%2BpDCHPdi1p1jek7dKZCAp006uH3B64JZNwDN2JBrpWgU7yobYPc6B3TDJhG%2BwZHJq1JDdsC1u9sBaIlgTCo%2FuXABjqkAYyeaagtVmpmP2BU%2ByYOUCmZBpt%2FBO2HYZN5KAUgFK0RynQpRkWLUYsPh6q391ATfy1DkSePXoRRpgubDxmdMO0CFxmm0p0umVu3lojVHXok5K0RcspEA9vi8Pz%2FHjjrfkqgjXLsRseqLfHpXkSqplWS7faaVI39XD%2Frl1aZfTjh9VSHmwuaXM2MSubLl4OJCm9WGFF178qqf2t3PvlOGeO3CbnE&X-Amz-Signature=0aec9b6c81b0e1561fd019feae6a595ed4c65f36784875d24455840e06ae0377&X-Amz-SignedHeaders=host&x-id=GetObject)

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
