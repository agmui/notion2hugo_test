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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUX2HFAH%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSSoGC3cQySyyHzRbdmywyUTiJoU8w5iynvG6vRnz1WgIhAJKXN9K7oATtidJm%2B%2Fhqs771gYe1KgPuNLvDzZhXMo6bKv8DCH8QABoMNjM3NDIzMTgzODA1IgxuNPoTIbs3el%2BukKQq3ANx%2BBNo6NLAFpdvOqezgjq7cJtQlwGLrMAVPPdkxdq5Ijx7e%2BMNTigRYxAzJJXGYNSysk0YmGFBW7QJxlCB1qSmQZF%2FbHhP3U0MYqeWdDpAMgu%2FckiAjSPyC%2FzRuDhUOQNKxOaxn41HxnSwE4HRyU7fzLN0Us9LqrfC2uuSeW5wsdql0bSctLJeD0fHf3U4c7ODwI%2FnPc9MSrmmA%2BOYkKYDebt0gIaGTDUp3V3MqTQODsyKXJjlKZLHVGh0bWBWCsBb57%2BZMbescYoPV8T8seYuQnsJu2NKoslAkrC5WT89YoBzF%2FJseXTnjLEWwgFAMWUQM0CjGaZixyJoBonhwxOY75JUTF3ZbMoacyfodAEoFEUHD6yfeSTj45o3BMrI5an%2FF066jkHRB3EvzMvAa75C4mSX%2BcPcZixBvXtQ1uekB9WQYaStC3Hb5eKtUMZ8xIjNkAYQx24IiEsF19Ar7AYobydG8JKM%2BpUVG133N63v8%2BsyIRch9nbXtFucfGrKIKOYd9IGSQoL5I8%2FfxJMQNJ0%2F%2BPJfyU4dr145BF3TYk9DhuKflPsZGe8783fD3lJtrYYFhEm9GYzmWHNWWt6c6yJ%2Bdyq9k%2FP5WRpoK6cShSRBVTaS9lDCYiwavUwszC6r%2FzCBjqkAedhdA1HbgIZ8JfLgoUceyMDCJvpWNqeppY1GXc7Fmf7H59ss6PsLQsktbVtM30gU7us5tm6PHXhPYM4kE0lZXtF2SfyiPc5My5z%2FiUSj2XkCQ8DXac%2FDAPup0fl%2FqA86z7yHa%2F03x3pGJ7UDE4%2FGDTFTZWXeBooiYcYmIwxQTKvxp9Gxqkm%2Bbn71rxpxIHibyCVvx1iWg4y6abN%2FlBM1Sh%2BMYEo&X-Amz-Signature=b2b604494250297aa4338db03acb36b7ab1a362924a787d2b8c16d2c7dbd4b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUX2HFAH%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSSoGC3cQySyyHzRbdmywyUTiJoU8w5iynvG6vRnz1WgIhAJKXN9K7oATtidJm%2B%2Fhqs771gYe1KgPuNLvDzZhXMo6bKv8DCH8QABoMNjM3NDIzMTgzODA1IgxuNPoTIbs3el%2BukKQq3ANx%2BBNo6NLAFpdvOqezgjq7cJtQlwGLrMAVPPdkxdq5Ijx7e%2BMNTigRYxAzJJXGYNSysk0YmGFBW7QJxlCB1qSmQZF%2FbHhP3U0MYqeWdDpAMgu%2FckiAjSPyC%2FzRuDhUOQNKxOaxn41HxnSwE4HRyU7fzLN0Us9LqrfC2uuSeW5wsdql0bSctLJeD0fHf3U4c7ODwI%2FnPc9MSrmmA%2BOYkKYDebt0gIaGTDUp3V3MqTQODsyKXJjlKZLHVGh0bWBWCsBb57%2BZMbescYoPV8T8seYuQnsJu2NKoslAkrC5WT89YoBzF%2FJseXTnjLEWwgFAMWUQM0CjGaZixyJoBonhwxOY75JUTF3ZbMoacyfodAEoFEUHD6yfeSTj45o3BMrI5an%2FF066jkHRB3EvzMvAa75C4mSX%2BcPcZixBvXtQ1uekB9WQYaStC3Hb5eKtUMZ8xIjNkAYQx24IiEsF19Ar7AYobydG8JKM%2BpUVG133N63v8%2BsyIRch9nbXtFucfGrKIKOYd9IGSQoL5I8%2FfxJMQNJ0%2F%2BPJfyU4dr145BF3TYk9DhuKflPsZGe8783fD3lJtrYYFhEm9GYzmWHNWWt6c6yJ%2Bdyq9k%2FP5WRpoK6cShSRBVTaS9lDCYiwavUwszC6r%2FzCBjqkAedhdA1HbgIZ8JfLgoUceyMDCJvpWNqeppY1GXc7Fmf7H59ss6PsLQsktbVtM30gU7us5tm6PHXhPYM4kE0lZXtF2SfyiPc5My5z%2FiUSj2XkCQ8DXac%2FDAPup0fl%2FqA86z7yHa%2F03x3pGJ7UDE4%2FGDTFTZWXeBooiYcYmIwxQTKvxp9Gxqkm%2Bbn71rxpxIHibyCVvx1iWg4y6abN%2FlBM1Sh%2BMYEo&X-Amz-Signature=5e593e467fc37273d27564048acd1e6299e5d8fda744792ffdd3ecd523d86821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
