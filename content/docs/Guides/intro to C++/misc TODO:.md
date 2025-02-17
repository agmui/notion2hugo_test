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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P62LWLR%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAoAj5LXryOnJKBSBYn3xQzz4h2u6GE9hKSWgBMb93giAiANofHLdi3AfshBRaUn4%2BNRoY%2B3C1Wy97T9PUhIhHrPZSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMpLnZ66V4pTDSLnkLKtwDfd%2FEgIcNotxHzGlFGQKbEJbhzd1GBu1CUfndnKbWSUYub9vZCfWKp8pTjv4k5acK0CHnCIAruH5TSNsD813VgJSt1jwbZEXHZUetlF%2BW8et4%2FcJBTfnPz6pahu2o9Y6m704nyqEIikKXBqi5R8scFbTwE56rNJxOwzOPPBuVYh%2FPEAtRpUwZDTz0eqGX%2BMsvpCRwgYIhZE0j8tpQu%2BRQQXIx5Mb9F4x6jpQOjViWlpjFIR08b4nKCHH3jz36Uy4hqTouWLNFNMWUfhdpe6Lu0LVNAv07V8EP9%2BG1cbkTqmiAQpn4%2FQkAh7AHBRhSbt4r4hjM6Xr8iucxQz56Re6HHKfL8xwgQKbluAb7UKi8S%2Bhs0fjPT8rWeV%2FlMHG7%2Fruwf66wNunWPDNBGp1neV3JOx2QNoSQJZGc2qM600A7SLM%2BLrk%2F%2Bdqp4q3cRx4rkQ%2FpAiU5TkhZNhvNHJ%2FPCW4ZizSX1%2BvPj6JZziQTNjvdaIYYLzaJXUJ4Ftp%2FIAoBwjE65M3Qg%2FtJvxyKR2n8lF0XRM1js7b1IzdFYFLgSsCk6lWW1CLeWXAzv1%2BF%2FS6%2BOJG8e%2BaQ9%2Fl%2BiqIeUO2%2FdFoXbb%2BdgxWlR5Z6o5uwBmSJSmwBqAcwT1LWwqw%2BpX8wttvMvQY6pgHZ%2BxIyA6dNdRdTR98hNQG%2FPwkMBKXg3e4AL4kDE%2BuJccWEMckydKZxhP312yxb0CngmIXM%2BdITxk7KIMe6K2l8LEHyMuvfkMLujT98J8jiFKHlsndjPTw88n%2BVannF1zM1Y2HP8WFNTDVUeM2HfLEEjeG8fVwOEfXxQQdna8TG4Jb9gCu4TA7tCOr2Zk6PLwkzccJFkaTPgqq%2BqiSNtSLz8WMCCKvo&X-Amz-Signature=17205aee143be274b9af79b0cad70d45b64199a94fcf3b0b1f19365436245c52&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P62LWLR%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAoAj5LXryOnJKBSBYn3xQzz4h2u6GE9hKSWgBMb93giAiANofHLdi3AfshBRaUn4%2BNRoY%2B3C1Wy97T9PUhIhHrPZSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMpLnZ66V4pTDSLnkLKtwDfd%2FEgIcNotxHzGlFGQKbEJbhzd1GBu1CUfndnKbWSUYub9vZCfWKp8pTjv4k5acK0CHnCIAruH5TSNsD813VgJSt1jwbZEXHZUetlF%2BW8et4%2FcJBTfnPz6pahu2o9Y6m704nyqEIikKXBqi5R8scFbTwE56rNJxOwzOPPBuVYh%2FPEAtRpUwZDTz0eqGX%2BMsvpCRwgYIhZE0j8tpQu%2BRQQXIx5Mb9F4x6jpQOjViWlpjFIR08b4nKCHH3jz36Uy4hqTouWLNFNMWUfhdpe6Lu0LVNAv07V8EP9%2BG1cbkTqmiAQpn4%2FQkAh7AHBRhSbt4r4hjM6Xr8iucxQz56Re6HHKfL8xwgQKbluAb7UKi8S%2Bhs0fjPT8rWeV%2FlMHG7%2Fruwf66wNunWPDNBGp1neV3JOx2QNoSQJZGc2qM600A7SLM%2BLrk%2F%2Bdqp4q3cRx4rkQ%2FpAiU5TkhZNhvNHJ%2FPCW4ZizSX1%2BvPj6JZziQTNjvdaIYYLzaJXUJ4Ftp%2FIAoBwjE65M3Qg%2FtJvxyKR2n8lF0XRM1js7b1IzdFYFLgSsCk6lWW1CLeWXAzv1%2BF%2FS6%2BOJG8e%2BaQ9%2Fl%2BiqIeUO2%2FdFoXbb%2BdgxWlR5Z6o5uwBmSJSmwBqAcwT1LWwqw%2BpX8wttvMvQY6pgHZ%2BxIyA6dNdRdTR98hNQG%2FPwkMBKXg3e4AL4kDE%2BuJccWEMckydKZxhP312yxb0CngmIXM%2BdITxk7KIMe6K2l8LEHyMuvfkMLujT98J8jiFKHlsndjPTw88n%2BVannF1zM1Y2HP8WFNTDVUeM2HfLEEjeG8fVwOEfXxQQdna8TG4Jb9gCu4TA7tCOr2Zk6PLwkzccJFkaTPgqq%2BqiSNtSLz8WMCCKvo&X-Amz-Signature=e7c5803dcb5c35c2673e576ac49b46386cac4d7647e046621697e292262f42ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
