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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUF25UDS%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIA%2Bw15NKGwqYAH2L425Ac2uxssWhD6QKwUooKEFuaofdAiEAzLPmH1Wfompa%2B4oe0EnjAd%2BgaoHUTyv7N5JzS4MemFAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDP7qYMEP8IkkkUGcaSrcA4b8T0UmoMfvhOpa7wAAXbWLXFtuVBA9%2FaeIB7u4KE5LavhvgccL21MDpCFH0bpdcoIbUHq25n8KMUQyKRk54qXe23JgjgbtJLPeVMA5N2xNJnyeMZQfHSTg%2BwpyOf0%2BnmB%2BcvVLGszqnhw%2BmvtVq1s7aSHt45CPUhZuP4LcRRK7UaDm5cPOfCO61tec2T5djzpjLPgGzwa%2B3TI49fXt6rAVi6dsaNHgtVz55augub7Tk2wnHTggflLUCWG6SsRDt25AkkQHyzF4saRyXwnM7im%2BUSacsXBM0KQoc2jQDoyGmk%2FKU6HCySl5PCR0HclU%2FEvisCAPfsj1PCFvPKxyZMJXfk8TDPCnFPJdS2U5JjxAZK4PqzLG%2BCoojhccZCb4gHQrkMAlHIm8T9baxfw1NAd8YLIZSAmQiHSNUgxk3KiCpiEyVAF53LA%2F%2Fn%2B8WeqmxhB01hjlanuC86Pn%2FLXasuoL0%2ByPk9oHoS%2BQP5CcFrYz3MDjM2LH2xrr8ymoi9QoI3gTdBMDqglsLgVDZNeN9WLBua9ikyK6ZOHP07U8JZ9WeFFWjKDUWlop0A%2BrmV%2FRWiY8hLu0dw%2FEqohAXR2CHPF1bKlcA16tykJglZRehjSfNM9ZEy19itUqngX%2FMOqC9L0GOqUBJa8UDOmL0LPDNqhFt%2FEeQhk3Iw7Jv5p7xcwDZcPDECAuC6W8tUN%2BgIzbXLC%2F%2B%2BfUaFr49LIpodCArhIyWv6gAZbrlBid3vyJ3jS6FYM%2B0sCxLJA9a87JxH3urFj9W6B279v9sryK226DhTEKCWqkXvVh8ar1na9TvWBws94EULiPwbPXGQC%2BpW6oI7evuRt7iEQmxyMNAC0zudcKegL0hrekz0LW&X-Amz-Signature=87cebfa705305f3abd5412d96f16cc678a4f937134ccba3c2500c60215ddb9f9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUF25UDS%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIA%2Bw15NKGwqYAH2L425Ac2uxssWhD6QKwUooKEFuaofdAiEAzLPmH1Wfompa%2B4oe0EnjAd%2BgaoHUTyv7N5JzS4MemFAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDP7qYMEP8IkkkUGcaSrcA4b8T0UmoMfvhOpa7wAAXbWLXFtuVBA9%2FaeIB7u4KE5LavhvgccL21MDpCFH0bpdcoIbUHq25n8KMUQyKRk54qXe23JgjgbtJLPeVMA5N2xNJnyeMZQfHSTg%2BwpyOf0%2BnmB%2BcvVLGszqnhw%2BmvtVq1s7aSHt45CPUhZuP4LcRRK7UaDm5cPOfCO61tec2T5djzpjLPgGzwa%2B3TI49fXt6rAVi6dsaNHgtVz55augub7Tk2wnHTggflLUCWG6SsRDt25AkkQHyzF4saRyXwnM7im%2BUSacsXBM0KQoc2jQDoyGmk%2FKU6HCySl5PCR0HclU%2FEvisCAPfsj1PCFvPKxyZMJXfk8TDPCnFPJdS2U5JjxAZK4PqzLG%2BCoojhccZCb4gHQrkMAlHIm8T9baxfw1NAd8YLIZSAmQiHSNUgxk3KiCpiEyVAF53LA%2F%2Fn%2B8WeqmxhB01hjlanuC86Pn%2FLXasuoL0%2ByPk9oHoS%2BQP5CcFrYz3MDjM2LH2xrr8ymoi9QoI3gTdBMDqglsLgVDZNeN9WLBua9ikyK6ZOHP07U8JZ9WeFFWjKDUWlop0A%2BrmV%2FRWiY8hLu0dw%2FEqohAXR2CHPF1bKlcA16tykJglZRehjSfNM9ZEy19itUqngX%2FMOqC9L0GOqUBJa8UDOmL0LPDNqhFt%2FEeQhk3Iw7Jv5p7xcwDZcPDECAuC6W8tUN%2BgIzbXLC%2F%2B%2BfUaFr49LIpodCArhIyWv6gAZbrlBid3vyJ3jS6FYM%2B0sCxLJA9a87JxH3urFj9W6B279v9sryK226DhTEKCWqkXvVh8ar1na9TvWBws94EULiPwbPXGQC%2BpW6oI7evuRt7iEQmxyMNAC0zudcKegL0hrekz0LW&X-Amz-Signature=2453a6dd9f6377bd4a395e312fb92e422c4d574329434fc580f822109504f8c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
