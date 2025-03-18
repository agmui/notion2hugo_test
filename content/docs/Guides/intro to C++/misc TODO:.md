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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ECCNWEY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFPmmuwNGmwzBZ9slR2zIfSm%2FkbZg6b69TGpribqgcLaAiAP52SHK07c3fNZNY%2BqkRDFXKqoND42JjrdaHtRWvxDbir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMhLs9YOkpb0YRNY5nKtwDq8ys7svZ5c9XL4b3k6pBF8afWVjkkO6C%2Bgwf%2FraOPvfEIV%2BH1ClnmaQpcP64SZyI5DOEQC9J7mQp%2Fp5VDZeccKylLLY0KGsGDgI7rfPcsQ%2B4fTD%2FKKjJSpKJyf0qvNQR0nsDcseIbK%2BLz2J8SizF1C%2FekQF9WnW2hD8Ic6%2Fm%2BuGOd26Cr56uxuQ245nP2abHScdJbqNbnHDfN4rwIxwPLal7wom4gsfzNhFigxMuI80IrSw63r3mLY%2BLDf%2BuZs5wnURCy64wXtJ%2FUTt4GGLZIYGO3%2BFUzdGAOtXmfT7ko7%2FKEm3Q9nrV6akJkXzRMZNqcu7TiatwaErR7zb%2B1ZWluEYN6%2BZeRg8epanZS6%2F3txkd6pFR7VYQ2KCDFih6Bklr9zG8OK4dtUzeS2AlI8S0NMuh06o10IStaydIJ0nJgpWtik%2B%2FpfgYnwkWlDhE3UdiipB12pI6GSJZcfb8OdilsnuEUXEz6is7H0aK6lbhTqLqLFcLTW8b58tpiLnzW6oEkFYDUOM0KWXL%2Fb37mcNEH%2BwiBcYiUnz7cq8C4jv9esu6zfDdCbeN3wQlql7lzULSy%2FjLH0re30NPpyQVwONu7TnsgI5vnWsMNXD3SFFnolfSkP9d92t8Ex7umDQw0LTlvgY6pgHWok%2BsH0Lnd%2BBzE9IyNcGDpgAhy0UZfXPMeyvgEwkZBTanNgm5b3jY0KdWiiX4Yz53yzGU81InFShohbj95K7yFNnrV%2FZWOqbnVpsRZjswhfx1MJnkUKnsZfngcOMu858BDmblOh4o8Ul1gm52XFJN3Z7KqkU4kJZXdDln3CNmla3NE9pA7Ee4DWprYC1TZ3FZQnff1KSII%2BNLRVc2cs7Po49RiiSh&X-Amz-Signature=11b72e39b643479d11f672afce066eb4267ca0348e276cf20b662754bc58f903&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ECCNWEY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFPmmuwNGmwzBZ9slR2zIfSm%2FkbZg6b69TGpribqgcLaAiAP52SHK07c3fNZNY%2BqkRDFXKqoND42JjrdaHtRWvxDbir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMhLs9YOkpb0YRNY5nKtwDq8ys7svZ5c9XL4b3k6pBF8afWVjkkO6C%2Bgwf%2FraOPvfEIV%2BH1ClnmaQpcP64SZyI5DOEQC9J7mQp%2Fp5VDZeccKylLLY0KGsGDgI7rfPcsQ%2B4fTD%2FKKjJSpKJyf0qvNQR0nsDcseIbK%2BLz2J8SizF1C%2FekQF9WnW2hD8Ic6%2Fm%2BuGOd26Cr56uxuQ245nP2abHScdJbqNbnHDfN4rwIxwPLal7wom4gsfzNhFigxMuI80IrSw63r3mLY%2BLDf%2BuZs5wnURCy64wXtJ%2FUTt4GGLZIYGO3%2BFUzdGAOtXmfT7ko7%2FKEm3Q9nrV6akJkXzRMZNqcu7TiatwaErR7zb%2B1ZWluEYN6%2BZeRg8epanZS6%2F3txkd6pFR7VYQ2KCDFih6Bklr9zG8OK4dtUzeS2AlI8S0NMuh06o10IStaydIJ0nJgpWtik%2B%2FpfgYnwkWlDhE3UdiipB12pI6GSJZcfb8OdilsnuEUXEz6is7H0aK6lbhTqLqLFcLTW8b58tpiLnzW6oEkFYDUOM0KWXL%2Fb37mcNEH%2BwiBcYiUnz7cq8C4jv9esu6zfDdCbeN3wQlql7lzULSy%2FjLH0re30NPpyQVwONu7TnsgI5vnWsMNXD3SFFnolfSkP9d92t8Ex7umDQw0LTlvgY6pgHWok%2BsH0Lnd%2BBzE9IyNcGDpgAhy0UZfXPMeyvgEwkZBTanNgm5b3jY0KdWiiX4Yz53yzGU81InFShohbj95K7yFNnrV%2FZWOqbnVpsRZjswhfx1MJnkUKnsZfngcOMu858BDmblOh4o8Ul1gm52XFJN3Z7KqkU4kJZXdDln3CNmla3NE9pA7Ee4DWprYC1TZ3FZQnff1KSII%2BNLRVc2cs7Po49RiiSh&X-Amz-Signature=ca39d908f734084162a06274f75c3a2c9a4e5e5dfde57eeb92566c1cb2f08193&X-Amz-SignedHeaders=host&x-id=GetObject)

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
