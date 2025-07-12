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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQWW7SAT%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuGLc8m78lS9ZjFwS%2BPlfh0ZJv28GAlCl%2F%2BHIsaosRlAiEA2nFwwVs3vP5ShRn9xiGHTnXcST3jBv7HnClAua3kImIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3lqub95f2FM43%2BrCrcAwIZ%2BrXf%2BTyXh6YRTpfzNxKCvcqSY89NqFhYFOJIHjBzEcqm1AZln%2FFBBDbiA3ieP5yyoZKdkESoqMnkAk3Yhg%2BqR7X40pjIGxC05hWbVyp%2F8k0f9MN9sw3OIhIjTiYnZcBxKvMQ2z2lT9dcNK7HWZ05%2FqgVtI1KZ5WZI14Xuc8UFG8VEAgGAlNP2i2MSXdbg5Qxcyi32KSrzwmOsd2YznJimOHctQFkY2i%2FAkXcBmHpR%2BjkCfSTgsMp8Sihvq65uN5Fp41HdlvWNvWr41Xck26Dt%2FMdZjmUlhPHeEhrtD%2BLs7Gt00%2B3C5k9HKx%2Bg68TZ7crRsTvV1oO7XFYKzvXDcsyi%2Bk6MxlZNSG1ss0UcI1Lgq3pjFFWNT4z01Ayq%2BIS24tTTgHL24lE2REt%2FAXGADysmU%2FA3jSjE7bli8YFG9Tu5oacUFBWtdpwJVdW%2FCa1Ro8Ff9tiTPU8m99u6ZYy9JN2O3AsV01Yio%2BNr374pxCv2n9LpZlM57QMDvC%2BN4PtpVhtlcQFTkxVKkOpbH0PCAypLnDkqUXbYT0U7YgGO7x1IWp31oeGsutg%2BPKgA1erpbduvfAIYZOYjJqGy1B5wVuvhxVQh08sTb88DfDgzK5aw8v2NfHzwpEHatdhMPKhyMMGOqUBtgTgb0VcogIPSIJvdR26dJ%2FvMAx0ot8k7dOMoPExZtDgwevaEdp9c4CKlQFDp1W%2Bpr8Hs5mSqf9NPNEY5EnS6edocI1xOgjRDqQPSie6TJHhLiwd8JUOdodVh%2FxemHcs2zAljTh2X5wLq%2BFg%2FQjgsvXmDL%2BODG1gCKadqCN%2ByK5f%2FWL3EljBudsck6RjVg4xBNU0pQaXJC%2BGbPQbKar1zCccDK9x&X-Amz-Signature=82c8179772655077b46522510e33848107d3a406157aa94ff22ecee2c4b78b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQWW7SAT%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuGLc8m78lS9ZjFwS%2BPlfh0ZJv28GAlCl%2F%2BHIsaosRlAiEA2nFwwVs3vP5ShRn9xiGHTnXcST3jBv7HnClAua3kImIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3lqub95f2FM43%2BrCrcAwIZ%2BrXf%2BTyXh6YRTpfzNxKCvcqSY89NqFhYFOJIHjBzEcqm1AZln%2FFBBDbiA3ieP5yyoZKdkESoqMnkAk3Yhg%2BqR7X40pjIGxC05hWbVyp%2F8k0f9MN9sw3OIhIjTiYnZcBxKvMQ2z2lT9dcNK7HWZ05%2FqgVtI1KZ5WZI14Xuc8UFG8VEAgGAlNP2i2MSXdbg5Qxcyi32KSrzwmOsd2YznJimOHctQFkY2i%2FAkXcBmHpR%2BjkCfSTgsMp8Sihvq65uN5Fp41HdlvWNvWr41Xck26Dt%2FMdZjmUlhPHeEhrtD%2BLs7Gt00%2B3C5k9HKx%2Bg68TZ7crRsTvV1oO7XFYKzvXDcsyi%2Bk6MxlZNSG1ss0UcI1Lgq3pjFFWNT4z01Ayq%2BIS24tTTgHL24lE2REt%2FAXGADysmU%2FA3jSjE7bli8YFG9Tu5oacUFBWtdpwJVdW%2FCa1Ro8Ff9tiTPU8m99u6ZYy9JN2O3AsV01Yio%2BNr374pxCv2n9LpZlM57QMDvC%2BN4PtpVhtlcQFTkxVKkOpbH0PCAypLnDkqUXbYT0U7YgGO7x1IWp31oeGsutg%2BPKgA1erpbduvfAIYZOYjJqGy1B5wVuvhxVQh08sTb88DfDgzK5aw8v2NfHzwpEHatdhMPKhyMMGOqUBtgTgb0VcogIPSIJvdR26dJ%2FvMAx0ot8k7dOMoPExZtDgwevaEdp9c4CKlQFDp1W%2Bpr8Hs5mSqf9NPNEY5EnS6edocI1xOgjRDqQPSie6TJHhLiwd8JUOdodVh%2FxemHcs2zAljTh2X5wLq%2BFg%2FQjgsvXmDL%2BODG1gCKadqCN%2ByK5f%2FWL3EljBudsck6RjVg4xBNU0pQaXJC%2BGbPQbKar1zCccDK9x&X-Amz-Signature=5f49432797c0a470ebcc886dfb5c60563bf4339417bf0ba12c24ccac05b0f6b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
