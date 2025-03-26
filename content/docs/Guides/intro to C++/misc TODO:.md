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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3QM7BH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFqffNmH1DR3ahkm%2F6%2BCbUeB5szMOYh6Bf3jDfHwHczQIgKZ1mpm6kf3Jpqu6C2aTLPT%2BxiQeW80Ovk6hVHa3qkO4q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIynN8cLOqD451j0QCrcA4W7YFEUhdBK1FKDZ5pKrp4Mrv51HCo%2FlOICClzYLIOZbqw9x%2F7T27cs%2FOx2psJ6%2Byf4JB9oog22Sw44ANNpJ7KNpSULQUBeWWslU4J9kmc%2BkOes7IPpg%2B9HLGSuhj7GLv4O49WsnRkmovkIHSfhLbHJt3fkvMMaYbHMXTFfkJFZjp2vosftm%2FcUbkNkL7SsccZ%2F1ICeXkWbi8F0BaRmveigP1ZfaG4atcbnjt97vzmunDTHWLaXp992a8uDQf6jw4kc4uEEUqX7iIUkL%2FckJmeicvtv1w0%2B64uUS9CZLZLX2G9IIfJ%2Fe23XpmxuYry2pgbMOlocmXlECuxxp8LcgZhAafISXxOzvnj2%2BOZQnJl9dSMDLNJ7f8tIJ3z49oVOGv1Sm9%2FimzQy%2FQAF%2FcS0l3%2BLg9d3A1dJUEVZ%2BjO%2Bt7jsvC3AwOt%2Fh7kSUx0s38%2B61QoBg1kXtAONpGbmxVis2zygnzDQlQWl5ho%2Feys6ic7SQVWMJRtIpfxl8pqWTT08ftUQmFjd6HjwiF9pPhkv3Sf%2FFQIHRsaFe%2BXP3W6tpBFNVTSlmPeDSYcnp7mFH9fRyI6uN3WxIMM37nrnHnFxZBanEAKxzsv16CrKlWY9K2Zc5a0qvxP60Ncdh10WMN6tjr8GOqUBgL7QlRYSYCD2kYa2SyJAbR%2F%2FZ1btlDFWQG2opJ890d0a7vXarqU0bbdqOYCN0W%2F3Z05iWf98UQPsHiPXM1lnUbsyBZ%2FpXZd5GizIOT28FK30vJVCdNn8GH7OmIWjgpzk5maIZ%2BEhdw6Xb124yB30L6mzXlyjX1fMiVXHk2d8Pgkdeq4eHIlhAdIcb%2F5HuFnkqIQWj56%2FYB7BtPRrfTjU%2FaWi9S4C&X-Amz-Signature=1853fb48612f81fa2480557ae59b9a8838222922f15b7b5ca1a726c796fecf1c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3QM7BH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFqffNmH1DR3ahkm%2F6%2BCbUeB5szMOYh6Bf3jDfHwHczQIgKZ1mpm6kf3Jpqu6C2aTLPT%2BxiQeW80Ovk6hVHa3qkO4q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIynN8cLOqD451j0QCrcA4W7YFEUhdBK1FKDZ5pKrp4Mrv51HCo%2FlOICClzYLIOZbqw9x%2F7T27cs%2FOx2psJ6%2Byf4JB9oog22Sw44ANNpJ7KNpSULQUBeWWslU4J9kmc%2BkOes7IPpg%2B9HLGSuhj7GLv4O49WsnRkmovkIHSfhLbHJt3fkvMMaYbHMXTFfkJFZjp2vosftm%2FcUbkNkL7SsccZ%2F1ICeXkWbi8F0BaRmveigP1ZfaG4atcbnjt97vzmunDTHWLaXp992a8uDQf6jw4kc4uEEUqX7iIUkL%2FckJmeicvtv1w0%2B64uUS9CZLZLX2G9IIfJ%2Fe23XpmxuYry2pgbMOlocmXlECuxxp8LcgZhAafISXxOzvnj2%2BOZQnJl9dSMDLNJ7f8tIJ3z49oVOGv1Sm9%2FimzQy%2FQAF%2FcS0l3%2BLg9d3A1dJUEVZ%2BjO%2Bt7jsvC3AwOt%2Fh7kSUx0s38%2B61QoBg1kXtAONpGbmxVis2zygnzDQlQWl5ho%2Feys6ic7SQVWMJRtIpfxl8pqWTT08ftUQmFjd6HjwiF9pPhkv3Sf%2FFQIHRsaFe%2BXP3W6tpBFNVTSlmPeDSYcnp7mFH9fRyI6uN3WxIMM37nrnHnFxZBanEAKxzsv16CrKlWY9K2Zc5a0qvxP60Ncdh10WMN6tjr8GOqUBgL7QlRYSYCD2kYa2SyJAbR%2F%2FZ1btlDFWQG2opJ890d0a7vXarqU0bbdqOYCN0W%2F3Z05iWf98UQPsHiPXM1lnUbsyBZ%2FpXZd5GizIOT28FK30vJVCdNn8GH7OmIWjgpzk5maIZ%2BEhdw6Xb124yB30L6mzXlyjX1fMiVXHk2d8Pgkdeq4eHIlhAdIcb%2F5HuFnkqIQWj56%2FYB7BtPRrfTjU%2FaWi9S4C&X-Amz-Signature=55018259d34c00ca0293c9922432ee91ef2c5c034bbe924307ee4d454482aea7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
