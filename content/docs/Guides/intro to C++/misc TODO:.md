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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUKX6AHM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BwiYqTkPaU9T2bxzr%2F2EDSYbfMrPBKoMKYb%2FtoefWPAiEAzVKKxRIhk4pDBo4SiboAcCdWMeKc4SWoG9AHTTH0Hugq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPL2mNH%2BMQwAKVS1%2FyrcA9g7miNYLoV9uq%2BkXO1QkSMfcEVzrEprvP8PXi1Tms%2BFjhdFHlZ35LkcNGG5VVv%2FW7Lj2aEZ2H5S0fUhutyvMEgfzw8MQBql47BLrnnUvcBaFeKcPw7t6FRV7yDrGAEdWHOVhjgVaNaK90pD8zG99CUz6UTOz9pg3aLfpdp1SnPHH%2FW4NCCm45gQDQezLOqI%2BKWaTzqYk9CMeRiOzxeTmtxw%2FISwOgOzkl8fONBI4QX%2F5oNNuNZ2MTW%2FFmTPtkoOKckm2c%2BMBnv6t0C%2FVlpInMpSU1CQE7Ylm5rmcsxeBZy7Yzs5NEWIQ%2B1xd8B4enfkxqypljndWUPaKrHTPnkqkwF%2BswX0Drdd9XAdrMvca2ApO5Ly3B9zLW94wbn4rhzjaHA64Is3VJ2OnteqYB9UqeCiCbahZpRh70b4czjNV2MeZbv4t9ETvzfJpKPvF44gaHYSmdOTek5GrDWEXNShjAL8NcvTRSAcf70sgLfBJrgU3V6afOOeBM8MLgu8nWBo2mU0KGieh5zyc6iXDmdUGo%2FNeVbZnCQPe4TcDEhCB8NLK6JiNgF2sQsTcE59xip1SVY1actGrKFYjywA9yDenZAFAmp3tMzyKnLY1yeOuGB7oXfz7a%2B8wheEAyNRMK6Lj78GOqUBPeNv2KJ%2BtaPOnymhB4htkeyF6Ywioix2UiTZ51NVUvU2vLbPvpUC%2BcZR0t1lgqTynrH2tOz7GeKlbcX1GLpUIst95Sc2nEf%2BGEYplG2X%2B940VCDL7DVCIMsH4HW300eZjUPIZRNuwACRAkTetGuqPyCNrJfA5OBFzEupLbpNHWYshE8O%2BPwet2JK7vRS86BSsLkyaGU0rxRH5W43uhscfPf6XUAB&X-Amz-Signature=39219b495b847a89af354c0d270ed76c06e7899eb0e6bf59825f1b023f5c0941&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUKX6AHM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BwiYqTkPaU9T2bxzr%2F2EDSYbfMrPBKoMKYb%2FtoefWPAiEAzVKKxRIhk4pDBo4SiboAcCdWMeKc4SWoG9AHTTH0Hugq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPL2mNH%2BMQwAKVS1%2FyrcA9g7miNYLoV9uq%2BkXO1QkSMfcEVzrEprvP8PXi1Tms%2BFjhdFHlZ35LkcNGG5VVv%2FW7Lj2aEZ2H5S0fUhutyvMEgfzw8MQBql47BLrnnUvcBaFeKcPw7t6FRV7yDrGAEdWHOVhjgVaNaK90pD8zG99CUz6UTOz9pg3aLfpdp1SnPHH%2FW4NCCm45gQDQezLOqI%2BKWaTzqYk9CMeRiOzxeTmtxw%2FISwOgOzkl8fONBI4QX%2F5oNNuNZ2MTW%2FFmTPtkoOKckm2c%2BMBnv6t0C%2FVlpInMpSU1CQE7Ylm5rmcsxeBZy7Yzs5NEWIQ%2B1xd8B4enfkxqypljndWUPaKrHTPnkqkwF%2BswX0Drdd9XAdrMvca2ApO5Ly3B9zLW94wbn4rhzjaHA64Is3VJ2OnteqYB9UqeCiCbahZpRh70b4czjNV2MeZbv4t9ETvzfJpKPvF44gaHYSmdOTek5GrDWEXNShjAL8NcvTRSAcf70sgLfBJrgU3V6afOOeBM8MLgu8nWBo2mU0KGieh5zyc6iXDmdUGo%2FNeVbZnCQPe4TcDEhCB8NLK6JiNgF2sQsTcE59xip1SVY1actGrKFYjywA9yDenZAFAmp3tMzyKnLY1yeOuGB7oXfz7a%2B8wheEAyNRMK6Lj78GOqUBPeNv2KJ%2BtaPOnymhB4htkeyF6Ywioix2UiTZ51NVUvU2vLbPvpUC%2BcZR0t1lgqTynrH2tOz7GeKlbcX1GLpUIst95Sc2nEf%2BGEYplG2X%2B940VCDL7DVCIMsH4HW300eZjUPIZRNuwACRAkTetGuqPyCNrJfA5OBFzEupLbpNHWYshE8O%2BPwet2JK7vRS86BSsLkyaGU0rxRH5W43uhscfPf6XUAB&X-Amz-Signature=161a2d9f14e8990581a099608c12da98c1e34cf8a6fba4a96277e4b544cf4c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
