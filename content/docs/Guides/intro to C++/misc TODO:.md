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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WJM5Z5I%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQD67cHPIy5c%2FVNQZzVRRDbf9slUCyXvDDNzv%2B%2FIZjTG5wIgbMJxjd7SpO8Xmnp%2BUnjmPA8Q6UC%2B6HnGqeCpCKkrIt8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKlajIKT%2BKvtourQtircA6UAGzDFunZFR0A3VDG%2BP%2FTqouS4YFgbojdjcgiZJKFgq2VoGdEDNOpvs58QHSmyhF3fsJdNcN5EHSrHOHrIOF2xJKdYLV3hJBM9scPO4rb5Nxr9mrJoxXeOCwOzs8v2TBbU%2FXV5Bl93CWfpq%2FqVAba7TbHzCjrzfuG9R8W0YgNMUflnw3p6w6VG2CB0omweXTNBx2%2B5EIk%2BGbIh2mNBUFyQe%2Fo4QuoRuGjJ8Kb38p%2FY8fCGssEJzrcigQM7Z%2FbKgHxPT0ow8d570sQUp7El%2BJoWHOxD7hUVUYkcI%2BNUpGVzCux1MV3eX2%2FTHLsM%2BZbq1cfB7LC8JTV2%2FzEQUGmt8j05ByYjppoihhDgBhlgrTIKYOi7MyJfB2ySQPTTLhOe9FDIVK8tzruPw%2FzWHorZbIDEl5ROBMdAXF2lj%2FYkAL%2B4gYJ4vWO0r1DDE2p0gAf2gVIp2EgrPO2dcacD2UqkYwWgj8syzmw7mV9W2Lg%2BymNZSoSDNLpuj7SaEkDn1wJADONovoOJHn4QdddTxBIpV6NaGuMAqJiiqOfD7Hluh70cfR4wuF8k%2FHPPMvvWVHZ7eTixyi%2Bzot6%2FxusHzkYV9EWaE2EwSAt5xCLcocxyvdaxpdmcF766cGA0IEHQMOXa2cMGOqUBFqmx6EPejZN%2FvohSF2ob8zyzwWXVxNS6PR6g2vUiye9kfogO56c%2Boh7uFPpdcP9ED3ULMl3EoIy1iFvFnXKGhgCnLjGwKs7ayTN%2FRiMdVWZPA43XomVSSMzc1T0%2FLGhjJGywUs3n71z16F8JT9Daf2Bw%2Blu7pSI5htpWgOomUSb14vRaZNb03HuJU%2BMo3MXLfghefGIFeBKhI%2BCi35xAPiUvlfWq&X-Amz-Signature=1c98e5e7859b4d8034c60dc81587a23aee09ae2b1e9e2e8fea699fb62a39bb07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WJM5Z5I%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQD67cHPIy5c%2FVNQZzVRRDbf9slUCyXvDDNzv%2B%2FIZjTG5wIgbMJxjd7SpO8Xmnp%2BUnjmPA8Q6UC%2B6HnGqeCpCKkrIt8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKlajIKT%2BKvtourQtircA6UAGzDFunZFR0A3VDG%2BP%2FTqouS4YFgbojdjcgiZJKFgq2VoGdEDNOpvs58QHSmyhF3fsJdNcN5EHSrHOHrIOF2xJKdYLV3hJBM9scPO4rb5Nxr9mrJoxXeOCwOzs8v2TBbU%2FXV5Bl93CWfpq%2FqVAba7TbHzCjrzfuG9R8W0YgNMUflnw3p6w6VG2CB0omweXTNBx2%2B5EIk%2BGbIh2mNBUFyQe%2Fo4QuoRuGjJ8Kb38p%2FY8fCGssEJzrcigQM7Z%2FbKgHxPT0ow8d570sQUp7El%2BJoWHOxD7hUVUYkcI%2BNUpGVzCux1MV3eX2%2FTHLsM%2BZbq1cfB7LC8JTV2%2FzEQUGmt8j05ByYjppoihhDgBhlgrTIKYOi7MyJfB2ySQPTTLhOe9FDIVK8tzruPw%2FzWHorZbIDEl5ROBMdAXF2lj%2FYkAL%2B4gYJ4vWO0r1DDE2p0gAf2gVIp2EgrPO2dcacD2UqkYwWgj8syzmw7mV9W2Lg%2BymNZSoSDNLpuj7SaEkDn1wJADONovoOJHn4QdddTxBIpV6NaGuMAqJiiqOfD7Hluh70cfR4wuF8k%2FHPPMvvWVHZ7eTixyi%2Bzot6%2FxusHzkYV9EWaE2EwSAt5xCLcocxyvdaxpdmcF766cGA0IEHQMOXa2cMGOqUBFqmx6EPejZN%2FvohSF2ob8zyzwWXVxNS6PR6g2vUiye9kfogO56c%2Boh7uFPpdcP9ED3ULMl3EoIy1iFvFnXKGhgCnLjGwKs7ayTN%2FRiMdVWZPA43XomVSSMzc1T0%2FLGhjJGywUs3n71z16F8JT9Daf2Bw%2Blu7pSI5htpWgOomUSb14vRaZNb03HuJU%2BMo3MXLfghefGIFeBKhI%2BCi35xAPiUvlfWq&X-Amz-Signature=4efd38675ef65b0bbf455d4512ef6c880ff00cb8b141744daff5b70d27262315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
