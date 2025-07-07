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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTNXNZR3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCt4voipmM9AEw1mfAib5%2BcEpwNkeh%2B0DUFLLmLB%2BXZtAIhALEOrGIBMh6afU6KgR02BduRG3yEuMD2w7szwbzRgCZ6Kv8DCHMQABoMNjM3NDIzMTgzODA1Igwa6ehwC9iEXM2qohwq3AP9BQqeOOkhSsp%2BlRJmF8UhF7L%2B8vPQLKL5SUcowDgPQo2zC817wqtrXX4OZdOCcuAFAuqaNaIM3BUEOppsuJO1JeQ0iWSePU4o%2F8Lj1ZKzfkUKFO82Oe7GGjnH2%2BkdlKj7JOwu8jlZoX7Jr%2Fdhp%2BWPUbFCgQtGTxEsdty1EkaPy8h49r3Ct3r8le5%2FE8DSY3XGR5gbAiCTHj6ixC1q8en%2FxfSh0Uplzi2Kn65VSxUHzcx%2B38lrTcp8MGuqDATpim3kmYO3UWPbrQAs5NDi9IxocbXNSKH4Y1vVNC4jnWYXF68U4xhvda4Yq3BbPKsDqzQQCsm2%2BpVqDM7YdW6E5p3rLfTpMubvf6n7HG%2Bl2TzlUpfFIMfn38cazZmwNtiH3TQ0j%2Frltf7Jm0xSCDc3zm00lLTG9v6dcCJ0H0QyFsIwBNFCu9x4XTXHNwg1B%2BMlyu0S%2BdHFBMdrnDfnyWAOsfnzvkF2AEBu5t5VjxgV6tRohi%2BoPq8T2fEMCdppwG2hk82ej86fYw5Anh3lgItVP94BKUs5AftjZsnlonr2CgOLrWHdaxQQHE9%2FYPmaPxHO0bIVY9XcO%2BCxm5kmzm0mZfmsZ5MNhR5TInuGbZI3HDOqXXq950hC%2BjOlD2fAxTDZt67DBjqkAZZmIP0NK0%2FIuci%2FwOnjMRkhkV%2ByQVq41RVo8B73%2BQECrAm%2F9oLH%2Bb1qUTEEpJl9J1IjuraqGp33b5ISAn9JFZtCFMiipysAiaMOQaDEwhR8qg0Tm4C7hgFYSvhjOWh%2Fa1sC4eV8tJNfjhyRD6P9nkQBFF46%2FLoBtLO9i3xQKvvQjEL6tOPFcyg4bfCnX4uiyvod1VpC0JLFatvK8k56y%2FmkynU8&X-Amz-Signature=764929f2ccda9df9b07605ac6617aad3021851eab3c65d0033ab74519abb83e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTNXNZR3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCt4voipmM9AEw1mfAib5%2BcEpwNkeh%2B0DUFLLmLB%2BXZtAIhALEOrGIBMh6afU6KgR02BduRG3yEuMD2w7szwbzRgCZ6Kv8DCHMQABoMNjM3NDIzMTgzODA1Igwa6ehwC9iEXM2qohwq3AP9BQqeOOkhSsp%2BlRJmF8UhF7L%2B8vPQLKL5SUcowDgPQo2zC817wqtrXX4OZdOCcuAFAuqaNaIM3BUEOppsuJO1JeQ0iWSePU4o%2F8Lj1ZKzfkUKFO82Oe7GGjnH2%2BkdlKj7JOwu8jlZoX7Jr%2Fdhp%2BWPUbFCgQtGTxEsdty1EkaPy8h49r3Ct3r8le5%2FE8DSY3XGR5gbAiCTHj6ixC1q8en%2FxfSh0Uplzi2Kn65VSxUHzcx%2B38lrTcp8MGuqDATpim3kmYO3UWPbrQAs5NDi9IxocbXNSKH4Y1vVNC4jnWYXF68U4xhvda4Yq3BbPKsDqzQQCsm2%2BpVqDM7YdW6E5p3rLfTpMubvf6n7HG%2Bl2TzlUpfFIMfn38cazZmwNtiH3TQ0j%2Frltf7Jm0xSCDc3zm00lLTG9v6dcCJ0H0QyFsIwBNFCu9x4XTXHNwg1B%2BMlyu0S%2BdHFBMdrnDfnyWAOsfnzvkF2AEBu5t5VjxgV6tRohi%2BoPq8T2fEMCdppwG2hk82ej86fYw5Anh3lgItVP94BKUs5AftjZsnlonr2CgOLrWHdaxQQHE9%2FYPmaPxHO0bIVY9XcO%2BCxm5kmzm0mZfmsZ5MNhR5TInuGbZI3HDOqXXq950hC%2BjOlD2fAxTDZt67DBjqkAZZmIP0NK0%2FIuci%2FwOnjMRkhkV%2ByQVq41RVo8B73%2BQECrAm%2F9oLH%2Bb1qUTEEpJl9J1IjuraqGp33b5ISAn9JFZtCFMiipysAiaMOQaDEwhR8qg0Tm4C7hgFYSvhjOWh%2Fa1sC4eV8tJNfjhyRD6P9nkQBFF46%2FLoBtLO9i3xQKvvQjEL6tOPFcyg4bfCnX4uiyvod1VpC0JLFatvK8k56y%2FmkynU8&X-Amz-Signature=147b1dcacb6621ca718bbd03aa991a75da03c31e129ce3b6ad6baa85e67a2723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
