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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STB6FFOQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe62SCWQmDP52b6vH2mvfLct8dxkOAwwNEStSGnEhfnAIgL%2BgdVASW%2BH0x2fGpf7Rw2GwoWmZ8KYs9JASzdlc8ogkqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx6IdqH9IV6H25KmCrcA2WoFDb5AyM1gvRu4F1SnPZ1QwCDpTKWnG7zpH8%2BAISGS5MbrE90DllfQFPUKNCPvkJXZAh%2BbtaveL7amTbKYkAaWSzDta%2FEQl6bWju5yZdrYxxdN4DowZEbxI6WV%2FcYIJ6cBct54kPimKCHf1hS68JV6QOsz7lsFnbTqbtGgfIW1KyNWcLcVhIhitxKJra2vcsZrU8i48Gk3qcEQs0YNhQUpvRBKJNsGOAoQQ%2Bm2xsCJKCriqF5x%2B8InaH5xur0qS0%2FL0ldXcQCWE1u7K4X02JZYnvzeSlNmBLT%2BJH1kwG2MYKLgxT9tPTC36%2BPwjiZmte57KoBFMBJiDUcOsiDOyyXyoLDxsrygrXwx5x5LT01hHWQfQQtMv1Mv3jvWJt33AXhyd7Jf7L88vKfODi2jpEWyJvADlEoHjbavOZai3rABzQzE3p%2Beg7illfDapaoSccguU336gN2ybmZAvt95m7UVl3bx88OVa%2BgZdMLj7gFpFMxREXJ1JWSG%2Bw6b1cWLNlcbhdC5yWa5rrYCvWlHZFdNi8uVyJDCPT8vsnLWQVVryx4kE8Jgvv4iG79XcQ5K1k6wHpSS9c04dlZ4YzAvcINHb7jAzzzoXUtHr5ZMdMPCgxuOtjoh4fCW1ABMOyNib8GOqUBc7WlRkyZjPtPIX6HRIjNSNVtiRaWbtbrtXVd9dCQWNwO8zyEODLEh4CGPB3pjs7fkXEzvZo6jqzJJaIxSp3Z7AXaif%2B%2FDpLtAndVbCcQSg2g4Jm3U2Cz5s717xapAJyKKnndLTdGC0sEbA2HEP1BEnDqstGGFQS6XZPYUJJpms2At%2F3oP1sgTcNGoiclTEbGZprbLINiulRvGptlbxhWX9kztYHa&X-Amz-Signature=03710607066099112595fddbd9fba15017c78b944b86073c2ec849d1f0329393&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STB6FFOQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe62SCWQmDP52b6vH2mvfLct8dxkOAwwNEStSGnEhfnAIgL%2BgdVASW%2BH0x2fGpf7Rw2GwoWmZ8KYs9JASzdlc8ogkqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx6IdqH9IV6H25KmCrcA2WoFDb5AyM1gvRu4F1SnPZ1QwCDpTKWnG7zpH8%2BAISGS5MbrE90DllfQFPUKNCPvkJXZAh%2BbtaveL7amTbKYkAaWSzDta%2FEQl6bWju5yZdrYxxdN4DowZEbxI6WV%2FcYIJ6cBct54kPimKCHf1hS68JV6QOsz7lsFnbTqbtGgfIW1KyNWcLcVhIhitxKJra2vcsZrU8i48Gk3qcEQs0YNhQUpvRBKJNsGOAoQQ%2Bm2xsCJKCriqF5x%2B8InaH5xur0qS0%2FL0ldXcQCWE1u7K4X02JZYnvzeSlNmBLT%2BJH1kwG2MYKLgxT9tPTC36%2BPwjiZmte57KoBFMBJiDUcOsiDOyyXyoLDxsrygrXwx5x5LT01hHWQfQQtMv1Mv3jvWJt33AXhyd7Jf7L88vKfODi2jpEWyJvADlEoHjbavOZai3rABzQzE3p%2Beg7illfDapaoSccguU336gN2ybmZAvt95m7UVl3bx88OVa%2BgZdMLj7gFpFMxREXJ1JWSG%2Bw6b1cWLNlcbhdC5yWa5rrYCvWlHZFdNi8uVyJDCPT8vsnLWQVVryx4kE8Jgvv4iG79XcQ5K1k6wHpSS9c04dlZ4YzAvcINHb7jAzzzoXUtHr5ZMdMPCgxuOtjoh4fCW1ABMOyNib8GOqUBc7WlRkyZjPtPIX6HRIjNSNVtiRaWbtbrtXVd9dCQWNwO8zyEODLEh4CGPB3pjs7fkXEzvZo6jqzJJaIxSp3Z7AXaif%2B%2FDpLtAndVbCcQSg2g4Jm3U2Cz5s717xapAJyKKnndLTdGC0sEbA2HEP1BEnDqstGGFQS6XZPYUJJpms2At%2F3oP1sgTcNGoiclTEbGZprbLINiulRvGptlbxhWX9kztYHa&X-Amz-Signature=20905df52580fd05bea652902d275d46b6e007321acae38382ab8b6b17794d78&X-Amz-SignedHeaders=host&x-id=GetObject)

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
