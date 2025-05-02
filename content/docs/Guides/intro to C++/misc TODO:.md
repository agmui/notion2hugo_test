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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPKX2IOM%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDRTKRJ6SD0vZNBppc5PeE5Sb%2F4GuurthR8T053kOdtZAIhALnSkOMhsiDqZGqDZr%2B7I3TkrwjaJBhPgR5TwWPPyo5iKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwiwjl3Y%2FfPlEjro7kq3AMM6FVupO9O%2BJ17l0%2FyeQTUV%2BoGVfjKkn2JyasZ1SLfHvEfFiljNusKXdDqM%2FpPGXmz41WSPP4bWyFIYWxU4TEcFdzSlckDdKKUs0IgO%2BQOVGw6Dt%2FrXuH4umuU2QTETiT9118HHQtrOk%2F%2Bk8h%2F85lMsXaycLiAcZcu9Juga4uHl%2BXm2M3yWaWDkOo8EuBsUZpAUzy5TlprU%2Flz8CFx988AXpgU9lI4sKLgWvtp%2BSM%2F7McuN%2BTJvwBGXf1wChobWmjBoMAU%2Fu2UT9y%2Fc5jrQO9v%2BNpYCPS9aybXA%2Fdu9WWecLEYrTjMs%2F2cZFUrocDDuoBZrGRPHmPWzsf06Fe0KVHu4Kl7lkoh3zSxUOKxdfGpVRy6tn057%2F4MeVFPXRvUatya6Cq7f%2BvkyXrGi02IeEFAoCJgLzOvfvj0lNnAYqlpD7zW5p2KbNjSUfey2hqkwcfm%2Fv%2BIi%2Fm415i%2FlX%2B9cZdL7e4hNRAfssd7%2FGO9ROAAnBtdQlZj1ihRoyLXYBAagGVGcMoxjc6HnIM4lSzfoWxa1fcrfJk5FureDf3g%2FMUUE%2BrcxnluDJphq7pIPThk6l4ZMiEOVDbFOW%2BdKBgbQfXG%2FumPl2wJRiJR0g4SFAWcNTGq9v5797%2FgtI6inDCwmdDABjqkAQpzob1DMHUijChF3hXajUfWaxjSBtiBsguDlOT25vKp2XEhUR5V8oveyFKHP%2FL8nLkR7FHVTkzFuaQTqgGMPtLvN6EzmgwrTpz00mJryMW9t40z4c%2FWouMRN%2Fb%2BQLP%2BU7nvsr3q%2Bd3ZqncZDydbrhryjpglIMOghQjyuWS45oJtBhMaXm8FjdxzjqvKvUe45TrLXgPAoIL5QCN0uEhQqZRI%2BnJ1&X-Amz-Signature=60771a3d4d2c1a5ca86f3590a4a1ce5565850b4217ffc4f18ba475642f73cbfa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPKX2IOM%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDRTKRJ6SD0vZNBppc5PeE5Sb%2F4GuurthR8T053kOdtZAIhALnSkOMhsiDqZGqDZr%2B7I3TkrwjaJBhPgR5TwWPPyo5iKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwiwjl3Y%2FfPlEjro7kq3AMM6FVupO9O%2BJ17l0%2FyeQTUV%2BoGVfjKkn2JyasZ1SLfHvEfFiljNusKXdDqM%2FpPGXmz41WSPP4bWyFIYWxU4TEcFdzSlckDdKKUs0IgO%2BQOVGw6Dt%2FrXuH4umuU2QTETiT9118HHQtrOk%2F%2Bk8h%2F85lMsXaycLiAcZcu9Juga4uHl%2BXm2M3yWaWDkOo8EuBsUZpAUzy5TlprU%2Flz8CFx988AXpgU9lI4sKLgWvtp%2BSM%2F7McuN%2BTJvwBGXf1wChobWmjBoMAU%2Fu2UT9y%2Fc5jrQO9v%2BNpYCPS9aybXA%2Fdu9WWecLEYrTjMs%2F2cZFUrocDDuoBZrGRPHmPWzsf06Fe0KVHu4Kl7lkoh3zSxUOKxdfGpVRy6tn057%2F4MeVFPXRvUatya6Cq7f%2BvkyXrGi02IeEFAoCJgLzOvfvj0lNnAYqlpD7zW5p2KbNjSUfey2hqkwcfm%2Fv%2BIi%2Fm415i%2FlX%2B9cZdL7e4hNRAfssd7%2FGO9ROAAnBtdQlZj1ihRoyLXYBAagGVGcMoxjc6HnIM4lSzfoWxa1fcrfJk5FureDf3g%2FMUUE%2BrcxnluDJphq7pIPThk6l4ZMiEOVDbFOW%2BdKBgbQfXG%2FumPl2wJRiJR0g4SFAWcNTGq9v5797%2FgtI6inDCwmdDABjqkAQpzob1DMHUijChF3hXajUfWaxjSBtiBsguDlOT25vKp2XEhUR5V8oveyFKHP%2FL8nLkR7FHVTkzFuaQTqgGMPtLvN6EzmgwrTpz00mJryMW9t40z4c%2FWouMRN%2Fb%2BQLP%2BU7nvsr3q%2Bd3ZqncZDydbrhryjpglIMOghQjyuWS45oJtBhMaXm8FjdxzjqvKvUe45TrLXgPAoIL5QCN0uEhQqZRI%2BnJ1&X-Amz-Signature=b20508c25b929f24e83e4c0e2dd9483ea0197ab59b720ae8984ad5a2480272b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
