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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYT65BSD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmN1j%2FpjJTNLpSt9ag%2F%2FnnEIBs3hS1rlMO88MCG8%2FAxAiEAlrxowsAmQC%2F5aJF%2BYMfOIfvr6xm5f45N8MP9S%2Boy3qMqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGycf7gBaD5BgfeojircA%2BJAdXI3lPkt3xM1gRBJC81ZCQtxElTweckOLh9c6CRdwZ7zdMDAuDVAN3OSxZjii6THyw13ez7L3zEK%2BFOrQhU%2Fxot2fDHmfkTgUXWtsKAWVz3L66OdFW31A7MNp6w0yya0xPvIY0I6uN9FMbEkc9sPrA8EmcrbLV5tFIgLUP0GX1r%2BQngpcyoA9Z9z7wSm90GjPTrHbDmBbx5Jh6LPw8F%2Bd%2BsExLEAjUVLIe04IUKufDfZipXZqSfZbIUQvRfsmPOqPncysklpjGSLnUIYoDnefsrq5dHboAVGOfqV66UAB%2BBLtr4XyBxlUDw2gAU5GUjUxTLN12XjYG20ZmcoB6EuzbafMbMptK4RKTMwkPxGvibVP1RvTgJ%2FsD8INYDkiu6hGYmjf5w6VHEQXAZOcuPQtQI6W483s%2Fkgusr6TMo1PzZ%2Fxkld0WHEiCGXK1c2xqhmUv8n9Lxxw8USamX5KlJYjmg68s%2B1N7OdMApmJabw6qxKlM%2B5Z11Q6d33iq8OI9hpAdCNx1iArZT%2FZgodZSjuR8pNI%2Fjqk1QdPIN9Cxeyo5QYEW3%2Btv2BaaJmnIgbhJX3xVjYujsuZeQdLefs30S5PRlYpahpOEkcy%2BlTxotEP32OkP3hsbWL%2FaEbMLjAgL0GOqUBsOTSgBTLsWXXi9fgqc5bf0Kpg2h%2BeePHcMpq4lUqyz1k4BIqoeKIg%2Bw0aJKzLaRxUFo4V93ncpb5GfEzTOPTFb4rpyOLAs2WD9R7bUmxuiU0MKcHhDurKNyoOapVXLM3c1KN%2FcHTwnhIQR3u4DpueXm4E9CqMUPsQDPFxVYq8j9E%2BYh4SbsSDnTTNG%2Bp%2Fhp7LLNNRMpUJISdgWimG4JkpmHBTBtB&X-Amz-Signature=f230ec30cf58e011c2227860c377afa3dc4b42e25f3f01f1ecb0997dbd4a2b36&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYT65BSD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmN1j%2FpjJTNLpSt9ag%2F%2FnnEIBs3hS1rlMO88MCG8%2FAxAiEAlrxowsAmQC%2F5aJF%2BYMfOIfvr6xm5f45N8MP9S%2Boy3qMqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGycf7gBaD5BgfeojircA%2BJAdXI3lPkt3xM1gRBJC81ZCQtxElTweckOLh9c6CRdwZ7zdMDAuDVAN3OSxZjii6THyw13ez7L3zEK%2BFOrQhU%2Fxot2fDHmfkTgUXWtsKAWVz3L66OdFW31A7MNp6w0yya0xPvIY0I6uN9FMbEkc9sPrA8EmcrbLV5tFIgLUP0GX1r%2BQngpcyoA9Z9z7wSm90GjPTrHbDmBbx5Jh6LPw8F%2Bd%2BsExLEAjUVLIe04IUKufDfZipXZqSfZbIUQvRfsmPOqPncysklpjGSLnUIYoDnefsrq5dHboAVGOfqV66UAB%2BBLtr4XyBxlUDw2gAU5GUjUxTLN12XjYG20ZmcoB6EuzbafMbMptK4RKTMwkPxGvibVP1RvTgJ%2FsD8INYDkiu6hGYmjf5w6VHEQXAZOcuPQtQI6W483s%2Fkgusr6TMo1PzZ%2Fxkld0WHEiCGXK1c2xqhmUv8n9Lxxw8USamX5KlJYjmg68s%2B1N7OdMApmJabw6qxKlM%2B5Z11Q6d33iq8OI9hpAdCNx1iArZT%2FZgodZSjuR8pNI%2Fjqk1QdPIN9Cxeyo5QYEW3%2Btv2BaaJmnIgbhJX3xVjYujsuZeQdLefs30S5PRlYpahpOEkcy%2BlTxotEP32OkP3hsbWL%2FaEbMLjAgL0GOqUBsOTSgBTLsWXXi9fgqc5bf0Kpg2h%2BeePHcMpq4lUqyz1k4BIqoeKIg%2Bw0aJKzLaRxUFo4V93ncpb5GfEzTOPTFb4rpyOLAs2WD9R7bUmxuiU0MKcHhDurKNyoOapVXLM3c1KN%2FcHTwnhIQR3u4DpueXm4E9CqMUPsQDPFxVYq8j9E%2BYh4SbsSDnTTNG%2Bp%2Fhp7LLNNRMpUJISdgWimG4JkpmHBTBtB&X-Amz-Signature=f44407c0ef3706e72aea1dea3dc8815053b1aaf02768c376936093d8f87286e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
