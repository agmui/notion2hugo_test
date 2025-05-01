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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJUTFUXJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBHBqEohMXCCBXT%2B01JVUT4yzvfZegVypfAdeZU48XCbAiB99I6QjBLd1zPzhFnM6xriBVi5WceLqpc%2FBnnfKc7ddCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrLT36k7hTn96E%2BMUKtwD6PWjkLSedAI15ujft0S2giTnGu4FB1QUO8B63hCLyN9ysgATiKbCnhF1rpoXTDpBCoCoIJcvsJcleXofQo383D9wiExmyfptpUpxYV6Ugv%2FvwcoNtShECdx2sAgseGDv8tjFfDXNMkJq4%2FH9xgZf3ngCticEf%2FAww5Rz9IlMK3N8tvc0WZdE0lO1S6j5JZ%2BvZ9p0dNrx6cIKO%2B%2B3%2Fu383cn3dnXu08l3YQ5bq5xGsMlWckyD8r1Ity7NMkKA2ODTZq5HqbvwPIaU%2F4NObGtuR1GyTJoMYPA7vmCnh2ZCWeuiAuixAI65CkARQ9W9KohJkLJcCr06QBBVkTLpq7cgapHTwGAYi0rUZQlmxz%2BitBDj0Jq8QMGYDyHomPNBKjeSf6yw70Pf2j5zhfAn2c%2FPlTAtsKaVAzYzRS%2Ftr9VkCTToP1e7LaglZV%2B4STULBi%2BCkiZgDEKADCxepBeCWZWNbQr4XGps6FByDnmblIco5GWu2ZXhGwR4S%2Fk%2FPKNa3XuL9JfqpNUEkQ6JfmWLXkNK2lQEo%2FDruomkbzJqzzJR1GdXH6xvT4prVZ8NzWFmnRlMARwy%2BpZ83w2JftCDj5HgnmvKFg1PJsdIsMZ6psANXX5aGXdBhLbWb6XKsQMwlaHOwAY6pgF3OG9VpHgTr00QE11ymVw8nmTKnmWid%2FXDvBJurbAa4JP3AYZmCbSrR5rgErDyW1otuZRQf608CJfqna%2B%2BrBlTafSXuj6WKumCxLi4%2F1chz%2B8cpv2ZnFfA%2Bu7wddHnrrtNjjKdFUONZqPR9TL4TI4daX6BXhnCcFbsRqsW%2FCIu9HKLO%2B5UJkPIrZO74okRKaszfEvDBYf4nMwpRp3z3krqYfJmxCiS&X-Amz-Signature=112a16de19706800d340b07661f2c50aafd8ca33958ba6ae135a474d72e6a0a1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJUTFUXJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBHBqEohMXCCBXT%2B01JVUT4yzvfZegVypfAdeZU48XCbAiB99I6QjBLd1zPzhFnM6xriBVi5WceLqpc%2FBnnfKc7ddCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrLT36k7hTn96E%2BMUKtwD6PWjkLSedAI15ujft0S2giTnGu4FB1QUO8B63hCLyN9ysgATiKbCnhF1rpoXTDpBCoCoIJcvsJcleXofQo383D9wiExmyfptpUpxYV6Ugv%2FvwcoNtShECdx2sAgseGDv8tjFfDXNMkJq4%2FH9xgZf3ngCticEf%2FAww5Rz9IlMK3N8tvc0WZdE0lO1S6j5JZ%2BvZ9p0dNrx6cIKO%2B%2B3%2Fu383cn3dnXu08l3YQ5bq5xGsMlWckyD8r1Ity7NMkKA2ODTZq5HqbvwPIaU%2F4NObGtuR1GyTJoMYPA7vmCnh2ZCWeuiAuixAI65CkARQ9W9KohJkLJcCr06QBBVkTLpq7cgapHTwGAYi0rUZQlmxz%2BitBDj0Jq8QMGYDyHomPNBKjeSf6yw70Pf2j5zhfAn2c%2FPlTAtsKaVAzYzRS%2Ftr9VkCTToP1e7LaglZV%2B4STULBi%2BCkiZgDEKADCxepBeCWZWNbQr4XGps6FByDnmblIco5GWu2ZXhGwR4S%2Fk%2FPKNa3XuL9JfqpNUEkQ6JfmWLXkNK2lQEo%2FDruomkbzJqzzJR1GdXH6xvT4prVZ8NzWFmnRlMARwy%2BpZ83w2JftCDj5HgnmvKFg1PJsdIsMZ6psANXX5aGXdBhLbWb6XKsQMwlaHOwAY6pgF3OG9VpHgTr00QE11ymVw8nmTKnmWid%2FXDvBJurbAa4JP3AYZmCbSrR5rgErDyW1otuZRQf608CJfqna%2B%2BrBlTafSXuj6WKumCxLi4%2F1chz%2B8cpv2ZnFfA%2Bu7wddHnrrtNjjKdFUONZqPR9TL4TI4daX6BXhnCcFbsRqsW%2FCIu9HKLO%2B5UJkPIrZO74okRKaszfEvDBYf4nMwpRp3z3krqYfJmxCiS&X-Amz-Signature=849c78d857dbe6f5993d88464d2142992151aab95a4491e97d0f319dddc96bf6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
