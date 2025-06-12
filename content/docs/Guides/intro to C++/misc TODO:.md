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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKZPDCUO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF6WH3sHcjslV%2F%2FBTAnF3rMH03BcNTfQw18RylNxWBrPAiEA4TTPGxhBnOcXJMXuaTANwUgeFSVIqZ7vtfTtAu57KiMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHzBDLFPtqffp3xcyrcA8nhqyZbn8vOW%2BX53U0ZgSkJs%2BBpfI5S%2Fwdq7OOBtbMPDAegrKLGuXmTRY0ZaeFh%2B7LfHPK1NPrG1YoB2jT9%2Ftk9fAg2szT6Uent0r4Pt60QZ2R0UjMw%2BPdraVtFrOtmeTRtbohLigNnB%2BmdWDO6vJOT7H%2BFPqnMUQYtpvY%2Fxe%2F30TfNE5CXE1MUpmU4h9%2FYcoUj30BO186xJSJWZ0F3hWljLa3blv36h2MenenGWUefb%2BsC3TNzoMeotYaNAa42h%2FenyprV36KJnpUyvwK1cGNDZDPYehwufqecmaZ91HIEAZiPB%2BFH3Zuqo73TIUNKqxagj3gTjhnghcxoTQnHQ9%2FbVamVBhc1x9D1By6GFB%2Bfr1l7bhS5I60IVZkOjsTH9Gf4f0eSX3yQIU5TL%2BHzS5K1Tdx59Wy3Nu2CnCX%2FxyRdImxVx3CZhyCal6k5MKRs0KgTg%2FRNCspTQoWS%2BvStQdw%2FOLC4i%2FpKIicdyXMgcutykgzKfe51%2FgzO2IgwraCq49vkQrIsfcsMf9QrGrX2pzvTzVUkUg8ykrQs9u0p3JSdTE%2BzrADJn5O1qW%2Bt8RWzdZ82%2FxBNtg6ieUsNQ7qPakuMPcaoGIY26iL3xPbLw55sQx9jjD6SJoUqupgBMNzxqMIGOqUBR9s5sgM4uyCJ1zM5U%2B0qeX9vxkpqhdCJT9vttHFykemmoyIJ3%2Bb3Hm8u9YBkCwCkKsRcKotNZI5Yfqmk3wExRUO1V%2Bw%2F9LIn0FglgD7pkHIJyxtB7lECc19qLlf1grygm0NdD1nE8mSXSLQJplbMMZjtbauEK0pWG8fBWzicw90D6QyI640w8jMFDUnXy7v30bvG6JiiZv1q4FGRu%2FYvMsusRUdT&X-Amz-Signature=ddb95ca56bdb299bee29ceedea8ba9b99cc623e0d1c2d1be66c63dbba5172f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKZPDCUO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF6WH3sHcjslV%2F%2FBTAnF3rMH03BcNTfQw18RylNxWBrPAiEA4TTPGxhBnOcXJMXuaTANwUgeFSVIqZ7vtfTtAu57KiMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHzBDLFPtqffp3xcyrcA8nhqyZbn8vOW%2BX53U0ZgSkJs%2BBpfI5S%2Fwdq7OOBtbMPDAegrKLGuXmTRY0ZaeFh%2B7LfHPK1NPrG1YoB2jT9%2Ftk9fAg2szT6Uent0r4Pt60QZ2R0UjMw%2BPdraVtFrOtmeTRtbohLigNnB%2BmdWDO6vJOT7H%2BFPqnMUQYtpvY%2Fxe%2F30TfNE5CXE1MUpmU4h9%2FYcoUj30BO186xJSJWZ0F3hWljLa3blv36h2MenenGWUefb%2BsC3TNzoMeotYaNAa42h%2FenyprV36KJnpUyvwK1cGNDZDPYehwufqecmaZ91HIEAZiPB%2BFH3Zuqo73TIUNKqxagj3gTjhnghcxoTQnHQ9%2FbVamVBhc1x9D1By6GFB%2Bfr1l7bhS5I60IVZkOjsTH9Gf4f0eSX3yQIU5TL%2BHzS5K1Tdx59Wy3Nu2CnCX%2FxyRdImxVx3CZhyCal6k5MKRs0KgTg%2FRNCspTQoWS%2BvStQdw%2FOLC4i%2FpKIicdyXMgcutykgzKfe51%2FgzO2IgwraCq49vkQrIsfcsMf9QrGrX2pzvTzVUkUg8ykrQs9u0p3JSdTE%2BzrADJn5O1qW%2Bt8RWzdZ82%2FxBNtg6ieUsNQ7qPakuMPcaoGIY26iL3xPbLw55sQx9jjD6SJoUqupgBMNzxqMIGOqUBR9s5sgM4uyCJ1zM5U%2B0qeX9vxkpqhdCJT9vttHFykemmoyIJ3%2Bb3Hm8u9YBkCwCkKsRcKotNZI5Yfqmk3wExRUO1V%2Bw%2F9LIn0FglgD7pkHIJyxtB7lECc19qLlf1grygm0NdD1nE8mSXSLQJplbMMZjtbauEK0pWG8fBWzicw90D6QyI640w8jMFDUnXy7v30bvG6JiiZv1q4FGRu%2FYvMsusRUdT&X-Amz-Signature=eebc1ddfc686b539beb67c165b117b879f202c647817eb88b6500133997efa8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
