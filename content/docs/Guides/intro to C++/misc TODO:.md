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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LOTZLF7%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID28ZT18d42lucdhNIz3%2B5bRqAE5qwXoxwaven%2BqpnRWAiAJ9re7AoqiOymZabo%2FigUMMzArXkC87gOXB1HPeK%2BOJSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMpUep8Ks0Gjm09AVbKtwDy70rPD%2FMhIj9ct3JME%2FEqrTYTTr57uxgg0wpqlNjEyDBsFvRd3DTTvKjTZvAUC41Ck1SPMuI%2Fzshvrgx4QvpNH0Zb%2FhQCH3JqcfGhN7KXFa1SG1NzSFUBMGsz8OB9plOh1yVdgW34vi5j4nokvj9rig0f%2BcA8iRWTzTb6mDpjqSP08PqQA5mbzk44tXWn01YxUtI5fEhcQZvDiIjqludkrEt%2BDflwD%2Fngn3E1ZdlA4FAv2oxJ%2BprqjvJnFJt4GTvLCILbqUCWLrrOdSjSIpVGcyMgLY2N2k4XO4yRA8iRcOnX75vYcRk7hTIEDZOtgpzysFM48dVxGyruKyTvdy9JEdZ32tRL%2BV8K8plgp0AHTMbpV1nzq7Xa8SrBeEyo%2BdOF%2B2SLpKnAMD%2BzUGL3t7ykbt48EGbXTCloNYcBWdsQLQfCoKKi1GkPHs%2FBOy6pbArJBvWcNCzeX%2BUK%2FEpA7GiOA4OTQQn3CWCxfxnVKsY%2F4LmhBgvbgCVuwwPmsnQpziBGpdGkbYgB1lXdguk%2FhOL%2BaIvqMkkAtYNom0u4CkYg%2FLsEW2Imshv2VFlRBCSjrsfzUC1vjY8uRdkzqX3n2qnmqgi5KQtTHWmY388NREYkogKDxfXLGXkg6A1brcw86G7wAY6pgFK%2BvYHITod2Sbi2%2B6wXeRXbLncVRtv%2Fik%2BcrM%2FZ7S%2FFfYlM2BBjBrNZkrwJgBkL2M%2BsJ06POLADk%2BjUqbjNLzKkRrtZonSDdW5HSMfOGpNLfHrkB1W8BAQ8ozN9nW4N1gWhodAd6FiXwTMRrhQN1yibNFVnpU7%2F7SaNDSMgSIqk0MAeauQIHtNP3WHtyyUsLFmFgXudr6bN576%2BFs9YoxR3fL08E%2F5&X-Amz-Signature=d17997841ca583e20361bb342b418d780f7c46b1506348ae14bf99e9b9822389&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LOTZLF7%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID28ZT18d42lucdhNIz3%2B5bRqAE5qwXoxwaven%2BqpnRWAiAJ9re7AoqiOymZabo%2FigUMMzArXkC87gOXB1HPeK%2BOJSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMpUep8Ks0Gjm09AVbKtwDy70rPD%2FMhIj9ct3JME%2FEqrTYTTr57uxgg0wpqlNjEyDBsFvRd3DTTvKjTZvAUC41Ck1SPMuI%2Fzshvrgx4QvpNH0Zb%2FhQCH3JqcfGhN7KXFa1SG1NzSFUBMGsz8OB9plOh1yVdgW34vi5j4nokvj9rig0f%2BcA8iRWTzTb6mDpjqSP08PqQA5mbzk44tXWn01YxUtI5fEhcQZvDiIjqludkrEt%2BDflwD%2Fngn3E1ZdlA4FAv2oxJ%2BprqjvJnFJt4GTvLCILbqUCWLrrOdSjSIpVGcyMgLY2N2k4XO4yRA8iRcOnX75vYcRk7hTIEDZOtgpzysFM48dVxGyruKyTvdy9JEdZ32tRL%2BV8K8plgp0AHTMbpV1nzq7Xa8SrBeEyo%2BdOF%2B2SLpKnAMD%2BzUGL3t7ykbt48EGbXTCloNYcBWdsQLQfCoKKi1GkPHs%2FBOy6pbArJBvWcNCzeX%2BUK%2FEpA7GiOA4OTQQn3CWCxfxnVKsY%2F4LmhBgvbgCVuwwPmsnQpziBGpdGkbYgB1lXdguk%2FhOL%2BaIvqMkkAtYNom0u4CkYg%2FLsEW2Imshv2VFlRBCSjrsfzUC1vjY8uRdkzqX3n2qnmqgi5KQtTHWmY388NREYkogKDxfXLGXkg6A1brcw86G7wAY6pgFK%2BvYHITod2Sbi2%2B6wXeRXbLncVRtv%2Fik%2BcrM%2FZ7S%2FFfYlM2BBjBrNZkrwJgBkL2M%2BsJ06POLADk%2BjUqbjNLzKkRrtZonSDdW5HSMfOGpNLfHrkB1W8BAQ8ozN9nW4N1gWhodAd6FiXwTMRrhQN1yibNFVnpU7%2F7SaNDSMgSIqk0MAeauQIHtNP3WHtyyUsLFmFgXudr6bN576%2BFs9YoxR3fL08E%2F5&X-Amz-Signature=64a63941bdd1f93d1dfaaecc0c6a650b249b2dbdd0eadad1f3fbb56fd5ffbd76&X-Amz-SignedHeaders=host&x-id=GetObject)

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
