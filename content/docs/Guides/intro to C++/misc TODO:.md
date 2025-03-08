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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFS7VZNV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD1Smr%2BAr565Gf7HqYdaudwbe%2B2Un2GKDxqUgOUbHUZZAIhAJzb6ZdM7oxhEMM7GZ7dahDgm7ouGBMfHR7hVkSXXgLAKv8DCFgQABoMNjM3NDIzMTgzODA1IgyBGRwpIvuh4STFiKcq3AP3PVw9oaOx%2BxqaYVvojQT02huNEHcR3wEw%2FzidzGBRWcZqVS2QsVpQVSB1myfehpXDhU8lv7kuBRU4pD9Y1heLTEfw128LCRUZ5QVn0XufXbIkhbR%2Fae3jsh2roAkG64MQsbDIPcZWqXvDLdTlls1COrEwUZycriCzkBO%2BnGceF7zigAdS%2Bx91UszjtvVHdxhaG1KUiMLDFY0Uuzg1slBMgaLWFMkw3JbgaBK68ESQLnuDCm4OY28xYz6PaN3ek%2FZEQjCjFirleAfy2dGhtcRuEKa0g3lbu7OtF6fb%2FGC%2BincLuKSDYO8dvINNth%2BIDIhw98ZGu0rokof5XrU%2BttQGZxqQq1xz5LdQYhIE0Caz%2FB3ljbwqzmtVQ%2F%2FWSgsJ3JBb4BGOfHv2ZHH%2BLKEhpd96KRs7g1kPD8mvCWnFM6tPftpDQY1LtApOLKK7po69lTlmyWtpuB1bYxak0YqLDbK64CXKPhJU2GzI2JpuFooGoQf6fDXzhnUK630aI7aEDGybt2aZ054UbAW2oEWcpJQdpGem8%2FMyY44uFWllbgGQgWotVueLkrMRBKyeZ8O2n1aLtS%2BhBKK%2BS%2FARMBvT4sLkEezLSYwLEdeHv9ZpCMI0azNDu7PmnBl4q0KssDCo4K%2B%2BBjqkAWuIH7ci2RQiBheMEJCnNCocUz4o%2BZUg0yQzN1RGdmnUJqLQ7AOols2yaVvIZTQ7UimOTh9BOM9tlafdlXnWlu4G0o11mz9dzouUqkjbax9l9Hm9PATB93EgSDuhJYjieibRKCF9AkCd%2B6tm2ss80RLhPXSO7gXhDSc2dendGI9yyjxT1xp1YJ60Sa7%2BJ06JHoK5AtMGtWh7vKCkpXdOxVqHwtL0&X-Amz-Signature=fff69dc3b6a9498fe598e974b5fc4512f3df4361ae5bbaf87f30d0ecff6eb895&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFS7VZNV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD1Smr%2BAr565Gf7HqYdaudwbe%2B2Un2GKDxqUgOUbHUZZAIhAJzb6ZdM7oxhEMM7GZ7dahDgm7ouGBMfHR7hVkSXXgLAKv8DCFgQABoMNjM3NDIzMTgzODA1IgyBGRwpIvuh4STFiKcq3AP3PVw9oaOx%2BxqaYVvojQT02huNEHcR3wEw%2FzidzGBRWcZqVS2QsVpQVSB1myfehpXDhU8lv7kuBRU4pD9Y1heLTEfw128LCRUZ5QVn0XufXbIkhbR%2Fae3jsh2roAkG64MQsbDIPcZWqXvDLdTlls1COrEwUZycriCzkBO%2BnGceF7zigAdS%2Bx91UszjtvVHdxhaG1KUiMLDFY0Uuzg1slBMgaLWFMkw3JbgaBK68ESQLnuDCm4OY28xYz6PaN3ek%2FZEQjCjFirleAfy2dGhtcRuEKa0g3lbu7OtF6fb%2FGC%2BincLuKSDYO8dvINNth%2BIDIhw98ZGu0rokof5XrU%2BttQGZxqQq1xz5LdQYhIE0Caz%2FB3ljbwqzmtVQ%2F%2FWSgsJ3JBb4BGOfHv2ZHH%2BLKEhpd96KRs7g1kPD8mvCWnFM6tPftpDQY1LtApOLKK7po69lTlmyWtpuB1bYxak0YqLDbK64CXKPhJU2GzI2JpuFooGoQf6fDXzhnUK630aI7aEDGybt2aZ054UbAW2oEWcpJQdpGem8%2FMyY44uFWllbgGQgWotVueLkrMRBKyeZ8O2n1aLtS%2BhBKK%2BS%2FARMBvT4sLkEezLSYwLEdeHv9ZpCMI0azNDu7PmnBl4q0KssDCo4K%2B%2BBjqkAWuIH7ci2RQiBheMEJCnNCocUz4o%2BZUg0yQzN1RGdmnUJqLQ7AOols2yaVvIZTQ7UimOTh9BOM9tlafdlXnWlu4G0o11mz9dzouUqkjbax9l9Hm9PATB93EgSDuhJYjieibRKCF9AkCd%2B6tm2ss80RLhPXSO7gXhDSc2dendGI9yyjxT1xp1YJ60Sa7%2BJ06JHoK5AtMGtWh7vKCkpXdOxVqHwtL0&X-Amz-Signature=719ca453b8bd7971b2b7ca86682f537b3e11b099d26607a2b3acf24336c8d9e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
