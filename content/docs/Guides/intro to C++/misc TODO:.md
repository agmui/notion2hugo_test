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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEIS3JJT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHs3FqcmL6NPNgwMf70uggMmBl2ffay74JH%2BUKMvZWKPAiEAqKMJoJsQRc0qVYb%2BbKLnC1FgG3Xl%2BqCIdWf0fMjU5QgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZbP5nLryqRnupzByrcA1XMre68O73nDxlqigur33Fd3WTGevokxG5A4Qm3fWZCxYLiZhEP11WQwFV%2FzdsqMnkqn8G9aMI2wIewEsAw69Dayu0AMOLeRVPVV9tBKRivoqyHCWN%2FXuGIcY0uQCDyeGe54mTXfnwTmsx0VfjJIcB2qOQguDZgBFddyCE5O11oU0yUGVZYtp0adU8lJHMP0%2BkoAJroqMhkVlrXBe6ukB1j0vkcMs9I02OS2buCBwdAPZcFv6ZBPdu3R1XiImrYUBd4UeyYIMCxytl%2Ft%2BUuX%2FLinMEckwr22Q%2BO2mcAj2Kwjy%2BVIZtfV6yDRd1FJ5beh9qDukDOzS%2Baown0GHonmApePqdCBm0f6Xr9oA1p%2F2Uoa0XhCugy6V03odfCFQ7n2GKGDAUx%2B%2BcoyjbzTvPucFAeiWpa0MIXm5vgrT0RLSb5WJ9I2uj6dLkN%2FEzZ14bTps%2FZsimMteDmfCyqNUAt98N%2BD%2B7hJPMOdSGq8KUhqkl7wYw7SAzGnLG8yULMRwwQzWGtwRYp87%2FJZmRN%2BEpK0%2FJGUYAck09197cfSdPnBVTLJEakUIK3DfcON0v3n4IqEdeDOf6efvUZpAFZkiFQR98wQCOVuOQUbuDRK7KFNtLvIf%2FgwXDnNzKC8N8WMIrEkMMGOqUBkY20HDIg2m5R81FG8Xo5IaaUO6hYHG4C85NZ7yJzGvqk5IcNkadsoI5vXh%2BC6SY8BF7Fpc5YoRxzVN5fdI%2FK5DfnbajbYJHsgfVyXzTof80r2xfAbNnD3nRj7SqrIa0ae5OQWCBuDGKLON6xgTv64VlhMoPz1baSis9qQQhpmpryemGmo0xZ6wAwJfkv3SmfaSAlISZqtp7P8NN1xz4Hq0lVA28e&X-Amz-Signature=3a6989b9b14b08a558b1cd1ffb7569ffbd9a7ffb222eb7653bdc08f342675d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEIS3JJT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHs3FqcmL6NPNgwMf70uggMmBl2ffay74JH%2BUKMvZWKPAiEAqKMJoJsQRc0qVYb%2BbKLnC1FgG3Xl%2BqCIdWf0fMjU5QgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZbP5nLryqRnupzByrcA1XMre68O73nDxlqigur33Fd3WTGevokxG5A4Qm3fWZCxYLiZhEP11WQwFV%2FzdsqMnkqn8G9aMI2wIewEsAw69Dayu0AMOLeRVPVV9tBKRivoqyHCWN%2FXuGIcY0uQCDyeGe54mTXfnwTmsx0VfjJIcB2qOQguDZgBFddyCE5O11oU0yUGVZYtp0adU8lJHMP0%2BkoAJroqMhkVlrXBe6ukB1j0vkcMs9I02OS2buCBwdAPZcFv6ZBPdu3R1XiImrYUBd4UeyYIMCxytl%2Ft%2BUuX%2FLinMEckwr22Q%2BO2mcAj2Kwjy%2BVIZtfV6yDRd1FJ5beh9qDukDOzS%2Baown0GHonmApePqdCBm0f6Xr9oA1p%2F2Uoa0XhCugy6V03odfCFQ7n2GKGDAUx%2B%2BcoyjbzTvPucFAeiWpa0MIXm5vgrT0RLSb5WJ9I2uj6dLkN%2FEzZ14bTps%2FZsimMteDmfCyqNUAt98N%2BD%2B7hJPMOdSGq8KUhqkl7wYw7SAzGnLG8yULMRwwQzWGtwRYp87%2FJZmRN%2BEpK0%2FJGUYAck09197cfSdPnBVTLJEakUIK3DfcON0v3n4IqEdeDOf6efvUZpAFZkiFQR98wQCOVuOQUbuDRK7KFNtLvIf%2FgwXDnNzKC8N8WMIrEkMMGOqUBkY20HDIg2m5R81FG8Xo5IaaUO6hYHG4C85NZ7yJzGvqk5IcNkadsoI5vXh%2BC6SY8BF7Fpc5YoRxzVN5fdI%2FK5DfnbajbYJHsgfVyXzTof80r2xfAbNnD3nRj7SqrIa0ae5OQWCBuDGKLON6xgTv64VlhMoPz1baSis9qQQhpmpryemGmo0xZ6wAwJfkv3SmfaSAlISZqtp7P8NN1xz4Hq0lVA28e&X-Amz-Signature=13cf999222e85dd165da5c4ccc7cb755ff2bfa1ca133d327e65c9cab2e86c481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
