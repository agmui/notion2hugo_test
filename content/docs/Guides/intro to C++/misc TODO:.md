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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB4KO7ZK%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHXtAagsO7jR2r9lK9mW86vhfjNY08pvehXHKrbyg2F2AiBci6Pz58tSxOXgUfxb%2Bj7EoRxZjHb8TGkYnJBkoyFVrCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPLayQVeveDjC4GWlKtwD6q%2BYqhUCzuAftjUaqhnQISg8T0J%2F7BrmC16QHA8tKwqBtdz4zPFmFXdXLKu%2BXwW5Dldm32GikXR5RRbBkf40WUexmwR1S1AuGkVnPHvmbBMQlVFRli6JJxqSY4NpoR%2F0%2BdD%2BOxY75bWkL6if3XbGr0McdAjSeXEZetl2bYQbbedqgKFRhdXoqYvwqA%2B0GogXuo7nAexWnf9JxEdlq0A74uJ2CyEzYU3vXf2ywPxGm%2FGdsb2VGbTn0p40TyWMPRIbUwFyzK%2BycQ8yOwguuwlaXQaPpfv8mE1ehWdyiZYyXxeIsSSAz6QivmtSUsEP%2BbXOAbByCl6%2FpU0N6zvmeGfSeJt9w2YjDL26Xjo2K1ahLOj%2FCpu76Z6ADjsvRI36r%2FwKpyqPXYf5ugx49QzWcZMBz3M2WSKLD2XirohbHfjklTNBhGfqQc3zSFRGKsS7rhZF2VTubOdUDFSzwmnN4gSippXD%2Ff7STXo0JuBolUtonTei5aQ%2FevcxeQ3F9SdVYZ3WFlCWr4kUmQSzfAebPUzEmm6zuRw5xYa4DKSE6YVU8wz%2F749s0FdnFUh1YdR41cmFy9JuUL3sytezI7FYeajJbyB6hBOO8Vy4Hp7YXFBhGIImFAtyxV%2FhPlgySeQw1cjNwAY6pgFyIGQcfKrtPRrbUg0bigN5y%2FzC3QB621UEc4JiLtklWNooQr9vyv6gqq3NWt8nMgIdlp9X5euC3892wQBQnGsI7NDRj1PoIQtGWfohdz6a9d5hnops8LFOoe3NMImQv1RTaPFndELCmLyVtVd7VcTplhgcSjYnsWUgxyGghuC%2BYlX5dQepAeZqBijwTQmCu5UBnS2iLHCRcNSkJbyQPNVrqIv8ivJz&X-Amz-Signature=425ea6205963d0ca70647f0dd6e1b2a4568217893ca1e62903a6143ad95f1b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB4KO7ZK%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHXtAagsO7jR2r9lK9mW86vhfjNY08pvehXHKrbyg2F2AiBci6Pz58tSxOXgUfxb%2Bj7EoRxZjHb8TGkYnJBkoyFVrCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPLayQVeveDjC4GWlKtwD6q%2BYqhUCzuAftjUaqhnQISg8T0J%2F7BrmC16QHA8tKwqBtdz4zPFmFXdXLKu%2BXwW5Dldm32GikXR5RRbBkf40WUexmwR1S1AuGkVnPHvmbBMQlVFRli6JJxqSY4NpoR%2F0%2BdD%2BOxY75bWkL6if3XbGr0McdAjSeXEZetl2bYQbbedqgKFRhdXoqYvwqA%2B0GogXuo7nAexWnf9JxEdlq0A74uJ2CyEzYU3vXf2ywPxGm%2FGdsb2VGbTn0p40TyWMPRIbUwFyzK%2BycQ8yOwguuwlaXQaPpfv8mE1ehWdyiZYyXxeIsSSAz6QivmtSUsEP%2BbXOAbByCl6%2FpU0N6zvmeGfSeJt9w2YjDL26Xjo2K1ahLOj%2FCpu76Z6ADjsvRI36r%2FwKpyqPXYf5ugx49QzWcZMBz3M2WSKLD2XirohbHfjklTNBhGfqQc3zSFRGKsS7rhZF2VTubOdUDFSzwmnN4gSippXD%2Ff7STXo0JuBolUtonTei5aQ%2FevcxeQ3F9SdVYZ3WFlCWr4kUmQSzfAebPUzEmm6zuRw5xYa4DKSE6YVU8wz%2F749s0FdnFUh1YdR41cmFy9JuUL3sytezI7FYeajJbyB6hBOO8Vy4Hp7YXFBhGIImFAtyxV%2FhPlgySeQw1cjNwAY6pgFyIGQcfKrtPRrbUg0bigN5y%2FzC3QB621UEc4JiLtklWNooQr9vyv6gqq3NWt8nMgIdlp9X5euC3892wQBQnGsI7NDRj1PoIQtGWfohdz6a9d5hnops8LFOoe3NMImQv1RTaPFndELCmLyVtVd7VcTplhgcSjYnsWUgxyGghuC%2BYlX5dQepAeZqBijwTQmCu5UBnS2iLHCRcNSkJbyQPNVrqIv8ivJz&X-Amz-Signature=3a15c72174e0fe29e6b630be05191e134526efe854874b45b65f63880168ff42&X-Amz-SignedHeaders=host&x-id=GetObject)

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
