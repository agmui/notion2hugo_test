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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5B2XO4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgMxkgp8y2DeICK9e%2FJo1bzdwR4gmpyvlS7EJPA7VW%2BAiEAsuPcgt%2Fylnp6JdgI4qc55nBb6AiypgjFUyiEVt8f3Owq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHU64%2F%2Fbow9arQdQmyrcAyCZPPNYWbX36OUo3hu%2B9bmbViE2y0%2F8D8jLxWDAYRKoFGaaPBf0rGko%2FgrzF8K%2BCFNdFar3i5j1lxgKWIfEIISujXqffse2Z%2Bgscik5%2B6xjO%2FFvDlLoW1KDWAglHZ0tr%2B7kFO8LyDuGOplK%2BAQIE8zK2mJ5%2Bn8NQ2qUQ%2BT1ks4TUj%2FAOahpV8mrJm6t0ZRJ2wP28oAQ3GBY0c%2B2Y64P4uNIyRHykjEw%2FGASV9zc%2BiK4SR4%2Fh0mz58D%2BbVhJIKTOLhoAoJRy%2Bi8E4RvLnEcVonHYI1zp2gsL8g5ii9mYqj18Pbbcd4TCHDQlTKKBqjJOjVVIawBj0f5Ys%2BBVetbg2sqFp17th36TCvXN5yPzcsZd%2FG%2FSmajzK68jIHt4qAZMIeOSRpmSWDo4gMD6UvMTQaKSNdqlC9hy6Sad%2Bx8WVyzkQW2vMF%2FoA3dRxp%2BDSjLdovT0m2V0u1W6gQN%2B7gIloWzqDRnFjt7wnJAas7EZWjVxjlHMQcYhg8YihNrQIFU7DEF5cnNJ%2BvLz8QZonwavcMsvh7ZjU6rqx%2FL6P0%2B%2F3btxWzXNilcZxOCk5K40QxAmqKADnToLewAFXTR0gaE1AWOBYzzxy%2B6Q4kFDcqW0DVRNMrXUjm43ohR72tcaMNKq474GOqUBXqwH6tqaIsZLU%2BsIgeif5YEI1MmHBfly9hllaC9sqPue%2FtWwhhEs3W3JLEFinin9GzKYB%2FCLBYuu4slxluFp1Zudg1izH9NsYizTJi2rS6HkLUVNYKLPP0I%2FPGWI3WChHxubddNj56uVto1HnTm%2Fa06N3qMCxD5TmfDvdLCvKWJZE%2FWf9Mqv%2FkQgOKyNbc4wMNw6y64cVx%2BdLHqnUMm%2BHQrPHb3l&X-Amz-Signature=d95937e7249c738e5351ce68cbda90fde177cd495b433a491e6e36cc7cb0f9f0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5B2XO4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgMxkgp8y2DeICK9e%2FJo1bzdwR4gmpyvlS7EJPA7VW%2BAiEAsuPcgt%2Fylnp6JdgI4qc55nBb6AiypgjFUyiEVt8f3Owq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHU64%2F%2Fbow9arQdQmyrcAyCZPPNYWbX36OUo3hu%2B9bmbViE2y0%2F8D8jLxWDAYRKoFGaaPBf0rGko%2FgrzF8K%2BCFNdFar3i5j1lxgKWIfEIISujXqffse2Z%2Bgscik5%2B6xjO%2FFvDlLoW1KDWAglHZ0tr%2B7kFO8LyDuGOplK%2BAQIE8zK2mJ5%2Bn8NQ2qUQ%2BT1ks4TUj%2FAOahpV8mrJm6t0ZRJ2wP28oAQ3GBY0c%2B2Y64P4uNIyRHykjEw%2FGASV9zc%2BiK4SR4%2Fh0mz58D%2BbVhJIKTOLhoAoJRy%2Bi8E4RvLnEcVonHYI1zp2gsL8g5ii9mYqj18Pbbcd4TCHDQlTKKBqjJOjVVIawBj0f5Ys%2BBVetbg2sqFp17th36TCvXN5yPzcsZd%2FG%2FSmajzK68jIHt4qAZMIeOSRpmSWDo4gMD6UvMTQaKSNdqlC9hy6Sad%2Bx8WVyzkQW2vMF%2FoA3dRxp%2BDSjLdovT0m2V0u1W6gQN%2B7gIloWzqDRnFjt7wnJAas7EZWjVxjlHMQcYhg8YihNrQIFU7DEF5cnNJ%2BvLz8QZonwavcMsvh7ZjU6rqx%2FL6P0%2B%2F3btxWzXNilcZxOCk5K40QxAmqKADnToLewAFXTR0gaE1AWOBYzzxy%2B6Q4kFDcqW0DVRNMrXUjm43ohR72tcaMNKq474GOqUBXqwH6tqaIsZLU%2BsIgeif5YEI1MmHBfly9hllaC9sqPue%2FtWwhhEs3W3JLEFinin9GzKYB%2FCLBYuu4slxluFp1Zudg1izH9NsYizTJi2rS6HkLUVNYKLPP0I%2FPGWI3WChHxubddNj56uVto1HnTm%2Fa06N3qMCxD5TmfDvdLCvKWJZE%2FWf9Mqv%2FkQgOKyNbc4wMNw6y64cVx%2BdLHqnUMm%2BHQrPHb3l&X-Amz-Signature=75e0db8b11f030ead6529b7ee060f2b237500dec8e07405866b56b3426667ebc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
