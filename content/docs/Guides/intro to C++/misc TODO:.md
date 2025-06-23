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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6JDCGSX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIC8INPrMyizkeM2ZNKOB8ItI4lEMZRxKgKgYSYEE7Cu4AiBhi8cYO%2FrmRcyz3tmylplbc%2F3q1i7JHEPKOOHwS6OW9SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGskv8Ees7EYqv%2FpeKtwDHjBPOuZDMWrlMpTTi%2FY2R%2ByoPJIkckYkxemah%2B2bQn56utpKEsvfkELvptDwkiD%2Fps8aMunJHVx5x%2Bt8QdFp45tKw3g8nHd9iETT0m8%2BLjGCsMKbXCe6Cugzjj56QFQ2rIiRKYEswr4HhKZ4j5YCMsO1dNrdhSWEtxpTpPmCk6dFUWKCjma5wguP1YFlHzTIwpL0MRvxpTE7IJxKqzVxOw2%2FMQeM4dMr0UxnOc0xWWz6n74XFO0B9xHNwACUH%2FshL%2FzMKHuN6EFXQzKeC%2FR3Jfxsl31YeAjROXb7VZQpig5xgP2M4ZhsGgtz%2FFU6uWFX%2Fvgk4ct0Ad5OsLAhU2kVWRMsqPN3SpYXq7vkIQ%2BP54H1eYN8iy0qGmFJVp6o6fEP9V7MQYF6b7VFCd%2FVYeIfcuhn1lmrrHw52Q9%2Bvq5u%2FHSqZNkGpMuQ2TFuMDU%2FxRrI9W3%2Bf1ghQsUO603kLu57nrWOWPDHbvCbKG4p1vO56LjW3G4xVac4NnE6dWCcgZCG9s%2FXCY18wb36PekcbIZ2s0iG8mOklFhIWR1qZ4CBhAP7zFHXbFPMlPFuZ3zNct7dRouiYJFV%2FeYB13Xn%2F%2FlGIkGJTpOlMuqPMJfWYSeiHGG72Oj8TTe5%2FglDA7Yw8qbiwgY6pgEQnr7KtGKyEl4C4A63mbi13ceWWXG1JWYeanJXVVjq85pvzbFHhFqfb1MTXb5m%2BW8LZvgK3DR34v7varOocNXLdJUdr47aDwmgEhozo7oEzrVqmpHV7f%2Bv7j%2BDiiGwhIoMJMd8DyCSBOnYphJHRTIApzgyk4%2Bc%2Fr93y2A5LN2j4p1dM2dIx0Y37Ai7y76XrT00lMPdMeSEvrU6ghn6qe%2FK3oh%2B5YuR&X-Amz-Signature=c1f755cc6e475bc0dbda230a05be1b60c34bf089838338a29ca8df978491c9e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6JDCGSX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIC8INPrMyizkeM2ZNKOB8ItI4lEMZRxKgKgYSYEE7Cu4AiBhi8cYO%2FrmRcyz3tmylplbc%2F3q1i7JHEPKOOHwS6OW9SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGskv8Ees7EYqv%2FpeKtwDHjBPOuZDMWrlMpTTi%2FY2R%2ByoPJIkckYkxemah%2B2bQn56utpKEsvfkELvptDwkiD%2Fps8aMunJHVx5x%2Bt8QdFp45tKw3g8nHd9iETT0m8%2BLjGCsMKbXCe6Cugzjj56QFQ2rIiRKYEswr4HhKZ4j5YCMsO1dNrdhSWEtxpTpPmCk6dFUWKCjma5wguP1YFlHzTIwpL0MRvxpTE7IJxKqzVxOw2%2FMQeM4dMr0UxnOc0xWWz6n74XFO0B9xHNwACUH%2FshL%2FzMKHuN6EFXQzKeC%2FR3Jfxsl31YeAjROXb7VZQpig5xgP2M4ZhsGgtz%2FFU6uWFX%2Fvgk4ct0Ad5OsLAhU2kVWRMsqPN3SpYXq7vkIQ%2BP54H1eYN8iy0qGmFJVp6o6fEP9V7MQYF6b7VFCd%2FVYeIfcuhn1lmrrHw52Q9%2Bvq5u%2FHSqZNkGpMuQ2TFuMDU%2FxRrI9W3%2Bf1ghQsUO603kLu57nrWOWPDHbvCbKG4p1vO56LjW3G4xVac4NnE6dWCcgZCG9s%2FXCY18wb36PekcbIZ2s0iG8mOklFhIWR1qZ4CBhAP7zFHXbFPMlPFuZ3zNct7dRouiYJFV%2FeYB13Xn%2F%2FlGIkGJTpOlMuqPMJfWYSeiHGG72Oj8TTe5%2FglDA7Yw8qbiwgY6pgEQnr7KtGKyEl4C4A63mbi13ceWWXG1JWYeanJXVVjq85pvzbFHhFqfb1MTXb5m%2BW8LZvgK3DR34v7varOocNXLdJUdr47aDwmgEhozo7oEzrVqmpHV7f%2Bv7j%2BDiiGwhIoMJMd8DyCSBOnYphJHRTIApzgyk4%2Bc%2Fr93y2A5LN2j4p1dM2dIx0Y37Ai7y76XrT00lMPdMeSEvrU6ghn6qe%2FK3oh%2B5YuR&X-Amz-Signature=35235d815641e10c031fdc5f98923ff2f93533612dd157e5801ce5c66ced7aaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
