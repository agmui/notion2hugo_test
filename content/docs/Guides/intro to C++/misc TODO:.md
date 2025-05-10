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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4CCUPFZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUpT5tuu%2FPfkRwyvEv0UTQ7Z%2FeCdG1IUprWdFktYXuPAiEA1Nayhy48zfgG29X814A5PezanftwBfjmN3yWtlLyMq8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBz2n1s4IHhJFKTiOSrcAwNBQeqWOkn5nYMKo7z0qm8L1YgmDapx4TJK4HGiMRbS88wgs2aigD5On0GDgFlnl7sdIGXUsNCCulJ3Zvi7BjDBYYznv6nBQg%2FVy4bWPhbUwce%2B6p5N5kZ3EmMfacYZAqt7M4mhjIRX1R9k6Je7kqg9FMHxnYc24nwAxI92%2BSqRJWkAMcvtypoB%2Frg9KNU%2BajP5rQAdIA%2Fe8iPJIIIn1SCPe7UuPhYt1hYlbGqazCBGpFUdI9S1muCYRNLDUjz7LjlaQ4EaKkSbyN%2Fq1bBK%2BrZKyeT4S9Rh%2BNsjh24rmy8s4%2BY9Cv9VeBUF1jeiziUGCWN2GgAxpY0vQc%2BaQos4D5lWYVT3VIm98HM2v%2F4VLuDB6qu3%2BFHGJuuk2y5tx3xS11v3MYqRag3ZRmPmYJW%2B2aRK5NVO1m7wyjE5kNJ79sk%2B34pesOpypF7ZceNQqz6qVFp0RAbTvlRW5Po2OH%2FdZZNyFdIgVRqQYUYNFod%2FEow1dLOvWtN93RfKGUHlMLJajnRfqascUUFtZLtKT0UFmeTGLMLuFWM2mlpaxZw5yTFANbEXIM9JFOoCzY6YUzuhydft6i3MXIWCtr6CHb39oa3Ro%2FdaVM9%2BXqhgiKi9ExbaH%2Fgnejj2zUj5k3tWMJKr%2FcAGOqUBmgnNZTW5e%2FFxYKe%2Fd1d2BpMFP83DBKoEM%2BHF7goObbLsrZNROf%2BWb8FFCT6WoXl9M2hZbLm9t1wexoQvmib8q2ZCgBizlEbOPR%2BEXynFJW8JuC0gKPAR%2B%2FYauHV4pioB0bOliOBpi7jfAYcYqh%2BDKBsPyCPixWaP5tkh7mBLchciQIMa%2Brn9cpXcm6F4bUn4ZwRWGc1oMrtpJytWx6EXRrh42wxM&X-Amz-Signature=c987521667646f916bd82e5d03f59124a72192f04d7eb48ba1f98ace9ca1d351&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4CCUPFZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUpT5tuu%2FPfkRwyvEv0UTQ7Z%2FeCdG1IUprWdFktYXuPAiEA1Nayhy48zfgG29X814A5PezanftwBfjmN3yWtlLyMq8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBz2n1s4IHhJFKTiOSrcAwNBQeqWOkn5nYMKo7z0qm8L1YgmDapx4TJK4HGiMRbS88wgs2aigD5On0GDgFlnl7sdIGXUsNCCulJ3Zvi7BjDBYYznv6nBQg%2FVy4bWPhbUwce%2B6p5N5kZ3EmMfacYZAqt7M4mhjIRX1R9k6Je7kqg9FMHxnYc24nwAxI92%2BSqRJWkAMcvtypoB%2Frg9KNU%2BajP5rQAdIA%2Fe8iPJIIIn1SCPe7UuPhYt1hYlbGqazCBGpFUdI9S1muCYRNLDUjz7LjlaQ4EaKkSbyN%2Fq1bBK%2BrZKyeT4S9Rh%2BNsjh24rmy8s4%2BY9Cv9VeBUF1jeiziUGCWN2GgAxpY0vQc%2BaQos4D5lWYVT3VIm98HM2v%2F4VLuDB6qu3%2BFHGJuuk2y5tx3xS11v3MYqRag3ZRmPmYJW%2B2aRK5NVO1m7wyjE5kNJ79sk%2B34pesOpypF7ZceNQqz6qVFp0RAbTvlRW5Po2OH%2FdZZNyFdIgVRqQYUYNFod%2FEow1dLOvWtN93RfKGUHlMLJajnRfqascUUFtZLtKT0UFmeTGLMLuFWM2mlpaxZw5yTFANbEXIM9JFOoCzY6YUzuhydft6i3MXIWCtr6CHb39oa3Ro%2FdaVM9%2BXqhgiKi9ExbaH%2Fgnejj2zUj5k3tWMJKr%2FcAGOqUBmgnNZTW5e%2FFxYKe%2Fd1d2BpMFP83DBKoEM%2BHF7goObbLsrZNROf%2BWb8FFCT6WoXl9M2hZbLm9t1wexoQvmib8q2ZCgBizlEbOPR%2BEXynFJW8JuC0gKPAR%2B%2FYauHV4pioB0bOliOBpi7jfAYcYqh%2BDKBsPyCPixWaP5tkh7mBLchciQIMa%2Brn9cpXcm6F4bUn4ZwRWGc1oMrtpJytWx6EXRrh42wxM&X-Amz-Signature=61009ab51a37a03ffd5febcbc42b37fd2a8cd139574cb4f87eef69089e63aaf9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
