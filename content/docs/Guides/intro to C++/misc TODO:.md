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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTXRRAI5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCizm4BHQsLJReHSUxneUy3bUcnzfJcT5YmBZiGuebd4gIhAJE6kigAV09NG8288l3TWgzHjEmH1LxUNN%2FEtJTkqCc2Kv8DCGAQABoMNjM3NDIzMTgzODA1Igyo28aRUaHc8CihqWsq3AMcQCbidnddxUj7F1SXcV5wbKG6K%2BmmMQ0o2XUCtWCiEEcjdJhZLKcwZqiGLFqW7vMqG193GAyY2BVikBjwaS1p08%2FA%2B5tAb2yjXAwuH1l35gQVrg65HtkrcbC4VMc2KMkCUvkawLZUBVy4jXY8WYWInM6NYPTrDapCV6%2FWZrVecnGyWxUETQyXVFdLhxDSe6zp0wbQ%2B2fnmu2HfEqo%2B5mi8CFh6znQZOEYEPyozHprnemsPIIYRXJNRdJXfh5YItIvH9xC04JYvOI4Zv0fLQwv0xTIPXUiWP1l%2BzYM2Syi6ft7%2F8d%2FekCoN0VZbKf0PKL56oTOV3VWO9MZj8%2FwfNEXo3Vari06mGw23QERWaVhtSnyDW%2B6LCL8Z3WYH5vzyla2xdT%2FfFdAZUk0FsX4J0m1%2BIndwsxNDEG6BMypu6oNJP1%2BIf1VZ%2BBltf4Er0mDMNLNj5slaZW%2B2e4VkyV8SfQ6zrSIGQH18uFCbrI%2B2IKqdPWkSHjpRib7yCXmFldSev966z6tg4nBswc%2BMZ1g665f7woWLqRDjEJmuGw8%2Fdh9eH%2F5CE9%2B8AFbJBnmHPQA8KNsGr88I2PusJ%2F0S%2BlinADiAt3A%2F64xawaxRrlIzPyVc%2F51BjoWw48HM9iKGjDnlOa%2BBjqkAYui2BUPzma7JAh7KgUdVmssldaQNWAedLLO2rOAt0oCBeBibaSp09KHJSF4aTlK%2B3%2FIPqSEQRfU65b4H5fb%2FcNb%2BcsBhESdK8%2FPfnz9m%2FtHaZ322S4D743F6KsTQp%2BtQ0qsKJeTlMkHeUDMOtba%2Frui5ebuPZLabO7quT7pq7Ag52yIOglP2UGrT4F3TnZeiHjN7yhn58sbmPnnDHk4mhqaFA9S&X-Amz-Signature=7a4dbfb54d908d0492aa15aad79a557bfd1e7c3042e292cc4b76e3a3218c5069&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTXRRAI5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCizm4BHQsLJReHSUxneUy3bUcnzfJcT5YmBZiGuebd4gIhAJE6kigAV09NG8288l3TWgzHjEmH1LxUNN%2FEtJTkqCc2Kv8DCGAQABoMNjM3NDIzMTgzODA1Igyo28aRUaHc8CihqWsq3AMcQCbidnddxUj7F1SXcV5wbKG6K%2BmmMQ0o2XUCtWCiEEcjdJhZLKcwZqiGLFqW7vMqG193GAyY2BVikBjwaS1p08%2FA%2B5tAb2yjXAwuH1l35gQVrg65HtkrcbC4VMc2KMkCUvkawLZUBVy4jXY8WYWInM6NYPTrDapCV6%2FWZrVecnGyWxUETQyXVFdLhxDSe6zp0wbQ%2B2fnmu2HfEqo%2B5mi8CFh6znQZOEYEPyozHprnemsPIIYRXJNRdJXfh5YItIvH9xC04JYvOI4Zv0fLQwv0xTIPXUiWP1l%2BzYM2Syi6ft7%2F8d%2FekCoN0VZbKf0PKL56oTOV3VWO9MZj8%2FwfNEXo3Vari06mGw23QERWaVhtSnyDW%2B6LCL8Z3WYH5vzyla2xdT%2FfFdAZUk0FsX4J0m1%2BIndwsxNDEG6BMypu6oNJP1%2BIf1VZ%2BBltf4Er0mDMNLNj5slaZW%2B2e4VkyV8SfQ6zrSIGQH18uFCbrI%2B2IKqdPWkSHjpRib7yCXmFldSev966z6tg4nBswc%2BMZ1g665f7woWLqRDjEJmuGw8%2Fdh9eH%2F5CE9%2B8AFbJBnmHPQA8KNsGr88I2PusJ%2F0S%2BlinADiAt3A%2F64xawaxRrlIzPyVc%2F51BjoWw48HM9iKGjDnlOa%2BBjqkAYui2BUPzma7JAh7KgUdVmssldaQNWAedLLO2rOAt0oCBeBibaSp09KHJSF4aTlK%2B3%2FIPqSEQRfU65b4H5fb%2FcNb%2BcsBhESdK8%2FPfnz9m%2FtHaZ322S4D743F6KsTQp%2BtQ0qsKJeTlMkHeUDMOtba%2Frui5ebuPZLabO7quT7pq7Ag52yIOglP2UGrT4F3TnZeiHjN7yhn58sbmPnnDHk4mhqaFA9S&X-Amz-Signature=f73ff21ffe25383dc2c00dc6685c6e218b7036956f70e2e842fad91e26ab61a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
