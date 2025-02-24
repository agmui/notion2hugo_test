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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZEYQHXW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2FW4ZN4eoQEnYQShGY%2F9yG%2BW8XPdlGjKkdeprxOkNPAiEAinVZ1aiauZpE6Ey%2Fhx320TIyKHWfDO42ujNrAibtN6Eq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGjZDUfTJYyw34FsoSrcA2YdMFltFjMbAEoc3NWwd7vlNEZy0iub56QY9U0Zzky8%2F63cdMVUJscEoqQCqUbK3w%2FaG8R0td%2FwtH8yvWoKCJlU8Ysyy5m5wZzka3j6wAdv7c%2FWquux2mBu7A2kvLoXmidxW9fSTDi7kz1q4Un7gUdXa1zAmnppqMn1g94ltQr66KhL6T3jh2nZ%2B1kHGA6H%2F%2BspCirhWyMeJLjXG12Jm8T3zzPrzy4301B6d2xwyNsfgXfhrFuVYHfvqiOst5FItn0cfZxmVduvp7asinN5emP2QzQS5wbHnG9r37x%2FNpdeaOV2R7okubuD9cfgusz7pWPfOrCuANZ5WqmyGwTvfq28V%2FfKu8EnZjRqv8eSpD4iLH4uzMCVPn%2FMKKf4iEG7H3qsm%2Fc14nfebcsbz8rp38w%2F6cH6RBqhqUxHmY7%2BGfyte2uV0dtk9q2f%2BpQmiFVp2hXhmNOJDKJxM3TRKvz7%2BbRRuzNaZvrgpbjZd4DzLDs3w6d8hrHZPhcQnsBGEaq5xHBD0GyMFsnyUR3O0FJkNc1sQCNh8ZpMLBRWOKH%2BEGiuSMsCOJorEeS%2BlVCbVZQqy6DGicaNqZtadZMUyLKIMd14wUR%2B5ROedL5ro6m2B3706Bnj6rQ0QE9JFrKdMKTx7r0GOqUBoZyt3vZ%2BAPK%2F172IZou5eKDuZKYELnq54de5iv8eh9tXQnkntrYSsiq8fc%2BTHkMEviS7KXV9wo8%2BSeSsoJz72ju8jT%2FVf%2BzKO0YsrPBa7TJtVXPPzr11kCsO4bE55yK6MmPwmbyFLCbScY7Ci0%2BBI7q8f%2FaWQcAaKpG730wtg1tRTHa8aGl%2BK0APkLOf95sTaUt6GO1C66gtJ%2FMJll5%2Bwi1hAQWu&X-Amz-Signature=9dc2a975415dbadae7b93801821343c1faafe9967b6f69719fb0ef15a09a162d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZEYQHXW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2FW4ZN4eoQEnYQShGY%2F9yG%2BW8XPdlGjKkdeprxOkNPAiEAinVZ1aiauZpE6Ey%2Fhx320TIyKHWfDO42ujNrAibtN6Eq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGjZDUfTJYyw34FsoSrcA2YdMFltFjMbAEoc3NWwd7vlNEZy0iub56QY9U0Zzky8%2F63cdMVUJscEoqQCqUbK3w%2FaG8R0td%2FwtH8yvWoKCJlU8Ysyy5m5wZzka3j6wAdv7c%2FWquux2mBu7A2kvLoXmidxW9fSTDi7kz1q4Un7gUdXa1zAmnppqMn1g94ltQr66KhL6T3jh2nZ%2B1kHGA6H%2F%2BspCirhWyMeJLjXG12Jm8T3zzPrzy4301B6d2xwyNsfgXfhrFuVYHfvqiOst5FItn0cfZxmVduvp7asinN5emP2QzQS5wbHnG9r37x%2FNpdeaOV2R7okubuD9cfgusz7pWPfOrCuANZ5WqmyGwTvfq28V%2FfKu8EnZjRqv8eSpD4iLH4uzMCVPn%2FMKKf4iEG7H3qsm%2Fc14nfebcsbz8rp38w%2F6cH6RBqhqUxHmY7%2BGfyte2uV0dtk9q2f%2BpQmiFVp2hXhmNOJDKJxM3TRKvz7%2BbRRuzNaZvrgpbjZd4DzLDs3w6d8hrHZPhcQnsBGEaq5xHBD0GyMFsnyUR3O0FJkNc1sQCNh8ZpMLBRWOKH%2BEGiuSMsCOJorEeS%2BlVCbVZQqy6DGicaNqZtadZMUyLKIMd14wUR%2B5ROedL5ro6m2B3706Bnj6rQ0QE9JFrKdMKTx7r0GOqUBoZyt3vZ%2BAPK%2F172IZou5eKDuZKYELnq54de5iv8eh9tXQnkntrYSsiq8fc%2BTHkMEviS7KXV9wo8%2BSeSsoJz72ju8jT%2FVf%2BzKO0YsrPBa7TJtVXPPzr11kCsO4bE55yK6MmPwmbyFLCbScY7Ci0%2BBI7q8f%2FaWQcAaKpG730wtg1tRTHa8aGl%2BK0APkLOf95sTaUt6GO1C66gtJ%2FMJll5%2Bwi1hAQWu&X-Amz-Signature=ea3e42b47bdf13379f9de0f2be13bfada99e7fbf082fb001c6cf34dd7b589a0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
