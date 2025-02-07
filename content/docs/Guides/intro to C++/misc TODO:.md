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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYY3N5WS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC2SZ7psV9o44NT%2F2kqbSTDyeJP%2Fk5zEHXJUTyH2kew0gIgcWGCqaKRHw27OAdSTJPv%2FP5B7ltTdZxOE%2BQfQC7LPG4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFhrzQNnfQl0a5qY3CrcAwGxTHF6GJdwAEzlA6WRsrXqOY6G1BnzDTPel%2FDU9wQXzRl1gqm8D7mCNeXswoZKchWM3wMCuHckUKhKVz%2FWZqkwbMuSx54NhKaDFtwuCHsbBKnvpJ6wNl3IcToZdDSIxJr%2FDEXwHJw9iRADKt62khNX%2BaSVcCMJaNaKoJFOQB5HNK5Wt3bkAetxPA%2F2sCVYSj5TtqkNAH8WSPvqR3XCsgz065e2s1X9DtBlg2ZvUU7Kg0CmUvBlSyNK2AAFJ66XamalbZrM9B9i5%2F6hbDcI3Mctx2B9P9R8chX9I8k9vwRIfF7mJ0C1eGscTG6oBVZtpVqZRSzCtjMozNcoKJDNjKSQqPeRg%2FDhYFx6sAvZ32xH7paUgzYv%2BmqHe9KnlHQP9IMAb2qy3oheaT3O%2BjzSgvqXEksTIn08FFyBgfjHGAE96q%2B0%2B0flGipehw%2FSFwdoA2qPQMDdxhNnXfSyBcjK3zomd0Uaq4izoPzAvvJ%2F%2BfFkwjBZXDljnNVkVY%2FjXqD7QFyM491BbgW3oUmSWy1bH%2BR%2B%2F3CFHs%2FFzZvcQTJbjrt5P26TGcp2SWQSjR2nrXoRQxlwV4As5ES90ryDt2%2FLLPruV2zZvqKgfBS%2FncYxTLL%2FVVKtvdwy2R4bv41BMIP8lr0GOqUBrL7IEROONFWI0m3CHzS3s89wqW131mbpfedECOE3rs7hRe8nYZakz9kW4OozRTTKI6hJQ3wUqZcWu7NTEfmPWlsbCUV2EW0Rf0J6hidX%2FMOYO9S0cY8xHLztBcex9X7c2G8KWh%2Bxf2MO91MA73Uhr1j1cOtYuLka3zvRHMsDjjeaNbNYQPe073v8VaqWhsTsf%2FYv1t%2BhG6guk96en7JJt3qNHkPY&X-Amz-Signature=c38ba30ba51b08dce20dc30d1091c5419a77166433a5b679bbc1dbe7ec2fd588&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYY3N5WS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC2SZ7psV9o44NT%2F2kqbSTDyeJP%2Fk5zEHXJUTyH2kew0gIgcWGCqaKRHw27OAdSTJPv%2FP5B7ltTdZxOE%2BQfQC7LPG4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFhrzQNnfQl0a5qY3CrcAwGxTHF6GJdwAEzlA6WRsrXqOY6G1BnzDTPel%2FDU9wQXzRl1gqm8D7mCNeXswoZKchWM3wMCuHckUKhKVz%2FWZqkwbMuSx54NhKaDFtwuCHsbBKnvpJ6wNl3IcToZdDSIxJr%2FDEXwHJw9iRADKt62khNX%2BaSVcCMJaNaKoJFOQB5HNK5Wt3bkAetxPA%2F2sCVYSj5TtqkNAH8WSPvqR3XCsgz065e2s1X9DtBlg2ZvUU7Kg0CmUvBlSyNK2AAFJ66XamalbZrM9B9i5%2F6hbDcI3Mctx2B9P9R8chX9I8k9vwRIfF7mJ0C1eGscTG6oBVZtpVqZRSzCtjMozNcoKJDNjKSQqPeRg%2FDhYFx6sAvZ32xH7paUgzYv%2BmqHe9KnlHQP9IMAb2qy3oheaT3O%2BjzSgvqXEksTIn08FFyBgfjHGAE96q%2B0%2B0flGipehw%2FSFwdoA2qPQMDdxhNnXfSyBcjK3zomd0Uaq4izoPzAvvJ%2F%2BfFkwjBZXDljnNVkVY%2FjXqD7QFyM491BbgW3oUmSWy1bH%2BR%2B%2F3CFHs%2FFzZvcQTJbjrt5P26TGcp2SWQSjR2nrXoRQxlwV4As5ES90ryDt2%2FLLPruV2zZvqKgfBS%2FncYxTLL%2FVVKtvdwy2R4bv41BMIP8lr0GOqUBrL7IEROONFWI0m3CHzS3s89wqW131mbpfedECOE3rs7hRe8nYZakz9kW4OozRTTKI6hJQ3wUqZcWu7NTEfmPWlsbCUV2EW0Rf0J6hidX%2FMOYO9S0cY8xHLztBcex9X7c2G8KWh%2Bxf2MO91MA73Uhr1j1cOtYuLka3zvRHMsDjjeaNbNYQPe073v8VaqWhsTsf%2FYv1t%2BhG6guk96en7JJt3qNHkPY&X-Amz-Signature=767a8a44f24ca2802b4ccd5b2aa535b2134a5b60d69f4123647de358d73cec05&X-Amz-SignedHeaders=host&x-id=GetObject)

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
