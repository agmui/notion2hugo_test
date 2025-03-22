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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4C2355P%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD7POBVYODeP6UqCcb22PzvL6RHpnLcL%2B80%2Ft3C8G%2BGhwIgQjNPPX%2BDKo%2Bk5%2BYa6k8F%2FzvPUPby6cRgUXAde5TAvbUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1%2FiYfZgeL2yN2HiyrcA5C94nWL3%2Bb2PQUfysYhhhzlnv8%2FF%2BxcE0sFb9gdcm%2FSMMNGRjYGGJGp40ePY7GXb7V%2BQ9ssJwsH3Gg%2FV5TAZMlmxKELSN%2Fay4N%2FX57vRK%2BvpjYBubVoeXtvyBL2zAlLZF2KrfF%2FFSJYBZpsv%2FawGWMqx2Ku6%2Fi9cSVUkS0UL1yZYmSHoIyunhihPbuar%2FYw3L4QH0o%2BJjngMEA68gVEBd5jdd9FM1Fkw4sxFDJolMQ%2FPV4%2FVhoCxoS0LbZ9wTPMuOIAc9fl%2ByO2o6aB8rduzVqS%2BF1n1K%2Fms5tIPZm7Pa6C4TJmBmYN%2ByYA0gfzXf9GDoAnBc0MDKkm6a2yPlmbmKhBs%2BaE13SgKwSIe985nOHyA0UfQPo0KMO%2FwkFR4SDrYvfUO1Kvw5ZF1kXm%2Fn2MhBeM0Db7yTiIbUrpYrTP67QgWdW8UrO%2FFnt2EnRoHFA%2F9K3FCNg3u0H%2Bn1WSR1D2giTAH3snHk8eR0oXvmFbP1%2FYN9Z3%2B7K6ydPnaa06sCKblKSkJ%2FmPoHlV%2BW3d93PYMm4YvXTxtw49WWK40vYonJ%2FnD3NQMKACbsgifRkHC1Nm9cBlNRrfjCdE02PzfDO3QQDYS0adwEaMyODlQVS3onHppZOGl694JEBf0MLQMOfs%2Bb4GOqUByS8HCtU3BZJdqsoT6mlRWODWbA9dM%2BZFtRoIDMVRXtDPqdQ2JCkd5wUvUwFJ3%2FI07FMlUVRI4%2FEzZU3Pxstn4ogHDpKvjPPicvfym8Scvkxr82UOxZ%2BXZSheee07uuuKDVcEiXJzhOVCDY3mMmihlv8EmipxhD%2Fara6Wz%2Fev85c8pFyjOQ4YX66eKQcsnspb6Zqtzwjlo0UCQUoj9GZzqR%2FVYzJh&X-Amz-Signature=59ec5a93ea5be3fa9fa1f47cc7f37f68c6aa2bf68884532e2a0b8e645da5e9e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4C2355P%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD7POBVYODeP6UqCcb22PzvL6RHpnLcL%2B80%2Ft3C8G%2BGhwIgQjNPPX%2BDKo%2Bk5%2BYa6k8F%2FzvPUPby6cRgUXAde5TAvbUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1%2FiYfZgeL2yN2HiyrcA5C94nWL3%2Bb2PQUfysYhhhzlnv8%2FF%2BxcE0sFb9gdcm%2FSMMNGRjYGGJGp40ePY7GXb7V%2BQ9ssJwsH3Gg%2FV5TAZMlmxKELSN%2Fay4N%2FX57vRK%2BvpjYBubVoeXtvyBL2zAlLZF2KrfF%2FFSJYBZpsv%2FawGWMqx2Ku6%2Fi9cSVUkS0UL1yZYmSHoIyunhihPbuar%2FYw3L4QH0o%2BJjngMEA68gVEBd5jdd9FM1Fkw4sxFDJolMQ%2FPV4%2FVhoCxoS0LbZ9wTPMuOIAc9fl%2ByO2o6aB8rduzVqS%2BF1n1K%2Fms5tIPZm7Pa6C4TJmBmYN%2ByYA0gfzXf9GDoAnBc0MDKkm6a2yPlmbmKhBs%2BaE13SgKwSIe985nOHyA0UfQPo0KMO%2FwkFR4SDrYvfUO1Kvw5ZF1kXm%2Fn2MhBeM0Db7yTiIbUrpYrTP67QgWdW8UrO%2FFnt2EnRoHFA%2F9K3FCNg3u0H%2Bn1WSR1D2giTAH3snHk8eR0oXvmFbP1%2FYN9Z3%2B7K6ydPnaa06sCKblKSkJ%2FmPoHlV%2BW3d93PYMm4YvXTxtw49WWK40vYonJ%2FnD3NQMKACbsgifRkHC1Nm9cBlNRrfjCdE02PzfDO3QQDYS0adwEaMyODlQVS3onHppZOGl694JEBf0MLQMOfs%2Bb4GOqUByS8HCtU3BZJdqsoT6mlRWODWbA9dM%2BZFtRoIDMVRXtDPqdQ2JCkd5wUvUwFJ3%2FI07FMlUVRI4%2FEzZU3Pxstn4ogHDpKvjPPicvfym8Scvkxr82UOxZ%2BXZSheee07uuuKDVcEiXJzhOVCDY3mMmihlv8EmipxhD%2Fara6Wz%2Fev85c8pFyjOQ4YX66eKQcsnspb6Zqtzwjlo0UCQUoj9GZzqR%2FVYzJh&X-Amz-Signature=0f41a0a1e85ec24cf1beb14091cbd934e2945b057d3c90d2037f740494ceca63&X-Amz-SignedHeaders=host&x-id=GetObject)

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
