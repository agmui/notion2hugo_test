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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGC2HRWD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0tKUqsKDCcuD4p4pdasv9q3qEp654RWIFC0eKMjzLqwIhAN3H%2FYpawxP%2B%2BKvt3BEJ3y7j6nEfApc9e4%2FatV5lgeBDKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwB49b55bMFl%2Bej5bQq3ANOpl8%2Fhh2ChLZojLgZBlZLUrcC%2FljKBcDg%2F6Buh4ElymV%2B8rTny7Gm8sBJfVEjGsToV%2F1xlKoEJIrCQj4rECV%2BrPkJ0Lx9P9jXuWCyOLenVIGRB%2FSbI4kSr6hb86tRKkMAUrgPVh7xLugSKN1428LEsN7HvL2Ul66uDA8aVrSNt0rzeO%2BB4Bx8HTfVRSe5NAzndqn2wDhBQtg0obCRr6fIE3QgPTHmaLmPjFdlfCMTS5WvjwjDD2NpNegQ2ycaHR1DO%2F5afgLmLpJO64jqThXsdmSyu5Qv9B0vD23b%2BHDmFDi1nTFHYfTLHEnHk2AqQaks72pemCrq%2BGNyFBEdFnKWSaNDeizJ8C8sItmqdtaA%2FdG3NZkAEfvRVELaE7cPpZWdMKGvDezoTzULCmf%2Fcxcm1%2FEWCk0o85y3IoORSZa9gatLt3dyMvIwTVUe4gCjmWixD1haVmJqRm4bkc%2FUjDNxCxFHx%2BzAQMUS0a9G5GTnvd7cNxRyIIB%2BAV%2BR7RaZVoR4Yn35tq1R4q6FhvYjuG7%2BrfoFbVUJMEBbrLw78KRr7kl5AdBx16UeIG8P%2BwCzh2lTT7qsgrmvUowD8YL9sqxEhtMC87RWAIsC80WzgVAMPdOCIDlA67WT3cUU%2FzCB3prCBjqkAdAIJAPxHONHr7haRvGmzsMVA9un31BvsG11d9fRb0MOXWs0ny7apPfVBeA91JCwcKMlVW56V%2FRdnRNRMY3jaeklGetyW2zGqwbHWjzpGJw%2FBB6qg2L%2FVGJTyDyhCRfjexpcLrKszywsp3pFcAGH6poe2lrJUthxNREjiPDU%2BdxchxCvAozVi6tVshOwXNfl5IALlNECm5lHzferV3Q1rrMcBjcp&X-Amz-Signature=17cb2b9c6a61063488b2c3e587b55a214313f34761d75ed369824d428ac926e9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGC2HRWD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0tKUqsKDCcuD4p4pdasv9q3qEp654RWIFC0eKMjzLqwIhAN3H%2FYpawxP%2B%2BKvt3BEJ3y7j6nEfApc9e4%2FatV5lgeBDKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwB49b55bMFl%2Bej5bQq3ANOpl8%2Fhh2ChLZojLgZBlZLUrcC%2FljKBcDg%2F6Buh4ElymV%2B8rTny7Gm8sBJfVEjGsToV%2F1xlKoEJIrCQj4rECV%2BrPkJ0Lx9P9jXuWCyOLenVIGRB%2FSbI4kSr6hb86tRKkMAUrgPVh7xLugSKN1428LEsN7HvL2Ul66uDA8aVrSNt0rzeO%2BB4Bx8HTfVRSe5NAzndqn2wDhBQtg0obCRr6fIE3QgPTHmaLmPjFdlfCMTS5WvjwjDD2NpNegQ2ycaHR1DO%2F5afgLmLpJO64jqThXsdmSyu5Qv9B0vD23b%2BHDmFDi1nTFHYfTLHEnHk2AqQaks72pemCrq%2BGNyFBEdFnKWSaNDeizJ8C8sItmqdtaA%2FdG3NZkAEfvRVELaE7cPpZWdMKGvDezoTzULCmf%2Fcxcm1%2FEWCk0o85y3IoORSZa9gatLt3dyMvIwTVUe4gCjmWixD1haVmJqRm4bkc%2FUjDNxCxFHx%2BzAQMUS0a9G5GTnvd7cNxRyIIB%2BAV%2BR7RaZVoR4Yn35tq1R4q6FhvYjuG7%2BrfoFbVUJMEBbrLw78KRr7kl5AdBx16UeIG8P%2BwCzh2lTT7qsgrmvUowD8YL9sqxEhtMC87RWAIsC80WzgVAMPdOCIDlA67WT3cUU%2FzCB3prCBjqkAdAIJAPxHONHr7haRvGmzsMVA9un31BvsG11d9fRb0MOXWs0ny7apPfVBeA91JCwcKMlVW56V%2FRdnRNRMY3jaeklGetyW2zGqwbHWjzpGJw%2FBB6qg2L%2FVGJTyDyhCRfjexpcLrKszywsp3pFcAGH6poe2lrJUthxNREjiPDU%2BdxchxCvAozVi6tVshOwXNfl5IALlNECm5lHzferV3Q1rrMcBjcp&X-Amz-Signature=7a368e0aafa1ec5ed9ed3c050285447bf6cac3513e41aa0aceb8448ac80057cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
