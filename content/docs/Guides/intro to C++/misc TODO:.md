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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBFDXMR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0AzCX61BPitz3CaB%2B2qqa50rcgu53Qo%2BCqZsTPkLyAAiEApfXg35k7ujCJmDYs1X%2B8c17hAZhDvNrxnt5foXkKDkwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHn4pftaKwojG5urhCrcA7pU9y%2BP9ZkVRRfkCw5IGLgAvHS62kKvuePcg6Rc3RFnpWA8xP3DsxngqwisRyAEQ5Z3oCDVAWDYsk%2FBPwvx3%2FT7J2r1bZkoFvk9J2KEFEJjAQffLCvmas%2BOsZYa0uZ8Hu2FvJQsv1BlwHC5p5RcjkdgWPn1EKbB4Ys76gLAKEzY5O4Qn5ncfL3XMOdaIU%2FOggbNV6slrw%2F%2BhzzjEKmOjZn%2FBJ8Bhn4UC%2BfOF%2Fg2LIVdUt9ir8CKBjuIAZAgydNpQv%2BFuiDIh3HUjOxwjzXZ0yKQk6UtiB1SNjC2TaSzsuN%2BRN4oWVLKneW8%2FaNdXNbN0%2FjJLVBVFSaC6QshGSaPn%2Fz2BNlXO9Rz83kAM4IMvslwtM0%2FjYXnnLnNtLqxv08ZaXSiM5eqPboHhsY7DjcIQSEfX75dS0y3mQxE1AMqgU9159oEbxGm3DD1jWoybzHa6cEHAG5rvsddbYY6WOPyN%2FlhKABj6fWRavmJ4A5Fa6mRp9ne73jyoI%2Fh5E7zDlDRx46wEnW95g6u2HdAEoVvg3JM1KLiV1kRupXjCH7XSBJPcC%2B%2FcbydwC1l4o5XZNf1023fpt07SCvV0iaZTmhw6MdeQbv%2FM1%2BZpf%2FRq5CNFDDfsTO9uUlq3nQGIkMGMLKH3cIGOqUB7%2FlnA2oFNTnx8lKs2V0WwLHTTXdiTdM4BanpuqOqE2IurCWzwPg%2BuBsiJ6iUgfA%2BkYSChc%2BrCuHI%2BuV1mzcGn6WzqohpD17UU1xkWTJlybgoMqvqnSF%2FfU9hRDtReIKkBIShdH968Ynb3Jkz2jMpWUTKFgZRyf1o0yaJBKSEMzmD%2Fv%2BkzSWuCKd3xa79DgMEgInqJhz6TZbmRXjAKkbKNP%2FbpLqX&X-Amz-Signature=e0af236f40347cae91493e19d3cbf4498b1007069b3c3bce34995ca922c6a996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWBFDXMR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0AzCX61BPitz3CaB%2B2qqa50rcgu53Qo%2BCqZsTPkLyAAiEApfXg35k7ujCJmDYs1X%2B8c17hAZhDvNrxnt5foXkKDkwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHn4pftaKwojG5urhCrcA7pU9y%2BP9ZkVRRfkCw5IGLgAvHS62kKvuePcg6Rc3RFnpWA8xP3DsxngqwisRyAEQ5Z3oCDVAWDYsk%2FBPwvx3%2FT7J2r1bZkoFvk9J2KEFEJjAQffLCvmas%2BOsZYa0uZ8Hu2FvJQsv1BlwHC5p5RcjkdgWPn1EKbB4Ys76gLAKEzY5O4Qn5ncfL3XMOdaIU%2FOggbNV6slrw%2F%2BhzzjEKmOjZn%2FBJ8Bhn4UC%2BfOF%2Fg2LIVdUt9ir8CKBjuIAZAgydNpQv%2BFuiDIh3HUjOxwjzXZ0yKQk6UtiB1SNjC2TaSzsuN%2BRN4oWVLKneW8%2FaNdXNbN0%2FjJLVBVFSaC6QshGSaPn%2Fz2BNlXO9Rz83kAM4IMvslwtM0%2FjYXnnLnNtLqxv08ZaXSiM5eqPboHhsY7DjcIQSEfX75dS0y3mQxE1AMqgU9159oEbxGm3DD1jWoybzHa6cEHAG5rvsddbYY6WOPyN%2FlhKABj6fWRavmJ4A5Fa6mRp9ne73jyoI%2Fh5E7zDlDRx46wEnW95g6u2HdAEoVvg3JM1KLiV1kRupXjCH7XSBJPcC%2B%2FcbydwC1l4o5XZNf1023fpt07SCvV0iaZTmhw6MdeQbv%2FM1%2BZpf%2FRq5CNFDDfsTO9uUlq3nQGIkMGMLKH3cIGOqUB7%2FlnA2oFNTnx8lKs2V0WwLHTTXdiTdM4BanpuqOqE2IurCWzwPg%2BuBsiJ6iUgfA%2BkYSChc%2BrCuHI%2BuV1mzcGn6WzqohpD17UU1xkWTJlybgoMqvqnSF%2FfU9hRDtReIKkBIShdH968Ynb3Jkz2jMpWUTKFgZRyf1o0yaJBKSEMzmD%2Fv%2BkzSWuCKd3xa79DgMEgInqJhz6TZbmRXjAKkbKNP%2FbpLqX&X-Amz-Signature=bb5b6bf04433d8885b7893a98272e0e4896b3a31051bb217824df8faa4c90ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
