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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTVDYNTJ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFXnb6kOKdQqKqxKJELosGjbQDnJYL94bA8n87hxNYboAiEAw7W0iIAbD%2FOGubFIG0PDuPVy6drLMSqj86pvUK8zs0AqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8OPX6FXLkBQqs2MSrcA%2Fo7sRA%2FvuYiBIByDMTbFnNtm2TOyf9OvoCFpccHqtibNbHp%2FGF29RtwrxUVR5gXLa%2Bscf9W6AfvrQH%2BEol6asnRD85PeLmbS4M%2B64D2Pjg0egL4JUF%2Ft3Jek6s7olQblDuSPo7PQwEasrCn65ZrP0wTPPGRA5%2FgvJ2gfRKJQObzfvh7KBBdcV7Ikgukx4rIUoK05%2Fm33839w6jQYQj5S%2Fg0DhSyf9SqHK0%2FWnhBeAxUeFJ%2BSlNE6cZsHvVCHHzrzlvRandsYYG4q3PdXStwEmOeiPv7eOzVWOwSoW3HsoXFGPgfMgvFECK%2By4kC11d22Y0CaZEK2GOAd2tz9sqet5dJxVDC%2BubN7o4KWc0NQWfWfSb8FfYfzt232cuO%2FEJ3uOVEyKMd3SxHPb6Be20hdpCnHaj8ZKU4EKrlnwXAdh1KdwItOWOw4dHw1%2BJdlh0wSU4vSI3ckFGkU%2BgJBO7avasMy%2FxZb31sgAjIKRysXIv4DeNNAtIk6zttvMH%2FQPCJx7Sse1MUCqRGegp3cC2929hANiet%2B2bS8Z%2Bl6g20WzNisAgJGsxGG6mDXU%2BblL%2BijKL9bF%2Fe%2FCt%2BZsAnoFHGnqRK2uyLWBmIrpxrcKdLh6O8J93BdRvzXjNpB5%2FyMPuj8b4GOqUBPVa1w077wAOF6a%2BdX%2Fe9GUiZ0QkHQaAYhK6sZ7kYoiGz3uYvKehkOBBpQ4taHVjujqqwV1WkBRHd1aS%2B7MCOv198h9BMIBDqoXUCo0dfvJLSdseRVmtmjfoop%2F10x9o7NY3EHGzHiJP3lgh6hsPabhv3UXJEfSkq0B%2F2VYiNh4r53cQGvMfG%2FcuOhgv4V5HZz2uQHuhxtJJH7YlQURniNLHCnOwS&X-Amz-Signature=c579ef293c0fc0aad3ab6921d1feda687f356c1c43fa0bd06ec35a2a63cbb4be&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTVDYNTJ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFXnb6kOKdQqKqxKJELosGjbQDnJYL94bA8n87hxNYboAiEAw7W0iIAbD%2FOGubFIG0PDuPVy6drLMSqj86pvUK8zs0AqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8OPX6FXLkBQqs2MSrcA%2Fo7sRA%2FvuYiBIByDMTbFnNtm2TOyf9OvoCFpccHqtibNbHp%2FGF29RtwrxUVR5gXLa%2Bscf9W6AfvrQH%2BEol6asnRD85PeLmbS4M%2B64D2Pjg0egL4JUF%2Ft3Jek6s7olQblDuSPo7PQwEasrCn65ZrP0wTPPGRA5%2FgvJ2gfRKJQObzfvh7KBBdcV7Ikgukx4rIUoK05%2Fm33839w6jQYQj5S%2Fg0DhSyf9SqHK0%2FWnhBeAxUeFJ%2BSlNE6cZsHvVCHHzrzlvRandsYYG4q3PdXStwEmOeiPv7eOzVWOwSoW3HsoXFGPgfMgvFECK%2By4kC11d22Y0CaZEK2GOAd2tz9sqet5dJxVDC%2BubN7o4KWc0NQWfWfSb8FfYfzt232cuO%2FEJ3uOVEyKMd3SxHPb6Be20hdpCnHaj8ZKU4EKrlnwXAdh1KdwItOWOw4dHw1%2BJdlh0wSU4vSI3ckFGkU%2BgJBO7avasMy%2FxZb31sgAjIKRysXIv4DeNNAtIk6zttvMH%2FQPCJx7Sse1MUCqRGegp3cC2929hANiet%2B2bS8Z%2Bl6g20WzNisAgJGsxGG6mDXU%2BblL%2BijKL9bF%2Fe%2FCt%2BZsAnoFHGnqRK2uyLWBmIrpxrcKdLh6O8J93BdRvzXjNpB5%2FyMPuj8b4GOqUBPVa1w077wAOF6a%2BdX%2Fe9GUiZ0QkHQaAYhK6sZ7kYoiGz3uYvKehkOBBpQ4taHVjujqqwV1WkBRHd1aS%2B7MCOv198h9BMIBDqoXUCo0dfvJLSdseRVmtmjfoop%2F10x9o7NY3EHGzHiJP3lgh6hsPabhv3UXJEfSkq0B%2F2VYiNh4r53cQGvMfG%2FcuOhgv4V5HZz2uQHuhxtJJH7YlQURniNLHCnOwS&X-Amz-Signature=7e05a85f40594b8523183a130c1293b232c989bc8c33b8d48c77ea268b7298f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
