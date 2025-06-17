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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666TF2E3F%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3KDbRu62iNawkrsXrV442yfS%2BZUS5u4gsrJI0fkT1fAiBGni8Rk9gLfO6i8zMybb9UHQYSwzuGSJho0RLU0dEAXir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMfd0tMhMz0Wk3mncfKtwDDPRHS5fYQeGZ2S6ihVwFvJzdAjBQ%2BzTj6WHUdD7lV4VvczDCo2ZaU0DSz22qR6q2iplqJ6MHWRz%2FxbMiNPPs9kFPrtAF%2FOj%2BjiSO37pk1W5iOnMCBbiyMDyAZqpYYTM1cDhNqS0NKGfHVe4%2FEMGwfnRh5gR8uN5qbPmbL%2FticMm0wwDJ5%2B0FYE0E8ydAwAKkyOJ1p7RrTghpFa2%2FcInngFrXvn0T3CNvnePvi8QOWw0MVwmeW%2F%2Bm%2B%2BaiLY6byZA0NjtT0AkYM6E75d%2FBogF7plCQFW4zjxOUk5oHlU2fseMb6emNB8ENnc1BLM6izkPR0hevxdJaOkZ9se8NCY4B1Xc94SVpdJEzh%2Fu68u1Uee8HgtkfQYBWA00R2p4KVNO4alITFHRPEDde2SVIBTeAq0Nrt1rnli1oVwH5oFr7WOMPVzTidVp23H04vf05aDAQXdCfcEYh3zshxxmvATRyuOE6LCw69ro941ctaeRVksstPAxyNtw9XDSHwTBge699Rib0grM3BqRlx4AiimG1lMr%2FjZ1c3NP9ktzvZawnxGdhN9Fr7U1k1rtIDMt%2FJKMNnJzikPFFkOGaEaNCOp9SbclNkDces0hFmBP%2Fsl969t5SB%2FlODxFC54lUbxcw2%2BTFwgY6pgFRkhNnMNixIgRgFkaKo60KT0H4WedL7v3GXVFQV3Q0oM%2BmdY1jHhN8Spd8Nt1Up5KI3qu2YEcQF1p9%2FIzz3hwwZ4LyZIDm%2Fjq6x34MZxqN3xEFlmeKVahLuXzM6utxMPH09Eacd7luyGOCgTC1kiYcS07mXju5t3PBCeno1RukbUn0hVknBXjTDXMF3A4AktKqzbnlVjmhAZgnbG8lJJboScP4LBUO&X-Amz-Signature=3ef29e8464b08bf26f03f40d60b2866143bee6aadc8b0306f99f6499f4272c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666TF2E3F%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3KDbRu62iNawkrsXrV442yfS%2BZUS5u4gsrJI0fkT1fAiBGni8Rk9gLfO6i8zMybb9UHQYSwzuGSJho0RLU0dEAXir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMfd0tMhMz0Wk3mncfKtwDDPRHS5fYQeGZ2S6ihVwFvJzdAjBQ%2BzTj6WHUdD7lV4VvczDCo2ZaU0DSz22qR6q2iplqJ6MHWRz%2FxbMiNPPs9kFPrtAF%2FOj%2BjiSO37pk1W5iOnMCBbiyMDyAZqpYYTM1cDhNqS0NKGfHVe4%2FEMGwfnRh5gR8uN5qbPmbL%2FticMm0wwDJ5%2B0FYE0E8ydAwAKkyOJ1p7RrTghpFa2%2FcInngFrXvn0T3CNvnePvi8QOWw0MVwmeW%2F%2Bm%2B%2BaiLY6byZA0NjtT0AkYM6E75d%2FBogF7plCQFW4zjxOUk5oHlU2fseMb6emNB8ENnc1BLM6izkPR0hevxdJaOkZ9se8NCY4B1Xc94SVpdJEzh%2Fu68u1Uee8HgtkfQYBWA00R2p4KVNO4alITFHRPEDde2SVIBTeAq0Nrt1rnli1oVwH5oFr7WOMPVzTidVp23H04vf05aDAQXdCfcEYh3zshxxmvATRyuOE6LCw69ro941ctaeRVksstPAxyNtw9XDSHwTBge699Rib0grM3BqRlx4AiimG1lMr%2FjZ1c3NP9ktzvZawnxGdhN9Fr7U1k1rtIDMt%2FJKMNnJzikPFFkOGaEaNCOp9SbclNkDces0hFmBP%2Fsl969t5SB%2FlODxFC54lUbxcw2%2BTFwgY6pgFRkhNnMNixIgRgFkaKo60KT0H4WedL7v3GXVFQV3Q0oM%2BmdY1jHhN8Spd8Nt1Up5KI3qu2YEcQF1p9%2FIzz3hwwZ4LyZIDm%2Fjq6x34MZxqN3xEFlmeKVahLuXzM6utxMPH09Eacd7luyGOCgTC1kiYcS07mXju5t3PBCeno1RukbUn0hVknBXjTDXMF3A4AktKqzbnlVjmhAZgnbG8lJJboScP4LBUO&X-Amz-Signature=a7ff612d333147ae4cead31b9c470dd3607ed40af0afc9577de0185d533fbc7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
