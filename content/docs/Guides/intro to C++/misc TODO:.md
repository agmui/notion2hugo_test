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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2IX4FIC%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcCno5jVB5N1KUsZTqQhvou6g3AS2O%2BIfi5RQ%2BI2sptAiEA8e0THda4LXQeVsZkmbYcAH1rII5ClOk%2BCDKuFvqVD1wqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeXxxsYVon3b6o3pircA7pQJ%2FagYvwH9NNJAqhSgxg9Biv2ImgsVk2N2%2FeUhsfnEDBKbSp7FpHER1TQ9mpYeghH3Cf3QN0wi7nKw87aOEfMMVqGEld5fYACfPutyuIGsvFHavbvw%2B8Wp0NkDnRckO58Y247Z2fIar9jt3pGRDvccjApfACpxKl0%2FPkuP2XT%2B33rY3t6haPH7pEvOlVxvQ40wYyzDXpSf7tL6tVtx3H20Oh1p%2BOOBtXNmFGg6mYJbIhOoy6kz0bDbA%2FHEaFnmR%2Bq6kgREdIPcqghxFBynBoMx6y1GbysP2IQIwz3eQf%2Fb%2FE%2BzgBzYLA3J8QiItQ9vnhgqnouNz1EbRqYOFIX0tEmi2ZTG4NVW8EVhCCZViyUDYvVjP5Gw8rbxcpRuKOsnONeL6W4tbknxAteaeUpiaokQs6%2Fsyn0SqAcIa49J86A7YUVokKVXnWhKRujsNGnMUZbtnBRBgAgFYk8TT2d4vtLvZ667iCZP21UC0t%2Bnp7GO3TjudwKb03xb514ZumA1ybiOQaSg78jInPK3NRXBwLLPfxAhaUKV4Pybm5Bf3io5ZmwYXWWSqH1MiFUS3oTkQReCuaDK%2F3DjXISaIkkKn%2FlrHS9BZ5ny34QNLOjkRchEdZ%2FxIrze0pR07t8MNH4v8MGOqUBQYjqucjifRG3Tn%2FaFyssDJx03r4H77vi2WHASar2FiCx0VsgHpxcLedX2hoKJjwDFAo3StyBAKjjbvOqfw3fBRKvczKWaV5HK1GhxsSj4lgduewNTwGG%2BR54o9GNuFrIiEHxzfIZnh2KiGRTfjdwOGjHEFvTr0fTkGguJYcA7tmorCclC%2FfZn0RRqHcd%2FlyT6vZyRd0oQ%2BULpDHyrrxvGr3gTKxx&X-Amz-Signature=b47b6e8315385c9e2c64ac1df3bbed45563119af5c34a90ec31147f34db8b5df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2IX4FIC%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcCno5jVB5N1KUsZTqQhvou6g3AS2O%2BIfi5RQ%2BI2sptAiEA8e0THda4LXQeVsZkmbYcAH1rII5ClOk%2BCDKuFvqVD1wqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeXxxsYVon3b6o3pircA7pQJ%2FagYvwH9NNJAqhSgxg9Biv2ImgsVk2N2%2FeUhsfnEDBKbSp7FpHER1TQ9mpYeghH3Cf3QN0wi7nKw87aOEfMMVqGEld5fYACfPutyuIGsvFHavbvw%2B8Wp0NkDnRckO58Y247Z2fIar9jt3pGRDvccjApfACpxKl0%2FPkuP2XT%2B33rY3t6haPH7pEvOlVxvQ40wYyzDXpSf7tL6tVtx3H20Oh1p%2BOOBtXNmFGg6mYJbIhOoy6kz0bDbA%2FHEaFnmR%2Bq6kgREdIPcqghxFBynBoMx6y1GbysP2IQIwz3eQf%2Fb%2FE%2BzgBzYLA3J8QiItQ9vnhgqnouNz1EbRqYOFIX0tEmi2ZTG4NVW8EVhCCZViyUDYvVjP5Gw8rbxcpRuKOsnONeL6W4tbknxAteaeUpiaokQs6%2Fsyn0SqAcIa49J86A7YUVokKVXnWhKRujsNGnMUZbtnBRBgAgFYk8TT2d4vtLvZ667iCZP21UC0t%2Bnp7GO3TjudwKb03xb514ZumA1ybiOQaSg78jInPK3NRXBwLLPfxAhaUKV4Pybm5Bf3io5ZmwYXWWSqH1MiFUS3oTkQReCuaDK%2F3DjXISaIkkKn%2FlrHS9BZ5ny34QNLOjkRchEdZ%2FxIrze0pR07t8MNH4v8MGOqUBQYjqucjifRG3Tn%2FaFyssDJx03r4H77vi2WHASar2FiCx0VsgHpxcLedX2hoKJjwDFAo3StyBAKjjbvOqfw3fBRKvczKWaV5HK1GhxsSj4lgduewNTwGG%2BR54o9GNuFrIiEHxzfIZnh2KiGRTfjdwOGjHEFvTr0fTkGguJYcA7tmorCclC%2FfZn0RRqHcd%2FlyT6vZyRd0oQ%2BULpDHyrrxvGr3gTKxx&X-Amz-Signature=edc3f55a6adc11c09450c96dc3b60d36d4133f480a795c48aff867dd0b754809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
