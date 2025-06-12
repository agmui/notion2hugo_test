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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ATOYKS5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIA8i%2FFNf1wqYAAvrYvhXwCWLL%2FbrLed5YH3ObYfMzCABAiEA6o0Nikxa8ls5WzL7o0wwmdzlJclZCbL2TSfSDcDLx3IqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCW9pSzcbJ0glLqIircA%2B7zvVIebfU818%2FQWsakDcHXzdjK5%2Fa8XTXCvCHbVnci%2FXswUQtGJSaRSFGOmoTw97G93ZBHWq6zN%2FoTti2zQ4zkTh6vaeNGZ%2FEqNpqN9bmPxk%2Fk%2BpAZOhOBui0vkRdDMOxFgd96TTR%2BOo5TG4Jl%2FagAjW10cSJ8Qx%2Fy5GSrVvcZlZ2%2BZbtu3lrvO7fg0Iyb5pS2ea%2FS7H4uIXblkWYuVNkx%2BK5wbJkwyt8guBsrb646S3bpaSw0hmSqgXdnfSf%2FmZ2nqFJpZhdGzOqE%2BT6MlE9WtrfmPP9ynkfSWhD9J5w1%2Frxy0VAx4qr7%2FVOVYbVWKIo2HhVnAzJo13jbiYIXA6zhC3pWowhLpmkq6H%2F2O5UOBwh4mqnyHnI1RG0qjnBlojuaOiw1JTpOzHomaffCj0L2kxiY9ZFg1PyKM0D5Fv0iB9%2BSa0OHlqYoT3o6msXlKdf9yaMcsolKkYOFN5SaXkDlwiwk8T8fKCFLG%2Ft72f4PAotfD2xkXDov2BiEvBeNxl%2BrJueJh%2FDIOQAKzNmQ8fsrJJqrPlBkpQAArdkj2V%2BwIrUfZbdrRm4EXMPq%2Fk1fNhzoRnatiZxj06ukTi89S6Xgf9J8%2Bk%2B%2FiIUkwFUXEbCF57BFIkstPikb6hoiMPLhq8IGOqUB1P%2Fq7zWQSWYAkD0m0xAc9K6p1%2BhrWzXklsK5UHwsbZDiikBN%2BNzshuOC1cUf5RYMVmcaS4hsceYV5GFWkR%2Ffg45dWQ3xtjC%2ByFyZKHEQLXysFtUdKNi06XRhNiOzwLKOqfZK0w5bz2o7pLWvYvFGm5tTnuHNdJKOp92LLg1sRdciAiEmmZluu1DBmeW%2B82An269WiC8EHlSvXwNDF26DtIX1%2BdF4&X-Amz-Signature=968247767a5765892074b7adf4b37e4756566ccdc99cb5e3ae19411800914222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ATOYKS5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIA8i%2FFNf1wqYAAvrYvhXwCWLL%2FbrLed5YH3ObYfMzCABAiEA6o0Nikxa8ls5WzL7o0wwmdzlJclZCbL2TSfSDcDLx3IqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCW9pSzcbJ0glLqIircA%2B7zvVIebfU818%2FQWsakDcHXzdjK5%2Fa8XTXCvCHbVnci%2FXswUQtGJSaRSFGOmoTw97G93ZBHWq6zN%2FoTti2zQ4zkTh6vaeNGZ%2FEqNpqN9bmPxk%2Fk%2BpAZOhOBui0vkRdDMOxFgd96TTR%2BOo5TG4Jl%2FagAjW10cSJ8Qx%2Fy5GSrVvcZlZ2%2BZbtu3lrvO7fg0Iyb5pS2ea%2FS7H4uIXblkWYuVNkx%2BK5wbJkwyt8guBsrb646S3bpaSw0hmSqgXdnfSf%2FmZ2nqFJpZhdGzOqE%2BT6MlE9WtrfmPP9ynkfSWhD9J5w1%2Frxy0VAx4qr7%2FVOVYbVWKIo2HhVnAzJo13jbiYIXA6zhC3pWowhLpmkq6H%2F2O5UOBwh4mqnyHnI1RG0qjnBlojuaOiw1JTpOzHomaffCj0L2kxiY9ZFg1PyKM0D5Fv0iB9%2BSa0OHlqYoT3o6msXlKdf9yaMcsolKkYOFN5SaXkDlwiwk8T8fKCFLG%2Ft72f4PAotfD2xkXDov2BiEvBeNxl%2BrJueJh%2FDIOQAKzNmQ8fsrJJqrPlBkpQAArdkj2V%2BwIrUfZbdrRm4EXMPq%2Fk1fNhzoRnatiZxj06ukTi89S6Xgf9J8%2Bk%2B%2FiIUkwFUXEbCF57BFIkstPikb6hoiMPLhq8IGOqUB1P%2Fq7zWQSWYAkD0m0xAc9K6p1%2BhrWzXklsK5UHwsbZDiikBN%2BNzshuOC1cUf5RYMVmcaS4hsceYV5GFWkR%2Ffg45dWQ3xtjC%2ByFyZKHEQLXysFtUdKNi06XRhNiOzwLKOqfZK0w5bz2o7pLWvYvFGm5tTnuHNdJKOp92LLg1sRdciAiEmmZluu1DBmeW%2B82An269WiC8EHlSvXwNDF26DtIX1%2BdF4&X-Amz-Signature=3a6e6b52ce409be8a9ccaead11c818dc4ad23a2fc6b0d2996e35a29143c2694a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
