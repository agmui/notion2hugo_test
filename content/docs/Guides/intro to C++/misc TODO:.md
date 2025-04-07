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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXEEBWXJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL4lxbyXWiTaKqQSnDCjgYXWeuDmAY9YkXUe1aXlguOAIgSJCP%2BUb6upxoM%2FsXwOf1sToBR%2FfjQkMTl3DsLCpCtLkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGgevUYkg6jRbeSCnircAwpJnoEWLA%2BCBxCSuv9tHIFpaV2udj%2BHnLQLoPApy1bZ%2FzAB%2B%2FR9FNNP2%2BYIVocfSq%2FwO7lSptFz23wEGDURNEn8jqs3pbVX2%2BY1x1WIJKPCopqMpjVywki8rZfzxN9J1A2IBZSMOOQkta6OGaJ6V1Q9BYrW%2B6Isg8Bt0Ld7sPB1TLp0nu9yOMqxIw92%2BX2U9QFm%2BBbS895I6fWy6GyD5tlPpH6yAzztTDcHrf0uNv6iKoJUuAp5pMNIkaC2KI%2FFT7BxwuKENIv06Q6uipZPnPjw1TqnDLH%2FWaG0W%2BwcGsxSHO6KBy0y%2FDIll%2FeHj5NSke0Zdr%2BSJsf34ENQimHF6K5vOYNN3AzhwqU6NB0hXPK1evaGQk3B%2F2XJtLbUdNTwgk5aOybRfs6kHk7mEQ0MuS9F%2F7odh0kpjcYvqSs656o%2FSMqeFz8AudLt%2BFmnY3E4ZP2mNLzBuR3D77r3YWNW66E0wi309rxNG3Zh7MCalwEWB3ShM9aWwsJs27gRkk9Ml0Lj5%2F7kwtq6vl5%2BK5l8RjJaco%2F%2Ba7jOQ9TaQl3Gah5JAVMX0WtZzoN5C3XvCul9t0ez9btw9CJIyQ5ThJpCGpYpzMuIAJjSxtmcG5Wzw2Lvj2HMsCeaABusqgqVML%2Bf0b8GOqUBnKg8TR7zgVXh4dqn328yDOTRITmxviXRoXtVAyqAU5Z3G7dhU2dOQDkgcSIVNaZFErNLk%2FmghdhmTDOpJxFl0Ll%2BdIBN6DOGNG3D13HUoc4PZfnxYqYDuylbyOcRGI8U5l7qlDz%2BvN7xKtghKt6IrEcB%2B4%2FHkO0g9Gdek7Nm45Jmrf6IKS6WRH5904VT%2B2zjjjrPFmZNBlzEMjkfiYmqwV5LDORI&X-Amz-Signature=79aef38c926e20374c918355356e7cd01ff280a98b7e3329f45d651e26686243&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXEEBWXJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL4lxbyXWiTaKqQSnDCjgYXWeuDmAY9YkXUe1aXlguOAIgSJCP%2BUb6upxoM%2FsXwOf1sToBR%2FfjQkMTl3DsLCpCtLkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGgevUYkg6jRbeSCnircAwpJnoEWLA%2BCBxCSuv9tHIFpaV2udj%2BHnLQLoPApy1bZ%2FzAB%2B%2FR9FNNP2%2BYIVocfSq%2FwO7lSptFz23wEGDURNEn8jqs3pbVX2%2BY1x1WIJKPCopqMpjVywki8rZfzxN9J1A2IBZSMOOQkta6OGaJ6V1Q9BYrW%2B6Isg8Bt0Ld7sPB1TLp0nu9yOMqxIw92%2BX2U9QFm%2BBbS895I6fWy6GyD5tlPpH6yAzztTDcHrf0uNv6iKoJUuAp5pMNIkaC2KI%2FFT7BxwuKENIv06Q6uipZPnPjw1TqnDLH%2FWaG0W%2BwcGsxSHO6KBy0y%2FDIll%2FeHj5NSke0Zdr%2BSJsf34ENQimHF6K5vOYNN3AzhwqU6NB0hXPK1evaGQk3B%2F2XJtLbUdNTwgk5aOybRfs6kHk7mEQ0MuS9F%2F7odh0kpjcYvqSs656o%2FSMqeFz8AudLt%2BFmnY3E4ZP2mNLzBuR3D77r3YWNW66E0wi309rxNG3Zh7MCalwEWB3ShM9aWwsJs27gRkk9Ml0Lj5%2F7kwtq6vl5%2BK5l8RjJaco%2F%2Ba7jOQ9TaQl3Gah5JAVMX0WtZzoN5C3XvCul9t0ez9btw9CJIyQ5ThJpCGpYpzMuIAJjSxtmcG5Wzw2Lvj2HMsCeaABusqgqVML%2Bf0b8GOqUBnKg8TR7zgVXh4dqn328yDOTRITmxviXRoXtVAyqAU5Z3G7dhU2dOQDkgcSIVNaZFErNLk%2FmghdhmTDOpJxFl0Ll%2BdIBN6DOGNG3D13HUoc4PZfnxYqYDuylbyOcRGI8U5l7qlDz%2BvN7xKtghKt6IrEcB%2B4%2FHkO0g9Gdek7Nm45Jmrf6IKS6WRH5904VT%2B2zjjjrPFmZNBlzEMjkfiYmqwV5LDORI&X-Amz-Signature=e5e7fc85c13b21e411b1b831259296a46b9370c322fa2a4004341fef3561b0df&X-Amz-SignedHeaders=host&x-id=GetObject)

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
