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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TMF4ESU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC27SUsTibKYMn4W%2F2adoK0mv28MFWpDKQ%2BLQ7dGYWxiAiEA%2FJJqbm4ldGRL9p9CiaqdbfTIWJpnPIU0izCzviqfgP4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQofjPlmmlQlNMCGSrcA72xw2pUg1325jgBAquWqhPEnwLP9KWpMLgi0TCZTYAKaZlJPIUlVGGTzfBcZ8ou%2BkS51hpZmKZvk3TrVnCghM4bRUuinW5nlJAyTcnJsySc9Qt%2BpVOqr9d41%2F4ytOM42ZgVoZg6Sot8YYiJc23tWtWrsPYIBAg6hIbEXJzygZcXAVn%2Fbb6w7hQA0cYlTN0SFymQ3yh1tBBz5UmLBuLDeuzSl%2F30%2BipBc5Qqo3d6BWONrLdPm2eJhsKXzc72K%2BcjqDs9NB7mskSPRinfEdta9AOsBL34eR1chDo%2BgwTNch1wt1fGGbsthqF1xi0rEO%2F86PhcMuc7JKR8yg9m36GYaXdVxLO3o83a%2Fu61jwG0eywev%2Fo5XpM91fu%2F8PzL0FNUXPMM7luxHdIpsEtOE9p7mxePKjQkO33AE4S9%2FBWx9%2BuHnu0sSP8rKn501QmUQbG1%2BDNSK8sH9ZjQDG%2B%2BgeBS7fncrCoLGos0eoVaDroUt0sZ7YREv9mmt4diAYAChrJlOoY3uzfOrpG0vPfp4fNo4inDQ%2BssW3m8ez%2FNzXBxAOs4IlDRqXM%2FmBmYD1qOc4cIjM5A3hRztN19O9E6o9m%2B8sktUOybQjpxwmb8aH73s6ogBTm3OXzgLospp5%2FEMJmem8IGOqUBPmmatjiqgV%2FUPYe%2Fjm%2FkLCHG%2BVh%2FXLmHVdwQUuqzxypTBvrW0E2FM6E6t2LBMWyQ%2F%2BvMtDH2XX8ySKe3Fb%2FSOT3mJWEAwQojo%2FrMI0KD430L474LWpv0YwxhfF22fM25tpK4Yy3Y3eyJvI1EfylkG3DI9tYdJIQ0NjNckldaWDR3vXTWfjv0kwKadnGDVhESf3EcibmD3lw4CpZNueQibOcNBU%2FX&X-Amz-Signature=69e4ca0c8c89257b24f8081be7b28f49e965a6174f72f95a41451672376d36ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TMF4ESU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC27SUsTibKYMn4W%2F2adoK0mv28MFWpDKQ%2BLQ7dGYWxiAiEA%2FJJqbm4ldGRL9p9CiaqdbfTIWJpnPIU0izCzviqfgP4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQofjPlmmlQlNMCGSrcA72xw2pUg1325jgBAquWqhPEnwLP9KWpMLgi0TCZTYAKaZlJPIUlVGGTzfBcZ8ou%2BkS51hpZmKZvk3TrVnCghM4bRUuinW5nlJAyTcnJsySc9Qt%2BpVOqr9d41%2F4ytOM42ZgVoZg6Sot8YYiJc23tWtWrsPYIBAg6hIbEXJzygZcXAVn%2Fbb6w7hQA0cYlTN0SFymQ3yh1tBBz5UmLBuLDeuzSl%2F30%2BipBc5Qqo3d6BWONrLdPm2eJhsKXzc72K%2BcjqDs9NB7mskSPRinfEdta9AOsBL34eR1chDo%2BgwTNch1wt1fGGbsthqF1xi0rEO%2F86PhcMuc7JKR8yg9m36GYaXdVxLO3o83a%2Fu61jwG0eywev%2Fo5XpM91fu%2F8PzL0FNUXPMM7luxHdIpsEtOE9p7mxePKjQkO33AE4S9%2FBWx9%2BuHnu0sSP8rKn501QmUQbG1%2BDNSK8sH9ZjQDG%2B%2BgeBS7fncrCoLGos0eoVaDroUt0sZ7YREv9mmt4diAYAChrJlOoY3uzfOrpG0vPfp4fNo4inDQ%2BssW3m8ez%2FNzXBxAOs4IlDRqXM%2FmBmYD1qOc4cIjM5A3hRztN19O9E6o9m%2B8sktUOybQjpxwmb8aH73s6ogBTm3OXzgLospp5%2FEMJmem8IGOqUBPmmatjiqgV%2FUPYe%2Fjm%2FkLCHG%2BVh%2FXLmHVdwQUuqzxypTBvrW0E2FM6E6t2LBMWyQ%2F%2BvMtDH2XX8ySKe3Fb%2FSOT3mJWEAwQojo%2FrMI0KD430L474LWpv0YwxhfF22fM25tpK4Yy3Y3eyJvI1EfylkG3DI9tYdJIQ0NjNckldaWDR3vXTWfjv0kwKadnGDVhESf3EcibmD3lw4CpZNueQibOcNBU%2FX&X-Amz-Signature=029242753f3912de0e209fbd404c91eb69ef0e1be66ffb719746f19d5701d79d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
