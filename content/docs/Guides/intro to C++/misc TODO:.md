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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IUWFO4M%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDv%2FZhjw1XY%2FKeRnwTS6OMgkg%2BpzuoxZOR96vOQXSij1QIgEvI5mmyBUF%2F3orvVklXQ5IFBBydgp2Yo4%2B6Rdh%2FUtjoq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCuvRcJo6NbQLSzRJCrcA3nYybtBvwnOio6fDPMP0k28FIeYWEAwUKEvRKGiIJ204G0rY%2FK6kfOP7o%2BqMm%2F6Yvge3IF4yGK8P5D1n5rLB6cOlcKd%2B28P7eqFBHCz6LfOOchppJLCq3%2FkWXE1VWMuCKqAjk4zwmHkRPRHj7WNuLXYkT%2Bm%2FqOTo3rjBP8I8GJQo5N5BPoRpVPMVBhYki3PZXih0y6mGRHtL76CX6nqghtSBbwHKz3OP%2BRT%2FqzA0xHQgOreiFaG9Cwarricyl99jeoF2NcErXJAiUGiUmVsD7q9vyprfww4Sc2g1QmDK0UB31OxJvSvXyQXdexPaO8U0qGQVQdHUzZmpPjACtHWkzSzUI7h8mzUu2TGDP%2BtHzE1jhw5bLXWatvFP7e2LDAxnWSW%2BQFRSuO9uoqrcA1SoockS4UF%2BqBHZuhrqVtAr7HXHuXfoqyyszKpqu6jd5TzAbJJAyqgt6dcsl7QhTOJaJ00eBQccNZJg%2B%2FRnMu9VpqGNo7U%2FEPpO%2FGNqnR9q8TT%2B3UrMNA3zg4wja4yEz1bKX6MYvbXXbrHkW4TllSVZlaVpJFepbyR%2FIMlpks5mwQA9Yhh8vZ7LOC6pSLwFqeata5vj1rGrCAC1A3DijpHPh74fkwHRXCZLYSHIL8SMK7C7cIGOqUBCAXeorGXTgtFfhTBgGEWe2DYG8F5QD4CN6P2z6XeVX9b%2ByqbjCMwQxCp95xwmG2C7QAWyoFhd8o0MqHKyVuhw5xILcjSl63SUb4lWMixnwzEdl%2F4rJB1t47dIi7pMdK2vTNHuh8dB8tZGNdcF3S6B3rvRRPkqaStWr1h%2F1j5dnGUTryTWH%2FYm0l5ldNwW6kmouZ%2FTvdbES8%2F4rxc1KQMk2h5frdc&X-Amz-Signature=7b38fa73a3333a1d536fcb6d8ab0c9cb9068d22b786ca79fbc09e113db4c55e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IUWFO4M%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDv%2FZhjw1XY%2FKeRnwTS6OMgkg%2BpzuoxZOR96vOQXSij1QIgEvI5mmyBUF%2F3orvVklXQ5IFBBydgp2Yo4%2B6Rdh%2FUtjoq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCuvRcJo6NbQLSzRJCrcA3nYybtBvwnOio6fDPMP0k28FIeYWEAwUKEvRKGiIJ204G0rY%2FK6kfOP7o%2BqMm%2F6Yvge3IF4yGK8P5D1n5rLB6cOlcKd%2B28P7eqFBHCz6LfOOchppJLCq3%2FkWXE1VWMuCKqAjk4zwmHkRPRHj7WNuLXYkT%2Bm%2FqOTo3rjBP8I8GJQo5N5BPoRpVPMVBhYki3PZXih0y6mGRHtL76CX6nqghtSBbwHKz3OP%2BRT%2FqzA0xHQgOreiFaG9Cwarricyl99jeoF2NcErXJAiUGiUmVsD7q9vyprfww4Sc2g1QmDK0UB31OxJvSvXyQXdexPaO8U0qGQVQdHUzZmpPjACtHWkzSzUI7h8mzUu2TGDP%2BtHzE1jhw5bLXWatvFP7e2LDAxnWSW%2BQFRSuO9uoqrcA1SoockS4UF%2BqBHZuhrqVtAr7HXHuXfoqyyszKpqu6jd5TzAbJJAyqgt6dcsl7QhTOJaJ00eBQccNZJg%2B%2FRnMu9VpqGNo7U%2FEPpO%2FGNqnR9q8TT%2B3UrMNA3zg4wja4yEz1bKX6MYvbXXbrHkW4TllSVZlaVpJFepbyR%2FIMlpks5mwQA9Yhh8vZ7LOC6pSLwFqeata5vj1rGrCAC1A3DijpHPh74fkwHRXCZLYSHIL8SMK7C7cIGOqUBCAXeorGXTgtFfhTBgGEWe2DYG8F5QD4CN6P2z6XeVX9b%2ByqbjCMwQxCp95xwmG2C7QAWyoFhd8o0MqHKyVuhw5xILcjSl63SUb4lWMixnwzEdl%2F4rJB1t47dIi7pMdK2vTNHuh8dB8tZGNdcF3S6B3rvRRPkqaStWr1h%2F1j5dnGUTryTWH%2FYm0l5ldNwW6kmouZ%2FTvdbES8%2F4rxc1KQMk2h5frdc&X-Amz-Signature=cb34b5bac72d116456e3ef2b331957563c7fb1a6e6ffc1d5fda2b0315a0f8dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
