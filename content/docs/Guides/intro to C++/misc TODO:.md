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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3LKDTO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEn7MCnZlYVGiraz6Wm2PGAJcdNUOAi8XCn7B12bJJzzAiEAqEupwgQIzND7J1S0e479WrbZqGfmaouxNe%2BmiugJm%2FIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrwEdCz0ixAC8UnICrcAyEoaEa6NOGbXRNgJzJF63z5n62sj1s6R3IRyj1pz1YnyvdmtaMdMl7Z3%2FFdHBc89IVI4frpp1VT7nV5D3lF7vvwY0vPnziiPqKfBX%2BYUJXDAzyLXsxsm6yV%2Bx9A4JWEGgItZbPoHsRuyjfwmUJ7u4WMpeq1eQ8jHVSvUdFbDan1JrZZcBP9IdZ2wT6fEnZYSAmqrJbfmIf8dzd7B6Aa3e%2BSbZTQaLnNvXikdJnGOPcRwd%2FLmKhTpaRZlfuOAC3OsUDRMGXSAE64AMxM86RzezK49RX6GGSOhLK1T1CPyDK48oT5mBKrTZhJdPMndmRiRLh%2FYFtlizCi178cgdqF%2FkQ2xekEjsyQqWyIJZ25Qh2CcUUmyRsiZgCRBH9B2x16RhZ2kxFg4bsIEBxuvzoFvYCXRhv6XVokLCh7%2FvJhXd4NshvsUy8nTG7in9ccycSYZSxR%2BDUAjGXVYN5wxFjHXrxIVmrwt5pm7QjWp8%2F5O1c3QPBe4zMSKXJBLkyr5xiCShViVxpcGiHGzKLEbZgytaLZla34ytFWmBYRT%2BuiXPWH%2BWRu3kRgU83q%2BPJ6a3OdvDXvxS1uBDTqHEBodbMOxobpVGedIa1U6C7V1fD25sWwBVhug3AxaDS24sCzMLT1mcAGOqUBednEpjxsvkRXQnbz4Ttzkw2bFptb0CsfELdCYUUXY5b29ElzYZuknyiTvaPdNypxOSBUgK0kaBCv1WlxM0yUqAPJTrgd53sAL3%2BzdyLvLQ5p9zykSTnd3lULQ7dako7aGn%2FNrokOJucCRNFtkz5hH829%2Bc46Hs7YSoc6arQuN3gfiqNkWCkVrjYNyl%2B%2Fui4GdtBTJfo%2FpN00EQZDHOO7y7Z9whlr&X-Amz-Signature=7938161de27ff6ed018e43feb6811888f9a6ea1111ca1e5bd6352fa965b42deb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3LKDTO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEn7MCnZlYVGiraz6Wm2PGAJcdNUOAi8XCn7B12bJJzzAiEAqEupwgQIzND7J1S0e479WrbZqGfmaouxNe%2BmiugJm%2FIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrwEdCz0ixAC8UnICrcAyEoaEa6NOGbXRNgJzJF63z5n62sj1s6R3IRyj1pz1YnyvdmtaMdMl7Z3%2FFdHBc89IVI4frpp1VT7nV5D3lF7vvwY0vPnziiPqKfBX%2BYUJXDAzyLXsxsm6yV%2Bx9A4JWEGgItZbPoHsRuyjfwmUJ7u4WMpeq1eQ8jHVSvUdFbDan1JrZZcBP9IdZ2wT6fEnZYSAmqrJbfmIf8dzd7B6Aa3e%2BSbZTQaLnNvXikdJnGOPcRwd%2FLmKhTpaRZlfuOAC3OsUDRMGXSAE64AMxM86RzezK49RX6GGSOhLK1T1CPyDK48oT5mBKrTZhJdPMndmRiRLh%2FYFtlizCi178cgdqF%2FkQ2xekEjsyQqWyIJZ25Qh2CcUUmyRsiZgCRBH9B2x16RhZ2kxFg4bsIEBxuvzoFvYCXRhv6XVokLCh7%2FvJhXd4NshvsUy8nTG7in9ccycSYZSxR%2BDUAjGXVYN5wxFjHXrxIVmrwt5pm7QjWp8%2F5O1c3QPBe4zMSKXJBLkyr5xiCShViVxpcGiHGzKLEbZgytaLZla34ytFWmBYRT%2BuiXPWH%2BWRu3kRgU83q%2BPJ6a3OdvDXvxS1uBDTqHEBodbMOxobpVGedIa1U6C7V1fD25sWwBVhug3AxaDS24sCzMLT1mcAGOqUBednEpjxsvkRXQnbz4Ttzkw2bFptb0CsfELdCYUUXY5b29ElzYZuknyiTvaPdNypxOSBUgK0kaBCv1WlxM0yUqAPJTrgd53sAL3%2BzdyLvLQ5p9zykSTnd3lULQ7dako7aGn%2FNrokOJucCRNFtkz5hH829%2Bc46Hs7YSoc6arQuN3gfiqNkWCkVrjYNyl%2B%2Fui4GdtBTJfo%2FpN00EQZDHOO7y7Z9whlr&X-Amz-Signature=c26c179c9f48ce86c27117ef4d4193a6bbc1f098f9326027f2964215f081e76d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
