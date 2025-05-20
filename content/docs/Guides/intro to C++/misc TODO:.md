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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST3PQJ6J%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0bk%2BYQZhGrBcWD7iZIjQiv5gXHHoOTOzEHWScRHoJyAiAwHz4%2BC8NukBHdiCxiLlHNEaXe7Ufo0Vg3WxC3TOdsvyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr81AnsFzABoAdMn5KtwDRmd5QWfx%2F0UnHr2BdGYNsSALEq7g75HXQAxHwBYECpgZD970%2BXZ4R5HYg7M9sCsohqPb8ClOTuG7iCEvdrVpq8j1afd9EKBbNu93Ver97yWb%2BqnCiZMLYlAX9AU0ae8zGgf6P%2BMlit13i8oxOXCQU8WHIeDbkG7dn3gcxRZWy1MmD%2FD3WjjpxZPcp%2FY8cGFxEY6kpP8pMk5SRzq%2FgO3BfkSHNhdpZhSFiHM1jLqzS74%2FU1B3kmfBZN4Un%2Bbj5aUOZXPxsSIeihEHLQVVL%2FZud%2BRZRzdMk%2BLrl31%2BVq3oCNiENBfVhJ%2FIZG3xFuyQTxsk8H9l0hxJM2uE0HIIM%2Bp6ohCzXYyig6zLbg6uq2Jj%2FbypXzDkxJeXNhwjy%2FIwp2OKaXXWg9zIgWseouQuWWVBbdyQ1klMBCKaFmj%2Be1up7ghK80%2B2pvy%2BdVBh23OElhqD1TO4T1g6Z7ycSbMJHg6JYHyLh3AQvRh0awzb4pJN7Bshv1fOMLEEsu7QIfen%2F3ZamMb2sv6GsgSHsPLmeFDgQg7EhqWhWkcRsVNvdNTVx72tYzCuliFvAcDW2FM3v3fTxSf2E0p46bY6FenTdNMzc5w1lj97nEWQn6TlZO4EP2KHVGAMFzXUr670yYww2rGzwQY6pgFjiw%2B979cYgjG9sfmOZDJ5c9Uyb6fZxb8aJgoyhpPsEqH4zFama0GTlUNeqNImJsO0kfb%2BFuLPOCQl8WdbSoEU4hnXyOQbwIhu0oabXQWAZp5D4ZuYMsOJxj%2FIi6YZXpotWA1crrsJBI4VAB%2FaObnz2rtNsTJY7mT5Fmr7ZLllwLfitqQ9rvoZiQr9fP959hfXit8T%2B5%2FFAlRLWFMtJJxjCm4zaHtd&X-Amz-Signature=b06fd374c5876f72586249f2dee104c42c2fcaa44fac2a1e6c8dff79e965c4fe&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST3PQJ6J%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0bk%2BYQZhGrBcWD7iZIjQiv5gXHHoOTOzEHWScRHoJyAiAwHz4%2BC8NukBHdiCxiLlHNEaXe7Ufo0Vg3WxC3TOdsvyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr81AnsFzABoAdMn5KtwDRmd5QWfx%2F0UnHr2BdGYNsSALEq7g75HXQAxHwBYECpgZD970%2BXZ4R5HYg7M9sCsohqPb8ClOTuG7iCEvdrVpq8j1afd9EKBbNu93Ver97yWb%2BqnCiZMLYlAX9AU0ae8zGgf6P%2BMlit13i8oxOXCQU8WHIeDbkG7dn3gcxRZWy1MmD%2FD3WjjpxZPcp%2FY8cGFxEY6kpP8pMk5SRzq%2FgO3BfkSHNhdpZhSFiHM1jLqzS74%2FU1B3kmfBZN4Un%2Bbj5aUOZXPxsSIeihEHLQVVL%2FZud%2BRZRzdMk%2BLrl31%2BVq3oCNiENBfVhJ%2FIZG3xFuyQTxsk8H9l0hxJM2uE0HIIM%2Bp6ohCzXYyig6zLbg6uq2Jj%2FbypXzDkxJeXNhwjy%2FIwp2OKaXXWg9zIgWseouQuWWVBbdyQ1klMBCKaFmj%2Be1up7ghK80%2B2pvy%2BdVBh23OElhqD1TO4T1g6Z7ycSbMJHg6JYHyLh3AQvRh0awzb4pJN7Bshv1fOMLEEsu7QIfen%2F3ZamMb2sv6GsgSHsPLmeFDgQg7EhqWhWkcRsVNvdNTVx72tYzCuliFvAcDW2FM3v3fTxSf2E0p46bY6FenTdNMzc5w1lj97nEWQn6TlZO4EP2KHVGAMFzXUr670yYww2rGzwQY6pgFjiw%2B979cYgjG9sfmOZDJ5c9Uyb6fZxb8aJgoyhpPsEqH4zFama0GTlUNeqNImJsO0kfb%2BFuLPOCQl8WdbSoEU4hnXyOQbwIhu0oabXQWAZp5D4ZuYMsOJxj%2FIi6YZXpotWA1crrsJBI4VAB%2FaObnz2rtNsTJY7mT5Fmr7ZLllwLfitqQ9rvoZiQr9fP959hfXit8T%2B5%2FFAlRLWFMtJJxjCm4zaHtd&X-Amz-Signature=573f452e71156d50804a97724dcf85a9582136d397ef22c536b494e0c80edf9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
