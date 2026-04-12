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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZMCGRO2%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxaeqOF%2BQ55KpsrXbjoPeatyuI7AqGx7L%2BKa3h5nxlsAiEApsxC5%2BRuv22IXMhWEAr0ZQjEXjbqwmbbIQ6p4NcG3%2BEq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHJ9Wu6ev4zSR8b9wCrcA0VRaeBTZGOvBfeMWvjU4XeUTBWym1wpKi9Z3yKqJWggtqsmm%2BabuwfzsDduXvc8M3VvM%2B1PNACal7NDAiUVMssppqCvF1bW%2BVF7Kc3tDwNuTHRjGOQnGpJnKWh%2FRs5N%2F0n%2F9z04123t2iOI3SCj%2B%2FIMQxFwim0BxU0m%2FUBg4%2FcYlXuRHo1CPy%2BqgAiN6nE8OhKxxW22%2ByPX%2Fl3RGPWT0FMoNOW4v9iNJjHsGU9wi0CmkVixFkDVoiOGbm80lqt5GU20d%2BnriFm5iR7g8U%2BnGCOIPiNi3ZsG91lOg2Il25PioYPE3QQ4Um0r85zG6Mj6nYikv45RDEXQkyS%2F2WXxcESLgO%2FCquSorKqzBjaaVWdQe01aitaLwWbqvlyIhEO6auXuO%2F8yMohKCp%2BDXJN%2FYw14Izcjm9AXcW3TiLs8iLfkItLHAuC6hzcm0ZYF9xetgrDLT9g9%2F%2BRtPGJ2CrN0cyCpMIYu2wr%2BIU2JvHAQw9Mlks0betjU%2BSlEvlUielXi8F0x28zIXQhod3XpDO9NTLzjOBkV7Ldt%2FmyH4R%2B5p9Kxi2q2tOi3WJCLrCL9s%2BA9sJ6Alrtfr0bTz9t%2BTO0%2Bp1CZbxiFDfvPsqCxO5NYHmaKQRp%2FUyTO7AuRWPWyMIyJ7M4GOqUBE%2FDeWcoFokNmj04e3QHsD2ciEFESxCxDggR7v0fRAHVjQATC8gWcYfPKJcwpEuWcHrVafuiKimTfO2HM8vjQI%2BkkU%2FOwKjSR7YCupZ4indoXHMrsvE%2FMd3jSP%2FbUGqvY29LBpG1VBdicAlOwT9ovXD3hBvKVr%2BsR9ayCHDCwVao1BEZycJIIxrMnfNUClV69FLQRFZKV9TWsZy0244b80NotKjZv&X-Amz-Signature=a1daadf07571f458fe0b82f061060b3137959e7443e580675f3622e0b74a6ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZMCGRO2%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxaeqOF%2BQ55KpsrXbjoPeatyuI7AqGx7L%2BKa3h5nxlsAiEApsxC5%2BRuv22IXMhWEAr0ZQjEXjbqwmbbIQ6p4NcG3%2BEq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHJ9Wu6ev4zSR8b9wCrcA0VRaeBTZGOvBfeMWvjU4XeUTBWym1wpKi9Z3yKqJWggtqsmm%2BabuwfzsDduXvc8M3VvM%2B1PNACal7NDAiUVMssppqCvF1bW%2BVF7Kc3tDwNuTHRjGOQnGpJnKWh%2FRs5N%2F0n%2F9z04123t2iOI3SCj%2B%2FIMQxFwim0BxU0m%2FUBg4%2FcYlXuRHo1CPy%2BqgAiN6nE8OhKxxW22%2ByPX%2Fl3RGPWT0FMoNOW4v9iNJjHsGU9wi0CmkVixFkDVoiOGbm80lqt5GU20d%2BnriFm5iR7g8U%2BnGCOIPiNi3ZsG91lOg2Il25PioYPE3QQ4Um0r85zG6Mj6nYikv45RDEXQkyS%2F2WXxcESLgO%2FCquSorKqzBjaaVWdQe01aitaLwWbqvlyIhEO6auXuO%2F8yMohKCp%2BDXJN%2FYw14Izcjm9AXcW3TiLs8iLfkItLHAuC6hzcm0ZYF9xetgrDLT9g9%2F%2BRtPGJ2CrN0cyCpMIYu2wr%2BIU2JvHAQw9Mlks0betjU%2BSlEvlUielXi8F0x28zIXQhod3XpDO9NTLzjOBkV7Ldt%2FmyH4R%2B5p9Kxi2q2tOi3WJCLrCL9s%2BA9sJ6Alrtfr0bTz9t%2BTO0%2Bp1CZbxiFDfvPsqCxO5NYHmaKQRp%2FUyTO7AuRWPWyMIyJ7M4GOqUBE%2FDeWcoFokNmj04e3QHsD2ciEFESxCxDggR7v0fRAHVjQATC8gWcYfPKJcwpEuWcHrVafuiKimTfO2HM8vjQI%2BkkU%2FOwKjSR7YCupZ4indoXHMrsvE%2FMd3jSP%2FbUGqvY29LBpG1VBdicAlOwT9ovXD3hBvKVr%2BsR9ayCHDCwVao1BEZycJIIxrMnfNUClV69FLQRFZKV9TWsZy0244b80NotKjZv&X-Amz-Signature=f96eb8711423d3b700fe0eca5166157a9344d9be4ac553102738c7677156b560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
