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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVP2OEP%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDK4VHkcknDS3tTYsvZnBx8rpqztbIfGqfvOseTFtc8aQIgLIs2J%2F82ILh3kxBWrD1fM5DI2bqKbyAJPvT9j73FbFcqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHGDQSqgBRVIRpAjCrcA5LWgL4%2FofkkTLThCDM9I2Q3xmLLtvnJVU%2FF5ZYfmaMH05iV5eCdu9h2uHs7bTpIsxxRmUVSImStLfcMlWCWQ27qjES3zDOTbD5EuoIxfRNmTXk%2F1VNwGaVI9SsPc%2FEKjMoLL4DHgKnXUJ5r7sE40h0PMxslEHz%2FXb%2F8ss4FM5SGzEdJDYY8aMZRy%2FrO8xayWmGYawN5zUv06EGeMtvsqqge6yO34dqQSmKnOP0lmQGZp4erMeWGEWPHb7AtyQ5sjvzbBe79ixxVnbFY6F6aLJKsrk4MYB35cqqtFI5Pz0vXstFPqIvkQlmP1aNIcx4KGPEY5c8oBbTlqYIYOZO2TT1aqaeUU27DIeMEMpZ6HM%2FEHUvYfggetTkRaGkAKaEN4tE2JdKg%2Fn8u8xXKqcpCH1U%2BlKgFF2DAs8%2Booj9PAP9Y3Dus82%2FvbjhhiDGPkPOoyayp1I06tmg4Uc2aGzto1784Z1NPlLrtyuPtTnQWQ4zfQAQbWUa5NeNanixkZjWNqnzgf9PR183h03Q26hsX81naCNT%2BL1ASKjZp3t6jfbaj3KO8qgEk9gUeI5QPdYlrPY5omWkEKljSv8ktVTZiz2cqO2zPKUIwDnEi9BYj4H8pNy0inX%2BkjYGsXJTPMPDXw8EGOqUBVJ%2Btb9hr9D38FXAcf3cjkpFkFhvSr9MPlnXCdaR99lMDqVFRjiyrnJClm52LPioO2TJUR%2BlyW5vG1mswcjSSXKqfXe3DhxWE8NePTgJn79pC4Xo7wsAhpUM1aSq4iIi1y7VYXF21%2Ff65%2Brcbp2ZBnPBxi0JsDHckghWTdn829OqJUToUZI7bb7nUEOxWsU3fesgDE5H6uxUAZfUTdvNznW%2FuZYDA&X-Amz-Signature=8ec795218894d0ffab08020c321ab54e4da8cd707fd9f111bf990515f1b08d1a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVP2OEP%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDK4VHkcknDS3tTYsvZnBx8rpqztbIfGqfvOseTFtc8aQIgLIs2J%2F82ILh3kxBWrD1fM5DI2bqKbyAJPvT9j73FbFcqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHGDQSqgBRVIRpAjCrcA5LWgL4%2FofkkTLThCDM9I2Q3xmLLtvnJVU%2FF5ZYfmaMH05iV5eCdu9h2uHs7bTpIsxxRmUVSImStLfcMlWCWQ27qjES3zDOTbD5EuoIxfRNmTXk%2F1VNwGaVI9SsPc%2FEKjMoLL4DHgKnXUJ5r7sE40h0PMxslEHz%2FXb%2F8ss4FM5SGzEdJDYY8aMZRy%2FrO8xayWmGYawN5zUv06EGeMtvsqqge6yO34dqQSmKnOP0lmQGZp4erMeWGEWPHb7AtyQ5sjvzbBe79ixxVnbFY6F6aLJKsrk4MYB35cqqtFI5Pz0vXstFPqIvkQlmP1aNIcx4KGPEY5c8oBbTlqYIYOZO2TT1aqaeUU27DIeMEMpZ6HM%2FEHUvYfggetTkRaGkAKaEN4tE2JdKg%2Fn8u8xXKqcpCH1U%2BlKgFF2DAs8%2Booj9PAP9Y3Dus82%2FvbjhhiDGPkPOoyayp1I06tmg4Uc2aGzto1784Z1NPlLrtyuPtTnQWQ4zfQAQbWUa5NeNanixkZjWNqnzgf9PR183h03Q26hsX81naCNT%2BL1ASKjZp3t6jfbaj3KO8qgEk9gUeI5QPdYlrPY5omWkEKljSv8ktVTZiz2cqO2zPKUIwDnEi9BYj4H8pNy0inX%2BkjYGsXJTPMPDXw8EGOqUBVJ%2Btb9hr9D38FXAcf3cjkpFkFhvSr9MPlnXCdaR99lMDqVFRjiyrnJClm52LPioO2TJUR%2BlyW5vG1mswcjSSXKqfXe3DhxWE8NePTgJn79pC4Xo7wsAhpUM1aSq4iIi1y7VYXF21%2Ff65%2Brcbp2ZBnPBxi0JsDHckghWTdn829OqJUToUZI7bb7nUEOxWsU3fesgDE5H6uxUAZfUTdvNznW%2FuZYDA&X-Amz-Signature=893dbd4fc848a36c4e6785ed9e36888718d601cc56a02342d15b24a81a0faa86&X-Amz-SignedHeaders=host&x-id=GetObject)

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
