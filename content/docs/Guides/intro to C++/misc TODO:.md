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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMAH2NUR%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2N6kWHkk93S2gcrgGozCgeOvg15egQfd73wiXUc4GmgIhAN5Pn3Yyznm8Jh2xH4qiN8t7GyEzO0CAc2%2FgBcipiIKsKv8DCDgQABoMNjM3NDIzMTgzODA1Igxc2Fo42qa%2BVvlxZ6Qq3ANjMZnkRHu%2Bx3u5qrQ3NsbydhikzMV0UyA31fSzcZFt%2FXB%2B7pSY97XXxeu8bFWvODQhYlJs1ZI%2FbMbY3C6AeEkTCobUsk1DkdXPmlNDYST4OEHBWnfU1oYtllDlCjuSbiwq6GxF5Onr54gGUBw8LIO2M1oUluaD%2BVvofujettvtLVqJXkK0dbgvlFOn5C2q3e1btx%2FFVmO2nM7Fi4oqTPUEg5rAkFmGcSdDaMBB0zPCA6r4%2FGjz9AX7fIyqjlL3aDROaHjOz6KVMNH4SQs7xfBMg2TOveIpAfAfZcQaQMo8rBEuPXV%2B8A%2Fzz%2FndcDYaEBwIoUXTWxawZ%2Bg67k%2BFj87LHH8vAqkKPjO1uZT%2FEdSxgZtySybR3voDyCQZus4T8gHjLHdjsjNR77VXOLrOwnuwr6LD8YWi8rzao8mJ2M7y5lFWCR6YgaJknNBUBMmDRT9X%2FrRLEjWvMbM9tF6F%2Bn%2F7tbdIDa4oHYcR2EZEAfYa%2F5ABTzFK7UGFwTD5ArRNs%2B3d28q2pTzPP9539GN5DjTO%2BjjciXqYvEyTfm0%2FkZGoZkFKgxLXXMZkucfBByWddD8GS28U9UHr6Yc4bfdz0kadxh6IYuPFRPywRWXxpZIgNuxkiCd2lzrlF1INXzDKyai%2BBjqkAe%2FYXhMM951FDjDqPj40ZBP8AhwjoZNO62pOa%2B%2FXFcoQ7NvcHoHUjDvxCyIkFeShxjbslZ1wAn%2BefkY4sLGS8dFjrybKx0hyvooVdCm12txqiXVyA4eEYOSjJbe%2FKtUfrJXPScergVUvV3lMBK%2BDgWQX42Y%2BZz8jLtbPsGtovQLhnzgIhqNtQhqnWhFjbC5OoMAEP2pWvKAgTSzGPQQCVbQ8UlAB&X-Amz-Signature=54499eeab2ec1ee59627e89f6a9cd1deb2e5a1ee44835d8c4ae0d6878a4308a1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMAH2NUR%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2N6kWHkk93S2gcrgGozCgeOvg15egQfd73wiXUc4GmgIhAN5Pn3Yyznm8Jh2xH4qiN8t7GyEzO0CAc2%2FgBcipiIKsKv8DCDgQABoMNjM3NDIzMTgzODA1Igxc2Fo42qa%2BVvlxZ6Qq3ANjMZnkRHu%2Bx3u5qrQ3NsbydhikzMV0UyA31fSzcZFt%2FXB%2B7pSY97XXxeu8bFWvODQhYlJs1ZI%2FbMbY3C6AeEkTCobUsk1DkdXPmlNDYST4OEHBWnfU1oYtllDlCjuSbiwq6GxF5Onr54gGUBw8LIO2M1oUluaD%2BVvofujettvtLVqJXkK0dbgvlFOn5C2q3e1btx%2FFVmO2nM7Fi4oqTPUEg5rAkFmGcSdDaMBB0zPCA6r4%2FGjz9AX7fIyqjlL3aDROaHjOz6KVMNH4SQs7xfBMg2TOveIpAfAfZcQaQMo8rBEuPXV%2B8A%2Fzz%2FndcDYaEBwIoUXTWxawZ%2Bg67k%2BFj87LHH8vAqkKPjO1uZT%2FEdSxgZtySybR3voDyCQZus4T8gHjLHdjsjNR77VXOLrOwnuwr6LD8YWi8rzao8mJ2M7y5lFWCR6YgaJknNBUBMmDRT9X%2FrRLEjWvMbM9tF6F%2Bn%2F7tbdIDa4oHYcR2EZEAfYa%2F5ABTzFK7UGFwTD5ArRNs%2B3d28q2pTzPP9539GN5DjTO%2BjjciXqYvEyTfm0%2FkZGoZkFKgxLXXMZkucfBByWddD8GS28U9UHr6Yc4bfdz0kadxh6IYuPFRPywRWXxpZIgNuxkiCd2lzrlF1INXzDKyai%2BBjqkAe%2FYXhMM951FDjDqPj40ZBP8AhwjoZNO62pOa%2B%2FXFcoQ7NvcHoHUjDvxCyIkFeShxjbslZ1wAn%2BefkY4sLGS8dFjrybKx0hyvooVdCm12txqiXVyA4eEYOSjJbe%2FKtUfrJXPScergVUvV3lMBK%2BDgWQX42Y%2BZz8jLtbPsGtovQLhnzgIhqNtQhqnWhFjbC5OoMAEP2pWvKAgTSzGPQQCVbQ8UlAB&X-Amz-Signature=a8c802a815d5f948bc2b76d3df564040d10bb7eac66607d57d8f71cfc06e5fca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
