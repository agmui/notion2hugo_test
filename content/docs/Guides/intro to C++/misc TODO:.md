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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRYRM3W5%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2FdRim0Paz8zjMuBJpKX3eEtS33eTajpphvbX5YYfmQIhALvIdTc3mpGrnq%2BWUuiCze5ZLBVkf5in6r4rKqaqclf9KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1vmRxXYzZdJ6Kx9wq3ANqndWsZB4jcf97KJvjGnFUdCI%2FFQfvlJj33lcFcdbxdYiCcDQbXuHjs2k31%2FkDXgXFJK4llXf38tZDTfb5FUGGUWxD6lQBPDDzSsgKKfjm4ZUyu5GYgMu3Sb5iN%2B%2BFn7C%2BeUcKT2PBEsqazIzlAZk0WeKb6jKO0na%2B5rM01Ddxk7sFMfD5F1cTEvccW2T%2FoYxR3SDJU6vjMtl%2Bs8NAvz1W5VjRalwK%2FMrn%2BY6rgIy%2BEol4KGvKdDfldA6Xkk9ujInlLG7KqImXuszzHrcRsD7BnLsbqKX8aHb3znpWU%2F%2FU9q1TuiMoQ96LquOsrLgI7j8sYYjWzDto7nh0AVV1zcA53fDH6Rkk0WBIdHG%2FTLjQGHpfuwv%2Bulzvbck1XlyEJ4%2FJX1WX2eZ7uDIIgh8F9d4ip2%2FHETv4bSaCZ6NiMDQp7rgS0kixKsSBcl7Yg4IUuD7hZYvNsd4oIskEjINaNGmId93GlNjKQcBkLObpuaO%2BMEgFh%2B0Ik91OQ1BPJJeh39oGeOCAYCkiSrmX%2B35NmZi%2FLzh2pfqqFQHtL2e%2FC3G%2FOgH3659k0QC4Imh%2Bt2ITbKWOQfu3J0gV0aM6mQp0d1RrUS3G6Frd%2FtmaXEb3xHAvE4oLAubIaZCMJ6ZPXTDC98PABjqkAXjmAw%2F2ZdDfMgKZmcsgj2dC5xFo2UwbrG4v5dhEMKxQ1lOS9n59nVM0onztlylJyYBTPLlbU2sRpJ%2B3Krzx71MuEpWnOIBNSgsjHIIyANVXgZqktraSolfDcIIXTaKae9UjnV%2FUfJo0GEM2ikzCsoBMEGl%2FyxJ2b6PgvKcNaqkEw30M9z%2F5cPZlTSuf17p%2BRmqDvjyWFj9eErR3YRN7w2hz7t2n&X-Amz-Signature=a703eb81c75693cd5c54e713203e4bc0821836327ead9382201639bb08882eaa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRYRM3W5%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2FdRim0Paz8zjMuBJpKX3eEtS33eTajpphvbX5YYfmQIhALvIdTc3mpGrnq%2BWUuiCze5ZLBVkf5in6r4rKqaqclf9KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1vmRxXYzZdJ6Kx9wq3ANqndWsZB4jcf97KJvjGnFUdCI%2FFQfvlJj33lcFcdbxdYiCcDQbXuHjs2k31%2FkDXgXFJK4llXf38tZDTfb5FUGGUWxD6lQBPDDzSsgKKfjm4ZUyu5GYgMu3Sb5iN%2B%2BFn7C%2BeUcKT2PBEsqazIzlAZk0WeKb6jKO0na%2B5rM01Ddxk7sFMfD5F1cTEvccW2T%2FoYxR3SDJU6vjMtl%2Bs8NAvz1W5VjRalwK%2FMrn%2BY6rgIy%2BEol4KGvKdDfldA6Xkk9ujInlLG7KqImXuszzHrcRsD7BnLsbqKX8aHb3znpWU%2F%2FU9q1TuiMoQ96LquOsrLgI7j8sYYjWzDto7nh0AVV1zcA53fDH6Rkk0WBIdHG%2FTLjQGHpfuwv%2Bulzvbck1XlyEJ4%2FJX1WX2eZ7uDIIgh8F9d4ip2%2FHETv4bSaCZ6NiMDQp7rgS0kixKsSBcl7Yg4IUuD7hZYvNsd4oIskEjINaNGmId93GlNjKQcBkLObpuaO%2BMEgFh%2B0Ik91OQ1BPJJeh39oGeOCAYCkiSrmX%2B35NmZi%2FLzh2pfqqFQHtL2e%2FC3G%2FOgH3659k0QC4Imh%2Bt2ITbKWOQfu3J0gV0aM6mQp0d1RrUS3G6Frd%2FtmaXEb3xHAvE4oLAubIaZCMJ6ZPXTDC98PABjqkAXjmAw%2F2ZdDfMgKZmcsgj2dC5xFo2UwbrG4v5dhEMKxQ1lOS9n59nVM0onztlylJyYBTPLlbU2sRpJ%2B3Krzx71MuEpWnOIBNSgsjHIIyANVXgZqktraSolfDcIIXTaKae9UjnV%2FUfJo0GEM2ikzCsoBMEGl%2FyxJ2b6PgvKcNaqkEw30M9z%2F5cPZlTSuf17p%2BRmqDvjyWFj9eErR3YRN7w2hz7t2n&X-Amz-Signature=209eab26d6b292ecdb5245c8aa276976b4947623a93aa3121ba9d913fd123016&X-Amz-SignedHeaders=host&x-id=GetObject)

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
