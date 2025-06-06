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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAEEPFUV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCsSfPU6rmcPE2ENK8HbYttbgU2e7rdBD4kObiCZef2xAIgL%2B3Ym8ZHOGzfELqQ9jbPBLnfF91kETOE7yhsdzfTXVoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGSjZtNhY8mK8AeyvSrcA2mmbr58oN5X8OCIp75SL0E9UBKqB2OaBfkSirJ3beOvGWLMsEylB%2FKi0Mll2mo7Ukz9lkWnCFO1KMrVfeBiLa1V4YncFlecofMAhQ%2FSO3qGRsvrFFKiWr%2FpCaiAsLwgrma75FETezKq9mtvGnFoi2u4%2ByBl4Nru6gbJKtp9ByuH%2F7kKkbVOE1YYyrY6a7yPKVSkRelVHarQJtOoClnQx09wnVGqw0Yg7Lw6MQZ%2BPxujuN9RG3uphCJdtk5LM6Sb8QBgQ6GtCk9HKKTbYFTna5AfhqACrDQp1PMPVxDK8OfKn8Oa15Ae3k7aISkGRtbUzFbG4%2Ba6uKZutuzYpP66RGcOo37AZot%2FpNGzLmt7oQQLJCXn6RJfmH0GURmD0Fvz5iOLrGOs%2B0gbh2V2diCc%2BFdpkYU2WTpizVXLjmMsiuXj6sT%2BVj4RMuVKllQH%2BCr%2Boje89hJAzjVgLrbF0XA0uFTpgadiey9FY1d3GpCtHiXpkNDNEfxf%2FEy6S0sK32ZLGxAbfJaXZR13gCo91GBusQzIgeM158kLNP7MXoALaBaKNd9%2B6tdMyQqU6zV%2BA8UAMYxJFOhNYMsXwDeK6oxNxjRCOSWMrC02g04j8OhuO9S67dqj1dEtHr1QUx1nMKfUicIGOqUBXd8SBvGyAPg9LQ%2BMN6iSGSNnXS4w%2BTJYTqHhgUqnio6BqebYjzutx8lv2xdzDfSmYzKGbzs2Crfu5qIJWUVlDKUzgpg0StGxaS8Z2XQx4SMIlYkMws22rB%2B6wRiRDs7l72%2Br8EDmrJQ8LdflkXVcsb1cpfE83t1Pdwy6M8FQWyj%2F4A5CVGIkw2xfQ4VsIeOKq0CzzvC7tnZb8UkuoR2IGZzUURp0&X-Amz-Signature=6010fce273dcb6ae809d203029abc2c2b616f948b49a2cf540129ec45968b515&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAEEPFUV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCsSfPU6rmcPE2ENK8HbYttbgU2e7rdBD4kObiCZef2xAIgL%2B3Ym8ZHOGzfELqQ9jbPBLnfF91kETOE7yhsdzfTXVoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGSjZtNhY8mK8AeyvSrcA2mmbr58oN5X8OCIp75SL0E9UBKqB2OaBfkSirJ3beOvGWLMsEylB%2FKi0Mll2mo7Ukz9lkWnCFO1KMrVfeBiLa1V4YncFlecofMAhQ%2FSO3qGRsvrFFKiWr%2FpCaiAsLwgrma75FETezKq9mtvGnFoi2u4%2ByBl4Nru6gbJKtp9ByuH%2F7kKkbVOE1YYyrY6a7yPKVSkRelVHarQJtOoClnQx09wnVGqw0Yg7Lw6MQZ%2BPxujuN9RG3uphCJdtk5LM6Sb8QBgQ6GtCk9HKKTbYFTna5AfhqACrDQp1PMPVxDK8OfKn8Oa15Ae3k7aISkGRtbUzFbG4%2Ba6uKZutuzYpP66RGcOo37AZot%2FpNGzLmt7oQQLJCXn6RJfmH0GURmD0Fvz5iOLrGOs%2B0gbh2V2diCc%2BFdpkYU2WTpizVXLjmMsiuXj6sT%2BVj4RMuVKllQH%2BCr%2Boje89hJAzjVgLrbF0XA0uFTpgadiey9FY1d3GpCtHiXpkNDNEfxf%2FEy6S0sK32ZLGxAbfJaXZR13gCo91GBusQzIgeM158kLNP7MXoALaBaKNd9%2B6tdMyQqU6zV%2BA8UAMYxJFOhNYMsXwDeK6oxNxjRCOSWMrC02g04j8OhuO9S67dqj1dEtHr1QUx1nMKfUicIGOqUBXd8SBvGyAPg9LQ%2BMN6iSGSNnXS4w%2BTJYTqHhgUqnio6BqebYjzutx8lv2xdzDfSmYzKGbzs2Crfu5qIJWUVlDKUzgpg0StGxaS8Z2XQx4SMIlYkMws22rB%2B6wRiRDs7l72%2Br8EDmrJQ8LdflkXVcsb1cpfE83t1Pdwy6M8FQWyj%2F4A5CVGIkw2xfQ4VsIeOKq0CzzvC7tnZb8UkuoR2IGZzUURp0&X-Amz-Signature=72f7a3aea8ad0e46d83b9c8cafa5ae931a28e91a50385c1346aae2dadd9cb45d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
