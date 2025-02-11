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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKRUC5LG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTE7jytarDkyo3DBXBZhXSXyZz2m5y%2F8PWRgZTZcEWgQIgTXIN8q1fS9S%2BAjm1k6xRnlGFH9vhX4BhZxDj4SSXtY8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJU1P3YZio4tSv%2F0dCrcA1ydmTbAGSml7jyoCAtXNdHzMFe%2BXUNcOy31qyCPDrrgi1IMox4RxVrmcs4ggzoOH6MmABS%2FB6FoRqRbccTIGWX4Kv4RsKX1v5pnZz%2Bdxlah5ReuUAH%2BIyWj4OS2sWBgWXeqdnqDdh85IP48UpcrjvPaZmV4MY6ZKMjlT%2BGZ5H2oO2w%2FPSN5eoukGyB6HqUv0GNrgRM7LF985%2FLLUrT0suUfRqcMf9dRQQnhKcEn0at8yNlFofOInrAhyl5%2FNcsJzoz50%2FudwaHINx95np12erzBuUpLMCT87WOEC9XJcZK%2B7wW5HlNPaMs%2FwPrj8ahsW8cobUJHjbHA4gIA3C%2F6New935%2B7GQxElWZzQpkekz3F24I3IDEN%2FvE9HQ4FYWR%2FePVwZnio1f5OU2r0kOHjzIZ1TfcOFwg%2BvtdaeyPXN%2F6GrNYwNN4xj8PeSJs6eamUTvxCiSOJNN%2B%2B2F9BZAOleW8P9DPFQqqLPQ3SRiTSgV5RQubDgEtvdmLR4AdOb9tHg8E7K1KyCy3AkUy9%2Bg36xsADQfOfKWtMMet3R1DYouXdLmNrbdtmB3zgHPTdEoAIV9R5VoQ%2B31%2F8N0QlUvOE6u9TwtXboedQ7iv%2FhUVYIKBahPJfQdHKFrtmv%2FDJMM6Tq70GOqUBawCecNqRwu6SlYkY28Ybb3uf4S9tuH0cd%2FmHCB5cDAD%2Betqmb%2B6nqPDmKwZfDWTZsUcpiftv4pj4vKkOGDokEa6kKt75adVlMxw0fDwBhK4ha3YIN2zBAUOqDlUPf2JyF3AkEZhh4q17mQNZt4zTc3Mpd4n0tf8LDcD1t5HAXzq4fFgVl1DGXHyZIVVNaJqjkSXt1MLVyh%2BGbmCJOA%2FeII%2F4YaTh&X-Amz-Signature=e53c89f6ce52a4398f9c46d0b734e3083b2efcf63ea37c29908d5470a27ac6e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKRUC5LG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTE7jytarDkyo3DBXBZhXSXyZz2m5y%2F8PWRgZTZcEWgQIgTXIN8q1fS9S%2BAjm1k6xRnlGFH9vhX4BhZxDj4SSXtY8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJU1P3YZio4tSv%2F0dCrcA1ydmTbAGSml7jyoCAtXNdHzMFe%2BXUNcOy31qyCPDrrgi1IMox4RxVrmcs4ggzoOH6MmABS%2FB6FoRqRbccTIGWX4Kv4RsKX1v5pnZz%2Bdxlah5ReuUAH%2BIyWj4OS2sWBgWXeqdnqDdh85IP48UpcrjvPaZmV4MY6ZKMjlT%2BGZ5H2oO2w%2FPSN5eoukGyB6HqUv0GNrgRM7LF985%2FLLUrT0suUfRqcMf9dRQQnhKcEn0at8yNlFofOInrAhyl5%2FNcsJzoz50%2FudwaHINx95np12erzBuUpLMCT87WOEC9XJcZK%2B7wW5HlNPaMs%2FwPrj8ahsW8cobUJHjbHA4gIA3C%2F6New935%2B7GQxElWZzQpkekz3F24I3IDEN%2FvE9HQ4FYWR%2FePVwZnio1f5OU2r0kOHjzIZ1TfcOFwg%2BvtdaeyPXN%2F6GrNYwNN4xj8PeSJs6eamUTvxCiSOJNN%2B%2B2F9BZAOleW8P9DPFQqqLPQ3SRiTSgV5RQubDgEtvdmLR4AdOb9tHg8E7K1KyCy3AkUy9%2Bg36xsADQfOfKWtMMet3R1DYouXdLmNrbdtmB3zgHPTdEoAIV9R5VoQ%2B31%2F8N0QlUvOE6u9TwtXboedQ7iv%2FhUVYIKBahPJfQdHKFrtmv%2FDJMM6Tq70GOqUBawCecNqRwu6SlYkY28Ybb3uf4S9tuH0cd%2FmHCB5cDAD%2Betqmb%2B6nqPDmKwZfDWTZsUcpiftv4pj4vKkOGDokEa6kKt75adVlMxw0fDwBhK4ha3YIN2zBAUOqDlUPf2JyF3AkEZhh4q17mQNZt4zTc3Mpd4n0tf8LDcD1t5HAXzq4fFgVl1DGXHyZIVVNaJqjkSXt1MLVyh%2BGbmCJOA%2FeII%2F4YaTh&X-Amz-Signature=9faa8e9013a355bd83dc6d3ec0469c35024b6e651d28df605c5e5dd48d8caf1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
