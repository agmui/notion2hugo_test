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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGK3Q5W3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIB%2FxWy5vp0wnL1MIIMA0CJPOa0I6qQJ19m7HDGYhOm0RAiBRrssXkyBtThTyqONKMDbYlB43eNl%2FQ31j7RQRyrwcgCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjjpas2qQClPL8fgaKtwDtNo9eqdMcTn%2Bn0gOXjPNZ7amsebX7PgpmozC5RqmuEKwg7kdgRMwrSI3yjWiRYAnj9xMB3gfU8FYyh2DlijritoPdDMzBx8OOAW0VKbI%2BKOD22ZbbtnXWcQIKf1zqMsIEd1Py1%2BGlfaVS2IuD4tFZmss3LlzokwAWSWtwYXn74b%2BJjZ%2FXs8ddxExY5mVSa54WNQOvtJpLC9O8OaQrzPD3fPjK%2F1cQpQEF%2F36fskN7ZfOmmfUNjBI0IGfPfsTIvv3Nxgx%2FKBIXXGZorrYdUROXRy%2BWvg3Oz1HQahbtp9ZYtaxhhgK0Cgt7pe54r9VfnaW7zODx%2BVKKbHsCHHFYwf5K2s64NYDfr8yBbzqxg6jNvbpjeSyVeWSIxHLORxpRpIS3QVzD0m2PBel%2BEaKn%2BVWiJLllBiTaqjZrMpHq3WSCP1a%2BX5rHkWU%2F281N90QRmbmAr6BauVDCQmlNG5XY%2BM1pYEgFg7viB63E0EM%2BVIQ1LSo3lV0xHwqzgnLQgFc1vlGAiQ8C04%2FuHhW7C1VoiZMpstb6fHnfIsxwSTBce4lSNMaihtSTijSJNLK22r%2BPmPOb%2Bb%2FWYySn0QBY4u4ZymX2xQjb5PgsiyvSrlJsgkhgXsqA2WYv4jFtFfJ5O4ws%2Ff3vgY6pgFTtxswP6V1LFnTwuP7wm%2FWwFJWOi7CjgoQuZwltfGMP12BW%2BBjnHhy7LpkuvyT%2BkwxqThxvRBibFf6SYrOTs5G2G%2Fl7r69pwD%2BESdco1CiT13PoWtn0Dkp74ObmUSbGrC48JQKhmCeZn2mmwN9gmibuKQZWlowRGQR1HAgwFLcOsdd7eWXGbzw%2FsVJ00icdA50CJsZ8Mu3TSASg%2Fkw4CZjYna4DGK2&X-Amz-Signature=19f84716a62b0dddc8366709bad2cde66446194ee0947b5dde009c3772b1e931&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGK3Q5W3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIB%2FxWy5vp0wnL1MIIMA0CJPOa0I6qQJ19m7HDGYhOm0RAiBRrssXkyBtThTyqONKMDbYlB43eNl%2FQ31j7RQRyrwcgCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjjpas2qQClPL8fgaKtwDtNo9eqdMcTn%2Bn0gOXjPNZ7amsebX7PgpmozC5RqmuEKwg7kdgRMwrSI3yjWiRYAnj9xMB3gfU8FYyh2DlijritoPdDMzBx8OOAW0VKbI%2BKOD22ZbbtnXWcQIKf1zqMsIEd1Py1%2BGlfaVS2IuD4tFZmss3LlzokwAWSWtwYXn74b%2BJjZ%2FXs8ddxExY5mVSa54WNQOvtJpLC9O8OaQrzPD3fPjK%2F1cQpQEF%2F36fskN7ZfOmmfUNjBI0IGfPfsTIvv3Nxgx%2FKBIXXGZorrYdUROXRy%2BWvg3Oz1HQahbtp9ZYtaxhhgK0Cgt7pe54r9VfnaW7zODx%2BVKKbHsCHHFYwf5K2s64NYDfr8yBbzqxg6jNvbpjeSyVeWSIxHLORxpRpIS3QVzD0m2PBel%2BEaKn%2BVWiJLllBiTaqjZrMpHq3WSCP1a%2BX5rHkWU%2F281N90QRmbmAr6BauVDCQmlNG5XY%2BM1pYEgFg7viB63E0EM%2BVIQ1LSo3lV0xHwqzgnLQgFc1vlGAiQ8C04%2FuHhW7C1VoiZMpstb6fHnfIsxwSTBce4lSNMaihtSTijSJNLK22r%2BPmPOb%2Bb%2FWYySn0QBY4u4ZymX2xQjb5PgsiyvSrlJsgkhgXsqA2WYv4jFtFfJ5O4ws%2Ff3vgY6pgFTtxswP6V1LFnTwuP7wm%2FWwFJWOi7CjgoQuZwltfGMP12BW%2BBjnHhy7LpkuvyT%2BkwxqThxvRBibFf6SYrOTs5G2G%2Fl7r69pwD%2BESdco1CiT13PoWtn0Dkp74ObmUSbGrC48JQKhmCeZn2mmwN9gmibuKQZWlowRGQR1HAgwFLcOsdd7eWXGbzw%2FsVJ00icdA50CJsZ8Mu3TSASg%2Fkw4CZjYna4DGK2&X-Amz-Signature=bb5e8a872cce705f002a6171b72420e549fb5ac0d85b05a7b013b4b1d477c9d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
