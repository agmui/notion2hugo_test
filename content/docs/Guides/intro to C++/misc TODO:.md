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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6JICX5P%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD6shvdtoUPdxo8tZb7zmocmc3FnWrAnZ86noq8madYXwIgC47jLDQ8pSm67ilCNG6wuMbWDqyn5MFmA5HCtS3nf4gqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDNLnJTjiB9%2FVUxlSrcA%2FZu64CWFC0SrC3lTvbo0aDIvYLKw8FIFSH748BsDCBJdfYImIVRfD8NKAtSeqLL6GuMspJIPTYMr9VDmFJziodN4Gc72ZLUsR1g9vZjwlOmJAFBTAUZkGXhloKno9DlEvtqcYt5TrqWWclZX96TR7Soyxlp1Es9xFMmFJUEOHotZpP992o7PJK%2Fz8IWyggShuFKvi1%2FqMMqIOQ4DT48nR%2FsagHJpyrvLxd2drM8jImjOr%2BsaGkwdDzK0lurrbhEzj3JB7BMgfP8FKWmCCZgDcp8TLwe11W1urFSl9NtkTAVlv2YeUvt3EyJhS95PaP%2F6KicyrCZOx58yR%2BOFTUiHGsm%2F09qiLJ7i2NIxLwJM12OL6cANFCHSbtto0e5vJft5SahEYdyMN2vfAa9%2BANrTgZmqb9pPbSN7p0F9HxY%2BMTqfFPpjCvJhXvTQ0jX%2FRIK9RzMmVoNROQFoN0V9Z%2FrHiiQw6ffYSzsbKcXyOSoDsUD1oxPYkce%2Buw7w%2B2OmNaRz1hYMiV8ju5G8zt87oVwxzjERN%2BTIxzgFXPmiTC4%2FMtDyKeeZUbbJcuow499fkAZHL8cROpRV5eaWgVDe4MleBXv3gChk%2BnzLYwCCBXHTpXSXuA8UcRG42v%2BzCroMN2I58MGOqUBTAhxpP8Hb1N5y0LMIqjBdnhrmIRg4zcyqbJdh8Iy3SBYFFw3znTs7XEEI9y8dJE8kkgdWpkZpaqASIiM7QjWIBVh5nTIF5IifqJ9g9%2BodOpBZ4ljKKHP8iHZ8oBpxouRoqfe1qBXoJLNmhsDv2eCz5YCapSrwQI9j5ol663wZuTreQsfr9YSX5yXUZmeGj2Bn141NW6nehkugJtzqVDoh29LFDmC&X-Amz-Signature=e6e76bd9fdaf5a3b990d101c677cbf43132563eaae029505a5490dcac168ed97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6JICX5P%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD6shvdtoUPdxo8tZb7zmocmc3FnWrAnZ86noq8madYXwIgC47jLDQ8pSm67ilCNG6wuMbWDqyn5MFmA5HCtS3nf4gqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDNLnJTjiB9%2FVUxlSrcA%2FZu64CWFC0SrC3lTvbo0aDIvYLKw8FIFSH748BsDCBJdfYImIVRfD8NKAtSeqLL6GuMspJIPTYMr9VDmFJziodN4Gc72ZLUsR1g9vZjwlOmJAFBTAUZkGXhloKno9DlEvtqcYt5TrqWWclZX96TR7Soyxlp1Es9xFMmFJUEOHotZpP992o7PJK%2Fz8IWyggShuFKvi1%2FqMMqIOQ4DT48nR%2FsagHJpyrvLxd2drM8jImjOr%2BsaGkwdDzK0lurrbhEzj3JB7BMgfP8FKWmCCZgDcp8TLwe11W1urFSl9NtkTAVlv2YeUvt3EyJhS95PaP%2F6KicyrCZOx58yR%2BOFTUiHGsm%2F09qiLJ7i2NIxLwJM12OL6cANFCHSbtto0e5vJft5SahEYdyMN2vfAa9%2BANrTgZmqb9pPbSN7p0F9HxY%2BMTqfFPpjCvJhXvTQ0jX%2FRIK9RzMmVoNROQFoN0V9Z%2FrHiiQw6ffYSzsbKcXyOSoDsUD1oxPYkce%2Buw7w%2B2OmNaRz1hYMiV8ju5G8zt87oVwxzjERN%2BTIxzgFXPmiTC4%2FMtDyKeeZUbbJcuow499fkAZHL8cROpRV5eaWgVDe4MleBXv3gChk%2BnzLYwCCBXHTpXSXuA8UcRG42v%2BzCroMN2I58MGOqUBTAhxpP8Hb1N5y0LMIqjBdnhrmIRg4zcyqbJdh8Iy3SBYFFw3znTs7XEEI9y8dJE8kkgdWpkZpaqASIiM7QjWIBVh5nTIF5IifqJ9g9%2BodOpBZ4ljKKHP8iHZ8oBpxouRoqfe1qBXoJLNmhsDv2eCz5YCapSrwQI9j5ol663wZuTreQsfr9YSX5yXUZmeGj2Bn141NW6nehkugJtzqVDoh29LFDmC&X-Amz-Signature=bd0899b029402a69bf123c94d666f0515926cde97013b8b44f35e41d92ac9590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
