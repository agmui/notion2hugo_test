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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635LSWCNH%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDGFzujkuSQWaBLwr8To2pG9TxM%2BCF3%2FLwVDGzQnm%2FXcwIhAKjd9PakUQgkZgPvIk5nWrYcSP5FWNcQNJGQlIE6T1u%2BKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP51W3vkZdDoy9%2FDsq3AOc2D1HjMYtmZIGrgjr2KvJX9zbUIjkm8AfS1UfBl5dXviPFStVodDitX%2FCymlrHnu8wzLiGCcnbaPorEguzFnLa%2FAjH23HyEdsLEHMuE2Yw39RNGSyzDZpELdEDPiZVbIeajuFM7ZEunhjq2IrqMkKJLiwg2Xqk9Hcuyuh2zid6SDK1cjww%2BRz3%2B%2FcM0zs5QG7rJ0wzSNpTsLqsN9xCjt%2FDJMUhiRgY0iIssSpo2TnXeQOLACW%2BBtXwOcJ%2Br7buudQKaH1ndSk4OULUTiAGfQoUgKo5BWOvdK2C9WDu2tltL6dT6AS9aRAXJS44EAZG%2F1V%2BiYaeyNdQqWaTx10cTWAnJCjUkGA2xTOMxa4qqT50023S5BtVHjBS%2BHFbOa%2Bfx8wNL95mlLI9XA11jBC1xSyj6UQLsh%2FW2ypUtwxuXGJUXqz6h%2BVM4IVkpqxMz%2FSyDNXWzVXqnUqpvvdZMRQYLEGI3Oie8oj%2Fj4xN2OrMDfxQU3rZnpKyHPO0FtSHzoOe1TJsvB94%2FsFsiMwMjXKUi4L8Rwgq7pIS5Ff%2BQXL2dt4s15m0trtIhKauA30HeUKxTFzPkDhIOOA8XlxllxVesuQKxwrr2ucBZyeHayHX25l14XksdMDSDFKZx2%2F%2BjC8irq%2BBjqkAe82QCJAE9uHVqhmGqSVaqyo3mqBs9ZSEcgyJH3XTGtVnERhdcz9%2B8r%2FpiPR9yCFXv0eJgbVnP4xMY%2Bg8qpwthGMtwgAo3KU4fCA2tm5KyvKNKEJVFcsGZLbcv6uxKZyehpw2lXixza7TpUuqIYYBOKPFU5UbEaShMFRJ4QfWF%2BxZVhv49euHsV3OL%2BYEp%2BjFTCk7FtyIl%2FyTwJ01X7efHEv8sHn&X-Amz-Signature=09dc1a4b192b9f673077b3b498555aa59eb612d58c0482ab6b24c7bbbe9062ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635LSWCNH%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDGFzujkuSQWaBLwr8To2pG9TxM%2BCF3%2FLwVDGzQnm%2FXcwIhAKjd9PakUQgkZgPvIk5nWrYcSP5FWNcQNJGQlIE6T1u%2BKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP51W3vkZdDoy9%2FDsq3AOc2D1HjMYtmZIGrgjr2KvJX9zbUIjkm8AfS1UfBl5dXviPFStVodDitX%2FCymlrHnu8wzLiGCcnbaPorEguzFnLa%2FAjH23HyEdsLEHMuE2Yw39RNGSyzDZpELdEDPiZVbIeajuFM7ZEunhjq2IrqMkKJLiwg2Xqk9Hcuyuh2zid6SDK1cjww%2BRz3%2B%2FcM0zs5QG7rJ0wzSNpTsLqsN9xCjt%2FDJMUhiRgY0iIssSpo2TnXeQOLACW%2BBtXwOcJ%2Br7buudQKaH1ndSk4OULUTiAGfQoUgKo5BWOvdK2C9WDu2tltL6dT6AS9aRAXJS44EAZG%2F1V%2BiYaeyNdQqWaTx10cTWAnJCjUkGA2xTOMxa4qqT50023S5BtVHjBS%2BHFbOa%2Bfx8wNL95mlLI9XA11jBC1xSyj6UQLsh%2FW2ypUtwxuXGJUXqz6h%2BVM4IVkpqxMz%2FSyDNXWzVXqnUqpvvdZMRQYLEGI3Oie8oj%2Fj4xN2OrMDfxQU3rZnpKyHPO0FtSHzoOe1TJsvB94%2FsFsiMwMjXKUi4L8Rwgq7pIS5Ff%2BQXL2dt4s15m0trtIhKauA30HeUKxTFzPkDhIOOA8XlxllxVesuQKxwrr2ucBZyeHayHX25l14XksdMDSDFKZx2%2F%2BjC8irq%2BBjqkAe82QCJAE9uHVqhmGqSVaqyo3mqBs9ZSEcgyJH3XTGtVnERhdcz9%2B8r%2FpiPR9yCFXv0eJgbVnP4xMY%2Bg8qpwthGMtwgAo3KU4fCA2tm5KyvKNKEJVFcsGZLbcv6uxKZyehpw2lXixza7TpUuqIYYBOKPFU5UbEaShMFRJ4QfWF%2BxZVhv49euHsV3OL%2BYEp%2BjFTCk7FtyIl%2FyTwJ01X7efHEv8sHn&X-Amz-Signature=3cb81833b9a2dcce23e2cee9a07ac683745234955bc16d01f59135a748fe8341&X-Amz-SignedHeaders=host&x-id=GetObject)

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
