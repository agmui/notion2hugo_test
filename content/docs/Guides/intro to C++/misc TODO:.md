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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMOBSLN4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCCc89A%2FmotqKCVRnHt3uvdQpQrznliOHkf4b7EO2ja4gIgYLcBeFZtyqOIb6kulJbZhooGyWzMQ0%2FoMMNL%2BezFYYQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAejeoNI%2BPfxubthpCrcA3InLkkLw7Pw5EEN15biy7fmmYB7h03vNx6Wf4ZKejDsNZACIjgChQzi5iEhkmLwNGBg6%2F9nakhCkWr3qdvauFvkBjf2IWxPQMhzfcTwyZH%2FWCVywl5IGlAaY%2FlOJGQ0eQvqLwCd7hNdF47JU503TomMY4errVEicvOY1LBP%2BbfTISwpsj9sjbq0Cu28v3UAkUNBPCFo7Eyyd773p7C0CljdET0kdgqGfORwugNlbaY%2BvAJ0dxtJpEpnUJooXrr9n75j6EG1icRIf%2FhqfqibXt%2Bp4jcRTFoPOrI5m6gsfSrdmoelJXGEQKzfMj%2Fl7TWVopsuzEWNl%2B3Fbkn2NXxWOXTH5VK2eqbMXXx8RBkZOTrGhx1HHHj5ha1IPdLLGpV5N%2FATyv8sQxSuB1wKoU1N7bf6Nq%2ByBuipvB3bklZn3%2FOgmvD6RDJxyvQx%2FzqWxkRU95FrNgSVtVpeQ3QL%2B45VlEZ7zFyAoaE0tnzWJ%2FnffDaoMEuGTXBlCKV8zaYI3q32Wu4A7uVwRxzCOsy6w%2Fu48WsGvgwskklbqei%2BvAUgXRyLqgxVMeZGkBZ0cM2nSPLPAVAPq6oWI4islNZTIi9azloIVofY0Mj0eihugZ5tRg%2FDEnEMKob4CkLdvyqQMLuY874GOqUBgbZ5RBfXUKDA13XfKUlV27ZP6K6jmyjCqwni%2BlRuLRVv2egM9brSuoPS%2B3tiTyrh0W2lvsY%2FgfjINEMR09DIyITC5hq4GWE5jPXuVD8sHRCwtpY5Ag6hSY4hLevhV8K6pguI%2B0hmh4u8giawPXzI1mjP8a237B712GI0e6%2FBXL5599lf4NWDjEu9BRauQO8LvIhfv%2BnQtCZpQIjOOTIlYfiD%2Bgd8&X-Amz-Signature=5de43e845c809d13415687ced0d4b5981fcd0278551a35d3f1a1b507932c0cbe&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMOBSLN4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCCc89A%2FmotqKCVRnHt3uvdQpQrznliOHkf4b7EO2ja4gIgYLcBeFZtyqOIb6kulJbZhooGyWzMQ0%2FoMMNL%2BezFYYQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAejeoNI%2BPfxubthpCrcA3InLkkLw7Pw5EEN15biy7fmmYB7h03vNx6Wf4ZKejDsNZACIjgChQzi5iEhkmLwNGBg6%2F9nakhCkWr3qdvauFvkBjf2IWxPQMhzfcTwyZH%2FWCVywl5IGlAaY%2FlOJGQ0eQvqLwCd7hNdF47JU503TomMY4errVEicvOY1LBP%2BbfTISwpsj9sjbq0Cu28v3UAkUNBPCFo7Eyyd773p7C0CljdET0kdgqGfORwugNlbaY%2BvAJ0dxtJpEpnUJooXrr9n75j6EG1icRIf%2FhqfqibXt%2Bp4jcRTFoPOrI5m6gsfSrdmoelJXGEQKzfMj%2Fl7TWVopsuzEWNl%2B3Fbkn2NXxWOXTH5VK2eqbMXXx8RBkZOTrGhx1HHHj5ha1IPdLLGpV5N%2FATyv8sQxSuB1wKoU1N7bf6Nq%2ByBuipvB3bklZn3%2FOgmvD6RDJxyvQx%2FzqWxkRU95FrNgSVtVpeQ3QL%2B45VlEZ7zFyAoaE0tnzWJ%2FnffDaoMEuGTXBlCKV8zaYI3q32Wu4A7uVwRxzCOsy6w%2Fu48WsGvgwskklbqei%2BvAUgXRyLqgxVMeZGkBZ0cM2nSPLPAVAPq6oWI4islNZTIi9azloIVofY0Mj0eihugZ5tRg%2FDEnEMKob4CkLdvyqQMLuY874GOqUBgbZ5RBfXUKDA13XfKUlV27ZP6K6jmyjCqwni%2BlRuLRVv2egM9brSuoPS%2B3tiTyrh0W2lvsY%2FgfjINEMR09DIyITC5hq4GWE5jPXuVD8sHRCwtpY5Ag6hSY4hLevhV8K6pguI%2B0hmh4u8giawPXzI1mjP8a237B712GI0e6%2FBXL5599lf4NWDjEu9BRauQO8LvIhfv%2BnQtCZpQIjOOTIlYfiD%2Bgd8&X-Amz-Signature=fab7172108fcf66fef8a35e7b73d78085bf7976e53d259770804f0a83089ef84&X-Amz-SignedHeaders=host&x-id=GetObject)

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
