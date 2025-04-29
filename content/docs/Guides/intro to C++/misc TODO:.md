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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3SAMONQ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNy9ECqVdd8mIeqnoaLOW56DGfUDmFJSrlE0%2BNCjlQDAiEAsixeudKOaR2K%2BzUNL1jXZhhTN%2BjImkgPxXLA6u4x7acqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9kVqia0NZTdN4nOCrcA1GKDI6yB8yX0k3R2RP8Y1vAc92iRvgyduADS64mSKwVKeCF29DEhtIFZJ9dqJcxO1gnWQB5vVX3mRlY%2BoDUd%2F%2Fe3UziYTDh81do5H%2F%2Fy0%2FpvseB5w%2Fsw4sw%2FHIFDojU5aQsDzflSb5mMeFoBzi24I52iHWwO0ZrmUBQrMAshX5iAfCu1weEL8ZdJZissGTAv8dJVcRtv%2BD4nt5wq6PlOc237Q%2BXfIBIiciF%2BnbW5j05EY6oYiKIztEzWtzFFmTlKva226IKiCkRhVgX0TykNelX5ZRZzAJEUl3rjvenELPgjO%2Fv6SxE8Mu1HkBwzTK0LIY5A08WSm%2FBfbwICGszwvGBoWGS1z7v3iVlOeLVUl0P8JZcyGEE4%2FF7cGYty2aJNk3xW7N77U7mk56ug%2B1yhMepaXCAF0s2UEzDkal%2Bn%2FZDzQj37LJwIUt69MYw1wSXaysglFKHzsZG3V9a5LLLAw3AAKXYbPzps3qnDeIirQqT1YIkA8keD5Uibn5coKOLMaUmz%2Fu1KXok0vMaq8XiavoAUhBNvxcrs%2B4TYHuepzAbSIsOyBoTKwSFYfX9iyx%2FrNxLK9lZInVZc0PfaSgFrNb%2Bf0R%2B6j7vbOCOCsta0uG46R97HXrZ9AlvKj9wMP3RwcAGOqUBJW8T8gMN4uojxE3WC0dhPh4%2FJs7IFTRB6%2BpAM8Ei2aqbaLxUvJvPPKDRZFegYXBTl9%2FvSh%2BVjIlp5yIIH4oyW1PUVm%2BMTzxRCwCXh7ufXyP6d75bIeUX9jcaYukKPFGI%2FEyoHADoNmtpbv4hz3sT6GzstLe3UJHoF6mP6Koj1VC%2BPAbmXISgOHlWVaHT8vW%2FCyPYm7PlykhrqHM73dsHj1RlIBOG&X-Amz-Signature=9dca14dc9a494ce3639acf64f292fc30041f49baca06454d78241a581237c596&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3SAMONQ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNy9ECqVdd8mIeqnoaLOW56DGfUDmFJSrlE0%2BNCjlQDAiEAsixeudKOaR2K%2BzUNL1jXZhhTN%2BjImkgPxXLA6u4x7acqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9kVqia0NZTdN4nOCrcA1GKDI6yB8yX0k3R2RP8Y1vAc92iRvgyduADS64mSKwVKeCF29DEhtIFZJ9dqJcxO1gnWQB5vVX3mRlY%2BoDUd%2F%2Fe3UziYTDh81do5H%2F%2Fy0%2FpvseB5w%2Fsw4sw%2FHIFDojU5aQsDzflSb5mMeFoBzi24I52iHWwO0ZrmUBQrMAshX5iAfCu1weEL8ZdJZissGTAv8dJVcRtv%2BD4nt5wq6PlOc237Q%2BXfIBIiciF%2BnbW5j05EY6oYiKIztEzWtzFFmTlKva226IKiCkRhVgX0TykNelX5ZRZzAJEUl3rjvenELPgjO%2Fv6SxE8Mu1HkBwzTK0LIY5A08WSm%2FBfbwICGszwvGBoWGS1z7v3iVlOeLVUl0P8JZcyGEE4%2FF7cGYty2aJNk3xW7N77U7mk56ug%2B1yhMepaXCAF0s2UEzDkal%2Bn%2FZDzQj37LJwIUt69MYw1wSXaysglFKHzsZG3V9a5LLLAw3AAKXYbPzps3qnDeIirQqT1YIkA8keD5Uibn5coKOLMaUmz%2Fu1KXok0vMaq8XiavoAUhBNvxcrs%2B4TYHuepzAbSIsOyBoTKwSFYfX9iyx%2FrNxLK9lZInVZc0PfaSgFrNb%2Bf0R%2B6j7vbOCOCsta0uG46R97HXrZ9AlvKj9wMP3RwcAGOqUBJW8T8gMN4uojxE3WC0dhPh4%2FJs7IFTRB6%2BpAM8Ei2aqbaLxUvJvPPKDRZFegYXBTl9%2FvSh%2BVjIlp5yIIH4oyW1PUVm%2BMTzxRCwCXh7ufXyP6d75bIeUX9jcaYukKPFGI%2FEyoHADoNmtpbv4hz3sT6GzstLe3UJHoF6mP6Koj1VC%2BPAbmXISgOHlWVaHT8vW%2FCyPYm7PlykhrqHM73dsHj1RlIBOG&X-Amz-Signature=f8eece02c53a1432fda8799c9adc308d4ad9a2eddf907fb9f0ebb26fd32f6520&X-Amz-SignedHeaders=host&x-id=GetObject)

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
