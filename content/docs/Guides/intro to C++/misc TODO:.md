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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHGQKJXL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCgohMGqTa1Be%2Bv5NRRqNVwP%2FeDQaEEiz7bW29WDXF3JQIgSIONoSbzMkxFTxFzG2LQblFDt%2FMUQDg0L1PR329hv8Qq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDLWULZHJ%2FTPwD6KH6ircA0bVsA1vlVtFuRZRFRExoc6n%2Fhr%2FYQO9GSSITlwEEVa1veRHe4z8n5iRJABBjrG29Akxmq1jETrgGrkG4J01zEl%2FsPyvChX9t0%2B3Xu2TxVMVchbzDwr%2BllqAC%2BpiX4hg9ajWfjG6e585lhy4PXz23sPKkQeB47BQ7k8fRxf5fK977SFqn7MUCSW%2BR6UrmWpdoryJ93cXoMo75i7nXQ0Zn6g5ozdFtqwXvVbeDvqDyr2WepwyQ5vvwTBdNIH7Cet367%2B%2FzcHUXdwdj3JLIx7%2BLcCOC1MRWD%2FQonWPZDDG0WlXlDNdDChIwPEhsMAn0ygYE4kxefeL2lpf6YN5esPyHJmm31p6gEm1YmtwMP4mCGj%2FrXKXZrsOXaMooVpF4kFpKdRWOWxZn%2BzAFtPlw5Sqy2M%2BkKjRD%2BYWm5PcQlk0eCFZGKMa%2BQ1KXFr0ZRBwApxAK%2F8Oia3c5qxzxQxLTX5qS5FtNkNLjTw41TR6VgoY6KXqOfwmUcjMzA42j6%2BnASs6tWwp6YirgOP0C9XyXLVESRZMGCXpLQJG98noVZt2hVWq2qeB4HLp4%2BWQRYgko2Ju5KKAf%2FofjL9wf6noqYONnMq7TpcLIOIoej9%2BUONSilLXCUD1p2uHkCA%2F4MGsMJze8sIGOqUBMHdlXot24QVkFziD3OrKKDJQ6%2BsSFdZ480jVrBfl3xMJCTHlYceu0G%2BFS6nXyrsWVprk8uZ8nn8YMuYJekjapn1ksAAhCVeqqooJg5Scv%2B6i5fIGqvU7Pmx0mYz9a8NM2GySv0Ghb%2BjTAqA9ir2LK0gwM4hJuJUTaVEc17%2BA1JlZyGqPOk5WBfdPjX1t%2BQ6ivLRmYEKAEVvFyCysdbfJvWgwk8Dg&X-Amz-Signature=bdf282b28ae3cb956915d181ad856511d855714bb7a766de08ab1e0ccaa85f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHGQKJXL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCgohMGqTa1Be%2Bv5NRRqNVwP%2FeDQaEEiz7bW29WDXF3JQIgSIONoSbzMkxFTxFzG2LQblFDt%2FMUQDg0L1PR329hv8Qq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDLWULZHJ%2FTPwD6KH6ircA0bVsA1vlVtFuRZRFRExoc6n%2Fhr%2FYQO9GSSITlwEEVa1veRHe4z8n5iRJABBjrG29Akxmq1jETrgGrkG4J01zEl%2FsPyvChX9t0%2B3Xu2TxVMVchbzDwr%2BllqAC%2BpiX4hg9ajWfjG6e585lhy4PXz23sPKkQeB47BQ7k8fRxf5fK977SFqn7MUCSW%2BR6UrmWpdoryJ93cXoMo75i7nXQ0Zn6g5ozdFtqwXvVbeDvqDyr2WepwyQ5vvwTBdNIH7Cet367%2B%2FzcHUXdwdj3JLIx7%2BLcCOC1MRWD%2FQonWPZDDG0WlXlDNdDChIwPEhsMAn0ygYE4kxefeL2lpf6YN5esPyHJmm31p6gEm1YmtwMP4mCGj%2FrXKXZrsOXaMooVpF4kFpKdRWOWxZn%2BzAFtPlw5Sqy2M%2BkKjRD%2BYWm5PcQlk0eCFZGKMa%2BQ1KXFr0ZRBwApxAK%2F8Oia3c5qxzxQxLTX5qS5FtNkNLjTw41TR6VgoY6KXqOfwmUcjMzA42j6%2BnASs6tWwp6YirgOP0C9XyXLVESRZMGCXpLQJG98noVZt2hVWq2qeB4HLp4%2BWQRYgko2Ju5KKAf%2FofjL9wf6noqYONnMq7TpcLIOIoej9%2BUONSilLXCUD1p2uHkCA%2F4MGsMJze8sIGOqUBMHdlXot24QVkFziD3OrKKDJQ6%2BsSFdZ480jVrBfl3xMJCTHlYceu0G%2BFS6nXyrsWVprk8uZ8nn8YMuYJekjapn1ksAAhCVeqqooJg5Scv%2B6i5fIGqvU7Pmx0mYz9a8NM2GySv0Ghb%2BjTAqA9ir2LK0gwM4hJuJUTaVEc17%2BA1JlZyGqPOk5WBfdPjX1t%2BQ6ivLRmYEKAEVvFyCysdbfJvWgwk8Dg&X-Amz-Signature=5b31318a40a1a117a7ce987b27baaf837bd889c9d008d8cf90f118d55c2afa9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
