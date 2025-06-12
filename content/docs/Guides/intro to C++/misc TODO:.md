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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666335LDHU%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFAmmQivVFqeLekjzFjs5HTLahk3B0L26fHOdOBjDmDGAiB%2BIt2KJoa08Mh5jvQwbe%2B%2FC0xt6k6MnlOXpzjxHAdYbCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBXjf%2Fyc4QDim1dNcKtwDHI4ydTlIc0vM0fpntNrvOLuxmXhpU3ht2tSy5zANwcysEGgAweMZ493dLNCUaiCKGiRF6pUHbcAebvFCiqp5BAEbEttUCvHmVz015ySIWpZpRUYmB1a1%2Bi6VcGXlQMPK5YVX6X9ujj%2FqyTenLNfS1JK8xksjmMhcIXJ8%2FpqBvD1Vvk4e0Mf607xQ5PH6WcuneseO8uTrze%2BcTrswabyylPlMsDI7QEYWT%2FcKTX1L4OvkOFabMJCwGRwRtaThOh106EOYXe8DpAIkx8PmU02XP2t2E%2BKJ7RHsEiD8x9zZN3CufIZki5BnhOT%2BCP0uMukVfoKHxVuT6y1M3piM7ERoiCooN3k9gVvKZV5AOcNFNOc2vIUl%2FZm8ly1Jl1CwnyOiFcQ%2FIjliPGlzQypVG1TFsASvkHgkScFQA5fWQZl1HhkmxrbNOFNfvGZMLvnFMUCUsmV64CKwX5HE3Yi3KzT9%2BZBbgggwHniGNwkTv8sjH%2BhLtFXIO%2FR8hmEAIv%2FnsGGK%2BaWdcSSjhPMzJ0BUSFVLX%2Bs96lzko%2FJlm7GGi1JxisFtywTEWtn26mcLGjI3yqvjj4RCidhGK1q5LoWYRbH684MGrCu%2FBAhZlN6hkUusns1%2Fi6g%2Fr8tSCEefyAowt4iqwgY6pgEhDlzw8q1vSyQdxagvrNOQH32VOZXLNJFSHSD8xZJQuBxpai%2Bel9AOFW7SsnpRP1QQb4F%2FqvBGVH2fZX0zQuXz9nh1DXxLBrLq62vbIxW2CXpe%2BIldXQwC7Q7t7c6wyZSAmYVELQVkwFVt07Bc%2BC6sCAlWAczna%2FJdCbCuy%2FTc4mDj34yb%2B2zA6Q3JNP30tjlIeua4L%2FMI7qtO4sQb2VMn4%2FbRiU%2BH&X-Amz-Signature=427548c62d0153b4323cd3b7bb8ced72c9daba11b0588d93eb36e611069264bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666335LDHU%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFAmmQivVFqeLekjzFjs5HTLahk3B0L26fHOdOBjDmDGAiB%2BIt2KJoa08Mh5jvQwbe%2B%2FC0xt6k6MnlOXpzjxHAdYbCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBXjf%2Fyc4QDim1dNcKtwDHI4ydTlIc0vM0fpntNrvOLuxmXhpU3ht2tSy5zANwcysEGgAweMZ493dLNCUaiCKGiRF6pUHbcAebvFCiqp5BAEbEttUCvHmVz015ySIWpZpRUYmB1a1%2Bi6VcGXlQMPK5YVX6X9ujj%2FqyTenLNfS1JK8xksjmMhcIXJ8%2FpqBvD1Vvk4e0Mf607xQ5PH6WcuneseO8uTrze%2BcTrswabyylPlMsDI7QEYWT%2FcKTX1L4OvkOFabMJCwGRwRtaThOh106EOYXe8DpAIkx8PmU02XP2t2E%2BKJ7RHsEiD8x9zZN3CufIZki5BnhOT%2BCP0uMukVfoKHxVuT6y1M3piM7ERoiCooN3k9gVvKZV5AOcNFNOc2vIUl%2FZm8ly1Jl1CwnyOiFcQ%2FIjliPGlzQypVG1TFsASvkHgkScFQA5fWQZl1HhkmxrbNOFNfvGZMLvnFMUCUsmV64CKwX5HE3Yi3KzT9%2BZBbgggwHniGNwkTv8sjH%2BhLtFXIO%2FR8hmEAIv%2FnsGGK%2BaWdcSSjhPMzJ0BUSFVLX%2Bs96lzko%2FJlm7GGi1JxisFtywTEWtn26mcLGjI3yqvjj4RCidhGK1q5LoWYRbH684MGrCu%2FBAhZlN6hkUusns1%2Fi6g%2Fr8tSCEefyAowt4iqwgY6pgEhDlzw8q1vSyQdxagvrNOQH32VOZXLNJFSHSD8xZJQuBxpai%2Bel9AOFW7SsnpRP1QQb4F%2FqvBGVH2fZX0zQuXz9nh1DXxLBrLq62vbIxW2CXpe%2BIldXQwC7Q7t7c6wyZSAmYVELQVkwFVt07Bc%2BC6sCAlWAczna%2FJdCbCuy%2FTc4mDj34yb%2B2zA6Q3JNP30tjlIeua4L%2FMI7qtO4sQb2VMn4%2FbRiU%2BH&X-Amz-Signature=1e1f0ff1c9bbc60924453d743db89f0d7934a8cff4960b7c2cbc1349720c77d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
