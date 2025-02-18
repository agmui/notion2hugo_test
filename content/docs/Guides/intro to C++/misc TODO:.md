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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCFCCEG%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDzhB2wjSy98TCFV%2F628Ljxvs406yaj%2FCYFp4qCo4OY1QIgFbjRil0ZpQnOCJMrN4aZoWnOdvUw4UtjwotAF0Qy73EqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBeYTsY%2F6FTDdMSiircA56LBPagqc7rE8jiByJ723zCpqHcScWnb0Nzib4Bdh3SPPyLvFuETkEx1Rpz7d%2BflGYE2RayD45Ghuok%2B88W2FcxyEw4x8VEoMxybDmP0cH4u%2BNhgXeHo5pWHwmNmxBZB9Lr0XlhyZ0TevmY1TboIijseKJ06XNL%2BRXu0a%2Fx6a%2FxqqcZElx0GHWjRQkwfph%2Brf5YqYRiq4WTIEcr46d8fKwdoQv6zSHKxGdX6zktB%2FXeioH4AuuPTzKPK76FBIDa%2BCzQIXVfhQJqAlsUAXJggEOQd3AVVXKgPTehI0lmo4iHE3hO%2BN7zy%2BE%2BFahbVJBVVHHGqtOi2fHtXgLFwV5Cm7USdZnqG3z6o3NFpYtxTzcZGfphujd5D9%2BI2bJi6gkt2L1vc1MlpVuNlJWvT8A5VHMAuYumlB%2BPPbPMBYMjUiLT%2Bo0ZeX6MoQ66Koz%2Bp9fPURB3uyFU41KQX70KLFKogcxYHxuNJOcMgfHK6MLQ10z6LDOoZZspUHTSjJvnfd09hxh4JYKffejJoBYjjcnVIL4Rium5T8yG0TmtPEOt7HS2FoWiy9vxl9izpwuVD8XfBY%2Bn%2FLaVqEEE%2FoNLwVxdcBcC6%2BqagHbkBTyRB%2FfhAZBSGF2udfKe3HEGKnEsMNap0L0GOqUBteRNOhuSEhaXXNsgdWaOSrO4B2Y793xTp59%2BYO1ozBeB9HcDNhUyhrlHvHZQTrz0%2BoJm29qnmJFTKbUxpdQrUKynAv8JkTZWaiuBn0A5g%2Bwe2508nNu%2FZD7Klwihx%2B18iLvf%2Fo16IL%2F5SZB2gNgc1QZbCjNaMy91SPdcpADz7kHPUYhGaYRvI7AOIIBJkkgp2NokoOqaExQS55YFkOa9ujnFxTaB&X-Amz-Signature=587f1c0a9d233648b467651683b14a15f5ba053c943b73d0dfd542bd6d77ee85&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCFCCEG%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDzhB2wjSy98TCFV%2F628Ljxvs406yaj%2FCYFp4qCo4OY1QIgFbjRil0ZpQnOCJMrN4aZoWnOdvUw4UtjwotAF0Qy73EqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBeYTsY%2F6FTDdMSiircA56LBPagqc7rE8jiByJ723zCpqHcScWnb0Nzib4Bdh3SPPyLvFuETkEx1Rpz7d%2BflGYE2RayD45Ghuok%2B88W2FcxyEw4x8VEoMxybDmP0cH4u%2BNhgXeHo5pWHwmNmxBZB9Lr0XlhyZ0TevmY1TboIijseKJ06XNL%2BRXu0a%2Fx6a%2FxqqcZElx0GHWjRQkwfph%2Brf5YqYRiq4WTIEcr46d8fKwdoQv6zSHKxGdX6zktB%2FXeioH4AuuPTzKPK76FBIDa%2BCzQIXVfhQJqAlsUAXJggEOQd3AVVXKgPTehI0lmo4iHE3hO%2BN7zy%2BE%2BFahbVJBVVHHGqtOi2fHtXgLFwV5Cm7USdZnqG3z6o3NFpYtxTzcZGfphujd5D9%2BI2bJi6gkt2L1vc1MlpVuNlJWvT8A5VHMAuYumlB%2BPPbPMBYMjUiLT%2Bo0ZeX6MoQ66Koz%2Bp9fPURB3uyFU41KQX70KLFKogcxYHxuNJOcMgfHK6MLQ10z6LDOoZZspUHTSjJvnfd09hxh4JYKffejJoBYjjcnVIL4Rium5T8yG0TmtPEOt7HS2FoWiy9vxl9izpwuVD8XfBY%2Bn%2FLaVqEEE%2FoNLwVxdcBcC6%2BqagHbkBTyRB%2FfhAZBSGF2udfKe3HEGKnEsMNap0L0GOqUBteRNOhuSEhaXXNsgdWaOSrO4B2Y793xTp59%2BYO1ozBeB9HcDNhUyhrlHvHZQTrz0%2BoJm29qnmJFTKbUxpdQrUKynAv8JkTZWaiuBn0A5g%2Bwe2508nNu%2FZD7Klwihx%2B18iLvf%2Fo16IL%2F5SZB2gNgc1QZbCjNaMy91SPdcpADz7kHPUYhGaYRvI7AOIIBJkkgp2NokoOqaExQS55YFkOa9ujnFxTaB&X-Amz-Signature=ec69e66e9441e7f1c9fea5fabc8ff43781fa8aa3d57c6fb1fca0b5c376861105&X-Amz-SignedHeaders=host&x-id=GetObject)

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
