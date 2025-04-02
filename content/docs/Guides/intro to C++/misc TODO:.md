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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PFNYEPD%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAyBMTDPnNpUAinDyZLKo1mMWTfJ3x%2BSCck24jkZS%2BtuAiA51qTiWbwktPlQXkIXEpK4zWzoi0b1lTZTMvAr0b6adSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMNsw%2FP551Izf3eKpKtwDnm8qHXUbIx0vkqt9Ovo7JGmh%2Bpyuli2%2FJScxOuuyv%2BN7pZqi84EodCsx3v2k%2B3EFxg9uT4%2BRnpIWWvSGdqxnht0GvfN0AuBWc40u9J8NFK%2FN3UKTvZz2reqEo%2BU51g%2BjmOcrNz7b0d0jk6acFj38DAFh7Bvi3N%2B7wyLsra7PmaerqIKtuzHN32Qcz9W2E7lFhoUaA9AABCogPRT4qPXej9k1NQX9pZCRjGHmeLGZrQtzpWvNVcRW25CSYFsGkQ0WMBw5gbXyupcdBFn3W%2BH9e6JK9kix2vxKBgNkLr%2B012AE2orrk15bXq460%2FS32hZu%2B30JBn7A%2B8NUo%2FdSJyxEjHtYdp2QzfYQoIQhUwkaFgeHpCkaD8UNAgmYWPcy4R8XhHnfpKBJFQMclQ%2FLjZSW4yMweSIPpk9PU3c9OeLnSYsbLs8q1LclflZI%2BMDZ3dlC1JDd%2FPw7jmJcV6KNO%2Fjv9bJSAZwv60Burvn9pFkY148%2B7jj0yirInqpwl6G8%2BNLetCmJvtwXinYjwUErI21jcULcAKT%2FflDfcY3XiU%2FrElND3OGOU65Rq2ANa8dxUo%2Bcj0FTMK%2F73bnXlO%2BE3dBxKm%2B1cOREjLi3tt5%2FUFRKjnx%2BTvWiGyCAYAlok18w%2FKW2vwY6pgH5sqH%2BrnY5%2BhDNPIL%2Brq1VcJmahrvX9eU9LK6SxJrUW7kqq%2FfGszOvdLW8ELqETyzvaGxzNYVUgGHFq7R5YqlZg3mvXzhGqBSin4FmGIR4Uw%2FeA8jMgZh5nB0Y2juHHCJmrCs7ED5urXoJFyGtGco724ShGu2K3dxOdwsOJGXjZT2TcIfPRFzehN5oMDUeLTxbsHDTi%2BZ132zd%2FVGHjxPlW5xUYAVx&X-Amz-Signature=49e7bf9fdd79ad497ba7005110058214d655dd0b02ef2947692868ead3f233cc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PFNYEPD%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAyBMTDPnNpUAinDyZLKo1mMWTfJ3x%2BSCck24jkZS%2BtuAiA51qTiWbwktPlQXkIXEpK4zWzoi0b1lTZTMvAr0b6adSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMNsw%2FP551Izf3eKpKtwDnm8qHXUbIx0vkqt9Ovo7JGmh%2Bpyuli2%2FJScxOuuyv%2BN7pZqi84EodCsx3v2k%2B3EFxg9uT4%2BRnpIWWvSGdqxnht0GvfN0AuBWc40u9J8NFK%2FN3UKTvZz2reqEo%2BU51g%2BjmOcrNz7b0d0jk6acFj38DAFh7Bvi3N%2B7wyLsra7PmaerqIKtuzHN32Qcz9W2E7lFhoUaA9AABCogPRT4qPXej9k1NQX9pZCRjGHmeLGZrQtzpWvNVcRW25CSYFsGkQ0WMBw5gbXyupcdBFn3W%2BH9e6JK9kix2vxKBgNkLr%2B012AE2orrk15bXq460%2FS32hZu%2B30JBn7A%2B8NUo%2FdSJyxEjHtYdp2QzfYQoIQhUwkaFgeHpCkaD8UNAgmYWPcy4R8XhHnfpKBJFQMclQ%2FLjZSW4yMweSIPpk9PU3c9OeLnSYsbLs8q1LclflZI%2BMDZ3dlC1JDd%2FPw7jmJcV6KNO%2Fjv9bJSAZwv60Burvn9pFkY148%2B7jj0yirInqpwl6G8%2BNLetCmJvtwXinYjwUErI21jcULcAKT%2FflDfcY3XiU%2FrElND3OGOU65Rq2ANa8dxUo%2Bcj0FTMK%2F73bnXlO%2BE3dBxKm%2B1cOREjLi3tt5%2FUFRKjnx%2BTvWiGyCAYAlok18w%2FKW2vwY6pgH5sqH%2BrnY5%2BhDNPIL%2Brq1VcJmahrvX9eU9LK6SxJrUW7kqq%2FfGszOvdLW8ELqETyzvaGxzNYVUgGHFq7R5YqlZg3mvXzhGqBSin4FmGIR4Uw%2FeA8jMgZh5nB0Y2juHHCJmrCs7ED5urXoJFyGtGco724ShGu2K3dxOdwsOJGXjZT2TcIfPRFzehN5oMDUeLTxbsHDTi%2BZ132zd%2FVGHjxPlW5xUYAVx&X-Amz-Signature=ad911f58d8ee46469b2f3646f91a185db30675990576ccf2685e0d2b5dbe4c39&X-Amz-SignedHeaders=host&x-id=GetObject)

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
