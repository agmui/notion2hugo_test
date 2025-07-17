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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M7AXJND%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDWOW2JJXRy3xP76fC%2FKFUcfdNXWVjpKa4as3sDz0RxWwIhAOy3c0%2BRei%2BiPXIOFxLKnkop1MG%2BXySdiA5QxOxoGJdhKv8DCHIQABoMNjM3NDIzMTgzODA1IgzLKSa4tDXlUTiZcrkq3APXdyVP66Zmfb9TkXzK7N91%2F%2BqNsxE71ps0MUl4OkAixDOmE8yqvCrXFkkLmRv%2Fgba3m4eWzLEv82PfnDGeINYcsgLO11qJApFfxNiApnmNYfU%2BoBj%2F5QSeqyXlhP2Z4WkL1ut%2Fo%2FJszvyrj%2BFs1QBBSaLVgnevpPxwOhi7cYWFK%2Bdbe6UZ%2FOetIsIMvRwhJAOifn1had0ufnbtinbrwG599AZTHzXjnpxoHtWFkXvn%2Bj81IuAmtTsB9QULPV5mbAAn12NL%2FV3iuEuemdEpmtqMJBJ0sxrIvF%2FDOpLv5bv4KMTv1v3qbV5hGXmXfjEet9JwEY46WLoqWBsQx88GC%2BYMaYTQ8FjJKRFGgCESj1TrT0YZO71cxmCp5C33480lYNCq8K6ZlsxB%2F2H7Z88cWoXRURgWwWJLXGAz%2BRImYaFUdsN8Ei8hAfA2sBv13SaKZ%2BDexoRm663Kj2gSIf0WxJHY0isre5jo0%2BR7%2FSIhTIgj0pmns2FNEqYxLST0fFYSM%2B9GpSF%2BR%2FFaLiyVEFA9OKvm0tcM7IzZtPT2yWggC3aNmruGijLy6C%2Fe54pjbXzBGACgPES%2F%2FE2RVtW4tfkzcCF0ZnOhpDz3ZSigaTstZgHVeB07UWf5s6ComnW%2FqDDy6%2BLDBjqkAf0okkBTzFnCTJes8ZSEi7pZLr2%2FZIR3pHPTRy%2FY4q2lYKif3a0MXZMSB69Tc5vmJW8k4YDJ2NwBmLtK8FCiuWB%2FU8%2B0gK8Gb4RW0onmVxsgPE1FCaNTday8w4xDsNZLH%2BurOBjyhm7tW2%2Fp6vGwwbK7uTHT3u64JZf5N%2BEnr2ighpVQwqzCnIBB8rGRyiE55S%2BcHv01eEvU1iypApxF9v%2Fa57sE&X-Amz-Signature=7efda5ced102c940596e8c257c5a2d3f5cabe88e7f40842a2f2fed87f2766db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M7AXJND%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDWOW2JJXRy3xP76fC%2FKFUcfdNXWVjpKa4as3sDz0RxWwIhAOy3c0%2BRei%2BiPXIOFxLKnkop1MG%2BXySdiA5QxOxoGJdhKv8DCHIQABoMNjM3NDIzMTgzODA1IgzLKSa4tDXlUTiZcrkq3APXdyVP66Zmfb9TkXzK7N91%2F%2BqNsxE71ps0MUl4OkAixDOmE8yqvCrXFkkLmRv%2Fgba3m4eWzLEv82PfnDGeINYcsgLO11qJApFfxNiApnmNYfU%2BoBj%2F5QSeqyXlhP2Z4WkL1ut%2Fo%2FJszvyrj%2BFs1QBBSaLVgnevpPxwOhi7cYWFK%2Bdbe6UZ%2FOetIsIMvRwhJAOifn1had0ufnbtinbrwG599AZTHzXjnpxoHtWFkXvn%2Bj81IuAmtTsB9QULPV5mbAAn12NL%2FV3iuEuemdEpmtqMJBJ0sxrIvF%2FDOpLv5bv4KMTv1v3qbV5hGXmXfjEet9JwEY46WLoqWBsQx88GC%2BYMaYTQ8FjJKRFGgCESj1TrT0YZO71cxmCp5C33480lYNCq8K6ZlsxB%2F2H7Z88cWoXRURgWwWJLXGAz%2BRImYaFUdsN8Ei8hAfA2sBv13SaKZ%2BDexoRm663Kj2gSIf0WxJHY0isre5jo0%2BR7%2FSIhTIgj0pmns2FNEqYxLST0fFYSM%2B9GpSF%2BR%2FFaLiyVEFA9OKvm0tcM7IzZtPT2yWggC3aNmruGijLy6C%2Fe54pjbXzBGACgPES%2F%2FE2RVtW4tfkzcCF0ZnOhpDz3ZSigaTstZgHVeB07UWf5s6ComnW%2FqDDy6%2BLDBjqkAf0okkBTzFnCTJes8ZSEi7pZLr2%2FZIR3pHPTRy%2FY4q2lYKif3a0MXZMSB69Tc5vmJW8k4YDJ2NwBmLtK8FCiuWB%2FU8%2B0gK8Gb4RW0onmVxsgPE1FCaNTday8w4xDsNZLH%2BurOBjyhm7tW2%2Fp6vGwwbK7uTHT3u64JZf5N%2BEnr2ighpVQwqzCnIBB8rGRyiE55S%2BcHv01eEvU1iypApxF9v%2Fa57sE&X-Amz-Signature=24e622350a6aa66235c7e52edbfd7494d17f1b3497264e57eb12aab80fe9d9fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
