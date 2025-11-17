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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EX6M3I4%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHocGs8SnvpEngXi3Vco3KSqhiKXJMjnpGUNqXaguHopAiEAyFqS3oczjgvXKg1%2BMHg0KC4nFbRcLLQ6aTBeCJJbMk0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAL%2FXNc9OM7kz1Q%2FCrcA1vi9u0NtVZ%2FsUFMASq%2By8LwxSnrc%2ByfOuBMKYsOPoyAIGZruOWWWAGvPo7EpD8SVS8CB8RO8IPGh3e%2BX4l9avB%2B0WauIGidm7ChEeATSOhjnuGn5qZ1z4wTba2UeOSukV5qJ8WbpujnTzVdxxP%2BvoeBmFKSqreUTwhRiayyvGg548X2WsjWTdLnzF13ENnH1Krpx492haDnyNwGyrrwn37dh%2FKasIGzqPltP%2FNHebiwf6%2BHrbcecds8GZyM%2B63OKxXfyjETyqlXQt6H5mg4kHrXyQrTEZQm6teJYYzQQvegZZK6EbJWfm9UJIGXGask4UjSgb7cxptpdX56ENLAvosvwMZrWAjiHAGFaxQrWTSRqwYQDt1OMskPhhisEG5aZyVilNKB4Yfg2E1dsWVmKIsoh5zYlV78N3Qw6kDet29gzbYhrFkVOu0Rio2e9P3kv4ta9ivLqNxrfJRgf%2BiudrIrbq9tvLJVqfEiwhQFPar8V4K5BkZDvhodhTnFBMHeZVCbGZipfesbUPjN8cMlsXTzUpKBAVmeUXQUvxWeDZhIVV4DDl9ApefHAXfdvQmzf1wzOgIrx7NqCxlOhff3N%2Bd7NmAsx3afhcTBs3cbxdb56INIl1tYxyaXd1QPMJ7g6cgGOqUBOZRl9zlFUq40%2FXQnlKOyHzG%2FXGJJxVE7QX%2FKspwlIxEV2Z%2BOFjMbCLcxqr%2FnJZ0OICaFE%2F4tYaZi6qOyRyFIxho328AXXitJd4gvv8znrtTZVI46p331E9JZhZJLONSgygz9FOGZkXZLoPQD6SPJESf8cD2u09XaN0QCPTc%2FHw%2BJnFeVVmyKuBI6piymCsNKyMf6d%2FmGDvCuoSYzel7IcrUM4u7V&X-Amz-Signature=6ff31982d760dede8f63a800ce9f494099f3efdc1eb12c418ff9ca3589659ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EX6M3I4%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHocGs8SnvpEngXi3Vco3KSqhiKXJMjnpGUNqXaguHopAiEAyFqS3oczjgvXKg1%2BMHg0KC4nFbRcLLQ6aTBeCJJbMk0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAL%2FXNc9OM7kz1Q%2FCrcA1vi9u0NtVZ%2FsUFMASq%2By8LwxSnrc%2ByfOuBMKYsOPoyAIGZruOWWWAGvPo7EpD8SVS8CB8RO8IPGh3e%2BX4l9avB%2B0WauIGidm7ChEeATSOhjnuGn5qZ1z4wTba2UeOSukV5qJ8WbpujnTzVdxxP%2BvoeBmFKSqreUTwhRiayyvGg548X2WsjWTdLnzF13ENnH1Krpx492haDnyNwGyrrwn37dh%2FKasIGzqPltP%2FNHebiwf6%2BHrbcecds8GZyM%2B63OKxXfyjETyqlXQt6H5mg4kHrXyQrTEZQm6teJYYzQQvegZZK6EbJWfm9UJIGXGask4UjSgb7cxptpdX56ENLAvosvwMZrWAjiHAGFaxQrWTSRqwYQDt1OMskPhhisEG5aZyVilNKB4Yfg2E1dsWVmKIsoh5zYlV78N3Qw6kDet29gzbYhrFkVOu0Rio2e9P3kv4ta9ivLqNxrfJRgf%2BiudrIrbq9tvLJVqfEiwhQFPar8V4K5BkZDvhodhTnFBMHeZVCbGZipfesbUPjN8cMlsXTzUpKBAVmeUXQUvxWeDZhIVV4DDl9ApefHAXfdvQmzf1wzOgIrx7NqCxlOhff3N%2Bd7NmAsx3afhcTBs3cbxdb56INIl1tYxyaXd1QPMJ7g6cgGOqUBOZRl9zlFUq40%2FXQnlKOyHzG%2FXGJJxVE7QX%2FKspwlIxEV2Z%2BOFjMbCLcxqr%2FnJZ0OICaFE%2F4tYaZi6qOyRyFIxho328AXXitJd4gvv8znrtTZVI46p331E9JZhZJLONSgygz9FOGZkXZLoPQD6SPJESf8cD2u09XaN0QCPTc%2FHw%2BJnFeVVmyKuBI6piymCsNKyMf6d%2FmGDvCuoSYzel7IcrUM4u7V&X-Amz-Signature=5b0795acf915d6d7b0865a23ec0e88fa6032250e93bb675b9335b75a71a236b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
