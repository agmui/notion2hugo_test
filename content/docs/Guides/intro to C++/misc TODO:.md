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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFCHKIPA%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICliw7y0oqi6rJ%2BojAcD097QMDkbw9zbXjIG2xyKHZlBAiBJpdpiWcQsUBLG%2BO8%2FTXunKJ%2F2IeLcyvZ2h2QXlC6ARSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjam0fRJpYCLlOcGRKtwDh1jRMoOM9qDcezpofsg2g6fXXBe%2Bv%2BzmHyJTuYZJ7MhKLArx3sdPKdvBp2HUauSwfoAdGLrENhJR%2BKnnFG5Jo%2B%2FinbV1ohS%2FL1oFd1i9wJ52S6WAHJWgpKvpJaBghEClkfxxBVa0d4piFrA9J9yYDfdyAOburW81C%2B6iAj0ejORk3OX3lAS8BHg94iBvYN5TjJxpWZtbTg0jLbVR4I3LDLv%2Bw1qQnRVpKOoGEkL0dl%2Bqne4KxdHFZl%2Fot14wp7fPGi3h%2F85eOJPl84%2FZnagSE2RR5LEEkFW0kECUka0kSf%2FhTUoHQFjYNbc7nD0XHgyvAK2ElAJz196h5i%2BeBjMjjgdZpxa1lnBPjpf2ZIlGBgRR0oGC0rM5egi9RTCzdqSp4exQ0uLcdqT9%2BdsCjKaSiwZ6drzihYoGZ14mGlCfYldteFniS%2BxDgoHtxoLelwx%2BXsgOaGc9Ui19ganANBq8szYEsUerGftiLWx1efuZNXYVEFqJR2o%2FYEjCtTvM1w3lqkO1BIc7Ia3zy69%2Bo8bH3UlvcNWFUFZ3%2FzOLPBP4ge3nmF9KEoPd6dEZGE%2FcUeknkeur%2B0UMnjCMMzm2%2BhF%2B0YCbIl%2FVR5lByjaCv%2Fku1xeNbmMXLyqZgnrIRqcwv5ifvQY6pgF4oX9%2BTE6ISYnXjG7aCArPT84o5VO%2B%2BMWlRGYQuY3Jx6SWDq2vTsWCNKoc6SElkaF6MYf9zUfyGADvLOh7HI8qiLwvW8MFN2wFpjhPzF72fSWcU%2FoFAFifV3SeKrwfk7q%2F%2F5BttEJAbcVJvH8zGQhaqVY3XLgYYaqf9ah2ZBb6Et0s6wkyzH62ODX%2FBnVyrRLhoSFRBfDIFG2dc45d6PorlC1nzcOz&X-Amz-Signature=381f5d3ac434f4f2c6605ab798a9bc18a693d78cefd265a575952bda34f38c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFCHKIPA%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICliw7y0oqi6rJ%2BojAcD097QMDkbw9zbXjIG2xyKHZlBAiBJpdpiWcQsUBLG%2BO8%2FTXunKJ%2F2IeLcyvZ2h2QXlC6ARSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjam0fRJpYCLlOcGRKtwDh1jRMoOM9qDcezpofsg2g6fXXBe%2Bv%2BzmHyJTuYZJ7MhKLArx3sdPKdvBp2HUauSwfoAdGLrENhJR%2BKnnFG5Jo%2B%2FinbV1ohS%2FL1oFd1i9wJ52S6WAHJWgpKvpJaBghEClkfxxBVa0d4piFrA9J9yYDfdyAOburW81C%2B6iAj0ejORk3OX3lAS8BHg94iBvYN5TjJxpWZtbTg0jLbVR4I3LDLv%2Bw1qQnRVpKOoGEkL0dl%2Bqne4KxdHFZl%2Fot14wp7fPGi3h%2F85eOJPl84%2FZnagSE2RR5LEEkFW0kECUka0kSf%2FhTUoHQFjYNbc7nD0XHgyvAK2ElAJz196h5i%2BeBjMjjgdZpxa1lnBPjpf2ZIlGBgRR0oGC0rM5egi9RTCzdqSp4exQ0uLcdqT9%2BdsCjKaSiwZ6drzihYoGZ14mGlCfYldteFniS%2BxDgoHtxoLelwx%2BXsgOaGc9Ui19ganANBq8szYEsUerGftiLWx1efuZNXYVEFqJR2o%2FYEjCtTvM1w3lqkO1BIc7Ia3zy69%2Bo8bH3UlvcNWFUFZ3%2FzOLPBP4ge3nmF9KEoPd6dEZGE%2FcUeknkeur%2B0UMnjCMMzm2%2BhF%2B0YCbIl%2FVR5lByjaCv%2Fku1xeNbmMXLyqZgnrIRqcwv5ifvQY6pgF4oX9%2BTE6ISYnXjG7aCArPT84o5VO%2B%2BMWlRGYQuY3Jx6SWDq2vTsWCNKoc6SElkaF6MYf9zUfyGADvLOh7HI8qiLwvW8MFN2wFpjhPzF72fSWcU%2FoFAFifV3SeKrwfk7q%2F%2F5BttEJAbcVJvH8zGQhaqVY3XLgYYaqf9ah2ZBb6Et0s6wkyzH62ODX%2FBnVyrRLhoSFRBfDIFG2dc45d6PorlC1nzcOz&X-Amz-Signature=7e545697142057f6f892dc625aca33efdb8af8813c9daacb3fc36e0b6fdb59c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
