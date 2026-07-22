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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N52FPSX%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIBPQtA%2FjiZthTOt%2FysWBlLfdjNB7pA5gTNJXG0g36mtFAiAgaOuzhWFOw05FFTBofRfPAxKKH2eUSOtIR7xj%2FozfcSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhYTsPrKuQfYIk0lKtwD3v9jguZsC1tvUVBzdBuf1Ya%2BNFcj7vDc4d8AbD4%2Fr44szld6VWfsJTB3PLGXomgqHAa73zheRP2bKz4Imx7zZMIaztTAhgHeeQOjXnfWzJa6wlOb6eYau1vLzXa1LVB2KmCj1grvwGBPI1WAsIcGSJuOnJN6j4mF7QvT50didS8rDxacjxIdb5thDyxoVzLqv9Tyq1fx8Jzc9ytjiml132pS9rqHhYpuSFDPuaAsJBlTCGiMgS4c5BdNGfPLvS1n3DyCnkGkgycGtb0%2Bpen%2B04lI6H8ccLOvmDLFLVMnGELJFXFz3%2F2jKwoyT1%2B6Xlh54xQ8tigEmRL444FMfKr5h7mJtWlxHQPnmGEjdnavDmEUXnyEvlQIs092jP2bfazw9K1qVcMUkcfGN64fHy3RSOK7j1V7aHFPu74UmjfYYKEFWnz1WQsFtHxCAmL0Ujd6ogabaKCt5%2FYRwGCywOAwMk8aQYgp3tFy%2FVMhs8J3ZkV9ASN4h5OBQ70BAzZxdfmQ5Qg7qLvmfX0Nc0geMPq3p7j8cjbgnzYhUdLeI51bA75XQBfsTUa7E6k%2Fhj2y5u206tSihVfbHLYR8dO8JRJFpi53Sx0CfQ%2BOB85sLjif0XW7kFk95aHEkpVUsCMwwsaA0wY6pgHW07x8chyG%2BPS0xiBy1OhnoUcwBCwBjaOZztCGnbHkMs6PJlttJvdsrRD%2Fl9SIKqeuS5ipgexiGr5bXAw888bD1Big9eAdJWqcLb32kshgGGnDIgCwhegMQEYnXODdhimtOFa2gQ8JGnpZ6zTB7boCCqU2mbqTm5KU2Lit%2BSKr1tfDkZpguv02I8OXEUzuM3QUQ3izYSnp46iYIzZhOF1JhcnxcLPD&X-Amz-Signature=fd058072c4a3a22a223bf7dad0292e4dfd3cd97ed569b2ece655165909eeea04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N52FPSX%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIBPQtA%2FjiZthTOt%2FysWBlLfdjNB7pA5gTNJXG0g36mtFAiAgaOuzhWFOw05FFTBofRfPAxKKH2eUSOtIR7xj%2FozfcSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhYTsPrKuQfYIk0lKtwD3v9jguZsC1tvUVBzdBuf1Ya%2BNFcj7vDc4d8AbD4%2Fr44szld6VWfsJTB3PLGXomgqHAa73zheRP2bKz4Imx7zZMIaztTAhgHeeQOjXnfWzJa6wlOb6eYau1vLzXa1LVB2KmCj1grvwGBPI1WAsIcGSJuOnJN6j4mF7QvT50didS8rDxacjxIdb5thDyxoVzLqv9Tyq1fx8Jzc9ytjiml132pS9rqHhYpuSFDPuaAsJBlTCGiMgS4c5BdNGfPLvS1n3DyCnkGkgycGtb0%2Bpen%2B04lI6H8ccLOvmDLFLVMnGELJFXFz3%2F2jKwoyT1%2B6Xlh54xQ8tigEmRL444FMfKr5h7mJtWlxHQPnmGEjdnavDmEUXnyEvlQIs092jP2bfazw9K1qVcMUkcfGN64fHy3RSOK7j1V7aHFPu74UmjfYYKEFWnz1WQsFtHxCAmL0Ujd6ogabaKCt5%2FYRwGCywOAwMk8aQYgp3tFy%2FVMhs8J3ZkV9ASN4h5OBQ70BAzZxdfmQ5Qg7qLvmfX0Nc0geMPq3p7j8cjbgnzYhUdLeI51bA75XQBfsTUa7E6k%2Fhj2y5u206tSihVfbHLYR8dO8JRJFpi53Sx0CfQ%2BOB85sLjif0XW7kFk95aHEkpVUsCMwwsaA0wY6pgHW07x8chyG%2BPS0xiBy1OhnoUcwBCwBjaOZztCGnbHkMs6PJlttJvdsrRD%2Fl9SIKqeuS5ipgexiGr5bXAw888bD1Big9eAdJWqcLb32kshgGGnDIgCwhegMQEYnXODdhimtOFa2gQ8JGnpZ6zTB7boCCqU2mbqTm5KU2Lit%2BSKr1tfDkZpguv02I8OXEUzuM3QUQ3izYSnp46iYIzZhOF1JhcnxcLPD&X-Amz-Signature=a72233c5da5f9c1d012435921fdda47fc4d150ecb18d2bec7ba0a25ce19a06e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
