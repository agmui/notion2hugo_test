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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632NOKMXS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDQowz%2FH188O7N1qsWE3F7xqW%2BHdHDlamaeQwVq%2Bgbt6gIgUG3Tp6FK0w55FiSED1FdLII6UT%2BEkQpaaqvH6SjumH0qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPJUiohqKa%2FQHsVZyrcA%2BvLK6U8b%2BmKvxurOartIWKXEYkj%2F%2FfanzjHsElWH4xNotrTs9ZWMujkPhsvrOutiY3H9%2BfW4G1vA%2FC3%2FsF3yUepMnIIBZykhETg%2BzKUSwPj2iugLdxPwlHILJHtSHVfLaoLm7lBz1kR1bN7b38on1RbspmQHptibNY2p%2FWW3fkKC%2B%2BeovrnMABhSMuvNRXmNnBt4RYR5YDKpa4046j7aD7dnixCI%2FRN2FwPYD2A6dmnRUIWNnY%2F6oz5FDLll7hKkqvq87sfdcjNzcdoUoIwyXH%2BiVtE94nUU%2BrLbNgfeW9SLpUB8g9t5I%2FKVFFBJmyGOwLw0szNzA%2BEAt1%2Bm0l6ZXULC%2BFcPVBRjkDAfmN9YHa0fKo%2BTkUiGxMNsyLVEYT9Aj2y9CuGPRMTMKlBpScJmTYcWwJf%2Ft9rTo%2FzHMJLS46QocMuxh0nTFiXWhAy8fv6zw7zqXAGxJDSlN%2BhcyDMB%2Fyt2levbNA9s4TkeVXnsXfWdklztRdZLLIQB%2FvsYbkaxmHNsyHaf2YXTy6r%2BWJo0zIC3YWXakoidoSz4WFmog0v27GMmt%2BkNx4sQS3lht9aCIU7F4h739WSNk5VGiAXsp7o6EK%2FDoZSf0TRf3lzN%2FK5C%2BTKSJqHQ8I5svGIMLDbl8MGOqUBgZmmd%2B%2FP8%2FREu4jtB%2BTAoKjaEXUqWAjjJNAfTByyuFy33cabJkDxmQj9fg2gFvTcbLTXiBcJdW%2FgotXzWaG9fsIsNln2RzlXDIHdk4b3bd88BQSwc0apmLZnpFsF%2BQx2x%2BkDHR7H4M8ETshrKzR46GhSeRFkn3KnPuHRwpNkNpAo2n2nPiegxnj1ksCuRzOUb1Giso0cg8uqzaM%2BWHFY6OxeaO03&X-Amz-Signature=4f5b3abb7d95d6c91221a77b7d19fc30a14f368db2d7422b94e44e4d6a6c80b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632NOKMXS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDQowz%2FH188O7N1qsWE3F7xqW%2BHdHDlamaeQwVq%2Bgbt6gIgUG3Tp6FK0w55FiSED1FdLII6UT%2BEkQpaaqvH6SjumH0qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPJUiohqKa%2FQHsVZyrcA%2BvLK6U8b%2BmKvxurOartIWKXEYkj%2F%2FfanzjHsElWH4xNotrTs9ZWMujkPhsvrOutiY3H9%2BfW4G1vA%2FC3%2FsF3yUepMnIIBZykhETg%2BzKUSwPj2iugLdxPwlHILJHtSHVfLaoLm7lBz1kR1bN7b38on1RbspmQHptibNY2p%2FWW3fkKC%2B%2BeovrnMABhSMuvNRXmNnBt4RYR5YDKpa4046j7aD7dnixCI%2FRN2FwPYD2A6dmnRUIWNnY%2F6oz5FDLll7hKkqvq87sfdcjNzcdoUoIwyXH%2BiVtE94nUU%2BrLbNgfeW9SLpUB8g9t5I%2FKVFFBJmyGOwLw0szNzA%2BEAt1%2Bm0l6ZXULC%2BFcPVBRjkDAfmN9YHa0fKo%2BTkUiGxMNsyLVEYT9Aj2y9CuGPRMTMKlBpScJmTYcWwJf%2Ft9rTo%2FzHMJLS46QocMuxh0nTFiXWhAy8fv6zw7zqXAGxJDSlN%2BhcyDMB%2Fyt2levbNA9s4TkeVXnsXfWdklztRdZLLIQB%2FvsYbkaxmHNsyHaf2YXTy6r%2BWJo0zIC3YWXakoidoSz4WFmog0v27GMmt%2BkNx4sQS3lht9aCIU7F4h739WSNk5VGiAXsp7o6EK%2FDoZSf0TRf3lzN%2FK5C%2BTKSJqHQ8I5svGIMLDbl8MGOqUBgZmmd%2B%2FP8%2FREu4jtB%2BTAoKjaEXUqWAjjJNAfTByyuFy33cabJkDxmQj9fg2gFvTcbLTXiBcJdW%2FgotXzWaG9fsIsNln2RzlXDIHdk4b3bd88BQSwc0apmLZnpFsF%2BQx2x%2BkDHR7H4M8ETshrKzR46GhSeRFkn3KnPuHRwpNkNpAo2n2nPiegxnj1ksCuRzOUb1Giso0cg8uqzaM%2BWHFY6OxeaO03&X-Amz-Signature=a2a8b01bfd79733b631edbc8d786c45091b94ad01c6d5975d770d574870159b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
