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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQSKB4K%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT%2Fw7s8QOJV2sBtxKbXWRyXm%2F01nNHIPcYl0rwbG4HcAIgeI3rG4vv4RpLw%2BVDR%2B4rE11d4pfkiIlw3rO1e8dCzMEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYxwzOLtzJ5VToVxircA0UalYiehzrTrmNoPf4sxX2kwp6%2FYwkTOx6SjOfdi4STBEXOG8IRDReDbyoOFVVXNdG3q5wvm4ZT0wFG9QFxuneyfJWJUSpE7ck0I4bed5sNrP7u8BJQY37Ghb0aNwaB3X%2BzpQHdyE2A4vTGTd4j43zYzgKhTx%2Bu4ue%2Bf79BMxs7iOfXvoDbmVTmhO8XERv4HWPwkrL1N45BxbUWY2unLPc6dA7XM%2F%2BuMawlYMoaMpdLZY9ceikCHxzE4APTINfjXihn%2BPy2Z3QmaqW0OmRIPjK3WcihOp30AyOSTBXcS25S214KVcIXp1wLXubc3DX%2Bcr8J1MBKJ%2FUmldPZAMUkrMngPdYMWqD9vYdaYE6kPSHzxViop44MoUBOOO4wLb0BabvDOlSSgRsqzBBKlz1HX0u7bumjj7O3ExlvMBg7emjvrvYb2r3qz%2FFLCWKflIYz263JKUOf8mLTCEQUNkTV2dDqi6DwU4ZNuqPIOzBmmKzqqjiI7NGWIiQXUOziATBFD81v08TgxTfzpDWIA6vPzkxBE39A%2BposRq%2FGKmjjiC3RDYvN4PCWIgzxumpmRFjzjbyG7D2n521Gkn6m%2BSOokkPfV2ZN6qG9lferrwErpVWssO0IiVKXMie1LwBFMOHKtsQGOqUB8WNq%2FpdqQEGTddFQ9T2WO99erTpev6oGD7jRF6jhmxqG%2B7HaexUSekQ4GKaRvgnAmaUeS8AMTgfIXLFOuKEcCGA3%2Fdcj5lvlMx0UUhlS8CZIZohj7y86VxaAcmdPZqMlXgY9iTM1eO3Gt7tR9cI31UdGTan3KvU8RbunQfmrX0d35aYcqypw4X8LdAJ2WbBTyZ5NCagFza0JYuhXMrnq1ivdCcuK&X-Amz-Signature=5b23f20f26ac7b19100dd15dd1d28698a50ac78ff8cacdf80b87b12f603eaa9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQSKB4K%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT%2Fw7s8QOJV2sBtxKbXWRyXm%2F01nNHIPcYl0rwbG4HcAIgeI3rG4vv4RpLw%2BVDR%2B4rE11d4pfkiIlw3rO1e8dCzMEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYxwzOLtzJ5VToVxircA0UalYiehzrTrmNoPf4sxX2kwp6%2FYwkTOx6SjOfdi4STBEXOG8IRDReDbyoOFVVXNdG3q5wvm4ZT0wFG9QFxuneyfJWJUSpE7ck0I4bed5sNrP7u8BJQY37Ghb0aNwaB3X%2BzpQHdyE2A4vTGTd4j43zYzgKhTx%2Bu4ue%2Bf79BMxs7iOfXvoDbmVTmhO8XERv4HWPwkrL1N45BxbUWY2unLPc6dA7XM%2F%2BuMawlYMoaMpdLZY9ceikCHxzE4APTINfjXihn%2BPy2Z3QmaqW0OmRIPjK3WcihOp30AyOSTBXcS25S214KVcIXp1wLXubc3DX%2Bcr8J1MBKJ%2FUmldPZAMUkrMngPdYMWqD9vYdaYE6kPSHzxViop44MoUBOOO4wLb0BabvDOlSSgRsqzBBKlz1HX0u7bumjj7O3ExlvMBg7emjvrvYb2r3qz%2FFLCWKflIYz263JKUOf8mLTCEQUNkTV2dDqi6DwU4ZNuqPIOzBmmKzqqjiI7NGWIiQXUOziATBFD81v08TgxTfzpDWIA6vPzkxBE39A%2BposRq%2FGKmjjiC3RDYvN4PCWIgzxumpmRFjzjbyG7D2n521Gkn6m%2BSOokkPfV2ZN6qG9lferrwErpVWssO0IiVKXMie1LwBFMOHKtsQGOqUB8WNq%2FpdqQEGTddFQ9T2WO99erTpev6oGD7jRF6jhmxqG%2B7HaexUSekQ4GKaRvgnAmaUeS8AMTgfIXLFOuKEcCGA3%2Fdcj5lvlMx0UUhlS8CZIZohj7y86VxaAcmdPZqMlXgY9iTM1eO3Gt7tR9cI31UdGTan3KvU8RbunQfmrX0d35aYcqypw4X8LdAJ2WbBTyZ5NCagFza0JYuhXMrnq1ivdCcuK&X-Amz-Signature=1513ea483142d044db325158ea40538bd303bb0c3bd7dacdb314362659d878e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
