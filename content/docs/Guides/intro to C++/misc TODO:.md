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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFPETSQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwu63%2FXCVtx%2BkE7g4bbagG6uyJt1aG8gxNBxk8eIbYhAIhAKdNM36acjm0K9Hxqm%2BznrWcPGTFbmnsV%2BLT54zhwudgKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhdQfcSEaw5YQQG9Qq3APv9xSktkmI7LFfcK1zrkry8y1sBDVNl6PGWvZ7X0S3un2TRVUIHRVVxGgaxbSopwL5UbfE4UJXEFVLzauHz%2BopcGzHQBvM9wpB4ZuN%2FGRNG%2BNLJCyvBF0S3nlC8gc6%2FTNlyezZDB5JbPMqepoNFSGL8%2BAaGNxYF5RjvxVSyRp%2FTR66YdDWDtl6MMhLbj%2F4KvDRl8heN7LT%2FAkhN6uRZQIp38IfenOFLakdvvrdl9XXBMW1rYGFjMoaAvUamXWtGIoff0tLISbbNTLcY8SkI7klUftXfZNThq86vBNtx2rIlkpr1Io7KRk%2BUIeU2SGlefafmh9k6DtBwVODEdvag9bK4aJhAAS31FDPNACw3Epks5cG0n5ydxCXSlIGwKO%2ByeyxsGI1I2C0DLaCKu6hu9bxSW8twfARsR3Bc5wC9bTpLkPDdo1fnEbWE%2B1qTYgCJ3pB5nZSj505Vo4b8QavRjB%2Fs%2FXVpXFzssrc4DRkVf1bprGP4Klm%2F%2B8SVaTS6xcUY%2BOr1MDKBgPdpvL1rnbVgQu01ACj17zoHx4kLONrm%2Bty0YYByh6eP%2Fc1DKlRtKmLFEcNRDrFSxtYm9jFzYDKJJsrOjIAW3UtXr3rjOZ%2Bp%2Fet6Djpj5NruIsSw55JMjD%2Bp9q9BjqkAfuABp6d6AndY5OzCJa5wfckvI1A4gU%2BjGYTMfcLuR2y923K4JpC4a2y2%2B3dTKZ7nM%2BqxSPTF%2BJciOG4Uupd5BMvGCnX3REIUU5GFrPf7ZQi%2BzzrAvu1WRtIHte5PxMlKSLWkiaI90ZdyBwNBrTT8%2FmUsRxM1aj%2BzECcF%2B3spcdjdG1pfvMXvDgG2uylKW1sImckGZbV%2FOunN3qaonF3fGeOiy%2Fp&X-Amz-Signature=e4f60a7c939c054f8a089f6d950234294dd77f9c604761b4d7ac6b168bc25818&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFPETSQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwu63%2FXCVtx%2BkE7g4bbagG6uyJt1aG8gxNBxk8eIbYhAIhAKdNM36acjm0K9Hxqm%2BznrWcPGTFbmnsV%2BLT54zhwudgKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhdQfcSEaw5YQQG9Qq3APv9xSktkmI7LFfcK1zrkry8y1sBDVNl6PGWvZ7X0S3un2TRVUIHRVVxGgaxbSopwL5UbfE4UJXEFVLzauHz%2BopcGzHQBvM9wpB4ZuN%2FGRNG%2BNLJCyvBF0S3nlC8gc6%2FTNlyezZDB5JbPMqepoNFSGL8%2BAaGNxYF5RjvxVSyRp%2FTR66YdDWDtl6MMhLbj%2F4KvDRl8heN7LT%2FAkhN6uRZQIp38IfenOFLakdvvrdl9XXBMW1rYGFjMoaAvUamXWtGIoff0tLISbbNTLcY8SkI7klUftXfZNThq86vBNtx2rIlkpr1Io7KRk%2BUIeU2SGlefafmh9k6DtBwVODEdvag9bK4aJhAAS31FDPNACw3Epks5cG0n5ydxCXSlIGwKO%2ByeyxsGI1I2C0DLaCKu6hu9bxSW8twfARsR3Bc5wC9bTpLkPDdo1fnEbWE%2B1qTYgCJ3pB5nZSj505Vo4b8QavRjB%2Fs%2FXVpXFzssrc4DRkVf1bprGP4Klm%2F%2B8SVaTS6xcUY%2BOr1MDKBgPdpvL1rnbVgQu01ACj17zoHx4kLONrm%2Bty0YYByh6eP%2Fc1DKlRtKmLFEcNRDrFSxtYm9jFzYDKJJsrOjIAW3UtXr3rjOZ%2Bp%2Fet6Djpj5NruIsSw55JMjD%2Bp9q9BjqkAfuABp6d6AndY5OzCJa5wfckvI1A4gU%2BjGYTMfcLuR2y923K4JpC4a2y2%2B3dTKZ7nM%2BqxSPTF%2BJciOG4Uupd5BMvGCnX3REIUU5GFrPf7ZQi%2BzzrAvu1WRtIHte5PxMlKSLWkiaI90ZdyBwNBrTT8%2FmUsRxM1aj%2BzECcF%2B3spcdjdG1pfvMXvDgG2uylKW1sImckGZbV%2FOunN3qaonF3fGeOiy%2Fp&X-Amz-Signature=e1316fb3f249770c6b67f527d9194f35eb5587d29cf3d212e202f15c1a942383&X-Amz-SignedHeaders=host&x-id=GetObject)

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
