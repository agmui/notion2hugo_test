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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVTUYGG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIH49BBDeqYMDsoYxdlRwaSbcFvZX97Fwr7%2F%2By9K2b7lsAiBpI0c1ibGcVdk4pF%2FeAyFFCVUoyAm6F8ChYkmzi%2F8VtCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDJuHU8KTQRNYQi4rKtwDl85VPmGBFuFaPuyEcfRwQAHfYsOcL1Wmrva6QqS9yQhQO9LEyrDj4QgHoZ%2Fbze%2F3aQPBpxAPlOYggj6REy%2B8CDueg%2FlsM1i6zjrpe2ETi4JYWnTFIL0KKWMM4mqIEAyzPalTXbLfh6O5T5c%2B4idq7W9slhxUi%2Bl7zakpXPKXBvSBo%2Bk3yuvd2zIK0fNfty4Z0Kg00jCw5dlbyHh8E7RGdTIoKqFuAeapbGCK2%2Fk4EyQWliiT5IkhuFVO%2BUN%2FocyAZNqDjGGM0aoMr846wTbLAwf8pMMO80ZiEhxIxF%2B%2BNAbbdhneePzRKCpQrO0KyXpJTHus%2BiDx1EqN8Nlu0KKW8jp%2B61W1UXjDt0rS6k5wc6cEqHjqsnk18S2GZnJCAltpH0s3Upm0b5Nh9jPZAPKUwVa%2FbdK00gUPPPV9Z18Yclz3IZiKldmQ0jr0eICk5s96qH1%2BiXj0sptXqQiNS4MCEp7lnSBaOP%2F45hp%2BvM%2FBvRHOBt4x9TnEisdG4aVqo05XwrQlKSDMVqqPqdSNWh%2FIZVaaUQb3roNRYdPKv%2Fa5oaa1NuoBkVTJeQUv76mCUauYCPjVOxOuj2hc7cpKqSG7U6TFBDwTfySBQtdpWj5QFQse9aj8pCqzSBIVGFMwyraZvQY6pgE18ilGJDJ8r0C%2Bij9gsopkB2I3RlJIBQjv%2BuXO6b4ab36YL%2B5eDXrfBOyLBEIds3HKUbmAf1i3fbUeUOzbKmzkIBZ2HtP30EulXdgWXO0IxThmye8vAR%2BThsSMw%2BuxxODJriypu8DQfBBfEJvn2SdWFK7GCzFF39ZpcrxLyXNlcuVWP4vue83MI5JCueK2yBcc8LIjc8R53Q%2BkUuxdSIVYPVZGC5kl&X-Amz-Signature=5cff63b1938715830d175df3b6b773de4c27d795b5bbaf99fc008b861311464a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVTUYGG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIH49BBDeqYMDsoYxdlRwaSbcFvZX97Fwr7%2F%2By9K2b7lsAiBpI0c1ibGcVdk4pF%2FeAyFFCVUoyAm6F8ChYkmzi%2F8VtCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDJuHU8KTQRNYQi4rKtwDl85VPmGBFuFaPuyEcfRwQAHfYsOcL1Wmrva6QqS9yQhQO9LEyrDj4QgHoZ%2Fbze%2F3aQPBpxAPlOYggj6REy%2B8CDueg%2FlsM1i6zjrpe2ETi4JYWnTFIL0KKWMM4mqIEAyzPalTXbLfh6O5T5c%2B4idq7W9slhxUi%2Bl7zakpXPKXBvSBo%2Bk3yuvd2zIK0fNfty4Z0Kg00jCw5dlbyHh8E7RGdTIoKqFuAeapbGCK2%2Fk4EyQWliiT5IkhuFVO%2BUN%2FocyAZNqDjGGM0aoMr846wTbLAwf8pMMO80ZiEhxIxF%2B%2BNAbbdhneePzRKCpQrO0KyXpJTHus%2BiDx1EqN8Nlu0KKW8jp%2B61W1UXjDt0rS6k5wc6cEqHjqsnk18S2GZnJCAltpH0s3Upm0b5Nh9jPZAPKUwVa%2FbdK00gUPPPV9Z18Yclz3IZiKldmQ0jr0eICk5s96qH1%2BiXj0sptXqQiNS4MCEp7lnSBaOP%2F45hp%2BvM%2FBvRHOBt4x9TnEisdG4aVqo05XwrQlKSDMVqqPqdSNWh%2FIZVaaUQb3roNRYdPKv%2Fa5oaa1NuoBkVTJeQUv76mCUauYCPjVOxOuj2hc7cpKqSG7U6TFBDwTfySBQtdpWj5QFQse9aj8pCqzSBIVGFMwyraZvQY6pgE18ilGJDJ8r0C%2Bij9gsopkB2I3RlJIBQjv%2BuXO6b4ab36YL%2B5eDXrfBOyLBEIds3HKUbmAf1i3fbUeUOzbKmzkIBZ2HtP30EulXdgWXO0IxThmye8vAR%2BThsSMw%2BuxxODJriypu8DQfBBfEJvn2SdWFK7GCzFF39ZpcrxLyXNlcuVWP4vue83MI5JCueK2yBcc8LIjc8R53Q%2BkUuxdSIVYPVZGC5kl&X-Amz-Signature=8d104effa80676ce651877b741472ac03d2cbd96f1d25cb8cb26f505fe2019db&X-Amz-SignedHeaders=host&x-id=GetObject)

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
