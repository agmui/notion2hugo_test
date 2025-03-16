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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5SYL4U%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIALi6enJ517Dnm%2F4li17wm5gzKR%2FPqUMH3AAiDV4gnLtAiEA7%2BU6AHogXwvi2t5afw1LwS%2BSadQqiON7pyNwO%2BmRL%2Fcq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEIPYm46i5X5NfYLcircA6dfScCqpNehhhMqadQ9sbMFFxbVddiUl3rTprLtslwJKsF4EBPGeml1254YXTYd54Z3XNtXbXkIq2HUbgkrUmX%2BHzmpiAIG8Eqr%2FgQT6SAnCaD28hPq9PbhZxKMKcdvqOuw3MWPhGDviqKdik0QlzQRhcB37fQw8x3LISSV%2FnSOJ5DA7w5CJw5tC85c4kjxxN0%2Bnhi4ATVUCICvzXLDoeqleqhaqptTwbgUWR7ZT0UrlBgfyLgy8hjUK5VCr2sqTQCot%2FoINoKTYoR62M3NqgRPaLkLU8ywJAMh0xpyALLPMwRyHUQPFJUYHK%2Bt9%2BJhW09INl5antQ3YfnVDPeqt22JWb%2Bs70DwACdMEpZhbNIK%2FIqBxXYuIpmCJCDI0QH%2B9EtPhjTHPIuaJJZZgsb7IWSiuf79fzduhkkeKvg6PG7DoDQCVQoQ8bf%2Bp0vIoc8%2BkNdhAYpjnC4xBGvBr4QVelnAFP2Fbd5K07wQ4Cr%2FxRTEUcy0oc1tfb9Zz1a3NUl2PBcEtZQP%2F0H0jXsWb0rkEbCLrZjFKESamnLGUcSesUThJyW4%2FiN1l%2Ba4Goa%2FeyEXoCFeZH6N1SAiKDyGZciJ1KvKeHNh%2BhPXac4O2w6uFUd9c4AU8tyRsWke6DY3MNLY2r4GOqUBZM6Bz%2BLM0%2BDkk1VFgDAlWnQiROdfjzU3JvxVQ914bvbUonhXwETDqj2png4QN4jGrEJmXx12aRr7cL%2F3qQDnLDpudUQqHYe%2FWIO5QVeRSKd8sWK0ZT%2BmPvyexTF0sON1rm5rtyPOy7TtSQV5boRonSmUiwnbRVfa31wtPffnRsOlnxpQOPRFm2FjLwsIXW3QpwR3Kg3PTtIk5idOF9lNak5EjhbI&X-Amz-Signature=6f25839e7283cc52ee590569fb894d3f387be42c2487af704521fdadfd2534f7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5SYL4U%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIALi6enJ517Dnm%2F4li17wm5gzKR%2FPqUMH3AAiDV4gnLtAiEA7%2BU6AHogXwvi2t5afw1LwS%2BSadQqiON7pyNwO%2BmRL%2Fcq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEIPYm46i5X5NfYLcircA6dfScCqpNehhhMqadQ9sbMFFxbVddiUl3rTprLtslwJKsF4EBPGeml1254YXTYd54Z3XNtXbXkIq2HUbgkrUmX%2BHzmpiAIG8Eqr%2FgQT6SAnCaD28hPq9PbhZxKMKcdvqOuw3MWPhGDviqKdik0QlzQRhcB37fQw8x3LISSV%2FnSOJ5DA7w5CJw5tC85c4kjxxN0%2Bnhi4ATVUCICvzXLDoeqleqhaqptTwbgUWR7ZT0UrlBgfyLgy8hjUK5VCr2sqTQCot%2FoINoKTYoR62M3NqgRPaLkLU8ywJAMh0xpyALLPMwRyHUQPFJUYHK%2Bt9%2BJhW09INl5antQ3YfnVDPeqt22JWb%2Bs70DwACdMEpZhbNIK%2FIqBxXYuIpmCJCDI0QH%2B9EtPhjTHPIuaJJZZgsb7IWSiuf79fzduhkkeKvg6PG7DoDQCVQoQ8bf%2Bp0vIoc8%2BkNdhAYpjnC4xBGvBr4QVelnAFP2Fbd5K07wQ4Cr%2FxRTEUcy0oc1tfb9Zz1a3NUl2PBcEtZQP%2F0H0jXsWb0rkEbCLrZjFKESamnLGUcSesUThJyW4%2FiN1l%2Ba4Goa%2FeyEXoCFeZH6N1SAiKDyGZciJ1KvKeHNh%2BhPXac4O2w6uFUd9c4AU8tyRsWke6DY3MNLY2r4GOqUBZM6Bz%2BLM0%2BDkk1VFgDAlWnQiROdfjzU3JvxVQ914bvbUonhXwETDqj2png4QN4jGrEJmXx12aRr7cL%2F3qQDnLDpudUQqHYe%2FWIO5QVeRSKd8sWK0ZT%2BmPvyexTF0sON1rm5rtyPOy7TtSQV5boRonSmUiwnbRVfa31wtPffnRsOlnxpQOPRFm2FjLwsIXW3QpwR3Kg3PTtIk5idOF9lNak5EjhbI&X-Amz-Signature=775401c50d7f60711f5db71c7f3a761913a4fd7841366a06bf4b209565405bb8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
