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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TMMOCQ3%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2ZACZRMnp097LH%2BTpFJR5IxjIN0aEcFZbjJWeZlU4zAiB3zv%2BvNb59sI1QpTeCvFo4Uz8xlZGO4k8z22XV1YnNUCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdW%2F0yPTQ13PBd3N8KtwD%2Fu%2FM1CLagccozAtQVDOd7y4aBJyPc%2FHNcS%2BOuy7MG8C3L9RYe3GpUHA3Tedts0s79AlaOz4bnzYDHMwMsx0gHR6nahRAL9%2Bwq%2BVx56qui0ZtFibca2w9MDU3po9pe4ekfjcBdUOt5fSg2eVvy%2F53MZ%2FZIrFroerLCoXFwQ%2FN0Inbkalpv9eorR0FcxTEP7EhZhCPwPDzhDG3yZdonEyZ3kb7G5mNshdfolVJFXoyNkVKlMxn1an0OMDACvcWIDTyBzPByn4DWn9v7PwzmX2tvUYhZox9EUw8NB9ThFTK4w8E3gfk29i6CBW4MIKF1Dw%2Fx5ZGJN7ytkSvNIEWTyYAmkfkdcCPBOFE89ERd5hEoTFrXhBOMEr68KVgArEjV0eyP7ZaIg7rxSMpiPUKorUHwWgdYo%2BL6f%2Bl4DZWV%2BAdzTjmwzcc1xsXBw7UH1EAHJL04F%2Fm1NeZIqvwsjyvFjWbW8r2Qovyz2dTNzFPCpepmfGngFxBPgks1EfClaIbHq51I6PoC5QT5V95pPKm0dfxpCHnK05KenkPRQhdeHFw%2BuVeI0MUdWREY%2F%2FQPauC9JoZC4aDV6d6Jjgb6drdWnFwh3O1H17UJgfJ%2B7b77wol5XNYFV7n3VJXZjA5boYw4O66wwY6pgEsZRgnmzAA%2BhhRIG860QoO4dCyR8oZ4Z%2FecT%2B%2Bl0ZYGXGnluLW1%2Fre5XBtvvA5Yns%2BwomjFkHMlLh3cDKqN5EMgZv2D8b1DXFK%2BFZn3gAT5G2uMLo0yyVExKcdYSDvLyj28CwGy5fLEItln%2BBl71QyK6QfGmkuZd3Kn%2FVsTIHZeJ%2FG2KBaHOmHtNXh2rMTb5f0RKuKlHFupX0MIiDPwifv%2FCv18CVO&X-Amz-Signature=f1539bc9599642044e76420bbe0e3380cf41a572ec29299bd23e14f37d8718df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TMMOCQ3%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2ZACZRMnp097LH%2BTpFJR5IxjIN0aEcFZbjJWeZlU4zAiB3zv%2BvNb59sI1QpTeCvFo4Uz8xlZGO4k8z22XV1YnNUCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdW%2F0yPTQ13PBd3N8KtwD%2Fu%2FM1CLagccozAtQVDOd7y4aBJyPc%2FHNcS%2BOuy7MG8C3L9RYe3GpUHA3Tedts0s79AlaOz4bnzYDHMwMsx0gHR6nahRAL9%2Bwq%2BVx56qui0ZtFibca2w9MDU3po9pe4ekfjcBdUOt5fSg2eVvy%2F53MZ%2FZIrFroerLCoXFwQ%2FN0Inbkalpv9eorR0FcxTEP7EhZhCPwPDzhDG3yZdonEyZ3kb7G5mNshdfolVJFXoyNkVKlMxn1an0OMDACvcWIDTyBzPByn4DWn9v7PwzmX2tvUYhZox9EUw8NB9ThFTK4w8E3gfk29i6CBW4MIKF1Dw%2Fx5ZGJN7ytkSvNIEWTyYAmkfkdcCPBOFE89ERd5hEoTFrXhBOMEr68KVgArEjV0eyP7ZaIg7rxSMpiPUKorUHwWgdYo%2BL6f%2Bl4DZWV%2BAdzTjmwzcc1xsXBw7UH1EAHJL04F%2Fm1NeZIqvwsjyvFjWbW8r2Qovyz2dTNzFPCpepmfGngFxBPgks1EfClaIbHq51I6PoC5QT5V95pPKm0dfxpCHnK05KenkPRQhdeHFw%2BuVeI0MUdWREY%2F%2FQPauC9JoZC4aDV6d6Jjgb6drdWnFwh3O1H17UJgfJ%2B7b77wol5XNYFV7n3VJXZjA5boYw4O66wwY6pgEsZRgnmzAA%2BhhRIG860QoO4dCyR8oZ4Z%2FecT%2B%2Bl0ZYGXGnluLW1%2Fre5XBtvvA5Yns%2BwomjFkHMlLh3cDKqN5EMgZv2D8b1DXFK%2BFZn3gAT5G2uMLo0yyVExKcdYSDvLyj28CwGy5fLEItln%2BBl71QyK6QfGmkuZd3Kn%2FVsTIHZeJ%2FG2KBaHOmHtNXh2rMTb5f0RKuKlHFupX0MIiDPwifv%2FCv18CVO&X-Amz-Signature=e2824891fc3ded58245e5acf2fc79830ab7a818f0268abfe0e96b094b225361f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
