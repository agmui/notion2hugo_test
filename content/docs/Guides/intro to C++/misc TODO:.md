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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQL3ECP%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICN4pb2cY5uxQBx4gXtGaMfXuuJE53qiX0B4zGH%2BDKIWAiAStZMwV2Y2Y%2Ftill4u33c3mZWEnUi5SiIiMElmMWAQyyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr4gHY5RQCsohs2%2FfKtwDv%2FSvXx6zlPajajyK0qnD93stskjw2%2FKKB5nMnQP7LR%2By9xIpVCg%2Bg26NwbkVNmM%2Bw%2B9iIbssPnGayvouhxoi8YaZxzDcaIUQRuYlTOw4uIZlsQ3kMnne43tFq2TVTUGRThRVIsvYyOd%2FCK%2FTPgPH%2BAQA68nHxoE1vqBb7xyoKAKsT1w5izgb9O5n64qI%2BXtyUex88dW%2FCBiJqLGFpI1I4vY8gYM%2BqhxZdiGvEzMtLT6lMsvfZmjFjpVkU4h6psqgAG5W3BCIejUQvqgt4bAQAx6iq1AYoS%2B1yswoSfcQeIwmbI3rzVn7ny7LhvS%2FRh4q6FtgtJvWLqzWu2mMJmhEMSc1AFgZQWcrKlxjsPOHHDZo4RVEFXCGiIAVGLo6HnxUGiuKmptbzsm6vmezT9pt9Psz3Ac3GzIoJDmUoPWuv%2FXx5T7mo3ezqzFca5N4wsatQGV4qDH9OiaQW%2BfB%2BXX5YCCgALD2mqVHWIz0R6qTdbTSQpJUK7vKdJWbx1aOjjpVIPf74tXf%2B1P3tMHk4mq%2B25GRqRSpoRWU9Hrpnv6afvC3z6Z2uo5W37ykLuZmHZDnELh2nIJlHBgn9OeFeRvne6MAghskCVVccZmTQki%2BIIZXBgKnIxCCH3e6FpwwytvDwAY6pgEHjS9804%2BhEkQiMO6OZqBa8Lvl1MiDfilfSZjeu94bdzvacqoVjL8P0kJyyNJKdj3cCNsEdSRR3PgQ6YyWOm3gAgMKZLN9SaD5JzgHAYm2%2BKUxCTkYUKvdzVjZh3t3LlkirlkZEETVCsaAyFrJiCAvhJsn764pdPuoOf0H37JOAqhZwyJEAhgTF5C1SWls%2BqSPqv%2BFsOtqAQKsmigA4LneyAhHAycx&X-Amz-Signature=e2bf0fd4b22ed9c4100ccfa05cf9fc26b0e2d1993a348077898d58697cb96ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQL3ECP%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICN4pb2cY5uxQBx4gXtGaMfXuuJE53qiX0B4zGH%2BDKIWAiAStZMwV2Y2Y%2Ftill4u33c3mZWEnUi5SiIiMElmMWAQyyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr4gHY5RQCsohs2%2FfKtwDv%2FSvXx6zlPajajyK0qnD93stskjw2%2FKKB5nMnQP7LR%2By9xIpVCg%2Bg26NwbkVNmM%2Bw%2B9iIbssPnGayvouhxoi8YaZxzDcaIUQRuYlTOw4uIZlsQ3kMnne43tFq2TVTUGRThRVIsvYyOd%2FCK%2FTPgPH%2BAQA68nHxoE1vqBb7xyoKAKsT1w5izgb9O5n64qI%2BXtyUex88dW%2FCBiJqLGFpI1I4vY8gYM%2BqhxZdiGvEzMtLT6lMsvfZmjFjpVkU4h6psqgAG5W3BCIejUQvqgt4bAQAx6iq1AYoS%2B1yswoSfcQeIwmbI3rzVn7ny7LhvS%2FRh4q6FtgtJvWLqzWu2mMJmhEMSc1AFgZQWcrKlxjsPOHHDZo4RVEFXCGiIAVGLo6HnxUGiuKmptbzsm6vmezT9pt9Psz3Ac3GzIoJDmUoPWuv%2FXx5T7mo3ezqzFca5N4wsatQGV4qDH9OiaQW%2BfB%2BXX5YCCgALD2mqVHWIz0R6qTdbTSQpJUK7vKdJWbx1aOjjpVIPf74tXf%2B1P3tMHk4mq%2B25GRqRSpoRWU9Hrpnv6afvC3z6Z2uo5W37ykLuZmHZDnELh2nIJlHBgn9OeFeRvne6MAghskCVVccZmTQki%2BIIZXBgKnIxCCH3e6FpwwytvDwAY6pgEHjS9804%2BhEkQiMO6OZqBa8Lvl1MiDfilfSZjeu94bdzvacqoVjL8P0kJyyNJKdj3cCNsEdSRR3PgQ6YyWOm3gAgMKZLN9SaD5JzgHAYm2%2BKUxCTkYUKvdzVjZh3t3LlkirlkZEETVCsaAyFrJiCAvhJsn764pdPuoOf0H37JOAqhZwyJEAhgTF5C1SWls%2BqSPqv%2BFsOtqAQKsmigA4LneyAhHAycx&X-Amz-Signature=3ebb804f7ea5478088a7f378f65f21822758fa5d3a6cf8252b02240ff8886ab8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
