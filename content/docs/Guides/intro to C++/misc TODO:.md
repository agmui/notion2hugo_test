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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466256EBY7U%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxX1eX6j%2FqZ41lciNMer0a20s1c6XM9O3DittLPbRgFQIgVEAeoXwnA49TbLBHiIRlfPnYF4ERMUC%2BAXD1WBKOC1oqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQhIAwkEVq6CRamnCrcA04Fnyq0BNAqIFT%2BsmMExMMQiuv5ePjdb8C7UwQ2jhEXtVtQE9vibOmyoARElxTy2EFTSnBvEMOQMUbfWuXJfxs3iqh7hDlRK2KyQHHH3H%2Bs3imEp8rdURvD5klf14I1dcw67%2BxfkZrZQfflZ%2BurAk0uhaBa89liIjL7M1RmYuNO3z71TRPpPtHb3n%2FSz4gLlel6FytQqWqKKYzFC05VIenM6zk3bxZQjg864%2FiRBNV5j56O5vDladjDo5%2Fv%2FPE6wJJwOyaT9c6n%2Bz84ZrNCsLHroLssvj5JrdC5HmC97AcYNFk5gOdKXtryIim8V9alofJFGorslI2xkjtZHPzJkyyb7rKCXenvwcLDVhmkTVPQ6dhqF4TS70WirwESJXn%2BhfkFGTKwOIDVEXREdCgGpqMxdimyvZk8IednLtJ61K%2Ffyv0wW%2Fd0BElLd1OXBxI6tvJ0Dz5PviiYl7Hdqw2sGDv%2BMVo315GL2h46YCpXJXgU6Rbe6Nj5K%2Fi5dmQfa4NS2x2jVWJOJsJVt1oNN9rz%2Bmo5%2FzmzRkKgmwHrQ0rjGVVGVy1oKy99OXl9V09uk9CpCZH4lCU6NcsE9uWbGofeQX2yldtlQ0XXZoTYzMTcs1E%2FLbH%2BJXFNan2bv%2B7qMNLevb8GOqUBpuIMIxTR2I2Ub%2BDbdSQBZ5Z6kR5NcKMC5swzAjlZxk5L4vAzR06Dw0JclK2QTahbvmokID3MJDfjc6%2BAK6I5OQnutG5uUznaVyBGl%2F9PKT3ytmjwh8ZtlB4F61Kwx7HNhwvr4fp3hbbf013fzMSb64htlW0dJ0V4M9CKC6CR63eltZJw%2Fnu%2F66ZLkE4hl0kFkiUJjywGIyOEsxaAu0Gy1zBokA%2B3&X-Amz-Signature=19b0a7259d0a1f14fc0265493f0f3889080dbf9a492cb26e02bf717187ecf9e6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466256EBY7U%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxX1eX6j%2FqZ41lciNMer0a20s1c6XM9O3DittLPbRgFQIgVEAeoXwnA49TbLBHiIRlfPnYF4ERMUC%2BAXD1WBKOC1oqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQhIAwkEVq6CRamnCrcA04Fnyq0BNAqIFT%2BsmMExMMQiuv5ePjdb8C7UwQ2jhEXtVtQE9vibOmyoARElxTy2EFTSnBvEMOQMUbfWuXJfxs3iqh7hDlRK2KyQHHH3H%2Bs3imEp8rdURvD5klf14I1dcw67%2BxfkZrZQfflZ%2BurAk0uhaBa89liIjL7M1RmYuNO3z71TRPpPtHb3n%2FSz4gLlel6FytQqWqKKYzFC05VIenM6zk3bxZQjg864%2FiRBNV5j56O5vDladjDo5%2Fv%2FPE6wJJwOyaT9c6n%2Bz84ZrNCsLHroLssvj5JrdC5HmC97AcYNFk5gOdKXtryIim8V9alofJFGorslI2xkjtZHPzJkyyb7rKCXenvwcLDVhmkTVPQ6dhqF4TS70WirwESJXn%2BhfkFGTKwOIDVEXREdCgGpqMxdimyvZk8IednLtJ61K%2Ffyv0wW%2Fd0BElLd1OXBxI6tvJ0Dz5PviiYl7Hdqw2sGDv%2BMVo315GL2h46YCpXJXgU6Rbe6Nj5K%2Fi5dmQfa4NS2x2jVWJOJsJVt1oNN9rz%2Bmo5%2FzmzRkKgmwHrQ0rjGVVGVy1oKy99OXl9V09uk9CpCZH4lCU6NcsE9uWbGofeQX2yldtlQ0XXZoTYzMTcs1E%2FLbH%2BJXFNan2bv%2B7qMNLevb8GOqUBpuIMIxTR2I2Ub%2BDbdSQBZ5Z6kR5NcKMC5swzAjlZxk5L4vAzR06Dw0JclK2QTahbvmokID3MJDfjc6%2BAK6I5OQnutG5uUznaVyBGl%2F9PKT3ytmjwh8ZtlB4F61Kwx7HNhwvr4fp3hbbf013fzMSb64htlW0dJ0V4M9CKC6CR63eltZJw%2Fnu%2F66ZLkE4hl0kFkiUJjywGIyOEsxaAu0Gy1zBokA%2B3&X-Amz-Signature=d5f3b058f8b38c21b8f347e4290bfaa7555c3373e032a9192c410271a5546c60&X-Amz-SignedHeaders=host&x-id=GetObject)

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
