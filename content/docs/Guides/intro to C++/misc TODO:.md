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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYE5DR4R%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGX5avCqKAZumT7VUbGTw7tM%2F%2BrSklBkTdOT9kcUy3ZGAiEAyVKkYVImGj761Gmwb%2B12UfhmSl1vSciQXeQicYI2kagqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlTtADUX8LA4cA4MyrcA6cr%2Fl%2BMZY2FRuf%2B9I95O14wsPPeVSTpCResf5K29tkEmOkyIepuc8051GPWSIoj%2B7Rf7YNQXSXzIfWc6Xwh4EjkpYNM%2BcJyZuRTSZ%2BVIvtaL5JDA6izIW12RQ6KsymxDMQRNpsreKKDVOxrWZG76hDhCPbNEiBVRbTFEaJjYidJ5VKSrGshD7YOokdYFtG%2BA%2FpNBvBRYWL1OiTAFgcyY6SptFX2oFwjtVsJj7Z%2FU6Vo8k7IqbVk6E1sB%2Bs1aE%2BC63gC32kqWofQnmwsG7VD6SmOxFoIC%2BklsRG66gCjH4IFI%2B%2BMIJslQxeAorPfbwZ4XeH2s8zYhSawRxGZk5YKGg7sMaeGSepPsV%2F%2FmbT7iFunUwSfJqzzbVYwI1jmuwf%2BP2pLy6hRUxlnpJU7xDjmm8CRLdajMAKAkeXpvDO%2BQbHCohPiOuiVdELeZOLS3KygMuJmJP5lgOAMOTdWWyAtxSlAh1MjY4YqnzC6Q2ySbwvKgysY8Pb%2F8oWGw6c5aVWJFWnlTfYH7JfllSDT%2Fu3HQJ8d%2FmuNV%2FWwFWTXPWbyCb%2FYgtdAwlzdLXvy4k0yEZTp5Q6ubcJuKgonD%2Fdd8BFd5BVknJOu9R%2F%2F5rh7yeO%2BuElKlI4mJzbnqxsoulZ0MJLKysIGOqUByAAzUWqjJz1kOxWsYfGaFiGPhlAFir4WfMBsbbSy2igqXRyQqnbl4ADthnEYkxgitwQq0mSTsEMm90lq7X501J87NClZLxstLnXDdZSTdF00Z3UIEfVi1I4tx2RNZyvSelrQxO%2B3t3S3rHJUEtKCsLd25ytRUzCrp73w7cnjZVrkdGP%2B6x21X5ULwxprRNeddzKKEel5NZz91MAt0p8v8uWW7Kas&X-Amz-Signature=d99168c83870f3b2c3fd148a74de7710206077c498689468b7410057218a36bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYE5DR4R%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGX5avCqKAZumT7VUbGTw7tM%2F%2BrSklBkTdOT9kcUy3ZGAiEAyVKkYVImGj761Gmwb%2B12UfhmSl1vSciQXeQicYI2kagqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlTtADUX8LA4cA4MyrcA6cr%2Fl%2BMZY2FRuf%2B9I95O14wsPPeVSTpCResf5K29tkEmOkyIepuc8051GPWSIoj%2B7Rf7YNQXSXzIfWc6Xwh4EjkpYNM%2BcJyZuRTSZ%2BVIvtaL5JDA6izIW12RQ6KsymxDMQRNpsreKKDVOxrWZG76hDhCPbNEiBVRbTFEaJjYidJ5VKSrGshD7YOokdYFtG%2BA%2FpNBvBRYWL1OiTAFgcyY6SptFX2oFwjtVsJj7Z%2FU6Vo8k7IqbVk6E1sB%2Bs1aE%2BC63gC32kqWofQnmwsG7VD6SmOxFoIC%2BklsRG66gCjH4IFI%2B%2BMIJslQxeAorPfbwZ4XeH2s8zYhSawRxGZk5YKGg7sMaeGSepPsV%2F%2FmbT7iFunUwSfJqzzbVYwI1jmuwf%2BP2pLy6hRUxlnpJU7xDjmm8CRLdajMAKAkeXpvDO%2BQbHCohPiOuiVdELeZOLS3KygMuJmJP5lgOAMOTdWWyAtxSlAh1MjY4YqnzC6Q2ySbwvKgysY8Pb%2F8oWGw6c5aVWJFWnlTfYH7JfllSDT%2Fu3HQJ8d%2FmuNV%2FWwFWTXPWbyCb%2FYgtdAwlzdLXvy4k0yEZTp5Q6ubcJuKgonD%2Fdd8BFd5BVknJOu9R%2F%2F5rh7yeO%2BuElKlI4mJzbnqxsoulZ0MJLKysIGOqUByAAzUWqjJz1kOxWsYfGaFiGPhlAFir4WfMBsbbSy2igqXRyQqnbl4ADthnEYkxgitwQq0mSTsEMm90lq7X501J87NClZLxstLnXDdZSTdF00Z3UIEfVi1I4tx2RNZyvSelrQxO%2B3t3S3rHJUEtKCsLd25ytRUzCrp73w7cnjZVrkdGP%2B6x21X5ULwxprRNeddzKKEel5NZz91MAt0p8v8uWW7Kas&X-Amz-Signature=eed75107f18cef4c4b686d5cab5e1d69c7fccf2caae8a6acc5edbfc6753bb28e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
