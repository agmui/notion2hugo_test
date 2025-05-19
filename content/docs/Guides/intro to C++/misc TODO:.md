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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSYUFQZ4%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAupZU9u0RWVOVWga7BxQX12vsolS0u5gtp44FtCntJtAiEAlXoV7TV%2BjO7UPTODvklzZTOqfXXybDWYi1hzAlCluOAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlEj8VzXu61n1jjEircA4fAVPL6U2w2bUctWoEjWPJqA841NAwsjhRwPNbOvQxL2d1QsLOe0s1Yh3%2BA6CTk7XD%2BvtgT7TT3EbsHj89Q5rjE9Vo9L0PSnjBxAz%2B6wjZh0S%2F9DZnGkcY5adZPVJLcBW3YSUMHhWYROVNFbAccFxfSqhwTmygxykTfnZETXYWamrPHr0pr53XbXlwQZZMbJ%2BGRY6ppPz4rG59kzISZobRS37VXjUEFnCrs61vrJ2qpcGF4xG1Qig2fpn1VjrzIoZK8LnWNhSQOyo0fAcymVV4jt2FsDSAuol222tRZ9Bp1d6Em%2BJWpKbvjZv%2B0J5pyrdxsLUlOoB4dS%2BRoJ%2FYg33%2BaYF6zNwRr7w44ycY4mjX71oNyEJUzxHQdIcVIREVGwRTZB%2F4YH%2FT0bd1G0tznfMqDjxcqquQArORUPZGeJtXHaHb2RVrCq5JiwS6AxZz%2BFTQOW%2FjivVyWKBLI9as6jPvOe0UM0D8AJ8cEGAVFTBMVMONR8SnNOAyVHDMMlKGDmCAm5PL%2BItd7wUsTY7dNlnIYTtl4hKwkGocwCd4FJJfpMyxT%2F0su03JTFj9ZgdLFyBHGncsnEo2lCfFQQTud2pFU9fIZycvNgLA%2FF1kdiH%2FeQ3FZixGj1tgqZLmTMNDIrcEGOqUBykpymbF%2BG2wBvL0THCbqEP0PYQN7WZShuK00GDxKlMAEYL44%2B%2FFF%2FLErh0tuYVTvl259uY09cXt6qWfaNQo8yMDH1J8kLxRpBJRWOvS6boCXCHt%2FKOTIyYvqZbZWN%2Bpe%2FhSdWOk9V15kFoj70OxbYQADUqwJOfqbYXLHvRM8t9CEiHtvPmEI2crvJXv1zppHpHz%2F4Krs0SCqWbQaYwD2VFGVPfy8&X-Amz-Signature=37e7fe0d6d8af89525f8449d49508dad1a98e688149a254efb5d6d8ab831be59&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSYUFQZ4%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAupZU9u0RWVOVWga7BxQX12vsolS0u5gtp44FtCntJtAiEAlXoV7TV%2BjO7UPTODvklzZTOqfXXybDWYi1hzAlCluOAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlEj8VzXu61n1jjEircA4fAVPL6U2w2bUctWoEjWPJqA841NAwsjhRwPNbOvQxL2d1QsLOe0s1Yh3%2BA6CTk7XD%2BvtgT7TT3EbsHj89Q5rjE9Vo9L0PSnjBxAz%2B6wjZh0S%2F9DZnGkcY5adZPVJLcBW3YSUMHhWYROVNFbAccFxfSqhwTmygxykTfnZETXYWamrPHr0pr53XbXlwQZZMbJ%2BGRY6ppPz4rG59kzISZobRS37VXjUEFnCrs61vrJ2qpcGF4xG1Qig2fpn1VjrzIoZK8LnWNhSQOyo0fAcymVV4jt2FsDSAuol222tRZ9Bp1d6Em%2BJWpKbvjZv%2B0J5pyrdxsLUlOoB4dS%2BRoJ%2FYg33%2BaYF6zNwRr7w44ycY4mjX71oNyEJUzxHQdIcVIREVGwRTZB%2F4YH%2FT0bd1G0tznfMqDjxcqquQArORUPZGeJtXHaHb2RVrCq5JiwS6AxZz%2BFTQOW%2FjivVyWKBLI9as6jPvOe0UM0D8AJ8cEGAVFTBMVMONR8SnNOAyVHDMMlKGDmCAm5PL%2BItd7wUsTY7dNlnIYTtl4hKwkGocwCd4FJJfpMyxT%2F0su03JTFj9ZgdLFyBHGncsnEo2lCfFQQTud2pFU9fIZycvNgLA%2FF1kdiH%2FeQ3FZixGj1tgqZLmTMNDIrcEGOqUBykpymbF%2BG2wBvL0THCbqEP0PYQN7WZShuK00GDxKlMAEYL44%2B%2FFF%2FLErh0tuYVTvl259uY09cXt6qWfaNQo8yMDH1J8kLxRpBJRWOvS6boCXCHt%2FKOTIyYvqZbZWN%2Bpe%2FhSdWOk9V15kFoj70OxbYQADUqwJOfqbYXLHvRM8t9CEiHtvPmEI2crvJXv1zppHpHz%2F4Krs0SCqWbQaYwD2VFGVPfy8&X-Amz-Signature=18fa5e287af2124ff26ed46b778a8de75eb7fd6cfe8cecc42f44a60d4c2e0175&X-Amz-SignedHeaders=host&x-id=GetObject)

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
