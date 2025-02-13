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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXBBMXHS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDivloCp4CjWBoJsS9GGYGsyO7ymzvgzwbTvz%2FR5ojn8gIhANXyQ0MlNwTnacspH9C%2Fq54rLkZnk%2Fxn%2FI2VdgsfHbkVKv8DCB8QABoMNjM3NDIzMTgzODA1Igw3GCHU%2BPpbIQ1AjJsq3APnCSnYbNmbMpsRvGy%2FmPPmMEqi%2FBEZzT7YCcKtDhgM2%2BWTT3wBhbBYp57zGzS5pIR3zcSfMwcD7ATw9%2Bot%2BURTqkoGq2Wnm7d1UI6La0JXmzIeXcbwMsPQ9lvxbUO%2B%2FEAsNFiSCAfV6b70vzT1hiHBGY7cPnR2Uzaotm8zB4HiDH8yKUlAhUcYHXAsolcSqTCCFGeKqAQGkUZQ%2FxnCFtyADorA2G6bhNMRuiqt7a5hrQmaRylkbccOxGFy0QkCZwPR5aJtMi0UK1dHekcfgv880NmyX0OwGMBbBkU1B7mJE27CL2cQhthsDSpe2A%2F01aCF9JMGnrs9HrhsjcD4Br5WQvcTHVV9nB2eZT4CGY2dYvhUDJ7ltObiu%2BlLAtQbss8861VnoK8pdXpUVZLi%2F%2BJE65sZjKG%2FzfNipMdxuOdGI5E8Ws2OAO2fD8%2BFSdNcysFjzpHcUWYTKL9Y7uc7Ks03D0Xg5rYfkdRf37q3KLJ5MpobRccJf8D%2BSwOQU%2BgrpQD0ilwKWGcCA1tq%2B3Lj%2BiJ7gUvMzvJHyuuNYKk0mzNDlhUwPXK%2FTEpTeR2sHpJIhV%2BVQpR%2BaRVRu5BeAfs2JOhCY0gUc6ojSzA2XbbctIn2joeBPJJ2aTSiqZyBQDCt2rm9BjqkAaoVzdhYvfnz0QlBCXmDm3Q5qC9Z7frl3Ne1WskKxHMDVFh8abnuFepGSmXjWHcK9SkXznV2mLM7w49t3gh4W2%2BLYGx9LAsc%2BelifGxZR74%2F%2FhMpspFUdJYOxSMY20%2BMuiGlh1eIrQvWBS3qdtazolyIQo1WkRycslwtFnUPU0RpuSfrz8rt45q0PgiXNCg%2BZRPRP1s8tM20lOCOidzYIfsdoccO&X-Amz-Signature=e07a10dc0d1ee3c464e326176ecec637ebd5be55f060a80d922cf297495386ec&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXBBMXHS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDivloCp4CjWBoJsS9GGYGsyO7ymzvgzwbTvz%2FR5ojn8gIhANXyQ0MlNwTnacspH9C%2Fq54rLkZnk%2Fxn%2FI2VdgsfHbkVKv8DCB8QABoMNjM3NDIzMTgzODA1Igw3GCHU%2BPpbIQ1AjJsq3APnCSnYbNmbMpsRvGy%2FmPPmMEqi%2FBEZzT7YCcKtDhgM2%2BWTT3wBhbBYp57zGzS5pIR3zcSfMwcD7ATw9%2Bot%2BURTqkoGq2Wnm7d1UI6La0JXmzIeXcbwMsPQ9lvxbUO%2B%2FEAsNFiSCAfV6b70vzT1hiHBGY7cPnR2Uzaotm8zB4HiDH8yKUlAhUcYHXAsolcSqTCCFGeKqAQGkUZQ%2FxnCFtyADorA2G6bhNMRuiqt7a5hrQmaRylkbccOxGFy0QkCZwPR5aJtMi0UK1dHekcfgv880NmyX0OwGMBbBkU1B7mJE27CL2cQhthsDSpe2A%2F01aCF9JMGnrs9HrhsjcD4Br5WQvcTHVV9nB2eZT4CGY2dYvhUDJ7ltObiu%2BlLAtQbss8861VnoK8pdXpUVZLi%2F%2BJE65sZjKG%2FzfNipMdxuOdGI5E8Ws2OAO2fD8%2BFSdNcysFjzpHcUWYTKL9Y7uc7Ks03D0Xg5rYfkdRf37q3KLJ5MpobRccJf8D%2BSwOQU%2BgrpQD0ilwKWGcCA1tq%2B3Lj%2BiJ7gUvMzvJHyuuNYKk0mzNDlhUwPXK%2FTEpTeR2sHpJIhV%2BVQpR%2BaRVRu5BeAfs2JOhCY0gUc6ojSzA2XbbctIn2joeBPJJ2aTSiqZyBQDCt2rm9BjqkAaoVzdhYvfnz0QlBCXmDm3Q5qC9Z7frl3Ne1WskKxHMDVFh8abnuFepGSmXjWHcK9SkXznV2mLM7w49t3gh4W2%2BLYGx9LAsc%2BelifGxZR74%2F%2FhMpspFUdJYOxSMY20%2BMuiGlh1eIrQvWBS3qdtazolyIQo1WkRycslwtFnUPU0RpuSfrz8rt45q0PgiXNCg%2BZRPRP1s8tM20lOCOidzYIfsdoccO&X-Amz-Signature=5106badf570d0634c7269d2647103d87d63792688235e46aa5ab690bc2e9499c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
