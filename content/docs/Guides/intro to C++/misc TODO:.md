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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYJI3KB7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8Sn%2FRAqsJPDXOcFIvxJbYWaIkvFUAxb0Ks0FBAV3ApQIgEbma9MOT4JRXyvbH6SITveNvc1iFpXNAUn7KtJFvvssqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqo6phZS4kEOgsmBCrcAyCpQR4hR8pnaC4avO%2BFW%2FtJDjWLEpON8wwsP2EZX%2BJhTeAzzkpJnsyCPwTTR4zlUlIVnk47jW56ZU7bopC7dZ8Dv3mDv%2F5uWCCJXcPFznzpePwykmIoyhI3qj1pi%2BkDcG2xuDckfmfG4b%2BSG8VsZi2SYI2C9Dr%2FaQXtg%2F%2F%2Bay4qlel3CN%2BoVM05vTrp6%2BmFSeUYwJ5j%2FU95mKnIw0Ty0oHSkjKBmSHP4i3hb4kuhGX4%2BZosF%2F71LtQ8jTRBl8yHTgaypeG0erFHrl86PL9p2DFt4v4VhMLtNGXwr8Q2tJl1wKMEC2Pu1MecJYRJAHmeWOaqhA97%2BxU%2BZHnnQvQznBDVQQEPHBaDxxTRUMKtI%2B8TacsWcJthVAw00Hv50BdVKLmrrd77Pi6iCWYveA64qqfeABxIAxsqFk4gtEcrn83J8MOnoGoGbPnKTgjx5S2Rn46SBGgHwwYfg2jhn%2BZUSOfuuIK%2FniIht6RHr%2Bo3TFenL8vsJeUYQQwD0z6Ljn8U6l2qEg4EFUsJxetRkmiM8iDqt2AXLDjI4%2Fjp3D8Rf%2FHGN0SZ%2BOIQ9fLbMIFdfDOcilFHoTKllu63b%2FcJgtB6tuZLX4TH9%2BYLeJdmeq13smZQ7extwSNBFWBl0X9IMMvK%2BLwGOqUBzX0GqaP3qWje7L3ozUhPB29Xqy1M3Px5%2BJWKMq1ZS6pbAxd5VcmckfYlEOXjhkIpymr2%2BUnWY2dCZxRaXdQA%2BmL0D3cl5EktwOB5s7xEENaaKLvAz493hwdX3J7y5mlFlrYiy68nUThx5991aeiDKZsG%2Bs5q09hd9ClWNCk3dHtNvyYJQTnrtNavXcPkvDsbDVi4%2FAXgIBVWnBOoaxg2SqRpd8ZM&X-Amz-Signature=f408bd091e0ea6b3cc80beaefec2540a3fb278e3e8b78e98f527fda2283cf26e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYJI3KB7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8Sn%2FRAqsJPDXOcFIvxJbYWaIkvFUAxb0Ks0FBAV3ApQIgEbma9MOT4JRXyvbH6SITveNvc1iFpXNAUn7KtJFvvssqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqo6phZS4kEOgsmBCrcAyCpQR4hR8pnaC4avO%2BFW%2FtJDjWLEpON8wwsP2EZX%2BJhTeAzzkpJnsyCPwTTR4zlUlIVnk47jW56ZU7bopC7dZ8Dv3mDv%2F5uWCCJXcPFznzpePwykmIoyhI3qj1pi%2BkDcG2xuDckfmfG4b%2BSG8VsZi2SYI2C9Dr%2FaQXtg%2F%2F%2Bay4qlel3CN%2BoVM05vTrp6%2BmFSeUYwJ5j%2FU95mKnIw0Ty0oHSkjKBmSHP4i3hb4kuhGX4%2BZosF%2F71LtQ8jTRBl8yHTgaypeG0erFHrl86PL9p2DFt4v4VhMLtNGXwr8Q2tJl1wKMEC2Pu1MecJYRJAHmeWOaqhA97%2BxU%2BZHnnQvQznBDVQQEPHBaDxxTRUMKtI%2B8TacsWcJthVAw00Hv50BdVKLmrrd77Pi6iCWYveA64qqfeABxIAxsqFk4gtEcrn83J8MOnoGoGbPnKTgjx5S2Rn46SBGgHwwYfg2jhn%2BZUSOfuuIK%2FniIht6RHr%2Bo3TFenL8vsJeUYQQwD0z6Ljn8U6l2qEg4EFUsJxetRkmiM8iDqt2AXLDjI4%2Fjp3D8Rf%2FHGN0SZ%2BOIQ9fLbMIFdfDOcilFHoTKllu63b%2FcJgtB6tuZLX4TH9%2BYLeJdmeq13smZQ7extwSNBFWBl0X9IMMvK%2BLwGOqUBzX0GqaP3qWje7L3ozUhPB29Xqy1M3Px5%2BJWKMq1ZS6pbAxd5VcmckfYlEOXjhkIpymr2%2BUnWY2dCZxRaXdQA%2BmL0D3cl5EktwOB5s7xEENaaKLvAz493hwdX3J7y5mlFlrYiy68nUThx5991aeiDKZsG%2Bs5q09hd9ClWNCk3dHtNvyYJQTnrtNavXcPkvDsbDVi4%2FAXgIBVWnBOoaxg2SqRpd8ZM&X-Amz-Signature=168fdf5b922eb1471f5c589c94d6aa9bae96ba1cca8251c2314ff52bcab293fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
