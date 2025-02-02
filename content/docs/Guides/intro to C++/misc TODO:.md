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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QQFBX7E%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQData9W7n0%2BCB5TF0svqSlLaYf4oUNuwdv%2B1GaXXRYOKQIhAPu23eIJ9s90qz57csUYyQe5r3zn3V6rAyViakE7JeDMKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoTg8nbNwkVtyaz%2BEq3AMcfo5Rlfe%2FDITYi5cUQsQwUJCiZQlgceQ5BbC9X0xWVnrE7%2B1I8%2Bmi2TphuqrWxheQEtl%2BfOopW%2BusrpKhnXGjw1RW0Ze6N8S5tu1YprIwWE8WXmPQ%2BCcNWKK7LJDYs6TRLoH9Ncubg%2B3S69Bzv5Y6clJMM7PYxvfCyGNKVDbr%2B1vLyXDzzgarZ8Bqgh0SCv%2BKeU%2BiX%2Bmf%2F0i5b0vIlMg35mglcHTbDiWsip3HaIUMdlg0En9R1J%2BqaCkDw1YpIo7QsqOS6ZAipVQRYUKo1vdzbmNDV%2BPc1sQ0QzsAykIbhUyNotixgQcv3gQGYMoXKd3zg5wUzIWTfD5vbthbgJqOum8eqKCq1TiUZPmIpqppVNRaLeZdUpSVcIupayAXrzDblNibQbjTU0tDxZ2fLcpzuawFtMdatA1iTVygi2P32gAclp6SA4RXG2nz4V1cmnIBTn1EiwldhVGdBHwuFIZrzu3Zdbzwspj0geuhWNWWiloiSnVh2va0QhMVKCFoNOa6f%2Br1YkOtvTQ6zbxO3DNODYElYHfXOMme3E%2B68MJ68ND7Mb3hlABvKURhqhxyx%2FX2JEXY6creze7juNEerPyxIbM6jGZ1Q%2FJ6qESZd2%2FHYqOIs0hEgW0RhZ3jMjCj4v68BjqkAbdo3sJiyucuLQxxXxFQIeMl8yV1xRSwOWY4GBib1ob6H9%2F2MQJCvTQ0JstfqBFwGgwbWj0gXj8uAMHVtAbuFpLa13AiYbZHbmtPiQGfVNT7%2FCs5nWve%2FFOq7hNi%2FcjYESrJb2FNFMy4dll%2Brca%2B1cqwzNMXWjTenE7fgHaRIsakkroscz5b1kkvwN6pZOHOjGJ98oaSg2MSiUSWiTOqbG9Kg888&X-Amz-Signature=01e073c43d7ae1ea731c79fe16343f014d13fd4d8358a78bc266dcdc38a75abe&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QQFBX7E%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQData9W7n0%2BCB5TF0svqSlLaYf4oUNuwdv%2B1GaXXRYOKQIhAPu23eIJ9s90qz57csUYyQe5r3zn3V6rAyViakE7JeDMKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoTg8nbNwkVtyaz%2BEq3AMcfo5Rlfe%2FDITYi5cUQsQwUJCiZQlgceQ5BbC9X0xWVnrE7%2B1I8%2Bmi2TphuqrWxheQEtl%2BfOopW%2BusrpKhnXGjw1RW0Ze6N8S5tu1YprIwWE8WXmPQ%2BCcNWKK7LJDYs6TRLoH9Ncubg%2B3S69Bzv5Y6clJMM7PYxvfCyGNKVDbr%2B1vLyXDzzgarZ8Bqgh0SCv%2BKeU%2BiX%2Bmf%2F0i5b0vIlMg35mglcHTbDiWsip3HaIUMdlg0En9R1J%2BqaCkDw1YpIo7QsqOS6ZAipVQRYUKo1vdzbmNDV%2BPc1sQ0QzsAykIbhUyNotixgQcv3gQGYMoXKd3zg5wUzIWTfD5vbthbgJqOum8eqKCq1TiUZPmIpqppVNRaLeZdUpSVcIupayAXrzDblNibQbjTU0tDxZ2fLcpzuawFtMdatA1iTVygi2P32gAclp6SA4RXG2nz4V1cmnIBTn1EiwldhVGdBHwuFIZrzu3Zdbzwspj0geuhWNWWiloiSnVh2va0QhMVKCFoNOa6f%2Br1YkOtvTQ6zbxO3DNODYElYHfXOMme3E%2B68MJ68ND7Mb3hlABvKURhqhxyx%2FX2JEXY6creze7juNEerPyxIbM6jGZ1Q%2FJ6qESZd2%2FHYqOIs0hEgW0RhZ3jMjCj4v68BjqkAbdo3sJiyucuLQxxXxFQIeMl8yV1xRSwOWY4GBib1ob6H9%2F2MQJCvTQ0JstfqBFwGgwbWj0gXj8uAMHVtAbuFpLa13AiYbZHbmtPiQGfVNT7%2FCs5nWve%2FFOq7hNi%2FcjYESrJb2FNFMy4dll%2Brca%2B1cqwzNMXWjTenE7fgHaRIsakkroscz5b1kkvwN6pZOHOjGJ98oaSg2MSiUSWiTOqbG9Kg888&X-Amz-Signature=c70bb3c7d9139eeffd67bc43568c420e1fe5f1897642bd36be6c01ed8ff72f49&X-Amz-SignedHeaders=host&x-id=GetObject)

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
