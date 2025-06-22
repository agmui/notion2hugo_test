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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGF2GWB4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIG%2FNTNQc5BXC19DPmv%2FGu0XqN%2BGgr%2FXLeSxG35ZqezYtAiByeEONrlabrn1PfNnTvcO6%2BgUt0dlos6vRrGcoKFolGSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK700iAHmy2olGzy4KtwDQIAxtSfp0R1VR11ARJlAkSLDtNIF0LcFLrxzrI429KuzxziOpdSypYaW0KkkYVF5m9ftcWdhKJKG7M%2Fy3RZrlTOtCf0udlEIl1wkoOD8v%2F5VdDQ%2Bbcp6qmpozOJhw%2FNlacsLrVdHSoaCOvUbpqljS41IY%2FXGq8aA7smr12ZuzlKuyVip1B0O70V%2BjW5zoPP5kBA%2BtwdH2LUwR%2Fb5pkZdrBCTYoU19Gghx%2Fz4hf74R2jWUf5I5APZUq8AB6ZMV8jCqv%2FxPgkbUUkEFg1rJPINGghnAVVyDfeC5VLp4Ly1Aj4TC98SNmEB0ERaiJfM91EEz2VnkFzRL1CjTjAiFKDYbk8f2JpHwKOseJBwWF0cYktqbkseaJ77wKw9NCchyowoznUlInNVJLgc4HJnSimQB%2BTdfP862tO9RsxZgQKRZ1%2BVV6P4mdXqj9fQaO21uvEMLmus4nqFFbZfKxqZeTSUG3iRxwvkpxDDpETdvDDHO2EwXAIOdQ7%2Fi9AMFVDA%2BCv5fHyOwVW0X5596uvsT6SOb%2FOYYvn6IoMfEctowteg7xSj%2F53kZ3snqwyjFTA22ApkiuqpxU7jXuBw9SJCWEujpsn7bfMUfUCurQQNdTjHn9pofPI1S%2BRO6fCom0Uw5s%2FfwgY6pgE%2FnRW0rI5ZM7vH9EbgA5sUPtl3RvGS3%2Bd88KxfB3snXGpXmuZCGEu3tTfhk2Y8Yhml7cc1wUt8EsiffbGZ1UGlLc1J150OgHirL2lsrDsERZj7GpHGg6SkAv%2BQFv7T4WYMpY8%2BfpZJAXFhmCXdYg6Lv0%2Bq4etrRXFyynzZHgJrB6fqiuMmFkga2hRs2%2Be6g%2BWIa%2BCp5qPvtfCCCzLDjCbOYj%2BhUWmS&X-Amz-Signature=fca80c9850fcd8f29e7c9d62c098dad68a2980804c02608084ede36a56b95b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGF2GWB4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIG%2FNTNQc5BXC19DPmv%2FGu0XqN%2BGgr%2FXLeSxG35ZqezYtAiByeEONrlabrn1PfNnTvcO6%2BgUt0dlos6vRrGcoKFolGSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK700iAHmy2olGzy4KtwDQIAxtSfp0R1VR11ARJlAkSLDtNIF0LcFLrxzrI429KuzxziOpdSypYaW0KkkYVF5m9ftcWdhKJKG7M%2Fy3RZrlTOtCf0udlEIl1wkoOD8v%2F5VdDQ%2Bbcp6qmpozOJhw%2FNlacsLrVdHSoaCOvUbpqljS41IY%2FXGq8aA7smr12ZuzlKuyVip1B0O70V%2BjW5zoPP5kBA%2BtwdH2LUwR%2Fb5pkZdrBCTYoU19Gghx%2Fz4hf74R2jWUf5I5APZUq8AB6ZMV8jCqv%2FxPgkbUUkEFg1rJPINGghnAVVyDfeC5VLp4Ly1Aj4TC98SNmEB0ERaiJfM91EEz2VnkFzRL1CjTjAiFKDYbk8f2JpHwKOseJBwWF0cYktqbkseaJ77wKw9NCchyowoznUlInNVJLgc4HJnSimQB%2BTdfP862tO9RsxZgQKRZ1%2BVV6P4mdXqj9fQaO21uvEMLmus4nqFFbZfKxqZeTSUG3iRxwvkpxDDpETdvDDHO2EwXAIOdQ7%2Fi9AMFVDA%2BCv5fHyOwVW0X5596uvsT6SOb%2FOYYvn6IoMfEctowteg7xSj%2F53kZ3snqwyjFTA22ApkiuqpxU7jXuBw9SJCWEujpsn7bfMUfUCurQQNdTjHn9pofPI1S%2BRO6fCom0Uw5s%2FfwgY6pgE%2FnRW0rI5ZM7vH9EbgA5sUPtl3RvGS3%2Bd88KxfB3snXGpXmuZCGEu3tTfhk2Y8Yhml7cc1wUt8EsiffbGZ1UGlLc1J150OgHirL2lsrDsERZj7GpHGg6SkAv%2BQFv7T4WYMpY8%2BfpZJAXFhmCXdYg6Lv0%2Bq4etrRXFyynzZHgJrB6fqiuMmFkga2hRs2%2Be6g%2BWIa%2BCp5qPvtfCCCzLDjCbOYj%2BhUWmS&X-Amz-Signature=ee03f9f0a632314394945040444f2aefbf0707e8ec90d10c854433200f0f313c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
