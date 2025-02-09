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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHIQYWZV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU7KrGdQDMAEgi5velBHArhA7xYNjcWc4Cx%2Fj33OVabAIgfS%2F1yzkj9F%2F3gouugtWRtSwwyC6HoTcNXeswyqGLx6oqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRv%2BFT1EMEX9hmTSyrcAwBWf87fdcg02N82ICKszbdagqJ1sod9RZKTmo%2FXqCn63YwYCsE2TVTsv6E%2Bp0FEKxSjOM67M%2B4x8bkv3lCQ9oEzqiOzq3gmQAHvVT%2BjeQK%2B6OBa6hkhfiqsyHmnQn0r2JnighZ9ZoIpdwRuPnAjF59FEcuurOaYFQPEHKGP0034qaFYgzFWkzwaRjpMUwtIXWiRAEWA%2FBTEAge%2Fp%2FGNkjqqSoUx9aNUMKRguoDmqUIuuLi70fmwJn6j%2FxOkGcjy%2FfS%2Bbrdc4OB79KkjE7eK7FRnOGIrI2SRKJLIWF9L0pxjOStzl%2Fk2arSwsfNHCufxIkY%2BbuqTd3RAZRevwj2Wf4MB9o90fW2VhzqGc8tW1kxSirUIEuunajR%2FuLVvpJ0ihTmWnrq%2BPJ%2FNUrPteSdBcKqZnseTbFgbJwGMgzKskxH3i%2FfLT7%2FVgs%2Fp6WvVE4fyBnsCgSvPFe5Uf71GYMZXl6ltAj%2BYWZj1wBoM0iQFitJFbfyaRFlo9sXRJ77Kt9%2Fv40bHN8fi%2B%2Fi1CXF%2Bvs1vP7yOwN4Czg1AKTciwI6MzOUCBZB9SpHdk4L9AJ7yUvBYdevqBMB7OxmTqwsiCo1eZ3%2BlQv8CVISl2BGDDWUP07MQfuAvAfJfogR6uzygMK2Ho70GOqUB4Jw7jzcG%2F3fY0tyGxSk3bXfXnT2QBb16XbbhMyIECsNRSmNJyntWS8lrDiVjAAp89m0CYqKU407poFQpXjtdbIEo4ov8ZmXRkXijE9wsP%2Bb2h1hV72esfJ81slYT0U7HHT1Oxd%2B7l2E7qxaPRgv%2Bmt9jy0lTCMt1so0FcnXrHE1%2F2uiSTHlnMejCy6w64QebcAPqix8qRa2UfiUcHcHcnBVOqahb&X-Amz-Signature=6cf57c987edbd71afdb5ac1e631ff6ea480691f30efb20d7d6aec2e7c928028f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHIQYWZV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU7KrGdQDMAEgi5velBHArhA7xYNjcWc4Cx%2Fj33OVabAIgfS%2F1yzkj9F%2F3gouugtWRtSwwyC6HoTcNXeswyqGLx6oqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRv%2BFT1EMEX9hmTSyrcAwBWf87fdcg02N82ICKszbdagqJ1sod9RZKTmo%2FXqCn63YwYCsE2TVTsv6E%2Bp0FEKxSjOM67M%2B4x8bkv3lCQ9oEzqiOzq3gmQAHvVT%2BjeQK%2B6OBa6hkhfiqsyHmnQn0r2JnighZ9ZoIpdwRuPnAjF59FEcuurOaYFQPEHKGP0034qaFYgzFWkzwaRjpMUwtIXWiRAEWA%2FBTEAge%2Fp%2FGNkjqqSoUx9aNUMKRguoDmqUIuuLi70fmwJn6j%2FxOkGcjy%2FfS%2Bbrdc4OB79KkjE7eK7FRnOGIrI2SRKJLIWF9L0pxjOStzl%2Fk2arSwsfNHCufxIkY%2BbuqTd3RAZRevwj2Wf4MB9o90fW2VhzqGc8tW1kxSirUIEuunajR%2FuLVvpJ0ihTmWnrq%2BPJ%2FNUrPteSdBcKqZnseTbFgbJwGMgzKskxH3i%2FfLT7%2FVgs%2Fp6WvVE4fyBnsCgSvPFe5Uf71GYMZXl6ltAj%2BYWZj1wBoM0iQFitJFbfyaRFlo9sXRJ77Kt9%2Fv40bHN8fi%2B%2Fi1CXF%2Bvs1vP7yOwN4Czg1AKTciwI6MzOUCBZB9SpHdk4L9AJ7yUvBYdevqBMB7OxmTqwsiCo1eZ3%2BlQv8CVISl2BGDDWUP07MQfuAvAfJfogR6uzygMK2Ho70GOqUB4Jw7jzcG%2F3fY0tyGxSk3bXfXnT2QBb16XbbhMyIECsNRSmNJyntWS8lrDiVjAAp89m0CYqKU407poFQpXjtdbIEo4ov8ZmXRkXijE9wsP%2Bb2h1hV72esfJ81slYT0U7HHT1Oxd%2B7l2E7qxaPRgv%2Bmt9jy0lTCMt1so0FcnXrHE1%2F2uiSTHlnMejCy6w64QebcAPqix8qRa2UfiUcHcHcnBVOqahb&X-Amz-Signature=840c79744bb3c1f6600125bd59059a3064b7fd936c7b6aa3e5ae8f84c7dff50e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
