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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPADZRF%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNadhnw4NqbUTOSCBl%2BrIyO92ZR4D0rPWiHsfQzWbA5QIgL0fJpnARG2jo5J%2B45DeghUBP1QGIDBGkgnc1%2BfUUHPwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnaE2KlIYjJV4KkDyrcA37512PBZpW4yVG5Gu3QRvtvhmnlcm7sP2bXH7ME00bDeXeRkERqLPRX39cyI5Lrb9QN7MNMYR6weosgwwMpQIAKo2V1UmAmLcrAWRpbZsWCRlk%2FQHLOtC8HWzXMgm674uzS0TPTB%2Bdv3Fv1yOr0YYMEZ8KEiEKcwBJ17KMc85tbhAOVUax%2F%2BZAvlaNStV%2BnzwU6xdmYMvhyOoVTaZWINAS6LfIuT6MlYmBKVLvt2tiqiZHYXTsJ8BhmowFb40pzUtDAfzAkHTAGMF5lrdH17hkxuSi2Vzi%2F74wpYlfBncio9Re6yTAYibdwY1QtbnWM8MWKPXxS7XFUqbBLeh%2FJmuGaDV6a%2F5xCa9m9IYOLfKFnl6PTQk0JAhFgo4eNati6%2B4yOq3mD0Q6MUcUF7yLfpgpSDRpu1kTTsNnVpRu7tHyMxOvu0VjbM01XQL0f62c%2Fs9KMCmyHXqohizBJFciGE%2FxzMPq3Cj%2BlIWYRgFp0lLoO3i%2BPSMIyzmw0OiO7BgqztFMQiOf%2BB2ORi68kP8vd%2BA6stwZXbDoXfOhKMspdVh86ufXe5UQN2%2Fr4ws%2FoDYUtKBh6woFgyzcKm9InML5aYE0dwlqu4Mwm6N1ee56UhH%2BoVJsIKt976j6CykdOMPLhicMGOqUBWWJ2trISsoceeDO41tlRTMvQBC9rgFclBXBHQuHk6gK6ctDiETQ1HFa1uGdUF8M3tvdLzAeqFJgViKClFAGnRIMjflnCpaXXNTnX28pX2q9O4qhF3OXuVKUptWXWdyQ6ooYj68z1helCjwl9HfjIgiMsTX0N9Jhlm0DuvntmfACa51GDBbkupxv1zn4MtVIv4UExjwSx%2FPwRqzNzTDgBYmnj2Yuj&X-Amz-Signature=4d574b8df728f8576496dd6d927bb767cbed5ca204437e79e7b28ec0b5738e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPADZRF%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNadhnw4NqbUTOSCBl%2BrIyO92ZR4D0rPWiHsfQzWbA5QIgL0fJpnARG2jo5J%2B45DeghUBP1QGIDBGkgnc1%2BfUUHPwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnaE2KlIYjJV4KkDyrcA37512PBZpW4yVG5Gu3QRvtvhmnlcm7sP2bXH7ME00bDeXeRkERqLPRX39cyI5Lrb9QN7MNMYR6weosgwwMpQIAKo2V1UmAmLcrAWRpbZsWCRlk%2FQHLOtC8HWzXMgm674uzS0TPTB%2Bdv3Fv1yOr0YYMEZ8KEiEKcwBJ17KMc85tbhAOVUax%2F%2BZAvlaNStV%2BnzwU6xdmYMvhyOoVTaZWINAS6LfIuT6MlYmBKVLvt2tiqiZHYXTsJ8BhmowFb40pzUtDAfzAkHTAGMF5lrdH17hkxuSi2Vzi%2F74wpYlfBncio9Re6yTAYibdwY1QtbnWM8MWKPXxS7XFUqbBLeh%2FJmuGaDV6a%2F5xCa9m9IYOLfKFnl6PTQk0JAhFgo4eNati6%2B4yOq3mD0Q6MUcUF7yLfpgpSDRpu1kTTsNnVpRu7tHyMxOvu0VjbM01XQL0f62c%2Fs9KMCmyHXqohizBJFciGE%2FxzMPq3Cj%2BlIWYRgFp0lLoO3i%2BPSMIyzmw0OiO7BgqztFMQiOf%2BB2ORi68kP8vd%2BA6stwZXbDoXfOhKMspdVh86ufXe5UQN2%2Fr4ws%2FoDYUtKBh6woFgyzcKm9InML5aYE0dwlqu4Mwm6N1ee56UhH%2BoVJsIKt976j6CykdOMPLhicMGOqUBWWJ2trISsoceeDO41tlRTMvQBC9rgFclBXBHQuHk6gK6ctDiETQ1HFa1uGdUF8M3tvdLzAeqFJgViKClFAGnRIMjflnCpaXXNTnX28pX2q9O4qhF3OXuVKUptWXWdyQ6ooYj68z1helCjwl9HfjIgiMsTX0N9Jhlm0DuvntmfACa51GDBbkupxv1zn4MtVIv4UExjwSx%2FPwRqzNzTDgBYmnj2Yuj&X-Amz-Signature=1c54effbd22236b1afdce7960345bbca051988d2f7d0da641e207add3b99322e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
