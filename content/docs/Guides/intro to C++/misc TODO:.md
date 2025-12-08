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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2VUM6VH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC72q3pEdgsK4uF3TFOHukNd0dm8nN1R6kbsfgbcsyLGgIgQBfYdIRkXDFD0C%2FM9LFqFub0v12IUDCZhWthB8mwoKAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4xg0BlCGDIwDfaYyrcA%2BEFtjMdHiSO5TlRHO9jA0MG99uuihCBnksrZBR46cFotoOSHeMHjB06QxDk3lIJ2lfvHR6Zaiauq8RugirifbiLg7ouQynI8hSQLydlojpQ8Cub1oPMyOEo56RQTsXadCOzON5lr7BqSF8%2FOMXzKvXohcs8QnmoLpHw58q8MbVrbVHfo2tdRnw2VsO9UhVnGMIzeDMkfHxgykOxMnAdQFaAbAlTJ68ctDIitDOiuQrG4DBcw%2BcgsZ8jFJz9hU85aVnDbuXrGG0akaXJdzhyT36GQJoy4l4ZQfZwJscEW9LTmCZXlVZcqnaeTVVdsUAUwkkU4JdGZwQ3Mw30XVICFtqrzJgv8BovFWiVc5zmRQIRnXxNdNYDkfVokScYBHAp8mur%2FPaCVt4%2BlelfhlkK%2FuVBb%2FABzM2qwLidvkdkfEUZo9M1UUtadXP0f5gUObFrEx3tpBknYLCwYjcE9fBncZ%2Bt7BqqNJlPldsn7Mh1vL%2F%2BGiqWjOj6YkheXGtLil%2FNHARor8%2FHE7D8axN1pz48%2B7TbA%2BAQEMvNOpKL2pC3QukXrNK8L9z0UtuhUyPtOrQBNSS6azxJMOOW%2BQcH65ay%2B%2FnHt1luAh10%2BRq3QBA7ZF9EUEmhACiSNKJmHqRHMIfR2MkGOqUBLQy2RyD%2FZVkiK4ali6r%2F1eR9i47Qvz9k4l1%2Fvlp03F0eRD8WTJheuUxhEX%2F8ZSwjuOm6dXpu1axkFvIB%2B4UyZIWonlbmLoV2htWYIJqfxIeXMAIu8ruce0jIi3BP1sFeWxUxoN3Ay7h5%2FVzv5BC1cV7gPD%2Frdg6MHnmojj%2FmDEUi4xUbv%2FBoqA7oBsbkzAiBCpfwKVx6AvyGFf8Zu79ORmFILig4&X-Amz-Signature=a22f4b8a57f79bf0666f97414f1869632aa706fb7ebbc295e7d0e74da16430ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2VUM6VH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC72q3pEdgsK4uF3TFOHukNd0dm8nN1R6kbsfgbcsyLGgIgQBfYdIRkXDFD0C%2FM9LFqFub0v12IUDCZhWthB8mwoKAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4xg0BlCGDIwDfaYyrcA%2BEFtjMdHiSO5TlRHO9jA0MG99uuihCBnksrZBR46cFotoOSHeMHjB06QxDk3lIJ2lfvHR6Zaiauq8RugirifbiLg7ouQynI8hSQLydlojpQ8Cub1oPMyOEo56RQTsXadCOzON5lr7BqSF8%2FOMXzKvXohcs8QnmoLpHw58q8MbVrbVHfo2tdRnw2VsO9UhVnGMIzeDMkfHxgykOxMnAdQFaAbAlTJ68ctDIitDOiuQrG4DBcw%2BcgsZ8jFJz9hU85aVnDbuXrGG0akaXJdzhyT36GQJoy4l4ZQfZwJscEW9LTmCZXlVZcqnaeTVVdsUAUwkkU4JdGZwQ3Mw30XVICFtqrzJgv8BovFWiVc5zmRQIRnXxNdNYDkfVokScYBHAp8mur%2FPaCVt4%2BlelfhlkK%2FuVBb%2FABzM2qwLidvkdkfEUZo9M1UUtadXP0f5gUObFrEx3tpBknYLCwYjcE9fBncZ%2Bt7BqqNJlPldsn7Mh1vL%2F%2BGiqWjOj6YkheXGtLil%2FNHARor8%2FHE7D8axN1pz48%2B7TbA%2BAQEMvNOpKL2pC3QukXrNK8L9z0UtuhUyPtOrQBNSS6azxJMOOW%2BQcH65ay%2B%2FnHt1luAh10%2BRq3QBA7ZF9EUEmhACiSNKJmHqRHMIfR2MkGOqUBLQy2RyD%2FZVkiK4ali6r%2F1eR9i47Qvz9k4l1%2Fvlp03F0eRD8WTJheuUxhEX%2F8ZSwjuOm6dXpu1axkFvIB%2B4UyZIWonlbmLoV2htWYIJqfxIeXMAIu8ruce0jIi3BP1sFeWxUxoN3Ay7h5%2FVzv5BC1cV7gPD%2Frdg6MHnmojj%2FmDEUi4xUbv%2FBoqA7oBsbkzAiBCpfwKVx6AvyGFf8Zu79ORmFILig4&X-Amz-Signature=5f8ac1f3b75d5a8d2fd405d389af5d0adc51305f03ecffb0e058078824673afb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
