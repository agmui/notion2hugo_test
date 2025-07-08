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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VTVTX62%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAylGnQ55kr5gjJpwXaqiHDg5Rf8OfY%2BAp7xchm7B0eNAiBkXTtOLiOnuecAgQn%2BjNmATzKU2dW6bWc0g7GHj3y4wiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvLm%2FOI%2FPTKai7%2BG4KtwDpX6BlkHB%2FZ99JsjYvpa5v7kFdkf4pw%2FunOreD7a2K%2BuFbP3xzRcZ%2BS4cIi6DeyJWR8g%2FikwTpsu%2BpbV4cR7axO%2B1SRpTSQ%2BajfDaFPWMCEsJ1hePty21%2B%2F6GF9OkN266fz290CDXk5AK6KO%2FU2%2FOyErmC%2FUhON4YIaIiMB9NR5JwhgvdEUDIKFlq4zIg6dRvtv4A%2Fo9k8SWU%2BesjTffS81xXML9E1oe%2F79expHQ%2BIGk4rn42HkRiDFYqKF%2Bu7ldFBG7S3u0%2BKJdzphWRj1bbmF3ydwrZ2siDeQ55kCL%2B0a15QupahJzjTp3lKfBtp1o7WKklcIZcy4O%2FQPlu8fMaS1QUTAPcfAxxaP4bXp30nYLsuH2aupjL0EVbAuwqkVD4uEATQgIWjSnswE%2BG8XuXEsk8gfSEYLnLtbJEsQRpNdkdbR8ULrfs6Li0ApGqyldcN4vfXlCdHqozDinqL7xFHxD2U1VcuHvufF%2BUbKRXmQ8NTbkuGAd1GIcWsbgcL%2BgU2TT6%2FZUH%2BE4%2Bxc7zB%2FfoqOJl5AGEriE%2FSo75VLaFdXvhX63RODWYbQbhhVeTBs88JVBsXDJHmneyR0NLSiBKoH6bS2ECW1uMK5BD3%2B4Gg%2Bo6SitP%2BPqvN6X7II4whcezwwY6pgHdghMmhH1PsPLxc3QVrqsBbfLQPeon4k%2FPZkH05Z%2FilpgFe%2BSINsZ0n74oXlmSMV0a7MwiNyv95ubMf7rdBbsilrT3kYIReRpFFpq%2BQAqi4efcvrMZALKvCbVJtn3MMjTAq07gw1LUkKdcletEF%2BCXsxbJacF20Hz1WEeDQUOVD3su97R%2BO5O3LHhvJ4GO%2BtjAMnxaBaByYekuk2Ihej4lE3QsJSz2&X-Amz-Signature=16287fa545454b725a8178441cfc63075e77c3faaf60a0b5e36922a1eaa12b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VTVTX62%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAylGnQ55kr5gjJpwXaqiHDg5Rf8OfY%2BAp7xchm7B0eNAiBkXTtOLiOnuecAgQn%2BjNmATzKU2dW6bWc0g7GHj3y4wiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvLm%2FOI%2FPTKai7%2BG4KtwDpX6BlkHB%2FZ99JsjYvpa5v7kFdkf4pw%2FunOreD7a2K%2BuFbP3xzRcZ%2BS4cIi6DeyJWR8g%2FikwTpsu%2BpbV4cR7axO%2B1SRpTSQ%2BajfDaFPWMCEsJ1hePty21%2B%2F6GF9OkN266fz290CDXk5AK6KO%2FU2%2FOyErmC%2FUhON4YIaIiMB9NR5JwhgvdEUDIKFlq4zIg6dRvtv4A%2Fo9k8SWU%2BesjTffS81xXML9E1oe%2F79expHQ%2BIGk4rn42HkRiDFYqKF%2Bu7ldFBG7S3u0%2BKJdzphWRj1bbmF3ydwrZ2siDeQ55kCL%2B0a15QupahJzjTp3lKfBtp1o7WKklcIZcy4O%2FQPlu8fMaS1QUTAPcfAxxaP4bXp30nYLsuH2aupjL0EVbAuwqkVD4uEATQgIWjSnswE%2BG8XuXEsk8gfSEYLnLtbJEsQRpNdkdbR8ULrfs6Li0ApGqyldcN4vfXlCdHqozDinqL7xFHxD2U1VcuHvufF%2BUbKRXmQ8NTbkuGAd1GIcWsbgcL%2BgU2TT6%2FZUH%2BE4%2Bxc7zB%2FfoqOJl5AGEriE%2FSo75VLaFdXvhX63RODWYbQbhhVeTBs88JVBsXDJHmneyR0NLSiBKoH6bS2ECW1uMK5BD3%2B4Gg%2Bo6SitP%2BPqvN6X7II4whcezwwY6pgHdghMmhH1PsPLxc3QVrqsBbfLQPeon4k%2FPZkH05Z%2FilpgFe%2BSINsZ0n74oXlmSMV0a7MwiNyv95ubMf7rdBbsilrT3kYIReRpFFpq%2BQAqi4efcvrMZALKvCbVJtn3MMjTAq07gw1LUkKdcletEF%2BCXsxbJacF20Hz1WEeDQUOVD3su97R%2BO5O3LHhvJ4GO%2BtjAMnxaBaByYekuk2Ihej4lE3QsJSz2&X-Amz-Signature=082065985b037dc8c5622424e824743918c23e37187f87c438720db587deac74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
