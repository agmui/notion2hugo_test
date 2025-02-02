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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYIHQGL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnbXQpUYft7v0RAnTBnr9ZoSGIQaoFC3RjQETC0MkIbQIgOnfW0dcefJhcb6A83pWCH6Vgi%2FW4FB2qlHH9OJ4HfCsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC10lmvTBmQbwTVW%2BCrcA0e0kf%2BX0Dm23mXQ2e%2BaMAtTcKwbO2M8zRev7p3sUE5zRiyGvj3y%2FQxoPS38%2FA%2F1TfobDmLM%2F14yK1dHajQxESM1X0ypWtCpooTd4k0Bp0juBOMuVDYQrm0xstCWGJHmCA0ERRvROcuHMFgqbQV1rincJVYWo2pOzPj5asXPJM81T3dvcstenwyZ96jS87f5sr3KtowvNrweumB0ZRvXhvsE2AVSS2Zcibxp%2FAKzFYS6uE2PxLCD%2BGaLXjg3y1ewg4oqt%2BRP8iNx%2BrYk7XlC1Us59WoqsGerPAcGGVVeVMOHwUjWSRFV0xn1VL7cT2lV5Y4t5FdFxANBNo39aas%2F0LvJBj6kSi%2BRSwmQunLjL78H%2BcJZO9fgpfyf42uwZstruZc5yL1hqbqk57pGm5yeqk%2FSL6WGTIOueePgHVlaf%2BEh78ugwWUNPGSDI1e6FcnZxN1mwnbpHo19fUWJYBlQgOje9s3RyBB7TyDIZ9e9F%2FwkZPuYOXmI82uh6F8KB3dorUB2J1AEP5eaHromtuw0aR1KfIio7LpdYnrPVdJig0UpKGDkyP0wg0RPEOzKHX9%2F2MkFyMUYx4eNChPRFSfDRoA6SL3Qc60Oe0yF2dA2VndDmbSJ%2BliVaHrHmH7TMJve%2FrwGOqUBHtEyGT9Nr8o5L5VvOwd1ePG2ltJhwRL9VYhrQk%2Bnk8n%2Bn54ZvMgIPMOFPaT0Ydy2Su%2Bv%2FHYcWvK5IngDfCuGQdYdRz6D%2Ba69ytZFBRKSsmrlYWN271uU5EwF0RhzJgLGC0krlKlIFP4ssV2FbptF8n73hYxmlPZeBgTcZInISK9%2FftNLuJKWI9DsO1uRPT8JEkmt9dP3uQ1o13jJZqJW4jAlHTu7&X-Amz-Signature=4f88bc1dacfa8e66d3d6b3599b208f5a0cf98afdc1ec194eead4d436e38cd735&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYIHQGL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnbXQpUYft7v0RAnTBnr9ZoSGIQaoFC3RjQETC0MkIbQIgOnfW0dcefJhcb6A83pWCH6Vgi%2FW4FB2qlHH9OJ4HfCsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC10lmvTBmQbwTVW%2BCrcA0e0kf%2BX0Dm23mXQ2e%2BaMAtTcKwbO2M8zRev7p3sUE5zRiyGvj3y%2FQxoPS38%2FA%2F1TfobDmLM%2F14yK1dHajQxESM1X0ypWtCpooTd4k0Bp0juBOMuVDYQrm0xstCWGJHmCA0ERRvROcuHMFgqbQV1rincJVYWo2pOzPj5asXPJM81T3dvcstenwyZ96jS87f5sr3KtowvNrweumB0ZRvXhvsE2AVSS2Zcibxp%2FAKzFYS6uE2PxLCD%2BGaLXjg3y1ewg4oqt%2BRP8iNx%2BrYk7XlC1Us59WoqsGerPAcGGVVeVMOHwUjWSRFV0xn1VL7cT2lV5Y4t5FdFxANBNo39aas%2F0LvJBj6kSi%2BRSwmQunLjL78H%2BcJZO9fgpfyf42uwZstruZc5yL1hqbqk57pGm5yeqk%2FSL6WGTIOueePgHVlaf%2BEh78ugwWUNPGSDI1e6FcnZxN1mwnbpHo19fUWJYBlQgOje9s3RyBB7TyDIZ9e9F%2FwkZPuYOXmI82uh6F8KB3dorUB2J1AEP5eaHromtuw0aR1KfIio7LpdYnrPVdJig0UpKGDkyP0wg0RPEOzKHX9%2F2MkFyMUYx4eNChPRFSfDRoA6SL3Qc60Oe0yF2dA2VndDmbSJ%2BliVaHrHmH7TMJve%2FrwGOqUBHtEyGT9Nr8o5L5VvOwd1ePG2ltJhwRL9VYhrQk%2Bnk8n%2Bn54ZvMgIPMOFPaT0Ydy2Su%2Bv%2FHYcWvK5IngDfCuGQdYdRz6D%2Ba69ytZFBRKSsmrlYWN271uU5EwF0RhzJgLGC0krlKlIFP4ssV2FbptF8n73hYxmlPZeBgTcZInISK9%2FftNLuJKWI9DsO1uRPT8JEkmt9dP3uQ1o13jJZqJW4jAlHTu7&X-Amz-Signature=cba66d329023ca60d6e58c4e62b9614b8e9ab882100f699bbc5186cfa4f9e005&X-Amz-SignedHeaders=host&x-id=GetObject)

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
