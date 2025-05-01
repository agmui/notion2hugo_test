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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJZBXBS%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIBJCraaEBnHjiSifDM%2FJNL48Mgv6RcDN5FIH94aQ8wTrAiAbpVZKQ2Fco6DBMD7uS5Z47RyOqcyfCLHegEwHIOYEoyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnqa0zxBeRSVqa6lgKtwDy4xv1trebWZyBKMD2QbUeWEztCqbknvjpoQj9t0ajAIXCWL2eHEv%2FQ3TxNiank91bK0iHrUb7%2BToSsS72aQyLvehZplgpBriC%2BxbxawAMaU5UllyvXQb09UOnVcI%2Bk7rVlOm%2FEbroLXQOl1GokSKFXZG27%2BpiMdfGqBrAQoDP1FmVgYlA3SGtoS8fZGFwNUVeZ%2BSseOrJv5haLiBePO2363Vw8TrZ94r7k7lx9XWxUieAwzZmvwpVdeiinss81Oadg%2BG3VJvMv4X9u%2FKQ2QkWBF1An5D8iY5S2bAcaS1BxVtqJDS64s%2B65z5qTHH%2F2lc37YViJfVmKA%2Figyf0WTlvlA%2FlOO%2F0CMlpWFH2tzoawQfCerjMY3NymjzdRzEyVlGVpE3x7iBvU63jSCFzaK2JWRUZMKeSFFGfUDctMgTEQm2R48Pnh5uvumSp6n5IuJesUrZtjtYGZcEgAFFGBirXIW6C18eomJa7smiomM2NKxfg8ZNA1O%2Bgj9C4OvsT2PHKhNz8iRcyGA%2BSayu8jnJynfaYq3VbrN8AIWO9DRzCjyt14sM6c00xycVIadk3Dj8ygqDci%2BM5nIq82scTp9NsFUypqJK2FipkO7mYTMkzvWS0xYpWomXAYA4xkYw6dnOwAY6pgFvl2tp2Wb7h3WY7WJkeQmMTEsiKuEwGOE%2FQGDyKE4ij7sGQg60XSoixgcuXdUGwPcWr3OsuvGfRl%2BvqUaEgGklGcDfFWSv7OXSoOPgNkBuv6lp8AhoBTefyhEgJ5%2BDyEZFt6bvbPpEH8agltXkHCy1wT9R8phSr62wF2V8HFSCQQSMKINs%2FTOzgbJPiqU1%2FWcpLArI20wd4D8b%2BLpGJcQuIzoCuaHu&X-Amz-Signature=8c6c7c64a412a13eb17e7050bfa0c5f05e8a5bb88667384861c8c35a872c3182&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJZBXBS%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIBJCraaEBnHjiSifDM%2FJNL48Mgv6RcDN5FIH94aQ8wTrAiAbpVZKQ2Fco6DBMD7uS5Z47RyOqcyfCLHegEwHIOYEoyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnqa0zxBeRSVqa6lgKtwDy4xv1trebWZyBKMD2QbUeWEztCqbknvjpoQj9t0ajAIXCWL2eHEv%2FQ3TxNiank91bK0iHrUb7%2BToSsS72aQyLvehZplgpBriC%2BxbxawAMaU5UllyvXQb09UOnVcI%2Bk7rVlOm%2FEbroLXQOl1GokSKFXZG27%2BpiMdfGqBrAQoDP1FmVgYlA3SGtoS8fZGFwNUVeZ%2BSseOrJv5haLiBePO2363Vw8TrZ94r7k7lx9XWxUieAwzZmvwpVdeiinss81Oadg%2BG3VJvMv4X9u%2FKQ2QkWBF1An5D8iY5S2bAcaS1BxVtqJDS64s%2B65z5qTHH%2F2lc37YViJfVmKA%2Figyf0WTlvlA%2FlOO%2F0CMlpWFH2tzoawQfCerjMY3NymjzdRzEyVlGVpE3x7iBvU63jSCFzaK2JWRUZMKeSFFGfUDctMgTEQm2R48Pnh5uvumSp6n5IuJesUrZtjtYGZcEgAFFGBirXIW6C18eomJa7smiomM2NKxfg8ZNA1O%2Bgj9C4OvsT2PHKhNz8iRcyGA%2BSayu8jnJynfaYq3VbrN8AIWO9DRzCjyt14sM6c00xycVIadk3Dj8ygqDci%2BM5nIq82scTp9NsFUypqJK2FipkO7mYTMkzvWS0xYpWomXAYA4xkYw6dnOwAY6pgFvl2tp2Wb7h3WY7WJkeQmMTEsiKuEwGOE%2FQGDyKE4ij7sGQg60XSoixgcuXdUGwPcWr3OsuvGfRl%2BvqUaEgGklGcDfFWSv7OXSoOPgNkBuv6lp8AhoBTefyhEgJ5%2BDyEZFt6bvbPpEH8agltXkHCy1wT9R8phSr62wF2V8HFSCQQSMKINs%2FTOzgbJPiqU1%2FWcpLArI20wd4D8b%2BLpGJcQuIzoCuaHu&X-Amz-Signature=cb44447658e4f976285cced51584b798fa4f03413f3683678b7f0cc44cf7a665&X-Amz-SignedHeaders=host&x-id=GetObject)

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
