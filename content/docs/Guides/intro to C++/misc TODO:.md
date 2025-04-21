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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBVWNWUO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCI9kGN4bsXUJ2YiqvBmlGKJSHZ3GMwkzyenTEOza13fgIgHR58WoGrwc5mGsD34WnZCOEF4%2BRC%2FOUW9qTDUpBoFN8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsEUAUKwadnA9O0BCrcA2qe8yuVhodt3vPiSwqLJhVWBD6ClIM1cZx3LLrbeAfXyPbp67g4anRUaB%2B8%2BvriWaA%2FkuSGFD25ng7%2F1WxQ5DcFzmQaO%2FsDC1K6yqxyxUTozkWQdCI7nkhcnTJNGYHpL6h968Jmew7PlRglE7NbyqP0s54tKL%2BDzHZYotHoSWct61tggskEX7kbYnFGJPxjSmB9nnk1BWwqWrVNxGUeH9m515R7ZbcmG7Vm2vrGkquU8qCs2Ghi9Imsq7XXsvWI8yCxJ19birvWQwguPV0wJDClaFKIWZRsFXHbWvDrUqeBQlc46PiaF5pg4%2FCZY4b2DAu25q2HIkjIMmFgtHc8l0Za6jWajxZ3OIl8F4cE4xwilFvoqo9W%2BMUZ4qB2ekmlyolAWjhGd6iyCRVneElnNHK3Q9kDBN%2FOJ3DDsE%2Bmll3Ru0BpWiQz0MlcFpSOL0ey4jrtnCrHpraQY8BMcdM32Yc2W2OJ6QOkmjpzrRh2sOMYAEUajsnVXHv43JCsM8wKYboshSqdmWS7P7%2FHcUe72PpiKSbmRyHZsEqK%2BSTSct0tSSfoMHVCIOPwq5g%2FlmB%2BJ6QNF7AVbZN%2FcdDwa7Vtx%2F9srKAxvoQc3MQ357PC8S%2FbPxY3%2BkO3x12Yu9hMMKP%2BlsAGOqUBt3uPHBI2vLhWcufb%2BjZn3mAhgU509GkWIkYYjPKwjgHpgphFGhs4cZIPe5x7cqvvXlECF4zxxKiBPZmMilIdZsnQlvhacV%2Bg4pvW2QMVkKLtul5AnsmSmNcqJ49NEPf5J2%2Bu%2BBnc4d1%2BznrB%2BVJUbctIcyQUOfawpzayfzJvYVOdKfCAoTrgJmxSKSiN07ZhpD48H6MiTDjm63%2F8wyBD4cERFyMV&X-Amz-Signature=672205f2044ad8e33437022b03ecee534e8d8320cdcf1d85d7ff0482f4c094e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBVWNWUO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCI9kGN4bsXUJ2YiqvBmlGKJSHZ3GMwkzyenTEOza13fgIgHR58WoGrwc5mGsD34WnZCOEF4%2BRC%2FOUW9qTDUpBoFN8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsEUAUKwadnA9O0BCrcA2qe8yuVhodt3vPiSwqLJhVWBD6ClIM1cZx3LLrbeAfXyPbp67g4anRUaB%2B8%2BvriWaA%2FkuSGFD25ng7%2F1WxQ5DcFzmQaO%2FsDC1K6yqxyxUTozkWQdCI7nkhcnTJNGYHpL6h968Jmew7PlRglE7NbyqP0s54tKL%2BDzHZYotHoSWct61tggskEX7kbYnFGJPxjSmB9nnk1BWwqWrVNxGUeH9m515R7ZbcmG7Vm2vrGkquU8qCs2Ghi9Imsq7XXsvWI8yCxJ19birvWQwguPV0wJDClaFKIWZRsFXHbWvDrUqeBQlc46PiaF5pg4%2FCZY4b2DAu25q2HIkjIMmFgtHc8l0Za6jWajxZ3OIl8F4cE4xwilFvoqo9W%2BMUZ4qB2ekmlyolAWjhGd6iyCRVneElnNHK3Q9kDBN%2FOJ3DDsE%2Bmll3Ru0BpWiQz0MlcFpSOL0ey4jrtnCrHpraQY8BMcdM32Yc2W2OJ6QOkmjpzrRh2sOMYAEUajsnVXHv43JCsM8wKYboshSqdmWS7P7%2FHcUe72PpiKSbmRyHZsEqK%2BSTSct0tSSfoMHVCIOPwq5g%2FlmB%2BJ6QNF7AVbZN%2FcdDwa7Vtx%2F9srKAxvoQc3MQ357PC8S%2FbPxY3%2BkO3x12Yu9hMMKP%2BlsAGOqUBt3uPHBI2vLhWcufb%2BjZn3mAhgU509GkWIkYYjPKwjgHpgphFGhs4cZIPe5x7cqvvXlECF4zxxKiBPZmMilIdZsnQlvhacV%2Bg4pvW2QMVkKLtul5AnsmSmNcqJ49NEPf5J2%2Bu%2BBnc4d1%2BznrB%2BVJUbctIcyQUOfawpzayfzJvYVOdKfCAoTrgJmxSKSiN07ZhpD48H6MiTDjm63%2F8wyBD4cERFyMV&X-Amz-Signature=eaf6ef74dd9583fe2bdb5b0dc637079d1bfa4a850e695539661173282ba3e949&X-Amz-SignedHeaders=host&x-id=GetObject)

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
