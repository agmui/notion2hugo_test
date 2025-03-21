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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2M6AAF6%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDN%2FBi%2Bj2ll8VrEl1C5nTVLGjJYnanxKBuBefs0vCGaTAIgdMd%2BWd1yoqVf0HD1yAzp60G1hzyMSZEzRAl%2Fry%2BUfY0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8avwsCTDE9gA%2B8SCrcA565dlYI5HCGDjG58nDP3wz5kMm3V7NuGw7K1UCSy9zCH%2BCh188I143degeosfvZJPlqIZNRv%2FGZRwiW6atWThaz3zMdFdQ7IBMsgtd9FpgGDD5TrXzrdM1QS3J6TCeSSpxDTwGfm0nji2nZGkm8RQ5lLxCdItD6hzLBl2OklyLs1jH3%2FvLeF1UnTalnVxXpo7TaNJz8gmR5mKJ2ieL2PMruinXweRPM3R1yraH5Rx6nf7IWjdVCQmoSOdtSZRAT2ie6lyNrqzlBtTgpHp66Q25ufUKkpTVk4MiSRjL%2B9oT6g9gyEpKjQW9KGpiU97jFhMzb4UIdVuQO7xndhBdMXsUnLMbNdaLrsLkhrnEQyeII8oSWS2Y59KLCbKRYSlzv9ByYsegiZBC5%2FCFRgJsPGm0%2Bw1fA%2FlzjbyGx17K%2FRRutg%2FhiPIoyoLxvBHRKdcpn54f1XRGWwIuVr%2FHcYWBvCwEWUFUvhMhfGwur25GAOTIYKoyaE%2B6d3baehILhLWsgHV29JUZ5wa0GeYi3M0X9oEMQ7UJPyZBncQrfARiWr1NVIgtsGqLPMMlbDz1DtaB0x7fSBJWXNpEuJ3Lx4C47wKuorzvO8NOtJuq1ZXeiiOts%2B43OvK9z%2BGEzixC8MJ2Y9L4GOqUBgZllOSmddaUPf9kJO62%2FQ0LZZgrsGZnHZlFSmy878IvAqH43sRHYiK72M1TspGes0Nj%2BAEOjYO9Alqug2G%2B0aVA6AOMkrFtUCOqsO%2BDRevywV9Crml8%2FKMZUvKXBYwlF6CkW6qW2PmIZOs4IA5%2FKUgIWOsQ%2BKAshK5rLf4RCoaK3344F3l3aAX9gOtIBDmX%2BzrWWzp2ebk8uxkhe%2Fr98EWbqUIb9&X-Amz-Signature=d3f609123844c8ce4c3755e976cc21773c75d850555a58feea7ac29b29eebddb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2M6AAF6%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDN%2FBi%2Bj2ll8VrEl1C5nTVLGjJYnanxKBuBefs0vCGaTAIgdMd%2BWd1yoqVf0HD1yAzp60G1hzyMSZEzRAl%2Fry%2BUfY0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8avwsCTDE9gA%2B8SCrcA565dlYI5HCGDjG58nDP3wz5kMm3V7NuGw7K1UCSy9zCH%2BCh188I143degeosfvZJPlqIZNRv%2FGZRwiW6atWThaz3zMdFdQ7IBMsgtd9FpgGDD5TrXzrdM1QS3J6TCeSSpxDTwGfm0nji2nZGkm8RQ5lLxCdItD6hzLBl2OklyLs1jH3%2FvLeF1UnTalnVxXpo7TaNJz8gmR5mKJ2ieL2PMruinXweRPM3R1yraH5Rx6nf7IWjdVCQmoSOdtSZRAT2ie6lyNrqzlBtTgpHp66Q25ufUKkpTVk4MiSRjL%2B9oT6g9gyEpKjQW9KGpiU97jFhMzb4UIdVuQO7xndhBdMXsUnLMbNdaLrsLkhrnEQyeII8oSWS2Y59KLCbKRYSlzv9ByYsegiZBC5%2FCFRgJsPGm0%2Bw1fA%2FlzjbyGx17K%2FRRutg%2FhiPIoyoLxvBHRKdcpn54f1XRGWwIuVr%2FHcYWBvCwEWUFUvhMhfGwur25GAOTIYKoyaE%2B6d3baehILhLWsgHV29JUZ5wa0GeYi3M0X9oEMQ7UJPyZBncQrfARiWr1NVIgtsGqLPMMlbDz1DtaB0x7fSBJWXNpEuJ3Lx4C47wKuorzvO8NOtJuq1ZXeiiOts%2B43OvK9z%2BGEzixC8MJ2Y9L4GOqUBgZllOSmddaUPf9kJO62%2FQ0LZZgrsGZnHZlFSmy878IvAqH43sRHYiK72M1TspGes0Nj%2BAEOjYO9Alqug2G%2B0aVA6AOMkrFtUCOqsO%2BDRevywV9Crml8%2FKMZUvKXBYwlF6CkW6qW2PmIZOs4IA5%2FKUgIWOsQ%2BKAshK5rLf4RCoaK3344F3l3aAX9gOtIBDmX%2BzrWWzp2ebk8uxkhe%2Fr98EWbqUIb9&X-Amz-Signature=9815e2ec2b0376eb6b3b7fdde7a2dacdf3c368843edf35397027b643e0fd6d73&X-Amz-SignedHeaders=host&x-id=GetObject)

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
