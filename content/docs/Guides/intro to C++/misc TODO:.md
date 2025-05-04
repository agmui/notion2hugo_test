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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WSQQJB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIEV2IqnugiaXd8hpV6Vg2Zpopqvp0fZrYVTUsIN1sCqtAiEA2q2xqPwVH8g39TDTDfU5EnQvzBplZ8YVC%2Fxd4jLtAMEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDNqbplSeNqwRjUsdTSrcA5lKiOeGcskv5t2YFcnAxcpHniz4Q6FOzxfghXJNVrhgp%2FHm1J93QUKz4Yq6lPFQFA5LuIn0XU8QsRH68WuuGgSwF6hJg9fM1SezhT%2BL7a4cTVECGmEQn%2FllwVDfTyX8YWFDp5GlwOoyj6L4RSVGMDICMzv8yZDcO0X1RXOw2TTL0GRqsAqjR1QYQaB4umf7zGdYrKc6SJkc5kL%2FeawKMo3WUUoaMDJwk4nrS0A8XRTseYJmhbY6nO2X2MwcIS9%2FLqGdLNkHRgW582XKdu8ZQI4grMSLwN838Gc8LPEnKzrIoA5Oa58odwhFjzjy5crl27pFcpBjGjP4l2jfnoc3VVrZoAyZioT%2FFrL0y0wdGvqCTkdXdQzgN6%2BPh%2BccXToqpTnRlbKr0GWFUeBz1AFRJxiSTGqmUx4djAWB7%2B1P4cVXzxqoPB0Z62MK9I8cCgm2MEYxQSrmwBv2pXaZmf1rEMVQ1w9BPGRFPLwnnFmPwcOCFn8r%2F9CFaP6vm0HxsTVNwnarnDyQt5MOmOIMwLpgk65QUcCEhNRElM0%2BVBBjDUSU0QU%2FD2hYjjmUTYamlRs229uCHtaO7bWKGgC%2BtzIlsiVIU4lxON8sXYo7aBWWkMKDtGe1IOVo3Rn%2Bs3tDMIiI3sAGOqUBHSKxzP%2FlpFERjXKTxM%2BrGvoKJ8Y5jzUygzOz4RoPpa9UFQ5LOqBexSFZci5kBEGoKZmY0WBbxGa1ugQ223FMcbq6Wwo6pRPOFrD6Xt6Mx05m1ZSMyq%2BrBB%2FGCPOxcWoLRJK%2FTwE3c7k3dxJ%2FQNhfKmjhPHEJ%2FBoSIdNGUqNJ3xQKPncqxKjb0AXas6OAosQ6j%2BiXpqX%2FDDDrQBwP%2F0MahgbFmAj3&X-Amz-Signature=f1b0d41be604fcbdee52b13cddd95629ba20bff0a8a723b7a228160b30e92e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WSQQJB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIEV2IqnugiaXd8hpV6Vg2Zpopqvp0fZrYVTUsIN1sCqtAiEA2q2xqPwVH8g39TDTDfU5EnQvzBplZ8YVC%2Fxd4jLtAMEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDNqbplSeNqwRjUsdTSrcA5lKiOeGcskv5t2YFcnAxcpHniz4Q6FOzxfghXJNVrhgp%2FHm1J93QUKz4Yq6lPFQFA5LuIn0XU8QsRH68WuuGgSwF6hJg9fM1SezhT%2BL7a4cTVECGmEQn%2FllwVDfTyX8YWFDp5GlwOoyj6L4RSVGMDICMzv8yZDcO0X1RXOw2TTL0GRqsAqjR1QYQaB4umf7zGdYrKc6SJkc5kL%2FeawKMo3WUUoaMDJwk4nrS0A8XRTseYJmhbY6nO2X2MwcIS9%2FLqGdLNkHRgW582XKdu8ZQI4grMSLwN838Gc8LPEnKzrIoA5Oa58odwhFjzjy5crl27pFcpBjGjP4l2jfnoc3VVrZoAyZioT%2FFrL0y0wdGvqCTkdXdQzgN6%2BPh%2BccXToqpTnRlbKr0GWFUeBz1AFRJxiSTGqmUx4djAWB7%2B1P4cVXzxqoPB0Z62MK9I8cCgm2MEYxQSrmwBv2pXaZmf1rEMVQ1w9BPGRFPLwnnFmPwcOCFn8r%2F9CFaP6vm0HxsTVNwnarnDyQt5MOmOIMwLpgk65QUcCEhNRElM0%2BVBBjDUSU0QU%2FD2hYjjmUTYamlRs229uCHtaO7bWKGgC%2BtzIlsiVIU4lxON8sXYo7aBWWkMKDtGe1IOVo3Rn%2Bs3tDMIiI3sAGOqUBHSKxzP%2FlpFERjXKTxM%2BrGvoKJ8Y5jzUygzOz4RoPpa9UFQ5LOqBexSFZci5kBEGoKZmY0WBbxGa1ugQ223FMcbq6Wwo6pRPOFrD6Xt6Mx05m1ZSMyq%2BrBB%2FGCPOxcWoLRJK%2FTwE3c7k3dxJ%2FQNhfKmjhPHEJ%2FBoSIdNGUqNJ3xQKPncqxKjb0AXas6OAosQ6j%2BiXpqX%2FDDDrQBwP%2F0MahgbFmAj3&X-Amz-Signature=2fc4c0a8d13b1754cebb1796d8f957aedb3108c5c954b9638541948f344e545d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
