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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VC2CK43%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FRXhziNQ2PWbzWJoFz2cgh0MdTkHuUNkjJRfGKCW41AIhAJSMkQrBk8jJ0G1zRz2gYeo9BT0ACyUL64cGyQTrFx9AKv8DCFgQABoMNjM3NDIzMTgzODA1IgxewxYZF87fGh1%2Bqvcq3AOdflSWPz%2ForqFyjX09ikxhAMdiXU4yYsZjMbNVmBAs7eNa5yK%2BYF1i%2B8WoDBAemxg54U42Q26JfmydmKt1IiZhuyBq0MMtvdebuIOEJbK3DFSdqPZ48Mct6UTSUNcDtvEpeseCLcjeokmbZ69nLMMh8vcSnnvWNG3A8iYrRJJjDQNBpwcEl6GsPdOctwOX%2BSROlD4djYWZrcMB1Wbc9RREMXZlhTS7PZnd3Q1UnmyG286Qhchh9wNod3dP3Fh3h7Iruew3I2ILIZesPp0PGp2UW6tWWH4I9b9pwntB%2FtZENptwQzKUBAK%2FQKv7QKxhbHuw7BhgeTNd5FQEbqoAi32qCMnyDpn4SxX0DiqBfSpxsIcwbIEGVHUC1sCoyrRrpWRxlzIdIdkIjfO0sRRXDaZDrzWkfjKA4HSyAEJZE2zDkz5KZb%2BfzERfbMTkp5%2FKxSIu7ZdwqSIgyPf6kKLfaX9A0sr5e4khD0eAR63R31CzkKmpa603ZS6bPwlwWFnMX%2FufsPcOo%2FU6z13bAm2YM%2FXjq5OzRKB3FE1O3ItV7zgNDppbt5iu9xZgE2ao%2Bk3RuiWIsI4%2BZitytJ10Z87skOu6IQJFMCW6e0hBdPmUWAChLdH6UXXkXD0AGOmRtjCC682%2FBjqkAT6wNjIlt6WOA8JROmQH23MRo60WU3EF%2BiORQ1Xjz7tsH2AueWEOmLHXUDOEYzWfbpeFNxprgJiprNFnk3GDRhftcipYCfS0CVfe5rfcAVd8kqv3atsaYJuKu%2BHx3u6TyZxrVDgf5UxmTyKQgCqdbanFP1%2Bz5ZhxuSjjvX2StKTrdm9PntWs7luC%2F5W5xw0oSVhLMzB9wHsSaHl%2FsEUnDT6v9%2Bia&X-Amz-Signature=4f9532b2919fce2d022e9982727fd280e7cfd356fd889f9d18e26739820f1a12&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VC2CK43%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FRXhziNQ2PWbzWJoFz2cgh0MdTkHuUNkjJRfGKCW41AIhAJSMkQrBk8jJ0G1zRz2gYeo9BT0ACyUL64cGyQTrFx9AKv8DCFgQABoMNjM3NDIzMTgzODA1IgxewxYZF87fGh1%2Bqvcq3AOdflSWPz%2ForqFyjX09ikxhAMdiXU4yYsZjMbNVmBAs7eNa5yK%2BYF1i%2B8WoDBAemxg54U42Q26JfmydmKt1IiZhuyBq0MMtvdebuIOEJbK3DFSdqPZ48Mct6UTSUNcDtvEpeseCLcjeokmbZ69nLMMh8vcSnnvWNG3A8iYrRJJjDQNBpwcEl6GsPdOctwOX%2BSROlD4djYWZrcMB1Wbc9RREMXZlhTS7PZnd3Q1UnmyG286Qhchh9wNod3dP3Fh3h7Iruew3I2ILIZesPp0PGp2UW6tWWH4I9b9pwntB%2FtZENptwQzKUBAK%2FQKv7QKxhbHuw7BhgeTNd5FQEbqoAi32qCMnyDpn4SxX0DiqBfSpxsIcwbIEGVHUC1sCoyrRrpWRxlzIdIdkIjfO0sRRXDaZDrzWkfjKA4HSyAEJZE2zDkz5KZb%2BfzERfbMTkp5%2FKxSIu7ZdwqSIgyPf6kKLfaX9A0sr5e4khD0eAR63R31CzkKmpa603ZS6bPwlwWFnMX%2FufsPcOo%2FU6z13bAm2YM%2FXjq5OzRKB3FE1O3ItV7zgNDppbt5iu9xZgE2ao%2Bk3RuiWIsI4%2BZitytJ10Z87skOu6IQJFMCW6e0hBdPmUWAChLdH6UXXkXD0AGOmRtjCC682%2FBjqkAT6wNjIlt6WOA8JROmQH23MRo60WU3EF%2BiORQ1Xjz7tsH2AueWEOmLHXUDOEYzWfbpeFNxprgJiprNFnk3GDRhftcipYCfS0CVfe5rfcAVd8kqv3atsaYJuKu%2BHx3u6TyZxrVDgf5UxmTyKQgCqdbanFP1%2Bz5ZhxuSjjvX2StKTrdm9PntWs7luC%2F5W5xw0oSVhLMzB9wHsSaHl%2FsEUnDT6v9%2Bia&X-Amz-Signature=0918474b5f2ac1beacffabc59656dcf18da168bf054292b949884bab48a843e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
