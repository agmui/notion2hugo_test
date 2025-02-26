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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPP4XYFI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCMr3KSGByEJvHhiZAfS4FNtPHmr8DNd9WaQJc4XgAbNAIhAJqY2uKjBYj1TUaIUvT2izi0smXcb268dmr9slybt%2FyCKv8DCFEQABoMNjM3NDIzMTgzODA1Igwdy7NYKoaG4x1xopYq3AO7c5zFr3PAEBfwr4Vxlvt7%2FVuy%2BtOdffjNeQUsVkvH%2BsFt0ULvnWfegRiAks8KXGEpMnp%2BAotYTik6zTDNFdJcu%2FfK7DwYTtqs%2BUp%2Bd8CU57BfheJn8KxBAUnzbhclCZsWDKgwd%2B8zjxBelggI2Mdygp7GQ1V21ehUZ8mWq%2Bx5weM%2FBDWx%2BRdlOaiDoTjTyIWWINET%2FiVzNQPJIt48UiNFGaI9dwOFDbPmPY2piUSOMA9boWchhcn8e1lmOihmA0BAZ3ao6DJSoRuoXIjH5X6V5wO9s0msF6GGHjid2szxW2WEEPC22cpT0D%2Bf21QVzywBULOhoWfVLtkNGNkvLe0yKHpzoe1sWnag24lzrFV1GA1WAljddVBauJX07tAruSL9LeTDlRxl1vx1SYAkTDcwXKXJMUob2hQR85il9dW2N1Q7fYNt8eiYYoz%2B%2FdXC4cR5d2h8cflhAQkcSZlx004yuK65PiQqyVi2vuex2rnefxmGGMDxRXS37sCgEN%2FLYAloMzgJ6etUlcbB5E%2FcChYy%2F3kxt9ajq3C%2Bx9vpSTlyjHdmn8rgJaHCGHfNrExrRiEQZe%2B5fA1k8h4hu%2BBC%2BLydXwS71L5pRpFRPZ1%2FB9ujgrkKUvLUddQzrVfDZDDyvPm9BjqkAVIKiPI9iXnWOGk6SqjNTkZjkbFmt0tQBsJBx3YKKoFA57hPa3esCbsmV0%2BkU8HCsg6DuUjDoJXVD%2FLDoaqXWf%2BW22rNmDjmDds%2FyOkuRloU8JwWZDBWCMLS0XqZp8WZqsHjt897p4MQZAZJjlnRt6lVL4czLGSlh2siALmfUdXTbMu7xCUMNZ%2Bevxg3V1at58GDmQMtNeItjlqVAMkqVgE804Vq&X-Amz-Signature=87a9e812cfd3ae563a8aeab15922b179cfbd6986d6cf91d0a936625ca9e0f63e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPP4XYFI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCMr3KSGByEJvHhiZAfS4FNtPHmr8DNd9WaQJc4XgAbNAIhAJqY2uKjBYj1TUaIUvT2izi0smXcb268dmr9slybt%2FyCKv8DCFEQABoMNjM3NDIzMTgzODA1Igwdy7NYKoaG4x1xopYq3AO7c5zFr3PAEBfwr4Vxlvt7%2FVuy%2BtOdffjNeQUsVkvH%2BsFt0ULvnWfegRiAks8KXGEpMnp%2BAotYTik6zTDNFdJcu%2FfK7DwYTtqs%2BUp%2Bd8CU57BfheJn8KxBAUnzbhclCZsWDKgwd%2B8zjxBelggI2Mdygp7GQ1V21ehUZ8mWq%2Bx5weM%2FBDWx%2BRdlOaiDoTjTyIWWINET%2FiVzNQPJIt48UiNFGaI9dwOFDbPmPY2piUSOMA9boWchhcn8e1lmOihmA0BAZ3ao6DJSoRuoXIjH5X6V5wO9s0msF6GGHjid2szxW2WEEPC22cpT0D%2Bf21QVzywBULOhoWfVLtkNGNkvLe0yKHpzoe1sWnag24lzrFV1GA1WAljddVBauJX07tAruSL9LeTDlRxl1vx1SYAkTDcwXKXJMUob2hQR85il9dW2N1Q7fYNt8eiYYoz%2B%2FdXC4cR5d2h8cflhAQkcSZlx004yuK65PiQqyVi2vuex2rnefxmGGMDxRXS37sCgEN%2FLYAloMzgJ6etUlcbB5E%2FcChYy%2F3kxt9ajq3C%2Bx9vpSTlyjHdmn8rgJaHCGHfNrExrRiEQZe%2B5fA1k8h4hu%2BBC%2BLydXwS71L5pRpFRPZ1%2FB9ujgrkKUvLUddQzrVfDZDDyvPm9BjqkAVIKiPI9iXnWOGk6SqjNTkZjkbFmt0tQBsJBx3YKKoFA57hPa3esCbsmV0%2BkU8HCsg6DuUjDoJXVD%2FLDoaqXWf%2BW22rNmDjmDds%2FyOkuRloU8JwWZDBWCMLS0XqZp8WZqsHjt897p4MQZAZJjlnRt6lVL4czLGSlh2siALmfUdXTbMu7xCUMNZ%2Bevxg3V1at58GDmQMtNeItjlqVAMkqVgE804Vq&X-Amz-Signature=55c5996e9eb29d5713342287143a9a186267698fa680e67222efde19c50c91ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
