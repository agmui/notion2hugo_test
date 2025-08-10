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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTWH6S6B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICey3wFSpLBnF2qRFvCjHhGjonCi%2BdwHpWQo%2FYx37gbqAiEA%2F%2BYohHKJzgu4yAcDZQueHxVzLK%2Bn98qHK0ZV5HKAglgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDWnAJiybqJJad%2FjCrcA1gFWvzX0O%2Fbya4FSXBST%2BnPDZ4UQm%2FG7BZxNX6y0iH%2FgDMo86%2FTaEdhrSbd%2F1pNU8UYATpyvA%2F418QJYg5MU0b%2FdNInnB4qFIrr3qI8RrA%2FkUtv0tmIBz9b9vc0AdIiahjXjJ%2FuI9lXeNeCHXM1MtxlOOIuUA0YKWdjncA%2FDRglWP%2Be0yJAkNGHFgNOcSE8584UvtfFaU223NmgvHpdFpIBAkev7%2B3NmOrwSadHfhh2ybGa4mivFWwLSWxbjh38xTvogUv%2FpYubhA2MZ0TTLqkAmRrRKamyhqBlwAlzyhdmjTBDJgRx630BR%2BSnFcxSUSf590ojko%2FbEdmwRCrN4A%2FQaB8Nt%2Fdx5Z4DqajTLZSlTud8PMU6qaweO%2FOd%2BnjMV6ARRNpusirbuhD6DVWSEv8gPO78UumHAcW8DfqHP3oga522Efp2fzSnUgA4dhRqCMPiszjhwJhBNhfygrL3ssjaUC6ePNIg9WXgp81twIK29geYCs%2BFBvBlIAESOtwDB0iWda9KHgX%2FGtgzNtq%2BViobooUT6qvxE2zpLB5tlhLgcWnJojzQZJIMBygLmL1Ke%2Fga4yJASmb8fY25Dwv23lUJlkDM5sYJ26eUaDMLS1srb%2BjL7%2FnoUmbprs4MMM6648QGOqUBaxyxrba4EyUOwkvdMmpN91Ob2N3FHrXKLHL02tVfhI40qOiOYgV9xhPXXS26BwKWu5FmSGbcv05YY18NpUpxfT7OMq9TgYjqEFXWyCOzG42xTt7L%2F6r%2FG%2F4CAmeM5jNtyQeFacQmn9kJPJkLq4Yj58IjT0JOhz8unkVdVAknqSRZPQb7pLbNVv%2Fcvomhgj68qpZkKK4greh4voMgmI7qvGdS928E&X-Amz-Signature=9efb4186f0adea0ba11dcc686fecf763fe7f8e5c1310d0c8c40e8782f2b5c43f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTWH6S6B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICey3wFSpLBnF2qRFvCjHhGjonCi%2BdwHpWQo%2FYx37gbqAiEA%2F%2BYohHKJzgu4yAcDZQueHxVzLK%2Bn98qHK0ZV5HKAglgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDWnAJiybqJJad%2FjCrcA1gFWvzX0O%2Fbya4FSXBST%2BnPDZ4UQm%2FG7BZxNX6y0iH%2FgDMo86%2FTaEdhrSbd%2F1pNU8UYATpyvA%2F418QJYg5MU0b%2FdNInnB4qFIrr3qI8RrA%2FkUtv0tmIBz9b9vc0AdIiahjXjJ%2FuI9lXeNeCHXM1MtxlOOIuUA0YKWdjncA%2FDRglWP%2Be0yJAkNGHFgNOcSE8584UvtfFaU223NmgvHpdFpIBAkev7%2B3NmOrwSadHfhh2ybGa4mivFWwLSWxbjh38xTvogUv%2FpYubhA2MZ0TTLqkAmRrRKamyhqBlwAlzyhdmjTBDJgRx630BR%2BSnFcxSUSf590ojko%2FbEdmwRCrN4A%2FQaB8Nt%2Fdx5Z4DqajTLZSlTud8PMU6qaweO%2FOd%2BnjMV6ARRNpusirbuhD6DVWSEv8gPO78UumHAcW8DfqHP3oga522Efp2fzSnUgA4dhRqCMPiszjhwJhBNhfygrL3ssjaUC6ePNIg9WXgp81twIK29geYCs%2BFBvBlIAESOtwDB0iWda9KHgX%2FGtgzNtq%2BViobooUT6qvxE2zpLB5tlhLgcWnJojzQZJIMBygLmL1Ke%2Fga4yJASmb8fY25Dwv23lUJlkDM5sYJ26eUaDMLS1srb%2BjL7%2FnoUmbprs4MMM6648QGOqUBaxyxrba4EyUOwkvdMmpN91Ob2N3FHrXKLHL02tVfhI40qOiOYgV9xhPXXS26BwKWu5FmSGbcv05YY18NpUpxfT7OMq9TgYjqEFXWyCOzG42xTt7L%2F6r%2FG%2F4CAmeM5jNtyQeFacQmn9kJPJkLq4Yj58IjT0JOhz8unkVdVAknqSRZPQb7pLbNVv%2Fcvomhgj68qpZkKK4greh4voMgmI7qvGdS928E&X-Amz-Signature=4000110bd907b6ce88c886742e823cabcb53955a6bdcb62280cb91e6f2544834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
