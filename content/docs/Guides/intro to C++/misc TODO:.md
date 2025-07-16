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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466754O5JJ2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGonDrIuNfOGp7dMynZ6NhQl%2Fxhps0s8bid%2BGdSSmlbnAiEApoMuCduL%2FGd7adZlOpwCHpRoWs9PnfRTeehCHQU2bhEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAtOqCRNnHZ7ZFQndSrcA26en4JnHDoSULM7idXW%2FJNvkHpFzXTiEDqli82AwSnCOtH%2FygOzyG%2F%2B6KebIkicVH5YToHTYFnzXBeZsXUbDF6xM0MerZe5xlzIiDeGe9spY67Pbbq0alopCSzY%2BsMPYHFjC7tLxet%2BGmLLvgB1OqPNEOLs7ZxqRyiIJFN2jTGHb33qeftTtfvfIfA8xSdQKGK4Sy5VCEfWWJmxrf%2FQpt4Mo%2BsvSA0QRNV9AkEZizZmyk7xENSV64qCTCI3SZDHqUcPz5n7zOf%2F7PNsjIZg6eLYyvCIVaGdZ2cYVWStr4GhiQslq0LhOnfR%2Fk5JDqHfpTQVqsPkdfhmiHb4l3WoDvVAhSsH4tPJijaDOYTAjOgY6BbJ%2FQNlzWTvHjMhrcoZknA0r%2BbJsHEIfr4SqTmW22TJQeIF6SunE0VXFyufEuSjeLjLriukJGmsgTAwmplnrTtfsSxIlhI0J9GoXxU5lHT0zA6TqCKGa88I8UI3XJavenUV62HXkmBjRAxqw6Z9wV%2FYvFVz68OXl9IT423cvI6zPja5AVkvtbYOhfxyOnIZwOsBKUyRtiW4eNZVaW8fsz%2BZStowmnyseD2g%2BZ26A8M43WJdZb1bhDOfn66R%2BdCUtXEkko%2FyW0kzTrSVMKiT3sMGOqUBlhxef1vt9v0Fctns0%2FBNSPsoSs%2FXrd7qoEAaXh4XHefnJi0ZVbLZmijPC%2FlB0DfYleVmy3J43vSQsW%2F56516JEETavmwQ54tR89wbSx4mtmoXbcl8Yc%2BZ2djb%2FeNLrtqvY5yDaHERDK%2Fo%2B5OTveXD0nV6TAOsEbe9fRi%2FU6V2RkN0FUPnUOcZqM2hxob%2F12I86oU9lm9EYDfUu9oXTX2%2F69Q%2FAdN&X-Amz-Signature=5c50331ba99493d8df18e879f6bea55aee8409202652a8520ff52d2808e73ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466754O5JJ2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGonDrIuNfOGp7dMynZ6NhQl%2Fxhps0s8bid%2BGdSSmlbnAiEApoMuCduL%2FGd7adZlOpwCHpRoWs9PnfRTeehCHQU2bhEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAtOqCRNnHZ7ZFQndSrcA26en4JnHDoSULM7idXW%2FJNvkHpFzXTiEDqli82AwSnCOtH%2FygOzyG%2F%2B6KebIkicVH5YToHTYFnzXBeZsXUbDF6xM0MerZe5xlzIiDeGe9spY67Pbbq0alopCSzY%2BsMPYHFjC7tLxet%2BGmLLvgB1OqPNEOLs7ZxqRyiIJFN2jTGHb33qeftTtfvfIfA8xSdQKGK4Sy5VCEfWWJmxrf%2FQpt4Mo%2BsvSA0QRNV9AkEZizZmyk7xENSV64qCTCI3SZDHqUcPz5n7zOf%2F7PNsjIZg6eLYyvCIVaGdZ2cYVWStr4GhiQslq0LhOnfR%2Fk5JDqHfpTQVqsPkdfhmiHb4l3WoDvVAhSsH4tPJijaDOYTAjOgY6BbJ%2FQNlzWTvHjMhrcoZknA0r%2BbJsHEIfr4SqTmW22TJQeIF6SunE0VXFyufEuSjeLjLriukJGmsgTAwmplnrTtfsSxIlhI0J9GoXxU5lHT0zA6TqCKGa88I8UI3XJavenUV62HXkmBjRAxqw6Z9wV%2FYvFVz68OXl9IT423cvI6zPja5AVkvtbYOhfxyOnIZwOsBKUyRtiW4eNZVaW8fsz%2BZStowmnyseD2g%2BZ26A8M43WJdZb1bhDOfn66R%2BdCUtXEkko%2FyW0kzTrSVMKiT3sMGOqUBlhxef1vt9v0Fctns0%2FBNSPsoSs%2FXrd7qoEAaXh4XHefnJi0ZVbLZmijPC%2FlB0DfYleVmy3J43vSQsW%2F56516JEETavmwQ54tR89wbSx4mtmoXbcl8Yc%2BZ2djb%2FeNLrtqvY5yDaHERDK%2Fo%2B5OTveXD0nV6TAOsEbe9fRi%2FU6V2RkN0FUPnUOcZqM2hxob%2F12I86oU9lm9EYDfUu9oXTX2%2F69Q%2FAdN&X-Amz-Signature=8c4afe46ec815d5af643395d4a65e071d24c899a646be8607224f768d868aa0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
