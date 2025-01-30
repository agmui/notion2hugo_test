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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JP2T4EG%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGKmY3oMTu4W6Ez2%2B7XJhTzNWi5WHqT8klQryLPGTjbAIgHajQNELQfoyncoUhnvE0Ajpds6%2F5St4JFZUdPLBHGdYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlovC8pbA3ge00mFircAyalxn6rY0rcx1XCA24wjRGvv%2BwkOoUjliDGedG0VKQ3BvDwfRwwfgfgPsSAVJyPXyVLb3NWdE3lsyvSzyJnBekp8MBf3ZOl6B4BAES3Nnp74lw9o4h69beYa2bAciZUI9xEZ8aauYxzRQDhHJ1ovCwY8b5EIF9jVmfVo202Cc0sFtjt6Y%2B9pQQpDUz4FXPqyXhB8XBXcx7vQsIAL2ce%2BOgT3gojCc3Vdvki68q%2BGckysARzYU4bRcGijN5lIoVFxKF%2BurTtsI2onWXwk2gK%2B68bRYrbySk8TJjZN6zKmkBZwI8SPUPWv%2BJx0eeOM9Hd1MVZhX6T6jym2WE%2BWudQFos5MYG9U78mlfSEIW6Jtp71Fl5nw78Uzi8%2BS1EcdTt0ibQz82xzvGfzIolr%2BESzkPO6HUqSl%2BsRrLmPNMUJ0BMYEuN7py%2FU7us5rhQdrnakAaM971Xv768lhlMRO7T3wwqgL0Uaz8umNGCCNzFpFzoFOudfXHvOO90bI2f2umTqLX0071GF71XNtFGC1RN7QNkxUP%2FuCRLPMl3llr6tvzpgFjLq4zNs%2BNCyQ59cDs94Rm9R9mTVXt3fd5nN9eykrVwWZqIjQ1pjpNeXPQoOkf5CAr4p9TTUaXBBlbqdMJbg7bwGOqUBlrr63zMpPcTqwcF%2FJLfceCykQxnsanuz9WyNEW4h%2BsLSLIqMgZYRs8nZF%2BqhHqljTzXb0VTT31WS2AdCVvuy2phwGD9O2dQD4YpeP1VQ1Qx%2BFHuwtIRgLGyFhwWfhto%2BgQSNnU%2FyGsbyHkSW2Vh1LDkWSaF2FrYZLJa%2B2MEU0p74xiAgMsj22DGu4WGLb6otT1XBrWXTkt7%2F0zryAjxf9Z7Dy9MZ&X-Amz-Signature=7d35141ca66e62903a8ab80b84d67a447439e1bbe95e2eb71b8f6a71c4f4ad0e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JP2T4EG%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGKmY3oMTu4W6Ez2%2B7XJhTzNWi5WHqT8klQryLPGTjbAIgHajQNELQfoyncoUhnvE0Ajpds6%2F5St4JFZUdPLBHGdYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlovC8pbA3ge00mFircAyalxn6rY0rcx1XCA24wjRGvv%2BwkOoUjliDGedG0VKQ3BvDwfRwwfgfgPsSAVJyPXyVLb3NWdE3lsyvSzyJnBekp8MBf3ZOl6B4BAES3Nnp74lw9o4h69beYa2bAciZUI9xEZ8aauYxzRQDhHJ1ovCwY8b5EIF9jVmfVo202Cc0sFtjt6Y%2B9pQQpDUz4FXPqyXhB8XBXcx7vQsIAL2ce%2BOgT3gojCc3Vdvki68q%2BGckysARzYU4bRcGijN5lIoVFxKF%2BurTtsI2onWXwk2gK%2B68bRYrbySk8TJjZN6zKmkBZwI8SPUPWv%2BJx0eeOM9Hd1MVZhX6T6jym2WE%2BWudQFos5MYG9U78mlfSEIW6Jtp71Fl5nw78Uzi8%2BS1EcdTt0ibQz82xzvGfzIolr%2BESzkPO6HUqSl%2BsRrLmPNMUJ0BMYEuN7py%2FU7us5rhQdrnakAaM971Xv768lhlMRO7T3wwqgL0Uaz8umNGCCNzFpFzoFOudfXHvOO90bI2f2umTqLX0071GF71XNtFGC1RN7QNkxUP%2FuCRLPMl3llr6tvzpgFjLq4zNs%2BNCyQ59cDs94Rm9R9mTVXt3fd5nN9eykrVwWZqIjQ1pjpNeXPQoOkf5CAr4p9TTUaXBBlbqdMJbg7bwGOqUBlrr63zMpPcTqwcF%2FJLfceCykQxnsanuz9WyNEW4h%2BsLSLIqMgZYRs8nZF%2BqhHqljTzXb0VTT31WS2AdCVvuy2phwGD9O2dQD4YpeP1VQ1Qx%2BFHuwtIRgLGyFhwWfhto%2BgQSNnU%2FyGsbyHkSW2Vh1LDkWSaF2FrYZLJa%2B2MEU0p74xiAgMsj22DGu4WGLb6otT1XBrWXTkt7%2F0zryAjxf9Z7Dy9MZ&X-Amz-Signature=725665fc99a8f4941234348c5ceb0a1ce34a025486b729f48dea877b0023d425&X-Amz-SignedHeaders=host&x-id=GetObject)

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
