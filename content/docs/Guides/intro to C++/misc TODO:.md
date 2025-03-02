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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JT5SZSI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGdUFaRkOHCd367HvIac0hEk4NRSc6e3QHc63XLojxn0AiEAp2PvnHZ3SGxSspPgyMkUhRHA8Mqz5iNbPlhoJO062ZEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8wGTrtYoMlRz464yrcA6qHljjflvhQgRgqItj2aGv8ub7on0RczxtsBDdCqcDEYcO5jwnElK%2FgSQJc8QeT9hgKfJpsXcCzTOH2fWpa%2BS3ceGCq%2FGTCaqMXtuhzLi0cz38eemw6f6r%2BaTuLdtTm9mbOe%2BveBFuzEEFSQyqklUW32W1o1H9kUt1SK6H9GB1wyGAfqJfQoOBy9fowsVhMWkRE51QgR3mKOAmjjYqYto7ZFVTdhl0HmNy1CQ0K21p1PE%2FjEA7bTiyj88IpIa8ZOVMUWeQFe1isgH6fSvrKjEl133z5NMcbuWxFIL3xDqQZrP3ucxfQy%2Frku6sWuJ%2Fz1Gbtit7qC9C4oaqPAaJcTAB%2F5pPzMb1i127OwNNlReplO3PxyHDLfEqLHqUSOuSEj54NV%2B6uOgP2xQwWiL4Ve%2FoQXSrmbQEYb%2FP7xXWybhx%2F0Bdiw5sWGXUuR7AIDjesfOnpjtC1%2FqQxY48fVux3Tvs0%2FR88DtKtZDyT8tDHd7u%2FLEsTVxbe0EvgrsuHeDtB%2FB9cvD%2BRahFwPzesAeEhrSg6ftgk0aVjD9XzHlC7paVwdf2QndxMq88SfZCojpI4vnTPOz2npv6TqK8ObvyWFVnRm%2Bzl1bILc6HMSMVdlO07ZahvQAcH6QaNqm33MNS3j74GOqUB8niIao4sfDGu0zRi6DcFiaBNV9svvotvo8jz7vqelkmIj9e2XAygTAqlO4xCVQHzrD3mbynx0wuk6TEhNqpSxGfdmrjl9%2Bs5cSsVjFUy%2FJvlG1psacPvxSA02b2byjr%2B1t4eUeug8H%2BeMp%2FdJuRiss9Lwzp2i2PyZzSbvfPRnYMBoy2Ni%2FD2ZtAzb3jB%2BrJsSJxNC8TJzffCPgAqtZ0zXkuYEV9O&X-Amz-Signature=40ce0f826e5b9daf9634b75a7b86b591df4f995a0e9b47c1ee5396b65977aaba&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JT5SZSI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGdUFaRkOHCd367HvIac0hEk4NRSc6e3QHc63XLojxn0AiEAp2PvnHZ3SGxSspPgyMkUhRHA8Mqz5iNbPlhoJO062ZEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8wGTrtYoMlRz464yrcA6qHljjflvhQgRgqItj2aGv8ub7on0RczxtsBDdCqcDEYcO5jwnElK%2FgSQJc8QeT9hgKfJpsXcCzTOH2fWpa%2BS3ceGCq%2FGTCaqMXtuhzLi0cz38eemw6f6r%2BaTuLdtTm9mbOe%2BveBFuzEEFSQyqklUW32W1o1H9kUt1SK6H9GB1wyGAfqJfQoOBy9fowsVhMWkRE51QgR3mKOAmjjYqYto7ZFVTdhl0HmNy1CQ0K21p1PE%2FjEA7bTiyj88IpIa8ZOVMUWeQFe1isgH6fSvrKjEl133z5NMcbuWxFIL3xDqQZrP3ucxfQy%2Frku6sWuJ%2Fz1Gbtit7qC9C4oaqPAaJcTAB%2F5pPzMb1i127OwNNlReplO3PxyHDLfEqLHqUSOuSEj54NV%2B6uOgP2xQwWiL4Ve%2FoQXSrmbQEYb%2FP7xXWybhx%2F0Bdiw5sWGXUuR7AIDjesfOnpjtC1%2FqQxY48fVux3Tvs0%2FR88DtKtZDyT8tDHd7u%2FLEsTVxbe0EvgrsuHeDtB%2FB9cvD%2BRahFwPzesAeEhrSg6ftgk0aVjD9XzHlC7paVwdf2QndxMq88SfZCojpI4vnTPOz2npv6TqK8ObvyWFVnRm%2Bzl1bILc6HMSMVdlO07ZahvQAcH6QaNqm33MNS3j74GOqUB8niIao4sfDGu0zRi6DcFiaBNV9svvotvo8jz7vqelkmIj9e2XAygTAqlO4xCVQHzrD3mbynx0wuk6TEhNqpSxGfdmrjl9%2Bs5cSsVjFUy%2FJvlG1psacPvxSA02b2byjr%2B1t4eUeug8H%2BeMp%2FdJuRiss9Lwzp2i2PyZzSbvfPRnYMBoy2Ni%2FD2ZtAzb3jB%2BrJsSJxNC8TJzffCPgAqtZ0zXkuYEV9O&X-Amz-Signature=05216e3d0a1665aae2a6b4499916de34c6ec9cd453ddbacd770b1ea72ec75cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
