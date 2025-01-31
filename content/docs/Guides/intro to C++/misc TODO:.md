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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDHTFFZV%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2Blu3ZkJc5jJMh6QDDsIDFPwQooWYi6gPM%2FQHpP7kfrAiAMPOjoCw%2F5OVCqNPCSUDkAIJICwDOxFLeEN4TUKfXQmSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcVsU%2Ffim0f8rx%2F%2FSKtwD%2BUMCGC5UfJpTvK1%2BLeOmozLyH4cGt%2FLUi05wPniolzXg7V1pUmGYgxU7J6iaO7YlZtgWThVouB2r89iSLOFW3OirrzSwxEFQhd1Wqu3a2MKs4OE4JaHkjYVfsnPTR9abvstXJ39t1PVbLXgo006veVzsSUVjVc9IOr4h3TdsptFe8s9HFpRfVW8bcK3DLqgXbj3f7uF43rd0PmM17r%2FVDm6XW2VQTaVsvm3xjdyLes69n8723cvO%2F0W99h28nouKYwWNzFtT6iLfOULolnUTWIBjVPQM0YcEEcRmnBcMaXuaz59XmKE0nl6VsJZuX8MAZiTKSzerHO2t8fkk3sKqHi%2Bd%2BhLlT5Qs2iMnUb7xRVPmwGDZnz%2FtU5PZlFDhPSBvIEIc2Ehx6GV%2FrgjslSLDLBrnBWjMNexMSC7UU7BhX59Q9WUiC5%2FUYrYwbPI0oMk2Une8Q%2BRsEwrenGeHhWoXFtDGz9LWs8GnAFCgRKaWaZ1QD%2BeOIK2d93vMsH%2Bqjs8yvAx7%2F4NuV5o7wOqrgiaaBOFiw8IzJd9uUm5yiCvG2hYLBgGe1xkE912erJpvgPS6ChsmUamjrDL%2FyiV%2BPlqfPQrVsHTWSQ2ciHeHU9uUbiAfSBuc%2FUrhpZuK8iUw7NHwvAY6pgHftQi7NlXwkPH9XSHInQU%2Boif1ITVVnG1Zef%2F5t4Egf8tC%2F4UGUKh6WEgP99dHHYCdex2SW3n7iRhXfgfC3wpBfvRJe%2FdFXKKq7dcaP1FSyAwKJtK%2FJPpTwxFmdaDJ3K7MRzyL5edG2MPf5tW6A76DZ4iMKApv78vEBRsGsfjQXx2fpqKOd79yU1zusNPYgApR%2FCaxIc6gYSoXijf0LfobqlPNlZWJ&X-Amz-Signature=b7a72001c14eec00ba907394521f8c8f7dec5e82d535ff6ec3733b26397fb1f5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDHTFFZV%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2Blu3ZkJc5jJMh6QDDsIDFPwQooWYi6gPM%2FQHpP7kfrAiAMPOjoCw%2F5OVCqNPCSUDkAIJICwDOxFLeEN4TUKfXQmSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcVsU%2Ffim0f8rx%2F%2FSKtwD%2BUMCGC5UfJpTvK1%2BLeOmozLyH4cGt%2FLUi05wPniolzXg7V1pUmGYgxU7J6iaO7YlZtgWThVouB2r89iSLOFW3OirrzSwxEFQhd1Wqu3a2MKs4OE4JaHkjYVfsnPTR9abvstXJ39t1PVbLXgo006veVzsSUVjVc9IOr4h3TdsptFe8s9HFpRfVW8bcK3DLqgXbj3f7uF43rd0PmM17r%2FVDm6XW2VQTaVsvm3xjdyLes69n8723cvO%2F0W99h28nouKYwWNzFtT6iLfOULolnUTWIBjVPQM0YcEEcRmnBcMaXuaz59XmKE0nl6VsJZuX8MAZiTKSzerHO2t8fkk3sKqHi%2Bd%2BhLlT5Qs2iMnUb7xRVPmwGDZnz%2FtU5PZlFDhPSBvIEIc2Ehx6GV%2FrgjslSLDLBrnBWjMNexMSC7UU7BhX59Q9WUiC5%2FUYrYwbPI0oMk2Une8Q%2BRsEwrenGeHhWoXFtDGz9LWs8GnAFCgRKaWaZ1QD%2BeOIK2d93vMsH%2Bqjs8yvAx7%2F4NuV5o7wOqrgiaaBOFiw8IzJd9uUm5yiCvG2hYLBgGe1xkE912erJpvgPS6ChsmUamjrDL%2FyiV%2BPlqfPQrVsHTWSQ2ciHeHU9uUbiAfSBuc%2FUrhpZuK8iUw7NHwvAY6pgHftQi7NlXwkPH9XSHInQU%2Boif1ITVVnG1Zef%2F5t4Egf8tC%2F4UGUKh6WEgP99dHHYCdex2SW3n7iRhXfgfC3wpBfvRJe%2FdFXKKq7dcaP1FSyAwKJtK%2FJPpTwxFmdaDJ3K7MRzyL5edG2MPf5tW6A76DZ4iMKApv78vEBRsGsfjQXx2fpqKOd79yU1zusNPYgApR%2FCaxIc6gYSoXijf0LfobqlPNlZWJ&X-Amz-Signature=f3f7f0904bd3e5665317277ea1df03af446696cce41fe06eb7c369881249cf9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
