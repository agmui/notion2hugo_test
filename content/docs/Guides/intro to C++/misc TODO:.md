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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NMETWN4%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4%2F3935ta8lYNdBdZ1U4Yo5OeG9YWRyD6ckN8sDbZFiQIgQBmX8%2BhlrmHttIrlI6HeCOshj05xj7EONbwbKIOlcvAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJY%2FdiwlsmnQRbNfoCrcA7Or9R4tzFP8SGdflVVCAMQOV3Z757wPkDKrZ0s%2BvdjufZPmhLp5o2Fsooufcf5ObV4RdNualVvH9X3v26IpTq8ske1YL1n7%2BJrW0VhBLOgn8lQ2s1Ssmqs4g%2FhtbHN1ukMPB1jlC2dgAUFGFqj0pIBLqjoK3756IeBJuw7vFC7IXYd%2BwBUreYVSNg8PGx%2B%2FRKB2bhwWwCyi4QHGDqnrpT%2BVDvn8%2FP7b9d300upbzO7FneVV5nohg84%2FskOO0vTvS9%2BP%2FNLWY7c11RBCMPr%2Bn8d5MD4Uar6EYtzRZK%2BcmImhI4SPauBupUgPBb1364%2Fnlsqh6uzt9P4BPpdi6x5YNDhziIsaqla7ZK3AJk7a3dk%2Bm7%2Bxrfiophux89uouevwdTD%2Bz5egcAzP7X%2FMS9MHxM1TL%2BUPhgnlAuKf9Fm2Ue%2FNgB8z%2B00MmxeuPMN2y8BuUIcnQJZzbU19gyfdqz0zJXZRgWngzHCArXZbBtd6fPOjRDMxi%2BkVe3%2BmvCiIJzHZS71tDq9wu1yWpd0iW2SZbGyVHWTlUH3A8zY%2Blizb77sC3yAiMNV2BLnxlyMqjjAvvQwS1kBpp9c1ixzpeNaJxsvJI1QZtrj765PnoRGH9PyV4HMrAy%2BXnlE6Tu68MOOOpL0GOqUB%2F97uhXDWX3Z9ke0clwHzCPpwOYArLIwB1nSz7xw6vEsTJ%2FmE6dCwL3t6XX1AKgqgB7kb5iE%2Bl0WCAFwwykXSdxnIEHE4bV1zPla1TD1uMj4GAOk4wochTKKi%2FyqMOmgcfS85haMEEsj55gGTKbgWvj46lMuaDrN1900NEZuvaYL40PecP41siTmPapTxX9si%2BlzjR6wMpu%2BrIzWJCOfirSjhQcKQ&X-Amz-Signature=bc70d10ae15b0ce0d7e6350144f7555c592e78bd6a7037990b9e97af973e5660&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NMETWN4%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4%2F3935ta8lYNdBdZ1U4Yo5OeG9YWRyD6ckN8sDbZFiQIgQBmX8%2BhlrmHttIrlI6HeCOshj05xj7EONbwbKIOlcvAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJY%2FdiwlsmnQRbNfoCrcA7Or9R4tzFP8SGdflVVCAMQOV3Z757wPkDKrZ0s%2BvdjufZPmhLp5o2Fsooufcf5ObV4RdNualVvH9X3v26IpTq8ske1YL1n7%2BJrW0VhBLOgn8lQ2s1Ssmqs4g%2FhtbHN1ukMPB1jlC2dgAUFGFqj0pIBLqjoK3756IeBJuw7vFC7IXYd%2BwBUreYVSNg8PGx%2B%2FRKB2bhwWwCyi4QHGDqnrpT%2BVDvn8%2FP7b9d300upbzO7FneVV5nohg84%2FskOO0vTvS9%2BP%2FNLWY7c11RBCMPr%2Bn8d5MD4Uar6EYtzRZK%2BcmImhI4SPauBupUgPBb1364%2Fnlsqh6uzt9P4BPpdi6x5YNDhziIsaqla7ZK3AJk7a3dk%2Bm7%2Bxrfiophux89uouevwdTD%2Bz5egcAzP7X%2FMS9MHxM1TL%2BUPhgnlAuKf9Fm2Ue%2FNgB8z%2B00MmxeuPMN2y8BuUIcnQJZzbU19gyfdqz0zJXZRgWngzHCArXZbBtd6fPOjRDMxi%2BkVe3%2BmvCiIJzHZS71tDq9wu1yWpd0iW2SZbGyVHWTlUH3A8zY%2Blizb77sC3yAiMNV2BLnxlyMqjjAvvQwS1kBpp9c1ixzpeNaJxsvJI1QZtrj765PnoRGH9PyV4HMrAy%2BXnlE6Tu68MOOOpL0GOqUB%2F97uhXDWX3Z9ke0clwHzCPpwOYArLIwB1nSz7xw6vEsTJ%2FmE6dCwL3t6XX1AKgqgB7kb5iE%2Bl0WCAFwwykXSdxnIEHE4bV1zPla1TD1uMj4GAOk4wochTKKi%2FyqMOmgcfS85haMEEsj55gGTKbgWvj46lMuaDrN1900NEZuvaYL40PecP41siTmPapTxX9si%2BlzjR6wMpu%2BrIzWJCOfirSjhQcKQ&X-Amz-Signature=36b283eb0108b3e700416c770864fe6b7088a7c9b58f8eaa999e6d48ba1194ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
