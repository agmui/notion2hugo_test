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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7XJK5X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDw%2F5paCGK8RDW601C4mr0YRAi8iMJAmBy3iqDDh3IIlAiEAx8WDLnO%2FDHUgc8rMwO1sUGH8xzJwV5Zgc84BPzFcSYoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKal7urvn%2FP2TtM3SircA2lE198nZ0geY35AOF770A89M4r9ZRnpzBC0ujXm1qbmB9KbnD3Qx%2Bz8SIBn%2FGlRRXTvWd4EMMa8xAGzLdAvuifqld6Mm5wt9XDVzmfKdMh93nNitz%2FrB%2BnsVxX5C0OnZeujYB3OZSDIpfHrHXNkjlb3G1vz%2FJizxYvUO8WxsjBPwpThijU28k7crKCnLN8IcmeLoTTVyTb7ANyedi%2Bg1ZSfWY44JoiHD7WgGEfBFEF3nOgHnp%2Fj3ZN4k6Nh0HUj%2BlRdjME0OpccF44PeejupZUo51KGQuePKpi6cn7mdTtV%2FQEk1Y5PxbpU%2BBSOFYqpiJ3VJ695LFfG7o2okc6Ke3Y49g5VOZM%2BzfXN2HYrlkJkLGVEb9VfRSTL58I1UzJo2QPkvta%2BYgqlbg3LtH41J6zPik2eyq%2Bx4SIpSfrgO5di9AcVVyC09uV13hTE066lhZUUFJXUqPW3i6sWewHstqQVQdydLNzrTRyDw8CoP9L6jbLD8ltl5NKGRbo2KftEDX%2F5g%2BT9aA8URoqzS59UbDSkkXFRJ2Mq7c9cvhThStUalSt5%2BLmK5oMx0oo0nGPbvUyV65cW%2BGaCyRjyIqqKR4hZtkC05vX%2FS296%2B2pIiU2RLMWUACYujcvZSsmuMMGNuMQGOqUBNMCMz6OZ20DeU6pl5cPZDJGEGJY5V8Xs2p95IchFN0R6xUBe%2FUPo7YJBxmokuOGnQPImJk28eAEodOlRspT%2FYfVuufXmR8ZR22q4OKAP40atPl%2B2fnp%2BOyn3%2B8HfD8E4r06SFJXkLszy564NkP4heqkti52pcRgFROyQpS0%2BRTEUWupIJOw9DRem2puranC0pVIdL7Pl2mFWpWC5AWX7VhdgeX2v&X-Amz-Signature=db534d36a30c591e30343980b3e024524a0998ff2189abed99766b15673e3a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7XJK5X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDw%2F5paCGK8RDW601C4mr0YRAi8iMJAmBy3iqDDh3IIlAiEAx8WDLnO%2FDHUgc8rMwO1sUGH8xzJwV5Zgc84BPzFcSYoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKal7urvn%2FP2TtM3SircA2lE198nZ0geY35AOF770A89M4r9ZRnpzBC0ujXm1qbmB9KbnD3Qx%2Bz8SIBn%2FGlRRXTvWd4EMMa8xAGzLdAvuifqld6Mm5wt9XDVzmfKdMh93nNitz%2FrB%2BnsVxX5C0OnZeujYB3OZSDIpfHrHXNkjlb3G1vz%2FJizxYvUO8WxsjBPwpThijU28k7crKCnLN8IcmeLoTTVyTb7ANyedi%2Bg1ZSfWY44JoiHD7WgGEfBFEF3nOgHnp%2Fj3ZN4k6Nh0HUj%2BlRdjME0OpccF44PeejupZUo51KGQuePKpi6cn7mdTtV%2FQEk1Y5PxbpU%2BBSOFYqpiJ3VJ695LFfG7o2okc6Ke3Y49g5VOZM%2BzfXN2HYrlkJkLGVEb9VfRSTL58I1UzJo2QPkvta%2BYgqlbg3LtH41J6zPik2eyq%2Bx4SIpSfrgO5di9AcVVyC09uV13hTE066lhZUUFJXUqPW3i6sWewHstqQVQdydLNzrTRyDw8CoP9L6jbLD8ltl5NKGRbo2KftEDX%2F5g%2BT9aA8URoqzS59UbDSkkXFRJ2Mq7c9cvhThStUalSt5%2BLmK5oMx0oo0nGPbvUyV65cW%2BGaCyRjyIqqKR4hZtkC05vX%2FS296%2B2pIiU2RLMWUACYujcvZSsmuMMGNuMQGOqUBNMCMz6OZ20DeU6pl5cPZDJGEGJY5V8Xs2p95IchFN0R6xUBe%2FUPo7YJBxmokuOGnQPImJk28eAEodOlRspT%2FYfVuufXmR8ZR22q4OKAP40atPl%2B2fnp%2BOyn3%2B8HfD8E4r06SFJXkLszy564NkP4heqkti52pcRgFROyQpS0%2BRTEUWupIJOw9DRem2puranC0pVIdL7Pl2mFWpWC5AWX7VhdgeX2v&X-Amz-Signature=653804cc0949c5418a5b0145c0e69e2460bab61f4decab15422cbd3a8befc122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
