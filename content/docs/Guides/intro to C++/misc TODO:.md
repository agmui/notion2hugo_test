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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KRAPS53%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEctE7r99NJCcEwh1Dt%2BkIr6sVpbNLtFnIkz8mQimnLZAiEAtZHO%2Fsn8e4mdX9aPgS5pLiQZcbxmuNUW7WnaKiow3fkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9UZHncGMwdatgnASrcA4qED%2FTnlDMSzs1LKXT%2F2BGvP%2BimHfA1wgv4D%2FZ%2FWkiOJMXUQh0%2FOxvbrb16f%2F6YJRjcqRHAOYUt1k7gK5NjoQS3JVOdNMe%2FlbwJBnS6buDpD%2FR1YBlwB1YVECixvG3ZSW%2BQSLSQAkEKzzzQvlHLo9pZXLhx5%2BFDGbqbwoBPgfmj9gGi7ERFX7MExuzApNEVMGfcUinOuMiTI1RZip1N4CY8cRnI6k3b%2FUv8lk5HLGX79Ex5VwRx1dNEx55aaM92vRtxU5DrHf%2BtptypjRyALr%2BylL9GsHwkZky9TK22h3wW185UlEzsyCNAJelcOzGoNHVjm4yZmqZksJCZHDuxbU2HrtpGIOQ6juWuexoX99vtbkB3gL0gOrPtolulxRuD8siEwygbE80FOXLutGn%2FqhSgj2qfdAViVofTG8Tu1QUGCj6K1KTK3ngvqk0PuxoOmCDF3AKISI9HKFBvc8l863T8zjIPjeqNq9q6tt6oyrK0ZEvGx52xO5jFzVTaL%2Fo7hLo0G5wsAFC6HfVdXqHrxmrA%2BOn7aSeqlKWL1mQ8TwGRkH%2FDGgbIpyawE6Bsemztwok73%2F12wCmkPMryahuXuMBNM3nLTCqXQFWmRq2Ji%2BaNoo%2FVOsPTMts5NzntMPnD2r0GOqUBx7%2FUhdMC3x6vTcniUtGYxoxn0pD0lfz02eLmdYGEybFIEg9znNSCP%2FeS1cMoETnrbSJywlP7u4eNerZHcrCdDsqtVKRdrutReI2epjKD3iLITBdvqMeALmFissZZsvJG8j9ajvyUkBpFde2%2BCy2kbpVffE0iBtRcSMbxEj2a0287vDKMEpA7cBzqVYVmBUOxhjfG86rvQN6lHA31I2WrK5Owdb%2Fw&X-Amz-Signature=4ae9b3a51274750c344bd1354f2a967a3da5ad7c0c74b5a059ebb1a4c172aa57&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KRAPS53%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEctE7r99NJCcEwh1Dt%2BkIr6sVpbNLtFnIkz8mQimnLZAiEAtZHO%2Fsn8e4mdX9aPgS5pLiQZcbxmuNUW7WnaKiow3fkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9UZHncGMwdatgnASrcA4qED%2FTnlDMSzs1LKXT%2F2BGvP%2BimHfA1wgv4D%2FZ%2FWkiOJMXUQh0%2FOxvbrb16f%2F6YJRjcqRHAOYUt1k7gK5NjoQS3JVOdNMe%2FlbwJBnS6buDpD%2FR1YBlwB1YVECixvG3ZSW%2BQSLSQAkEKzzzQvlHLo9pZXLhx5%2BFDGbqbwoBPgfmj9gGi7ERFX7MExuzApNEVMGfcUinOuMiTI1RZip1N4CY8cRnI6k3b%2FUv8lk5HLGX79Ex5VwRx1dNEx55aaM92vRtxU5DrHf%2BtptypjRyALr%2BylL9GsHwkZky9TK22h3wW185UlEzsyCNAJelcOzGoNHVjm4yZmqZksJCZHDuxbU2HrtpGIOQ6juWuexoX99vtbkB3gL0gOrPtolulxRuD8siEwygbE80FOXLutGn%2FqhSgj2qfdAViVofTG8Tu1QUGCj6K1KTK3ngvqk0PuxoOmCDF3AKISI9HKFBvc8l863T8zjIPjeqNq9q6tt6oyrK0ZEvGx52xO5jFzVTaL%2Fo7hLo0G5wsAFC6HfVdXqHrxmrA%2BOn7aSeqlKWL1mQ8TwGRkH%2FDGgbIpyawE6Bsemztwok73%2F12wCmkPMryahuXuMBNM3nLTCqXQFWmRq2Ji%2BaNoo%2FVOsPTMts5NzntMPnD2r0GOqUBx7%2FUhdMC3x6vTcniUtGYxoxn0pD0lfz02eLmdYGEybFIEg9znNSCP%2FeS1cMoETnrbSJywlP7u4eNerZHcrCdDsqtVKRdrutReI2epjKD3iLITBdvqMeALmFissZZsvJG8j9ajvyUkBpFde2%2BCy2kbpVffE0iBtRcSMbxEj2a0287vDKMEpA7cBzqVYVmBUOxhjfG86rvQN6lHA31I2WrK5Owdb%2Fw&X-Amz-Signature=ad428d605c655ca5570f7c2175b4ab473033e11e1eec8b15981e90f67a3c01cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
