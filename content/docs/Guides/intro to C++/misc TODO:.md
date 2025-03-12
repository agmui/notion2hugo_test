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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEGQQTW6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD8sVvN4Rpc3eQNAw17XvkijJT9F5eYpGJBBCaF70p9nQIgUnnYIvFghudQgxBfL%2FAava7c552iq1%2BD4o2qvAyRG7oqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfRJcJrfEh06xvlGyrcA9pfOsztVT692olHBu3LwlxqZNOuROv0dJH1Q22coBTSZlM9guh1aK7wjIBLZ%2BCjyHFvFXH6D06q6JOWmGgPsNMQfoS4zbagI1YhTtpgY9IX8%2BNa2I4KW2QYT27Gpa0AASz4bD2UhSTXwA7IIMW7GwI1d40oczrf9PEt95WtjITrAuP%2FUEaY76sIk%2Fi%2BEq%2FMz024uTJN1CTqJWRRPZuC%2FBpbmXwW9H1aOmKKiciBiGsteZ6WwacK4ys0pY8I67Ucib9ITWbmqiX3H8WUI1RUuqLF21L1DRrOq4Ap4WyjyV70wWi0UoIr7G1Hqz%2Bh34EQd6DGGq7b0bxKWx34NjeUQNeH4iqXLzoGD1Xw72othMxcaGmV0Nj%2BKjj7SwUcD0Hi%2B56x5cpwgZPxNxzgW2sPj8dYl4nz%2Bc42f7qJ8ujlc%2FhzKrNzssrIrvKi7G%2F27s%2FZ7itIS46jfHlRXmwFPj%2Buu7sCrZGm5GyPrcFCs5dO0eNPeb3j3q%2Bn8GDJTEHvMkRx861nqU3kzIkiDX%2FjzDwX2y7UQI67lBTX5I23Xeon%2F4qwK7LliHgxuHhKjz8sHfpf%2BplwgZEk%2F8eWDfpBfUJa9IiRUCFTVqxc9Y5GEUpZcXDRiNb5A60hhwD7vwO9MPn6w74GOqUBXVI%2B2IGx7c9KpsOY6uz9J%2FthM%2FsxsUWP5RxiUyT67jQscOTuzY4lMFm6ZSh48Yke7M8CrJ5uVKKJtiXWOifABTv83UM1gPCbAR9Q9G3hIZ5r84zJlwgwjg%2F0CQB9xxBsgqJy2H58iNGURTLmVnLJLBTVm%2Fq5gFMZF4XgLFDbyUJDtEXgFNrth6ZbCFsP4JCOP7ASPllDGs1LSuoSpKSqAGiwmDE2&X-Amz-Signature=e6e66d44bfd8b39ced3d570ae30855996a535f36792f5d2dfd4e3584c0f3c603&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEGQQTW6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD8sVvN4Rpc3eQNAw17XvkijJT9F5eYpGJBBCaF70p9nQIgUnnYIvFghudQgxBfL%2FAava7c552iq1%2BD4o2qvAyRG7oqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfRJcJrfEh06xvlGyrcA9pfOsztVT692olHBu3LwlxqZNOuROv0dJH1Q22coBTSZlM9guh1aK7wjIBLZ%2BCjyHFvFXH6D06q6JOWmGgPsNMQfoS4zbagI1YhTtpgY9IX8%2BNa2I4KW2QYT27Gpa0AASz4bD2UhSTXwA7IIMW7GwI1d40oczrf9PEt95WtjITrAuP%2FUEaY76sIk%2Fi%2BEq%2FMz024uTJN1CTqJWRRPZuC%2FBpbmXwW9H1aOmKKiciBiGsteZ6WwacK4ys0pY8I67Ucib9ITWbmqiX3H8WUI1RUuqLF21L1DRrOq4Ap4WyjyV70wWi0UoIr7G1Hqz%2Bh34EQd6DGGq7b0bxKWx34NjeUQNeH4iqXLzoGD1Xw72othMxcaGmV0Nj%2BKjj7SwUcD0Hi%2B56x5cpwgZPxNxzgW2sPj8dYl4nz%2Bc42f7qJ8ujlc%2FhzKrNzssrIrvKi7G%2F27s%2FZ7itIS46jfHlRXmwFPj%2Buu7sCrZGm5GyPrcFCs5dO0eNPeb3j3q%2Bn8GDJTEHvMkRx861nqU3kzIkiDX%2FjzDwX2y7UQI67lBTX5I23Xeon%2F4qwK7LliHgxuHhKjz8sHfpf%2BplwgZEk%2F8eWDfpBfUJa9IiRUCFTVqxc9Y5GEUpZcXDRiNb5A60hhwD7vwO9MPn6w74GOqUBXVI%2B2IGx7c9KpsOY6uz9J%2FthM%2FsxsUWP5RxiUyT67jQscOTuzY4lMFm6ZSh48Yke7M8CrJ5uVKKJtiXWOifABTv83UM1gPCbAR9Q9G3hIZ5r84zJlwgwjg%2F0CQB9xxBsgqJy2H58iNGURTLmVnLJLBTVm%2Fq5gFMZF4XgLFDbyUJDtEXgFNrth6ZbCFsP4JCOP7ASPllDGs1LSuoSpKSqAGiwmDE2&X-Amz-Signature=ff27f478aeccdbc80999573bb8650bd1110c0cdbe0e0fea1fde12bed1beaa1b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
