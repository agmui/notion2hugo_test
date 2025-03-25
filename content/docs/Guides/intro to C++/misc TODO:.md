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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSBRHZT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgBzOPvxOpvH0DuheuVTz8MexN4R6MqbY0iG7Jp3b%2FqQIgRqrDq6U9A0F%2BIierI1GtVtragbjkZmsTcZevw5s0OuAq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHHkv4gpwTnjv28PlSrcA18VKAub9AU1atLvRuX7FkpST3f%2BNIC6H%2FsN6voAtMaHqXPszUAubmMCKQDTla8gqUEsZjUi32btiCGOd578tAK3%2FBhafBx8FIzGroNavO7iZTfXGkjv2H07XfGycWRcbPp%2F4Wfoq64dNe9vddbTi19IIObRd6%2BNaE7DMAnDF97%2BPpGlNPHyWqvXkHjVgjLLZdfxGshwz2RDNgMYwlmuYQdlsBiILr2CCpVp4ZQcK22LebNagsyIut9fFWzfM9msE9tROES3u%2BK1gRiG1BX8Nd32GinSReY83aOjUM4bge91%2BN2gMDdobLk94MRlga1jVz%2Fbl7eNyKY0unTEPGFs8htrH4LttgOyPIDJDjdfIzeTZqTBKT8WqIloz8FvNTymm6SynnN31OLPsxlBm9LTEnPJObic%2FMLlsVi%2B8GwIErbfiXKMyY3YKu4OAvkLXLZ1NO6%2FRrnYRSquoq8%2BAX5wHZkV3D3P57ugPGZ6axZ1E5wCXfObSA44V7XTavYGNA0B2CTmre9temO0o79accAFw0Qti1EofLZbqZqEQjTS0VDtxu%2F5%2B4RC5Za6OrOXZysB0VvaqIA9YZdxWhY8V4c0gap9dYp2hlohm%2BfGYBuewkZGbLJEcYMJ%2BtajspNCMOOXjL8GOqUBaFt9GvRQsy7r8vLPV4CgBONKqYq9aTrFeKZsv%2FGKl8d404CTAcrzVOHJrsCXmeSgAddDU9%2FnYvpulQhAowJftFmsu1LcTLdhGxLnqH0lEQcrMk7cSdPxgKsl%2Fm%2Fcko7Dp4lRmrsBJp%2F986mbYcXGn%2FYgLxbDMXrlxyOtlcnkqHNltH9KLEfa53JmCffGc6CuvZUWblCcuOzuHOb1uqS%2FoNhZM11T&X-Amz-Signature=44496382734c017c579a440cc85d48522cebe1b5ec1dd1e7de5bb5cc1b9fe306&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSBRHZT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgBzOPvxOpvH0DuheuVTz8MexN4R6MqbY0iG7Jp3b%2FqQIgRqrDq6U9A0F%2BIierI1GtVtragbjkZmsTcZevw5s0OuAq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHHkv4gpwTnjv28PlSrcA18VKAub9AU1atLvRuX7FkpST3f%2BNIC6H%2FsN6voAtMaHqXPszUAubmMCKQDTla8gqUEsZjUi32btiCGOd578tAK3%2FBhafBx8FIzGroNavO7iZTfXGkjv2H07XfGycWRcbPp%2F4Wfoq64dNe9vddbTi19IIObRd6%2BNaE7DMAnDF97%2BPpGlNPHyWqvXkHjVgjLLZdfxGshwz2RDNgMYwlmuYQdlsBiILr2CCpVp4ZQcK22LebNagsyIut9fFWzfM9msE9tROES3u%2BK1gRiG1BX8Nd32GinSReY83aOjUM4bge91%2BN2gMDdobLk94MRlga1jVz%2Fbl7eNyKY0unTEPGFs8htrH4LttgOyPIDJDjdfIzeTZqTBKT8WqIloz8FvNTymm6SynnN31OLPsxlBm9LTEnPJObic%2FMLlsVi%2B8GwIErbfiXKMyY3YKu4OAvkLXLZ1NO6%2FRrnYRSquoq8%2BAX5wHZkV3D3P57ugPGZ6axZ1E5wCXfObSA44V7XTavYGNA0B2CTmre9temO0o79accAFw0Qti1EofLZbqZqEQjTS0VDtxu%2F5%2B4RC5Za6OrOXZysB0VvaqIA9YZdxWhY8V4c0gap9dYp2hlohm%2BfGYBuewkZGbLJEcYMJ%2BtajspNCMOOXjL8GOqUBaFt9GvRQsy7r8vLPV4CgBONKqYq9aTrFeKZsv%2FGKl8d404CTAcrzVOHJrsCXmeSgAddDU9%2FnYvpulQhAowJftFmsu1LcTLdhGxLnqH0lEQcrMk7cSdPxgKsl%2Fm%2Fcko7Dp4lRmrsBJp%2F986mbYcXGn%2FYgLxbDMXrlxyOtlcnkqHNltH9KLEfa53JmCffGc6CuvZUWblCcuOzuHOb1uqS%2FoNhZM11T&X-Amz-Signature=a8ff053b39316cb8e9ed81d4141e86fc7a63a755ed4a0d600b2b06036c9c9a11&X-Amz-SignedHeaders=host&x-id=GetObject)

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
