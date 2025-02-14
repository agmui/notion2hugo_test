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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HOBHYKI%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIEcetEb7TpnyO5hMyD%2BLfTKQsdyz%2Bl8RBntoZshUPo0kAiAfgkvSg1NAVEW0Eyk6oz8O%2FDEhCe%2B1CxRtEZo6yEQU2Sr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM8q2R87OcU%2Bt9jfHQKtwD5PEAR4L1O9peRhgfrvu%2BuJdSMzjkvLZwcQXSEAIaYKJYXRXEi2JyWKCFFBmWkkpXMtx9DLXEy8ggVvDNl3TACMFu2rdgDttZGsxoc%2BHaGuLbQU5f6cseSvA5KMObMyPLTho0%2Fxqq8yfuDVlgWcO983oTcFcCDmYB%2BY6WtprjqZYrNTFRSdpdwFTJu50oXG7m4TfjlLI%2Fr4XYvwj%2FgjlT6dE0DJD8pnCEpbt51dx1J%2F0KeuJN6qjFaMgq%2Fbl9%2FmyDNQmrd%2FLEl1QnBNhi1yqwt2jZAZpQxfHfXNVQGoOxHkH1jRFcOzYIxwxUcgdA9FdwG%2FbzY2N5tprdmkiLCeUQspBtYYlKEM2NutL3nUE%2F4ix%2F1olMzSW%2Bq3yphn%2F1hrcFv4L6L226mNavRFK%2BPUu036IukCFzspJbvr0nTSSPTYzBkEtp7rHTBMXpxKTHALuQ%2FLXRwniW%2BVfHYnjwWZZQHBTFTcnTUQcP%2FVgZLy1zjHEM%2Bz3LY6AkqTIbKVyyFCxYN6f04R2wQx04xqXOi%2BEydRhzbErDO%2B6oUyl6Hqdwp9QnYdfsgGW9hL0hyJk9eFAM20A3%2BAmXyEnU4r6SJ20pd%2F7ht9FXto1RmO%2Bno6pYgk5AVr%2Fg5kXwwghPStUw%2F%2Bm8vQY6pgF1eL7mhHL2mBU3P8uw2gp9M%2FxIrgKjBymYSUsspuBGETcHxmNFh%2FQVBhO92fqrJOuazuKtnkfeXfRPbh24L1uD4wCpSHosrK3vKfrR%2FQP3bcett6KHyKdo6tJbneH1hAVpkeyaCQu4nkzPtiAUfQNyzlUYkdQ%2Bxn1IDAxm9qqixUp6N334R%2FbR16fyOsi8byK1W8KbL4Jo%2FGhYeULb%2FC%2FU2NbeYla%2F&X-Amz-Signature=0d47dc4204e793eaff75e3d4948e703ae9ffcc4da4316334018ce9a216f8f2c5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HOBHYKI%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIEcetEb7TpnyO5hMyD%2BLfTKQsdyz%2Bl8RBntoZshUPo0kAiAfgkvSg1NAVEW0Eyk6oz8O%2FDEhCe%2B1CxRtEZo6yEQU2Sr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM8q2R87OcU%2Bt9jfHQKtwD5PEAR4L1O9peRhgfrvu%2BuJdSMzjkvLZwcQXSEAIaYKJYXRXEi2JyWKCFFBmWkkpXMtx9DLXEy8ggVvDNl3TACMFu2rdgDttZGsxoc%2BHaGuLbQU5f6cseSvA5KMObMyPLTho0%2Fxqq8yfuDVlgWcO983oTcFcCDmYB%2BY6WtprjqZYrNTFRSdpdwFTJu50oXG7m4TfjlLI%2Fr4XYvwj%2FgjlT6dE0DJD8pnCEpbt51dx1J%2F0KeuJN6qjFaMgq%2Fbl9%2FmyDNQmrd%2FLEl1QnBNhi1yqwt2jZAZpQxfHfXNVQGoOxHkH1jRFcOzYIxwxUcgdA9FdwG%2FbzY2N5tprdmkiLCeUQspBtYYlKEM2NutL3nUE%2F4ix%2F1olMzSW%2Bq3yphn%2F1hrcFv4L6L226mNavRFK%2BPUu036IukCFzspJbvr0nTSSPTYzBkEtp7rHTBMXpxKTHALuQ%2FLXRwniW%2BVfHYnjwWZZQHBTFTcnTUQcP%2FVgZLy1zjHEM%2Bz3LY6AkqTIbKVyyFCxYN6f04R2wQx04xqXOi%2BEydRhzbErDO%2B6oUyl6Hqdwp9QnYdfsgGW9hL0hyJk9eFAM20A3%2BAmXyEnU4r6SJ20pd%2F7ht9FXto1RmO%2Bno6pYgk5AVr%2Fg5kXwwghPStUw%2F%2Bm8vQY6pgF1eL7mhHL2mBU3P8uw2gp9M%2FxIrgKjBymYSUsspuBGETcHxmNFh%2FQVBhO92fqrJOuazuKtnkfeXfRPbh24L1uD4wCpSHosrK3vKfrR%2FQP3bcett6KHyKdo6tJbneH1hAVpkeyaCQu4nkzPtiAUfQNyzlUYkdQ%2Bxn1IDAxm9qqixUp6N334R%2FbR16fyOsi8byK1W8KbL4Jo%2FGhYeULb%2FC%2FU2NbeYla%2F&X-Amz-Signature=c2c47c85a780bda4907f415e77407bf3982c10485167e52db5602a8b89f930d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
