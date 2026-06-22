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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4XOAEL%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDhd7%2BUyn1alU2Ka%2FpUZQyVLbY%2F6nvCIjchet%2Bd8seaewIgaKlrR%2Fix0bl8AJ5n1MSvMoJbSLDgZjRRjCeC%2BduCWpQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6jGznXanEampNfQircA3v53Mxl6iTHKNsx%2BmmdrIo8v32%2B0Zo%2BhMgf6u0q4irrGHjw5Xm9W1lys6VV3N%2FnZ7Oc2FNkM17jkGCkjC8T5EBVErU1mKcgQRK333FzbcZSCQRZSHCPQIkIx7bXQP98ttfiirp2xQIskeNoW3xStYjyCkbhL8n9tTdB2YpLrK8q1iiU%2FDyHR0jf0%2FAIT4YzoIoMGwnymANobXOSAbImX4OOl7g95TBsqtheAruyFzTAsSzYt8QEw2q%2Bzsrb3RXMW3zXpi8v1SFwfYDfzyfwadrZC4FN5ZoXdYrQ9JLRKmgSG2RcMWX4Ka0gNEIaj3D7LCZGoKfcncZsXsucTcizxIGOrdZ1lyCRALZjWJC1kVPszh7M3ULNQCZI4lJzZxi11X4fATPKKKJPpkABdkH5fwBLnY0P8kZMlTodmOInQ2KhDRycRDxyKdW2gC7leDWvdA%2BgRJ1cfsq5jQmFKfu6%2F0N6KYC3CbhJKFFrtfyPTVwYNTK5DVXdLukLGyDhDrp4aZNxUjTQ6eOUOtaZtM5rcilpjakx0EIKB57HOsuCTEDrt3mRsj4%2F2CPFN3sg96I2Y3Aolea5QcuS3hqSvRnhlXLrmeQnhQSCxgp%2BEfnouzq24TxO%2BOp6Uc%2FBGDH3MPLY4tEGOqUBt6UICX1z%2Bs5s0M2io3r18l1RSOyZuwN7QSp4G95hulN%2F1TEPFyVDh2snfsClQOTzXUh4mLR4f3Z2Q%2B3tULis0y3e2fLU4489lkXXwKjTZvAUKCpD5yW05Uqpvi%2BpiVJbwVCJfSxo%2BHkKfi8tPXJbEOUAQCS%2Bqc1HATt4%2BU1wD1kaaCg7vINe2Flx6Z6QedC88IZeDEJj0sacJ3Rx86gu0jIxLld8&X-Amz-Signature=9ea3c840598f290d1a726c3f6fd80f0d3f18c92e838f86f9d28343b28a6f0529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4XOAEL%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDhd7%2BUyn1alU2Ka%2FpUZQyVLbY%2F6nvCIjchet%2Bd8seaewIgaKlrR%2Fix0bl8AJ5n1MSvMoJbSLDgZjRRjCeC%2BduCWpQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6jGznXanEampNfQircA3v53Mxl6iTHKNsx%2BmmdrIo8v32%2B0Zo%2BhMgf6u0q4irrGHjw5Xm9W1lys6VV3N%2FnZ7Oc2FNkM17jkGCkjC8T5EBVErU1mKcgQRK333FzbcZSCQRZSHCPQIkIx7bXQP98ttfiirp2xQIskeNoW3xStYjyCkbhL8n9tTdB2YpLrK8q1iiU%2FDyHR0jf0%2FAIT4YzoIoMGwnymANobXOSAbImX4OOl7g95TBsqtheAruyFzTAsSzYt8QEw2q%2Bzsrb3RXMW3zXpi8v1SFwfYDfzyfwadrZC4FN5ZoXdYrQ9JLRKmgSG2RcMWX4Ka0gNEIaj3D7LCZGoKfcncZsXsucTcizxIGOrdZ1lyCRALZjWJC1kVPszh7M3ULNQCZI4lJzZxi11X4fATPKKKJPpkABdkH5fwBLnY0P8kZMlTodmOInQ2KhDRycRDxyKdW2gC7leDWvdA%2BgRJ1cfsq5jQmFKfu6%2F0N6KYC3CbhJKFFrtfyPTVwYNTK5DVXdLukLGyDhDrp4aZNxUjTQ6eOUOtaZtM5rcilpjakx0EIKB57HOsuCTEDrt3mRsj4%2F2CPFN3sg96I2Y3Aolea5QcuS3hqSvRnhlXLrmeQnhQSCxgp%2BEfnouzq24TxO%2BOp6Uc%2FBGDH3MPLY4tEGOqUBt6UICX1z%2Bs5s0M2io3r18l1RSOyZuwN7QSp4G95hulN%2F1TEPFyVDh2snfsClQOTzXUh4mLR4f3Z2Q%2B3tULis0y3e2fLU4489lkXXwKjTZvAUKCpD5yW05Uqpvi%2BpiVJbwVCJfSxo%2BHkKfi8tPXJbEOUAQCS%2Bqc1HATt4%2BU1wD1kaaCg7vINe2Flx6Z6QedC88IZeDEJj0sacJ3Rx86gu0jIxLld8&X-Amz-Signature=60d683b228827c0571af3c840d54bcce78a0297932a672d8a2918c9c5c2f8002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
