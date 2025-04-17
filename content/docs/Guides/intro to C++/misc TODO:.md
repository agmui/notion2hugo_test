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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4UGYW4X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3UPZ0gfI%2BisCUjSna6kISDZ9WbwpNCTcPWNd2BA%2BM3wIgQOyBojbGldLHQbu1UQTiKAdknoHmERkh6fT3IsPdYWkq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEE%2Fvvl3CvmKqQ8FuyrcA2m1l6Y%2Bi1zr5vMu%2FwDMAkYs70oYxR7MiDcy1VuZY4qxfGG6W84wXqjVFa96PiVmYZRQVBkpTobIsSJ%2FmCqx5Ena70ZrZCtj2Dbm0GNjNK%2FcUiZw1bsy3XyNm8HdJl1YHT895DXKJ96k4CMq%2BEc0a5KEN%2FZ4AnI9kSz5Ezje40%2Bc3Sobt8K0LgsT%2Fi3i0fUjs73bt6iY59GmlCTu%2BR%2FQnCuHgY8NmUEX93ITlG9jlsGbxiogcu%2BkvByT6Q%2Bik79fgIhPCvmlbgZuM1ffeemcW5lNqbXebQSckp2vV2d4RaGr1ZC%2Bn4rTklDqeoHhZfmMqn4mUdCIqwIfuYWNg%2BHVScudTdSxwARQdLWi636HunVtWw13iSj2AximxflDAwiY7N3ZETiw8JDiEbnKfr%2FAr%2F5MSgafetLtSL%2BK3V66CDaNgCXpEpWvFatBN6bA63U1eqxArPa72s%2BA8K7YR6P184%2Bai0Su1AwaNbSBGK7cvelGut%2Fi4tvXdlFedDE5q4SL9mPd9H3Hs5TsxwtiTVjVrqMQGXlgGYZmWGMaN7SJCbxV7QVLuX6XkmDQSU6LR0SwMBnCtQldrzYw%2Bdc77BdchhHZ8LtQJf%2FaYwnjlxHmHgGiFgQP2UvbCK0asD6uMInIgsAGOqUBXsnQWI1pBo2%2BSd72s1eZIBcYKLaF%2B%2Ft5fcpdletE1Dgqlk1hLoQvdYH6o4SK0z4crI7soNo5uBUr0rVfCL76%2BGQIdiOY%2Bg8v6M2Qi25qbCc8t7e70SwGuSXocvJNL5LG9F7hHHLoBGMoRrIR8ZnfS9GAO%2FKf2SgRaEg0VKT8r1Dnj8yA6fa8RZKb3%2Fllz4EXGpRL5IAu%2BCop5%2BuhNVmhuzPg%2B2EK&X-Amz-Signature=e6e781ba644826fb3afff3b5eef8a0e47d1016ca166a4ed74dce47c6c368f395&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4UGYW4X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3UPZ0gfI%2BisCUjSna6kISDZ9WbwpNCTcPWNd2BA%2BM3wIgQOyBojbGldLHQbu1UQTiKAdknoHmERkh6fT3IsPdYWkq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEE%2Fvvl3CvmKqQ8FuyrcA2m1l6Y%2Bi1zr5vMu%2FwDMAkYs70oYxR7MiDcy1VuZY4qxfGG6W84wXqjVFa96PiVmYZRQVBkpTobIsSJ%2FmCqx5Ena70ZrZCtj2Dbm0GNjNK%2FcUiZw1bsy3XyNm8HdJl1YHT895DXKJ96k4CMq%2BEc0a5KEN%2FZ4AnI9kSz5Ezje40%2Bc3Sobt8K0LgsT%2Fi3i0fUjs73bt6iY59GmlCTu%2BR%2FQnCuHgY8NmUEX93ITlG9jlsGbxiogcu%2BkvByT6Q%2Bik79fgIhPCvmlbgZuM1ffeemcW5lNqbXebQSckp2vV2d4RaGr1ZC%2Bn4rTklDqeoHhZfmMqn4mUdCIqwIfuYWNg%2BHVScudTdSxwARQdLWi636HunVtWw13iSj2AximxflDAwiY7N3ZETiw8JDiEbnKfr%2FAr%2F5MSgafetLtSL%2BK3V66CDaNgCXpEpWvFatBN6bA63U1eqxArPa72s%2BA8K7YR6P184%2Bai0Su1AwaNbSBGK7cvelGut%2Fi4tvXdlFedDE5q4SL9mPd9H3Hs5TsxwtiTVjVrqMQGXlgGYZmWGMaN7SJCbxV7QVLuX6XkmDQSU6LR0SwMBnCtQldrzYw%2Bdc77BdchhHZ8LtQJf%2FaYwnjlxHmHgGiFgQP2UvbCK0asD6uMInIgsAGOqUBXsnQWI1pBo2%2BSd72s1eZIBcYKLaF%2B%2Ft5fcpdletE1Dgqlk1hLoQvdYH6o4SK0z4crI7soNo5uBUr0rVfCL76%2BGQIdiOY%2Bg8v6M2Qi25qbCc8t7e70SwGuSXocvJNL5LG9F7hHHLoBGMoRrIR8ZnfS9GAO%2FKf2SgRaEg0VKT8r1Dnj8yA6fa8RZKb3%2Fllz4EXGpRL5IAu%2BCop5%2BuhNVmhuzPg%2B2EK&X-Amz-Signature=5ef7d714169e40c3d07964135623e31fee55dbf4f91c5a6323dad185ddb56f5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
