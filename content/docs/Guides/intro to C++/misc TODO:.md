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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PMQLWY%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCbijuXds9RYmnH%2BWTuPDJ208KaqbBBxh85VHyhREAXGAIga3QNWeW9yROIt%2Fe8NEyedtfGyKAGnvFqnfRDUEmBPQYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGwGDcsBNbqHBQ%2B6RyrcAyi%2BgMPPlxRTnmUUTvVWvBmmJwYdJCr70TihWru%2BHYwM3ArRnb4oy%2BaDwnhhmfStpFOrnXtY2hVR81LCbklS9P7%2F2n8Y8jxqoEeM9oGV%2B7%2ByOGyoi%2FUPcIJslufQNKp7QL3yCJj3TOb7zxEnYgook6Rjzige2LaSi0VTQZUW42VW7svp%2BQ1cqWP2B5tLZcuwNDXs3db4yhh2EED7oMoVAs7ebfZBPxtFPEGNyVxnwvXyOEB%2Fi%2B0sDlcLpUZQgFJf5VBpGBnKhrPC3THQW6TZKhrRNQOeh%2FRzkCOPBcOL%2FL6t4RlijLCXWN4BuxYH0GqywIRlVx32BTJTx%2BO5Wr81fUnpgRNH8GgC%2BdgKkB9kiV30yf8DS24%2FDk%2Fsd1AJEoNamdiTHtjdlnrdHuNTP7qxL3szxLK8A%2ByCiJzJXXeTD0cbMELpRYTXFabtXBHpGkgbKoziLa66QC%2Fs9Pmc8s4CdS9u7G5xdUlK%2BwsXgnQcYaFYlJ9puYLb4mCg4i5fbfcpVmI9QsCCpiU2c0pUz7DA2JtcsaHBZUzYS9l9C%2FkZLeAee4rHzZB0xUT%2F2rSftHgt%2BSrqRAyTcMkZlZM7QS3bhHeoZagCyOW9bny6d2ZOsr%2BUAh86F%2Bcozh40gBlvMOGj6r4GOqUB%2FY6yfF0PiqDScQ6nQSVjWhMDpILAzEAGQP66C9TskwQlRPYlSwx8p%2BYTH0zerVgEzBFzEMbQydqLOkrjbIyP7qwqrA%2FqvJKvbRc%2BMfu74e%2BkDpIEPd9UIcP3qvdllfqt%2Fy91NW%2F%2BoYhY8lGiYQfAdlGzgYHpkOHqegC3d0VY2OtfZzyE05yv3btR49a86Zivd7ZmQpQGbUgwjJozauRgyrMRoiJ0&X-Amz-Signature=ecc49a69d818dcd93d73770576e75e78099a7a8ad52e95a64a9c8f38055ed00a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PMQLWY%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCbijuXds9RYmnH%2BWTuPDJ208KaqbBBxh85VHyhREAXGAIga3QNWeW9yROIt%2Fe8NEyedtfGyKAGnvFqnfRDUEmBPQYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGwGDcsBNbqHBQ%2B6RyrcAyi%2BgMPPlxRTnmUUTvVWvBmmJwYdJCr70TihWru%2BHYwM3ArRnb4oy%2BaDwnhhmfStpFOrnXtY2hVR81LCbklS9P7%2F2n8Y8jxqoEeM9oGV%2B7%2ByOGyoi%2FUPcIJslufQNKp7QL3yCJj3TOb7zxEnYgook6Rjzige2LaSi0VTQZUW42VW7svp%2BQ1cqWP2B5tLZcuwNDXs3db4yhh2EED7oMoVAs7ebfZBPxtFPEGNyVxnwvXyOEB%2Fi%2B0sDlcLpUZQgFJf5VBpGBnKhrPC3THQW6TZKhrRNQOeh%2FRzkCOPBcOL%2FL6t4RlijLCXWN4BuxYH0GqywIRlVx32BTJTx%2BO5Wr81fUnpgRNH8GgC%2BdgKkB9kiV30yf8DS24%2FDk%2Fsd1AJEoNamdiTHtjdlnrdHuNTP7qxL3szxLK8A%2ByCiJzJXXeTD0cbMELpRYTXFabtXBHpGkgbKoziLa66QC%2Fs9Pmc8s4CdS9u7G5xdUlK%2BwsXgnQcYaFYlJ9puYLb4mCg4i5fbfcpVmI9QsCCpiU2c0pUz7DA2JtcsaHBZUzYS9l9C%2FkZLeAee4rHzZB0xUT%2F2rSftHgt%2BSrqRAyTcMkZlZM7QS3bhHeoZagCyOW9bny6d2ZOsr%2BUAh86F%2Bcozh40gBlvMOGj6r4GOqUB%2FY6yfF0PiqDScQ6nQSVjWhMDpILAzEAGQP66C9TskwQlRPYlSwx8p%2BYTH0zerVgEzBFzEMbQydqLOkrjbIyP7qwqrA%2FqvJKvbRc%2BMfu74e%2BkDpIEPd9UIcP3qvdllfqt%2Fy91NW%2F%2BoYhY8lGiYQfAdlGzgYHpkOHqegC3d0VY2OtfZzyE05yv3btR49a86Zivd7ZmQpQGbUgwjJozauRgyrMRoiJ0&X-Amz-Signature=6b524659d436d4e76c4b39c05adcb85a9c5f1aeed828897aa6a537000232e338&X-Amz-SignedHeaders=host&x-id=GetObject)

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
