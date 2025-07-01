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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664647U2S2%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmV87pTayQ%2FZnPc1IbggqRthHsKHlSZ4lmB7XPG7%2BZQAiEA2IUX9EnqZg84iq2BC8ujSLbDVBqsauVf3%2B5xzfCUoJcqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyhHoYqeMfQlIUBPyrcA7JOArPRZ%2FDvEoeODuPJzqUpjpgIeNX7SfyqRwGrKNbx7CKOXoIdAdKekcouvPQdpkF0gvrgi9J3lDyTFaGtFCCszHKhlWHc8uZ2x0ks%2FNcQlMw1jDkwsZkwdJ9dL7TI15f6Asmvp%2B77yQn8zIxrHyh7S0xUnPIzhbTigtlY6siuOoCZDdF67BTydxdXtKDpRaS%2FBMWvJyX9JUkPI1SrJzvL8LkzyXzX74PNWP95L4HU3ULFBb%2F0oiMFp1L8XJgCrLjkIePnNUHElrbtuDBvFRXHGa5biN8vWyfb%2FjqxwlOtehDwIhDOJOMWhEXXU1wOERNk%2BIrhRVgcrpSZiUSPuEIerT3sTH%2Bbdo8o76v7zClEEkunog9bghC9jbmoyUtpWO0pUperXxRDMLDoF%2BhYb6q0lOrwdBNHM4wdbCPNBfqQPYzLqQET6xN%2BDKiH5VQdGLqSlCOsXMHVQl8HpArryy1xOq9o59cJKR4kNbiRIO3PNgUcFvAnqnBWo4Kf7vdf3FwCpiWajM9W4sXkd9EGWoVVYCPXJzXFIWGS6GTKVn0JPB%2Fr5r5VIF%2FaWYmrwZ0g%2B9p4rigLO4yp3kQxxIsdmRP%2Bcbry2omk0YcGuddremFVHNXJab%2ByeMWOYTYyMJ%2FOjsMGOqUB6IoGHrPLl%2BQWDcJNdhALeyaJbUeGuDcaB3rg8%2BCRh0rB1g%2F1O2Ms3YBggN4wMcbKuAosZfngRflqUVad%2BM%2FqbronNLq1k7KAVecU61DJH3XZCd16nZY0gMABcTe8pAdkibF212y3TnMNVn0LoMTm1Yj0Vm4cB4VWlC9%2Bpocf06dGgAgums9%2BhSAXQDMkyU9Jsq5j3cVA8893Iyu5NNuRwoyKovMZ&X-Amz-Signature=67521ce71fc5fb73a1825dab2482d7e9f2c5c1c89e13120b2fd35b4188b7f7ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664647U2S2%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmV87pTayQ%2FZnPc1IbggqRthHsKHlSZ4lmB7XPG7%2BZQAiEA2IUX9EnqZg84iq2BC8ujSLbDVBqsauVf3%2B5xzfCUoJcqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyhHoYqeMfQlIUBPyrcA7JOArPRZ%2FDvEoeODuPJzqUpjpgIeNX7SfyqRwGrKNbx7CKOXoIdAdKekcouvPQdpkF0gvrgi9J3lDyTFaGtFCCszHKhlWHc8uZ2x0ks%2FNcQlMw1jDkwsZkwdJ9dL7TI15f6Asmvp%2B77yQn8zIxrHyh7S0xUnPIzhbTigtlY6siuOoCZDdF67BTydxdXtKDpRaS%2FBMWvJyX9JUkPI1SrJzvL8LkzyXzX74PNWP95L4HU3ULFBb%2F0oiMFp1L8XJgCrLjkIePnNUHElrbtuDBvFRXHGa5biN8vWyfb%2FjqxwlOtehDwIhDOJOMWhEXXU1wOERNk%2BIrhRVgcrpSZiUSPuEIerT3sTH%2Bbdo8o76v7zClEEkunog9bghC9jbmoyUtpWO0pUperXxRDMLDoF%2BhYb6q0lOrwdBNHM4wdbCPNBfqQPYzLqQET6xN%2BDKiH5VQdGLqSlCOsXMHVQl8HpArryy1xOq9o59cJKR4kNbiRIO3PNgUcFvAnqnBWo4Kf7vdf3FwCpiWajM9W4sXkd9EGWoVVYCPXJzXFIWGS6GTKVn0JPB%2Fr5r5VIF%2FaWYmrwZ0g%2B9p4rigLO4yp3kQxxIsdmRP%2Bcbry2omk0YcGuddremFVHNXJab%2ByeMWOYTYyMJ%2FOjsMGOqUB6IoGHrPLl%2BQWDcJNdhALeyaJbUeGuDcaB3rg8%2BCRh0rB1g%2F1O2Ms3YBggN4wMcbKuAosZfngRflqUVad%2BM%2FqbronNLq1k7KAVecU61DJH3XZCd16nZY0gMABcTe8pAdkibF212y3TnMNVn0LoMTm1Yj0Vm4cB4VWlC9%2Bpocf06dGgAgums9%2BhSAXQDMkyU9Jsq5j3cVA8893Iyu5NNuRwoyKovMZ&X-Amz-Signature=9041294fcf6ac39dd8bb14bb3f568e26c81025b15cd550965d90067426f7950c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
