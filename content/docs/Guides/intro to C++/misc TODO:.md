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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKU2E4R6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCOgKkdXMXeg%2FlrGkH1%2Ba58DpVGnT9e3aT0wz%2B4KIPbCQIgKdjoBtieSgDuz%2FzPz2fRaOp%2FPEfiEqKtl%2FPBtnohNicqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfhQccwAySlbJVoSyrcAzhW84aaDOWN9qIbKtwu%2BLiFuikojpX0shq86lzMcNXv2VjssJ3PakDuWdAX7qXY8EWztnPx3M4QKD%2FCX3mD1PiVnHGfBYpfuM2IeznLUfAisAMN1y9KbctXKt56r7bHrjw0OOC1AkylgS9lage6H%2FCxNGQeMdgXcooPZQsJWkM%2BcHtBdU2GXE0XGB0krff4tNoDotGfsnNOiIXVChGO4b7tk%2F%2F1sii7hccfiocNLILNdsJXYQUnAlSbipkQnSjUMZh%2FiBTTXNvVbP8I1q6w1avAsHS6ChA7Dq8aeSzZERDTG%2FwUDRQUeiJ0gq7HPTkQbb1CS2FkDKTHu5l6YQGXB6cNhoNWlHBpmxjGRbgSLO0RIYE%2BcenUYE1GyHsZX0nTRlNd7fIn7aj%2FXzq5n0IVmb9oHGHEL65DRwwXXm1eQVzgJBgqrMvYkbJapiRWvGMS%2BqZ3cxUfZeOjLn9yh1lcw5KGWMt2NZK%2F%2FgKSR0zuhyCtmMO7kBoQIldtBFqrLxYq5VwSkoTu1etv4GFCFEYzecTRozy2SJuQUoymv4z%2Bnwx3w%2FpIs4MZAZuQAzxnUZ6dMxnQnJFRdVDICSJtKP2ltUv10SIl1257Ru9M9yzDcp91uR%2B3i%2FSUisf67IhcMNmG1sAGOqUBFs6GHoH6SMdQQUMabFPwxJK0Jb8aGdd7V4ItzAbbAqwG6VZ6bqt5ZXMlQSlWAnZrIpZWndsm7KqbgA%2BS5VpeLNTmqpCELD2tb%2FKUbwm8Zb9hfpF238TQKepQJE9RpsDKSlpfEoX3iAW%2BBbdAF1xLLjOCdppxe8Q8GTgd1D2A34%2BMb4aXKvnOd8lWD05JzgmEPJsMGAb1kpSAAb3ZeegMzpPK5rH5&X-Amz-Signature=b253ff76b663388b615b9722fe80d316e2964a54dd421e53c023a11526307415&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKU2E4R6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCOgKkdXMXeg%2FlrGkH1%2Ba58DpVGnT9e3aT0wz%2B4KIPbCQIgKdjoBtieSgDuz%2FzPz2fRaOp%2FPEfiEqKtl%2FPBtnohNicqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfhQccwAySlbJVoSyrcAzhW84aaDOWN9qIbKtwu%2BLiFuikojpX0shq86lzMcNXv2VjssJ3PakDuWdAX7qXY8EWztnPx3M4QKD%2FCX3mD1PiVnHGfBYpfuM2IeznLUfAisAMN1y9KbctXKt56r7bHrjw0OOC1AkylgS9lage6H%2FCxNGQeMdgXcooPZQsJWkM%2BcHtBdU2GXE0XGB0krff4tNoDotGfsnNOiIXVChGO4b7tk%2F%2F1sii7hccfiocNLILNdsJXYQUnAlSbipkQnSjUMZh%2FiBTTXNvVbP8I1q6w1avAsHS6ChA7Dq8aeSzZERDTG%2FwUDRQUeiJ0gq7HPTkQbb1CS2FkDKTHu5l6YQGXB6cNhoNWlHBpmxjGRbgSLO0RIYE%2BcenUYE1GyHsZX0nTRlNd7fIn7aj%2FXzq5n0IVmb9oHGHEL65DRwwXXm1eQVzgJBgqrMvYkbJapiRWvGMS%2BqZ3cxUfZeOjLn9yh1lcw5KGWMt2NZK%2F%2FgKSR0zuhyCtmMO7kBoQIldtBFqrLxYq5VwSkoTu1etv4GFCFEYzecTRozy2SJuQUoymv4z%2Bnwx3w%2FpIs4MZAZuQAzxnUZ6dMxnQnJFRdVDICSJtKP2ltUv10SIl1257Ru9M9yzDcp91uR%2B3i%2FSUisf67IhcMNmG1sAGOqUBFs6GHoH6SMdQQUMabFPwxJK0Jb8aGdd7V4ItzAbbAqwG6VZ6bqt5ZXMlQSlWAnZrIpZWndsm7KqbgA%2BS5VpeLNTmqpCELD2tb%2FKUbwm8Zb9hfpF238TQKepQJE9RpsDKSlpfEoX3iAW%2BBbdAF1xLLjOCdppxe8Q8GTgd1D2A34%2BMb4aXKvnOd8lWD05JzgmEPJsMGAb1kpSAAb3ZeegMzpPK5rH5&X-Amz-Signature=2c040f43596ac2cb4e83fb16a4a6b7b6d7848438b851fc02ef85ea76464494fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
