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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIBTNQDB%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDbjsA05n7oHKJB0VASKssuEH5xbpCncgRQaQniy7QVHQIhAOWuBrA3TLiZNsW%2F0lc86qtPXqbsPV0K3lfGvDk99CVGKv8DCBQQABoMNjM3NDIzMTgzODA1Igw85ZO%2B7wdssR%2F%2FKBQq3APKidIqf6vwg4KCmydDqLePFZjX01jJMUr2mXVIuW4ZAgvJu5eGNP1i%2F0eYrK37xqC6ga41cSoXeP%2Fnlu4oiNp%2Bj2jx1F3v2IU%2B0vxKMu918WCAVHMgncWzZZaTp6UaYHoK5jLQjQyEvbVYpGbDe6YIHOnhtv7QsP3KpMeGv0o%2FWXaKi9I11gaGeFOpXyQebtsBbAWRpEJNkVgvblYl81BzxtSZALBCDOnjOpu7CBadj%2Ba6U9cYba8GVv%2Fc%2FgLlMv%2F%2BF7Lc60Y3LoaCqwcKIfCwQ05M9GqINBzmzKlrjkn3r%2BoGIIfFZSyvcMWFujfnjATrtkVJJRdgAkRSbZMLXHIDTaon73LMNttq8%2FTnRSqYrQSqmHrpICLDvqtO%2FiuyfYmmKtVomXSMbX9Ni%2Bc6O1FaJPq%2B3I5W6xg1hIoBOcGGszjzxtxXt7t3n6FJdlqi8D1MUkaxuYISjW2U2j9ctXaHZpLWTlrzWhwNBQfnIKPHG8pyB7Yop6tkOTjOgS%2F%2B3BruhClqjm%2FMzdFfAkvFLy%2F%2Bzr5K%2FTZoofmcKKbYssennoiD%2B0meBrbqyNOAybpPy6DhcpEQzurI%2Fu31NMpmEmGZVp7kf4pdvJ9IPm%2FAxphuu3YX7bt%2B2Elt5qB%2FqzCwt5nDBjqkAW6o3a3tw6FbUrsiChOo%2Bnxiwi8riSfnbqxrnKQTCUiZ6BH7STjPnNtdoZB2ML9hjqzDpy%2FoWXj9vOTL2HxLgbB%2FfJtEUw4zkwZgLetRSaP5FR7pwKtqX%2FRWOHbFxrtFbeBb6nWhldSrQIpWGj%2BfgNRdIDBIFEthPQ7oejCVsPPZh66%2Ffv3dVPtnOQq5e4WIg87A947g8%2BUlTlXQusxPqkJYKgKX&X-Amz-Signature=100f3b175136b7b76bc950a7919b3f2dd2495b84aefcc2eacf7f8c622deb5bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIBTNQDB%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDbjsA05n7oHKJB0VASKssuEH5xbpCncgRQaQniy7QVHQIhAOWuBrA3TLiZNsW%2F0lc86qtPXqbsPV0K3lfGvDk99CVGKv8DCBQQABoMNjM3NDIzMTgzODA1Igw85ZO%2B7wdssR%2F%2FKBQq3APKidIqf6vwg4KCmydDqLePFZjX01jJMUr2mXVIuW4ZAgvJu5eGNP1i%2F0eYrK37xqC6ga41cSoXeP%2Fnlu4oiNp%2Bj2jx1F3v2IU%2B0vxKMu918WCAVHMgncWzZZaTp6UaYHoK5jLQjQyEvbVYpGbDe6YIHOnhtv7QsP3KpMeGv0o%2FWXaKi9I11gaGeFOpXyQebtsBbAWRpEJNkVgvblYl81BzxtSZALBCDOnjOpu7CBadj%2Ba6U9cYba8GVv%2Fc%2FgLlMv%2F%2BF7Lc60Y3LoaCqwcKIfCwQ05M9GqINBzmzKlrjkn3r%2BoGIIfFZSyvcMWFujfnjATrtkVJJRdgAkRSbZMLXHIDTaon73LMNttq8%2FTnRSqYrQSqmHrpICLDvqtO%2FiuyfYmmKtVomXSMbX9Ni%2Bc6O1FaJPq%2B3I5W6xg1hIoBOcGGszjzxtxXt7t3n6FJdlqi8D1MUkaxuYISjW2U2j9ctXaHZpLWTlrzWhwNBQfnIKPHG8pyB7Yop6tkOTjOgS%2F%2B3BruhClqjm%2FMzdFfAkvFLy%2F%2Bzr5K%2FTZoofmcKKbYssennoiD%2B0meBrbqyNOAybpPy6DhcpEQzurI%2Fu31NMpmEmGZVp7kf4pdvJ9IPm%2FAxphuu3YX7bt%2B2Elt5qB%2FqzCwt5nDBjqkAW6o3a3tw6FbUrsiChOo%2Bnxiwi8riSfnbqxrnKQTCUiZ6BH7STjPnNtdoZB2ML9hjqzDpy%2FoWXj9vOTL2HxLgbB%2FfJtEUw4zkwZgLetRSaP5FR7pwKtqX%2FRWOHbFxrtFbeBb6nWhldSrQIpWGj%2BfgNRdIDBIFEthPQ7oejCVsPPZh66%2Ffv3dVPtnOQq5e4WIg87A947g8%2BUlTlXQusxPqkJYKgKX&X-Amz-Signature=4beb93241b5d8d4f30d43d2e4322e97f828df1a4f51411ed0c33800c9ecdb695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
