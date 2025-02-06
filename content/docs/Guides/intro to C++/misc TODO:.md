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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQPKX5UR%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC%2B%2F7UNH9QYExut6KhQp%2FetRWbBs%2FIkYmHa6cegVg2XFwIgVb77LIexeeG1PBn7MhgcbDBsdBfk%2BoVrE6ufYqWfPRsq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDLB6X8ZPklchb8uWSyrcA8cPqCsulEPB4Nz8Lq3yTFSnGSFTbXvTG4KPGxy%2FmRv8g6QTPk6w42T6P8w0JjTIddwNERyRfkr%2FAq1UprCPwS9xPbQUanKel2itKLdkWBiZR1sS92fgV1REITWyCktLxt9wFsTe%2BENiJWYk7zPxIHJUBN0JrafgoRApHTq4seVHJ5rj5kBzSA3LhmnCPyCr1cQjwft%2Fj1tNcaspXsHDoQa6KcmPAMkJjquPhgBKCnBpZUb6K91516HThXUFAcJtfl2WyN4manHql57G4%2BoHsZs4yViwiAlcRdZ2XXCA%2B7FAxModQFWmDxJSboCo5FiyOlRFMhbIFQgQhwusFwDodajln8VdZmV4GuGLMdPOdaWUqgRJ8ALQ0YUuDbNDuKLUVrXyOXF18007fGMjeZDHdVTYJpshfrq9hTZIPOHhbx1age3LY%2FS%2BEaJWHjpaXMmTXazOnXn39f%2FmTUqrqaeeQc4s9GOv%2FZsUQPm%2B%2BmkmipH65c1XjB4zm%2FWgPQBIr0epf31pyx541seRjPHwh0X0H39ledx%2Bhct3RQE0LVBFx2W9T%2BXSSVFm%2B%2B7AR7BGFAimtg1KQl3chps2COoWJyLC7HbjH2AWKpQmnCdn2PzOsKtaswEGKFSqz7RVSIU6MN%2FSk70GOqUBJwiPKIVQC0infhDrDuOVN%2FDUg1tTATpkNrrZwj84YsyRwF47jlXn4VgoZh30ODzLc7H8lJQ1IkpphRS7or0eHbOJB3ouEGV0mvPpXURWXvB0v4sAAIxnrrPrkYb%2FUohFM8cNp58lj9%2FwXy5G%2FLnrlB8WROzHd1jdraeLhDge7cogKrTYOa5B5gNmERoerxfx3pcV0no4qntnANvKVZWWFIwrVIWg&X-Amz-Signature=bc7749f61c8ade60fd31c60c5e5d1a2e2d48ee5934a6d973b8570ed9609cd7b1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQPKX5UR%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC%2B%2F7UNH9QYExut6KhQp%2FetRWbBs%2FIkYmHa6cegVg2XFwIgVb77LIexeeG1PBn7MhgcbDBsdBfk%2BoVrE6ufYqWfPRsq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDLB6X8ZPklchb8uWSyrcA8cPqCsulEPB4Nz8Lq3yTFSnGSFTbXvTG4KPGxy%2FmRv8g6QTPk6w42T6P8w0JjTIddwNERyRfkr%2FAq1UprCPwS9xPbQUanKel2itKLdkWBiZR1sS92fgV1REITWyCktLxt9wFsTe%2BENiJWYk7zPxIHJUBN0JrafgoRApHTq4seVHJ5rj5kBzSA3LhmnCPyCr1cQjwft%2Fj1tNcaspXsHDoQa6KcmPAMkJjquPhgBKCnBpZUb6K91516HThXUFAcJtfl2WyN4manHql57G4%2BoHsZs4yViwiAlcRdZ2XXCA%2B7FAxModQFWmDxJSboCo5FiyOlRFMhbIFQgQhwusFwDodajln8VdZmV4GuGLMdPOdaWUqgRJ8ALQ0YUuDbNDuKLUVrXyOXF18007fGMjeZDHdVTYJpshfrq9hTZIPOHhbx1age3LY%2FS%2BEaJWHjpaXMmTXazOnXn39f%2FmTUqrqaeeQc4s9GOv%2FZsUQPm%2B%2BmkmipH65c1XjB4zm%2FWgPQBIr0epf31pyx541seRjPHwh0X0H39ledx%2Bhct3RQE0LVBFx2W9T%2BXSSVFm%2B%2B7AR7BGFAimtg1KQl3chps2COoWJyLC7HbjH2AWKpQmnCdn2PzOsKtaswEGKFSqz7RVSIU6MN%2FSk70GOqUBJwiPKIVQC0infhDrDuOVN%2FDUg1tTATpkNrrZwj84YsyRwF47jlXn4VgoZh30ODzLc7H8lJQ1IkpphRS7or0eHbOJB3ouEGV0mvPpXURWXvB0v4sAAIxnrrPrkYb%2FUohFM8cNp58lj9%2FwXy5G%2FLnrlB8WROzHd1jdraeLhDge7cogKrTYOa5B5gNmERoerxfx3pcV0no4qntnANvKVZWWFIwrVIWg&X-Amz-Signature=6230653c51188dd17583601955377633bf7a63ea328908765552580635727d15&X-Amz-SignedHeaders=host&x-id=GetObject)

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
