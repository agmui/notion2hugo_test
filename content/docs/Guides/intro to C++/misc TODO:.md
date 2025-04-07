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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQTLVUH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIM1wOFDmrocJDxRaT5a4AYzPwyEOSrSPHO%2Fziw%2BTQdgIhAPIU0gJX70hRJxQRT4mQaXf7WSuJsp9HodpCXHB0WmAyKv8DCGMQABoMNjM3NDIzMTgzODA1Igy5kr%2BKhoLAphqdFVkq3AOrBq8TVAK85MltUiorCRpfomO1fTkbWU8nDbd%2Ff7raabvPXkLNeVVTU2Xs%2FepEbE%2Fz7Xcmj3sg%2FHoheCQMhoVhxbkrtSfEqH3QAaUdAShfGict5j7SVQ%2B5H95aQ66GvvliS7ghexOvMZpp33ppk4J3pmG%2FGCy7nzb%2Bwb%2FSPCTPTUGfYkVmix62qn86%2Bs%2Bklwd0FrVW8LBtmk95VaMadDNBQTiAfISitlifegi%2BDzqhcolIOI9ISJm0X86t7GjZZXdS%2BwvNrGGCD7Lf3tkIVRwLvn%2BYdvLKGcsrFyRLZdRd6Ia6hVWF1TohC%2BqGBfG7LjyeOuJ4ihnRPftENqxNOxuFBtP%2BzuIvNLt0s4QGnn7hm2s2RJ1zhSaEjj5Dy4GeWHexo5vEUD2yUod0tM1uj6qqjwz2bJzYvGFSa77EC7fvcUPAKkDWAkckCgkqiXm%2BaM%2B7k8hpD%2BNFJc56uzPUI%2FeIaNROQr3oMPkcahTfOzudWWvF4KJrAatBnblM5gzQUCnuZMTMZzqp5UDAY%2FSU74Kbrf%2F%2F31kvwZA2zafxfH94yJHXaiXOKnqmAwu2txA1FsrPPAqgB4QLrhOCoGrmDZ6yX1YNMFsE2bJOlWtlN58DJ1GBTlY8Yd2I5s8g3jCJpNC%2FBjqkAQIsATtHlcz%2BjjX%2FsCxV7U0bNSbKiR%2FnCyP9JRglfcDXIKEiLVoUEXxLt1jI%2FCwAM2XlKPk2A5jMjCVURVGFHYiWxxaCAm3JeiAQXYWu97cmyMv%2FwEz5FUP514Qvtz501xh%2FhksFa3l5t3qV57BJkgJGzgKfUi%2BSRT1zKXqZNidfFfwD6plU6G81ZfBr%2Fk3DJ5UvfV%2BxtSKnH%2FDaRovr3XatCNOc&X-Amz-Signature=3d43e3ca57b947cc1d98e67b665007f8935978f98dd175e0e03a97c4e01db5d4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQTLVUH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIM1wOFDmrocJDxRaT5a4AYzPwyEOSrSPHO%2Fziw%2BTQdgIhAPIU0gJX70hRJxQRT4mQaXf7WSuJsp9HodpCXHB0WmAyKv8DCGMQABoMNjM3NDIzMTgzODA1Igy5kr%2BKhoLAphqdFVkq3AOrBq8TVAK85MltUiorCRpfomO1fTkbWU8nDbd%2Ff7raabvPXkLNeVVTU2Xs%2FepEbE%2Fz7Xcmj3sg%2FHoheCQMhoVhxbkrtSfEqH3QAaUdAShfGict5j7SVQ%2B5H95aQ66GvvliS7ghexOvMZpp33ppk4J3pmG%2FGCy7nzb%2Bwb%2FSPCTPTUGfYkVmix62qn86%2Bs%2Bklwd0FrVW8LBtmk95VaMadDNBQTiAfISitlifegi%2BDzqhcolIOI9ISJm0X86t7GjZZXdS%2BwvNrGGCD7Lf3tkIVRwLvn%2BYdvLKGcsrFyRLZdRd6Ia6hVWF1TohC%2BqGBfG7LjyeOuJ4ihnRPftENqxNOxuFBtP%2BzuIvNLt0s4QGnn7hm2s2RJ1zhSaEjj5Dy4GeWHexo5vEUD2yUod0tM1uj6qqjwz2bJzYvGFSa77EC7fvcUPAKkDWAkckCgkqiXm%2BaM%2B7k8hpD%2BNFJc56uzPUI%2FeIaNROQr3oMPkcahTfOzudWWvF4KJrAatBnblM5gzQUCnuZMTMZzqp5UDAY%2FSU74Kbrf%2F%2F31kvwZA2zafxfH94yJHXaiXOKnqmAwu2txA1FsrPPAqgB4QLrhOCoGrmDZ6yX1YNMFsE2bJOlWtlN58DJ1GBTlY8Yd2I5s8g3jCJpNC%2FBjqkAQIsATtHlcz%2BjjX%2FsCxV7U0bNSbKiR%2FnCyP9JRglfcDXIKEiLVoUEXxLt1jI%2FCwAM2XlKPk2A5jMjCVURVGFHYiWxxaCAm3JeiAQXYWu97cmyMv%2FwEz5FUP514Qvtz501xh%2FhksFa3l5t3qV57BJkgJGzgKfUi%2BSRT1zKXqZNidfFfwD6plU6G81ZfBr%2Fk3DJ5UvfV%2BxtSKnH%2FDaRovr3XatCNOc&X-Amz-Signature=d35c2b4c4db98cad2b92401810b29c0fee36538805bbdce482e36da3c538e474&X-Amz-SignedHeaders=host&x-id=GetObject)

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
