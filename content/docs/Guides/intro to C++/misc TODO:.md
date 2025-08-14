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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEEMOE4Q%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoLPzPsQ8wc5Wchq3nOFGWHx0AS%2FkLDKbArg%2B5HO4YtAIhAK%2BLftHB9KBspf4Zx8sy%2FoNPF%2BQ8T02P9DymZrk7FFG1Kv8DCEEQABoMNjM3NDIzMTgzODA1Igza%2BHEOmx68J8MJ6xEq3AOBjRA49y1sxMIOlX99oyz6A17ZSAfdWtiPoVdzbdfQeVE4JREzrA2vMk7wbqhsJQcV6evL3ICGovWxpiv5Hlm18h6dy3D1i0RrNAS9E3rJhSxAbOWBgfwV3LQpzO8%2Bx1%2B43OoYMmFLYdVZShqd4Gj%2FmLG8ClMjtDrrIrfcc6%2FbQZvcZ5K23GEcnfpgYIGicygP675DwoSFmt1QjCDuZIWKgb6w9A3ThA%2Btry3N6mBKn7tHEWl6bw%2FLC1fb%2FphJVcU7jHJK1WacH07AWnjaEfmueMxRey4VIMlfAGSnPQvX3fignszKQmu6qfdzlduBqt5zCFqIb8FShYnpjQAnxTOwCLxkQeCkrIZGhaqIrcw0oX70Ty%2F%2FrMT8Rntqmblu2M3Ua5S7el3B0hTW%2FQmk0d%2BHoN4B%2FlAw%2BLetDPLDgrCik71bJwyYrYRmu7CwXpmxqMDdVZ1vxUwyy0AjXi0evWhGGAfqDCpQqMi3nPD%2BWgR73C2KduinqWoyz%2BKwFH1w%2FhSlF%2F2WDGqRN4pVP4xUGw51AEwx4kRofBzFu6AJg4zBS4ZeTYLDIw4DURhFr5nes4DugQ1Z869zzjlv1M7jb7PWUsK5f9d2xj3V0oca7q5il7eEEBEpqfliHWfTqDCPrvbEBjqkAakA7Y6zznpUKUft%2BuGdEAgaw9icEIx7AqQhBT%2FwQHvuT98CpOIhg9MUjAyupff6A9AheuaXMfRM7fGC0z4ypVo0zOciKooM0wm29JtVULgXlf04elx7ZHxxa6aqnTzNp0h6aGRMkO1Nq7Lnptj%2BtwlkqTlN0cjoGzemjE4Zb%2Fmve2KBd54RkrS7OfKSHNqS3BuC98rUEgprmL4elNPaIJPNtt0V&X-Amz-Signature=be90c47ace2cf41677786544e2441980129d80a6457b0033e503de87c456bc14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEEMOE4Q%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoLPzPsQ8wc5Wchq3nOFGWHx0AS%2FkLDKbArg%2B5HO4YtAIhAK%2BLftHB9KBspf4Zx8sy%2FoNPF%2BQ8T02P9DymZrk7FFG1Kv8DCEEQABoMNjM3NDIzMTgzODA1Igza%2BHEOmx68J8MJ6xEq3AOBjRA49y1sxMIOlX99oyz6A17ZSAfdWtiPoVdzbdfQeVE4JREzrA2vMk7wbqhsJQcV6evL3ICGovWxpiv5Hlm18h6dy3D1i0RrNAS9E3rJhSxAbOWBgfwV3LQpzO8%2Bx1%2B43OoYMmFLYdVZShqd4Gj%2FmLG8ClMjtDrrIrfcc6%2FbQZvcZ5K23GEcnfpgYIGicygP675DwoSFmt1QjCDuZIWKgb6w9A3ThA%2Btry3N6mBKn7tHEWl6bw%2FLC1fb%2FphJVcU7jHJK1WacH07AWnjaEfmueMxRey4VIMlfAGSnPQvX3fignszKQmu6qfdzlduBqt5zCFqIb8FShYnpjQAnxTOwCLxkQeCkrIZGhaqIrcw0oX70Ty%2F%2FrMT8Rntqmblu2M3Ua5S7el3B0hTW%2FQmk0d%2BHoN4B%2FlAw%2BLetDPLDgrCik71bJwyYrYRmu7CwXpmxqMDdVZ1vxUwyy0AjXi0evWhGGAfqDCpQqMi3nPD%2BWgR73C2KduinqWoyz%2BKwFH1w%2FhSlF%2F2WDGqRN4pVP4xUGw51AEwx4kRofBzFu6AJg4zBS4ZeTYLDIw4DURhFr5nes4DugQ1Z869zzjlv1M7jb7PWUsK5f9d2xj3V0oca7q5il7eEEBEpqfliHWfTqDCPrvbEBjqkAakA7Y6zznpUKUft%2BuGdEAgaw9icEIx7AqQhBT%2FwQHvuT98CpOIhg9MUjAyupff6A9AheuaXMfRM7fGC0z4ypVo0zOciKooM0wm29JtVULgXlf04elx7ZHxxa6aqnTzNp0h6aGRMkO1Nq7Lnptj%2BtwlkqTlN0cjoGzemjE4Zb%2Fmve2KBd54RkrS7OfKSHNqS3BuC98rUEgprmL4elNPaIJPNtt0V&X-Amz-Signature=5d8a61bd3b62f5fd2b292105fef3bf80bd6a23726d4baee63f653ed4a3d3aa1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
