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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3QQVYB%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUUrnDFBvofEYxQdZ7r6%2FabqR7RB8JWkBKwj8jb0YdhgIhAMwA0eb11hMQFG7aA1N2Ff4Hre2I8ndeYS%2BX17XfjRn4KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUx1oZPd0aM01oxocq3AMYjXPa5fEzU7uokdr6txHKF4Dft0MIQTxK9cNv3iWHoHj%2BoU%2FvL5jb1L%2FXYPjrX%2FU6kHcuE0MVBT9wPPeZ%2BI1unjShr8d9aS%2B%2Bj%2Bc2flhLBDulIa8N1zJLcRltBz7EeUCcSiOeDiZP%2ByFzza3%2BBf%2B%2B7RFBcADmxEj9aMVVPXU%2FsdWakajlEr8yptV7urT8Osm3IOJwKlJRUatvUKc94%2FqbYDSYAp1wgD1lc11B6ALgGtaj8ZnrrwwUaK%2FNvtcMq88xL0LlD8H04O3mEOLqtP0RXO1axqP0EGqBC%2Ff5mQqdgjd7i9BjiFCGqsDLQYzbBvbqaRS2%2BjfZGYo1Ow8lst%2FavUT9oUT2lWxGHLccP0J4qZKPHIa%2FFiwesR%2F5aezjyPEKuoUOabw6X8igMOWSidedZsnBDOtpK2oDn0RF9ldbVC8RekppWp8NXZf%2B%2F6pPCvTNwYntyWijE4sA7jMXvqqKtcc4R%2F2dxy32vIXhrSc3vevhKv7cQhqO5hSv4NNTKTAh9r7Xr9GEQM2xydGVhnermO4YYvi7K6F%2BwhegOivxo2RMgT24y1kt5g8Rilot4kuafbKxYHvCUebPt4BASH2sgg3QIFiagy4nDZh%2FRm0KMfvp7DHfNEaZSMIqEDCx0vC8BjqkAaLlPPp2iqSnD4iwZxLPCjKnTZgFsmGBl42eh%2BeceFh7dn3zz6G7He3jAjTGviajG5EVzXfXUC7NsKx0svCxjBo2h6MQhmdM8rbigj4PRBpkxU4FjI%2FRm1jB22bRmv%2Fm%2FApsHsGHp02p37V6fcPtNDHbNVPoJWzf0YfSGavv7onJWQEV%2F7gjk35mmGTD5I8hsT3yD7K0%2B8mxvZVXTkKW%2FBMSi0nP&X-Amz-Signature=480e9cc0af0499f1ce1a795d440e56e329282d5069ed0b7740d2daacf98ab01a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3QQVYB%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUUrnDFBvofEYxQdZ7r6%2FabqR7RB8JWkBKwj8jb0YdhgIhAMwA0eb11hMQFG7aA1N2Ff4Hre2I8ndeYS%2BX17XfjRn4KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUx1oZPd0aM01oxocq3AMYjXPa5fEzU7uokdr6txHKF4Dft0MIQTxK9cNv3iWHoHj%2BoU%2FvL5jb1L%2FXYPjrX%2FU6kHcuE0MVBT9wPPeZ%2BI1unjShr8d9aS%2B%2Bj%2Bc2flhLBDulIa8N1zJLcRltBz7EeUCcSiOeDiZP%2ByFzza3%2BBf%2B%2B7RFBcADmxEj9aMVVPXU%2FsdWakajlEr8yptV7urT8Osm3IOJwKlJRUatvUKc94%2FqbYDSYAp1wgD1lc11B6ALgGtaj8ZnrrwwUaK%2FNvtcMq88xL0LlD8H04O3mEOLqtP0RXO1axqP0EGqBC%2Ff5mQqdgjd7i9BjiFCGqsDLQYzbBvbqaRS2%2BjfZGYo1Ow8lst%2FavUT9oUT2lWxGHLccP0J4qZKPHIa%2FFiwesR%2F5aezjyPEKuoUOabw6X8igMOWSidedZsnBDOtpK2oDn0RF9ldbVC8RekppWp8NXZf%2B%2F6pPCvTNwYntyWijE4sA7jMXvqqKtcc4R%2F2dxy32vIXhrSc3vevhKv7cQhqO5hSv4NNTKTAh9r7Xr9GEQM2xydGVhnermO4YYvi7K6F%2BwhegOivxo2RMgT24y1kt5g8Rilot4kuafbKxYHvCUebPt4BASH2sgg3QIFiagy4nDZh%2FRm0KMfvp7DHfNEaZSMIqEDCx0vC8BjqkAaLlPPp2iqSnD4iwZxLPCjKnTZgFsmGBl42eh%2BeceFh7dn3zz6G7He3jAjTGviajG5EVzXfXUC7NsKx0svCxjBo2h6MQhmdM8rbigj4PRBpkxU4FjI%2FRm1jB22bRmv%2Fm%2FApsHsGHp02p37V6fcPtNDHbNVPoJWzf0YfSGavv7onJWQEV%2F7gjk35mmGTD5I8hsT3yD7K0%2B8mxvZVXTkKW%2FBMSi0nP&X-Amz-Signature=7606dac60d6472a4161c7ffd64c934c497de7f680ad429b6589ec549b7b40f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
