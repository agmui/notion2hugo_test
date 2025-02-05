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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ63JH3Z%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICvqI54Lnz%2BVoUOV3BNUSMxqUIhG%2FSJoS0zxzsnOv0DPAiAkzSUCqe4p7RAfr29Ast01K8wdR8cvvi08FLzGxbF%2Fuir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMjKBVb%2Bfbueo1mq5HKtwDZyZ0NMDTHyjKXW93f%2FayW62ZQU8bcYbaK3F2nyfdEJ1dqVy0JyDeX3NcG8zOZjPUcsBS67%2BCCdPIaRzfDtEdrjby35Zo%2FVZtGPiu5Ah5GXtFtOpOfbCGX69VtzDq4xNgw3OiCyd8cC7RuPn3d%2F%2F2fhxR8Sd%2F8GITehW1qxbtJI8k7uZ4je%2BDg3Q7oYe1mhOViqNkOCQU0LoaXuT5FuKNCuYI52pSmgI8A2ypzeokIcrfLbZKviO%2Blnfj1RJLZy9x%2BzzK7GL%2FiusGgiMzXRc7Dcy2uD8PSq8oMefCK5IkMM6PP6EHV5mge9IxeoEWchWQ5ioHA25MwBpZG%2F%2Be5nhzyfJWvq4knMzyOdf%2BUo06j6ghvWtytHF6wTLG%2Fq5NPoyK79j1Q6p6t8nPG1DFsMtuxNOkVLeXOc7yk6wtXTwvOloitGq11VLcKHyo4b7mJERF4fJ6yVRjIRes%2F3ofTqf0WlB%2Ftoat8RNFqE6gzQBOQvFeVHTWz8oUyq49fLHRwjFnr9I6HAWMuBuvYmxDsJvuDOQHot5J2fFPR%2FqOZ1q7YH0x%2B3sHvSKXnoF3qKUCfQpSfwdNZnllfBGzcsTUE6neE49wunPh9Ph4rwQJV1CEgFQ%2FZIB5FwRJxelvIeIw0NCMvQY6pgHwXUMbAgWtAZZzDjJTz%2BQgR%2BsCEm%2FLX0XxlkXT%2BDuFjotffWGX%2BkrtjXQ5F64en4jrN8yyAhsKaDZXu4bzKQw7iSAEhlj1OVBgZ%2FYM1SXsYWnFG%2FGNt2BfsOz57WJ3Qp09lxPRtUvjJLHo%2B35C5bvofbgtxj9bVnQms%2FF62bA7OUK%2FKBayMWPB%2FXba8mpdekmPmBr1M9YYK3L3UxYQUX1OU7aUa8AG&X-Amz-Signature=9ec9bd23703808692e6c857c942884121063a2b849fdb5c26b3768611d1ffefe&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ63JH3Z%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICvqI54Lnz%2BVoUOV3BNUSMxqUIhG%2FSJoS0zxzsnOv0DPAiAkzSUCqe4p7RAfr29Ast01K8wdR8cvvi08FLzGxbF%2Fuir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMjKBVb%2Bfbueo1mq5HKtwDZyZ0NMDTHyjKXW93f%2FayW62ZQU8bcYbaK3F2nyfdEJ1dqVy0JyDeX3NcG8zOZjPUcsBS67%2BCCdPIaRzfDtEdrjby35Zo%2FVZtGPiu5Ah5GXtFtOpOfbCGX69VtzDq4xNgw3OiCyd8cC7RuPn3d%2F%2F2fhxR8Sd%2F8GITehW1qxbtJI8k7uZ4je%2BDg3Q7oYe1mhOViqNkOCQU0LoaXuT5FuKNCuYI52pSmgI8A2ypzeokIcrfLbZKviO%2Blnfj1RJLZy9x%2BzzK7GL%2FiusGgiMzXRc7Dcy2uD8PSq8oMefCK5IkMM6PP6EHV5mge9IxeoEWchWQ5ioHA25MwBpZG%2F%2Be5nhzyfJWvq4knMzyOdf%2BUo06j6ghvWtytHF6wTLG%2Fq5NPoyK79j1Q6p6t8nPG1DFsMtuxNOkVLeXOc7yk6wtXTwvOloitGq11VLcKHyo4b7mJERF4fJ6yVRjIRes%2F3ofTqf0WlB%2Ftoat8RNFqE6gzQBOQvFeVHTWz8oUyq49fLHRwjFnr9I6HAWMuBuvYmxDsJvuDOQHot5J2fFPR%2FqOZ1q7YH0x%2B3sHvSKXnoF3qKUCfQpSfwdNZnllfBGzcsTUE6neE49wunPh9Ph4rwQJV1CEgFQ%2FZIB5FwRJxelvIeIw0NCMvQY6pgHwXUMbAgWtAZZzDjJTz%2BQgR%2BsCEm%2FLX0XxlkXT%2BDuFjotffWGX%2BkrtjXQ5F64en4jrN8yyAhsKaDZXu4bzKQw7iSAEhlj1OVBgZ%2FYM1SXsYWnFG%2FGNt2BfsOz57WJ3Qp09lxPRtUvjJLHo%2B35C5bvofbgtxj9bVnQms%2FF62bA7OUK%2FKBayMWPB%2FXba8mpdekmPmBr1M9YYK3L3UxYQUX1OU7aUa8AG&X-Amz-Signature=6035b99b65351f5df3b1b90ef65e6cf328fb18b5a81a8a0249b2978bd806aa7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
