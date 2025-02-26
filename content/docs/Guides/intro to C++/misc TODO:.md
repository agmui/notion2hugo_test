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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOFIOQW4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIFR857Wyg0Kel%2BNz%2BliB7sGqV1Ou4I075mBLHIwpjkU3AiB%2BhOWSNQomxdnEEvb3Nq4NcmK2l8PtzDXY8hedqcuvMir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM5XIiYy1pCdj98xxzKtwDN1FggwpOP6xyf6E86P3s00H54SAasjc8h68o46I4NkCFB1w7bFMKgkdTKgfhTm%2B0Ir5bP%2BSfFfxZOZl6INYTjghOBMnWG1kPc0mpNz9ioHHzBzj9ti%2FHOJa7jIv5JXpMlFniwpyFxXU9JKDBtQFZQO9x0g4yv5lSZgsqyvNTBTEnq2EQaU5jx4voomDiVfX3gioK2DuWBROEih4W6kDczbgeZT%2Bred%2Fm5XVWCe4vtK14O4yISkJjhRDCfJY1X1A%2FbN5wgLDv2G8T1%2BK52jfo7gNZ3DT3E9c92shToCsFnHxzxSjsVF%2BwTB9ntQdZE1Z2%2FF4%2Bv2J13Zj6zzx%2FiHcP%2BQBby5NTCV9iFv%2F25IBpy5qOIXPLkntrz%2B%2BS2346B3OHQ21PwRfyAKZcD51OZRf2y%2Fhv73OEoqNhe6CPbzRpIEAW66m8iZIEurUKvCO%2BzDufWFBwe%2BtA566ZaorhusCUdRJl8ihN8ewKuTTgv%2Be8iXe59g1xBgGfqzYqMNduqSMFiX%2BOaG8k0LlkCgFkqEego91n%2Bi4nBoXby7VuQxOv96KoUfHEXOh%2BKiKt8%2FbH37HW2nCL32JaMq0bf8rwSypldyGONN3THXUoP0FW6I8m7mWh1XsyymLrViad49wwxaP9vQY6pgEEg43ufCPdYioPYdNOB8sO8RrC8cJnB%2BXrRBKcdTR47Fq5nvFQy881%2BRRQSJ%2F2dYdvnfhZ4wazL0I4%2FwcFo2CN8VeKisCQnqfjEsvO4k1Le6uAJoAiVOOHO%2FzDEeroHoUI0vUpAFEoCtN7OHHKL6SH2VpLj2K5PdKNXqSULUrpj4kRI7wvYsuHHOkOXlnXJNJtsCoIiUchaSMlvCJ8B09th6pQrZOV&X-Amz-Signature=57e1aee890d35068c93359c1d6a8c65220eca5d418889d9d6141c137bbcda3da&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOFIOQW4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIFR857Wyg0Kel%2BNz%2BliB7sGqV1Ou4I075mBLHIwpjkU3AiB%2BhOWSNQomxdnEEvb3Nq4NcmK2l8PtzDXY8hedqcuvMir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM5XIiYy1pCdj98xxzKtwDN1FggwpOP6xyf6E86P3s00H54SAasjc8h68o46I4NkCFB1w7bFMKgkdTKgfhTm%2B0Ir5bP%2BSfFfxZOZl6INYTjghOBMnWG1kPc0mpNz9ioHHzBzj9ti%2FHOJa7jIv5JXpMlFniwpyFxXU9JKDBtQFZQO9x0g4yv5lSZgsqyvNTBTEnq2EQaU5jx4voomDiVfX3gioK2DuWBROEih4W6kDczbgeZT%2Bred%2Fm5XVWCe4vtK14O4yISkJjhRDCfJY1X1A%2FbN5wgLDv2G8T1%2BK52jfo7gNZ3DT3E9c92shToCsFnHxzxSjsVF%2BwTB9ntQdZE1Z2%2FF4%2Bv2J13Zj6zzx%2FiHcP%2BQBby5NTCV9iFv%2F25IBpy5qOIXPLkntrz%2B%2BS2346B3OHQ21PwRfyAKZcD51OZRf2y%2Fhv73OEoqNhe6CPbzRpIEAW66m8iZIEurUKvCO%2BzDufWFBwe%2BtA566ZaorhusCUdRJl8ihN8ewKuTTgv%2Be8iXe59g1xBgGfqzYqMNduqSMFiX%2BOaG8k0LlkCgFkqEego91n%2Bi4nBoXby7VuQxOv96KoUfHEXOh%2BKiKt8%2FbH37HW2nCL32JaMq0bf8rwSypldyGONN3THXUoP0FW6I8m7mWh1XsyymLrViad49wwxaP9vQY6pgEEg43ufCPdYioPYdNOB8sO8RrC8cJnB%2BXrRBKcdTR47Fq5nvFQy881%2BRRQSJ%2F2dYdvnfhZ4wazL0I4%2FwcFo2CN8VeKisCQnqfjEsvO4k1Le6uAJoAiVOOHO%2FzDEeroHoUI0vUpAFEoCtN7OHHKL6SH2VpLj2K5PdKNXqSULUrpj4kRI7wvYsuHHOkOXlnXJNJtsCoIiUchaSMlvCJ8B09th6pQrZOV&X-Amz-Signature=6c747542733eab16156f64f36b40591b9f08be34cdb10ea56807fb6b0f43bb5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
