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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDW65TQ3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE2%2BF5AR1z0XWnG1Ko9zTpkIorYEcPELUlwEGNK9WnIBAiEArPslTzLFRG%2FwvKunhYbXQbMWx6i7UJFbLQqEJm4xus0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP9u%2Fg%2B6kSGDaBRQ2CrcA7dvKmyxIzWaPEdGqLbB3KU%2Bd1C5xNN%2BoI2a6GghUbeAh7KajI04pql%2FIv4gq%2Bue87uDcOx2px6ISjtTW5qInF4g0a4mSBNo1wPWnYVwpDy2vS7GGW0Bc%2FCsceF49myGWddPb5rDiMQ4ROGdbzQ5Oweker7wml78nY7xW%2FCtHAvKpS8oyMSyP6WSCcCEqpAUGEO7dsFMhUXAw2THP9k6H5hH4%2BYB2rsab9EXWbweVfthwoHh7kw72lY5BjXBvIc2jkE7Z5MiYAxwKBxnU%2FL3%2FthcVCrXCprs0LuJYPI89LQuxiK3JjeS7OG%2FcBkv2cQ0qIgDAISWo9kZ6eYXTYDdKkMphUG1GGr40nTv%2FDgD6PoVbTwVNG2Mics4Mid2wokQjPPXJBHwFlNffJYeIY10C%2FwYalW1scSZyxWKIhIcvr3PmOLINI461A%2FHwbz1g%2BbU9I6CSJScEVBYltjHGHB6IffPEyPWYxBBVETRqkYSwfNWmdk3H4RcMrXlkxDW6f%2BXJP%2Ffw8cbe%2BSMTnCT2N6CbtUqzmVAL2knXzhybOuW%2Biajo3YFym2igXcWD4IrSjkQCXojfXbimLzOKvO6rncO5SDZe%2FPqXiPGCtzSGvL3QGg2Y75mAys2J62GKMOCMMfMyMQGOqUBYm2qHy%2Fjyh3FYtG7%2BhjACH2ef1mA1nw%2BBFZ9xr5LacBx%2BKD3chcjfgdSr9ETLGTrRdzPdsgkMLCyi4BoN1EcH9vmSc1nW6Hwnma%2FjEyF8cDuwZjcvvuKiPAQDEYhNC7eAn02sqDhRIFf39bnL0D1OvU5rNd%2FwcDYsP%2FlBFn8XH0G8Cu89GG0dLqD%2BvczDbEhFW9tRKIgzbW4vdoXTnhFZrl5C%2BVi&X-Amz-Signature=6e924521976c272d7d4faa7009ac9bc1e997dfe2fa8a6ac3a1e12661206c8227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDW65TQ3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE2%2BF5AR1z0XWnG1Ko9zTpkIorYEcPELUlwEGNK9WnIBAiEArPslTzLFRG%2FwvKunhYbXQbMWx6i7UJFbLQqEJm4xus0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP9u%2Fg%2B6kSGDaBRQ2CrcA7dvKmyxIzWaPEdGqLbB3KU%2Bd1C5xNN%2BoI2a6GghUbeAh7KajI04pql%2FIv4gq%2Bue87uDcOx2px6ISjtTW5qInF4g0a4mSBNo1wPWnYVwpDy2vS7GGW0Bc%2FCsceF49myGWddPb5rDiMQ4ROGdbzQ5Oweker7wml78nY7xW%2FCtHAvKpS8oyMSyP6WSCcCEqpAUGEO7dsFMhUXAw2THP9k6H5hH4%2BYB2rsab9EXWbweVfthwoHh7kw72lY5BjXBvIc2jkE7Z5MiYAxwKBxnU%2FL3%2FthcVCrXCprs0LuJYPI89LQuxiK3JjeS7OG%2FcBkv2cQ0qIgDAISWo9kZ6eYXTYDdKkMphUG1GGr40nTv%2FDgD6PoVbTwVNG2Mics4Mid2wokQjPPXJBHwFlNffJYeIY10C%2FwYalW1scSZyxWKIhIcvr3PmOLINI461A%2FHwbz1g%2BbU9I6CSJScEVBYltjHGHB6IffPEyPWYxBBVETRqkYSwfNWmdk3H4RcMrXlkxDW6f%2BXJP%2Ffw8cbe%2BSMTnCT2N6CbtUqzmVAL2knXzhybOuW%2Biajo3YFym2igXcWD4IrSjkQCXojfXbimLzOKvO6rncO5SDZe%2FPqXiPGCtzSGvL3QGg2Y75mAys2J62GKMOCMMfMyMQGOqUBYm2qHy%2Fjyh3FYtG7%2BhjACH2ef1mA1nw%2BBFZ9xr5LacBx%2BKD3chcjfgdSr9ETLGTrRdzPdsgkMLCyi4BoN1EcH9vmSc1nW6Hwnma%2FjEyF8cDuwZjcvvuKiPAQDEYhNC7eAn02sqDhRIFf39bnL0D1OvU5rNd%2FwcDYsP%2FlBFn8XH0G8Cu89GG0dLqD%2BvczDbEhFW9tRKIgzbW4vdoXTnhFZrl5C%2BVi&X-Amz-Signature=220e69d910ef8385930e82ecdda751adadf5593ba5dcec9a93b594e56226c338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
