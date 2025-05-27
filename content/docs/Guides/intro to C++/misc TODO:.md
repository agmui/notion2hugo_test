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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BTRZOQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBMPqaaBI2fzL6k8CiGdJ4KoBO8jWFiFvQzehMY7906AIgGxp9VsTC5LsDGGdNpVhpH9p8%2FXg%2BnwU9oCYDrYLio9cq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMfzTPZXuCnJdlzARCrcA8XLE%2BhnVsHbEYxLHTK5yD72Up5%2FM48udgTHGFbQGHhJcBrjjk8sy86yiIG8Vmjs%2FXnkokVJWcINHIR3YrvQOgBpsQFVBDNFGjuxWTtFoSTHDMcyS5iW3Ko14W4UpJ7gOaYhjkMIZHP9YnczfGLTLnT2ZpNXGTH%2F%2FYgY4OFhAocztCt0v8xwLBQl%2B8wPSMqerkzprx2M1J12nZ5JrWVzKFQAtsaWgcWtPTZXdkeE1vI5CPBTH20snPkCv0J02%2BCQJtL2qeRweiG4wHETQ8NCQhFEc3EUtsbEXSv0YWp0hBcnk2tfr2Exr%2FPIKCCE%2FfzBUfAyw6ZfpO6Rp%2BDdpmMUlVvscStAMn4RKALXsYqkcK7d4dVFmuwKmKJrjPDR4mO08f5Nve1r3Al0ejfQW8E0tya4ZHtUAeEGtHT5tS4xsX6wpwY7voKzrravT%2FiuhYvovo58ab6PSFfv2gvswRdX%2FsDZ1y3%2FNqlTMGGW0ecS1XCnuAuy2skAOPt7jBpeajjlMWyULa1EVvsUN5GnjaOG%2BGrcySdg8Q9T94APta9f%2FXvQJerqWrvsdWMvGPRRhjif3GiOWUHchGRKdVQa3OF5bs%2B%2BfmIaX4SWUcwMbNx7bPedo2vixTyySzFbmcHlMOvJ2MEGOqUBYtxGVX4r3m7XkPxXW1ADYxv8CvUbIynz4QMrTgACAHJ8RhY9%2FeysKSzRI6Zklj1EspYC75dr4ELk1ycZ4D%2F5H28M7LxWKDmzGmAdLJD%2BsIIq%2BoPSfdz2kIBlesZT9CyxCSEkGFaxDjeILo4IVnJYs8W9CYSjVeE7MLmeFlTJ0Gq5YTLGPr037FHmA1DZhKSLcnG5YfFX04Dd8wyQCnzJ2q%2FSYuVc&X-Amz-Signature=23fb5fcfbc61958ea3de9bc0892ff2587f376d85b5c521f02bf747fbe4d6b876&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BTRZOQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBMPqaaBI2fzL6k8CiGdJ4KoBO8jWFiFvQzehMY7906AIgGxp9VsTC5LsDGGdNpVhpH9p8%2FXg%2BnwU9oCYDrYLio9cq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMfzTPZXuCnJdlzARCrcA8XLE%2BhnVsHbEYxLHTK5yD72Up5%2FM48udgTHGFbQGHhJcBrjjk8sy86yiIG8Vmjs%2FXnkokVJWcINHIR3YrvQOgBpsQFVBDNFGjuxWTtFoSTHDMcyS5iW3Ko14W4UpJ7gOaYhjkMIZHP9YnczfGLTLnT2ZpNXGTH%2F%2FYgY4OFhAocztCt0v8xwLBQl%2B8wPSMqerkzprx2M1J12nZ5JrWVzKFQAtsaWgcWtPTZXdkeE1vI5CPBTH20snPkCv0J02%2BCQJtL2qeRweiG4wHETQ8NCQhFEc3EUtsbEXSv0YWp0hBcnk2tfr2Exr%2FPIKCCE%2FfzBUfAyw6ZfpO6Rp%2BDdpmMUlVvscStAMn4RKALXsYqkcK7d4dVFmuwKmKJrjPDR4mO08f5Nve1r3Al0ejfQW8E0tya4ZHtUAeEGtHT5tS4xsX6wpwY7voKzrravT%2FiuhYvovo58ab6PSFfv2gvswRdX%2FsDZ1y3%2FNqlTMGGW0ecS1XCnuAuy2skAOPt7jBpeajjlMWyULa1EVvsUN5GnjaOG%2BGrcySdg8Q9T94APta9f%2FXvQJerqWrvsdWMvGPRRhjif3GiOWUHchGRKdVQa3OF5bs%2B%2BfmIaX4SWUcwMbNx7bPedo2vixTyySzFbmcHlMOvJ2MEGOqUBYtxGVX4r3m7XkPxXW1ADYxv8CvUbIynz4QMrTgACAHJ8RhY9%2FeysKSzRI6Zklj1EspYC75dr4ELk1ycZ4D%2F5H28M7LxWKDmzGmAdLJD%2BsIIq%2BoPSfdz2kIBlesZT9CyxCSEkGFaxDjeILo4IVnJYs8W9CYSjVeE7MLmeFlTJ0Gq5YTLGPr037FHmA1DZhKSLcnG5YfFX04Dd8wyQCnzJ2q%2FSYuVc&X-Amz-Signature=35075b356df7c80b6a39d8a38063fa4217d80821b8de86335315b1084038f144&X-Amz-SignedHeaders=host&x-id=GetObject)

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
