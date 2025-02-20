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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZPK2RSH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FGBQ9gYk2jOAPHRSkSRlNzAtOEA1FiGK44fiSCa0wRwIhALFx0LjeIHRuFruyFlFPrwH6fSclbdy8uzqJJaFhnNQYKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BOJg5AL5FrMwLgjEq3ANmUMNe3pOFxi7ZoMQOZqY58gyapPCUDeyXWbRRGnLGIfbIqYOuVuXiyqd7PRFUJrQxIKcKAr89SZpl7pb3j8cbxill72KmoGqPnqRCT3xfOB%2BTCcTyko6xN%2Fte9LMolUMYUu%2FWSJQQu%2FIIg4YjDPFb97nz08zIJziKoZvT8UDC2xS0lUjUpJg3QowWAkqtRzUg1li8gq3ubhijogrDhRiH%2BRu9M8jcE0th1KPfDQJCJELXGyPfmyWXmd3dP4zxmdIZcoDC8%2FfYXPPKv5JlO%2B%2BP4HKQLyiCaoogdKgUIiHWyACmTXz8VXox6%2FGDIZysDphEwsJtALZk2qI7POT3fmVgmuM2V6FoYGfKYuXN8lvR2fIr98xCRjoV2gJqhk9sMYZ%2FCoJAcggb1MK1xi24HKvu3lNfJJV4AfEtHXaMqLDlpmylVLgeQmNuiiceOdmo%2FIbqEaH%2BZLU53LmGt9AJfLXlAGC0EHbQ8200XY5u4N0Mj6neLDjZOfpMjGYrydtue5fMpatOchRO%2B9RIWg683X9mSDZ1UoB7Imic%2BzYZsogAMKoSJ%2BwQ3x98UsQUFFeJw3fVWrIOueGI4IF%2BBEHwjtu4Zdkr0Zhq5unMl4WOhUdGOiyu4HO%2FzVZO9j0f2zCSkNy9BjqkAUkEVW%2FkT60Sk25Y8t1XQ248TFkkDdSBpsMXIWELg2%2FtSdME%2B0Hu4ucV9Nb2HaV4%2BB%2BSrzoHscskxO5rb3l9wXhxd69suJ9IvCyOE8YRJReGsiez4a9w26CjJFamsb9NtmkjenOxqS5J5viLhVzr17bWf%2Fnf5OXn%2FnsZhRteuzwpM6e2JAgfs0NhgW4nWSZ1%2BGDWhRPlPaOA%2BQofRBCZn45avrL8&X-Amz-Signature=8dec0b0041020d8e9f1073477409408fdfb2e16caf2c5bbb0b9617503d280b88&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZPK2RSH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FGBQ9gYk2jOAPHRSkSRlNzAtOEA1FiGK44fiSCa0wRwIhALFx0LjeIHRuFruyFlFPrwH6fSclbdy8uzqJJaFhnNQYKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BOJg5AL5FrMwLgjEq3ANmUMNe3pOFxi7ZoMQOZqY58gyapPCUDeyXWbRRGnLGIfbIqYOuVuXiyqd7PRFUJrQxIKcKAr89SZpl7pb3j8cbxill72KmoGqPnqRCT3xfOB%2BTCcTyko6xN%2Fte9LMolUMYUu%2FWSJQQu%2FIIg4YjDPFb97nz08zIJziKoZvT8UDC2xS0lUjUpJg3QowWAkqtRzUg1li8gq3ubhijogrDhRiH%2BRu9M8jcE0th1KPfDQJCJELXGyPfmyWXmd3dP4zxmdIZcoDC8%2FfYXPPKv5JlO%2B%2BP4HKQLyiCaoogdKgUIiHWyACmTXz8VXox6%2FGDIZysDphEwsJtALZk2qI7POT3fmVgmuM2V6FoYGfKYuXN8lvR2fIr98xCRjoV2gJqhk9sMYZ%2FCoJAcggb1MK1xi24HKvu3lNfJJV4AfEtHXaMqLDlpmylVLgeQmNuiiceOdmo%2FIbqEaH%2BZLU53LmGt9AJfLXlAGC0EHbQ8200XY5u4N0Mj6neLDjZOfpMjGYrydtue5fMpatOchRO%2B9RIWg683X9mSDZ1UoB7Imic%2BzYZsogAMKoSJ%2BwQ3x98UsQUFFeJw3fVWrIOueGI4IF%2BBEHwjtu4Zdkr0Zhq5unMl4WOhUdGOiyu4HO%2FzVZO9j0f2zCSkNy9BjqkAUkEVW%2FkT60Sk25Y8t1XQ248TFkkDdSBpsMXIWELg2%2FtSdME%2B0Hu4ucV9Nb2HaV4%2BB%2BSrzoHscskxO5rb3l9wXhxd69suJ9IvCyOE8YRJReGsiez4a9w26CjJFamsb9NtmkjenOxqS5J5viLhVzr17bWf%2Fnf5OXn%2FnsZhRteuzwpM6e2JAgfs0NhgW4nWSZ1%2BGDWhRPlPaOA%2BQofRBCZn45avrL8&X-Amz-Signature=e48b158b012ba42dcbd0c91ebb38af54215ed05e7f088c5ed39768b366806a91&X-Amz-SignedHeaders=host&x-id=GetObject)

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
