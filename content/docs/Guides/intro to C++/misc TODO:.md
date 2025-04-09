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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU3NGMXK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIEbQ06X3%2FtRE5AIBq09nbUvKBmo8hIwWAm9VI%2FXdOzWKAiA0pTiSqCywxAPYSYCwTyYWJYRD4IMLHktUc6hpA2m1%2FyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCF0j5KhAMJOiqt8ZKtwDn1WxqljN%2FlqT4m2thHH7hFOL%2F28ISVh76crLxcayT8zImOqyxt4ilRWqpmiAoQKFAHyRs4bqgSc6ITAz%2BE18H8OP5W4N%2FIzP5rtdZZSeYE2xWL907VFMzDHVC2HBMLQFJHEfAuh62YggnYUDGsUBntKipN5CEKol2ge4iN5gLYn3FpzCoaGPj%2BLUZhlsrX8a2QM8QLhi7qbLGte3NQ5qECMSJXDwL1%2FuBJlvuWHPSBgdzuTq%2B6UVcbs0O8naI8eUdqQoePteWkDHKTh6q4jH9qXZkv7rGcRNpVVpM6iy9DSZ4BXfCZ4QVPomIy2U5ZXLGqfl0%2Bq6FqBQuFTr34zfRIQ16433CJSAD98tJirqQI4OWJ2ddTzsKfNXTUaBT5Bp47d5xHytDLzhwEfsbpW9bZYYvxdbf3zhlDsb9BfOryH7d7pRKD%2BuAYxM1ljLWCEEMVDZcTkTOepb08LTUK5W%2BcTZKEM2zcgwcrLt0Xl0N1uh7wcVgoAjPGyB92s655Fn03ynArBjkCz3S0oFMyHh3NDQJ05dC4caMTYttZ7bZEzug0CmLhaGX1wGfxe1FopXlWrhF5twnJaYSAAgmYXKODoBWqJFo21svNRb0tltXUCIIx2%2BWwaNTvMs6A4w3r%2FXvwY6pgG1RliTqbb3ddtGOFQX5ty9CnTkmporEkOCFeqAb8AFh2mdOKU6sk%2BChQBfSdU0arsA%2B%2BnAnMfOs26go32M0K9VSNEqHfsG27YL9YyBU%2FvdRxzZ0TW2kWewpd115SgDFA148YHW%2FmTNgtt4foBzqzD49CfOOPAun%2BxQXGdJgdxhMwlwPczsAeNzCmdL6b17jPSmAzRJEjOkanzf5rxFMR%2FO0rlhZqOX&X-Amz-Signature=1fdbdcd5cf9fc6a4119c792b894f83c9cc50ad23bcff1fc3323d824b2c023f58&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU3NGMXK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIEbQ06X3%2FtRE5AIBq09nbUvKBmo8hIwWAm9VI%2FXdOzWKAiA0pTiSqCywxAPYSYCwTyYWJYRD4IMLHktUc6hpA2m1%2FyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCF0j5KhAMJOiqt8ZKtwDn1WxqljN%2FlqT4m2thHH7hFOL%2F28ISVh76crLxcayT8zImOqyxt4ilRWqpmiAoQKFAHyRs4bqgSc6ITAz%2BE18H8OP5W4N%2FIzP5rtdZZSeYE2xWL907VFMzDHVC2HBMLQFJHEfAuh62YggnYUDGsUBntKipN5CEKol2ge4iN5gLYn3FpzCoaGPj%2BLUZhlsrX8a2QM8QLhi7qbLGte3NQ5qECMSJXDwL1%2FuBJlvuWHPSBgdzuTq%2B6UVcbs0O8naI8eUdqQoePteWkDHKTh6q4jH9qXZkv7rGcRNpVVpM6iy9DSZ4BXfCZ4QVPomIy2U5ZXLGqfl0%2Bq6FqBQuFTr34zfRIQ16433CJSAD98tJirqQI4OWJ2ddTzsKfNXTUaBT5Bp47d5xHytDLzhwEfsbpW9bZYYvxdbf3zhlDsb9BfOryH7d7pRKD%2BuAYxM1ljLWCEEMVDZcTkTOepb08LTUK5W%2BcTZKEM2zcgwcrLt0Xl0N1uh7wcVgoAjPGyB92s655Fn03ynArBjkCz3S0oFMyHh3NDQJ05dC4caMTYttZ7bZEzug0CmLhaGX1wGfxe1FopXlWrhF5twnJaYSAAgmYXKODoBWqJFo21svNRb0tltXUCIIx2%2BWwaNTvMs6A4w3r%2FXvwY6pgG1RliTqbb3ddtGOFQX5ty9CnTkmporEkOCFeqAb8AFh2mdOKU6sk%2BChQBfSdU0arsA%2B%2BnAnMfOs26go32M0K9VSNEqHfsG27YL9YyBU%2FvdRxzZ0TW2kWewpd115SgDFA148YHW%2FmTNgtt4foBzqzD49CfOOPAun%2BxQXGdJgdxhMwlwPczsAeNzCmdL6b17jPSmAzRJEjOkanzf5rxFMR%2FO0rlhZqOX&X-Amz-Signature=817d0694857c32e9dd25bb312fe26f39d3f7ea43a5d94890754b6afdfac7ccb9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
