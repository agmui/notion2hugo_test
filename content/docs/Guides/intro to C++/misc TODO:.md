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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUK24FTF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOu7fS6UQrf3chqOWm19bOg0f%2FLLid4iuTaIhlcnfbuAIgb0FPNiMNSoqMAZZhs6n0AhMFdofZhWHId5fvsLbrL9YqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4mXs08e9GEp8yB%2BircA3aPDFgiIiJBN5tG8synMp0HZ0ENnmqFLevQOpLj%2ByYH0ayFSk8MYolzjnocCUKGJD4ZLiT8hX1h%2FiOxRWnaQ1hM3o8JKxaQD27Wvkutrczsk8QqyrpSd2DmA9SBktUINUc%2BuxJk5Zf3rKEj%2B8RynXW9sA2bPH0NynGkJT3neTHnF5PNZATYlAnJ0oXRe0jB58O3Q%2BniAd5dRsOTuAGQOE1ivBDgnwuBh9htaZc%2FJdYRIZ8ZkDlyOynUabF0GAlsWB79eQd9RBRXFxHYlsYM5XwULU8dhLH01Vm5U7D3St67ncLUxTdC8c18KKR%2FkZo2Cl5%2B%2Btf%2FAnKzKENaJDbYzHUbgM9HGmdGjROboH8yGm%2BlMsFzO%2Fd3Dnr16iCs1kWDG0qINfF%2B47HXLD0ppeukY4%2BIat9QF%2BGL3Hww2iYGRO30Pa3dAhmBXqU60SibOuXrnu8Et4WYOBCJFEb95hrfoCmzTBAluFX8g%2FlIXNsbqkeUCa2skC8llVS4O1YV0IIdqhX2r8PnGIYNOBK7QH6828Ot7VAhgRq3clt8uLHY1OBv2%2BMAkAPydA%2Bn3XdAu1iC6Zn0Xpu%2FjGOZt9usUTPeOqTRHvIOKmIgRfkBxGoj80UNPOBnfTvrBO%2F%2BBMb6MIj8l74GOqUB%2FQyprW1WEjRL0utE5C1SD4XegshH0A6dkVnn1jwEQtzurT7qiRoXnEXQSJQnnJ6iS2AvQ0v4a0IQEyF8ziIadkuRYRyds%2F1AmHyhamOrAMRgJRPC8O%2FOw7nglhWlAgkIe6ICj6Vj6I94kMpR0kFGOCaSWQX%2FqvyESS0dNtlrGf77FeJjtsdboAeyjn2VOv3xc%2BaGh1%2FS261%2FpWqYEdT%2BwntnSVMF&X-Amz-Signature=3693e10c6146c9e0a7631299f02311c06363172fa8125928dab652053bbb6476&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUK24FTF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOu7fS6UQrf3chqOWm19bOg0f%2FLLid4iuTaIhlcnfbuAIgb0FPNiMNSoqMAZZhs6n0AhMFdofZhWHId5fvsLbrL9YqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4mXs08e9GEp8yB%2BircA3aPDFgiIiJBN5tG8synMp0HZ0ENnmqFLevQOpLj%2ByYH0ayFSk8MYolzjnocCUKGJD4ZLiT8hX1h%2FiOxRWnaQ1hM3o8JKxaQD27Wvkutrczsk8QqyrpSd2DmA9SBktUINUc%2BuxJk5Zf3rKEj%2B8RynXW9sA2bPH0NynGkJT3neTHnF5PNZATYlAnJ0oXRe0jB58O3Q%2BniAd5dRsOTuAGQOE1ivBDgnwuBh9htaZc%2FJdYRIZ8ZkDlyOynUabF0GAlsWB79eQd9RBRXFxHYlsYM5XwULU8dhLH01Vm5U7D3St67ncLUxTdC8c18KKR%2FkZo2Cl5%2B%2Btf%2FAnKzKENaJDbYzHUbgM9HGmdGjROboH8yGm%2BlMsFzO%2Fd3Dnr16iCs1kWDG0qINfF%2B47HXLD0ppeukY4%2BIat9QF%2BGL3Hww2iYGRO30Pa3dAhmBXqU60SibOuXrnu8Et4WYOBCJFEb95hrfoCmzTBAluFX8g%2FlIXNsbqkeUCa2skC8llVS4O1YV0IIdqhX2r8PnGIYNOBK7QH6828Ot7VAhgRq3clt8uLHY1OBv2%2BMAkAPydA%2Bn3XdAu1iC6Zn0Xpu%2FjGOZt9usUTPeOqTRHvIOKmIgRfkBxGoj80UNPOBnfTvrBO%2F%2BBMb6MIj8l74GOqUB%2FQyprW1WEjRL0utE5C1SD4XegshH0A6dkVnn1jwEQtzurT7qiRoXnEXQSJQnnJ6iS2AvQ0v4a0IQEyF8ziIadkuRYRyds%2F1AmHyhamOrAMRgJRPC8O%2FOw7nglhWlAgkIe6ICj6Vj6I94kMpR0kFGOCaSWQX%2FqvyESS0dNtlrGf77FeJjtsdboAeyjn2VOv3xc%2BaGh1%2FS261%2FpWqYEdT%2BwntnSVMF&X-Amz-Signature=65bcd4226902de200c1a1d0e755aa36472c719e1f70f672060bb2fdab4f1933e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
