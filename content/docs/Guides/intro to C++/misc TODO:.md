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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JFXYDRX%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCixYGJ0MPiWqj7MBLwRAInV%2FMRzN6jye0pIssFw0VZPwIhAMcTC0NMcvbKzkH3LlMlyF%2FHWYbb7qN9mUJ%2Bk%2Fm7TdOwKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHk3bOqvewGTMdk3Uq3AOsBkP87KoVyyR6NIWFz1g%2FTUaM0mBUCRpVTiycjcKwyH8DbYWDP5VzZIswpJGvTcBS9Xf%2BKt4Qd%2BC6dTojD%2F4hoMS3TtCp8EYj61Ma3mHI7ySMakzzO0XPUgfGZ8rfWnYL%2Bt8cw%2Bthhr0ImNiu6hoGPkeaM%2Fif6LFxY4biGNMgt%2BeUPhGV7cscQhiIbc4rVxer%2FqzmaxQwlYIFPlsFoRwh40xLQR9167LA2%2Bxopvd88%2FKyb%2B0ZOfLp4OiBQ6Xn%2FAWKHsf9wV%2FfkSJ1QLQ7IhCJZtQDgH00yA8OYU2STGTleYTJE1JJRJBuw%2BoiF1i9fhehmpIujwXe082MwznZoRtgQchCvMhvp%2FtWHxtZf%2FKgCIrFP8Vb5tHaCtaONYIN4rq5KgHuV8N5kPiypWqKCJngIIetJTfunMuom1NIOtBzng%2FsaVBQC7KewhcrzETk8L1vkCx6ALHsaH9PuCWQ%2Fo1Ivq79uxm8Xh8xwYkb5NJn%2FGHb3pcojME1pViqsgA%2B%2B%2B8%2F%2FE0owAT6jIu8INipxQM70XJk6EshlNROkCp6G%2BEHM7%2BV%2FjLD%2B8C9j%2FPFa5lJwiC1DrPMAHNTn7Kds4Feb4A7vyRJkfkPjYB1kJy7xCLcB0kycp%2BbEFMSVUbbODCuzd%2FCBjqkAeNM1awKGhFktim9tyBK6Wdhfvgk7CFNuIOF%2F6AePxo0aVHHTZtZYkFBZaD46HOx2hegnOR4rxmESFa3JIEgdvZd3o9yTLeYy9bBg69DgW%2Bun6d3OQCLY7dDcwV8VuO0SboGNbENnpW7k5Nolkj0DlQBMl52F1C03JubCXjTBbsBVovohAVY2LAmhlJD4EDbV4pEg50yDaAnIHu9FF9B7SX7U9GF&X-Amz-Signature=7b09c3390b315ce3cf29c8bb01f24e2e4ca4d4bb3c9f94bb82fb213714036a1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JFXYDRX%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCixYGJ0MPiWqj7MBLwRAInV%2FMRzN6jye0pIssFw0VZPwIhAMcTC0NMcvbKzkH3LlMlyF%2FHWYbb7qN9mUJ%2Bk%2Fm7TdOwKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHk3bOqvewGTMdk3Uq3AOsBkP87KoVyyR6NIWFz1g%2FTUaM0mBUCRpVTiycjcKwyH8DbYWDP5VzZIswpJGvTcBS9Xf%2BKt4Qd%2BC6dTojD%2F4hoMS3TtCp8EYj61Ma3mHI7ySMakzzO0XPUgfGZ8rfWnYL%2Bt8cw%2Bthhr0ImNiu6hoGPkeaM%2Fif6LFxY4biGNMgt%2BeUPhGV7cscQhiIbc4rVxer%2FqzmaxQwlYIFPlsFoRwh40xLQR9167LA2%2Bxopvd88%2FKyb%2B0ZOfLp4OiBQ6Xn%2FAWKHsf9wV%2FfkSJ1QLQ7IhCJZtQDgH00yA8OYU2STGTleYTJE1JJRJBuw%2BoiF1i9fhehmpIujwXe082MwznZoRtgQchCvMhvp%2FtWHxtZf%2FKgCIrFP8Vb5tHaCtaONYIN4rq5KgHuV8N5kPiypWqKCJngIIetJTfunMuom1NIOtBzng%2FsaVBQC7KewhcrzETk8L1vkCx6ALHsaH9PuCWQ%2Fo1Ivq79uxm8Xh8xwYkb5NJn%2FGHb3pcojME1pViqsgA%2B%2B%2B8%2F%2FE0owAT6jIu8INipxQM70XJk6EshlNROkCp6G%2BEHM7%2BV%2FjLD%2B8C9j%2FPFa5lJwiC1DrPMAHNTn7Kds4Feb4A7vyRJkfkPjYB1kJy7xCLcB0kycp%2BbEFMSVUbbODCuzd%2FCBjqkAeNM1awKGhFktim9tyBK6Wdhfvgk7CFNuIOF%2F6AePxo0aVHHTZtZYkFBZaD46HOx2hegnOR4rxmESFa3JIEgdvZd3o9yTLeYy9bBg69DgW%2Bun6d3OQCLY7dDcwV8VuO0SboGNbENnpW7k5Nolkj0DlQBMl52F1C03JubCXjTBbsBVovohAVY2LAmhlJD4EDbV4pEg50yDaAnIHu9FF9B7SX7U9GF&X-Amz-Signature=16a49aa1340687aa7e9f75419bdba66c3b392cd93fb68185afa8904a30e77877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
