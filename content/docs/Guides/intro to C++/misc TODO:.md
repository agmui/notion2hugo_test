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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MA7E7GJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAkIpez0CMsRaYw2rXLxZKialX%2BWApOIU15Pm76d1ZoWAiBMz%2Bk90LmJVtp2n%2BEe8SwY%2B1dQcEcO9S5JRSGnLT7N%2FSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMYwZ58u5xj%2FvsHlwGKtwDG65%2BC0UQPKrd5v032EsNMaPy7%2Fy4DXfGhuF02%2F%2F9fglyc0YM6eGS%2F7R4CLRphPFdwP3jCtGd6HcVmqqzX5nymLL26uIgOdiQx31L08t%2Feyznl66LyD3Q3fKQbp6MNERy1gXJK0ZlXdCpAqaBbO7lBtd%2Bj6gvIy6fQJ9rhyEG3LqI7YlbquxVcCw0dOJx9tz3FtMJNdyHLZyP1Npqv1oNgIm6gGSOjd5OEz6kVObEx9XOV4tyUwPtxy1gejOMEEFIzH5LvJp9gQHsakRv%2ByZI4uMAk%2Bw9FU9ahxtjkwHGJu3Gr2LC0TpNBjVH4kZcKnt2gb8890VIr3myzQH8xKS%2FuOrSTils1xprheavxSs1bNGtTuUXpogol1QfabrVoFCl%2B3S%2BZUAwnqC%2Fjwy7jAl5GVxNzoduubhxIVPSVIMB%2FsPJmJpcNChlZAahJHZrLzxLGMjb8j7c7XEYxNc9QnfHqgR9l2D%2B5Ai6RDJBS3jK1vX0hmP9U5OAfE1y99MB3L7WzWwfojrQVBIqAwnlgcgrcapbS17A1cvkubuBSWS3qxmhFuC8Ddwe7HMUL%2BXXiZdkzDNP1SzYec3qv8wTTBUkGbfW8WlK5WghxzcU0%2FwLNJx1JdKh9UYCZxTbS9gwyeWawwY6pgFxd3EJ1UyKdjMLOld9DvE02RMQ74O%2BUvwGFZWh8sRM2N%2F0Rj%2BsiUhl5nw6OTZNm4X2P7G2bzbQLHcbaio0JST3HHXg%2FjIxBHz4xsJUffotfnC9e1nQSHlp1X91OeffwEVJBeaxF0yAb4IYUnGvnehKN5cgzFKpKzH0Y7D7YXpliEJ6sV8eqVNmuMErsCLcTqevnuemG%2BHTLDCX4WlT3htUm%2Bn4jlmJ&X-Amz-Signature=ea8704287e69e929a8269b609e606814df9f1b15db02acd536dfc46cda67d111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MA7E7GJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAkIpez0CMsRaYw2rXLxZKialX%2BWApOIU15Pm76d1ZoWAiBMz%2Bk90LmJVtp2n%2BEe8SwY%2B1dQcEcO9S5JRSGnLT7N%2FSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMYwZ58u5xj%2FvsHlwGKtwDG65%2BC0UQPKrd5v032EsNMaPy7%2Fy4DXfGhuF02%2F%2F9fglyc0YM6eGS%2F7R4CLRphPFdwP3jCtGd6HcVmqqzX5nymLL26uIgOdiQx31L08t%2Feyznl66LyD3Q3fKQbp6MNERy1gXJK0ZlXdCpAqaBbO7lBtd%2Bj6gvIy6fQJ9rhyEG3LqI7YlbquxVcCw0dOJx9tz3FtMJNdyHLZyP1Npqv1oNgIm6gGSOjd5OEz6kVObEx9XOV4tyUwPtxy1gejOMEEFIzH5LvJp9gQHsakRv%2ByZI4uMAk%2Bw9FU9ahxtjkwHGJu3Gr2LC0TpNBjVH4kZcKnt2gb8890VIr3myzQH8xKS%2FuOrSTils1xprheavxSs1bNGtTuUXpogol1QfabrVoFCl%2B3S%2BZUAwnqC%2Fjwy7jAl5GVxNzoduubhxIVPSVIMB%2FsPJmJpcNChlZAahJHZrLzxLGMjb8j7c7XEYxNc9QnfHqgR9l2D%2B5Ai6RDJBS3jK1vX0hmP9U5OAfE1y99MB3L7WzWwfojrQVBIqAwnlgcgrcapbS17A1cvkubuBSWS3qxmhFuC8Ddwe7HMUL%2BXXiZdkzDNP1SzYec3qv8wTTBUkGbfW8WlK5WghxzcU0%2FwLNJx1JdKh9UYCZxTbS9gwyeWawwY6pgFxd3EJ1UyKdjMLOld9DvE02RMQ74O%2BUvwGFZWh8sRM2N%2F0Rj%2BsiUhl5nw6OTZNm4X2P7G2bzbQLHcbaio0JST3HHXg%2FjIxBHz4xsJUffotfnC9e1nQSHlp1X91OeffwEVJBeaxF0yAb4IYUnGvnehKN5cgzFKpKzH0Y7D7YXpliEJ6sV8eqVNmuMErsCLcTqevnuemG%2BHTLDCX4WlT3htUm%2Bn4jlmJ&X-Amz-Signature=7855514e710ac79248259dd453e062d9927ce84afd2ece784c894d52b79661b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
