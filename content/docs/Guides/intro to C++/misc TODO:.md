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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEBR35CU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIDv2Nt88YBFOmAu897sVtxvxhWGfGe1Q7qLuvLLlOEFAAh9ZakQuOX%2BoDl2lGrDdqErJ9zTIsarWnkEize01qzG9KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxty926gXETQ%2BHHoP0q3APKYiPCqwFG%2FpBsDXOKPSezK8w8miTGpk66GVeI%2FaYyzun4YJUgFsRJDdgHJUYygWwchkEIRK45u8f%2FETU8V41pda9DD00ggcx%2Fx26eNJpAwSxx4JdvLRHct7Zefp10p3e2X8pkkj2jmvigXbtu8cD1tDf31GLxlUz6tZhH4f9QPMLcOELJZgmAF0WJGkTlBAv%2FVhvG5esl%2FObZCev8H0HIpVgt4CmKiettapMbC4OiyDIuGBUncwY6wZJMfSJY5ZGSE6SRuiJOk6KK2MhW5xp0q3dpnVLgkAVmnmOyjnr5xaYrrnIhKHvfeRuaOsqjY2gGQGJTxcHeTnGfimmnqMNNUhJmMgWqzunxnWlzF3Q6h5fNV7wqs3EeRTpVwBakgqlJLjmEt%2BSCipw1z8%2FbVlwzmccJAlah5U8m4I61tp42KoYOWPlCh3NORWDTOj5wJY9v5T7QHsflUxGk7hKBJQZ14LS39wL0Laf7jwOcj6ubAO3TbsMXuCCarG%2F40ZA5p0YXH0hp5nhTqZW5Itcp6cR75HLYzR3ue6WJpd3wqVT00UyCqQj%2FDPsSR5GfcZiRNk%2F8vV0qGJ2H%2B5ONMybAi6G1UvJhMCFwUg7OHTHcqXjX2s%2Ffg9fux8GyEJct0jDT%2BJi%2BBjqnAUC0pmUELUYfneqg40rgfuozaPFbtnRDQEUqYwroDRbx5%2B1lr1Az%2BDauwQPrH3rwXGqIukypLjoZOVcos4qjoF2CnN%2FIPmGEkrylPEnKQXTFzraIzuffLJHNJq2R7KufYGyC%2FATTxLPnaEbhHxGmGze0hX5iLUxtIZlvn9An7k%2Fh1WHGvUQm7O91hA0Z%2F0mjWlFM6n1JhTLpoSHRIpZs0Wq6bjSN2IFD&X-Amz-Signature=dd821658f2d991c24c8065b7666cbd16ecd0c542eedfc437a8d3245183390e15&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEBR35CU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIDv2Nt88YBFOmAu897sVtxvxhWGfGe1Q7qLuvLLlOEFAAh9ZakQuOX%2BoDl2lGrDdqErJ9zTIsarWnkEize01qzG9KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxty926gXETQ%2BHHoP0q3APKYiPCqwFG%2FpBsDXOKPSezK8w8miTGpk66GVeI%2FaYyzun4YJUgFsRJDdgHJUYygWwchkEIRK45u8f%2FETU8V41pda9DD00ggcx%2Fx26eNJpAwSxx4JdvLRHct7Zefp10p3e2X8pkkj2jmvigXbtu8cD1tDf31GLxlUz6tZhH4f9QPMLcOELJZgmAF0WJGkTlBAv%2FVhvG5esl%2FObZCev8H0HIpVgt4CmKiettapMbC4OiyDIuGBUncwY6wZJMfSJY5ZGSE6SRuiJOk6KK2MhW5xp0q3dpnVLgkAVmnmOyjnr5xaYrrnIhKHvfeRuaOsqjY2gGQGJTxcHeTnGfimmnqMNNUhJmMgWqzunxnWlzF3Q6h5fNV7wqs3EeRTpVwBakgqlJLjmEt%2BSCipw1z8%2FbVlwzmccJAlah5U8m4I61tp42KoYOWPlCh3NORWDTOj5wJY9v5T7QHsflUxGk7hKBJQZ14LS39wL0Laf7jwOcj6ubAO3TbsMXuCCarG%2F40ZA5p0YXH0hp5nhTqZW5Itcp6cR75HLYzR3ue6WJpd3wqVT00UyCqQj%2FDPsSR5GfcZiRNk%2F8vV0qGJ2H%2B5ONMybAi6G1UvJhMCFwUg7OHTHcqXjX2s%2Ffg9fux8GyEJct0jDT%2BJi%2BBjqnAUC0pmUELUYfneqg40rgfuozaPFbtnRDQEUqYwroDRbx5%2B1lr1Az%2BDauwQPrH3rwXGqIukypLjoZOVcos4qjoF2CnN%2FIPmGEkrylPEnKQXTFzraIzuffLJHNJq2R7KufYGyC%2FATTxLPnaEbhHxGmGze0hX5iLUxtIZlvn9An7k%2Fh1WHGvUQm7O91hA0Z%2F0mjWlFM6n1JhTLpoSHRIpZs0Wq6bjSN2IFD&X-Amz-Signature=ab999891933803638202e662722c9cbdc89e17c38030de89329a403a87373c8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
