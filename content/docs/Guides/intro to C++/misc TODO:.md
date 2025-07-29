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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZJORUFK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCaaIV%2F4lunn6fvjR6KpuakeTc9Q0mCYJj3QWcZ%2B318sAIhAIxS8Z5swleR6Sda7x36jQws1nUqwIz3jCT1xUoX3mo9KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvSEvB2bNLBS8efyAq3APRBXHUiQ2QZUOnfqEyQFHZb6gJbJJhXeLVl%2BUxJxnFuZY7kVVGheZhnlZn2ZVZBJqo6AEDH8yfZFhbU1T4EsuQyv5Y2eH13bcLwu9k3C%2BglHVWfaESftOlNdSBCA1GJti%2FLQBEqQ1nCwIIwISoAHtmhniPkWHXR572yr5Fwm6hw2Be3Fnu1aDo%2Fq0iphDNrfSj7emmtfyBztjllIFPxWoOVAHd3lCi%2FbpKeIG6UQKb3rmq9ZREHRfPNIgQuQs2FJu%2FMQIx%2FvMKR7FJf0a4wwIqgRXCmm2GJFFMrlYEvKF9H%2BgjaqVfYCHZvwGl6DRVTNq5v30qli%2FjPu9uSUMPkZeUJLHNZ5YAuyxY9MFdhdDwxw%2BKJB54aFmPTE2zyJRU%2BsXWbagfRnXCB82Q1yN5lvVpg2h51DlH%2FswwJ6M0TMqI%2FLNtp3Ii0vr%2FSumbcFj78aLZ06KYPAzyfgNrMhJXQQCowYE98HQpqktUeRmVTk%2Bik368uF6aDm%2B9%2BDxvMaxhFJMTwpYobxdSBPZXIDOkljvytaLevuoIeT79Nxvuwrxi9Z0PTTPXzjWupnpF6PeJwLBMVXBcucR85rG%2BZlfa%2Bx4igY5xwHqk36Ch66R4MudYqnRvgBJMrhLWTzCTjzC5n6DEBjqkAaUzvtyoVJdZV%2F%2FsXJYQeQZrlh4UO6t5bQvAiNgoOtst%2FV9whLwya8OssSl4bGvyenuk07ZL4eKhy%2BAQpHWHUUdEHGnrMBGNSu6ETSqKl6aML3MQYpAVu8Z9WSc%2FSKEWRz85I6Ma7zNRHPqcKtH69yjqhLmTQfZei%2F32YngzPMbjVyvfs2Gi13dm3LjX8UBR4qp2v7dBeWVn0Y6GMg2SrgBlhXuy&X-Amz-Signature=fb90c9c07a54df9bd221624af9936f054382ea1634ffe2e4759559be0d216f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZJORUFK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCaaIV%2F4lunn6fvjR6KpuakeTc9Q0mCYJj3QWcZ%2B318sAIhAIxS8Z5swleR6Sda7x36jQws1nUqwIz3jCT1xUoX3mo9KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvSEvB2bNLBS8efyAq3APRBXHUiQ2QZUOnfqEyQFHZb6gJbJJhXeLVl%2BUxJxnFuZY7kVVGheZhnlZn2ZVZBJqo6AEDH8yfZFhbU1T4EsuQyv5Y2eH13bcLwu9k3C%2BglHVWfaESftOlNdSBCA1GJti%2FLQBEqQ1nCwIIwISoAHtmhniPkWHXR572yr5Fwm6hw2Be3Fnu1aDo%2Fq0iphDNrfSj7emmtfyBztjllIFPxWoOVAHd3lCi%2FbpKeIG6UQKb3rmq9ZREHRfPNIgQuQs2FJu%2FMQIx%2FvMKR7FJf0a4wwIqgRXCmm2GJFFMrlYEvKF9H%2BgjaqVfYCHZvwGl6DRVTNq5v30qli%2FjPu9uSUMPkZeUJLHNZ5YAuyxY9MFdhdDwxw%2BKJB54aFmPTE2zyJRU%2BsXWbagfRnXCB82Q1yN5lvVpg2h51DlH%2FswwJ6M0TMqI%2FLNtp3Ii0vr%2FSumbcFj78aLZ06KYPAzyfgNrMhJXQQCowYE98HQpqktUeRmVTk%2Bik368uF6aDm%2B9%2BDxvMaxhFJMTwpYobxdSBPZXIDOkljvytaLevuoIeT79Nxvuwrxi9Z0PTTPXzjWupnpF6PeJwLBMVXBcucR85rG%2BZlfa%2Bx4igY5xwHqk36Ch66R4MudYqnRvgBJMrhLWTzCTjzC5n6DEBjqkAaUzvtyoVJdZV%2F%2FsXJYQeQZrlh4UO6t5bQvAiNgoOtst%2FV9whLwya8OssSl4bGvyenuk07ZL4eKhy%2BAQpHWHUUdEHGnrMBGNSu6ETSqKl6aML3MQYpAVu8Z9WSc%2FSKEWRz85I6Ma7zNRHPqcKtH69yjqhLmTQfZei%2F32YngzPMbjVyvfs2Gi13dm3LjX8UBR4qp2v7dBeWVn0Y6GMg2SrgBlhXuy&X-Amz-Signature=0955b2a5927702bf3ded3ce7e1a6b7119793bce329228e36c4e8a157048e312f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
