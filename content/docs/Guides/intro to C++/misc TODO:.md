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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIA5T6Z2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCywRkWpsOPsptsIkVGS1fk7UQC4bvW%2BAaGcuMpkdf3cQIhAMsQXM3cVnL801W6m4OTWu023cXPf3XobXqlZ3eM53gnKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxlxxQtsEcxfSWERYq3AODKjE9EQVfFma7dFpWgLUao6PyX5KB5H3caqZE8ilVhP%2FwUeJs2jWTl9GpAtuqRMOWRZFurg6tr5SL6cbEvKXcev7QsJURT%2BrSvE3mynHML3NcjLXsU0rcsYTWNMg0s%2BukJ%2FLy57IF%2FFhA0p5ysIaRJ22rG6Ob7TVAFW5Gvy4bV8iGQ0KGCfuWQR13edU%2B7Z1jvMEpYgNKLGE6RkuBN4xDm7aLcGubQWcEnfHkogTYgT6dsvm9y42K3Mc21PrSIgrSc1vG5tEHHszOCFN2o2dNBzEbPqoiNT%2BsCkkozIvrySdqqxExsjZQYtssl%2FjAXgXOOJEBxZqCiFSTEG7u7NvNd5VXuGaHYKuMTNqNxcb6L4STGO6forfX6%2BHdEtkM3czqZqyRBqkHC6Bb%2BKA%2BSlyUK08HWxtm%2FnagxGrARSjDFPCdgUJHAMbog%2BBeMay9om83vFOQYqeRJ76pF97ng5O98FeMPyDSKejtlmNYjSr9adl6cm9u5yRqDloF%2FOceNZECB36ldQ6V%2FOszuSP6uOKOHme56cDvbWYBd5QSTckEAeTXCErotmWCl9Lgi%2F5bR0kDNoBbSKHuGT3%2FCpzkEkj8uZ6S%2FhJMoF%2FJvw9QezC7KcTXuEL4DxId9efU9jCXvdPCBjqkAZvOav8m9wPJtJD%2FI6fr3Mt18aoxyU4f07%2Bhl75KVHsFeJ%2FLEy7qTnjEm5uJ1l8YQUhDC%2F4xOPXQ4%2FLlPCk1YneidCK9c6WXxjTTfRQ2gLP7AwEnH8ARPBY0su%2Fln3h98hrhh3euI8uPlG4nlSZ5pDlWUmEZKEYyWvi7BQfpYGj1dXSXfNgJ4Eu%2F%2BX%2Bcgw4HGG2T6e5q8iZIL063EfyTww6jFdpE&X-Amz-Signature=35ab288a557947b1c8e02f160c685b133ee825f5fefc431d213ff02071951323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIA5T6Z2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCywRkWpsOPsptsIkVGS1fk7UQC4bvW%2BAaGcuMpkdf3cQIhAMsQXM3cVnL801W6m4OTWu023cXPf3XobXqlZ3eM53gnKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxlxxQtsEcxfSWERYq3AODKjE9EQVfFma7dFpWgLUao6PyX5KB5H3caqZE8ilVhP%2FwUeJs2jWTl9GpAtuqRMOWRZFurg6tr5SL6cbEvKXcev7QsJURT%2BrSvE3mynHML3NcjLXsU0rcsYTWNMg0s%2BukJ%2FLy57IF%2FFhA0p5ysIaRJ22rG6Ob7TVAFW5Gvy4bV8iGQ0KGCfuWQR13edU%2B7Z1jvMEpYgNKLGE6RkuBN4xDm7aLcGubQWcEnfHkogTYgT6dsvm9y42K3Mc21PrSIgrSc1vG5tEHHszOCFN2o2dNBzEbPqoiNT%2BsCkkozIvrySdqqxExsjZQYtssl%2FjAXgXOOJEBxZqCiFSTEG7u7NvNd5VXuGaHYKuMTNqNxcb6L4STGO6forfX6%2BHdEtkM3czqZqyRBqkHC6Bb%2BKA%2BSlyUK08HWxtm%2FnagxGrARSjDFPCdgUJHAMbog%2BBeMay9om83vFOQYqeRJ76pF97ng5O98FeMPyDSKejtlmNYjSr9adl6cm9u5yRqDloF%2FOceNZECB36ldQ6V%2FOszuSP6uOKOHme56cDvbWYBd5QSTckEAeTXCErotmWCl9Lgi%2F5bR0kDNoBbSKHuGT3%2FCpzkEkj8uZ6S%2FhJMoF%2FJvw9QezC7KcTXuEL4DxId9efU9jCXvdPCBjqkAZvOav8m9wPJtJD%2FI6fr3Mt18aoxyU4f07%2Bhl75KVHsFeJ%2FLEy7qTnjEm5uJ1l8YQUhDC%2F4xOPXQ4%2FLlPCk1YneidCK9c6WXxjTTfRQ2gLP7AwEnH8ARPBY0su%2Fln3h98hrhh3euI8uPlG4nlSZ5pDlWUmEZKEYyWvi7BQfpYGj1dXSXfNgJ4Eu%2F%2BX%2Bcgw4HGG2T6e5q8iZIL063EfyTww6jFdpE&X-Amz-Signature=edcaabaaee16b3e04f2182dee7f207e4f5a0132c71f02b57e2aec2deba622104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
