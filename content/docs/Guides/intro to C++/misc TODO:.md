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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZYZBBOE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZjy289dT3pcgM1vOKiQRiQyAEPWZ%2B%2Fm%2ByBqQoXc9NCAiBnjzB6E9qeHaFqRQpsdL3z4NZyQ6QDaAhu88uKof342CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNmnbqFpXwR2b3JkqKtwDlIzUCJ1Aq%2F5F3qy0Z9%2FSSZi4%2FwhPQuqPLvlWLi%2B7QE2ExeszsWSyHIzB9K5Wl1TmR%2Bb%2FWcCtHs7jn2oFb5sbgEWyL2%2BbaR8eIb%2F4yQLG1LwEMgReQ6hBgmAJRpJRkA%2BosV6avDcjuc%2FawdxXqLKarYuBp%2BspN3LgxwMpAJ6MRMQyPtYTKKWHwoksN7dCtj%2FG7cHJMuXhk7G9n4wuY2z%2BJpiH0ha4jJU1Z8ENOy9zoav09Dq7jR0BdClGkWOnJiW1y1QAnz5DK46dwukNsMLHoDC9psKIRO0vBGTWWVVJj%2F5goAF7SM%2FhHzbdspsCEIuVNycj0k01DczZ1KkAq5HWCaNV9Nm32AQDe%2FSr%2BUaryzz8118MOnkbFwVRbpCr0WmtixJdcNh%2FS2ICvusEWsTpL%2Fn%2Bk5bSHxLeTX9HItjXie2QvQpFP2RD2jcCYcXUMmFj5JmIeiIhOfEvcAFEH5iiZsLkokckLker2RDEGDGyM%2BBc0ikpGTQjRxcmsrQVwoImGLzd6EeBQhE3drb8wpOxycB36U%2B%2FgnBTn%2FBASXugMfXEcAEFYH%2BQVav0jWMXI4ycN%2B7VMqUifKPTpbPH9eJbcGniKGg2a%2BJJ1jQWDrHBbLixRaSkvTmA7AHoupwwkvn2wAY6pgHocQKNI0rgzJFaxSqyw%2FquNaI81ZE0I7fgwFZuEJRjR2YjW4YhvVxraf5Mo70q5LYZO3kEPGQkPgQDWgDqWAKAOC1CrdVDTRg2Fp8qyQDsC0BW5dKVMhN1w0Xr63PT8UIOrxZ2eg3GPqItne62n%2BWYCRKXOn0fLkgfp2oquBD1QJg8DIvzGd2Ic0SS19iAkO8Ok4GVAgmLFgwpo3e4G%2Fqb6m4uev9N&X-Amz-Signature=a313d7d99039d07f2e00490348fa872574a0a6e443cc88b43440596c61376e2e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZYZBBOE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZjy289dT3pcgM1vOKiQRiQyAEPWZ%2B%2Fm%2ByBqQoXc9NCAiBnjzB6E9qeHaFqRQpsdL3z4NZyQ6QDaAhu88uKof342CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNmnbqFpXwR2b3JkqKtwDlIzUCJ1Aq%2F5F3qy0Z9%2FSSZi4%2FwhPQuqPLvlWLi%2B7QE2ExeszsWSyHIzB9K5Wl1TmR%2Bb%2FWcCtHs7jn2oFb5sbgEWyL2%2BbaR8eIb%2F4yQLG1LwEMgReQ6hBgmAJRpJRkA%2BosV6avDcjuc%2FawdxXqLKarYuBp%2BspN3LgxwMpAJ6MRMQyPtYTKKWHwoksN7dCtj%2FG7cHJMuXhk7G9n4wuY2z%2BJpiH0ha4jJU1Z8ENOy9zoav09Dq7jR0BdClGkWOnJiW1y1QAnz5DK46dwukNsMLHoDC9psKIRO0vBGTWWVVJj%2F5goAF7SM%2FhHzbdspsCEIuVNycj0k01DczZ1KkAq5HWCaNV9Nm32AQDe%2FSr%2BUaryzz8118MOnkbFwVRbpCr0WmtixJdcNh%2FS2ICvusEWsTpL%2Fn%2Bk5bSHxLeTX9HItjXie2QvQpFP2RD2jcCYcXUMmFj5JmIeiIhOfEvcAFEH5iiZsLkokckLker2RDEGDGyM%2BBc0ikpGTQjRxcmsrQVwoImGLzd6EeBQhE3drb8wpOxycB36U%2B%2FgnBTn%2FBASXugMfXEcAEFYH%2BQVav0jWMXI4ycN%2B7VMqUifKPTpbPH9eJbcGniKGg2a%2BJJ1jQWDrHBbLixRaSkvTmA7AHoupwwkvn2wAY6pgHocQKNI0rgzJFaxSqyw%2FquNaI81ZE0I7fgwFZuEJRjR2YjW4YhvVxraf5Mo70q5LYZO3kEPGQkPgQDWgDqWAKAOC1CrdVDTRg2Fp8qyQDsC0BW5dKVMhN1w0Xr63PT8UIOrxZ2eg3GPqItne62n%2BWYCRKXOn0fLkgfp2oquBD1QJg8DIvzGd2Ic0SS19iAkO8Ok4GVAgmLFgwpo3e4G%2Fqb6m4uev9N&X-Amz-Signature=c3dabf4c25f0acf170c1962672d0f13a001f72375c5702a6f15beb0dd3b72887&X-Amz-SignedHeaders=host&x-id=GetObject)

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
