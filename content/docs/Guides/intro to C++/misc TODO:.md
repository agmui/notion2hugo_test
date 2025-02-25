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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TOSGVVK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGyKeez6m64SJ7gsX8nYBMAdSrZGbJLWY%2FlrUhrOtds6AiB04c7YEYbUWdZcOO78O0ov4oReIL%2F1%2BQzfZqGVofO8VCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMegaOTIsNgj4DpaGEKtwDGHWxVJ7dgTfraSDx2amrkWvERlior6A6ly4NWf%2BR7tbMErW14QkZRyJ1ekgi5926aHOCC6B5OsR3b4s217FFPe%2BLltfweCFX5FIn5HcFuSGn15jTcsNh3ta6lCN0zy3J0ImtRSyMwDCQX1wUgeCwkZJ6759DjDGeZekpNAt677uG9ATQJWxDot%2FdCejDA53iP61%2BXUuNR6DHjUyX5XRCfTD2%2F9tFkvUduAUaTCik9JW2H7Zjz4MS8UAEUR7tr1fC2trbfZyCkOW1XUFSkq2BgvU%2B%2Bw%2FSddM64%2BZbmDiGoJ0oGUWW9m7LohdzD28ozox%2B9Uu5m7GFPz6tXBCz%2BsQZ9Qmp3B6w6S25il0M7Wm3mSZ76AqZ0xgnzmpDFpGtldR5G2hvnvHJXceZIbTBFuC4BgPtaoc2gKIaP2b3%2B12HWFJ5eJMNwas4Gc0TulYE8EkZrSySOpKB69rAAQOgsrLLO1MFQ%2FsGSY2WGJ8V5BlcC2HqNfED%2FsZknN7uBUMD0z1LJd30L9wGpFMp%2BoQsXVE%2B%2Bm7KSGC%2B8OM7NuJrtvn4mFzrCCVpWkOcP9T%2Fw7ENm17%2BBPXasbW7iQyKIeYH6Aar0GqSdeXfg%2FSoqx%2BW0bbMsjoANQX58WtrJmiEHLMwgJb3vQY6pgE4G6Hs7nq5ZmpwkjZoUfg%2FL6JRJasiHbrq%2B6rrzAHQOficVCDH3vfzGPHlaNSjoDbNPELrcy%2FnHB3RUc%2BwkRkTwO0ooPE6IKpWIIYuIh6QvIgP8MZOf4nPse2Nv4dq7yMPigbSZwpQEgXYCaO063ofWjHU3pqMYT%2Fa%2FQ1b5MH4c5AuzgPhDFUKZ01la%2BGgic7nq49S%2Fl3RoBgrF9yuo6ByX%2BGHx6Qn&X-Amz-Signature=fa6859684b90d303683258e0c6d2636d6ed26f5878032139b971e351d29f018e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TOSGVVK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGyKeez6m64SJ7gsX8nYBMAdSrZGbJLWY%2FlrUhrOtds6AiB04c7YEYbUWdZcOO78O0ov4oReIL%2F1%2BQzfZqGVofO8VCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMegaOTIsNgj4DpaGEKtwDGHWxVJ7dgTfraSDx2amrkWvERlior6A6ly4NWf%2BR7tbMErW14QkZRyJ1ekgi5926aHOCC6B5OsR3b4s217FFPe%2BLltfweCFX5FIn5HcFuSGn15jTcsNh3ta6lCN0zy3J0ImtRSyMwDCQX1wUgeCwkZJ6759DjDGeZekpNAt677uG9ATQJWxDot%2FdCejDA53iP61%2BXUuNR6DHjUyX5XRCfTD2%2F9tFkvUduAUaTCik9JW2H7Zjz4MS8UAEUR7tr1fC2trbfZyCkOW1XUFSkq2BgvU%2B%2Bw%2FSddM64%2BZbmDiGoJ0oGUWW9m7LohdzD28ozox%2B9Uu5m7GFPz6tXBCz%2BsQZ9Qmp3B6w6S25il0M7Wm3mSZ76AqZ0xgnzmpDFpGtldR5G2hvnvHJXceZIbTBFuC4BgPtaoc2gKIaP2b3%2B12HWFJ5eJMNwas4Gc0TulYE8EkZrSySOpKB69rAAQOgsrLLO1MFQ%2FsGSY2WGJ8V5BlcC2HqNfED%2FsZknN7uBUMD0z1LJd30L9wGpFMp%2BoQsXVE%2B%2Bm7KSGC%2B8OM7NuJrtvn4mFzrCCVpWkOcP9T%2Fw7ENm17%2BBPXasbW7iQyKIeYH6Aar0GqSdeXfg%2FSoqx%2BW0bbMsjoANQX58WtrJmiEHLMwgJb3vQY6pgE4G6Hs7nq5ZmpwkjZoUfg%2FL6JRJasiHbrq%2B6rrzAHQOficVCDH3vfzGPHlaNSjoDbNPELrcy%2FnHB3RUc%2BwkRkTwO0ooPE6IKpWIIYuIh6QvIgP8MZOf4nPse2Nv4dq7yMPigbSZwpQEgXYCaO063ofWjHU3pqMYT%2Fa%2FQ1b5MH4c5AuzgPhDFUKZ01la%2BGgic7nq49S%2Fl3RoBgrF9yuo6ByX%2BGHx6Qn&X-Amz-Signature=62e1596f4125dd244fdd57922ed49993ec3d3ef7dd7115f74903646d125260e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
