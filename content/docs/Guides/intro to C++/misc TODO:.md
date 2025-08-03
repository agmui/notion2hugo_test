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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOVIEOJP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUxVgw%2B4NgHcttJdMKQ0k5%2FsWvauxvsoXSr8XV4w7W6AIgeuJYcmnX8ep7sntOjNl072EbeqoF6X0tS1tuAC3BWT4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBl1Sot7M%2BY3YO9EjSrcA1N2SN56SIa%2BfAAIN9iZ5cY%2FNqjrnee9%2FKuZiqmHsxSc0IW65xk%2FWfngUb%2FzeXJR%2F6LHxUBAwlQBlnPWplTv3zi1HRw7cTABNlmzc1YzV%2BP6wNHwr5VrOYqO6QJi20aPJGeElXT696syNHEyErthr2%2BqnH72FRhB6fO7Fj6c7MZk6zwsGNz%2BMgnqO%2BaLPpenA%2Bz33dxny20vdC%2Bv1iDsNtpnSVDtGiM6EzJbZb7sbvqHVYRIybrfWHD4krSxgbq21tQL5UXh0XyRnDDaPGRJz6%2FmAKmHZ6X74YvR15LJ1c7JPyxJt%2FMqws3EwotAsn2dDgypp%2BkL5m%2Bsncs0BdxTI6YFuB71Q3dKEQMmncYuW3T6pjDVtWy0f6s81tPfh527mOTLBfmeLo%2FSjkuo6gzY%2F4fZ%2Be43TlJ%2FIHzHCEVDtGF75M4n6yqnVRH%2Fe6qeb82gQ%2BciZmU%2FKYMdHgrRAEfld8v%2FtoJLGbiGELIO1Y5Gvy6gr8iJW7Cf5I%2FB%2BSOGIv1denOg%2FZUtHduGQNyDtpunmNZ0wjhcJGbeede8cVXnICzGU9YYkxGEWURTGXRiX2r5pH1HsV4RZZPMajlQHUL9eSNLeUNmJuMheCPiCEBGol1113W2q2XY6V5wyufZMLm%2BvMQGOqUBjJ2DJtDKPrFNciPQqPCKDkTF669hatGeylkjKvK9pjMtWyAT6L1mfOcYFMFviDyfxJlVx2cj98DPR6tJFEMIrko06qGVRCQkWpd%2B%2BUUEaT1OYQQXRPp2W2olSk8Q1eAvKncWnHsQZqEGqi5dBMAib4%2BeLWNpqVG%2F4qPUuT3U3m5jA2mpy5FQ2lmbyhIlua%2BxwRNpIzlp6qDjvmchJQnAnWaqZT3C&X-Amz-Signature=73ba3881cac71c9617d86192eaf9c9a5b66be9c23900610c8f52614901840c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOVIEOJP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUxVgw%2B4NgHcttJdMKQ0k5%2FsWvauxvsoXSr8XV4w7W6AIgeuJYcmnX8ep7sntOjNl072EbeqoF6X0tS1tuAC3BWT4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBl1Sot7M%2BY3YO9EjSrcA1N2SN56SIa%2BfAAIN9iZ5cY%2FNqjrnee9%2FKuZiqmHsxSc0IW65xk%2FWfngUb%2FzeXJR%2F6LHxUBAwlQBlnPWplTv3zi1HRw7cTABNlmzc1YzV%2BP6wNHwr5VrOYqO6QJi20aPJGeElXT696syNHEyErthr2%2BqnH72FRhB6fO7Fj6c7MZk6zwsGNz%2BMgnqO%2BaLPpenA%2Bz33dxny20vdC%2Bv1iDsNtpnSVDtGiM6EzJbZb7sbvqHVYRIybrfWHD4krSxgbq21tQL5UXh0XyRnDDaPGRJz6%2FmAKmHZ6X74YvR15LJ1c7JPyxJt%2FMqws3EwotAsn2dDgypp%2BkL5m%2Bsncs0BdxTI6YFuB71Q3dKEQMmncYuW3T6pjDVtWy0f6s81tPfh527mOTLBfmeLo%2FSjkuo6gzY%2F4fZ%2Be43TlJ%2FIHzHCEVDtGF75M4n6yqnVRH%2Fe6qeb82gQ%2BciZmU%2FKYMdHgrRAEfld8v%2FtoJLGbiGELIO1Y5Gvy6gr8iJW7Cf5I%2FB%2BSOGIv1denOg%2FZUtHduGQNyDtpunmNZ0wjhcJGbeede8cVXnICzGU9YYkxGEWURTGXRiX2r5pH1HsV4RZZPMajlQHUL9eSNLeUNmJuMheCPiCEBGol1113W2q2XY6V5wyufZMLm%2BvMQGOqUBjJ2DJtDKPrFNciPQqPCKDkTF669hatGeylkjKvK9pjMtWyAT6L1mfOcYFMFviDyfxJlVx2cj98DPR6tJFEMIrko06qGVRCQkWpd%2B%2BUUEaT1OYQQXRPp2W2olSk8Q1eAvKncWnHsQZqEGqi5dBMAib4%2BeLWNpqVG%2F4qPUuT3U3m5jA2mpy5FQ2lmbyhIlua%2BxwRNpIzlp6qDjvmchJQnAnWaqZT3C&X-Amz-Signature=3181fb801e14e82b2d3b2a11f8c127a2ada051227906944a4d32a12eaa4c7ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
