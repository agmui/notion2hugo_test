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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3CW2IBS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFoMU3PGaJ6ZkJvMLiV%2FlXAjRJD2Yb21tP29Re3MQZFnAiEAmt1qHQCxXrYAQZiJE2EnwBmVXZPG4VUaP1%2B09Arl%2BnYq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGido9RIx6DBtcnP%2FSrcA%2BGejTJi40dHAD67TXz67McCnj8ge%2FAcx6KNjOs9Ld37M7GnCKDFsHuHOsPARE%2Fi3dUYmjD53TlqjNkc0OfQJJ0JVIJgh9PyIXvSmk0jhLgx2%2BzNAv0iRGgCXe%2Boh36COPM9gxVXenCENUu2Zhk3hvMh658fLBn1pn4GvHUdwWXBVBjC1kjJ0tOzNf2zJUYuaKltVt27tkqD7BkTZ6sg9yT8XSn4CxbUtCXcHDu0EHyvKkYhB4koaduxE3%2Fle5O2FgQqVdQEh7%2BUsecB30Fahtdm95ENa7kHuFwDwK1sGL9mwQ7%2BZJ5RLOG7TTkJnyYc33i6wIyaapHFXUIQJXbhlqxtQqwXihIYMSjwClpBlXeB6%2BplHID7kqWEC7D6iCmLgZYkqpacqhG6%2F6uHBQDdgTD4XIi0U2z4sOEH%2Fh2M%2FtRQRTT2hRnyucELTO%2F%2BSwZE1kpqfGs2MGWTZ9MW%2FSFGLdchcGcs%2FIPfEmJVHtVXJFfZVs7eycE3Fw0jeqlU8zUCWSYjENtdKTMzTwUeB%2FCZNBW4vx9Z3%2BdYVTWTdDCQq5haqKlIQBHa7%2FjgXFziSoTQPCWUpDGKiUhxK87Txp4cg9zqLp25nhyYimFmztIQVPQG5QK0IGZp%2BZ6OxB4gMOzQur0GOqUBzrFe%2BnkrocgqzJYNNAv4duqQIU96pWRUacFKajHv8wdnClTWDbL5nY7b09gHxxw2dKybb4%2Fo3XswPerBzM5Hyut56i9uqQ196t71IMRK12d3ejeUeZJD%2B5p6KASjW%2FmJI1IY5Q2Xj%2BB4xO4ghM36yk2vwBJOn4hI5qpkaaq%2BsyQsjuWia9pWnmoy4hyxNBfIeQNHb0vNhPtjC8QmlnYcp3U2AcWI&X-Amz-Signature=f400ebd901b895aad576176ff835b41e9d92d21a6376f2adf35ce94fa00a4054&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3CW2IBS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFoMU3PGaJ6ZkJvMLiV%2FlXAjRJD2Yb21tP29Re3MQZFnAiEAmt1qHQCxXrYAQZiJE2EnwBmVXZPG4VUaP1%2B09Arl%2BnYq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGido9RIx6DBtcnP%2FSrcA%2BGejTJi40dHAD67TXz67McCnj8ge%2FAcx6KNjOs9Ld37M7GnCKDFsHuHOsPARE%2Fi3dUYmjD53TlqjNkc0OfQJJ0JVIJgh9PyIXvSmk0jhLgx2%2BzNAv0iRGgCXe%2Boh36COPM9gxVXenCENUu2Zhk3hvMh658fLBn1pn4GvHUdwWXBVBjC1kjJ0tOzNf2zJUYuaKltVt27tkqD7BkTZ6sg9yT8XSn4CxbUtCXcHDu0EHyvKkYhB4koaduxE3%2Fle5O2FgQqVdQEh7%2BUsecB30Fahtdm95ENa7kHuFwDwK1sGL9mwQ7%2BZJ5RLOG7TTkJnyYc33i6wIyaapHFXUIQJXbhlqxtQqwXihIYMSjwClpBlXeB6%2BplHID7kqWEC7D6iCmLgZYkqpacqhG6%2F6uHBQDdgTD4XIi0U2z4sOEH%2Fh2M%2FtRQRTT2hRnyucELTO%2F%2BSwZE1kpqfGs2MGWTZ9MW%2FSFGLdchcGcs%2FIPfEmJVHtVXJFfZVs7eycE3Fw0jeqlU8zUCWSYjENtdKTMzTwUeB%2FCZNBW4vx9Z3%2BdYVTWTdDCQq5haqKlIQBHa7%2FjgXFziSoTQPCWUpDGKiUhxK87Txp4cg9zqLp25nhyYimFmztIQVPQG5QK0IGZp%2BZ6OxB4gMOzQur0GOqUBzrFe%2BnkrocgqzJYNNAv4duqQIU96pWRUacFKajHv8wdnClTWDbL5nY7b09gHxxw2dKybb4%2Fo3XswPerBzM5Hyut56i9uqQ196t71IMRK12d3ejeUeZJD%2B5p6KASjW%2FmJI1IY5Q2Xj%2BB4xO4ghM36yk2vwBJOn4hI5qpkaaq%2BsyQsjuWia9pWnmoy4hyxNBfIeQNHb0vNhPtjC8QmlnYcp3U2AcWI&X-Amz-Signature=21da6df8e7b225e230c1ad6d329a66f476e7ce4f101b8122253d719cc5f8ff84&X-Amz-SignedHeaders=host&x-id=GetObject)

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
