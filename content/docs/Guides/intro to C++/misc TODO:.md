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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXMZPO7O%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIDu%2FbpXNG1Z5TUDwPEMly0VcAyJLHG0UKb7UAugYxE94AiEA0VhxgeM9k20OLNkudxabqz3o3RXJJktxB7P6CMOUANwq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDH4FS6%2B%2FL7aDYf0ytSrcAyUCRKLh1NfLBi8HWQBG3dzXi3P%2BXmIkzTO4rgBX9v9bwrrCdrDy06dyqFPmW7fEyMmXjF4S4hzjBC2XOuZUefL3WViObDzJxQLw6MoUzdkmdjR7PAdZyt1MWME3XDGSTHR%2FPB2ks2Z9ahk8AQ9km8Lgv1twj%2BVJsRhD8WtF5Q7cG6%2Fvgp7pIsJ3HOb%2FPf%2BAX5eJh1Nbq8H%2Bt%2FfnYG8ZiHj6jOgSTY6XCjGt8a%2BrU3mAN8KX7%2BsivKq35uRDvOsmaARTky3%2FSLRXg9mtuWmSPgf4OtRe0d8SPHPbP7dhW%2FOPXlyPjmPVTXxrqwVF33VbQl3bRV251dMdLTf1vxGjSEsbI8%2BjPxrRIo8Pk01R%2Bw%2FZIkHUIhWnDwH0JHRhmEvjG6XY%2FQeH8%2B6uJ%2FkBNuRrQUcq0AbJN8gh6PULx1ss57UzbajfD1XrcKAnmWqq0fyhR3IlmQo2Uli%2BJtloN8LtdZIpwJxVMTyBtnH1sLoWZSuupfOt%2FIgRqHA4HPBfdW%2F%2B5DJwyw9WcztIIG6hCXgWzCpOdBu7%2B7637eLztDie%2ByfDCl%2FHxBvVT8KuuOssTgJppEIYLWX7xiDBXP3eOzyNFG%2FepmfcfDa4YfgSi2Zgrvkq4mX9G30mrUHYPAMwMKefx8EGOqUBwQNAiBJxDl0zqJNaroc5V%2FOyHFCotZq%2B3vWMdoJsygIy09iTQsrBtKtW2sgfbnx0oZvjCgrfhQ0yCmWZ%2BZvzS1jiKnx%2BWr2t9IewQpfIsDWjoxvrr8zGoO8ZFZ%2B0rY5hJiC9K41ZAyOFR8EuDFqLE%2FaeAsKtSAkzipH5l6W1xBCdcaQRu1sMjLzQk8%2BlEW%2BwClNeA99Sb%2F0aUU3KZN64GUhIJe0t&X-Amz-Signature=1930599040ddd7c9f57000a545a554ec979fe7810894e9d4959447ca4cb79312&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXMZPO7O%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIDu%2FbpXNG1Z5TUDwPEMly0VcAyJLHG0UKb7UAugYxE94AiEA0VhxgeM9k20OLNkudxabqz3o3RXJJktxB7P6CMOUANwq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDH4FS6%2B%2FL7aDYf0ytSrcAyUCRKLh1NfLBi8HWQBG3dzXi3P%2BXmIkzTO4rgBX9v9bwrrCdrDy06dyqFPmW7fEyMmXjF4S4hzjBC2XOuZUefL3WViObDzJxQLw6MoUzdkmdjR7PAdZyt1MWME3XDGSTHR%2FPB2ks2Z9ahk8AQ9km8Lgv1twj%2BVJsRhD8WtF5Q7cG6%2Fvgp7pIsJ3HOb%2FPf%2BAX5eJh1Nbq8H%2Bt%2FfnYG8ZiHj6jOgSTY6XCjGt8a%2BrU3mAN8KX7%2BsivKq35uRDvOsmaARTky3%2FSLRXg9mtuWmSPgf4OtRe0d8SPHPbP7dhW%2FOPXlyPjmPVTXxrqwVF33VbQl3bRV251dMdLTf1vxGjSEsbI8%2BjPxrRIo8Pk01R%2Bw%2FZIkHUIhWnDwH0JHRhmEvjG6XY%2FQeH8%2B6uJ%2FkBNuRrQUcq0AbJN8gh6PULx1ss57UzbajfD1XrcKAnmWqq0fyhR3IlmQo2Uli%2BJtloN8LtdZIpwJxVMTyBtnH1sLoWZSuupfOt%2FIgRqHA4HPBfdW%2F%2B5DJwyw9WcztIIG6hCXgWzCpOdBu7%2B7637eLztDie%2ByfDCl%2FHxBvVT8KuuOssTgJppEIYLWX7xiDBXP3eOzyNFG%2FepmfcfDa4YfgSi2Zgrvkq4mX9G30mrUHYPAMwMKefx8EGOqUBwQNAiBJxDl0zqJNaroc5V%2FOyHFCotZq%2B3vWMdoJsygIy09iTQsrBtKtW2sgfbnx0oZvjCgrfhQ0yCmWZ%2BZvzS1jiKnx%2BWr2t9IewQpfIsDWjoxvrr8zGoO8ZFZ%2B0rY5hJiC9K41ZAyOFR8EuDFqLE%2FaeAsKtSAkzipH5l6W1xBCdcaQRu1sMjLzQk8%2BlEW%2BwClNeA99Sb%2F0aUU3KZN64GUhIJe0t&X-Amz-Signature=2655f79e0a5fcdbdbf22c25319cd897cd61cc87f23a9fe6bf0f7f76fd6d96b75&X-Amz-SignedHeaders=host&x-id=GetObject)

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
