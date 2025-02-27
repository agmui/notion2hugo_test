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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GM7T4LR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDun6WYmXejv7%2FOdQAHdxiiNDbdsA1VXFnXe10dTUNq9gIgGUeqC3at1K8gXbE5JR0OMSG2O3qmduqsjVqHIZY%2FoNkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBG2qWs8qHOhQ8TFbircA3b5BZbM8HsP1uO1ZHVASwY%2F7McS64W4QePmxdIw2l1cj2XFtqpCKrs5INV9ncPiAV6XZfR8JWyu9e3PdNd2hWPRakxDzrldKWYlBAnZuRsROvNiP35uSUSPEB%2FmuCgnvpu8xVecxpriH12pAgy43v4AVyTTDunFHn24lxZllv2AmonQQNeOVeucS3QF4w2k9oA0zEnyUZEAw%2BwyoqXskNzFp4%2BjlYMmo%2FSQObKQCw2rEArXMZ1JILGUMF2brEo1AsgakbuABd5m7GJ5aQOQGmYNvOBb51Q5yc2h9Ez3ocMa6AbeA4H9xAr7bFr3ehuOVk6q6Xf2OJpN9%2FmVfVX%2BYRBzalS1k62zT%2BDzKYPLCzN4As3GqQKdmDdlFFPA%2B7Y3l8Jt6szSfakm8Zj2waSo3bN72%2FnOdtplaI95epvDytjIQhuANgKzWt4lsqzExXaj9RuMla0Ir1kfJGRv2q1InlELiYFCrHIl2FgRs%2BlwLX9SX4EgQHwh3K3Jbm%2B%2FXMCNMZRPHnSt2UUwHOm35IeS91cW8XTJEkDpV4%2BXkeoXh90xvL%2F%2FGSD%2BiytTu0yjdv3DAiJU7HSGfdyHcjJrZshV2SMXJEWbWgYaYAWdkGtxypA6PpCulooZC2CTr28PMLHQ%2F70GOqUBw256l1zXS%2B4Jn2ZLZSMDwOOv2taPm4PM6qwwiDQQkwPRziAZYZ5sExB7iMkQp%2Fv%2BQ%2BIzVSNlEcVrG95cbD1MDqRWNWPKKSLBKzdcQRK7k6wHlZOAtK3EJ3z4OM42MnBKpTeS4oGA0RBeaZVZP8bTTRkjdcB6wcL15Fwy6kZSpZaJ2lDi4Y58%2F0rsAn3Rhl3sDt%2FvSmGhAhajeo%2FxbQn1LUdcHdvj&X-Amz-Signature=f92fa7b39ff994050f31beff24631632ed7a1c0359b72502a4f18d2d73305b9b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GM7T4LR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDun6WYmXejv7%2FOdQAHdxiiNDbdsA1VXFnXe10dTUNq9gIgGUeqC3at1K8gXbE5JR0OMSG2O3qmduqsjVqHIZY%2FoNkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBG2qWs8qHOhQ8TFbircA3b5BZbM8HsP1uO1ZHVASwY%2F7McS64W4QePmxdIw2l1cj2XFtqpCKrs5INV9ncPiAV6XZfR8JWyu9e3PdNd2hWPRakxDzrldKWYlBAnZuRsROvNiP35uSUSPEB%2FmuCgnvpu8xVecxpriH12pAgy43v4AVyTTDunFHn24lxZllv2AmonQQNeOVeucS3QF4w2k9oA0zEnyUZEAw%2BwyoqXskNzFp4%2BjlYMmo%2FSQObKQCw2rEArXMZ1JILGUMF2brEo1AsgakbuABd5m7GJ5aQOQGmYNvOBb51Q5yc2h9Ez3ocMa6AbeA4H9xAr7bFr3ehuOVk6q6Xf2OJpN9%2FmVfVX%2BYRBzalS1k62zT%2BDzKYPLCzN4As3GqQKdmDdlFFPA%2B7Y3l8Jt6szSfakm8Zj2waSo3bN72%2FnOdtplaI95epvDytjIQhuANgKzWt4lsqzExXaj9RuMla0Ir1kfJGRv2q1InlELiYFCrHIl2FgRs%2BlwLX9SX4EgQHwh3K3Jbm%2B%2FXMCNMZRPHnSt2UUwHOm35IeS91cW8XTJEkDpV4%2BXkeoXh90xvL%2F%2FGSD%2BiytTu0yjdv3DAiJU7HSGfdyHcjJrZshV2SMXJEWbWgYaYAWdkGtxypA6PpCulooZC2CTr28PMLHQ%2F70GOqUBw256l1zXS%2B4Jn2ZLZSMDwOOv2taPm4PM6qwwiDQQkwPRziAZYZ5sExB7iMkQp%2Fv%2BQ%2BIzVSNlEcVrG95cbD1MDqRWNWPKKSLBKzdcQRK7k6wHlZOAtK3EJ3z4OM42MnBKpTeS4oGA0RBeaZVZP8bTTRkjdcB6wcL15Fwy6kZSpZaJ2lDi4Y58%2F0rsAn3Rhl3sDt%2FvSmGhAhajeo%2FxbQn1LUdcHdvj&X-Amz-Signature=2546ad7a7e46c9f83122673e68f64802dfd106784b9db3595a1dc851efb7977c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
