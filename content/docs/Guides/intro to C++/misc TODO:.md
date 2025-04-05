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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEG7GRQV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQqwBH4S9ImpggaeRdZAVhwZeW19g9g%2BhmuVC5%2BvxqQIgK8LgNoqHE46aPfhBHMIImOSPMrFs0aG0y%2Fvh3Gp6eGAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHXL5Mbl1u1QRr64%2BCrcAzfu%2F3GfCYVYmCFV6tWeOmAkqq8tndMNzx1UuDZSE9kwH6s%2FDonrC5H04jZ7G2ShAxevtT%2Bg5nQZW0pyE3nrmq%2BblgZb1yW1NH2TLdC9084uh7Cpf20Qo90kgN2t%2BJwju81psWwWh6Ff5eeiul2ztOeKal%2BvdejV0sbafRu28pMNUG0DYphTtucYxbgRAmddrWVz2mFcfFGnjWH5T1KaZgYgmc0U6M5igKXQA79W8IIUJ0JjfATD5zsWavG2Ql%2FE%2BPZ0qJTKtG4E1jzvyuU0HzBbPshqIgE6qODsDzMF8yTJuLCjHiXrOGWyglWZI2NdbEvJdoXg9wFMAowz0Cy1XEUvkaG9mPlh8ShRl8WEaGs%2Bxtuqg0GF1%2FzxMRdRFkrFPIM9fCt0jMeRKCxSV5rg1uucp4VLeuPvhELFpmhRstw%2FD6f3Pb8xUGFIRp7lqxKMxuNW3Bi2e2DuqBTNwwlYa0S8%2FKf7gj8JH%2B%2FaCWVe5UH3MR60MYp9eAGNLe%2F1U8RoBzLbtUFPH46zY%2BoZ%2BvIp1RgIjXl0ZHJO7wn9vVH7z%2BCXyPgZVHPufV3P5IOh0afeuUKDE6oedKk99jtAFx3U92fM3z%2BaNw9AzDRi3bsY%2Fjoau3QFUQ8yg95p8zyPMLq9wr8GOqUBpmYUJyCi1%2BKCCaXWYUPrA6%2B1XfsrkqbWTG1PM7IDKUPdYUsK6gH0yOLqAa%2B3%2BnFrbPDJxSZHsM%2Bnt8No1Gy%2BM0R5ZrFT%2FdaLxn8lxWvy0srpdD8tq21da3Wu8sK3v5NNRO1i%2FmU2DDjlXS63BrlLfLJuT5IU2ejILkK0VniHP2IMjAXFauUgf4%2BnM%2BKB%2FDrh5FxnUq%2Flbab9uTo636Qt8jBnY31W&X-Amz-Signature=6e3b789df8df315f0f4b78deb6bacef567adbd4518e0b374f31680f3f46b5807&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEG7GRQV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQqwBH4S9ImpggaeRdZAVhwZeW19g9g%2BhmuVC5%2BvxqQIgK8LgNoqHE46aPfhBHMIImOSPMrFs0aG0y%2Fvh3Gp6eGAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHXL5Mbl1u1QRr64%2BCrcAzfu%2F3GfCYVYmCFV6tWeOmAkqq8tndMNzx1UuDZSE9kwH6s%2FDonrC5H04jZ7G2ShAxevtT%2Bg5nQZW0pyE3nrmq%2BblgZb1yW1NH2TLdC9084uh7Cpf20Qo90kgN2t%2BJwju81psWwWh6Ff5eeiul2ztOeKal%2BvdejV0sbafRu28pMNUG0DYphTtucYxbgRAmddrWVz2mFcfFGnjWH5T1KaZgYgmc0U6M5igKXQA79W8IIUJ0JjfATD5zsWavG2Ql%2FE%2BPZ0qJTKtG4E1jzvyuU0HzBbPshqIgE6qODsDzMF8yTJuLCjHiXrOGWyglWZI2NdbEvJdoXg9wFMAowz0Cy1XEUvkaG9mPlh8ShRl8WEaGs%2Bxtuqg0GF1%2FzxMRdRFkrFPIM9fCt0jMeRKCxSV5rg1uucp4VLeuPvhELFpmhRstw%2FD6f3Pb8xUGFIRp7lqxKMxuNW3Bi2e2DuqBTNwwlYa0S8%2FKf7gj8JH%2B%2FaCWVe5UH3MR60MYp9eAGNLe%2F1U8RoBzLbtUFPH46zY%2BoZ%2BvIp1RgIjXl0ZHJO7wn9vVH7z%2BCXyPgZVHPufV3P5IOh0afeuUKDE6oedKk99jtAFx3U92fM3z%2BaNw9AzDRi3bsY%2Fjoau3QFUQ8yg95p8zyPMLq9wr8GOqUBpmYUJyCi1%2BKCCaXWYUPrA6%2B1XfsrkqbWTG1PM7IDKUPdYUsK6gH0yOLqAa%2B3%2BnFrbPDJxSZHsM%2Bnt8No1Gy%2BM0R5ZrFT%2FdaLxn8lxWvy0srpdD8tq21da3Wu8sK3v5NNRO1i%2FmU2DDjlXS63BrlLfLJuT5IU2ejILkK0VniHP2IMjAXFauUgf4%2BnM%2BKB%2FDrh5FxnUq%2Flbab9uTo636Qt8jBnY31W&X-Amz-Signature=fba94f6a156e0db3b119c976ac31ce48f3fc388edf6d9ce3e6dee1939c232b3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
