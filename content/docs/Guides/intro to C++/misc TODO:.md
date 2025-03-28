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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJIK7SLZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqruj12PzpqYk8%2FotTZXjSIEt%2FZ9V3ELyMg9RJ8N1D0gIgS6BpFNFCAWXJ5rklq1RnOHuQLDzeQ99B3TdeJ6uzFSMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDEMeJ4fQC5jrgmf4dircAyLRADrbeMYvf8ZKRQFlN8vXDzll9iDWxso59FxpqdkXLIzNLkNC57whDKhgDbY0JoF17DHjaBt0pOCMXcrnU4ob17KvYLbzVq08CtM8SidpAMOsizVLElrBuohpPTe3%2BTJ3hkD%2Fu1WXZVgpXA6KGUHDSA6NXc3FNYXxELJQOJLPoIFCjzy3F6p8qL94atZvT5PrAjewsLOBHATd8h64wAF3ujuJP5SP7O9lzCm9cAUgjJRECFCzo4lNOhwlPltWgzVkO5rkQKFCmbLHlQ36aiYldPv1CvlOqpUmddA0sxVN9z8jjkfeHWjC1EeJh6sWg07xVO1TFDZ7mfeHVVq19bvrXwoD6zRGQJU8cOiTRpYhvGD2RaM3OywDGdu%2FeGatc%2FO1HwVNYSMhekc4Uuw1oDaMv02wAk%2BDBVhfJxVB4sEvupV8y%2FPWsQCRCTf5Pdw37geJck1KeFgOiko5VQzmoiMTeVex6fmfuPkDla9GTLkhXwF9MXkdLDas3bVZu5uPFpglr070lJb1TPWTEkNgpORFg9%2FGUTY61dzB5Slsj2iROfDIgwz%2BDMsiva8mO9h28tVvr0qwPvny6RwQRY%2B5%2B%2Fqvn8fRLPdV7dN9lH%2FyJZn1bKERGsMl5KeB%2FOXiMNjZm78GOqUBg2YGJcESYgWekJOGr7FxQackfCfc3KngWPSYYHtSTgVh3p7i9PzWeVL7vVFwcHSPJrJUX5ed969ZcM5CaN%2FslkdQoLsbcHWyrtV9mFQWnFa5qTJC9XYolv8QIS92yHNEeL0JvM5JQYnhNMJcNKtvje9rTVvlU97gRoW0dWlTVPQ7gqNrO3yAMKlXUAbISgv995PM1EZ2zZOXTu2Y%2B5JuMHwKmxSt&X-Amz-Signature=b3df12336a5be42b99120132876c7f80a0f970edc3cc68356140d0ca0e4aa40f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJIK7SLZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqruj12PzpqYk8%2FotTZXjSIEt%2FZ9V3ELyMg9RJ8N1D0gIgS6BpFNFCAWXJ5rklq1RnOHuQLDzeQ99B3TdeJ6uzFSMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDEMeJ4fQC5jrgmf4dircAyLRADrbeMYvf8ZKRQFlN8vXDzll9iDWxso59FxpqdkXLIzNLkNC57whDKhgDbY0JoF17DHjaBt0pOCMXcrnU4ob17KvYLbzVq08CtM8SidpAMOsizVLElrBuohpPTe3%2BTJ3hkD%2Fu1WXZVgpXA6KGUHDSA6NXc3FNYXxELJQOJLPoIFCjzy3F6p8qL94atZvT5PrAjewsLOBHATd8h64wAF3ujuJP5SP7O9lzCm9cAUgjJRECFCzo4lNOhwlPltWgzVkO5rkQKFCmbLHlQ36aiYldPv1CvlOqpUmddA0sxVN9z8jjkfeHWjC1EeJh6sWg07xVO1TFDZ7mfeHVVq19bvrXwoD6zRGQJU8cOiTRpYhvGD2RaM3OywDGdu%2FeGatc%2FO1HwVNYSMhekc4Uuw1oDaMv02wAk%2BDBVhfJxVB4sEvupV8y%2FPWsQCRCTf5Pdw37geJck1KeFgOiko5VQzmoiMTeVex6fmfuPkDla9GTLkhXwF9MXkdLDas3bVZu5uPFpglr070lJb1TPWTEkNgpORFg9%2FGUTY61dzB5Slsj2iROfDIgwz%2BDMsiva8mO9h28tVvr0qwPvny6RwQRY%2B5%2B%2Fqvn8fRLPdV7dN9lH%2FyJZn1bKERGsMl5KeB%2FOXiMNjZm78GOqUBg2YGJcESYgWekJOGr7FxQackfCfc3KngWPSYYHtSTgVh3p7i9PzWeVL7vVFwcHSPJrJUX5ed969ZcM5CaN%2FslkdQoLsbcHWyrtV9mFQWnFa5qTJC9XYolv8QIS92yHNEeL0JvM5JQYnhNMJcNKtvje9rTVvlU97gRoW0dWlTVPQ7gqNrO3yAMKlXUAbISgv995PM1EZ2zZOXTu2Y%2B5JuMHwKmxSt&X-Amz-Signature=d3fe5a2820f7702a260dcaffdd1b6659876304412d12a0bf2d2029679b017177&X-Amz-SignedHeaders=host&x-id=GetObject)

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
