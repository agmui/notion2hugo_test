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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCOPH4WV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCj1xPGeoclocGFwhG1Ihj3V0ImEsnNMYLIEmF5ePm7XAIhAJtVWIXclu97Kl%2BlmwK4OfErQBdRiao1tXHRVDB%2Blxo5Kv8DCDMQABoMNjM3NDIzMTgzODA1IgzzDcjmknE8TwWQVnIq3AMgIXxxnciNfLb4ODLsDnu%2BSB0gN11FS8d%2F5QSMsTLaP%2BfTQScpkRLX2m2jw1xkHmlshyrL1ZTaQ0%2B6f%2FAf2fknB%2F5GCo%2B4qD2DQz47XkNu6StMUHVy4ZMSGp7drsoZSKiu5SRrInUIBnwMkCpKKgHUxmUtmkuGdwpw5cazq0cPygwwSVANqxRUmaLDQS9wWdXZkj48GWO9%2BzrPCUqYRCC5fTA%2F%2FK06KW40XCmDP8TcvoGIUIfn7vd%2BGMaqieen34jBC5leFjTZYie5O8Ap7rJh22xjPZBif9P%2Bn4akS423YysfPmBEpmJ1XfmEu6j7%2F1wRwPrI3qMCMyO5%2BDrWOUaBoNSz6QePCfu4eIbdvasnyWR4ptyIQBAMx6fiPuSOdqAW3ZVDWEG%2BLfe94K3C6u1Ei9FBWhuw4RtECZM%2BvAe81mJeanZAn0hRT7FcnJ4P82e2BG5cYcSCsZmJcTnGETKMhm2GSf%2F2L2b3SgGw0f2nvE3QimXxeG06VYHAUEJz38zgrKsGU%2BIjnaX7iz1Cj%2Fal8qH3%2FarSu7Gkmvl8hSg4BqvXBbBDhhWVrqVKgMIrprirJ6UuDTkYls7BESYxCDjPpzAHLecQXxqfvliOL%2B76npsmSg%2B9gXvgNoBVfDDy%2BrbCBjqkAcb2GpOq7YhAH6Hho%2FQRYF71uxSTC6Q8UWJ4n%2FTa2t3Fbf7bK%2FUbiRZ3Lmsr%2FSrxCR6LXOy1sacXbO2CRR3GRG6M3FPxJ3DAKUKZfJcNxfVRaJdXyTdw%2F6Sg9uk2%2FaZrpSujgYHfsP9nq7TfDOSE73%2BBvefcf0OIEriNRa2%2F%2FR3lo1Q4LvTsREA30PqTX7FMF0IfdKmiIZmAn8jfgUE6vX%2BCAkCK&X-Amz-Signature=5ab92d0f846820c0e98d0ef7919cea7de87e325e3806508fb33566baa708849b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCOPH4WV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCj1xPGeoclocGFwhG1Ihj3V0ImEsnNMYLIEmF5ePm7XAIhAJtVWIXclu97Kl%2BlmwK4OfErQBdRiao1tXHRVDB%2Blxo5Kv8DCDMQABoMNjM3NDIzMTgzODA1IgzzDcjmknE8TwWQVnIq3AMgIXxxnciNfLb4ODLsDnu%2BSB0gN11FS8d%2F5QSMsTLaP%2BfTQScpkRLX2m2jw1xkHmlshyrL1ZTaQ0%2B6f%2FAf2fknB%2F5GCo%2B4qD2DQz47XkNu6StMUHVy4ZMSGp7drsoZSKiu5SRrInUIBnwMkCpKKgHUxmUtmkuGdwpw5cazq0cPygwwSVANqxRUmaLDQS9wWdXZkj48GWO9%2BzrPCUqYRCC5fTA%2F%2FK06KW40XCmDP8TcvoGIUIfn7vd%2BGMaqieen34jBC5leFjTZYie5O8Ap7rJh22xjPZBif9P%2Bn4akS423YysfPmBEpmJ1XfmEu6j7%2F1wRwPrI3qMCMyO5%2BDrWOUaBoNSz6QePCfu4eIbdvasnyWR4ptyIQBAMx6fiPuSOdqAW3ZVDWEG%2BLfe94K3C6u1Ei9FBWhuw4RtECZM%2BvAe81mJeanZAn0hRT7FcnJ4P82e2BG5cYcSCsZmJcTnGETKMhm2GSf%2F2L2b3SgGw0f2nvE3QimXxeG06VYHAUEJz38zgrKsGU%2BIjnaX7iz1Cj%2Fal8qH3%2FarSu7Gkmvl8hSg4BqvXBbBDhhWVrqVKgMIrprirJ6UuDTkYls7BESYxCDjPpzAHLecQXxqfvliOL%2B76npsmSg%2B9gXvgNoBVfDDy%2BrbCBjqkAcb2GpOq7YhAH6Hho%2FQRYF71uxSTC6Q8UWJ4n%2FTa2t3Fbf7bK%2FUbiRZ3Lmsr%2FSrxCR6LXOy1sacXbO2CRR3GRG6M3FPxJ3DAKUKZfJcNxfVRaJdXyTdw%2F6Sg9uk2%2FaZrpSujgYHfsP9nq7TfDOSE73%2BBvefcf0OIEriNRa2%2F%2FR3lo1Q4LvTsREA30PqTX7FMF0IfdKmiIZmAn8jfgUE6vX%2BCAkCK&X-Amz-Signature=86ed95c1c1f763b368ceacc40bffa43d5e2261e73776530610de7eb464807090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
