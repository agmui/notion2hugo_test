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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRNKMDEV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb4JF1sy%2FETfhul9pgin3fCCG1hsZP9m2qxcmPCt3p7AIgTdDXymwZzAZ0VShLquMjUhX5XEQpG3lwGlblViOJ2i4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvuEGXNeG1vdM60kSrcA89fmvPzw9hU2FJCV3Mvax%2BGeeRqYTw9mBGxhJLz89w6ciP98YMrIQnAQ2%2Fex6Yn5me6PeZqC%2BiHw2eX7jrTXFiK7c%2F9jsMs%2F%2BulE9wutVAzet2%2BIxzLSo%2Bq7Hp39BdhrEz%2FqnIT8CJoEMRqhT5H4va%2F159meAMzekgzGqRonruoU5vugOkvL%2BgVdCsqCqurAqSkYQRfhjxKfSiZ%2Flt056LXSP5uQVSFiBNU8zo3P0xSdchjnWpGPUbzPym6mjQ9sn2hO9KMcblyQvzxUqMGI8a53%2FFhUTCce%2Bc%2BPj3X7oHr6COmZtR%2BAJRFKIIM2nb4bxxKJIdUWb4EwEJRPm9oxYb1C1eHI2BIaF%2BBBT96U4EY0RvUlZ%2FuCOWZlcgX9bZwVuQj%2BZnNEQE2tGuVhkAYNuJWbWPFGT4Y9Ypc944Tp0PqJNr2tM02FiCcLiNd9m8GIrmGek0GHBUJ9Q5VkZa3xSnD44ot7s3gOS8FpcSKHw1f9iDh4V79M5Ae5YhGEIox2%2BBQTy%2Bnqnj7kz6fVLTYr2h%2BWrSDLkSyA0AkS0S9HsrBAIRQk6xgjKn1PPRitnKt1CicMYb3aQPBh4dWgMIS5Ci8qPktRQdigbM809VK3PJvXgW8ELFS3I1ceCd9MPKiqMQGOqUBQ%2BnskJ5CCrtK9Ay8d5POGdLQ0Ip8dDpbNWYzSZICTHvaz49AUq%2B4AZ4imbE4p2%2Bf7uGUZ3s5vohoibNcGSwadX7RQkwBXLKIpSyGm7Jum7JMzKNzKINy9glAvV90Y4%2BkB7BkCqAfjGR6Qe3Lz0gs76wNaE99J34DBqg0yPLz7LFbxjVPPlqvYIbLgrohFdJUuZyHK%2FEI8H93EmGrkFu0lhLADEhX&X-Amz-Signature=56f7f25555ca247bcf85660578b8ea00722cebfe5f7f507fb18c82bf1d98217e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRNKMDEV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb4JF1sy%2FETfhul9pgin3fCCG1hsZP9m2qxcmPCt3p7AIgTdDXymwZzAZ0VShLquMjUhX5XEQpG3lwGlblViOJ2i4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvuEGXNeG1vdM60kSrcA89fmvPzw9hU2FJCV3Mvax%2BGeeRqYTw9mBGxhJLz89w6ciP98YMrIQnAQ2%2Fex6Yn5me6PeZqC%2BiHw2eX7jrTXFiK7c%2F9jsMs%2F%2BulE9wutVAzet2%2BIxzLSo%2Bq7Hp39BdhrEz%2FqnIT8CJoEMRqhT5H4va%2F159meAMzekgzGqRonruoU5vugOkvL%2BgVdCsqCqurAqSkYQRfhjxKfSiZ%2Flt056LXSP5uQVSFiBNU8zo3P0xSdchjnWpGPUbzPym6mjQ9sn2hO9KMcblyQvzxUqMGI8a53%2FFhUTCce%2Bc%2BPj3X7oHr6COmZtR%2BAJRFKIIM2nb4bxxKJIdUWb4EwEJRPm9oxYb1C1eHI2BIaF%2BBBT96U4EY0RvUlZ%2FuCOWZlcgX9bZwVuQj%2BZnNEQE2tGuVhkAYNuJWbWPFGT4Y9Ypc944Tp0PqJNr2tM02FiCcLiNd9m8GIrmGek0GHBUJ9Q5VkZa3xSnD44ot7s3gOS8FpcSKHw1f9iDh4V79M5Ae5YhGEIox2%2BBQTy%2Bnqnj7kz6fVLTYr2h%2BWrSDLkSyA0AkS0S9HsrBAIRQk6xgjKn1PPRitnKt1CicMYb3aQPBh4dWgMIS5Ci8qPktRQdigbM809VK3PJvXgW8ELFS3I1ceCd9MPKiqMQGOqUBQ%2BnskJ5CCrtK9Ay8d5POGdLQ0Ip8dDpbNWYzSZICTHvaz49AUq%2B4AZ4imbE4p2%2Bf7uGUZ3s5vohoibNcGSwadX7RQkwBXLKIpSyGm7Jum7JMzKNzKINy9glAvV90Y4%2BkB7BkCqAfjGR6Qe3Lz0gs76wNaE99J34DBqg0yPLz7LFbxjVPPlqvYIbLgrohFdJUuZyHK%2FEI8H93EmGrkFu0lhLADEhX&X-Amz-Signature=3fa8bc05134d422b5684f9b63758c5c7f03ae3d7fbcf244ba4651cfa26fdec3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
