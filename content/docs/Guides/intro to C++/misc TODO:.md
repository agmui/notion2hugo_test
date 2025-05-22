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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM6RBLCL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIG%2BYnWjhtyfsSVnqtxpjmzps5gquO%2Bflzp7lEUTAAf54AiA52O%2FLWzqgsnrE%2F54%2BAQhWyDN54mBpQAqx9WRS1UkxrSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ7ZDZ5p1e1gRgy4wKtwDjFeIiEy5cnr5z9V%2BI1hCIqVWkr96E0Bk22poo120gnqXRuy0VpSBCi%2BCNIAifXJZ3m8ADusZbeG5ivk%2Bk8Dsf60OYlXnTi%2F3vInXrULHpFlJ5AxjPHkozEernGUO2%2BK1xidJolg7pqRIcCMaXjZvRbm3t3YM2OkzWbAb0tDR67NnF78lkCNKJ7gLiJnWUrIkkRYFUZd%2F8JwVkilVXo9It7JU1KAIitB1JLVQ6Kq7edRF2UEC3TwhQGbUsTubNR9qU1Xvhf5ejRgII1TH5fGvQEY5BYfjWjhmXKzmbSlcBw6SHNwrxbAH5S0fl3tgJ9Y7yv7p01F5W28UrdXZe%2F5oGuyaG6gDxxLQpGaV3T%2Bt6spPN7Q4B3XXXTbLfXe6by%2FxwfLxMpa67sbq9B6NNAf6fVhjf7JIayTbho%2Br3yOxnzg1rdQhC4KopAIqyX4QgKsjS7r6zYH3YivkeXgJc3u8r7ZZkB7f2ljuqXVe8r21cBPFD%2BOfLG8lOOK6t6vUWBrfHMRZ%2F11tdaUp%2FeNLGVjn4SS2hc95dBAKZ9%2BV359Osi87AdUW9QVDjS%2B0OkCCJAv%2FyVaLG7mtQqcuL6x5brqWrCoIul0qJNjCqvScivACxVLeC5oKAHSxpBQ8Beww7am%2BwQY6pgFdZNfuCjKeQLp3jswxJoOLeAG%2B3cPByWFX6Ek60iwfM7KqeeICJyS0caATbcpNNIcU9AJPSIeP3uHN94zBljOL1TT%2BFf25qR%2FWvOQ5tXpF7QhnqXvOb%2F3iGlLSefR34vbpfZNmsfEOHRYkdKo%2FHYKsof8buT%2BsZKdKjFRJI56aSav4MDNSUfCJ7q0ViMTwfqLjQYXkCC8GqEWxR%2BThRdU%2B3tL4yDmo&X-Amz-Signature=19627a509267949c5b1a058f55a285cf5b778ff29f529d96c36db3c40d51cf67&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM6RBLCL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIG%2BYnWjhtyfsSVnqtxpjmzps5gquO%2Bflzp7lEUTAAf54AiA52O%2FLWzqgsnrE%2F54%2BAQhWyDN54mBpQAqx9WRS1UkxrSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ7ZDZ5p1e1gRgy4wKtwDjFeIiEy5cnr5z9V%2BI1hCIqVWkr96E0Bk22poo120gnqXRuy0VpSBCi%2BCNIAifXJZ3m8ADusZbeG5ivk%2Bk8Dsf60OYlXnTi%2F3vInXrULHpFlJ5AxjPHkozEernGUO2%2BK1xidJolg7pqRIcCMaXjZvRbm3t3YM2OkzWbAb0tDR67NnF78lkCNKJ7gLiJnWUrIkkRYFUZd%2F8JwVkilVXo9It7JU1KAIitB1JLVQ6Kq7edRF2UEC3TwhQGbUsTubNR9qU1Xvhf5ejRgII1TH5fGvQEY5BYfjWjhmXKzmbSlcBw6SHNwrxbAH5S0fl3tgJ9Y7yv7p01F5W28UrdXZe%2F5oGuyaG6gDxxLQpGaV3T%2Bt6spPN7Q4B3XXXTbLfXe6by%2FxwfLxMpa67sbq9B6NNAf6fVhjf7JIayTbho%2Br3yOxnzg1rdQhC4KopAIqyX4QgKsjS7r6zYH3YivkeXgJc3u8r7ZZkB7f2ljuqXVe8r21cBPFD%2BOfLG8lOOK6t6vUWBrfHMRZ%2F11tdaUp%2FeNLGVjn4SS2hc95dBAKZ9%2BV359Osi87AdUW9QVDjS%2B0OkCCJAv%2FyVaLG7mtQqcuL6x5brqWrCoIul0qJNjCqvScivACxVLeC5oKAHSxpBQ8Beww7am%2BwQY6pgFdZNfuCjKeQLp3jswxJoOLeAG%2B3cPByWFX6Ek60iwfM7KqeeICJyS0caATbcpNNIcU9AJPSIeP3uHN94zBljOL1TT%2BFf25qR%2FWvOQ5tXpF7QhnqXvOb%2F3iGlLSefR34vbpfZNmsfEOHRYkdKo%2FHYKsof8buT%2BsZKdKjFRJI56aSav4MDNSUfCJ7q0ViMTwfqLjQYXkCC8GqEWxR%2BThRdU%2B3tL4yDmo&X-Amz-Signature=f7066c62f76eac4635cac128d0f7283d6a21943a161da57280b9b58f4e0b9818&X-Amz-SignedHeaders=host&x-id=GetObject)

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
