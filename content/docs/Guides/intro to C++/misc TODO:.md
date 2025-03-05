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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUKYEALX%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyfzGFY1n5uqttxF4lT1uD5JHLA7pbTJORUAZUDJBjnQIgGKaDTxnOxwInxZPBXCQEQw1BOJeJiYoFyv0ktoq7DsUq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEFPpISeL4USnmZVkSrcA5%2BHf%2FPjcrOr44CKPO8Ar%2FE3pkvExKTUva09h%2F0KxZS%2FtZZm1asZdZ3fKTPbsfIXSExtLE0itSWp0wgsz6L3jPcg%2BktclmPI%2FpdECniZkAUvpE%2FJmH5IGkp0rvvEfgSTTAWhC4oXUKVuNXZ1dumzNal%2FkNzefZKKaQueb%2F4RaQJ3dg0PIoJCiXS1KTxB0kl28EUQZUktysxmw3zygZHs%2FRLnLHyEWfObYWEc%2BhUl99GOSjY%2B24ql%2B27spqsb16jdo81qr3i6k%2By7u%2F1auXj%2Ba6TqG%2B93U7QJJI70NigWyCOts3rWVWH%2Fh%2Bbqu8f2ZZ17Gyzwy%2FYR%2FDNkZOm8SKoap1DhrWy3dFf5luFzx%2FhtRyPepwTkqzqNZcHF7fc4nJFoXgDu8J6WuZCd7LcUvdnUpu6H%2BKGOFJP4Skvt%2BJbxudEt%2BlMQ%2BoFeTZvA7sPdqCUFSHNTPiqTkjJfSAEFhAzeX5%2BDs3LdXZ4ZeDbYi0RvlfWGxLVG0TxZ59SuldpJnRt2l118uTltJMb1w%2FMEp2sWTkWsnyG0gZ9e%2BCjoJH5cdNBt8kICBY9glpVYeami%2BQbB0Sousd8m5udh3L1OcksF6otbswUM0cH16%2FekJWjZIwcLXEqLrRzzUFyuQlSnMMq3ob4GOqUBd%2FYqX0Ttm0Xin5vanza8vr1M3YN5BZoDN5nHBQdDDJwxWDKY7c%2BaLpa044318JMwXOGYZ9DEPmyneWE2OJj%2B9IwyfnaiRkXXZtwfmsufnfrxLfBngjcwAahjESNBljXl3PGZd%2BtYBg7L7uF8ahJA7mNG%2BviUSIULC36lHklsLsPCIuZCvjd13XTUb6ejCYe%2F5tPxpDydsk6scqRih7%2BbJauYKhGa&X-Amz-Signature=12db0fcab61eb2c98c0a71e17759c3d2f4c7085b63ea46906d3d60ef7edc1b6e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUKYEALX%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyfzGFY1n5uqttxF4lT1uD5JHLA7pbTJORUAZUDJBjnQIgGKaDTxnOxwInxZPBXCQEQw1BOJeJiYoFyv0ktoq7DsUq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEFPpISeL4USnmZVkSrcA5%2BHf%2FPjcrOr44CKPO8Ar%2FE3pkvExKTUva09h%2F0KxZS%2FtZZm1asZdZ3fKTPbsfIXSExtLE0itSWp0wgsz6L3jPcg%2BktclmPI%2FpdECniZkAUvpE%2FJmH5IGkp0rvvEfgSTTAWhC4oXUKVuNXZ1dumzNal%2FkNzefZKKaQueb%2F4RaQJ3dg0PIoJCiXS1KTxB0kl28EUQZUktysxmw3zygZHs%2FRLnLHyEWfObYWEc%2BhUl99GOSjY%2B24ql%2B27spqsb16jdo81qr3i6k%2By7u%2F1auXj%2Ba6TqG%2B93U7QJJI70NigWyCOts3rWVWH%2Fh%2Bbqu8f2ZZ17Gyzwy%2FYR%2FDNkZOm8SKoap1DhrWy3dFf5luFzx%2FhtRyPepwTkqzqNZcHF7fc4nJFoXgDu8J6WuZCd7LcUvdnUpu6H%2BKGOFJP4Skvt%2BJbxudEt%2BlMQ%2BoFeTZvA7sPdqCUFSHNTPiqTkjJfSAEFhAzeX5%2BDs3LdXZ4ZeDbYi0RvlfWGxLVG0TxZ59SuldpJnRt2l118uTltJMb1w%2FMEp2sWTkWsnyG0gZ9e%2BCjoJH5cdNBt8kICBY9glpVYeami%2BQbB0Sousd8m5udh3L1OcksF6otbswUM0cH16%2FekJWjZIwcLXEqLrRzzUFyuQlSnMMq3ob4GOqUBd%2FYqX0Ttm0Xin5vanza8vr1M3YN5BZoDN5nHBQdDDJwxWDKY7c%2BaLpa044318JMwXOGYZ9DEPmyneWE2OJj%2B9IwyfnaiRkXXZtwfmsufnfrxLfBngjcwAahjESNBljXl3PGZd%2BtYBg7L7uF8ahJA7mNG%2BviUSIULC36lHklsLsPCIuZCvjd13XTUb6ejCYe%2F5tPxpDydsk6scqRih7%2BbJauYKhGa&X-Amz-Signature=34eb5e54d2fd83edf438eb1076db07ffb0b2911f9720968d67dad1e563e638d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
