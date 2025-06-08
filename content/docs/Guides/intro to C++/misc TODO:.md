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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HYGS2HA%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGX7BD2Ou7Tz2fi6f3Ww5j6h4n%2Fz4eW91njpM2FYHVMqAiB86nP0dnrmyZEUcV0Z6q6WOv1QREeBSyKcItw%2Bmk5qWCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlps4XiHjgoXgK%2B8uKtwD6N7wUvlKE9bT6TwBG5NjgTsk6B8jsBCdwIeOe7%2BuMRHfy%2BNe8yGLpnRUUVMXdVl5TsqWMjyT8z%2FO%2F%2FqtmMG2uNBZFTV%2FktsGY9qnj8vFy6E2nLA1%2FZXxFLMo6mFcsqJjJxt8LvTE84f%2FT4mDisPjX8tl0%2BsfeceIInC4FQYEktGE12WX76LJugjjr0kfxnjtPlfxG0oiORK6YqX58BhSgoVNZnZmhBAau3Rur7ZTVYWz%2BwXa%2Ffs4wLZfx8pCE3ZFg%2FeXnAMmqQnNlm7Dr5g0xZli1Z7PlV429I%2FQQCqwY2OhkZVARexzHoEWROX0%2Bzb3OCetLZpF6tySl5qXj0Rp%2FqPjYPrXJ8AWYl%2BtEPb8imQkiCBcl5rhSZ%2Bvgw%2Bn7iz3koaMEBGTunWSTKgsMQDpgTtFe0N4bvMQL%2BgsZ5mQ%2BGMDTjBX%2B8Ip8y1tNtTHf6ETARtSkJ9z%2BR9SMzMw7%2BrJ4HqgEIB04wvir0LjbELJaI%2F%2FLMZf4Yx94Olf96Mo8tfu4wPpStxY97i8TE%2BxYsBFvTB4pRkpV5Kq8bB6CgeglPBAAXBGFfzfr1zyQ1z%2B2%2F45Qc7436eoUkcHZkQdBw8NUARHrJi458R8Kg8WWcoTrfTbTRGOcs8FNTRdw6EwkeKXwgY6pgEXm27CyqkxEJ%2FV8bhIIkSnybcNIqcPvGyhX5i96fn4lxuA4B2KU7LKuqSQMtLffE6qrflzssm82i14Q%2BL8OF6vxEDEEudA%2BUjujfBv2tU3hv2X1h2O4cF8WcKfGYftyJFn5MTFE41BqgxwRBq7Jl%2BmwBXivD%2FBvUnk2wRAjOsPIK%2Fk6zG466d5qdOcYUdHTf59I5lzgG23vfDUDgESeJG4KyFmkOwd&X-Amz-Signature=75feb3d10444fef8b849a35d97dd9711629c4ea7600b60c3ee43743dfdd6130a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HYGS2HA%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGX7BD2Ou7Tz2fi6f3Ww5j6h4n%2Fz4eW91njpM2FYHVMqAiB86nP0dnrmyZEUcV0Z6q6WOv1QREeBSyKcItw%2Bmk5qWCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlps4XiHjgoXgK%2B8uKtwD6N7wUvlKE9bT6TwBG5NjgTsk6B8jsBCdwIeOe7%2BuMRHfy%2BNe8yGLpnRUUVMXdVl5TsqWMjyT8z%2FO%2F%2FqtmMG2uNBZFTV%2FktsGY9qnj8vFy6E2nLA1%2FZXxFLMo6mFcsqJjJxt8LvTE84f%2FT4mDisPjX8tl0%2BsfeceIInC4FQYEktGE12WX76LJugjjr0kfxnjtPlfxG0oiORK6YqX58BhSgoVNZnZmhBAau3Rur7ZTVYWz%2BwXa%2Ffs4wLZfx8pCE3ZFg%2FeXnAMmqQnNlm7Dr5g0xZli1Z7PlV429I%2FQQCqwY2OhkZVARexzHoEWROX0%2Bzb3OCetLZpF6tySl5qXj0Rp%2FqPjYPrXJ8AWYl%2BtEPb8imQkiCBcl5rhSZ%2Bvgw%2Bn7iz3koaMEBGTunWSTKgsMQDpgTtFe0N4bvMQL%2BgsZ5mQ%2BGMDTjBX%2B8Ip8y1tNtTHf6ETARtSkJ9z%2BR9SMzMw7%2BrJ4HqgEIB04wvir0LjbELJaI%2F%2FLMZf4Yx94Olf96Mo8tfu4wPpStxY97i8TE%2BxYsBFvTB4pRkpV5Kq8bB6CgeglPBAAXBGFfzfr1zyQ1z%2B2%2F45Qc7436eoUkcHZkQdBw8NUARHrJi458R8Kg8WWcoTrfTbTRGOcs8FNTRdw6EwkeKXwgY6pgEXm27CyqkxEJ%2FV8bhIIkSnybcNIqcPvGyhX5i96fn4lxuA4B2KU7LKuqSQMtLffE6qrflzssm82i14Q%2BL8OF6vxEDEEudA%2BUjujfBv2tU3hv2X1h2O4cF8WcKfGYftyJFn5MTFE41BqgxwRBq7Jl%2BmwBXivD%2FBvUnk2wRAjOsPIK%2Fk6zG466d5qdOcYUdHTf59I5lzgG23vfDUDgESeJG4KyFmkOwd&X-Amz-Signature=874415ac698aceadaf69cbf91ed336bc7cfc6cd76a32cf9eaed2d4ef45489b10&X-Amz-SignedHeaders=host&x-id=GetObject)

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
