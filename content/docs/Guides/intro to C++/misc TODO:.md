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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUTEJPNZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpq6hNpwCEcvBEyXhNjd2K9p85Gy8qYRU86C5BhBJngAIhAOGjIO6Qwpo5pDbuPDgQbUhdwzXdU2senDdzvP%2FVQ9UCKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNlSe3w9BPZRDXPrMq3AOoNGLvpQ0i8jFAbHVKbk0%2BJpfzApK7drCkKUw2Pkv4UEl4PKRhf2DNcu%2FgVCdb3Ep%2BJ3WFA%2FtOW%2FJiSn0e89eGmktEH14zKE5jPmkDUb1IT%2BIkgmX7BMYj4dI5Sk2ssfvd1hPFDwGgUohPa%2FCQtmGvVdbjuP9%2Fq1UtwcnT5DSTzIPQZDyq7D9wAeqdsgEkma%2FbeiNkKhyT289eLjuBFON%2F%2FRBQ%2Bb49lObElHV4pU9WS7OrckYMeVh9MAUHJ9%2BTshcmkatOLK6%2F0Zp57GKb%2BxTMcAm53bI0R315drc1sGG6VZHYdkC%2Fv5E0Vz5WkKOQlDzMOjkNOy4Y1wUfON8mHCKaLP3f373RYNda6Z3bkQ0jDZv%2F3vJ5ReZl6F62GfUZG%2BJeC88iqiX36G6n6%2FEb2uElKlOeu8SDZ6WkYK2wP8RmSnPhfP7h2pI7rkeVNiQWKCvEvPn%2B6aCYimHVLSTJY20hZEXM8exWc9gQ8KcIhAziaDZd%2BLwu9xcAooG%2BAccsIMBXn5e2qo7iDAyKTjAfXfn3gG5nNISf12bZwb6QHZkcEzRnKgcqQe%2F6soarbW%2B5veD4E7Z9ICQJ8payEnDL8Z0dM0aogtuvNkwYrhQUOkQJhzFegT%2Fz2alsbmYOKDC81ue9BjqkASvnYNTtzicFrE3Q2Qwtg3PndVN6gn61Sh%2FeNVogKF%2BWpIcMso5cYXuoLdN0tksVvP0oF%2FL1x2teO%2FQMvhn%2BPhtWIDfo55M6g0Z81xL%2FOJz5TAsF0weZez0OuDjFrTYEiqroh8%2FAO3P3KTHQfn914HwdE5aufhu%2FNwv5hZBAKZ%2BxdFWqzsD7SNElZQnXailpQIaD%2FHzIzn2S4s%2F3P%2BkqBxiCxZkN&X-Amz-Signature=f8ed28f69faa68eff152fafb6f7186c0d8c0eee9d83563f8410519e5e20c06bf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUTEJPNZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpq6hNpwCEcvBEyXhNjd2K9p85Gy8qYRU86C5BhBJngAIhAOGjIO6Qwpo5pDbuPDgQbUhdwzXdU2senDdzvP%2FVQ9UCKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNlSe3w9BPZRDXPrMq3AOoNGLvpQ0i8jFAbHVKbk0%2BJpfzApK7drCkKUw2Pkv4UEl4PKRhf2DNcu%2FgVCdb3Ep%2BJ3WFA%2FtOW%2FJiSn0e89eGmktEH14zKE5jPmkDUb1IT%2BIkgmX7BMYj4dI5Sk2ssfvd1hPFDwGgUohPa%2FCQtmGvVdbjuP9%2Fq1UtwcnT5DSTzIPQZDyq7D9wAeqdsgEkma%2FbeiNkKhyT289eLjuBFON%2F%2FRBQ%2Bb49lObElHV4pU9WS7OrckYMeVh9MAUHJ9%2BTshcmkatOLK6%2F0Zp57GKb%2BxTMcAm53bI0R315drc1sGG6VZHYdkC%2Fv5E0Vz5WkKOQlDzMOjkNOy4Y1wUfON8mHCKaLP3f373RYNda6Z3bkQ0jDZv%2F3vJ5ReZl6F62GfUZG%2BJeC88iqiX36G6n6%2FEb2uElKlOeu8SDZ6WkYK2wP8RmSnPhfP7h2pI7rkeVNiQWKCvEvPn%2B6aCYimHVLSTJY20hZEXM8exWc9gQ8KcIhAziaDZd%2BLwu9xcAooG%2BAccsIMBXn5e2qo7iDAyKTjAfXfn3gG5nNISf12bZwb6QHZkcEzRnKgcqQe%2F6soarbW%2B5veD4E7Z9ICQJ8payEnDL8Z0dM0aogtuvNkwYrhQUOkQJhzFegT%2Fz2alsbmYOKDC81ue9BjqkASvnYNTtzicFrE3Q2Qwtg3PndVN6gn61Sh%2FeNVogKF%2BWpIcMso5cYXuoLdN0tksVvP0oF%2FL1x2teO%2FQMvhn%2BPhtWIDfo55M6g0Z81xL%2FOJz5TAsF0weZez0OuDjFrTYEiqroh8%2FAO3P3KTHQfn914HwdE5aufhu%2FNwv5hZBAKZ%2BxdFWqzsD7SNElZQnXailpQIaD%2FHzIzn2S4s%2F3P%2BkqBxiCxZkN&X-Amz-Signature=54e147a4bd578b7c42c58ef67f86dab43a4f2eb51026e1a80ae44afaa3719458&X-Amz-SignedHeaders=host&x-id=GetObject)

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
