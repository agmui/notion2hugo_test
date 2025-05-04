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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJRWQEBF%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCoGZ13BQ4ycxfbRgu9rhveLDaLG8oBkii5P0EdyRhHJQIgMSv%2Fbk0k%2BaaQsEeZs2svFUKkXpyIE%2B9clCN%2BprBNlZQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGPZT4w4AybcNYa2oSrcA3LO1JJCCm4Wcqns62ICrJEvqESM%2BRdZfjURz0CDvvH73IfGMSn8sROJ%2FMP%2FnLA%2F1pXxKB%2Fkgzsmw%2FsK%2FArDUCfnaHIsVF4N3xUPIb1vjtJOYDwji9oAC9AEC4Fl0r1zB5atIONs179ojWfmRH8MzMpQPofgjYhH845Rs6RL%2BBukhPVMUPE68xMMi5ivJvFwcFfdfIxXZZjrloHZw%2FB5LyHR1H1SeCldKyT3NVXcXVUsU2ZhFBAOvbrCfMPic3jnP8HhvoVdMPnnF9Md579EiSHSYsqfidyuLRYLw9kpgNRd2hcmhP91rdFNl5f%2FDo%2F8UHOtugrVD2ELTH3UZvFfvgZ4oQ5palv0dPRmvDLFWyo3smBlLC0ga9YX7xwnf6MD74J9VRRnisiStwj4BO%2FL%2B%2FHP%2B9XiejbYgOe97uCNBP1bkKR3g0RBKMeQmptKRSRbSt9oZlq%2FsBZKBnLSh6raY2Kqb5LR8k36QPkwLOlcoymtmNtb3sh3O5SI0ZQotHbGSQMMWCjHVwtC206ara1cPooaCzYJS%2F%2B1TBuHJ8wK6WgfjqNjggtjN8wrUxsPBAajCS9B5N71xHtpCiJloIxPy1U%2FlH8MnttPTk%2F024Qjwg%2BZEfpBYf8CkZoFj9xCMPKG3cAGOqUBlVWmm7nXEDDDyrfnEwtY1vo6%2BkeDd%2FQzWhfYFaP866dPD8M87LhqeMzv9cWwC2f6PSvqiEJEOVzTzrZxrxIoh4hejsDQuJVsdVy8hRL2YVfmXKZ8eOvNSgH8hzehrcaJdFj19Gn5R%2BFUPdJsGAicIG%2F4uVbSAy0Ly%2BKYVUSjsIfNsOyRI6O0PMQhKy9sopK8AQwWrwsHehX%2BR8yLVmj3U%2B07adRz&X-Amz-Signature=23ee5c1ace80d1343430b297d2a3f309fa2428b1184ff29bd0ddaebac6917cb6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJRWQEBF%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCoGZ13BQ4ycxfbRgu9rhveLDaLG8oBkii5P0EdyRhHJQIgMSv%2Fbk0k%2BaaQsEeZs2svFUKkXpyIE%2B9clCN%2BprBNlZQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGPZT4w4AybcNYa2oSrcA3LO1JJCCm4Wcqns62ICrJEvqESM%2BRdZfjURz0CDvvH73IfGMSn8sROJ%2FMP%2FnLA%2F1pXxKB%2Fkgzsmw%2FsK%2FArDUCfnaHIsVF4N3xUPIb1vjtJOYDwji9oAC9AEC4Fl0r1zB5atIONs179ojWfmRH8MzMpQPofgjYhH845Rs6RL%2BBukhPVMUPE68xMMi5ivJvFwcFfdfIxXZZjrloHZw%2FB5LyHR1H1SeCldKyT3NVXcXVUsU2ZhFBAOvbrCfMPic3jnP8HhvoVdMPnnF9Md579EiSHSYsqfidyuLRYLw9kpgNRd2hcmhP91rdFNl5f%2FDo%2F8UHOtugrVD2ELTH3UZvFfvgZ4oQ5palv0dPRmvDLFWyo3smBlLC0ga9YX7xwnf6MD74J9VRRnisiStwj4BO%2FL%2B%2FHP%2B9XiejbYgOe97uCNBP1bkKR3g0RBKMeQmptKRSRbSt9oZlq%2FsBZKBnLSh6raY2Kqb5LR8k36QPkwLOlcoymtmNtb3sh3O5SI0ZQotHbGSQMMWCjHVwtC206ara1cPooaCzYJS%2F%2B1TBuHJ8wK6WgfjqNjggtjN8wrUxsPBAajCS9B5N71xHtpCiJloIxPy1U%2FlH8MnttPTk%2F024Qjwg%2BZEfpBYf8CkZoFj9xCMPKG3cAGOqUBlVWmm7nXEDDDyrfnEwtY1vo6%2BkeDd%2FQzWhfYFaP866dPD8M87LhqeMzv9cWwC2f6PSvqiEJEOVzTzrZxrxIoh4hejsDQuJVsdVy8hRL2YVfmXKZ8eOvNSgH8hzehrcaJdFj19Gn5R%2BFUPdJsGAicIG%2F4uVbSAy0Ly%2BKYVUSjsIfNsOyRI6O0PMQhKy9sopK8AQwWrwsHehX%2BR8yLVmj3U%2B07adRz&X-Amz-Signature=b4efa066181be667df65ecdcf7a1aa69ebd720d9fa6a5559570ae90b8c18d349&X-Amz-SignedHeaders=host&x-id=GetObject)

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
