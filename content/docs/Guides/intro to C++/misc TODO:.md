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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6ZXP3V3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBYeD5jIfCzkYBXjlhQgDvTp7Gl8DhaIBBpTu1yYvnFwAiEA%2BDr2kzC%2BjQiUVQQuCYjPcFoIFkPtghsvE5Ei3zm7QDMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPhfWTrzqxvdajuMyrcA8litht3qB5GWrVOefOSyJd1svJF0JYJrHYxQwDTWezhPHYgY9k7qfg7xUOJH8uDL6tMzEhnH3sgqcwfrlkj80zeD5Qz3YwRlHllczWhtRFhW0ylScZ6gubRlNUOEyjal3te7EmIaCSW2i0MFUZaNVGdfwwdf5O9Vj4FWX5TuGUFbxdVscKyNVBkPAfPwHJvqWJ8%2BEwjfNWYPXny%2FD8ta2rYETtbej9wYQo7kIB%2FXuHsc0et8Q4LikLCJVkgCTIxTeTfbtqSJWgC0A212eJlAtc1UonfT4BWX8SQDmdISZoRv%2F4ALeYm30HD2v8NcWEwwzwaS9huqZ8A7XfZLBTvLKDOaBQzc6LX75ljujDHI4eEfcvwTfcS2Fd2ImGxA7n3gMkGTKlRS3%2Bnwn8ZcN%2FLmQ3rGCTLIptdUanfoAZ1Fc%2F0ITgoEMfq1ZUYnN%2BdcWeijhtO81KTDUQOLHFO0sqkUYQsmnTtRxrzjqlx3NVSbYtR8JYJhAe4HRI3TvF38wVmDQR4LYZKSBoG1m5LWg1QEGP153S8ui%2BTTDCJOd1iPW6gGzmozs4TwgTIzm4mfvSYbs37IXTypyFl9ivMWAdhXeJIuGU9HGrVu3P224fPKmWv4Xrku6wAKVaSq%2FWRMJvu08QGOqUB5V%2BbUB%2F1nVpf6XtEQmjM4qfLJM5FFEUZ2BvUd1m%2Bj4zdau%2B7gjC71EiTHn7MioivwSkGt2LwCfZppG4Bxw2SaRmexonixckjFwPTvVw1vNyLrGQNjQvaD6b%2F5u%2BS5JCBqjHAJL49FJiajGrjDmLYDieIUGj%2B7okiVD38A61U3GnEdUWTOttp6MPYt4AA%2FzvW2vTRSfFgP58aTsP4NSsyLyyREkNE&X-Amz-Signature=29b66a0b75af81a7d5c638e1ade6a56eb5afac833fb25463daa6a81b615093d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6ZXP3V3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBYeD5jIfCzkYBXjlhQgDvTp7Gl8DhaIBBpTu1yYvnFwAiEA%2BDr2kzC%2BjQiUVQQuCYjPcFoIFkPtghsvE5Ei3zm7QDMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPhfWTrzqxvdajuMyrcA8litht3qB5GWrVOefOSyJd1svJF0JYJrHYxQwDTWezhPHYgY9k7qfg7xUOJH8uDL6tMzEhnH3sgqcwfrlkj80zeD5Qz3YwRlHllczWhtRFhW0ylScZ6gubRlNUOEyjal3te7EmIaCSW2i0MFUZaNVGdfwwdf5O9Vj4FWX5TuGUFbxdVscKyNVBkPAfPwHJvqWJ8%2BEwjfNWYPXny%2FD8ta2rYETtbej9wYQo7kIB%2FXuHsc0et8Q4LikLCJVkgCTIxTeTfbtqSJWgC0A212eJlAtc1UonfT4BWX8SQDmdISZoRv%2F4ALeYm30HD2v8NcWEwwzwaS9huqZ8A7XfZLBTvLKDOaBQzc6LX75ljujDHI4eEfcvwTfcS2Fd2ImGxA7n3gMkGTKlRS3%2Bnwn8ZcN%2FLmQ3rGCTLIptdUanfoAZ1Fc%2F0ITgoEMfq1ZUYnN%2BdcWeijhtO81KTDUQOLHFO0sqkUYQsmnTtRxrzjqlx3NVSbYtR8JYJhAe4HRI3TvF38wVmDQR4LYZKSBoG1m5LWg1QEGP153S8ui%2BTTDCJOd1iPW6gGzmozs4TwgTIzm4mfvSYbs37IXTypyFl9ivMWAdhXeJIuGU9HGrVu3P224fPKmWv4Xrku6wAKVaSq%2FWRMJvu08QGOqUB5V%2BbUB%2F1nVpf6XtEQmjM4qfLJM5FFEUZ2BvUd1m%2Bj4zdau%2B7gjC71EiTHn7MioivwSkGt2LwCfZppG4Bxw2SaRmexonixckjFwPTvVw1vNyLrGQNjQvaD6b%2F5u%2BS5JCBqjHAJL49FJiajGrjDmLYDieIUGj%2B7okiVD38A61U3GnEdUWTOttp6MPYt4AA%2FzvW2vTRSfFgP58aTsP4NSsyLyyREkNE&X-Amz-Signature=46b0a8b3873403066b0c8c82f64afd15dcdc28ac0fe1c06fd992232dd5ea8115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
