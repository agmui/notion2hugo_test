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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5Y4CLV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIHbC%2FAJv8Rx2uk97gwou2nJnPkZwa7oBbeQU64rHug6EAiAUyhDyHukjDURyCRgOmfDBXYJBl5rJePe96blj2aYaPSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMOd%2B8RYMRH1bpZFAQKtwDk%2FDbl0xrfiZy7qvpia%2BlpyPINsTp5rMk6HSD%2Fp3GBM%2FkaovOOXc%2FnQaYcTyWN%2BKw8tAhaZjweEq4mxRisW%2BAyUK27zhSJEvss4qc8gXDcRBKUQ98Ci3HNk1Ke7vFBWqDMdwO%2BV7Z5OizNtMQMW%2FgIofb8cCXpBSZg18mBeI%2BQh%2B1MdLJOR%2B62AFofd9vrCaaNS3ifJIEALM0fjKj4Lmz80U1nfWvmhjR%2B7z%2FGJMb67Pllx3F8apUvcrq691qXWTMuOWN6XuV0pg%2BHwpW7w5KxqqMyTNcnhC3B1TVFRY3ZxyewNA%2BYRQ4VgkuJEq4mNKNynAbrZIVSaskXw8snzXln802YgzpgVVrK%2B%2Fg1MAGP4puDYECKISGGNStzVesPy5JtjiFuCPxX%2BOF7dVjo9m3%2FGrGvX%2BnfeMSA3CUyNBSOr2KrmOM0VLDWEhbuKll7%2BhK2YeCi56wc6qLSm%2F73e4%2Bc558N%2BvuAsaozahQCHTGv1EjzmGylM%2Ff3x2ovnynZK2v7DUrJAzI2YDLJ%2BWr1LHU0c7XKpW%2BolFH8rBZHokr7Ppm5%2BpsK6MnVMcU%2FNdkGxPfj34tIqLNpcu6OEqKPkIEXrIseoMmV1sc2Q64DTJ%2FLVOGzH98qgrj6Psbrsgwzv6tvgY6pgE3JcHnrGK5euYZgVLzhl7ua%2BPXaIGktHBHtFHN%2FZNNOP7K1yeJh3d6NqEzziZU7SzUD7i3g%2BHnj7knqPesDRtWHPRV%2BVdxfhYBfnDuUppwg0EEAlCRcYcesxZ1K4xnuu4Z9j%2BB1Lug5BScue4k0B7%2BOS8xh9UP%2Fd%2Bnxs%2FgQzepJpWOFJpJCK5aDmJzw9s6dm6UE3CGNI95JF40YEWV72VmmEPHltrE&X-Amz-Signature=fcf0e9cce62d42b8961de64dd837948becd0529225ae1835ec5325da85024e55&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5Y4CLV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIHbC%2FAJv8Rx2uk97gwou2nJnPkZwa7oBbeQU64rHug6EAiAUyhDyHukjDURyCRgOmfDBXYJBl5rJePe96blj2aYaPSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMOd%2B8RYMRH1bpZFAQKtwDk%2FDbl0xrfiZy7qvpia%2BlpyPINsTp5rMk6HSD%2Fp3GBM%2FkaovOOXc%2FnQaYcTyWN%2BKw8tAhaZjweEq4mxRisW%2BAyUK27zhSJEvss4qc8gXDcRBKUQ98Ci3HNk1Ke7vFBWqDMdwO%2BV7Z5OizNtMQMW%2FgIofb8cCXpBSZg18mBeI%2BQh%2B1MdLJOR%2B62AFofd9vrCaaNS3ifJIEALM0fjKj4Lmz80U1nfWvmhjR%2B7z%2FGJMb67Pllx3F8apUvcrq691qXWTMuOWN6XuV0pg%2BHwpW7w5KxqqMyTNcnhC3B1TVFRY3ZxyewNA%2BYRQ4VgkuJEq4mNKNynAbrZIVSaskXw8snzXln802YgzpgVVrK%2B%2Fg1MAGP4puDYECKISGGNStzVesPy5JtjiFuCPxX%2BOF7dVjo9m3%2FGrGvX%2BnfeMSA3CUyNBSOr2KrmOM0VLDWEhbuKll7%2BhK2YeCi56wc6qLSm%2F73e4%2Bc558N%2BvuAsaozahQCHTGv1EjzmGylM%2Ff3x2ovnynZK2v7DUrJAzI2YDLJ%2BWr1LHU0c7XKpW%2BolFH8rBZHokr7Ppm5%2BpsK6MnVMcU%2FNdkGxPfj34tIqLNpcu6OEqKPkIEXrIseoMmV1sc2Q64DTJ%2FLVOGzH98qgrj6Psbrsgwzv6tvgY6pgE3JcHnrGK5euYZgVLzhl7ua%2BPXaIGktHBHtFHN%2FZNNOP7K1yeJh3d6NqEzziZU7SzUD7i3g%2BHnj7knqPesDRtWHPRV%2BVdxfhYBfnDuUppwg0EEAlCRcYcesxZ1K4xnuu4Z9j%2BB1Lug5BScue4k0B7%2BOS8xh9UP%2Fd%2Bnxs%2FgQzepJpWOFJpJCK5aDmJzw9s6dm6UE3CGNI95JF40YEWV72VmmEPHltrE&X-Amz-Signature=b427021613ade00a87481e78ad975d217f9167cf7eec76d9f4ab35e779d3ec79&X-Amz-SignedHeaders=host&x-id=GetObject)

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
