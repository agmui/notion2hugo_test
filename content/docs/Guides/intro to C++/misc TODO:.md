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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6RR3Z55%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIDepDUg19rnmX8xI%2Bd5MoRNtIyPecF1fZxNE4%2FVoNZJwAiEAvrX2wNPi4cc5AUuVhPZ%2F%2BKRz%2FGKDmTobbeXKSRwEQ2YqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSf1ywz8t9t8Ze28CrcAwXvfbk8Qq4K0Jms4RBwSkY6a0%2FN6GPdLPO7iFCdxA8KM4wt0uD9eGietLn5aVQ3hwvyYLW5rszvj9gOcGOhsy4yyp2PXTYhCQkGPgb5jau62hkMKBxP4dVqw2GympdY4CqCwQgQr2n29gaS0fS8uEgHRKBgSpDgP4FdQTL52pmP7Cedh983FJ6MyIxP278c3DY1U0MpIbTRZd6mxwX0giJMLy80mfLTbx0KhFYl7pXyrtiwp7RB4x4zwPzQbkoA9eJenAaAfssQKNSl%2Bkwe0TpG7mUIk1CfJxuT1GyJCsqX9Lk1JL8PJuSsmXEA%2FtXntQUKKkRDYt6rfkLccaQOIRzZyxVDeTGhoGGCwpxM743UF1suRb0DHg8YoVm0zFPkTYeeK0gnpg68Wbrs1rjGMPoeiUUyFYOPPtaeLiXJgCYmyVscYILN2Moj4Y1%2B8jxDdHQ6r4kWkX%2BqJ6Q3JfEk7Uid4HIYO%2FOfiRj8oEXH7EtzTSpY%2Fjct2bz8AjV%2BG0Xizl9lSlX8vWJrR4q3pcgioImXEEdcJk1k3Jgkn3TQF8ODzQat8Ma0nN3KhmVvMuTz3MWxvvsS1d9OTvn8id6VhCtM8HAPprRK7r%2BZpKheBhqq%2B5Yq4UY6WzWBgaHBMOXS%2FsAGOqUBB2qfhMq%2BcOfTfGH%2BQyFMtgXfCJAVu4hvbPEl%2B3o%2FO445TdS8J%2FJiFZrERDVKVUfCf0YBhoZh64sy1YnSuxP7%2FG0nX4XCrHOAFHoGRYI0adkNFuUNUIb7gvI4DjsZIRoQ%2BM7DSesgjRwjJ7u5lbxkes%2FN6sq%2BkmOrzBimnAavDAL8lgWMNwhVdbQsZ64z36dQkXd4xojWB%2Fb2WLYWGqKiUk9tKMpw&X-Amz-Signature=9eca68c79358a166ae7737b3d75ac9b8035ea0bf78d9c460e569e5f12666a39d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6RR3Z55%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIDepDUg19rnmX8xI%2Bd5MoRNtIyPecF1fZxNE4%2FVoNZJwAiEAvrX2wNPi4cc5AUuVhPZ%2F%2BKRz%2FGKDmTobbeXKSRwEQ2YqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSf1ywz8t9t8Ze28CrcAwXvfbk8Qq4K0Jms4RBwSkY6a0%2FN6GPdLPO7iFCdxA8KM4wt0uD9eGietLn5aVQ3hwvyYLW5rszvj9gOcGOhsy4yyp2PXTYhCQkGPgb5jau62hkMKBxP4dVqw2GympdY4CqCwQgQr2n29gaS0fS8uEgHRKBgSpDgP4FdQTL52pmP7Cedh983FJ6MyIxP278c3DY1U0MpIbTRZd6mxwX0giJMLy80mfLTbx0KhFYl7pXyrtiwp7RB4x4zwPzQbkoA9eJenAaAfssQKNSl%2Bkwe0TpG7mUIk1CfJxuT1GyJCsqX9Lk1JL8PJuSsmXEA%2FtXntQUKKkRDYt6rfkLccaQOIRzZyxVDeTGhoGGCwpxM743UF1suRb0DHg8YoVm0zFPkTYeeK0gnpg68Wbrs1rjGMPoeiUUyFYOPPtaeLiXJgCYmyVscYILN2Moj4Y1%2B8jxDdHQ6r4kWkX%2BqJ6Q3JfEk7Uid4HIYO%2FOfiRj8oEXH7EtzTSpY%2Fjct2bz8AjV%2BG0Xizl9lSlX8vWJrR4q3pcgioImXEEdcJk1k3Jgkn3TQF8ODzQat8Ma0nN3KhmVvMuTz3MWxvvsS1d9OTvn8id6VhCtM8HAPprRK7r%2BZpKheBhqq%2B5Yq4UY6WzWBgaHBMOXS%2FsAGOqUBB2qfhMq%2BcOfTfGH%2BQyFMtgXfCJAVu4hvbPEl%2B3o%2FO445TdS8J%2FJiFZrERDVKVUfCf0YBhoZh64sy1YnSuxP7%2FG0nX4XCrHOAFHoGRYI0adkNFuUNUIb7gvI4DjsZIRoQ%2BM7DSesgjRwjJ7u5lbxkes%2FN6sq%2BkmOrzBimnAavDAL8lgWMNwhVdbQsZ64z36dQkXd4xojWB%2Fb2WLYWGqKiUk9tKMpw&X-Amz-Signature=36f69ef66f4860518670a964fa9e0900ae017e7a67a962f16c08ba48a7c918a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
