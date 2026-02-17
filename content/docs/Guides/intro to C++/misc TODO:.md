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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADL3SX7%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDyExwqmELTClWi4HdynMjef%2BfiQxW9bMvzyA5bHRKBvAiEAr4xdsMgzXK2cghq09HmYqHSO3D8v%2BTQNn9BWEYLhO5Iq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJARkzv0qMYrGyZgkCrcA6CgMiQL3b%2FjZxjgWe0gznsg%2BCHbzqRUiddfovinpjZ%2BJTA%2FsJmRS9QVdi1zEFZ4P3xcF4Wlz71sLj2k2RDPS0potBwsLdpLbM0qQToK2cej5gP%2BzrzUn%2BnrO%2FUw3WSrTvKLq4IkfvSqseIOGfsqw2AmkT0SZvWegU0F5AaYZ%2BDezQfcwv1pbp0nLwres9Prs5HhiweXLM%2B52GJ4JtEX9%2BfMfvIxscjBwJaoFIqZ1Xx3klt3QAEVjB%2Bl6B5%2BAAnBNj%2B54qwuv0wp1cJ83tbp1vin%2BOEGx8ZnXsD%2BBDq5sMTCEvnGAy3Gk5CmtTFtYF1G2%2Bnzc9CMzcMuq6hxNh5MtVR6G1kaZZ0uhkCSEV%2BoOcR%2FhFTa%2FT4tCIdSBSaGyTj6QqL%2F82jmldf8NQVCXK4X%2Fa4zL1GICIh6REYealmh6i2RvHg6cfux7Qegcs7pNJ1kzP8Nqq4a7ry14Tdd3g0wNQb1KyHdwO98qjvKoS5z4T3listUUMhaBFrXNwGjM8cm4zjHyrZD9HTFUcszWKGOg8fV%2FR%2Bs30QtXzxY%2F08eGLhEmgnlUDMeiIn%2FkOs675dBwFgelyHJIHjSE%2FFtrc1kD%2BhhBKcJ4bit4K%2B0NTeDc7jjC%2FuAiFMbKs%2FjlfVMMJKYz8wGOqUBKEkz2Wn0Wd9T7uBs4khKU1xiXQcyWKJvQpQgsHTSJI2zNYvIo2pOgT53vHPKADV6I4js1LfoARESdb%2Fcc6n88P7420rGBq87WHm%2B0JzhkygRg%2BffGFstR98Iu0NT%2BmjA7BluXXN8%2FtJAjC6DbpBW4ngEoi%2BeoUvY04DkwVzcQcZYezXUjf8Bi1EdGwMWDAtNODt1ZjBVEk61k2WdMh2WskMw6h3K&X-Amz-Signature=f371a23bc20810c02a71900fbf4bd4b9f5838144138399196767d869110f9b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADL3SX7%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDyExwqmELTClWi4HdynMjef%2BfiQxW9bMvzyA5bHRKBvAiEAr4xdsMgzXK2cghq09HmYqHSO3D8v%2BTQNn9BWEYLhO5Iq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJARkzv0qMYrGyZgkCrcA6CgMiQL3b%2FjZxjgWe0gznsg%2BCHbzqRUiddfovinpjZ%2BJTA%2FsJmRS9QVdi1zEFZ4P3xcF4Wlz71sLj2k2RDPS0potBwsLdpLbM0qQToK2cej5gP%2BzrzUn%2BnrO%2FUw3WSrTvKLq4IkfvSqseIOGfsqw2AmkT0SZvWegU0F5AaYZ%2BDezQfcwv1pbp0nLwres9Prs5HhiweXLM%2B52GJ4JtEX9%2BfMfvIxscjBwJaoFIqZ1Xx3klt3QAEVjB%2Bl6B5%2BAAnBNj%2B54qwuv0wp1cJ83tbp1vin%2BOEGx8ZnXsD%2BBDq5sMTCEvnGAy3Gk5CmtTFtYF1G2%2Bnzc9CMzcMuq6hxNh5MtVR6G1kaZZ0uhkCSEV%2BoOcR%2FhFTa%2FT4tCIdSBSaGyTj6QqL%2F82jmldf8NQVCXK4X%2Fa4zL1GICIh6REYealmh6i2RvHg6cfux7Qegcs7pNJ1kzP8Nqq4a7ry14Tdd3g0wNQb1KyHdwO98qjvKoS5z4T3listUUMhaBFrXNwGjM8cm4zjHyrZD9HTFUcszWKGOg8fV%2FR%2Bs30QtXzxY%2F08eGLhEmgnlUDMeiIn%2FkOs675dBwFgelyHJIHjSE%2FFtrc1kD%2BhhBKcJ4bit4K%2B0NTeDc7jjC%2FuAiFMbKs%2FjlfVMMJKYz8wGOqUBKEkz2Wn0Wd9T7uBs4khKU1xiXQcyWKJvQpQgsHTSJI2zNYvIo2pOgT53vHPKADV6I4js1LfoARESdb%2Fcc6n88P7420rGBq87WHm%2B0JzhkygRg%2BffGFstR98Iu0NT%2BmjA7BluXXN8%2FtJAjC6DbpBW4ngEoi%2BeoUvY04DkwVzcQcZYezXUjf8Bi1EdGwMWDAtNODt1ZjBVEk61k2WdMh2WskMw6h3K&X-Amz-Signature=061da12ae1d5ed8aba89fee71e2ff96e20d05b9a732efb4558aea8b5b243fa4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
