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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHDUBSG7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAIHZ6x4E3V57vhBeXl24gCi3JRuzbd7vmVv9E3DCaoPAiEAyrs5wxZezdv0U%2BYuCZEDp2bYRKqC5uAmn92r%2FRXnij4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDN4t9ALqUItro2LeXyrcAzZPqAJcCTksBqjOdmN2Vur8BFup%2BKlforZk6cANJTgCu7Gct7DT8TZWtv1K24M6ytvecUcExQ2%2FjyWF8PGKIk8UOVOBvdTvEdryqJrWAB3mgigLi2tez%2FkzxLxY63%2BPFXMVbjvU7CUOgFCOgcu1XjEPyCyRbixPYqRB7UxDoSHNxhuNuQyn%2F4sjL%2F%2FDHsiTtYra%2FUJshRc0GOU%2F96il1yaORj%2Bkx8IqQ18gjIolrca9V6AgbjorlIn1O%2B2nAK%2F7JhAztT2Kqv19Y8se9xExaCiqdmOVbJQQjJACaz8pdwwkatXmgBN37HoAgGpk7uKL087osXQL7Anthng7eWKFU9hZfLUqOwDETQsU4kXLG8G6O489KGpvNQmpMuydkf6YDwsc%2BXvGP%2FmBrkM%2F9dB7mVnkdYjWOWa8lK2geTmD26Tz1uRNU%2Fbx%2Bz1guE2dQjNFxndasIzBIdzanIC2CL2CSMCzJhOr68ZlTHLCju9OaC1G6knpE8dbG61RH9H82fxBVKfKTsMfYPx2VFPympsyIqTSFaOdLxp4%2BFknCtESybxs5tBOVXWq32amK2LH5eT0GF6jthAzTlWKglqZAIweJDSS1zSK1VZ%2FlyfNY9b8xk7Eig5S8ND8GJ%2FyBe0zMKK8tMIGOqUBCyurqHYWpZ56%2BE4A2eZ3BeRWK6GtDNv3%2BvSctvGVGXpyU2rctxQubPZIZxyrNZ6ArPHzS0N5QC26yLjQ52qbxQoOrOazytItpx1G4vbNubMWKM4FBHFaa00gG%2BNACvGVcYVibKTNjxVNm3HFLyLfFQGvt04hp%2BoKSY%2FS41HmNJZjsT0vdllt3muYCNek56mlfAV4j7yekT4gBspUzOZtuEB0WfAz&X-Amz-Signature=78dd4620aebd53784873d2643a5acae6bc0e8b0cdd6abd01a0961c74bdb4d88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHDUBSG7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAIHZ6x4E3V57vhBeXl24gCi3JRuzbd7vmVv9E3DCaoPAiEAyrs5wxZezdv0U%2BYuCZEDp2bYRKqC5uAmn92r%2FRXnij4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDN4t9ALqUItro2LeXyrcAzZPqAJcCTksBqjOdmN2Vur8BFup%2BKlforZk6cANJTgCu7Gct7DT8TZWtv1K24M6ytvecUcExQ2%2FjyWF8PGKIk8UOVOBvdTvEdryqJrWAB3mgigLi2tez%2FkzxLxY63%2BPFXMVbjvU7CUOgFCOgcu1XjEPyCyRbixPYqRB7UxDoSHNxhuNuQyn%2F4sjL%2F%2FDHsiTtYra%2FUJshRc0GOU%2F96il1yaORj%2Bkx8IqQ18gjIolrca9V6AgbjorlIn1O%2B2nAK%2F7JhAztT2Kqv19Y8se9xExaCiqdmOVbJQQjJACaz8pdwwkatXmgBN37HoAgGpk7uKL087osXQL7Anthng7eWKFU9hZfLUqOwDETQsU4kXLG8G6O489KGpvNQmpMuydkf6YDwsc%2BXvGP%2FmBrkM%2F9dB7mVnkdYjWOWa8lK2geTmD26Tz1uRNU%2Fbx%2Bz1guE2dQjNFxndasIzBIdzanIC2CL2CSMCzJhOr68ZlTHLCju9OaC1G6knpE8dbG61RH9H82fxBVKfKTsMfYPx2VFPympsyIqTSFaOdLxp4%2BFknCtESybxs5tBOVXWq32amK2LH5eT0GF6jthAzTlWKglqZAIweJDSS1zSK1VZ%2FlyfNY9b8xk7Eig5S8ND8GJ%2FyBe0zMKK8tMIGOqUBCyurqHYWpZ56%2BE4A2eZ3BeRWK6GtDNv3%2BvSctvGVGXpyU2rctxQubPZIZxyrNZ6ArPHzS0N5QC26yLjQ52qbxQoOrOazytItpx1G4vbNubMWKM4FBHFaa00gG%2BNACvGVcYVibKTNjxVNm3HFLyLfFQGvt04hp%2BoKSY%2FS41HmNJZjsT0vdllt3muYCNek56mlfAV4j7yekT4gBspUzOZtuEB0WfAz&X-Amz-Signature=ad3eeda343a39ab6b1c241b8a0c59b229244054d42fbe5896ca042aec932c1ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
