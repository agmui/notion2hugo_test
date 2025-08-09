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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662FQOXDY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCal3wXAAmRveiK8mDLsY0fhrrjQ4CgoS19XRNlz7PJTgIgPeHbRbOFWkE1miAy6jr3wxnJN%2F%2B1cRvCmLjmWGuB1EAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMlvzbAmz%2FlgYoVmyrcAxsr9jlRT9mB%2F2YWkIIUqiY7BdsfSqyK78fy%2Be2IcYIZHygEc7Oi2T6IJX3aYnlU%2BDD3I7rwy3WblrF5HjkjNllWr02TDb%2BhhHaAexf8dLobJwXAkoIOW7gNaQY8DIHmfJh2Ms6Y%2Fy7B%2FEff3%2FqX2dNqXTulIgPRgf1tJpY6am2ayoqdAjf8B5ibJ5ZY9rmR%2FUiH7mT9xfQyKW0zqOs2Kd3rqWoGIlJ%2B5pj6mFep%2FvggdAYJV0oqm6in0vMVUYeK2HqWm1%2FhEbc33qmENDMFuircTPpd6bcNPcqLCh6Cfpto6Jep5TwB3BhRQuBecqGm5qKqCBI9Uku%2B23PUEXi%2BOefPZkRtopoXuQeCnIba9oOTrgsjc%2Fe0xJrThDNtfDPl9qadqhhJbC7sowanfRi15fI34G6jHl%2Bvshh03upGuxakKp8Ev5fc6odvJ1%2Bg%2F5GKlIg6fdm%2Fb%2BZTyMFVioU4JAOjQvFKI2DY7SX7gPq2x%2BVe%2B8XwesCEdJQPm%2B0EMKIMj6wYrYo0IfaOdFLqLgpxnHB1z4SvdYe3wU2Ujku9QRPDD06UtUt5Fm6Wz9BIGXJgkc9ctHa%2BeUVuP8pDSdCM860dlDWqrpI7arIZc%2B2015q5xZ%2Fh%2B2ouj0XUZRaRMLbQ2sQGOqUB5CAXDQttXIDlyXj191sqQ%2FTbh33WRwYQy22lBbuCh5NRqfrdmOGFwbkmPa4CGh9aFU9AX4S8amA1CDmM5DNuGS%2FEiRoP67l2OB3jplo7CXRnFbXqT2sz6yAtksJYtUTPUf6LHeFM4G2uPda6fHuJhX%2F3dhbZy4OFZmb1ytocAvhmPq3ei7uJelHS4y8KQ8GyPCT4XAToZUOi4uc8v0K3tb77OIm%2B&X-Amz-Signature=7417e9e846de82c459e500889450a0f923956990922347fe41ea87d2d15e813a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662FQOXDY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCal3wXAAmRveiK8mDLsY0fhrrjQ4CgoS19XRNlz7PJTgIgPeHbRbOFWkE1miAy6jr3wxnJN%2F%2B1cRvCmLjmWGuB1EAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMlvzbAmz%2FlgYoVmyrcAxsr9jlRT9mB%2F2YWkIIUqiY7BdsfSqyK78fy%2Be2IcYIZHygEc7Oi2T6IJX3aYnlU%2BDD3I7rwy3WblrF5HjkjNllWr02TDb%2BhhHaAexf8dLobJwXAkoIOW7gNaQY8DIHmfJh2Ms6Y%2Fy7B%2FEff3%2FqX2dNqXTulIgPRgf1tJpY6am2ayoqdAjf8B5ibJ5ZY9rmR%2FUiH7mT9xfQyKW0zqOs2Kd3rqWoGIlJ%2B5pj6mFep%2FvggdAYJV0oqm6in0vMVUYeK2HqWm1%2FhEbc33qmENDMFuircTPpd6bcNPcqLCh6Cfpto6Jep5TwB3BhRQuBecqGm5qKqCBI9Uku%2B23PUEXi%2BOefPZkRtopoXuQeCnIba9oOTrgsjc%2Fe0xJrThDNtfDPl9qadqhhJbC7sowanfRi15fI34G6jHl%2Bvshh03upGuxakKp8Ev5fc6odvJ1%2Bg%2F5GKlIg6fdm%2Fb%2BZTyMFVioU4JAOjQvFKI2DY7SX7gPq2x%2BVe%2B8XwesCEdJQPm%2B0EMKIMj6wYrYo0IfaOdFLqLgpxnHB1z4SvdYe3wU2Ujku9QRPDD06UtUt5Fm6Wz9BIGXJgkc9ctHa%2BeUVuP8pDSdCM860dlDWqrpI7arIZc%2B2015q5xZ%2Fh%2B2ouj0XUZRaRMLbQ2sQGOqUB5CAXDQttXIDlyXj191sqQ%2FTbh33WRwYQy22lBbuCh5NRqfrdmOGFwbkmPa4CGh9aFU9AX4S8amA1CDmM5DNuGS%2FEiRoP67l2OB3jplo7CXRnFbXqT2sz6yAtksJYtUTPUf6LHeFM4G2uPda6fHuJhX%2F3dhbZy4OFZmb1ytocAvhmPq3ei7uJelHS4y8KQ8GyPCT4XAToZUOi4uc8v0K3tb77OIm%2B&X-Amz-Signature=7c6bf72718a16df078bdcc8beb02d9a80c3dff987f0cd16d697f9344da37a44e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
