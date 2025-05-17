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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5VG4PE5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJQTR%2BqrNew3j9etI5xpvvkolgB4OcYwsfftJ9fBQBRwIgJW46iywza1JI293ydyzjutih3zYSb%2FWYT8fa0YAg6yoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPX4nbRMihj0Nh7edCrcA7LliZTm0nPF6Cc%2B7ko0GaxtnvtX7gx8fRdDkQKCRt%2FJRDhUk%2BqPaukQQa%2FwBTESDFIGEoA5E1UqxS4NGvKp6qVF4nRHHSgcTZ1nPTfdLZ4fFKUYx0vTRox7B%2FLBGjexKpqiVebbLLM2i9iAg4t3AYqLFVu8GL%2B5hN3XAI%2Bvxs%2FJ6UVwRtuwAKUeI8LG41J5GANU%2BEoKIr3WhUlloXpY%2BOeR4vkm0SRROlclFnVXCi7jLD3EjUM0OMba5fojbi7SR3PNesAFWNCtnDxQlUlheuh2yyA5phDfU%2BD1RVIrEtDNKv6z60Lf14VU%2FcpeoCfoBCfpjUnGrtrqCFm5pMguxfuTSvOBAGat0YoyAGYz0FIMQdujBhdcRTZrsSN%2Bcwpj19MjSCYmNMLoe1Rg17Bb28JTg7n6vy90rrX4PK5q%2FKaO6Q%2BSgGlnvZzNHxJkVYZ0pmG7GExBzDyLC7609IvxEpWkgHidBAbzeJPmLsvKJCb8eh8vQHyuO7MmgQddDMiM6a0CRHwzOVKwoJistc7M0pSddE0rtC4n%2FxQzsYIDx7C5G98yhNMjhc72mA%2FYsbsqu9FbnvJNOoCzxdW7p%2FoRYrz91q8pmQ9%2F%2Fr4fZJyZo2VDrzXjgcYpjizxgNcZMJbhoMEGOqUBF1C427HKG9o5fw4RcnIDiK9CqTXI20CLEx1L%2FSH3iXbyvbNj6%2BIWw%2F7jZ7kKIJbQN3m12tA8dSFQaSgHkjOnNT%2F5gKlCVGUU1xowfz1tlub%2FPj4sj6Md%2BHTlUqE5e2wrsr3JPMnU4UoWnPZ0zHeTZEyaaUrmFKMiTAsHcD5w%2FdpYAnpQKiVNDJIup5w4EcuIU1aNjp6H1Q7qhes01lJFdppIRm8q&X-Amz-Signature=0ce00514bcf5814c89692505a569b2b2e36b87458b248ab9485af4cd2af8f510&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5VG4PE5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJQTR%2BqrNew3j9etI5xpvvkolgB4OcYwsfftJ9fBQBRwIgJW46iywza1JI293ydyzjutih3zYSb%2FWYT8fa0YAg6yoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPX4nbRMihj0Nh7edCrcA7LliZTm0nPF6Cc%2B7ko0GaxtnvtX7gx8fRdDkQKCRt%2FJRDhUk%2BqPaukQQa%2FwBTESDFIGEoA5E1UqxS4NGvKp6qVF4nRHHSgcTZ1nPTfdLZ4fFKUYx0vTRox7B%2FLBGjexKpqiVebbLLM2i9iAg4t3AYqLFVu8GL%2B5hN3XAI%2Bvxs%2FJ6UVwRtuwAKUeI8LG41J5GANU%2BEoKIr3WhUlloXpY%2BOeR4vkm0SRROlclFnVXCi7jLD3EjUM0OMba5fojbi7SR3PNesAFWNCtnDxQlUlheuh2yyA5phDfU%2BD1RVIrEtDNKv6z60Lf14VU%2FcpeoCfoBCfpjUnGrtrqCFm5pMguxfuTSvOBAGat0YoyAGYz0FIMQdujBhdcRTZrsSN%2Bcwpj19MjSCYmNMLoe1Rg17Bb28JTg7n6vy90rrX4PK5q%2FKaO6Q%2BSgGlnvZzNHxJkVYZ0pmG7GExBzDyLC7609IvxEpWkgHidBAbzeJPmLsvKJCb8eh8vQHyuO7MmgQddDMiM6a0CRHwzOVKwoJistc7M0pSddE0rtC4n%2FxQzsYIDx7C5G98yhNMjhc72mA%2FYsbsqu9FbnvJNOoCzxdW7p%2FoRYrz91q8pmQ9%2F%2Fr4fZJyZo2VDrzXjgcYpjizxgNcZMJbhoMEGOqUBF1C427HKG9o5fw4RcnIDiK9CqTXI20CLEx1L%2FSH3iXbyvbNj6%2BIWw%2F7jZ7kKIJbQN3m12tA8dSFQaSgHkjOnNT%2F5gKlCVGUU1xowfz1tlub%2FPj4sj6Md%2BHTlUqE5e2wrsr3JPMnU4UoWnPZ0zHeTZEyaaUrmFKMiTAsHcD5w%2FdpYAnpQKiVNDJIup5w4EcuIU1aNjp6H1Q7qhes01lJFdppIRm8q&X-Amz-Signature=76f05bf3108e00078929525090fdc32b07e266804e3e1e2ad29fa69ccec54de1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
