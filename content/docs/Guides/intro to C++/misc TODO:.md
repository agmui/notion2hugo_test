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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5RFV3TO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDvSO33hC0d7ydY1Uio7gYnzcimRT1GIWgxn%2FXlll1DEwIhAIVtEvXAU7iJ5gptTJGxpeUS4YrKL0ofU6pFGHSjPLpdKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCubi2U4ijVPkkDdgq3AOnEhCZBWKeuIveB%2Fmo9klG1N3dpENMz35KNVdSntUvet8UMtgFGwVUKkCUBhZKf4k%2BQ5twQdMZ%2BC7KTKJL6ORTOVNfs7i2Rom9azCT%2Fn%2F9Dx30He7jHVsN3UstR6U1qXmyD6IAYISrE%2B115aQQ4B5LuREi5Amm2NnftXj0%2BKuTflpRCxYzRJfS0sHhoRt5kv3ZahH9wem9dO9ksIKaqYhYQlxRM%2BONV%2BxIZ2YJgcmIKdYgBoFWYKi9LtotFQdDBMFPr5%2BsAGcM5tdOrHcwPLubDdvXTHxu0oXXH%2BsVdL1JoFqxHO08x45IIWS7fonrK3tOpo%2FrO7YGauF8hJKvTTXpxtcJUarJYpnxcKWM8XkemlG4drWUHMxL2sl4ylgh%2BGA3uNeGDzvxysYH0Es9jaI5b2%2Bn6kpDD9fWQRfUFHct0EpLWgQilKEt4jabua8TtP%2Fqy3V3BPSp665iLI1nY4pCOu5Y87V57p3cR2NkQ4BAPzJEM8cMAFmqmKlfjQHg0lbS%2FS6ySYryNcYcRAN5t4T%2FBw4hgczT98JJF9tHqIXbCJmAOr7FnqZ23%2FELMvJSmypYz76Z%2FUXMYYdcGzFl0buVh8BdZIm8oM9sz0YAMOkgjjfrQqQpFGxDKoMPSzDI8KO%2FBjqkAcvdh2PdF7VLmN4%2BsuQ1a9sK%2BgvQtQ%2FqxvMHK7oe4oFoP7gHGLKFjc19j0N52mooErIs41dJXSKAhXRtguJpkks3N8ESd7JbNkFEQQMHrw3r52QUyHVgN59F7CPchQtA%2F2JOhMM1aPkGwkB7aBfdoao5z239oM0ezQ2Pj%2Bk2sEHqNFqVc%2BotIFoHFWKUE4m1vstI6e4fMPi2r%2FXVoNe6ZGn8uNEp&X-Amz-Signature=492b95167bf573feaa1e8497bea11bad941383263d9c797be691cf903e228caf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5RFV3TO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDvSO33hC0d7ydY1Uio7gYnzcimRT1GIWgxn%2FXlll1DEwIhAIVtEvXAU7iJ5gptTJGxpeUS4YrKL0ofU6pFGHSjPLpdKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCubi2U4ijVPkkDdgq3AOnEhCZBWKeuIveB%2Fmo9klG1N3dpENMz35KNVdSntUvet8UMtgFGwVUKkCUBhZKf4k%2BQ5twQdMZ%2BC7KTKJL6ORTOVNfs7i2Rom9azCT%2Fn%2F9Dx30He7jHVsN3UstR6U1qXmyD6IAYISrE%2B115aQQ4B5LuREi5Amm2NnftXj0%2BKuTflpRCxYzRJfS0sHhoRt5kv3ZahH9wem9dO9ksIKaqYhYQlxRM%2BONV%2BxIZ2YJgcmIKdYgBoFWYKi9LtotFQdDBMFPr5%2BsAGcM5tdOrHcwPLubDdvXTHxu0oXXH%2BsVdL1JoFqxHO08x45IIWS7fonrK3tOpo%2FrO7YGauF8hJKvTTXpxtcJUarJYpnxcKWM8XkemlG4drWUHMxL2sl4ylgh%2BGA3uNeGDzvxysYH0Es9jaI5b2%2Bn6kpDD9fWQRfUFHct0EpLWgQilKEt4jabua8TtP%2Fqy3V3BPSp665iLI1nY4pCOu5Y87V57p3cR2NkQ4BAPzJEM8cMAFmqmKlfjQHg0lbS%2FS6ySYryNcYcRAN5t4T%2FBw4hgczT98JJF9tHqIXbCJmAOr7FnqZ23%2FELMvJSmypYz76Z%2FUXMYYdcGzFl0buVh8BdZIm8oM9sz0YAMOkgjjfrQqQpFGxDKoMPSzDI8KO%2FBjqkAcvdh2PdF7VLmN4%2BsuQ1a9sK%2BgvQtQ%2FqxvMHK7oe4oFoP7gHGLKFjc19j0N52mooErIs41dJXSKAhXRtguJpkks3N8ESd7JbNkFEQQMHrw3r52QUyHVgN59F7CPchQtA%2F2JOhMM1aPkGwkB7aBfdoao5z239oM0ezQ2Pj%2Bk2sEHqNFqVc%2BotIFoHFWKUE4m1vstI6e4fMPi2r%2FXVoNe6ZGn8uNEp&X-Amz-Signature=f614519e7be7f92933a93a3c7616bc19287ffd194b14ddd8147338b0c33362a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
