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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PSGGSAT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8RKoRkXQRxvQc%2BIZE2HAJbLP4ihjy4ZR0mi%2FOPqzJ6AiBYgxyTU86osb2vIhvQa18kMMEqmFItXfqeXFqwdYCHayqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP3Kn2zrGU8IAPJ6BKtwD80hyudm58lZuUcEj8ieuoHhHWAd7svV6ZJydUT%2B7c1f8CIDVmBj7aJ9mbZ2rhpouQTKQRvFAstI8MgpemErUFJ%2B6gwK9Esj7i2SCIsg0wbzxFLHlzoXvVYy2%2FKtybwL1XVMLFmmEruYfvVuEA%2FZYk7Q62KL8SfGWWK6cNz2eXriS0OzA3s3934gT08CMvGeg8IwT4Zupkgpf4T01tT%2FJt9sbSjXhLOQU2sufURkOphtFf6%2FpaNTudLbiKSBk1xo8pH%2FMg0%2FE9diBvfXYDkh%2FbuDCgaqPXBsqGtFHHRycncsZNthmirLTfAKkmoPvsr8dNLk2aHKx%2FpPu1FQ1Nksus%2BMtjiOe8O%2FFvP8nzAIFtU51Zx4lgx60Hotg9AtLtk7XFYL%2F%2FFoTaAIWYbs3DAqgpblNYR%2F0CwS99e48ayF7OZxFhF%2BZEzpDHf%2FflBF0QiyqHLcPJ1N1Vj7XxbZEAnGGvHHxpZYmRtjGrYKvnmbtco8MfOdjEMfhdGJwSYadw%2FrWYqtG0dST%2BO3pMHogDyCUXjjFL6zulO7uyISz73Q8Lm6jvPDmSqCT8Aaeqbeullkr3wEevbMuQfVZhWM6qwDuGo91j5dDuSivNiThugTMdXYvCYv9ePks7feJdb8w9tyuxAY6pgFpGDRqgWGXZtfWetHpNxW1IM3by1jaPbfz2yzFpepMiXmXvmQ%2BOzcSrHU5QdrPMj2mqh34YyFB1sQ%2FF%2B8mSTN6CrjshvfsCJI2FdE0tRxw%2F653e4X%2BmhUL420adgAVFHqxIpL6q31vxQLl2XhqOKljoCVDgWqPITX9DlzC9bixo1tW1CakWfSTR91ZxmAXV%2BeXcW7IG7CMzrAiVunSkxz1l0bJSEPs&X-Amz-Signature=8c7f54745dd067a16ee3f0332651434a88645677692d39e9884c755cf1e5a1f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PSGGSAT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8RKoRkXQRxvQc%2BIZE2HAJbLP4ihjy4ZR0mi%2FOPqzJ6AiBYgxyTU86osb2vIhvQa18kMMEqmFItXfqeXFqwdYCHayqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP3Kn2zrGU8IAPJ6BKtwD80hyudm58lZuUcEj8ieuoHhHWAd7svV6ZJydUT%2B7c1f8CIDVmBj7aJ9mbZ2rhpouQTKQRvFAstI8MgpemErUFJ%2B6gwK9Esj7i2SCIsg0wbzxFLHlzoXvVYy2%2FKtybwL1XVMLFmmEruYfvVuEA%2FZYk7Q62KL8SfGWWK6cNz2eXriS0OzA3s3934gT08CMvGeg8IwT4Zupkgpf4T01tT%2FJt9sbSjXhLOQU2sufURkOphtFf6%2FpaNTudLbiKSBk1xo8pH%2FMg0%2FE9diBvfXYDkh%2FbuDCgaqPXBsqGtFHHRycncsZNthmirLTfAKkmoPvsr8dNLk2aHKx%2FpPu1FQ1Nksus%2BMtjiOe8O%2FFvP8nzAIFtU51Zx4lgx60Hotg9AtLtk7XFYL%2F%2FFoTaAIWYbs3DAqgpblNYR%2F0CwS99e48ayF7OZxFhF%2BZEzpDHf%2FflBF0QiyqHLcPJ1N1Vj7XxbZEAnGGvHHxpZYmRtjGrYKvnmbtco8MfOdjEMfhdGJwSYadw%2FrWYqtG0dST%2BO3pMHogDyCUXjjFL6zulO7uyISz73Q8Lm6jvPDmSqCT8Aaeqbeullkr3wEevbMuQfVZhWM6qwDuGo91j5dDuSivNiThugTMdXYvCYv9ePks7feJdb8w9tyuxAY6pgFpGDRqgWGXZtfWetHpNxW1IM3by1jaPbfz2yzFpepMiXmXvmQ%2BOzcSrHU5QdrPMj2mqh34YyFB1sQ%2FF%2B8mSTN6CrjshvfsCJI2FdE0tRxw%2F653e4X%2BmhUL420adgAVFHqxIpL6q31vxQLl2XhqOKljoCVDgWqPITX9DlzC9bixo1tW1CakWfSTR91ZxmAXV%2BeXcW7IG7CMzrAiVunSkxz1l0bJSEPs&X-Amz-Signature=e4b7f3475d26cfc41a63768f0f4c75ea1cfedd159fe0d12deb4a0cd24f2af120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
