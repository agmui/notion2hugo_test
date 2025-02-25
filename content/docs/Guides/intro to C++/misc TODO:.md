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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RONN4CWJ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIBoKPPKSqNv7U0foF5rmsQzxxLe9DtbkGUcZOX9asdJzAiEAoNL%2FzRmAhWwyd5%2FM1Bn45vgSsuFpLdeDTAEEzT8hY34q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDMfTUhSUVr9Nj2t25CrcAzHcZVGRNHRuTl%2FoKzUfE4q9A0zkG4Wt4EVdZzKc0zn41QsfHd3jajJVFX57mtRF3kgyKkZOupyze5vh3Fl5O3SQJPkMtqclvI2OAj5rmhLTqDLBUj9EWjGM6v0jfIwnVLKuo8xoDMjbcC0Pis8lHijZK%2FPZVI2ftmdS4%2BvO92zNKWzoCJXH9TfNyVIsq71xHbNVn5nLky6TYbuV%2BDJpOXPPPYrjDCpBb3Z8If6UszLLxawavDnUex%2B6VcCDiYIVklYPkBSVdWR0H11AyhQKP3f1o9CNJX8aCIiII58WCOuU7eSUe0XvvkZxgi8rU11abQkrk4AxJmImjgWn8dN2bMh4iH5O5cv6MrDPjjuTkxQYtlkCKC3iujqVpITlGdcqJ9npBRug8oKO9tpfLiAN%2B7t0tXhyU8%2BWZX1b484EsuzCGE5HQQ6w6M5YY5yQQwUD18CEMAp5htGWiPNxQ67ruBM23HqHMA%2BRckCArBhLr34nZ9oXAxgjIXfQy4mQvKcMuKXmjhQ8JWNOtyaovPqCasPyPqzJs0uVdfj6ncAYpy4w1FYo0VCDYS8P9jzelGDfPMnSVXxeRGTc4gIK8wXKrbR%2BQuZQj%2BdA%2FlE56TQ%2BpHoRcY4acPEPqKBS5qTAMLjH%2BL0GOqUBjIojtqz%2FXvaV9ffoVT22DxKWuvsrbKt77uFWoOfzKHyXgXM6BLolc9xABmhqrt26KelsTcYKP4fhDvWRU8uzHOos%2B%2FSZJWkGtNXmn9NwQV96Xpgk%2BvH1rHdiUljxdYkzMel6h8rpHTR6kOl7nnJ2FqXR5f4Lj%2BZDUaMLNEZobeP54ATbFr%2BUP8XYhMi8%2BukD97CAipK4B27Y21KxsA0DQZElUvuY&X-Amz-Signature=f587bc26b7ea8074677eb03bc8b61aa94cd1b4e386f1057b0bd7b5008b9016df&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RONN4CWJ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIBoKPPKSqNv7U0foF5rmsQzxxLe9DtbkGUcZOX9asdJzAiEAoNL%2FzRmAhWwyd5%2FM1Bn45vgSsuFpLdeDTAEEzT8hY34q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDMfTUhSUVr9Nj2t25CrcAzHcZVGRNHRuTl%2FoKzUfE4q9A0zkG4Wt4EVdZzKc0zn41QsfHd3jajJVFX57mtRF3kgyKkZOupyze5vh3Fl5O3SQJPkMtqclvI2OAj5rmhLTqDLBUj9EWjGM6v0jfIwnVLKuo8xoDMjbcC0Pis8lHijZK%2FPZVI2ftmdS4%2BvO92zNKWzoCJXH9TfNyVIsq71xHbNVn5nLky6TYbuV%2BDJpOXPPPYrjDCpBb3Z8If6UszLLxawavDnUex%2B6VcCDiYIVklYPkBSVdWR0H11AyhQKP3f1o9CNJX8aCIiII58WCOuU7eSUe0XvvkZxgi8rU11abQkrk4AxJmImjgWn8dN2bMh4iH5O5cv6MrDPjjuTkxQYtlkCKC3iujqVpITlGdcqJ9npBRug8oKO9tpfLiAN%2B7t0tXhyU8%2BWZX1b484EsuzCGE5HQQ6w6M5YY5yQQwUD18CEMAp5htGWiPNxQ67ruBM23HqHMA%2BRckCArBhLr34nZ9oXAxgjIXfQy4mQvKcMuKXmjhQ8JWNOtyaovPqCasPyPqzJs0uVdfj6ncAYpy4w1FYo0VCDYS8P9jzelGDfPMnSVXxeRGTc4gIK8wXKrbR%2BQuZQj%2BdA%2FlE56TQ%2BpHoRcY4acPEPqKBS5qTAMLjH%2BL0GOqUBjIojtqz%2FXvaV9ffoVT22DxKWuvsrbKt77uFWoOfzKHyXgXM6BLolc9xABmhqrt26KelsTcYKP4fhDvWRU8uzHOos%2B%2FSZJWkGtNXmn9NwQV96Xpgk%2BvH1rHdiUljxdYkzMel6h8rpHTR6kOl7nnJ2FqXR5f4Lj%2BZDUaMLNEZobeP54ATbFr%2BUP8XYhMi8%2BukD97CAipK4B27Y21KxsA0DQZElUvuY&X-Amz-Signature=76ccceaedd1dd2b12906a9f3e0c24cc7e838731b0130602321997c7b12022d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
