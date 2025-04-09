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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVRIGVCA%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDq9w6GIyzVKYCIHg%2FVvBvQuhItKj3KuCmtvw6%2FeUY7zgIgdvUxQfFpUAzl%2FzGb8%2FnaCdfj5SL04geZWWsYeaMsGMEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG92Bo7a6v%2B6ZUQEkSrcA6i90x9F5NW%2FI8Wp1h9kjlO2fc8XHwDMdDSXdnUpb1evfAnzMbZiUIIwok0L19eZYQxkHAROveJ0a%2BiowNxBkboYQt5msdyQZaIGCkKgeX8U4TofljUybybsQMmPAQQeo6ECexE9VmRGI8FncND9zNgGAvHrwzrrEFpjKf36dAHMDqjpZoKZRj5GhjhJjfChXvmMoXEzc7wyK9AiuEMIAKGdn2k3HQP8duETlBqdibSrUwWBGuhl1pAd0xn01ki8AqccO6l%2FRP4iDWVaXLXVso8GO43eeMBdgRltCvMvTPdOT7mhROGAaNDQtG%2B9u%2BIkJKL31p3MgfYmH6UwkfCBEHYVimDiCGdQY2WOYzCu5VTaFOvD%2F3PAmr4VNfRAZbbMFDVkkJoY6gonRoqDja2Ty2wtZ0usfTGecwK7bWJ2SFppR86PMSPp7xgaUaE1NlHz3JSXYypyiHOaFuHE0gN3%2FUv9VZwoF0kpFfsrok5wmhpCRs19PIRKywXMNvsSg6yGAvNaPljgRngreIrgexYXoTqpTHeubxxmaZb3VVJFse8qKs9EL3PNYSSvp04K08PXXX%2Ff4DyvZlIgM4cGeEvkvCqZzaoLo1ea0%2BMtt67d7pwXJ52XlZGZUmfRu5dlMKyy2L8GOqUBPdnjlkIuekYFdt8yF3Ohbqj64GNs%2B6rubrUAO7DRFyMjLOUh6DSS3o3aBuIJuiZxUXRCanUTKM58rWtPBhZJE5qNmzWa6KOjZzBK54NyS15yrIC37WRYBUcLzbL%2FabGZ232dyzFRc7OxsjtfS40s3Lj9vmlxeW5mn7SAObj15aI1nwwoQ7UVVBF49NjWBzVPhzta2ZbL0wAwkVd%2B4E2HRSqHxfOI&X-Amz-Signature=38c22086d3e77ed82162de2a1286d287476e39088fae5e96ee2e3d947e76552d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVRIGVCA%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDq9w6GIyzVKYCIHg%2FVvBvQuhItKj3KuCmtvw6%2FeUY7zgIgdvUxQfFpUAzl%2FzGb8%2FnaCdfj5SL04geZWWsYeaMsGMEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG92Bo7a6v%2B6ZUQEkSrcA6i90x9F5NW%2FI8Wp1h9kjlO2fc8XHwDMdDSXdnUpb1evfAnzMbZiUIIwok0L19eZYQxkHAROveJ0a%2BiowNxBkboYQt5msdyQZaIGCkKgeX8U4TofljUybybsQMmPAQQeo6ECexE9VmRGI8FncND9zNgGAvHrwzrrEFpjKf36dAHMDqjpZoKZRj5GhjhJjfChXvmMoXEzc7wyK9AiuEMIAKGdn2k3HQP8duETlBqdibSrUwWBGuhl1pAd0xn01ki8AqccO6l%2FRP4iDWVaXLXVso8GO43eeMBdgRltCvMvTPdOT7mhROGAaNDQtG%2B9u%2BIkJKL31p3MgfYmH6UwkfCBEHYVimDiCGdQY2WOYzCu5VTaFOvD%2F3PAmr4VNfRAZbbMFDVkkJoY6gonRoqDja2Ty2wtZ0usfTGecwK7bWJ2SFppR86PMSPp7xgaUaE1NlHz3JSXYypyiHOaFuHE0gN3%2FUv9VZwoF0kpFfsrok5wmhpCRs19PIRKywXMNvsSg6yGAvNaPljgRngreIrgexYXoTqpTHeubxxmaZb3VVJFse8qKs9EL3PNYSSvp04K08PXXX%2Ff4DyvZlIgM4cGeEvkvCqZzaoLo1ea0%2BMtt67d7pwXJ52XlZGZUmfRu5dlMKyy2L8GOqUBPdnjlkIuekYFdt8yF3Ohbqj64GNs%2B6rubrUAO7DRFyMjLOUh6DSS3o3aBuIJuiZxUXRCanUTKM58rWtPBhZJE5qNmzWa6KOjZzBK54NyS15yrIC37WRYBUcLzbL%2FabGZ232dyzFRc7OxsjtfS40s3Lj9vmlxeW5mn7SAObj15aI1nwwoQ7UVVBF49NjWBzVPhzta2ZbL0wAwkVd%2B4E2HRSqHxfOI&X-Amz-Signature=be6a92b99a23e64f18b4c7daf442a128f39736bf5f12687f22752de2cae009f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
