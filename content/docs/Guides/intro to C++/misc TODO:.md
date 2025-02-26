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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67C7KLC%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCkRV%2FE011sAqEzTGuxNddDI8ti5Fg9RhuFxRqUTVXRdwIgZa8v%2BZ%2BGQvQu2UJC0KGAXtj%2Ft5gcnJ%2BEDs6%2BzDxfIMsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOIxkvjsQoPqqDoT7SrcA%2BQVz8iz0iBsCrGWE8HP2r2nPxLBXLYAhlb6JaUEdTLKAMlJHM%2BQyIRjmE9PYluwLDLYltDPIiGBWcsJPayE4e14%2BhVHB9gzfhB0mJFK8znjty1efdckKYINeSTK40A9updu1KwBSL5Q8c1IGXpyDd9SBzEWN%2B55i8YYGN9Sk1HXxxQYbKGVW2%2FxzjStd%2FoqszvBu%2FafADsDKrIZ13Ou%2F%2B9L3yGfogkOHV0W0hPx5jUhZNq7smyIsVXtecsMDDfY5ISbtkX2sFOK1Y4LLsixDUr6%2BISszNTCFvNb8MP9gSQf17AMZG7s%2BRaCerMJ2B134AuUAsWfIJRrXIc3ca0XqwAokADWTj4T0X9apNQp9IQ1FkiRQnQUHVZuVrXFWv08qZkEYi0eiq97SByP0YDVrjd3l663SfM5mZts86SgyTNaP3cUC11zdbok%2FEbP5WcQfubeiWYY8xXm4s89QJYwLvPCDhp861WXe2tjqpFqpMuZagn%2B8kSSd%2FJwOhSg6GNYY9jn7Zibhc3TMT%2Ba%2BpbuZ8wS9YvdX1uM7z4RIfB998VAwjnrnlyVJILq5vOUkCo3cqMdI5FsjG4Z1wF8iLQ1huR0Ck0l9njMlqFrCafCgmoS%2BaafiVUCAcFbcI9PMKDk%2Fb0GOqUBPJrA4N0gDgFyHrvKxTXvqF%2BELjksQHqZnJy12GzpD5BZp7rmrtvE3XlVTfM0CyaCeDKKNtyvV9SZjS0rs6IsSeii7voy1NiwTt1%2Bw6z8698d4W%2B1hioMm2wD2kurjE%2FZLiVlWWLIh71M1YoEObVx0dMjrykYh2wVjHP5ymefUAnyFz%2BLoAf8x4GElK3%2B9VyI%2Bq1UOk8bli09SYwcjtoHGgOUEQtF&X-Amz-Signature=8f36e76ae7f4780c4652fc0bbb4c427c6176ad02727b5de4440c6c67bd1f0966&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67C7KLC%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCkRV%2FE011sAqEzTGuxNddDI8ti5Fg9RhuFxRqUTVXRdwIgZa8v%2BZ%2BGQvQu2UJC0KGAXtj%2Ft5gcnJ%2BEDs6%2BzDxfIMsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOIxkvjsQoPqqDoT7SrcA%2BQVz8iz0iBsCrGWE8HP2r2nPxLBXLYAhlb6JaUEdTLKAMlJHM%2BQyIRjmE9PYluwLDLYltDPIiGBWcsJPayE4e14%2BhVHB9gzfhB0mJFK8znjty1efdckKYINeSTK40A9updu1KwBSL5Q8c1IGXpyDd9SBzEWN%2B55i8YYGN9Sk1HXxxQYbKGVW2%2FxzjStd%2FoqszvBu%2FafADsDKrIZ13Ou%2F%2B9L3yGfogkOHV0W0hPx5jUhZNq7smyIsVXtecsMDDfY5ISbtkX2sFOK1Y4LLsixDUr6%2BISszNTCFvNb8MP9gSQf17AMZG7s%2BRaCerMJ2B134AuUAsWfIJRrXIc3ca0XqwAokADWTj4T0X9apNQp9IQ1FkiRQnQUHVZuVrXFWv08qZkEYi0eiq97SByP0YDVrjd3l663SfM5mZts86SgyTNaP3cUC11zdbok%2FEbP5WcQfubeiWYY8xXm4s89QJYwLvPCDhp861WXe2tjqpFqpMuZagn%2B8kSSd%2FJwOhSg6GNYY9jn7Zibhc3TMT%2Ba%2BpbuZ8wS9YvdX1uM7z4RIfB998VAwjnrnlyVJILq5vOUkCo3cqMdI5FsjG4Z1wF8iLQ1huR0Ck0l9njMlqFrCafCgmoS%2BaafiVUCAcFbcI9PMKDk%2Fb0GOqUBPJrA4N0gDgFyHrvKxTXvqF%2BELjksQHqZnJy12GzpD5BZp7rmrtvE3XlVTfM0CyaCeDKKNtyvV9SZjS0rs6IsSeii7voy1NiwTt1%2Bw6z8698d4W%2B1hioMm2wD2kurjE%2FZLiVlWWLIh71M1YoEObVx0dMjrykYh2wVjHP5ymefUAnyFz%2BLoAf8x4GElK3%2B9VyI%2Bq1UOk8bli09SYwcjtoHGgOUEQtF&X-Amz-Signature=8e54f57f1ac8a4ac769e50509128e6f4f53b0b9707531ea0ede083f03d4ef246&X-Amz-SignedHeaders=host&x-id=GetObject)

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
