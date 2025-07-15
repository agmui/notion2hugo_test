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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD4S7WML%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDwLzbGrP%2BhRh8kua1xGMH2SifzNGAXNlgAlZ2JVAle8AIgJC1zdLhQH%2Buh2H%2FFwlBfMS4%2F7XUVopGm74nQbfVY8n8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKNq0rIxxUyexNALmCrcA8jk2w3SG2hRipDX8%2FHqcbgrBDcsJ0PMQfZZyot%2BlLc8staOKRGGXKoj9sTDTbuz1OeAYkL0mOOFFiD5W%2FfUmCXIf1zl1aooAU6uUesPc%2FQXCkm0sNjbo9okT0m%2FcSnN6pm8Rne4pTdJ4MxzsgjUqbPg%2BaUeOyb0Ft1KkKn2f4t%2FjrJkxrZMmSwuWUmGsB%2Bsj0pCA%2BxYXA8DRDVphXrxjeC15NrLU2hk3PxVD5SM0y5KH%2BzQyF5zR%2Bmidx5HRx3kazHtDm41DyLg%2Bj7Wyp6cO97wePdEBttKhDZvnmurwaJGCr18ld%2BC2tYbXCLabD4U50QA%2Fj9C4Pjw3XKPjLGaLFc26n%2FIpKw74A6579Qazway57WTYgfw7XAgeXo9jAXRutOl5FJpl0uM%2B7OieCooXijruCBwMf3Ireg6j1%2FOaeBQ8at9WhcRXAFKk577HMQf1C%2BDTRLhnNnVjpoImjo90qXoyYHtrazXcWfLiJSLiduIPkGj4fv%2BtmkwYy9Dh5iFpFlkxoXP0UWnH1t7FC%2BQ8i1wwcIAscefQWIjZWVivJsfwE%2BkK%2FuAihySj4JJPHa5bMrx5z8sA2GCFSKywCIbii54awfe7%2BKWjdK%2BtWs2TOpc4tgRjWuKD%2B0axfMYMOyG2sMGOqUBbhIK278SvxqBoW6dgFNn%2BsgAH2hDtAfjcB3kyq44gN25tSPs27mJdov56wYSvwxK5VDrGP%2FciL6dPNVXt%2FSN9AEzcXPVlB%2FRiv%2F5sxWxeGGlFLAo00k3t0Rcyl8WR66X94PF4ErVLrHL3tIvme9w5bfpAfLMGDyGKmLdM0VpewVKOFNEUmZdZ4JVWskZpHf5Y5HV%2B%2Ftaub1GJ62XBTJlautOmA0v&X-Amz-Signature=6b7bb26b4d856a481ee9719acd2807bcc2ec9c4cf12aea5283a698638542a8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD4S7WML%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDwLzbGrP%2BhRh8kua1xGMH2SifzNGAXNlgAlZ2JVAle8AIgJC1zdLhQH%2Buh2H%2FFwlBfMS4%2F7XUVopGm74nQbfVY8n8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKNq0rIxxUyexNALmCrcA8jk2w3SG2hRipDX8%2FHqcbgrBDcsJ0PMQfZZyot%2BlLc8staOKRGGXKoj9sTDTbuz1OeAYkL0mOOFFiD5W%2FfUmCXIf1zl1aooAU6uUesPc%2FQXCkm0sNjbo9okT0m%2FcSnN6pm8Rne4pTdJ4MxzsgjUqbPg%2BaUeOyb0Ft1KkKn2f4t%2FjrJkxrZMmSwuWUmGsB%2Bsj0pCA%2BxYXA8DRDVphXrxjeC15NrLU2hk3PxVD5SM0y5KH%2BzQyF5zR%2Bmidx5HRx3kazHtDm41DyLg%2Bj7Wyp6cO97wePdEBttKhDZvnmurwaJGCr18ld%2BC2tYbXCLabD4U50QA%2Fj9C4Pjw3XKPjLGaLFc26n%2FIpKw74A6579Qazway57WTYgfw7XAgeXo9jAXRutOl5FJpl0uM%2B7OieCooXijruCBwMf3Ireg6j1%2FOaeBQ8at9WhcRXAFKk577HMQf1C%2BDTRLhnNnVjpoImjo90qXoyYHtrazXcWfLiJSLiduIPkGj4fv%2BtmkwYy9Dh5iFpFlkxoXP0UWnH1t7FC%2BQ8i1wwcIAscefQWIjZWVivJsfwE%2BkK%2FuAihySj4JJPHa5bMrx5z8sA2GCFSKywCIbii54awfe7%2BKWjdK%2BtWs2TOpc4tgRjWuKD%2B0axfMYMOyG2sMGOqUBbhIK278SvxqBoW6dgFNn%2BsgAH2hDtAfjcB3kyq44gN25tSPs27mJdov56wYSvwxK5VDrGP%2FciL6dPNVXt%2FSN9AEzcXPVlB%2FRiv%2F5sxWxeGGlFLAo00k3t0Rcyl8WR66X94PF4ErVLrHL3tIvme9w5bfpAfLMGDyGKmLdM0VpewVKOFNEUmZdZ4JVWskZpHf5Y5HV%2B%2Ftaub1GJ62XBTJlautOmA0v&X-Amz-Signature=e8d93ce321e96ebf205e5acf2302be28d33102b1272e94d9c9814c41847c575f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
