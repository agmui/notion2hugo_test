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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627KWOXRB%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdh7RXDrdqbWiVRaMxl7a7KZcM%2FJDkxai4%2F6hggPXwvQIhAN6uU7G19G3qmYyfZwSLH7XH0LwALWuh%2FJ5t9Wcvtit9KogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLTp7ewGZxY0UbFqUq3AOKwJp08zQrJJxNsn6gkX0CSB33z9C93n2b7RSSl%2FepVdFVdFj0%2BhiHSP%2FqUywCu6uxiLSODt7RdLMIx%2FNaTKnuymaPzcGsdkbaGu1xmoVihhl6yAM1e%2BzZE5kDXRhUi3Vm8MN0xnj24%2B9y7%2F5%2F4%2BRT%2FHuOOe4nIyIcmx4AJW1JGKCzQTWFM8jFIbUmUe3Cmr11K8abAMiHJep6XscgcKwiq%2Fj2yFVGPAny9FR5qMmy1x3Ela1KKWBN0kNkZw6Gyv9WGieZQlVepgiK6kRybG6PV4aLvjOOGKjoVpRBiHQFgYtOs3bRqmFiCddJedhTf3QgAHPtBPxEzGxhu2CdBEpgrwrx0ddKxBPlWcJovaNQxlz3QCVQQqPMlCwRs2gRJaHkYRRBLXvSkdInmFt2CY2b8vPeHNAON9jrpsqMhs22fh6anJIoo8mbZVaBmCffHNlSukt8ua4bn4T054DYHpm3yD0dusjTyc0KAOf%2BaHyTeKu77VYiN1zvL1fjfRpBsFRAw8iGsStTt99lp43S8WKFvDHBONL15c4x8CW8mFOYg6rKYT9iclBcydMWdB7sFMB0oyd9MtPUWTWCza5Ix4DKFfmJsntXJNpylf3CiKaXqscHy9wlezElUV6B9jCVvZbDBjqkAYOiQovKNCDwE0igQAgnNKMfLBaONouig%2BELe6SyLOXG3CYTdruscg0Tpvib1b1Jo0RnDWRKe0pa0oYRjP0HLqDoyWWLuSZseb7ZIux3PqpEDdBGTU83ucxr%2BrL56geySCzZi5Mizl6lawBFUcchLenDLVh8YzKnFJoeupc0%2FWOcnoW%2B68PPMjgIqmXL2gM7PX%2BYGZ17Ubf504w7v8fXvrKyfOPc&X-Amz-Signature=ef58d0a086832115032c0af769da63d313ecc2bd44662fa6c363cc4fd7382469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627KWOXRB%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdh7RXDrdqbWiVRaMxl7a7KZcM%2FJDkxai4%2F6hggPXwvQIhAN6uU7G19G3qmYyfZwSLH7XH0LwALWuh%2FJ5t9Wcvtit9KogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLTp7ewGZxY0UbFqUq3AOKwJp08zQrJJxNsn6gkX0CSB33z9C93n2b7RSSl%2FepVdFVdFj0%2BhiHSP%2FqUywCu6uxiLSODt7RdLMIx%2FNaTKnuymaPzcGsdkbaGu1xmoVihhl6yAM1e%2BzZE5kDXRhUi3Vm8MN0xnj24%2B9y7%2F5%2F4%2BRT%2FHuOOe4nIyIcmx4AJW1JGKCzQTWFM8jFIbUmUe3Cmr11K8abAMiHJep6XscgcKwiq%2Fj2yFVGPAny9FR5qMmy1x3Ela1KKWBN0kNkZw6Gyv9WGieZQlVepgiK6kRybG6PV4aLvjOOGKjoVpRBiHQFgYtOs3bRqmFiCddJedhTf3QgAHPtBPxEzGxhu2CdBEpgrwrx0ddKxBPlWcJovaNQxlz3QCVQQqPMlCwRs2gRJaHkYRRBLXvSkdInmFt2CY2b8vPeHNAON9jrpsqMhs22fh6anJIoo8mbZVaBmCffHNlSukt8ua4bn4T054DYHpm3yD0dusjTyc0KAOf%2BaHyTeKu77VYiN1zvL1fjfRpBsFRAw8iGsStTt99lp43S8WKFvDHBONL15c4x8CW8mFOYg6rKYT9iclBcydMWdB7sFMB0oyd9MtPUWTWCza5Ix4DKFfmJsntXJNpylf3CiKaXqscHy9wlezElUV6B9jCVvZbDBjqkAYOiQovKNCDwE0igQAgnNKMfLBaONouig%2BELe6SyLOXG3CYTdruscg0Tpvib1b1Jo0RnDWRKe0pa0oYRjP0HLqDoyWWLuSZseb7ZIux3PqpEDdBGTU83ucxr%2BrL56geySCzZi5Mizl6lawBFUcchLenDLVh8YzKnFJoeupc0%2FWOcnoW%2B68PPMjgIqmXL2gM7PX%2BYGZ17Ubf504w7v8fXvrKyfOPc&X-Amz-Signature=507ce0b2c47f718c852aa1b01e37a25c87e15dbec6c8d09c84babe8b80c688aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
