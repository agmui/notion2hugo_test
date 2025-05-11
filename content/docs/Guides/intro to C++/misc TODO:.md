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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHPHU4DI%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC5hvzPEiCAIHdO%2FHMTYlK56BcgkFq4w4ajlxxMZUlOwAIgMoa8FAiHZh43GQ35Lnl9gwEGoornkbe5qAbBYQWaSaQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRE%2BU7OcrJOr9qIiyrcA8cJ3EgfsS5BD3IDoZUcX%2FxkQPRqvMLD1AC3eHQGhSKa6XNCjgXlha4fHk%2B4yl%2BbLTXZic6aku4t9eL%2F8wMbFwguJqunl9vWaXm93EJFwT6XRbnx9Tasyt2VtoO1Qfsx73Y332jd9r7naobwwVYjtKJ0Kxjj43Y%2BNschVxR92SjvngDuAZhQzc6nNzEOBrmsYFCZTYufJXQdSBBQ21kzed3SJ994gNnJPFRUWzooEatlgGiM5naMay08Ik5GChKU5OTJoglFmGHuAZk96bPGAwUeharNosUb7jXDefBCOaeo3iT6bas10VPn7rBUflp4OyVEQTWG7UdZClZbWN2Ge0%2FZrNUvxQTpAha%2B6FaXuOq2%2FLQCTleangjkgY%2Bq4s1rpIXH01wgf3gDynyLPcDjN8YmUdfGWR7GwFo6Ckf3HNgi8Ey6TPYqEpm9HIqAFp4Zoz9ID9HxRT1jdenvyPs94plKuz45QGbJRyzRlriQ8%2FFE8SpLONJfyGg3axjZrwta5RJWV%2BBnRX3esfMwOUnWK5UxyAocl5lynZ50nT21RDeXAzuSQNehO5n8C8RzBvyjK67Tm6csBMVuZpgKV956Zn913D9BUl2piYtPH8iC8WenGWXunCOhrCMy%2BH57MNq5gcEGOqUBixz83ZWj2x8%2FfR%2BSo7nl%2BNlk%2Blu2Z4sTacVwrFoKmnIZpyM%2Fzk8IdOn8B0SSVVqtieoLDD5uqO%2FVAFyW0s9M1UtW%2BOgQm%2BK87wvzC6SsQ5PBbvjx8W4FLNMnhpfEaw%2F2z1EuyCTv4ub%2BivC17kS7cBey8GBcqQus1xHXePlGFQjBS%2BAh3pSvXCYQx3bK2lfXakkhW3P03sd7ErgzsKccOcPHIra0&X-Amz-Signature=0347a7ac501db016b603ba734a660dcbff5219978204995fbf87d18e5e51b5c6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHPHU4DI%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC5hvzPEiCAIHdO%2FHMTYlK56BcgkFq4w4ajlxxMZUlOwAIgMoa8FAiHZh43GQ35Lnl9gwEGoornkbe5qAbBYQWaSaQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRE%2BU7OcrJOr9qIiyrcA8cJ3EgfsS5BD3IDoZUcX%2FxkQPRqvMLD1AC3eHQGhSKa6XNCjgXlha4fHk%2B4yl%2BbLTXZic6aku4t9eL%2F8wMbFwguJqunl9vWaXm93EJFwT6XRbnx9Tasyt2VtoO1Qfsx73Y332jd9r7naobwwVYjtKJ0Kxjj43Y%2BNschVxR92SjvngDuAZhQzc6nNzEOBrmsYFCZTYufJXQdSBBQ21kzed3SJ994gNnJPFRUWzooEatlgGiM5naMay08Ik5GChKU5OTJoglFmGHuAZk96bPGAwUeharNosUb7jXDefBCOaeo3iT6bas10VPn7rBUflp4OyVEQTWG7UdZClZbWN2Ge0%2FZrNUvxQTpAha%2B6FaXuOq2%2FLQCTleangjkgY%2Bq4s1rpIXH01wgf3gDynyLPcDjN8YmUdfGWR7GwFo6Ckf3HNgi8Ey6TPYqEpm9HIqAFp4Zoz9ID9HxRT1jdenvyPs94plKuz45QGbJRyzRlriQ8%2FFE8SpLONJfyGg3axjZrwta5RJWV%2BBnRX3esfMwOUnWK5UxyAocl5lynZ50nT21RDeXAzuSQNehO5n8C8RzBvyjK67Tm6csBMVuZpgKV956Zn913D9BUl2piYtPH8iC8WenGWXunCOhrCMy%2BH57MNq5gcEGOqUBixz83ZWj2x8%2FfR%2BSo7nl%2BNlk%2Blu2Z4sTacVwrFoKmnIZpyM%2Fzk8IdOn8B0SSVVqtieoLDD5uqO%2FVAFyW0s9M1UtW%2BOgQm%2BK87wvzC6SsQ5PBbvjx8W4FLNMnhpfEaw%2F2z1EuyCTv4ub%2BivC17kS7cBey8GBcqQus1xHXePlGFQjBS%2BAh3pSvXCYQx3bK2lfXakkhW3P03sd7ErgzsKccOcPHIra0&X-Amz-Signature=118229b5c936071ee94e02f80074a30e3c78d67fbcea4649686ebce2eaaf1761&X-Amz-SignedHeaders=host&x-id=GetObject)

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
