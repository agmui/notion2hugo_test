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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ALTUIE3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICs345sj8J41n%2FbVZKHcyO7f2cj%2FSR0GK3z0HAUjBoT8AiEAssUSEiouVvJsgvsNRQIaBPDDhoMLePXQKX3gXuXueNYq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDIekMIBxet6AvPzAXyrcAwR0GH95oVslpWgQX3QBgSlW0Lrt9UoNQwZY6zE8vE81byauY4pvVXCZZNhQx%2FPmhLve6TJ%2BMRHFZFLw7sWEKIUtNxafJPFBdx%2BnO%2BZyBYdc6v%2By0tUa7f1WZjyTOZI%2F%2BUnzUOizbE%2BRLnosvimtnsnyhhRW8oN7Fvqi62EwyPpO8xf3a%2BgHat2NOdj0pr3Drli2qXUscHphZunRD%2Ft%2Bl9G7B0ALhPBnA60j82FsG5c0mRfM9n%2F7iMnRAq9p0VC6VE9uRD7Y1I%2BR%2BGlIypi2TG2orIsyNMgUv9%2Bcfom950Dcw54GlmSNvbV1nc9muzr59ETNURvdCbAW8cUmHLfXRtCr%2BU1domHyweFbhDQshnyoLksjD3IlFUpxHcm2fld%2BJPz7WLxto39403pxpPA5fTFuyQD%2Bqt5lM456FJJsMJcX4kyyFYaFK0IhiqTmJ2QjUvjWLtsqMSX2SBX8HjdPOJ6wNH5ANi0mIeg03RSFkqwbrOhUqeTZE0odw6Hrqm5dm%2FqNhW6JYQ979yegTZS86RDY04mym6rQL3IWH2dRGd1tZ0QaPa0T%2BFHPZ%2F2oevwooRRin5DlT8%2FQUxkLeDaM5wlYZMukfgTNLm7kaHMpk4521%2FeA8eGGspHnowvDMOmw2MMGOqUBdbgYm3MgrIC0RDGqPPnr1BCXSGCEVRyMrm%2BMFJTZzk%2Fxizedsvc3tCn5Z0aCYvRWZ9WIxl2PoN4cadXu72sYIM4xKVYPFP6DJwRAvWNIG9OZrFOeReIZ%2BjL%2FBa9PGDNyuaIeCZQNUZ64ODsBcl7G6BV%2BR8otG%2B0v4YmqK6nIxeb8P5H9YbNaOL75e0sCI0JfIBa0wO0FXMaxcddA8nQc8NT%2F447l&X-Amz-Signature=5b79001ab17de5f48b2053e2ef094f465aac90549f9523a07689baf50bc3254d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ALTUIE3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICs345sj8J41n%2FbVZKHcyO7f2cj%2FSR0GK3z0HAUjBoT8AiEAssUSEiouVvJsgvsNRQIaBPDDhoMLePXQKX3gXuXueNYq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDIekMIBxet6AvPzAXyrcAwR0GH95oVslpWgQX3QBgSlW0Lrt9UoNQwZY6zE8vE81byauY4pvVXCZZNhQx%2FPmhLve6TJ%2BMRHFZFLw7sWEKIUtNxafJPFBdx%2BnO%2BZyBYdc6v%2By0tUa7f1WZjyTOZI%2F%2BUnzUOizbE%2BRLnosvimtnsnyhhRW8oN7Fvqi62EwyPpO8xf3a%2BgHat2NOdj0pr3Drli2qXUscHphZunRD%2Ft%2Bl9G7B0ALhPBnA60j82FsG5c0mRfM9n%2F7iMnRAq9p0VC6VE9uRD7Y1I%2BR%2BGlIypi2TG2orIsyNMgUv9%2Bcfom950Dcw54GlmSNvbV1nc9muzr59ETNURvdCbAW8cUmHLfXRtCr%2BU1domHyweFbhDQshnyoLksjD3IlFUpxHcm2fld%2BJPz7WLxto39403pxpPA5fTFuyQD%2Bqt5lM456FJJsMJcX4kyyFYaFK0IhiqTmJ2QjUvjWLtsqMSX2SBX8HjdPOJ6wNH5ANi0mIeg03RSFkqwbrOhUqeTZE0odw6Hrqm5dm%2FqNhW6JYQ979yegTZS86RDY04mym6rQL3IWH2dRGd1tZ0QaPa0T%2BFHPZ%2F2oevwooRRin5DlT8%2FQUxkLeDaM5wlYZMukfgTNLm7kaHMpk4521%2FeA8eGGspHnowvDMOmw2MMGOqUBdbgYm3MgrIC0RDGqPPnr1BCXSGCEVRyMrm%2BMFJTZzk%2Fxizedsvc3tCn5Z0aCYvRWZ9WIxl2PoN4cadXu72sYIM4xKVYPFP6DJwRAvWNIG9OZrFOeReIZ%2BjL%2FBa9PGDNyuaIeCZQNUZ64ODsBcl7G6BV%2BR8otG%2B0v4YmqK6nIxeb8P5H9YbNaOL75e0sCI0JfIBa0wO0FXMaxcddA8nQc8NT%2F447l&X-Amz-Signature=6600178ab2493c65f607e8037d5857f66b3648d6cc31eaaecdc43efdc48c1dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
