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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJEW5FUA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDQSzQcTfMirw72%2BUG%2F21lL1U%2FkRbBhj4LsrlsCTVPRiAIhAP%2BzIjK6%2Fz8VbT61%2FQXuSBgWndR7QXiFRIvoW1HLW9TXKv8DCDUQABoMNjM3NDIzMTgzODA1Igy7skXm1U9wsnbTqXQq3AOV3Ap5JlopByf57QgM%2F8p9ripa5HrJrknZ9ZPeIitOdhjvSirx%2FOy9aDhMriiJ7U3NB%2FNqIl4fRJhw3ipvZvKORjPyBXNVTL2NV6CDyXZLwquQuzCpOoKNF5JWc6drfRZZmNKFUisBXsPc%2BRg03Hn79%2FIdnXEnVLJ%2BwPMx%2F0pgxJ0Nwx68tsYdfdv3iyYJXAhvjCF8vQQ89rZcfA9aU8eZviKoZr5Er%2FWO1n7gmihhwnWBDciuuLAocU9gLQ7M1eQIik0Pqx9iZenX%2Fm5t7fTDUN%2BClL%2FJ%2FHoYuPlSkbCryZ6M78H2yYbjUAYqyEXVht9B%2F4Ty3vqm7lcmQh62E8UP4Q0sCmiKHM%2Fh40kMEZgK1GwSr94iV4qEj3k0oV%2Bij3LeeHZjGvlQCKqI9Jcmv4n4s%2BujO05EWg881JfTXahMa6omD559XCvI6zF%2BAl1gocOWiIO6%2BcgzYdyR2HmeeNrP9M4zidrxkDVn6LphwyBvBXCGvXrJoO8oY5e0tqJ%2Bu%2B7t%2F8yKc2mrWc644OGzN17LyoXM%2BPmOo90%2FL7kd%2F0BcGNMTERyL5hAinQLaT3anXJakgjP73Ugi1YfEsNGqfTNCq8qyAgbZW4Ky0%2BTQbGrvxdFQmQQI4XGt%2FHqTxTCrjOzCBjqkAXGjdbfwhqhoNA%2Bw7xHUmi%2B4H1tlE3OZSA6UKwYKZpQImuBy5mBYUUi4gQfmeq9PwSG0nk5zynU3jyWHgAc8d5jCG0%2F%2FOt9%2Fs29qsC%2BEsDXJCzLuYZ33GV8RGBxEy2lePTYvOvflrsuQFa3YAl5PmJcSECGp0c1lfznATsbokoyp960Hda3S5mn9o6uBQQ6UbSDGbYSoXa5wEugfwX3iLaCXANbV&X-Amz-Signature=7199a7713804f108ab0269aedce67fda87e3988ddfdb4ebf719862d9e6b77379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJEW5FUA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDQSzQcTfMirw72%2BUG%2F21lL1U%2FkRbBhj4LsrlsCTVPRiAIhAP%2BzIjK6%2Fz8VbT61%2FQXuSBgWndR7QXiFRIvoW1HLW9TXKv8DCDUQABoMNjM3NDIzMTgzODA1Igy7skXm1U9wsnbTqXQq3AOV3Ap5JlopByf57QgM%2F8p9ripa5HrJrknZ9ZPeIitOdhjvSirx%2FOy9aDhMriiJ7U3NB%2FNqIl4fRJhw3ipvZvKORjPyBXNVTL2NV6CDyXZLwquQuzCpOoKNF5JWc6drfRZZmNKFUisBXsPc%2BRg03Hn79%2FIdnXEnVLJ%2BwPMx%2F0pgxJ0Nwx68tsYdfdv3iyYJXAhvjCF8vQQ89rZcfA9aU8eZviKoZr5Er%2FWO1n7gmihhwnWBDciuuLAocU9gLQ7M1eQIik0Pqx9iZenX%2Fm5t7fTDUN%2BClL%2FJ%2FHoYuPlSkbCryZ6M78H2yYbjUAYqyEXVht9B%2F4Ty3vqm7lcmQh62E8UP4Q0sCmiKHM%2Fh40kMEZgK1GwSr94iV4qEj3k0oV%2Bij3LeeHZjGvlQCKqI9Jcmv4n4s%2BujO05EWg881JfTXahMa6omD559XCvI6zF%2BAl1gocOWiIO6%2BcgzYdyR2HmeeNrP9M4zidrxkDVn6LphwyBvBXCGvXrJoO8oY5e0tqJ%2Bu%2B7t%2F8yKc2mrWc644OGzN17LyoXM%2BPmOo90%2FL7kd%2F0BcGNMTERyL5hAinQLaT3anXJakgjP73Ugi1YfEsNGqfTNCq8qyAgbZW4Ky0%2BTQbGrvxdFQmQQI4XGt%2FHqTxTCrjOzCBjqkAXGjdbfwhqhoNA%2Bw7xHUmi%2B4H1tlE3OZSA6UKwYKZpQImuBy5mBYUUi4gQfmeq9PwSG0nk5zynU3jyWHgAc8d5jCG0%2F%2FOt9%2Fs29qsC%2BEsDXJCzLuYZ33GV8RGBxEy2lePTYvOvflrsuQFa3YAl5PmJcSECGp0c1lfznATsbokoyp960Hda3S5mn9o6uBQQ6UbSDGbYSoXa5wEugfwX3iLaCXANbV&X-Amz-Signature=0806c8bcc431998d566d4fb42aaf98cfbb9830d592db76574d138af3bc3b0aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
