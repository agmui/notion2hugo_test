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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTUMI6K6%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDS3E%2Fi8RxC%2FWNaQ%2FKjMBH7JCAoCBSRkN5aF3waUYvUtAiEA5GrbMAOpq58WEai9RHu55uxTKDAdvfuXXLuMqXNjC0cqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEj1W6IooGRZAC94OyrcA3rIMp9YwcmBqF5rLXxBsT%2BVHl73UOpFOdPzYjRVxoMtTQnviU3cgZgkLbs39NyURIFbrISrUOMNpPrxE%2BGoZdMQ9468hOMHkdtOXrNRMgH%2F10elvW2m2nvJDP5%2Fi%2FMTRboOO%2FEoFIn%2BdzJdsja4ikvj3Us17xa6IfMShalx%2BgrAS5nXAekR%2Bz8fpowQrb0TUkGRHA8j%2BDahuu8lc3i8uV5l85zP0%2BaMqdKJHEKz3Vdj%2FEWQ8l8AGrf%2FTC5cj5VSFFgDDCZYOtd4hd4roL3%2FPTlyiAm7Ggfmb6BVHVwwKg7rLGAM1wHZvkCz7XLbwk5aOU3irQN%2BQZ679vlWx%2FLHXpsJ1PdJC8M7nesqDip9iZxXkgCzlZw9OspVyNbSgyWdLxxsaYUldiHViOlR1Qg8OfnlhrfkK62avg%2B6fR4iBD7Ujavtdt7sl0obb7pf%2B9dcvAk92dGMi9j2Oc8Zf0V6w5bCHY3WPAShcGlx3OhC3UdS0infP%2Br7walCMkW4vj1SiogaQno5pXTn4PQhKxVnJJrnsRWMrqW9iyvzoO%2FtdqugOg9H8If07D06D174TK9KLIsjQLAyZRmMjguJFEmhMz1DnsakLMvYW5ub2%2FNcSl3NM36NCIiL2hpQX2atMPn%2BxMMGOqUB88beD3%2FytjDYf1PLlT2DJEIPGxRh%2FJuP1RBtF%2FoidfxrhQVkmuZ1gNlwKVdv4nUov%2FjI0epB8hK%2Be%2B10JAbgHmtmnWMnpQFSsdkFUVx%2BkQnz108yU%2B51NN5Oo3xR6qRm3pBS9JKHNTfPucAyHX1cplAqngl3PJ82k%2FUUp1q9va8dwlqvDwO00H%2BonMOXL9kXpNFQQiMgmtLUF%2FhAgu%2FegtqyBeAd&X-Amz-Signature=941801412339054abddfb4305284a5f9037793a6e9a2d9add984c6a836f5af8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTUMI6K6%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDS3E%2Fi8RxC%2FWNaQ%2FKjMBH7JCAoCBSRkN5aF3waUYvUtAiEA5GrbMAOpq58WEai9RHu55uxTKDAdvfuXXLuMqXNjC0cqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEj1W6IooGRZAC94OyrcA3rIMp9YwcmBqF5rLXxBsT%2BVHl73UOpFOdPzYjRVxoMtTQnviU3cgZgkLbs39NyURIFbrISrUOMNpPrxE%2BGoZdMQ9468hOMHkdtOXrNRMgH%2F10elvW2m2nvJDP5%2Fi%2FMTRboOO%2FEoFIn%2BdzJdsja4ikvj3Us17xa6IfMShalx%2BgrAS5nXAekR%2Bz8fpowQrb0TUkGRHA8j%2BDahuu8lc3i8uV5l85zP0%2BaMqdKJHEKz3Vdj%2FEWQ8l8AGrf%2FTC5cj5VSFFgDDCZYOtd4hd4roL3%2FPTlyiAm7Ggfmb6BVHVwwKg7rLGAM1wHZvkCz7XLbwk5aOU3irQN%2BQZ679vlWx%2FLHXpsJ1PdJC8M7nesqDip9iZxXkgCzlZw9OspVyNbSgyWdLxxsaYUldiHViOlR1Qg8OfnlhrfkK62avg%2B6fR4iBD7Ujavtdt7sl0obb7pf%2B9dcvAk92dGMi9j2Oc8Zf0V6w5bCHY3WPAShcGlx3OhC3UdS0infP%2Br7walCMkW4vj1SiogaQno5pXTn4PQhKxVnJJrnsRWMrqW9iyvzoO%2FtdqugOg9H8If07D06D174TK9KLIsjQLAyZRmMjguJFEmhMz1DnsakLMvYW5ub2%2FNcSl3NM36NCIiL2hpQX2atMPn%2BxMMGOqUB88beD3%2FytjDYf1PLlT2DJEIPGxRh%2FJuP1RBtF%2FoidfxrhQVkmuZ1gNlwKVdv4nUov%2FjI0epB8hK%2Be%2B10JAbgHmtmnWMnpQFSsdkFUVx%2BkQnz108yU%2B51NN5Oo3xR6qRm3pBS9JKHNTfPucAyHX1cplAqngl3PJ82k%2FUUp1q9va8dwlqvDwO00H%2BonMOXL9kXpNFQQiMgmtLUF%2FhAgu%2FegtqyBeAd&X-Amz-Signature=865113331b21577256ed60dc03d1d1d17ad7b38da0ebff442bf60a13b37e488d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
