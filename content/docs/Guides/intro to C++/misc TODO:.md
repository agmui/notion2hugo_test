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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4UKDZPG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCau1bmTNgGogCScou8o2ptCH00BX83SNdSsHiaKn%2FybQIgcucdPrqrj5LZpuHkLMH%2FGBIC7SpAQEHOnKXUgqnHZGYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfSFt0iEhkTv51hpSrcA6zoSOUgFycu8JbUZwDimH2hn%2B0U%2BdK1cSchfvL6PQ5GBSZ%2B%2F9qDXhf1pPCan33YVJSAFSei792S5tsvUG2h13RYMFDoW4%2BquJOJJ%2B%2FCjVCGIQ9eozzHWXChqATsOds5MZsjOc942mMbVUbFxA6uN5177yOeyAS3ijHpO%2Bgu7xpV%2F4BWe8pwAhKP4OaF9gQ17IhdSr%2BYZBNhUh8rMZkj0eRkqJvDrWXztD%2BFoTokYEY%2BXlEPFQKkiuFg8EC2CmMC3oOxFlWv2rlDrCGVPdH2952thlbVTMUbs8p8A0dDVWKq%2BYM%2Bohmmkjkds7Kh8m%2Bbu3p9b8zrmhSsZRINKFsZhzmCs1DYyrVOnJy8yv9wsC8MyN6xDPO553AS3zL64nyA4H45BCtXOUKOY%2F7KBhINgYKfM8lrFLO4Whw%2BkMx%2Bos5d%2Bz56n2MvezlCV72U2V002f7713dTwfFOHpKMVCjWZNdD2kfnJbYbGdJVdurLpqLpm2AgT5WOe9tNp5pgdhEorXw6gOHIVE7jUoNu6MbMtTHikROj5MtFyiZ1UDAe16LjeN0kFuTLML2MuvOAdgOXTQTEy7gjTVLqfQSKDaESikRxoqpm4ayzfv%2FgrAFTtWBgmT4yFdoOTgDqq9lvML3Qr78GOqUBAEpIjRXEC8YOGrD9ttdi6nEh9piV4t40mFk7J8oVvylMfX%2FC4iZzB55cnOHuV7YS15i2QS2mzQ0Vmeryv9rrU8wsjgvkl7whrjbKcD5oZfyw34xVbLs4q3sUNU6KUpdnsykwvfkv5cPPDEFnf7bf2QgH6Bs3kfAOZPZqfulyZNW8aIfN1GKUMVOztrCUADlGreUlZawhVSR2Qea3iPYVLv03m5WB&X-Amz-Signature=11c21cbf124a77819f5ebce911d4aea0b94ee9c1ed05373dc7d45c544b7903f4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4UKDZPG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCau1bmTNgGogCScou8o2ptCH00BX83SNdSsHiaKn%2FybQIgcucdPrqrj5LZpuHkLMH%2FGBIC7SpAQEHOnKXUgqnHZGYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfSFt0iEhkTv51hpSrcA6zoSOUgFycu8JbUZwDimH2hn%2B0U%2BdK1cSchfvL6PQ5GBSZ%2B%2F9qDXhf1pPCan33YVJSAFSei792S5tsvUG2h13RYMFDoW4%2BquJOJJ%2B%2FCjVCGIQ9eozzHWXChqATsOds5MZsjOc942mMbVUbFxA6uN5177yOeyAS3ijHpO%2Bgu7xpV%2F4BWe8pwAhKP4OaF9gQ17IhdSr%2BYZBNhUh8rMZkj0eRkqJvDrWXztD%2BFoTokYEY%2BXlEPFQKkiuFg8EC2CmMC3oOxFlWv2rlDrCGVPdH2952thlbVTMUbs8p8A0dDVWKq%2BYM%2Bohmmkjkds7Kh8m%2Bbu3p9b8zrmhSsZRINKFsZhzmCs1DYyrVOnJy8yv9wsC8MyN6xDPO553AS3zL64nyA4H45BCtXOUKOY%2F7KBhINgYKfM8lrFLO4Whw%2BkMx%2Bos5d%2Bz56n2MvezlCV72U2V002f7713dTwfFOHpKMVCjWZNdD2kfnJbYbGdJVdurLpqLpm2AgT5WOe9tNp5pgdhEorXw6gOHIVE7jUoNu6MbMtTHikROj5MtFyiZ1UDAe16LjeN0kFuTLML2MuvOAdgOXTQTEy7gjTVLqfQSKDaESikRxoqpm4ayzfv%2FgrAFTtWBgmT4yFdoOTgDqq9lvML3Qr78GOqUBAEpIjRXEC8YOGrD9ttdi6nEh9piV4t40mFk7J8oVvylMfX%2FC4iZzB55cnOHuV7YS15i2QS2mzQ0Vmeryv9rrU8wsjgvkl7whrjbKcD5oZfyw34xVbLs4q3sUNU6KUpdnsykwvfkv5cPPDEFnf7bf2QgH6Bs3kfAOZPZqfulyZNW8aIfN1GKUMVOztrCUADlGreUlZawhVSR2Qea3iPYVLv03m5WB&X-Amz-Signature=c0ad7872e57ef0e4a8ea9b254a94b850a5a3d785434ce6a0a47eb8eafe49e105&X-Amz-SignedHeaders=host&x-id=GetObject)

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
