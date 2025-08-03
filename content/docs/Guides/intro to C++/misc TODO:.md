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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OO3XOF5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGh0BhbDP42RMMgPan0l%2Fl%2Bzf%2FUnJ%2FCJLZi5arRzw928AiEAu4bDS4dc0ZYS1eqi5p9fn1513y9oFXVr3YzMZ6xqGtMq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDVV3LbBMzdrvtsfFCrcA9kQI22hs13pE4IQ11U8pPnepKKoxOLX2g6%2F6mniwfBZ%2F%2FWF4vRek2rVtcvYN77G36CqbqJ0bFSaAOu6%2FwxFVYzXptf227Xy4APHSdZl6nlrnQhbY5SP1ToGU1tqEnOVi7%2BNgLKskvW%2FkODEL7gPnj7AqApiue%2FrNeo1qY%2BeQb6GP%2B70vYLyGS7RWUz65phZAXupHhVu7toh3jKx7laiuRG4UDhGcfhs2ciqu9bYac8orzYhWVLsJxdISRgkHnBWR1Ylk9J4ex6eYT%2BXoIOhPz0mVRlUduFPaarLEo%2FWk9ZOS5seCDo8oKXF0zEHFeytUchyckhz9e0cVxp8teA4eJ7K3uhacsGfGSzQu9zlspNXYYqYpdqHN%2BBBf69cQjK5HpdRG47we2EvVyyDUyM0s6f68gcOQxuR%2F%2FFu4AHHgAIm4jIW0gL3x7K1KQUU%2FTnXcPY2%2Fy6yBWnzIOzFbzvJ9qMyGfkqeFXAeFqfigmsbH5WOSP685%2BGWDs9vFQZ8KoS3Ixw8ufIxPh3w7aQtiUB4p5XYyHHmnP9E%2BkT6flnIY7NWuB%2B6zxSMm34suxnttXab6wXvbWaTzDdfBnTNMezRD%2BIjKKC9AQ9YP8Eg%2B2guoMCeMG8JPUExfb6WZuCMK%2BAusQGOqUBdc61PdPW7OGCwIXIYxn0gYR5yh6%2BU9tWmCTCfGvrj7WyKQLGuCyb3oudK772v3GQCurm1fu%2F3Y3TyEaZBs8JWg3D3xzOPpQ7uBsyBg54EZLDHOsH0GjFvU2Z7xj9keoeXuRvE3PjMkO6LKMjs3d7BF7uB3CCj75vACuyQH3uMvxOWeQzA%2FlV5Fmof%2FvhNGB%2FvSg2g2W946HE8Wqr4P4CRaLVepmU&X-Amz-Signature=739c3ebf979f30170b0e497d92575a20181d345fe883f6fbafc0e65753e5182b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OO3XOF5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGh0BhbDP42RMMgPan0l%2Fl%2Bzf%2FUnJ%2FCJLZi5arRzw928AiEAu4bDS4dc0ZYS1eqi5p9fn1513y9oFXVr3YzMZ6xqGtMq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDVV3LbBMzdrvtsfFCrcA9kQI22hs13pE4IQ11U8pPnepKKoxOLX2g6%2F6mniwfBZ%2F%2FWF4vRek2rVtcvYN77G36CqbqJ0bFSaAOu6%2FwxFVYzXptf227Xy4APHSdZl6nlrnQhbY5SP1ToGU1tqEnOVi7%2BNgLKskvW%2FkODEL7gPnj7AqApiue%2FrNeo1qY%2BeQb6GP%2B70vYLyGS7RWUz65phZAXupHhVu7toh3jKx7laiuRG4UDhGcfhs2ciqu9bYac8orzYhWVLsJxdISRgkHnBWR1Ylk9J4ex6eYT%2BXoIOhPz0mVRlUduFPaarLEo%2FWk9ZOS5seCDo8oKXF0zEHFeytUchyckhz9e0cVxp8teA4eJ7K3uhacsGfGSzQu9zlspNXYYqYpdqHN%2BBBf69cQjK5HpdRG47we2EvVyyDUyM0s6f68gcOQxuR%2F%2FFu4AHHgAIm4jIW0gL3x7K1KQUU%2FTnXcPY2%2Fy6yBWnzIOzFbzvJ9qMyGfkqeFXAeFqfigmsbH5WOSP685%2BGWDs9vFQZ8KoS3Ixw8ufIxPh3w7aQtiUB4p5XYyHHmnP9E%2BkT6flnIY7NWuB%2B6zxSMm34suxnttXab6wXvbWaTzDdfBnTNMezRD%2BIjKKC9AQ9YP8Eg%2B2guoMCeMG8JPUExfb6WZuCMK%2BAusQGOqUBdc61PdPW7OGCwIXIYxn0gYR5yh6%2BU9tWmCTCfGvrj7WyKQLGuCyb3oudK772v3GQCurm1fu%2F3Y3TyEaZBs8JWg3D3xzOPpQ7uBsyBg54EZLDHOsH0GjFvU2Z7xj9keoeXuRvE3PjMkO6LKMjs3d7BF7uB3CCj75vACuyQH3uMvxOWeQzA%2FlV5Fmof%2FvhNGB%2FvSg2g2W946HE8Wqr4P4CRaLVepmU&X-Amz-Signature=ad4ff1f772e84943168f6f6a55a2e31041d907df2d2049dda52549fec755d72f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
