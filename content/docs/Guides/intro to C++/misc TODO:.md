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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VULQX5N2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2hTA%2BBmRJX2mfdmBhJOWtkS8gD20n2ZGWKzTOItiRHAiEAlboslU%2BRj3SjfZA0VopSOBeJ9APHL5opkJHYEYMhj2AqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2Flduu29yH0syfyDCrcA9ASR2fUbZMJp6w197Hn%2BxLcvUn2aqlBfBl1mPkj61XswC8k6rA9vssSHQ7kRUq%2Bixbn%2B0SjGxRSBCpxwp8xiRRh1GKbXomZlRToRsY7KhgzdvSKhGwqtfwKN%2FlFyKn99nl%2FLZld6j5Z5%2FzFqNNHSXNogvawfRDTaxvY3xhomrSJ3AnpML0nRaBILFCY1DNzcGbPOSA8QSYUJdenhQIRWPq5qGDIM6sthzHmlFiOE2tIp1Q4DWmLyGKkU%2BqMaIG7tdn0ySxPevhSF%2FuE%2FDrdW12%2FRKX8W7T6iNJRFkRdP6aJWViXanhMNqOic0%2BIqyOyfQ6M4wtHJ8qV2gXT4u7Qg0q%2BXKtaWdgWpgCIZpXvVoko1bKk9DqOBTXOBi6aed%2FUendeLqtJG64kLThtJFQAr2Cqs7WM%2BOpKfOJeHZUFCFmkMeOz5M0pYGtYwPiMPy1LVrCTZw86F19ScNZZBqizVAYXCt6K%2BXr9sqJ3L47td5D52Pds4LPX0vYX5vI%2FM6CeiIdZRif4zWFLG%2FQcHcczpo2V35AgNA13PmktI%2BtsfcEidwwb4nbfB632RdAe20z5L5Hk9W%2BBR5pqKJ0Jnbq9J94tCd5qLtOwhQfC1mJ3lgvVQekvgkGOCWtZseqsMM6g%2FsIGOqUBsyVQfRHCPsjFp6UppwzRSMwRG3zDTG9zUZfie56LhZMsY0nqxy459PMuKdv8YkUjhe6rm0nL542Un55SqT00tkYTR8zlms4buADHlCnEmvmwFA4gFPsy4l0eit5%2BZ1DZnWgw6qwhhXDmTQe9kSFraUHNA7RtHPHPZ7rrMeYxnm8JrU5Az7vGlHJJ6WhHbWB8UvSnc0FUkhCzhNqj%2FUEZMelhY0ZK&X-Amz-Signature=aa7cf15ef0f2db4a92c49412f50d0865a4375e2984afb58a3c7c8e9e7dafed7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VULQX5N2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2hTA%2BBmRJX2mfdmBhJOWtkS8gD20n2ZGWKzTOItiRHAiEAlboslU%2BRj3SjfZA0VopSOBeJ9APHL5opkJHYEYMhj2AqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2Flduu29yH0syfyDCrcA9ASR2fUbZMJp6w197Hn%2BxLcvUn2aqlBfBl1mPkj61XswC8k6rA9vssSHQ7kRUq%2Bixbn%2B0SjGxRSBCpxwp8xiRRh1GKbXomZlRToRsY7KhgzdvSKhGwqtfwKN%2FlFyKn99nl%2FLZld6j5Z5%2FzFqNNHSXNogvawfRDTaxvY3xhomrSJ3AnpML0nRaBILFCY1DNzcGbPOSA8QSYUJdenhQIRWPq5qGDIM6sthzHmlFiOE2tIp1Q4DWmLyGKkU%2BqMaIG7tdn0ySxPevhSF%2FuE%2FDrdW12%2FRKX8W7T6iNJRFkRdP6aJWViXanhMNqOic0%2BIqyOyfQ6M4wtHJ8qV2gXT4u7Qg0q%2BXKtaWdgWpgCIZpXvVoko1bKk9DqOBTXOBi6aed%2FUendeLqtJG64kLThtJFQAr2Cqs7WM%2BOpKfOJeHZUFCFmkMeOz5M0pYGtYwPiMPy1LVrCTZw86F19ScNZZBqizVAYXCt6K%2BXr9sqJ3L47td5D52Pds4LPX0vYX5vI%2FM6CeiIdZRif4zWFLG%2FQcHcczpo2V35AgNA13PmktI%2BtsfcEidwwb4nbfB632RdAe20z5L5Hk9W%2BBR5pqKJ0Jnbq9J94tCd5qLtOwhQfC1mJ3lgvVQekvgkGOCWtZseqsMM6g%2FsIGOqUBsyVQfRHCPsjFp6UppwzRSMwRG3zDTG9zUZfie56LhZMsY0nqxy459PMuKdv8YkUjhe6rm0nL542Un55SqT00tkYTR8zlms4buADHlCnEmvmwFA4gFPsy4l0eit5%2BZ1DZnWgw6qwhhXDmTQe9kSFraUHNA7RtHPHPZ7rrMeYxnm8JrU5Az7vGlHJJ6WhHbWB8UvSnc0FUkhCzhNqj%2FUEZMelhY0ZK&X-Amz-Signature=da691f552f7ee953041a75db4d9c5966351c6bbd59b03d2bb52149937cd41264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
