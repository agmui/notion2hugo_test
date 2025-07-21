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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OJBN42M%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFKtqwh7pHg7VUG18lJ4sAXylcv5vmwnRTO0FKC9RiNAiAnoz67KV7LHHMpyFhtOUBTwErJFEcB9BkVikuEgK4KWyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSYveDRfYZDp8sUfxKtwDphiXnGl6szL3aTCOUnTw62UUVb5ZomniMWeQslavgAWNjPtY1sPFvOZqMNF7FgYNt1wEl7wa8%2FlSLW8r%2FaanP9NxNTEqAK3kIWjxzqmbxo5JZj3u24tZQHvhbZ%2BqUEQl2YHxKPKHt1auqQgpQ4MIIkm2wPzQmXWIETSlRpY%2BxBKd57lhBLBZKW5FsTJLzi8K9OZs4lhWGOEYVwDIu4SgjvnbCDgtWl8rQNHYzkOpoW%2FJfctObXu6f7kPayIGZ1CtFxRin5NvoY2E3IR81N%2BZH178I7w28qLA0CvEf85R5OP9sBr7mttzrilkZniS%2BvyRW4zQ2oa3BKtykYgRptINZ94IFFvbn8rcxAAaoO2jEijDJszAC5jdWYA%2FgdDehr0O5KflXwQnKjEmMlS427HyPY1fMphgFmgrjtdJ%2FZiUFFHYINOYSMcE%2B4SMS7wYsORSE6ogF4CWHZvISlom8Vn%2FinJ7TnWOjjlujBDln3FmSlO6Leb2xoI5PFVwJctVlhhHscGXA6haom%2Blz60X6%2FgPdyqCY7hqsn9vjXwjJanDo6Y3H6DeB2rj5nsyW6SYjamlzpoeU3Qd%2FcGpf%2FU3%2BaUQYJYWhpEmGSJlYqG3IYitbg%2BU%2BBMzWP7UKOEic2kwsvn0wwY6pgG6yMLxCm7PKwtW%2F6q%2Fn%2BUpaXFWOGV%2BNLeyMu0yCwPC55CsEcf9WAhCx1lGagZo3hPHuGv5h4dOmKzC8U9rTB2W5eBfbmgDDBkN9Va9yfLB9rAEQUbZ1tAtwhG8uMbNac10qqmq5ooN3gO0LI2QNjfqo9mM5U%2Bppm5aAsTrEPw5i%2Br5w0RcD2lMkFVyaBl9R5wdx1RVC57GRq%2BOKnGt1N2CrjXrMC3m&X-Amz-Signature=7216d287995e9dbc416931bdbfb4b538051efbf667074127e4f8103f854ce810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OJBN42M%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFKtqwh7pHg7VUG18lJ4sAXylcv5vmwnRTO0FKC9RiNAiAnoz67KV7LHHMpyFhtOUBTwErJFEcB9BkVikuEgK4KWyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSYveDRfYZDp8sUfxKtwDphiXnGl6szL3aTCOUnTw62UUVb5ZomniMWeQslavgAWNjPtY1sPFvOZqMNF7FgYNt1wEl7wa8%2FlSLW8r%2FaanP9NxNTEqAK3kIWjxzqmbxo5JZj3u24tZQHvhbZ%2BqUEQl2YHxKPKHt1auqQgpQ4MIIkm2wPzQmXWIETSlRpY%2BxBKd57lhBLBZKW5FsTJLzi8K9OZs4lhWGOEYVwDIu4SgjvnbCDgtWl8rQNHYzkOpoW%2FJfctObXu6f7kPayIGZ1CtFxRin5NvoY2E3IR81N%2BZH178I7w28qLA0CvEf85R5OP9sBr7mttzrilkZniS%2BvyRW4zQ2oa3BKtykYgRptINZ94IFFvbn8rcxAAaoO2jEijDJszAC5jdWYA%2FgdDehr0O5KflXwQnKjEmMlS427HyPY1fMphgFmgrjtdJ%2FZiUFFHYINOYSMcE%2B4SMS7wYsORSE6ogF4CWHZvISlom8Vn%2FinJ7TnWOjjlujBDln3FmSlO6Leb2xoI5PFVwJctVlhhHscGXA6haom%2Blz60X6%2FgPdyqCY7hqsn9vjXwjJanDo6Y3H6DeB2rj5nsyW6SYjamlzpoeU3Qd%2FcGpf%2FU3%2BaUQYJYWhpEmGSJlYqG3IYitbg%2BU%2BBMzWP7UKOEic2kwsvn0wwY6pgG6yMLxCm7PKwtW%2F6q%2Fn%2BUpaXFWOGV%2BNLeyMu0yCwPC55CsEcf9WAhCx1lGagZo3hPHuGv5h4dOmKzC8U9rTB2W5eBfbmgDDBkN9Va9yfLB9rAEQUbZ1tAtwhG8uMbNac10qqmq5ooN3gO0LI2QNjfqo9mM5U%2Bppm5aAsTrEPw5i%2Br5w0RcD2lMkFVyaBl9R5wdx1RVC57GRq%2BOKnGt1N2CrjXrMC3m&X-Amz-Signature=1ba5ca0836ff41c63d393e58d5edec360cda8a3035264358260a97c84510242e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
