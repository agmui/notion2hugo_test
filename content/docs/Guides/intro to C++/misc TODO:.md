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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5TJVHWQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNilDhw1B%2BCzPYRVQAMx%2BQ33LjCZjrdqynduTDUs5jDAiB%2F3hUOze08P6CY4OSB0NVx8jMr6GxLjZXai8NtnkU53ir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMXuQeI6i9vYUxgXhXKtwDFEuhwHzAC4Tujqff4XOwPpw51WM6lldnVqe50FJZKuv7%2FfJ%2FZdF124oe3m9k5E7JxVDdDp1CONImDOh1OnuvHr%2FyzdCSJNn%2BA4T41lVjNXp09dug%2Fl%2Fqkdpn9Esf2KiNt%2BuCR81sAg7mxtbmh%2BNWP3e8bZ97Bgh43FoKzkhG0%2FbaAd31Ob1itW3ZOyG6eOeE90Ae03TI1DcdhpX%2FGmHiumI5Dy6Ju32JaJM9qevGQ7MlcnBpyboC3dJFcsS9QW4%2BOt3aA%2FK%2BsVk%2Fe3elHOm8tVryQ%2Bym8fRxOlW0h%2BvctlloM12d7FPFITwKcICmXDu7QZzI2oPm%2FOeDlN%2BZRi9MlGnzON8At%2FOLZfpUT4oJ6LInKq1jbQ8D39%2BsxI2wtvvvSUssCz8klpb6Zmj%2FwhIILZxsyA2rFes74MbI08nd4X5gYTjQGXrgzT0zFZiQHG7N9sV7AHrod5ycVm9s7J4c5DfO3PmN2%2B3DgGPzTICSp9PmiRKCENeKfHQP1yM38AiDEBpk9NyKrrFWHRqUx%2BctZC8%2Fy0ayCD6k8N5raEsyiZMQaU44UCGIXC78bKiuIAPZdvOerM5jFIEygJizCPGBCyanx%2Ba%2F%2BvLZv%2Bs9JjhsJRTpAB76otywcEBj8yAw14XwxAY6pgEdOVHnCFxbDEOm7jnQKasyCSNQOATTocm%2BwGiq0%2FZ4DI6akywnvKHuhnwEmwwStEUqpvCsTG1OtFcPMdXRAXJ2SIGMwhjbf6Bissg8UlMOG4leonID57pDZx8sY%2FBmoOagQ14TECF4DvBu6UbKIEj8g3DeyXFu9V2H2ktuoDXYgdgD3nwZuzuFpRpF%2FA4eR4PdF7Dvy1F9MXdyNp9wj5IfizhgkvUk&X-Amz-Signature=ffe56486a57c91a67f7f110310811047fbb95d635c43754511fad499ae1ab5bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5TJVHWQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNilDhw1B%2BCzPYRVQAMx%2BQ33LjCZjrdqynduTDUs5jDAiB%2F3hUOze08P6CY4OSB0NVx8jMr6GxLjZXai8NtnkU53ir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMXuQeI6i9vYUxgXhXKtwDFEuhwHzAC4Tujqff4XOwPpw51WM6lldnVqe50FJZKuv7%2FfJ%2FZdF124oe3m9k5E7JxVDdDp1CONImDOh1OnuvHr%2FyzdCSJNn%2BA4T41lVjNXp09dug%2Fl%2Fqkdpn9Esf2KiNt%2BuCR81sAg7mxtbmh%2BNWP3e8bZ97Bgh43FoKzkhG0%2FbaAd31Ob1itW3ZOyG6eOeE90Ae03TI1DcdhpX%2FGmHiumI5Dy6Ju32JaJM9qevGQ7MlcnBpyboC3dJFcsS9QW4%2BOt3aA%2FK%2BsVk%2Fe3elHOm8tVryQ%2Bym8fRxOlW0h%2BvctlloM12d7FPFITwKcICmXDu7QZzI2oPm%2FOeDlN%2BZRi9MlGnzON8At%2FOLZfpUT4oJ6LInKq1jbQ8D39%2BsxI2wtvvvSUssCz8klpb6Zmj%2FwhIILZxsyA2rFes74MbI08nd4X5gYTjQGXrgzT0zFZiQHG7N9sV7AHrod5ycVm9s7J4c5DfO3PmN2%2B3DgGPzTICSp9PmiRKCENeKfHQP1yM38AiDEBpk9NyKrrFWHRqUx%2BctZC8%2Fy0ayCD6k8N5raEsyiZMQaU44UCGIXC78bKiuIAPZdvOerM5jFIEygJizCPGBCyanx%2Ba%2F%2BvLZv%2Bs9JjhsJRTpAB76otywcEBj8yAw14XwxAY6pgEdOVHnCFxbDEOm7jnQKasyCSNQOATTocm%2BwGiq0%2FZ4DI6akywnvKHuhnwEmwwStEUqpvCsTG1OtFcPMdXRAXJ2SIGMwhjbf6Bissg8UlMOG4leonID57pDZx8sY%2FBmoOagQ14TECF4DvBu6UbKIEj8g3DeyXFu9V2H2ktuoDXYgdgD3nwZuzuFpRpF%2FA4eR4PdF7Dvy1F9MXdyNp9wj5IfizhgkvUk&X-Amz-Signature=cd7dc9ae1d3cf2ae3d6b1310612cceffa456e462e5cac2c423b7d786c8c8d327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
