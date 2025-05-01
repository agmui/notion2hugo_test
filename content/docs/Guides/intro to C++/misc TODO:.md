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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QQ227OO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDwxURCBwx9QJwF%2BLTvRgLYZB0RSdfUA%2FE7mhcr9%2FKbAgIgOd6vf8dNj%2Fn%2FkTju5HUXUMJc6%2BzAg1tMrvmY4Q8YrnIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFn1sZQg86tJG%2FxhJSrcAw1ITCymDrjw%2FfN4MRMuS5k%2BibOO1j1PG6CaLL69svaJp%2FRqhFlWYAEl3lvTDxnwcK4NY%2FHfPIcWCyvERA6goBhVO%2BWzrkUSnIJVbYbvmZ7pT9F4cLNahZG5Ja7QHFslZ5vx1yZbyzI7WIab73j7FN4xcVHKeLa9zWWT3%2BuHHcBODBVwpF%2BI72DYagkPAsnh9RX1hwJPDelgbvEOe%2FWNOZq9ZtMGTDejsaAZq0ejlYOOmYjyHI9qqJTw98FxQVoLWphLopkRo9dSryKizwlMSs6zIrB2EnR7er8ESgsqd7IZCCBawbRFtW8Hu%2BrhN7HYBMP4YSsYVyRXieLb8dZKvjNG32KrTDhTb1juYsMhMbpT11yVDqI5Q2k3vjCcr8gBw%2Fx4QSry8E%2BYMhytXxVviTjH2j3a%2BRiTKrrHC5ArfYOS42WY7D0NcgoJy%2Bv8sakLAGe7RTeYefW5LQOW4aKpTWNvSbJHAUizazk1UOC9EWaNs40w177M26fI9n%2BuGd%2BLUtOqU6aG2l4Qp5vuLZ4rvsAwzI2cLBlRNInnunJe4SqaaXz2etsjQaoBKAOgExvycKDMp%2FDb%2FWHhDF7YlwHFsBwbkU2Ky%2Fpm7vaYFdhPIHZATEEEkXyEprgdbv60MJ6%2By8AGOqUBfnImy6pk2ukHmtD5%2BBD5ycbwu7bMnJ%2FuICicy6U6%2FfWeqQtKGZhTE2VT1Mil93iVM8phfRT%2FnQAY7tlqgd%2F9U5U7ex4AIerF23IPcJCCp76S%2FyORuQLIE9BavwmDay0svvDbaBl%2FQHpUVxC8zEMDz8m2Ry%2BaYqQreJK9NrvUeqIrLsbqr5oTPFp3AJhcAdSo%2FtcvgL4tKGKFrl6dAFBkPr0mAaB%2F&X-Amz-Signature=f24e60f704904ec84cd3d4c1c79fba56d20a5e4f195c88464938f4c6067d28b4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QQ227OO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDwxURCBwx9QJwF%2BLTvRgLYZB0RSdfUA%2FE7mhcr9%2FKbAgIgOd6vf8dNj%2Fn%2FkTju5HUXUMJc6%2BzAg1tMrvmY4Q8YrnIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFn1sZQg86tJG%2FxhJSrcAw1ITCymDrjw%2FfN4MRMuS5k%2BibOO1j1PG6CaLL69svaJp%2FRqhFlWYAEl3lvTDxnwcK4NY%2FHfPIcWCyvERA6goBhVO%2BWzrkUSnIJVbYbvmZ7pT9F4cLNahZG5Ja7QHFslZ5vx1yZbyzI7WIab73j7FN4xcVHKeLa9zWWT3%2BuHHcBODBVwpF%2BI72DYagkPAsnh9RX1hwJPDelgbvEOe%2FWNOZq9ZtMGTDejsaAZq0ejlYOOmYjyHI9qqJTw98FxQVoLWphLopkRo9dSryKizwlMSs6zIrB2EnR7er8ESgsqd7IZCCBawbRFtW8Hu%2BrhN7HYBMP4YSsYVyRXieLb8dZKvjNG32KrTDhTb1juYsMhMbpT11yVDqI5Q2k3vjCcr8gBw%2Fx4QSry8E%2BYMhytXxVviTjH2j3a%2BRiTKrrHC5ArfYOS42WY7D0NcgoJy%2Bv8sakLAGe7RTeYefW5LQOW4aKpTWNvSbJHAUizazk1UOC9EWaNs40w177M26fI9n%2BuGd%2BLUtOqU6aG2l4Qp5vuLZ4rvsAwzI2cLBlRNInnunJe4SqaaXz2etsjQaoBKAOgExvycKDMp%2FDb%2FWHhDF7YlwHFsBwbkU2Ky%2Fpm7vaYFdhPIHZATEEEkXyEprgdbv60MJ6%2By8AGOqUBfnImy6pk2ukHmtD5%2BBD5ycbwu7bMnJ%2FuICicy6U6%2FfWeqQtKGZhTE2VT1Mil93iVM8phfRT%2FnQAY7tlqgd%2F9U5U7ex4AIerF23IPcJCCp76S%2FyORuQLIE9BavwmDay0svvDbaBl%2FQHpUVxC8zEMDz8m2Ry%2BaYqQreJK9NrvUeqIrLsbqr5oTPFp3AJhcAdSo%2FtcvgL4tKGKFrl6dAFBkPr0mAaB%2F&X-Amz-Signature=28716f2aa54af13051a03a416980911f7e64cc9febf5aee65849e64784886edd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
