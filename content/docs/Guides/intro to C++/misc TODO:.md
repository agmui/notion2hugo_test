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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKUR6PJ5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEixAHWpUgOh93KOgzsQAv5ms%2FMclKddKWNXx1Gw9rMvAiEAzR3jGPJ8HWmNdKBORpce3zv9s%2B1nMgrq8aA82AwmyTsqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNru1IN6ereBBuH01SrcA%2FMuJyvVKHVetf6NC1neOHzDcLJNXL6VSRlu05jDNU5YVupUaPm0oTF2W8im4sNdkpXLOLEzALxtETrAQ4Xdj2%2FMcEgDhIdPjlti%2F4QXl1lxQQa9Ytw%2FLJ%2Bs03omrMJz8Lb58KD2xhxEPfBlhxxq%2BvRpV4%2B4fA4JGENMBZlxXe%2FKZFhVbrbqgycaLQ8Mfbv8DY0cX%2BuwM6%2FcMJDvf9YN%2Fbr32HrnuBaq%2BMN7c3HckUMCPBOY5hW4TWDtWZuExKQ19m95u0sqRVAxmWqWjxJw08lTlPyGwuYZKL90IBLWfW853NT%2BCX%2BXqNB7ExHVTn%2FCoND40SVsb0XjL3fUKBux8NvlNN8XmrDMde4DI0lHP4mCbF%2F2C0PSEs3mKcpi0fESE3VbDpZ2aEQ4U2GreHKkip5Ueh8ji1GOxkly56qhQIxLSyl29uhOu%2BTmDu%2BuHJhthY1Q5N4S0K%2FqTuEWIjHfN4Fr43Nqjwov6NxPZKDPmy%2BJS4%2BXWQAe6taVLesO1V9Mi6rHX5FdhszncPgNz7nOwLocD2cMKmmZy2%2BDirSNemH%2BqZNsfjwRQU0VAK4Lb2F8vafhKnlxOq9tfv%2BVaogRoyXPiB55ShR7v09ACZUFt2pWn0lVR5%2By1UwLBKK4MM%2BhtMQGOqUBtQ%2FAjHc3puw54rd6F4xDMxm%2F9t3Eh1kueR6%2Bl%2F5%2BHKVTwsPvF4XEC%2Bs0D1cSCubB5roqZ2I6yR0j%2BgtBSHPeUY7nh8ly%2ByNsl8FYMjpZnKd%2Fxhr8LuDJx2G3egWldm487rZy5oL8Op2l78PQfV7EYsrnmSEzqNYK%2B8n7Z6VfEHoHaiaT9tJJ7ohXE1OuEsfhbRCUMNva84EWiUfTM6xpypNaUxWu&X-Amz-Signature=ca95958a9ebc0c9ee8e8a8c52a72ed64c57006bb3c8dc8902a4db91724d32d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKUR6PJ5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEixAHWpUgOh93KOgzsQAv5ms%2FMclKddKWNXx1Gw9rMvAiEAzR3jGPJ8HWmNdKBORpce3zv9s%2B1nMgrq8aA82AwmyTsqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNru1IN6ereBBuH01SrcA%2FMuJyvVKHVetf6NC1neOHzDcLJNXL6VSRlu05jDNU5YVupUaPm0oTF2W8im4sNdkpXLOLEzALxtETrAQ4Xdj2%2FMcEgDhIdPjlti%2F4QXl1lxQQa9Ytw%2FLJ%2Bs03omrMJz8Lb58KD2xhxEPfBlhxxq%2BvRpV4%2B4fA4JGENMBZlxXe%2FKZFhVbrbqgycaLQ8Mfbv8DY0cX%2BuwM6%2FcMJDvf9YN%2Fbr32HrnuBaq%2BMN7c3HckUMCPBOY5hW4TWDtWZuExKQ19m95u0sqRVAxmWqWjxJw08lTlPyGwuYZKL90IBLWfW853NT%2BCX%2BXqNB7ExHVTn%2FCoND40SVsb0XjL3fUKBux8NvlNN8XmrDMde4DI0lHP4mCbF%2F2C0PSEs3mKcpi0fESE3VbDpZ2aEQ4U2GreHKkip5Ueh8ji1GOxkly56qhQIxLSyl29uhOu%2BTmDu%2BuHJhthY1Q5N4S0K%2FqTuEWIjHfN4Fr43Nqjwov6NxPZKDPmy%2BJS4%2BXWQAe6taVLesO1V9Mi6rHX5FdhszncPgNz7nOwLocD2cMKmmZy2%2BDirSNemH%2BqZNsfjwRQU0VAK4Lb2F8vafhKnlxOq9tfv%2BVaogRoyXPiB55ShR7v09ACZUFt2pWn0lVR5%2By1UwLBKK4MM%2BhtMQGOqUBtQ%2FAjHc3puw54rd6F4xDMxm%2F9t3Eh1kueR6%2Bl%2F5%2BHKVTwsPvF4XEC%2Bs0D1cSCubB5roqZ2I6yR0j%2BgtBSHPeUY7nh8ly%2ByNsl8FYMjpZnKd%2Fxhr8LuDJx2G3egWldm487rZy5oL8Op2l78PQfV7EYsrnmSEzqNYK%2B8n7Z6VfEHoHaiaT9tJJ7ohXE1OuEsfhbRCUMNva84EWiUfTM6xpypNaUxWu&X-Amz-Signature=e13e31f880aaf4b527888e111e435cb1ae66be1a14476c77e172330507fed0d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
