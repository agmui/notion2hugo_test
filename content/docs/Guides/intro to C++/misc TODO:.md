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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HV6UDA2%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS%2FkQeOsTR7FctzF8Q1vzLjSWNEG3ov3cNsSEAHiAkSwIgL0HkdgSJZIqgBWSkRiNjS5VrOBYu671YXWSrfsSkGjUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzeQMZLK%2FdrmOvsoCrcA0lipD1MXC2o3FRDGHXomUqeI4PUvn3kCz1wjPikPmmHApNMidyEi9kA7Lnk%2FAvtezYQBK%2BptWN8OblUJFsUZVXJmXVsx9QOk%2FQQCVieySfj7K9PTnLEbO5kiLNlc3jNWeUnEcMMI2I6xB93DU6ZLxeAH3xJNBZYRxX09bl0sSSvvLGf8nZk5Gq5gDHjei1PhZmJxdZnTUY7g9gCpi8nz0ChUFcQ9jXdLzeZ3%2BABvOCg2HZnDYeaKsyK8UUg6Qee0EA7ZAcGSG5jo2kolqd0pbmH6TtegIss4ojfSYNT8jPP7HLOo0PFoqi0EoGCLah8lt4fduHLbFYguB0mojynO74aJG2H7XF0P%2FKI38DKDqRfKXH7Pa%2FIGlzxPidqhLQidJp8w2d8PS1zefh7nVPWjcWV03Re%2B3cyq3rmVTFQwB%2FRDvE7DBq9SLfsN0Df6wersXitlkGlnIFhTSUxK9cfpHxe6jV64bSLUeZw25Wbv22BGO6jv1Xja3erPLJUG%2BcDhGSUEo38r6ZDFxrv1q6qVJhjE%2F0mlUVJQCFLshN5jPy90vB6adqARvEa1ICEbCX7eXFX%2Bzq3owOktcXQrcNzRwu4im6SFsvIUWFSvaGnsWjnS54QSqcJIWPBT5ngMK60xscGOqUBjgIuee7jDNqZTYsXSNh80fWyc%2Fek2TAKJvSeZtzKdCvSEmypP%2BuHywuSWft60TijEWzQ95iCXKn6uczx7frVZPPdWHNsSyldznR2B3qE%2BbrRP%2FGRNn%2BcPigtDxOs9Ie9gFILjNVGYVNYoK4BOwdsRLNGdUfJ%2FlKpnCO%2BdTH9K3neSRDog77iphD4z%2FyFoowzRf9Q2uTEnE9d%2FylEhNSDHTFX0YEk&X-Amz-Signature=e58cd8585886aaa02e5a8a25e9413d363d87097e87336e05a166b5fdbaa3cbf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HV6UDA2%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS%2FkQeOsTR7FctzF8Q1vzLjSWNEG3ov3cNsSEAHiAkSwIgL0HkdgSJZIqgBWSkRiNjS5VrOBYu671YXWSrfsSkGjUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzeQMZLK%2FdrmOvsoCrcA0lipD1MXC2o3FRDGHXomUqeI4PUvn3kCz1wjPikPmmHApNMidyEi9kA7Lnk%2FAvtezYQBK%2BptWN8OblUJFsUZVXJmXVsx9QOk%2FQQCVieySfj7K9PTnLEbO5kiLNlc3jNWeUnEcMMI2I6xB93DU6ZLxeAH3xJNBZYRxX09bl0sSSvvLGf8nZk5Gq5gDHjei1PhZmJxdZnTUY7g9gCpi8nz0ChUFcQ9jXdLzeZ3%2BABvOCg2HZnDYeaKsyK8UUg6Qee0EA7ZAcGSG5jo2kolqd0pbmH6TtegIss4ojfSYNT8jPP7HLOo0PFoqi0EoGCLah8lt4fduHLbFYguB0mojynO74aJG2H7XF0P%2FKI38DKDqRfKXH7Pa%2FIGlzxPidqhLQidJp8w2d8PS1zefh7nVPWjcWV03Re%2B3cyq3rmVTFQwB%2FRDvE7DBq9SLfsN0Df6wersXitlkGlnIFhTSUxK9cfpHxe6jV64bSLUeZw25Wbv22BGO6jv1Xja3erPLJUG%2BcDhGSUEo38r6ZDFxrv1q6qVJhjE%2F0mlUVJQCFLshN5jPy90vB6adqARvEa1ICEbCX7eXFX%2Bzq3owOktcXQrcNzRwu4im6SFsvIUWFSvaGnsWjnS54QSqcJIWPBT5ngMK60xscGOqUBjgIuee7jDNqZTYsXSNh80fWyc%2Fek2TAKJvSeZtzKdCvSEmypP%2BuHywuSWft60TijEWzQ95iCXKn6uczx7frVZPPdWHNsSyldznR2B3qE%2BbrRP%2FGRNn%2BcPigtDxOs9Ie9gFILjNVGYVNYoK4BOwdsRLNGdUfJ%2FlKpnCO%2BdTH9K3neSRDog77iphD4z%2FyFoowzRf9Q2uTEnE9d%2FylEhNSDHTFX0YEk&X-Amz-Signature=7bfafbce5cb6b84027ad7ccbe798d30e96613d80237e7e7c4626378d401b8220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
