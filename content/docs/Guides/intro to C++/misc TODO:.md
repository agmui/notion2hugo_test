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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJUOIPLP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfMuEncxVwWFxmNXeQ%2B5VlqnZiAD483cGuiR0%2BYQ2miwIgdVgjrpMYGPLJcTRHksVqQNY4svMgCiH4rH03CE8ZeNEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FZn4yOIIYrHeXDxyrcA4WKfC3sxgNiWBoReVPkbhYJy9v8fJcgDB6TXVBNFsM6vzAdNL66%2F2XYRqw4LLIQZ2SJ5hQ%2FtFALHVgzASYYU1wC1UssLl7Ck90kWVOeo5Iil8U96vCB4%2BBBzVMWvAEUOar3sxeRebntUPzlRdw8yuaZ%2BktD%2Bcr3nsMyX6DNma2a5fvArMN0DQamOCkZ1cXNWDaWWcI0MVDbRo8jq9rYSJVTuKs%2FZzZsTlM3ujbc3jxy3mKjsDD17juPj6ilWn7J8HhQ%2BsS4kbeHRfWTucRDo7QWn7M5TbqnAXTyTmYnvFjGp5BTqPutpYWzjb8ICW1J4nmFT%2BJ7VJbOKRMHsNiaIdknXXUy3AkBQlj1losJA2tj5Z6UB8xXnfBMc15%2BYwLz0XtD4KqXQcXLs2o3YnX%2FwSbqG8SUdbq2MXMvDKS09FwticNxKwjS9538%2BvaigQ9yl%2FoLCYKEeOGJJNWfZQRlRZ9KCjHBei%2FOQe%2Bx%2BILq%2FX0p1unJdvVpLyIp2MqVGshRVSYujDb3TmIdEaAEkqVWMQjm%2FimLhd1ZOIDaa80hgT2fvtlNa%2FEci5V8Nc1Y3spZpxKSJ0a19fBFa6jdIcXlyBaDunEuzSFm8Q7L2WBxAX3RQuRzZBOEqM96YRbYMM%2FwncIGOqUBmbCVgIyjq%2B4TE77I0pEbXCfS1zSyzFWaDaE0xp%2BP6MeBPCNwuMui8AfCStOnKrv3KEnLdfwTkBawoS9rrtrM%2Fyg7X%2BJ5%2FCme1mvAUaMaVSTAjahaEuAFgjeBCbGs%2B8JJrbSOpFt46i0%2BGFxOeP95tEr1V9vn5BLt8koH7cRAFN5Qxs65kv0GBH7pIwfBkYoFgBuTbrnM%2BqErkTJk5WjxO2fFn6%2BV&X-Amz-Signature=39dd5629730bf92547bc97fc2fc561b2439cfcd9f9c15a4b343c7c5e2628c7c5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJUOIPLP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfMuEncxVwWFxmNXeQ%2B5VlqnZiAD483cGuiR0%2BYQ2miwIgdVgjrpMYGPLJcTRHksVqQNY4svMgCiH4rH03CE8ZeNEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FZn4yOIIYrHeXDxyrcA4WKfC3sxgNiWBoReVPkbhYJy9v8fJcgDB6TXVBNFsM6vzAdNL66%2F2XYRqw4LLIQZ2SJ5hQ%2FtFALHVgzASYYU1wC1UssLl7Ck90kWVOeo5Iil8U96vCB4%2BBBzVMWvAEUOar3sxeRebntUPzlRdw8yuaZ%2BktD%2Bcr3nsMyX6DNma2a5fvArMN0DQamOCkZ1cXNWDaWWcI0MVDbRo8jq9rYSJVTuKs%2FZzZsTlM3ujbc3jxy3mKjsDD17juPj6ilWn7J8HhQ%2BsS4kbeHRfWTucRDo7QWn7M5TbqnAXTyTmYnvFjGp5BTqPutpYWzjb8ICW1J4nmFT%2BJ7VJbOKRMHsNiaIdknXXUy3AkBQlj1losJA2tj5Z6UB8xXnfBMc15%2BYwLz0XtD4KqXQcXLs2o3YnX%2FwSbqG8SUdbq2MXMvDKS09FwticNxKwjS9538%2BvaigQ9yl%2FoLCYKEeOGJJNWfZQRlRZ9KCjHBei%2FOQe%2Bx%2BILq%2FX0p1unJdvVpLyIp2MqVGshRVSYujDb3TmIdEaAEkqVWMQjm%2FimLhd1ZOIDaa80hgT2fvtlNa%2FEci5V8Nc1Y3spZpxKSJ0a19fBFa6jdIcXlyBaDunEuzSFm8Q7L2WBxAX3RQuRzZBOEqM96YRbYMM%2FwncIGOqUBmbCVgIyjq%2B4TE77I0pEbXCfS1zSyzFWaDaE0xp%2BP6MeBPCNwuMui8AfCStOnKrv3KEnLdfwTkBawoS9rrtrM%2Fyg7X%2BJ5%2FCme1mvAUaMaVSTAjahaEuAFgjeBCbGs%2B8JJrbSOpFt46i0%2BGFxOeP95tEr1V9vn5BLt8koH7cRAFN5Qxs65kv0GBH7pIwfBkYoFgBuTbrnM%2BqErkTJk5WjxO2fFn6%2BV&X-Amz-Signature=00775178573b4a4b97acb002d90ce6771e5f548cf7c9f3415d92974fec7e85f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
