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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIFWLVGZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlfeaWkubQd1wPQNA9nr2BPn3BlLZRkaJtGG4LlEn5HwIgLuR5uL8S0fSDnfKjePKKJuCQV%2B%2F6FM0u8PYfs%2FNnT70qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoew%2BSFncL0zHk1sCrcA1v6fUROIRHXpBwwDWhuqDakL%2FAha6vLL4odztYgwPTwF56Bz6DrOJMlaiiwhihUXia7j9VZS2gPLtwbWmrEGSRbfbfN47HMCXejBuUaZyn4NSX%2BpNr%2BmtiKBLoI10QIM1SDECw6ZJhL%2Bt8l5dlsv6pFAC5g9WsAiBsTyoixGmSA5sQKAGh%2F5P4iACmr%2F2IypdKh6iaIPpafhBG2mFxK017gFvJ5RuoSbq%2FanmG1HmUlQE62vAeLFN8FAK5lPSSv6UjhvRs9eut8u%2By9Xtg%2FaoiWXaaeix%2BqsQyJj%2Bz0Lq4J7zZZJYq%2FSRwa1kEsyTT0bPitpULwfEYS3dfwbrCbIKuYkw1iDhQxca7PV5QrcPn6%2FvkFoolFrA7O3UExf2laNfkRWabtH844t1jss10Pe%2BHZ3tNntckUaJ0cRPnVrGdUPdKrUQSfRmvkdW%2BtWJbAEfXax57TS7qpzvL%2FLTNc4XlO4hVIYWwQUcXLnTK2FzdFhPIHlZ0KpGp9O8y%2FpIVrznzenG7Di65NYXD2tMOH3OZaX2Q5ELixS%2Fy78qI0xIU0pEHhzSNFk2qd8eD5NGIt1J%2FJjFAVAr5FRDCtm3Lp4widnJhyIrqrKC6eFQwKTppzzaVS8g1NRORPoy16MJy1sr0GOqUBH2eVUNscUiwzOFgwB94%2Fx1%2F%2FveFaGXZxFMBOy31x%2BevJRN%2BCsKpi3%2FA%2FyBMthfNYcZsSj3kaohUMgKu5ndl9TCMtVZKKvjGZnOqMPtNJRIh9JDLRjgbCrI3P7eWa0TSHgBn2EyMHiBACOCttVdoxfCrvsfxsN7HiHaA4vmpNKOTYJxi8t%2BR%2B2zAhrnqDFV7miyKC%2FH0vJUOPU526ezUTxErVMWOd&X-Amz-Signature=5e8ce250e241ceaa9e3a85b23175cf92f0f84ab50d6691e665a25712ff7d4c10&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIFWLVGZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlfeaWkubQd1wPQNA9nr2BPn3BlLZRkaJtGG4LlEn5HwIgLuR5uL8S0fSDnfKjePKKJuCQV%2B%2F6FM0u8PYfs%2FNnT70qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoew%2BSFncL0zHk1sCrcA1v6fUROIRHXpBwwDWhuqDakL%2FAha6vLL4odztYgwPTwF56Bz6DrOJMlaiiwhihUXia7j9VZS2gPLtwbWmrEGSRbfbfN47HMCXejBuUaZyn4NSX%2BpNr%2BmtiKBLoI10QIM1SDECw6ZJhL%2Bt8l5dlsv6pFAC5g9WsAiBsTyoixGmSA5sQKAGh%2F5P4iACmr%2F2IypdKh6iaIPpafhBG2mFxK017gFvJ5RuoSbq%2FanmG1HmUlQE62vAeLFN8FAK5lPSSv6UjhvRs9eut8u%2By9Xtg%2FaoiWXaaeix%2BqsQyJj%2Bz0Lq4J7zZZJYq%2FSRwa1kEsyTT0bPitpULwfEYS3dfwbrCbIKuYkw1iDhQxca7PV5QrcPn6%2FvkFoolFrA7O3UExf2laNfkRWabtH844t1jss10Pe%2BHZ3tNntckUaJ0cRPnVrGdUPdKrUQSfRmvkdW%2BtWJbAEfXax57TS7qpzvL%2FLTNc4XlO4hVIYWwQUcXLnTK2FzdFhPIHlZ0KpGp9O8y%2FpIVrznzenG7Di65NYXD2tMOH3OZaX2Q5ELixS%2Fy78qI0xIU0pEHhzSNFk2qd8eD5NGIt1J%2FJjFAVAr5FRDCtm3Lp4widnJhyIrqrKC6eFQwKTppzzaVS8g1NRORPoy16MJy1sr0GOqUBH2eVUNscUiwzOFgwB94%2Fx1%2F%2FveFaGXZxFMBOy31x%2BevJRN%2BCsKpi3%2FA%2FyBMthfNYcZsSj3kaohUMgKu5ndl9TCMtVZKKvjGZnOqMPtNJRIh9JDLRjgbCrI3P7eWa0TSHgBn2EyMHiBACOCttVdoxfCrvsfxsN7HiHaA4vmpNKOTYJxi8t%2BR%2B2zAhrnqDFV7miyKC%2FH0vJUOPU526ezUTxErVMWOd&X-Amz-Signature=95994c755e5bc8ef6f55275e3fd85d7e0a41b447049205871f426168bb61f6ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
