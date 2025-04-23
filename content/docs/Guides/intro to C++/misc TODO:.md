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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAQWDFMY%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDg6GktApPdcZscsfcVeH%2F6UUelbj3IWxwahHVGetEcbAiEAkus9t959OIQFW%2BvGqa8XGL4C0sDyRtRPgBT4Ndp3T%2BAqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDri0dPd4wU%2FwuopfCrcAyaOwFAhvFOwLYaPJTXpywjaiUPSLcde3tkpoJJqWqIPdKJmMg03i0FK6XmCUl24T2eDGURlbrj38S30sXYYmJ7jo2b0zh9WDkjlJEH%2Fj6nIoZeFB43c5rBtJU1ZpLfgCNVUxJMRpWpwC41EkDweIZcQAsPj5fKzjDxCl1LW2nhWqFLSXevMRtHqzAjPx7I8EWYy8oAQtM5x6H18Myp0Y%2B7jpEv%2B%2FFKx3%2B%2B7QIV6Ey9dw%2Fm3Lkd3JRipJz9B%2Fz6IvLwifvoAArQ1SOFgnzEZpvoC5xGAay%2FEpMVCvuEP7xid7GWiwuTtpF871Y5uoirQhJumK6JgbRkKBWtAT64M1tewwjNPjsRV%2F5dcTimXVJFUy8%2FdV5e0Gb4dcyNkYaOLefyOwuM%2FLSEMXkdmJksZtTdZ%2Bqe8WHY%2FZ1kaaLfli5jje7DKaSchF%2BSkZdOFPhUVwo0Dx8mYl0%2FKXx8xgYmDwuhMorhYH5QCgJzHKNGcPekCA1pSz64OWGeVsLWd%2FSs2W%2B542YVuYwoEhoulq5tlUoVCuF%2BXK65h1QEgiFlW63fFzflkv2EqW740zWWUewvkw%2BWpd%2BfV%2B3Leohd7476LszQPymI%2BSUYTPCVdKyLmZwr3pQoVpQbHQG20%2FTD0MPafo8AGOqUBMP7j3snRkiW%2BJD1KGUedDL2ZF7WNlJWZ4DRgszlPyVge%2FwysnTgTAYHmUPv7GYYVnj59alz0%2BSZNJziClrD26wCS4Q%2B5oWvuo%2BltDsJICi4rov3JZEJLAxvil79L2SDt171A8CCUSbAspRz6Fn0AmDryd6FJ5qF9xA4fb375rYMOrIo0882hR0gOz1qLqJfphcVTz3eITS%2FSYqs1Ah%2BPPxeWwIOK&X-Amz-Signature=a7789c591a18fc9b93304b91db72c270558350dbb65e5624dd892a1efd18336d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAQWDFMY%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDg6GktApPdcZscsfcVeH%2F6UUelbj3IWxwahHVGetEcbAiEAkus9t959OIQFW%2BvGqa8XGL4C0sDyRtRPgBT4Ndp3T%2BAqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDri0dPd4wU%2FwuopfCrcAyaOwFAhvFOwLYaPJTXpywjaiUPSLcde3tkpoJJqWqIPdKJmMg03i0FK6XmCUl24T2eDGURlbrj38S30sXYYmJ7jo2b0zh9WDkjlJEH%2Fj6nIoZeFB43c5rBtJU1ZpLfgCNVUxJMRpWpwC41EkDweIZcQAsPj5fKzjDxCl1LW2nhWqFLSXevMRtHqzAjPx7I8EWYy8oAQtM5x6H18Myp0Y%2B7jpEv%2B%2FFKx3%2B%2B7QIV6Ey9dw%2Fm3Lkd3JRipJz9B%2Fz6IvLwifvoAArQ1SOFgnzEZpvoC5xGAay%2FEpMVCvuEP7xid7GWiwuTtpF871Y5uoirQhJumK6JgbRkKBWtAT64M1tewwjNPjsRV%2F5dcTimXVJFUy8%2FdV5e0Gb4dcyNkYaOLefyOwuM%2FLSEMXkdmJksZtTdZ%2Bqe8WHY%2FZ1kaaLfli5jje7DKaSchF%2BSkZdOFPhUVwo0Dx8mYl0%2FKXx8xgYmDwuhMorhYH5QCgJzHKNGcPekCA1pSz64OWGeVsLWd%2FSs2W%2B542YVuYwoEhoulq5tlUoVCuF%2BXK65h1QEgiFlW63fFzflkv2EqW740zWWUewvkw%2BWpd%2BfV%2B3Leohd7476LszQPymI%2BSUYTPCVdKyLmZwr3pQoVpQbHQG20%2FTD0MPafo8AGOqUBMP7j3snRkiW%2BJD1KGUedDL2ZF7WNlJWZ4DRgszlPyVge%2FwysnTgTAYHmUPv7GYYVnj59alz0%2BSZNJziClrD26wCS4Q%2B5oWvuo%2BltDsJICi4rov3JZEJLAxvil79L2SDt171A8CCUSbAspRz6Fn0AmDryd6FJ5qF9xA4fb375rYMOrIo0882hR0gOz1qLqJfphcVTz3eITS%2FSYqs1Ah%2BPPxeWwIOK&X-Amz-Signature=73eaa2dc537ed9a83c483f3a6ddfbbe945664ab504a23972c91ff9b234c8e0fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
