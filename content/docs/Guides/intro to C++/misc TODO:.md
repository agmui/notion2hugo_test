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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T425OPPW%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAalWSr4oCFEO7tctRvbq86pPuNUQz8rcs7a91fO1tWHAiEA0TUhCJgRkHT79BYg1mBzBMdcedo%2FnddV2iWjq%2BPe5D4qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD26Geg968gxQSQS%2BircA0AKU5zfZx5wFdHYftpTs7QNho9gi%2F6%2BZCgL6kDWeHEJN2jPKw5qxokw45XstwqIN2gftuQxCYf%2FCWuZ4IYgX8mG732UYeQa9izAJL6KRtx91xCtQ8gX3jGv%2FBW%2F6OipJ%2BvW1UIK%2F5hOyVFJM%2FG7ZWVr8HNVr1P%2BqQIlIkCC2liInUL7i813kvT1pRsBymfhIKYrpZ0djJg8b6xrv2ccvTsAyITJPYWTMkkPa9Udvdt7vyjaj83VWOr61VqsV7955OY04BgNOwTeB90Iy5oeCWXMKFZHbIMwnVdMZBpPdsXcR7%2ByY8feA5opEKBkMefbNFC2sbft61uJ93N7PzMEs40VbxmfP%2FcyE0EgZ2buYgaDd2UEedIR6d0OLNcZn3j2h0ssNabzmZWarlxknCCuwuu5RIRYTUGKZnImkw2QlOxAv2fc6%2BVkLxcskwIF%2BuAvunOR4wYqdowIq%2Bfl4dLacMbSOaPw8M2Hi0pQ0AiKGE284SDHpwm0REirveeC%2FjFNCgOwhk6ZhFKyQKWdv6vroOATWXZX4UeEgCPUYbpbq8E33yApcb4kJhcz2EWaXEfRU2s63diXR2s9u7DdLA0PJai6DEWdMY0K1oeIXYaEnC3hW25T67dxLs2BC2rZMLST%2BMEGOqUBzeDWFx%2BJdA60bFDGXNIM56EdoKc8MPntb%2BS4e0UBhv6aOLTeLiznPIcRH%2FxXlZ8DNAvLSkFsWGCYTnguKfGtJKjHrcKwIkK5VcAGJC78lWvvTkRD7jh3GZlm0hMtlyvNQyIU3X6ToBiDar%2FM75UjJiveDtnI3iw7aPxc37Hps0Q0ZuagBP4imAH7qkI2%2BKePAj3e4iSAB2FNTU%2FC8p83%2FcG6rgwh&X-Amz-Signature=477908c7fd8639c26a01390c5c7ddbefd8d91464a894a15856164bb3a5de406a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T425OPPW%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAalWSr4oCFEO7tctRvbq86pPuNUQz8rcs7a91fO1tWHAiEA0TUhCJgRkHT79BYg1mBzBMdcedo%2FnddV2iWjq%2BPe5D4qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD26Geg968gxQSQS%2BircA0AKU5zfZx5wFdHYftpTs7QNho9gi%2F6%2BZCgL6kDWeHEJN2jPKw5qxokw45XstwqIN2gftuQxCYf%2FCWuZ4IYgX8mG732UYeQa9izAJL6KRtx91xCtQ8gX3jGv%2FBW%2F6OipJ%2BvW1UIK%2F5hOyVFJM%2FG7ZWVr8HNVr1P%2BqQIlIkCC2liInUL7i813kvT1pRsBymfhIKYrpZ0djJg8b6xrv2ccvTsAyITJPYWTMkkPa9Udvdt7vyjaj83VWOr61VqsV7955OY04BgNOwTeB90Iy5oeCWXMKFZHbIMwnVdMZBpPdsXcR7%2ByY8feA5opEKBkMefbNFC2sbft61uJ93N7PzMEs40VbxmfP%2FcyE0EgZ2buYgaDd2UEedIR6d0OLNcZn3j2h0ssNabzmZWarlxknCCuwuu5RIRYTUGKZnImkw2QlOxAv2fc6%2BVkLxcskwIF%2BuAvunOR4wYqdowIq%2Bfl4dLacMbSOaPw8M2Hi0pQ0AiKGE284SDHpwm0REirveeC%2FjFNCgOwhk6ZhFKyQKWdv6vroOATWXZX4UeEgCPUYbpbq8E33yApcb4kJhcz2EWaXEfRU2s63diXR2s9u7DdLA0PJai6DEWdMY0K1oeIXYaEnC3hW25T67dxLs2BC2rZMLST%2BMEGOqUBzeDWFx%2BJdA60bFDGXNIM56EdoKc8MPntb%2BS4e0UBhv6aOLTeLiznPIcRH%2FxXlZ8DNAvLSkFsWGCYTnguKfGtJKjHrcKwIkK5VcAGJC78lWvvTkRD7jh3GZlm0hMtlyvNQyIU3X6ToBiDar%2FM75UjJiveDtnI3iw7aPxc37Hps0Q0ZuagBP4imAH7qkI2%2BKePAj3e4iSAB2FNTU%2FC8p83%2FcG6rgwh&X-Amz-Signature=d91d570029934bb2397351d9cda98805f5b24ffcb75afd1547082a0cfc2e12d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
