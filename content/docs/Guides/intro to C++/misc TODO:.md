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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YWEVLFD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDbwlXVfd2EM2UzWDdClDnsEjXiAcs27aswP%2FaAcun39wIhAPkMBxiG8AI52jwl5tPKqCy%2FAyMj4%2FxIsxvJZUzLqvsOKv8DCB8QABoMNjM3NDIzMTgzODA1IgyiGxz%2FPNsTTxFKsXUq3AMntOCY%2FwKb3aBnqwmUFLhwPd%2FjDnWPjFrnve8OmLY2%2BNqNS5Y3PPKvxnYEtdXS1HYUdEPOadREA4umY%2BZUMX9gtKQTQtWnUiW%2BzqsYOeJfKbUXHVhWebzMaCu%2FOJ8S1UNj%2Byb5F%2B%2B30vDxZqx7Es8n%2FwOpmvIBkzzyP0bXEhssJdChLJacqB6rObd%2FP5OryyQSF2fWzL2XwC7Gdhfs8lloSZ%2BUz5It3QgviZbd2q4281QvtW%2B570X5k7DLjeFKIId4gHQQpgON4%2Bp4mgS5ht3oBVXHWImJc6jTqQxo%2FqK4SJxxer9V0oIjE6Dl1v6esMFh%2F4aVLWFcrY3qwTExgvlK9fwd1w6%2Bgjfz4BoK2uEY32EOjlstWPl7UVLntVWEgR3zJ3FN6CddvVOFfcfN1zBbHNvT%2BolozMTGGmCKFUKgQnrbdfnduWLRZLc%2BrptHIToZI%2BM0iN%2FVKubr7lKcIgXvta1BZxr%2FJltLWMaH8jrOQQPVO9YG7aG3CXhMdUw3jRwizgkfmOuRXoaRl74eGQsypc8bWjDkxD2lrGdnC%2FgMcPVwvE6DxUbah6yfitotmnGXt8IOjRm7MvpXApPOEGgZjaBJTeQfMwDSVPBNI1ziDZK1XbW%2BZdwNQPSV3jDnyNDDBjqkAYSf%2B930PRWcZFH8dUEXEBKtQTD7K4v9IK2Avq1MS80gvlX39i9wClv3Z4GOEitS1K2ya2k9je0nzeTl0SXIg2pxQmyo77en1foMLVPtuj9PkMI3CREd1FcgqlJqjuZ90BlDyA0SeceZ1ztMRvHdzEfIvREvspvQi%2Bb81ZtSXZZCGu21deEZwrD3yi2sFwuvtfdV%2BgwtYR5LqyJ5Izvk23RG7wYY&X-Amz-Signature=9dd0ec0820f23f10015c4c04ea42db1431fd33d1a233b6e066e5425a24b0c7da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YWEVLFD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDbwlXVfd2EM2UzWDdClDnsEjXiAcs27aswP%2FaAcun39wIhAPkMBxiG8AI52jwl5tPKqCy%2FAyMj4%2FxIsxvJZUzLqvsOKv8DCB8QABoMNjM3NDIzMTgzODA1IgyiGxz%2FPNsTTxFKsXUq3AMntOCY%2FwKb3aBnqwmUFLhwPd%2FjDnWPjFrnve8OmLY2%2BNqNS5Y3PPKvxnYEtdXS1HYUdEPOadREA4umY%2BZUMX9gtKQTQtWnUiW%2BzqsYOeJfKbUXHVhWebzMaCu%2FOJ8S1UNj%2Byb5F%2B%2B30vDxZqx7Es8n%2FwOpmvIBkzzyP0bXEhssJdChLJacqB6rObd%2FP5OryyQSF2fWzL2XwC7Gdhfs8lloSZ%2BUz5It3QgviZbd2q4281QvtW%2B570X5k7DLjeFKIId4gHQQpgON4%2Bp4mgS5ht3oBVXHWImJc6jTqQxo%2FqK4SJxxer9V0oIjE6Dl1v6esMFh%2F4aVLWFcrY3qwTExgvlK9fwd1w6%2Bgjfz4BoK2uEY32EOjlstWPl7UVLntVWEgR3zJ3FN6CddvVOFfcfN1zBbHNvT%2BolozMTGGmCKFUKgQnrbdfnduWLRZLc%2BrptHIToZI%2BM0iN%2FVKubr7lKcIgXvta1BZxr%2FJltLWMaH8jrOQQPVO9YG7aG3CXhMdUw3jRwizgkfmOuRXoaRl74eGQsypc8bWjDkxD2lrGdnC%2FgMcPVwvE6DxUbah6yfitotmnGXt8IOjRm7MvpXApPOEGgZjaBJTeQfMwDSVPBNI1ziDZK1XbW%2BZdwNQPSV3jDnyNDDBjqkAYSf%2B930PRWcZFH8dUEXEBKtQTD7K4v9IK2Avq1MS80gvlX39i9wClv3Z4GOEitS1K2ya2k9je0nzeTl0SXIg2pxQmyo77en1foMLVPtuj9PkMI3CREd1FcgqlJqjuZ90BlDyA0SeceZ1ztMRvHdzEfIvREvspvQi%2Bb81ZtSXZZCGu21deEZwrD3yi2sFwuvtfdV%2BgwtYR5LqyJ5Izvk23RG7wYY&X-Amz-Signature=1deefb3f0624a799cc59568f944c93cf09ee1d070f92c7e8b7f4d02c5784d986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
