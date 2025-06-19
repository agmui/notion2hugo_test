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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG3HDVST%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHjCq3keo3b8BAueIjYLY7JShHPrYl%2F0QNf9ijsr5FIwIhAJ1UB2U%2F599yQ2yYsGPgAO80ziEr2pl6JyueE1TzpN%2BaKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8TUHyBHZGuwu0%2B5gq3ANBoM%2BVoJhud3i0QXJYHIyzGmy4%2BMi5TDrNQzXQ6NSH4wGSXE8LIYyIo5fOreU70kPVBbzCrUYVWHHQrdmKHnrs4S0ejttnTz2e15ZUXo74JuFWn8GiAfjeBDjKONm7X58vn77CFoPm3KnQJ0nBHTmzbKuAkM63Cmbmf%2Fwi9I32ekio18XRlp43f3tOAP%2Bvs6PlRMjL2lC0HVMeLS0cOLXR5so8S5zDr87zYFVW2ijMIHMstFz9qFsaGASSfiT%2Ft9R9ZOlpJ%2BtTgOvhbuvQiFBqbQ8mJu6nTaspR%2FA6jQSGtzHjy%2Bs9mp4MV5r%2FEhnM3xEoBRFUAwfk9rUukcOmRjmrMKnNrURaw4C9jVMG21v5jdMAq%2BnaDMnRGvrdySIFUTmdsirzTqNlU%2BAFfwIR4o0BwWuvsdOxcF4ZRlqNThBBcCqlM0XZN8FDFgbRYAF39zt0xUMH9yKQximCIarXG%2BxdU1yi%2BEaUuvNahYHFUemMcIzbCoBg0Oo6glgizMP1SIqoZbaNh5TyJSTrT%2BzKdy4jZiKT1SuSObQoZm3Ibs9MAOPQWtbEc0rvV04bt9pdJ4OMytYTaQbezH7nexcSN%2FfgtLgReTGTQVls7aIKO26RKABKyyeBDMCsjBf%2BFTCdkc%2FCBjqkAdNdydD7SBipCZAd99Bb6SjavOhv8COm%2BtLYFCw2UEcY%2BQvuClD0mRzyhmZ%2F7yur2ihsJyTuJXnMoHI%2BTtq%2BXdlJsalA9k7%2Bls%2FsM1WY5WSmeqMrf0ilfQiLwN29DLt4tiadJauS9ObWpdeAoxq%2BnZJ0%2Bmxa6yF7nNKpBuiqmcbIgpg8fjzc4lqrQnk9DnSVU114zjUfisQuZuPGls6e%2FGNvoznl&X-Amz-Signature=d19d383ec7bc6057da9154e7cbceed9b613eba8f3f8f81fe7cc60f1b38aa964e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG3HDVST%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHjCq3keo3b8BAueIjYLY7JShHPrYl%2F0QNf9ijsr5FIwIhAJ1UB2U%2F599yQ2yYsGPgAO80ziEr2pl6JyueE1TzpN%2BaKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8TUHyBHZGuwu0%2B5gq3ANBoM%2BVoJhud3i0QXJYHIyzGmy4%2BMi5TDrNQzXQ6NSH4wGSXE8LIYyIo5fOreU70kPVBbzCrUYVWHHQrdmKHnrs4S0ejttnTz2e15ZUXo74JuFWn8GiAfjeBDjKONm7X58vn77CFoPm3KnQJ0nBHTmzbKuAkM63Cmbmf%2Fwi9I32ekio18XRlp43f3tOAP%2Bvs6PlRMjL2lC0HVMeLS0cOLXR5so8S5zDr87zYFVW2ijMIHMstFz9qFsaGASSfiT%2Ft9R9ZOlpJ%2BtTgOvhbuvQiFBqbQ8mJu6nTaspR%2FA6jQSGtzHjy%2Bs9mp4MV5r%2FEhnM3xEoBRFUAwfk9rUukcOmRjmrMKnNrURaw4C9jVMG21v5jdMAq%2BnaDMnRGvrdySIFUTmdsirzTqNlU%2BAFfwIR4o0BwWuvsdOxcF4ZRlqNThBBcCqlM0XZN8FDFgbRYAF39zt0xUMH9yKQximCIarXG%2BxdU1yi%2BEaUuvNahYHFUemMcIzbCoBg0Oo6glgizMP1SIqoZbaNh5TyJSTrT%2BzKdy4jZiKT1SuSObQoZm3Ibs9MAOPQWtbEc0rvV04bt9pdJ4OMytYTaQbezH7nexcSN%2FfgtLgReTGTQVls7aIKO26RKABKyyeBDMCsjBf%2BFTCdkc%2FCBjqkAdNdydD7SBipCZAd99Bb6SjavOhv8COm%2BtLYFCw2UEcY%2BQvuClD0mRzyhmZ%2F7yur2ihsJyTuJXnMoHI%2BTtq%2BXdlJsalA9k7%2Bls%2FsM1WY5WSmeqMrf0ilfQiLwN29DLt4tiadJauS9ObWpdeAoxq%2BnZJ0%2Bmxa6yF7nNKpBuiqmcbIgpg8fjzc4lqrQnk9DnSVU114zjUfisQuZuPGls6e%2FGNvoznl&X-Amz-Signature=3b3b6eb20eb5bfa8c460392be3f29a5a2eb240c7e1e006525400a0d87b998939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
