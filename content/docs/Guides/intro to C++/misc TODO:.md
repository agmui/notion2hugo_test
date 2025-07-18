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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7YIUOBF%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCzmIaz8lorWIi72Fkm%2B0NteMsfSvH3k6liSr%2Fp5Hb43QIhAO0fzrde3YMdztCB3D0KdxOUzW%2FZLLxkLT7a1ejvwjyYKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwt%2FaVRiAQ%2B3AIPU3Qq3AP%2FzPzeeZvoOCis7Gy%2Byn0ccehsQzkIxQgXBWNZXKxPLyRar45Pjfz%2F7V0dcUaAgbr2b9%2B9cRK1xz7xd9O7aDKNjHmGA5rbVG%2F8arU0wzNigL84aLJZ0DwkIUv6rXKaWCSCAoDRwk%2FNG%2Bxc6gC66G2hvsiFCcdeHilElkL9n68X%2FxxCfdoIZtLyozGVjsUGtOgkwuOMMHw3zBkTvLAX6S%2FG%2Boe%2BbQssGGkuc11nLHzW2eBTPzKEEvXiNCrxdaCJ3FnH5UsNhjT5NuAgqfFPN0qu3hE76gggqLLYYGiHlMHka0oJl%2BdgIydNh6OvW7KF2sabTJXNB2U7lTqTgr3v5oGJGYkcmP%2B%2BMj40THnj7H8qbKOXjcwQHiLwxJJuv7PEjTmboZJ2UDKZieJyh17p4EumBM4G9zPVNzpcGVZbd8lRJOAS2xoqj2O5TS0C8JNYDrxE2uM3bMmFuN9eeVlBBWFlW3HfUF0B5CjeOY2Hz5R2XUpdoVd9p6ijwAExlV9Eb9HN4TZrf38YA19%2BLbau4MNxyunOFJk%2FARCWYc9UKngIOXN6%2Fn3zlBUpy8StscbKRReVMvyLT8lMW6XiZqj7Mqm5Iot7cf16qLCg%2FdCAOWFTgzNKyeIAboKLW6XdCTDqievDBjqkARABkY6j3vpOhYNgFzFulTz8ofPEjpABZ2fDmjNpQAJSGuipNPMCDwh4He7z17lHYe%2B93RqeG77wdXX1M%2FVIR5Cba8jjgHZ36yYnIa4MHfOvxsLuQxRHp%2FfsAV0PDCYt3UbGygjwj2B1pM3Zh7s78yXV7IE1EfUV5pZ7NzwcozinMCd4%2B1RNmb8FVc0KEQe7HhOrZnDPmW2UjRVZe7L6TCBg1GG4&X-Amz-Signature=5dca59733e15037be03bb6c4439483db7c2f1d639cf31698534a37fbdf757872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7YIUOBF%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCzmIaz8lorWIi72Fkm%2B0NteMsfSvH3k6liSr%2Fp5Hb43QIhAO0fzrde3YMdztCB3D0KdxOUzW%2FZLLxkLT7a1ejvwjyYKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwt%2FaVRiAQ%2B3AIPU3Qq3AP%2FzPzeeZvoOCis7Gy%2Byn0ccehsQzkIxQgXBWNZXKxPLyRar45Pjfz%2F7V0dcUaAgbr2b9%2B9cRK1xz7xd9O7aDKNjHmGA5rbVG%2F8arU0wzNigL84aLJZ0DwkIUv6rXKaWCSCAoDRwk%2FNG%2Bxc6gC66G2hvsiFCcdeHilElkL9n68X%2FxxCfdoIZtLyozGVjsUGtOgkwuOMMHw3zBkTvLAX6S%2FG%2Boe%2BbQssGGkuc11nLHzW2eBTPzKEEvXiNCrxdaCJ3FnH5UsNhjT5NuAgqfFPN0qu3hE76gggqLLYYGiHlMHka0oJl%2BdgIydNh6OvW7KF2sabTJXNB2U7lTqTgr3v5oGJGYkcmP%2B%2BMj40THnj7H8qbKOXjcwQHiLwxJJuv7PEjTmboZJ2UDKZieJyh17p4EumBM4G9zPVNzpcGVZbd8lRJOAS2xoqj2O5TS0C8JNYDrxE2uM3bMmFuN9eeVlBBWFlW3HfUF0B5CjeOY2Hz5R2XUpdoVd9p6ijwAExlV9Eb9HN4TZrf38YA19%2BLbau4MNxyunOFJk%2FARCWYc9UKngIOXN6%2Fn3zlBUpy8StscbKRReVMvyLT8lMW6XiZqj7Mqm5Iot7cf16qLCg%2FdCAOWFTgzNKyeIAboKLW6XdCTDqievDBjqkARABkY6j3vpOhYNgFzFulTz8ofPEjpABZ2fDmjNpQAJSGuipNPMCDwh4He7z17lHYe%2B93RqeG77wdXX1M%2FVIR5Cba8jjgHZ36yYnIa4MHfOvxsLuQxRHp%2FfsAV0PDCYt3UbGygjwj2B1pM3Zh7s78yXV7IE1EfUV5pZ7NzwcozinMCd4%2B1RNmb8FVc0KEQe7HhOrZnDPmW2UjRVZe7L6TCBg1GG4&X-Amz-Signature=08c189d908a1f2f85d65f909a7f527ce7c3759d5b6cf0ea9689afe9f2a391fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
