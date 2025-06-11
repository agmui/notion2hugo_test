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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLGPCEG6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDHsrwN44t59SZQKeJ4aOgUkYnhK4K%2F7jx3ue34C6kA3AIhAMaqFV%2FQRocnrcw%2BvSnCgFTYC39sr3Pfne2gEybILZ6xKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ%2BzjhRgYmY78F2Bsq3AMB%2Bf3HaZn7QpPu1dEh5C2x1yTUVsAsho%2B12%2FozRXgS85bEm4X6pJgVN8yNly6AZoTo6hFTYbQjXOkRqFBqTyVHSzGiUAfwql6Gvsx1eHbC%2F%2FLCXjxo96wWoxZZ%2FLimx6ydIx1m6ZKZMu%2F4sZajdUX323D4J5opNEYqOrFjHgn0bu4xY0jKFSTwcZfvs3SsYG%2FkuBQQgYXwk2YmBAH5ZG6eq1Z6GwLqyx4XqNQ%2FgCC7phVE3Tbzlk6JEodqJ6cdJptWez4sDKIagtK6oIQyHLUnSIvpiALcMjLGmKRZnlm9uAe8HLIwB5e5gRxpWFe6R9lekSB3Zy3soK2Jol1ZLLUrawWOy845ON%2F%2F7LaHKWLjk%2FqONXvecd5Vt9qXwLMWrmqxz2uViKhjVkJpbAD2m%2B5X0f%2B1ygtIkYtF6GmkglOhpPaBtG2wMmHNPQei%2Fn94aJ0wE6sV%2Fepg6krnXnj0j97uIT9MOqqLVDiFOTLUkkz%2FHxuwmOHb2OfCLeUX6RBQyTOGYPA8klucO79IUl7hakd%2FTANqWECq0HLgVvOBTP7mkCixLNjZ4j%2FaGA0fr5a%2F2bTSFzWHzsUEMh3f9KxFP8H31Csx%2B9hGJ7WbXyqLiXALkAQnpgbFLvv1EHnwNDDq56bCBjqkAcnpOhca7Jxa3C84XFf68l6fjBwOrHwc6gGwU8JikrbpZyUkTzsWUNXzunUDsrqNL9N%2Bq7Jl5aKaaBEKmmf%2FIodil2wdtT2ETlUx%2B4%2FpKXkUBW2On30uL2iGHBFlz0w72Ddar9k4l6qj3eYL6M2uglZlGrEAZI384uZfijH6V6zUC92mhHXMah7K9xOpHx9LFY7ACg3gnDAvqY3MCWVbwrHDYPv7&X-Amz-Signature=b090ccf446ef7b882fbb00f2aa27c2c3e19ab7d402103485e576fdaadab7611e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLGPCEG6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDHsrwN44t59SZQKeJ4aOgUkYnhK4K%2F7jx3ue34C6kA3AIhAMaqFV%2FQRocnrcw%2BvSnCgFTYC39sr3Pfne2gEybILZ6xKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ%2BzjhRgYmY78F2Bsq3AMB%2Bf3HaZn7QpPu1dEh5C2x1yTUVsAsho%2B12%2FozRXgS85bEm4X6pJgVN8yNly6AZoTo6hFTYbQjXOkRqFBqTyVHSzGiUAfwql6Gvsx1eHbC%2F%2FLCXjxo96wWoxZZ%2FLimx6ydIx1m6ZKZMu%2F4sZajdUX323D4J5opNEYqOrFjHgn0bu4xY0jKFSTwcZfvs3SsYG%2FkuBQQgYXwk2YmBAH5ZG6eq1Z6GwLqyx4XqNQ%2FgCC7phVE3Tbzlk6JEodqJ6cdJptWez4sDKIagtK6oIQyHLUnSIvpiALcMjLGmKRZnlm9uAe8HLIwB5e5gRxpWFe6R9lekSB3Zy3soK2Jol1ZLLUrawWOy845ON%2F%2F7LaHKWLjk%2FqONXvecd5Vt9qXwLMWrmqxz2uViKhjVkJpbAD2m%2B5X0f%2B1ygtIkYtF6GmkglOhpPaBtG2wMmHNPQei%2Fn94aJ0wE6sV%2Fepg6krnXnj0j97uIT9MOqqLVDiFOTLUkkz%2FHxuwmOHb2OfCLeUX6RBQyTOGYPA8klucO79IUl7hakd%2FTANqWECq0HLgVvOBTP7mkCixLNjZ4j%2FaGA0fr5a%2F2bTSFzWHzsUEMh3f9KxFP8H31Csx%2B9hGJ7WbXyqLiXALkAQnpgbFLvv1EHnwNDDq56bCBjqkAcnpOhca7Jxa3C84XFf68l6fjBwOrHwc6gGwU8JikrbpZyUkTzsWUNXzunUDsrqNL9N%2Bq7Jl5aKaaBEKmmf%2FIodil2wdtT2ETlUx%2B4%2FpKXkUBW2On30uL2iGHBFlz0w72Ddar9k4l6qj3eYL6M2uglZlGrEAZI384uZfijH6V6zUC92mhHXMah7K9xOpHx9LFY7ACg3gnDAvqY3MCWVbwrHDYPv7&X-Amz-Signature=7e33416b5f9506c32bcabc220c4d4e440a7a68356c00eaaac3c18e108a66fd82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
