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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSKQJRDA%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDmq1cs%2FVND2FjSxvz0V8k3Hf4Qo7Auwnh3QG9TpTMt3AIhALY0TfUV3vXNzcUNMXbvQIeUTtYRLWAS9K3jShPsnPnWKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCl9GOHlXzOGCyg8sq3AOJ7K2IOIW0vC0lLVBpGaFT%2BDvacazKKRuWR3rhFrQA%2FsMQKQM5yKkOCYSVciasFrmD8NwXmQ5bGXKtFVYx28OMWECL1t5CBe12WhUQnpX8xwpuWMUoGcSE8BtwyCLMvzNLE%2BWApUMnJR2vZP0KtRch1he9%2FwjjY9XBrCXbJpfLMXhdRLC%2BYfLQrTrTtKurHGTYIGzBAe6O%2FQDK5EsLnNagMEjG5LfvFfXYQX%2BZz31ieclC%2BtbjP76Boz5gdj6%2Bvqgh%2FPGC2S6WHMfJFRluBiDGnf45vl5l0qgijtw02g5vuShD7ZYw%2BG1OREV83pfHWtEHxTw1hCZM42G8EeHyul23QkRQkzgbKvo99BTTns7dEIJKwC5dsXn4DDC9tfhAhjlpUeq8pIpX5fGD0DkYqSo1gkHrYy%2F27R4cgdjiYI5H2rudB8vsMut6inQC0GwaZNOhKMLXIFBf7WyqsOcDXB4H56ZhwDbSQJshsZNya0psMyEFEYwPUWSx0iDhdFwkAgIMg4Ej4INunX2o%2BE960m46aFJWbqZ7yXNowCNmexQI90czIc2rY0MgOeSKSaOvaxk7GC7QWG37L%2FsHjgfP321UM6ZJBw92GSATXNxnFuQLlgCwJtJOcMgQlAUeZDCIt9zKBjqkAVv85e%2B5TFqbuZx9Df4U%2Fp5bOxTI1EPEiWWd1Fm3qc%2B%2BIOexExbtoQvye4E9sBD3ldRtJ2VHHNPvKCoNCIQVyBQN9H21HMaUHFI5MfAdQiXzcquQJ2hGJHFnymlPa1YXai4BEcZ1ytVF%2BgBsJhGbUHuct2ccbPEPUq6%2BzcfKKgloES8qsM3DVDVEz213%2FqSRir7kCxC0N4keC2iQSF0%2Bg8JjJ2Dj&X-Amz-Signature=0b2c31634ae7feb8703fd340746232741bcef14109891a39849ee3dce201ffe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSKQJRDA%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDmq1cs%2FVND2FjSxvz0V8k3Hf4Qo7Auwnh3QG9TpTMt3AIhALY0TfUV3vXNzcUNMXbvQIeUTtYRLWAS9K3jShPsnPnWKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCl9GOHlXzOGCyg8sq3AOJ7K2IOIW0vC0lLVBpGaFT%2BDvacazKKRuWR3rhFrQA%2FsMQKQM5yKkOCYSVciasFrmD8NwXmQ5bGXKtFVYx28OMWECL1t5CBe12WhUQnpX8xwpuWMUoGcSE8BtwyCLMvzNLE%2BWApUMnJR2vZP0KtRch1he9%2FwjjY9XBrCXbJpfLMXhdRLC%2BYfLQrTrTtKurHGTYIGzBAe6O%2FQDK5EsLnNagMEjG5LfvFfXYQX%2BZz31ieclC%2BtbjP76Boz5gdj6%2Bvqgh%2FPGC2S6WHMfJFRluBiDGnf45vl5l0qgijtw02g5vuShD7ZYw%2BG1OREV83pfHWtEHxTw1hCZM42G8EeHyul23QkRQkzgbKvo99BTTns7dEIJKwC5dsXn4DDC9tfhAhjlpUeq8pIpX5fGD0DkYqSo1gkHrYy%2F27R4cgdjiYI5H2rudB8vsMut6inQC0GwaZNOhKMLXIFBf7WyqsOcDXB4H56ZhwDbSQJshsZNya0psMyEFEYwPUWSx0iDhdFwkAgIMg4Ej4INunX2o%2BE960m46aFJWbqZ7yXNowCNmexQI90czIc2rY0MgOeSKSaOvaxk7GC7QWG37L%2FsHjgfP321UM6ZJBw92GSATXNxnFuQLlgCwJtJOcMgQlAUeZDCIt9zKBjqkAVv85e%2B5TFqbuZx9Df4U%2Fp5bOxTI1EPEiWWd1Fm3qc%2B%2BIOexExbtoQvye4E9sBD3ldRtJ2VHHNPvKCoNCIQVyBQN9H21HMaUHFI5MfAdQiXzcquQJ2hGJHFnymlPa1YXai4BEcZ1ytVF%2BgBsJhGbUHuct2ccbPEPUq6%2BzcfKKgloES8qsM3DVDVEz213%2FqSRir7kCxC0N4keC2iQSF0%2Bg8JjJ2Dj&X-Amz-Signature=79ca5191c6f88d256c6a8a0542dabfbae321c924765c14530142ecfc742861a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
