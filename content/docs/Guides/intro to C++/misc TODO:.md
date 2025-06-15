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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GH67PWB%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIBtAn1kpMT8%2BDAu0L47114RYl7UqBopsE6Vu5KKUnOGVAiBaCW3CDkcClGJa5Iff6vtgrvMFQgt4ROHvycQC2E2pySr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM%2BKQVN%2BzFPqEpmlzmKtwDOF6nLM9sHDwgDcezOHPLUc4ZyW%2BI2Qikhmz1iyKMuRWdQ1GuoeUbMFNkh9JnW0GUnPSSJ9OqZYWA2C0nIaeFbeXL3%2FDBgBmOSRwn7q3IKUQRfMku3R6C%2FvN%2FXxhqRRd6Sr%2B4AhffkjWuDCrtBInqq4gGFS3wLM%2BIJnCvYvQEPTFiiJlccP%2FgXhqGhQjEXg4uxRkYlsApaeTkFK0eAHXTLOUVjKXe1P2VGbkHy0Rase92ShD9a54N2PiBpYgHq2gbaHau9CipWPFUCgas1UUxt0M36GwGb1M7oCWoJMTt4mxXI5Z8CoKvixyVwY6QgNS%2Fjv1z4bXg6SMy9QuxsJxKHjiJwj8nRFtBkVZoX3i8JbseKBRy%2F3NYwp94N4v9Jm%2F%2Fr4FeTZKejO1MfGe3CdNkeu632kPgnS9X7qCwVwXdDfW84sOuTGdYwWNVhRPy0GvsRqJUAihKyXqtROa5oVaogsDRBb9z%2B28fpONy%2Fe%2Bz0cO3Z7%2B5eLTYNii0PTxCPaUpyIRA%2FjxcN1evrjo%2Bw73un3xYEhHAnb7Hy4W98CoqW7MjBjz%2BOVAdXAUBrCFkh6VL9N8cIzJCuZFawkfBZX7JIsE360OH4ZZ4a100BXmS0nZOUJope6P4EZlnm3QwzKe8wgY6pgH8rj4iQjeXXje56UHzP%2F3K3xWbvclWERUw25Wf6J%2BbmazaDEnOILSzMqx0CCOTb%2FJdPcKnZ9EKT94ng%2ForT7HJNxZP75o5vDCjK3Or0SjnZj6jGxvJsIKrPXQTqHVh7FAmX0bxYhBXND8BNT%2Fa43IOGOo%2BZNBDwK5y68W7XD9vT8d5QLVqjVzd3H66ofCS84k5V%2FNtPnU2EToR5zPgBRmfmAATIUxs&X-Amz-Signature=d21ea29ca04b96deefe94f27ad1951ed3e9c978bf7fd5e9e6eb7c0f96802f312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GH67PWB%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIBtAn1kpMT8%2BDAu0L47114RYl7UqBopsE6Vu5KKUnOGVAiBaCW3CDkcClGJa5Iff6vtgrvMFQgt4ROHvycQC2E2pySr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM%2BKQVN%2BzFPqEpmlzmKtwDOF6nLM9sHDwgDcezOHPLUc4ZyW%2BI2Qikhmz1iyKMuRWdQ1GuoeUbMFNkh9JnW0GUnPSSJ9OqZYWA2C0nIaeFbeXL3%2FDBgBmOSRwn7q3IKUQRfMku3R6C%2FvN%2FXxhqRRd6Sr%2B4AhffkjWuDCrtBInqq4gGFS3wLM%2BIJnCvYvQEPTFiiJlccP%2FgXhqGhQjEXg4uxRkYlsApaeTkFK0eAHXTLOUVjKXe1P2VGbkHy0Rase92ShD9a54N2PiBpYgHq2gbaHau9CipWPFUCgas1UUxt0M36GwGb1M7oCWoJMTt4mxXI5Z8CoKvixyVwY6QgNS%2Fjv1z4bXg6SMy9QuxsJxKHjiJwj8nRFtBkVZoX3i8JbseKBRy%2F3NYwp94N4v9Jm%2F%2Fr4FeTZKejO1MfGe3CdNkeu632kPgnS9X7qCwVwXdDfW84sOuTGdYwWNVhRPy0GvsRqJUAihKyXqtROa5oVaogsDRBb9z%2B28fpONy%2Fe%2Bz0cO3Z7%2B5eLTYNii0PTxCPaUpyIRA%2FjxcN1evrjo%2Bw73un3xYEhHAnb7Hy4W98CoqW7MjBjz%2BOVAdXAUBrCFkh6VL9N8cIzJCuZFawkfBZX7JIsE360OH4ZZ4a100BXmS0nZOUJope6P4EZlnm3QwzKe8wgY6pgH8rj4iQjeXXje56UHzP%2F3K3xWbvclWERUw25Wf6J%2BbmazaDEnOILSzMqx0CCOTb%2FJdPcKnZ9EKT94ng%2ForT7HJNxZP75o5vDCjK3Or0SjnZj6jGxvJsIKrPXQTqHVh7FAmX0bxYhBXND8BNT%2Fa43IOGOo%2BZNBDwK5y68W7XD9vT8d5QLVqjVzd3H66ofCS84k5V%2FNtPnU2EToR5zPgBRmfmAATIUxs&X-Amz-Signature=d58ccdb5d1e7fac466b26c78c09e695977daf2858536d9016b278d046c89a281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
