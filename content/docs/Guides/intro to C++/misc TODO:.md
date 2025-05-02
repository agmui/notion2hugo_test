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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3ZET7OF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCU0PeMJNibyfEgGspRz3zy%2Bsuz3YoepWX8y8ZagtpgDgIhAJVNlt1VpcaQQ0Eps4Dgp2w2ZKoF3KM9xEFGTnvau8YgKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoKThV4YN176a8kT4q3AOH3yUlgkW7Y%2FX3q1Bsz814RWxhDZEdrwR8ruT4PKSZD91AmX9cnOzeLU9eNcwLBLVf1wtYK%2FGmGUrSPTz0VJfHwGSWcxCYIGigErWYmwyoijfz9bXDa7lt%2FvSZSKdoBydmhIxK5%2F0%2BgprMmpdz9iBmXSmOS%2Bxzs4O6pyvOLuZpOvDilomSpqD6fGA1pCgdymaRLMdsf6tSpvcr%2FjTTVEwE4aeoUXyTthTlUi6s9clXicwct40WGFmH4WHoT1mLQMrpWONrHqB16ki9om7E5XoxV5q7zC6R6qEtg8vK85oLe4feglJtGCko5kEbSaHXGLjLSUAczV%2B8hpJhD8r%2B6tMG1GxwABavn2AM%2FRMAuqrg%2Brx6zeWBEY9Lm1judjHCW5%2FvIEj8Zvno2kIUb%2B2zycvs%2BNur9PuSBVxQwBsxkSu2htmXtzi0pXmZt%2BzcDG4YC4ypaGVzKToS2Z4nxecXEf7yHUlGZUtDSdLnFObAZx4q5dgsEUdQpeC2oN7SVcUng31AEPsWTsVXI48V4jgRGvNxV4mjN59%2BexKXWLDlYHWCnDDniArVvZrEsN8CFnKZZS15LkiYpnSvAg4u0i2j3lAoaAMQev5%2B7TActFFKfrA9ekjabn2SQ9EfwXpOSzCEitXABjqkASymHWHrDnBKFW6CwaNn%2B6nHsVbtvWFD%2FZPO9fO9m5ZRHukIKB%2BDsNFdUGmYzVX8JG9iGOf5SaepXgLB4%2F86OAaIjtSo4NIdDwZU67ExdxRHk5gVjaYytEkvb9cXXz%2FsQYFj%2B5yKnTM5YU3UDkBfJKr7A%2BV%2FNCxfMtEzuNyN6iE2b2z0065OpZ%2B0VPS7ODr9L837L3VRNblu113CkZ4VdUK8CC%2BQ&X-Amz-Signature=149b820682fd5472b0aabdb4b8b4e07661a2f697b6f54be483ad9528339a41c8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3ZET7OF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCU0PeMJNibyfEgGspRz3zy%2Bsuz3YoepWX8y8ZagtpgDgIhAJVNlt1VpcaQQ0Eps4Dgp2w2ZKoF3KM9xEFGTnvau8YgKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoKThV4YN176a8kT4q3AOH3yUlgkW7Y%2FX3q1Bsz814RWxhDZEdrwR8ruT4PKSZD91AmX9cnOzeLU9eNcwLBLVf1wtYK%2FGmGUrSPTz0VJfHwGSWcxCYIGigErWYmwyoijfz9bXDa7lt%2FvSZSKdoBydmhIxK5%2F0%2BgprMmpdz9iBmXSmOS%2Bxzs4O6pyvOLuZpOvDilomSpqD6fGA1pCgdymaRLMdsf6tSpvcr%2FjTTVEwE4aeoUXyTthTlUi6s9clXicwct40WGFmH4WHoT1mLQMrpWONrHqB16ki9om7E5XoxV5q7zC6R6qEtg8vK85oLe4feglJtGCko5kEbSaHXGLjLSUAczV%2B8hpJhD8r%2B6tMG1GxwABavn2AM%2FRMAuqrg%2Brx6zeWBEY9Lm1judjHCW5%2FvIEj8Zvno2kIUb%2B2zycvs%2BNur9PuSBVxQwBsxkSu2htmXtzi0pXmZt%2BzcDG4YC4ypaGVzKToS2Z4nxecXEf7yHUlGZUtDSdLnFObAZx4q5dgsEUdQpeC2oN7SVcUng31AEPsWTsVXI48V4jgRGvNxV4mjN59%2BexKXWLDlYHWCnDDniArVvZrEsN8CFnKZZS15LkiYpnSvAg4u0i2j3lAoaAMQev5%2B7TActFFKfrA9ekjabn2SQ9EfwXpOSzCEitXABjqkASymHWHrDnBKFW6CwaNn%2B6nHsVbtvWFD%2FZPO9fO9m5ZRHukIKB%2BDsNFdUGmYzVX8JG9iGOf5SaepXgLB4%2F86OAaIjtSo4NIdDwZU67ExdxRHk5gVjaYytEkvb9cXXz%2FsQYFj%2B5yKnTM5YU3UDkBfJKr7A%2BV%2FNCxfMtEzuNyN6iE2b2z0065OpZ%2B0VPS7ODr9L837L3VRNblu113CkZ4VdUK8CC%2BQ&X-Amz-Signature=8462fe757618eb57900fbe8d9051f779cc0117b8c64bba065e191b0ddf8abe1f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
