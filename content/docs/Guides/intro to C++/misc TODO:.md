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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYWSRYBV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDTHH%2FK5O81l0DxFf7VSo7VFQHU2Q2AsUWy6EBCs1umlgIgMeL5i7C3Ws2paE%2B2Dq8BY5phJ2YFv2%2Bpw4kh00uJfB0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMbIgf5UpbqSTMUfircA8HDCgZaUGx1TifOGhMKs6zl5ZUVyQjIQ5p3dqzE0XCHxPzn8useZFdnqj5IqU5QU2%2FVASqMJp%2FeAkJ7fJYwlc9dksr1g%2BfjlPR02p440FGs65AdanduEILmRIzZcC4cO%2BfFBtrqZgQMe7pKhT8qd4jVM20M9Nsi9s%2FycT2z5qzS8FpFjk4EVf2ewqgF%2F8q1MrTbkcYHY2k0TxRZ94rl8c%2BRFG7tzqCWTfci6fpP%2BTbI0ZPDsvOOVw%2FWAd1K%2F2i4YMcbL7zhs9QniXMxLzCpPBGaNMYI69dDsVtTVF3T6OkyIds06QErMJNQQK5pbiFamQpCrvzMM1J2cy2VP3d9BopPRkK9tWKKJgcyywLKMXZBj3Qc9Imq%2BB23VofItk2VYZtE2pl1UL5XtK5CdHBvFa5BiEdc%2BHHw17YdBNMIwu1k%2Fa%2BHzAjZogjafL36eayucpASHlr%2FooH8oGf0vc67kprKVaXJIPfq%2Bzc6nblhDcXKTx5gEHwDCeBuizhu3p1%2Bq2gNSyZGnt07kxPToJCs0TgKksoQrq2gUIOMpMO9puSedFoZmTJgPVZ4AATHjC6eQ7gcMmnb7Dl5WUPMLJu4wt6FQs8iLLig5Onqpkz0fwyMzkS1AJP64Z6HwSfoMMrnpsIGOqUBHCMaD3SKMZvpAEZvUAVEpKfKjETwQeAAQO2ooR5zQptCupCzNfQIbeRva3nzSY29S0%2FOgcbQ4mdg0lIg6scCmMbAGhQTc1hxtjsXtlHKWVjbk8nrja17dF3AAyuQf%2BYfqQ7aZo%2BLAXmN8jkRcWl04JHp9C0ubCB9Cj8SHITSS7iOxViLYeVTNk87kyJ2%2Bn1%2ByxLvTf3kwT9jnZ%2BQlSoXu1QIfexO&X-Amz-Signature=2f7c24457f6f34d0486a6bfd8c0fa1fef1eb1f75890d1e9d059858ed84e17f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYWSRYBV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDTHH%2FK5O81l0DxFf7VSo7VFQHU2Q2AsUWy6EBCs1umlgIgMeL5i7C3Ws2paE%2B2Dq8BY5phJ2YFv2%2Bpw4kh00uJfB0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMbIgf5UpbqSTMUfircA8HDCgZaUGx1TifOGhMKs6zl5ZUVyQjIQ5p3dqzE0XCHxPzn8useZFdnqj5IqU5QU2%2FVASqMJp%2FeAkJ7fJYwlc9dksr1g%2BfjlPR02p440FGs65AdanduEILmRIzZcC4cO%2BfFBtrqZgQMe7pKhT8qd4jVM20M9Nsi9s%2FycT2z5qzS8FpFjk4EVf2ewqgF%2F8q1MrTbkcYHY2k0TxRZ94rl8c%2BRFG7tzqCWTfci6fpP%2BTbI0ZPDsvOOVw%2FWAd1K%2F2i4YMcbL7zhs9QniXMxLzCpPBGaNMYI69dDsVtTVF3T6OkyIds06QErMJNQQK5pbiFamQpCrvzMM1J2cy2VP3d9BopPRkK9tWKKJgcyywLKMXZBj3Qc9Imq%2BB23VofItk2VYZtE2pl1UL5XtK5CdHBvFa5BiEdc%2BHHw17YdBNMIwu1k%2Fa%2BHzAjZogjafL36eayucpASHlr%2FooH8oGf0vc67kprKVaXJIPfq%2Bzc6nblhDcXKTx5gEHwDCeBuizhu3p1%2Bq2gNSyZGnt07kxPToJCs0TgKksoQrq2gUIOMpMO9puSedFoZmTJgPVZ4AATHjC6eQ7gcMmnb7Dl5WUPMLJu4wt6FQs8iLLig5Onqpkz0fwyMzkS1AJP64Z6HwSfoMMrnpsIGOqUBHCMaD3SKMZvpAEZvUAVEpKfKjETwQeAAQO2ooR5zQptCupCzNfQIbeRva3nzSY29S0%2FOgcbQ4mdg0lIg6scCmMbAGhQTc1hxtjsXtlHKWVjbk8nrja17dF3AAyuQf%2BYfqQ7aZo%2BLAXmN8jkRcWl04JHp9C0ubCB9Cj8SHITSS7iOxViLYeVTNk87kyJ2%2Bn1%2ByxLvTf3kwT9jnZ%2BQlSoXu1QIfexO&X-Amz-Signature=5fbd516a9c9064334087bcddbc68763d8438ae1d6751e42f41e9a46b961c61f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
