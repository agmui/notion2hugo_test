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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWRN7YU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5kawtT5s435QyJHz47Sh6kPteoyS0KKwG1qqU7qUdJQIhAP1mwJwOJqzzeAi6vU%2Fb4ia2np4txGNByiciGil3xusOKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmWnIMBoOJjCIK7Acq3AMbBNwzwPv03t2DDn9J%2F56gMq%2Fe6BT%2B0Fkqoru%2FWfjzt8ltFFYwr4gFKtNPoCQlIB6IytLKA5ig4cXOfqa29U7edFYBYB%2FCDOMXCIEUT3bGlYBFcpKEWLk%2BoBTzeU7Cs8%2F5l%2BbbXDaNPBWG6eNkIHiGz6U2ntYgFhsT6vLmBmY83Ihza5KG8gdwojROIWBzwuDi2PagoV1zOnRRLzJjpRAitVkTi9pM7ActQ7Qp84zXlBfS29MaZSF1xuPIbV8YsrI2Y16naIMXxU2YLUOc1rwtoysKCGC9Vi%2ByAia85kFE4yJ0if5DzIOeAngbAL9PIEYV5GwkAANAWaZUgUnuPbyndb3uMXLV6FGUgqXWSpt46l25FeFzFiptk1FdKeaga6K%2FMtu8Awk6dRX7D6GAw3LE26Wo9z5oVtMoSeQ%2FI1nGWbU9W9N9SlFYbGmnuQHms8CvmpoF%2Fv8HK0XcqA0U5IogO%2F0E91ZPExd18DBm0iPH3iaJct6O1HLvV2C7U1lW2lwmQmN8GooUf9%2BmOebOLcVb0mR%2FsMzEfPG4yyBAMFlGHjZpU1mTFCZTLIdQvwcbmFvpYRKNZGuKe7Sgb2EwUCF9MpZ7cZCalXKBlkn%2FprxxAah7P2jkyS3qSQk1MjD4uojDBjqkAfkc0aMGFCXD26%2B%2BNwnYUp6tBFh3GsBQXoeV6XJcgyxoyAum8MMsT5TcNm38jmW8kd6bTw0%2FjCNfLjpRVldLNa1ExWeuuxpshlfZ3bKo1B3dXIJiOuKlDVKNVNQT9wv58jndAbkQdwugu5lB0XPOeLAy5ON3eRL2ggtUzNnivfeX3osJyUauxw%2F0vVqfJZI6tE2BH8ngpN6FkfBEOg4h15AlQrRa&X-Amz-Signature=5891cb94bca34e59eec2968751a48117fc973f1ae9b2ee6b1e4d25d8e5ce8e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWRN7YU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5kawtT5s435QyJHz47Sh6kPteoyS0KKwG1qqU7qUdJQIhAP1mwJwOJqzzeAi6vU%2Fb4ia2np4txGNByiciGil3xusOKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmWnIMBoOJjCIK7Acq3AMbBNwzwPv03t2DDn9J%2F56gMq%2Fe6BT%2B0Fkqoru%2FWfjzt8ltFFYwr4gFKtNPoCQlIB6IytLKA5ig4cXOfqa29U7edFYBYB%2FCDOMXCIEUT3bGlYBFcpKEWLk%2BoBTzeU7Cs8%2F5l%2BbbXDaNPBWG6eNkIHiGz6U2ntYgFhsT6vLmBmY83Ihza5KG8gdwojROIWBzwuDi2PagoV1zOnRRLzJjpRAitVkTi9pM7ActQ7Qp84zXlBfS29MaZSF1xuPIbV8YsrI2Y16naIMXxU2YLUOc1rwtoysKCGC9Vi%2ByAia85kFE4yJ0if5DzIOeAngbAL9PIEYV5GwkAANAWaZUgUnuPbyndb3uMXLV6FGUgqXWSpt46l25FeFzFiptk1FdKeaga6K%2FMtu8Awk6dRX7D6GAw3LE26Wo9z5oVtMoSeQ%2FI1nGWbU9W9N9SlFYbGmnuQHms8CvmpoF%2Fv8HK0XcqA0U5IogO%2F0E91ZPExd18DBm0iPH3iaJct6O1HLvV2C7U1lW2lwmQmN8GooUf9%2BmOebOLcVb0mR%2FsMzEfPG4yyBAMFlGHjZpU1mTFCZTLIdQvwcbmFvpYRKNZGuKe7Sgb2EwUCF9MpZ7cZCalXKBlkn%2FprxxAah7P2jkyS3qSQk1MjD4uojDBjqkAfkc0aMGFCXD26%2B%2BNwnYUp6tBFh3GsBQXoeV6XJcgyxoyAum8MMsT5TcNm38jmW8kd6bTw0%2FjCNfLjpRVldLNa1ExWeuuxpshlfZ3bKo1B3dXIJiOuKlDVKNVNQT9wv58jndAbkQdwugu5lB0XPOeLAy5ON3eRL2ggtUzNnivfeX3osJyUauxw%2F0vVqfJZI6tE2BH8ngpN6FkfBEOg4h15AlQrRa&X-Amz-Signature=899be466275f54bb6a7546f5bbd04950ed89e98b610ae1a8976ab335acc0a806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
