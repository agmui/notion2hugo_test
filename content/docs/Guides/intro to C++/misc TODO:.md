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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2MUUIJ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0osiU2cZjg%2F2iKWqPVF%2FarB032cD8WnZQ1eqfj0jh4gIhANR6nn2jep0lQI4uIWOrmY4QPgNTYLkAGAa7W68rY1H5Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwOioxCsJxsXh2kEKMq3AOTvw1f89ukCA2q7RqaVSBX82nznpL2mUnGBRvjKspvW7NsbwfgQWqhlcjV3qMxygCnS%2BOK%2FFEiqqHJ9zGuZ4zUyVqCfQ4r%2F72sqlxIaLFTWeKdrfkAcgmdaQcFkSHtKlD3ecFKuK7E0AHcGnZoRP9Ajq6PQCwYmHWaap4qreDjHR3hzKrIjg2OlFXFB9o3zX%2Fjlf2rYwr27ntcZ66r%2FaO7vDG02pM3tPorkb%2B5OH%2BNg4j%2B%2BcUiIucjIM3wKMmPG%2FRZ4u%2BAhEgGAo%2BtUBXdfpnc63flGcX4CU9cUzEbFKevbM91lVPvk2RkqnW4Qub61WOqlnm3aw4nJJZAQYuWyD%2FHyUq1wg9eeE4J4W%2FOC7ToV5G1yrwhnEwQ1lK%2F74CUafL%2BqLZzi2n5hZ6HODmN66w32b3n23dtAzIKh4PjPECvyI7q%2BMa%2BwlNFpu30Uu3UbwnW7v%2FlrSq%2FPJiJaGTOyd3hcD%2Bcxs8v4lAuJThadUWg49len7R92jBecAPSpyGTD%2F0J995CWA5q6bPGlbpryrTWP2drWk6KbY8zz8xlUJyRkpSZMy7ZW9%2Fm0GDhoaK5Mx1jwSgcDJerIa%2BqXEq3%2FAhGxqEYgyjbEON%2FLNDLqyhhMrGEyJZrj%2BMF%2BqepwDCnhanBBjqkAQEKVAi%2Bk4uzY%2F3QEK0oC2wFlOlCmCYiXCMQqB%2FpqSVAF0sM%2B7hd6cVuX%2FVkvrW7BqqUooKFL%2B%2B%2FhTlfyr68VqJZQZXnTVWPPME%2FhWDzMqne9TADTytMLrGHkgUcjQ7basBwycpMR0QtREp1cNO0CHwPXRk4Ft1EiDOFOMR9eooD5D%2Bcwh3hltRvn%2BF0h9AkbmHEbHlq8wfGi761rwlaigdclnWJ&X-Amz-Signature=ca97d1a02ffefcd8ad3483f8c38779aae1ea89ed1511c161da55252b51184a86&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2MUUIJ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0osiU2cZjg%2F2iKWqPVF%2FarB032cD8WnZQ1eqfj0jh4gIhANR6nn2jep0lQI4uIWOrmY4QPgNTYLkAGAa7W68rY1H5Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwOioxCsJxsXh2kEKMq3AOTvw1f89ukCA2q7RqaVSBX82nznpL2mUnGBRvjKspvW7NsbwfgQWqhlcjV3qMxygCnS%2BOK%2FFEiqqHJ9zGuZ4zUyVqCfQ4r%2F72sqlxIaLFTWeKdrfkAcgmdaQcFkSHtKlD3ecFKuK7E0AHcGnZoRP9Ajq6PQCwYmHWaap4qreDjHR3hzKrIjg2OlFXFB9o3zX%2Fjlf2rYwr27ntcZ66r%2FaO7vDG02pM3tPorkb%2B5OH%2BNg4j%2B%2BcUiIucjIM3wKMmPG%2FRZ4u%2BAhEgGAo%2BtUBXdfpnc63flGcX4CU9cUzEbFKevbM91lVPvk2RkqnW4Qub61WOqlnm3aw4nJJZAQYuWyD%2FHyUq1wg9eeE4J4W%2FOC7ToV5G1yrwhnEwQ1lK%2F74CUafL%2BqLZzi2n5hZ6HODmN66w32b3n23dtAzIKh4PjPECvyI7q%2BMa%2BwlNFpu30Uu3UbwnW7v%2FlrSq%2FPJiJaGTOyd3hcD%2Bcxs8v4lAuJThadUWg49len7R92jBecAPSpyGTD%2F0J995CWA5q6bPGlbpryrTWP2drWk6KbY8zz8xlUJyRkpSZMy7ZW9%2Fm0GDhoaK5Mx1jwSgcDJerIa%2BqXEq3%2FAhGxqEYgyjbEON%2FLNDLqyhhMrGEyJZrj%2BMF%2BqepwDCnhanBBjqkAQEKVAi%2Bk4uzY%2F3QEK0oC2wFlOlCmCYiXCMQqB%2FpqSVAF0sM%2B7hd6cVuX%2FVkvrW7BqqUooKFL%2B%2B%2FhTlfyr68VqJZQZXnTVWPPME%2FhWDzMqne9TADTytMLrGHkgUcjQ7basBwycpMR0QtREp1cNO0CHwPXRk4Ft1EiDOFOMR9eooD5D%2Bcwh3hltRvn%2BF0h9AkbmHEbHlq8wfGi761rwlaigdclnWJ&X-Amz-Signature=41270bb1a46e03d1b40c79f2f450cca006ec53ef2e66106a631e3435f1d1d672&X-Amz-SignedHeaders=host&x-id=GetObject)

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
