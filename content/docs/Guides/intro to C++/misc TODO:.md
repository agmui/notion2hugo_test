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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S475JKBU%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLQ2qODIuOvg7xozpP5QxwtlaYdT%2BhCOgO1VhHSaNWKQIhAJEKk2r%2BvzgSvyVgffm9D5E6NhD7aopU%2BVfFjTAvOe8wKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLtBMM4s4UMGSrKK0q3ANOGCLVec5mVhpEyNa7A4N%2FxWpHph3%2B%2B4Z%2BIeglo0KPS16ZEKJ5eMolpXHBzYHtDRe2GfRck8ThKUXS111EZKAM0cIHIBn4IcITjWIHUqdRk%2FPTbN8Xt9116PuGeYUEh57r1bAFVWoGn1DLBTu5af2chRVQ59OllcT9n4wrFQSoy3MrvtZA75Yy1MUNQ%2BhIWUTYUpSHHjZN6hK9rKh3EMIie9i5fthQNKnwJ0GOPcoQLbaqQk9vG%2FdaM33q6j%2BtOAQJu55crXldB1UAbABwIcEshMmgyPfnw7X18BN1Pdaq1qZxwuO4F0%2BdxoOzJok46e7xe902SY%2B%2BeqYG5mC4kCz9DaYHFLC%2Bdh6DbvodoLA4G%2FSCoUD1YtJn%2BQMlxoboBbivqM96pkRSxVkFpywSomVTaXiuJkZXKL%2B0LqPpnsmC6funaiXva0UDEhYIkzDyrP7mdJUicQ1A%2F3xib7BJha1Y5AYgQodCrnzmEyneGoczHprWpLsO9mRUbkoisgwPFCuzUJ5Ejn6o6d2wboqR0KqJhfTV1txRRVp5voCkc8zsN2PcZHxpmztXX3xEpwhUAr8iCIxk33Bg%2Brmd%2BlnwDt3ainfnQi0VtmDan6dSHoce7cZX9hgOOx1nHqcQYjDV6%2Bu8BjqkAfQgHR3BrK0mb%2BABP4ST5cfFHgLG%2F%2BnCwvycKecFp95DUDaru7hpdCu3dVHwSUaN4niQWvdWgTSIcQtwtgxITiayodHigg1btEpiIg%2Bc9TC%2FP%2F1nDdm64ulgN2pdznlx0Q2D41ajAXLSVrj%2F0zRnToFwiGCzsJsjdgBt%2Boy%2Bu16K9I8NNVWFOi92mt9Lsitcct2vvFthG8FrPd7YyfujxsgT8Fp2&X-Amz-Signature=931a93f23dcb67ae9962a158c72f0ab7a59a722f20e1f7d8a05f1cfefb471a69&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S475JKBU%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLQ2qODIuOvg7xozpP5QxwtlaYdT%2BhCOgO1VhHSaNWKQIhAJEKk2r%2BvzgSvyVgffm9D5E6NhD7aopU%2BVfFjTAvOe8wKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLtBMM4s4UMGSrKK0q3ANOGCLVec5mVhpEyNa7A4N%2FxWpHph3%2B%2B4Z%2BIeglo0KPS16ZEKJ5eMolpXHBzYHtDRe2GfRck8ThKUXS111EZKAM0cIHIBn4IcITjWIHUqdRk%2FPTbN8Xt9116PuGeYUEh57r1bAFVWoGn1DLBTu5af2chRVQ59OllcT9n4wrFQSoy3MrvtZA75Yy1MUNQ%2BhIWUTYUpSHHjZN6hK9rKh3EMIie9i5fthQNKnwJ0GOPcoQLbaqQk9vG%2FdaM33q6j%2BtOAQJu55crXldB1UAbABwIcEshMmgyPfnw7X18BN1Pdaq1qZxwuO4F0%2BdxoOzJok46e7xe902SY%2B%2BeqYG5mC4kCz9DaYHFLC%2Bdh6DbvodoLA4G%2FSCoUD1YtJn%2BQMlxoboBbivqM96pkRSxVkFpywSomVTaXiuJkZXKL%2B0LqPpnsmC6funaiXva0UDEhYIkzDyrP7mdJUicQ1A%2F3xib7BJha1Y5AYgQodCrnzmEyneGoczHprWpLsO9mRUbkoisgwPFCuzUJ5Ejn6o6d2wboqR0KqJhfTV1txRRVp5voCkc8zsN2PcZHxpmztXX3xEpwhUAr8iCIxk33Bg%2Brmd%2BlnwDt3ainfnQi0VtmDan6dSHoce7cZX9hgOOx1nHqcQYjDV6%2Bu8BjqkAfQgHR3BrK0mb%2BABP4ST5cfFHgLG%2F%2BnCwvycKecFp95DUDaru7hpdCu3dVHwSUaN4niQWvdWgTSIcQtwtgxITiayodHigg1btEpiIg%2Bc9TC%2FP%2F1nDdm64ulgN2pdznlx0Q2D41ajAXLSVrj%2F0zRnToFwiGCzsJsjdgBt%2Boy%2Bu16K9I8NNVWFOi92mt9Lsitcct2vvFthG8FrPd7YyfujxsgT8Fp2&X-Amz-Signature=db99e9dd5d79bb3022367c29c7bd7c1aabb4fa8bf6e75b5bb9fdccdfa6c4e6b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
