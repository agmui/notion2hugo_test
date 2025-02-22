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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FX7TAR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrtNR19c6HqTL92GZMTtZXspMGi7a7Lhwk6v8LKwCpPwIgRvdUSEacSABeOvEE7Z6NA%2BmakCD24gmZsugMW5JStk0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BkK6NmVxQCqz85gyrcA3maGavbzLNzglHN%2FjfYSRymye9sW7XWKVFtOgMj79ApA%2FIREpNWoofAzLPCqLG8jZzi%2FsehDlUnG3TqYubYGevazqmSoGDtbIDyBZiHmomqnSByddDATlfr7qZKdLyT0EGIBuFXtkORCkK3PEeNVFUtA7xiu0VgcRLqACX5ZpY6upPFJPpdMz9tme82iL5flZ6XG%2BrZu7nrnywADgh2ogs7zkLOo0SKr8vcb1bnzXYeX0bCrMjQ9g%2BRTdLEyOUPME06%2FRUcy8LyWlcueXduyDHpMA%2FTGz2DF2WK5kLB9pf41pI%2B2NmSBAuDoR0gUlWG%2BLe4%2FhfjvuOk58sCMuv2xnh5dyTlTzyRK88hwwBHjGBELmDgADilKHr%2B1UNf0OUM%2BEN%2FzwVQyZLHlvIYkWwbk8kgk8%2FzXmXevBhPtAPp4Nxhqebfte%2BscdEK0iXnk%2FJRjI%2F4g4Y%2FsH1dGmsk2YoCfHb9ov4EmfaqFZsIN04%2Bskh6ZaMx3OvHP9j1R%2B7r9kgqEiBpGQIEfyByBJHicLLhrIy0x02paZzTGeugZzHmDTj2KSPBhPu3sY2LMRcIgxxXZ%2ByCsqkG2wCKsMUjTzJQ3KZ9O7QDQmpY%2B%2BJo%2FMTdAdwX1OyIVPMnYGCRdkVCMIuq5b0GOqUBDQlOrWOP45P49cTRuJF0YWcwpNX6MiqgadJvfNRi6Y2bTLxXZwygI1ok1Y2JvqIMZlWHTvE%2BGzroWUbBaIL%2F1Qt1Mjl7esyDs1qPHnotZ1pZYoCpxDVnFGhtl7PFfb8c%2FHF%2FNrQQKobMm3u%2FQDhxt0U3jN3HhgkpnlvKgRC8gZ%2BhxpbZVCB1PdGRWpUhJug6hbf3gwa2V24rBawDOTCGEif9dw%2B4&X-Amz-Signature=b357f8b8d382a760dd7b7f5636dcdf00ab67f5094852cd4cf31a2dc6f5e49fa8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FX7TAR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrtNR19c6HqTL92GZMTtZXspMGi7a7Lhwk6v8LKwCpPwIgRvdUSEacSABeOvEE7Z6NA%2BmakCD24gmZsugMW5JStk0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BkK6NmVxQCqz85gyrcA3maGavbzLNzglHN%2FjfYSRymye9sW7XWKVFtOgMj79ApA%2FIREpNWoofAzLPCqLG8jZzi%2FsehDlUnG3TqYubYGevazqmSoGDtbIDyBZiHmomqnSByddDATlfr7qZKdLyT0EGIBuFXtkORCkK3PEeNVFUtA7xiu0VgcRLqACX5ZpY6upPFJPpdMz9tme82iL5flZ6XG%2BrZu7nrnywADgh2ogs7zkLOo0SKr8vcb1bnzXYeX0bCrMjQ9g%2BRTdLEyOUPME06%2FRUcy8LyWlcueXduyDHpMA%2FTGz2DF2WK5kLB9pf41pI%2B2NmSBAuDoR0gUlWG%2BLe4%2FhfjvuOk58sCMuv2xnh5dyTlTzyRK88hwwBHjGBELmDgADilKHr%2B1UNf0OUM%2BEN%2FzwVQyZLHlvIYkWwbk8kgk8%2FzXmXevBhPtAPp4Nxhqebfte%2BscdEK0iXnk%2FJRjI%2F4g4Y%2FsH1dGmsk2YoCfHb9ov4EmfaqFZsIN04%2Bskh6ZaMx3OvHP9j1R%2B7r9kgqEiBpGQIEfyByBJHicLLhrIy0x02paZzTGeugZzHmDTj2KSPBhPu3sY2LMRcIgxxXZ%2ByCsqkG2wCKsMUjTzJQ3KZ9O7QDQmpY%2B%2BJo%2FMTdAdwX1OyIVPMnYGCRdkVCMIuq5b0GOqUBDQlOrWOP45P49cTRuJF0YWcwpNX6MiqgadJvfNRi6Y2bTLxXZwygI1ok1Y2JvqIMZlWHTvE%2BGzroWUbBaIL%2F1Qt1Mjl7esyDs1qPHnotZ1pZYoCpxDVnFGhtl7PFfb8c%2FHF%2FNrQQKobMm3u%2FQDhxt0U3jN3HhgkpnlvKgRC8gZ%2BhxpbZVCB1PdGRWpUhJug6hbf3gwa2V24rBawDOTCGEif9dw%2B4&X-Amz-Signature=f774fb4ca20bfaf234d7a6714ba9bb5bf2687821f8f16d70330f57cdb1baec81&X-Amz-SignedHeaders=host&x-id=GetObject)

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
