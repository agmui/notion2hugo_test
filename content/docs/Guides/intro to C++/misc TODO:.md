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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZSQ54IL%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIH2QosAoOVyH7NeP0Qyrbe2kLSPtRCPWWG3v8PhqPrr3AiEAkcoMmV85BQs5jxnXM9lKkk0h6fX1WQK%2FK9EqF4KKoN0qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg%2FzVNOowZM%2Bhi1eSrcA%2BUuhEyfcA7lwHZZleu7dj0UBm%2BV3gKO9p6ZvWE4Sw4LecKgm5AkBH1CEV8mQOi7MG67HEcAH8B%2BEzh%2FIwjJWEzFb6rBvRI%2FQ0CNj9xtmQ9UvlV2CEjO6SD12mY42UQ%2FEcIPJ%2BIqlUAzHNg%2FnghGyzlKIdBiwmkLFypRJCk7z65TimenG8zKC5KRfHAIuk3DZW9MURSylChgXH9SQ7rcirOA0Pi0Flukvn%2FB9s515npFBOM%2FYT8nJ4e%2FLxIhaqEu%2FAVJOKQ7R%2BdSy1cO%2FaTf%2BtutccOJsENlGip2bA9CEdSx075gmlLnHNcQcqrobfkZM2tXGBAweX%2BuXIsXt0Tgsu2IZs%2FxocHebR7t%2BCYHKO5iQQh66NZbSQZVQvve74BOu3FnTWIBxjW5dHJBgTwUlsYnm0x6napz5bYB0Q0JNsWCvO%2FOvJhkeaVrWkOJqn1KmHzLLwSVoCq3hKlT35ZVVW3T8G%2FB%2BeCFODbNudxE7Er5mko7li8q6VhO2tGTFaL8owZJ%2F4QUzGa%2BG3qMly%2F6blk7eiaaXgRxUqiuxq3XxPCycoKtoc%2BzA29vlAHOcZoVEIqg%2Bm1cJzzKJaWmXPdI7fmSKPtnGSVVti6FBzk5%2BHMCWp%2BqOQh%2BqTTI1u2KMK3Y974GOqUBh9CpctqzTtiTUg5Mmy6NVKuIqqt5PRemIxrIwScOMr9nLbADwgIU2hdaE9KXrgLX62yZTZRM4pym6bALiu1vuMSvDrFLhAFyhUut2I%2B5PZINcl3mI22FH8HcApQG41sWm496Mx2ugSPZih5rTfmdO%2F%2FhkrhFrJw6dh6wBMfyEyJEQyvXxvEkfruMKYmlhdYvPxSEkCPKsdMESwuvpGFxFHkIeGxm&X-Amz-Signature=34a3c345de34c1c5d8ff0f5e7a1200c7383ebc574eb199d82d21b89de0fbf114&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZSQ54IL%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIH2QosAoOVyH7NeP0Qyrbe2kLSPtRCPWWG3v8PhqPrr3AiEAkcoMmV85BQs5jxnXM9lKkk0h6fX1WQK%2FK9EqF4KKoN0qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg%2FzVNOowZM%2Bhi1eSrcA%2BUuhEyfcA7lwHZZleu7dj0UBm%2BV3gKO9p6ZvWE4Sw4LecKgm5AkBH1CEV8mQOi7MG67HEcAH8B%2BEzh%2FIwjJWEzFb6rBvRI%2FQ0CNj9xtmQ9UvlV2CEjO6SD12mY42UQ%2FEcIPJ%2BIqlUAzHNg%2FnghGyzlKIdBiwmkLFypRJCk7z65TimenG8zKC5KRfHAIuk3DZW9MURSylChgXH9SQ7rcirOA0Pi0Flukvn%2FB9s515npFBOM%2FYT8nJ4e%2FLxIhaqEu%2FAVJOKQ7R%2BdSy1cO%2FaTf%2BtutccOJsENlGip2bA9CEdSx075gmlLnHNcQcqrobfkZM2tXGBAweX%2BuXIsXt0Tgsu2IZs%2FxocHebR7t%2BCYHKO5iQQh66NZbSQZVQvve74BOu3FnTWIBxjW5dHJBgTwUlsYnm0x6napz5bYB0Q0JNsWCvO%2FOvJhkeaVrWkOJqn1KmHzLLwSVoCq3hKlT35ZVVW3T8G%2FB%2BeCFODbNudxE7Er5mko7li8q6VhO2tGTFaL8owZJ%2F4QUzGa%2BG3qMly%2F6blk7eiaaXgRxUqiuxq3XxPCycoKtoc%2BzA29vlAHOcZoVEIqg%2Bm1cJzzKJaWmXPdI7fmSKPtnGSVVti6FBzk5%2BHMCWp%2BqOQh%2BqTTI1u2KMK3Y974GOqUBh9CpctqzTtiTUg5Mmy6NVKuIqqt5PRemIxrIwScOMr9nLbADwgIU2hdaE9KXrgLX62yZTZRM4pym6bALiu1vuMSvDrFLhAFyhUut2I%2B5PZINcl3mI22FH8HcApQG41sWm496Mx2ugSPZih5rTfmdO%2F%2FhkrhFrJw6dh6wBMfyEyJEQyvXxvEkfruMKYmlhdYvPxSEkCPKsdMESwuvpGFxFHkIeGxm&X-Amz-Signature=6c3b811ee711be4cbf24579547970511494fe25fd268002ea46eeda88708ee4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
