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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGDJLNRJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFk9Ix0hlQHssX5up9GNdtqd5kBt2Z%2Fw%2FYOy23pHbukdAiEAyG5q%2BsFy2Vmggkvj1tPz9OYcBiyAj7F04S1IwZRqsc0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDN2y%2FAA8VsfI2iEH%2FCrcA1lZmI6SPlRpBNyDDFQEjhLpvSCATv7k9WAGL5gUevgz4PyXHmuRP4TZwVKa%2FwwoXrHyBDenRXE48rdAScSMIdaqDQpMrz%2B3EQ60bnmCqttvrVUILLuFPX%2FapBFXXtG2HG39899jZ%2BKgf6Lp1dldumNUzrio7ItKyJDOd%2B16um7KzC1oA0lNMSZLxcMpo0XRYnAbUPh6IpJXnoWmkWRPWOBWZq9ocfBoZ31wjjVJrCgK%2BwjqRRbgxQglk%2FW6Cd3GP0NrogVH4NNY37NfERBoqaV6ItyDYeLvy2ms2vr4lcoCSqOmM9gtrBQaxCwM0J%2FZW6INK8v7cMQQG2syBpa2cAYpgpWkg8xMlXzqmEgfBZ5ZBTkMJrVh53fJwzTrRI0d8yUcxpS1XwO5zJmqLOYAzP7wp3xSqpn7nYplvAIyT2KGcLNqnLGuv4SKvX6Ki33YSCpYQgD7dKdPhUiqz4XgwVD95I3mfUumGOF9liMuQWKh9ijdhyyghWEuaPtievxIqxxcKYsGoo%2BsJUF7EwdmjlM1Qa2dqdVvZMctcyJx1vCZLuFGSv8Hp7a%2F0x%2B%2FQaJdSCqyZoxoaFjGHzNVisWzvVtV%2FBFafGzV09JcqGSXHT2%2FmfejFxROhn%2BIy%2BibMLGbn8MGOqUB8kXHSSQap21vX%2B3ALx1TNGLUXBbGiDsv3QxYKm%2BM0YK8%2BC1CWpCX0jVHOPLIMj72X4rYyz0CoZT9NbKV%2FiioVMTSnR0v6bcL8vpuBxLPSKZvHnOQgynPsvSNIEYGFef9lkNjJ9haNgyghwZXhfszxBtYjRRLCu2X2UsHjd4odVcSz22MDmGyHY377%2FWwoLxM8lXOs3TSG5tLhW16ZOD3v1IXArUl&X-Amz-Signature=4afe8ccac2460cfe7a78adfae1fd0b0b74a7e1cc60e220b5dc163d5c17fb6d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGDJLNRJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFk9Ix0hlQHssX5up9GNdtqd5kBt2Z%2Fw%2FYOy23pHbukdAiEAyG5q%2BsFy2Vmggkvj1tPz9OYcBiyAj7F04S1IwZRqsc0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDN2y%2FAA8VsfI2iEH%2FCrcA1lZmI6SPlRpBNyDDFQEjhLpvSCATv7k9WAGL5gUevgz4PyXHmuRP4TZwVKa%2FwwoXrHyBDenRXE48rdAScSMIdaqDQpMrz%2B3EQ60bnmCqttvrVUILLuFPX%2FapBFXXtG2HG39899jZ%2BKgf6Lp1dldumNUzrio7ItKyJDOd%2B16um7KzC1oA0lNMSZLxcMpo0XRYnAbUPh6IpJXnoWmkWRPWOBWZq9ocfBoZ31wjjVJrCgK%2BwjqRRbgxQglk%2FW6Cd3GP0NrogVH4NNY37NfERBoqaV6ItyDYeLvy2ms2vr4lcoCSqOmM9gtrBQaxCwM0J%2FZW6INK8v7cMQQG2syBpa2cAYpgpWkg8xMlXzqmEgfBZ5ZBTkMJrVh53fJwzTrRI0d8yUcxpS1XwO5zJmqLOYAzP7wp3xSqpn7nYplvAIyT2KGcLNqnLGuv4SKvX6Ki33YSCpYQgD7dKdPhUiqz4XgwVD95I3mfUumGOF9liMuQWKh9ijdhyyghWEuaPtievxIqxxcKYsGoo%2BsJUF7EwdmjlM1Qa2dqdVvZMctcyJx1vCZLuFGSv8Hp7a%2F0x%2B%2FQaJdSCqyZoxoaFjGHzNVisWzvVtV%2FBFafGzV09JcqGSXHT2%2FmfejFxROhn%2BIy%2BibMLGbn8MGOqUB8kXHSSQap21vX%2B3ALx1TNGLUXBbGiDsv3QxYKm%2BM0YK8%2BC1CWpCX0jVHOPLIMj72X4rYyz0CoZT9NbKV%2FiioVMTSnR0v6bcL8vpuBxLPSKZvHnOQgynPsvSNIEYGFef9lkNjJ9haNgyghwZXhfszxBtYjRRLCu2X2UsHjd4odVcSz22MDmGyHY377%2FWwoLxM8lXOs3TSG5tLhW16ZOD3v1IXArUl&X-Amz-Signature=5709fafb8e37d92dbbb6fa02c40a58fd4d9f9ed3d683309bb97827540b57ede5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
