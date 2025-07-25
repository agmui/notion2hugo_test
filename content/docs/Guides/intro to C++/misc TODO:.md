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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IUQ6PRG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDQKt0Ig6lt6jplrDOUzZmMaTGhLSpTITHQs8M6lC%2BGOAiBGFsTdpx%2BLPlU0243bYAMGYXdyeFw9zW5fuMViFlaIJir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMNmIWbZLKGdnYp%2F8xKtwDe0hy7qinFQiJcvMB%2BgUbc2IaYgvljauaOvLSnt9YqkQ8Gqtni%2F0%2BVfcK1Ff1byc7%2BPBZ%2FAyalc8a6%2FtlkJOWSlbOc1Jv3JMVF18EW30CzNjS19ubj6M6wtNexn%2BZBZEPxavqhb9Pj6S6HYK0B5QGJJg%2FNAj6NBgJVnNKpOdTDuZ4WLzmhp5eV8XbF0Nms33eqQM4IPv%2F%2F9TYZ0g%2Bt1l0ONqFxRsTWPf8vO%2Fs4m0%2Fp3%2FTUEw5UfGYQ3k%2FIz1Ods5UtJzrs4M6gYqFKN7dOmXGvazNXU34PivDYgD8FtmGIhbhqukN1%2BpHx7agluKHXYXjPszkpw%2FpMBN4Tew5KeCnjiEDEhBjjxKwQA684UM2KEX9%2B13a%2F3Lw55HCV%2BhmM5La6lzxaWNa8ijAeV2y8WmxaqCUU2x3Ry9oXVGrRssW930C0aheZcvD1iaQ%2FJvJYiGXPJZ2IG1AYl%2B8xHGXjJtmqRcfqZWK%2FvMnNdEWqRMRTyK87NH3NV5nd5AjVJirxUm3wPx2WssHqSK7YAZ2cI2OzjLQmaI83wFMrNbCmqGtJqHSZMb8fVjk1cdiK4bWqDXbxFKqq03whyAu2ffIH69t0YUY6squMrAcE1eXvFEexvbDMFwcOz8cM1kOuOwws4aOxAY6pgHL%2Bp8r3To3JaBCPWpzcpqPWDKKC0MnaFwoE5%2B0SARUqrAWZVBdJeHpYXwsvtcdbT2p8DO3C2NpQ0GUsyAP3y2NKZMI6KjbOYC9md2as5QBILNP8N83NYcvBttCSuUb%2FZPlH%2FBjIje1QCcwWMwRc3%2Ba%2Fvn2OGhF1SOHN7rrNm%2Buy6%2Bhwde906IB%2B5vWB4nPlBb%2F2KUhAE7QhLoDThhEe0fFVL%2FkXcv6&X-Amz-Signature=3275487e25d0e8c25e1881f9766c81317f29d879c6633b8d30121d75f3885aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IUQ6PRG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDQKt0Ig6lt6jplrDOUzZmMaTGhLSpTITHQs8M6lC%2BGOAiBGFsTdpx%2BLPlU0243bYAMGYXdyeFw9zW5fuMViFlaIJir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMNmIWbZLKGdnYp%2F8xKtwDe0hy7qinFQiJcvMB%2BgUbc2IaYgvljauaOvLSnt9YqkQ8Gqtni%2F0%2BVfcK1Ff1byc7%2BPBZ%2FAyalc8a6%2FtlkJOWSlbOc1Jv3JMVF18EW30CzNjS19ubj6M6wtNexn%2BZBZEPxavqhb9Pj6S6HYK0B5QGJJg%2FNAj6NBgJVnNKpOdTDuZ4WLzmhp5eV8XbF0Nms33eqQM4IPv%2F%2F9TYZ0g%2Bt1l0ONqFxRsTWPf8vO%2Fs4m0%2Fp3%2FTUEw5UfGYQ3k%2FIz1Ods5UtJzrs4M6gYqFKN7dOmXGvazNXU34PivDYgD8FtmGIhbhqukN1%2BpHx7agluKHXYXjPszkpw%2FpMBN4Tew5KeCnjiEDEhBjjxKwQA684UM2KEX9%2B13a%2F3Lw55HCV%2BhmM5La6lzxaWNa8ijAeV2y8WmxaqCUU2x3Ry9oXVGrRssW930C0aheZcvD1iaQ%2FJvJYiGXPJZ2IG1AYl%2B8xHGXjJtmqRcfqZWK%2FvMnNdEWqRMRTyK87NH3NV5nd5AjVJirxUm3wPx2WssHqSK7YAZ2cI2OzjLQmaI83wFMrNbCmqGtJqHSZMb8fVjk1cdiK4bWqDXbxFKqq03whyAu2ffIH69t0YUY6squMrAcE1eXvFEexvbDMFwcOz8cM1kOuOwws4aOxAY6pgHL%2Bp8r3To3JaBCPWpzcpqPWDKKC0MnaFwoE5%2B0SARUqrAWZVBdJeHpYXwsvtcdbT2p8DO3C2NpQ0GUsyAP3y2NKZMI6KjbOYC9md2as5QBILNP8N83NYcvBttCSuUb%2FZPlH%2FBjIje1QCcwWMwRc3%2Ba%2Fvn2OGhF1SOHN7rrNm%2Buy6%2Bhwde906IB%2B5vWB4nPlBb%2F2KUhAE7QhLoDThhEe0fFVL%2FkXcv6&X-Amz-Signature=fa990963be0ff82b78ec0611d5c42929e73d5a5cb07b764e6a24e76447432c8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
