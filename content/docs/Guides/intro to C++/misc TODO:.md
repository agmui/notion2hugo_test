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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIE44S4L%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEatyL81WJVmVmMpheY6g%2Fq9EljZRuiYJ1p7NFIRbN6GAiBaesV9PhNDGRFyOQDi7uQ4d9iEEVKWHKhhn8NjgDW79SqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP%2BPWdtI63ftHvqIxKtwD%2BEE5OK0DyIioN9AN3xBFiyqgrgi%2B0BqgRH4Chk%2Bf8Qo%2FkJHtQ9tnEctjDs8RwerypuCMMa4VD6Lw9TnDRWvolefBRfHggbB8mOUb14hfQ2YbtCpO6p9EqN%2B4ln%2FrkXi8ZVdDZUMCESrhfG8Y9abAbJ%2BmnHL0BlsJPnNiPK0R%2BPFWNnM8S16qcaXTgGICXsjnDjfADsW2vLcu6liYacYYqnA9%2BLp8ue1RswhliFbhV3wmoHWzF46FBM6lwaJ23kTVEsoSHk6%2Bc9hRzam9BfC0AQ0i%2F0oPIC%2BPBHP1Lkx0gjmJ%2FZ29Bp4MgNnaBBKJ%2BcUhTI%2BoX831U5rUPC5S4zVrENzbw3F9eyBobB3n%2FgqzX7AvU9pZzIqsQqhlZIpduhbpZG3D2ur3hY02XaeYhxvhPyNFpzV924njimPofCSG0Pu68ybMVjWIDLopc7DX1LKbv8kyy3BFDA0QX9Rm%2FebBpv1zpQu8YvrkJEuTUhGBAkbFwmlaMavRzTgZlnYZp4lW8Zdabg1yJZXiybZZZqODqX8Cwa%2FGoH1dbbITFTQEo57hNL%2FhngvffPM7Ia4idpbNdUu08%2B3O1RpL1giPUgmViha6e6e2LMB06F7hmQJ8rFaHc1Qfs0gTky0L0HQw7OOhvQY6pgETEk7zWWenQ1AJoL1G41LDSmaHWJKLEGlG0WhgyC%2Bld4Tj84J%2B8nwMd3gyiQu%2FDRkuV7cImvTJnf3benMsitxnAU5XkcWb8kMD5WkMOKNUASsUoRGQRWI8N3wyt2h7UI5JFV1sHIgbesyHgTM0D9%2BvuHF9PK%2F6laa3zXtzdMvNGNVaWDVgWasHzjZfotFnuxD5HBNJJeB181rU%2F7S1UJd2aecEl6Nw&X-Amz-Signature=319e88f410a8b37035df0b92259c96d7a4a5b685bece39411d4d79507c475fea&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIE44S4L%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEatyL81WJVmVmMpheY6g%2Fq9EljZRuiYJ1p7NFIRbN6GAiBaesV9PhNDGRFyOQDi7uQ4d9iEEVKWHKhhn8NjgDW79SqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP%2BPWdtI63ftHvqIxKtwD%2BEE5OK0DyIioN9AN3xBFiyqgrgi%2B0BqgRH4Chk%2Bf8Qo%2FkJHtQ9tnEctjDs8RwerypuCMMa4VD6Lw9TnDRWvolefBRfHggbB8mOUb14hfQ2YbtCpO6p9EqN%2B4ln%2FrkXi8ZVdDZUMCESrhfG8Y9abAbJ%2BmnHL0BlsJPnNiPK0R%2BPFWNnM8S16qcaXTgGICXsjnDjfADsW2vLcu6liYacYYqnA9%2BLp8ue1RswhliFbhV3wmoHWzF46FBM6lwaJ23kTVEsoSHk6%2Bc9hRzam9BfC0AQ0i%2F0oPIC%2BPBHP1Lkx0gjmJ%2FZ29Bp4MgNnaBBKJ%2BcUhTI%2BoX831U5rUPC5S4zVrENzbw3F9eyBobB3n%2FgqzX7AvU9pZzIqsQqhlZIpduhbpZG3D2ur3hY02XaeYhxvhPyNFpzV924njimPofCSG0Pu68ybMVjWIDLopc7DX1LKbv8kyy3BFDA0QX9Rm%2FebBpv1zpQu8YvrkJEuTUhGBAkbFwmlaMavRzTgZlnYZp4lW8Zdabg1yJZXiybZZZqODqX8Cwa%2FGoH1dbbITFTQEo57hNL%2FhngvffPM7Ia4idpbNdUu08%2B3O1RpL1giPUgmViha6e6e2LMB06F7hmQJ8rFaHc1Qfs0gTky0L0HQw7OOhvQY6pgETEk7zWWenQ1AJoL1G41LDSmaHWJKLEGlG0WhgyC%2Bld4Tj84J%2B8nwMd3gyiQu%2FDRkuV7cImvTJnf3benMsitxnAU5XkcWb8kMD5WkMOKNUASsUoRGQRWI8N3wyt2h7UI5JFV1sHIgbesyHgTM0D9%2BvuHF9PK%2F6laa3zXtzdMvNGNVaWDVgWasHzjZfotFnuxD5HBNJJeB181rU%2F7S1UJd2aecEl6Nw&X-Amz-Signature=d0ca24c80a0890bb84f0b5f3404eab833d27e6d6c93416d285611328a078c311&X-Amz-SignedHeaders=host&x-id=GetObject)

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
