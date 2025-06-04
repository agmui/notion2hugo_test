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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL2V2QKF%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIF6Tf87MJ7yQFxyumRED2QKkdUwmen607VHVEa49%2FvAIAiBYt4Mlj1kTVD90IV1sEi0H4fIgt2L0HymySmhBvcJqOSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMZuzD50Tcg7xM4161KtwDZHXBSdGsxlNdF4UgQFsb25z302z02GANWm70YWP7VpkFQLaHonucmd4Mq4uQ%2FtFuIt1pF8G2iuPHdrTEOPhIOaIaqa4psjlqG67euUohrZ8pNttTWVray5K9U6%2BP17LoDJhoUhCBsEQX4f%2BfCUxqCGESr%2BmQXHvCUGu3ct2z81TdHRg89sP130SidZTvw1NdsTyG92nYqsNhJQGWvIvxY2E1UEUY%2F18Ek7XE7FjRnjFrD2jNJxkiFOn76n5O%2BuuoPZtXZCLT612t9I9LKLoax4ySx5i7NjJkz65GdcAteHK0yiQMsVS3PhOvxovd%2FWY%2FXi5uW2Ve%2Fwhm3jqEqjJiH9sW69YWwM10DiKtZf7RS59IB4SvUn0lZ1KiBjsQWsyBBKncyrPg09y5HnTi8dnabB%2BV3v1%2BAmLU1x%2FXT9jc1s6InnjZ6NMBQy5dW9bLf%2BaIWwK7ZMbImqFWZJZvfusWgEeRj3pQDO7bbLCt90JmALfiBux4XDRJVJJwA0dBTMJ4UjyebpAJhe4CAjE%2BUxVZcvUaY6ke5RxG%2B4frJaKhh65MBg919X%2FDIuaHfzpteJBxYXgrp92Xq5G6Kht0QhHiaY9lE4KxxNKenrbxjYxuT%2FPoHTxdlMH0JaLO3%2B8w68%2BAwgY6pgEcEqnmperkp7V1eAKrPyj%2F3Le1Xk9%2BrhAFdq0qstByJ0K6D0g4WhNqm7ZmIaG0vjKlvcnlawS8p%2B8vltmXR9c0bmEACgowqasF3XTJoqrlomwzWC3UPWDejfUJfUomZFMiu5ncooK%2Fe6tuuj59jEI2jN3%2FMvAEUkmKWSF%2BQINVHsvwD896lLrAWMr2MoJY1lRakQNSt8xoHewrx86f78y%2FQwOnzEEq&X-Amz-Signature=4dbebfe8f95d2981dd246aeec5241e112015601820ad9bad6609bfeb161f566c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL2V2QKF%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIF6Tf87MJ7yQFxyumRED2QKkdUwmen607VHVEa49%2FvAIAiBYt4Mlj1kTVD90IV1sEi0H4fIgt2L0HymySmhBvcJqOSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMZuzD50Tcg7xM4161KtwDZHXBSdGsxlNdF4UgQFsb25z302z02GANWm70YWP7VpkFQLaHonucmd4Mq4uQ%2FtFuIt1pF8G2iuPHdrTEOPhIOaIaqa4psjlqG67euUohrZ8pNttTWVray5K9U6%2BP17LoDJhoUhCBsEQX4f%2BfCUxqCGESr%2BmQXHvCUGu3ct2z81TdHRg89sP130SidZTvw1NdsTyG92nYqsNhJQGWvIvxY2E1UEUY%2F18Ek7XE7FjRnjFrD2jNJxkiFOn76n5O%2BuuoPZtXZCLT612t9I9LKLoax4ySx5i7NjJkz65GdcAteHK0yiQMsVS3PhOvxovd%2FWY%2FXi5uW2Ve%2Fwhm3jqEqjJiH9sW69YWwM10DiKtZf7RS59IB4SvUn0lZ1KiBjsQWsyBBKncyrPg09y5HnTi8dnabB%2BV3v1%2BAmLU1x%2FXT9jc1s6InnjZ6NMBQy5dW9bLf%2BaIWwK7ZMbImqFWZJZvfusWgEeRj3pQDO7bbLCt90JmALfiBux4XDRJVJJwA0dBTMJ4UjyebpAJhe4CAjE%2BUxVZcvUaY6ke5RxG%2B4frJaKhh65MBg919X%2FDIuaHfzpteJBxYXgrp92Xq5G6Kht0QhHiaY9lE4KxxNKenrbxjYxuT%2FPoHTxdlMH0JaLO3%2B8w68%2BAwgY6pgEcEqnmperkp7V1eAKrPyj%2F3Le1Xk9%2BrhAFdq0qstByJ0K6D0g4WhNqm7ZmIaG0vjKlvcnlawS8p%2B8vltmXR9c0bmEACgowqasF3XTJoqrlomwzWC3UPWDejfUJfUomZFMiu5ncooK%2Fe6tuuj59jEI2jN3%2FMvAEUkmKWSF%2BQINVHsvwD896lLrAWMr2MoJY1lRakQNSt8xoHewrx86f78y%2FQwOnzEEq&X-Amz-Signature=1b583e29b0b38977ff681a0f66b9a52e21db5a52883094ec6bc46a4319d12686&X-Amz-SignedHeaders=host&x-id=GetObject)

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
