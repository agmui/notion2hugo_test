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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WIVE6SE%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc6eI9Fk%2BDiW8PkVHYtANIEeTzhkB5DCtj8laFZ1w6LAIhAInT1BA1fZTUYhmkzavqHJ5MStkupiUfylfKgqXW5wIJKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYXv6sHd5AEroMLSEq3AOdXOyYE51HlMylADty0Pyx6i2ntBVYRoYWr2oS6rMU6QStx%2FoXWVTd%2Bk%2BRLNGu4mn6TVigXnpmf7m73VxJarjpiLbOiVWO8nz3aLP5v8MUNrDRwjcKRZej32BFJ7ORdYJaNiOLzozMq09s4WH8jDvifsPYsJC0Eh1RoJc9nYZV%2FjoRlbBEGcQMCJGTGecoTCmBQR0b9bPpIr95lPRWwXIRlFqbSYzbJJol565im%2FuZ8qDtwAWZSecdarNG1emhW2cms1iRpbZVw7GKL4GHtB8pJsRwsCX3za0zdfl9pFzAAD%2BSeBjx%2BuH33b5ljr%2FFPibIMPdxox6C2%2BrtIagoHX0xX7KVrMW4AhHkdS%2BMduQCPpxU8OiK1icNDR%2BDLB5ddF4eltRoWABLNt8uIzl0dhvy2znImh56l6v4BP%2FVd7H3dssB7Zb6wrpXdZoPWI%2F9w8bUWNu0HaNZfVQmyg%2FXFbYesKNL9JwYI4%2F5TaArZqBngHL%2FN8EMC7LsYZpxtEFdLHgO4ShYdg22HXJ7gvfFkbczOzxS4nUvTHM3jpj7YhGOPeBm6uhHSFQzPQxh7cLS0iOEmDacH0cD2XvxSVMcr80PqD5k%2B02rB4xLlo13DAkug4g7ufGNbBkRNKpAXjCvx67BBjqkAREgJCGcuN35fTds40VX4QoxJccoYL%2BM3IdoXprx26U34wAas%2BmaHobbznKHRW%2FMmq9U6EiaJOtrfuLNftFSDK4V6tLAOG5%2B396OIzsHa765l%2B7E88DG5Mw8HRYgJg2%2Fu%2BRLewIvqP7%2F6fJ0k1qsOtDC0a%2BExOEAlLNY%2Bty%2BOZ1lNJ3RDDWyvMbyrAsrTybFp%2FXin5xhLXyOWfoMd9KvnGsuvZjo&X-Amz-Signature=216c0a7d277f91fcd42bd042b02647010049c7110e1d2f5e3b79739e933b695a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WIVE6SE%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc6eI9Fk%2BDiW8PkVHYtANIEeTzhkB5DCtj8laFZ1w6LAIhAInT1BA1fZTUYhmkzavqHJ5MStkupiUfylfKgqXW5wIJKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYXv6sHd5AEroMLSEq3AOdXOyYE51HlMylADty0Pyx6i2ntBVYRoYWr2oS6rMU6QStx%2FoXWVTd%2Bk%2BRLNGu4mn6TVigXnpmf7m73VxJarjpiLbOiVWO8nz3aLP5v8MUNrDRwjcKRZej32BFJ7ORdYJaNiOLzozMq09s4WH8jDvifsPYsJC0Eh1RoJc9nYZV%2FjoRlbBEGcQMCJGTGecoTCmBQR0b9bPpIr95lPRWwXIRlFqbSYzbJJol565im%2FuZ8qDtwAWZSecdarNG1emhW2cms1iRpbZVw7GKL4GHtB8pJsRwsCX3za0zdfl9pFzAAD%2BSeBjx%2BuH33b5ljr%2FFPibIMPdxox6C2%2BrtIagoHX0xX7KVrMW4AhHkdS%2BMduQCPpxU8OiK1icNDR%2BDLB5ddF4eltRoWABLNt8uIzl0dhvy2znImh56l6v4BP%2FVd7H3dssB7Zb6wrpXdZoPWI%2F9w8bUWNu0HaNZfVQmyg%2FXFbYesKNL9JwYI4%2F5TaArZqBngHL%2FN8EMC7LsYZpxtEFdLHgO4ShYdg22HXJ7gvfFkbczOzxS4nUvTHM3jpj7YhGOPeBm6uhHSFQzPQxh7cLS0iOEmDacH0cD2XvxSVMcr80PqD5k%2B02rB4xLlo13DAkug4g7ufGNbBkRNKpAXjCvx67BBjqkAREgJCGcuN35fTds40VX4QoxJccoYL%2BM3IdoXprx26U34wAas%2BmaHobbznKHRW%2FMmq9U6EiaJOtrfuLNftFSDK4V6tLAOG5%2B396OIzsHa765l%2B7E88DG5Mw8HRYgJg2%2Fu%2BRLewIvqP7%2F6fJ0k1qsOtDC0a%2BExOEAlLNY%2Bty%2BOZ1lNJ3RDDWyvMbyrAsrTybFp%2FXin5xhLXyOWfoMd9KvnGsuvZjo&X-Amz-Signature=66eaf59e59895f50cbaf9780ef37296bd3b8d99ebd54929faf863a1e12e68ad1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
