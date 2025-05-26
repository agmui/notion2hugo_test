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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WOZVKUE%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkEet7msZBvIpypsDzU1%2Bs98LLLBRvN1G3iIVpICegjAiEAqZq6%2F2xPHvRGUGtj7n8xRw%2BclL9VSxqrGBeAc2Qx3Gsq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDPjz6yhFJRAypnIFFCrcA7MT4Im9gX37mx3PgBdXsolOCckaRRBHbXitZmNf1PXhdvWj25T91n6vN%2FkrJMS53ahf3kSrxe%2BsvuWQMeXkYtZCy5zaWa6HoJyWR1Fr4wmhKlxQ0qHtcExU5Ij6gMnsCjDrF7USlHVkGFo%2Fyh1evnHPV6vpdpiWZ%2FnX78QCCP%2FuBj2tNVJB%2F%2F4%2BRl2mvhyXp8J1k8P3pXTp5rMkpRl64vePuy5v3V%2BZYlONJX3ZI9fYkjxdyEaQIilkdr7X%2B1%2FZPT3NpbbKPdj4i5Ni7buTSolvLNzcjorNOxOK0V4BUtbn1XcNP6BnD9uOItbGptX%2BcuAZnvSgFp4a1SP4UpLqPT7Ef%2BmThNGy8eOCvmx2XXd5ylF31z42kraH6IoRvpE6Xu%2BB1%2FQk%2BABJRIeMHFdketpjOEBruCMBOJERYNMN5VYYsfVrA7kAfjiApMCPsKQKV10rWP5nyfOsFvGnuWEUQD2HXF8Z9hryujIXTA2wh2LCIu0ilD8OcrS1r%2Bkzw8rIJLolNilbEJ3BNT%2Fkj8FnonqZZrva36zUhPL%2Fxh48nNJrtuFaVOFwh6ghHja3nCfj3yO065VLUBZg%2ByWEphL%2FKRpHQ2foDxLoN9pY3jICdggiepN9zIjPVQOh1pYUMM6S0sEGOqUBGmMPJkR0EY7OgGck6Ihux1g2y9kI1IyBL5NQvGWxGi4muZiEAqKTESJgXe95B2J61FQErtC8J6a41C9CkN8ZMd0H5DnYGMKOa17IiLA7SZWWkdvKjQH56UxmCfRJBz93PFr1zfZeSHbcnX7%2BU%2Fnmup8VpybLwFxGrWXd4wjZ1SUgFUeS0CiGnZlpOTp4xT1MgfTyFsQL6yo4NaNgUsDbPlzfEQMO&X-Amz-Signature=d700490edacb16d871713e4c70970a32359c8b0479258469446f891a8907a0e6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WOZVKUE%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkEet7msZBvIpypsDzU1%2Bs98LLLBRvN1G3iIVpICegjAiEAqZq6%2F2xPHvRGUGtj7n8xRw%2BclL9VSxqrGBeAc2Qx3Gsq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDPjz6yhFJRAypnIFFCrcA7MT4Im9gX37mx3PgBdXsolOCckaRRBHbXitZmNf1PXhdvWj25T91n6vN%2FkrJMS53ahf3kSrxe%2BsvuWQMeXkYtZCy5zaWa6HoJyWR1Fr4wmhKlxQ0qHtcExU5Ij6gMnsCjDrF7USlHVkGFo%2Fyh1evnHPV6vpdpiWZ%2FnX78QCCP%2FuBj2tNVJB%2F%2F4%2BRl2mvhyXp8J1k8P3pXTp5rMkpRl64vePuy5v3V%2BZYlONJX3ZI9fYkjxdyEaQIilkdr7X%2B1%2FZPT3NpbbKPdj4i5Ni7buTSolvLNzcjorNOxOK0V4BUtbn1XcNP6BnD9uOItbGptX%2BcuAZnvSgFp4a1SP4UpLqPT7Ef%2BmThNGy8eOCvmx2XXd5ylF31z42kraH6IoRvpE6Xu%2BB1%2FQk%2BABJRIeMHFdketpjOEBruCMBOJERYNMN5VYYsfVrA7kAfjiApMCPsKQKV10rWP5nyfOsFvGnuWEUQD2HXF8Z9hryujIXTA2wh2LCIu0ilD8OcrS1r%2Bkzw8rIJLolNilbEJ3BNT%2Fkj8FnonqZZrva36zUhPL%2Fxh48nNJrtuFaVOFwh6ghHja3nCfj3yO065VLUBZg%2ByWEphL%2FKRpHQ2foDxLoN9pY3jICdggiepN9zIjPVQOh1pYUMM6S0sEGOqUBGmMPJkR0EY7OgGck6Ihux1g2y9kI1IyBL5NQvGWxGi4muZiEAqKTESJgXe95B2J61FQErtC8J6a41C9CkN8ZMd0H5DnYGMKOa17IiLA7SZWWkdvKjQH56UxmCfRJBz93PFr1zfZeSHbcnX7%2BU%2Fnmup8VpybLwFxGrWXd4wjZ1SUgFUeS0CiGnZlpOTp4xT1MgfTyFsQL6yo4NaNgUsDbPlzfEQMO&X-Amz-Signature=554bc4cb263ce6e5e9650ac0fca37b2565a7411b6edcc0de3251277100bcedf4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
