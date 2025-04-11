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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466643Y5Q7C%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIAC2S1PTgSO4iuMQOAcqWwV5rdp9bI3aEpJM3dGMpP%2FLAiEA0iy2Hx2wFJjQHEvzhya9jmaXMBBwcMxl34Z2dwXYMbUqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHbTt7GQMgGJGAs9ircAyZEShcNJA8oC4aWW7n%2BYLsIOsYr%2FDPqNAWqqEXyXlbDqGqqNIbUMik8Qz8Vpq9eir7ukuG1I0J4kKz7dMCwhjNJbvGIzsaqiJ5g9Af6%2FhJKOlTdbSF7QWMYfLbf%2BDFblWOYIaUZMx9wXFqdLlJDbkyxpwM0eEuZbTfrgFD8Fr1lomXgPtr%2B9NDlm4M2st%2F3ZI19HZttVNXLmCR0G4ZBkMqX8Tv7ntq391D1jfiP7KpFWXq%2FKbps56BF0%2Ff%2BiIDswB6ys4bJ6zt%2FOkUgH6cilS2tM33iNSlLLUSTsFfcifwFM%2B%2FhRZbjwI%2BMAyheU%2BXeMiJHjvVUBsncj3%2B2H82bRld0%2B2c7JxFqw0YKAsXOb5AIgGCNCbsBlzEYrPgb7mNgdSEXlO7agKxdv71Rj6dMnriLNZPg1DJiqgAgW8GRDRUMXMVbISlfc5IfVf62azAty7Wknlnej9TZFZydHBQuw2zAxKDKnkaLOcpV9YmtwLeizNloBJSDlD%2B8snAUrQHQQXBuvNzw2sgUvlxWIVN%2Bi8M0xgIAPmoBJAQGATgGCKP5u2Gs9lEqb0hqxBJAlYKHkE%2FrP5Yd1v2LVNpj3AUCfloArhmOEBdUfQ6G4LOQYCw28B34Sb4S4WlDeI2zMLG25L8GOqUBQy3A7d9nEllGvCs8oJdkesBYBw0UfWVfpviumXtoAD4ngsQwDx2EjJ9w9nnGpfYO%2BQ7IhpPMfxr1HbmMDio8xNpgRFe1HKf00JCoG5XVkxPTWYk14dAvv4cDHJcRpRrt9996ntQcGWqkjF9EcE9WvokZTgNUmMH2UxiMYMXpYOoAePqvtUDqWSB3Ptp9MlmEaSf7Dy%2B7Cnu2Ppssd1AvjTT2kqRF&X-Amz-Signature=00ef2c7a4ca3ccb4d349a607978be854f2abeda43145e9de8b0b7f4abf23861d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466643Y5Q7C%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIAC2S1PTgSO4iuMQOAcqWwV5rdp9bI3aEpJM3dGMpP%2FLAiEA0iy2Hx2wFJjQHEvzhya9jmaXMBBwcMxl34Z2dwXYMbUqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHbTt7GQMgGJGAs9ircAyZEShcNJA8oC4aWW7n%2BYLsIOsYr%2FDPqNAWqqEXyXlbDqGqqNIbUMik8Qz8Vpq9eir7ukuG1I0J4kKz7dMCwhjNJbvGIzsaqiJ5g9Af6%2FhJKOlTdbSF7QWMYfLbf%2BDFblWOYIaUZMx9wXFqdLlJDbkyxpwM0eEuZbTfrgFD8Fr1lomXgPtr%2B9NDlm4M2st%2F3ZI19HZttVNXLmCR0G4ZBkMqX8Tv7ntq391D1jfiP7KpFWXq%2FKbps56BF0%2Ff%2BiIDswB6ys4bJ6zt%2FOkUgH6cilS2tM33iNSlLLUSTsFfcifwFM%2B%2FhRZbjwI%2BMAyheU%2BXeMiJHjvVUBsncj3%2B2H82bRld0%2B2c7JxFqw0YKAsXOb5AIgGCNCbsBlzEYrPgb7mNgdSEXlO7agKxdv71Rj6dMnriLNZPg1DJiqgAgW8GRDRUMXMVbISlfc5IfVf62azAty7Wknlnej9TZFZydHBQuw2zAxKDKnkaLOcpV9YmtwLeizNloBJSDlD%2B8snAUrQHQQXBuvNzw2sgUvlxWIVN%2Bi8M0xgIAPmoBJAQGATgGCKP5u2Gs9lEqb0hqxBJAlYKHkE%2FrP5Yd1v2LVNpj3AUCfloArhmOEBdUfQ6G4LOQYCw28B34Sb4S4WlDeI2zMLG25L8GOqUBQy3A7d9nEllGvCs8oJdkesBYBw0UfWVfpviumXtoAD4ngsQwDx2EjJ9w9nnGpfYO%2BQ7IhpPMfxr1HbmMDio8xNpgRFe1HKf00JCoG5XVkxPTWYk14dAvv4cDHJcRpRrt9996ntQcGWqkjF9EcE9WvokZTgNUmMH2UxiMYMXpYOoAePqvtUDqWSB3Ptp9MlmEaSf7Dy%2B7Cnu2Ppssd1AvjTT2kqRF&X-Amz-Signature=d7aa4f4ed17b0dd4e7c35ca9a80fbe9f242df781fc484de350076aac7ef4feab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
