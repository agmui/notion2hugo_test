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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRJWE3G%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIHWKGB9ta4qNpSOTNF0Dpl9ZnIc2fHwYTdKkkcJuRXLLAiBXQWBtKO7EGHPBDWGdvQMth2bVd25SCRynedtkyCvgxSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMwh2F79clqYMAY%2FieKtwDYEdpAuOrUWbrNbDlzkrA%2FAQmH8lvOQf4%2Fq7x06ojhGbGDF4yFf6CuNmlM12AUP34446WmYoL7FIAM%2FaMHtuOeWQqrC8%2Fm%2B8cV47zVKhgPqhhORJZe7Dlf0w%2Bf7M5ylbQzjtesKHtwXBC8QtuxLT5xIr6vCYNFrZuLKF0ruyMyORuVSqtx8adceLm9bgt34opki0OWjZ3CvbqR9x7TK1VgSOPZUx6hLug%2BPbKAi0jzumV2tIb8%2Fi5k44SiejzkIsTVpLVPyHpvdyLfcaC0u3acZq5Tutv0%2BHral74o5TEzT9OJPiDrwCh1pqZKoSMa5NJgXkqqva0dII56oSOjxO%2B9KCBmlWYrrLl%2BDCQ4oANcxdl0m0GHywwQnDUIoHy8tw0qUmPaRgZr2MKHv47iloNcCRLxGZggP1YyfBHAL9gt1FFfBAfzBRuS0ww%2BwwaglaMdbe2B%2B24%2BFp4bGMX1DsBfHf2mchdIWFt9nwyGhN%2Bn3DaY08U4Iqj14Yfik8DcfptRnvBulQxiCtZi22fxcEElEUm5qdqZJ7mmr8MV7xRZ5QM%2BjBJtVktW1c%2F%2B1QvVzLcUm8ssjtvz6h80vkMpqst5NtTux7ALqJ2rtDDfIyIpQiIXFxJ08b60PrkV%2BMwgZ%2BgvwY6pgECZgguQmkMEb48xIZrXLcQ3RGG3vJ%2BMUJturoOV6tCHooy8%2BAPkjiWV3H6B5mlmfkFlV9DpXSkweiC8Auw1pGxfcJtEBUFhfD5%2F%2BZCggayIV2eHVFShrR0SRniypBk9w%2BfBXGpmg79ZAE%2BzxQ2Lq5x81l2w3%2F8abAWMft%2F48i1HafOTCG69Uyn0iHBhSTeL0cQm5XbFnPx3%2FYGLpYjLclxc4KDOObF&X-Amz-Signature=b4686cf146aa408629c1b2921e0a23d4ca521c4d971ef3636dda343e412d85a3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRJWE3G%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIHWKGB9ta4qNpSOTNF0Dpl9ZnIc2fHwYTdKkkcJuRXLLAiBXQWBtKO7EGHPBDWGdvQMth2bVd25SCRynedtkyCvgxSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMwh2F79clqYMAY%2FieKtwDYEdpAuOrUWbrNbDlzkrA%2FAQmH8lvOQf4%2Fq7x06ojhGbGDF4yFf6CuNmlM12AUP34446WmYoL7FIAM%2FaMHtuOeWQqrC8%2Fm%2B8cV47zVKhgPqhhORJZe7Dlf0w%2Bf7M5ylbQzjtesKHtwXBC8QtuxLT5xIr6vCYNFrZuLKF0ruyMyORuVSqtx8adceLm9bgt34opki0OWjZ3CvbqR9x7TK1VgSOPZUx6hLug%2BPbKAi0jzumV2tIb8%2Fi5k44SiejzkIsTVpLVPyHpvdyLfcaC0u3acZq5Tutv0%2BHral74o5TEzT9OJPiDrwCh1pqZKoSMa5NJgXkqqva0dII56oSOjxO%2B9KCBmlWYrrLl%2BDCQ4oANcxdl0m0GHywwQnDUIoHy8tw0qUmPaRgZr2MKHv47iloNcCRLxGZggP1YyfBHAL9gt1FFfBAfzBRuS0ww%2BwwaglaMdbe2B%2B24%2BFp4bGMX1DsBfHf2mchdIWFt9nwyGhN%2Bn3DaY08U4Iqj14Yfik8DcfptRnvBulQxiCtZi22fxcEElEUm5qdqZJ7mmr8MV7xRZ5QM%2BjBJtVktW1c%2F%2B1QvVzLcUm8ssjtvz6h80vkMpqst5NtTux7ALqJ2rtDDfIyIpQiIXFxJ08b60PrkV%2BMwgZ%2BgvwY6pgECZgguQmkMEb48xIZrXLcQ3RGG3vJ%2BMUJturoOV6tCHooy8%2BAPkjiWV3H6B5mlmfkFlV9DpXSkweiC8Auw1pGxfcJtEBUFhfD5%2F%2BZCggayIV2eHVFShrR0SRniypBk9w%2BfBXGpmg79ZAE%2BzxQ2Lq5x81l2w3%2F8abAWMft%2F48i1HafOTCG69Uyn0iHBhSTeL0cQm5XbFnPx3%2FYGLpYjLclxc4KDOObF&X-Amz-Signature=ce6c7258d1d45bc91df85223b208ed65b7c3229e7e347ccf7f0d943fc1b45254&X-Amz-SignedHeaders=host&x-id=GetObject)

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
