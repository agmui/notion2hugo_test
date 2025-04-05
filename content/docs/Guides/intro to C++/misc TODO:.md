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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQLLWRL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bj2a7QiwwLJTk0XyXY0V5NAShY%2F4qvuOCCpEd56C5JwIgEQSq%2B3Ja8%2Bl54oD6f3HcyuKH6olE8t4vHapQS8tCZNMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOII52Kqxhapxqc%2BuSrcA0wg8092GvkfPhPX5q2e0rVCGd8lDlEvXmP2vNmKU82o859Ce1r1NYELM1e1ENWiMC7iROUuY6jX1HLEMph1vVYwl7jXb81rMWuAHlcDPQ5Jx%2FVCvsA0BhArFy6gxD7DGYABZubVpvlJUIN44PJ4dgLePLAJEeZ52SOLyxWd7uI%2BLiKs0Pn%2BnRUZh0oh8LF0WxAV%2Fz%2BZ9vbOc4ov3tFrUsSJmyEnvNlsGLD6Jzd2r3VwySXaSjXdMzegKeu4OrQ%2Fr0pyKiDiRpQp2S8ZKb0WUVC8jrhFh1cW77SskHkHjIL8EBrtHM0Rndz2W9Qu146dfkvSIuDaaGoiNvLXKFfpvZviXfzxvw2lUTYykOyuMXbiBMDVQBS%2FsdWM6yZ660bIE3raCmGwhTSZ6Jb9uNq2oM1msPrqi6IEuA7eD0ZEcvYOhOst0KO4mHGtjGalyWc9kzzIhBUPvdpONIf4FJUuPeZd1YwXQW9LxQ13GLB7PIs174GKFx%2BqTt5CUVH5tDtREUJvohdRnsW9f9OzWrxZnB%2F30%2FBO%2F4wkv3w%2Bqb2q1R4pyRKoOAMFas64biJNeJciW5MvY13MoYdIho3%2BlBL24xOQh79PWUHOetq%2BIWz0QDeqZUr9TxJpNkOB5tC3MI7Dxr8GOqUBAllaxh6l0JV%2FaTzN41LRTADC49ofqUcKhL7W4uZtJBHXAiLJEtz9f9SP%2BuRJFGlOdrGMdwIq9MQuqefeoGkeAfi8PoTx7gmUfJNhNdNVDB%2BwBw8iUdvKxIRrEP%2F%2FQWdz4aO8b7KnNutTRrTSsLvzowoR70BqRgG4n281PLaJgiZRWbq4pwL%2BdLScs%2BpvNUsQOvVjERoxO9onOaCp6gGsuo%2FNeSJx&X-Amz-Signature=78ca74c625dda8cdb3bcebb06e5a5c20f21aee8db6066855f517ce62e4a88f53&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQLLWRL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bj2a7QiwwLJTk0XyXY0V5NAShY%2F4qvuOCCpEd56C5JwIgEQSq%2B3Ja8%2Bl54oD6f3HcyuKH6olE8t4vHapQS8tCZNMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOII52Kqxhapxqc%2BuSrcA0wg8092GvkfPhPX5q2e0rVCGd8lDlEvXmP2vNmKU82o859Ce1r1NYELM1e1ENWiMC7iROUuY6jX1HLEMph1vVYwl7jXb81rMWuAHlcDPQ5Jx%2FVCvsA0BhArFy6gxD7DGYABZubVpvlJUIN44PJ4dgLePLAJEeZ52SOLyxWd7uI%2BLiKs0Pn%2BnRUZh0oh8LF0WxAV%2Fz%2BZ9vbOc4ov3tFrUsSJmyEnvNlsGLD6Jzd2r3VwySXaSjXdMzegKeu4OrQ%2Fr0pyKiDiRpQp2S8ZKb0WUVC8jrhFh1cW77SskHkHjIL8EBrtHM0Rndz2W9Qu146dfkvSIuDaaGoiNvLXKFfpvZviXfzxvw2lUTYykOyuMXbiBMDVQBS%2FsdWM6yZ660bIE3raCmGwhTSZ6Jb9uNq2oM1msPrqi6IEuA7eD0ZEcvYOhOst0KO4mHGtjGalyWc9kzzIhBUPvdpONIf4FJUuPeZd1YwXQW9LxQ13GLB7PIs174GKFx%2BqTt5CUVH5tDtREUJvohdRnsW9f9OzWrxZnB%2F30%2FBO%2F4wkv3w%2Bqb2q1R4pyRKoOAMFas64biJNeJciW5MvY13MoYdIho3%2BlBL24xOQh79PWUHOetq%2BIWz0QDeqZUr9TxJpNkOB5tC3MI7Dxr8GOqUBAllaxh6l0JV%2FaTzN41LRTADC49ofqUcKhL7W4uZtJBHXAiLJEtz9f9SP%2BuRJFGlOdrGMdwIq9MQuqefeoGkeAfi8PoTx7gmUfJNhNdNVDB%2BwBw8iUdvKxIRrEP%2F%2FQWdz4aO8b7KnNutTRrTSsLvzowoR70BqRgG4n281PLaJgiZRWbq4pwL%2BdLScs%2BpvNUsQOvVjERoxO9onOaCp6gGsuo%2FNeSJx&X-Amz-Signature=fa1112a9e21460434b58b33dafd619f6c52e28ff9f38846e73167f8051b76cb9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
