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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4DNGI6H%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo0qOyui7dK9HM5DBQQ94GnatVedvvZTbYZpYWtW5qZwIgW1f6OYEtIm9p1UctklKJ%2F6UTVO4Tjh%2BY42nVAcZ%2Bw3EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwssZ0vq62c%2F6N8gyrcA2LIMHibHnuZGxLB6ZOZWwPzzjNmq09ak5mkXhWHU58VhCGGZxiPEQ4FEGxkn%2FDiJdI2wau%2BqHAjCMlqjiSihgeVjLc0yjUu4hnknVTH0Ajzpu6p1JPSI24OI4XKjsIWJQH7UntDq07WOOjx1MVyHc5GHwCRvbCNMEyKDMO%2BWvemzxkonNFKFkm0JetQU5%2FZnEI4h%2FThmcSy2rSxwRKW1JGk7YtXMTcXjtg8DmmSiBzeYnJ3nHtd5Ux0zoxpIL%2Fa2CUjOY6%2FOH6pLyN5FahmzEAWwIqXaPiuHZCFKdpnqkwnan6Hr0ULIKb%2FTSoHbOVYeCkkLcW0neWQn0V0NEPHat%2BIRon%2F64dB8Ty%2FLlvzMDlAv7etskw7ZNiPafTz%2BI%2FdxgTKK1XhHiS%2F7mjueQ%2F5DVARYe5RvtgrokhDQ5qYj8ZF9GrXAiJOmcE9%2FMIJWhOQ9H5ZsYJ3Td5SeDVebUI%2FCuDRSQkVSfijNNLC2N5HwMX5pSEqfXGsIVVCKN%2BR8PKfbId9sksWA8mBJWfF7G10OwRA4juIxUnN3JYFJ%2BUYsaW81gFYU0e0U5zYYJhk6KeAnjmymNjUKyfqx1j%2FJIG0omr%2FBiVTs3URWStlLD2Y14Eg%2FCY8VhkAKmev%2FlplMMqOtr0GOqUBjoSwNLhgM80tRW5t0TcPZHN8R8xv%2B94zSvvSAjPKVgLkFdGMm1gd%2BDGh7hKp%2Bq4zGFtQZFHEZu4CfyD5ugsp4bT73%2Fv17V4OyxYJlX56Kdjc0IAlJ2tUv7XaT2RmRqgpguo3YuGgtTSYLKG6gGj%2BAViZqAZzSmCrjX4Nfblozoo4kjlKIFTmYStJBRsMWx59HMi0WS4tgD3RiT2bbBARMol23V2q&X-Amz-Signature=ceb63c019cb9209625ae33e7e3f7c34d55e0b1d7f6412220043dcd2fb988acf2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4DNGI6H%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo0qOyui7dK9HM5DBQQ94GnatVedvvZTbYZpYWtW5qZwIgW1f6OYEtIm9p1UctklKJ%2F6UTVO4Tjh%2BY42nVAcZ%2Bw3EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwssZ0vq62c%2F6N8gyrcA2LIMHibHnuZGxLB6ZOZWwPzzjNmq09ak5mkXhWHU58VhCGGZxiPEQ4FEGxkn%2FDiJdI2wau%2BqHAjCMlqjiSihgeVjLc0yjUu4hnknVTH0Ajzpu6p1JPSI24OI4XKjsIWJQH7UntDq07WOOjx1MVyHc5GHwCRvbCNMEyKDMO%2BWvemzxkonNFKFkm0JetQU5%2FZnEI4h%2FThmcSy2rSxwRKW1JGk7YtXMTcXjtg8DmmSiBzeYnJ3nHtd5Ux0zoxpIL%2Fa2CUjOY6%2FOH6pLyN5FahmzEAWwIqXaPiuHZCFKdpnqkwnan6Hr0ULIKb%2FTSoHbOVYeCkkLcW0neWQn0V0NEPHat%2BIRon%2F64dB8Ty%2FLlvzMDlAv7etskw7ZNiPafTz%2BI%2FdxgTKK1XhHiS%2F7mjueQ%2F5DVARYe5RvtgrokhDQ5qYj8ZF9GrXAiJOmcE9%2FMIJWhOQ9H5ZsYJ3Td5SeDVebUI%2FCuDRSQkVSfijNNLC2N5HwMX5pSEqfXGsIVVCKN%2BR8PKfbId9sksWA8mBJWfF7G10OwRA4juIxUnN3JYFJ%2BUYsaW81gFYU0e0U5zYYJhk6KeAnjmymNjUKyfqx1j%2FJIG0omr%2FBiVTs3URWStlLD2Y14Eg%2FCY8VhkAKmev%2FlplMMqOtr0GOqUBjoSwNLhgM80tRW5t0TcPZHN8R8xv%2B94zSvvSAjPKVgLkFdGMm1gd%2BDGh7hKp%2Bq4zGFtQZFHEZu4CfyD5ugsp4bT73%2Fv17V4OyxYJlX56Kdjc0IAlJ2tUv7XaT2RmRqgpguo3YuGgtTSYLKG6gGj%2BAViZqAZzSmCrjX4Nfblozoo4kjlKIFTmYStJBRsMWx59HMi0WS4tgD3RiT2bbBARMol23V2q&X-Amz-Signature=6b3785ae888e8a1c866ec225b3d675eaba3bc27048e6c5fecca1413d565bcf98&X-Amz-SignedHeaders=host&x-id=GetObject)

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
