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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBKWLYQ7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhTX5hhrqVEu7sYqyAboeODwSvX8xMXc7XfGFP3omuUAiEA%2BGEMnYRQudtGhQE1s3SNuB2CzeNXUBD1gFd%2B72gBTx4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxFtkAhfR9BVe1uyCrcA6%2FKHPL%2FTWJwWXD3jmaFxyynvZRv2v7PyNZHj1i0dnly0bKxCW5CiNmmNAj3BjKb46z2kmmY13FSCF1k%2Bzzlfg4JwfYxruI%2BQiRonaj0Q6X5hwAROB6K6nMzGPYaG0R%2BrO45G8QQoh2UTzi5U%2Bt0Pfyvk1tqMeM2GIB1xbkr7IOmAIFqa8gBRCAEaDGTp3S8xoaIVODeMm1pzP8yveuTTijGAxp5xinZjjsCxoBiUiiN5N1Pvy31HU9aZVYPvdqV43L3q%2BuwG71RBwVermxeCLimeIJhr%2BhOoiqTsIGYeSvA0%2FW9T2VbOEnsIIlZ7r0EJffI%2F%2BavfP5s9KYaVnf2xDS50DkJ1thQgZk5L0qQS3Tn0P1CYblZVAJTqNoCptjQrINIzhehvGHa2tcktY0ur6051%2BOZ6%2BI9B1wL5VIJX610BasWBnP0riXge1h98qZ0QlCS5UzijeAlPCgO9vPV2n44yWRfTOFbRiSIIlMwfJAMzsgIHDQiTlXT9PrgPUsdDKzIng1%2F9lSpBRhw5uSJJchkC6IU%2F6AcDAUFHvysyuzIQwnIM6J0%2BwxcneP7vaXbtuthLxZINhKAALiG5m%2B8eBxBQoWEvko4nlC9BMnP7nfVRdb0bd5iWkTCqDBhMLKjqMQGOqUBnFhWRJxy76gJsJzDwpsz5%2FlBD4JLp%2FWIfZlKxhzc4B8nEkW8N75OHg1JQjNx%2BTefx2wlzm7MTJWsrkEf9u2Vf7%2BYLD386aDrfr2tLLItTrPuiIwcSu8PzQQybw%2FNptraM12Qp8ym%2BT6zRSyIyD%2FnwjkIHCViWEFS71xfJWl3Mguq%2BRUofbYwsbAPEpZ9DSRyX%2BWlA85h613hx588T7GWd6yK7gmQ&X-Amz-Signature=8c69665afd9c6703698c4c1cbc53ca256447da0689c54ea142ca708652bc6c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBKWLYQ7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhTX5hhrqVEu7sYqyAboeODwSvX8xMXc7XfGFP3omuUAiEA%2BGEMnYRQudtGhQE1s3SNuB2CzeNXUBD1gFd%2B72gBTx4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxFtkAhfR9BVe1uyCrcA6%2FKHPL%2FTWJwWXD3jmaFxyynvZRv2v7PyNZHj1i0dnly0bKxCW5CiNmmNAj3BjKb46z2kmmY13FSCF1k%2Bzzlfg4JwfYxruI%2BQiRonaj0Q6X5hwAROB6K6nMzGPYaG0R%2BrO45G8QQoh2UTzi5U%2Bt0Pfyvk1tqMeM2GIB1xbkr7IOmAIFqa8gBRCAEaDGTp3S8xoaIVODeMm1pzP8yveuTTijGAxp5xinZjjsCxoBiUiiN5N1Pvy31HU9aZVYPvdqV43L3q%2BuwG71RBwVermxeCLimeIJhr%2BhOoiqTsIGYeSvA0%2FW9T2VbOEnsIIlZ7r0EJffI%2F%2BavfP5s9KYaVnf2xDS50DkJ1thQgZk5L0qQS3Tn0P1CYblZVAJTqNoCptjQrINIzhehvGHa2tcktY0ur6051%2BOZ6%2BI9B1wL5VIJX610BasWBnP0riXge1h98qZ0QlCS5UzijeAlPCgO9vPV2n44yWRfTOFbRiSIIlMwfJAMzsgIHDQiTlXT9PrgPUsdDKzIng1%2F9lSpBRhw5uSJJchkC6IU%2F6AcDAUFHvysyuzIQwnIM6J0%2BwxcneP7vaXbtuthLxZINhKAALiG5m%2B8eBxBQoWEvko4nlC9BMnP7nfVRdb0bd5iWkTCqDBhMLKjqMQGOqUBnFhWRJxy76gJsJzDwpsz5%2FlBD4JLp%2FWIfZlKxhzc4B8nEkW8N75OHg1JQjNx%2BTefx2wlzm7MTJWsrkEf9u2Vf7%2BYLD386aDrfr2tLLItTrPuiIwcSu8PzQQybw%2FNptraM12Qp8ym%2BT6zRSyIyD%2FnwjkIHCViWEFS71xfJWl3Mguq%2BRUofbYwsbAPEpZ9DSRyX%2BWlA85h613hx588T7GWd6yK7gmQ&X-Amz-Signature=ceb537012c3329d164666dfbf3258dfaef425b6df55aaa8b881585e114f0811f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
