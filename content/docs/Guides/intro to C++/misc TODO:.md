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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3YGPU6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEIMJ4BCAvZlgs6gUgJdhleWQAwKs1AFLGDrbbuHrdBCAiA8qZKHTBYzV6A%2FwIdS%2FylRrg6JfwK0NcrddrPy9f5Vair%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMKmv6RwD095dZTE19KtwDat5lVFDBq44xogkMG%2BammzCYwZyrrk4F4KnZDHO1OkOi1LcfgxSooJ%2F6XJKF5dsqWqupuTz27x4%2BXm1x4O%2Bl2VLuVI2yFjOOIijlHt54N76MwRFz%2FP8utxOCoGtY26uVz65wToM0dIV%2BfwC3SN7D2tWmtnfsAVQ4UOJECqsQKfw8J6dlFgGLlSJovvbz2h%2F36yrtYIcRJwKH34bWj0EHD5XrxK%2F0FZpVBDFLOhw0Jdn07j9Z94pgmRTLnm44NMYuyXgdKpy2LqfpEa5FVbsoPPXFzz60Dz5BwBftiRV9sP6%2FhznTi2DbF78NSz51SQ61kKkvyAFelmt%2Br8zjtfa5biMHhonwjAZWLKUY%2FMcGfUdU8A88T6AGUmHtChnhl6yUAuNquzWdrzEgVQz9QQcvdyaiZ694bW9vdqSMyyVvnXz%2BXJgu4aA9g8D8oZ6ig7f9vPe1xI8Tuk2yohwQFBmqXvqG7kBwmS8Gnp0m5tkVM6KSy2Aud1riJn0n%2FxyMjYKIE3sfD3YmjK32hEUvFsBFAbXDeRRSwSPUgCODEfVH1z%2Byxw6ccGOVFJiqKChAjY00AfH79ylyDzfGuhQEXqJgDZQu4xABVfElojPrBkB%2Ft%2FBvQxXXgimGXBU8mkkwmrT3vQY6pgH41y5F1itjddS%2F8GC%2FPDz9f3PVU%2B29v%2BQmMjTKv89mWrl7uyO78yHmKrhvWyVlG4JWOXNGwupYSUo6p18LO%2Fi1baNSAB%2F21ek7pKPFz6NPaBYHwYBp5zPooFnafgxFwA8Nu0vUP9HJ3gKu27TEAUHY%2FdFgeTVRnplQm6GAE7mDZPKwhRbXoqiQeZDJ69rmBNncBEfAibEREp%2F4VlMkLX%2BGmpnbSUTe&X-Amz-Signature=5a5abe26cc41af894950c9954911ff4c0db7edcb73d2f348b3a9ab644dad5480&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3YGPU6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEIMJ4BCAvZlgs6gUgJdhleWQAwKs1AFLGDrbbuHrdBCAiA8qZKHTBYzV6A%2FwIdS%2FylRrg6JfwK0NcrddrPy9f5Vair%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMKmv6RwD095dZTE19KtwDat5lVFDBq44xogkMG%2BammzCYwZyrrk4F4KnZDHO1OkOi1LcfgxSooJ%2F6XJKF5dsqWqupuTz27x4%2BXm1x4O%2Bl2VLuVI2yFjOOIijlHt54N76MwRFz%2FP8utxOCoGtY26uVz65wToM0dIV%2BfwC3SN7D2tWmtnfsAVQ4UOJECqsQKfw8J6dlFgGLlSJovvbz2h%2F36yrtYIcRJwKH34bWj0EHD5XrxK%2F0FZpVBDFLOhw0Jdn07j9Z94pgmRTLnm44NMYuyXgdKpy2LqfpEa5FVbsoPPXFzz60Dz5BwBftiRV9sP6%2FhznTi2DbF78NSz51SQ61kKkvyAFelmt%2Br8zjtfa5biMHhonwjAZWLKUY%2FMcGfUdU8A88T6AGUmHtChnhl6yUAuNquzWdrzEgVQz9QQcvdyaiZ694bW9vdqSMyyVvnXz%2BXJgu4aA9g8D8oZ6ig7f9vPe1xI8Tuk2yohwQFBmqXvqG7kBwmS8Gnp0m5tkVM6KSy2Aud1riJn0n%2FxyMjYKIE3sfD3YmjK32hEUvFsBFAbXDeRRSwSPUgCODEfVH1z%2Byxw6ccGOVFJiqKChAjY00AfH79ylyDzfGuhQEXqJgDZQu4xABVfElojPrBkB%2Ft%2FBvQxXXgimGXBU8mkkwmrT3vQY6pgH41y5F1itjddS%2F8GC%2FPDz9f3PVU%2B29v%2BQmMjTKv89mWrl7uyO78yHmKrhvWyVlG4JWOXNGwupYSUo6p18LO%2Fi1baNSAB%2F21ek7pKPFz6NPaBYHwYBp5zPooFnafgxFwA8Nu0vUP9HJ3gKu27TEAUHY%2FdFgeTVRnplQm6GAE7mDZPKwhRbXoqiQeZDJ69rmBNncBEfAibEREp%2F4VlMkLX%2BGmpnbSUTe&X-Amz-Signature=00c2a37480b0a8fc6a509ee68cc407770f130793c339cea38b0085b2bdd549c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
