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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISBTSXO%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEnp0xoNSYn%2BlOnmZS2ntgwbJyFkhv%2B1F3IXeeQVD4KAiAHCygTAw0tBU3GNacZTEubEatHBZdwPenQsCcNpTVj4yr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMGQNLuviTnLV2RIWLKtwDf3qE4J6h6r2ExwMCZ4CaOVVnBMgBxZHyVIvnFel27QWU0uR3hy6lTONTRpy76FX8iqpQGasnR3KzoBub1sqXErP5K%2FA2Bq%2BXO3RnTlYefHulGTkj08wkzOPJMYcDyG3akzCodm6Es9tZ3A1LKVTUaRVT7jPZS87Vee4yLPBEEcbrtEZeJDIYbV3VTEDGzg3MKsBvK%2BZEOk7bHOH1l5X68uJ%2Bd7Z2XagY4MaWuKaJ5eWsJX2e%2Fq3VESNcWqNyKBnHyrtUn2o9kjN%2BSbU9khDn%2BQhK%2Fl9I1kt5VtN5WZ5UBOBhmA1d6%2FsudzlhupRFwKlIJfTkh38KFai0Gk%2FYo7LZliOTIKooWfWWJjVbvSW28S6z8MCL65edqnJJjlOepPSNdeZeisc2YkKrlTCJjdsfXlsIwXX4PGmWfXilyNkxeF%2B9gMggbZltMglUUW2SMRCA96rMnaIxqHa1xg%2Bo88SGWW11rtm4rdzyBGAmqzEOGN8bZb1NoVr2jRUtH6HDaDglvsNatR%2Fdvy2Eur1Sp6SUow8G5YhM7lGTdCewEYr7ePup7eHKrsq8EB4uLMYxUFAKfq0qzik%2BbBSY8SrXDRjkklvzLtkCNffwxHlT7MhJ8EVK4nm2DoJHbP97IXYwxam2xwY6pgHrQ2h5ocZ6W4YWqY7oykcpiYUHcEq6w3arvuYKfjqYVVaptGcDCGOsvyiDLOHY8CB%2BSbm97Vhw4iX2Cilw0TYqyTxBf8%2BgfqIFCJtXvlgCAoUoMIv1huvu50Nd0nJ01F4rZaJsnjEtQ2cNGM7Ry4aMXAfoS4RTPdKFciCwmxI1Wq7uffJnIflIWAr6vWU6xvpTRSWn58RZLx%2FLhygX6SnJm%2BcZTHHR&X-Amz-Signature=eeba0efd64a1f34da946c82ccd1882132ab6732365780547d88a44daed328f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISBTSXO%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEnp0xoNSYn%2BlOnmZS2ntgwbJyFkhv%2B1F3IXeeQVD4KAiAHCygTAw0tBU3GNacZTEubEatHBZdwPenQsCcNpTVj4yr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMGQNLuviTnLV2RIWLKtwDf3qE4J6h6r2ExwMCZ4CaOVVnBMgBxZHyVIvnFel27QWU0uR3hy6lTONTRpy76FX8iqpQGasnR3KzoBub1sqXErP5K%2FA2Bq%2BXO3RnTlYefHulGTkj08wkzOPJMYcDyG3akzCodm6Es9tZ3A1LKVTUaRVT7jPZS87Vee4yLPBEEcbrtEZeJDIYbV3VTEDGzg3MKsBvK%2BZEOk7bHOH1l5X68uJ%2Bd7Z2XagY4MaWuKaJ5eWsJX2e%2Fq3VESNcWqNyKBnHyrtUn2o9kjN%2BSbU9khDn%2BQhK%2Fl9I1kt5VtN5WZ5UBOBhmA1d6%2FsudzlhupRFwKlIJfTkh38KFai0Gk%2FYo7LZliOTIKooWfWWJjVbvSW28S6z8MCL65edqnJJjlOepPSNdeZeisc2YkKrlTCJjdsfXlsIwXX4PGmWfXilyNkxeF%2B9gMggbZltMglUUW2SMRCA96rMnaIxqHa1xg%2Bo88SGWW11rtm4rdzyBGAmqzEOGN8bZb1NoVr2jRUtH6HDaDglvsNatR%2Fdvy2Eur1Sp6SUow8G5YhM7lGTdCewEYr7ePup7eHKrsq8EB4uLMYxUFAKfq0qzik%2BbBSY8SrXDRjkklvzLtkCNffwxHlT7MhJ8EVK4nm2DoJHbP97IXYwxam2xwY6pgHrQ2h5ocZ6W4YWqY7oykcpiYUHcEq6w3arvuYKfjqYVVaptGcDCGOsvyiDLOHY8CB%2BSbm97Vhw4iX2Cilw0TYqyTxBf8%2BgfqIFCJtXvlgCAoUoMIv1huvu50Nd0nJ01F4rZaJsnjEtQ2cNGM7Ry4aMXAfoS4RTPdKFciCwmxI1Wq7uffJnIflIWAr6vWU6xvpTRSWn58RZLx%2FLhygX6SnJm%2BcZTHHR&X-Amz-Signature=509d145d6a6caaabe9a5b97ecf248e60d11fb1fea9b2d68e958f949304f232a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
