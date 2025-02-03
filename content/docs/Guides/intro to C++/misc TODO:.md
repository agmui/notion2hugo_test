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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FR53TIE%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcdPgmqklY%2BfyRtRmJjjISvvRLpvY%2FHLW2jtgLbU3M3AiAqHBQ%2FnmIQyWWUNjBxild5Jv0XU8CQmAY4nCxQPGNkgiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFCESOa6wkjGw4C9lKtwD1TFkWrNZyV5lUuEfW59r2igqz4lWLXgvFWqRT9jK%2F66JD62R2zE6km0U99D0RiEchjRdQf0%2FpB1H%2Fog%2BASttY2I2yUpsfc7%2FRFNzKqxtxp0oDF5I3ANs97C3HAFKttBwdCwYTX1U9%2BKImoYa%2BSFgyIeBhjPONsbq%2BLFBWg%2FA6BFeTJyUk%2BRdQ3WVPJ8FKE3DfjxPj%2BabdPs2mzNnzu8TzbowMdhESh%2FpCsJm0Ilz0%2BqMZHUiP2Ai%2FIRuwlAMyLwIfjtAb432u75356YytnDqA5PTC%2BXK1oQLjdkUy6uNh%2B9D%2FFmBELOnkORR2fkeV0iMvXRkvxJC7p68YGwEo5oA2b%2B5pFMYp5CNgM7OUQ6ZNKYMsHLGjJ9ede7y8PBFlrl7dbTAETxyZ0YBnlAKxofYxzWeuUOzEiFPFFD3EUs18c5nuRaZ%2FJNFlsNq0C3w3rWiBsdgXH%2BeNm0jlYN1xd1SlXKF%2Fbel%2F7ykaq7LV4zrMb41doumOxQHGro2Af589bypH7Q5tGG%2FqPyY79p3ShImcKy4OuhK8SaMQW6xmvQFKeFV%2BtrnkVGNY1YVo7P1zTAo3YKi0gfpEhlyIgoyhn1%2FmIqQEmDxo7cb4uMKEIiCpvBTOxzySmulS3pCoR4wn7uBvQY6pgFyoBqNfl727UHDnrYDuowXl2zZvsgQZEm3ddHRtL0wRX4V2SuyRmvk0uKiA19vhjryM977Aip2hj8NnahLKqMb3jQR7yOV9wZ5%2Bgn5eq7OT8ZJQMCA8RwRKHwlgySUH%2BR1NttF4irPGHGGcJrPNmjktqd9%2FIMNKNOB%2BF2fUuGa9JLrYB6Vs8CXiHErMp5%2BcDzNgzq2OTVVPIHoc7XRL%2FyUJ4Gjw9yh&X-Amz-Signature=5b59bd7fcf50f2be2ea572f5553dc71fbf8f543b24c77ae230d72393ce0b4d80&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FR53TIE%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcdPgmqklY%2BfyRtRmJjjISvvRLpvY%2FHLW2jtgLbU3M3AiAqHBQ%2FnmIQyWWUNjBxild5Jv0XU8CQmAY4nCxQPGNkgiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFCESOa6wkjGw4C9lKtwD1TFkWrNZyV5lUuEfW59r2igqz4lWLXgvFWqRT9jK%2F66JD62R2zE6km0U99D0RiEchjRdQf0%2FpB1H%2Fog%2BASttY2I2yUpsfc7%2FRFNzKqxtxp0oDF5I3ANs97C3HAFKttBwdCwYTX1U9%2BKImoYa%2BSFgyIeBhjPONsbq%2BLFBWg%2FA6BFeTJyUk%2BRdQ3WVPJ8FKE3DfjxPj%2BabdPs2mzNnzu8TzbowMdhESh%2FpCsJm0Ilz0%2BqMZHUiP2Ai%2FIRuwlAMyLwIfjtAb432u75356YytnDqA5PTC%2BXK1oQLjdkUy6uNh%2B9D%2FFmBELOnkORR2fkeV0iMvXRkvxJC7p68YGwEo5oA2b%2B5pFMYp5CNgM7OUQ6ZNKYMsHLGjJ9ede7y8PBFlrl7dbTAETxyZ0YBnlAKxofYxzWeuUOzEiFPFFD3EUs18c5nuRaZ%2FJNFlsNq0C3w3rWiBsdgXH%2BeNm0jlYN1xd1SlXKF%2Fbel%2F7ykaq7LV4zrMb41doumOxQHGro2Af589bypH7Q5tGG%2FqPyY79p3ShImcKy4OuhK8SaMQW6xmvQFKeFV%2BtrnkVGNY1YVo7P1zTAo3YKi0gfpEhlyIgoyhn1%2FmIqQEmDxo7cb4uMKEIiCpvBTOxzySmulS3pCoR4wn7uBvQY6pgFyoBqNfl727UHDnrYDuowXl2zZvsgQZEm3ddHRtL0wRX4V2SuyRmvk0uKiA19vhjryM977Aip2hj8NnahLKqMb3jQR7yOV9wZ5%2Bgn5eq7OT8ZJQMCA8RwRKHwlgySUH%2BR1NttF4irPGHGGcJrPNmjktqd9%2FIMNKNOB%2BF2fUuGa9JLrYB6Vs8CXiHErMp5%2BcDzNgzq2OTVVPIHoc7XRL%2FyUJ4Gjw9yh&X-Amz-Signature=8b4b3b85862074bd69fcdd25d708311c8405d196de4684db96908d7398db2380&X-Amz-SignedHeaders=host&x-id=GetObject)

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
