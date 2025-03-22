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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NSSYOC%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQD%2BqjhaICi9ZTyCebCBf9KtFUqOenJDLYStRvxmpKHzwwIhAK98Kd3A9SmyOqOJKb8jlMh%2B7K8%2FydIg%2BmJla3K%2B%2FXy%2BKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwegfnpER%2Fu81k1ejUq3APMYFX2qp6opplXp1o03%2B1cmpSPK6hre1AuUFRkmTX6Ksc6x5LwV60MM434855KHNwG5uVp0dKeIbTK5KEe8LLXgK9CL3jj8Rp4zSDe0g%2B37MT4m1%2BO45voJqlEtv4LxG2SB3fqpO3Bkn%2BK7j8NBLRaS8MOFHpHIC5hgzwFKn9VdrIWTpt3csrqNrxpYzuDA802JvyCtMMzIGeVGWWnEQOOgcVrruPYC5qei%2FQAESc2jrGTzRyeJlL62dyrWFC68iinqEz3ls7P0xcYB0AT43u9%2BFOefaRKmL%2Fv%2FMMyKNjsJmEJO0KRygIWb4H66cCXNWWbveNiLvgSfVrkLMxtFM1dqj%2F3KrgTiKRfLQsyrlAOAMIKMar56KHTz%2Fm1HNxyNJOsI9NlD2SZsDsGkEuPadwxcGIUZ%2BUImHEwKehZPU4r4BYMCSb37kXfmMjhDqXUNi%2BD1EaaIkw3iNpQO81jfunddHyypUrePvaD7PbtcnktIO6lXjtAiEA2KUs2N7mtwQD5FVkDzk9qMiXRp3rlt%2BiHvbhQRMvRXUAZLSxBnfB1aInPfNBv6p8VQ9zRxGeYwueUr%2Bv2nA8kuoPrY0Ge4P8OUo4MPjEhcg85OJ0o2Ge9eVSHs1jTqRPB9PCh2TCqmPy%2BBjqkAd956BZhDvi7q97uY%2FEzrEhF0E8xS5EhrpHg605gf7ujzzvLUTTtM0s2PJNk8nq65hPBdmaaHZrtXE5mxTKbVSL6CzODQZAMmstyxS0O9ZlopYRP7EJmKVZeQWErxHesFvURSBhhL63W1oGwmB69FshKnOzoj6Enfek%2FyFXj1Scg82IBGYQ2XzTfSalLi355D%2BRQvN%2BomumjdMs5k6pA27qcMEar&X-Amz-Signature=4910847621b13bb6b31d0a930a48d6753cfea753c3e3fde47fa90e5d0083fe7c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NSSYOC%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQD%2BqjhaICi9ZTyCebCBf9KtFUqOenJDLYStRvxmpKHzwwIhAK98Kd3A9SmyOqOJKb8jlMh%2B7K8%2FydIg%2BmJla3K%2B%2FXy%2BKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwegfnpER%2Fu81k1ejUq3APMYFX2qp6opplXp1o03%2B1cmpSPK6hre1AuUFRkmTX6Ksc6x5LwV60MM434855KHNwG5uVp0dKeIbTK5KEe8LLXgK9CL3jj8Rp4zSDe0g%2B37MT4m1%2BO45voJqlEtv4LxG2SB3fqpO3Bkn%2BK7j8NBLRaS8MOFHpHIC5hgzwFKn9VdrIWTpt3csrqNrxpYzuDA802JvyCtMMzIGeVGWWnEQOOgcVrruPYC5qei%2FQAESc2jrGTzRyeJlL62dyrWFC68iinqEz3ls7P0xcYB0AT43u9%2BFOefaRKmL%2Fv%2FMMyKNjsJmEJO0KRygIWb4H66cCXNWWbveNiLvgSfVrkLMxtFM1dqj%2F3KrgTiKRfLQsyrlAOAMIKMar56KHTz%2Fm1HNxyNJOsI9NlD2SZsDsGkEuPadwxcGIUZ%2BUImHEwKehZPU4r4BYMCSb37kXfmMjhDqXUNi%2BD1EaaIkw3iNpQO81jfunddHyypUrePvaD7PbtcnktIO6lXjtAiEA2KUs2N7mtwQD5FVkDzk9qMiXRp3rlt%2BiHvbhQRMvRXUAZLSxBnfB1aInPfNBv6p8VQ9zRxGeYwueUr%2Bv2nA8kuoPrY0Ge4P8OUo4MPjEhcg85OJ0o2Ge9eVSHs1jTqRPB9PCh2TCqmPy%2BBjqkAd956BZhDvi7q97uY%2FEzrEhF0E8xS5EhrpHg605gf7ujzzvLUTTtM0s2PJNk8nq65hPBdmaaHZrtXE5mxTKbVSL6CzODQZAMmstyxS0O9ZlopYRP7EJmKVZeQWErxHesFvURSBhhL63W1oGwmB69FshKnOzoj6Enfek%2FyFXj1Scg82IBGYQ2XzTfSalLi355D%2BRQvN%2BomumjdMs5k6pA27qcMEar&X-Amz-Signature=c9bcb3a3bf9677ee44a8569bd1f3017059a3880a426dc876695ac96e4c9f2aa9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
