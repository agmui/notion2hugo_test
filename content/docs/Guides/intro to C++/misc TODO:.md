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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD2OIOL6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDXHOFkFg%2B4hOI848ZDPzWj6hniKYa3Vt4J9XOnEiGr%2BAIhAK9S8iZzUM9tpYlQEBt%2Bo8i50eZweuNTyslLdqYThDu0Kv8DCH0QABoMNjM3NDIzMTgzODA1Igx1eCkxJZAIqqpCXsQq3ANmDs9iyP9DrjszYM7f7GRQRgGzWBp2U3p4y0kOzye%2BW38UZK7zI8OgQEyerb8WPNdPkSGjzbUlBUv7izuXjT5Gt2zWbU7RgY71Z3K23w5RJ1pLBFDCy3ZqFSF9Xk5c3Uq7VJfJo8ZjqNuF%2BB4LhGuPuVYuq0Nn6z9eDVMiVjOzo6Q3pEEWk8rPsNwaeWgG%2FdFdMJM5lkzcQylDbcgHB6rAJF2AYbI825YCrNQC1GgCRbEacRleUBT9Q6zEa7oOeSGdEqnJPGZ8UuR9NSHkHTgaCSCG38th7FXKy7QpWFwZ4Wx88lGNmn72p9XNNF1xqFkavpznXYSztZ7DvUXK5kXognOJF6O2V79LGgez%2FWTt0D084HkyGd3IREJtkA%2FNXJXg7fBITLil4TgeCUhDsbCgMdGkCPzFQF9gf5jI4oQCbOQ8a0eCeQejiujMMavTBeZ6aYaWGV5Mho1BYt4j5n9fXaNogz3DmUiLSzk%2B6Kc49k5gip33ON6iZLZIR0HfiS2cDwncHyCoKxD5a08Us%2BZN6JkIl5wjXLSL4nrAOryE1u8dybzMTKNuLhSJcJumGxBXrnkbBIKUEAQPDI2TwRgHDhCG2H3Yi2jmz9pM%2BE3BVE4b6J%2Bt2J8m%2FSVonDCP687EBjqkAbtCs2ZTfLgsTY2rdKGzM9gFcZoVEBQ9SVeBDNlMJstpdumSkA3KJRVsHIMIyDwtvupdrU6M66zCGP5NvDfRld0b1s1G3She%2BopDDgmIP5cncBLQiqpGlvUHP9wJq%2FsMryD4iuyEXeG3zKqk6OVVxo3Y8oWq7VHVozH9yMtXerjzNmHdwOlyovRy3e%2BZf%2BnsyLrPg4XIYI4tX8B0VdaxCiRXjdKZ&X-Amz-Signature=90a96c8e49af57b405bb3fd02489f90bb129f3ef19da38a540827524888a2db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD2OIOL6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDXHOFkFg%2B4hOI848ZDPzWj6hniKYa3Vt4J9XOnEiGr%2BAIhAK9S8iZzUM9tpYlQEBt%2Bo8i50eZweuNTyslLdqYThDu0Kv8DCH0QABoMNjM3NDIzMTgzODA1Igx1eCkxJZAIqqpCXsQq3ANmDs9iyP9DrjszYM7f7GRQRgGzWBp2U3p4y0kOzye%2BW38UZK7zI8OgQEyerb8WPNdPkSGjzbUlBUv7izuXjT5Gt2zWbU7RgY71Z3K23w5RJ1pLBFDCy3ZqFSF9Xk5c3Uq7VJfJo8ZjqNuF%2BB4LhGuPuVYuq0Nn6z9eDVMiVjOzo6Q3pEEWk8rPsNwaeWgG%2FdFdMJM5lkzcQylDbcgHB6rAJF2AYbI825YCrNQC1GgCRbEacRleUBT9Q6zEa7oOeSGdEqnJPGZ8UuR9NSHkHTgaCSCG38th7FXKy7QpWFwZ4Wx88lGNmn72p9XNNF1xqFkavpznXYSztZ7DvUXK5kXognOJF6O2V79LGgez%2FWTt0D084HkyGd3IREJtkA%2FNXJXg7fBITLil4TgeCUhDsbCgMdGkCPzFQF9gf5jI4oQCbOQ8a0eCeQejiujMMavTBeZ6aYaWGV5Mho1BYt4j5n9fXaNogz3DmUiLSzk%2B6Kc49k5gip33ON6iZLZIR0HfiS2cDwncHyCoKxD5a08Us%2BZN6JkIl5wjXLSL4nrAOryE1u8dybzMTKNuLhSJcJumGxBXrnkbBIKUEAQPDI2TwRgHDhCG2H3Yi2jmz9pM%2BE3BVE4b6J%2Bt2J8m%2FSVonDCP687EBjqkAbtCs2ZTfLgsTY2rdKGzM9gFcZoVEBQ9SVeBDNlMJstpdumSkA3KJRVsHIMIyDwtvupdrU6M66zCGP5NvDfRld0b1s1G3She%2BopDDgmIP5cncBLQiqpGlvUHP9wJq%2FsMryD4iuyEXeG3zKqk6OVVxo3Y8oWq7VHVozH9yMtXerjzNmHdwOlyovRy3e%2BZf%2BnsyLrPg4XIYI4tX8B0VdaxCiRXjdKZ&X-Amz-Signature=477bc303a90131310672db6f5fd51d1526f77de503a468fedc6e98657d24326e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
