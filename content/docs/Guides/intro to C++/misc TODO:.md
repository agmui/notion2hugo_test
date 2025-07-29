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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZREKW3M%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDogaJsR7FHaBFfGwXMTONf%2ByAYdJnsmgQqyKehgeWAkgIgRVuMtPySnPNL3mRHgkr1hjyiMy6Mosoe3zq61UwlT9oqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFEpe9BHnJH9km%2BMCrcAwlZHP9BXmfmujSLJSmLZrJcyOkv%2BJMDHmqkijwgzfCeZ%2FXJ%2FCYdekR71talB0AYlsYN0SJxE4oxhtRdJwSs0%2BgJzA9Lr2DOJqzhkLqXdQ82%2FZC7EBMaX%2B26FLfwQqswIjLPal6kTak3zLegF9UnH7W5A1HPtik1FYxGEPtgoM2OeuAGPOIHTXaJw3KM20ypox2ukLe6SmQZS9NxQNkpZr%2F%2FSbmdxOaW7yJtIdg%2FpfkI5CJQoOOatQikJ0gk9dgL7o9EG6yYgNwRSanEksiN96uUC7yAWvfprHoQGXxkLBYlAWurHsTjYPzwHO7pZbcd%2Bnrm%2FUYeM0j9RBABmRaMo%2BPUrygVpQ7fRljUTIQ0To%2BDOpxlBoL%2B5jcI6gj1gxHoEob%2BegoSE1h4S4czUUeGI9EqF4%2BOifQGG52zVe0vt8jzXpNWsICd2IFkQSXfZhsMcg9sbS6FSla86ujVpSx0o2x7X797qEeK4vuogRr6wS8oiOyj%2FP8RdJ%2FP4s2ngMObNhIFiAAjH37RqMO42MIXfa8dcX68UKkaWj%2BvAk50%2B1eo%2BXsWIB5f3snHFa%2FtXYW87dFPFW0QbMqhL1BMnylFdR3Y6BJ%2FV8c8Y9X5xlkU0LWKZpEFS9hPEvenld4mMITnosQGOqUBgXmN1QGLqnWJ1ToRDD6Duax6KHX7SvgcOcOSd6CvTfMf0oijaPMQ%2Fd%2BG%2FVYw0k2o4VgNtckgJtcrso2iDWUq1tFPf3rCW24VEQe8Dy2ZkpH9n0%2Fj8cLfmBTd2%2F3LcRNN8TJbpCoHekPEttbRmpVD1ykfTl17aCjcTOd1bnQs2WVIpi9A0IYHRzRxf0rbV7uLbwEDApA6kEvKX58s8dShebbN18oj&X-Amz-Signature=02368ad80b8771ed05a709f5645a85758250f2826265e13a952423d97a616f2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZREKW3M%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDogaJsR7FHaBFfGwXMTONf%2ByAYdJnsmgQqyKehgeWAkgIgRVuMtPySnPNL3mRHgkr1hjyiMy6Mosoe3zq61UwlT9oqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFEpe9BHnJH9km%2BMCrcAwlZHP9BXmfmujSLJSmLZrJcyOkv%2BJMDHmqkijwgzfCeZ%2FXJ%2FCYdekR71talB0AYlsYN0SJxE4oxhtRdJwSs0%2BgJzA9Lr2DOJqzhkLqXdQ82%2FZC7EBMaX%2B26FLfwQqswIjLPal6kTak3zLegF9UnH7W5A1HPtik1FYxGEPtgoM2OeuAGPOIHTXaJw3KM20ypox2ukLe6SmQZS9NxQNkpZr%2F%2FSbmdxOaW7yJtIdg%2FpfkI5CJQoOOatQikJ0gk9dgL7o9EG6yYgNwRSanEksiN96uUC7yAWvfprHoQGXxkLBYlAWurHsTjYPzwHO7pZbcd%2Bnrm%2FUYeM0j9RBABmRaMo%2BPUrygVpQ7fRljUTIQ0To%2BDOpxlBoL%2B5jcI6gj1gxHoEob%2BegoSE1h4S4czUUeGI9EqF4%2BOifQGG52zVe0vt8jzXpNWsICd2IFkQSXfZhsMcg9sbS6FSla86ujVpSx0o2x7X797qEeK4vuogRr6wS8oiOyj%2FP8RdJ%2FP4s2ngMObNhIFiAAjH37RqMO42MIXfa8dcX68UKkaWj%2BvAk50%2B1eo%2BXsWIB5f3snHFa%2FtXYW87dFPFW0QbMqhL1BMnylFdR3Y6BJ%2FV8c8Y9X5xlkU0LWKZpEFS9hPEvenld4mMITnosQGOqUBgXmN1QGLqnWJ1ToRDD6Duax6KHX7SvgcOcOSd6CvTfMf0oijaPMQ%2Fd%2BG%2FVYw0k2o4VgNtckgJtcrso2iDWUq1tFPf3rCW24VEQe8Dy2ZkpH9n0%2Fj8cLfmBTd2%2F3LcRNN8TJbpCoHekPEttbRmpVD1ykfTl17aCjcTOd1bnQs2WVIpi9A0IYHRzRxf0rbV7uLbwEDApA6kEvKX58s8dShebbN18oj&X-Amz-Signature=5b4f69ad852945828651c96fc85e7dd2b981db5de692f66248aa0fd792f44275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
