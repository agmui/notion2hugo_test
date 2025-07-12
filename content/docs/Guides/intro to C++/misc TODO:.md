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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZNLUY3%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi%2Ff3TxQj1zrVXRRhoFQ5wzwaa3pvPT2MEV9ho5Jt2aAIgQ%2Fm9ylyClFmKh1vpScaOmeAQkNQLjjtX8v%2BvZjeduPQqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOi3AcjJpLgRGdxYCrcA%2FKIEJzNQaIPl5FhhFdTom4vtUt3cS%2BJyQciAqI0e1ypQopW9y%2F9e4PifZ5zsL6ZbtGgRg7l8X5ctQsR%2BYfG2LAx%2Fu%2FaV6%2Bqu0vBHjdRHsc7glpdc57DgsAiI7dIwCHHU7eQ0g3g8otddNwJC0WWUDoQN0BG03Jc42lopP4iW2Y%2FxhMyvpf2Kw3Hg%2FtRBo5jm7CZsaYBAWpVOvIulfT38k2RzOX00kUS9xHT9zeokTUy%2BJGDxbCMeLywzIKsqrNEiHOlFsp%2BKSe%2BvU9Pfct8lTrJrh6pVo3t7Hs0cam8nxgJFsZ0IIgdBo7%2FyCH7hi8qLltTpVJ9bf2l7L7%2F7SKvHNw%2BJ0wMdtZaocguVDFqnirKM1IdcMw%2FdkdwnzpT4m8MuF%2FBZmnCh2R4NSNjI9nT1ko%2B5DfxWhRPtS5knrvwVoi3R13R2TloZOTGzY1ckc4yC1SJaNZ2VJIAgzveg%2B7cb9TkJ%2BkMXiq8BM7Jx5FH6MdEe8%2Bq8BPrA40vEJvYW4k%2BQWEnrw2ifsDZiC90r1OXjJoYlDubmTf14es5BnJ%2F9MLT8hEnPEfLKo8ONoq8lyKEEt4ctBUmbyfrBWWXvrtdfPvuMijdpnfVSrc6TVEZrjAyarCxAWB%2Be7fm0IYZMIXaysMGOqUBEqx3fZr0O%2BubYm8DmScqds%2Biv1cSHnw1PPwcJugubGK5xuJH8CqyBudIGf4mMO5qIPVhPF%2FscI7cnVr8xy%2FaKktMgXKPYqCPcPLGnCrfzdKDDJ0W2bOCihDgpvG0XjtWPQbsFtIxtKuQiNxwih5obQu0PWNVgo5SkT6gH3OOzC25PrtZLl0W9GbddsKVeT%2FlOV%2F%2FAtX7AaYKus9bkPf4MZXQbSfQ&X-Amz-Signature=ac6c397c32b20ccd40481045ecbaf71fc909f6ea4b101c4a0a7e1c99b8ae4e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZNLUY3%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi%2Ff3TxQj1zrVXRRhoFQ5wzwaa3pvPT2MEV9ho5Jt2aAIgQ%2Fm9ylyClFmKh1vpScaOmeAQkNQLjjtX8v%2BvZjeduPQqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOi3AcjJpLgRGdxYCrcA%2FKIEJzNQaIPl5FhhFdTom4vtUt3cS%2BJyQciAqI0e1ypQopW9y%2F9e4PifZ5zsL6ZbtGgRg7l8X5ctQsR%2BYfG2LAx%2Fu%2FaV6%2Bqu0vBHjdRHsc7glpdc57DgsAiI7dIwCHHU7eQ0g3g8otddNwJC0WWUDoQN0BG03Jc42lopP4iW2Y%2FxhMyvpf2Kw3Hg%2FtRBo5jm7CZsaYBAWpVOvIulfT38k2RzOX00kUS9xHT9zeokTUy%2BJGDxbCMeLywzIKsqrNEiHOlFsp%2BKSe%2BvU9Pfct8lTrJrh6pVo3t7Hs0cam8nxgJFsZ0IIgdBo7%2FyCH7hi8qLltTpVJ9bf2l7L7%2F7SKvHNw%2BJ0wMdtZaocguVDFqnirKM1IdcMw%2FdkdwnzpT4m8MuF%2FBZmnCh2R4NSNjI9nT1ko%2B5DfxWhRPtS5knrvwVoi3R13R2TloZOTGzY1ckc4yC1SJaNZ2VJIAgzveg%2B7cb9TkJ%2BkMXiq8BM7Jx5FH6MdEe8%2Bq8BPrA40vEJvYW4k%2BQWEnrw2ifsDZiC90r1OXjJoYlDubmTf14es5BnJ%2F9MLT8hEnPEfLKo8ONoq8lyKEEt4ctBUmbyfrBWWXvrtdfPvuMijdpnfVSrc6TVEZrjAyarCxAWB%2Be7fm0IYZMIXaysMGOqUBEqx3fZr0O%2BubYm8DmScqds%2Biv1cSHnw1PPwcJugubGK5xuJH8CqyBudIGf4mMO5qIPVhPF%2FscI7cnVr8xy%2FaKktMgXKPYqCPcPLGnCrfzdKDDJ0W2bOCihDgpvG0XjtWPQbsFtIxtKuQiNxwih5obQu0PWNVgo5SkT6gH3OOzC25PrtZLl0W9GbddsKVeT%2FlOV%2F%2FAtX7AaYKus9bkPf4MZXQbSfQ&X-Amz-Signature=9e033682bead7ad43fd75bad080c5c9b565e9cb3f5478b7d2f3347370d61dbe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
