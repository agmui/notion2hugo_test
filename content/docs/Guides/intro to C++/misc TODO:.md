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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4M5JKF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbV5t8F8qLNkuC9IdrIIQK9a5m4q6xk7Gdb2o4bk6JTwIhAITLU7fjLnHWvuzmHQ%2BvkuLckCAXasgE2bKDavkMppV0KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz35IytpagAVgNhNcQq3ANjlpFz3cj%2FvcihqObpKbdufUCCcS8zSnuNRRSBAFgdi%2Fels2EzuZuqSHxEGqaR5T7C0Vg%2FEyT4rmwmOBovonmVGYoGwjT3ngz%2BtRDdW9BI%2BZJIz6o7yqB4knv3ZdulORQyRL%2FOnqdAsnEILniuv6sZuvlWXgvi9ZdGNlBNZjzy85LKK%2FPmVYVWAjGVbUFcOYcU7r9ORLb%2FceYV90zT3JnHnxm2abr%2FbaCdZqPxuJujaaqBUkqa86z%2FlwRXu567YuhpZpdDtNYbDU%2Fb2ToFHUJr%2BRdSvWv5d8VZh9nlXXEI9ogzn3Jtz1qPa47jJafat8J99imIMS0jV%2Fms2gRAQUM7PTxM46GPjgEcRrzbO%2FhB85Qog%2BHFWudt94OC3dAtLm3%2BNUxcSqEppJtim5HXtVTWaQwmWQVMiU7sjqZvppojMTXjFO%2Fm7Qo6Dm887b5KeXJ%2BNEpQYZiF8KBpn2vKBL24YDcQy3%2FnX0VPeTXMaCapbaFEP08TLMcZPyhA%2FMKh3FPpNpdIeAC9kh3HXkZ9l%2BOJJFmeuwNbqwoM8UuLzECGseEpjdELZN9qtDAVN4bzxnua1pIPoxRNOjU7fZSg54fnCqYj78TB5%2Bt%2Bl1o1zfqZKL0ushdGGZPPTpGk6DDmtdHCBjqkAf%2Fc9US%2Be0p74SxZas9%2BSu9xo5ATCLXdqrDJbA1IlNFU8tIn7NBPxKFzHlNRp2HkVnOfjbkL%2BLedT2%2Ff5O33BuQ9J9yIh9W%2FNdhAiWS9BTbdGkx0JivA49K8leEQs57UH1LwAoLKOQN8zaWTtkGR5WSe39pm5mnPT%2B7Xh89PMNT92uO9Xi9LtXDNRqHCGZoJP84fQt0kGSSmyixQKU27xssiwtn0&X-Amz-Signature=666a462895363e15e0ecb75e891c30543f17644c07c133585033b2457a24d035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4M5JKF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbV5t8F8qLNkuC9IdrIIQK9a5m4q6xk7Gdb2o4bk6JTwIhAITLU7fjLnHWvuzmHQ%2BvkuLckCAXasgE2bKDavkMppV0KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz35IytpagAVgNhNcQq3ANjlpFz3cj%2FvcihqObpKbdufUCCcS8zSnuNRRSBAFgdi%2Fels2EzuZuqSHxEGqaR5T7C0Vg%2FEyT4rmwmOBovonmVGYoGwjT3ngz%2BtRDdW9BI%2BZJIz6o7yqB4knv3ZdulORQyRL%2FOnqdAsnEILniuv6sZuvlWXgvi9ZdGNlBNZjzy85LKK%2FPmVYVWAjGVbUFcOYcU7r9ORLb%2FceYV90zT3JnHnxm2abr%2FbaCdZqPxuJujaaqBUkqa86z%2FlwRXu567YuhpZpdDtNYbDU%2Fb2ToFHUJr%2BRdSvWv5d8VZh9nlXXEI9ogzn3Jtz1qPa47jJafat8J99imIMS0jV%2Fms2gRAQUM7PTxM46GPjgEcRrzbO%2FhB85Qog%2BHFWudt94OC3dAtLm3%2BNUxcSqEppJtim5HXtVTWaQwmWQVMiU7sjqZvppojMTXjFO%2Fm7Qo6Dm887b5KeXJ%2BNEpQYZiF8KBpn2vKBL24YDcQy3%2FnX0VPeTXMaCapbaFEP08TLMcZPyhA%2FMKh3FPpNpdIeAC9kh3HXkZ9l%2BOJJFmeuwNbqwoM8UuLzECGseEpjdELZN9qtDAVN4bzxnua1pIPoxRNOjU7fZSg54fnCqYj78TB5%2Bt%2Bl1o1zfqZKL0ushdGGZPPTpGk6DDmtdHCBjqkAf%2Fc9US%2Be0p74SxZas9%2BSu9xo5ATCLXdqrDJbA1IlNFU8tIn7NBPxKFzHlNRp2HkVnOfjbkL%2BLedT2%2Ff5O33BuQ9J9yIh9W%2FNdhAiWS9BTbdGkx0JivA49K8leEQs57UH1LwAoLKOQN8zaWTtkGR5WSe39pm5mnPT%2B7Xh89PMNT92uO9Xi9LtXDNRqHCGZoJP84fQt0kGSSmyixQKU27xssiwtn0&X-Amz-Signature=487b1a04d4922ecb788f96b45a7ed5f68e2aa578ce96c06113f408b9e0a621a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
