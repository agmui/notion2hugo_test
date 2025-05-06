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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RSJ7E6S%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkyUFxr92k%2BWu1Ox2%2BNUF6aXYbRX8%2BqGZ1LQIY7ScNaAiA0%2BbkzFDxp9ea0BCk5SdKcgZIPi%2FWi%2FLrJn8zFXy7qAir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMJOm3zRB13U3VmgwGKtwDmnV%2FGvI5yQbvqZwf350xsaFCDqR8%2FaQqUcZ1p8%2F%2B64XiZt%2Btx%2Bp0RmwEZwHajiC1lzC0vWadSXdFl3WUqkq%2BSeTKbo4l5Xe5KlCVE2zIs5rifeEGrdqQHm2Okm9I0pfyxJnEtySIjlWiH6%2BLr7hjYY5TP4MZ23%2FSVaajkq7guu6V3FfKslwugn8hFhbXoQBAXME1nD2zv%2F4pIjHtTtjkbk3WTWmwC%2FoHYkeHhUw62g5PZzQCaZN6ATkSH9r693G7czoLlrxcruHGj9j%2FXXf0U2Lb6mxBGv2dDd4OfnARTwPcDRxZWkiTb7CyripdfJWuWXQIs6SMqoN9fc%2BOciZn1GaRIiy%2Fxqj41K9RSVpP3gcZ7hpMd7jxN3cpkQMjM4YH7Jvs3L0G7Ba1Xxwfws330Yw%2BKXt63gmISRqj5Nf3z82RV0Lf4NNuyzeHqGBJHJ%2Ba9YmGXBK935U3zq9tZyaoJKkb%2F9QGHXftj4D6APeGwk2vV%2FuZ2sn7rVdmtld9GVfp%2B9xSddduGT7MzmT5SFi5%2BaVfJ95xVQxlf6v%2FaQmhD%2F3dxaRZ0%2BTqS18acQO46y3Teif9R5uKuU90r1kIwCiB9FRNF70bko6IsAOIuZ2oFtzPFdOZZk5bdOyIP%2FMw5YDpwAY6pgEGu5MjtPsQA6nj25NL8WZOvzc8jsS%2BQfl%2FUPpVfLwvlSJwI7toWda%2FNPiuiXfgD88e7qMBH12kzau%2BfnjUGgl4PyqZk5wkvUaBFcWXNyPwnco%2ByuCWC35GeRxghf%2FAI2fZoArdpJj4%2Fg%2Bs6aG8duG1fozTUWF4gz3IESdLIsrsMPW3b8koZJdieqDpNVaSOx7Q1MGCLGkVQcAANngk6VksabEPZucA&X-Amz-Signature=2322993778a17451aacf977ba1781beaa15b3e113b5f00085406a445e8b3aed3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RSJ7E6S%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkyUFxr92k%2BWu1Ox2%2BNUF6aXYbRX8%2BqGZ1LQIY7ScNaAiA0%2BbkzFDxp9ea0BCk5SdKcgZIPi%2FWi%2FLrJn8zFXy7qAir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMJOm3zRB13U3VmgwGKtwDmnV%2FGvI5yQbvqZwf350xsaFCDqR8%2FaQqUcZ1p8%2F%2B64XiZt%2Btx%2Bp0RmwEZwHajiC1lzC0vWadSXdFl3WUqkq%2BSeTKbo4l5Xe5KlCVE2zIs5rifeEGrdqQHm2Okm9I0pfyxJnEtySIjlWiH6%2BLr7hjYY5TP4MZ23%2FSVaajkq7guu6V3FfKslwugn8hFhbXoQBAXME1nD2zv%2F4pIjHtTtjkbk3WTWmwC%2FoHYkeHhUw62g5PZzQCaZN6ATkSH9r693G7czoLlrxcruHGj9j%2FXXf0U2Lb6mxBGv2dDd4OfnARTwPcDRxZWkiTb7CyripdfJWuWXQIs6SMqoN9fc%2BOciZn1GaRIiy%2Fxqj41K9RSVpP3gcZ7hpMd7jxN3cpkQMjM4YH7Jvs3L0G7Ba1Xxwfws330Yw%2BKXt63gmISRqj5Nf3z82RV0Lf4NNuyzeHqGBJHJ%2Ba9YmGXBK935U3zq9tZyaoJKkb%2F9QGHXftj4D6APeGwk2vV%2FuZ2sn7rVdmtld9GVfp%2B9xSddduGT7MzmT5SFi5%2BaVfJ95xVQxlf6v%2FaQmhD%2F3dxaRZ0%2BTqS18acQO46y3Teif9R5uKuU90r1kIwCiB9FRNF70bko6IsAOIuZ2oFtzPFdOZZk5bdOyIP%2FMw5YDpwAY6pgEGu5MjtPsQA6nj25NL8WZOvzc8jsS%2BQfl%2FUPpVfLwvlSJwI7toWda%2FNPiuiXfgD88e7qMBH12kzau%2BfnjUGgl4PyqZk5wkvUaBFcWXNyPwnco%2ByuCWC35GeRxghf%2FAI2fZoArdpJj4%2Fg%2Bs6aG8duG1fozTUWF4gz3IESdLIsrsMPW3b8koZJdieqDpNVaSOx7Q1MGCLGkVQcAANngk6VksabEPZucA&X-Amz-Signature=37085ff2ce5c6348183879c1700eda4d4ca0d69b28bedfd9fe3c3f6f257d6405&X-Amz-SignedHeaders=host&x-id=GetObject)

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
