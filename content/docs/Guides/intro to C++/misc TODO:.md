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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3SDS4R%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC%2BSWNe5BBCa70rlOn4jI%2B%2FX1uyBl%2F1DfB8LzZ9QxdFaAIhAIRlgQQt7F%2BLc7TbPKzvxncpdn2kWUN%2BGkt9DDEGvERRKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBYszArvBWQtPCGn4q3AOdS%2F7%2FAX%2B6yyBAEmxsdikzulrRe6N6HX1tmrDtQe64z14%2Bpjt7CFYya57jxY2LPWE4fPqsrnHXRxnhqS%2FNDSKr2vzZnSWVRrGXk6pqw%2BbtLD7xgdvxQi0qXEswkBdtAvbKVGfsJxbSdTVnrKaPOY%2B8olOXCBq3%2Bcwse%2FnfmVQ%2Bj4DVtcYPT0VtSrjU%2BdqO8VRo2RUc52cj7lygy9yRMami0tVUMDoG1BvuxBb%2Bx3BIuTOwdkOGkZZpcOQVROmvH%2BvdN%2BtbfeaV2pofNPhoSzjoKbO4oqtU1eeR5c1cn7h5zaKpLBNQY4w94Ry9e2wZK98YAv6HyrzdDXyu3YGJDCVUZl6Qio3EzGYN6p7m53OCG4hqQoj2gsRR5j%2FXtwNM5qTmt%2FGBwRfRqZ5t1Jj%2BpIBofzi0sGSbWrXxnp82FzSdsDwugTMZHv610DOBhhjyOsZ3Y4NdONyMEO5ZF9%2FyvHtlptLDnD1ILBDzwGQsGqXp28Vgm%2BvMaKzvJCuZDZLO4gdqAjoE6hF23DMuNohUdgUllkCLGVnqVP%2BKO%2BGG%2B%2FcFmZ1Hihei4TUn%2FL5A%2F%2F0T74V2xUtJbuiwXqPKDwr4GeXdZR%2BFYUwjvNYfh1q6dEmKfLLMm6Qq68nncQfa7jCP%2Bpq9BjqkAZh5%2F%2FGqCjRwl5%2Bl%2FlL6JTjwOBRrKnUwGOc1yWPMoZxkJF1tfuvEmyj5QfVXNuGTPWZpXv%2B8%2FScsEEB10fgoKo0U0JklYiwFxeOpRavfY%2BIkQzcXjyoWqpfzU8vK1NdjBF2qp9NWxegaUE8M9tSa2r7ZZtUYn25ooIApYp5lLgsl9rMnwbihRD5tVO%2F%2BkbomyWXrv65eK%2FNC0T273Cd0uio0bU9I&X-Amz-Signature=af107677f535e7dd0f09576015ab2fec869459321b40c3ab7ec3724714b2577c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3SDS4R%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC%2BSWNe5BBCa70rlOn4jI%2B%2FX1uyBl%2F1DfB8LzZ9QxdFaAIhAIRlgQQt7F%2BLc7TbPKzvxncpdn2kWUN%2BGkt9DDEGvERRKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBYszArvBWQtPCGn4q3AOdS%2F7%2FAX%2B6yyBAEmxsdikzulrRe6N6HX1tmrDtQe64z14%2Bpjt7CFYya57jxY2LPWE4fPqsrnHXRxnhqS%2FNDSKr2vzZnSWVRrGXk6pqw%2BbtLD7xgdvxQi0qXEswkBdtAvbKVGfsJxbSdTVnrKaPOY%2B8olOXCBq3%2Bcwse%2FnfmVQ%2Bj4DVtcYPT0VtSrjU%2BdqO8VRo2RUc52cj7lygy9yRMami0tVUMDoG1BvuxBb%2Bx3BIuTOwdkOGkZZpcOQVROmvH%2BvdN%2BtbfeaV2pofNPhoSzjoKbO4oqtU1eeR5c1cn7h5zaKpLBNQY4w94Ry9e2wZK98YAv6HyrzdDXyu3YGJDCVUZl6Qio3EzGYN6p7m53OCG4hqQoj2gsRR5j%2FXtwNM5qTmt%2FGBwRfRqZ5t1Jj%2BpIBofzi0sGSbWrXxnp82FzSdsDwugTMZHv610DOBhhjyOsZ3Y4NdONyMEO5ZF9%2FyvHtlptLDnD1ILBDzwGQsGqXp28Vgm%2BvMaKzvJCuZDZLO4gdqAjoE6hF23DMuNohUdgUllkCLGVnqVP%2BKO%2BGG%2B%2FcFmZ1Hihei4TUn%2FL5A%2F%2F0T74V2xUtJbuiwXqPKDwr4GeXdZR%2BFYUwjvNYfh1q6dEmKfLLMm6Qq68nncQfa7jCP%2Bpq9BjqkAZh5%2F%2FGqCjRwl5%2Bl%2FlL6JTjwOBRrKnUwGOc1yWPMoZxkJF1tfuvEmyj5QfVXNuGTPWZpXv%2B8%2FScsEEB10fgoKo0U0JklYiwFxeOpRavfY%2BIkQzcXjyoWqpfzU8vK1NdjBF2qp9NWxegaUE8M9tSa2r7ZZtUYn25ooIApYp5lLgsl9rMnwbihRD5tVO%2F%2BkbomyWXrv65eK%2FNC0T273Cd0uio0bU9I&X-Amz-Signature=5220f5a087ef74e8bafdbb9fa78223cd28683dc9bd6e88b1f3fd9ea2ea790f30&X-Amz-SignedHeaders=host&x-id=GetObject)

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
