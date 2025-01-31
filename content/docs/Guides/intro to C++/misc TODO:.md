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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CTOUVI4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu6Xvv%2FFYNXMbFjNv094lcLVOiSuNP1FO5o6FHB8dA7AiBLyk9Xk%2BcRzQHKAKns2kznJ3BQOqHIV4HxUk0JBA7CpiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8kPPLdV%2FBTjkwZEsKtwD9Vq18JkqkHcogUMB32v42pEEYOE09KAlkgTjhEJWqTdQ7c9CVFXeQU6r773tPeY8L0ddB3mRWv1mKHm79Kdyily%2Fw2aqcucgGzSw6evVHUK0d7r24ILtETb1qIEevOqW9uF%2BtCPnr8skBYl04XBPqdcdTlPqkV6i1eNjszQnnZCUKx5cr7eHeQs%2Fq%2FkDXmwRyDCu0n%2BqeY1OPOrB8wALuLlqdYaxX9j337emZaW8eiOMfwGIrrYDa5y8Buwf%2BQ1J1GzGyGNKovrqEMqsF8cnna0dhSSOzjReds2kptyPv5%2BoLBOdOeZrnTjip9l7mrwglVQNGOQoMOf66OTBWPLTuDnFj%2BroUW7ukB%2BdH2yS0KsUVt5nU0VylKQuCiLY%2FcdzRaLmrxNgOwQz9OUaZfW2gdBEHSKXfL%2FkrVJdRuyG8fGHXrXlrBA4VQFRIpXz3YGC%2BLpTvTE%2BjTU6Ci%2BODbP7BnWNHBE8J5YujFv%2B48z4M%2FtyooQv9fHYk5PE%2FyX84y0wSsmnW%2FfzArZqMXxJt0kVGUPb0RzcaiO3DrY160XcFkx%2F%2Bqrh%2FcV4rnwwQuu4USTOoOREcdRO1qHdzFmFq0oAQW9PwXUV42XIGy6%2FILVmedOtuUvEhBkEUoxud4Mw5d30vAY6pgEDhK6ZJhWTTOZq%2FCdTVBI7QnNU79Awk487Mjt9CxLLUM1xuFEXH79IapVrk5bi1M%2FjQig05sJPShhHWFa0K2mEpDAiubYrn54T%2BmlXn8vhUI2oOsnLHIIq%2FoFz65wiV7AA9z9OaP5rmo8sqIgfHNWY5JvW01bobGTKgueScWrSAQsrO0YAwXjDpmTN%2BCutMuC4flKlIeqDAxWdErLJA87LUXrryuvg&X-Amz-Signature=a426ce776ebb265a469ed7d545a09ca4c74e179158d3d5786aee7a1d3d3ba84a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CTOUVI4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu6Xvv%2FFYNXMbFjNv094lcLVOiSuNP1FO5o6FHB8dA7AiBLyk9Xk%2BcRzQHKAKns2kznJ3BQOqHIV4HxUk0JBA7CpiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8kPPLdV%2FBTjkwZEsKtwD9Vq18JkqkHcogUMB32v42pEEYOE09KAlkgTjhEJWqTdQ7c9CVFXeQU6r773tPeY8L0ddB3mRWv1mKHm79Kdyily%2Fw2aqcucgGzSw6evVHUK0d7r24ILtETb1qIEevOqW9uF%2BtCPnr8skBYl04XBPqdcdTlPqkV6i1eNjszQnnZCUKx5cr7eHeQs%2Fq%2FkDXmwRyDCu0n%2BqeY1OPOrB8wALuLlqdYaxX9j337emZaW8eiOMfwGIrrYDa5y8Buwf%2BQ1J1GzGyGNKovrqEMqsF8cnna0dhSSOzjReds2kptyPv5%2BoLBOdOeZrnTjip9l7mrwglVQNGOQoMOf66OTBWPLTuDnFj%2BroUW7ukB%2BdH2yS0KsUVt5nU0VylKQuCiLY%2FcdzRaLmrxNgOwQz9OUaZfW2gdBEHSKXfL%2FkrVJdRuyG8fGHXrXlrBA4VQFRIpXz3YGC%2BLpTvTE%2BjTU6Ci%2BODbP7BnWNHBE8J5YujFv%2B48z4M%2FtyooQv9fHYk5PE%2FyX84y0wSsmnW%2FfzArZqMXxJt0kVGUPb0RzcaiO3DrY160XcFkx%2F%2Bqrh%2FcV4rnwwQuu4USTOoOREcdRO1qHdzFmFq0oAQW9PwXUV42XIGy6%2FILVmedOtuUvEhBkEUoxud4Mw5d30vAY6pgEDhK6ZJhWTTOZq%2FCdTVBI7QnNU79Awk487Mjt9CxLLUM1xuFEXH79IapVrk5bi1M%2FjQig05sJPShhHWFa0K2mEpDAiubYrn54T%2BmlXn8vhUI2oOsnLHIIq%2FoFz65wiV7AA9z9OaP5rmo8sqIgfHNWY5JvW01bobGTKgueScWrSAQsrO0YAwXjDpmTN%2BCutMuC4flKlIeqDAxWdErLJA87LUXrryuvg&X-Amz-Signature=b7249dbee9f84b68ffdfa335aa37bff8c7e4c59ab52d4e7c474b45ca23f0c403&X-Amz-SignedHeaders=host&x-id=GetObject)

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
