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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5OUJP5B%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD89dnjSsy2e7dssVlZbBi41lDwWW7dJjtFHqFwUgEUXwIgGnBqF8DAUav5PRXs1%2FSs5d5VCP5Y09sbFy6kBIgB6SYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKa4HXIGMG2DrJPN4yrcA7lAXsLdALOayueBRDocca5ewSBRG9yHfAF8p2OrhZWlN3bIvfRse10%2BUbvZTTe6t%2FXlQkkiMmTbWAxVGum7aGcyNAWvi9JG7EP8gepXOH44hlBNauIy7oU%2FQxiOpa0qz%2FlJBJspwfjmUcpRsPuYcb4d0PchHPS7wbKYTB%2BSd1ECIqAhGRNosFmSIF4n2bOtIewMdKDfuMPOMcg%2FsbHUEIe%2FhYZiCYPBuOPeP8wdWsINC7ZZR8vSKBki3L6fhRvBMHKPnKKCU7k2hkSGemjftNdY%2F2JSJkdrjc2aSMmFNAWTaLKbZjJW3XnpdT0vRpu97BC%2F0SyA015puFLTU4HfXuVM8ARI9l6kRX2y%2BB3cuvC0DQ6Mpk%2FEod77RNKk6%2FPbBjnEfqp3FLaLdlVlL3jc1HXHs56M0xhrO16clrUbIO1dMeyybKzz4clK8M8o1K1Aovwjw0v29qqLb2mDUPhFeBfYT3WkomNO6yfO9%2FD%2FHgSpkeVaGW5BosyCbQpCzl2MfavKnU7gwB3IivNdEiXflFA5u%2FXNFPEi4FIKP7wT2Wr522ETy5olTFzHkgeLTCuL0QC8OBLQJR0%2BrupKE%2FoCmscPYP030Q4eFLbWF2qUz1cU2dCY66fGrv1KBt4YMPui%2BsQGOqUBbX9MZ%2BdGk1%2BwPZ6jNfZwMQ06DED%2BJ4%2BjqtO66se5jB9Vnvu0XvRbDUn3qRDOvBYT%2FHOWGAu%2BfhFWCgEq2FL08yexfjHlWaZ6n%2FWQjJUidqNkagjpTqPdyD7CHIAaDobViM6ZPrOr56YOe3TwNhIDtk7Xe634EN2sYaAvsKCk%2FNTbmT6tARFZXCzQuu%2F6lSkYwZloZehPFwjOzXsAHegY0lI92WDr&X-Amz-Signature=019dae78bd33f0ce552607e22e3cdeb002c1dfc750448dfa10bd0233368b0899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5OUJP5B%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD89dnjSsy2e7dssVlZbBi41lDwWW7dJjtFHqFwUgEUXwIgGnBqF8DAUav5PRXs1%2FSs5d5VCP5Y09sbFy6kBIgB6SYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKa4HXIGMG2DrJPN4yrcA7lAXsLdALOayueBRDocca5ewSBRG9yHfAF8p2OrhZWlN3bIvfRse10%2BUbvZTTe6t%2FXlQkkiMmTbWAxVGum7aGcyNAWvi9JG7EP8gepXOH44hlBNauIy7oU%2FQxiOpa0qz%2FlJBJspwfjmUcpRsPuYcb4d0PchHPS7wbKYTB%2BSd1ECIqAhGRNosFmSIF4n2bOtIewMdKDfuMPOMcg%2FsbHUEIe%2FhYZiCYPBuOPeP8wdWsINC7ZZR8vSKBki3L6fhRvBMHKPnKKCU7k2hkSGemjftNdY%2F2JSJkdrjc2aSMmFNAWTaLKbZjJW3XnpdT0vRpu97BC%2F0SyA015puFLTU4HfXuVM8ARI9l6kRX2y%2BB3cuvC0DQ6Mpk%2FEod77RNKk6%2FPbBjnEfqp3FLaLdlVlL3jc1HXHs56M0xhrO16clrUbIO1dMeyybKzz4clK8M8o1K1Aovwjw0v29qqLb2mDUPhFeBfYT3WkomNO6yfO9%2FD%2FHgSpkeVaGW5BosyCbQpCzl2MfavKnU7gwB3IivNdEiXflFA5u%2FXNFPEi4FIKP7wT2Wr522ETy5olTFzHkgeLTCuL0QC8OBLQJR0%2BrupKE%2FoCmscPYP030Q4eFLbWF2qUz1cU2dCY66fGrv1KBt4YMPui%2BsQGOqUBbX9MZ%2BdGk1%2BwPZ6jNfZwMQ06DED%2BJ4%2BjqtO66se5jB9Vnvu0XvRbDUn3qRDOvBYT%2FHOWGAu%2BfhFWCgEq2FL08yexfjHlWaZ6n%2FWQjJUidqNkagjpTqPdyD7CHIAaDobViM6ZPrOr56YOe3TwNhIDtk7Xe634EN2sYaAvsKCk%2FNTbmT6tARFZXCzQuu%2F6lSkYwZloZehPFwjOzXsAHegY0lI92WDr&X-Amz-Signature=b470b153d64ea9abbe9dbf8216fdf4e1575b1657a8952ddf9eb3cb82f0607719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
