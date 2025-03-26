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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637DPGZJH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCANWYHvbGucMduPodgBotJppHty%2BAbV6jRmAXN3EF7WwIhALfXPLBwJY%2Bo%2Fry5%2FcU01xkjgyo%2FtVojNrF097OlQCsUKv8DCDYQABoMNjM3NDIzMTgzODA1IgzcqLt%2BlqJdHcuV7gUq3APjgQbF0VS793GJM6XcpircOZv38EyT2bV4MdK%2BIAE%2FjLwbIlDS2vIvfewcxn3c2whRLo80Y%2Fd7PirKYFNNeJzellWwH92avAL%2FKOD2AuqgYHBA9mq47ZXXb%2FOUBl88ksORMonBXX6Ivi2G%2FJzifCQNeq29Rved4RaaJgaJJFtoOVN2EU7H6cBYSVn7su3NAByfQQW4oF5l7BEOZXsuELHugchJop58iallAaGAeG3r9vT%2BXcFQNUIHrhAAfpi9mKEBFptAtYekCCcaSbvSFn5vW%2F7lURtlpNnLUoCkD0hkUm%2Bdz0tsANW1K7PXITi48GAlg3zBSamvOCMcYmaezLSKJf12yTJTfnxS3JzHKIvhxP4OzbZZEqsC%2BL5QYRBa7Yf5XdHKP98f9PS2GbJIDTT8oip10dlCHCdFd%2B2FBuLt4A9HsXMoBkmlqGsQEhXbBFZtUTOj0T873LX4j2QEBqNH0ao5c%2BkXXzyDYbpefVvPIIBHyMN7mBQYWgSIXniclxzZ7EJ9hSfaOWOiFc4XbgqTXAVzhttaZ1DsgDuc7VTzLF%2BIQ9D%2BTUJJvRB5v5RMaclPWfaIDqIHrIfEhVM0xXSL8lqUn2B1kltfNo5q3IznFLCeoR4qsZWMwMK4YDDZ05G%2FBjqkAaH8ewM%2F84LwxVVtYivZkGP8KM0YPOT42ZKyI1%2BNg2TGlTAjJ8ASWMSaETKUn1iixfpWjwy%2BqfD%2F2LBGRqfUwJHCZDII4Yv4pNPZHSgbh0hBDPnNqSdI%2FJnDLVFtGNDX%2FHcmHqfPbFgmd9Wuhzd4gjfludrOaiuruj7h0xyIHeOTJOBS8kHoJuMxq19Xe1gPxc4%2FeNQ%2BWOE38hKEjTKDyH2lZJTF&X-Amz-Signature=0a5c5fbf635dffb38ca4a15f83bd1b3343fecdb43ca467386070822dfb222ccd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637DPGZJH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCANWYHvbGucMduPodgBotJppHty%2BAbV6jRmAXN3EF7WwIhALfXPLBwJY%2Bo%2Fry5%2FcU01xkjgyo%2FtVojNrF097OlQCsUKv8DCDYQABoMNjM3NDIzMTgzODA1IgzcqLt%2BlqJdHcuV7gUq3APjgQbF0VS793GJM6XcpircOZv38EyT2bV4MdK%2BIAE%2FjLwbIlDS2vIvfewcxn3c2whRLo80Y%2Fd7PirKYFNNeJzellWwH92avAL%2FKOD2AuqgYHBA9mq47ZXXb%2FOUBl88ksORMonBXX6Ivi2G%2FJzifCQNeq29Rved4RaaJgaJJFtoOVN2EU7H6cBYSVn7su3NAByfQQW4oF5l7BEOZXsuELHugchJop58iallAaGAeG3r9vT%2BXcFQNUIHrhAAfpi9mKEBFptAtYekCCcaSbvSFn5vW%2F7lURtlpNnLUoCkD0hkUm%2Bdz0tsANW1K7PXITi48GAlg3zBSamvOCMcYmaezLSKJf12yTJTfnxS3JzHKIvhxP4OzbZZEqsC%2BL5QYRBa7Yf5XdHKP98f9PS2GbJIDTT8oip10dlCHCdFd%2B2FBuLt4A9HsXMoBkmlqGsQEhXbBFZtUTOj0T873LX4j2QEBqNH0ao5c%2BkXXzyDYbpefVvPIIBHyMN7mBQYWgSIXniclxzZ7EJ9hSfaOWOiFc4XbgqTXAVzhttaZ1DsgDuc7VTzLF%2BIQ9D%2BTUJJvRB5v5RMaclPWfaIDqIHrIfEhVM0xXSL8lqUn2B1kltfNo5q3IznFLCeoR4qsZWMwMK4YDDZ05G%2FBjqkAaH8ewM%2F84LwxVVtYivZkGP8KM0YPOT42ZKyI1%2BNg2TGlTAjJ8ASWMSaETKUn1iixfpWjwy%2BqfD%2F2LBGRqfUwJHCZDII4Yv4pNPZHSgbh0hBDPnNqSdI%2FJnDLVFtGNDX%2FHcmHqfPbFgmd9Wuhzd4gjfludrOaiuruj7h0xyIHeOTJOBS8kHoJuMxq19Xe1gPxc4%2FeNQ%2BWOE38hKEjTKDyH2lZJTF&X-Amz-Signature=6db008205395da30dd88d6e6c82684d6fed415cbff98aa3c425ed0e975a3321d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
