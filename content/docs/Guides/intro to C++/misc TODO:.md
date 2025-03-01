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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZLGQ42%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDYFNmY%2F3RvtIeUAEQn%2BxAb8PofP%2B81c7LOFCJN1NvEwwIhAKnBKYAyhqz4n46JIbwYejuvYRVKvIiKFVr8VHPJ3oryKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKjMSejblgP01wX0Qq3AP1CM1uw7AuEDU%2Fi9KlUpRdC6BJ%2FsX5QGGEfiZPKzEWgL9ye3aj28r8Wqyi8Eo5HmEWbd%2FDRH48BukEXL5mu%2BxJ9AQ57ZbI7wRacWcxwfZI7biD0R%2FAxvBRho48%2Buap5C3I9MRaQthf25FUY7J7EgbAH5DKEGbRt%2BKsBgAuGaRUUI%2F73wLT7s%2FRMHJ89ImIm7yjb3tEBMUIWFryXhCT3zC6Yc%2BwPl8leAOm1w10qtc98IQIzHa4TzbVEw%2BzEOS9F2IPC4VStI00V5Xila0eAohTIkwQ1%2FlsvG9M4R0TSEkHZEB0VrAr2yaKW%2FOOGFlClAXHX5dhAJYjEiSNkCWXsWFpHd7IPA7gMPHhNzT1sUbJpp7IkiViBhHYhXUv98XWN9WeDxHbg9VHayKc2vx7I0n4J1czfM70UUEDfVZD3CjnX1H61%2BMQiOTR7Ka2jDZA2UoFlTicHSk8lH92aubR%2FKBvsTjUs4nUxd6WM1X60Amhp22kvGnefetJncPH99MQ%2Bj6A9WBo1lZevx%2BaNEzAa6%2By6AmNFwx7ZYa3UR7avnKUSuM0sDMSegYPvW2Y1rNpq0%2FGZqsvs%2FrUGyZsU%2FKT0UTgjjwx9A00B9Kd6nT%2BqerjT3x1umRR%2FLmUt3RHfDCglYy%2BBjqkAfgFO0DfX5dga%2B0HUQG9XjqcqB9HK5r1D5H4n61LCjco5sQu0ynOPJ%2FSL%2FQ6pdBlu7QYxyECz%2FDVAb9vO%2FiMpetr5jsRipPZJtyuBTPRGcE3r0ygPiPgO56AtVK9rRfu%2FsuQONoCGybgcorDY%2FJQnu7d%2BRTn95fQsl42U5ZTJa6fudWjcI%2FNE0oWMy0RvQMj5KKXeie4HLmKABEZMhSMNmxpZqSO&X-Amz-Signature=ccfc2c7ec0982ba15b52c63d32790f6c57880826d5133dac48845b3cbee766cc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZLGQ42%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDYFNmY%2F3RvtIeUAEQn%2BxAb8PofP%2B81c7LOFCJN1NvEwwIhAKnBKYAyhqz4n46JIbwYejuvYRVKvIiKFVr8VHPJ3oryKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKjMSejblgP01wX0Qq3AP1CM1uw7AuEDU%2Fi9KlUpRdC6BJ%2FsX5QGGEfiZPKzEWgL9ye3aj28r8Wqyi8Eo5HmEWbd%2FDRH48BukEXL5mu%2BxJ9AQ57ZbI7wRacWcxwfZI7biD0R%2FAxvBRho48%2Buap5C3I9MRaQthf25FUY7J7EgbAH5DKEGbRt%2BKsBgAuGaRUUI%2F73wLT7s%2FRMHJ89ImIm7yjb3tEBMUIWFryXhCT3zC6Yc%2BwPl8leAOm1w10qtc98IQIzHa4TzbVEw%2BzEOS9F2IPC4VStI00V5Xila0eAohTIkwQ1%2FlsvG9M4R0TSEkHZEB0VrAr2yaKW%2FOOGFlClAXHX5dhAJYjEiSNkCWXsWFpHd7IPA7gMPHhNzT1sUbJpp7IkiViBhHYhXUv98XWN9WeDxHbg9VHayKc2vx7I0n4J1czfM70UUEDfVZD3CjnX1H61%2BMQiOTR7Ka2jDZA2UoFlTicHSk8lH92aubR%2FKBvsTjUs4nUxd6WM1X60Amhp22kvGnefetJncPH99MQ%2Bj6A9WBo1lZevx%2BaNEzAa6%2By6AmNFwx7ZYa3UR7avnKUSuM0sDMSegYPvW2Y1rNpq0%2FGZqsvs%2FrUGyZsU%2FKT0UTgjjwx9A00B9Kd6nT%2BqerjT3x1umRR%2FLmUt3RHfDCglYy%2BBjqkAfgFO0DfX5dga%2B0HUQG9XjqcqB9HK5r1D5H4n61LCjco5sQu0ynOPJ%2FSL%2FQ6pdBlu7QYxyECz%2FDVAb9vO%2FiMpetr5jsRipPZJtyuBTPRGcE3r0ygPiPgO56AtVK9rRfu%2FsuQONoCGybgcorDY%2FJQnu7d%2BRTn95fQsl42U5ZTJa6fudWjcI%2FNE0oWMy0RvQMj5KKXeie4HLmKABEZMhSMNmxpZqSO&X-Amz-Signature=21cf6d08a92f29fb5afa481e6928ca1123e043ba86cfc481f0726f2b588a9367&X-Amz-SignedHeaders=host&x-id=GetObject)

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
