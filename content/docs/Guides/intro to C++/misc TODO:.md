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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623GJ7RZT%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFE66RQr4yFy8BKJ2JMMQOnp%2BzbubKqHgajlfhKEZPy3AiEA2seR5Qsa67LQyhka%2BL7p1yj4fG2O77iuiO%2Bc3BZXmvsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BpTlbxyIvdVnTTUSrcA4kpxZqtRczIFqpi7BD2kbxdLKE62unxsJ3XPalbMxqHHP0EVZq4IWCQvfcUkuF%2BTJC%2FYNUsyk3aSK9mG5bIlAIIlal4N1zxntd4%2FNrqjWMR4pfgf1z7lgX2%2BShbLFc9q7sU8DCO7nr4gn5BkNz6riGB1Gd2rgQhaBww4LIKE7IPZnlsZaCJmknPLcLf%2BW9SGj6WFoh8hyhC2FtusCte6nEvJ%2Bknbxw8Gz17%2F3%2FMtXQZFcEh9sIZUYKWWLo8ewOe0Ir%2F4rbdGagz9YhpnulBtvIMOB7RIN%2BNU4WIt5Y%2BsQ0kuih6TvCwMK4bGHdGMvDqvXwBVeKdYINgxHARgHIB0Bp6GL1WqDoZbANGAsNm0WVA11fuai0AkoZQ%2FLLvdfIDNh7e0zzUbwdPuHrcLTaE6lqzUn301vDeCzu9QLhvilawr%2BjLsNtB6goV4EbTRBkUkupm95%2F0G3N6ORZWdqBWeC%2BttoYCt0ENPisqB7SCcwhU73CAwcLVs4V9u69AKm7Z%2Beu1jCXZ%2BjX1A8oNxjTPUG4lspAy0Dj6R%2BSwLeCz4wPxJcEC1bqi3djsARDMx0ozNYGmyQVQ4crUYPHg9uRyeg04%2BzjPnQnoA3TGMmjChy1uwysC%2B0%2FjkVBrTbvuMPTgnr0GOqUBhKp%2F1p7aZYvLFKSEkCDOEqJKUu4gdEGH74MUfrNWYCegHFgDQW0VN4ZmPmrjYJi9cYa4HgLtXL64botLVZ4tV2W1%2BL0KdSRFp2H0xhYIN0jYpuN0N1J%2B8HD%2Fm9GNuFGywek8yOgzixN934A8mx0Jx1BI5szeBuNk94CBTZ1crdBYVt%2B%2Fkl8HpLSkKiB1vDMgXa2X79uEz6PEySnFNyD9WuvDA%2F8M&X-Amz-Signature=b4e4c78275a186b3641f1581cf3abfa6b6d51b04859dae0c801c35f592ff3d5a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623GJ7RZT%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFE66RQr4yFy8BKJ2JMMQOnp%2BzbubKqHgajlfhKEZPy3AiEA2seR5Qsa67LQyhka%2BL7p1yj4fG2O77iuiO%2Bc3BZXmvsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BpTlbxyIvdVnTTUSrcA4kpxZqtRczIFqpi7BD2kbxdLKE62unxsJ3XPalbMxqHHP0EVZq4IWCQvfcUkuF%2BTJC%2FYNUsyk3aSK9mG5bIlAIIlal4N1zxntd4%2FNrqjWMR4pfgf1z7lgX2%2BShbLFc9q7sU8DCO7nr4gn5BkNz6riGB1Gd2rgQhaBww4LIKE7IPZnlsZaCJmknPLcLf%2BW9SGj6WFoh8hyhC2FtusCte6nEvJ%2Bknbxw8Gz17%2F3%2FMtXQZFcEh9sIZUYKWWLo8ewOe0Ir%2F4rbdGagz9YhpnulBtvIMOB7RIN%2BNU4WIt5Y%2BsQ0kuih6TvCwMK4bGHdGMvDqvXwBVeKdYINgxHARgHIB0Bp6GL1WqDoZbANGAsNm0WVA11fuai0AkoZQ%2FLLvdfIDNh7e0zzUbwdPuHrcLTaE6lqzUn301vDeCzu9QLhvilawr%2BjLsNtB6goV4EbTRBkUkupm95%2F0G3N6ORZWdqBWeC%2BttoYCt0ENPisqB7SCcwhU73CAwcLVs4V9u69AKm7Z%2Beu1jCXZ%2BjX1A8oNxjTPUG4lspAy0Dj6R%2BSwLeCz4wPxJcEC1bqi3djsARDMx0ozNYGmyQVQ4crUYPHg9uRyeg04%2BzjPnQnoA3TGMmjChy1uwysC%2B0%2FjkVBrTbvuMPTgnr0GOqUBhKp%2F1p7aZYvLFKSEkCDOEqJKUu4gdEGH74MUfrNWYCegHFgDQW0VN4ZmPmrjYJi9cYa4HgLtXL64botLVZ4tV2W1%2BL0KdSRFp2H0xhYIN0jYpuN0N1J%2B8HD%2Fm9GNuFGywek8yOgzixN934A8mx0Jx1BI5szeBuNk94CBTZ1crdBYVt%2B%2Fkl8HpLSkKiB1vDMgXa2X79uEz6PEySnFNyD9WuvDA%2F8M&X-Amz-Signature=be13e0e10c951a3ba7515ae9194c0689362d4d12511d5e4e5f49adb041c14d3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
