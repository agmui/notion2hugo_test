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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466232OKOIN%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC5vETf%2BEPBZIt%2BnWe%2B38pJ9WA6%2FaNZ1VzRfSBN5Mz0GQIhAItRAk3zHSDfK8kxdAkYB6XrewJEIM13fGav7ZB%2BVEFaKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpDLOg8sm%2FiTUmMWUq3APQAJ0ggcC9n3DdcdA%2F2trC8XnvPRLyXYPCltDaaCupCbxoFKmi53schTA%2Ftw202WkNA5sfZ0bR36wjgpeoVHAAsSUhTkdq7HsE56F974jnCQNLvk6RNdaoJr3yZcGmK61MvfrLSJrGSCB6%2BedMh7uf8xf3Bb0cMfzRIPUj7zCtLj%2BmgbzqqP2mzEu43F6zdrUppj3MecLq9uHiAXzYvKQXNL54visb8sU2i1bwiHuergKSbfYItbrG5ZqQfwcUTPpyFOUlvhJKmOoojROZjZsMCjNtiHBzl%2BeTSyh71uqqHiGveQ3X6ZkVJsnu7Ox1vrx86ic8Y6hxgj49ZTMUcW91EhVAZ2A5qZScUkUjHLkWcYqR%2F99sVNY5o0Lb%2Bs3%2B7LyDtkgJT6Rywz4g4%2BoiDYPLXqlpdGQwQoSqIX3kCaJ%2FTGHrRZJWc2HbD5iKKRctED4nMr8L0ofLUwUzGy4jgD4hhwq5BXRbjrGKl0OWFlaAABBpj0Y1nxxLXLovDcwWWaRs55%2BSrGpvhcgQhl9i%2FsaescNCryIEqz%2FwBbVwgOnAMJrPBFDc4IxToL4ljCGa2SVylqVodogsZl08wsH8kWbeBGn1mHL8pMUrqW9miAuABLXzuJNVUxlDGN%2BS7zDiqLG%2FBjqkAdHyqNySIwkldynm1UkYEeNJDPL%2FAeFMdkzqaX4nprdiLpN%2FzqHFdnX6tszzRgt3sVP29jNmwHdMf%2Bl7nZUDWDMwOvCsd%2BGEELTos6HHcAbEsJtgj%2B35Ot3wbODcUU%2B32Zf%2B%2FyKsGlHh73Qxyu1RMhTT%2FvAuW0gAgig3N79GsIf1K1a7vf9NeUEfDSiG04tYTvNKoBU2iOrotAiTvPWojNzEpqKF&X-Amz-Signature=e534caa0135e8dd016bc6f4dea996448fd7b7f4bd538f182b65194c816eb8bee&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466232OKOIN%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC5vETf%2BEPBZIt%2BnWe%2B38pJ9WA6%2FaNZ1VzRfSBN5Mz0GQIhAItRAk3zHSDfK8kxdAkYB6XrewJEIM13fGav7ZB%2BVEFaKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpDLOg8sm%2FiTUmMWUq3APQAJ0ggcC9n3DdcdA%2F2trC8XnvPRLyXYPCltDaaCupCbxoFKmi53schTA%2Ftw202WkNA5sfZ0bR36wjgpeoVHAAsSUhTkdq7HsE56F974jnCQNLvk6RNdaoJr3yZcGmK61MvfrLSJrGSCB6%2BedMh7uf8xf3Bb0cMfzRIPUj7zCtLj%2BmgbzqqP2mzEu43F6zdrUppj3MecLq9uHiAXzYvKQXNL54visb8sU2i1bwiHuergKSbfYItbrG5ZqQfwcUTPpyFOUlvhJKmOoojROZjZsMCjNtiHBzl%2BeTSyh71uqqHiGveQ3X6ZkVJsnu7Ox1vrx86ic8Y6hxgj49ZTMUcW91EhVAZ2A5qZScUkUjHLkWcYqR%2F99sVNY5o0Lb%2Bs3%2B7LyDtkgJT6Rywz4g4%2BoiDYPLXqlpdGQwQoSqIX3kCaJ%2FTGHrRZJWc2HbD5iKKRctED4nMr8L0ofLUwUzGy4jgD4hhwq5BXRbjrGKl0OWFlaAABBpj0Y1nxxLXLovDcwWWaRs55%2BSrGpvhcgQhl9i%2FsaescNCryIEqz%2FwBbVwgOnAMJrPBFDc4IxToL4ljCGa2SVylqVodogsZl08wsH8kWbeBGn1mHL8pMUrqW9miAuABLXzuJNVUxlDGN%2BS7zDiqLG%2FBjqkAdHyqNySIwkldynm1UkYEeNJDPL%2FAeFMdkzqaX4nprdiLpN%2FzqHFdnX6tszzRgt3sVP29jNmwHdMf%2Bl7nZUDWDMwOvCsd%2BGEELTos6HHcAbEsJtgj%2B35Ot3wbODcUU%2B32Zf%2B%2FyKsGlHh73Qxyu1RMhTT%2FvAuW0gAgig3N79GsIf1K1a7vf9NeUEfDSiG04tYTvNKoBU2iOrotAiTvPWojNzEpqKF&X-Amz-Signature=e5d73de2fb2a855060064cc753ef861b0c1408a0bfe35c4aa9182a9ee567205d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
