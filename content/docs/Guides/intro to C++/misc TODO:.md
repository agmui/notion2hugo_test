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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VEZHP7Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHywwN7THtKrwYtbh5INQb5vELvRkxywozzYMlBuI%2BcdAiAwOf5d0kpDY8ekleLQ8q4kbflKcSU15Q7rOo0b5rugFir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMzhdsmBFfszO3o71lKtwDvcp6WkEQxsTIp4ElfDkK1%2FWAy0IIoljUC3eobfb3qsJ%2F8hp7woDZQD8vPi0AhHgCoqSpMOCjyOZGU9eCsNXZHKf0EmTv5JKikOF3T5NupftSAa7%2Br%2Bodr2kBZ3u1fdTHOQlHGX6ERIBLMY%2F%2FD6evGG1imp5J50kuNSillGd0Mak2LYu5W4E9qji28jV5Rv3gGHa65LJSFgzixVEwmp7lCAQpydoR7q0BofDTnQKYbSMyGrJTsHNfZthcm5UKGgM7q0j0DS6uHMDFQGL0TOz61gqT3jJCssZGN6rIjK%2B16cp4N9zF4BTi%2F%2FEnp5Xjk18c5bDLjUUoEqhvue5ekvcch5ITRkN8oZ1yXSjuRmnd%2BM8DuAjFC3hL08H3zNUSPQhZo9YAqs1YHCUFRL03FwgYZN7PH7P3a4anj0Sxs0EGCFzLv35qetB7z%2Fs0hmyJnsQYQb1fqchkEr9ynZH18FjFl3HvqkoR4IEdK03suc%2BJXiDGPA0zGcvGB7JCS1T9APuzrS%2BR40XJqqGesCGpCn6JnJBrhcW3emTMxvkkmrQqP4ajGMqirJbAbhqqmX9Eyv%2BiiZJOZITgybD%2FAqaE99AQPiNH3slVQhzDyX990vwRADECVV0KcyH2Aer%2BXMAwqtqIxAY6pgGlsdI1rxXqOCs80l6atjwdoqdRs5GuhayO2H07i6hmo4daBMyA7Ff3qMVOaVupMA8AIJgmLhGDCDFhSbc54yiA7o%2FjlX2ckAl9dZKiRN3gabm%2BaG1CxuirlkzkGH%2BmbqfHlUPLt0X%2BfmBPCp%2FU97i6K6T7%2Fb%2FnhCWhEr9U%2FCcoVRC8aoI1ZuzKx7ZB7GlnSb7ScVlKUc4jLVIkgQ%2BihWRiYdiEzH3A&X-Amz-Signature=b61258a966ee3488819d20508a33b21ffd978fc4b3184b4a1e5a3c2c177ebc65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VEZHP7Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHywwN7THtKrwYtbh5INQb5vELvRkxywozzYMlBuI%2BcdAiAwOf5d0kpDY8ekleLQ8q4kbflKcSU15Q7rOo0b5rugFir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMzhdsmBFfszO3o71lKtwDvcp6WkEQxsTIp4ElfDkK1%2FWAy0IIoljUC3eobfb3qsJ%2F8hp7woDZQD8vPi0AhHgCoqSpMOCjyOZGU9eCsNXZHKf0EmTv5JKikOF3T5NupftSAa7%2Br%2Bodr2kBZ3u1fdTHOQlHGX6ERIBLMY%2F%2FD6evGG1imp5J50kuNSillGd0Mak2LYu5W4E9qji28jV5Rv3gGHa65LJSFgzixVEwmp7lCAQpydoR7q0BofDTnQKYbSMyGrJTsHNfZthcm5UKGgM7q0j0DS6uHMDFQGL0TOz61gqT3jJCssZGN6rIjK%2B16cp4N9zF4BTi%2F%2FEnp5Xjk18c5bDLjUUoEqhvue5ekvcch5ITRkN8oZ1yXSjuRmnd%2BM8DuAjFC3hL08H3zNUSPQhZo9YAqs1YHCUFRL03FwgYZN7PH7P3a4anj0Sxs0EGCFzLv35qetB7z%2Fs0hmyJnsQYQb1fqchkEr9ynZH18FjFl3HvqkoR4IEdK03suc%2BJXiDGPA0zGcvGB7JCS1T9APuzrS%2BR40XJqqGesCGpCn6JnJBrhcW3emTMxvkkmrQqP4ajGMqirJbAbhqqmX9Eyv%2BiiZJOZITgybD%2FAqaE99AQPiNH3slVQhzDyX990vwRADECVV0KcyH2Aer%2BXMAwqtqIxAY6pgGlsdI1rxXqOCs80l6atjwdoqdRs5GuhayO2H07i6hmo4daBMyA7Ff3qMVOaVupMA8AIJgmLhGDCDFhSbc54yiA7o%2FjlX2ckAl9dZKiRN3gabm%2BaG1CxuirlkzkGH%2BmbqfHlUPLt0X%2BfmBPCp%2FU97i6K6T7%2Fb%2FnhCWhEr9U%2FCcoVRC8aoI1ZuzKx7ZB7GlnSb7ScVlKUc4jLVIkgQ%2BihWRiYdiEzH3A&X-Amz-Signature=47647ff8662c898e0d2fe6dc5031a99243f914e51acb61463b1c0d5fc3d4796f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
