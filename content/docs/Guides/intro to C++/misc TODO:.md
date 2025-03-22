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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEHP354R%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC2RMPz7e5C842jpyfMjVOO6XlToIelim1coth9bhlgTAIhAPi1bQmEqzL6mzr8Z5TQ86PcLAQsqeMNVFany8yZ1DiHKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy8T%2BiqKmBhcjn4U4q3AOPRuJViqgpK1CFzt1h6Bo3h6lExahfe3cNnLbhIdzU6LWtU3XugbpWd3VSOFuQ4SWBnjfET1LNP3KIVVMuva%2FPvZzhKZJdhS0Mu8d%2F5uDquFyANVPQgUDgPWYZiQlDJB3BeCrYAfkNcdXztfj721Yb%2FaRMq1XcWjpxrriMfZRp0v4%2FzV5Gm9VdJEinec2xFw7YHCO4Ark5miZEGVAOpqm%2FIr5faI3FfLGRVEprYm%2FIfx7F8SRJgGBNHT07oqHgz6%2BPO77SfbUk6Q2qgfOD%2FpS0JjLaRu99ZyQYBQZUStHgzsjlFCxnW35Rtoug7H2A8GQo%2BAC%2F3fcIN66qoqr7T3l0%2B8MYDJeIwtpwflYWdyWD%2B%2FzR%2Bopft85dOIGXlnT9ellAQSRjn1PX2wpORlE0NZIQv2V8kO3pMJmI8wkb%2BQoHLM5%2FwwHuEepJu7eH5LPTys2OM84KX8ImgYTsz6rj96MIbIUZ96WILEl9Uy%2Bzpq11iptykChQ51HVcKS4VCdXDHD6UusljW9ndqLJ79q75yJiHbydBSypTuF03QGqvQvXJzziVek3i97xF%2FpIS5SoX1SxMI8%2B0emWTGDueDtAwzxZZFxmkNmtqnLDh34zQJLoHHDkEBo1jIpq%2B0QYIjDT7Pm%2BBjqkAXHmHF2g%2FRiLo%2BvAgU9Al5DGGGtJWLH6wmisRN64AH1XVJ0e8AqkleACp7bqZ861R6514dwFVtQvpoIPbVxWs4Ny5At7WrwT%2FsuI1XFNIO8tcj13QfC95m71MMzZrrmtltEuYA1BZmWw5kim95jc3%2FXW7JnPpDgHKH4rjis69e8GWiRVqIgtXfppqxVsoZRQLxkHmIX8eCArz%2FhyztAO9XT3Wwn%2B&X-Amz-Signature=6e70238d0257dc7682264db96bde73ae5a4298cfa00c4b8f9e4da2ba1e84dea3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEHP354R%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC2RMPz7e5C842jpyfMjVOO6XlToIelim1coth9bhlgTAIhAPi1bQmEqzL6mzr8Z5TQ86PcLAQsqeMNVFany8yZ1DiHKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy8T%2BiqKmBhcjn4U4q3AOPRuJViqgpK1CFzt1h6Bo3h6lExahfe3cNnLbhIdzU6LWtU3XugbpWd3VSOFuQ4SWBnjfET1LNP3KIVVMuva%2FPvZzhKZJdhS0Mu8d%2F5uDquFyANVPQgUDgPWYZiQlDJB3BeCrYAfkNcdXztfj721Yb%2FaRMq1XcWjpxrriMfZRp0v4%2FzV5Gm9VdJEinec2xFw7YHCO4Ark5miZEGVAOpqm%2FIr5faI3FfLGRVEprYm%2FIfx7F8SRJgGBNHT07oqHgz6%2BPO77SfbUk6Q2qgfOD%2FpS0JjLaRu99ZyQYBQZUStHgzsjlFCxnW35Rtoug7H2A8GQo%2BAC%2F3fcIN66qoqr7T3l0%2B8MYDJeIwtpwflYWdyWD%2B%2FzR%2Bopft85dOIGXlnT9ellAQSRjn1PX2wpORlE0NZIQv2V8kO3pMJmI8wkb%2BQoHLM5%2FwwHuEepJu7eH5LPTys2OM84KX8ImgYTsz6rj96MIbIUZ96WILEl9Uy%2Bzpq11iptykChQ51HVcKS4VCdXDHD6UusljW9ndqLJ79q75yJiHbydBSypTuF03QGqvQvXJzziVek3i97xF%2FpIS5SoX1SxMI8%2B0emWTGDueDtAwzxZZFxmkNmtqnLDh34zQJLoHHDkEBo1jIpq%2B0QYIjDT7Pm%2BBjqkAXHmHF2g%2FRiLo%2BvAgU9Al5DGGGtJWLH6wmisRN64AH1XVJ0e8AqkleACp7bqZ861R6514dwFVtQvpoIPbVxWs4Ny5At7WrwT%2FsuI1XFNIO8tcj13QfC95m71MMzZrrmtltEuYA1BZmWw5kim95jc3%2FXW7JnPpDgHKH4rjis69e8GWiRVqIgtXfppqxVsoZRQLxkHmIX8eCArz%2FhyztAO9XT3Wwn%2B&X-Amz-Signature=b782bce87b1954362fc45948dfdad6e65efd1590d34c6af6922d4124c1fbd54d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
