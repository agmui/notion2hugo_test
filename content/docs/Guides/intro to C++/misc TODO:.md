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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBKGHXI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCgtf%2BwAz4j7HkUVJTNn0X%2BPIGJoahVuSr79LCqFnGk4QIgYuYPIqJ9iGsRIaMdlPjpTusHMrXfE1EJ3pbh4ULQ1MIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoTzXhRB%2FlKS5WMiSrcA4VF9ST5lJvCBAJJuCF%2F3rd5qFnUn4vmbnRF%2Bv%2BoBvYtdqoP6d%2F3sR53akdxRFNpG3SsN%2BFO4C6yp%2BqCchbu2pVBxC2f9qRdm9okc1giIXWL0t7vnTyXfI4sbDfx0BDvhNboD%2BCMo37FxsIpMXnXWphkoeeFYbjB3b8P8F3f4P%2Bus3Ol5sFRrnhzUP3IwVIEKmPdofn2ZjMpquJv702ms%2Brwuff1ZTUoZp7Bi659UdXyZQdMGDdwuitDN9bbQvRzocNbL%2Fn%2Fvwmni5oM4izpUCOrTVnI7hO94wFigZXmucm3kkOHdj1MkH31ur85sT185hL3KuG1fYnTKZq6nKpagljH%2B3IJeLnQYPasYlmg%2BANJ89grUzlBmnD4W%2BWWTElVnvs0gy7j3YncP7lCtVnDUERopb6W8UP8eihla8CIhDhVcFuowfkHan%2FX0LOMjUE1uGsIbk9QIa9nNSShi%2BdJzW7ZJjMd%2FJmwov%2BoZV8IPajushrzt8qLwIkDIk0NUWL6fvyGRxuZnYb1odhJQuCiG9ggco86SIcKfBT8iGpfeGvLEDaphBW6PViB1BgiCXULknmcy0CcxjiFCD5TzGiAAC3JNG%2FjIyk3fJIZ31NYe0u7%2BsPYSnHdsTFqQuA0MIuVjL4GOqUBUiUsQgd%2BrZHCL5OWV6%2BYH5IKGetUAU9bpR2B2fCmx0GsLbBw3MarBnrCVU1UfZ3t1j7CF9jdW4F9j3sZqlukhVhdvaFeCfP839N5uavXgZ6yJGQTY%2B3Tq34iuj%2FICO88fsWMk0Hduz%2FKN7keCpHfkZ2k0edcXDaXJmnJz4ReQFWe5CZy5J6rD2%2BOShczX4Nf4jBRd6ym1mn6zDV6CpQzNsrrs6vs&X-Amz-Signature=dc50dc1981e7dd3f0e2f4121f2cc4e12f3a807f08bd0df9be4e2ecd87ac2dab8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBKGHXI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCgtf%2BwAz4j7HkUVJTNn0X%2BPIGJoahVuSr79LCqFnGk4QIgYuYPIqJ9iGsRIaMdlPjpTusHMrXfE1EJ3pbh4ULQ1MIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoTzXhRB%2FlKS5WMiSrcA4VF9ST5lJvCBAJJuCF%2F3rd5qFnUn4vmbnRF%2Bv%2BoBvYtdqoP6d%2F3sR53akdxRFNpG3SsN%2BFO4C6yp%2BqCchbu2pVBxC2f9qRdm9okc1giIXWL0t7vnTyXfI4sbDfx0BDvhNboD%2BCMo37FxsIpMXnXWphkoeeFYbjB3b8P8F3f4P%2Bus3Ol5sFRrnhzUP3IwVIEKmPdofn2ZjMpquJv702ms%2Brwuff1ZTUoZp7Bi659UdXyZQdMGDdwuitDN9bbQvRzocNbL%2Fn%2Fvwmni5oM4izpUCOrTVnI7hO94wFigZXmucm3kkOHdj1MkH31ur85sT185hL3KuG1fYnTKZq6nKpagljH%2B3IJeLnQYPasYlmg%2BANJ89grUzlBmnD4W%2BWWTElVnvs0gy7j3YncP7lCtVnDUERopb6W8UP8eihla8CIhDhVcFuowfkHan%2FX0LOMjUE1uGsIbk9QIa9nNSShi%2BdJzW7ZJjMd%2FJmwov%2BoZV8IPajushrzt8qLwIkDIk0NUWL6fvyGRxuZnYb1odhJQuCiG9ggco86SIcKfBT8iGpfeGvLEDaphBW6PViB1BgiCXULknmcy0CcxjiFCD5TzGiAAC3JNG%2FjIyk3fJIZ31NYe0u7%2BsPYSnHdsTFqQuA0MIuVjL4GOqUBUiUsQgd%2BrZHCL5OWV6%2BYH5IKGetUAU9bpR2B2fCmx0GsLbBw3MarBnrCVU1UfZ3t1j7CF9jdW4F9j3sZqlukhVhdvaFeCfP839N5uavXgZ6yJGQTY%2B3Tq34iuj%2FICO88fsWMk0Hduz%2FKN7keCpHfkZ2k0edcXDaXJmnJz4ReQFWe5CZy5J6rD2%2BOShczX4Nf4jBRd6ym1mn6zDV6CpQzNsrrs6vs&X-Amz-Signature=c262ba28fa8a88911ba0388893e5146bb0ac722c304db31d5df7cc4c4674835c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
