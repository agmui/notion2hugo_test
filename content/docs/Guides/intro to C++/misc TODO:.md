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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBVPILNZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIDMug1wjVn230GTre%2FF2s1DOXK0QxIAdDvmxQe4lgkh2AiEA9M5nlwjkl5%2B%2BX6BzVPuu%2F3X2V95dTjdU7YSYPUYebvUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIkNMh24MTwxCqnMSrcA7HkrwBnxzWUsLN84q8sfOKYlf49DGRZ%2FYnuUPE5RxsIPqzJ%2FQHY1BSln6xPLw%2BkPVuo0Nmrs7M42JeIxjdEulYu1SUOpQSD5fMCq7zmO3ydmmgxzAPsbFecKsYgzldyljk9LV1PzszjJHB%2FuZQBXwDLyQuxKBPDgNOZRVgqi1NJp533m1zPpyKiXPi2ckR6Sfh%2BpzI4DL8h%2FltRpDSfyWUP8sPS3bhzs%2FsBLWdDHI52t%2B5Nv3SN4ti9OeswrrWEB40ZghQuon1yMMak6A1sk9bJhBIfaaGLJ5pkxA0wwjsi%2FBthfRNKQFYGqMsr9gD0vodtuUy5YL3JsD9nENdLdWL%2FphRPicyGjLaK3N83mdXAd0OPrVXc2nM8N%2FFGuey8p6%2B2m8418GdG3kCu0SrXfdHBy6LvicV22VilC034TIG24dbamitfpvvQMy13%2BAu2pGPBqWkCAiA6nE6BdFboPHPr7y%2F2JsLDlx1JW7HILgsvyHIoYUly4Hxb%2Fe%2BIyO4LpD22%2BZlUSML7mapApzZOk2KpmaAo6IJkJiCxjxJmu7AtmI8ggV%2FgyURU7zd7g1xZ53NYWSNSy7jdusUucAZ7ijD6ZvIaNiUMTawREuRQznadAOia9Org6lPBygZIMJqkxsAGOqUBTRb9KjPGD72l0dHLQTuPInl6aI61eQFCLbbQtqBmentRPIO5zpcdU5k5EemHV0eC4hw3VajjdjLJIO%2BLaOxvdXqkRXVx1aI7S4llZhtktSIMxZc49j4csJt%2B8SUZMk7%2BCPkdTI8g4IXNniX7sVHuuJHP947yJLOli2DjgqKMrD72KfInMqIABnzox9QR%2B0Zd73%2B9VL5QzJkFmT4SmuJ3jg9Rit8G&X-Amz-Signature=d8ba7d911b05feb214f8a41fcec694173e92eda3e44644fd9e14a5c0d462dd36&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBVPILNZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIDMug1wjVn230GTre%2FF2s1DOXK0QxIAdDvmxQe4lgkh2AiEA9M5nlwjkl5%2B%2BX6BzVPuu%2F3X2V95dTjdU7YSYPUYebvUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIkNMh24MTwxCqnMSrcA7HkrwBnxzWUsLN84q8sfOKYlf49DGRZ%2FYnuUPE5RxsIPqzJ%2FQHY1BSln6xPLw%2BkPVuo0Nmrs7M42JeIxjdEulYu1SUOpQSD5fMCq7zmO3ydmmgxzAPsbFecKsYgzldyljk9LV1PzszjJHB%2FuZQBXwDLyQuxKBPDgNOZRVgqi1NJp533m1zPpyKiXPi2ckR6Sfh%2BpzI4DL8h%2FltRpDSfyWUP8sPS3bhzs%2FsBLWdDHI52t%2B5Nv3SN4ti9OeswrrWEB40ZghQuon1yMMak6A1sk9bJhBIfaaGLJ5pkxA0wwjsi%2FBthfRNKQFYGqMsr9gD0vodtuUy5YL3JsD9nENdLdWL%2FphRPicyGjLaK3N83mdXAd0OPrVXc2nM8N%2FFGuey8p6%2B2m8418GdG3kCu0SrXfdHBy6LvicV22VilC034TIG24dbamitfpvvQMy13%2BAu2pGPBqWkCAiA6nE6BdFboPHPr7y%2F2JsLDlx1JW7HILgsvyHIoYUly4Hxb%2Fe%2BIyO4LpD22%2BZlUSML7mapApzZOk2KpmaAo6IJkJiCxjxJmu7AtmI8ggV%2FgyURU7zd7g1xZ53NYWSNSy7jdusUucAZ7ijD6ZvIaNiUMTawREuRQznadAOia9Org6lPBygZIMJqkxsAGOqUBTRb9KjPGD72l0dHLQTuPInl6aI61eQFCLbbQtqBmentRPIO5zpcdU5k5EemHV0eC4hw3VajjdjLJIO%2BLaOxvdXqkRXVx1aI7S4llZhtktSIMxZc49j4csJt%2B8SUZMk7%2BCPkdTI8g4IXNniX7sVHuuJHP947yJLOli2DjgqKMrD72KfInMqIABnzox9QR%2B0Zd73%2B9VL5QzJkFmT4SmuJ3jg9Rit8G&X-Amz-Signature=47ecc6e82480f36f8ecbda088b13509a19b977f53cf2d8966c4a4f8a1ac57d7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
