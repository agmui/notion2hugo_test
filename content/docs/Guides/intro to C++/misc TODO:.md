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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZAE22SL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOhrm1pXIvfGObYD%2FKbSijOpnOliaYt%2Ff9a%2BM0UitYwwIhAOIHExMy7BIGVIPe74YI1ug04d3hHsbOjQJr6oOXqA%2F8Kv8DCCsQABoMNjM3NDIzMTgzODA1IgxwzJA%2FG5zuxpvEQOsq3APaMDgeKtVuNV6%2FjM6W8nMqqpxfXsVobcgdi%2FyiZOM9vx57I2WYw5SWDFslUqrnVjbk1v5CYeVMVQMUfXyEXD8edggj7tdQ6d5SIAdeUpBmM9oGcByfGslNFTuohi3kJOcCqcYOYJBk16ePNMO8GekR0muBjgpjrxZSKgfJxrOgEAgEwL4gb1KSG4BPqZkInMMFWX0DYlIgfN33N91QUxypo15qKKd%2B%2Fz88R5XtaVH3QUrxW2TH09NtD%2BxdZqHaAbgrZVcKoN5sYCe31B1D0WmhXvrjZOashlzO7AVM%2B3xF6aNCdWCuvLskl%2Byp1LfxjSe1c4%2BHnpXsETbFawH1EEkHKpGyIFJiWvWNX0W2uYPwCDl4CEsb1VGA0GUMxtnDDEeozqlPBbfcJLW4pw27Oofj2MwKPuFc0Esnlzzq8S9%2FyA%2Bg7jIiuycONYqvI8Cmazf9EL3nMlYI9Btj4eOtKo1CzTI1irzjwst7MF0LEZJ9Jk4Y%2FDhIgVypTLJRkIiH%2B8uH9HeQNn%2BbjSkeWJXIDAme4qyXya7A39QSgmrzRFxxVNwfZ2bA1u48i9ETn4WKR3HqOznTXc%2BVZ4lWUJRBPS4%2B4k8ZbLnioVtd5G8lSjRQN3gpGCiy1APgN4%2FlVDCQz%2Fi%2FBjqkAbSMYBVIgbQQn9nxENUPSlyQaqfCfwxv96HQIRvYDkldbOPcaawxLypno9rGEsM7QwGzoSR9kruJ4FQk%2BXQZV0Z81ac%2FbDNJLLKAvaGIBqUx4Tlel3dRSixr6z%2B8Goq1svsXztzeGKUuKp4X92V%2FocUTpRRqkgR125KgknPyreg1ioM14%2BIPWpCkBp31887oWkfPjtijzwPZp5aPGWo6ym5ryfNy&X-Amz-Signature=9846d1903d3ae580bed1915b9f2d7ff41b8adf4084d3ec8ba7a8aac0d2407294&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZAE22SL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOhrm1pXIvfGObYD%2FKbSijOpnOliaYt%2Ff9a%2BM0UitYwwIhAOIHExMy7BIGVIPe74YI1ug04d3hHsbOjQJr6oOXqA%2F8Kv8DCCsQABoMNjM3NDIzMTgzODA1IgxwzJA%2FG5zuxpvEQOsq3APaMDgeKtVuNV6%2FjM6W8nMqqpxfXsVobcgdi%2FyiZOM9vx57I2WYw5SWDFslUqrnVjbk1v5CYeVMVQMUfXyEXD8edggj7tdQ6d5SIAdeUpBmM9oGcByfGslNFTuohi3kJOcCqcYOYJBk16ePNMO8GekR0muBjgpjrxZSKgfJxrOgEAgEwL4gb1KSG4BPqZkInMMFWX0DYlIgfN33N91QUxypo15qKKd%2B%2Fz88R5XtaVH3QUrxW2TH09NtD%2BxdZqHaAbgrZVcKoN5sYCe31B1D0WmhXvrjZOashlzO7AVM%2B3xF6aNCdWCuvLskl%2Byp1LfxjSe1c4%2BHnpXsETbFawH1EEkHKpGyIFJiWvWNX0W2uYPwCDl4CEsb1VGA0GUMxtnDDEeozqlPBbfcJLW4pw27Oofj2MwKPuFc0Esnlzzq8S9%2FyA%2Bg7jIiuycONYqvI8Cmazf9EL3nMlYI9Btj4eOtKo1CzTI1irzjwst7MF0LEZJ9Jk4Y%2FDhIgVypTLJRkIiH%2B8uH9HeQNn%2BbjSkeWJXIDAme4qyXya7A39QSgmrzRFxxVNwfZ2bA1u48i9ETn4WKR3HqOznTXc%2BVZ4lWUJRBPS4%2B4k8ZbLnioVtd5G8lSjRQN3gpGCiy1APgN4%2FlVDCQz%2Fi%2FBjqkAbSMYBVIgbQQn9nxENUPSlyQaqfCfwxv96HQIRvYDkldbOPcaawxLypno9rGEsM7QwGzoSR9kruJ4FQk%2BXQZV0Z81ac%2FbDNJLLKAvaGIBqUx4Tlel3dRSixr6z%2B8Goq1svsXztzeGKUuKp4X92V%2FocUTpRRqkgR125KgknPyreg1ioM14%2BIPWpCkBp31887oWkfPjtijzwPZp5aPGWo6ym5ryfNy&X-Amz-Signature=857b7f6eddf890750e8b65b465f2b460025c61056c3d0c18bc872359f008ae08&X-Amz-SignedHeaders=host&x-id=GetObject)

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
