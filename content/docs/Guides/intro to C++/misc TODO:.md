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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWFNSKDL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICynfkDee4dXT5YGcUvjvmJmve1qpaBSuYpzfCNrgWerAiEAq0cA13s2LxqVpJGYqwyTLOYVAGV0dZNWErpD2CvFy3Aq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDqM5Tlrlvpc5UKXJCrcAzGlkwvvMD1i8xRcemgQR0KTVAGI9AyaMP8nE7VwlXOToZ6DltX3UJ0OcXTrNhvbnKCgl%2Bqc8H8TzN2AxoWyChGOhz0%2Bh%2BrQ3Amp1g8s5A8iSnt8hX0BAwa9vVFGg8jZ27dSvHDeqxxcuP4hK%2F0lhLVetvKdioCUjxx%2FblQjlqvcUvIIos3VOMJZoJGuJTVGZ35HcaDMRgM9IjRKWpczw73EyDKHpTZRJFlqo%2Bq55uUhEJFNbsjhvq9uvszHtM9bvZKJvE27kSr5G%2Fx1%2BbYuE203tUmi0V8I0yVOXd51XKA6cwwyzv47o9OekYY9ujJxlohOkbk6Wd8jegLQMG3hY4cGKmo3z5ozp2BvH8Kp3MkT3eX1nSB%2FMCBaG0lJh3CxvdjOLrTgizDqYhf8%2B3p0b64%2FDgw5rpjnIQ3fgThhwZ1bOr14yOijNP3z7a2hHZue1oYC3t7KRAD0uMPbI4nFQBaB5wDGkOAOUu71ZW2QSfg1ZMQ5oJRpK7YikktIpBql0%2FkkNXUf5wZxSPGVfx5qTOSkde8vDVviCg8qGcQzZ67AN0MtrtLenthpCDY7qOv9kgGNZyBQuvFYCWORTA%2FLZF%2BPQCM1OTFvBss9HLHnYuQgMAps0%2FwQdu0bDjAMMMjrur0GOqUBPrktsuWcFnu3%2B4ZD4t0ykkWTs8f%2B3hJJod88bZsTVizT1xuTz641g1V0y47xcHn6o3yQmeGWpe5vOrfogx0hYe%2BXZ5dOWvKpRSxDey9FYXA2%2FFXAdsay115IRXO%2FsoIvjP6JNWRpopfRRLfF%2F9BFhXj0Q1Te3MOi3QSwSpQa%2B7chbLQLsNBBFKlIwy7S40bTcc5rnogl%2BqvZDFlNrJwpaMi%2BM%2F6O&X-Amz-Signature=522887d65afc56d6cc5b809bd31d9ea23647cfa3318571cdabe919fc4b523fcd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWFNSKDL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICynfkDee4dXT5YGcUvjvmJmve1qpaBSuYpzfCNrgWerAiEAq0cA13s2LxqVpJGYqwyTLOYVAGV0dZNWErpD2CvFy3Aq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDqM5Tlrlvpc5UKXJCrcAzGlkwvvMD1i8xRcemgQR0KTVAGI9AyaMP8nE7VwlXOToZ6DltX3UJ0OcXTrNhvbnKCgl%2Bqc8H8TzN2AxoWyChGOhz0%2Bh%2BrQ3Amp1g8s5A8iSnt8hX0BAwa9vVFGg8jZ27dSvHDeqxxcuP4hK%2F0lhLVetvKdioCUjxx%2FblQjlqvcUvIIos3VOMJZoJGuJTVGZ35HcaDMRgM9IjRKWpczw73EyDKHpTZRJFlqo%2Bq55uUhEJFNbsjhvq9uvszHtM9bvZKJvE27kSr5G%2Fx1%2BbYuE203tUmi0V8I0yVOXd51XKA6cwwyzv47o9OekYY9ujJxlohOkbk6Wd8jegLQMG3hY4cGKmo3z5ozp2BvH8Kp3MkT3eX1nSB%2FMCBaG0lJh3CxvdjOLrTgizDqYhf8%2B3p0b64%2FDgw5rpjnIQ3fgThhwZ1bOr14yOijNP3z7a2hHZue1oYC3t7KRAD0uMPbI4nFQBaB5wDGkOAOUu71ZW2QSfg1ZMQ5oJRpK7YikktIpBql0%2FkkNXUf5wZxSPGVfx5qTOSkde8vDVviCg8qGcQzZ67AN0MtrtLenthpCDY7qOv9kgGNZyBQuvFYCWORTA%2FLZF%2BPQCM1OTFvBss9HLHnYuQgMAps0%2FwQdu0bDjAMMMjrur0GOqUBPrktsuWcFnu3%2B4ZD4t0ykkWTs8f%2B3hJJod88bZsTVizT1xuTz641g1V0y47xcHn6o3yQmeGWpe5vOrfogx0hYe%2BXZ5dOWvKpRSxDey9FYXA2%2FFXAdsay115IRXO%2FsoIvjP6JNWRpopfRRLfF%2F9BFhXj0Q1Te3MOi3QSwSpQa%2B7chbLQLsNBBFKlIwy7S40bTcc5rnogl%2BqvZDFlNrJwpaMi%2BM%2F6O&X-Amz-Signature=7eef0c81004430ca877eebcf88c62d14017aad562ccfc5a6e2ecb7e5c0dec775&X-Amz-SignedHeaders=host&x-id=GetObject)

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
