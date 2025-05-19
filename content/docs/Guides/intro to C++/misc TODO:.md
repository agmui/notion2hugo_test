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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBXSXCA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsoLuG%2BZHlINuyks3Wo%2B0SG2sNBsW5%2BgJVBwIVyzpmfAIhALxfvUP8xgi1TxnWTNtCKINuyeP5tZ4LaeutKctWQSlcKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOoOz3bTokKZLkxzwq3AM7bFVZFXx1Rh8CmwxWDxuuU8PjN5qFX2Hy9B3sw5HYKOCDIdiSygjoOIKOZkLNGhyRCh5AH5ikgFNBQCZd15QgeevaPWdelMmAd859oHhuS1p2tE7FBZP0OhvYfQs4m%2BCukP7QxnkKybm5PvGcl%2B9TYvRHZhIluWVscqOU9ik3s88faAApoJKrBsI21vH9%2BGSggN7HdaSHl5LwhRseQVxpXqxYwMSvKjkokEW3qfs1JrQ142XXmaz2CtJzJLvMYXTi5%2BTPTy%2Bm61EzcBxvFP%2B58xWNfRThm%2FcOTuLgyao5OWNBOUgwLSj1%2F%2B5mwrqTy1JQBK8JwDAUyEtwP007LfcxIz4ai5cahJdwx95bU%2B0Dmwx4dqdpbq3gIuUl8SSrNXcxR%2F%2FTEoU8Ma%2FQyDcg6FzNKcV7iqh3ktLt1Cw6r9ZaYxYbRRBAkGoG5VWSZIjtXUjXiEKZFTonX3OSPgAHsq%2FSOeNxa%2FinLNEXIDQXYYH82nHWiRaDlpOER4UzSFF5%2B%2FM%2FsKsVdWlTmFLX7DCMFs0EwUmLXLHrc7fru0%2BBw8PhTElMIxevtGsIa4OE0exTi6bk4ni914j5llegYqfSI4X3VemuBiFJUQj0xizYcw8BjHowokpnhOwLDYXwmjDP%2Bq3BBjqkAdH1h5XqhiQmKiqQwa2f71zaQjDcbJxYeg7zC1FkfbaU5JK6KtlJuk%2BQ5pvaBEGWpmVeP8oH4Fp5c0V1Ew5ii2Zw0WPhN27QUg9JZnlBpkT2J8QiJYZ9omjTpeceijWUkJoLNufEjgR5Eg7eLvDSQBISpUjBmnnb%2BBzKm%2BuzMb6UdFiqZS0er33qOLMxjX1wXt4ncvie0hkLA7XwaxJnm7uhn%2FNI&X-Amz-Signature=6fcc156ad7093521b91b763a40110f8380b05dc3b2d47c0d5a72293c9049ece4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBXSXCA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsoLuG%2BZHlINuyks3Wo%2B0SG2sNBsW5%2BgJVBwIVyzpmfAIhALxfvUP8xgi1TxnWTNtCKINuyeP5tZ4LaeutKctWQSlcKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOoOz3bTokKZLkxzwq3AM7bFVZFXx1Rh8CmwxWDxuuU8PjN5qFX2Hy9B3sw5HYKOCDIdiSygjoOIKOZkLNGhyRCh5AH5ikgFNBQCZd15QgeevaPWdelMmAd859oHhuS1p2tE7FBZP0OhvYfQs4m%2BCukP7QxnkKybm5PvGcl%2B9TYvRHZhIluWVscqOU9ik3s88faAApoJKrBsI21vH9%2BGSggN7HdaSHl5LwhRseQVxpXqxYwMSvKjkokEW3qfs1JrQ142XXmaz2CtJzJLvMYXTi5%2BTPTy%2Bm61EzcBxvFP%2B58xWNfRThm%2FcOTuLgyao5OWNBOUgwLSj1%2F%2B5mwrqTy1JQBK8JwDAUyEtwP007LfcxIz4ai5cahJdwx95bU%2B0Dmwx4dqdpbq3gIuUl8SSrNXcxR%2F%2FTEoU8Ma%2FQyDcg6FzNKcV7iqh3ktLt1Cw6r9ZaYxYbRRBAkGoG5VWSZIjtXUjXiEKZFTonX3OSPgAHsq%2FSOeNxa%2FinLNEXIDQXYYH82nHWiRaDlpOER4UzSFF5%2B%2FM%2FsKsVdWlTmFLX7DCMFs0EwUmLXLHrc7fru0%2BBw8PhTElMIxevtGsIa4OE0exTi6bk4ni914j5llegYqfSI4X3VemuBiFJUQj0xizYcw8BjHowokpnhOwLDYXwmjDP%2Bq3BBjqkAdH1h5XqhiQmKiqQwa2f71zaQjDcbJxYeg7zC1FkfbaU5JK6KtlJuk%2BQ5pvaBEGWpmVeP8oH4Fp5c0V1Ew5ii2Zw0WPhN27QUg9JZnlBpkT2J8QiJYZ9omjTpeceijWUkJoLNufEjgR5Eg7eLvDSQBISpUjBmnnb%2BBzKm%2BuzMb6UdFiqZS0er33qOLMxjX1wXt4ncvie0hkLA7XwaxJnm7uhn%2FNI&X-Amz-Signature=78c0b4d805bc3348af5484a4298448de6f97503551edd2c8fea68676ac9df19a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
