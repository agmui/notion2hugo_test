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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677UI4T7J%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAURGhL51tgmbV%2BPANaUjypxDZKox97dlMsyUPzcKZRwAiAXHejRhhlglgl0HFsmK6OFRliH6bMfW8gRCb9xGIGkSyr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMRFYoxchPCXlbDFTHKtwD0lx%2BoXuK2T0bPSVQL4c0pefLr8tsYTTF1ZPlQuIj9aScFF%2FPPZPxydwvyKw2vsti8rcI78CUgmLlcwgYxpIEXitqwEgFr0Y0SQ5ze0o3yJ8BBIIn5uGgo3Jz6j0S7qUbRDm22fktwzZpmMf1v5P0S2mFxLJ1CesF0nHEksfhA9TdGT%2FCuNEjt8UM5hu2t9OCT7p91Xjd7I0vwBPwqj2t2hfxj4z1r79NSe%2FOJI3Jkpx9xm4TfRGngDX5gUpHNky2Pe6H0xkYO2s9zO15793VznJvwujRn2ioP87UPfxSmV%2BSKfjtkYNy42DxtjxUIjGyHY%2B%2B0wBVTMoqZatInTTIzMpQBdPljSxXKRaHYDwfMzdF%2B%2BDWDyZRhpzpyx90qhzpaIJo1vqrDjyw%2BV9Ov%2FqWpubxABNuSBkrNUAY8MLNXgG%2Fk6Ns8a6u1xjoogHfy30iJmpvbJAwy5VAwpv2p1n39fOt5jZMy%2FMxd6UH9XB2xPHF0KlNKrHunNO5ZdhdJNJU7BR6SG9CTR%2Baxk1CrajF3O2%2FFDXqXKmpCLQlPK%2BmBI5nImqBAUEtNfh2tSGPqIkOXA8ESjccT7QYJCo2nZuCA6gX1XmnIG0kpWDj%2FD8hYKRUUf99Scthit6Z4Yww9YP5zAY6pgFcbdYHvfYW7kuZ%2BvdhQOvgp6Ne2grauBV7QnwLh3bERXnKRHIj9cy8Pi4%2FLcOxg%2B9vjipwOwio5Rn5fU1ILHouiTG6KMSChm4b0gvZC8RH3k%2Fc6thuryu5%2FjnWBfaU%2F5E3nS7grUTIo%2FP%2FP%2Fw21oo64Xnp01j%2Bm1etYCB2XwQwYpl4XT5BNVc3zc%2FAJBr2wIuHR9EE2P1eBznC8unKlP4Jt3q%2Fp1al&X-Amz-Signature=89c372214f0cf72c9aedc3d232d6b86e4c94dddc83c880bf87b3316eed8cbd99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677UI4T7J%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAURGhL51tgmbV%2BPANaUjypxDZKox97dlMsyUPzcKZRwAiAXHejRhhlglgl0HFsmK6OFRliH6bMfW8gRCb9xGIGkSyr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMRFYoxchPCXlbDFTHKtwD0lx%2BoXuK2T0bPSVQL4c0pefLr8tsYTTF1ZPlQuIj9aScFF%2FPPZPxydwvyKw2vsti8rcI78CUgmLlcwgYxpIEXitqwEgFr0Y0SQ5ze0o3yJ8BBIIn5uGgo3Jz6j0S7qUbRDm22fktwzZpmMf1v5P0S2mFxLJ1CesF0nHEksfhA9TdGT%2FCuNEjt8UM5hu2t9OCT7p91Xjd7I0vwBPwqj2t2hfxj4z1r79NSe%2FOJI3Jkpx9xm4TfRGngDX5gUpHNky2Pe6H0xkYO2s9zO15793VznJvwujRn2ioP87UPfxSmV%2BSKfjtkYNy42DxtjxUIjGyHY%2B%2B0wBVTMoqZatInTTIzMpQBdPljSxXKRaHYDwfMzdF%2B%2BDWDyZRhpzpyx90qhzpaIJo1vqrDjyw%2BV9Ov%2FqWpubxABNuSBkrNUAY8MLNXgG%2Fk6Ns8a6u1xjoogHfy30iJmpvbJAwy5VAwpv2p1n39fOt5jZMy%2FMxd6UH9XB2xPHF0KlNKrHunNO5ZdhdJNJU7BR6SG9CTR%2Baxk1CrajF3O2%2FFDXqXKmpCLQlPK%2BmBI5nImqBAUEtNfh2tSGPqIkOXA8ESjccT7QYJCo2nZuCA6gX1XmnIG0kpWDj%2FD8hYKRUUf99Scthit6Z4Yww9YP5zAY6pgFcbdYHvfYW7kuZ%2BvdhQOvgp6Ne2grauBV7QnwLh3bERXnKRHIj9cy8Pi4%2FLcOxg%2B9vjipwOwio5Rn5fU1ILHouiTG6KMSChm4b0gvZC8RH3k%2Fc6thuryu5%2FjnWBfaU%2F5E3nS7grUTIo%2FP%2FP%2Fw21oo64Xnp01j%2Bm1etYCB2XwQwYpl4XT5BNVc3zc%2FAJBr2wIuHR9EE2P1eBznC8unKlP4Jt3q%2Fp1al&X-Amz-Signature=6c019fb9201c9a1e1b138e5ecb92417e81645ad68dd8e76f106bb244d174c03f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
