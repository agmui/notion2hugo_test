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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KX3ELQP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDKYnPsssrt4g3k2c1s13tp%2BvB7Geg74kcIoIB9Fv696AIhAJHF97N5DtKCWNaMhrRvheUMPpXSuKLl3Ri5JXMj0PbZKv8DCBEQABoMNjM3NDIzMTgzODA1IgxTY04Gd9oYbWuiFiUq3AMVGoyF%2BAJtc9AfoTf5UQcwy7COEX%2FD1lo%2Bxvniomk6b1NYMemRkLrutavpBPtXeEOzhN%2FpcxZANWx5Y4Cc14rrD8VWLgBjrzKmCuo5wMDzsQCeBUWkyH%2BgN2UZMDBEJutkhVSnwIycwREgCvLRuQwS9UFHxM0dBv8lilBPhbI%2B1wnGsJS%2BL4zUWf1W6p2pAQUuYSEDUE3VUWQlUc3y0PMwVslLTaM1%2Fzn4h%2BIIaPhmnoNbR75s2VF973S78mA%2Fes7KYmp2e6goFkYHfqsqP%2B9eJq0vYwf9l0MidXJJW5ArUVI%2BscussDYLdM1wT3g3B8VUV7h7rRWYxpJtqRKwRWl0NfFqHx%2B0AEtWl1pRBLXj%2FOj5b6FSpMhpqqKsDtQnWihyd7PccsrvdL6aHI3bt4gAmN5g0KrVaLHPZghS4JoLLwknwbRqYec0bIsU%2BGcHAKAWKzHVty%2FuYlP5Yb24WxVdi7hriNeHyb8RxfHamXYeb1Ja6IzcoaBrauTstZxKlIfnuEDa%2Bix%2FhDhE2no07%2FUIyhSbcdTKdkYLZOjLy2r4BXAt5jgeF5NH4KP7GXytCbcAywEbS7RyWTftXd%2B%2FfJ1ZV7T9AIfD7d5x5JaFYjrMf6tp9czS%2F5wOmR8awDCGx9zABjqkAajwExcA4mYpvlLsEf1DiO49tE4WBoxgEAXokT6ICBpvznNfrMGhcqp6VgvAPbeRiQyEXJk87kF2zfNza9saHG%2BzjowmcfX0FG3aCHn9M8NbPILIhhB%2FN9JVAVkhbP6FcPoWKSR2eqH%2FUXxNKhbM1VTcduOI99McdD1oDA%2BQ0Eo442qWTNb10io%2FVWEtPgg2yiMDIsAkZBkQmpn8BvFcvRS25Uce&X-Amz-Signature=a5bae21aee217c5e757e8f0e142519615ff03500fbbf992a00dad1973af45ffe&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KX3ELQP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDKYnPsssrt4g3k2c1s13tp%2BvB7Geg74kcIoIB9Fv696AIhAJHF97N5DtKCWNaMhrRvheUMPpXSuKLl3Ri5JXMj0PbZKv8DCBEQABoMNjM3NDIzMTgzODA1IgxTY04Gd9oYbWuiFiUq3AMVGoyF%2BAJtc9AfoTf5UQcwy7COEX%2FD1lo%2Bxvniomk6b1NYMemRkLrutavpBPtXeEOzhN%2FpcxZANWx5Y4Cc14rrD8VWLgBjrzKmCuo5wMDzsQCeBUWkyH%2BgN2UZMDBEJutkhVSnwIycwREgCvLRuQwS9UFHxM0dBv8lilBPhbI%2B1wnGsJS%2BL4zUWf1W6p2pAQUuYSEDUE3VUWQlUc3y0PMwVslLTaM1%2Fzn4h%2BIIaPhmnoNbR75s2VF973S78mA%2Fes7KYmp2e6goFkYHfqsqP%2B9eJq0vYwf9l0MidXJJW5ArUVI%2BscussDYLdM1wT3g3B8VUV7h7rRWYxpJtqRKwRWl0NfFqHx%2B0AEtWl1pRBLXj%2FOj5b6FSpMhpqqKsDtQnWihyd7PccsrvdL6aHI3bt4gAmN5g0KrVaLHPZghS4JoLLwknwbRqYec0bIsU%2BGcHAKAWKzHVty%2FuYlP5Yb24WxVdi7hriNeHyb8RxfHamXYeb1Ja6IzcoaBrauTstZxKlIfnuEDa%2Bix%2FhDhE2no07%2FUIyhSbcdTKdkYLZOjLy2r4BXAt5jgeF5NH4KP7GXytCbcAywEbS7RyWTftXd%2B%2FfJ1ZV7T9AIfD7d5x5JaFYjrMf6tp9czS%2F5wOmR8awDCGx9zABjqkAajwExcA4mYpvlLsEf1DiO49tE4WBoxgEAXokT6ICBpvznNfrMGhcqp6VgvAPbeRiQyEXJk87kF2zfNza9saHG%2BzjowmcfX0FG3aCHn9M8NbPILIhhB%2FN9JVAVkhbP6FcPoWKSR2eqH%2FUXxNKhbM1VTcduOI99McdD1oDA%2BQ0Eo442qWTNb10io%2FVWEtPgg2yiMDIsAkZBkQmpn8BvFcvRS25Uce&X-Amz-Signature=f9751ddf1ea4a46e029bfc819c50b8e7e6ce8320fb79257c7610c0cc0e71aa37&X-Amz-SignedHeaders=host&x-id=GetObject)

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
