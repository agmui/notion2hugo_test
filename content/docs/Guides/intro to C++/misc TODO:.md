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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO4D3EPL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXYtiDCmtpLuV5Kc1lku8KbfSRkmRuiSTGzg5SWjQSBAiARWCcETnhX8Kq9%2BdPRLVwU7vfPacGvizYjxKU1hkc5viqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNhwCMiPGjQtF3BETKtwDe7pQBKhfp9Sq%2BS%2FbFyF1lAMxPTtmDa8suoDh58sBPfk%2BKN3F0%2Fj%2BHNw499zTFPCUq2dyfrfmG9Dn292laKo7WZ5%2BIHnjetwRFRDIUZQPZYI36v5Fm%2BKy7ca4m07MK1Pj%2Br%2F9JqGqq8RrujOhGrw5GSyJyBtgNEOOdhpPsUIVrPTwweDSjOgORIwOBnhxKPZkIGN3JhDCoJ90BQXwSrTTCeiR0mAQrE7YBHd8ZdBI8ABtphRPj2ZwOe0RGK%2F4xrVHWOgNIg1j7u5FarLzBMtdCmWrn%2F8IF%2FyZMONtJRJaqewSnllZj8gTbAyXVxuJsZSsuKRXoBzg%2Beq0z8mUPSMKOKoyJHNz%2F8b1k9fZtdBHy7MLj%2FypgoW8Be6oNebiCqIEI3OiwT%2B9Gvwb0TOXNdp0vqSi%2B5dp4Y23yXHs1cq7nnSQwtE%2Fk5nlnNkWjPDHErdk5QSBSJeBR8%2FR1z5iIXYvQFd%2FBWh9qDz1ZTF1Xi3sTaIsZbTmh4MmUdw%2BF9YMjuEcMaKuneBknH11XIg0Ra1VUGwwuBRbF5jBapmKnIV%2FpjMrEgxlwHuQlnNird4ovKX7tRAPk9Bq2I1Cz3DRC3G3TFqNuDMOy%2BZF9i%2BRqQSjSpN7k12PS%2BCprE7LAQ0wgO%2BvvQY6pgGfOcupmncL5bShYXFBNQ77SuFKctnmBqaqJp15hcAn6JZK8b%2BwQot8SBoReNnNZ3WIE9s%2Ba4pAAqlAiKca8%2FgXxGMH0EmlkEF1uaiGk1KypDqGm4VwYyVb0iiBCrNAtLgEFSzBjP4Rj9M05gNX%2B9N9cIBs0VN45%2BOQ8Km2kfVugwLrRNDuTnkK1%2BZGoOWRgTZZjR0CWhQb1h89Zsn14IdElXIsF1PX&X-Amz-Signature=0538f1ee851b41b44eecd99ea01f0563837622e9e4cdc6d66a18695245abc18e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO4D3EPL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXYtiDCmtpLuV5Kc1lku8KbfSRkmRuiSTGzg5SWjQSBAiARWCcETnhX8Kq9%2BdPRLVwU7vfPacGvizYjxKU1hkc5viqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNhwCMiPGjQtF3BETKtwDe7pQBKhfp9Sq%2BS%2FbFyF1lAMxPTtmDa8suoDh58sBPfk%2BKN3F0%2Fj%2BHNw499zTFPCUq2dyfrfmG9Dn292laKo7WZ5%2BIHnjetwRFRDIUZQPZYI36v5Fm%2BKy7ca4m07MK1Pj%2Br%2F9JqGqq8RrujOhGrw5GSyJyBtgNEOOdhpPsUIVrPTwweDSjOgORIwOBnhxKPZkIGN3JhDCoJ90BQXwSrTTCeiR0mAQrE7YBHd8ZdBI8ABtphRPj2ZwOe0RGK%2F4xrVHWOgNIg1j7u5FarLzBMtdCmWrn%2F8IF%2FyZMONtJRJaqewSnllZj8gTbAyXVxuJsZSsuKRXoBzg%2Beq0z8mUPSMKOKoyJHNz%2F8b1k9fZtdBHy7MLj%2FypgoW8Be6oNebiCqIEI3OiwT%2B9Gvwb0TOXNdp0vqSi%2B5dp4Y23yXHs1cq7nnSQwtE%2Fk5nlnNkWjPDHErdk5QSBSJeBR8%2FR1z5iIXYvQFd%2FBWh9qDz1ZTF1Xi3sTaIsZbTmh4MmUdw%2BF9YMjuEcMaKuneBknH11XIg0Ra1VUGwwuBRbF5jBapmKnIV%2FpjMrEgxlwHuQlnNird4ovKX7tRAPk9Bq2I1Cz3DRC3G3TFqNuDMOy%2BZF9i%2BRqQSjSpN7k12PS%2BCprE7LAQ0wgO%2BvvQY6pgGfOcupmncL5bShYXFBNQ77SuFKctnmBqaqJp15hcAn6JZK8b%2BwQot8SBoReNnNZ3WIE9s%2Ba4pAAqlAiKca8%2FgXxGMH0EmlkEF1uaiGk1KypDqGm4VwYyVb0iiBCrNAtLgEFSzBjP4Rj9M05gNX%2B9N9cIBs0VN45%2BOQ8Km2kfVugwLrRNDuTnkK1%2BZGoOWRgTZZjR0CWhQb1h89Zsn14IdElXIsF1PX&X-Amz-Signature=a8e8c906f9014913f55303337cc9ec81b3ffac7f6700cffc2dce98c06550f90a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
