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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RJZPBZQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BRQhQrNn47gdtaqKrY4DiaIA2j1zRK04dI%2BZXO%2BWc8AiA73bp50eliEqfVEtekGlOvDS%2FiXldXhVofhs23PrYQJyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGQktmGOlgeBX%2BQvAKtwDGLButfG8ihO21pT9o7FpvbqEEfaN2QpNzsUmGbVha1qFUmnihtDjIijyp71CCmJOrdt1Rh9XYKwzyLJBoOpsvlmAUzGTlZVohgH%2BPnC1tYJwO%2FlaTYAzV9k4RYiBC94Rcy%2BFwj%2F7tIGDmbGpP%2BnJ4CW5WOOeyhVVZXvygP1%2B21M0YXGmPOtX94xyIMFQTdC19WFVhDaWeSNYG0rWLVXoynYJqGZGDQWAqQChWi6rnw4np8%2B7kARP88V0FkRw6mHKfQDqhQ8hDZ5siel%2F7i%2B%2FwCgX7KY7t1kDKPc9g6%2FOJ7WPk3FjoVPKK8whPJ4HBMwzhMkPwR4mbsjqXYmbyOPxCANCjjOxlF4OypfRXO9GJLvZNz1p2NRYEPVvRMoerJkpIklJxX%2BOGEvmUXcSJr09Rze4Eklzym6sW2%2BSfRKVnm%2B5xQ6TNEvY4uqijrQyEhOj9H6tEdR0Dl%2Bdubn4fPeMgXdmOAXpoW4KYx%2Bq0VcmRZp%2BnevO8KRp%2BQ%2Ff%2FNVsgUpRSaqPJwZJOQm74b9cRT7rNkR%2F3R4FDk4EnHyA%2Fm6xzy1oFC%2BQBDXh5d2%2F0bSGlHTJMUJMnoHMIZ%2FOXlZKaTUw6ZJKHIQ1hW1DNgI3A5mCrogUdZJ7r6LfRmtP4RYwg5aIvwY6pgHEyYSEW0LGfL3jVXONE40bOlpoCEZn1To63s9%2BqkeTKA2AdKZqZvA5NsXBbBwiiEcayzf%2BLpnoffUP%2FzytBU3XG3Pon1BlxelWKGbbCVjdVjrmRDDP81wMNi6o6t4UnvnpskIPe4kxOqwMlA2%2BDWVCR%2FVM%2FlNoNq%2B%2FP%2Fz7E5EL91rD2vubGjoAWs3wsDdmcgXXRJAf5xc9yuy1MDFs4uk8tBPnAP5O&X-Amz-Signature=b60bd4eb597922efe59e9374bf4340cc3b8fa51b68f9e96fdd2689870b73b2d6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RJZPBZQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BRQhQrNn47gdtaqKrY4DiaIA2j1zRK04dI%2BZXO%2BWc8AiA73bp50eliEqfVEtekGlOvDS%2FiXldXhVofhs23PrYQJyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGQktmGOlgeBX%2BQvAKtwDGLButfG8ihO21pT9o7FpvbqEEfaN2QpNzsUmGbVha1qFUmnihtDjIijyp71CCmJOrdt1Rh9XYKwzyLJBoOpsvlmAUzGTlZVohgH%2BPnC1tYJwO%2FlaTYAzV9k4RYiBC94Rcy%2BFwj%2F7tIGDmbGpP%2BnJ4CW5WOOeyhVVZXvygP1%2B21M0YXGmPOtX94xyIMFQTdC19WFVhDaWeSNYG0rWLVXoynYJqGZGDQWAqQChWi6rnw4np8%2B7kARP88V0FkRw6mHKfQDqhQ8hDZ5siel%2F7i%2B%2FwCgX7KY7t1kDKPc9g6%2FOJ7WPk3FjoVPKK8whPJ4HBMwzhMkPwR4mbsjqXYmbyOPxCANCjjOxlF4OypfRXO9GJLvZNz1p2NRYEPVvRMoerJkpIklJxX%2BOGEvmUXcSJr09Rze4Eklzym6sW2%2BSfRKVnm%2B5xQ6TNEvY4uqijrQyEhOj9H6tEdR0Dl%2Bdubn4fPeMgXdmOAXpoW4KYx%2Bq0VcmRZp%2BnevO8KRp%2BQ%2Ff%2FNVsgUpRSaqPJwZJOQm74b9cRT7rNkR%2F3R4FDk4EnHyA%2Fm6xzy1oFC%2BQBDXh5d2%2F0bSGlHTJMUJMnoHMIZ%2FOXlZKaTUw6ZJKHIQ1hW1DNgI3A5mCrogUdZJ7r6LfRmtP4RYwg5aIvwY6pgHEyYSEW0LGfL3jVXONE40bOlpoCEZn1To63s9%2BqkeTKA2AdKZqZvA5NsXBbBwiiEcayzf%2BLpnoffUP%2FzytBU3XG3Pon1BlxelWKGbbCVjdVjrmRDDP81wMNi6o6t4UnvnpskIPe4kxOqwMlA2%2BDWVCR%2FVM%2FlNoNq%2B%2FP%2Fz7E5EL91rD2vubGjoAWs3wsDdmcgXXRJAf5xc9yuy1MDFs4uk8tBPnAP5O&X-Amz-Signature=b60ab9d2cf669228954a86d3d9a693f6334171a66f705c4e6b40b12a241d6097&X-Amz-SignedHeaders=host&x-id=GetObject)

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
