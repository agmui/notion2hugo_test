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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVKUOCD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDy4GFX40%2F%2BtJBrjDNGG7lpZZpfsc3ZeDPGK2PNOP8WJAiEAj0l6z5C6KnXt8ybxAna%2FXdUQ5aiqbSeT0Nb3NwzlQXUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPaGt4X64rbAh%2Fco4CrcA%2BUD%2F5X4ipl%2B49AfPYA1s8t7kWWQueMMd3pBGbTjXb3fL7wr%2F7rGqgtaZrD7gbT9lcS8VzHoecyrAeQDHIXWXukCmmRJHRawT2HCnUfK4AGLw%2BEBFv%2FpwqOr4gg8cf9OcmeYb1kJ9qpbOQXjBjLk45699ely6gCzUJRcgvUHwEH9QE1QJvW81NA5oVtXVtrXHO9wCSwI98sr0UmpnU98jpVV1bKNqRUjDZYiGuTA7kUbpSjCNBwJ6%2BZbwwd4Vo6ftLbZ1NJ%2B%2B7W6OwFI4lPFBloLUKpF9suDRIzb%2BMstGQr7CiaFaBd6MzB%2BCOpIzcvghzmjzbBrNKs%2FEDS%2F08mr9zcQ9fgni19zx5kH%2FvzkG%2FRuxI29a%2BHAstGyMFi0c%2BPjdzosP5j3TZoXAKOCnOjJMkMXmGTMpx7hmPKT5GftbCk%2FNV%2F7m%2FKbUygcHoVRYHzWWUub4C%2BoJtVhKQe041sBEaK7SWbVYJZaabgrCGi5O6008R%2F%2Fs3YJw013C231NL2yqYhfsb7YFHTsYh38Li5ELtUiFN4SZLmkmmqg5CflLwY1mEBBWJaojPvoGSl1x63poL7Hcej4ibP7dUrQrCgc7b67XAJmbTunsNF4IP7ctoAFYcg1TKnmAbbXurhZMN2q7MEGOqUBOcS9PrnNzyv7UD0n%2FD82sjw9%2BVZ8uiGFoOdr0nHacEn%2FySIesAiDd9K7WQXh2uXSdjPx88rCN6%2Bt%2FXsI3kuj1KzpuOor3k4M7dZcQg66st89HKN3DkYWK8YJRt%2BDTqgakRxWetqglrlLXRFPW8eHN9Fj3ZFBtGz8mQSZKxT383ygyp9kei523epXAFLDnE9ser6jDmQXT59zVuLMz%2BJR%2BSgq39nW&X-Amz-Signature=0d301edc67cf9cf4ba31cbd0147a5253520f3451d57a746e69c6e51bc8a67b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVKUOCD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDy4GFX40%2F%2BtJBrjDNGG7lpZZpfsc3ZeDPGK2PNOP8WJAiEAj0l6z5C6KnXt8ybxAna%2FXdUQ5aiqbSeT0Nb3NwzlQXUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPaGt4X64rbAh%2Fco4CrcA%2BUD%2F5X4ipl%2B49AfPYA1s8t7kWWQueMMd3pBGbTjXb3fL7wr%2F7rGqgtaZrD7gbT9lcS8VzHoecyrAeQDHIXWXukCmmRJHRawT2HCnUfK4AGLw%2BEBFv%2FpwqOr4gg8cf9OcmeYb1kJ9qpbOQXjBjLk45699ely6gCzUJRcgvUHwEH9QE1QJvW81NA5oVtXVtrXHO9wCSwI98sr0UmpnU98jpVV1bKNqRUjDZYiGuTA7kUbpSjCNBwJ6%2BZbwwd4Vo6ftLbZ1NJ%2B%2B7W6OwFI4lPFBloLUKpF9suDRIzb%2BMstGQr7CiaFaBd6MzB%2BCOpIzcvghzmjzbBrNKs%2FEDS%2F08mr9zcQ9fgni19zx5kH%2FvzkG%2FRuxI29a%2BHAstGyMFi0c%2BPjdzosP5j3TZoXAKOCnOjJMkMXmGTMpx7hmPKT5GftbCk%2FNV%2F7m%2FKbUygcHoVRYHzWWUub4C%2BoJtVhKQe041sBEaK7SWbVYJZaabgrCGi5O6008R%2F%2Fs3YJw013C231NL2yqYhfsb7YFHTsYh38Li5ELtUiFN4SZLmkmmqg5CflLwY1mEBBWJaojPvoGSl1x63poL7Hcej4ibP7dUrQrCgc7b67XAJmbTunsNF4IP7ctoAFYcg1TKnmAbbXurhZMN2q7MEGOqUBOcS9PrnNzyv7UD0n%2FD82sjw9%2BVZ8uiGFoOdr0nHacEn%2FySIesAiDd9K7WQXh2uXSdjPx88rCN6%2Bt%2FXsI3kuj1KzpuOor3k4M7dZcQg66st89HKN3DkYWK8YJRt%2BDTqgakRxWetqglrlLXRFPW8eHN9Fj3ZFBtGz8mQSZKxT383ygyp9kei523epXAFLDnE9ser6jDmQXT59zVuLMz%2BJR%2BSgq39nW&X-Amz-Signature=60458e55e6cc1bbc3ef3bc96024ca09af8e034fbce4387cb7a9eed95094bf151&X-Amz-SignedHeaders=host&x-id=GetObject)

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
