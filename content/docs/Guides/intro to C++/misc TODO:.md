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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKDVN2M%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDud961hCFaVfsucKlHa6G%2FN%2BBQVNbpgAbQPFqQGBIlLgIhAMBbdN7mJEvAXC4JdRhjK2ef0W%2FZ5quCNrsFLLXkXdYeKv8DCGIQABoMNjM3NDIzMTgzODA1IgzkcRJXGZ45dKI7ehUq3AO05vIgzf7MDgO9O8qpP7Aw%2BEzls8m06tNVSNPEgW11pvMZDAZwZpaKGUq7DxSvBilGONmY7YWs8Xao25zZKZ5GizjnUT8deLg%2FvtquvkZuF0w7oEoTraByEaps5Z2I8VUY6Dg4XzyzO991rEYVKhSv7pB29jvmLtstWb3wMPHvpsmTHKHJsEep1eb2Ze7mgTByAMQuDKJxBt3v2CcZwcR8jlLHMwkL1jnG8khNNyvz%2FHVw%2BIghaEmzx%2FOwWRe2%2BsL7XXLN%2Bup7OhzYrvd3pLEJ1Mhvk7SIa6tUuOXtuEFvZ7VzcODjs8Kn%2FFEuTNLrcCBjL5fME%2F9crtItnLWDHMeOeJ85YFLvkpSJtijZbS6a9mQlU8fSaVZO0uXllmwgwCbpXL31c09oGYMP28fIIaCW0Iq%2BaSRcoDd7leq%2Fdr%2BeB5aVmorKIYFmz5P1odmdGnYQWzGooyiPRBUD%2BD0ykL%2BrE9lJ836budjZOG%2BXXCJYR%2BARkDqbJ7sST67jidyL%2F6UXVitEtc1D2rLDC4sesPx4PDf9JsLQMEMbojrfqn7ltfWAOETwlVBsrtDT9MTWDlsTt4So1NBYruz6mQtGb8pKApqVEgg9hblu8a9HwNevxgv%2BFxe0%2FwywUJ9lmjDr1Oa%2BBjqkAVYjablCxF5YJbxlxOqTX6HK4gzdBOSe6e2yrjCtGLO%2BGv1zkgfVT%2B3Rxryz1LelDirKmdWoUPWw1gHuQgUiwuWFcdyr7%2BMeQOTF4hC9RmMIS3FQ%2Bhz%2F7qffraJQlqduBFPAQAEZFnhfj3MM05ZG2Vx8dNVjdLdJTVDykB91MB9Y%2FwErTgypE5aG9TW8frvq2S5k3fui7gTqejmsJPj%2B%2Bs0kjgDf&X-Amz-Signature=5908d2866d40cd96da3e7262a1e4787d1ec05f570d567fbe488bcd5e87dd307c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKDVN2M%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDud961hCFaVfsucKlHa6G%2FN%2BBQVNbpgAbQPFqQGBIlLgIhAMBbdN7mJEvAXC4JdRhjK2ef0W%2FZ5quCNrsFLLXkXdYeKv8DCGIQABoMNjM3NDIzMTgzODA1IgzkcRJXGZ45dKI7ehUq3AO05vIgzf7MDgO9O8qpP7Aw%2BEzls8m06tNVSNPEgW11pvMZDAZwZpaKGUq7DxSvBilGONmY7YWs8Xao25zZKZ5GizjnUT8deLg%2FvtquvkZuF0w7oEoTraByEaps5Z2I8VUY6Dg4XzyzO991rEYVKhSv7pB29jvmLtstWb3wMPHvpsmTHKHJsEep1eb2Ze7mgTByAMQuDKJxBt3v2CcZwcR8jlLHMwkL1jnG8khNNyvz%2FHVw%2BIghaEmzx%2FOwWRe2%2BsL7XXLN%2Bup7OhzYrvd3pLEJ1Mhvk7SIa6tUuOXtuEFvZ7VzcODjs8Kn%2FFEuTNLrcCBjL5fME%2F9crtItnLWDHMeOeJ85YFLvkpSJtijZbS6a9mQlU8fSaVZO0uXllmwgwCbpXL31c09oGYMP28fIIaCW0Iq%2BaSRcoDd7leq%2Fdr%2BeB5aVmorKIYFmz5P1odmdGnYQWzGooyiPRBUD%2BD0ykL%2BrE9lJ836budjZOG%2BXXCJYR%2BARkDqbJ7sST67jidyL%2F6UXVitEtc1D2rLDC4sesPx4PDf9JsLQMEMbojrfqn7ltfWAOETwlVBsrtDT9MTWDlsTt4So1NBYruz6mQtGb8pKApqVEgg9hblu8a9HwNevxgv%2BFxe0%2FwywUJ9lmjDr1Oa%2BBjqkAVYjablCxF5YJbxlxOqTX6HK4gzdBOSe6e2yrjCtGLO%2BGv1zkgfVT%2B3Rxryz1LelDirKmdWoUPWw1gHuQgUiwuWFcdyr7%2BMeQOTF4hC9RmMIS3FQ%2Bhz%2F7qffraJQlqduBFPAQAEZFnhfj3MM05ZG2Vx8dNVjdLdJTVDykB91MB9Y%2FwErTgypE5aG9TW8frvq2S5k3fui7gTqejmsJPj%2B%2Bs0kjgDf&X-Amz-Signature=900185ef050219970882c4c1ff275e7bd99a147a0c58f7533eacbcc3fa96e84b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
