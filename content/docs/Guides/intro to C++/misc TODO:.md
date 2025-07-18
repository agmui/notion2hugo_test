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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIH7IJDO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIATB7I4HcLRmNh7zbqnvb%2Fv2rscLFe9CghFWLByCW6Q5AiAkCZJKIidIjkCvuSnSJ%2BOkCPf7S8VNtgMUTjJuQLqHNSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0kBeWEN1mM%2BWWD8VKtwDwF7lycgvnxj0XCIKRchIDJ2q%2FLT%2BsTbGRfCg0pSs%2B0MjEafbqmGMWfHBUVJlixswElODBT0zgh9sZ4o%2BBDdBSScxnIxzF7TU2viH8%2BCupWJmR1usZaHJ8bVYWMhb6JIuu%2FuglWnPLYVRd2Md8F79lvRrev8IDqsN00mUoS7IyuYSXm02P%2Bl7MPX1SadCARekDH4Mrk84bzvwij8SxsfS44e01xRxwt4TodrHnpLmLdID4BbFMX%2FYEl58jizhz8OtrMcoKI1JKyAUti%2FX6BwvitGzShUKM4YUC9c%2FNjXktndTE4RQus5Vd2L4gaX%2FObm2mCVMb8kC0aFgAvG9I%2BfFdXcMxCZ2wI4mIirYKBEX9q4cGef1jH%2F3VpWFDbDmIpSYSwj9fS%2BH%2B%2BXhOvC8Xph4lFpdzUNVbG1XRKdE2zMqTGvqlbOPYVZYTE9AGUDnozRN%2FfJR4zW58fSHnx0FwRnfXNgY1KH68sthJskmi0G4rNwgVDX3AFEjIuSBPg2vhhsPr8D3oz2518AINBY8nR7AM9Ruk52yEciOUX89RYDghlOdZQ%2BMCJFIIe%2BEDdwpxe7RBAA38lfJ40OL3sotXnV9%2BDONMKcPoCzaQDgsuPEB6UdGTuoUup7O2atm2TIw9c%2FowwY6pgFr%2FtyxZpkTJ2RmaPEaO0KUlrgTnWCepxa4rAiIdtuYtRUu1NQBiy33gC93jAZEHJCeI7FN%2BsGYd83O%2FrRJZU0l%2F0ZT9nbJR7qcIMaeahRYgE7gDdcq1sQPWGDqaxAMY7fiW8UY4c1XHhaL3WBj7EKfXk%2FvjvEDTHuXwGYFhAaK44hsAPI8Gdc%2BMiaZhtxUIBtfd%2FAmP4em9P3y%2FNJoYlCU%2FqHwMCTi&X-Amz-Signature=fe76f91405a3bd4b115af0072e109a80836d14c3324ffbde459868cabde28338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIH7IJDO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIATB7I4HcLRmNh7zbqnvb%2Fv2rscLFe9CghFWLByCW6Q5AiAkCZJKIidIjkCvuSnSJ%2BOkCPf7S8VNtgMUTjJuQLqHNSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0kBeWEN1mM%2BWWD8VKtwDwF7lycgvnxj0XCIKRchIDJ2q%2FLT%2BsTbGRfCg0pSs%2B0MjEafbqmGMWfHBUVJlixswElODBT0zgh9sZ4o%2BBDdBSScxnIxzF7TU2viH8%2BCupWJmR1usZaHJ8bVYWMhb6JIuu%2FuglWnPLYVRd2Md8F79lvRrev8IDqsN00mUoS7IyuYSXm02P%2Bl7MPX1SadCARekDH4Mrk84bzvwij8SxsfS44e01xRxwt4TodrHnpLmLdID4BbFMX%2FYEl58jizhz8OtrMcoKI1JKyAUti%2FX6BwvitGzShUKM4YUC9c%2FNjXktndTE4RQus5Vd2L4gaX%2FObm2mCVMb8kC0aFgAvG9I%2BfFdXcMxCZ2wI4mIirYKBEX9q4cGef1jH%2F3VpWFDbDmIpSYSwj9fS%2BH%2B%2BXhOvC8Xph4lFpdzUNVbG1XRKdE2zMqTGvqlbOPYVZYTE9AGUDnozRN%2FfJR4zW58fSHnx0FwRnfXNgY1KH68sthJskmi0G4rNwgVDX3AFEjIuSBPg2vhhsPr8D3oz2518AINBY8nR7AM9Ruk52yEciOUX89RYDghlOdZQ%2BMCJFIIe%2BEDdwpxe7RBAA38lfJ40OL3sotXnV9%2BDONMKcPoCzaQDgsuPEB6UdGTuoUup7O2atm2TIw9c%2FowwY6pgFr%2FtyxZpkTJ2RmaPEaO0KUlrgTnWCepxa4rAiIdtuYtRUu1NQBiy33gC93jAZEHJCeI7FN%2BsGYd83O%2FrRJZU0l%2F0ZT9nbJR7qcIMaeahRYgE7gDdcq1sQPWGDqaxAMY7fiW8UY4c1XHhaL3WBj7EKfXk%2FvjvEDTHuXwGYFhAaK44hsAPI8Gdc%2BMiaZhtxUIBtfd%2FAmP4em9P3y%2FNJoYlCU%2FqHwMCTi&X-Amz-Signature=ad986215f519931debab1b60f951ce9f42a1403825af3e79fb86321e60951c64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
