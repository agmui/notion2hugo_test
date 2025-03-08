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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYB6CATB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDe3zW30coqngmd4UZRmRg5JZCntk6B0ROCP%2F1m5ERjhQIgNWwlGSir0ZKzU1wMW2L9h4Y%2Fwp83rilbBvR3Zbdpa48q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDAW%2Bh%2FEYKRCxumFddircA5x4D9iGiTN4EG57XSUOcwiwFd8lHfJ3ZSQXof2TdaJEdjoTBC3hgESJi3B6R%2BdhkcIV9wvpEshXtF2rFZDlbum4hnuDJLIbAY2veipfQlBwmrOELEsGgh0yLxPnK%2FAvKeMXeqxDsWcgTG4LD8KUAao2vmadxUhOhmXOKSWitcjx%2F8lzvfnDAAkzrIuM0rbEbYNJhiocysljgdZAmat3uf5tCR31kcwTqQ8rxVK%2FMsqkXbTkdRKzO%2BtYF57A9qhUhXFzyJhGaQ8OXt%2Bw6oDIpv%2BqWRSSOdQ%2BRA2ggmyIFfZcxvHMfzr%2F9wSe%2FR2Z6qN5zXU1kNGGO%2BDUXuhyokT2Ryd%2F618SvCK5UeN5FF3QJdXmQiQgFr82NfSqQtNtwn34sIvLVji2OxX95uJNLccwMyHjZcVGf1iw7EbNcZCIiTHj3mnvNgTKvNNlX6JoFrMtN9zFx9BN%2FEErcFbyCZcGvDtvKyPH292MVjqawzpO8FTtKBiLmoJanEN0wx9ptBl8%2BavpVZopU4n4hAVkw0dQwlsqgzyWecjFq%2Fwjs4mSpZJ34w%2B9Fcp4UsUdRSZEYQLz5zCdDQB36O4vcRvoiE4xhWaTeZ3HLmK5Njy6dYMXRZ%2FK%2BxpxGOTJFCg55VtBMM%2Fysr4GOqUBvMOd5BRd2qLyBfzmErCT%2BiPZLyrpI%2Fjh%2F7cCy%2FxzJjwJ1JYpEO1xvoOHEdAQunxmgPyxmnQyL4WYzfBAnNaEt8cwD5tM6TrtN4nbuw3XNNU5k05bdDfj4E0cL5CJG8I3TBGp6hajFX1apUlBmQ9Z6oREWZtQE2D0IXF1ThPHVJs6han5J4N%2FI3OYhdtSI7Ot%2F6WaT5rNaml7ZYRkM%2FAaPO5VdBlC&X-Amz-Signature=b3265344f4e54da2abf066e16c2a2bb7ad6fe1e6a51f3d5af021a740e678707d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYB6CATB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDe3zW30coqngmd4UZRmRg5JZCntk6B0ROCP%2F1m5ERjhQIgNWwlGSir0ZKzU1wMW2L9h4Y%2Fwp83rilbBvR3Zbdpa48q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDAW%2Bh%2FEYKRCxumFddircA5x4D9iGiTN4EG57XSUOcwiwFd8lHfJ3ZSQXof2TdaJEdjoTBC3hgESJi3B6R%2BdhkcIV9wvpEshXtF2rFZDlbum4hnuDJLIbAY2veipfQlBwmrOELEsGgh0yLxPnK%2FAvKeMXeqxDsWcgTG4LD8KUAao2vmadxUhOhmXOKSWitcjx%2F8lzvfnDAAkzrIuM0rbEbYNJhiocysljgdZAmat3uf5tCR31kcwTqQ8rxVK%2FMsqkXbTkdRKzO%2BtYF57A9qhUhXFzyJhGaQ8OXt%2Bw6oDIpv%2BqWRSSOdQ%2BRA2ggmyIFfZcxvHMfzr%2F9wSe%2FR2Z6qN5zXU1kNGGO%2BDUXuhyokT2Ryd%2F618SvCK5UeN5FF3QJdXmQiQgFr82NfSqQtNtwn34sIvLVji2OxX95uJNLccwMyHjZcVGf1iw7EbNcZCIiTHj3mnvNgTKvNNlX6JoFrMtN9zFx9BN%2FEErcFbyCZcGvDtvKyPH292MVjqawzpO8FTtKBiLmoJanEN0wx9ptBl8%2BavpVZopU4n4hAVkw0dQwlsqgzyWecjFq%2Fwjs4mSpZJ34w%2B9Fcp4UsUdRSZEYQLz5zCdDQB36O4vcRvoiE4xhWaTeZ3HLmK5Njy6dYMXRZ%2FK%2BxpxGOTJFCg55VtBMM%2Fysr4GOqUBvMOd5BRd2qLyBfzmErCT%2BiPZLyrpI%2Fjh%2F7cCy%2FxzJjwJ1JYpEO1xvoOHEdAQunxmgPyxmnQyL4WYzfBAnNaEt8cwD5tM6TrtN4nbuw3XNNU5k05bdDfj4E0cL5CJG8I3TBGp6hajFX1apUlBmQ9Z6oREWZtQE2D0IXF1ThPHVJs6han5J4N%2FI3OYhdtSI7Ot%2F6WaT5rNaml7ZYRkM%2FAaPO5VdBlC&X-Amz-Signature=35f9a4af138a3387b91cc277025dfe61a8d6608bde291ca11814d812b8d5e7b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
