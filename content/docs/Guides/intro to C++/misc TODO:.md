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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNJ7E5Z%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFxaNAv6a5WHMeJo%2Fa%2BR5IsFHJdIjSdZF0eYuMz9xSjmAiEA3soaOaWcuBnbPG8Fw25f58MWRj1OA0lfrxxDkT4uVPcq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDHkjh7rTrRUZgscFSSrcAyeNUifv%2FUYQjuPS%2Bq%2BfQlio4gmOwxBafh86t1FaZcVP6JzJbl7uc6hDO1xVQcPTpay0VX7IbJcKQN4HobXz1NT0HhBTAIRPd7lKyJuh2KbCa53U0zSckM5qkjRD%2FKX5ePQoe%2FSk1yN5dp8M3nieiS3ThdvbRRj%2Fv3sG0X6NNY9lKpzkSYGQdFWEjieiime5BrE8LZJj0fzhPN5GuwYkGKzYSZurviG7Sv2ST%2FxUhlTdZx6%2Fy%2Bp%2Fi7a0h6%2BAcXvayyyx%2F9ogJ613RM7%2Bkjw2reo7O6aML8ig4bOW9PcB%2FhcXB%2FSE0XTKlTFRI7f2YCcw02l0Fa2Xd1E1WQ2GY7NXUeW8sE7XTWxwffH6wafIHYrD299K5F2N7YBRZ9tn3Idii7Ni6OOLx6lmApJ3mtUP9nmtNW2HW%2BgTiODTye73r%2FpyqK5kiQKttU2yZWEABxmUP3ynta2cwaKdmQ2zqbdseXPDclvRfj4FTpMfrSppaEhYCclWvt9Xi5Ip5kXd1E5MeyETZ9Rs7%2Bd%2BmB48YDZqAVqWEEorxiBKiF3O4YkgVurpfvBacb9xBSUHY5V%2BcihnE%2BN%2BxuYfaoSCVTTuH6%2B7KF7G3SE1ZW32nMAbLNg4o3Y0xeeHKA7Ho7ruqtLfMNfN6MIGOqUBJaLZTOWRhEQ5JTyA6Td0fF1JoIfLsR%2FSwjIJKnSIa60gv5PkVMygNxHet5k2nXamqEFJAV7Rv3RgPDCuivSyuwsgaT%2FRyoqnifT2ILFMqcbps1D7ugsITZM81G7%2BpVTMh8C45WhfaDhv7TMbSBhVp71x%2F2XzA94nV0pYIMiqkMt7gyC4FHxqWqk1UwFX24tAG8v5Y%2F6Pj9GzUu2DITbebVC%2BQ4MF&X-Amz-Signature=563d2f1bc5133c5052c0e2d2f89ff0b0cb1b529b22d4ce20a7456c4d29098ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNJ7E5Z%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFxaNAv6a5WHMeJo%2Fa%2BR5IsFHJdIjSdZF0eYuMz9xSjmAiEA3soaOaWcuBnbPG8Fw25f58MWRj1OA0lfrxxDkT4uVPcq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDHkjh7rTrRUZgscFSSrcAyeNUifv%2FUYQjuPS%2Bq%2BfQlio4gmOwxBafh86t1FaZcVP6JzJbl7uc6hDO1xVQcPTpay0VX7IbJcKQN4HobXz1NT0HhBTAIRPd7lKyJuh2KbCa53U0zSckM5qkjRD%2FKX5ePQoe%2FSk1yN5dp8M3nieiS3ThdvbRRj%2Fv3sG0X6NNY9lKpzkSYGQdFWEjieiime5BrE8LZJj0fzhPN5GuwYkGKzYSZurviG7Sv2ST%2FxUhlTdZx6%2Fy%2Bp%2Fi7a0h6%2BAcXvayyyx%2F9ogJ613RM7%2Bkjw2reo7O6aML8ig4bOW9PcB%2FhcXB%2FSE0XTKlTFRI7f2YCcw02l0Fa2Xd1E1WQ2GY7NXUeW8sE7XTWxwffH6wafIHYrD299K5F2N7YBRZ9tn3Idii7Ni6OOLx6lmApJ3mtUP9nmtNW2HW%2BgTiODTye73r%2FpyqK5kiQKttU2yZWEABxmUP3ynta2cwaKdmQ2zqbdseXPDclvRfj4FTpMfrSppaEhYCclWvt9Xi5Ip5kXd1E5MeyETZ9Rs7%2Bd%2BmB48YDZqAVqWEEorxiBKiF3O4YkgVurpfvBacb9xBSUHY5V%2BcihnE%2BN%2BxuYfaoSCVTTuH6%2B7KF7G3SE1ZW32nMAbLNg4o3Y0xeeHKA7Ho7ruqtLfMNfN6MIGOqUBJaLZTOWRhEQ5JTyA6Td0fF1JoIfLsR%2FSwjIJKnSIa60gv5PkVMygNxHet5k2nXamqEFJAV7Rv3RgPDCuivSyuwsgaT%2FRyoqnifT2ILFMqcbps1D7ugsITZM81G7%2BpVTMh8C45WhfaDhv7TMbSBhVp71x%2F2XzA94nV0pYIMiqkMt7gyC4FHxqWqk1UwFX24tAG8v5Y%2F6Pj9GzUu2DITbebVC%2BQ4MF&X-Amz-Signature=81e62dcc9f6ec67542bd4e8ae11f61f5c7e189afa2dda4f4ee11eafec7809bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
