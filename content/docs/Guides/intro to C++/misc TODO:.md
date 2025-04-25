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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H7GZPAA%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqfB2aiG%2FttPWGVi6XKsUTZ25bVvgim7Xitk6U4B0mIwIhAIwwev54%2B0AFFrNdvjCPBYmaJQFA2GsKXI%2BBEyRCwyTtKv8DCC4QABoMNjM3NDIzMTgzODA1IgyFq5VROFgi%2BxEKBa8q3ANVzf%2BmYIgKo0m1ipXikWcEDlmDTKSz%2FAJZL8Xk3d%2F3qE4rrsx%2FV8YROgmrTIUXCA4LTI0skud8V4jVvrY%2Fji0vRMh38zE30ab8jHiWzOv8lMuRrDIr0WfaOjLY4I7JgyBxYf0D9TqIgtoJgOay54Oj0kIHDux4E9MeBESz%2BnCLzamxRZe7G9ZtsWmJrHUfwzozwz3a7F%2Byip79RgR8F%2FcBQyn4owJ1kAxUxQoUYuePUsiv%2Fju97gT%2BDL4Wn71uWF%2B%2FQkvHZFo2POCoXd%2FXaf%2FCI7tNojXjY1CQ5zDN5K1XdPFmR%2FbG7czhXMs2OA1EccMpSkBL%2BXq3ft2DVFBCKrk2tVOcTXGyxE4p1yfLMjwjGR7PCtjyaGzO%2FMxZe%2FBm8Qr8kUC1JQN1L%2BueqkWlYjkmw89nxFct6BU3m3RiEd5%2BCg%2Fny2rT%2BINTPjdzrqwlkFmaF5daVzDhDXRh3PCQ7v0pEzFPrNq9Smg6M3gHzTB%2Bv8lxvjzXDDPVdyzf6Ed%2FUBacPz8bKFjYUpZce84lJiGKm6zSnQey88wB0fJ4iD%2B8n6cDrqMzGKA8n%2BpuL5d0U8IvXKhaEujUMqVmWKIdSMXK1Fa5WhQAI7M%2FW5H966gEY45r5lpvGUNUIJaPDzDXmK7ABjqkAWmnOLJHjPAvboyyfgFjtr3fgkHnJcfyXxl4WpmNXw8UjwLRlneu%2BnZJf3hxmaQs6NLlLFjwsPmRXRDqh5L2y03MdJq8vsRrfDHKIgzBxz%2FzWbDRKYxBiT0F%2BnaDBeJMOjqRdfvdEeE3KRMp46xwBbbFVun6XP0LGDzz2rh2G08cPlgy1Jv8GskbKwMfT3YJ3CeqN6WdGczbXWCtitiRvMQH21aN&X-Amz-Signature=da2ae5a008f73e21ba7f1cde45870a42eef714cfe843df0af90af0912170a32b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H7GZPAA%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqfB2aiG%2FttPWGVi6XKsUTZ25bVvgim7Xitk6U4B0mIwIhAIwwev54%2B0AFFrNdvjCPBYmaJQFA2GsKXI%2BBEyRCwyTtKv8DCC4QABoMNjM3NDIzMTgzODA1IgyFq5VROFgi%2BxEKBa8q3ANVzf%2BmYIgKo0m1ipXikWcEDlmDTKSz%2FAJZL8Xk3d%2F3qE4rrsx%2FV8YROgmrTIUXCA4LTI0skud8V4jVvrY%2Fji0vRMh38zE30ab8jHiWzOv8lMuRrDIr0WfaOjLY4I7JgyBxYf0D9TqIgtoJgOay54Oj0kIHDux4E9MeBESz%2BnCLzamxRZe7G9ZtsWmJrHUfwzozwz3a7F%2Byip79RgR8F%2FcBQyn4owJ1kAxUxQoUYuePUsiv%2Fju97gT%2BDL4Wn71uWF%2B%2FQkvHZFo2POCoXd%2FXaf%2FCI7tNojXjY1CQ5zDN5K1XdPFmR%2FbG7czhXMs2OA1EccMpSkBL%2BXq3ft2DVFBCKrk2tVOcTXGyxE4p1yfLMjwjGR7PCtjyaGzO%2FMxZe%2FBm8Qr8kUC1JQN1L%2BueqkWlYjkmw89nxFct6BU3m3RiEd5%2BCg%2Fny2rT%2BINTPjdzrqwlkFmaF5daVzDhDXRh3PCQ7v0pEzFPrNq9Smg6M3gHzTB%2Bv8lxvjzXDDPVdyzf6Ed%2FUBacPz8bKFjYUpZce84lJiGKm6zSnQey88wB0fJ4iD%2B8n6cDrqMzGKA8n%2BpuL5d0U8IvXKhaEujUMqVmWKIdSMXK1Fa5WhQAI7M%2FW5H966gEY45r5lpvGUNUIJaPDzDXmK7ABjqkAWmnOLJHjPAvboyyfgFjtr3fgkHnJcfyXxl4WpmNXw8UjwLRlneu%2BnZJf3hxmaQs6NLlLFjwsPmRXRDqh5L2y03MdJq8vsRrfDHKIgzBxz%2FzWbDRKYxBiT0F%2BnaDBeJMOjqRdfvdEeE3KRMp46xwBbbFVun6XP0LGDzz2rh2G08cPlgy1Jv8GskbKwMfT3YJ3CeqN6WdGczbXWCtitiRvMQH21aN&X-Amz-Signature=275d91383ede37b60fb370637b448ebbf4d1c9311c715b5418ab8470656a778a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
