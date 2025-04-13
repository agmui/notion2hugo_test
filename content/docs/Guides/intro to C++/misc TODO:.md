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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6DQUHPQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDl4x%2FM2%2FXAYnryoeWfppMtxzDjGIoKmFcS3DJiNnDwgQIhAMFZ3WIqINxJnCUiNyZrxTRN14RYYeA8hPofyH9THLgkKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8nFqEVHZ0nptVtB0q3AP5bIwR7y7XGpG7r%2BiyBRwP84wz2RlsnAhjHbEQMypmHjJgwD7z6p5FK3eYTIrsr30aJWgXythDrJCY%2Bftpr8y3F%2FJASISzBydgHRNpWKqylxmhm37OVd86h5xrfBz%2FdpyZIwwvXi%2FEGPC9D5hqWg%2F0%2BBIl%2BLpf6flHAJrLZDb%2FPkz95kqq0P1D8HzszIotHroX7YntRx%2FEJtY6yiMNckjCWGITdZQip2y0c7yHo5xqWQU%2F%2FWV7k%2FvbzERRKrMvJHiRB%2FzVaa4v%2BVWQF2N4ziBdPMLCAntrmUhTWVrFNHmNZQSij4q80erJL2x2rZ%2BWSf1dR%2F2jKKqYmeRTUJjFSouPNC8D80AJbif8mEMsyj8dkOyIlivJL625S5x2U12PGid3qn%2F%2B3%2B9xQGD8IaaOmhI9jAyqcgdn890rN5wsUpsR0cB%2B8HIIEG2%2BGcurl8Ax%2Fcpv9IEgymjx5dQYez5vBzlHHljLsLOku%2BpvFIttAvBrflkhW1k%2Bg3pvuitDs4PD8y6%2FcnEdxFXGvc6itBOMxCSxDAw8Qqu2Vs5j4y0uscUduFCEUkVsWebX3Lyc4wRTL%2Bxvbo0nQJxGPIKEZUPlpfRRgTsJ4yeTWD2ANZsx5ALx1hGlmhKyymZhHe6sFDDTve6%2FBjqkAaYFP8mMMSaapdfiyfXWKaL6VgCvDXkR05hvesGTSfCpL0abOd%2FAjuBSkBKAqNKcFSWQvh2to3NLkkd1yhLZzDD49Cqrs4H1Jw6OvH4U0eH8%2ByZVOP8YBTyF7ZJVw05WncV97z%2Fm2PqZNYSmpfdqzSorMXiUlbhYKisPGVmmm%2ByS0KApSexBPjQ5BtPCQhlrTpXLGLF6I6cnHbYFbLt%2Ba26ac10X&X-Amz-Signature=45cf32deee7eacd217b27a09fa4696b15998883c63de52002edce4235af6e6d3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6DQUHPQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDl4x%2FM2%2FXAYnryoeWfppMtxzDjGIoKmFcS3DJiNnDwgQIhAMFZ3WIqINxJnCUiNyZrxTRN14RYYeA8hPofyH9THLgkKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8nFqEVHZ0nptVtB0q3AP5bIwR7y7XGpG7r%2BiyBRwP84wz2RlsnAhjHbEQMypmHjJgwD7z6p5FK3eYTIrsr30aJWgXythDrJCY%2Bftpr8y3F%2FJASISzBydgHRNpWKqylxmhm37OVd86h5xrfBz%2FdpyZIwwvXi%2FEGPC9D5hqWg%2F0%2BBIl%2BLpf6flHAJrLZDb%2FPkz95kqq0P1D8HzszIotHroX7YntRx%2FEJtY6yiMNckjCWGITdZQip2y0c7yHo5xqWQU%2F%2FWV7k%2FvbzERRKrMvJHiRB%2FzVaa4v%2BVWQF2N4ziBdPMLCAntrmUhTWVrFNHmNZQSij4q80erJL2x2rZ%2BWSf1dR%2F2jKKqYmeRTUJjFSouPNC8D80AJbif8mEMsyj8dkOyIlivJL625S5x2U12PGid3qn%2F%2B3%2B9xQGD8IaaOmhI9jAyqcgdn890rN5wsUpsR0cB%2B8HIIEG2%2BGcurl8Ax%2Fcpv9IEgymjx5dQYez5vBzlHHljLsLOku%2BpvFIttAvBrflkhW1k%2Bg3pvuitDs4PD8y6%2FcnEdxFXGvc6itBOMxCSxDAw8Qqu2Vs5j4y0uscUduFCEUkVsWebX3Lyc4wRTL%2Bxvbo0nQJxGPIKEZUPlpfRRgTsJ4yeTWD2ANZsx5ALx1hGlmhKyymZhHe6sFDDTve6%2FBjqkAaYFP8mMMSaapdfiyfXWKaL6VgCvDXkR05hvesGTSfCpL0abOd%2FAjuBSkBKAqNKcFSWQvh2to3NLkkd1yhLZzDD49Cqrs4H1Jw6OvH4U0eH8%2ByZVOP8YBTyF7ZJVw05WncV97z%2Fm2PqZNYSmpfdqzSorMXiUlbhYKisPGVmmm%2ByS0KApSexBPjQ5BtPCQhlrTpXLGLF6I6cnHbYFbLt%2Ba26ac10X&X-Amz-Signature=a1218477bb04a312d4156e95d41d962f12b5d6b43932789bf81b6f2a8e6594e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
