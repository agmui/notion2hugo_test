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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAERJSP%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCEPPg4jRkqsMKIlwdE3Psf2Zg5jaVjaeuTUMu9aCDZggIgb%2FDKXolcHFnkGVDFah63ZJ3%2BIbelq%2B20tTvp%2F9%2FKPO8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDOoUtVPOxuPFq9PQ%2BCrcA%2FcyHd0IA11%2Bw3Wd3aLvc2keq0dtStGbtwurWTmER7yNDhzKs3Xz%2BJPRmkoqujYwzF7JVP0twPMMAaDrYoYnfk%2FCDyLrg90bAaNb8ltKaKDTbFViSqIwko%2F8M87R43%2B47gjvKRYT6L4Yqo9la9q8vlZpBxhOtBfxaLIU60L4VerEHljGfilOy0n43S%2BZql2OmCX6mtKGPjHVHLxYJ9i8OwHYBPER%2FZJviZTGiv8Leh%2B0CRNNXMeBkBebQJL2g34KJ3CSpOH2IoWS14Fyjuz1BHFMZVSwVuZBZvEv4ZQtyCPPyQQOxiCAaOkQskafaVGuQwxg5SoZAt4JA%2FYTdFaipxe%2B1Wcj6wp%2BW5%2B1%2FOZ%2BdExQONIBmQgejA1Pw1teG4CTD%2FZGUe9p5zQGlHWkV4ezgTT3O%2FevdkJPUPsiXxRT4iMs0A04T8K56ROAhYJtpFpnmr1pBXQvct19bGafP6ammtHkmJ3b7NnI1cOyDR9V%2FH8I0TvraJzdNcndc5Kiwa%2F9bWbADhA6uiaw5AGv6u7uX5lwuB10XOupQiPXSpV775bopQUuzQDkpp6XPFo0sCtghNVH%2BoWlm8VIY4EjnrOJG4RFHm%2BNdEL%2B90oB%2B2mdB46bw6GZAEmw%2B2iPk8I%2FMN%2BAyr0GOqUBryY%2BGBCbyLpWYYe%2FwxQ%2BzGfEJ6jXVEBDrv6yBILCV%2B7NW5qeyyfbvkj6QA%2Bhi1ymZO9bDkpPkk9ePdA65Pi1qljQtIWYctPP6ehJTGj1sjLl4Z5xIUKHpv9lNPgbXwi6Blm4uyrCmmjNcTcGDCeuswwO%2BKTibX6Y6HXlufxVuCBydj5cbN1WwL1fIFLLfhzbD4%2F%2F9rg0kdp%2BDZFALv4m3lfYBDaP&X-Amz-Signature=0f0e9c8acbe045635a157f21988895b8bf5751ec5ca3a45f41f8a4d4ee5ee281&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAERJSP%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCEPPg4jRkqsMKIlwdE3Psf2Zg5jaVjaeuTUMu9aCDZggIgb%2FDKXolcHFnkGVDFah63ZJ3%2BIbelq%2B20tTvp%2F9%2FKPO8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDOoUtVPOxuPFq9PQ%2BCrcA%2FcyHd0IA11%2Bw3Wd3aLvc2keq0dtStGbtwurWTmER7yNDhzKs3Xz%2BJPRmkoqujYwzF7JVP0twPMMAaDrYoYnfk%2FCDyLrg90bAaNb8ltKaKDTbFViSqIwko%2F8M87R43%2B47gjvKRYT6L4Yqo9la9q8vlZpBxhOtBfxaLIU60L4VerEHljGfilOy0n43S%2BZql2OmCX6mtKGPjHVHLxYJ9i8OwHYBPER%2FZJviZTGiv8Leh%2B0CRNNXMeBkBebQJL2g34KJ3CSpOH2IoWS14Fyjuz1BHFMZVSwVuZBZvEv4ZQtyCPPyQQOxiCAaOkQskafaVGuQwxg5SoZAt4JA%2FYTdFaipxe%2B1Wcj6wp%2BW5%2B1%2FOZ%2BdExQONIBmQgejA1Pw1teG4CTD%2FZGUe9p5zQGlHWkV4ezgTT3O%2FevdkJPUPsiXxRT4iMs0A04T8K56ROAhYJtpFpnmr1pBXQvct19bGafP6ammtHkmJ3b7NnI1cOyDR9V%2FH8I0TvraJzdNcndc5Kiwa%2F9bWbADhA6uiaw5AGv6u7uX5lwuB10XOupQiPXSpV775bopQUuzQDkpp6XPFo0sCtghNVH%2BoWlm8VIY4EjnrOJG4RFHm%2BNdEL%2B90oB%2B2mdB46bw6GZAEmw%2B2iPk8I%2FMN%2BAyr0GOqUBryY%2BGBCbyLpWYYe%2FwxQ%2BzGfEJ6jXVEBDrv6yBILCV%2B7NW5qeyyfbvkj6QA%2Bhi1ymZO9bDkpPkk9ePdA65Pi1qljQtIWYctPP6ehJTGj1sjLl4Z5xIUKHpv9lNPgbXwi6Blm4uyrCmmjNcTcGDCeuswwO%2BKTibX6Y6HXlufxVuCBydj5cbN1WwL1fIFLLfhzbD4%2F%2F9rg0kdp%2BDZFALv4m3lfYBDaP&X-Amz-Signature=bf7ad5122b56bef77865f13e990aee9742c26de06b751a0772912ba583a7b450&X-Amz-SignedHeaders=host&x-id=GetObject)

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
