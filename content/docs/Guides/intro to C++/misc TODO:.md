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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZV2AYNP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIWn4yKD8nqP6rYPgAxBApRTrUuVtPBxnwpvlPplK2WAIhAKg%2B4uJ9acNFzNGFVJ4TXLkTte161lGDyad79hSA3DGPKv8DCFQQABoMNjM3NDIzMTgzODA1Igx8%2BPXzo2ofiEWZhNIq3AO8eojy9hyOs69t23%2B5pWrOKE1d48SPcKcqhu6Lv4tppt1piFEwzNDv7FHIdvE6%2Bi9iD6mFaDpwAxRipf%2BPmaHMZY4lVAWT73Vyq6xQTdkXCtSqZYZPd%2BWIn0j07AK1LNnWSMoKf057OXkWtjuNgMwFWs7xVzY4Nhm8BaCo2WEgh2Ao5V8S01M2St6E2bYaTLRX69A2wPpZbHhCbIWDKPSsrJnC3hNPrLAPNKvuqt%2FVV180Kan6lDc%2BwFIQp9fBn89acMbi%2Bsa0TrE7NbSSMtGfdO9p%2BGsCVDjDhRaOYdQMhmdY6D8tgI9noAi51JbZXAaWamMp5o3s7nfv3IuaqUA9cB35%2FLHu8zgiH4Jpv8xZ3aaaro99r5mUvRpAhYGIxQtlnjzcptFex4%2F5knJAwxJEXAk66M1SenD3IlZrGqaWLbm2BsgCFZquYF%2FQFBCD%2FYFlMrbZcCwgqPgCZ09fum6kQkyFI%2FRv4J9lTtB9JeDWmcBcldSSh5rXh2cNVaLK1Ma%2FO8mpptxSbJjCW0Qde7AwhErnLoHf3tECqdgS8mbme0duveQojSBkNRKzp6RLcy%2FHXetjb5mUlabHr%2Bf7lT7B7Qryqu5jJdYiHjf0GQrB1W%2FbUuNCmqAnTwjYaDCoyeO%2BBjqkAc5rMu4y6BD0m8ftCfn6dxDo3bQfqEo7aq4TU4HYZ%2FWbXOF7g4%2FWipYMQZvv81e6h1bUETuy15bXiAOfNk3hBUTCsFmId%2FOAYhLgC5hQASftLlvwPKkEuQM1ZiDTx3weoteej3mB7%2FoMzoBSHZvED4W5WbE7yjwMKpAGIvYI%2Fj4%2FLQ0DNlXP483u%2FcakIWgVYZsgWGBc2yKd8kMpg2fPPnnHXBK%2F&X-Amz-Signature=cf4b7ad3aad54e63276b89b90d6bef8d7adde43814669248d6b6754a529070da&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZV2AYNP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIWn4yKD8nqP6rYPgAxBApRTrUuVtPBxnwpvlPplK2WAIhAKg%2B4uJ9acNFzNGFVJ4TXLkTte161lGDyad79hSA3DGPKv8DCFQQABoMNjM3NDIzMTgzODA1Igx8%2BPXzo2ofiEWZhNIq3AO8eojy9hyOs69t23%2B5pWrOKE1d48SPcKcqhu6Lv4tppt1piFEwzNDv7FHIdvE6%2Bi9iD6mFaDpwAxRipf%2BPmaHMZY4lVAWT73Vyq6xQTdkXCtSqZYZPd%2BWIn0j07AK1LNnWSMoKf057OXkWtjuNgMwFWs7xVzY4Nhm8BaCo2WEgh2Ao5V8S01M2St6E2bYaTLRX69A2wPpZbHhCbIWDKPSsrJnC3hNPrLAPNKvuqt%2FVV180Kan6lDc%2BwFIQp9fBn89acMbi%2Bsa0TrE7NbSSMtGfdO9p%2BGsCVDjDhRaOYdQMhmdY6D8tgI9noAi51JbZXAaWamMp5o3s7nfv3IuaqUA9cB35%2FLHu8zgiH4Jpv8xZ3aaaro99r5mUvRpAhYGIxQtlnjzcptFex4%2F5knJAwxJEXAk66M1SenD3IlZrGqaWLbm2BsgCFZquYF%2FQFBCD%2FYFlMrbZcCwgqPgCZ09fum6kQkyFI%2FRv4J9lTtB9JeDWmcBcldSSh5rXh2cNVaLK1Ma%2FO8mpptxSbJjCW0Qde7AwhErnLoHf3tECqdgS8mbme0duveQojSBkNRKzp6RLcy%2FHXetjb5mUlabHr%2Bf7lT7B7Qryqu5jJdYiHjf0GQrB1W%2FbUuNCmqAnTwjYaDCoyeO%2BBjqkAc5rMu4y6BD0m8ftCfn6dxDo3bQfqEo7aq4TU4HYZ%2FWbXOF7g4%2FWipYMQZvv81e6h1bUETuy15bXiAOfNk3hBUTCsFmId%2FOAYhLgC5hQASftLlvwPKkEuQM1ZiDTx3weoteej3mB7%2FoMzoBSHZvED4W5WbE7yjwMKpAGIvYI%2Fj4%2FLQ0DNlXP483u%2FcakIWgVYZsgWGBc2yKd8kMpg2fPPnnHXBK%2F&X-Amz-Signature=559cd6715a5eff2c971f9139bcea01472eb275c1b38df806a17be3ee572ad596&X-Amz-SignedHeaders=host&x-id=GetObject)

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
