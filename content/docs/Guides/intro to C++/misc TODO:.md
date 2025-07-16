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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4UZYWIL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDREEWZq%2FpnuM7iXIymXG1kXDW7vnPRGm0IGlzyfy%2B6hgIgIPalq3XN3ykjXqjAxy4me%2BclvUhvJt2%2BPBA9aM0%2BPYYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDEr4ax49vZDc6ky2wyrcA1OE3uXevD2drq3IOt8Q0R3d%2F1T8pdStC60%2FbJ41vL5MaIUIm%2BOAbDnQAcgEWN2HupzpS%2BA7ZBxwQFp%2FiOrUR1YkiXlcKTIyXJLbL2BZvx%2F8iyLL0PA2GaVeU8%2BOfZlgMLgfcN6l5jszqyvqzpE0siY%2B2VRzp9IExiwWKPZiiabQZ3dOUVidDfybo%2Bt6gc7CLBwu91T5b7bxNA7RoXKl4jP6E1zGyLU6%2BqRN9yp5V62TM4cOKQ%2FwehvP7or7DH5gOAZxynxVD1N4lbbTi%2BIglezW%2B8hfNh%2FcVFDUX%2B2tGNN%2B7Q5gg5Gt%2FzErcSOtc1iYi7Cq%2B8g7bHreeaTG794HCwQKRm14fJLk98a6hcaqqhgGT1Sw3iW1n%2B%2F8C6YlJhkoR1ssWhQ4ZUqZC8HFWA%2FrEFJ3gBrvlkvOnHpBwYtUrjyPgiOcBv%2BAPkv74yYIapivd13ILvyvc6lrQtncb12ZcLENj%2BfCQkTdvJb7IMEXs7w%2FwQv%2FOvvM922sPu6RR%2Bkjtzxs%2B8fBloAWQTP%2BUuIRIWZmTvQEZRgJxRrJekiSBXoQAaloAk6hCJCM%2FFK0PbS7iCp7x%2Fqklnkm8R3hABm56cy5yYVt6mc5s%2FY6Js96NFyld%2FZW3jlcDbZ3O6piMI6T3sMGOqUBj37%2FbjqueTFqocnu3y1JehsByrh1iMMjR8BNNC7785Ibyr%2BmjWqgbDkOO15DA9bqb4chFC9XU2QzuCYEBCNQLdJtMsBOFjzNuUCvO0%2B9Xmzu1C%2Fj%2BfRlqBFP7ibc2GQG5K%2FPwlBOqBoiSGV3YdPriixBv2Tgcrw1TchMpJ08ZFIP8MBEe6Ezvd9HsR7wXioeKJOtPaOIMguFqU%2BQzJU5QEPT8HaD&X-Amz-Signature=43c594fca4a90dae6bb6fbcbfd1f182c72240fbf8a70aafea84881df261dbb11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4UZYWIL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDREEWZq%2FpnuM7iXIymXG1kXDW7vnPRGm0IGlzyfy%2B6hgIgIPalq3XN3ykjXqjAxy4me%2BclvUhvJt2%2BPBA9aM0%2BPYYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDEr4ax49vZDc6ky2wyrcA1OE3uXevD2drq3IOt8Q0R3d%2F1T8pdStC60%2FbJ41vL5MaIUIm%2BOAbDnQAcgEWN2HupzpS%2BA7ZBxwQFp%2FiOrUR1YkiXlcKTIyXJLbL2BZvx%2F8iyLL0PA2GaVeU8%2BOfZlgMLgfcN6l5jszqyvqzpE0siY%2B2VRzp9IExiwWKPZiiabQZ3dOUVidDfybo%2Bt6gc7CLBwu91T5b7bxNA7RoXKl4jP6E1zGyLU6%2BqRN9yp5V62TM4cOKQ%2FwehvP7or7DH5gOAZxynxVD1N4lbbTi%2BIglezW%2B8hfNh%2FcVFDUX%2B2tGNN%2B7Q5gg5Gt%2FzErcSOtc1iYi7Cq%2B8g7bHreeaTG794HCwQKRm14fJLk98a6hcaqqhgGT1Sw3iW1n%2B%2F8C6YlJhkoR1ssWhQ4ZUqZC8HFWA%2FrEFJ3gBrvlkvOnHpBwYtUrjyPgiOcBv%2BAPkv74yYIapivd13ILvyvc6lrQtncb12ZcLENj%2BfCQkTdvJb7IMEXs7w%2FwQv%2FOvvM922sPu6RR%2Bkjtzxs%2B8fBloAWQTP%2BUuIRIWZmTvQEZRgJxRrJekiSBXoQAaloAk6hCJCM%2FFK0PbS7iCp7x%2Fqklnkm8R3hABm56cy5yYVt6mc5s%2FY6Js96NFyld%2FZW3jlcDbZ3O6piMI6T3sMGOqUBj37%2FbjqueTFqocnu3y1JehsByrh1iMMjR8BNNC7785Ibyr%2BmjWqgbDkOO15DA9bqb4chFC9XU2QzuCYEBCNQLdJtMsBOFjzNuUCvO0%2B9Xmzu1C%2Fj%2BfRlqBFP7ibc2GQG5K%2FPwlBOqBoiSGV3YdPriixBv2Tgcrw1TchMpJ08ZFIP8MBEe6Ezvd9HsR7wXioeKJOtPaOIMguFqU%2BQzJU5QEPT8HaD&X-Amz-Signature=e8d2c4b7820f479e7d2bbab17ada09c395bf623351b8290794e97ac317db441a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
