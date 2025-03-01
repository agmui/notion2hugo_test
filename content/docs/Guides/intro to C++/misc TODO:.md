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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMD2N3IV%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFs5745Q9LUZDz8YUrRrKeBHlKN9%2Fr6bfkPjZV94vQNrAiEAhGmpVaTaR0hxwFbCnu0nKV%2F46BzZsCqylqQ0keOnv8wqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKqWt2RQvj8cw3P5yrcA%2B2rXkIjYwsFxSEYSxKBlUwz0gx8nY%2BxLV7BCZMJSROLq7sJQ9DFCYEFtuxdLAZrjFU4qF2Xm8o2nALRcIv2wZi0RSahzdz9aFCnfbdYZkp3dCZ43CBDOusU8PSDO8gU0cuFg1SmHtCjqlssgLFsygVABrnFfp%2F7i2ICTg5VvaEvRSQtqdh1IVLZDfi8WvBoS2tTDGVz9Tc%2FTZyOK%2BZ4YFEAV1DePuXdk%2Bq6uqgEXm%2BIX8i%2BrL5MY%2BZzASE4rWpIYrdKox%2FSZz4nX18SK2WftYSLEP2yxalOI%2Bfq5XEmkfS%2F4v7ig4e2JNOYwwjZmDplPfGI8bEd03pacY7RFR1LQY8UyVH%2F6n2lMyHCjLu%2FZYFxUPDebpv%2FT41wS7yaB%2FtSu0KTOT3ARoItIcpVFEOIGA4nVFFfWeeiDIFnurw%2BNBQe9kXGs8aXGfbxhY2lfyJd4%2F4yzqCyiiDmSG%2FiXAJSuajDECUsZWu7gCNKRnTnDvUpbZ6iQmqik0rbSSnTdJ0e5D%2Bmu63LTHgwb0%2BIHnHE11PBpVSxAMjMATgGYIuGZdj70x0kfXw%2FWcJEbqVISGRB1c3LqixzCbwD90rHpqQ8kU%2Bhm6FSohgXjCPw%2B4O8fMDDjFPC47J4tXxKqHsNMIiVjL4GOqUBKkNFUKbMqGCY8YmGx0U1pFFzmUrw3TNaYqvxhLEuNfZSrkIhf533Gj1RO1fzQVV3%2Fw4z1FAt5d9s9n0yeWR2gvQ%2FNtb%2FDIZKxCP21pLSX4780go1OtejNBChXuJp3FPHlPkPHKkql2Gc9omUX4yYagcec1e%2BpaHR9cSKyU5vgzC51o0HO66Flfiqao39XG2pY5mgJQN2Tr2EWS28BkLOvlmpbvi1&X-Amz-Signature=5fb9c4de8ba3e5a364c520409863eb87ab4cbe212e0fb71662a25a3975ad8445&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMD2N3IV%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFs5745Q9LUZDz8YUrRrKeBHlKN9%2Fr6bfkPjZV94vQNrAiEAhGmpVaTaR0hxwFbCnu0nKV%2F46BzZsCqylqQ0keOnv8wqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKqWt2RQvj8cw3P5yrcA%2B2rXkIjYwsFxSEYSxKBlUwz0gx8nY%2BxLV7BCZMJSROLq7sJQ9DFCYEFtuxdLAZrjFU4qF2Xm8o2nALRcIv2wZi0RSahzdz9aFCnfbdYZkp3dCZ43CBDOusU8PSDO8gU0cuFg1SmHtCjqlssgLFsygVABrnFfp%2F7i2ICTg5VvaEvRSQtqdh1IVLZDfi8WvBoS2tTDGVz9Tc%2FTZyOK%2BZ4YFEAV1DePuXdk%2Bq6uqgEXm%2BIX8i%2BrL5MY%2BZzASE4rWpIYrdKox%2FSZz4nX18SK2WftYSLEP2yxalOI%2Bfq5XEmkfS%2F4v7ig4e2JNOYwwjZmDplPfGI8bEd03pacY7RFR1LQY8UyVH%2F6n2lMyHCjLu%2FZYFxUPDebpv%2FT41wS7yaB%2FtSu0KTOT3ARoItIcpVFEOIGA4nVFFfWeeiDIFnurw%2BNBQe9kXGs8aXGfbxhY2lfyJd4%2F4yzqCyiiDmSG%2FiXAJSuajDECUsZWu7gCNKRnTnDvUpbZ6iQmqik0rbSSnTdJ0e5D%2Bmu63LTHgwb0%2BIHnHE11PBpVSxAMjMATgGYIuGZdj70x0kfXw%2FWcJEbqVISGRB1c3LqixzCbwD90rHpqQ8kU%2Bhm6FSohgXjCPw%2B4O8fMDDjFPC47J4tXxKqHsNMIiVjL4GOqUBKkNFUKbMqGCY8YmGx0U1pFFzmUrw3TNaYqvxhLEuNfZSrkIhf533Gj1RO1fzQVV3%2Fw4z1FAt5d9s9n0yeWR2gvQ%2FNtb%2FDIZKxCP21pLSX4780go1OtejNBChXuJp3FPHlPkPHKkql2Gc9omUX4yYagcec1e%2BpaHR9cSKyU5vgzC51o0HO66Flfiqao39XG2pY5mgJQN2Tr2EWS28BkLOvlmpbvi1&X-Amz-Signature=b45f8f070b69e752e2e7685d2010777811651885b0265b6ebaf2a0906a523930&X-Amz-SignedHeaders=host&x-id=GetObject)

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
