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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOZANIA7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIGQTo6MxrWW00IIBVkMnSkXRrZAUAuNg0uksp5PIZ5tWAiADtQHy3TSMACZ9jf%2BI8ewAGK5Yt8Syxs5uARYH0XlFSSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM6wL1j9r7C4RbmVN1KtwDRML85jUEnG%2FyLpyYe1HITQJ0z5PqYeqxU3c7dF7sx94M4uxfeFZisoKnM5f80oTwkFM1vAzgjHpaWEq3ccbnkyZZjbvK8CqDOEc9bdEYEZ%2BvzYaQog1ki4ikzIwC9J6syeFU4eDUJ%2BGytVNoLWQ6TB95vmhRfa5XWcAVQHugHN201ZpazPgH0PbGzPcc5hyeKnZgATh9yJ0oR6ap1tn8aZUai7R1H7SVaraQ3pDYPywn82sLSTdqDqB7PSslG1op4GIwWx%2BquAU8eVt5G7VhHMc44LXcbfbBT3dDa8wBKs2SczwjTVOYKLQu%2FD2uBmO3W40UKIiE3EGLDx2y%2BGPfFPVCPSqe9q7dmKKTby4GY4Fb1flKICnAf3XaDRb%2Fd0mJO8A07JJZqEqgXWPRq6sb6C3OBTiilo2GdVUCIB%2FkllwHpueml9y5K6OkrwiG8VNJlG%2FB34rPttKnC6xPkpOGB4h9w27i1WFH1tQcmbkEFgGFpXN0fBR7Ne1Pfw%2FTMyvqI3bL4ipEUMk47V1UD%2BuDeZWKix4eBYK9XsgyJhxLSvjNYzmNyfbdqFshPvQ%2F1DOmtTH2CA0CjyqoPLZT5hqSP6uU8bjZdWgmv%2Bjqzg%2Blxa%2FsEy4nvE%2Fb7RxZ%2Ft0wu%2BigwwY6pgGZm9NZyiKL5NiZUsZKgzow5ARjhgx7gEeI5vylVwDxY0aMQt8GK7UxvsXiwLas5NGSg65TL6lwiei0mae95cqZAVdY%2Bh0fnQVy%2FNlEjWSqR3l%2BmCC8iLNGEV2gNgIcHbOn9T1RLLi7WhAFIZ1oAeR4TFfaN3bOylFmLxX4QedvDNxer82qMU6wO1hwBIhscf72eLplSpOCX5u9Dgvpm4agrCz0ttP4&X-Amz-Signature=8df283d3d7c658ea36e9ca6d5f69dbb39871a54e8b5247a75441db2dc3a3ce80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOZANIA7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIGQTo6MxrWW00IIBVkMnSkXRrZAUAuNg0uksp5PIZ5tWAiADtQHy3TSMACZ9jf%2BI8ewAGK5Yt8Syxs5uARYH0XlFSSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM6wL1j9r7C4RbmVN1KtwDRML85jUEnG%2FyLpyYe1HITQJ0z5PqYeqxU3c7dF7sx94M4uxfeFZisoKnM5f80oTwkFM1vAzgjHpaWEq3ccbnkyZZjbvK8CqDOEc9bdEYEZ%2BvzYaQog1ki4ikzIwC9J6syeFU4eDUJ%2BGytVNoLWQ6TB95vmhRfa5XWcAVQHugHN201ZpazPgH0PbGzPcc5hyeKnZgATh9yJ0oR6ap1tn8aZUai7R1H7SVaraQ3pDYPywn82sLSTdqDqB7PSslG1op4GIwWx%2BquAU8eVt5G7VhHMc44LXcbfbBT3dDa8wBKs2SczwjTVOYKLQu%2FD2uBmO3W40UKIiE3EGLDx2y%2BGPfFPVCPSqe9q7dmKKTby4GY4Fb1flKICnAf3XaDRb%2Fd0mJO8A07JJZqEqgXWPRq6sb6C3OBTiilo2GdVUCIB%2FkllwHpueml9y5K6OkrwiG8VNJlG%2FB34rPttKnC6xPkpOGB4h9w27i1WFH1tQcmbkEFgGFpXN0fBR7Ne1Pfw%2FTMyvqI3bL4ipEUMk47V1UD%2BuDeZWKix4eBYK9XsgyJhxLSvjNYzmNyfbdqFshPvQ%2F1DOmtTH2CA0CjyqoPLZT5hqSP6uU8bjZdWgmv%2Bjqzg%2Blxa%2FsEy4nvE%2Fb7RxZ%2Ft0wu%2BigwwY6pgGZm9NZyiKL5NiZUsZKgzow5ARjhgx7gEeI5vylVwDxY0aMQt8GK7UxvsXiwLas5NGSg65TL6lwiei0mae95cqZAVdY%2Bh0fnQVy%2FNlEjWSqR3l%2BmCC8iLNGEV2gNgIcHbOn9T1RLLi7WhAFIZ1oAeR4TFfaN3bOylFmLxX4QedvDNxer82qMU6wO1hwBIhscf72eLplSpOCX5u9Dgvpm4agrCz0ttP4&X-Amz-Signature=bd0ebef8fdcf9a1f9b3da0563a6111249fa30732104051037952e5c952ba42ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
