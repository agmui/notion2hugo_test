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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGMHQTRD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwx3zdtb7QBfdblV3TFaNhX991EBu3RYHr4kB7atrfgwIgIV1gtn0D9aQROyvpH1ywB7eQvxGA9v0k8CynDYMvcK0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBOH0qd81VLBOe%2BAircA5uqlvqDGMIKwIpdcWPYuXc3IZrPvlwDhMHX5RjRJ%2F2JNOG80VzMLod4%2FbtSV%2FsMuMzNP%2B8Ik2wgtZ7i8VuEdO34%2Bjxs8VgHXQjVJ4Z4QWXNPMhL7IRyuWNHodM1oihZmVXC3IZNq4wK7Z8PR619ECFUN4VHHZqsHTvhvxUI7hMZ1ll2cfms%2Fjp15NZEGyeMPYmPgotaHTtIdnpKkwkR8pO0VmVr235Hm99u9YlM3CYMyYkyAUNVRLRIRfNSg%2Bxb2Z%2BdL%2F32BwMWauoFd%2BK8QK0RgIE5UYzpAvSkjEck9%2F7zL64lnrX6ntbVxMIjE5O870KEBhQJ7PTm1Fkq%2BXBbE4FaTtQuBCwRgOSFfCvTd9sWz%2BmiNoen8swiQDroRjaUpKLU6ATmbu6Y1b9NT%2FLJc3iPYCwrj9E6e5Vpozd%2FrrjhNRWBC%2B1lv%2BP5tDmaMbgk%2ByTfDblMUekE5cN4Z0NEfn1lbpJsWX9TCWG3mr5orT9ammhamUVuvdEEhfQpQuNLWmqESCf3%2FIBTgEgTBLHx9gjk1nh1fqKVIM6ToQk3J5A1%2FgY9l44bJc0TeJlSU%2FWwuKFqyRwZMhXCaq%2BidhJAFc5XEea6xtwkJnkUy21B%2B%2BD%2BW27d0CeqPjD3EGVMMIvX%2BsMGOqUBpX0n4TlmviTgvH26Cjj2vNKpfEgn6C5SuS8bJG52q%2Fwjo6EI0taL3C%2BsOtvrL5w7OsNCQjxDInGG%2BYYSfzWDwhPGjqm6cRXWPi7CoG1%2FTQ%2FIZlRSNRfxK1MlYNTZ5ip1ewv7eS1DmZkbYdGOuSER6drhXv7Tfgb5EKyDpsGZu5TdgIG0HBdL3I7JIvD62vdsYPmIfRe7hypbcw9q2pg92jUiMwCa&X-Amz-Signature=946b7881e7130ba9f207f5f41d3b62e26b34d8f53f494a67972890c81f60ef29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGMHQTRD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwx3zdtb7QBfdblV3TFaNhX991EBu3RYHr4kB7atrfgwIgIV1gtn0D9aQROyvpH1ywB7eQvxGA9v0k8CynDYMvcK0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBOH0qd81VLBOe%2BAircA5uqlvqDGMIKwIpdcWPYuXc3IZrPvlwDhMHX5RjRJ%2F2JNOG80VzMLod4%2FbtSV%2FsMuMzNP%2B8Ik2wgtZ7i8VuEdO34%2Bjxs8VgHXQjVJ4Z4QWXNPMhL7IRyuWNHodM1oihZmVXC3IZNq4wK7Z8PR619ECFUN4VHHZqsHTvhvxUI7hMZ1ll2cfms%2Fjp15NZEGyeMPYmPgotaHTtIdnpKkwkR8pO0VmVr235Hm99u9YlM3CYMyYkyAUNVRLRIRfNSg%2Bxb2Z%2BdL%2F32BwMWauoFd%2BK8QK0RgIE5UYzpAvSkjEck9%2F7zL64lnrX6ntbVxMIjE5O870KEBhQJ7PTm1Fkq%2BXBbE4FaTtQuBCwRgOSFfCvTd9sWz%2BmiNoen8swiQDroRjaUpKLU6ATmbu6Y1b9NT%2FLJc3iPYCwrj9E6e5Vpozd%2FrrjhNRWBC%2B1lv%2BP5tDmaMbgk%2ByTfDblMUekE5cN4Z0NEfn1lbpJsWX9TCWG3mr5orT9ammhamUVuvdEEhfQpQuNLWmqESCf3%2FIBTgEgTBLHx9gjk1nh1fqKVIM6ToQk3J5A1%2FgY9l44bJc0TeJlSU%2FWwuKFqyRwZMhXCaq%2BidhJAFc5XEea6xtwkJnkUy21B%2B%2BD%2BW27d0CeqPjD3EGVMMIvX%2BsMGOqUBpX0n4TlmviTgvH26Cjj2vNKpfEgn6C5SuS8bJG52q%2Fwjo6EI0taL3C%2BsOtvrL5w7OsNCQjxDInGG%2BYYSfzWDwhPGjqm6cRXWPi7CoG1%2FTQ%2FIZlRSNRfxK1MlYNTZ5ip1ewv7eS1DmZkbYdGOuSER6drhXv7Tfgb5EKyDpsGZu5TdgIG0HBdL3I7JIvD62vdsYPmIfRe7hypbcw9q2pg92jUiMwCa&X-Amz-Signature=b879e3c47b3993888929c7f59fa7dc882a13ee04ce47854369aafe68ab4a37d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
