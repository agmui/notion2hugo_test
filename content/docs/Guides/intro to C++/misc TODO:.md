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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHVD246Y%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8Qmv6GDxgnR6RKpMXlTeiApOQHBZC4DETl%2FFvTedfMAiBnVRa2x8TRwG9167Jb9qiZDfp7T0h%2BULuPQ6Rd5KNVXiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5il%2FCWpgXPjwgx2BKtwD9FT1s2gnI2hgT9aQBaC2RKj7%2FryI3htIqILK7ZUfJTTrev0VGZR5Zex07ExwN2DOFMrewaSHF2SoGSCsjuNilYYTKkabbXeja6o214UF1sOODcDlz55eeGqNf6QoBuCkRywhRvk8xBv4hQEbXP8KpUgkc0SabOxIz25%2FVk2UEu2FvC1glxzKEROATNyuVi2Fxns5Rgw5amP6h22ZjSqSoKzSytCxVuwXZBdPygPB75c%2FmweQknNEi6wKtmCI10XdWq3PBZh%2F2OwLIBX1IiPRIAkGYb0rjrDKqQIYz08Jk%2F1W66WQXtO2vPFLmr4Fd8PpGIX2PUAz0u0dW2seF62eqEa%2Be6OA2u59MiTd7PVqSaMx4SrSQ%2F4FkRKPmF6ZCbX4gLtHGhhUfXxFCs6mKb2oauzQYyjjr5KJtjsWTgGE5aAjvkTz4l0YQN4Inhbn9Q4bXrB35u81zbJDL6bIL%2FinbhplIdnD9vWOpfBETxI%2BJ0ZjnLUO40cdgE8sVpepWtcXp936H1ZNJvwWWdnjnfKfKrCeBSkHAToUAzdPF3aoogh8AQV4%2Fv5Vv9aNpcC%2B02w6JyuWnuVs89QzLWOEzR67BdRZcz5ty%2F%2FtHoJsNaSrzSqXePxPgUmnfLFptfswgdfpvQY6pgFqXeh4WTmnEFyNDFvNZTbCKT6P%2F0tsazKpXq81mMhJaXHicRHrpHY9BOBMVIXkzmLkYY8fkziuhJ338ldZPy1vXvM5HCThyVhn%2BraMrnqWDkEr2JskGYuAl%2BUFbMxNV4vUVhiHDZKNo%2BlzvuxT3Oumn2fZz1uocGArnrjUgmBzhRW9I5BFNZUvW6nWpot64pcESh4waY59klCL%2BFwtT3K4qjnotVyC&X-Amz-Signature=52a02d39c03003d7f0bc2a52ece62683d00e6452d1a9ea90a3db9b8fb8d12991&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHVD246Y%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8Qmv6GDxgnR6RKpMXlTeiApOQHBZC4DETl%2FFvTedfMAiBnVRa2x8TRwG9167Jb9qiZDfp7T0h%2BULuPQ6Rd5KNVXiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5il%2FCWpgXPjwgx2BKtwD9FT1s2gnI2hgT9aQBaC2RKj7%2FryI3htIqILK7ZUfJTTrev0VGZR5Zex07ExwN2DOFMrewaSHF2SoGSCsjuNilYYTKkabbXeja6o214UF1sOODcDlz55eeGqNf6QoBuCkRywhRvk8xBv4hQEbXP8KpUgkc0SabOxIz25%2FVk2UEu2FvC1glxzKEROATNyuVi2Fxns5Rgw5amP6h22ZjSqSoKzSytCxVuwXZBdPygPB75c%2FmweQknNEi6wKtmCI10XdWq3PBZh%2F2OwLIBX1IiPRIAkGYb0rjrDKqQIYz08Jk%2F1W66WQXtO2vPFLmr4Fd8PpGIX2PUAz0u0dW2seF62eqEa%2Be6OA2u59MiTd7PVqSaMx4SrSQ%2F4FkRKPmF6ZCbX4gLtHGhhUfXxFCs6mKb2oauzQYyjjr5KJtjsWTgGE5aAjvkTz4l0YQN4Inhbn9Q4bXrB35u81zbJDL6bIL%2FinbhplIdnD9vWOpfBETxI%2BJ0ZjnLUO40cdgE8sVpepWtcXp936H1ZNJvwWWdnjnfKfKrCeBSkHAToUAzdPF3aoogh8AQV4%2Fv5Vv9aNpcC%2B02w6JyuWnuVs89QzLWOEzR67BdRZcz5ty%2F%2FtHoJsNaSrzSqXePxPgUmnfLFptfswgdfpvQY6pgFqXeh4WTmnEFyNDFvNZTbCKT6P%2F0tsazKpXq81mMhJaXHicRHrpHY9BOBMVIXkzmLkYY8fkziuhJ338ldZPy1vXvM5HCThyVhn%2BraMrnqWDkEr2JskGYuAl%2BUFbMxNV4vUVhiHDZKNo%2BlzvuxT3Oumn2fZz1uocGArnrjUgmBzhRW9I5BFNZUvW6nWpot64pcESh4waY59klCL%2BFwtT3K4qjnotVyC&X-Amz-Signature=a51fbee3af1d4191507860f421a3570f619661efb80bef743daf1f9ea96dd4b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
