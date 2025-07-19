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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHVNUSM%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHIRJbfuRAe5SnhBVeHTsqifh0rS1QLeIjfbYjCmBgNgIhAOLGxRE065bfFZWorlJovhnlIRznouD%2B9hEnoD1QSCL1KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGdYpC%2BCqbPgvmcmYq3APbKBWdMK6TiQuiAEja6dteG9%2BsICAAGht12BoIYSFuPdCjLH7rKGd%2BujzGTXHu4QyMwhctA2Xh3chmj5n%2BSTJS%2F39p8TRhqotdcMHAoLesTn6%2BIPuZeOt1cXxFbE%2BhLlw96DZWpOfCrZUZFfPrJL%2F58Xg85%2BVJt2CQZckg7Z2JseMKxsdfyf7yIaJ8VfNCaKXEoXOb%2Fs7uXpQ%2BhMc%2FkjQHc9pYrjxaTVZr2p3dVEwSYhimSI8sDEHVU6IzvFhQrrhtfQZ%2FmR3EAFni613Ofwi7EbKwUWi4Sei2EEJ%2BdjtK5scXiQ9Co0wBc9bcuT8Uvxknep1fKjbnkA6devzTByiL0yprsJEnuI%2F172z%2BT6XirQmdp16n%2FR4%2Fkmtluum%2FcMIkiGv79SKR35fTNMKQtt34Zm8vbnpp8yALxV%2B%2BP3V7IV1dzdjpmxrMtJJBet%2F1vHo8SI6qDzGjNqfwsPvUcsCqHoxek2PyIUWw2Q3N8UOL0v4ZOgO9wryYfkwh3mb40Lumds4U75z7tBA1lBgsnrB45%2F%2ByVsGR8Nul%2FyeRTRkiYqr%2FlozChqazj0Ew5WA%2F9lNJEeDfD0MVvGS%2BKFqEmrqjrt3QiXyoU36TUtsqyPh3oKekK%2FPxhuyVHH%2F44TDO5u3DBjqkAedEeOZdJc%2FnRD1X1nrKBJksyYuS0SxP6OeClOHKfIDyfjYeYlh4k5lbFGqwGZ5lReUWZM2wntCcXRgL3gw0MTQ8fyJwAGeVsJkfpVVlPG54dH1dj0agu8pQmhOz4V63Mhl5VYelKtWik2Rbn62YJnJOp%2BUISjA3XVdpb9h7TomsNPRG9pUAtlW0E0%2F4xGKaLcke3BcdRU39emJdK4%2FQAyCWWMED&X-Amz-Signature=7c032c3e9d0b6f9f7bc164373f974902ee917ad8983f46f36c55039bb8e23ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHVNUSM%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHIRJbfuRAe5SnhBVeHTsqifh0rS1QLeIjfbYjCmBgNgIhAOLGxRE065bfFZWorlJovhnlIRznouD%2B9hEnoD1QSCL1KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGdYpC%2BCqbPgvmcmYq3APbKBWdMK6TiQuiAEja6dteG9%2BsICAAGht12BoIYSFuPdCjLH7rKGd%2BujzGTXHu4QyMwhctA2Xh3chmj5n%2BSTJS%2F39p8TRhqotdcMHAoLesTn6%2BIPuZeOt1cXxFbE%2BhLlw96DZWpOfCrZUZFfPrJL%2F58Xg85%2BVJt2CQZckg7Z2JseMKxsdfyf7yIaJ8VfNCaKXEoXOb%2Fs7uXpQ%2BhMc%2FkjQHc9pYrjxaTVZr2p3dVEwSYhimSI8sDEHVU6IzvFhQrrhtfQZ%2FmR3EAFni613Ofwi7EbKwUWi4Sei2EEJ%2BdjtK5scXiQ9Co0wBc9bcuT8Uvxknep1fKjbnkA6devzTByiL0yprsJEnuI%2F172z%2BT6XirQmdp16n%2FR4%2Fkmtluum%2FcMIkiGv79SKR35fTNMKQtt34Zm8vbnpp8yALxV%2B%2BP3V7IV1dzdjpmxrMtJJBet%2F1vHo8SI6qDzGjNqfwsPvUcsCqHoxek2PyIUWw2Q3N8UOL0v4ZOgO9wryYfkwh3mb40Lumds4U75z7tBA1lBgsnrB45%2F%2ByVsGR8Nul%2FyeRTRkiYqr%2FlozChqazj0Ew5WA%2F9lNJEeDfD0MVvGS%2BKFqEmrqjrt3QiXyoU36TUtsqyPh3oKekK%2FPxhuyVHH%2F44TDO5u3DBjqkAedEeOZdJc%2FnRD1X1nrKBJksyYuS0SxP6OeClOHKfIDyfjYeYlh4k5lbFGqwGZ5lReUWZM2wntCcXRgL3gw0MTQ8fyJwAGeVsJkfpVVlPG54dH1dj0agu8pQmhOz4V63Mhl5VYelKtWik2Rbn62YJnJOp%2BUISjA3XVdpb9h7TomsNPRG9pUAtlW0E0%2F4xGKaLcke3BcdRU39emJdK4%2FQAyCWWMED&X-Amz-Signature=350f725d35091041042fa627671474a2bbc46423f9bb4d50038f926b078fcc4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
