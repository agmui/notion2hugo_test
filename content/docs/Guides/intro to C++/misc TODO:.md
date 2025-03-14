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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK4UY43L%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHA1iN%2Bq0YYCS3AdY6hAWi1FKyzm0RpNwbZ3VQfQgJ%2BLAiEA42dDefbS1zGrc8XLn7IllXXza83IOBVmf4W79%2BLpUpsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOui7JV0QafbryUZNircAzkvRfMsIQ6DueOKEc7upUVX78YZzqIm63UbAidGuBiX0LbaP2EJegOyugId%2BuvQ97ezvbTKd4KdiPVYslsOUKKFp2HhZaSOOFLBXVWJwGWRHeXOY%2FGMmgL%2BxCWhCrodveiRhJ6cpmjJrjj7d5D52v7F1Cs%2FPYSmDi2xa%2BNmdnDGA8tJUHqnXpqRXqHASrHEGxkHCPAU4A9%2BQ2HTolE6Ls7txH2J3wO7T%2B6KVbF9iLWe2uPtIqFY7XDEFjvGU2WGNu189wFO7zr2lUfWD2%2B4QQWiZ7d8M0VYOTFtJ6YoxK1Ork4BTIFUpChv3jdMQFgJ%2FCXKdjLgEcctQWDGCruFyBC5h1kMcI%2FBfVpGvIjSCQd4Tpvorg4PeCEr9lb3TvFbFdyD9sCrR8boIeoaHjbCk%2BwCsvGBYhaR1fR0lckTe%2Bg0G126Fn1oi6IereFiZYvZMSM8c3W03rf%2BZJ66mAFq4Wfd%2FMpH1gHjRg8HhcHfVOBLK98kHiKlO9OjTYJBoYsj6no7ZdGlpXO9WzE3czNESBiw%2BW%2FQ%2BaPL17QmSPvqg0LTnePVUiO1zF%2BRkSoeighe9JT5SwaAyOSZ2SafYHw%2F5ArUCH%2BO4dpdwmycvWQ5ch1Dsid9LX5sfk6EVkeaMPPMzr4GOqUBJOOnBbzwqVSlD50qe%2Fk1VFmEBW93TapZX6XfOx22V9zQ4t9vVhcuFB1nS0ItcE6NUtH10b4HhmxpFHCJs6ZZCXGH7XMFpZsNHOO%2BMD0X9SlGYR8MabKYwal%2FuwJQ%2FLEkA1yvwpSVziyC1XWEjMmcyAK3cWlZzdLnsAaGk8SETv7YVj7sioZjG9f%2F%2FujhsOoVN1H9XAojld2Us9J2LjFOzekGd32N&X-Amz-Signature=fc67456640d9aaf3232bf2bc8d4f87e078284dcd5edf4dd923290248c3d0e3f9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK4UY43L%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHA1iN%2Bq0YYCS3AdY6hAWi1FKyzm0RpNwbZ3VQfQgJ%2BLAiEA42dDefbS1zGrc8XLn7IllXXza83IOBVmf4W79%2BLpUpsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOui7JV0QafbryUZNircAzkvRfMsIQ6DueOKEc7upUVX78YZzqIm63UbAidGuBiX0LbaP2EJegOyugId%2BuvQ97ezvbTKd4KdiPVYslsOUKKFp2HhZaSOOFLBXVWJwGWRHeXOY%2FGMmgL%2BxCWhCrodveiRhJ6cpmjJrjj7d5D52v7F1Cs%2FPYSmDi2xa%2BNmdnDGA8tJUHqnXpqRXqHASrHEGxkHCPAU4A9%2BQ2HTolE6Ls7txH2J3wO7T%2B6KVbF9iLWe2uPtIqFY7XDEFjvGU2WGNu189wFO7zr2lUfWD2%2B4QQWiZ7d8M0VYOTFtJ6YoxK1Ork4BTIFUpChv3jdMQFgJ%2FCXKdjLgEcctQWDGCruFyBC5h1kMcI%2FBfVpGvIjSCQd4Tpvorg4PeCEr9lb3TvFbFdyD9sCrR8boIeoaHjbCk%2BwCsvGBYhaR1fR0lckTe%2Bg0G126Fn1oi6IereFiZYvZMSM8c3W03rf%2BZJ66mAFq4Wfd%2FMpH1gHjRg8HhcHfVOBLK98kHiKlO9OjTYJBoYsj6no7ZdGlpXO9WzE3czNESBiw%2BW%2FQ%2BaPL17QmSPvqg0LTnePVUiO1zF%2BRkSoeighe9JT5SwaAyOSZ2SafYHw%2F5ArUCH%2BO4dpdwmycvWQ5ch1Dsid9LX5sfk6EVkeaMPPMzr4GOqUBJOOnBbzwqVSlD50qe%2Fk1VFmEBW93TapZX6XfOx22V9zQ4t9vVhcuFB1nS0ItcE6NUtH10b4HhmxpFHCJs6ZZCXGH7XMFpZsNHOO%2BMD0X9SlGYR8MabKYwal%2FuwJQ%2FLEkA1yvwpSVziyC1XWEjMmcyAK3cWlZzdLnsAaGk8SETv7YVj7sioZjG9f%2F%2FujhsOoVN1H9XAojld2Us9J2LjFOzekGd32N&X-Amz-Signature=065282edcba84d4406e0e480734217ab92ae8b08bfdcc10b073dd329a4555ee2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
