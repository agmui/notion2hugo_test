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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7U3UEFT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyiX%2FqvPy4yow3E23RXxmIToBhyujE8O06S6g4BkSpaAiEArZ0ue7BmLkkaU8aRRXB8f0oj18gF6Jp1l%2FSd5D4fORoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmnH6jY5Wors8O4ByrcA%2B5g9e7oYtRPQL9IN%2BqmNHE%2FhxPQIQRcCirOToJhNL2HQ2W%2BO5a8lgt0KGrr4E2gGxqMp0asmLyqp9DdlHFUzghJIHG1PsODkY0y6YB8S8Y71v9HRFIPwROxCXottOa3sGzkcQ0CoGWr91Ji5uoeXthZDhMlZHpxM9sq5i39cR%2Fe1Hj7aXmi4iCpzHI9hAK1sF9s42qj6f6ZtL8OUmxjv1b075TcNjUL2wJp6VPAaabdSht4w7fCDmMcxKK56LSE1OFysNgW5w04wecl5AKu9uoKKDQ5icdizWvmBq56nd3qMLUqkek%2F6TNtw1BcKi%2BDPUyGeQKyPY%2BNqZTjwUUIoNFRMzqUwWoI22P3BjSXkToCdkrSMhDyzUHaInrTKZjKgE5kIWdviilMqqFnWT%2FdCoL4jwas0OAbT%2Fb0lDzGqQK6mEo9aIEwxwUHMCQtfgu%2BQIVKwozx5nXSdavCnQyTQAmi3nFYBM0RN5jM7kum%2FG5nM9mJaWMK%2FZ%2B1PXAa%2B6MAYA6HY4Fkg3PCj%2BchBGptMRv8Kqf9d8dN%2F%2FlzHMl0hESy3q6KIkx3d4kXdok5QW99i4MPfEB%2BJ08eS1z%2BHkpqLt0WX7pS%2FZOpjEhjs3gTObD6OUq6XxQ08rQ0Oim6MOL4%2BbwGOqUBLFB1CwoutIr2IVIr0b3Zb3uBlFLO44OmMiN0Zx0e8rhSBK2hTyX3xsGUc%2BnCwO3%2FVZ%2FjrJYngUFn8Oz0Qi1AIgSQ2dD4NXA2rdGo5DefpGUUkwkKEhCF81fnHvUopmLqKcdT7ybYjhvw%2B5cfFQnKn2fKWqStHTszhtjTdeiaNWWWxvuM8D4e5Cu5q7nWnA3TmQ%2FPr2LKilmC8D0CM4psclC2lS%2FQ&X-Amz-Signature=cfce8c0f73e1e9d33480442f667209f87a59aa11fa6634641eb829a946482082&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7U3UEFT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyiX%2FqvPy4yow3E23RXxmIToBhyujE8O06S6g4BkSpaAiEArZ0ue7BmLkkaU8aRRXB8f0oj18gF6Jp1l%2FSd5D4fORoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmnH6jY5Wors8O4ByrcA%2B5g9e7oYtRPQL9IN%2BqmNHE%2FhxPQIQRcCirOToJhNL2HQ2W%2BO5a8lgt0KGrr4E2gGxqMp0asmLyqp9DdlHFUzghJIHG1PsODkY0y6YB8S8Y71v9HRFIPwROxCXottOa3sGzkcQ0CoGWr91Ji5uoeXthZDhMlZHpxM9sq5i39cR%2Fe1Hj7aXmi4iCpzHI9hAK1sF9s42qj6f6ZtL8OUmxjv1b075TcNjUL2wJp6VPAaabdSht4w7fCDmMcxKK56LSE1OFysNgW5w04wecl5AKu9uoKKDQ5icdizWvmBq56nd3qMLUqkek%2F6TNtw1BcKi%2BDPUyGeQKyPY%2BNqZTjwUUIoNFRMzqUwWoI22P3BjSXkToCdkrSMhDyzUHaInrTKZjKgE5kIWdviilMqqFnWT%2FdCoL4jwas0OAbT%2Fb0lDzGqQK6mEo9aIEwxwUHMCQtfgu%2BQIVKwozx5nXSdavCnQyTQAmi3nFYBM0RN5jM7kum%2FG5nM9mJaWMK%2FZ%2B1PXAa%2B6MAYA6HY4Fkg3PCj%2BchBGptMRv8Kqf9d8dN%2F%2FlzHMl0hESy3q6KIkx3d4kXdok5QW99i4MPfEB%2BJ08eS1z%2BHkpqLt0WX7pS%2FZOpjEhjs3gTObD6OUq6XxQ08rQ0Oim6MOL4%2BbwGOqUBLFB1CwoutIr2IVIr0b3Zb3uBlFLO44OmMiN0Zx0e8rhSBK2hTyX3xsGUc%2BnCwO3%2FVZ%2FjrJYngUFn8Oz0Qi1AIgSQ2dD4NXA2rdGo5DefpGUUkwkKEhCF81fnHvUopmLqKcdT7ybYjhvw%2B5cfFQnKn2fKWqStHTszhtjTdeiaNWWWxvuM8D4e5Cu5q7nWnA3TmQ%2FPr2LKilmC8D0CM4psclC2lS%2FQ&X-Amz-Signature=efe84608b2b1cce4ea29aae572e7f56577607b6fd023d8a06f3b5aac2b05bcc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
