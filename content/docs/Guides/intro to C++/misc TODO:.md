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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWZ6KHA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC5YTIMIjY6NST1mjTJ1UFqLNuZs55SzYy8jc%2BN331%2FOgIgGSqJ2uS%2BkuDZU%2FP6f48dUs2ewu2MLNnvdPdvo8hMd60q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDI8pEKMnfihJjtAEdCrcA5tj0NHbTUa0VLKkgrNpaE%2Fg0JOExJwi2TBMUzTuMV2YYhSRseah9ETR7L0R7jZeb3orHzMoJaF4flUcELgZA37xyo2MlFDjB23MMn%2B6pTxTVsbWHPU5bJSfzX7MOnrBsfLqy5r04LbUFTEMYbyIwfJuJdhe2iBp2itRkXmZRLbs1HcdEUcZVCQxH4fu0t2zsFYO6yaahQsvOzfVMdLAI12Jqxe1RTdU8C6kr5jN4BqnCMNiYAKvvVzDa%2FG2x%2BwbryfEpsKuNGbjSQHi2ffZG36khD06kU6FZ3Pj%2BivOV0tmgUCPaDK90oWRQfQ%2BHGpJZPON1ey4U%2FfkHxhW1eliKxz4ICSkCfBeqw7IQv0bq83u1dllyyk5jNoJxItli8xcuHeoyhuGfcO%2BG66iaiw4DA9A0wVXFRku6%2FW1biH0HREKJtFW3iqKV%2B05ig37KKFtKD1mkbdqB7wqCWR6ZL%2ByWiGKZg34N5TkkaNa7JV7bOTCY%2BbtpcGmrX%2BYvpzwsV31hnlZKnvpAA20MciVMTBkKIehS1uIYyeRi3wd9p4UkOA5gLyBcljFdnW9yqOSmoQRT5MxL0nMDk50JYLWggg0vxt2ezBmk5Um8El88kGCsa8ODVBrtq3p7kZahH74MML5pcMGOqUBsNXKYgYbF2RjWOI1MjkinM5Qq6eIsw9l%2FdP293QqwpeV2O4LKUxBZOtXc9NBx18sTnU91D645nZJL2%2B77uYXEz1ZS5xEYfKdkKaZi8ElPRRRAxV%2FtRZIcTjJJ7i4fMwrBPEhhByoc3SsYzsbAgx3QCOHKZPUl8PeEzeUh2AAyLs5E%2FMTWMY7CneSWH2FyrupebN8klwqAlSK1SsJ%2Bn04kyJtIJ8G&X-Amz-Signature=b0a6f4c2768e90437fb69f182174595eac21d836717126a31e3b4e936d74b744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWZ6KHA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC5YTIMIjY6NST1mjTJ1UFqLNuZs55SzYy8jc%2BN331%2FOgIgGSqJ2uS%2BkuDZU%2FP6f48dUs2ewu2MLNnvdPdvo8hMd60q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDI8pEKMnfihJjtAEdCrcA5tj0NHbTUa0VLKkgrNpaE%2Fg0JOExJwi2TBMUzTuMV2YYhSRseah9ETR7L0R7jZeb3orHzMoJaF4flUcELgZA37xyo2MlFDjB23MMn%2B6pTxTVsbWHPU5bJSfzX7MOnrBsfLqy5r04LbUFTEMYbyIwfJuJdhe2iBp2itRkXmZRLbs1HcdEUcZVCQxH4fu0t2zsFYO6yaahQsvOzfVMdLAI12Jqxe1RTdU8C6kr5jN4BqnCMNiYAKvvVzDa%2FG2x%2BwbryfEpsKuNGbjSQHi2ffZG36khD06kU6FZ3Pj%2BivOV0tmgUCPaDK90oWRQfQ%2BHGpJZPON1ey4U%2FfkHxhW1eliKxz4ICSkCfBeqw7IQv0bq83u1dllyyk5jNoJxItli8xcuHeoyhuGfcO%2BG66iaiw4DA9A0wVXFRku6%2FW1biH0HREKJtFW3iqKV%2B05ig37KKFtKD1mkbdqB7wqCWR6ZL%2ByWiGKZg34N5TkkaNa7JV7bOTCY%2BbtpcGmrX%2BYvpzwsV31hnlZKnvpAA20MciVMTBkKIehS1uIYyeRi3wd9p4UkOA5gLyBcljFdnW9yqOSmoQRT5MxL0nMDk50JYLWggg0vxt2ezBmk5Um8El88kGCsa8ODVBrtq3p7kZahH74MML5pcMGOqUBsNXKYgYbF2RjWOI1MjkinM5Qq6eIsw9l%2FdP293QqwpeV2O4LKUxBZOtXc9NBx18sTnU91D645nZJL2%2B77uYXEz1ZS5xEYfKdkKaZi8ElPRRRAxV%2FtRZIcTjJJ7i4fMwrBPEhhByoc3SsYzsbAgx3QCOHKZPUl8PeEzeUh2AAyLs5E%2FMTWMY7CneSWH2FyrupebN8klwqAlSK1SsJ%2Bn04kyJtIJ8G&X-Amz-Signature=edb76796bc74a4b0c9049e663b79fa5e4301679134f76aed925217b8029fdf6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
