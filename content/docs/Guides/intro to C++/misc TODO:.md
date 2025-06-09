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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GLWT5AD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGS7dKejQIQ%2BwKwxF6m5KFJeB566Fcruqa1U8oeiBhHmAiEAw1UiICmYvr00qZy5WSAm2532cZSfPEI6i1%2FjmZauKhsqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFjIpML6W7OSMoINSrcA87MuoUsmMHVksRQpJ681Kdz7NgdKRJgoCxuzcPqgtQiZ%2FnI2b69PwXcht7%2BGQ1Y6%2BB12oDqF8qAJhp1zHs%2FBEDsvyZ215oFJouq3wZwFRjw9eIMm6uYx9Se3pIAPx2Z%2F9OJqV2aa5fM6FeSpiYwptCPzz9Q9HVc%2BVllkF%2BbcAQaeh6J2ffzkYPY9usdwixkGz1AXGzNn%2B2Bz%2Bho3YxLsxupqDPtgZRmOusDrSwjeixYo%2FZmBoxGZnUYn6O9y7qwdmgqsL3Ft2L1bbWbcjZYwRLaktjQaz9fTE%2FAHe%2F0zzbXy4gSiaLAKhFMSPTvTo2gerFiYWFLOdyzulrPbK4hRtpHWN%2FC2u3RbRP3FWpmVRYDkLXND%2FIiGJn2juv%2FSNSC02gU025hEohOZ7S0R92FGfCBiPgPFjHw7txarnWN70oSwcwa1lIcaHp67yTJHHvGwxiAfnD9fEMsPDqAvcios8%2F3pDXWez26rZJtvBTO5Q%2Bda%2Blwmw9jGPxIk5KhqYSLottz84CqrCqk%2BrjrEwHYGQiS50H1FxRFmIPWqPlPgsRANKKuPo7OO%2Bfq5pZ1mknwn9aqAYthRjSIjtM21aa7Cbqnq8hq8xAvZlha1ZGpaYSEUKP8wQpKr9KSaUkiMM3DncIGOqUB7t9jFHYeulTc02tvMeXhWWVgOFlZlwKEnGk9WA1RlkStcypy%2FPDrR7c1dbupjU3Q6FSyWB9HB2HjkzbXdPCIGq83tVHaDlGNZzCZja%2BaRjTmpuo7EotkKhU5s614sqPFBRJn7e9IO1zaj7wy3qcM13w0mOXM3K2ubTtk3h6PZfJThNLqPY%2F0bIPoGz%2F4w0is5T%2FPHH0Ea1gI1J3aTdY7KQak2BlX&X-Amz-Signature=edc269ed3a1232526f269a73ced87ded28618689f36ee5ca62d73614901a8e71&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GLWT5AD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGS7dKejQIQ%2BwKwxF6m5KFJeB566Fcruqa1U8oeiBhHmAiEAw1UiICmYvr00qZy5WSAm2532cZSfPEI6i1%2FjmZauKhsqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFjIpML6W7OSMoINSrcA87MuoUsmMHVksRQpJ681Kdz7NgdKRJgoCxuzcPqgtQiZ%2FnI2b69PwXcht7%2BGQ1Y6%2BB12oDqF8qAJhp1zHs%2FBEDsvyZ215oFJouq3wZwFRjw9eIMm6uYx9Se3pIAPx2Z%2F9OJqV2aa5fM6FeSpiYwptCPzz9Q9HVc%2BVllkF%2BbcAQaeh6J2ffzkYPY9usdwixkGz1AXGzNn%2B2Bz%2Bho3YxLsxupqDPtgZRmOusDrSwjeixYo%2FZmBoxGZnUYn6O9y7qwdmgqsL3Ft2L1bbWbcjZYwRLaktjQaz9fTE%2FAHe%2F0zzbXy4gSiaLAKhFMSPTvTo2gerFiYWFLOdyzulrPbK4hRtpHWN%2FC2u3RbRP3FWpmVRYDkLXND%2FIiGJn2juv%2FSNSC02gU025hEohOZ7S0R92FGfCBiPgPFjHw7txarnWN70oSwcwa1lIcaHp67yTJHHvGwxiAfnD9fEMsPDqAvcios8%2F3pDXWez26rZJtvBTO5Q%2Bda%2Blwmw9jGPxIk5KhqYSLottz84CqrCqk%2BrjrEwHYGQiS50H1FxRFmIPWqPlPgsRANKKuPo7OO%2Bfq5pZ1mknwn9aqAYthRjSIjtM21aa7Cbqnq8hq8xAvZlha1ZGpaYSEUKP8wQpKr9KSaUkiMM3DncIGOqUB7t9jFHYeulTc02tvMeXhWWVgOFlZlwKEnGk9WA1RlkStcypy%2FPDrR7c1dbupjU3Q6FSyWB9HB2HjkzbXdPCIGq83tVHaDlGNZzCZja%2BaRjTmpuo7EotkKhU5s614sqPFBRJn7e9IO1zaj7wy3qcM13w0mOXM3K2ubTtk3h6PZfJThNLqPY%2F0bIPoGz%2F4w0is5T%2FPHH0Ea1gI1J3aTdY7KQak2BlX&X-Amz-Signature=8f8824a02867473f88c71132968fd764dd23fa36425ec3a854b472c734e48c1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
