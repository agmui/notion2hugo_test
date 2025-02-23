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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7Y6GWTG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBF%2BsoKNRN8x5c%2FHwvA%2FyBigF3Tz%2FBWfjjVq7RNubPzgAiA9zfPNsyGc7iWBLoE%2FBbZlYznmw02c%2BU87oi%2BJiMNiECr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMV3YKiA90KbIde0kBKtwDjLapNCcVl5KIVgAJ4wxpa%2F6CnWaXsSi%2F3oJ6t%2FE%2Bh87cvmmxTRH4WgMaUw6pqlJiviXRu30nNmlUpzRi3v1dZIiMiax09MSm92f2nSdF%2F5jkOHqS9bD5JXTgBCJuCrAkJx8wO8DsLwuzye9I0vo7p%2BeICcDv%2FnT1JhfpSuJ2SjSxuPnxTvzR70d9KLJlIzo%2FNixFhGIUUL8%2BWkJndNzrrQjYsntCAB4Pb2oZbGZcZKPLingoyKA5%2B7MHlmhsLM%2FqHbK4EG0OZLDpCOgqc%2BBuavbwul9ZQ2mEiKSubkLLXRnF61Zhvm5PimMBvnGTi2Lm5DrcZnDt0avGQK6wmt%2Beycnx3QYyNsmXbCH2Z47wysZD1KOw2ETx4LqKpL%2BRi9rKItenkqDCz9%2FXdXCd0yRFth9T6uxkFCuXVmclJIZnYkl8jfgW1j%2FuGo1cgcHdCysygX3JX3PRflBZVTh%2B8sPaUqh7Lu6Q0vk6T5MxsEgye%2BQxAQGJroKjIuaMEOm4OfUjfAbcI520cVDQ8R5wUDhrXyBPRvhkAMD%2Bb4yheQvxptWk1u3XbhFkf42r4EMcS7lbXXPVd2UXYkXFQzE2%2B1NA%2FB3xgieaaTCFVM4NhtCQPdVM1CnMZ6iUS16srNgw%2BJftvQY6pgF1euf%2FnqUcIodQkdVXhsuttJYs%2FNxym4j%2FosIOD1Hs5JuTcS08kvLuHJgOmDX49ONn2HK3cTZXXrFIqhgGmmrI3QrcLb%2FxaObSX0%2FR1wkPG16ltvN%2FZeoBLaGsBWeVkouyuK0iPo2ejmQ76mWPG2uVni8oY6183pCY6MNDDcyo%2Bgzxt5arYj3Ebx7Cu%2B8YphrN4kyq9cE11wrYkeFSYlhhT9kM7cON&X-Amz-Signature=ee0b3a1c226ecd5d5c01e4ac2e5030ed4acc6729f213e311e55447c7c0e1585c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7Y6GWTG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBF%2BsoKNRN8x5c%2FHwvA%2FyBigF3Tz%2FBWfjjVq7RNubPzgAiA9zfPNsyGc7iWBLoE%2FBbZlYznmw02c%2BU87oi%2BJiMNiECr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMV3YKiA90KbIde0kBKtwDjLapNCcVl5KIVgAJ4wxpa%2F6CnWaXsSi%2F3oJ6t%2FE%2Bh87cvmmxTRH4WgMaUw6pqlJiviXRu30nNmlUpzRi3v1dZIiMiax09MSm92f2nSdF%2F5jkOHqS9bD5JXTgBCJuCrAkJx8wO8DsLwuzye9I0vo7p%2BeICcDv%2FnT1JhfpSuJ2SjSxuPnxTvzR70d9KLJlIzo%2FNixFhGIUUL8%2BWkJndNzrrQjYsntCAB4Pb2oZbGZcZKPLingoyKA5%2B7MHlmhsLM%2FqHbK4EG0OZLDpCOgqc%2BBuavbwul9ZQ2mEiKSubkLLXRnF61Zhvm5PimMBvnGTi2Lm5DrcZnDt0avGQK6wmt%2Beycnx3QYyNsmXbCH2Z47wysZD1KOw2ETx4LqKpL%2BRi9rKItenkqDCz9%2FXdXCd0yRFth9T6uxkFCuXVmclJIZnYkl8jfgW1j%2FuGo1cgcHdCysygX3JX3PRflBZVTh%2B8sPaUqh7Lu6Q0vk6T5MxsEgye%2BQxAQGJroKjIuaMEOm4OfUjfAbcI520cVDQ8R5wUDhrXyBPRvhkAMD%2Bb4yheQvxptWk1u3XbhFkf42r4EMcS7lbXXPVd2UXYkXFQzE2%2B1NA%2FB3xgieaaTCFVM4NhtCQPdVM1CnMZ6iUS16srNgw%2BJftvQY6pgF1euf%2FnqUcIodQkdVXhsuttJYs%2FNxym4j%2FosIOD1Hs5JuTcS08kvLuHJgOmDX49ONn2HK3cTZXXrFIqhgGmmrI3QrcLb%2FxaObSX0%2FR1wkPG16ltvN%2FZeoBLaGsBWeVkouyuK0iPo2ejmQ76mWPG2uVni8oY6183pCY6MNDDcyo%2Bgzxt5arYj3Ebx7Cu%2B8YphrN4kyq9cE11wrYkeFSYlhhT9kM7cON&X-Amz-Signature=8ca5b624d4185117b2516f96cd144e76586bf640300127643f296819c1dc26d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
