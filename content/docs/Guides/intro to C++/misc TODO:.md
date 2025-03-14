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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBDHN4F4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4yymyfO63yVx5EHW593KOhK0kgkasAC%2B70c7CXymT2AiEAnsjlik4qttT%2Faex36gEIX04qKHehvCMujyuG9OTPKscqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5qk5ejTeLNrkCjuSrcA764ZCtKHo0nyDdvkAoT5HcsuAKFQCGz5Sb6riYbCsGwUwNN4rX1izUQYrw65%2BdeyOgIoGSuBWUUswD%2FV1vouIkwrXLoQUucpBp9pjo0v%2FqXN%2BWEF27Cb9L354QSasw5pB9UrOMCSWLFwHXFUDkEElxKlFjSyXOEgaprwZoadR%2Bb0MM03IEZAx56Z6idxleUoGVvmFuQYpwfvEp65618X16XY%2F7KIHcq%2FhvuCj0%2BUtAUT%2Bhd2UGxC5OxWsh%2FplVuL%2Fo20tBv%2FNw1tWTT1HSzci1wYjDr2R%2FLeSPy6TGStQTjaTK%2F%2BNY5KOq1snH%2FJ4ddTVcNwTs25Kd42pnMpNQcysThEa%2FEzwp5LWWEf8vMLbXk3hatMTYmHm%2BGoQukPqEYBF0pKhRJzEBD9gVdhtEioR8LfhwsnJY6TV85Kb91Yr1zte0aZZ0NtwnzvvD%2BhQ2XYO%2BaGnzlHDBtFMuzT9a%2FrCgc0pdEUkFqku02UGDobXswEdCsQ5wAOk9GKlPJzcbOimlrpJnQGQmlOt1T8HNu5dZ6KgUkJw3SAylCOEfX78esBFG53RLP%2BPCs9jKkHoIw2X4uOGonuoFH7x5ewwBu1Wy3YdqE60zXz3XC%2Bbxozdau6QuUPbDSOVo6%2FSa%2FMKyOzr4GOqUBBvrXGvSjAkOxiLhPylrzsIFr5hUYWul3ZJjz407%2Fc89qH2VLP%2BcGc95nn7CtWliIX1AITT6SLEJJMPW8%2BfRr0A%2B698tPOVUhPz73M9SpO1qvgye2UXyb15PR3dYqbdC3A0AmtfCDjmNS1RlLzWPPnbysqWt37uYsy48GsGjAQZ0fxh88eRsq7n23FtNyLSY868n%2F7YPLMspObliSurAoTAw%2FJOMe&X-Amz-Signature=71a5a0d8b7db7bcaf104be207f56051798a9f3506c691a0fb8d9c4fc5e984a79&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBDHN4F4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4yymyfO63yVx5EHW593KOhK0kgkasAC%2B70c7CXymT2AiEAnsjlik4qttT%2Faex36gEIX04qKHehvCMujyuG9OTPKscqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5qk5ejTeLNrkCjuSrcA764ZCtKHo0nyDdvkAoT5HcsuAKFQCGz5Sb6riYbCsGwUwNN4rX1izUQYrw65%2BdeyOgIoGSuBWUUswD%2FV1vouIkwrXLoQUucpBp9pjo0v%2FqXN%2BWEF27Cb9L354QSasw5pB9UrOMCSWLFwHXFUDkEElxKlFjSyXOEgaprwZoadR%2Bb0MM03IEZAx56Z6idxleUoGVvmFuQYpwfvEp65618X16XY%2F7KIHcq%2FhvuCj0%2BUtAUT%2Bhd2UGxC5OxWsh%2FplVuL%2Fo20tBv%2FNw1tWTT1HSzci1wYjDr2R%2FLeSPy6TGStQTjaTK%2F%2BNY5KOq1snH%2FJ4ddTVcNwTs25Kd42pnMpNQcysThEa%2FEzwp5LWWEf8vMLbXk3hatMTYmHm%2BGoQukPqEYBF0pKhRJzEBD9gVdhtEioR8LfhwsnJY6TV85Kb91Yr1zte0aZZ0NtwnzvvD%2BhQ2XYO%2BaGnzlHDBtFMuzT9a%2FrCgc0pdEUkFqku02UGDobXswEdCsQ5wAOk9GKlPJzcbOimlrpJnQGQmlOt1T8HNu5dZ6KgUkJw3SAylCOEfX78esBFG53RLP%2BPCs9jKkHoIw2X4uOGonuoFH7x5ewwBu1Wy3YdqE60zXz3XC%2Bbxozdau6QuUPbDSOVo6%2FSa%2FMKyOzr4GOqUBBvrXGvSjAkOxiLhPylrzsIFr5hUYWul3ZJjz407%2Fc89qH2VLP%2BcGc95nn7CtWliIX1AITT6SLEJJMPW8%2BfRr0A%2B698tPOVUhPz73M9SpO1qvgye2UXyb15PR3dYqbdC3A0AmtfCDjmNS1RlLzWPPnbysqWt37uYsy48GsGjAQZ0fxh88eRsq7n23FtNyLSY868n%2F7YPLMspObliSurAoTAw%2FJOMe&X-Amz-Signature=7d5ed2ebba95d1950bb9ce50601cec9cae185186628d7b9d10c769d1decca322&X-Amz-SignedHeaders=host&x-id=GetObject)

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
