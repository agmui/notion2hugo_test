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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RWBMS6R%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCRNpp%2B6jJeisvNkhQexXkiwDHa1v2JOP1B0F053zmngQIgHUS0PTcTdLh1Lrn4RKj9PrMdrHZrN3u3nRoCYB37c4kq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBZXKL2xYzNgQppnBSrcA%2FsW406iT4TYkyNwmOnGbmH9jdnofzFQe0xhhIh6tLQDg1OrTnSc3OJrZ%2FJXvx6OHFv8BubbSE1XsCn0LHb9G326ZnWmcZhhWirllRAWzEve306quUQ9bFZhVA0dJnN2dFDrFZ42w1I8huMivAdmFDg7PF2zxC0yUmry5jeeGOCxZ%2FJW9VjiMR%2BpwNj1DgNIUDpCGZVF7hBMNNihec4XtWUcD6OZNh%2F69AlFqz8idDeaJiM8sss4NKV49A%2FyrFhgfCiual4JOpCESA%2FcO%2FNtE%2FBLAtTfrwi431KCSyfAjzNntqskamcCdRQCzoZFLDxZ8dz0vPOIzS6MYryMfZGL%2FKlayPd%2FvcweS6PM2NBzESJgEuOKW2NZAhX69JHCwb1dPdo5%2FbnwRe%2BfVNGJGcLzG04K3zWbZowtMQEPwXBEYZfz99Rkp1q47LbT6LfiQE04c8FUVBxCZcsc2Q7T3INqdes1m14Y88tRhTONsy1EOm%2Bd7PtCuROwmdb0i4Nq3acm9oqKoaANWPtd6Lomt9VubyOkKOl0gwOSZMdAly6wlAWLqf4tdzjDc743pvQROThcVnghA1UHWD3vAMeFVln%2FlKNexn7PGSwmG4XtrNvDB1%2BIcHS1K3txC7jGCcCjMPeSvL0GOqUBNsXTlpaBYfxooabq6x0hlFbcOwxD2GojL%2FpREX%2BTlrzUW93IY5A5GePx3HNesYfCijnXfOSuI5cjJ98U7D5Axo%2BfwqpCCSwQIMhFiNmvtCUhuYwRl4clWmJyses7y9XzXuuQ78nMZYSAs0ynsBi3bbebc%2BWslzg93rHWZBi49up%2B%2Bx4XTaeJZ%2BH8DrWkUg4pVFUucNnoB92vgUic8GR%2BBN5yuynT&X-Amz-Signature=eb9d3b2cad51eeb1deb09e1ccea5147c54db434649aeff7868e08db8642c8f31&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RWBMS6R%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCRNpp%2B6jJeisvNkhQexXkiwDHa1v2JOP1B0F053zmngQIgHUS0PTcTdLh1Lrn4RKj9PrMdrHZrN3u3nRoCYB37c4kq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBZXKL2xYzNgQppnBSrcA%2FsW406iT4TYkyNwmOnGbmH9jdnofzFQe0xhhIh6tLQDg1OrTnSc3OJrZ%2FJXvx6OHFv8BubbSE1XsCn0LHb9G326ZnWmcZhhWirllRAWzEve306quUQ9bFZhVA0dJnN2dFDrFZ42w1I8huMivAdmFDg7PF2zxC0yUmry5jeeGOCxZ%2FJW9VjiMR%2BpwNj1DgNIUDpCGZVF7hBMNNihec4XtWUcD6OZNh%2F69AlFqz8idDeaJiM8sss4NKV49A%2FyrFhgfCiual4JOpCESA%2FcO%2FNtE%2FBLAtTfrwi431KCSyfAjzNntqskamcCdRQCzoZFLDxZ8dz0vPOIzS6MYryMfZGL%2FKlayPd%2FvcweS6PM2NBzESJgEuOKW2NZAhX69JHCwb1dPdo5%2FbnwRe%2BfVNGJGcLzG04K3zWbZowtMQEPwXBEYZfz99Rkp1q47LbT6LfiQE04c8FUVBxCZcsc2Q7T3INqdes1m14Y88tRhTONsy1EOm%2Bd7PtCuROwmdb0i4Nq3acm9oqKoaANWPtd6Lomt9VubyOkKOl0gwOSZMdAly6wlAWLqf4tdzjDc743pvQROThcVnghA1UHWD3vAMeFVln%2FlKNexn7PGSwmG4XtrNvDB1%2BIcHS1K3txC7jGCcCjMPeSvL0GOqUBNsXTlpaBYfxooabq6x0hlFbcOwxD2GojL%2FpREX%2BTlrzUW93IY5A5GePx3HNesYfCijnXfOSuI5cjJ98U7D5Axo%2BfwqpCCSwQIMhFiNmvtCUhuYwRl4clWmJyses7y9XzXuuQ78nMZYSAs0ynsBi3bbebc%2BWslzg93rHWZBi49up%2B%2Bx4XTaeJZ%2BH8DrWkUg4pVFUucNnoB92vgUic8GR%2BBN5yuynT&X-Amz-Signature=cbf3ac393a57943ee40e7849c24079dd99e31e0d693f893e6da2c3b26a0696f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
