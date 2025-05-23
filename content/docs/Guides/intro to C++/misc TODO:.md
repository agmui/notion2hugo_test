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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH73FBWC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDLjKEnx69W44kXBeHT8MaiOBFN%2BbH7Wh%2FvJoRwdQuQ8AIhAOSavAsYGLZm9oN6pWLiQD5xdCDr1T4CmW6D%2BxAObNiFKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz%2BN4wdeYK9rVL0Lgq3AORvmmioKI2UV%2Br9MoMGvmX048gg1Vyh12JvqFvfv0jUXfsVsPxSunbeaZhotHae5ia3CaHK%2BGZ3hdKeyhVtoUactRf6x5hMd2HtGFRmmgMlbboX3JBOiz0qSL3VS1YfRo9FAwPo%2F7ZpdC112BibujuqGThzGPc9w%2FCWz%2FGwKAwhl8zWdHKQz%2FdJ4eNpJMTTYxaLsj4RqJbR3m3JewCg4Eir%2BxDgt5pnR4K7rroD0NdtJ2DTY8aebiUKfy2mkMuw7DN5PuUftJCMyiXT6WWkjasQKNqa5bQslsxIqwGrxUVjelzVPSHaV0%2Fyv9ULKfBPUdmgsuE%2B2gAlzxUKbsoXEjfyirplyDBn18ACBNBgBsHofUYZOr0kkO9zLoMDTPrTR0Wr7EqBU1VF4f8L%2FbtFiz4tqGwrRzkF4E3Q1I%2FtdVmQ7r6oCbCi%2B5bo5UHI%2Bx7FkkgBFBdO3dteMfQ52i%2FDXGbqjnt47unUPSUbJ5ufLuPzCvAEEe53PHRAIsndZ8Klw40KQmmngDfpVQywXzAynC4y8Yol%2Fq9rPr0qN7aAuGrprsqR8pS0VxTrbcZlOASXceb51YbUacfkBB%2FnyPiRTjEXaadyh25wvjxvwZ0Pb9mcmnjbWHF%2FQZZybYz%2FDDqvcLBBjqkAYgpTbfF3xMVXJC5uKLhoxuA3cWkAGfLgLtM3sGjTteRSoqg9b7WiUJyA8P%2FOF4K6orqFdQaNj0rYgMcQCG9CzFBSbLsSCIh7Rps1nB1nU6TvjFxpvRTLVap7S%2BYvTJLjNHKV7JEsVBxwH07HCm2CPIqH8Khd0jK4NVnIvED7%2B40OAHKlRj1mfhKu1VwITn0B%2B8aBmB08swLCOqZW3auUnoNt%2BPU&X-Amz-Signature=f9ab51e27934e91fa1308d88c7bee0ad746f02c688a10ac462989bea5b815676&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH73FBWC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDLjKEnx69W44kXBeHT8MaiOBFN%2BbH7Wh%2FvJoRwdQuQ8AIhAOSavAsYGLZm9oN6pWLiQD5xdCDr1T4CmW6D%2BxAObNiFKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz%2BN4wdeYK9rVL0Lgq3AORvmmioKI2UV%2Br9MoMGvmX048gg1Vyh12JvqFvfv0jUXfsVsPxSunbeaZhotHae5ia3CaHK%2BGZ3hdKeyhVtoUactRf6x5hMd2HtGFRmmgMlbboX3JBOiz0qSL3VS1YfRo9FAwPo%2F7ZpdC112BibujuqGThzGPc9w%2FCWz%2FGwKAwhl8zWdHKQz%2FdJ4eNpJMTTYxaLsj4RqJbR3m3JewCg4Eir%2BxDgt5pnR4K7rroD0NdtJ2DTY8aebiUKfy2mkMuw7DN5PuUftJCMyiXT6WWkjasQKNqa5bQslsxIqwGrxUVjelzVPSHaV0%2Fyv9ULKfBPUdmgsuE%2B2gAlzxUKbsoXEjfyirplyDBn18ACBNBgBsHofUYZOr0kkO9zLoMDTPrTR0Wr7EqBU1VF4f8L%2FbtFiz4tqGwrRzkF4E3Q1I%2FtdVmQ7r6oCbCi%2B5bo5UHI%2Bx7FkkgBFBdO3dteMfQ52i%2FDXGbqjnt47unUPSUbJ5ufLuPzCvAEEe53PHRAIsndZ8Klw40KQmmngDfpVQywXzAynC4y8Yol%2Fq9rPr0qN7aAuGrprsqR8pS0VxTrbcZlOASXceb51YbUacfkBB%2FnyPiRTjEXaadyh25wvjxvwZ0Pb9mcmnjbWHF%2FQZZybYz%2FDDqvcLBBjqkAYgpTbfF3xMVXJC5uKLhoxuA3cWkAGfLgLtM3sGjTteRSoqg9b7WiUJyA8P%2FOF4K6orqFdQaNj0rYgMcQCG9CzFBSbLsSCIh7Rps1nB1nU6TvjFxpvRTLVap7S%2BYvTJLjNHKV7JEsVBxwH07HCm2CPIqH8Khd0jK4NVnIvED7%2B40OAHKlRj1mfhKu1VwITn0B%2B8aBmB08swLCOqZW3auUnoNt%2BPU&X-Amz-Signature=71b6343506074e90aac29739583dc6cb3d368a196b0224ae948cf822ac047037&X-Amz-SignedHeaders=host&x-id=GetObject)

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
