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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXP7J3LM%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClVSnMN4p3gbt%2ByJ9Z%2B%2FtH8fxAzhSVLXD6dINAmngQtQIhALUaeJwTfTbvUg5Kimr%2BkazNj6B%2Fs8GgrHqVC%2B1JAnhHKv8DCBYQABoMNjM3NDIzMTgzODA1IgzxeyqfrFrb4walsC4q3AM3FmXHoeu%2BQX%2BqTExj0bkGrNr4E8fEtWwbnHYhZHnNIxuwp5UerKxzcOoLfHAsh2OTXsIH19GqjicjSX%2FR2LdzI13e%2BZgOMTdsWM5K3r9v8alfMqdBxuRlwCBVP4DyAYa%2B6sUWkbi9YNfLow7RXFN7IWSwNgYMjlA7ElviAQQou3NQg7WDmZ%2Bnikzze0tL%2Blu3ZTp%2B9ImfhRTDYf0u5%2ByFUYE%2FSfiQWIrNjLSI6DUN9SN7huQv7w5v28w2KpgFopQ3Km%2BM9fUW1QVrjy8Cq9JeFoKvTQN7s3VsjgZf1Yu7PGbuoxnNgeBdI8b1s6GTcnT7pt561fgvuzWDOm%2BZfnfVxuBbhf0bo3gHdjxjkuO17x%2BHtWfBBBR420Urgp0iXzMjTIfyOPg24n%2BMBKCrDMDgslMIxtTwFqA7SzODTkgcNCGIkKgRxxiX4kbjBIHNa0njBVRJgbFkUA5sF4o6F8plZKMle8Vw7DgkUqNN19qe4vncD0NuMp%2FIIrDnc%2BIkJNGV0m%2FzErXA5e9o%2FhtdN3zhJxwY4O9o1JI0WTMsvCv6qo3aJmuDpgJ8Ng4jUbp24mhf99Ko6DnwlN70pRApeqStUqHZHxViSxfGpAUv85EYLW%2BSU2HVKhrxrb%2FWzzD47tW%2BBjqkAYAuzOMxs2NeWY6WNR%2B8DRnuYLMAlSOgo5LmyigH8wa1jFNqGZZ%2BrkRtv%2FlbppU3MzrHEjvqAbqoaABbL98VHN0VMnHbCbRXHLOw2%2FsuMgIPoFfEWIut%2FDVukvxmi231Yw9b7KvZlCoaxIOmtS3JWVFRvSe21kdwmjwkc6cl51T3RbwMT1iDUpCm2GNBBK9eKJI66mU5H8F1CxwPboHezh37w8up&X-Amz-Signature=cc616d1dfd8a31f6fc387f7eb6a743c7f9ee70725ab40d54278f62edcabb3920&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXP7J3LM%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClVSnMN4p3gbt%2ByJ9Z%2B%2FtH8fxAzhSVLXD6dINAmngQtQIhALUaeJwTfTbvUg5Kimr%2BkazNj6B%2Fs8GgrHqVC%2B1JAnhHKv8DCBYQABoMNjM3NDIzMTgzODA1IgzxeyqfrFrb4walsC4q3AM3FmXHoeu%2BQX%2BqTExj0bkGrNr4E8fEtWwbnHYhZHnNIxuwp5UerKxzcOoLfHAsh2OTXsIH19GqjicjSX%2FR2LdzI13e%2BZgOMTdsWM5K3r9v8alfMqdBxuRlwCBVP4DyAYa%2B6sUWkbi9YNfLow7RXFN7IWSwNgYMjlA7ElviAQQou3NQg7WDmZ%2Bnikzze0tL%2Blu3ZTp%2B9ImfhRTDYf0u5%2ByFUYE%2FSfiQWIrNjLSI6DUN9SN7huQv7w5v28w2KpgFopQ3Km%2BM9fUW1QVrjy8Cq9JeFoKvTQN7s3VsjgZf1Yu7PGbuoxnNgeBdI8b1s6GTcnT7pt561fgvuzWDOm%2BZfnfVxuBbhf0bo3gHdjxjkuO17x%2BHtWfBBBR420Urgp0iXzMjTIfyOPg24n%2BMBKCrDMDgslMIxtTwFqA7SzODTkgcNCGIkKgRxxiX4kbjBIHNa0njBVRJgbFkUA5sF4o6F8plZKMle8Vw7DgkUqNN19qe4vncD0NuMp%2FIIrDnc%2BIkJNGV0m%2FzErXA5e9o%2FhtdN3zhJxwY4O9o1JI0WTMsvCv6qo3aJmuDpgJ8Ng4jUbp24mhf99Ko6DnwlN70pRApeqStUqHZHxViSxfGpAUv85EYLW%2BSU2HVKhrxrb%2FWzzD47tW%2BBjqkAYAuzOMxs2NeWY6WNR%2B8DRnuYLMAlSOgo5LmyigH8wa1jFNqGZZ%2BrkRtv%2FlbppU3MzrHEjvqAbqoaABbL98VHN0VMnHbCbRXHLOw2%2FsuMgIPoFfEWIut%2FDVukvxmi231Yw9b7KvZlCoaxIOmtS3JWVFRvSe21kdwmjwkc6cl51T3RbwMT1iDUpCm2GNBBK9eKJI66mU5H8F1CxwPboHezh37w8up&X-Amz-Signature=3a2702928f45bee050e3c3b02afb42acce95dba404cff24adf4b83bbadb035da&X-Amz-SignedHeaders=host&x-id=GetObject)

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
