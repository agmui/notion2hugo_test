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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IXNDDPQ%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDmeWrqIz6vOjDnj19BR5m2WlV315ocvPU0h%2BMM3bbxGAIgZ24rMsQza%2Fkt9ch4XxVnAvrg%2F%2BCPHd%2F1N7c19IBVryAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjYoNVhlw3pZNJrdCrcA0PaPkXPhBkwif9GCeIDH1Wav1LqmhcFyopSVw4OptympXVI03Oi7wP56yYMQd5vWzj0b8LDIiULVXUuKVN2WWnrSEjPfYmqD5Uwgjte06GwpJgDAt5LL0ORulPHDEIf5vy7QZis5r4LCq9DZQwYGTzZFpAzQnuxQpPdfdHCFONfUDks7KNUU7gUipGEYYGhHQvyoaQ2JzOQH6F8oxQiOJoFzPXNyc9tD9CpHE8Lm2%2BBxbUQynji4xxjgksZP0%2FYl%2FtFX3HzkfBULC7LsFm5PmeSFHvxs5ywWR81z4AaChf95Wkffw0pyfo4xw4c2w4mKWyiS6R%2FF2EKM%2BdzXVCKK9SFJwEOuU76Cu9Cafcr40jMYl6k9MyRc7C%2Fgf8nuU5RGw1Nd3fHJOcqVHnn200IwBOgXFlSDD%2Fp58ZBzMa9G5zwULN5smzajt%2BOCBHCW2nt%2BXW7HQw8p%2B3TXlAxPVrr%2BdTMkkoP5sLFspk2OxaHJ5mm%2FDXWcKIN%2FRvmYcIKaScA%2FV9ptmuziGvtwt1E%2Fcyi76m%2BmgxhISkexrUyiTkxRU1RBFjM8gawfxOOCO5DqNLtiJWYnEQgKSzBG2BXVmn%2FKC6lUH1lNqp5bxb%2BdKUpqmxOU7UoEancU64ilofOMLKjl9IGOqUBpN2WXsPZ11LITdlUwodlzmmnK%2Frq0HY8acXa1wlncIiv%2F%2FkhfF2zZYM1MD4KJMF3TSMGt%2BEG8WXEnQsn2RZnm%2FNz4wbF1M92AS%2BVguidtMkhXVIraW8c877y%2B7AY78nN3pa%2BGrJEtVVNfA%2F7l70%2BHnlzMQiCZeumHgWu4aX%2BoKIvyP8jYEU%2F9aXFELuiE7XsOoKorTURduIUmYoKDwrQaTbAm0V7&X-Amz-Signature=051765a842cf44e217779a49b52918d0220f416d16df44f0a7f9932aefb6a5dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IXNDDPQ%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDmeWrqIz6vOjDnj19BR5m2WlV315ocvPU0h%2BMM3bbxGAIgZ24rMsQza%2Fkt9ch4XxVnAvrg%2F%2BCPHd%2F1N7c19IBVryAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjYoNVhlw3pZNJrdCrcA0PaPkXPhBkwif9GCeIDH1Wav1LqmhcFyopSVw4OptympXVI03Oi7wP56yYMQd5vWzj0b8LDIiULVXUuKVN2WWnrSEjPfYmqD5Uwgjte06GwpJgDAt5LL0ORulPHDEIf5vy7QZis5r4LCq9DZQwYGTzZFpAzQnuxQpPdfdHCFONfUDks7KNUU7gUipGEYYGhHQvyoaQ2JzOQH6F8oxQiOJoFzPXNyc9tD9CpHE8Lm2%2BBxbUQynji4xxjgksZP0%2FYl%2FtFX3HzkfBULC7LsFm5PmeSFHvxs5ywWR81z4AaChf95Wkffw0pyfo4xw4c2w4mKWyiS6R%2FF2EKM%2BdzXVCKK9SFJwEOuU76Cu9Cafcr40jMYl6k9MyRc7C%2Fgf8nuU5RGw1Nd3fHJOcqVHnn200IwBOgXFlSDD%2Fp58ZBzMa9G5zwULN5smzajt%2BOCBHCW2nt%2BXW7HQw8p%2B3TXlAxPVrr%2BdTMkkoP5sLFspk2OxaHJ5mm%2FDXWcKIN%2FRvmYcIKaScA%2FV9ptmuziGvtwt1E%2Fcyi76m%2BmgxhISkexrUyiTkxRU1RBFjM8gawfxOOCO5DqNLtiJWYnEQgKSzBG2BXVmn%2FKC6lUH1lNqp5bxb%2BdKUpqmxOU7UoEancU64ilofOMLKjl9IGOqUBpN2WXsPZ11LITdlUwodlzmmnK%2Frq0HY8acXa1wlncIiv%2F%2FkhfF2zZYM1MD4KJMF3TSMGt%2BEG8WXEnQsn2RZnm%2FNz4wbF1M92AS%2BVguidtMkhXVIraW8c877y%2B7AY78nN3pa%2BGrJEtVVNfA%2F7l70%2BHnlzMQiCZeumHgWu4aX%2BoKIvyP8jYEU%2F9aXFELuiE7XsOoKorTURduIUmYoKDwrQaTbAm0V7&X-Amz-Signature=a795a658cefc716b3d64b4ce778909d4dceb2b2ce27eaf439de893c5bdfb4c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
