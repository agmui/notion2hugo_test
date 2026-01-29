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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZW6JO6%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8UiWbHHHl1goQycnyyQe2gPqmbjyYSSAY4R%2BBodp6xAiApTP%2BSRZC%2FN3qQ3aYvDVBCwYWWm9o3LTz%2BP48UXG6hTCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM4C4UpQLjHFeSAEFBKtwDX5nKwBypBfDasKcDmzV1g4JLisjB6fmsG%2BV66nNQySmLULlIrr8BxtLEd99DtMXwRfH9c%2F%2FOC8qS7vUh%2F%2B4Ass5vdOb1d0D%2B5TTenYqKmrXKsafepEsRzB72IPvG9MD8iucP%2BXiiuXx%2B06xD8Xf7yalEUTr6o5mzIOkc5aWvXKeiOzgWZJ%2BSMm2RIOnQXQR5tzQnorBMwDuOmwHc9pARtWej5KTlD6zN05Mwyla2iuvXtTJWqNKhKOeIGFd3qK4ua%2BkFcurdCEWUJw6nyoIUIAwVRkFXHdjxO77vRmP7l5J5ItTPqOfUe0im07njrSn3T8V7KltXYtzruNC3tgUNzAGHR2YmyruS5WGOgZaFbe%2FQEcYmc7npUj%2F3kYbltve8q4HVlY6T1rifuGYe8d%2FUT42MiKl%2B9MRDrd40OmwcEIRRdIvDJIGK7kXYqMmRBdsJ2gP3yVix1NG%2FIvx%2BTd7dWT5ErDflUhUWR2H96HAqy6mbBia6AZpv814diuyUWDcYPjvSZO%2BCIPiD6WSdvr7%2Ba8YRTG1dgIZ40PNBUc3mqznlEMt06zgj0YYpoy8geUlWre17J7Q0hCyX8XmhMOuoIxXETu7TI95j9nH0Z32jlZ67vufeFyZ%2FtSnWsmUwhfbqywY6pgElq1HTwTKjRwevILJ4KeJ5DZsEejN1%2FCLET9FxTda1MWofNig1F6JfH1ZLGjJY8cTIp%2F7b%2FvLXZstY3r9i9i%2B69oFxENsdRrRaXuKbIGgptbh%2BPGCOSlEFq0v3kPzSdiOF7L5dv1t7D%2FfKDtoBR%2FKVvjiq9QuXw7At0p%2FFIzkrvnnNbMpVsIY25JWvV7CyMMO60pbaDxBz8NsXLpjWjZwxMfNQ50Dx&X-Amz-Signature=3f375a35a00e4b027a99d55824184d50a38f5db8bcc6a5198a0fff6daaa8e507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZW6JO6%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8UiWbHHHl1goQycnyyQe2gPqmbjyYSSAY4R%2BBodp6xAiApTP%2BSRZC%2FN3qQ3aYvDVBCwYWWm9o3LTz%2BP48UXG6hTCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM4C4UpQLjHFeSAEFBKtwDX5nKwBypBfDasKcDmzV1g4JLisjB6fmsG%2BV66nNQySmLULlIrr8BxtLEd99DtMXwRfH9c%2F%2FOC8qS7vUh%2F%2B4Ass5vdOb1d0D%2B5TTenYqKmrXKsafepEsRzB72IPvG9MD8iucP%2BXiiuXx%2B06xD8Xf7yalEUTr6o5mzIOkc5aWvXKeiOzgWZJ%2BSMm2RIOnQXQR5tzQnorBMwDuOmwHc9pARtWej5KTlD6zN05Mwyla2iuvXtTJWqNKhKOeIGFd3qK4ua%2BkFcurdCEWUJw6nyoIUIAwVRkFXHdjxO77vRmP7l5J5ItTPqOfUe0im07njrSn3T8V7KltXYtzruNC3tgUNzAGHR2YmyruS5WGOgZaFbe%2FQEcYmc7npUj%2F3kYbltve8q4HVlY6T1rifuGYe8d%2FUT42MiKl%2B9MRDrd40OmwcEIRRdIvDJIGK7kXYqMmRBdsJ2gP3yVix1NG%2FIvx%2BTd7dWT5ErDflUhUWR2H96HAqy6mbBia6AZpv814diuyUWDcYPjvSZO%2BCIPiD6WSdvr7%2Ba8YRTG1dgIZ40PNBUc3mqznlEMt06zgj0YYpoy8geUlWre17J7Q0hCyX8XmhMOuoIxXETu7TI95j9nH0Z32jlZ67vufeFyZ%2FtSnWsmUwhfbqywY6pgElq1HTwTKjRwevILJ4KeJ5DZsEejN1%2FCLET9FxTda1MWofNig1F6JfH1ZLGjJY8cTIp%2F7b%2FvLXZstY3r9i9i%2B69oFxENsdRrRaXuKbIGgptbh%2BPGCOSlEFq0v3kPzSdiOF7L5dv1t7D%2FfKDtoBR%2FKVvjiq9QuXw7At0p%2FFIzkrvnnNbMpVsIY25JWvV7CyMMO60pbaDxBz8NsXLpjWjZwxMfNQ50Dx&X-Amz-Signature=70795de9deb48a3adb33f9a2ee5bcd54d1f5ea61a6892f5f8bfca558809cc0b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
