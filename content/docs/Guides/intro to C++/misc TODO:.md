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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHNZYOKY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHkyPtWcjw%2BkjY67VZsGl30tvUlsDb6gaDsB%2FJJOkRd6AiEA9%2BdEWkd8tIOXRq3lirVcI3l%2F%2FcS1qG1NO7ZP3HAlo%2F4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDN0XtdEsHBOjqRbgcircAx9fuN3z1skzNyjUUGNPJzXRQm7APmE3jTYm%2Frzx3Hv%2BpIWt5ZtEfQw%2BPPLEz9v%2B04zpeQQtGYhGQcQ5tbmaS%2FM8KTO5T3L8DqJxHTpHj8BPQYerLiitH4ESpEDaZAvy4upCmxjwPefZi95rSNqXckcaQZ1rdq8Y%2FNsJ%2BLp2y5RXmHpobHw%2Ffz9S%2Fj98BXaWrRIZ%2BGDzY%2BUatVuydIp%2BE5FSXN298hoAAY38f1jwRdP7M9Wpobn5APeCMEBBJPe0GQfd4LiQsj8TsSyK04%2BC55ZS%2FNaR42BW5%2FK7srjDM8CTE3eOn9eYcq0cKLUZQRV4gHCI4sVStqtxNzjkqtpH2O5oaS4YfMfB%2FfL46RMgv2PJpCoXdIwjnyvRN8puCSOgHAu%2FQ0j44jgvHIQdrjtoTkqVmXkYZttq4tcZ%2FydkImTEbo8CTvgRu%2Bdb1DzDKfj9XxeVdG%2BV4o8ESCozJgQKeNle%2B1O4%2FCpWxQp%2FokonPgM%2F3rwBUU8d6LyFvyjHnOw%2Bfwb%2FebRPOL23EaYk5BUQHm6Zfeo5aKG4cjTKqr1bl2%2BaTsMV2NDsiYj2vxXS8Qd4sySuRx4xKhWQujQQUCbS%2BMjimcdovlZXX3dzGhoB15bjz4mc%2FEMAmLML1F6EMKjrtL4GOqUBtz7s9DC61nRJynQ3feTEJJbEXiDe6xTYo1WrFpXaFuywN5NgEXesXivelHeQkUBiWeJfqRjSSdxduHX%2BPZUlkxS5b8M%2BvzYvqLeMDqRpVpcMJKr7lk6XGoO24N6%2FQ%2BZ0sJXtuvOQrO6xBkZybECCQnDcXZJmBMQBekL2ybvDQOmPqgIpnbH5SOZogqr6d1l%2FsbbpTO7C%2B8SMg7zACAe1ZcrZDMM4&X-Amz-Signature=5c398eee4ee8caadb690ae64fdc77c90b8b518b57a44952db148fd0ca51197a8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHNZYOKY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHkyPtWcjw%2BkjY67VZsGl30tvUlsDb6gaDsB%2FJJOkRd6AiEA9%2BdEWkd8tIOXRq3lirVcI3l%2F%2FcS1qG1NO7ZP3HAlo%2F4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDN0XtdEsHBOjqRbgcircAx9fuN3z1skzNyjUUGNPJzXRQm7APmE3jTYm%2Frzx3Hv%2BpIWt5ZtEfQw%2BPPLEz9v%2B04zpeQQtGYhGQcQ5tbmaS%2FM8KTO5T3L8DqJxHTpHj8BPQYerLiitH4ESpEDaZAvy4upCmxjwPefZi95rSNqXckcaQZ1rdq8Y%2FNsJ%2BLp2y5RXmHpobHw%2Ffz9S%2Fj98BXaWrRIZ%2BGDzY%2BUatVuydIp%2BE5FSXN298hoAAY38f1jwRdP7M9Wpobn5APeCMEBBJPe0GQfd4LiQsj8TsSyK04%2BC55ZS%2FNaR42BW5%2FK7srjDM8CTE3eOn9eYcq0cKLUZQRV4gHCI4sVStqtxNzjkqtpH2O5oaS4YfMfB%2FfL46RMgv2PJpCoXdIwjnyvRN8puCSOgHAu%2FQ0j44jgvHIQdrjtoTkqVmXkYZttq4tcZ%2FydkImTEbo8CTvgRu%2Bdb1DzDKfj9XxeVdG%2BV4o8ESCozJgQKeNle%2B1O4%2FCpWxQp%2FokonPgM%2F3rwBUU8d6LyFvyjHnOw%2Bfwb%2FebRPOL23EaYk5BUQHm6Zfeo5aKG4cjTKqr1bl2%2BaTsMV2NDsiYj2vxXS8Qd4sySuRx4xKhWQujQQUCbS%2BMjimcdovlZXX3dzGhoB15bjz4mc%2FEMAmLML1F6EMKjrtL4GOqUBtz7s9DC61nRJynQ3feTEJJbEXiDe6xTYo1WrFpXaFuywN5NgEXesXivelHeQkUBiWeJfqRjSSdxduHX%2BPZUlkxS5b8M%2BvzYvqLeMDqRpVpcMJKr7lk6XGoO24N6%2FQ%2BZ0sJXtuvOQrO6xBkZybECCQnDcXZJmBMQBekL2ybvDQOmPqgIpnbH5SOZogqr6d1l%2FsbbpTO7C%2B8SMg7zACAe1ZcrZDMM4&X-Amz-Signature=8ca9c1fa9c0eac28d6c9649f73fa2f2df21625888c74969992eb202399509b57&X-Amz-SignedHeaders=host&x-id=GetObject)

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
