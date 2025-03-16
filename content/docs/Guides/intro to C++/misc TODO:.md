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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ERM7MA3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIhmo83nRueNLLuRQ7ulxcoQP6FCQEsXx3YiMnSvqJ%2FAiBi2yStOlTtFPQk7C6eHKBI4cGOrHS%2By7UD%2BsjL9xz7kSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM10%2FaO2A8WDal8umYKtwDM%2BzVcPgMYDOQ4Cv1HaGNU2iZSoqd4TLnzsDaFTVsoGRxLRZ758mQ4REOu7k3yw%2Fq8jfUvJEEbpGmgEzglsn%2BF00VbLmzEmcg3y4ufXvpmUGoQbz%2FxWaYgCXvxiQ%2F9xRizD%2FT%2BLLw%2BbnxudFch%2BTWpaEQq9DHpt%2BTx3sq3QmuGsdR9kG4V92PPQe2VCT74GWi4psIernJKTPSTaMpVEC9xpfekY56nieZtbqsMT6BHNeA8LQRbLpTnQSLAHDwD2xYSDPC9U0Hxo7r5wCZeULHcqSxdaW7RpR2H7inA%2Fb64tFWJ1rqbb%2BS%2B1vDC9upYrBYSIe%2BHVPtqsn6B9%2Fqfcb%2BqNvEOhk71leVT1U0KYZbAkJE5D%2BBTy138YPpgTOQu2FF0hhOuXmaq0ao8BaqVZcWRsIr9Xcmr%2BZ6QmMGo9UMG6xPV6ENlWV5xVGZNvcgsJXKlE2TBu1YdWoKaTlyASyBg6PiRfTZkYdcbqFDGqMdctwpCuDbASh3D9wyW75YLD59jUvkhWnSqlvXkfm%2Fetf4Ifzg9PyXwer%2Bzi8oYX12RD8uunqxFSEWwqXB1RDMqPkGvUzhnRxFCm343Z1qS0SxYRYirQ6aQ8cmkvkE72JOQz3jLstftBRwtAgLKocw%2B%2BrZvgY6pgH%2FxpU3J8HlcYymTjIGy90mN34KWe6LLIbCNOYAyAhOJ0SwFSF9rEhYEuwG5pJjxP5ajwG7WKMHFXS1JHs7JsDZ4aDvCClRmPHlTwxIqIV%2Fl84GRfHfveZjQUInCobmDKL%2BIPJU3MxFNOgQlhq%2F8IjGgaqzxfn4lOsnnzaAEL4xn3vRqvldpgrbHr8PuWTT9pUOX3PXHwyJujVXTKJrF9Jr%2F%2Bm0Dkqf&X-Amz-Signature=795bc38d884e87a8c37a911215cdf3d7d0d4c4bb021ce26046253a518d512892&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ERM7MA3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIhmo83nRueNLLuRQ7ulxcoQP6FCQEsXx3YiMnSvqJ%2FAiBi2yStOlTtFPQk7C6eHKBI4cGOrHS%2By7UD%2BsjL9xz7kSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM10%2FaO2A8WDal8umYKtwDM%2BzVcPgMYDOQ4Cv1HaGNU2iZSoqd4TLnzsDaFTVsoGRxLRZ758mQ4REOu7k3yw%2Fq8jfUvJEEbpGmgEzglsn%2BF00VbLmzEmcg3y4ufXvpmUGoQbz%2FxWaYgCXvxiQ%2F9xRizD%2FT%2BLLw%2BbnxudFch%2BTWpaEQq9DHpt%2BTx3sq3QmuGsdR9kG4V92PPQe2VCT74GWi4psIernJKTPSTaMpVEC9xpfekY56nieZtbqsMT6BHNeA8LQRbLpTnQSLAHDwD2xYSDPC9U0Hxo7r5wCZeULHcqSxdaW7RpR2H7inA%2Fb64tFWJ1rqbb%2BS%2B1vDC9upYrBYSIe%2BHVPtqsn6B9%2Fqfcb%2BqNvEOhk71leVT1U0KYZbAkJE5D%2BBTy138YPpgTOQu2FF0hhOuXmaq0ao8BaqVZcWRsIr9Xcmr%2BZ6QmMGo9UMG6xPV6ENlWV5xVGZNvcgsJXKlE2TBu1YdWoKaTlyASyBg6PiRfTZkYdcbqFDGqMdctwpCuDbASh3D9wyW75YLD59jUvkhWnSqlvXkfm%2Fetf4Ifzg9PyXwer%2Bzi8oYX12RD8uunqxFSEWwqXB1RDMqPkGvUzhnRxFCm343Z1qS0SxYRYirQ6aQ8cmkvkE72JOQz3jLstftBRwtAgLKocw%2B%2BrZvgY6pgH%2FxpU3J8HlcYymTjIGy90mN34KWe6LLIbCNOYAyAhOJ0SwFSF9rEhYEuwG5pJjxP5ajwG7WKMHFXS1JHs7JsDZ4aDvCClRmPHlTwxIqIV%2Fl84GRfHfveZjQUInCobmDKL%2BIPJU3MxFNOgQlhq%2F8IjGgaqzxfn4lOsnnzaAEL4xn3vRqvldpgrbHr8PuWTT9pUOX3PXHwyJujVXTKJrF9Jr%2F%2Bm0Dkqf&X-Amz-Signature=c5aba53f7e90fb35affd8b245fb944cdeb18ccfb4ee45d153e44c6f1d238955a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
