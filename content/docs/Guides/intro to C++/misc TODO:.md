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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667PGO2Z2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2JCeafCWwfE3VZTGmCSlCa0neipnQIkEu8iyUj55ylAiEA215WqYzjuNm82fAr%2BQ%2FzgI9xOu2WgDh0Z%2BM%2B%2BSUowiEq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDN1Vl0rUVAWD7%2BER1SrcA2EzeW3i3vOQ%2FNw036hSNRTLwWpwmxdWjwWzDcSIdnmGzTaEYG5k6yl%2BXdgzN9LmljZuxlU8qks4XT7%2BP6aKBCLM8qxriwfJnqSvT03N1EDCVrDCLX7sgRCSMX%2BUZX5aUf4QnUAzt0PPKsnLuP03e%2Bu0ko9nDLce9Rf%2FgKDNZsQmTYC4%2FUVZKTA%2BOBf1ozvTlk7iLXrHs8fbGFrGGBITtQ8TJwq07OStCOHVoHg74abWufFpkq%2BZn3nGASZckWyP2CVWO6oXMUJCWpnm3L0AtPFb4FAKs3Kn2J0806F6KrFYghRAsM45cMORJPThKLYsrpQQiB8CTOSnRSlRSos75hc2%2FFhVEOJ7A5sGfIGjrjJxYZQBsuZ%2F1AgraGakK2oP7DYlQw%2BtDP6RKr0mV0scTKIGqjJpzb2f6wCJ%2BGmwKiEqeo7%2FwzkuU%2BNzvFtFnRUgDQMQdawNifV55u8m7TVQJqQyk9uD6Z81ykjcmVXjHjey31z5%2B4AQGGPiqiE8cl4Te6ot9I2OfSuilheo4nZV6tZ5dDIInfsrdwFOjg2CtVerTX%2BEVx4msOamffAgIcjVs5qbrvzkqb6Ts%2F6p7tb9IYt0gGAFJ9abEKhqYFNmBvvjT3%2BCO7S2UsY6dPogMOKht70GOqUBchOpZSkxcvfzNi7xiG3Tp%2BtxM%2FfyJg7Lq8VbBSgnSSMDcaR4vwklQ89URBb0nGXfW7cdBRMTDvn2Zg8utyZbZsq2l06%2F5pxA0obrV%2FPLcLPfV89DyZ%2BY9j1nG3hMnn6rmPqZx4VxhH32miRcATM%2BQbl5RYQhEAIX%2FnRSmMeByce2El%2BODtMNB9z%2BzP%2Bn0vve12K4TSp2B6LUoX4chgjhxxxJfajx&X-Amz-Signature=a10210d66104ec190115a5cbd909b921b1d831cbb971c39d7031694d1931d29d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667PGO2Z2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2JCeafCWwfE3VZTGmCSlCa0neipnQIkEu8iyUj55ylAiEA215WqYzjuNm82fAr%2BQ%2FzgI9xOu2WgDh0Z%2BM%2B%2BSUowiEq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDN1Vl0rUVAWD7%2BER1SrcA2EzeW3i3vOQ%2FNw036hSNRTLwWpwmxdWjwWzDcSIdnmGzTaEYG5k6yl%2BXdgzN9LmljZuxlU8qks4XT7%2BP6aKBCLM8qxriwfJnqSvT03N1EDCVrDCLX7sgRCSMX%2BUZX5aUf4QnUAzt0PPKsnLuP03e%2Bu0ko9nDLce9Rf%2FgKDNZsQmTYC4%2FUVZKTA%2BOBf1ozvTlk7iLXrHs8fbGFrGGBITtQ8TJwq07OStCOHVoHg74abWufFpkq%2BZn3nGASZckWyP2CVWO6oXMUJCWpnm3L0AtPFb4FAKs3Kn2J0806F6KrFYghRAsM45cMORJPThKLYsrpQQiB8CTOSnRSlRSos75hc2%2FFhVEOJ7A5sGfIGjrjJxYZQBsuZ%2F1AgraGakK2oP7DYlQw%2BtDP6RKr0mV0scTKIGqjJpzb2f6wCJ%2BGmwKiEqeo7%2FwzkuU%2BNzvFtFnRUgDQMQdawNifV55u8m7TVQJqQyk9uD6Z81ykjcmVXjHjey31z5%2B4AQGGPiqiE8cl4Te6ot9I2OfSuilheo4nZV6tZ5dDIInfsrdwFOjg2CtVerTX%2BEVx4msOamffAgIcjVs5qbrvzkqb6Ts%2F6p7tb9IYt0gGAFJ9abEKhqYFNmBvvjT3%2BCO7S2UsY6dPogMOKht70GOqUBchOpZSkxcvfzNi7xiG3Tp%2BtxM%2FfyJg7Lq8VbBSgnSSMDcaR4vwklQ89URBb0nGXfW7cdBRMTDvn2Zg8utyZbZsq2l06%2F5pxA0obrV%2FPLcLPfV89DyZ%2BY9j1nG3hMnn6rmPqZx4VxhH32miRcATM%2BQbl5RYQhEAIX%2FnRSmMeByce2El%2BODtMNB9z%2BzP%2Bn0vve12K4TSp2B6LUoX4chgjhxxxJfajx&X-Amz-Signature=a8ca54d357c1b8d7127a588894388fa80510f939be4d44a4b329e9d5f72a8b39&X-Amz-SignedHeaders=host&x-id=GetObject)

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
