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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU54MZB5%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBawLIBqi6FS2SfoW0F4LDv2JzuQiZNk8rstjDWaknnXAiAuAV8qaLwAR1SG1ntFkBMg%2B6PYld1JxhINaiGs16i5NiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnWZVq7aApd66ARbLKtwDnl6EwMH8bkl4amtI5%2BKPIYRjkyPVIhZPDCRCdD7fHCMxOeUM7yfjF3bjsv4VQQE2bJUnDB53Tyn0xX5SC2gGrG3xAi2IOfnUsg9DHEq1uOSLXECgsyfXXnRCKK4nYvNSG2x8WD1VXre3WlUmYhFxZZpnd4GuAL1Sa8EKYODyzRdo6T3Z%2F4%2FOMntfuoeGUOtmnPtWFvtTLuseB7ZF5cBduasJgtHFzKB5V2oZ%2FZEEZO616YZwCj8tU%2FmrTOPiQigUGyk1DlQsnX5Cwq7IzrAttpfigrDu1eQp7wutwdwUnF7pDcWKyA539Sjbg0%2F566QJEkjEOzD4ruK1VrFBYFKQOY92s6ltcfjLyHPFkzmdsUoRxQiAVPR44SmEjz2E2sPK7MfIWPu6wkwsmtQgd5EXsjmaugSf4MLljOFJnEd8OAG%2FvFqafQLRDD9YaI5TgTgWWfl5tFooDDv3c7yLonVUurgqy4fOSqnQu6lig%2FhuAPOlIT1zKmx7uobljqRWxv6Q0UNoO7sh4C6%2B33NGt9UENwcJoG3f50Ers9Q4WqH9CLgIhrB6927D5VOKSqldBuVfzlQ307uCtjgG4PRlqSdIG6N1N3oKFZqSDeAlf5HbYN0xkP%2BwmK%2BcdLFFvP4w9r6FvwY6pgHMLKeF6Ev1hMZczLGZfRtw%2BDGuV3aoooEj5RjKa6tXFBTgVkyu1xLFAo9ag0PnEvNO2jqvmxQcJIPkYVQB5YUW0zB41BvuDvSL%2F54WKX93x%2BrdHTwdvghY98cYGme53gAm6rSKal5PKj13cxfshW8YU9PLw%2BdoFHDvHujzNe3nHq8aXJi3N8auxv4dr%2BEnWoUjO77eAJCSxwhDNLg3l9siJYlIPRSJ&X-Amz-Signature=95da50334a64194290c5530df7618a07975e00f8b6ed741872de4bc829ba5322&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU54MZB5%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBawLIBqi6FS2SfoW0F4LDv2JzuQiZNk8rstjDWaknnXAiAuAV8qaLwAR1SG1ntFkBMg%2B6PYld1JxhINaiGs16i5NiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnWZVq7aApd66ARbLKtwDnl6EwMH8bkl4amtI5%2BKPIYRjkyPVIhZPDCRCdD7fHCMxOeUM7yfjF3bjsv4VQQE2bJUnDB53Tyn0xX5SC2gGrG3xAi2IOfnUsg9DHEq1uOSLXECgsyfXXnRCKK4nYvNSG2x8WD1VXre3WlUmYhFxZZpnd4GuAL1Sa8EKYODyzRdo6T3Z%2F4%2FOMntfuoeGUOtmnPtWFvtTLuseB7ZF5cBduasJgtHFzKB5V2oZ%2FZEEZO616YZwCj8tU%2FmrTOPiQigUGyk1DlQsnX5Cwq7IzrAttpfigrDu1eQp7wutwdwUnF7pDcWKyA539Sjbg0%2F566QJEkjEOzD4ruK1VrFBYFKQOY92s6ltcfjLyHPFkzmdsUoRxQiAVPR44SmEjz2E2sPK7MfIWPu6wkwsmtQgd5EXsjmaugSf4MLljOFJnEd8OAG%2FvFqafQLRDD9YaI5TgTgWWfl5tFooDDv3c7yLonVUurgqy4fOSqnQu6lig%2FhuAPOlIT1zKmx7uobljqRWxv6Q0UNoO7sh4C6%2B33NGt9UENwcJoG3f50Ers9Q4WqH9CLgIhrB6927D5VOKSqldBuVfzlQ307uCtjgG4PRlqSdIG6N1N3oKFZqSDeAlf5HbYN0xkP%2BwmK%2BcdLFFvP4w9r6FvwY6pgHMLKeF6Ev1hMZczLGZfRtw%2BDGuV3aoooEj5RjKa6tXFBTgVkyu1xLFAo9ag0PnEvNO2jqvmxQcJIPkYVQB5YUW0zB41BvuDvSL%2F54WKX93x%2BrdHTwdvghY98cYGme53gAm6rSKal5PKj13cxfshW8YU9PLw%2BdoFHDvHujzNe3nHq8aXJi3N8auxv4dr%2BEnWoUjO77eAJCSxwhDNLg3l9siJYlIPRSJ&X-Amz-Signature=b8f258bfbf08a072eb2141825ff3f8213ab4808bf0d90ab92a55f6d027c6da98&X-Amz-SignedHeaders=host&x-id=GetObject)

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
