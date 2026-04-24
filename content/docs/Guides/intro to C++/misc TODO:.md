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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNEDCF2%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuGIa18%2BO2UWv%2BBJU%2BjfL719p1KpIGkrOJsQ7KaNCEhAiEA8%2FV9tZ2aQspyyK%2BZ4SR11Xto8W%2FhTPHF4EvsfUb3U1Mq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLkbBaIJKh%2Bbx4GtDyrcA3x%2F8FRPvyrQ97b1nvJ9xDIRqiM6P541v63T86dNE%2B3EkCcW7OPPXxWCaOEuR107kmWZQ2WQ1fktn4O9J%2BVvyrjf0W8TPTfpzu8VCo4gD21qKprc9P0JppdDtIv%2B4jyjnyN3DC8aNHU4KPANyHZOATNxSEfj1Jy4WlCTim9eztkfK4wdG%2FjfCuJO7%2FSDVP39txiuK3O%2Fj4YfqxuKyS6RAXJF3ywFIWvXBi0t3p945hVIhHikJhVM1agsW9ySGqOves62WgcZAfvUkFyTbkB78q3nOdsw05Bhhajyds5166Y9PHVpSZ0hAmEe0a5m%2FtxUyxxnejabw%2BGor%2Bc57oqieXaQwjNQX3NGe1Syh95hehTSirCcZt4To2WkXWaX%2F9YTQUu%2FuuFPY6AiRzGiSVwH9P3em7nJE%2BD0d1lFC%2F0pCzxO9Zj8g7MySXJ7byjYjap%2BMSQFN80kFSFzBh2UDZD72SJWEa7UG9aiHWBy7wjDSq8Hrg9goBXbYFX70uy%2BdradDiYszMRng5c72cCSYyi1rRHUTUYhPkwiqFcjsdrnikSOJ9x4pmtDorBm9PBmD5o1s9ZLfbaBCWgzVMObmt7qh9uiKmoVrrKodLaZ7yrRTXcVI6%2B2mA9Hb%2FCEJ2N1MMntqs8GOqUBcnvWhyRq9Fu1oLZezlqxl4AAFCU7K1WxaoGQ9fqOvpq%2BjLyPyL0%2FiQBPbla5YaG%2FQ7s1nSsmyHm0UoHjtHYYHoU7URMXjo8vn8pfqqtShX7ozePgboF1hjN97tjdRZipPt%2FpdYoqw3vVbinAJM8pTSD1avv4RV%2BVKZ2gU9LZ%2Fzs7ioOwh5Bqox8EhTSPGugKFiIdMLb7PtnRQh4SiUMmxaUobLaM&X-Amz-Signature=e7f045800fa243d40389e75f5ff1745be807e1b02b78fcaf3c073b7c3913eb3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNEDCF2%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuGIa18%2BO2UWv%2BBJU%2BjfL719p1KpIGkrOJsQ7KaNCEhAiEA8%2FV9tZ2aQspyyK%2BZ4SR11Xto8W%2FhTPHF4EvsfUb3U1Mq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLkbBaIJKh%2Bbx4GtDyrcA3x%2F8FRPvyrQ97b1nvJ9xDIRqiM6P541v63T86dNE%2B3EkCcW7OPPXxWCaOEuR107kmWZQ2WQ1fktn4O9J%2BVvyrjf0W8TPTfpzu8VCo4gD21qKprc9P0JppdDtIv%2B4jyjnyN3DC8aNHU4KPANyHZOATNxSEfj1Jy4WlCTim9eztkfK4wdG%2FjfCuJO7%2FSDVP39txiuK3O%2Fj4YfqxuKyS6RAXJF3ywFIWvXBi0t3p945hVIhHikJhVM1agsW9ySGqOves62WgcZAfvUkFyTbkB78q3nOdsw05Bhhajyds5166Y9PHVpSZ0hAmEe0a5m%2FtxUyxxnejabw%2BGor%2Bc57oqieXaQwjNQX3NGe1Syh95hehTSirCcZt4To2WkXWaX%2F9YTQUu%2FuuFPY6AiRzGiSVwH9P3em7nJE%2BD0d1lFC%2F0pCzxO9Zj8g7MySXJ7byjYjap%2BMSQFN80kFSFzBh2UDZD72SJWEa7UG9aiHWBy7wjDSq8Hrg9goBXbYFX70uy%2BdradDiYszMRng5c72cCSYyi1rRHUTUYhPkwiqFcjsdrnikSOJ9x4pmtDorBm9PBmD5o1s9ZLfbaBCWgzVMObmt7qh9uiKmoVrrKodLaZ7yrRTXcVI6%2B2mA9Hb%2FCEJ2N1MMntqs8GOqUBcnvWhyRq9Fu1oLZezlqxl4AAFCU7K1WxaoGQ9fqOvpq%2BjLyPyL0%2FiQBPbla5YaG%2FQ7s1nSsmyHm0UoHjtHYYHoU7URMXjo8vn8pfqqtShX7ozePgboF1hjN97tjdRZipPt%2FpdYoqw3vVbinAJM8pTSD1avv4RV%2BVKZ2gU9LZ%2Fzs7ioOwh5Bqox8EhTSPGugKFiIdMLb7PtnRQh4SiUMmxaUobLaM&X-Amz-Signature=1b0c00e1a01396ba9f08f4d28bc57336988a1c22d340580a6ebc419cfdf7f82f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
