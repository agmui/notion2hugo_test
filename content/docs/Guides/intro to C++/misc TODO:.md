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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MVWQPMS%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJKmoAX5BJhjLic3AVzOzEYwYGXVJHtPVAemkedg7QcAiEAjjzYP5WFJc%2BuWH4i7GHDFDW0ed38PTILwhgZNZWl4gQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKexAE7SsY%2Fvvp%2B%2BfircA17apVWMY3mTUE%2BB0Bi9kFUc5TtjvFX0Ub7RQjOhh%2F9B4wzgGgIhxDKcCJG%2FDAFP1ZwlV%2BeBm%2FEHW0Veb5phMZDrguLbkJicuqitw7Z9Bq4OpHc2lUG7m14arFVhRF4oHK96UoMowgajOv7jgX9wlCJRCPv9EsKoIlRl2w30K8yKwuA9z1dv%2FQf9jSWzgErum3U%2F5I2pn1QQGqi2EYhKiIKx2KwJNaClYEpI%2F7OKzbToCW1wZ5Nv7K7DWTFf3828%2BIVrp%2F0cQCqZf7il%2BwMORvXlaXB3fV04rDXtpX95S4wjBcKIKJzdFB7MbzlZbSlz02s2Yf5%2FIoI7XQ45IMTxWB11Sf4Lj7bQbmEjp5Ld9ycuiKW7J68gITqmTjvGV1QljCArmrdII2mRI8MBs7gJ%2FgdG5fSzD8qtSqlV4YYjTpWoOOuEhIAiSpRfUb5WUfuj7EpoQE2KTxCnEqvoGZkmgL%2Fae%2F3tkclgyUWwjjaVYmB42ItgekABecbQ4fjFETr3jrF7ad6Y3aE7NUL5DrFhOe26LOSIoNgOmXwOT2y%2BH5Tp3gXBfT9uayVfEtruK2AvajyzLRljTcNNz2nKb5UJD6%2BmJsYFvgj7D63xIbl0FNGDkF1k93kl3%2FnS%2BjcmMJTqucMGOqUB%2BHbFLhzk%2ByFGKZ2ZOnBW2cFbLXU7sUc8gDwAbM5%2FLo3Hh0xbcs6uZFoFwKu%2Fll9ezW1iy8dNZ5X1sVZXpTdrqcZrR6ZkJ5G5PBVpXacAtNPCajMFkYb%2FT2VfcIRO5BUXixnskZkztLFeb%2FYVVGFir%2F4g9UVZ2s7Bmce1tGR69e3KG6PrbThru1La13m9m8Gf00u%2BFlxt86dGsnbWK35JxoBvDOpX&X-Amz-Signature=c8486ab435eb190c87d8371ae63742e8ba247988bdeace9ea1f993216505a77b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MVWQPMS%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJKmoAX5BJhjLic3AVzOzEYwYGXVJHtPVAemkedg7QcAiEAjjzYP5WFJc%2BuWH4i7GHDFDW0ed38PTILwhgZNZWl4gQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKexAE7SsY%2Fvvp%2B%2BfircA17apVWMY3mTUE%2BB0Bi9kFUc5TtjvFX0Ub7RQjOhh%2F9B4wzgGgIhxDKcCJG%2FDAFP1ZwlV%2BeBm%2FEHW0Veb5phMZDrguLbkJicuqitw7Z9Bq4OpHc2lUG7m14arFVhRF4oHK96UoMowgajOv7jgX9wlCJRCPv9EsKoIlRl2w30K8yKwuA9z1dv%2FQf9jSWzgErum3U%2F5I2pn1QQGqi2EYhKiIKx2KwJNaClYEpI%2F7OKzbToCW1wZ5Nv7K7DWTFf3828%2BIVrp%2F0cQCqZf7il%2BwMORvXlaXB3fV04rDXtpX95S4wjBcKIKJzdFB7MbzlZbSlz02s2Yf5%2FIoI7XQ45IMTxWB11Sf4Lj7bQbmEjp5Ld9ycuiKW7J68gITqmTjvGV1QljCArmrdII2mRI8MBs7gJ%2FgdG5fSzD8qtSqlV4YYjTpWoOOuEhIAiSpRfUb5WUfuj7EpoQE2KTxCnEqvoGZkmgL%2Fae%2F3tkclgyUWwjjaVYmB42ItgekABecbQ4fjFETr3jrF7ad6Y3aE7NUL5DrFhOe26LOSIoNgOmXwOT2y%2BH5Tp3gXBfT9uayVfEtruK2AvajyzLRljTcNNz2nKb5UJD6%2BmJsYFvgj7D63xIbl0FNGDkF1k93kl3%2FnS%2BjcmMJTqucMGOqUB%2BHbFLhzk%2ByFGKZ2ZOnBW2cFbLXU7sUc8gDwAbM5%2FLo3Hh0xbcs6uZFoFwKu%2Fll9ezW1iy8dNZ5X1sVZXpTdrqcZrR6ZkJ5G5PBVpXacAtNPCajMFkYb%2FT2VfcIRO5BUXixnskZkztLFeb%2FYVVGFir%2F4g9UVZ2s7Bmce1tGR69e3KG6PrbThru1La13m9m8Gf00u%2BFlxt86dGsnbWK35JxoBvDOpX&X-Amz-Signature=baaff64ea3568bd4b5a60207aa16b26adb2ec02d4089eb1385811a15cdea9af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
