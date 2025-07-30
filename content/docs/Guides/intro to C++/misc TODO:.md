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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNP7ATSU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAtyFbeJb84hoHDwkYA4uqN2qzAJ4omzz5hBzeA6IaiAiEA90EGUgulRbvWN7BujednslO5UB4EEWAox6xHlDd1u1QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCz0pPoMclhQgyc%2FZCrcAwjYV%2FX%2B24mFgDEYcPaqHqCcv9u%2Bg2LtCnb3Kp6eoRD5YxJ1bpbKS8qM44DHLOEXs9rl1Tc0feqWfSUEeOdYpOG5AabfmEqMNX0sVni9f9eT4Hf1J9908f4lX38n2EhUepmv8PuXPxw78svbGNpDXfdW6%2B5yGdDNzXHr7JtN3qS0zaGuwyiugG4nZoeIiLSjYLKZPzKoRdwpsxPdNxGikk2iXnFF%2B9j7Z0OyBNt078%2BRhs4KFPBz%2B0Qy8jV0ndeFexIzwAVBzDP91HJmZPL229m47uYdBmV22tS8NWkEHhMUlVlP209oJoMoacoLKiMlafGzxtyp4yXiQV%2BmZPw0uMVB4qlgRRE85JDGouxpI%2BZwmR7MTYidUKRcWIX7JD7tCzL93UxKPV0Fmd1Cphi6rqc9Ko04KZXCPIat09tboVLCigyAEM%2F2qk1FJ%2FrS1Hj%2FwwTssTKd34IhGFhAzxjnpMVijpDUdZM3cykw%2BOqZdtTSbPgQRcHfOxYmPAqgRSMX5zUlfBtLywfKvQc4yVcRGIbQMIVcU7XVD29kDLGywo0Spl0XjkzlkeRsqUmfkU%2BAFo5id4h6HMJN3XjauQjFq1cDnR3tOfAOa960vz3iO%2F4XyNJOaEmpA4Z1KGKUMLzypcQGOqUBUSiL1Y3iRB6MCP80bxCNvZ0XzPJsZjiJxOZy0xLOl8WoptKaYtyumRnKr966rGALuVe3at%2FbipxzFEcMLBN6H3FhX7Fiv55dGqErTjPxu115PQsmsfEBbv%2F%2FayT0fkT8zeO8%2BzS0RvOCDdSG5A%2FUhazHJFDiYMb83JdSi3pbnsB4%2FXyjdrL480rDj1sE45Mi2JVlf%2Fn5uGJPsJxxPbmHMHxP2KDq&X-Amz-Signature=3e1ff6448cce0b4b5097d395d141be17292dbfd5caf0092ebed1a8f0ba7c2342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNP7ATSU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAtyFbeJb84hoHDwkYA4uqN2qzAJ4omzz5hBzeA6IaiAiEA90EGUgulRbvWN7BujednslO5UB4EEWAox6xHlDd1u1QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCz0pPoMclhQgyc%2FZCrcAwjYV%2FX%2B24mFgDEYcPaqHqCcv9u%2Bg2LtCnb3Kp6eoRD5YxJ1bpbKS8qM44DHLOEXs9rl1Tc0feqWfSUEeOdYpOG5AabfmEqMNX0sVni9f9eT4Hf1J9908f4lX38n2EhUepmv8PuXPxw78svbGNpDXfdW6%2B5yGdDNzXHr7JtN3qS0zaGuwyiugG4nZoeIiLSjYLKZPzKoRdwpsxPdNxGikk2iXnFF%2B9j7Z0OyBNt078%2BRhs4KFPBz%2B0Qy8jV0ndeFexIzwAVBzDP91HJmZPL229m47uYdBmV22tS8NWkEHhMUlVlP209oJoMoacoLKiMlafGzxtyp4yXiQV%2BmZPw0uMVB4qlgRRE85JDGouxpI%2BZwmR7MTYidUKRcWIX7JD7tCzL93UxKPV0Fmd1Cphi6rqc9Ko04KZXCPIat09tboVLCigyAEM%2F2qk1FJ%2FrS1Hj%2FwwTssTKd34IhGFhAzxjnpMVijpDUdZM3cykw%2BOqZdtTSbPgQRcHfOxYmPAqgRSMX5zUlfBtLywfKvQc4yVcRGIbQMIVcU7XVD29kDLGywo0Spl0XjkzlkeRsqUmfkU%2BAFo5id4h6HMJN3XjauQjFq1cDnR3tOfAOa960vz3iO%2F4XyNJOaEmpA4Z1KGKUMLzypcQGOqUBUSiL1Y3iRB6MCP80bxCNvZ0XzPJsZjiJxOZy0xLOl8WoptKaYtyumRnKr966rGALuVe3at%2FbipxzFEcMLBN6H3FhX7Fiv55dGqErTjPxu115PQsmsfEBbv%2F%2FayT0fkT8zeO8%2BzS0RvOCDdSG5A%2FUhazHJFDiYMb83JdSi3pbnsB4%2FXyjdrL480rDj1sE45Mi2JVlf%2Fn5uGJPsJxxPbmHMHxP2KDq&X-Amz-Signature=d81a2755b426fb9acea5ed7efff4f0f325a05403225bec88e118c5bb99d0aad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
