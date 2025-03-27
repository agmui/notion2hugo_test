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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7SFQ3IM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq3AQQV7xWgDvC7mKT%2Fn3mjQAHYdX%2Bs5oBv9JBOuLCJwIhAKhZJlntCI9k4dIaS41uMJ0l9SbxWBY6A2XdwoClaVkhKv8DCFAQABoMNjM3NDIzMTgzODA1IgwabBGB7rYlfpzsZy4q3AP42FXuzW8Gpkvt4slGiJ1Pk3CNbpBzNdyALm8siCqagYQlKHTsQEVvBCEfpPSrAMOav8S0Uq76JC4Cbp6lr6tFzyAMtvSbdg%2BpeV1ANQQ4KWoUuGVOC2KGFxZy8fKTG5v9nr%2F70ZRslzhrXqqJaU8V%2B5gpfrOuzrL4cg6aChVd%2BtR3Fx3XgcA9CzbeVqdK3e2UU20cagCwTys%2BaPYe2za3I%2BND%2FWb7v7gq9wstinKntN20EL2iA6X1Ivxm4jZapLqzSm705c9%2FNecHBtYVj%2FEDbeFal3FlW9EFbcmnN%2FBFsuy0HlgTG0pU3yAeb06HNC014JCY%2B0%2F3t5TbTTKnvS8M9pR%2BCorQGoUBW%2FQSVvH7WOfNBA3qra1aa1iIbS5qVFHg6WIo8xfissGbsdvao8Ad5fsmx3Fn7f7Y8xABAqXtHTe%2F1Sypc1sVgWPzpDcsPhQ%2FfUeEvtn18oeVxJeZHneZ4e8ekbVB15vz08HbgrfhhbqUJZp7j4VP4vSJDTmsbOnyOYMIq8yFHOLKr4DFtgFz3acyoHiFAhyMa8Myqd6ipyZMY213ItJlJhe6kSkBp0KBojktXjwEGK422giHRvR2RxhpfSxaZctbtNHL4gJPEm4uh3TbYzJd9yghOjCbope%2FBjqkAWXIQcWRoDxmhywwbAyOhLHZ9%2FjYEpyTwlYsiogVwOIsJOuE%2Ftf2mxWuXOE%2BB2tUY0NmXIHM7%2FaBf2gbZRizTIMwQ99cjeCL0WX1w505X%2BL5bW5KewwDZS7ECx%2Bw3UzSh2zYWETds1Ro0%2BFIrCV%2FF9JPwB1IqtYgVk62xg3J%2F0cos5yF0BkCuKBuVdLOHm%2BtFiCVBQMeSjhVhjxJyf4w5GTkc9B5&X-Amz-Signature=a85f5c1a8754c74cf6cb6b02c58ee862a3e1c1649800fcf4104cd316fc9a7dc0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7SFQ3IM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq3AQQV7xWgDvC7mKT%2Fn3mjQAHYdX%2Bs5oBv9JBOuLCJwIhAKhZJlntCI9k4dIaS41uMJ0l9SbxWBY6A2XdwoClaVkhKv8DCFAQABoMNjM3NDIzMTgzODA1IgwabBGB7rYlfpzsZy4q3AP42FXuzW8Gpkvt4slGiJ1Pk3CNbpBzNdyALm8siCqagYQlKHTsQEVvBCEfpPSrAMOav8S0Uq76JC4Cbp6lr6tFzyAMtvSbdg%2BpeV1ANQQ4KWoUuGVOC2KGFxZy8fKTG5v9nr%2F70ZRslzhrXqqJaU8V%2B5gpfrOuzrL4cg6aChVd%2BtR3Fx3XgcA9CzbeVqdK3e2UU20cagCwTys%2BaPYe2za3I%2BND%2FWb7v7gq9wstinKntN20EL2iA6X1Ivxm4jZapLqzSm705c9%2FNecHBtYVj%2FEDbeFal3FlW9EFbcmnN%2FBFsuy0HlgTG0pU3yAeb06HNC014JCY%2B0%2F3t5TbTTKnvS8M9pR%2BCorQGoUBW%2FQSVvH7WOfNBA3qra1aa1iIbS5qVFHg6WIo8xfissGbsdvao8Ad5fsmx3Fn7f7Y8xABAqXtHTe%2F1Sypc1sVgWPzpDcsPhQ%2FfUeEvtn18oeVxJeZHneZ4e8ekbVB15vz08HbgrfhhbqUJZp7j4VP4vSJDTmsbOnyOYMIq8yFHOLKr4DFtgFz3acyoHiFAhyMa8Myqd6ipyZMY213ItJlJhe6kSkBp0KBojktXjwEGK422giHRvR2RxhpfSxaZctbtNHL4gJPEm4uh3TbYzJd9yghOjCbope%2FBjqkAWXIQcWRoDxmhywwbAyOhLHZ9%2FjYEpyTwlYsiogVwOIsJOuE%2Ftf2mxWuXOE%2BB2tUY0NmXIHM7%2FaBf2gbZRizTIMwQ99cjeCL0WX1w505X%2BL5bW5KewwDZS7ECx%2Bw3UzSh2zYWETds1Ro0%2BFIrCV%2FF9JPwB1IqtYgVk62xg3J%2F0cos5yF0BkCuKBuVdLOHm%2BtFiCVBQMeSjhVhjxJyf4w5GTkc9B5&X-Amz-Signature=7a3e81b0aa89340a76d0543f2fe0b7bf4d214ba17a4fd2b0258ec9986ac9d620&X-Amz-SignedHeaders=host&x-id=GetObject)

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
