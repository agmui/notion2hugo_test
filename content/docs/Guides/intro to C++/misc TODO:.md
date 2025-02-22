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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGPSHHKR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUDngFhCYWdAJQ%2BZYk9okmR%2FkjDHK1CUIIHveGsmEfTAiAHeAab2L7R%2FFTsiBdFYeVtBy9NMnMApZdTMV8HMrAXkSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzYuCziGh%2FLpwFKS1KtwDZuJd84vI%2FEe%2FU5WLLPVhMt4tauIBzGSYVvPeYeCIjk6k1RMcX5SRKc8%2BsFix4mKCAPcOKNJmbf334fPmKbC7wqSUd19DckFcbhO3pAzuJk2OgB1CQ0nturAc9g2ekKlO9N%2FhF9CfIPz2VrhObX3KUF5BeqSRkcqM724Mz9bJgmMViAZWiGKeq4TVRdNruf6ogUm83s5bv04ocex9jOW2JbZ9YlZNaxNnCZeQIVUSAvZHhRp3IvCQftD09Di%2FdoWZmOGHEieQRn0ePXJit4WVazXOrgAapddpjElZ6DR0lejx4S6owEXAlCD5110T7jYmFlqgbwKqPJeCbbaBkNJOWEXL5l2fbfC%2FANwHzqX7h%2FlmcU06N%2FdkVQULSZWBLRKwvbZgJa7bhW9KGFBXmrwlMM0Eo63lkZ0XIrKN%2FqgemCtmZOpbk13gYUIJP1m6jm9dSCmrGONf%2FCOPhHJ586Rc2m4x4pcvDZKcPoJlEWkGYkM32bmM7NCCtCkiPX%2FTIkBB%2BBV8klKxAh9ZiKGkxn2uy6JL7p%2BzhqHRAFYV2s7tMzNNgamARiEqLHB7%2B9kiD3SIynBD3wprsAYzkCIxkpJ0unKPSsdkYTappebVXB5kOwoP0jUIvlgQXBW%2BorYwyYbovQY6pgHCP64EUKZXodDxzG8aC0FyjfniizJKzvv9aBaLRlrHVQz11TLjMLTSBQHOS0y6ktGhjbiJyVtW0xZ7M4CBpj9sP4EzTF9%2F3zkgStcZY5SNR2x8xuzGoByLW%2FK%2FIlNCMcxFHA9r8NpQHfVl2dVRdngPSffJITw0OWvb17%2BhAWw4yHyPG%2BmESHfWvxXemSFmxn2sC%2FV68P9Ow6iNDcBY3ZNHUH56upus&X-Amz-Signature=25bad1772b2143aab28b7cb0a3f7f7a0551503cbf3afd3ba4d4f4cb33118d55e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGPSHHKR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUDngFhCYWdAJQ%2BZYk9okmR%2FkjDHK1CUIIHveGsmEfTAiAHeAab2L7R%2FFTsiBdFYeVtBy9NMnMApZdTMV8HMrAXkSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzYuCziGh%2FLpwFKS1KtwDZuJd84vI%2FEe%2FU5WLLPVhMt4tauIBzGSYVvPeYeCIjk6k1RMcX5SRKc8%2BsFix4mKCAPcOKNJmbf334fPmKbC7wqSUd19DckFcbhO3pAzuJk2OgB1CQ0nturAc9g2ekKlO9N%2FhF9CfIPz2VrhObX3KUF5BeqSRkcqM724Mz9bJgmMViAZWiGKeq4TVRdNruf6ogUm83s5bv04ocex9jOW2JbZ9YlZNaxNnCZeQIVUSAvZHhRp3IvCQftD09Di%2FdoWZmOGHEieQRn0ePXJit4WVazXOrgAapddpjElZ6DR0lejx4S6owEXAlCD5110T7jYmFlqgbwKqPJeCbbaBkNJOWEXL5l2fbfC%2FANwHzqX7h%2FlmcU06N%2FdkVQULSZWBLRKwvbZgJa7bhW9KGFBXmrwlMM0Eo63lkZ0XIrKN%2FqgemCtmZOpbk13gYUIJP1m6jm9dSCmrGONf%2FCOPhHJ586Rc2m4x4pcvDZKcPoJlEWkGYkM32bmM7NCCtCkiPX%2FTIkBB%2BBV8klKxAh9ZiKGkxn2uy6JL7p%2BzhqHRAFYV2s7tMzNNgamARiEqLHB7%2B9kiD3SIynBD3wprsAYzkCIxkpJ0unKPSsdkYTappebVXB5kOwoP0jUIvlgQXBW%2BorYwyYbovQY6pgHCP64EUKZXodDxzG8aC0FyjfniizJKzvv9aBaLRlrHVQz11TLjMLTSBQHOS0y6ktGhjbiJyVtW0xZ7M4CBpj9sP4EzTF9%2F3zkgStcZY5SNR2x8xuzGoByLW%2FK%2FIlNCMcxFHA9r8NpQHfVl2dVRdngPSffJITw0OWvb17%2BhAWw4yHyPG%2BmESHfWvxXemSFmxn2sC%2FV68P9Ow6iNDcBY3ZNHUH56upus&X-Amz-Signature=6db013e9b114af6a76cc62ae6b6921a814080be73ff9673c5f2a976656c5b8db&X-Amz-SignedHeaders=host&x-id=GetObject)

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
