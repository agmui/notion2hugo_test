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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5BBVDB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDI%2FHfRsrsxAUcgLHQ6bly6EXsqawbsrNLK2%2BLiok0gNwIgEoqXmDfRpuD1Ihd961noGZ46FqJ4dehyxV1KCR9A3Y4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9HRVYlGxaS8JEBHSrcA9C5My0G6jaxkccMPC38vZ1vS5%2B2TLHwet9ADIUZjRTT%2B9zKHJyyIeBLrurPKxA0Bs%2Bi7ACB8EaPna0yNttoLhdpZLL5S%2B32qJcumB4casCwCnr2YelRq97iu7oUOclTYRhE2DdDA%2BKtPRW09M32aX%2BF7ITxVfRVa615CVhDEITKbcqpXcNiCesjTQcTUsENU5Q3R6WNNyt%2FqriziEvrZN5A4cr9uO5jcW9GLPhk9miULebWC1QITctXZnC1vo%2B5QazZRU1ndHikBWUUIdVeHUhn0FSbW8uWukUp6lD3BPcU6nitgLRbB7CLOAFQLgl5tkc6SMHDGZfMxcFl%2FDNS4PKdsSqQJFTt8Alc3pQZzzesFsB%2BKoeJ73OKBtONTI2%2B6DR2FDaYe1b7AuL1zC%2BitMmPWoIOT5vr%2BAGwOebDP6yymTd0LqynMQ4fK1lgb%2FwirEWAfTYRNmy28o9Pb7%2Fq8m4xXXqlvBo%2BHdwsprI28MFudGRd6jNiDygEUtZREZuD%2BcqaW24KgoYXu3s%2BqrR0HDv3ovH1sB7Ihcdbhsw24Q%2Bn9FQGkIVG7%2F%2FGoIwFygSoaW4%2FG6nCckUH35psK0eU%2B6K3bnsNsChFiJGN46Olxitph8%2FRGOui7Pqp0O%2BuMLegj8AGOqUBbuz3OrKOxNOplfREHY2n26Ub%2FOlSS3W%2BBW9OTXQcTAFVWuDGqAv0kKpDiwyFZXFngNTPapNmfbF3%2BidbZYFok0UAfPxX%2BMLlyCXPhiLk44UqUT2GN954HgGS1ovs%2FVJMd%2Fws7H9l%2Bja7JAAokh4Db9lGo3z6Qy%2BxTqdnjilxH2NIUau%2BolLJnTmNnDUiUaw6M1YwWJhXNTMXZJuW00fDkTaLiJe%2F&X-Amz-Signature=9d35584d74fd360251ce5554ceac6bce18aeb8a42b8b581aa4f9bfde1987e5ca&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5BBVDB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDI%2FHfRsrsxAUcgLHQ6bly6EXsqawbsrNLK2%2BLiok0gNwIgEoqXmDfRpuD1Ihd961noGZ46FqJ4dehyxV1KCR9A3Y4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9HRVYlGxaS8JEBHSrcA9C5My0G6jaxkccMPC38vZ1vS5%2B2TLHwet9ADIUZjRTT%2B9zKHJyyIeBLrurPKxA0Bs%2Bi7ACB8EaPna0yNttoLhdpZLL5S%2B32qJcumB4casCwCnr2YelRq97iu7oUOclTYRhE2DdDA%2BKtPRW09M32aX%2BF7ITxVfRVa615CVhDEITKbcqpXcNiCesjTQcTUsENU5Q3R6WNNyt%2FqriziEvrZN5A4cr9uO5jcW9GLPhk9miULebWC1QITctXZnC1vo%2B5QazZRU1ndHikBWUUIdVeHUhn0FSbW8uWukUp6lD3BPcU6nitgLRbB7CLOAFQLgl5tkc6SMHDGZfMxcFl%2FDNS4PKdsSqQJFTt8Alc3pQZzzesFsB%2BKoeJ73OKBtONTI2%2B6DR2FDaYe1b7AuL1zC%2BitMmPWoIOT5vr%2BAGwOebDP6yymTd0LqynMQ4fK1lgb%2FwirEWAfTYRNmy28o9Pb7%2Fq8m4xXXqlvBo%2BHdwsprI28MFudGRd6jNiDygEUtZREZuD%2BcqaW24KgoYXu3s%2BqrR0HDv3ovH1sB7Ihcdbhsw24Q%2Bn9FQGkIVG7%2F%2FGoIwFygSoaW4%2FG6nCckUH35psK0eU%2B6K3bnsNsChFiJGN46Olxitph8%2FRGOui7Pqp0O%2BuMLegj8AGOqUBbuz3OrKOxNOplfREHY2n26Ub%2FOlSS3W%2BBW9OTXQcTAFVWuDGqAv0kKpDiwyFZXFngNTPapNmfbF3%2BidbZYFok0UAfPxX%2BMLlyCXPhiLk44UqUT2GN954HgGS1ovs%2FVJMd%2Fws7H9l%2Bja7JAAokh4Db9lGo3z6Qy%2BxTqdnjilxH2NIUau%2BolLJnTmNnDUiUaw6M1YwWJhXNTMXZJuW00fDkTaLiJe%2F&X-Amz-Signature=8b9649eb16918e558e27b9b85d0dd2d6dd50d36c6f9e2290e6eff51964607bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
