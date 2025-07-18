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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2OHPY6L%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD3nchCY8N5VOxvgh3%2FQrNWnfi4yo1Q%2BedQRYvUqAs5hAIhALTKAY5jFH0RZ0VJJSFc5teZVOmGxlvTDAbn7tlC0b5lKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJHx7jMBaPlUyW4Qoq3AOd8%2Bo3k7b6TouJfuLUcFcKkOA5GDxNUpL8R7pbgZ9odB9Di4vKkinpFUfMLiiwFC%2FfpPPCEpZ2xEb7FqwRJJOaIMd7e%2BfvvGP8CrjV9Yaj8JyAGkHYp36GZGCR1lpT%2B%2BsvBirUziPjoNq2R8mGWLffs3Y9cg%2FZlNzmn2kQ0O1RSjrBY62gRq69M5tE5zDazisJdpZX9qpbZiBbtYnZqHHQt09E%2Fcf93X2kgK3G2BSGxqEaBQSJZ0Iy9JHLtrc%2FV0yvxpJE%2BfTyJPv%2BTtJnh%2BelPbBanskl9uOeB21MnTfOth0Yo0IJjqmJcJARZNLF%2BaGr8Js5VFlikh97x7CQmZT14DXCu3kDVorOym17Hfadwzz5uce62qsTvm0zcqK2fudLeJezl4rCJn%2B7MmJu4mfHZOjx8bm4Fq%2FxCH0Sia4EYUt2XbqFJWXD4%2BiXI5g57niZ%2F%2BmbkV1CIZmG8q40su%2FfisgsjZWV3ukBtZ%2BplHoRr3fUFUYUcobkKIQP8rutEvKzO9mMAnh5VV%2Br1n6TfC4jOogROQy2J6grB58I8FUbdGtoVZUD%2BpuDWB%2FhY2a2L%2FzlSxRPD%2BKYd77%2BtnDElWbo85SW60Du4ryIc2bsPBnUQFIbJe3to2UK5JKjejCL6%2BnDBjqkATW2%2FGbcX59UurbvIUoVujbK5yPBR3PgsdWnFtGEP16hXZTFCFVn7xkMYw5uUvf%2BCbqZHdxv35sxpm7I7kNYAkD%2FDGRvIzpP9H8D0gR%2Blj2FTVLBiNaDiIojO81mE7B06flVZhy3gExy23efmuyKbsbexg2n%2Foe4yhkZeU66%2BrLNpx9fsV%2F6y8Dgq1oBXKRMBcB6hSBYFql65nKpezthBdeTXtv9&X-Amz-Signature=df7121d9b9d47d764bc54b60c7f48009fcea25ea766f4d1b977f558796cf2f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2OHPY6L%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD3nchCY8N5VOxvgh3%2FQrNWnfi4yo1Q%2BedQRYvUqAs5hAIhALTKAY5jFH0RZ0VJJSFc5teZVOmGxlvTDAbn7tlC0b5lKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJHx7jMBaPlUyW4Qoq3AOd8%2Bo3k7b6TouJfuLUcFcKkOA5GDxNUpL8R7pbgZ9odB9Di4vKkinpFUfMLiiwFC%2FfpPPCEpZ2xEb7FqwRJJOaIMd7e%2BfvvGP8CrjV9Yaj8JyAGkHYp36GZGCR1lpT%2B%2BsvBirUziPjoNq2R8mGWLffs3Y9cg%2FZlNzmn2kQ0O1RSjrBY62gRq69M5tE5zDazisJdpZX9qpbZiBbtYnZqHHQt09E%2Fcf93X2kgK3G2BSGxqEaBQSJZ0Iy9JHLtrc%2FV0yvxpJE%2BfTyJPv%2BTtJnh%2BelPbBanskl9uOeB21MnTfOth0Yo0IJjqmJcJARZNLF%2BaGr8Js5VFlikh97x7CQmZT14DXCu3kDVorOym17Hfadwzz5uce62qsTvm0zcqK2fudLeJezl4rCJn%2B7MmJu4mfHZOjx8bm4Fq%2FxCH0Sia4EYUt2XbqFJWXD4%2BiXI5g57niZ%2F%2BmbkV1CIZmG8q40su%2FfisgsjZWV3ukBtZ%2BplHoRr3fUFUYUcobkKIQP8rutEvKzO9mMAnh5VV%2Br1n6TfC4jOogROQy2J6grB58I8FUbdGtoVZUD%2BpuDWB%2FhY2a2L%2FzlSxRPD%2BKYd77%2BtnDElWbo85SW60Du4ryIc2bsPBnUQFIbJe3to2UK5JKjejCL6%2BnDBjqkATW2%2FGbcX59UurbvIUoVujbK5yPBR3PgsdWnFtGEP16hXZTFCFVn7xkMYw5uUvf%2BCbqZHdxv35sxpm7I7kNYAkD%2FDGRvIzpP9H8D0gR%2Blj2FTVLBiNaDiIojO81mE7B06flVZhy3gExy23efmuyKbsbexg2n%2Foe4yhkZeU66%2BrLNpx9fsV%2F6y8Dgq1oBXKRMBcB6hSBYFql65nKpezthBdeTXtv9&X-Amz-Signature=da35868b2303793c27e32684ba27b9c3e2f06e7bb5eda18b0902ebdd645cfd53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
