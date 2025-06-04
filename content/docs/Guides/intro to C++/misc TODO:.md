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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGI3S3LH%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCk6bZL5JMx%2BLgs%2B7zqMEaJY3y3ZyBo8yMXE2MzBGUQ5QIhALi2KYpmm0Mgrs55Z82DeSILAg2F1H5I9xV%2BoUJe7tbAKv8DCC4QABoMNjM3NDIzMTgzODA1IgyRWkR3oD2DBv3%2B8tQq3APstQM7YeKFunI32T8JzdILsejgps9JzVUOaMP%2BoFQcWwOXUQ9PVrtxd99ET8brqaLeE7Q85414%2FJdr88hUAivZGbzt3SHVzw8PJ7NxfU%2BKmWTabKY7826iMV4H%2B87zMTp4GA4T%2Bf0ApWL8FJykk9stDb4XXMsrjk6DK4D6Z1TKZ8rj2J5wG8l1KpzVsnrt1uFAvCNbsF5Qw%2FVciilNz3jK2Z1Hmqex21Pu8PTgLHkfYHQ5qx3iyuf54iVDPfrq%2FYcHjTLdbkszT2S9ryMQa%2Badv9CEafrS3LjUyTIODa02fuGkd7Hfy9kfmrgaZXosGge1zi4FGrsGT3bfcF8PDXWjUNSQqd8Ww8dID4K2yYaLBVFM8xJuFDGs9HqX1gMOVyp4YXdPqUq2FCqMhvhgUWviZ6i7bf2WlwNVQRe6D11rJ7NORtueimqtOgfSp2PB5mm5aSQuPjxGVTBruTsE34CyBsyHyIN5r4oPZZ6wHRdwsb3UGjhbqJMGG%2Fib3faw%2Fslx8B05Gn%2BAADBBqbCluKpEg5bJkV07DbccdWqczt1rpkIbe9OPVZjVYgSmhMyR7cW9hwxfjRjNLmiBA%2FFqgE6vgACHnIi1Xj8GFZVgYqyS7S%2FaDjMDjwA56MqSWjDIgIHCBjqkAZZcc7GdlCy8jsRhWjmv5%2B67t6%2F1uPWF2ylDePmtm8hqz2ZI6N4mUSbv%2FnS7w7OinlVrY9xs6RONWCDoWiw8LMJg5ImT2VJd1szq7VVGlpmWRm1aDOK66M%2F4evodbkMyszgZkyMQYjx5ncZuc%2F54zzgL1F1fIGLetjsMFA2mCV%2B6cxhDmrBsviS1pQmgEcca574qc9oU81elMK8ZT50COfTx%2FkNV&X-Amz-Signature=3c6b74c3ae9d93af6982819b63e65079eb66136a7a62c8c5887d3fac520de568&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGI3S3LH%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCk6bZL5JMx%2BLgs%2B7zqMEaJY3y3ZyBo8yMXE2MzBGUQ5QIhALi2KYpmm0Mgrs55Z82DeSILAg2F1H5I9xV%2BoUJe7tbAKv8DCC4QABoMNjM3NDIzMTgzODA1IgyRWkR3oD2DBv3%2B8tQq3APstQM7YeKFunI32T8JzdILsejgps9JzVUOaMP%2BoFQcWwOXUQ9PVrtxd99ET8brqaLeE7Q85414%2FJdr88hUAivZGbzt3SHVzw8PJ7NxfU%2BKmWTabKY7826iMV4H%2B87zMTp4GA4T%2Bf0ApWL8FJykk9stDb4XXMsrjk6DK4D6Z1TKZ8rj2J5wG8l1KpzVsnrt1uFAvCNbsF5Qw%2FVciilNz3jK2Z1Hmqex21Pu8PTgLHkfYHQ5qx3iyuf54iVDPfrq%2FYcHjTLdbkszT2S9ryMQa%2Badv9CEafrS3LjUyTIODa02fuGkd7Hfy9kfmrgaZXosGge1zi4FGrsGT3bfcF8PDXWjUNSQqd8Ww8dID4K2yYaLBVFM8xJuFDGs9HqX1gMOVyp4YXdPqUq2FCqMhvhgUWviZ6i7bf2WlwNVQRe6D11rJ7NORtueimqtOgfSp2PB5mm5aSQuPjxGVTBruTsE34CyBsyHyIN5r4oPZZ6wHRdwsb3UGjhbqJMGG%2Fib3faw%2Fslx8B05Gn%2BAADBBqbCluKpEg5bJkV07DbccdWqczt1rpkIbe9OPVZjVYgSmhMyR7cW9hwxfjRjNLmiBA%2FFqgE6vgACHnIi1Xj8GFZVgYqyS7S%2FaDjMDjwA56MqSWjDIgIHCBjqkAZZcc7GdlCy8jsRhWjmv5%2B67t6%2F1uPWF2ylDePmtm8hqz2ZI6N4mUSbv%2FnS7w7OinlVrY9xs6RONWCDoWiw8LMJg5ImT2VJd1szq7VVGlpmWRm1aDOK66M%2F4evodbkMyszgZkyMQYjx5ncZuc%2F54zzgL1F1fIGLetjsMFA2mCV%2B6cxhDmrBsviS1pQmgEcca574qc9oU81elMK8ZT50COfTx%2FkNV&X-Amz-Signature=1becb7ac72b6745a3c8e87fc2ed977b3c42164c53ea2d40df0895aafb690069b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
