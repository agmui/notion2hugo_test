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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW6UGPDJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCx%2FwSMVG2aDMkMIUrp9F%2BXDRqVf6QUymfyoe%2FsXb67uAIhAKr6l1PR5YMV7ac8VjZdRi3qZx64GeVcjj41NNl4eZxyKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHlexoAZixuDh5fKoq3APBumRB8acVuHGv7cAVmguQbWEadO05bBVSDVZvlJOoNC01%2BikFTkhO08i6L%2BHIPNZXvh5Ty7NJA4hMLC7NUF5aC%2B5jOaDS5fu7hrKTbGMkTfhYLrrt%2FcTKVbnH8rTifw1stJnPt759FC3tiNWrVTbxhjF%2BVwgcBRKjvMQo%2BgIWbMTWNSYjlXDv%2Fp%2BJv30h4VP9gC2UDPf%2F62fItktgr4xfUCACSW29M%2FQWbFRQEsaxVz40h%2Bm24NgaEzd1YWHrptRlP9Sh3DLMd%2Bpg0qpQ0oq1W4ek8QoDLluck%2BMAn0EYuEqUKvQF2IbVA79w1StS6Ta%2FKhqPrdPLqLDdt9g05cbBgYea54QOSeTXJ91yeGdaCAulb5nycM9RzZoubD89pCIQT7PbxE7sLRGXKgfgN5Yq5JQCdc34w4EnYdEhRqC8Ab5CcvMEqKUnDgbX6Mu6vMzZEYwF5iW%2Bbslx%2Fp89t7XKVmuckT%2F8Qu%2Fypvu3sniBEg7%2FloSYUgguBfZ6%2FU0Ra5ZRj%2BNbMfwBhb%2Btv%2B%2BDOPqEPL5EiUgu5xfNAUCqFwqPNciP%2BqQbF93oCGQqmRC8lrj16Z5u8B0SoAW7b0h7W86veq2KMDxF77%2FlzdDeBvuYeoxHPX2TEUbE94l5LjC39I3BBjqkAavHwRKYThARuj9bQtl4SHCHyxzHQUX2R8vdNTEfi51%2B0JRU2VKq2kBQzzjRN6Rzv0IbMgrMziRohJZlYDYGjLp6hLSyeCE%2BkJ900FiK6O%2BgLoiQt9ladgRnshTD%2FZR247uU9mB92%2BEfNot26seA6lIJgXSrbZKuMFz8m8dt6M7sbA9%2BfRyLIamjWZAH%2F2cy939Z91OBNwaNEY%2Fnc3OSPZmOujjS&X-Amz-Signature=36645597c203d9738b9d74df328a740bf5cf972046d0b566eacafb5689bfda76&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW6UGPDJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCx%2FwSMVG2aDMkMIUrp9F%2BXDRqVf6QUymfyoe%2FsXb67uAIhAKr6l1PR5YMV7ac8VjZdRi3qZx64GeVcjj41NNl4eZxyKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHlexoAZixuDh5fKoq3APBumRB8acVuHGv7cAVmguQbWEadO05bBVSDVZvlJOoNC01%2BikFTkhO08i6L%2BHIPNZXvh5Ty7NJA4hMLC7NUF5aC%2B5jOaDS5fu7hrKTbGMkTfhYLrrt%2FcTKVbnH8rTifw1stJnPt759FC3tiNWrVTbxhjF%2BVwgcBRKjvMQo%2BgIWbMTWNSYjlXDv%2Fp%2BJv30h4VP9gC2UDPf%2F62fItktgr4xfUCACSW29M%2FQWbFRQEsaxVz40h%2Bm24NgaEzd1YWHrptRlP9Sh3DLMd%2Bpg0qpQ0oq1W4ek8QoDLluck%2BMAn0EYuEqUKvQF2IbVA79w1StS6Ta%2FKhqPrdPLqLDdt9g05cbBgYea54QOSeTXJ91yeGdaCAulb5nycM9RzZoubD89pCIQT7PbxE7sLRGXKgfgN5Yq5JQCdc34w4EnYdEhRqC8Ab5CcvMEqKUnDgbX6Mu6vMzZEYwF5iW%2Bbslx%2Fp89t7XKVmuckT%2F8Qu%2Fypvu3sniBEg7%2FloSYUgguBfZ6%2FU0Ra5ZRj%2BNbMfwBhb%2Btv%2B%2BDOPqEPL5EiUgu5xfNAUCqFwqPNciP%2BqQbF93oCGQqmRC8lrj16Z5u8B0SoAW7b0h7W86veq2KMDxF77%2FlzdDeBvuYeoxHPX2TEUbE94l5LjC39I3BBjqkAavHwRKYThARuj9bQtl4SHCHyxzHQUX2R8vdNTEfi51%2B0JRU2VKq2kBQzzjRN6Rzv0IbMgrMziRohJZlYDYGjLp6hLSyeCE%2BkJ900FiK6O%2BgLoiQt9ladgRnshTD%2FZR247uU9mB92%2BEfNot26seA6lIJgXSrbZKuMFz8m8dt6M7sbA9%2BfRyLIamjWZAH%2F2cy939Z91OBNwaNEY%2Fnc3OSPZmOujjS&X-Amz-Signature=46c063562b1b829a3a5ee602c9d481b99f1da1966474edd3c7b8577551d06c91&X-Amz-SignedHeaders=host&x-id=GetObject)

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
