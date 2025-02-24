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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIOVDS3K%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCyxkC7Njd2tkwHy3ijHSC%2FsU7SGnPt5hFTuJF5RCs0gIhALgXGMS2PaL2QnKPR5Av4BwZR4Ug05aLPXOq35189qRuKv8DCCEQABoMNjM3NDIzMTgzODA1Igw6FcQGktOoLpmT3foq3APVrR127vJOPv6jkL6OHgKAmJSUG4i9wKduIkm7l6IMbmhoZHNAHgQP5RBn7x1coD5W0yokqZchmPCAZPRlZ3ST66Ukd6HMFWhcjztslNiQ%2BH3RTev3dqM5m4EmY23eKhEyHIcf8%2BPF7076y87t9feBHw%2F1cxblgRrcmJGHn3x2TGLWm0%2BH8Y6Au4EZ5RHk8u5v%2BEb36VkRVA%2F8lUNYWFVJRWkOieJgT9NOwtmPIGdQw5HhKVXyGdPhNnlPIA7yfx65O2%2BzMhmfSLGjw5B7Hrwoq229KQnMoEz3FDiaYISRF1r5pCQahUBgIaQCzx15x9dC8%2FOCrc%2F1UcwzaU%2BivRqZ12tsq9eyEYreJQgpOnOQNapt8Uz72IQ1qhOybsSYfAs0WODnBaiJb2t2gMXjTWlAOfDVu8hLwNwRjHkoAaaCVm3LEirTL2gKGu4TAOXhUgQw5PfQOHbiez8sggnBdk0lEaXXtTCo6KJwrOIo6BaLU1vWUw9y%2BKlDh%2BzBxpDJzEAmwPPj6Esv1ai84OCKh%2BgxFk9mFhK7eBVlt%2B8mm6eAT8N%2Bcy5IipQb30xt6eFna1q60J0Vl69N8lUES8KsDszndE2IGX%2BnhQw8TdfmNU2bLyEr1yVGQFkyN6NMNjCl8e69BjqkAcvnwYaHTF3s0AU5gJKGko3b5XDdA4zlB5e9BRqOcDJSQfxbYeSTp1azJEmN6KbTe2PSwCVCaSRpfvJf9aZkYpwtdKd%2FGUByfsZk2yZ4SYMstK8IznuL%2F5qj7GGtW9lX%2FDWWiE%2FqlzkI6vZULOS7%2Fw%2B21qeHkG%2BBZhBuKIBBzRXwiQ9D8pwuSpN2IiN67oNsqiUS1zCVoF73901fa1j9aEWHUV7k&X-Amz-Signature=f6fbdfa99b6268cac09cb7ba550be929f5a2cf2ae262b02aaf60aaa10f53b528&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIOVDS3K%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCyxkC7Njd2tkwHy3ijHSC%2FsU7SGnPt5hFTuJF5RCs0gIhALgXGMS2PaL2QnKPR5Av4BwZR4Ug05aLPXOq35189qRuKv8DCCEQABoMNjM3NDIzMTgzODA1Igw6FcQGktOoLpmT3foq3APVrR127vJOPv6jkL6OHgKAmJSUG4i9wKduIkm7l6IMbmhoZHNAHgQP5RBn7x1coD5W0yokqZchmPCAZPRlZ3ST66Ukd6HMFWhcjztslNiQ%2BH3RTev3dqM5m4EmY23eKhEyHIcf8%2BPF7076y87t9feBHw%2F1cxblgRrcmJGHn3x2TGLWm0%2BH8Y6Au4EZ5RHk8u5v%2BEb36VkRVA%2F8lUNYWFVJRWkOieJgT9NOwtmPIGdQw5HhKVXyGdPhNnlPIA7yfx65O2%2BzMhmfSLGjw5B7Hrwoq229KQnMoEz3FDiaYISRF1r5pCQahUBgIaQCzx15x9dC8%2FOCrc%2F1UcwzaU%2BivRqZ12tsq9eyEYreJQgpOnOQNapt8Uz72IQ1qhOybsSYfAs0WODnBaiJb2t2gMXjTWlAOfDVu8hLwNwRjHkoAaaCVm3LEirTL2gKGu4TAOXhUgQw5PfQOHbiez8sggnBdk0lEaXXtTCo6KJwrOIo6BaLU1vWUw9y%2BKlDh%2BzBxpDJzEAmwPPj6Esv1ai84OCKh%2BgxFk9mFhK7eBVlt%2B8mm6eAT8N%2Bcy5IipQb30xt6eFna1q60J0Vl69N8lUES8KsDszndE2IGX%2BnhQw8TdfmNU2bLyEr1yVGQFkyN6NMNjCl8e69BjqkAcvnwYaHTF3s0AU5gJKGko3b5XDdA4zlB5e9BRqOcDJSQfxbYeSTp1azJEmN6KbTe2PSwCVCaSRpfvJf9aZkYpwtdKd%2FGUByfsZk2yZ4SYMstK8IznuL%2F5qj7GGtW9lX%2FDWWiE%2FqlzkI6vZULOS7%2Fw%2B21qeHkG%2BBZhBuKIBBzRXwiQ9D8pwuSpN2IiN67oNsqiUS1zCVoF73901fa1j9aEWHUV7k&X-Amz-Signature=5b0ec7e83cd1f0b795219ce54972e6e9be5ac0025bd3e73dfa7cce350eaf5695&X-Amz-SignedHeaders=host&x-id=GetObject)

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
