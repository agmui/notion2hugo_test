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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOMFMX4T%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAbAjshosbDIkTQUFvl9ZJQya6KqzgfNCBlCMvxGkMmgIgLTIjb3aIpknLyvz427%2ByBsD1SLMD426GdSUZ%2BcyWbSoq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBVoK0sXEqJxcn9C2yrcA2DTtYp0ipXTuOJE%2Bx4oHxR8n%2FfoSNkNnUDxrRIdXOXyeRgUwI8SVFDz%2BdPXuDJHxhFwGApe5gfFY1fjvUnxY0giy9rIqg13kiXfBS6iEdJA3oB%2Fw1J5xVTUWDGsvNHLfm%2FmAeX%2FJjIsfpxFkq%2F315NEqKu9PZbYH5ae1T3I1xARW1NY9su%2BOCZgXmBvRrVUdvelsRu8PFEWSBsJ3WvrVkbjjnZLkrrdTRdNbkkUmd72w3A8d1hawW1P1LLcgu0NqJb%2FeYz9ghGvBrypMBP7sjUeJAPfuzQYKrCp9j3eGhWqzKNS%2FOJFz4BB9Ey4xpQCaxJoFBVLeynlW4LyYGj78gOXYTsD4T9emV5tbec93TIgYQpe8CLcKVKq27tCBDp%2FGPCygKdW15JwIp77GYXfLBhIy6eY%2FD4jL8oLe%2FU3ACY%2FWj%2BTRJfyIrrguOsZIAIthdkyXnXjNychTTGC%2BHRTXO45jUSf9aymm3nc%2BfJgxuwwx7h%2FCVoT0qMH3u5tW5wnZuGZRYBtrqKAZUgNuoZaZ0y0dBGR8IbTIwC0%2BrrGfVyh%2FaG2%2FaMkSPPDnRxSkN%2Bjs4YikyIqizo7xXl34tfr05wSvqH04ndBo0rQM1a0RVc%2B1UNj82ZgsobZRCgiMKy3hcAGOqUBhPGZiQpJLQ2Y%2FBMGcbAiB5%2BcMB7C76mcvBCy7yYJvB%2BI4aC%2B6p2zf4rJMieXnTrb%2F6KGnhDDo6yq6yTPdbsT%2B0yZEKMycbvJC16j90o1FMajYAwuZ3sxFLgtq1ZdK9bxdXAy9rdH%2BYwLIOrnFIDS1%2FYjELcQWRurVSkdaR%2BoYgDn%2F3ZOQz30XVo3iThn4teu8TbkImUo4W%2Fd14%2BIcaA3qSX574bw&X-Amz-Signature=2c7d816d51751aeb99c275aa4a1f02dc19a2860b25f7889336d3b39e3a0b2d62&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOMFMX4T%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAbAjshosbDIkTQUFvl9ZJQya6KqzgfNCBlCMvxGkMmgIgLTIjb3aIpknLyvz427%2ByBsD1SLMD426GdSUZ%2BcyWbSoq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBVoK0sXEqJxcn9C2yrcA2DTtYp0ipXTuOJE%2Bx4oHxR8n%2FfoSNkNnUDxrRIdXOXyeRgUwI8SVFDz%2BdPXuDJHxhFwGApe5gfFY1fjvUnxY0giy9rIqg13kiXfBS6iEdJA3oB%2Fw1J5xVTUWDGsvNHLfm%2FmAeX%2FJjIsfpxFkq%2F315NEqKu9PZbYH5ae1T3I1xARW1NY9su%2BOCZgXmBvRrVUdvelsRu8PFEWSBsJ3WvrVkbjjnZLkrrdTRdNbkkUmd72w3A8d1hawW1P1LLcgu0NqJb%2FeYz9ghGvBrypMBP7sjUeJAPfuzQYKrCp9j3eGhWqzKNS%2FOJFz4BB9Ey4xpQCaxJoFBVLeynlW4LyYGj78gOXYTsD4T9emV5tbec93TIgYQpe8CLcKVKq27tCBDp%2FGPCygKdW15JwIp77GYXfLBhIy6eY%2FD4jL8oLe%2FU3ACY%2FWj%2BTRJfyIrrguOsZIAIthdkyXnXjNychTTGC%2BHRTXO45jUSf9aymm3nc%2BfJgxuwwx7h%2FCVoT0qMH3u5tW5wnZuGZRYBtrqKAZUgNuoZaZ0y0dBGR8IbTIwC0%2BrrGfVyh%2FaG2%2FaMkSPPDnRxSkN%2Bjs4YikyIqizo7xXl34tfr05wSvqH04ndBo0rQM1a0RVc%2B1UNj82ZgsobZRCgiMKy3hcAGOqUBhPGZiQpJLQ2Y%2FBMGcbAiB5%2BcMB7C76mcvBCy7yYJvB%2BI4aC%2B6p2zf4rJMieXnTrb%2F6KGnhDDo6yq6yTPdbsT%2B0yZEKMycbvJC16j90o1FMajYAwuZ3sxFLgtq1ZdK9bxdXAy9rdH%2BYwLIOrnFIDS1%2FYjELcQWRurVSkdaR%2BoYgDn%2F3ZOQz30XVo3iThn4teu8TbkImUo4W%2Fd14%2BIcaA3qSX574bw&X-Amz-Signature=daedbc663015105375a97cf9c4e2d400146dd78e3c5e7912944a475a0fe1aafc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
