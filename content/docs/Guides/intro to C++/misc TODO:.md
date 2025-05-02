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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LY573KP%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCXtV3dD63SIm9bo8cdUsGF6GnwsV7uogjACqaLKbnSOQIhANBJEzxYMg9FuN2RJhQbHJtCwitXGowEmfDos7ZZGf83KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7h5xOQYZV7EKQzfcq3AMA%2BVBx0RzLuv4N8ZBf3dmXlLsw4YVQzXsfgY61Qmmc4BsSVC8nUWkadyw9ez7F7d4txkJcbSwcEjR0LfRbNgPOpJy59VncUktmXcg41C2fWGIvT6DVsSO4lVyybLcYFDXRKbHZJPFyw11mt5j%2F%2BtAYHrntlVqW7Qgk2f1JvNdKnWOBPA0xfM6dBnkVeb85gux4og9R0inLQUHrELIkMPP19r7cFMgQ4KmOcTdvox6eypxb1NWeapq8Tzz05Yf28cmD3b%2BgftrYmAUPG2X9f5ctj4HgwEX0r0Mn5Qdq%2BHzkSSSHHZPxRVTEA17g1u%2FUKTpSwjuNwbFkl5GedQKpyuQ6N3wJWj2VTiddULW8yOxYXz6I%2FveIMYSRVH9jjFFLIUSDZg9Zj6BcX9YMMtKH7%2FoV7SNdzNAaWzj9i0vrWlFfSXsR2h7ILQei%2BmB5wUr%2BrSzEEKmEcT8aMgbnVl4Dp6BTX62ilhke6AFs3vOfS9QvfcR3YJCfR2POudFDbJ8Tsf1aaX0NtgJGy9OZX8AcAa23jOQnG9gpPnGvByiFDpN3HNjTgGAAuZo7qGHOQyZSYpQkqnfRd1Q75RfkNlkjK0spqYiA2ThFl05o6lOpnPF%2BJg3bFFT5TBnJ%2FbLs7TCM2dHABjqkAUkRtJecrtuWWE9Z02d7uvFp2gQch3mbnug%2FH7ymGSri%2BhsGRCOe2l6H0UA3wA2kjd5piCeaZfjtcPi7ZBaKRUgRzJHpzzfb44dGPzEy9HG7STxZ4hMZvjcV9wiIEcLivVtIQ7xfq5Qw8vewkzX7uHquXdva1TzDg8ohqE82UvPQZbxbEBOJsORiWnDdoWSyLURnqgQIDwdQ8WSAJ1og7O8A5H2N&X-Amz-Signature=8edf2f328efc9cff353a79ab754bf9e8c77a052a468250c9f116a880155658d0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LY573KP%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCXtV3dD63SIm9bo8cdUsGF6GnwsV7uogjACqaLKbnSOQIhANBJEzxYMg9FuN2RJhQbHJtCwitXGowEmfDos7ZZGf83KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7h5xOQYZV7EKQzfcq3AMA%2BVBx0RzLuv4N8ZBf3dmXlLsw4YVQzXsfgY61Qmmc4BsSVC8nUWkadyw9ez7F7d4txkJcbSwcEjR0LfRbNgPOpJy59VncUktmXcg41C2fWGIvT6DVsSO4lVyybLcYFDXRKbHZJPFyw11mt5j%2F%2BtAYHrntlVqW7Qgk2f1JvNdKnWOBPA0xfM6dBnkVeb85gux4og9R0inLQUHrELIkMPP19r7cFMgQ4KmOcTdvox6eypxb1NWeapq8Tzz05Yf28cmD3b%2BgftrYmAUPG2X9f5ctj4HgwEX0r0Mn5Qdq%2BHzkSSSHHZPxRVTEA17g1u%2FUKTpSwjuNwbFkl5GedQKpyuQ6N3wJWj2VTiddULW8yOxYXz6I%2FveIMYSRVH9jjFFLIUSDZg9Zj6BcX9YMMtKH7%2FoV7SNdzNAaWzj9i0vrWlFfSXsR2h7ILQei%2BmB5wUr%2BrSzEEKmEcT8aMgbnVl4Dp6BTX62ilhke6AFs3vOfS9QvfcR3YJCfR2POudFDbJ8Tsf1aaX0NtgJGy9OZX8AcAa23jOQnG9gpPnGvByiFDpN3HNjTgGAAuZo7qGHOQyZSYpQkqnfRd1Q75RfkNlkjK0spqYiA2ThFl05o6lOpnPF%2BJg3bFFT5TBnJ%2FbLs7TCM2dHABjqkAUkRtJecrtuWWE9Z02d7uvFp2gQch3mbnug%2FH7ymGSri%2BhsGRCOe2l6H0UA3wA2kjd5piCeaZfjtcPi7ZBaKRUgRzJHpzzfb44dGPzEy9HG7STxZ4hMZvjcV9wiIEcLivVtIQ7xfq5Qw8vewkzX7uHquXdva1TzDg8ohqE82UvPQZbxbEBOJsORiWnDdoWSyLURnqgQIDwdQ8WSAJ1og7O8A5H2N&X-Amz-Signature=2ae528ce89c41e5ae5336900e2f6404fbfb54b16fae09c8ba7640fdf4193fe31&X-Amz-SignedHeaders=host&x-id=GetObject)

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
