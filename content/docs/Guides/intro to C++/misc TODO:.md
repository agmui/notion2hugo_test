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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X7ZL4JW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0hC11AmG9i3te%2BLMklkFTd%2BEcoLST21bAWcyHyuG99gIhALRNnEALSDsm%2BGlfd3BiLqLPHKwhskcssXgI1ltS3JF9Kv8DCHcQABoMNjM3NDIzMTgzODA1IgzUW1f44igI9TSjf54q3APJZrYFvoaAWeFuYrtrfq%2BVQ9kQ9kpNVWZ7mPkhy8wpAE3%2F8JGiLtwTmvwx3xHB0QLNMdYJ%2Bp%2Bizp8PA4S6dTo7mcT5Af1daZCBZQYfKqAt8AHwxJH6%2FpnLE3zfD2Ij5BxQm6h%2Fc1wJa1RvxkR19XMwlxjMpiVTe5qe9MKGdMJDew0jNKaTQpAhc8p5Mtezo6e3Igvz1%2FWVHK89yfmA7%2FC0moDqKGGHv5BumlI%2BK1xxF20VyNP1PbEkmzXW2GX0EcCszQeU2mtp%2FmeoR4eFAt4Qa6l1XyDyafTd0u5vegLuRayVi9TtRIOD%2FovMnSiBrAsFpUI%2BMnebOUTvj3WNeLoeiF2fGsQuRtX29DWcezWO8I8HZhiOMBeotLDI7XfNvVAB3J5LrdJeUCriAAU8a9pfxnsyItEGPIo6IHwMfkurAY%2B%2BsPoBE2ZfFvWFOzJtO2krYtzktaOs2%2Bld8jTWjU%2FiaPVWTjHypGNz7KqcWO0V%2Bvcczl7lWanyq%2BwgzZIlXRODYevznbfcNNrkJ9qfi4K%2FTPWDY1GQarpGp8QEIj0fnR%2BXt%2FJfXOs93VaPTnDa%2FcwYMIHWq9q0w3oL53SDbfcb7et1Y4VMyF8RxhafN73t%2FDvAL0ML3DP4m5NOajCXgZHCBjqkAbnEgNyfkTUNo1XVE7R50zs%2F4BRHNBV%2BxDdX1JsrBFZaycwv4IzlXLDFJfN4%2BE4j%2F0tV75NAS1LQUK0yCVmiCIhoRRcsiCS1jB1UXZ7IlMUvSIs5ickg6F5tegkYbAKrELdDLwbWehDXjWOncpvs%2FgS6V1XPKw%2B5O1vK57kaVjPNsajPUUS1%2Fs1CEH0ogCzZDfPUUBLAXQ%2B6GuNnRsZA4lqMvsIx&X-Amz-Signature=5e25d715a52c86a1dc0d62855d55693cf19c47d72ad1d01fc038810da5356cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X7ZL4JW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0hC11AmG9i3te%2BLMklkFTd%2BEcoLST21bAWcyHyuG99gIhALRNnEALSDsm%2BGlfd3BiLqLPHKwhskcssXgI1ltS3JF9Kv8DCHcQABoMNjM3NDIzMTgzODA1IgzUW1f44igI9TSjf54q3APJZrYFvoaAWeFuYrtrfq%2BVQ9kQ9kpNVWZ7mPkhy8wpAE3%2F8JGiLtwTmvwx3xHB0QLNMdYJ%2Bp%2Bizp8PA4S6dTo7mcT5Af1daZCBZQYfKqAt8AHwxJH6%2FpnLE3zfD2Ij5BxQm6h%2Fc1wJa1RvxkR19XMwlxjMpiVTe5qe9MKGdMJDew0jNKaTQpAhc8p5Mtezo6e3Igvz1%2FWVHK89yfmA7%2FC0moDqKGGHv5BumlI%2BK1xxF20VyNP1PbEkmzXW2GX0EcCszQeU2mtp%2FmeoR4eFAt4Qa6l1XyDyafTd0u5vegLuRayVi9TtRIOD%2FovMnSiBrAsFpUI%2BMnebOUTvj3WNeLoeiF2fGsQuRtX29DWcezWO8I8HZhiOMBeotLDI7XfNvVAB3J5LrdJeUCriAAU8a9pfxnsyItEGPIo6IHwMfkurAY%2B%2BsPoBE2ZfFvWFOzJtO2krYtzktaOs2%2Bld8jTWjU%2FiaPVWTjHypGNz7KqcWO0V%2Bvcczl7lWanyq%2BwgzZIlXRODYevznbfcNNrkJ9qfi4K%2FTPWDY1GQarpGp8QEIj0fnR%2BXt%2FJfXOs93VaPTnDa%2FcwYMIHWq9q0w3oL53SDbfcb7et1Y4VMyF8RxhafN73t%2FDvAL0ML3DP4m5NOajCXgZHCBjqkAbnEgNyfkTUNo1XVE7R50zs%2F4BRHNBV%2BxDdX1JsrBFZaycwv4IzlXLDFJfN4%2BE4j%2F0tV75NAS1LQUK0yCVmiCIhoRRcsiCS1jB1UXZ7IlMUvSIs5ickg6F5tegkYbAKrELdDLwbWehDXjWOncpvs%2FgS6V1XPKw%2B5O1vK57kaVjPNsajPUUS1%2Fs1CEH0ogCzZDfPUUBLAXQ%2B6GuNnRsZA4lqMvsIx&X-Amz-Signature=062cadcf9bb0fd711b21627fb0723aab1bd8f7e4c60b8a024d7d036b468436c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
