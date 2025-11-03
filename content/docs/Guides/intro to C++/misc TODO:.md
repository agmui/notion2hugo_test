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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QENBLLLM%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqNsjWEvz041nrSwMRs56hRV7dnM5bfiOGgSN33yjsRAIhAPttbgNsiU9jDtPReh2bSXnDb%2Bt8SuFzJ6cMNLNGqoSoKv8DCFMQABoMNjM3NDIzMTgzODA1IgwPnn47FXIAKl808Skq3AOCYJc4%2B06faHrPHBw6rdunplqtY4%2FFDNaDVr0YPeoqXXOzrEAaAlA98XVm8VdbOwLo5gIJEhO5noUADQ7Lt%2FAsLoa4CHkj7yq3DenWy%2B6K7HZY5cdSSWYvbjD%2BuQBSP%2BSjymebeC%2FKDgSAYkGF%2FrBmBWVoIqW8NRpLl5dqhsR4kwT8%2B3FH903EnldIU6op5lizeo2KWHX0Y73ZBmDtT6wFMlFPawADl04I9X3xMJ86sknbhBUl6%2BYgS6XfRMUcr%2F4%2BZOaffiHWZ3mow1KhZoPJT4zCBqzxdo0Eqn7EQl5SGsjo676EvrIi1RWHBLcxCgyQ%2BMV95LxIQYNglgkntvuy%2FbI718PJQshJXvdk1J%2FrnPG%2Fqj5EARbCKtDj00tAeLxiPbT0jAY9%2BNMC7gT0JUcRHG4ZQHimXLcWve7nNQfxHy29RQiwSxjVlFM0TA1R259VZCZPvqDTFew0%2BJ%2FPJjsQ1jqIXnGd3e2TTvMbF1ZFDYZ0yujaXpt%2BEdMpZq3RQPJd3Q4jpb8Q64fyEF1pTMtFnxIvNEIO5oY7J5j87MRZqL3G7tZjb7La2TTVDYa4ObI1yVzQ4M1aella8xEIPnTY12rrCLFhs7idTit4kpQg3gjMNRw4RVgfMNBxRTCQiaDIBjqkAYVtBZc%2FhaXR6yeceIl9ibWek%2B%2FjsGn0ToY67B9P945clkHAFw5wVEt7ewn5BuM%2BPAhl0WdBm7r6WatrivPBVdSR4LFyBVsWSXIjSVpSl93k%2Fu7UUUkmcB0%2BkCjXRDo6kMs%2Ftbew4c1DRQ4ohLaXVDPWrzQahAzSDi5EQ%2FtDeEfEOzsS2H%2BLhA567CJJtXDwKj%2BkP0%2FvmA2Hmrw3PkUKpy2YYID1&X-Amz-Signature=88e93030ce6578334acb5ff39707eb95e192b9188bd0c4bba2b414e619c31d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QENBLLLM%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqNsjWEvz041nrSwMRs56hRV7dnM5bfiOGgSN33yjsRAIhAPttbgNsiU9jDtPReh2bSXnDb%2Bt8SuFzJ6cMNLNGqoSoKv8DCFMQABoMNjM3NDIzMTgzODA1IgwPnn47FXIAKl808Skq3AOCYJc4%2B06faHrPHBw6rdunplqtY4%2FFDNaDVr0YPeoqXXOzrEAaAlA98XVm8VdbOwLo5gIJEhO5noUADQ7Lt%2FAsLoa4CHkj7yq3DenWy%2B6K7HZY5cdSSWYvbjD%2BuQBSP%2BSjymebeC%2FKDgSAYkGF%2FrBmBWVoIqW8NRpLl5dqhsR4kwT8%2B3FH903EnldIU6op5lizeo2KWHX0Y73ZBmDtT6wFMlFPawADl04I9X3xMJ86sknbhBUl6%2BYgS6XfRMUcr%2F4%2BZOaffiHWZ3mow1KhZoPJT4zCBqzxdo0Eqn7EQl5SGsjo676EvrIi1RWHBLcxCgyQ%2BMV95LxIQYNglgkntvuy%2FbI718PJQshJXvdk1J%2FrnPG%2Fqj5EARbCKtDj00tAeLxiPbT0jAY9%2BNMC7gT0JUcRHG4ZQHimXLcWve7nNQfxHy29RQiwSxjVlFM0TA1R259VZCZPvqDTFew0%2BJ%2FPJjsQ1jqIXnGd3e2TTvMbF1ZFDYZ0yujaXpt%2BEdMpZq3RQPJd3Q4jpb8Q64fyEF1pTMtFnxIvNEIO5oY7J5j87MRZqL3G7tZjb7La2TTVDYa4ObI1yVzQ4M1aella8xEIPnTY12rrCLFhs7idTit4kpQg3gjMNRw4RVgfMNBxRTCQiaDIBjqkAYVtBZc%2FhaXR6yeceIl9ibWek%2B%2FjsGn0ToY67B9P945clkHAFw5wVEt7ewn5BuM%2BPAhl0WdBm7r6WatrivPBVdSR4LFyBVsWSXIjSVpSl93k%2Fu7UUUkmcB0%2BkCjXRDo6kMs%2Ftbew4c1DRQ4ohLaXVDPWrzQahAzSDi5EQ%2FtDeEfEOzsS2H%2BLhA567CJJtXDwKj%2BkP0%2FvmA2Hmrw3PkUKpy2YYID1&X-Amz-Signature=84ca3f7ae57c0b0bbf3f8654845ad7718a6ff08b5e39947aa506622091329098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
