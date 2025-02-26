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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EDTORJX%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC9GUbaMVsQ1zy2qw7D3vxEbR6kdGfCkOCtw%2FlxjlnhFgIhAKtFNvKQHjlubrPb3vx1JXjFF58cjLwbVkHaAcaFQZEpKv8DCFcQABoMNjM3NDIzMTgzODA1IgwbwYPz1p9hIVVOoBYq3AOY4hDsfc62dv3jy%2FqFiN8WiFi7tQw6FAoNM%2FK1EnCLIEhQzDqyhVwuUvTkzpu53pFMiUHDWD25HzqFvehVbROe0yqu6DQY%2F5S%2FUCOsyCZpnOh%2FST7Ayem3Fb4fnF2vA%2Bn0tg6wh3w%2BKo9X%2Bds0k7uzzZVQ2ZKeHT9eMCeNwuN2nsyHAcZhLZqbrtzJrc9V%2FrsNEluDI%2FbtHcCQO2FbWg6zj3SKauPkT2rjCcldbcG0Lj2PJfDYEIUyXoQtwjayFJIpTYrzFcOfGo5H%2Ftc47WEvNqGJ4Dyy8qGjXi9J8sIBzWrCNdHb681NZfxpkx9WPy9ual8hcda2gvARTYnA5rOKpD5EtYq%2BuRIBslhkcVdoeFlTBg1g12%2B0zguXKzYZUTwsuC7lpZtYeq%2BnPsgrjUAo6hFx7PmUVjmXVA2txTuPRkwFRxoC1cgLdAMl%2F0reUkxI8wzAHLC%2BCs218yLYgcGdfe8rqZOkiw9fO%2FaTjeaR8Mg6RF3ax0xKvIHzrMF15En%2Fm2MXg3DxKjYZMYwCbfhBSQ7ZonuxCleeQGu5X82HDnv%2Fs0SAM%2B6h4XuAD4DEK%2BCF2wnvNGrpBz4MPn%2BUoMx81G6z5bOwJsBlHkOigFFjFwpZGdEqpdyQHQDpQjDD4%2Fq9BjqkAdx1HR1E0h%2BhuytHz0LuhOoyb5lKELZfqxhwxHJ3T9Q39JEF4apzysC1cxGu%2Fgy2aCTTzH8B7L1Rn90PpykYrGP0MFvFHpTjlM3NWxCzUD3N0aIqOIY0oBhO94vtHcSgfwfxsIYnVpAkF1BNR%2F%2BUBoysueQCInwGNOKLLgO9VF8jJZsKL5Bn11GrQeGESKn79ficlfFnYgzjmQqYniys47Tzine7&X-Amz-Signature=2e76bc55d905921f1f37fa85a2a51cd2aacf53c887ef2a328e10607671eeee21&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EDTORJX%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC9GUbaMVsQ1zy2qw7D3vxEbR6kdGfCkOCtw%2FlxjlnhFgIhAKtFNvKQHjlubrPb3vx1JXjFF58cjLwbVkHaAcaFQZEpKv8DCFcQABoMNjM3NDIzMTgzODA1IgwbwYPz1p9hIVVOoBYq3AOY4hDsfc62dv3jy%2FqFiN8WiFi7tQw6FAoNM%2FK1EnCLIEhQzDqyhVwuUvTkzpu53pFMiUHDWD25HzqFvehVbROe0yqu6DQY%2F5S%2FUCOsyCZpnOh%2FST7Ayem3Fb4fnF2vA%2Bn0tg6wh3w%2BKo9X%2Bds0k7uzzZVQ2ZKeHT9eMCeNwuN2nsyHAcZhLZqbrtzJrc9V%2FrsNEluDI%2FbtHcCQO2FbWg6zj3SKauPkT2rjCcldbcG0Lj2PJfDYEIUyXoQtwjayFJIpTYrzFcOfGo5H%2Ftc47WEvNqGJ4Dyy8qGjXi9J8sIBzWrCNdHb681NZfxpkx9WPy9ual8hcda2gvARTYnA5rOKpD5EtYq%2BuRIBslhkcVdoeFlTBg1g12%2B0zguXKzYZUTwsuC7lpZtYeq%2BnPsgrjUAo6hFx7PmUVjmXVA2txTuPRkwFRxoC1cgLdAMl%2F0reUkxI8wzAHLC%2BCs218yLYgcGdfe8rqZOkiw9fO%2FaTjeaR8Mg6RF3ax0xKvIHzrMF15En%2Fm2MXg3DxKjYZMYwCbfhBSQ7ZonuxCleeQGu5X82HDnv%2Fs0SAM%2B6h4XuAD4DEK%2BCF2wnvNGrpBz4MPn%2BUoMx81G6z5bOwJsBlHkOigFFjFwpZGdEqpdyQHQDpQjDD4%2Fq9BjqkAdx1HR1E0h%2BhuytHz0LuhOoyb5lKELZfqxhwxHJ3T9Q39JEF4apzysC1cxGu%2Fgy2aCTTzH8B7L1Rn90PpykYrGP0MFvFHpTjlM3NWxCzUD3N0aIqOIY0oBhO94vtHcSgfwfxsIYnVpAkF1BNR%2F%2BUBoysueQCInwGNOKLLgO9VF8jJZsKL5Bn11GrQeGESKn79ficlfFnYgzjmQqYniys47Tzine7&X-Amz-Signature=0b000f347ef58e2a841706e9ede1cdc7fba7a5103c59257641dfaf96162cb680&X-Amz-SignedHeaders=host&x-id=GetObject)

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
