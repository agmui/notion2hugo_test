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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPTHUK3F%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk8X0Aod6zC0D7pYGwwJ3VTDrzV0VadLIpvoaTfKf9hAiA%2BflVjlzFGkPLNNR6NjK5xVEKT1BS4BzLC0IxZF4a95yr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIML30E7pmd6ikAztieKtwD%2F59x3H97vKEp5zn2zAy3Tm2FDKGFnF3q79Phd%2FjNZp1LqGDWoTbbe6uQPr0mwgq3OTDiD3mhbeMCa%2BMqXD9wj9PtCs085jKLv4KRrTGtEwdKtHhIbKBopUFBkLezLNGu6qSkUuUKThWFA18V%2BvgRCkJgtlp7BH1ZNfwE6QbDGX90iS29gunt9Jql2KpX02vGnRVATaB2MOAiD%2B0yPvyHUNsCzUSH%2FNCSjLfjOAFNogKTRE5aBCCHr1eYjRcnCr1NoSoBRkIuhKIt5nk1fKoArCPpLIG2YyUt%2FkGWg6Mr%2FC4fb%2BPIvAJ0KbQ%2F9q7Dg3Ydm0UeH5%2F7L6DC6ssn0GGDYAc2hzPlS%2FvrgRu4A%2Fu3TGCfSaPuwRxydFhnRa60p8fl4AgD0UNb9kTrIEeRkbO7nfzA3yr2hmhKPVsOGjj5i532HwNey1WdFKBZXpqxMemOvIYasUN3%2FpD4B9UiQmGSEpy6hQZyrSWrdPn8RdFThkKE41dierXO5SyT1TPtVQdDzXZIDwzRr4vcMxqVAAX9bTBd1hdEFtlA2fLrpwgtzWtzPh40Ei8JQy8462AlDB35esETaRwKb0S5qEheFnK8NGsMCKhEWh8d2yKx2lZdxaL9gZzZtuAff1wC4Bcwx7jNvwY6pgFM4hT09GwpbVW8ikmPh3tgHoup7Ve2Q7I315sdiI9KOvm%2FY8gfpx2JmltRAoAtxtaaghMeUr00PLQxIbC%2FU4cu1ftQ1Q4vBcQxdpVl0pSfL39%2FFkkEl4VCwFuP%2FbimyXtz1yQi8Fk66IYOhsxad0NhbXptLhV26ROWm5lvqANRbRk6fAqA4SnmpUllsusuo2Qbs5WMumj87zltOPlSU0vAEyivPQal&X-Amz-Signature=84b4f09a2a17e9addb67205d9e3586f22cfac515e8c952d8abed15bbeefaf1dd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPTHUK3F%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk8X0Aod6zC0D7pYGwwJ3VTDrzV0VadLIpvoaTfKf9hAiA%2BflVjlzFGkPLNNR6NjK5xVEKT1BS4BzLC0IxZF4a95yr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIML30E7pmd6ikAztieKtwD%2F59x3H97vKEp5zn2zAy3Tm2FDKGFnF3q79Phd%2FjNZp1LqGDWoTbbe6uQPr0mwgq3OTDiD3mhbeMCa%2BMqXD9wj9PtCs085jKLv4KRrTGtEwdKtHhIbKBopUFBkLezLNGu6qSkUuUKThWFA18V%2BvgRCkJgtlp7BH1ZNfwE6QbDGX90iS29gunt9Jql2KpX02vGnRVATaB2MOAiD%2B0yPvyHUNsCzUSH%2FNCSjLfjOAFNogKTRE5aBCCHr1eYjRcnCr1NoSoBRkIuhKIt5nk1fKoArCPpLIG2YyUt%2FkGWg6Mr%2FC4fb%2BPIvAJ0KbQ%2F9q7Dg3Ydm0UeH5%2F7L6DC6ssn0GGDYAc2hzPlS%2FvrgRu4A%2Fu3TGCfSaPuwRxydFhnRa60p8fl4AgD0UNb9kTrIEeRkbO7nfzA3yr2hmhKPVsOGjj5i532HwNey1WdFKBZXpqxMemOvIYasUN3%2FpD4B9UiQmGSEpy6hQZyrSWrdPn8RdFThkKE41dierXO5SyT1TPtVQdDzXZIDwzRr4vcMxqVAAX9bTBd1hdEFtlA2fLrpwgtzWtzPh40Ei8JQy8462AlDB35esETaRwKb0S5qEheFnK8NGsMCKhEWh8d2yKx2lZdxaL9gZzZtuAff1wC4Bcwx7jNvwY6pgFM4hT09GwpbVW8ikmPh3tgHoup7Ve2Q7I315sdiI9KOvm%2FY8gfpx2JmltRAoAtxtaaghMeUr00PLQxIbC%2FU4cu1ftQ1Q4vBcQxdpVl0pSfL39%2FFkkEl4VCwFuP%2FbimyXtz1yQi8Fk66IYOhsxad0NhbXptLhV26ROWm5lvqANRbRk6fAqA4SnmpUllsusuo2Qbs5WMumj87zltOPlSU0vAEyivPQal&X-Amz-Signature=893bf0179e80cd7004d302f29dc134a551ba9e082e95dab50b77a382fd436761&X-Amz-SignedHeaders=host&x-id=GetObject)

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
