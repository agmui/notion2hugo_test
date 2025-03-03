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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX3L3JU4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvy30EVJya0S%2FvwFzMczzAx%2F4JlLzhim0R%2Fk6%2Fnv2hXgIhANuv%2FptdrjOvrC2Temg5pdZ7F6Yeg%2FJj1hrD4VvUpXevKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0MJBE97oaVulTsPMq3AMM8%2BCYQobst%2FuSSeiNmQgtIkC8Fi1s%2B6vUsug5JpqTJteUBtrj2I92N7RfkPznWIA0OT1%2BV1xm4aXWlcfe4m2VtfH632tZhFVQtCTyDdkp1ABGHPLqxdz6Q3599WjKbNBRkwH9q%2FQPKbwOey7VLPIqPJP2w%2B05Skb8lIL9rVIjaxadEhgDWwm518kGUTVt%2F3jOPqz%2FqIFWJJ7vHHanwNxh8ti03X%2FiC7RwYdK6%2Bo8TPaVg4KP4yakTks1COur1imxt%2FfWp1xiGxmzObNQ9M%2BxZHi2GIUzy%2FFEwcJkp1Cvmrb0q6sVcygPrnA7%2BJq19Nu2NF7ymoFJVgY2CSz9yDmdb95a8%2FMBiRX%2ByB1YfWY6aXhnCSt%2B2uEozB1ixz7RxgPCZgiomJ6TcIjsvsdE5ndtNIgB%2BCy76TraXF4nj%2FNrroDsL7kdKPpRve5B2njwc%2BmCUq62C%2Bs8aZQm2LE7VR840SPx3OQ3E98XkyW8RPiKiuEbTK22sr6xqDiZt3R0McVnzmEO%2FnePHk0HFYwwPFU2Eg0%2BanQvbL%2B3%2Btdbe9t%2FHyxUSIS9mNPpiGSga%2Bnbz8QtkHByIvaX%2BGPCg4N8GMU0rVZitk8e%2Bkp8S3wilXy%2BWO6v4UUJGZ575gU8A1DC%2FnJe%2BBjqkASdCtF4mWKDWAN9pH2aFOyPM5%2B2ptOLcjYZo5zwLLPiazROSlN6KHe2L5XcNYBCmypldo46VMH44l8htSbfyJGFQBZd0%2Bx5e23uNx%2F%2F4MxXE0El4PzQVG3v9UY%2By1iwgyeIDvUq7yZk9rrOZyOT%2FDb5BFtaT2r2Tf%2FIN%2FUU4KFV0Nt%2BWup7MnsM36KcSysMDYpvjbghss4Vw7ltMQKkIMGQmPMvp&X-Amz-Signature=041d51f24abd2a02f11f51a5edeee27c9b0b36fb327109090409ff83f5a66739&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX3L3JU4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvy30EVJya0S%2FvwFzMczzAx%2F4JlLzhim0R%2Fk6%2Fnv2hXgIhANuv%2FptdrjOvrC2Temg5pdZ7F6Yeg%2FJj1hrD4VvUpXevKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0MJBE97oaVulTsPMq3AMM8%2BCYQobst%2FuSSeiNmQgtIkC8Fi1s%2B6vUsug5JpqTJteUBtrj2I92N7RfkPznWIA0OT1%2BV1xm4aXWlcfe4m2VtfH632tZhFVQtCTyDdkp1ABGHPLqxdz6Q3599WjKbNBRkwH9q%2FQPKbwOey7VLPIqPJP2w%2B05Skb8lIL9rVIjaxadEhgDWwm518kGUTVt%2F3jOPqz%2FqIFWJJ7vHHanwNxh8ti03X%2FiC7RwYdK6%2Bo8TPaVg4KP4yakTks1COur1imxt%2FfWp1xiGxmzObNQ9M%2BxZHi2GIUzy%2FFEwcJkp1Cvmrb0q6sVcygPrnA7%2BJq19Nu2NF7ymoFJVgY2CSz9yDmdb95a8%2FMBiRX%2ByB1YfWY6aXhnCSt%2B2uEozB1ixz7RxgPCZgiomJ6TcIjsvsdE5ndtNIgB%2BCy76TraXF4nj%2FNrroDsL7kdKPpRve5B2njwc%2BmCUq62C%2Bs8aZQm2LE7VR840SPx3OQ3E98XkyW8RPiKiuEbTK22sr6xqDiZt3R0McVnzmEO%2FnePHk0HFYwwPFU2Eg0%2BanQvbL%2B3%2Btdbe9t%2FHyxUSIS9mNPpiGSga%2Bnbz8QtkHByIvaX%2BGPCg4N8GMU0rVZitk8e%2Bkp8S3wilXy%2BWO6v4UUJGZ575gU8A1DC%2FnJe%2BBjqkASdCtF4mWKDWAN9pH2aFOyPM5%2B2ptOLcjYZo5zwLLPiazROSlN6KHe2L5XcNYBCmypldo46VMH44l8htSbfyJGFQBZd0%2Bx5e23uNx%2F%2F4MxXE0El4PzQVG3v9UY%2By1iwgyeIDvUq7yZk9rrOZyOT%2FDb5BFtaT2r2Tf%2FIN%2FUU4KFV0Nt%2BWup7MnsM36KcSysMDYpvjbghss4Vw7ltMQKkIMGQmPMvp&X-Amz-Signature=a5d4d0c269b59ae204800c8e18ba1ae6bf9fc62fec7b8987e330fa7e71bc640c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
