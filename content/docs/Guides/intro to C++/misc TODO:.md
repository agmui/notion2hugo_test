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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHIXNCUH%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdDG8PwfoRq%2FpoNOC0WgW%2F23stG3PilCBkJbBuJgIKpAiEArli2gHArA6yWgcRdEOzYHWw8io1R0yXk3%2B8Y6c4Xby8qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITipZ4gV973%2B42c2ircA8KnwJb3FfLswCcmz%2BOmx%2BABkf4EkQy3iSTKNpvnc4Q1GiXkkfoFAD2bYdILfOIVWpHgk8tTSK6utApn0uyKbG5SClxW%2F6%2BiKALSj%2BmpzJrGgqA5uBBQoVmJVB09WOsGxQaoXRyS3gujiC0gv893ZFNrsoMjXU1rbsSytGCzncErhWkvPkzExh744WBe3TdWKGsucsOtft6D%2BIBu%2Bj1%2F3PxfMw84kM5mmIrgMdEZtNFN86Ombr%2FvbHCt31uc%2Fm5roIRluFRTZ8fv8BdEUWqjL7YV7X1gVSyZ4ObrKzJV%2BDy%2BflXl795xwRbK%2B0HwGiB7Mi12S2RoZngYcMXL7%2FJPpmQ8Bq5rKBXoB11n%2BMXuM%2B1EtcQC%2BacEuYm8w6czwLlsSqaXCWHpmIei%2BpStQECvpD4euiU%2FD0MBak3%2Fyc%2Fojj%2BNmaj3ySgkggmH6Y4BcJrtlvLfLF7Z0hbZQSQQRxBNKOFnW8HTtHGUejRGoI3m6py0psdMeh1%2FMZpXyJkIzPOre%2Bs6I8N%2FybjhsQ7%2BzMvo4Wzx0%2BCeoJP2eybuVs06ddkA3tc4Kn1lv1iMeC5zbj%2B6y0L6aVMvuED%2B6efiW%2BgtNzkZv7k24ARdKRwWAQVEMs99lHhnDfwFe8SVuB5BMLfVzMoGOqUByU%2F8%2BuDWLU70I%2FCRboQx1eE%2F7HqEhlJcK3eaYx%2FgEqW0xRPhwYeqgwgJil5zc%2BBgFUpHbEzWwONiA77HOoYr7TafDQdj943aMoK4lOF0nNWqEVdA0hLe9%2FSvGTQ6itm9Jn7khheFlEdA9Juakyes3NkW5r%2FYDulzA0dpE7XH1qtcwOj3G2nkywp%2FZPvOD3J7JDt%2BQGaxOoBt%2BM%2B9VrZiz7%2FgLko8&X-Amz-Signature=83f84d1efe109506eecaea8787a99ea37adcbdeec5d3f5f3fd0e49e8385e20a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHIXNCUH%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdDG8PwfoRq%2FpoNOC0WgW%2F23stG3PilCBkJbBuJgIKpAiEArli2gHArA6yWgcRdEOzYHWw8io1R0yXk3%2B8Y6c4Xby8qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITipZ4gV973%2B42c2ircA8KnwJb3FfLswCcmz%2BOmx%2BABkf4EkQy3iSTKNpvnc4Q1GiXkkfoFAD2bYdILfOIVWpHgk8tTSK6utApn0uyKbG5SClxW%2F6%2BiKALSj%2BmpzJrGgqA5uBBQoVmJVB09WOsGxQaoXRyS3gujiC0gv893ZFNrsoMjXU1rbsSytGCzncErhWkvPkzExh744WBe3TdWKGsucsOtft6D%2BIBu%2Bj1%2F3PxfMw84kM5mmIrgMdEZtNFN86Ombr%2FvbHCt31uc%2Fm5roIRluFRTZ8fv8BdEUWqjL7YV7X1gVSyZ4ObrKzJV%2BDy%2BflXl795xwRbK%2B0HwGiB7Mi12S2RoZngYcMXL7%2FJPpmQ8Bq5rKBXoB11n%2BMXuM%2B1EtcQC%2BacEuYm8w6czwLlsSqaXCWHpmIei%2BpStQECvpD4euiU%2FD0MBak3%2Fyc%2Fojj%2BNmaj3ySgkggmH6Y4BcJrtlvLfLF7Z0hbZQSQQRxBNKOFnW8HTtHGUejRGoI3m6py0psdMeh1%2FMZpXyJkIzPOre%2Bs6I8N%2FybjhsQ7%2BzMvo4Wzx0%2BCeoJP2eybuVs06ddkA3tc4Kn1lv1iMeC5zbj%2B6y0L6aVMvuED%2B6efiW%2BgtNzkZv7k24ARdKRwWAQVEMs99lHhnDfwFe8SVuB5BMLfVzMoGOqUByU%2F8%2BuDWLU70I%2FCRboQx1eE%2F7HqEhlJcK3eaYx%2FgEqW0xRPhwYeqgwgJil5zc%2BBgFUpHbEzWwONiA77HOoYr7TafDQdj943aMoK4lOF0nNWqEVdA0hLe9%2FSvGTQ6itm9Jn7khheFlEdA9Juakyes3NkW5r%2FYDulzA0dpE7XH1qtcwOj3G2nkywp%2FZPvOD3J7JDt%2BQGaxOoBt%2BM%2B9VrZiz7%2FgLko8&X-Amz-Signature=c6ff88063fcf3b0309d9d1376ed4e3daf7cb52feb845f24c1f25c5ded43cedc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
