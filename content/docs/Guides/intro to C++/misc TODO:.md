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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYVMF6Q7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaRzyXh9%2FHblsKD8Yx7b22pJGDswT0aZPYZQE%2FxygROAiEAszNNAPTkxkL6SKL9L5Wjalv1mNsvoAB1S4pIFfH7i5kqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbfOO9NV4e32tnShCrcA4uYfGo33JdaitvrWlJGGEYtNkcYPrr4OMkf%2Br3JWGjtripeWIVOr%2FtTBS0zQ9yO%2FncbGW2%2BmkR1JprkJ4QfXMCH4UgLPaFulC%2FIxdwEkyTTC3tf5Yv7V%2B6bbJf8NS1sVyFgtL%2FwfAzzG%2FEtZUBoBR13ZtWd31GmPR2IL%2F75w5Q32qW%2Bc%2B7om7nbTbynzy1PRFGT9IneI%2Fggrt2j7fN97wS%2BkJLupuUdfDCRyide4zBLk9tNCBWDDqAH263iNN7BrKE%2BhpYmuktUM8FYcSk1o1dVjDG0TB31hP8bWDkZthcpI4t4VxAxv13DJRWkWgru7i1hvkT1yJR7MYqCIgAufc87NyFzU1ZDzsHprB7ZazZlh80FqEDjukVAOkq%2FwXhlhUOYaKazTDaeDRif%2BvA%2FNC27W2C8DA%2BeZ55WR1QyILWwQRcg8emlroQUC81hK6U7Xl5%2FomNwTi9HevXEUvqInQY%2FRDkV43cEHOngoW5yXZf1IVLjfiBtzNWuICI1xIL2RU5tsZ%2BBV2pGPJlbc2twzdYJDMsoz%2FAJ%2BYJB7nQSujml2TV1oE5kPcs0br2v4I90%2BM9qRAt%2FBRXz0hzanHiSrlWrSO0hrpESfUZdTch14gQNRoFdgh90sK7euilnMLWpvcMGOqUBOIhCsvL2kKLcbnH1WyHlnj3gH4iA%2BiiiDGSKDMI6pro7FICVmnnCtKVRXmvpndStkvZwMQKgRXSgMtixZvkwGfnfCyVpo0mc1huc158AhTNLexHLHLKiCWkUcRBU%2FxWXh%2F%2Bz9lk09qBwnTIJ7c1Xk02PtAKTZ6vjKzoEg8HrB4j7wwsfDbjgExIuxRtZhd2gfUSKC9nbePyLIVDH7zknaVVRabRT&X-Amz-Signature=b5b3a4e1292edfd1cdd79d9a035e8aa3f51703f1637ead68ce5e59dce971452e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYVMF6Q7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaRzyXh9%2FHblsKD8Yx7b22pJGDswT0aZPYZQE%2FxygROAiEAszNNAPTkxkL6SKL9L5Wjalv1mNsvoAB1S4pIFfH7i5kqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbfOO9NV4e32tnShCrcA4uYfGo33JdaitvrWlJGGEYtNkcYPrr4OMkf%2Br3JWGjtripeWIVOr%2FtTBS0zQ9yO%2FncbGW2%2BmkR1JprkJ4QfXMCH4UgLPaFulC%2FIxdwEkyTTC3tf5Yv7V%2B6bbJf8NS1sVyFgtL%2FwfAzzG%2FEtZUBoBR13ZtWd31GmPR2IL%2F75w5Q32qW%2Bc%2B7om7nbTbynzy1PRFGT9IneI%2Fggrt2j7fN97wS%2BkJLupuUdfDCRyide4zBLk9tNCBWDDqAH263iNN7BrKE%2BhpYmuktUM8FYcSk1o1dVjDG0TB31hP8bWDkZthcpI4t4VxAxv13DJRWkWgru7i1hvkT1yJR7MYqCIgAufc87NyFzU1ZDzsHprB7ZazZlh80FqEDjukVAOkq%2FwXhlhUOYaKazTDaeDRif%2BvA%2FNC27W2C8DA%2BeZ55WR1QyILWwQRcg8emlroQUC81hK6U7Xl5%2FomNwTi9HevXEUvqInQY%2FRDkV43cEHOngoW5yXZf1IVLjfiBtzNWuICI1xIL2RU5tsZ%2BBV2pGPJlbc2twzdYJDMsoz%2FAJ%2BYJB7nQSujml2TV1oE5kPcs0br2v4I90%2BM9qRAt%2FBRXz0hzanHiSrlWrSO0hrpESfUZdTch14gQNRoFdgh90sK7euilnMLWpvcMGOqUBOIhCsvL2kKLcbnH1WyHlnj3gH4iA%2BiiiDGSKDMI6pro7FICVmnnCtKVRXmvpndStkvZwMQKgRXSgMtixZvkwGfnfCyVpo0mc1huc158AhTNLexHLHLKiCWkUcRBU%2FxWXh%2F%2Bz9lk09qBwnTIJ7c1Xk02PtAKTZ6vjKzoEg8HrB4j7wwsfDbjgExIuxRtZhd2gfUSKC9nbePyLIVDH7zknaVVRabRT&X-Amz-Signature=a791248ffff8d1a2626d6663488480b2e9d3fdbd0bf0e7931462980fc9f66666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
