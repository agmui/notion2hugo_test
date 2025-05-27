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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KVTQVM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnykY5UDEEcQPPxOP5NI2mgJ8mMtUY%2B82UjOX8L3yJwAiB6djfyoPz8JODvrjcuhZ47U4FDpw95dvANQgxBY5YVoSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMBdsZ4mX7gZyUnH8%2BKtwDPJPPNX3hNC0pMMCmMZpqYPQ7bydcBoV1SbBXoITwAyuJ4F6ykafwg4%2FQ9d%2BdUpdIBpv%2BGkthBHddnkWcWg4wDD7O%2FphiqBqU8iXJp7v2zkMTItkOQ3ibLUaR%2F4FtvsW2F9AmQyml6tjwlQP9972FZMwxTquTCZ4%2BbgzSNuTSfDUowFWYsNHVdtd%2FCLtoL1GaQuHIxxqxLoIoY4vIEtENAWlWjsna88docL7MNQOdv5FRSSLLPg4H5p9hdlRMbzRMVmnh8T6wWU%2FVeP5mQ8PNpYuCOTq2uwQi5kLWhX1k%2BzTNAJ2amvBEK%2F7cetSTKvb0DCvOhrq%2FYvA%2BhI04zI4Jjy5nhevdsgJGv%2BWdi11LHL1MMf8Q31P5PIjEMr8A5PuWAtb0i75zSk9KBlKc7aFzg7H4Dd5M2gARN%2BMNyUgGTEgTTyusNbpCQUufX%2BjSUxrORHgJrLfxSkVSLDUZSTLuEnDhKd5861eGV%2B2pV1SaSWCWTVzcKwCO0V6KI4z05zSqGjuSJ5fS8F9h6pACNp7BvQWNzMcKvh0roll7h8rhg6KZovyTxFqkc4mJNqwaZlgrbJ5NTDZAQq1rFUtZIUQG7ENQWWkcbQOzYC8RAQRjSW8QdKPbDu4vT6vrucYw6NrVwQY6pgEe52YeX1tphktz4Zlph9Jktq7DmmOV8oXSy4jPD0EdUJOoFvMfwwZXTqbvEOh2OjjEEIFSZJ906et0aMt4uYzmSNZyGkWKzCrMdcA42G7a7S20cvF%2FqIo02wXelNjFucXZeM43swBaVyRyj95djUb0KCK4Kh7Z2mHDfbOn2WY8eqJG%2Fz%2BhxhzAUNEyNJSIfY%2FSHZ%2FIKS%2FWjtKjI7Lh4%2Br4zyqk6mkl&X-Amz-Signature=bb86ed5dfd68e614bbd0a03a47838c25f10a18d0d77cb174448074a1b01e7f8c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KVTQVM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnykY5UDEEcQPPxOP5NI2mgJ8mMtUY%2B82UjOX8L3yJwAiB6djfyoPz8JODvrjcuhZ47U4FDpw95dvANQgxBY5YVoSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMBdsZ4mX7gZyUnH8%2BKtwDPJPPNX3hNC0pMMCmMZpqYPQ7bydcBoV1SbBXoITwAyuJ4F6ykafwg4%2FQ9d%2BdUpdIBpv%2BGkthBHddnkWcWg4wDD7O%2FphiqBqU8iXJp7v2zkMTItkOQ3ibLUaR%2F4FtvsW2F9AmQyml6tjwlQP9972FZMwxTquTCZ4%2BbgzSNuTSfDUowFWYsNHVdtd%2FCLtoL1GaQuHIxxqxLoIoY4vIEtENAWlWjsna88docL7MNQOdv5FRSSLLPg4H5p9hdlRMbzRMVmnh8T6wWU%2FVeP5mQ8PNpYuCOTq2uwQi5kLWhX1k%2BzTNAJ2amvBEK%2F7cetSTKvb0DCvOhrq%2FYvA%2BhI04zI4Jjy5nhevdsgJGv%2BWdi11LHL1MMf8Q31P5PIjEMr8A5PuWAtb0i75zSk9KBlKc7aFzg7H4Dd5M2gARN%2BMNyUgGTEgTTyusNbpCQUufX%2BjSUxrORHgJrLfxSkVSLDUZSTLuEnDhKd5861eGV%2B2pV1SaSWCWTVzcKwCO0V6KI4z05zSqGjuSJ5fS8F9h6pACNp7BvQWNzMcKvh0roll7h8rhg6KZovyTxFqkc4mJNqwaZlgrbJ5NTDZAQq1rFUtZIUQG7ENQWWkcbQOzYC8RAQRjSW8QdKPbDu4vT6vrucYw6NrVwQY6pgEe52YeX1tphktz4Zlph9Jktq7DmmOV8oXSy4jPD0EdUJOoFvMfwwZXTqbvEOh2OjjEEIFSZJ906et0aMt4uYzmSNZyGkWKzCrMdcA42G7a7S20cvF%2FqIo02wXelNjFucXZeM43swBaVyRyj95djUb0KCK4Kh7Z2mHDfbOn2WY8eqJG%2Fz%2BhxhzAUNEyNJSIfY%2FSHZ%2FIKS%2FWjtKjI7Lh4%2Br4zyqk6mkl&X-Amz-Signature=efdb9e664170c5465497f5f5dca4110c6687e312c63e81892a6ed537d9997125&X-Amz-SignedHeaders=host&x-id=GetObject)

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
