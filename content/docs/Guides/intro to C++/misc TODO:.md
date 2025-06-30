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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627NK6FV2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDasRJ%2BtiejvbzLgEKo8LCoIQPZXbWjijDjwvohzbrHdAIhAOyrXz3tYzQrbUlobxp%2FZncHlb3IML0hYXQqSTWkGJMRKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBIvuIzedj%2FrQtzUMq3ANeCMDEIigrEW8WaZ9dp0wvBdu3OKMEnVPnOp16%2FMsiTi0j6YbjxQ%2FmabQdKBmStXVNVBrPRGyO1WTndMzjAvJn5el7n4ziGcpjsvpGChX6tFxtWAsgijEwsyPqrr5ZjgjdBuvleOQyn6LQDRRTbWEb0pTNn0uup8x%2BzWABirG%2B2p5HLm%2FAgZLHxQl5a3luOYRPE07QewV3uJ7lACSRftsNGyno9alK9X2odxkHGrKUK6iHKPW288fIPl%2FVIGUTr2khLCbyg4SJNOJjbparwONevvxKP3bE1YwsBUGtdMNI%2FL%2BeVc9sUhhjwDR%2Fn9IPUf%2FDfvmwWvlzjzKMRk5zaCPdIfY8it%2FjWAd5zJPU8cIQEygKL81E%2B2zTe0eoKKZ7YqEM6e7o5emWF9MHQvn1WAud7FU5wPKF34%2FEGkfty9kHmEne5xv3UqPqj4j0ijg4E7RLK6IWX9rq2glKFSKuyj2p01yTaX%2BPD2kr01zuqoOVxLWsWbgJNuyzU7ZgkM0mGQs%2FQl%2FwF9Va83J%2Fqb8AXqH9zGp2TIIsC%2FO8n5uDQ6TwbPBgoo6eiSt%2B6RAsY%2B6xCwPeeH1hwzPUYrq8lnseoRU9jT3mGHIwXlv%2FBXoLNk62%2BqpJGmn1KW8esTTv%2BzC4oonDBjqkAdN5%2BN6zeABrj0XkpYpN6VuMGmUcf%2BspapKs%2FTHPtsuIs%2B0xTy%2FqT%2Fb1FRdTklI0ERPivC%2BYvwTSyYSctlqULjRTUwDULCCklcflIBGIVLYzPjZ%2FyELKAlFdnDVL7Z%2BTxsTEUTSZ5ZZn8Zljd%2BWp85rwfzFH4hNfrtOkilHaohp7d6tT0QA8B%2FoG8yOhQEVtBfosrIHmltZic9Bz%2Bik11%2By8WcsZ&X-Amz-Signature=0a737c1caea5978bc6896963677ea05708bf6cbde81025988d5185694743b1c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627NK6FV2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDasRJ%2BtiejvbzLgEKo8LCoIQPZXbWjijDjwvohzbrHdAIhAOyrXz3tYzQrbUlobxp%2FZncHlb3IML0hYXQqSTWkGJMRKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBIvuIzedj%2FrQtzUMq3ANeCMDEIigrEW8WaZ9dp0wvBdu3OKMEnVPnOp16%2FMsiTi0j6YbjxQ%2FmabQdKBmStXVNVBrPRGyO1WTndMzjAvJn5el7n4ziGcpjsvpGChX6tFxtWAsgijEwsyPqrr5ZjgjdBuvleOQyn6LQDRRTbWEb0pTNn0uup8x%2BzWABirG%2B2p5HLm%2FAgZLHxQl5a3luOYRPE07QewV3uJ7lACSRftsNGyno9alK9X2odxkHGrKUK6iHKPW288fIPl%2FVIGUTr2khLCbyg4SJNOJjbparwONevvxKP3bE1YwsBUGtdMNI%2FL%2BeVc9sUhhjwDR%2Fn9IPUf%2FDfvmwWvlzjzKMRk5zaCPdIfY8it%2FjWAd5zJPU8cIQEygKL81E%2B2zTe0eoKKZ7YqEM6e7o5emWF9MHQvn1WAud7FU5wPKF34%2FEGkfty9kHmEne5xv3UqPqj4j0ijg4E7RLK6IWX9rq2glKFSKuyj2p01yTaX%2BPD2kr01zuqoOVxLWsWbgJNuyzU7ZgkM0mGQs%2FQl%2FwF9Va83J%2Fqb8AXqH9zGp2TIIsC%2FO8n5uDQ6TwbPBgoo6eiSt%2B6RAsY%2B6xCwPeeH1hwzPUYrq8lnseoRU9jT3mGHIwXlv%2FBXoLNk62%2BqpJGmn1KW8esTTv%2BzC4oonDBjqkAdN5%2BN6zeABrj0XkpYpN6VuMGmUcf%2BspapKs%2FTHPtsuIs%2B0xTy%2FqT%2Fb1FRdTklI0ERPivC%2BYvwTSyYSctlqULjRTUwDULCCklcflIBGIVLYzPjZ%2FyELKAlFdnDVL7Z%2BTxsTEUTSZ5ZZn8Zljd%2BWp85rwfzFH4hNfrtOkilHaohp7d6tT0QA8B%2FoG8yOhQEVtBfosrIHmltZic9Bz%2Bik11%2By8WcsZ&X-Amz-Signature=43f4883a64a9804719062b6a156e49aaa0c0f376864ea53f0fb118afc0a1a59a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
