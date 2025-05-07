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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVDDKBOE%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiQLjsKETu%2Br2DpQ%2FsO0ySXjp0gLTyEwIz6qMtLa2iVAiBwrXLtuq%2Bjwv%2FstipD4vErtuzZHHxTBZbjMvGrCd8ykir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMctKoqRUbrIUoCdy2KtwDXtC8VVOxT74pJ8WBKBxcX7f9R9LEBohP6NqcHlj2Z%2BM2dKVydoOcCWXd1oDvX69QgZ7%2FovacNIqH%2BU8hN2UBvQXj3%2FAloSGc7WV2jV8tsI101wvV93gDJwTEEq5erzly2TKVfh23WPloqDD15U3Fk3xASp751ukSDN0cHwigCH1of60JqlvPNHTPPRAJ8T%2BRb6poXJ6Y8ttMewYPbqN9cS5tfD%2Few0XHNrgjRurLZDLxpFOuR%2FGaM3szaBjxFzGQ3OdY9RHKShONXUhBdZY%2Fal6ioxXMgYlamIC4Cpf8MiU%2FDtwx5dKQs3Xjw2BjCYB8KwicykuLt%2Bm6njgMWQ4TIv1L920IU7dNT98N3acH6eA4C1M5ZvKiLHwzVXGmBVUIGbhoiHOhoP1EkCzCJw0CIfG3K2bbcDbbvEYUvNAoUVYDW1ogVJ8%2BdV1Mgkk4hOCQ%2F%2FrR10XROAcMZH4pg%2BQN7E9fe8cv6pZ6t27%2FOB8lhxgvP1MyQ3AnSwyR67AY7%2BvrfclEwqn58X5fkcnSjaORbfSe8Rrm6x0eH9Nz%2B8YHYmF4calzo%2BQGC51Zn0H4kZ06vkIcauxuog33vP8DuDOoBSD6Y7M9yUR%2FRR8ykOfWtg%2Fe1wvA6YcWDJ0Tfoww0fDrwAY6pgH9S8i9SLXERAP6bIvpnFTmCLdR%2FGlLStBP%2Bl5UCid3bfgBPj6zlDhHzow8M5YDndBDB0Jd3SbkPFi6yhwE7nRer%2BP3OHM58wwb4ONT0nKfPxe%2F63rDJJFCVQ1sx3C1zUMyahTPDge6GuO6%2BqdB91ubyJ8sTjiGRYnYZb273vcRQpjX%2F0GEH4ykaMdPhOFqRVX2EFFGGPYiAJCZ21wDE0fL6nX%2FPOh9&X-Amz-Signature=52d2d84205bff28528296e980bd9c6c3d19d95a9b298fcc74c5ae6ded1e9b657&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVDDKBOE%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiQLjsKETu%2Br2DpQ%2FsO0ySXjp0gLTyEwIz6qMtLa2iVAiBwrXLtuq%2Bjwv%2FstipD4vErtuzZHHxTBZbjMvGrCd8ykir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMctKoqRUbrIUoCdy2KtwDXtC8VVOxT74pJ8WBKBxcX7f9R9LEBohP6NqcHlj2Z%2BM2dKVydoOcCWXd1oDvX69QgZ7%2FovacNIqH%2BU8hN2UBvQXj3%2FAloSGc7WV2jV8tsI101wvV93gDJwTEEq5erzly2TKVfh23WPloqDD15U3Fk3xASp751ukSDN0cHwigCH1of60JqlvPNHTPPRAJ8T%2BRb6poXJ6Y8ttMewYPbqN9cS5tfD%2Few0XHNrgjRurLZDLxpFOuR%2FGaM3szaBjxFzGQ3OdY9RHKShONXUhBdZY%2Fal6ioxXMgYlamIC4Cpf8MiU%2FDtwx5dKQs3Xjw2BjCYB8KwicykuLt%2Bm6njgMWQ4TIv1L920IU7dNT98N3acH6eA4C1M5ZvKiLHwzVXGmBVUIGbhoiHOhoP1EkCzCJw0CIfG3K2bbcDbbvEYUvNAoUVYDW1ogVJ8%2BdV1Mgkk4hOCQ%2F%2FrR10XROAcMZH4pg%2BQN7E9fe8cv6pZ6t27%2FOB8lhxgvP1MyQ3AnSwyR67AY7%2BvrfclEwqn58X5fkcnSjaORbfSe8Rrm6x0eH9Nz%2B8YHYmF4calzo%2BQGC51Zn0H4kZ06vkIcauxuog33vP8DuDOoBSD6Y7M9yUR%2FRR8ykOfWtg%2Fe1wvA6YcWDJ0Tfoww0fDrwAY6pgH9S8i9SLXERAP6bIvpnFTmCLdR%2FGlLStBP%2Bl5UCid3bfgBPj6zlDhHzow8M5YDndBDB0Jd3SbkPFi6yhwE7nRer%2BP3OHM58wwb4ONT0nKfPxe%2F63rDJJFCVQ1sx3C1zUMyahTPDge6GuO6%2BqdB91ubyJ8sTjiGRYnYZb273vcRQpjX%2F0GEH4ykaMdPhOFqRVX2EFFGGPYiAJCZ21wDE0fL6nX%2FPOh9&X-Amz-Signature=d7e7193f3b07f00470825426ec480a7732f1685b2aadbfda5d6e2dffc94fbcfc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
