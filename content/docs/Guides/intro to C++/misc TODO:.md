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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCEHQFRY%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T140958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCID98ZVRvdQVDvjOVS5dSVEE8AedMTGTYVsq7CLoEvLJNAiBXepL4jTqNi9s19ohyzFR0gs0QBxuscI4IwiMiY1r%2Bjyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMf4kOiraHYQqAZ5xgKtwDFiMv2H99hkAw%2FcpMEh1jgpJP0jFxM%2BbejcFzoQZh7vfDNJbHVk7%2B42DH6aw7MLJFTeWC%2FX%2BZF2qRHSaK13d1pP0pYbjMeseB2NSqXinvmg4MxJ86qQlzOl87JUIvLgHYbRdvr69n%2Boge2Blm2DwJTGfMFRSERShkb7Op6BhEmOygYwv6Ey3xGD%2BS91rC4Wh6t1VdWaUfjGVxIFrqj7x86eP3XIZ497ASnN6RrTpAL2GB9mjNIvtR2HawsogN56dHzHKdlyPYFPhEXS9iFn3rAmVJsqke1QsIQYeVdxd1l2m93Hgpf3a8BreXIB1KcF8MU1TfG38h%2FXm7HbQJcLPaZObBNXYEetH7j4gyW54%2BPvzNibRKv0y4UlTGmwSttZ2RlqFCKQcHp5Yi2FMpPr%2F1ZzMPc2jIV64YsWKmrxmuoXeDxKhLy239SO8Ajk9cKDcuKjWcdR%2ByQAlrxgYJdIlQxa07MD4MDKsI283R8oBAzS9L5r7d6F41EPboeyWTT4PUnNpmdDzCSbfBXXTs1X9bd8q3%2FioX6o35hy6DjTCVC5FCdOsz2LHPlG74Qf6i00Z5PIASp2Aa7imUpKSKoJuQqZxlu2mgSKKS6cWWMZvGH0q2qm9v4En%2Fo5tN7JIw%2F5LewwY6pgGejsVe%2FrorI410JlV1x%2FWyHsiQbSeBRWASHQMuGMEfHB1ZMS3WerawED%2FFiLT2oj1LATCqggjeVjNq%2B9FNew5RsEW%2FJQfbMJS4U%2BPl%2FjFgiStGG7eAy03lCqZHA%2BZ5PYgXdJgXaadEdcLgGkhAa%2FRB9WXc%2BlLYMgKGFTfVy3bJALqhch8XK2K%2F8yK5g1FTL3NGFwYxvyFnXwOxMqz%2BlXkN%2FJmv3tAx&X-Amz-Signature=eeada00f25cf1e6cfeca7fca97bb4476f0f4e5a6adde2c559b8277a8b3fa237b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCEHQFRY%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T140958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCID98ZVRvdQVDvjOVS5dSVEE8AedMTGTYVsq7CLoEvLJNAiBXepL4jTqNi9s19ohyzFR0gs0QBxuscI4IwiMiY1r%2Bjyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMf4kOiraHYQqAZ5xgKtwDFiMv2H99hkAw%2FcpMEh1jgpJP0jFxM%2BbejcFzoQZh7vfDNJbHVk7%2B42DH6aw7MLJFTeWC%2FX%2BZF2qRHSaK13d1pP0pYbjMeseB2NSqXinvmg4MxJ86qQlzOl87JUIvLgHYbRdvr69n%2Boge2Blm2DwJTGfMFRSERShkb7Op6BhEmOygYwv6Ey3xGD%2BS91rC4Wh6t1VdWaUfjGVxIFrqj7x86eP3XIZ497ASnN6RrTpAL2GB9mjNIvtR2HawsogN56dHzHKdlyPYFPhEXS9iFn3rAmVJsqke1QsIQYeVdxd1l2m93Hgpf3a8BreXIB1KcF8MU1TfG38h%2FXm7HbQJcLPaZObBNXYEetH7j4gyW54%2BPvzNibRKv0y4UlTGmwSttZ2RlqFCKQcHp5Yi2FMpPr%2F1ZzMPc2jIV64YsWKmrxmuoXeDxKhLy239SO8Ajk9cKDcuKjWcdR%2ByQAlrxgYJdIlQxa07MD4MDKsI283R8oBAzS9L5r7d6F41EPboeyWTT4PUnNpmdDzCSbfBXXTs1X9bd8q3%2FioX6o35hy6DjTCVC5FCdOsz2LHPlG74Qf6i00Z5PIASp2Aa7imUpKSKoJuQqZxlu2mgSKKS6cWWMZvGH0q2qm9v4En%2Fo5tN7JIw%2F5LewwY6pgGejsVe%2FrorI410JlV1x%2FWyHsiQbSeBRWASHQMuGMEfHB1ZMS3WerawED%2FFiLT2oj1LATCqggjeVjNq%2B9FNew5RsEW%2FJQfbMJS4U%2BPl%2FjFgiStGG7eAy03lCqZHA%2BZ5PYgXdJgXaadEdcLgGkhAa%2FRB9WXc%2BlLYMgKGFTfVy3bJALqhch8XK2K%2F8yK5g1FTL3NGFwYxvyFnXwOxMqz%2BlXkN%2FJmv3tAx&X-Amz-Signature=e046bb051d4fe0f4255990e9b3e5a67f2de8e2a58172d7cbb65ec02cdd28b7d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
