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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LMF7JO5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDpmQR8xY33xcrQg9D1Hb3Wbx4DIWYRd0WGxID%2FaBlGMAiAsOJ7QxkpHjxnWPf4ivbJD8adGmXAOYLsmlxR8aQ6K4yqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgOJTBOYUFFyStqB6KtwDo4pc4QODygGkkPgHo9YdM0dMajdUnvYurcQSiRv7yMkqAs%2BY5XP7PBf1PPiGLXQRxJZ6Vmqm1gxbepbW1hQ46mHNMxo5z5QDwEERYFuTdEuhlduAvu3JlL9IH%2FDfjIYpBWBhvnqviwiA%2FKrieluCG8AekutSZXr3ZMUDhZT5o6R0GjNjAUrQs546jxEoxfaq86QhAZzdXpCuGtCm8qcJSQ6egOAvOSjU1fAnfHVZOGTi6YMSzSJiMDF6hVYQZol1jkbfwhpejL0bD7ke45kTHlh37sguubbGQmmBq8ycIXHuE98OiN2IS7HpmofqT5aM8KTRPpwjHuXw7anAnyxPN1%2Fc77ajzyBQUwsB7Y8oOEVT8vUXB8RtZIy4S2qNhUqS4FmlEs7hzv6ZfIBjXHzzYm0npD5PEpQoygKxO1qWSc7Q7TogJjw33iYwABSme5m6EkxT4rLf2S11VcCq6gNbRv93m%2BSth2Du7A%2FEg6W%2BOn8oI4tsazk20l0FMfgI9ULuqqmlxKR96zWQYCfFmniFaL1sr8%2BmAyrFVhi%2Blh9zmuK5BBu132%2BSrbkWUG1hCZaQCvVpfsBAXehoSgGSjK0tbv6hrq9vpxF7SBM6w9PbeI522g16u0zWCci0u1YwpvLCvgY6pgFJc7Z7qqgI6ztjCAS7kof6k%2FNsnli2zxWMF1PdhIgG3z%2BOuvfbm5sxt38OymF4Mx7sA0YUo0HtPQoap5IhEJVcBPMblOTJpiF6vSrNIqej2HuniuJizBK%2FH5ehdXtHNfHKVqMToD33iuJYL%2FvySbzsIO5Pzb57U7oV6j4MvGQuAsZPJvNivUGwiq2TcrN1WMKzmAGbEVIhl6nFxxMXKnbyRI32wAXS&X-Amz-Signature=97d67a548be8e7da700593f5605a197965520c18b1eacfa926441516161c9160&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LMF7JO5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDpmQR8xY33xcrQg9D1Hb3Wbx4DIWYRd0WGxID%2FaBlGMAiAsOJ7QxkpHjxnWPf4ivbJD8adGmXAOYLsmlxR8aQ6K4yqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgOJTBOYUFFyStqB6KtwDo4pc4QODygGkkPgHo9YdM0dMajdUnvYurcQSiRv7yMkqAs%2BY5XP7PBf1PPiGLXQRxJZ6Vmqm1gxbepbW1hQ46mHNMxo5z5QDwEERYFuTdEuhlduAvu3JlL9IH%2FDfjIYpBWBhvnqviwiA%2FKrieluCG8AekutSZXr3ZMUDhZT5o6R0GjNjAUrQs546jxEoxfaq86QhAZzdXpCuGtCm8qcJSQ6egOAvOSjU1fAnfHVZOGTi6YMSzSJiMDF6hVYQZol1jkbfwhpejL0bD7ke45kTHlh37sguubbGQmmBq8ycIXHuE98OiN2IS7HpmofqT5aM8KTRPpwjHuXw7anAnyxPN1%2Fc77ajzyBQUwsB7Y8oOEVT8vUXB8RtZIy4S2qNhUqS4FmlEs7hzv6ZfIBjXHzzYm0npD5PEpQoygKxO1qWSc7Q7TogJjw33iYwABSme5m6EkxT4rLf2S11VcCq6gNbRv93m%2BSth2Du7A%2FEg6W%2BOn8oI4tsazk20l0FMfgI9ULuqqmlxKR96zWQYCfFmniFaL1sr8%2BmAyrFVhi%2Blh9zmuK5BBu132%2BSrbkWUG1hCZaQCvVpfsBAXehoSgGSjK0tbv6hrq9vpxF7SBM6w9PbeI522g16u0zWCci0u1YwpvLCvgY6pgFJc7Z7qqgI6ztjCAS7kof6k%2FNsnli2zxWMF1PdhIgG3z%2BOuvfbm5sxt38OymF4Mx7sA0YUo0HtPQoap5IhEJVcBPMblOTJpiF6vSrNIqej2HuniuJizBK%2FH5ehdXtHNfHKVqMToD33iuJYL%2FvySbzsIO5Pzb57U7oV6j4MvGQuAsZPJvNivUGwiq2TcrN1WMKzmAGbEVIhl6nFxxMXKnbyRI32wAXS&X-Amz-Signature=ff72995e782ab33c9a6f02d59c17b0a058bbf75cf7a43e41e1fe1048d6ba9694&X-Amz-SignedHeaders=host&x-id=GetObject)

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
