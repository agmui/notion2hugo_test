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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4VQ7LPQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIHYRyvS6WHLbRUM7yL4QbD3aMzYq0k%2BQf4TzrjNzQ3A1AiEArcsfXpcdoE80Op7d%2FKmMIo5oFdthnjABGsdslEpEiI8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDE0Q5AZ0%2BQwAYVMq3SrcA77Q1uj%2FvNA6bYxUg7%2BDsqC7%2F9h%2FDZlEs0F7M5fXrCfDPeXnCadnT76SfBiPfWk%2BsDkLlO2N7nCAEpukdMg2hSdchT0QzkEOWz6WPJTL0629lH4C%2FHndsd5k9fRBf6nEB6AjZGb2DBxvL%2FLcLBDyPZGEkXrAAEV2Vya%2FUSbclF%2FUwAFelf%2BSKQmE9hQUu5UmbhzqViSHcuf5qh1EC%2FsxsgXPzVFex4UUurPmUyglckdEILVr6azKEJHhjTE4PP0KF5A04r7vtL%2FZNaG2WuNnnChVCPxwcZUR0dgPgfyQcjnoMHU%2BE3VamUP223iHrXhpXATAG2QES7x8i8dON8Q7RwgscHugn9%2FuXDjHXwo%2BQkvyDJ7rt%2BJsB%2B2IeLa75k36xL7ySsW4GNq%2BPDvSy5crpirb3evq6c5oxsDay594LYsDGJunh7BL%2FuEchok%2BH5lSmjrAkbf3bDijOFAYikaQAYEFw6HNL3OO5WS1EocyEpec1Zq0yX%2F4lg63gcr7gHtV%2F%2Fkeo8wi0eOmfdVGaP3wMY76OtgeH9aHFN3uW9atAN4PF7aOzQ4xL%2FoeiQClUqyXdRwv0xKwWEYLqwyOLDeR4YbfX5UNBLgULsAWyMJNHiCYa2ugeAeyzVmaEfngMOreosMGOqUBaSLytseQJ6aw8rK0ehQiA6Cpq%2FocBy9mUFUkT%2BRUGy6AbAtmnRSf8zgffwWvvvL7PC9GpZPoElBz7IGvaADfAZ7gJDbOtm0MI%2BrsbdijuK5IM2Zw1mHrjPj3POyTLjzbt3VPYkITJEbRmIHODBDQPwvZqj1LABJSpBIWeMuxT2ntBPpalk5dnT4rh%2B1jOHK3riADr1Nb3W8oNbA1D7I5zSFXQCfv&X-Amz-Signature=539a3cf7ef4c240135475e773edb691f495c12825e5d95ba4458f859e0157b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4VQ7LPQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIHYRyvS6WHLbRUM7yL4QbD3aMzYq0k%2BQf4TzrjNzQ3A1AiEArcsfXpcdoE80Op7d%2FKmMIo5oFdthnjABGsdslEpEiI8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDE0Q5AZ0%2BQwAYVMq3SrcA77Q1uj%2FvNA6bYxUg7%2BDsqC7%2F9h%2FDZlEs0F7M5fXrCfDPeXnCadnT76SfBiPfWk%2BsDkLlO2N7nCAEpukdMg2hSdchT0QzkEOWz6WPJTL0629lH4C%2FHndsd5k9fRBf6nEB6AjZGb2DBxvL%2FLcLBDyPZGEkXrAAEV2Vya%2FUSbclF%2FUwAFelf%2BSKQmE9hQUu5UmbhzqViSHcuf5qh1EC%2FsxsgXPzVFex4UUurPmUyglckdEILVr6azKEJHhjTE4PP0KF5A04r7vtL%2FZNaG2WuNnnChVCPxwcZUR0dgPgfyQcjnoMHU%2BE3VamUP223iHrXhpXATAG2QES7x8i8dON8Q7RwgscHugn9%2FuXDjHXwo%2BQkvyDJ7rt%2BJsB%2B2IeLa75k36xL7ySsW4GNq%2BPDvSy5crpirb3evq6c5oxsDay594LYsDGJunh7BL%2FuEchok%2BH5lSmjrAkbf3bDijOFAYikaQAYEFw6HNL3OO5WS1EocyEpec1Zq0yX%2F4lg63gcr7gHtV%2F%2Fkeo8wi0eOmfdVGaP3wMY76OtgeH9aHFN3uW9atAN4PF7aOzQ4xL%2FoeiQClUqyXdRwv0xKwWEYLqwyOLDeR4YbfX5UNBLgULsAWyMJNHiCYa2ugeAeyzVmaEfngMOreosMGOqUBaSLytseQJ6aw8rK0ehQiA6Cpq%2FocBy9mUFUkT%2BRUGy6AbAtmnRSf8zgffwWvvvL7PC9GpZPoElBz7IGvaADfAZ7gJDbOtm0MI%2BrsbdijuK5IM2Zw1mHrjPj3POyTLjzbt3VPYkITJEbRmIHODBDQPwvZqj1LABJSpBIWeMuxT2ntBPpalk5dnT4rh%2B1jOHK3riADr1Nb3W8oNbA1D7I5zSFXQCfv&X-Amz-Signature=92daa63596e3a8cac10a871a51cc5920321573c958a2e28ad54fe13b288e02b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
