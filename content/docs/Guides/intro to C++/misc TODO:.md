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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZU4WNS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD9VA5PXxTJYlb3IhnbVreGRfT4a7HHh4o%2FrFFQb7B1yAIhAIhUkvAy7rL%2FtLObpvO5G%2FwNACjvcbuny9udvVCSWFfHKv8DCHcQABoMNjM3NDIzMTgzODA1IgxNXsLNeZk62c2BzMAq3AOQNaM1iGovlghnQ6KakVEqfpcOn7ao%2BkCCyotn6FKTHuBGz66KnrC6o2MoXXqGZbx6PDgvygEIGY7Mb3dUxOdhcleZ6m8LorQ6NnnjMA7mzyI8WxXUgP4UGTQOb%2FOmcsGFljX5j98FM%2BzrAaPzt0ATrGQJqQGcOseQfp4nWuecfLJkm4tFMMhBVF3E%2FOrCTkZds0akkHETSbYBILKTQlB4ERxb0U4iuPW9wrBG1PzS9D25il0oSnwj64iPXVzjpPLZIF4j8ht5Iouzs9hTW3Zkreg6C0prbvp2JLZc9P4WlzxwAcRj3GKilZMJopJunWG6bPoVf9ABl79cjQWwBcTNkCRHByZbHi5vJy2UhRPugjGIBoRsI91PmgpFH2ZYOG6HeAs5oDc%2BM9di6F2tnAMcL%2FvgAiKT2aW9cGo3GRFm0D%2F1e8DVcZOOd1gnCJBP3Fmke9rg2HeGwv9PKziqVtxml5Oq3k1fBmR0g7KFIM6ytGAY7DrYrE9tUBqEKHjQYsXBIrp5uCMhsMrJEvyxM%2FazOIelcZbVwP4VPsosMXM8CleUE9s4t1wHrLJoCj2TwhP1gmlu0VAC6Qq%2F2B4BsQpsdWXsYRsTeIY4ma%2BYsNoYKHsqQdVZ1COlCe9riTDUlILFBjqkAVVyuPPAZIUkTazUauT6n%2BE9vKetdS%2Bcd9gaQBlP1hiftYld5yaW7NXaXse5o%2B3VwQsAaI4OK5L7htnuTA6Qm42CAbuwVQfb0FMPO8BLgs36tzdkoKYRU8rnLcmsCOomwH6xk%2B7etXMmHoiB6rBZcVVt9ZgQmrAd%2BKgxMDCmu4icjABcCjLTJCKHRtDZETiaTXmf3tG3J5uB5SjtFRWbgoRKAhzs&X-Amz-Signature=0d6abf3cd4ba6426d15f4fc4c4dfff1d403892ddfa046782fd955e180750949e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZU4WNS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD9VA5PXxTJYlb3IhnbVreGRfT4a7HHh4o%2FrFFQb7B1yAIhAIhUkvAy7rL%2FtLObpvO5G%2FwNACjvcbuny9udvVCSWFfHKv8DCHcQABoMNjM3NDIzMTgzODA1IgxNXsLNeZk62c2BzMAq3AOQNaM1iGovlghnQ6KakVEqfpcOn7ao%2BkCCyotn6FKTHuBGz66KnrC6o2MoXXqGZbx6PDgvygEIGY7Mb3dUxOdhcleZ6m8LorQ6NnnjMA7mzyI8WxXUgP4UGTQOb%2FOmcsGFljX5j98FM%2BzrAaPzt0ATrGQJqQGcOseQfp4nWuecfLJkm4tFMMhBVF3E%2FOrCTkZds0akkHETSbYBILKTQlB4ERxb0U4iuPW9wrBG1PzS9D25il0oSnwj64iPXVzjpPLZIF4j8ht5Iouzs9hTW3Zkreg6C0prbvp2JLZc9P4WlzxwAcRj3GKilZMJopJunWG6bPoVf9ABl79cjQWwBcTNkCRHByZbHi5vJy2UhRPugjGIBoRsI91PmgpFH2ZYOG6HeAs5oDc%2BM9di6F2tnAMcL%2FvgAiKT2aW9cGo3GRFm0D%2F1e8DVcZOOd1gnCJBP3Fmke9rg2HeGwv9PKziqVtxml5Oq3k1fBmR0g7KFIM6ytGAY7DrYrE9tUBqEKHjQYsXBIrp5uCMhsMrJEvyxM%2FazOIelcZbVwP4VPsosMXM8CleUE9s4t1wHrLJoCj2TwhP1gmlu0VAC6Qq%2F2B4BsQpsdWXsYRsTeIY4ma%2BYsNoYKHsqQdVZ1COlCe9riTDUlILFBjqkAVVyuPPAZIUkTazUauT6n%2BE9vKetdS%2Bcd9gaQBlP1hiftYld5yaW7NXaXse5o%2B3VwQsAaI4OK5L7htnuTA6Qm42CAbuwVQfb0FMPO8BLgs36tzdkoKYRU8rnLcmsCOomwH6xk%2B7etXMmHoiB6rBZcVVt9ZgQmrAd%2BKgxMDCmu4icjABcCjLTJCKHRtDZETiaTXmf3tG3J5uB5SjtFRWbgoRKAhzs&X-Amz-Signature=6871ca7f6bbaf6e5b29bc9db1f6dcddf87639f4bab9626acb18f6112e61d69fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
