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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7GYWJRP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIDwEpXOUoZOyAQosfQCSNMSLV8D0oCc2GDkOjvkQqO3rAiBInvt31vTczf2l3IGSN82fhLlhQq%2BhVQQ%2F2KWjo%2F%2FUGyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM1xheT5HS0VJtTt%2ByKtwDyNBpKoqQUeuJzrGZ3gDg%2FpCaOzzihdEi9yET3CW%2Bi1Fvi9KhvRa7zAlcEBJQgfHB3mrQqmOO%2BSowAZkGsPDbjGMKhsazFu6vO1aVVwHuUTpspBZiVtgGqtfDPf6VtUtwrXHcbibfScrtqJbDidYNd7GQlQxegNIkdcJaIaLsJ2%2Fg2ww8qAfZuEOb2W3pR9LS1FuW1LON1Cr2c%2BwydChyj4TGXMs2De%2FjVIV6hg6e7HssFAXI1LcOIePga23%2F0T5KlY17h9BQd62QmfnQi%2F%2FRo%2Bd6u39r5lN7gVz8WEopHwhEEb7jyWOVQCZtfsIarGZ9f%2B%2FvHSM5ftr%2FfuJnvluPmCI5QUUX8XEy36EsZC4znNpxTaaztJvIl1AqYDD84SNcBrFIP0XxmFN%2Ba6eiYqVIfiT4kxGnFpN%2FNftoiO4RpdBXr1jSGaUJ3o37cR0drMR%2BHyHDmEf4diS55KiNp52MFFsPa9mPTf1PeVfod8L%2BJQc1QRF47teo1HUDba9ROUH3XQNp9WGGZwWzoMSP9XykwkPPLrhqxJ2QMxqrN4M0vz0cIEGltYMnh1B6jC4BLbTPc8sub2Ts7fjfkrIIK1MIP9gxfrJ4o0mOM6ILQtf3iFv6ddGLSVV9AhN5oeAwxqzHxAY6pgH4UiJmwSN75IXG3hSnpK3u1gSW5zyr0C7cQzPodnQ5VsGU8GyQeGovsFt8EZbk%2BNn2wzSreWZNurPD0zoRRvaFAPJQN5PPG1%2FU5Z784GaOIVzSvu9u9anXtcJvTBVDesDE6Um7w8Iub%2BE%2FXnj0FTWu%2ByA%2BhNB5eFBH2Vg4MKTLmEaBfEiSGAxzRWVWyNUdTfWtCGH%2BN8XajijfHiXxJEsKk54JNcA%2B&X-Amz-Signature=48958d143f9f069a229567131cee504ea06ae85368dc991fce9eb40d8ca5970c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7GYWJRP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIDwEpXOUoZOyAQosfQCSNMSLV8D0oCc2GDkOjvkQqO3rAiBInvt31vTczf2l3IGSN82fhLlhQq%2BhVQQ%2F2KWjo%2F%2FUGyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM1xheT5HS0VJtTt%2ByKtwDyNBpKoqQUeuJzrGZ3gDg%2FpCaOzzihdEi9yET3CW%2Bi1Fvi9KhvRa7zAlcEBJQgfHB3mrQqmOO%2BSowAZkGsPDbjGMKhsazFu6vO1aVVwHuUTpspBZiVtgGqtfDPf6VtUtwrXHcbibfScrtqJbDidYNd7GQlQxegNIkdcJaIaLsJ2%2Fg2ww8qAfZuEOb2W3pR9LS1FuW1LON1Cr2c%2BwydChyj4TGXMs2De%2FjVIV6hg6e7HssFAXI1LcOIePga23%2F0T5KlY17h9BQd62QmfnQi%2F%2FRo%2Bd6u39r5lN7gVz8WEopHwhEEb7jyWOVQCZtfsIarGZ9f%2B%2FvHSM5ftr%2FfuJnvluPmCI5QUUX8XEy36EsZC4znNpxTaaztJvIl1AqYDD84SNcBrFIP0XxmFN%2Ba6eiYqVIfiT4kxGnFpN%2FNftoiO4RpdBXr1jSGaUJ3o37cR0drMR%2BHyHDmEf4diS55KiNp52MFFsPa9mPTf1PeVfod8L%2BJQc1QRF47teo1HUDba9ROUH3XQNp9WGGZwWzoMSP9XykwkPPLrhqxJ2QMxqrN4M0vz0cIEGltYMnh1B6jC4BLbTPc8sub2Ts7fjfkrIIK1MIP9gxfrJ4o0mOM6ILQtf3iFv6ddGLSVV9AhN5oeAwxqzHxAY6pgH4UiJmwSN75IXG3hSnpK3u1gSW5zyr0C7cQzPodnQ5VsGU8GyQeGovsFt8EZbk%2BNn2wzSreWZNurPD0zoRRvaFAPJQN5PPG1%2FU5Z784GaOIVzSvu9u9anXtcJvTBVDesDE6Um7w8Iub%2BE%2FXnj0FTWu%2ByA%2BhNB5eFBH2Vg4MKTLmEaBfEiSGAxzRWVWyNUdTfWtCGH%2BN8XajijfHiXxJEsKk54JNcA%2B&X-Amz-Signature=71ca14652d0e3321ca4061048eddfd2c02f7ea90c1ce3d32a2b5a974102a8cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
