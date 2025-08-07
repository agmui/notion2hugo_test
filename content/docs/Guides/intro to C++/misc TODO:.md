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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USNVKVJA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC4twFssSLZAEnwsue7GJm0iKYmZe5UN3AxO0z0k1zEyAIhAISgzlxQ27nh5Kj0wFjimym5h0%2FXnhfsYUqrdwA4KMmYKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcZn%2BcQbqZhIX0nvMq3AP%2FbyG3UYpa4aDZGOONpwnFa6ryl4DH9F35FayyfqXi1%2BVcDPL6ePbqUJhYCMnxxq3WYmVPqO3a3IF9x%2FfMd0UvCG%2BnLupnMgSzvt8SnmVqYsmd%2BW7zir9QfPsUDTd1wA6NXAC8%2Fl6WYQkoKLnK8kB14yOGPcL0YnDk0lIj5jbhK8um80znF8XK50xCFATU9EORUvwuPP0wZRL8LtI4sXtyrMXNcB9ndd1wCMECrsQptZJrwMKcwNiMZvxl%2F08BZgPFy1N0%2F1WNhXtOs7KEV7g%2Ftoi%2FINOcRx%2FF8dYA2JeLhCSy3E%2FGtUaUwLdddGWTT7IK1C2GQrPNdOBGdrKAV1fu7mHZWK8MM%2F9hghNLv7oo6xgSldwdCPbF52aK9AGlOjvqRN3mSs7cjLnNlyC7rimArLu0SLuQvhTiAcmrhsO1%2BrHpwwXsw5jfnaSfFv8mTVoGt1eKl0TK%2FGCMx6RQO44AKGuo4owinEt2ei4zSTpBH4d1TfhiEu2HlJPeVoB8VzfM2xR2WrVUKyYaoUie%2BoG4Euvm8WAJ2NNe%2FZXvTZ2a7MH4UvH3z4osYseeY6LO84BOeeBcTfGPnqNdB4TVz9zuhuj%2B%2FL6rRX4Ndo4jnZEUDSSPuERhCxTM3luRZDCDotPEBjqkAZ1cW7tS%2F4oI2PUstsRHO2ELw%2FD1H8racnPQmSARUqjBozQcBORLiW7UqvoyIfqPfz%2FxS6CMOcQA%2B5hGMzCaOkUpdMNWoyDntwsfXFaiIzdI%2F2ZWiPE%2BhSQjvuBmN1vuz%2BWZcCLaeu%2FEbo60OA9DR6uoUzBC3t8idtRg14CwMAigINUHG%2BC3iIc4YtvRKLYd98pkVRF%2BHv1sTsjOMf9ITolngFiG&X-Amz-Signature=d2e5e73b50a1d0c84c477496ebea6e8a0f1f78290b3278e5a2a9042c918c9f48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USNVKVJA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC4twFssSLZAEnwsue7GJm0iKYmZe5UN3AxO0z0k1zEyAIhAISgzlxQ27nh5Kj0wFjimym5h0%2FXnhfsYUqrdwA4KMmYKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcZn%2BcQbqZhIX0nvMq3AP%2FbyG3UYpa4aDZGOONpwnFa6ryl4DH9F35FayyfqXi1%2BVcDPL6ePbqUJhYCMnxxq3WYmVPqO3a3IF9x%2FfMd0UvCG%2BnLupnMgSzvt8SnmVqYsmd%2BW7zir9QfPsUDTd1wA6NXAC8%2Fl6WYQkoKLnK8kB14yOGPcL0YnDk0lIj5jbhK8um80znF8XK50xCFATU9EORUvwuPP0wZRL8LtI4sXtyrMXNcB9ndd1wCMECrsQptZJrwMKcwNiMZvxl%2F08BZgPFy1N0%2F1WNhXtOs7KEV7g%2Ftoi%2FINOcRx%2FF8dYA2JeLhCSy3E%2FGtUaUwLdddGWTT7IK1C2GQrPNdOBGdrKAV1fu7mHZWK8MM%2F9hghNLv7oo6xgSldwdCPbF52aK9AGlOjvqRN3mSs7cjLnNlyC7rimArLu0SLuQvhTiAcmrhsO1%2BrHpwwXsw5jfnaSfFv8mTVoGt1eKl0TK%2FGCMx6RQO44AKGuo4owinEt2ei4zSTpBH4d1TfhiEu2HlJPeVoB8VzfM2xR2WrVUKyYaoUie%2BoG4Euvm8WAJ2NNe%2FZXvTZ2a7MH4UvH3z4osYseeY6LO84BOeeBcTfGPnqNdB4TVz9zuhuj%2B%2FL6rRX4Ndo4jnZEUDSSPuERhCxTM3luRZDCDotPEBjqkAZ1cW7tS%2F4oI2PUstsRHO2ELw%2FD1H8racnPQmSARUqjBozQcBORLiW7UqvoyIfqPfz%2FxS6CMOcQA%2B5hGMzCaOkUpdMNWoyDntwsfXFaiIzdI%2F2ZWiPE%2BhSQjvuBmN1vuz%2BWZcCLaeu%2FEbo60OA9DR6uoUzBC3t8idtRg14CwMAigINUHG%2BC3iIc4YtvRKLYd98pkVRF%2BHv1sTsjOMf9ITolngFiG&X-Amz-Signature=d0497f24f2d064e9838affcef9370acbdcf4da7d6e631c9cf3855f1c406118c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
