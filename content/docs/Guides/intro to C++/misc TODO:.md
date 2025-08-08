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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXJORVUI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDj2NqgVyQII5f%2B2NCxcFB%2BsHkioZDzgMaTtMz8BUv70wIgZfz6H7%2BfVN3hlYVEG%2BGUyc43%2FrJal5dt6NEsulAAvlQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBM43lVtuNtMFcj3CrcA2OQ0et6pykO%2Ft%2BEEip5mXw2qVzfYGf3Mpu7J6G15pu4CeO4B%2Bs%2BrFh5O7tidzKQHHQdc7H5Fj%2Fo3LjVhm%2BPoL6oy7yd66y%2BIU7hWHasKFa7lXRgNMd6OGaUsd3BgXzNvXh48vN%2FIVMPcsrf0E8jvT21pKhXX7yrMYZ61G4CxbSA%2Fj7JIj9PkyKXF8aSILCGUHfzxEuLnX8ClxdAJVDTUvpg8bHzX0oirFYt9LkoxwdZvwGUvAt6r9KMv1cvL8DbYc9laId65j4CJ2I2zbnKismWxxpZpmqVWYeOJjMTxO4I%2BzRPBrV9wRZNmQUjQqfczV5%2BRTlNKogNZ4zTJ1TIaHOqwjOC310KDhUDTPYuGqONRUYPbUJcRn5W1GnQUcdqV2BR97RNfB01k2fc%2FfAkQKf3iVzSmyLgUiphU1kzGr2CcRHcT65CeU0Ytq%2Bv16zPP%2BAwII15mt8MvYp%2BkVFSukkQ40%2BycWHWLjtguU7llybJYL5QCk2CVv1JBTBRxYbj7i7XjeUDbmsqaGxCqo7V6Aoco5ILmek3Kc0Nox4xRpUegTjZNka6psIZUMDbIOu3QLgRyca%2B12tZKiHvvSYeXGs1M21h07AitvgpZ%2BIzFv6O2oKYR70pfzNS%2BE5MMKiI2MQGOqUBbzsh6noGCQyXj90QIPkr13Dy066mj11EqjpuO4b1wd4e4VVxTi%2F1cNQH4aG7B5KLgkmesRaDNRgYe1%2FOYtkAKKQmVZU0NlzjVTldHoMX9QST4Ep4NOHN2oWdLGjpup12iWLQIcXtG6q4fCqRarkGCBW7USsvOthCfBCPYFvsaVgenlX4VM2emHV1sd7r2CbjjqK65URKcixmCfMjrIkgE416a7XS&X-Amz-Signature=8562c84e4573e3ec264e5a7d09409ebda81043396d1824c007ecabbb4bd4eb6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXJORVUI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDj2NqgVyQII5f%2B2NCxcFB%2BsHkioZDzgMaTtMz8BUv70wIgZfz6H7%2BfVN3hlYVEG%2BGUyc43%2FrJal5dt6NEsulAAvlQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBM43lVtuNtMFcj3CrcA2OQ0et6pykO%2Ft%2BEEip5mXw2qVzfYGf3Mpu7J6G15pu4CeO4B%2Bs%2BrFh5O7tidzKQHHQdc7H5Fj%2Fo3LjVhm%2BPoL6oy7yd66y%2BIU7hWHasKFa7lXRgNMd6OGaUsd3BgXzNvXh48vN%2FIVMPcsrf0E8jvT21pKhXX7yrMYZ61G4CxbSA%2Fj7JIj9PkyKXF8aSILCGUHfzxEuLnX8ClxdAJVDTUvpg8bHzX0oirFYt9LkoxwdZvwGUvAt6r9KMv1cvL8DbYc9laId65j4CJ2I2zbnKismWxxpZpmqVWYeOJjMTxO4I%2BzRPBrV9wRZNmQUjQqfczV5%2BRTlNKogNZ4zTJ1TIaHOqwjOC310KDhUDTPYuGqONRUYPbUJcRn5W1GnQUcdqV2BR97RNfB01k2fc%2FfAkQKf3iVzSmyLgUiphU1kzGr2CcRHcT65CeU0Ytq%2Bv16zPP%2BAwII15mt8MvYp%2BkVFSukkQ40%2BycWHWLjtguU7llybJYL5QCk2CVv1JBTBRxYbj7i7XjeUDbmsqaGxCqo7V6Aoco5ILmek3Kc0Nox4xRpUegTjZNka6psIZUMDbIOu3QLgRyca%2B12tZKiHvvSYeXGs1M21h07AitvgpZ%2BIzFv6O2oKYR70pfzNS%2BE5MMKiI2MQGOqUBbzsh6noGCQyXj90QIPkr13Dy066mj11EqjpuO4b1wd4e4VVxTi%2F1cNQH4aG7B5KLgkmesRaDNRgYe1%2FOYtkAKKQmVZU0NlzjVTldHoMX9QST4Ep4NOHN2oWdLGjpup12iWLQIcXtG6q4fCqRarkGCBW7USsvOthCfBCPYFvsaVgenlX4VM2emHV1sd7r2CbjjqK65URKcixmCfMjrIkgE416a7XS&X-Amz-Signature=6d47c00f5fdd05861c198b7540bc89a2e4b31db5a6a32610220f254c62524b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
