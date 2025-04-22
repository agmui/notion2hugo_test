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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OO2Y6P2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCtEFcSIFOXAPd2riJ5RIqa6cQLTO0XEgfEcJY467N2ZAIgehNMmSN%2BaeL0JYTBo1%2BySghHrfo3zzJwyXK7vM0qXC8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJstmCl0OqzkcPumySrcA%2FiX%2B%2Bn0l2nL8m%2FyVyHrxzFyvzezjfPSa91Ervmwu2hWcBZOAioOZbN19K3%2BNXaTE2lwdWRE1%2B3p8UqIOXZ1t%2BqdYJc6S%2F1iNmWFEym%2BNjU%2BeBtxITLkZ95nJnWye5Trwin9YHTGAJNVfF8%2Fo4gxTOkxSTDTCF5rNN%2BqZUoJBtxdeulyFTdRooWB%2Bs6QQjpuUeWLKv2xrhL2Y41Who1BSqGKFOCOJgl4Slsba5zYiqtTPthG7hcR1RPDrHLVoGADwKiH2VgXDe%2Fwm27Ggrpe9H1stUUyC%2B16lyEv7CYV%2Ba5APr5E9NGq31rtVcEYaBE2AVXNflHT5UHBABLHjF%2FyTtTGkjcx9baGPmoTMk19IWUz7oiWXlFMvT2UpJriJDo0O1ivTk5mlXXgLRA%2BBh%2B0B%2Bz740goyIaKb%2FxmY0I52neZYp3eZ5iPUKopJc6qPOm4sZt7hVs9VgwzQBq5LglGxqoNkB4btELxNk6Lan99nEdfmrU3mIMdGdL6imVfDZ62ypvnKLsAn4585KR5L8hNY90nGVELKG4qgef%2BS56CrbDTsKdWlbnIeKEj%2B9gEqYmZ7FEUF%2B5s6Np9yiIQpTtov5yBrit0UUw3YjA2xTQcfNpXJLogZh7wbAOSERmxMNm6m8AGOqUBZDVeMFA12TVj5s3RXRHR5Yv0aaSppBotoLYCoI5mgJQTd04JYmJ8k9YmZYmTrx8bz0Mwlp8AuBsK77U%2BbU8qUHEXLATbqT8SrpvakPpfOQnBXN4jVv3eu5x7hbf5gxJog%2BV1lWj%2F4b19vW%2BG61LwhAgkowTDjrdELAWjxBssORXpvA7n%2BYaMorU%2BxjTk5NpnBC0HzwNFMwpNB0gmBa9gojkukBP3&X-Amz-Signature=6e002343295c202be0542e132ed3a7db3300e519060d51da194c5e56cd0597dc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OO2Y6P2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCtEFcSIFOXAPd2riJ5RIqa6cQLTO0XEgfEcJY467N2ZAIgehNMmSN%2BaeL0JYTBo1%2BySghHrfo3zzJwyXK7vM0qXC8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJstmCl0OqzkcPumySrcA%2FiX%2B%2Bn0l2nL8m%2FyVyHrxzFyvzezjfPSa91Ervmwu2hWcBZOAioOZbN19K3%2BNXaTE2lwdWRE1%2B3p8UqIOXZ1t%2BqdYJc6S%2F1iNmWFEym%2BNjU%2BeBtxITLkZ95nJnWye5Trwin9YHTGAJNVfF8%2Fo4gxTOkxSTDTCF5rNN%2BqZUoJBtxdeulyFTdRooWB%2Bs6QQjpuUeWLKv2xrhL2Y41Who1BSqGKFOCOJgl4Slsba5zYiqtTPthG7hcR1RPDrHLVoGADwKiH2VgXDe%2Fwm27Ggrpe9H1stUUyC%2B16lyEv7CYV%2Ba5APr5E9NGq31rtVcEYaBE2AVXNflHT5UHBABLHjF%2FyTtTGkjcx9baGPmoTMk19IWUz7oiWXlFMvT2UpJriJDo0O1ivTk5mlXXgLRA%2BBh%2B0B%2Bz740goyIaKb%2FxmY0I52neZYp3eZ5iPUKopJc6qPOm4sZt7hVs9VgwzQBq5LglGxqoNkB4btELxNk6Lan99nEdfmrU3mIMdGdL6imVfDZ62ypvnKLsAn4585KR5L8hNY90nGVELKG4qgef%2BS56CrbDTsKdWlbnIeKEj%2B9gEqYmZ7FEUF%2B5s6Np9yiIQpTtov5yBrit0UUw3YjA2xTQcfNpXJLogZh7wbAOSERmxMNm6m8AGOqUBZDVeMFA12TVj5s3RXRHR5Yv0aaSppBotoLYCoI5mgJQTd04JYmJ8k9YmZYmTrx8bz0Mwlp8AuBsK77U%2BbU8qUHEXLATbqT8SrpvakPpfOQnBXN4jVv3eu5x7hbf5gxJog%2BV1lWj%2F4b19vW%2BG61LwhAgkowTDjrdELAWjxBssORXpvA7n%2BYaMorU%2BxjTk5NpnBC0HzwNFMwpNB0gmBa9gojkukBP3&X-Amz-Signature=6c27cd5ad989a99d5aeb270f0ca401544923ab160830c5d68a65360ae565d687&X-Amz-SignedHeaders=host&x-id=GetObject)

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
