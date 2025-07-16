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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6EK3WAN%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDRN06V54HP7lncXG7DuZWwvi9G4cAWfuV3HXnt2DfeEAIhAOBGX392i%2Bi6pYV4kpq%2F54ALzJEUis9g1x0hKCfnds%2FAKv8DCFMQABoMNjM3NDIzMTgzODA1IgyR5k1dtF0H7jqXM8Eq3AOY9a%2F4%2FP5odF4hSvIiaCUhcwLah3XcTvlpZOy6CLGuMYOiFdP2mPkQ3OQ96KuqQ8wWCPkBXBZ81lPoyF4jnKaycYsiyxS7JWPNLUoVtB0JQvz7hZYez3YnYZp3FyGTAEhkB2p7GaIT%2Fyv1841VMBXjMRMkHWfn9pb4oGkXdEMoHk8hdmEs9rRTHSgU2cJ15DXv9xKnV8CKIrHO9HvNJ%2B%2BrvHMFyyuT%2B2NVl7A37TCfJBqhYn8SM2c62PtNHK3x9Vl1s%2BOtnsknPDk4yZ3Uqz2EndlLBZc5%2BTz8%2Br8qj%2FfoRhAKDmKT6dtUfAoHycQ5Z%2F6K0LKyPdj8wF6pLyJ4g45PjPT9PB3TXdPanTEGt4lRlvSMTHPLzcPYqDB5gKdgXfHOo1ZrSGcSNP6zBdb2m2cDhpJKcW0u%2FozltJfjx4mqlCFUqECsAeX4%2F0xS8eW6r9e8Zmz4F%2BnCgRGlTEK2xMqNo4MFgAZKemUHGa%2FUdtoA0rqv4vPVRbStyJHg1KLcjTGppqEWLFO%2BC70%2FqRXV%2BpqKk3ZW9rIKC%2BiNHBZE5KO0dOwpCX%2BAeQw4sK%2F2GnD8E9w5JFNmEL4u64aSVR1hmMan9pMaOSSqedjKkSSKAoTkFzv9KLW4VXfX7NrLmDCy%2FtvDBjqkAfDaP8C8XqELnrUYA0iFE10olJnb3sCssNS4KNhWZQ%2F0sNjqT6Q2McLmMJ1mkqK9c4Qkw3TELGNs2OxmI8NKBBP0LkhEWDZqq5aLVUSq5J4kMheLrm%2FXX5kiRNFXnWLu2r0N5g%2BnR0M1yzWEZtJyR%2B0ZSczT0Mexrv6hsq9Q%2FpX5KPewKYgbJMlsP3oK6DkEYARWKl5qEWFLHGzKHas0V%2FtkNP6g&X-Amz-Signature=7267494f33cbb58ed8c851c45ac185ea3ecda357c6ffce070d41e02d20e645fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6EK3WAN%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDRN06V54HP7lncXG7DuZWwvi9G4cAWfuV3HXnt2DfeEAIhAOBGX392i%2Bi6pYV4kpq%2F54ALzJEUis9g1x0hKCfnds%2FAKv8DCFMQABoMNjM3NDIzMTgzODA1IgyR5k1dtF0H7jqXM8Eq3AOY9a%2F4%2FP5odF4hSvIiaCUhcwLah3XcTvlpZOy6CLGuMYOiFdP2mPkQ3OQ96KuqQ8wWCPkBXBZ81lPoyF4jnKaycYsiyxS7JWPNLUoVtB0JQvz7hZYez3YnYZp3FyGTAEhkB2p7GaIT%2Fyv1841VMBXjMRMkHWfn9pb4oGkXdEMoHk8hdmEs9rRTHSgU2cJ15DXv9xKnV8CKIrHO9HvNJ%2B%2BrvHMFyyuT%2B2NVl7A37TCfJBqhYn8SM2c62PtNHK3x9Vl1s%2BOtnsknPDk4yZ3Uqz2EndlLBZc5%2BTz8%2Br8qj%2FfoRhAKDmKT6dtUfAoHycQ5Z%2F6K0LKyPdj8wF6pLyJ4g45PjPT9PB3TXdPanTEGt4lRlvSMTHPLzcPYqDB5gKdgXfHOo1ZrSGcSNP6zBdb2m2cDhpJKcW0u%2FozltJfjx4mqlCFUqECsAeX4%2F0xS8eW6r9e8Zmz4F%2BnCgRGlTEK2xMqNo4MFgAZKemUHGa%2FUdtoA0rqv4vPVRbStyJHg1KLcjTGppqEWLFO%2BC70%2FqRXV%2BpqKk3ZW9rIKC%2BiNHBZE5KO0dOwpCX%2BAeQw4sK%2F2GnD8E9w5JFNmEL4u64aSVR1hmMan9pMaOSSqedjKkSSKAoTkFzv9KLW4VXfX7NrLmDCy%2FtvDBjqkAfDaP8C8XqELnrUYA0iFE10olJnb3sCssNS4KNhWZQ%2F0sNjqT6Q2McLmMJ1mkqK9c4Qkw3TELGNs2OxmI8NKBBP0LkhEWDZqq5aLVUSq5J4kMheLrm%2FXX5kiRNFXnWLu2r0N5g%2BnR0M1yzWEZtJyR%2B0ZSczT0Mexrv6hsq9Q%2FpX5KPewKYgbJMlsP3oK6DkEYARWKl5qEWFLHGzKHas0V%2FtkNP6g&X-Amz-Signature=c3918a8d45bef29ed9ee048a8b72d59f227fb70a8e8da6346352599c6df8dade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
