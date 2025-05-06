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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAAFVVU4%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Bhg5ZPsokX6ETUbJVZAxUcIaRI5k90qfQkCgmhiLfwIhAI3Xb5QKPdipU8wWJrysLjuO0Y3yn7vFfbqCWS2iJ9eyKv8DCEMQABoMNjM3NDIzMTgzODA1IgwCLPeowohslGGGLOwq3AOTx4lf7vTEloQ0Jl9xTTBVw5na%2B59HFVhD4b%2BYuld0%2FCrQ9ZYj34ueI3inqlJFLF%2FLYzzPBPYoF1YTkTih%2Fzvi2ouzTdvRf1vTZeMQ7r%2BKh%2B2OIl6l0KOZuqamiJqJqalt5DE4krzDjQw1ur1S5pSMOFc9tr6ll80gB%2F2GhGLYAOQHU4pWV%2FqNXFBGdKWb75I7LFnaWQNpiyCH5vIy47%2FsP2JtdaWsmizxBgrJLBXp%2Ba0l%2FksWm90%2Bj8vtik2mN5seJfrwmXAEXQHQm1dXt0s5nV74j1siUAA%2FFgy1ARSJj3qM3q1jEiDcyDPagdtgHK9PQ3zXF1Wgv%2By6u9coDE6PJDt0gsbsheYJp7bI%2FtCsqidppq8pxMHAh%2B1ZozHz8xtCuc9SUvCjQga1RDDojnBF5OoSwvhFJUePCeJMQxNahwbUbySG3EiZMZc3oP%2FXKJb4IBslciMH%2FYmfdUvyw%2BxB5eZjN%2F0jKne02AMinGK5G2jId3N%2FeAkpM1Wj8wX8M0T9%2FazqPXZUqBtu%2FgGJjPryGEpveoWz2Wk0q%2FwtD42Hbei6DOJoZ%2BSH3ly4vI1Ea8v10TacuxrXEXw3e13vVWzL82baMGkIS1Kv6V9b%2BzUtflTFVKtWrNiiRp8SjjCbw%2BfABjqkAb%2FNjYRqclf5hPQ7ltY%2B%2BrjJ1o7FrS%2FesNzid8jy0uFOoxOB4GocyIuOhiMzqrskEwoD7aivWiriXNRnUG9wyiH7%2FeLF6Gk%2BYZqBQuCvCUlzGgGGohdD8CFCA0MdQU%2FQZZ6tefimFFGmBTNSa9PJTUkMydGW8wSVmY2EaI2M34aLYqAmco8ZohtQ0HOLH%2F5JIOygqm32fyZzMdGQvCKzI2yZfcHF&X-Amz-Signature=ebb6d19be137c918b2060dbea25036c1f825a7b97e61e9988dc4eff55cbd62fe&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAAFVVU4%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Bhg5ZPsokX6ETUbJVZAxUcIaRI5k90qfQkCgmhiLfwIhAI3Xb5QKPdipU8wWJrysLjuO0Y3yn7vFfbqCWS2iJ9eyKv8DCEMQABoMNjM3NDIzMTgzODA1IgwCLPeowohslGGGLOwq3AOTx4lf7vTEloQ0Jl9xTTBVw5na%2B59HFVhD4b%2BYuld0%2FCrQ9ZYj34ueI3inqlJFLF%2FLYzzPBPYoF1YTkTih%2Fzvi2ouzTdvRf1vTZeMQ7r%2BKh%2B2OIl6l0KOZuqamiJqJqalt5DE4krzDjQw1ur1S5pSMOFc9tr6ll80gB%2F2GhGLYAOQHU4pWV%2FqNXFBGdKWb75I7LFnaWQNpiyCH5vIy47%2FsP2JtdaWsmizxBgrJLBXp%2Ba0l%2FksWm90%2Bj8vtik2mN5seJfrwmXAEXQHQm1dXt0s5nV74j1siUAA%2FFgy1ARSJj3qM3q1jEiDcyDPagdtgHK9PQ3zXF1Wgv%2By6u9coDE6PJDt0gsbsheYJp7bI%2FtCsqidppq8pxMHAh%2B1ZozHz8xtCuc9SUvCjQga1RDDojnBF5OoSwvhFJUePCeJMQxNahwbUbySG3EiZMZc3oP%2FXKJb4IBslciMH%2FYmfdUvyw%2BxB5eZjN%2F0jKne02AMinGK5G2jId3N%2FeAkpM1Wj8wX8M0T9%2FazqPXZUqBtu%2FgGJjPryGEpveoWz2Wk0q%2FwtD42Hbei6DOJoZ%2BSH3ly4vI1Ea8v10TacuxrXEXw3e13vVWzL82baMGkIS1Kv6V9b%2BzUtflTFVKtWrNiiRp8SjjCbw%2BfABjqkAb%2FNjYRqclf5hPQ7ltY%2B%2BrjJ1o7FrS%2FesNzid8jy0uFOoxOB4GocyIuOhiMzqrskEwoD7aivWiriXNRnUG9wyiH7%2FeLF6Gk%2BYZqBQuCvCUlzGgGGohdD8CFCA0MdQU%2FQZZ6tefimFFGmBTNSa9PJTUkMydGW8wSVmY2EaI2M34aLYqAmco8ZohtQ0HOLH%2F5JIOygqm32fyZzMdGQvCKzI2yZfcHF&X-Amz-Signature=d0272c5c6358eb5becaeda3cc1ec471c5824b935e39e8a029860ce7e7ce072bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
