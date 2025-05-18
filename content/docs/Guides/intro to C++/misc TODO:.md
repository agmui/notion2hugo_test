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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RCVU5AE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRD9a2m7fsTk12C2snex8l8%2Bg%2FO10nhxI5UuXhotKCcAiEAzlUfnhlFelrBZKhthq6quU4E6P35Le4Ft0MTiw7MNZ4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGV%2FtLrd48YHSnG1lircA%2FsULuLNXlEAMV%2BXFx6IzqKxGdOj%2B7Y1z0K82WQ%2BspYHHvYHtyC%2B9UFj3hfwuTQZ1J8OkDgJBx%2FNkJvyRLf5NL95bbrK6ABIg4gDchWN4r5cfkNJpjKwK1DADCyS7jSM6LbJpckUSfviWImHr9bVNl5iTaamgGRnQLvMuVUbvxxbkdQV4m6JxG0nwh1u1fWoscZc7EeIfXS4SGYxqK9RurB8n5ElLl5%2BMA8a%2Bd5jJKHVKPeCth1bHT4qBvegKN5jYSQHGuDlUQWglw3eShKDXXzeVTQVyJ%2Fe37H9eKGQs1SWBUS4aqrClozQ%2BlFhIPPLPW6askXQBEumadxT0mBMYA5ysvNu02wQlI%2BR1OSMHy%2BptQlx3o8wta6CisVOJGQ%2FEGVgXMUvejVi5IurtkG8V12Das5U3HGBXiLFOuY2vsWmeZljSYuDArnfXD%2B4czMF5qUtK00M9PlLE3JYnDLZhNTChEN8%2B7R8qwr65HAjpCdOwPKN3SvZ8MzSY%2FF9SqRCvzW1qJvM2wlxd2owd7E0Liwc1P09cpQ63kVLIv5hkPeob%2BxxnnlOvctapkDn08f4WVuoG3CdgNA2uG4B%2FGUuUJIBNPZywxn0gxTQTIKxJiQchHIPkPy82b7w7zChMLrmp8EGOqUB5fzTh30ObiUHWEedm8kUzvNwihegkS5TCqlk1i%2FDMeNWTT9idvjX5zGrBdCW8WgIBh269I2pMWV5vhqyaSQcZLVajsrkbabeWU%2B3SJOfMKCmSjWEVu5x50adoBQ8%2BSQtK1yfiwgPxjyNhymvJlZq7Cs%2BfmJwOk57rFJnM%2FhFUVTn%2F4Tal83dtqKylKXRb4o6FxdWT%2FAMmRA2IXlw5vlufdsMprDQ&X-Amz-Signature=720926287607b469aa278f4a2007355b232ffe0f16daba8018a5da3bfa3dd6da&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RCVU5AE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRD9a2m7fsTk12C2snex8l8%2Bg%2FO10nhxI5UuXhotKCcAiEAzlUfnhlFelrBZKhthq6quU4E6P35Le4Ft0MTiw7MNZ4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGV%2FtLrd48YHSnG1lircA%2FsULuLNXlEAMV%2BXFx6IzqKxGdOj%2B7Y1z0K82WQ%2BspYHHvYHtyC%2B9UFj3hfwuTQZ1J8OkDgJBx%2FNkJvyRLf5NL95bbrK6ABIg4gDchWN4r5cfkNJpjKwK1DADCyS7jSM6LbJpckUSfviWImHr9bVNl5iTaamgGRnQLvMuVUbvxxbkdQV4m6JxG0nwh1u1fWoscZc7EeIfXS4SGYxqK9RurB8n5ElLl5%2BMA8a%2Bd5jJKHVKPeCth1bHT4qBvegKN5jYSQHGuDlUQWglw3eShKDXXzeVTQVyJ%2Fe37H9eKGQs1SWBUS4aqrClozQ%2BlFhIPPLPW6askXQBEumadxT0mBMYA5ysvNu02wQlI%2BR1OSMHy%2BptQlx3o8wta6CisVOJGQ%2FEGVgXMUvejVi5IurtkG8V12Das5U3HGBXiLFOuY2vsWmeZljSYuDArnfXD%2B4czMF5qUtK00M9PlLE3JYnDLZhNTChEN8%2B7R8qwr65HAjpCdOwPKN3SvZ8MzSY%2FF9SqRCvzW1qJvM2wlxd2owd7E0Liwc1P09cpQ63kVLIv5hkPeob%2BxxnnlOvctapkDn08f4WVuoG3CdgNA2uG4B%2FGUuUJIBNPZywxn0gxTQTIKxJiQchHIPkPy82b7w7zChMLrmp8EGOqUB5fzTh30ObiUHWEedm8kUzvNwihegkS5TCqlk1i%2FDMeNWTT9idvjX5zGrBdCW8WgIBh269I2pMWV5vhqyaSQcZLVajsrkbabeWU%2B3SJOfMKCmSjWEVu5x50adoBQ8%2BSQtK1yfiwgPxjyNhymvJlZq7Cs%2BfmJwOk57rFJnM%2FhFUVTn%2F4Tal83dtqKylKXRb4o6FxdWT%2FAMmRA2IXlw5vlufdsMprDQ&X-Amz-Signature=583a81b964c5390538f8867468fcf9efc82bb06e42a8a78fd1e0520297386d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
