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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIDAW2V%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDubvUe%2Bur%2BQIP%2FIZHw%2FRKkRfkseIzB4Oyo2btFX6UugAIhALA004uPJ6wc8cKfknNfKHwvn1Pdi%2BimNjbPtFiY9VbUKv8DCCgQABoMNjM3NDIzMTgzODA1Igyx%2FUaGM5xbUYg1ngsq3AOPAIiOAg0BJFW2oj1ygg9GDLiWGRfY5mMARs8cVW9hll0TBpdgkL8eeG2PoF%2Fuclw0%2Fj6K%2F48CS6znWIFs99LgkMrOgEgkqP%2BioRm2qSHAqYge31DNTXBiEvV7EZhYYUm8QOq84mr%2FNJAJ0yECRVVJkpU6%2FKP16q9fvnxhKwoQOxQZgAippbElxdWi4uwv1Taaw15dcYxOxzT2%2BLa7rJbI9a5NGUIip8exxV90pZKF%2BRhAKdFNw3bbBl89evfbdMJwHcXEL7njm1ZFucqHxhUiek5a9aKrL59iesO2nwkVHh%2F6qbqAr%2BTqjZlNj6LTznN3GxgZ3y5O%2BWQsShhqjdwJQHHQ4S8ju0co%2BtNIbazCxwPuwkro87bb4FuH9EHIyzWzGAhGvuq6Dcy1aSjUiL37TglgkTDEDsXxJnI9EHQ5k6Q%2BcKoC69OdfWLuQPu82ZhmHRlSlB3Gatmv6M2lHbrCbvJANHcIEE6PNIVgXhMGjheEfcnvuVv7%2BIlznNTC7PAdmBe82aIepBnBCOKZpUViRHu1kK%2FZ0VGSsem5XICxPpyqSrXiklTc0M8kJGgaKmbFLGnBbiMtYLGaIZEx2BJOtq9FZ7CLgCsYqk8ET%2BEY4DeLlEQsHsANRJ3e4DDT5f%2FBBjqkAcR1aItqPLBBi3YFtTq3ALh4t3JJfIAjSd69GAwWlU98fFxONEbHwFx6970PQv%2Fd6O9CU%2B7qx4fYSkBJ7OY3AF20Mj7W7y4XBlDZhQNQ1MoSp%2FLlVh0TI%2Bxy5vDlSePyWwpXtAf%2Fj3wq%2BpXtzHbJT21N6Tn8X7O1M3bMd%2Fh%2FHP3GnLM1Piv%2BcJRDJV379%2BaDiV0TrkuFQRbxzbZ%2BSihiiZymYXlP&X-Amz-Signature=238ed3987b373cf9999567bb7e3451df924c604dcc3600111a01c0bc0f55d751&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIDAW2V%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDubvUe%2Bur%2BQIP%2FIZHw%2FRKkRfkseIzB4Oyo2btFX6UugAIhALA004uPJ6wc8cKfknNfKHwvn1Pdi%2BimNjbPtFiY9VbUKv8DCCgQABoMNjM3NDIzMTgzODA1Igyx%2FUaGM5xbUYg1ngsq3AOPAIiOAg0BJFW2oj1ygg9GDLiWGRfY5mMARs8cVW9hll0TBpdgkL8eeG2PoF%2Fuclw0%2Fj6K%2F48CS6znWIFs99LgkMrOgEgkqP%2BioRm2qSHAqYge31DNTXBiEvV7EZhYYUm8QOq84mr%2FNJAJ0yECRVVJkpU6%2FKP16q9fvnxhKwoQOxQZgAippbElxdWi4uwv1Taaw15dcYxOxzT2%2BLa7rJbI9a5NGUIip8exxV90pZKF%2BRhAKdFNw3bbBl89evfbdMJwHcXEL7njm1ZFucqHxhUiek5a9aKrL59iesO2nwkVHh%2F6qbqAr%2BTqjZlNj6LTznN3GxgZ3y5O%2BWQsShhqjdwJQHHQ4S8ju0co%2BtNIbazCxwPuwkro87bb4FuH9EHIyzWzGAhGvuq6Dcy1aSjUiL37TglgkTDEDsXxJnI9EHQ5k6Q%2BcKoC69OdfWLuQPu82ZhmHRlSlB3Gatmv6M2lHbrCbvJANHcIEE6PNIVgXhMGjheEfcnvuVv7%2BIlznNTC7PAdmBe82aIepBnBCOKZpUViRHu1kK%2FZ0VGSsem5XICxPpyqSrXiklTc0M8kJGgaKmbFLGnBbiMtYLGaIZEx2BJOtq9FZ7CLgCsYqk8ET%2BEY4DeLlEQsHsANRJ3e4DDT5f%2FBBjqkAcR1aItqPLBBi3YFtTq3ALh4t3JJfIAjSd69GAwWlU98fFxONEbHwFx6970PQv%2Fd6O9CU%2B7qx4fYSkBJ7OY3AF20Mj7W7y4XBlDZhQNQ1MoSp%2FLlVh0TI%2Bxy5vDlSePyWwpXtAf%2Fj3wq%2BpXtzHbJT21N6Tn8X7O1M3bMd%2Fh%2FHP3GnLM1Piv%2BcJRDJV379%2BaDiV0TrkuFQRbxzbZ%2BSihiiZymYXlP&X-Amz-Signature=1b2a1986101ddd65ec55cecd53516547a9e3d13ea3e79e88872e28e1cc5879b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
