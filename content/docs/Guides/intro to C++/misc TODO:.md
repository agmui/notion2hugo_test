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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H5SX2P%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbCxvhX7dkaTJtoGTs8GLXLFCKlZNt%2BHGQRTYrNU0yRwIhAIGWc1fs9IoikuFEospdDHBtenJoRZ8m5dJUBZRiX9%2F0Kv8DCE8QABoMNjM3NDIzMTgzODA1Igz6xQq5FIAHpMOTk2Aq3ANkPh9Uda%2FkZrUhPEBvm0bapDxLf5neYsJEc0x97nkCGPa%2FiieTUSXj6STNNaMkS3RW9M4r%2F9ZJelgd%2FcAjCfWnvAhsJZf3mhz1fvbDpUDBLWPChWHr2%2F0e0CJnEpOq9a2THEsbK4WhRh55SfD5OE4PjCC6qAnB4siuRzbMrInJ65y79fE0SuyJw46ikfzjND0sbTECWfA6unoveLJKHGxmeDvIQs2Mh1eMi73cZ9se0C96ntCjiNv3f14dobSU3og%2FNDBx5fu17an3BbLUnG0IOrc46A87b1CdImVyFqrqGISLd%2Fo3BRX6aR1U%2B85Qi3Sk8rXM3A%2BAAOPRSGg8gYB1BHWx29i9xRfIcr2A6duxdPNd8kkoOrwzmFq83PqIz%2FctD2o0epMImuixSwBIPYL%2BabWtXyAk6vUoRv%2FlENDqg9G1lYY3Iwpiu74lGzSwauQKBMSwz2dW73rjnhfZTUhEXfyXmF5qwWviqc48rb8cUGTXNVdIKwoNcMWGhv7KisKNeqQ1r2nhGAx7zBHWzcFJQtEAvHGvW0er3LzMx7ENiw9pCLRAB%2B7%2Bppany4XbybbjTRL1Uk8UnOI7QfCswrdjt3YAPQ0lP8ukfaHJRnF0HeUhD2xjTj6tobduRDCC09PBBjqkAWRacJn3NaCEjeIp3WS%2FsNYy8ar2vvNDqunSepLRtua30396720rN5chGNrDwY8wgH37jkj40tEaiYGgIi1kKvu8yG26sXQoHcTTOpTuiPpDI9ssEdudL%2BQvRR3O4Kt9tTsqhp3tdDnv9wAPcqnDb7Acibobvn2RNjDiFhKvTiE9itMF%2BYicjJxE2bu34abnMP6j4oW%2Fk3k1CHCQ8T2Lizga6Y2L&X-Amz-Signature=dbcb6a6ddbea5b9ad40845d9e233e838ee88ad2c4a2692ffaf6d504bed94c839&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4H5SX2P%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbCxvhX7dkaTJtoGTs8GLXLFCKlZNt%2BHGQRTYrNU0yRwIhAIGWc1fs9IoikuFEospdDHBtenJoRZ8m5dJUBZRiX9%2F0Kv8DCE8QABoMNjM3NDIzMTgzODA1Igz6xQq5FIAHpMOTk2Aq3ANkPh9Uda%2FkZrUhPEBvm0bapDxLf5neYsJEc0x97nkCGPa%2FiieTUSXj6STNNaMkS3RW9M4r%2F9ZJelgd%2FcAjCfWnvAhsJZf3mhz1fvbDpUDBLWPChWHr2%2F0e0CJnEpOq9a2THEsbK4WhRh55SfD5OE4PjCC6qAnB4siuRzbMrInJ65y79fE0SuyJw46ikfzjND0sbTECWfA6unoveLJKHGxmeDvIQs2Mh1eMi73cZ9se0C96ntCjiNv3f14dobSU3og%2FNDBx5fu17an3BbLUnG0IOrc46A87b1CdImVyFqrqGISLd%2Fo3BRX6aR1U%2B85Qi3Sk8rXM3A%2BAAOPRSGg8gYB1BHWx29i9xRfIcr2A6duxdPNd8kkoOrwzmFq83PqIz%2FctD2o0epMImuixSwBIPYL%2BabWtXyAk6vUoRv%2FlENDqg9G1lYY3Iwpiu74lGzSwauQKBMSwz2dW73rjnhfZTUhEXfyXmF5qwWviqc48rb8cUGTXNVdIKwoNcMWGhv7KisKNeqQ1r2nhGAx7zBHWzcFJQtEAvHGvW0er3LzMx7ENiw9pCLRAB%2B7%2Bppany4XbybbjTRL1Uk8UnOI7QfCswrdjt3YAPQ0lP8ukfaHJRnF0HeUhD2xjTj6tobduRDCC09PBBjqkAWRacJn3NaCEjeIp3WS%2FsNYy8ar2vvNDqunSepLRtua30396720rN5chGNrDwY8wgH37jkj40tEaiYGgIi1kKvu8yG26sXQoHcTTOpTuiPpDI9ssEdudL%2BQvRR3O4Kt9tTsqhp3tdDnv9wAPcqnDb7Acibobvn2RNjDiFhKvTiE9itMF%2BYicjJxE2bu34abnMP6j4oW%2Fk3k1CHCQ8T2Lizga6Y2L&X-Amz-Signature=af4f4be6e516bdf7c87ee2f5ffa135fe18713bd02a76385650de925c475ef70c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
