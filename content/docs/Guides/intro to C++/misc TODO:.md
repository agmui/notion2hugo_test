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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOC7K3EX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC5xUzr2BBvJEZsm%2BM178eMo7%2BoG1m%2BoixKjAmaD3ZrVwIhAOQEEYgNtcP3FaDwxVSnhDVcN0iwX8PVNQ2rPn2r1Lw5KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhbKu9di4oJzkOF6gq3AP6%2FiC3cKWIRE7TTnEYNFow0UHeWyVj00eqyramM%2FWnCvO3etKxHDI5%2B%2F9F3BkCqSGYJtuqGquGTCcTugqbPTTK%2B4hUuquFugih5XFz7RPSHK7k3cTsUb27jArh7GOq0rIpgLThqf4IKAAi6E%2Bnd6oF8pdZDekamskxWy3Ub7NPVuncGxOI4%2B5KAtbq0MhBDgIz3xlSakgeOBNjZTdcICHVaAB%2B6I3KiRC%2Fra5qtuDS22XzXHTuMuYJIo78utip%2Fb0v%2Bb32zZfR5hy8It6QrBsFMF5befMrTVxVrNNgAWWzsHCwUnXMrqLsm95CiM4kyJtzb%2B7cmnqs9tMV0CcDXYFVsOkHGsPReGVPWwHBsTekMD%2FF7nHUDIuplvXZt3MmnxlZ6B%2FDoZxyBzezKR%2FSSjvaNMCA6SBfDYceCouqPIkbIv1P%2FcfPVIXhYWXdVKLiRz4sYPH%2Bv2QxuFM420XxhsgnXbKFOe9tXXUpC0sSkMTDxYdnKH4O2dQR%2Bio4jUJ6tIpHx3D9EJ7r5HzO8llBnX6uyKBsABy5spyu%2BWAOtX5nTnuPAdKdcw1G5TmHnifoZ%2F9x5ETYHeBuSbht0sMgE7YbE8iggZ1EWB%2BCIJ4apa4ZP%2F19Xf2lBTyVr%2BRQqzDhvNa9BjqkAdMCw93%2FTdZ97QIMFRrqHliRM02rW9E95daWXsM9sVF5rlobHDUU0hXQgRPdKqQIseQJ%2B%2BMcAm2gnOKIyuYvyg5oixWY%2B%2Fl8YCnhQWVqy6xYjnA9QB6HxHqvn2Ki6bo1oE3b5L%2BFGZ8JxLR9RYq1yz1TcfoyEcB020%2FtIkb1uhTy4rSwFw%2B0cPy3vhNC24Dk7szWUePjUm7C%2F6lbGC%2BnF0dZnLqY&X-Amz-Signature=dee9d61c4074587b87ec7cef7ec1b79345ad6cfaede901c1be4401e51fdd2e44&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOC7K3EX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC5xUzr2BBvJEZsm%2BM178eMo7%2BoG1m%2BoixKjAmaD3ZrVwIhAOQEEYgNtcP3FaDwxVSnhDVcN0iwX8PVNQ2rPn2r1Lw5KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhbKu9di4oJzkOF6gq3AP6%2FiC3cKWIRE7TTnEYNFow0UHeWyVj00eqyramM%2FWnCvO3etKxHDI5%2B%2F9F3BkCqSGYJtuqGquGTCcTugqbPTTK%2B4hUuquFugih5XFz7RPSHK7k3cTsUb27jArh7GOq0rIpgLThqf4IKAAi6E%2Bnd6oF8pdZDekamskxWy3Ub7NPVuncGxOI4%2B5KAtbq0MhBDgIz3xlSakgeOBNjZTdcICHVaAB%2B6I3KiRC%2Fra5qtuDS22XzXHTuMuYJIo78utip%2Fb0v%2Bb32zZfR5hy8It6QrBsFMF5befMrTVxVrNNgAWWzsHCwUnXMrqLsm95CiM4kyJtzb%2B7cmnqs9tMV0CcDXYFVsOkHGsPReGVPWwHBsTekMD%2FF7nHUDIuplvXZt3MmnxlZ6B%2FDoZxyBzezKR%2FSSjvaNMCA6SBfDYceCouqPIkbIv1P%2FcfPVIXhYWXdVKLiRz4sYPH%2Bv2QxuFM420XxhsgnXbKFOe9tXXUpC0sSkMTDxYdnKH4O2dQR%2Bio4jUJ6tIpHx3D9EJ7r5HzO8llBnX6uyKBsABy5spyu%2BWAOtX5nTnuPAdKdcw1G5TmHnifoZ%2F9x5ETYHeBuSbht0sMgE7YbE8iggZ1EWB%2BCIJ4apa4ZP%2F19Xf2lBTyVr%2BRQqzDhvNa9BjqkAdMCw93%2FTdZ97QIMFRrqHliRM02rW9E95daWXsM9sVF5rlobHDUU0hXQgRPdKqQIseQJ%2B%2BMcAm2gnOKIyuYvyg5oixWY%2B%2Fl8YCnhQWVqy6xYjnA9QB6HxHqvn2Ki6bo1oE3b5L%2BFGZ8JxLR9RYq1yz1TcfoyEcB020%2FtIkb1uhTy4rSwFw%2B0cPy3vhNC24Dk7szWUePjUm7C%2F6lbGC%2BnF0dZnLqY&X-Amz-Signature=d3206341419a01339d46d83e5276597f8d9c077eda56b0ba31b6c20d3ba89b6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
