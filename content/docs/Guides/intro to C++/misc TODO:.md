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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXA5GCA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDV2mpxC5M1SUVJ0zDFZNTmInTBrXhk8m5RUs2i0HSK6gIhAPGrIAuXEaQvMDWOQq6hlVGZm7N85G4CO%2FQtteBBRsS8Kv8DCF0QABoMNjM3NDIzMTgzODA1Igz6atfc5646R2Ax0Loq3AOxeoQvmkRqmTnjoF8cCCcoKmPqP6dPZA42jYvgMdkc3Mlt6m4K8psAUEUu05cUxaB4eqAjghm0V2sGX1HNKM2dtvhKvR0%2BZL25SjvzCoOfNOo9EItc5bU9cvS3Lfs2%2B5U3XSzV2N7v%2F%2Bpz1mR7rQ%2FK6eIBbMZ9arGp%2B5Pl7NRGjqL78FICwX2zxdm4WnOd9bPlPO%2F5aBTKJKDNZ%2F7Dtf3%2F4A1ofLrg5SRdM2BmYPTJbKwPtzV5RQiB3Hy%2Bgk8mDH7Ewfg5ChKftCaaNI2%2BTNTEy6E4Em3%2BuwL3iKRyVop6nCD9KN6vd8tTGAi2mlmOqN2X0N%2BpjGS%2ByoUPA25i10lHSOeYxSUF%2FZPbgmZagfWwS6jkflOeSE%2BZFeEPIkdyy2DhPxtg0E0ZVE2kWCEnovR5pwMgKM%2BlhpCyl9uXmPAapU2KQzH%2FMUeMXGh%2FSAiBrW7oAF452vMG63RlyoaNkLzH5JzbDVMgPKEgsCLqAJkNt3FrqspaK2WTIsHVb8%2BiJ1WuJ64bouDgLIzEdl1NPZPTLJki%2BwIzu7lhOL0JRmAjyKlQOTdydwbYERQw7XSiwYplpfDGsP8Xiau0cIjTl8S5ZqIlI8Qkm%2F4tjbfdD34qot0Ezz1BRQHid9IVnzCUm8DCBjqkAb15hYNBbkytJ6U8I2UXBMw44emkkTYbQFz9oQC0h3JdVI33aBhReFskLdqOXF3mls7x9UbzKkhTZI7JSFmAo46BuSw0pM3ob6xzn1KKdRy3F0emFwieNrbYPGkT61U4OG3Wn0Rry51F4t0ZBwM3IDeIiFUxH2g%2FlX53ul5wxtVJzQXYZxmLiv9gOc2xOQruzX14%2FZhYd3a43%2FsnN16SVLWBpeT7&X-Amz-Signature=5900093dafb3a0ae3cfddc569915f1e8c104c5c735e3b3fe30426f8064625115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXA5GCA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDV2mpxC5M1SUVJ0zDFZNTmInTBrXhk8m5RUs2i0HSK6gIhAPGrIAuXEaQvMDWOQq6hlVGZm7N85G4CO%2FQtteBBRsS8Kv8DCF0QABoMNjM3NDIzMTgzODA1Igz6atfc5646R2Ax0Loq3AOxeoQvmkRqmTnjoF8cCCcoKmPqP6dPZA42jYvgMdkc3Mlt6m4K8psAUEUu05cUxaB4eqAjghm0V2sGX1HNKM2dtvhKvR0%2BZL25SjvzCoOfNOo9EItc5bU9cvS3Lfs2%2B5U3XSzV2N7v%2F%2Bpz1mR7rQ%2FK6eIBbMZ9arGp%2B5Pl7NRGjqL78FICwX2zxdm4WnOd9bPlPO%2F5aBTKJKDNZ%2F7Dtf3%2F4A1ofLrg5SRdM2BmYPTJbKwPtzV5RQiB3Hy%2Bgk8mDH7Ewfg5ChKftCaaNI2%2BTNTEy6E4Em3%2BuwL3iKRyVop6nCD9KN6vd8tTGAi2mlmOqN2X0N%2BpjGS%2ByoUPA25i10lHSOeYxSUF%2FZPbgmZagfWwS6jkflOeSE%2BZFeEPIkdyy2DhPxtg0E0ZVE2kWCEnovR5pwMgKM%2BlhpCyl9uXmPAapU2KQzH%2FMUeMXGh%2FSAiBrW7oAF452vMG63RlyoaNkLzH5JzbDVMgPKEgsCLqAJkNt3FrqspaK2WTIsHVb8%2BiJ1WuJ64bouDgLIzEdl1NPZPTLJki%2BwIzu7lhOL0JRmAjyKlQOTdydwbYERQw7XSiwYplpfDGsP8Xiau0cIjTl8S5ZqIlI8Qkm%2F4tjbfdD34qot0Ezz1BRQHid9IVnzCUm8DCBjqkAb15hYNBbkytJ6U8I2UXBMw44emkkTYbQFz9oQC0h3JdVI33aBhReFskLdqOXF3mls7x9UbzKkhTZI7JSFmAo46BuSw0pM3ob6xzn1KKdRy3F0emFwieNrbYPGkT61U4OG3Wn0Rry51F4t0ZBwM3IDeIiFUxH2g%2FlX53ul5wxtVJzQXYZxmLiv9gOc2xOQruzX14%2FZhYd3a43%2FsnN16SVLWBpeT7&X-Amz-Signature=817dc5e7d9065e9abce0f33fda637b2819e1abb1308c3d435a99f06b255cea96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
