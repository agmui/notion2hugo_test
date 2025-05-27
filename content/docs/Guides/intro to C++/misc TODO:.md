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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZYX444O%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkAVMVHjn4%2Fw%2B8q1MPPc9t0V015roRsEeiSt%2FLZz%2BBFAIhAPyOH5kcUBOXk%2FmV5VPf7MlFyEFjn4Sbl1s5Etudb%2BmLKv8DCF0QABoMNjM3NDIzMTgzODA1IgxlNM4db3izJ4H6d5Yq3AOI9W%2BEDIeKcfwAkoywpD1GZ6pYu%2B7FTG%2FQkwkxWkZH0yy849h441kDfvQYZfXCF2FC68AziVH24DfADS0xWSw9SREpB2m7M%2BHSqXHeTUNLKVxy5dSO5HPrPSaE82blwtFujXmtYCx%2FfZ4hXZZGuzytR4MUZSyGu7JSGeQ4mCnIkeNyo8y0XenjaNLvUqR%2FSQgwVDX3Ywxrsl4NEgnf4S0Dg%2F3tQFMfe1eSEiZ3rWtxLo0L0ehXDxH0Ao8rgS%2Felu25oduGaG0pAo%2BmCKrKyv%2FZkwM6zw85wmttjLZnfOUaYb8Ba6pg1cxZs%2BB75txSLgEW96S2mu%2FNUJWMvqZPNAzPnQhv%2BhZd35hiTt1dJVrzJVxda7Wjr6QxhZT9eMB57S3O9rg%2BV2KBu3LDpuhwD0BuTu%2FwnNUNUqggoy2URxm2FN8tLhF5xOhI33OMxwBPRloYvfHx4mld75iucXf3HHgTMoyOoyZUj0T5GsIrXQFF%2F2JqQ4HFdKwpb4N8XykAHXwfpdY6DlKMTULZnYWUIWHLZGkJ9ab72XV7LPdxZ1rXLgoyJ1P6PTlLL6E1qpN%2Fh5wFREC5g5gWlkbdrzVh6jgGeTsX7uMcFY2IRt%2BL3sVlfHlCq5vUdW9cx9UNLTD809bBBjqkAW5Zajf7s07RRi8LE0OieYldFTlyzkBfk2QhfplbxwyNE7QC04GUvy9hGLGa8Tl7ZcmZVbvl3dMnlAUiXGJG0Jt4wDNN780tojHf%2BlRNZav0PpScfHNKN8sdvAZV5gdfLxqF1Andj%2Fz8QPn2jSHtLVa2qynEI2jXXjukgyGn27u6FXjxUBDAhq6Ir06%2BIbxz%2F5PwcMLKd9MCmPORKmSoF16PvoSk&X-Amz-Signature=8690618d31aed2a27cf0a50794a5a8655e6377a4307b5de2527415572512fe5d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZYX444O%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkAVMVHjn4%2Fw%2B8q1MPPc9t0V015roRsEeiSt%2FLZz%2BBFAIhAPyOH5kcUBOXk%2FmV5VPf7MlFyEFjn4Sbl1s5Etudb%2BmLKv8DCF0QABoMNjM3NDIzMTgzODA1IgxlNM4db3izJ4H6d5Yq3AOI9W%2BEDIeKcfwAkoywpD1GZ6pYu%2B7FTG%2FQkwkxWkZH0yy849h441kDfvQYZfXCF2FC68AziVH24DfADS0xWSw9SREpB2m7M%2BHSqXHeTUNLKVxy5dSO5HPrPSaE82blwtFujXmtYCx%2FfZ4hXZZGuzytR4MUZSyGu7JSGeQ4mCnIkeNyo8y0XenjaNLvUqR%2FSQgwVDX3Ywxrsl4NEgnf4S0Dg%2F3tQFMfe1eSEiZ3rWtxLo0L0ehXDxH0Ao8rgS%2Felu25oduGaG0pAo%2BmCKrKyv%2FZkwM6zw85wmttjLZnfOUaYb8Ba6pg1cxZs%2BB75txSLgEW96S2mu%2FNUJWMvqZPNAzPnQhv%2BhZd35hiTt1dJVrzJVxda7Wjr6QxhZT9eMB57S3O9rg%2BV2KBu3LDpuhwD0BuTu%2FwnNUNUqggoy2URxm2FN8tLhF5xOhI33OMxwBPRloYvfHx4mld75iucXf3HHgTMoyOoyZUj0T5GsIrXQFF%2F2JqQ4HFdKwpb4N8XykAHXwfpdY6DlKMTULZnYWUIWHLZGkJ9ab72XV7LPdxZ1rXLgoyJ1P6PTlLL6E1qpN%2Fh5wFREC5g5gWlkbdrzVh6jgGeTsX7uMcFY2IRt%2BL3sVlfHlCq5vUdW9cx9UNLTD809bBBjqkAW5Zajf7s07RRi8LE0OieYldFTlyzkBfk2QhfplbxwyNE7QC04GUvy9hGLGa8Tl7ZcmZVbvl3dMnlAUiXGJG0Jt4wDNN780tojHf%2BlRNZav0PpScfHNKN8sdvAZV5gdfLxqF1Andj%2Fz8QPn2jSHtLVa2qynEI2jXXjukgyGn27u6FXjxUBDAhq6Ir06%2BIbxz%2F5PwcMLKd9MCmPORKmSoF16PvoSk&X-Amz-Signature=872c83e7311d21a4a848a344b48bf66fcff2cd3d1f7024f20e76d8ae22791735&X-Amz-SignedHeaders=host&x-id=GetObject)

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
