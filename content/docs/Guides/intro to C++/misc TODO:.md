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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BATIQ2W%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1PROE56oaiz1Ra4%2FeGx9SxeUYodqsgHIdt%2FGmdWnWPwIgKhhgqM4R6lgU8jqdqgYsgtbJHocBv%2Bg7pmCuHzo977Yq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDI47DK7caSxlKa%2Fe1SrcAykcLV8VZSr6szFxnVheAWtIS0gWq%2FrZpBxy2fhfM10ftS0HYr47dIylEcSZI9sfDObqwfcoNaStNBBXMr2I9qlW936OPMFNxs9ALOxAnm5kSxjVsW%2BM8W0dGe53sFrd8I5Tze3Mi326eC%2B2f4%2FdMSClkKoEmH8jF7DYO5pWMA1hB%2FQ7vyCHlDtGTUnfHdg8uaOvLza757wx3vWO%2B6FfccPQRSY7lvu0rVAypH4fosEMrDytKslPoPr069YCBvKb%2FzMsJzpUIIk9w%2BOfD8fca%2B3UMTJsG8IMMcMk4hKlLuGZDbI%2BbAV%2BobzQ80CsUoe2hS7ksmAwLg5zTX5zvduJsb%2BzA7%2F5NAOKnhMTqDAQGoQVwJFIsbbsRwGd%2BPZFtKj9EgSPen%2FZUGSdv7KdgslE0oi5i2IcNRJYOo%2BzQNcEni1jJ5q5Hb9CCHkHTtq5jn7UYDYl3QauLj3P7LpOu6IynLfMt1EGdAgYtUhFRZORo0mgOKWBXP9q5ttte%2B0Mx10savB%2Byp3CkrSFUq4QePCToIUqHEg0yTbBEFDlb5Q5hF3aKwsBrWbnLv88og0FM75S2L75ytsSi7R5rJ3xl27Jw%2BRCYIyMW9tgKdkgEy4QLKwi%2FX%2B4QOHKh5xLHlrbMPuk%2Bb8GOqUBuSLHfORmD%2B9lWF05XKMFvsI4no4po9Iz%2BWKrwsz4t3RXqTNCLIB0xrCrLmZDBpCLJ8zGSTH01vO%2FV4%2BHV3iiFloOX9VgIOanVZN%2FP9Y15L0WwWYdZ41bon8jXNGSmv8ZKV9XQLLSLInU0fyZdcBHGSgQqUXuzPXrbUgv2XXlhdAxniznYx8yith3abg7qPpQHKM4NszTTttx39SqM3O%2FvZPno9Fy&X-Amz-Signature=2e7e607608eb2754c4075a1a06de93e05e1822f28c2e66e9433d743070ccdaae&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BATIQ2W%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1PROE56oaiz1Ra4%2FeGx9SxeUYodqsgHIdt%2FGmdWnWPwIgKhhgqM4R6lgU8jqdqgYsgtbJHocBv%2Bg7pmCuHzo977Yq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDI47DK7caSxlKa%2Fe1SrcAykcLV8VZSr6szFxnVheAWtIS0gWq%2FrZpBxy2fhfM10ftS0HYr47dIylEcSZI9sfDObqwfcoNaStNBBXMr2I9qlW936OPMFNxs9ALOxAnm5kSxjVsW%2BM8W0dGe53sFrd8I5Tze3Mi326eC%2B2f4%2FdMSClkKoEmH8jF7DYO5pWMA1hB%2FQ7vyCHlDtGTUnfHdg8uaOvLza757wx3vWO%2B6FfccPQRSY7lvu0rVAypH4fosEMrDytKslPoPr069YCBvKb%2FzMsJzpUIIk9w%2BOfD8fca%2B3UMTJsG8IMMcMk4hKlLuGZDbI%2BbAV%2BobzQ80CsUoe2hS7ksmAwLg5zTX5zvduJsb%2BzA7%2F5NAOKnhMTqDAQGoQVwJFIsbbsRwGd%2BPZFtKj9EgSPen%2FZUGSdv7KdgslE0oi5i2IcNRJYOo%2BzQNcEni1jJ5q5Hb9CCHkHTtq5jn7UYDYl3QauLj3P7LpOu6IynLfMt1EGdAgYtUhFRZORo0mgOKWBXP9q5ttte%2B0Mx10savB%2Byp3CkrSFUq4QePCToIUqHEg0yTbBEFDlb5Q5hF3aKwsBrWbnLv88og0FM75S2L75ytsSi7R5rJ3xl27Jw%2BRCYIyMW9tgKdkgEy4QLKwi%2FX%2B4QOHKh5xLHlrbMPuk%2Bb8GOqUBuSLHfORmD%2B9lWF05XKMFvsI4no4po9Iz%2BWKrwsz4t3RXqTNCLIB0xrCrLmZDBpCLJ8zGSTH01vO%2FV4%2BHV3iiFloOX9VgIOanVZN%2FP9Y15L0WwWYdZ41bon8jXNGSmv8ZKV9XQLLSLInU0fyZdcBHGSgQqUXuzPXrbUgv2XXlhdAxniznYx8yith3abg7qPpQHKM4NszTTttx39SqM3O%2FvZPno9Fy&X-Amz-Signature=58a33cc41b3919c54c2bb1a10dd1924a50133f1243a87ce944f7f727eecf6f52&X-Amz-SignedHeaders=host&x-id=GetObject)

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
