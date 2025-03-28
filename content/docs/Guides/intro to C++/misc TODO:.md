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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OY6SBDT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgHp6thMetnS45B7xJHWqKng44wlUPla3TBx95Ta2QowIhAKt86snXatpX2DQAQiNQPz5GyIsyo224LYPfF8WCT7ynKv8DCGUQABoMNjM3NDIzMTgzODA1IgwzBH%2B9IVK74J9geKgq3AObvcKcgdJaSNy%2BAYUe0fjjcTvDsqpdiTh3upCCVTL%2Be8SmliKq1tBoxY9MuFdJ%2FGkB%2BteVUx4I3LtMTUZOFDNNitsZKRQvDwdo5eA4QUTBHDEbYaxthJ6psaMDCu26UldzBlHSXCID7PadXGiG7ApFE5OwgOAsdo6%2F5z53fjDzlWZMPUd2BhdHmLrfobjauIYKLAwUT6oOrB5SSAvuzKSabO%2FwFsMBnexTl%2BAy5MyznCqqbBWaOdjvaBUTP2YmpWvTfWBiUgJtMo4prmoIaF1amPidZDsGvEVj2Vyc5Bdcp2%2Bi%2FJhQ7W9xvM2gTJBU9BSHP62mshmSKveyTiAZOszz6qP6afv%2BEkKesgOdsFTpMyuAdPYH6s5coHT9VtaQxT4IQXSP1kL6coKIsMUBwGiJ0x3hK7Pih8rhHtfYmEw6O%2Fqo59MmtWtKotbNcBCrpJaLbrHEWyTB3cUDwVpPK51UQin17z2WwpWUDvwt1gyGTxodCkbveggCdBQgayOpQC9Z8OiPd1TiAtztvKx3RxhvZKDPa67TTeW5rQCbuwgkYqlNRrPDUue3xpteLKr6IbX7xNy2vubbP%2F91Jpywf%2FpQDwTP5o9HwU2AcxVVrCK4WL2wmFwl71nAxR%2BrZTCk9Ju%2FBjqkAcnEwXz6TtR4KuqFic6P21wEVa60YjbmJNNUbF1JmYkO5UW69ri7pIyK005Aezp0d3pkHcMc6zVeKp5XPKpMXyw3SPgGGT%2BlfOv3r3%2Fr5ZE9%2FSmdIK3uireO%2FvPckDPaD6jXS3xLfe7SAWqyS%2BSyWG3S6dJ4Dh8MXHRwaded%2BYc3kWTjyB4IoVqe%2FH20TVRrFRc3eQmZuYei%2F3%2B7VbCTcnBH2q%2Bg&X-Amz-Signature=8bf17549cb33fc1076657b1bd334cb7ec62ebeacb5bdadd9b919ddafd834d047&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OY6SBDT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgHp6thMetnS45B7xJHWqKng44wlUPla3TBx95Ta2QowIhAKt86snXatpX2DQAQiNQPz5GyIsyo224LYPfF8WCT7ynKv8DCGUQABoMNjM3NDIzMTgzODA1IgwzBH%2B9IVK74J9geKgq3AObvcKcgdJaSNy%2BAYUe0fjjcTvDsqpdiTh3upCCVTL%2Be8SmliKq1tBoxY9MuFdJ%2FGkB%2BteVUx4I3LtMTUZOFDNNitsZKRQvDwdo5eA4QUTBHDEbYaxthJ6psaMDCu26UldzBlHSXCID7PadXGiG7ApFE5OwgOAsdo6%2F5z53fjDzlWZMPUd2BhdHmLrfobjauIYKLAwUT6oOrB5SSAvuzKSabO%2FwFsMBnexTl%2BAy5MyznCqqbBWaOdjvaBUTP2YmpWvTfWBiUgJtMo4prmoIaF1amPidZDsGvEVj2Vyc5Bdcp2%2Bi%2FJhQ7W9xvM2gTJBU9BSHP62mshmSKveyTiAZOszz6qP6afv%2BEkKesgOdsFTpMyuAdPYH6s5coHT9VtaQxT4IQXSP1kL6coKIsMUBwGiJ0x3hK7Pih8rhHtfYmEw6O%2Fqo59MmtWtKotbNcBCrpJaLbrHEWyTB3cUDwVpPK51UQin17z2WwpWUDvwt1gyGTxodCkbveggCdBQgayOpQC9Z8OiPd1TiAtztvKx3RxhvZKDPa67TTeW5rQCbuwgkYqlNRrPDUue3xpteLKr6IbX7xNy2vubbP%2F91Jpywf%2FpQDwTP5o9HwU2AcxVVrCK4WL2wmFwl71nAxR%2BrZTCk9Ju%2FBjqkAcnEwXz6TtR4KuqFic6P21wEVa60YjbmJNNUbF1JmYkO5UW69ri7pIyK005Aezp0d3pkHcMc6zVeKp5XPKpMXyw3SPgGGT%2BlfOv3r3%2Fr5ZE9%2FSmdIK3uireO%2FvPckDPaD6jXS3xLfe7SAWqyS%2BSyWG3S6dJ4Dh8MXHRwaded%2BYc3kWTjyB4IoVqe%2FH20TVRrFRc3eQmZuYei%2F3%2B7VbCTcnBH2q%2Bg&X-Amz-Signature=850d9f57376d4cd6541d8844e04e75666c1ca9ddecc75a04153c8194af4a0227&X-Amz-SignedHeaders=host&x-id=GetObject)

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
