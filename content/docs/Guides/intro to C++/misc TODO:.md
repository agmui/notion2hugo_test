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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHN22XOJ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD%2F%2BeLVJy%2F5cyiFX9CSe9lYVd39dTsBYTR5vNuhGbZ4QIhAJIUXazxgSIFWWIHxdLTeZEUlrcxDEJfDJx1iQUiHnNFKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV2nI3DPoxdEAjZsEq3AMHuif5uYSdP26wkuqk8yzyfiNU58RGc8U%2BF5GbNqhITCkfonyJoUbGXmdtVQ92URqhu2J0ix0lsqR45AVjpuPsVU3LNzSV1NqIcy4OPsyqsoikItIDX0aUmefd%2FJpzC0ssslNKkRNROPop0OagM0SjFx15aLSLdQbRda70YpEjpTp%2BJKVqg5VxMusTyCwfVzWg4p8PJkNtS%2FfIC9ntPquAQdRb%2F4NhkFrYCvjokKL62vM8N%2BQ%2Fx7bx3AbDXdPy8lqKJgztFFoONFNMIVmJWN9Ur1C8ktRT1Lj94AOQSU1huH7UXEWRW4c4JdBlvD45B1VAicS6CgV0ZH%2Fj%2F32Api5k8W5cOBE6ECN5X%2BPaLBnEgluDdylu0u0vKaq5X3ygRt71UkP2y2K7kE1tgZEbvsO9EELphf36SQ9hcZsGOzdDOfpZShim65KzJKkL5cWogK45h5uFh0XwXGdh9CrXMTlWj82AK%2Fq6%2F1EiFt8TYSnla3pOHuzwUBQRn5417E5XCHOPNjh1kBCWWYq496ox0QdUB0edsCqNpolJ%2F7U3TSuaKStCtb8FHL7VQoutN%2BI4yS9haPnILyvB1pDMQ4I5%2Fl8c6MXL4RbnKAIweDiclwm9%2Be%2F9eTvczu2nwVQe4zC47vW8BjqkAWOHvexQnw2EWTbgCatuNSl2UUuDSagO21WbrXqBf3TDfFDFgW%2B2iMgrhG0ZhDsBr3oMrHiNT1HjJ4tHLSIwPBiAd1CN%2FOANhnIWNUNBWC3NlwgQahtFN3jpH1RCeKu3u%2FH9PVVyR2W3rXHouPO6zlOP0ZVPfqfs9oe5UoA9jY7AOv1Bsm2sSZJ1D5wXZ5Pgbn4CgnGQ%2BOpHq1%2FmaHPT9NKrHLEi&X-Amz-Signature=2439e94d3b9c57904ed960bc7522b4ce4e6024130f25b3a239e3bb2374132eb6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHN22XOJ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD%2F%2BeLVJy%2F5cyiFX9CSe9lYVd39dTsBYTR5vNuhGbZ4QIhAJIUXazxgSIFWWIHxdLTeZEUlrcxDEJfDJx1iQUiHnNFKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV2nI3DPoxdEAjZsEq3AMHuif5uYSdP26wkuqk8yzyfiNU58RGc8U%2BF5GbNqhITCkfonyJoUbGXmdtVQ92URqhu2J0ix0lsqR45AVjpuPsVU3LNzSV1NqIcy4OPsyqsoikItIDX0aUmefd%2FJpzC0ssslNKkRNROPop0OagM0SjFx15aLSLdQbRda70YpEjpTp%2BJKVqg5VxMusTyCwfVzWg4p8PJkNtS%2FfIC9ntPquAQdRb%2F4NhkFrYCvjokKL62vM8N%2BQ%2Fx7bx3AbDXdPy8lqKJgztFFoONFNMIVmJWN9Ur1C8ktRT1Lj94AOQSU1huH7UXEWRW4c4JdBlvD45B1VAicS6CgV0ZH%2Fj%2F32Api5k8W5cOBE6ECN5X%2BPaLBnEgluDdylu0u0vKaq5X3ygRt71UkP2y2K7kE1tgZEbvsO9EELphf36SQ9hcZsGOzdDOfpZShim65KzJKkL5cWogK45h5uFh0XwXGdh9CrXMTlWj82AK%2Fq6%2F1EiFt8TYSnla3pOHuzwUBQRn5417E5XCHOPNjh1kBCWWYq496ox0QdUB0edsCqNpolJ%2F7U3TSuaKStCtb8FHL7VQoutN%2BI4yS9haPnILyvB1pDMQ4I5%2Fl8c6MXL4RbnKAIweDiclwm9%2Be%2F9eTvczu2nwVQe4zC47vW8BjqkAWOHvexQnw2EWTbgCatuNSl2UUuDSagO21WbrXqBf3TDfFDFgW%2B2iMgrhG0ZhDsBr3oMrHiNT1HjJ4tHLSIwPBiAd1CN%2FOANhnIWNUNBWC3NlwgQahtFN3jpH1RCeKu3u%2FH9PVVyR2W3rXHouPO6zlOP0ZVPfqfs9oe5UoA9jY7AOv1Bsm2sSZJ1D5wXZ5Pgbn4CgnGQ%2BOpHq1%2FmaHPT9NKrHLEi&X-Amz-Signature=948c04456c80fb83e2fed6e041a82008d3f02eefac514be3bc7872a8a36f6def&X-Amz-SignedHeaders=host&x-id=GetObject)

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
