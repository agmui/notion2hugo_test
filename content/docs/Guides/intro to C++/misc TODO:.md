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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAFF23ZE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2dJ7jTn0%2BEqd5VWkoiLr2WIn2bm%2F%2Fzlkf%2FPCJMDlKoAiBp%2FMCPz%2FBn5HRXJwXDhYkqFUIl4R8BaN0QWkSuByPr7Cr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2BykXCpg08ciOnT6cKtwD5koX9A88ntr1DHM5lt18htf%2BffxTKMws1PG8B8GR2DuIw3kDncfVkzeYFxJX%2FqJ6YCpzvr5DZ3wOiVQYV8RCV1aqkQl67pyk3paN5jshfZ%2BboJpy9nIMiZteQ6YvQ5pd0DPWtEad%2FHCo6ktIzamlQ1VjurdjKvNXD0p61CTVidutP5ZcYPH0%2BHQzV33%2FzxBj23jeJkdy2HW5bkVGjItNC01iJYpoAxbXTLrGxPbWlFcigZL%2F2Ju4vg7lY09oqViYC3M47WlsgQgbQAfntGdIGX3b43lsjcqjUKiAjeIkkA2MpmiY7WcxSx633AbkZA3GxnKXhYEnwRwiQHDhG3Pep28mBTv10JJx0IYIDNTaSL7E%2FJhmbTO9aoHKPq8GZQKmIy4vPhVIB8puD2pAkVt8DH2HvL6GgHyU%2FOiF2GIUDAZgWEJPizSljioGxW0GPH%2BAZYd8otLSiCAWBQstLWKhn3TZHKPddowBU5cDW17Bs8QYXqseZNhSkLU7Dsyv3UVNFwmDJpcrIWIjN07SgHQeDtiIXc%2BKXAH5kxISlaSU8KixNtNqTcKgmscUmstONe0FYi8M6ApQ6s%2BYbqxE3nPd6j7c9m6DZdtp5lWRxlB6CqVC8cQWqGksf2IcwFAw6Y2xwAY6pgErd67AB9eVRpvGP6mvTPOzBWzSokvrJOxN24PaSEsASULmGVZ3xZHDlmcuqN1Z4BB4hP4JuK8a0K92zW4oKotJRbSt5cp8RwZl815AMJ1SEz3ra0wIpExXtQSyQ3SK19y%2FE%2FdVrXGOL3wBKehE8vetPWdetTpRf8xModTgwuWqR4Ys8yAbx0UVhMoSEnJa3qXIfL3RRwcrJ9nqXXvHx6jexkShdNMY&X-Amz-Signature=b5570996e6701a7f38d573a6f7d62b3d651eed1020e7b4b3efe350f4b1b8310c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAFF23ZE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2dJ7jTn0%2BEqd5VWkoiLr2WIn2bm%2F%2Fzlkf%2FPCJMDlKoAiBp%2FMCPz%2FBn5HRXJwXDhYkqFUIl4R8BaN0QWkSuByPr7Cr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2BykXCpg08ciOnT6cKtwD5koX9A88ntr1DHM5lt18htf%2BffxTKMws1PG8B8GR2DuIw3kDncfVkzeYFxJX%2FqJ6YCpzvr5DZ3wOiVQYV8RCV1aqkQl67pyk3paN5jshfZ%2BboJpy9nIMiZteQ6YvQ5pd0DPWtEad%2FHCo6ktIzamlQ1VjurdjKvNXD0p61CTVidutP5ZcYPH0%2BHQzV33%2FzxBj23jeJkdy2HW5bkVGjItNC01iJYpoAxbXTLrGxPbWlFcigZL%2F2Ju4vg7lY09oqViYC3M47WlsgQgbQAfntGdIGX3b43lsjcqjUKiAjeIkkA2MpmiY7WcxSx633AbkZA3GxnKXhYEnwRwiQHDhG3Pep28mBTv10JJx0IYIDNTaSL7E%2FJhmbTO9aoHKPq8GZQKmIy4vPhVIB8puD2pAkVt8DH2HvL6GgHyU%2FOiF2GIUDAZgWEJPizSljioGxW0GPH%2BAZYd8otLSiCAWBQstLWKhn3TZHKPddowBU5cDW17Bs8QYXqseZNhSkLU7Dsyv3UVNFwmDJpcrIWIjN07SgHQeDtiIXc%2BKXAH5kxISlaSU8KixNtNqTcKgmscUmstONe0FYi8M6ApQ6s%2BYbqxE3nPd6j7c9m6DZdtp5lWRxlB6CqVC8cQWqGksf2IcwFAw6Y2xwAY6pgErd67AB9eVRpvGP6mvTPOzBWzSokvrJOxN24PaSEsASULmGVZ3xZHDlmcuqN1Z4BB4hP4JuK8a0K92zW4oKotJRbSt5cp8RwZl815AMJ1SEz3ra0wIpExXtQSyQ3SK19y%2FE%2FdVrXGOL3wBKehE8vetPWdetTpRf8xModTgwuWqR4Ys8yAbx0UVhMoSEnJa3qXIfL3RRwcrJ9nqXXvHx6jexkShdNMY&X-Amz-Signature=14b9c5373bec898654c74e5d15ae3c15d2262f553faa66948564b21951a97298&X-Amz-SignedHeaders=host&x-id=GetObject)

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
