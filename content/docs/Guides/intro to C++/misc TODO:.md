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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4WKYZQ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFlg%2BNF1wiGtIOmGxTkSsfe28gCU4NqYhBFj5k4P5QfzAiAQH9R63reLSgw8JsOJKbZqL5SezLL1%2BNUV2kkz3EOGmiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMihX81xJBxaG6mEXOKtwDXIKnL3RWDtDIVj4gqLAWKL9RQhJJLiVBWk3Esd4I%2BzCs7goZahpe6Ee460Q7ATzh5JDedmbOJsJj37SCjXbsogcfu5dTnhjewyALjish%2F882BnoHfkIhHkaPXyuRdWOtWf3WwqFsiv9Ffuy0tLrmdAljykMkBgQHu5xznAVt%2Ff8bRQCdPllOMlYPu1ajV9pPhSUukAz6NcjV%2FR8MlkgFOqAoUjM5gY2xsMITk5Y1FlWXKAk85GtStF63ac%2FKl6%2F35EEusJQyirWzdS7a210jS1ioSuy1VWktvwbh%2FZIH%2BzSu2kmKURYdLoBEObW7s8ZZZi5x632VYWKwzgzuVdcHHsLe7PoyPN4eB5hHbQh5K8dcseQ%2FU0%2F2KeRjAdcxbBxpnYmmQiRdHxyYyhEfw48Wcfqic8f4uKp0%2F84A9U4c4b%2BpbnPZK%2BnKh6OEkLHzT%2F0m9GFrvWR87Fch8ggx9hH%2BtYWXHhmRF7u5H3BUgBoN21wqxyIMyZhD31GDIu8oZuoGFg4joWS48I1T0erM6EmKULMZjMUMcydj1Uete%2FrHVuepfUrVIYulFF8P6Lbfw8UjAZC3Jt1eFulcwi5skHgCP6c50nEl3EG3IEnm5LQguAAlNfC61fsp9nvg%2FKIwssalwAY6pgEKl5Zz2EdeNjbzeXhQiV2hDr%2BisCUPzzUTDruVKyt5RpIgn2L18OXjgUvEG54denVtH4oJsMQ4enDLGCmTcFVTNKLpD6sEQw9CwHo6NL6Z%2Ff3psnHYRx5G%2BVyP6nQlCGkMusgq9Y1gnZgvdYyU%2FcU6wUD9H%2Fd6wti%2F2Zz1wr8wjTDm5fyFFBiLIi6jKEwP9cSBPGUseRtlpyci%2BsHJ6cLOh%2FF0y0QQ&X-Amz-Signature=fb73b9339c2078b32dd00f5636e1508618713c5af979e01e3f9458b8c2a94b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4WKYZQ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFlg%2BNF1wiGtIOmGxTkSsfe28gCU4NqYhBFj5k4P5QfzAiAQH9R63reLSgw8JsOJKbZqL5SezLL1%2BNUV2kkz3EOGmiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMihX81xJBxaG6mEXOKtwDXIKnL3RWDtDIVj4gqLAWKL9RQhJJLiVBWk3Esd4I%2BzCs7goZahpe6Ee460Q7ATzh5JDedmbOJsJj37SCjXbsogcfu5dTnhjewyALjish%2F882BnoHfkIhHkaPXyuRdWOtWf3WwqFsiv9Ffuy0tLrmdAljykMkBgQHu5xznAVt%2Ff8bRQCdPllOMlYPu1ajV9pPhSUukAz6NcjV%2FR8MlkgFOqAoUjM5gY2xsMITk5Y1FlWXKAk85GtStF63ac%2FKl6%2F35EEusJQyirWzdS7a210jS1ioSuy1VWktvwbh%2FZIH%2BzSu2kmKURYdLoBEObW7s8ZZZi5x632VYWKwzgzuVdcHHsLe7PoyPN4eB5hHbQh5K8dcseQ%2FU0%2F2KeRjAdcxbBxpnYmmQiRdHxyYyhEfw48Wcfqic8f4uKp0%2F84A9U4c4b%2BpbnPZK%2BnKh6OEkLHzT%2F0m9GFrvWR87Fch8ggx9hH%2BtYWXHhmRF7u5H3BUgBoN21wqxyIMyZhD31GDIu8oZuoGFg4joWS48I1T0erM6EmKULMZjMUMcydj1Uete%2FrHVuepfUrVIYulFF8P6Lbfw8UjAZC3Jt1eFulcwi5skHgCP6c50nEl3EG3IEnm5LQguAAlNfC61fsp9nvg%2FKIwssalwAY6pgEKl5Zz2EdeNjbzeXhQiV2hDr%2BisCUPzzUTDruVKyt5RpIgn2L18OXjgUvEG54denVtH4oJsMQ4enDLGCmTcFVTNKLpD6sEQw9CwHo6NL6Z%2Ff3psnHYRx5G%2BVyP6nQlCGkMusgq9Y1gnZgvdYyU%2FcU6wUD9H%2Fd6wti%2F2Zz1wr8wjTDm5fyFFBiLIi6jKEwP9cSBPGUseRtlpyci%2BsHJ6cLOh%2FF0y0QQ&X-Amz-Signature=3c94a529255ec6239c46c9e87f5ef67edb74f1e59da1a6ff2d60b4ba4ba478b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
