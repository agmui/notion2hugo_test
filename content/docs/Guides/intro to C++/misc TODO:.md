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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5J7OK2G%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtgMo6WGGBqWNygcwVKdjH6u518eZXbOkTRgns3o5W9AiEAi6aGMw%2FnGNXGLLUKCfNSveOCFyebUSm71EUvsOndI3sq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOPgGvU%2BXE4Vk4pRgSrcA9RAyldRQrRfavCr154nrsmMsVbgHSbwN%2FYfxZSkFMtZD1BErUvs1g2zRQH8Q58so4lajTyJpi%2FwOfUOLdphmuJmqorc2IODouYyMxV60B3PlUYPvqagPdh9wx1wCorFoxpn989OfjRzlyBbXqVXdk4Z9Es%2BchhnlkCdURztAejBwMtOgHcL9NdupeHYBFLDlU3NK2iXv%2Ft8Bk3IlgOcJOmpJfNFIE7ROd42m8LZTg5f4gk6qYxctY4xZF8S8N1cabW95yMOCkAknWTvNZsKgxMoehfWebknETMIpwWakzp1vEKfk53vfhhnGQCJO4P5nDo3Yq0ZWvA7q7pnnFmR54969XUxR8b5otAxSHJWJ%2F5YsmcMiPLEPAt5YNV1SsKw1epm6GwJvzd0RM2risa50i%2BVZzvQSdbtnhG3Ke%2BZSH%2F3%2Bf6ymDJ6S%2BmLveSsrPz%2F7H77o9WW8dlAC0TqzdfmJIgaDUvf%2FgyXcayu7DlvtMmJ2ZWbwID6t8GCwimN9mI1VObYJC%2B9zj7uUx5aCs%2FZVjIeovFKrpsbqqQSi3Ufo%2FKpIFR%2FGvylBMycoGAhKyHxjWGX4Y%2BRqx89qn2ZP3HII05N3KL%2Bn6NjS6IP6xfcq%2Bx9Q4Orc%2BLgw7RSaxPmMPujjMIGOqUBI27dqKkSsFpL89PZ7QRCUu%2B9%2B%2Ff5o9QqjIZpSVeLX42M%2BnT4nqjNOgG6z1k5Jbt7sBlSgu2hQsdy7qtL7ZIcKzjWR83iudss%2Fck6pJZO7In0yTRFRM1VrkhlinMrWxz4ABMwtQ%2BpkA1U7Yq0YztzDL3xPUzgW3FPBM%2FG7FPUpfQb6JecQ0ycCxDCbbyG75a2j1%2FYasyv0l6u0jUhpiP7XAt%2FLMhX&X-Amz-Signature=f0bcf6c97a04d8244cf61cac01be901e8455e35b9398642eedd055f66043a645&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5J7OK2G%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtgMo6WGGBqWNygcwVKdjH6u518eZXbOkTRgns3o5W9AiEAi6aGMw%2FnGNXGLLUKCfNSveOCFyebUSm71EUvsOndI3sq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOPgGvU%2BXE4Vk4pRgSrcA9RAyldRQrRfavCr154nrsmMsVbgHSbwN%2FYfxZSkFMtZD1BErUvs1g2zRQH8Q58so4lajTyJpi%2FwOfUOLdphmuJmqorc2IODouYyMxV60B3PlUYPvqagPdh9wx1wCorFoxpn989OfjRzlyBbXqVXdk4Z9Es%2BchhnlkCdURztAejBwMtOgHcL9NdupeHYBFLDlU3NK2iXv%2Ft8Bk3IlgOcJOmpJfNFIE7ROd42m8LZTg5f4gk6qYxctY4xZF8S8N1cabW95yMOCkAknWTvNZsKgxMoehfWebknETMIpwWakzp1vEKfk53vfhhnGQCJO4P5nDo3Yq0ZWvA7q7pnnFmR54969XUxR8b5otAxSHJWJ%2F5YsmcMiPLEPAt5YNV1SsKw1epm6GwJvzd0RM2risa50i%2BVZzvQSdbtnhG3Ke%2BZSH%2F3%2Bf6ymDJ6S%2BmLveSsrPz%2F7H77o9WW8dlAC0TqzdfmJIgaDUvf%2FgyXcayu7DlvtMmJ2ZWbwID6t8GCwimN9mI1VObYJC%2B9zj7uUx5aCs%2FZVjIeovFKrpsbqqQSi3Ufo%2FKpIFR%2FGvylBMycoGAhKyHxjWGX4Y%2BRqx89qn2ZP3HII05N3KL%2Bn6NjS6IP6xfcq%2Bx9Q4Orc%2BLgw7RSaxPmMPujjMIGOqUBI27dqKkSsFpL89PZ7QRCUu%2B9%2B%2Ff5o9QqjIZpSVeLX42M%2BnT4nqjNOgG6z1k5Jbt7sBlSgu2hQsdy7qtL7ZIcKzjWR83iudss%2Fck6pJZO7In0yTRFRM1VrkhlinMrWxz4ABMwtQ%2BpkA1U7Yq0YztzDL3xPUzgW3FPBM%2FG7FPUpfQb6JecQ0ycCxDCbbyG75a2j1%2FYasyv0l6u0jUhpiP7XAt%2FLMhX&X-Amz-Signature=873dd79ee4ae3cc623d180a95ce704ce024fe1bcec7d9d9dc9f2260a294e7ae4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
