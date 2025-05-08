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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMUBL4X%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkYIkyLjwwkywzK1vwfxdWEuw0bRPFuvq7IYiaSQrySwIhAI5yv%2B8J8%2Bjv5Z8s3Nc2NvFsWTltnGHPLe5FLB%2FK1pECKv8DCHIQABoMNjM3NDIzMTgzODA1IgwA81FRzXcp0vYZd04q3AODbcFbrylgYR3fKUn9Q67ZdRplu8ZOvIfrr2LsLPchjW8C7pwv8EiDQ6EuLXniZcHH02Owrg6vNVKAq4W0SvS9Qz363%2BqOW67MSl8ea0j21aTWrZvUd4WDbhad2jF3ft1Vf0dDMva6GcudrQAzoQikrJ1CDjHsjSL8kzp4Vt1Tt8rVtSD2fNZppqwWXSXI17jBC%2BSj2i%2BMsnKqvSwePG%2FxUlSu2ym%2Bs12tRWU9c%2Fb%2FZa34WXGohzp2BGPjKZ1yqFpFbyNgO%2FCUNCxhe9CsaE76Ak8spBNVdlpekVNapORv6Xa3SFmryJ76yhieMNPVspw9baY%2FvmhrWQ7w4DMsA1BbXxYVbGbcuhmwsOo7dAjKlcqfS71iIDcwxqGFXA1SR9iSG3D%2BCzr%2FXCx%2B29Y9cv6y0B1Y%2BIsQEFEi3JGZrrC%2FX6YccQVlPdCAnm5ArAdR3TLo2zNnMdUInfXnKqyRJTRiAk9k4RR6E5JS%2BmSmV4bCEQdF3ylGvGRZhqoTnf0F5MZT0zLWrHwdY0VRBX0uNa1KaOjTrplfxfpSfX9uxqCf1gkLeYJABAqg7R4XI4GUz7IE3OhGBXpIzjM2X6%2B9MdQrPsY8%2FEcjGV7iGFCa%2BglRHkW%2Fni6KEj7reZ4RGzD83%2FHABjqkAUt%2BY1Ddu9blAJXiGqRVJRZqWpwEF2EonLemOsLARlGk6RAfn84Q68%2FK1IWC1wnDdH1gDeRLp1dqqNQPz%2B%2BtJ1Ztu5tK4e2UgqN7K%2Bub9kDbX6RIMfDbOxtMBANED%2BQSOtWMWJcR7gJOi0FsZ04LrJr32XU38tUHonRU%2BTOrzsyOa7EZ7J%2B6zCaIxgN0%2F3UdOv9PjdYWyMBMuescRb9Ov8W8j90Q&X-Amz-Signature=282b365ed9b3a94cb0ecc7a25fc34fce4655f75f0f1d4a4307c133f21b6d350c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMUBL4X%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkYIkyLjwwkywzK1vwfxdWEuw0bRPFuvq7IYiaSQrySwIhAI5yv%2B8J8%2Bjv5Z8s3Nc2NvFsWTltnGHPLe5FLB%2FK1pECKv8DCHIQABoMNjM3NDIzMTgzODA1IgwA81FRzXcp0vYZd04q3AODbcFbrylgYR3fKUn9Q67ZdRplu8ZOvIfrr2LsLPchjW8C7pwv8EiDQ6EuLXniZcHH02Owrg6vNVKAq4W0SvS9Qz363%2BqOW67MSl8ea0j21aTWrZvUd4WDbhad2jF3ft1Vf0dDMva6GcudrQAzoQikrJ1CDjHsjSL8kzp4Vt1Tt8rVtSD2fNZppqwWXSXI17jBC%2BSj2i%2BMsnKqvSwePG%2FxUlSu2ym%2Bs12tRWU9c%2Fb%2FZa34WXGohzp2BGPjKZ1yqFpFbyNgO%2FCUNCxhe9CsaE76Ak8spBNVdlpekVNapORv6Xa3SFmryJ76yhieMNPVspw9baY%2FvmhrWQ7w4DMsA1BbXxYVbGbcuhmwsOo7dAjKlcqfS71iIDcwxqGFXA1SR9iSG3D%2BCzr%2FXCx%2B29Y9cv6y0B1Y%2BIsQEFEi3JGZrrC%2FX6YccQVlPdCAnm5ArAdR3TLo2zNnMdUInfXnKqyRJTRiAk9k4RR6E5JS%2BmSmV4bCEQdF3ylGvGRZhqoTnf0F5MZT0zLWrHwdY0VRBX0uNa1KaOjTrplfxfpSfX9uxqCf1gkLeYJABAqg7R4XI4GUz7IE3OhGBXpIzjM2X6%2B9MdQrPsY8%2FEcjGV7iGFCa%2BglRHkW%2Fni6KEj7reZ4RGzD83%2FHABjqkAUt%2BY1Ddu9blAJXiGqRVJRZqWpwEF2EonLemOsLARlGk6RAfn84Q68%2FK1IWC1wnDdH1gDeRLp1dqqNQPz%2B%2BtJ1Ztu5tK4e2UgqN7K%2Bub9kDbX6RIMfDbOxtMBANED%2BQSOtWMWJcR7gJOi0FsZ04LrJr32XU38tUHonRU%2BTOrzsyOa7EZ7J%2B6zCaIxgN0%2F3UdOv9PjdYWyMBMuescRb9Ov8W8j90Q&X-Amz-Signature=0d1eac0759d02f84b163ecc469a050dde75b9ed26b786d0a2f08dfd60ccaad38&X-Amz-SignedHeaders=host&x-id=GetObject)

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
