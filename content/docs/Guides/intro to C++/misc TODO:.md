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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VK7MA5X%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCY2Ma4w3yWLoN717eAbH%2BLFGRN1O0PMyanqeetCHdYXAIhAMHvUe%2FijyFbXCiHIybHE8pce9peuoXs6tv%2FRX2NPY3mKv8DCBgQABoMNjM3NDIzMTgzODA1Igx46qcBxDo1RHryQ4Yq3ANZP6NOakk9RCZALSfgtu3orZYJNIiSVf8MgK7VHVijJbCkY5yWPSjM44iYv7vnIITjGBr8F1jlOqDouuO9yN0qr8p6hMWDXl%2Fe5n0t9PS7SAmYCmgMmHphquoCt3mgLkH%2BoECE3o1GZEZp2JPwBSPh8en57gp1ohRoAK73wgx90OfRfu%2FW4ED%2Bj4an2kIlUPqnPCfmzt08pkH0oV56IsJp1FW0Q62ODeqpHikJFR6qJjxgDJgI5GkX6wWdk08FA3OQ4y%2B%2FrRX7Rp5QRmrs%2FPF7W37BfZqB5Wit6%2Bqnd6gqnu5kba7bYyI56oVrpwOBX%2BABep3vTnG2tLmKKnkZ4vMY3Saf%2BRFZlxUfVE4MfxAHIRRxjJYMyQjgtgBaJLO425eV0HBV3nljIb2HAHGcSDJs%2B0TkgjvUAZjvhfInvx6zR1XpBoRCkIUGioWyBBBbN90M0Kb9dpc%2B3DyTZ4ZUFnBbDyu2S5OdLOifan2MnRr4DvaajmcyPFS5TLD0ZlJN9b%2BUhbx5HW059bLVkSS9eaIYZ%2FbJAYTuiwVHXTXMP8uQEW%2BGtOQucW4ZFQ7PNytbelD1x6y%2BHEWot%2Ft8RBReqc4Xqc9DO5Gn1TH4NqofLF%2Bn%2FusnCzPBKEXRhfxy9zDcoKnABjqkAZDK6ZK7czHVFYmJo5Z9y9dIhG29I7djTTaWW%2Fe3frsia0FYkH0Mln4r0MCZXLfrEMoVQGsWJ9475VId3MEHOuVh8VzSjjx00ljJnJeHJk%2FXhhZMZn4E%2BKfiNbhnJyF%2FZtp59ef3evPkW5t5XO2aspsMJAZ8hERRZUH2W9IA3Zzd0K%2B01jIm9plBnz79zCBC7zRUMtUkrVENryW722uDlKFBjLdE&X-Amz-Signature=4cd06f44b6937e14636fb36c08d7efc189337259524dfe4831d94aa550167545&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VK7MA5X%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCY2Ma4w3yWLoN717eAbH%2BLFGRN1O0PMyanqeetCHdYXAIhAMHvUe%2FijyFbXCiHIybHE8pce9peuoXs6tv%2FRX2NPY3mKv8DCBgQABoMNjM3NDIzMTgzODA1Igx46qcBxDo1RHryQ4Yq3ANZP6NOakk9RCZALSfgtu3orZYJNIiSVf8MgK7VHVijJbCkY5yWPSjM44iYv7vnIITjGBr8F1jlOqDouuO9yN0qr8p6hMWDXl%2Fe5n0t9PS7SAmYCmgMmHphquoCt3mgLkH%2BoECE3o1GZEZp2JPwBSPh8en57gp1ohRoAK73wgx90OfRfu%2FW4ED%2Bj4an2kIlUPqnPCfmzt08pkH0oV56IsJp1FW0Q62ODeqpHikJFR6qJjxgDJgI5GkX6wWdk08FA3OQ4y%2B%2FrRX7Rp5QRmrs%2FPF7W37BfZqB5Wit6%2Bqnd6gqnu5kba7bYyI56oVrpwOBX%2BABep3vTnG2tLmKKnkZ4vMY3Saf%2BRFZlxUfVE4MfxAHIRRxjJYMyQjgtgBaJLO425eV0HBV3nljIb2HAHGcSDJs%2B0TkgjvUAZjvhfInvx6zR1XpBoRCkIUGioWyBBBbN90M0Kb9dpc%2B3DyTZ4ZUFnBbDyu2S5OdLOifan2MnRr4DvaajmcyPFS5TLD0ZlJN9b%2BUhbx5HW059bLVkSS9eaIYZ%2FbJAYTuiwVHXTXMP8uQEW%2BGtOQucW4ZFQ7PNytbelD1x6y%2BHEWot%2Ft8RBReqc4Xqc9DO5Gn1TH4NqofLF%2Bn%2FusnCzPBKEXRhfxy9zDcoKnABjqkAZDK6ZK7czHVFYmJo5Z9y9dIhG29I7djTTaWW%2Fe3frsia0FYkH0Mln4r0MCZXLfrEMoVQGsWJ9475VId3MEHOuVh8VzSjjx00ljJnJeHJk%2FXhhZMZn4E%2BKfiNbhnJyF%2FZtp59ef3evPkW5t5XO2aspsMJAZ8hERRZUH2W9IA3Zzd0K%2B01jIm9plBnz79zCBC7zRUMtUkrVENryW722uDlKFBjLdE&X-Amz-Signature=41ab7616307a78ee2fdfd0747f2ff3de2486191e306eb2c951041eac7a5e50cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
