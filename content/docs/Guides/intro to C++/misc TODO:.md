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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BGYSGRU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUiHCniko5Q8Sk6xM%2BK%2F5LHhBnkyCPkPpbbTyZmUV%2BNAiAVylJReR4KxCXjpWh016ZEXeY5Q7zo4nphGkvuYEulZyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5VpBko5z4%2FV58fOaKtwDvUE5ni2c4A0gM4P283emKB6UGHJmyqFUOoQsa77AaztDOa5J2ft9pdI%2BmyZ9pPZKUJrLCdJ7wiAW2kq1x6iRU3Dzt8nbExQoDXDN9Z4fjhpjmgPlbb%2B4BUUu%2FJ5A4ICSnI1csNyE5Q1%2BwdTV43Wl0yX2YKNNoidALLJjbKAA1fAgbjptEcN2aij43pjeSo%2BB98Dv4qmNp7gBSnBBBGkt140wy5K87a1Se5%2BijKuf%2FNx6JKVJf30smXT23%2BaoOFNKXEJDKSbpQ2IpIf6KF3BK6bFAS5pR0bJRKnMW%2FeXW1kifDllbwo1ypi41FiJV94Wjc8FndI4bLd6HnAtrc4Bca0gQqsyjScLO1LeGehfsp109RIIJkQO7I2%2BVhaCptRc5wQ9e6sgrKi%2FUhE6VfCZNypD%2FrQrAOBN9tCg1Z5OZBIGDE5i4R19KZUCDhk5498NJz0tm75qq3bEZk9dbpeeeglC%2FqdbBv1Wiryoecfd4qo5if2nkKDvSs7Rx3LW2IQ4sX9EPpsie1Tup9xXpkKrfONGuqglPx1bGLU1jahHm94gQ5saBXEKLEfIB8u5nNPXB3LSF1jPrawPNnbnEyF5lydays%2FuxEAozswqsU1Z2q5Kd46g%2BovwST%2FW3BKMwgrLWwgY6pgEs15SuHSIHl4gJRNlQYrZaN05efKzvt5VPBvU1d6Z8UOFxcrpBSQh%2FLbL%2FzXP60esTMYAD5NlShyOAH0uEPLLgD8csY0a9WGMvMeQXsWsSWUqhlExkg00byIKZJxU8hQzQjPjJzUUMlqhfK%2Fvds9tvi3BaRdxc8tzlWoTVN35qm5WEQ6LxUOolJ7qcAzFXv%2BQ9Iom%2BW9nMAJyU%2FdB5AluSoN16ogt8&X-Amz-Signature=99bd722c64fa2f74ea29d53f2600dd5eb23b893b73a1ca179a741c560a00a248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BGYSGRU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUiHCniko5Q8Sk6xM%2BK%2F5LHhBnkyCPkPpbbTyZmUV%2BNAiAVylJReR4KxCXjpWh016ZEXeY5Q7zo4nphGkvuYEulZyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5VpBko5z4%2FV58fOaKtwDvUE5ni2c4A0gM4P283emKB6UGHJmyqFUOoQsa77AaztDOa5J2ft9pdI%2BmyZ9pPZKUJrLCdJ7wiAW2kq1x6iRU3Dzt8nbExQoDXDN9Z4fjhpjmgPlbb%2B4BUUu%2FJ5A4ICSnI1csNyE5Q1%2BwdTV43Wl0yX2YKNNoidALLJjbKAA1fAgbjptEcN2aij43pjeSo%2BB98Dv4qmNp7gBSnBBBGkt140wy5K87a1Se5%2BijKuf%2FNx6JKVJf30smXT23%2BaoOFNKXEJDKSbpQ2IpIf6KF3BK6bFAS5pR0bJRKnMW%2FeXW1kifDllbwo1ypi41FiJV94Wjc8FndI4bLd6HnAtrc4Bca0gQqsyjScLO1LeGehfsp109RIIJkQO7I2%2BVhaCptRc5wQ9e6sgrKi%2FUhE6VfCZNypD%2FrQrAOBN9tCg1Z5OZBIGDE5i4R19KZUCDhk5498NJz0tm75qq3bEZk9dbpeeeglC%2FqdbBv1Wiryoecfd4qo5if2nkKDvSs7Rx3LW2IQ4sX9EPpsie1Tup9xXpkKrfONGuqglPx1bGLU1jahHm94gQ5saBXEKLEfIB8u5nNPXB3LSF1jPrawPNnbnEyF5lydays%2FuxEAozswqsU1Z2q5Kd46g%2BovwST%2FW3BKMwgrLWwgY6pgEs15SuHSIHl4gJRNlQYrZaN05efKzvt5VPBvU1d6Z8UOFxcrpBSQh%2FLbL%2FzXP60esTMYAD5NlShyOAH0uEPLLgD8csY0a9WGMvMeQXsWsSWUqhlExkg00byIKZJxU8hQzQjPjJzUUMlqhfK%2Fvds9tvi3BaRdxc8tzlWoTVN35qm5WEQ6LxUOolJ7qcAzFXv%2BQ9Iom%2BW9nMAJyU%2FdB5AluSoN16ogt8&X-Amz-Signature=4f857422da53fffc71393841a4a0be7c432a16c21cd9edfe8210982f9a8a77ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
