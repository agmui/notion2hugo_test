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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YESBYOUE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDggaoLv4Eh9cBe1xa39C0VM2C0xG2s36Cr4UJS8YDmqAiEAi3TTJMOFmzz9QRQ4yGo5TJQSNLNGILM5Sx44Gl1mWwwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKAV4lURxY7i5CzM3SrcA17%2FOiSxAHVB9Hh6KsO2PQdLywOqIncNqIwpe1TtbMxP7E7gX8a9kSHUWCxiLXS0UNQxQxe8Y2zsdJhmVinzB9Pe6zrIkxbee781MjGmvYri0z3etg9nkD85W7fiF5wE3pB%2BzXilN5kACrWoBgKQhucYOrYzrouUruh7yzw7fOsS%2BuaeCaaGIxuVc9TbD67sVR5aj6ctu39py%2FyR5R2MOz9%2BgFcwTOIfQ9tHz%2B4PObciv42q18P12TS9Cns%2BLQ63BDqDu7frEQ8jLA73Rk8cbAtWgkZQmO4Hqta%2Fz%2BgxKXtvX9C%2F2%2FHta56lkIxpNWtLMmrBW5tvunWa6shRijZtTuyBrlsOMQK1%2BsXlJhdAU4GwWdMR%2FBi8sYSB7hEiyakbJwj7oJhVyQXkB7CQfz7ArqWdHAebU%2Be7%2F%2F9BPdGPxySKRihbT3JcVOUJ%2B1TQZiKTKTvqSUCLLvVGn4xDmVAUdnmxT7K7W2Ha0civZrRJgib5qF3GkAg3H%2FYRIQ8Vc3PZqczwsBx%2BNSeV6yqh%2BNCjzXfe8%2Fk0Nk73Pt5%2FZXnalevfc%2BxX%2BeoEp2%2Bhy3pyjYVPd4APTQDCZA765dSmE%2Bbm6rBH8DEbq2w42OaG2qtPiucXD5hCddNoennEan4bMPPX%2FsQGOqUB4qn%2BgFNiXUB2xQ6db0de%2FVW2wBAehUq1c7sh%2BSndmJeRULV6%2FdbcdbEOdGcsX6DkcaBRyQGHxSsnYJazoXV7%2B8Njja2SaysmclYsD9bIep7hv36Ad2gFQdJykrSxjy1QRms72Te%2BVxPpaZJ9aWx3wgRGKoguuLpV4UCwMF6mSIRLxkibA0H7qV6u4pK%2BTPQwvlUVDnZOlQYlp4RTttUiO1GS2esb&X-Amz-Signature=a816c84b7115e083a6fa1c095ded2673bd2572b81c5d30bf75964c85f0fa0929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YESBYOUE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDggaoLv4Eh9cBe1xa39C0VM2C0xG2s36Cr4UJS8YDmqAiEAi3TTJMOFmzz9QRQ4yGo5TJQSNLNGILM5Sx44Gl1mWwwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKAV4lURxY7i5CzM3SrcA17%2FOiSxAHVB9Hh6KsO2PQdLywOqIncNqIwpe1TtbMxP7E7gX8a9kSHUWCxiLXS0UNQxQxe8Y2zsdJhmVinzB9Pe6zrIkxbee781MjGmvYri0z3etg9nkD85W7fiF5wE3pB%2BzXilN5kACrWoBgKQhucYOrYzrouUruh7yzw7fOsS%2BuaeCaaGIxuVc9TbD67sVR5aj6ctu39py%2FyR5R2MOz9%2BgFcwTOIfQ9tHz%2B4PObciv42q18P12TS9Cns%2BLQ63BDqDu7frEQ8jLA73Rk8cbAtWgkZQmO4Hqta%2Fz%2BgxKXtvX9C%2F2%2FHta56lkIxpNWtLMmrBW5tvunWa6shRijZtTuyBrlsOMQK1%2BsXlJhdAU4GwWdMR%2FBi8sYSB7hEiyakbJwj7oJhVyQXkB7CQfz7ArqWdHAebU%2Be7%2F%2F9BPdGPxySKRihbT3JcVOUJ%2B1TQZiKTKTvqSUCLLvVGn4xDmVAUdnmxT7K7W2Ha0civZrRJgib5qF3GkAg3H%2FYRIQ8Vc3PZqczwsBx%2BNSeV6yqh%2BNCjzXfe8%2Fk0Nk73Pt5%2FZXnalevfc%2BxX%2BeoEp2%2Bhy3pyjYVPd4APTQDCZA765dSmE%2Bbm6rBH8DEbq2w42OaG2qtPiucXD5hCddNoennEan4bMPPX%2FsQGOqUB4qn%2BgFNiXUB2xQ6db0de%2FVW2wBAehUq1c7sh%2BSndmJeRULV6%2FdbcdbEOdGcsX6DkcaBRyQGHxSsnYJazoXV7%2B8Njja2SaysmclYsD9bIep7hv36Ad2gFQdJykrSxjy1QRms72Te%2BVxPpaZJ9aWx3wgRGKoguuLpV4UCwMF6mSIRLxkibA0H7qV6u4pK%2BTPQwvlUVDnZOlQYlp4RTttUiO1GS2esb&X-Amz-Signature=4b3d1f8144eb33c41a824137bc01584e94a086eb5fe68180ce11f0236c2417c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
