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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626RHVHMH%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIG%2Bdd58iIlMXR7ONzuOcRxD0bU%2Bz8J%2F0l8IIIz7vdgS0AiBDji3TwQzA1wyK1yZx8tiAMgthEMLoYS7GAdlLEUlpvCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUdcbJRWLejS3duV9KtwD1FBVG189XF9sUAKAST7yvrWmo%2BohgH2LOWVDwxdju1kEQrJsp%2FBZO%2FDMwtY4SOgMfmthESJReCFhKPRh1Q8ujV2btwwPPhozRATqfS3ilqcoY65aokzumby%2FFYqcM9pUVubla52ckxf7it6asUbhyV6BbFRHG6R1ixDClFNAXAGD97XH1ZAUvK3vzoAeq2EZuMu%2Bj5AkqJ2LmNGorK%2BYELcLuLcgrd%2BjXAca%2FtxtmsOLfTtUz02UR5Md1wYdrBR%2B%2BslTaHyYnyJ6KmEyFNF6gYoUXsOUeHgGeLi3QBt0MmRPXQKTxDF9AMssa6xfdgZkkLz03SfoLbWU2bQ3c7WzAI6pZZ%2Bmn6x3b9b2fO0zlP28N3o2dT9snVJGLqCTVbU7YjGblm0RdeKxu5ntdhZXC9%2BZPqjpzEl5lwupmxOd7wJ5Csq8xwe4KhFPgtMlLC2W0X0telQUCtW%2BYfavKTqOzoVNpTu7dzlucV46vkJUHjXbBzMSmfGp%2Be8%2BJzaDu9YTFlsYR2h%2FlzwKFiDzERVqmxazpBZVDD6WUBHFLBVggxwWK%2B3Otk5uBQkgZtK6B02zYGrjG7rLoezYix5AOsK78u%2Bo43u3q9pIFChCAQDGrTLCwFSNPiOslJ0Z%2BKwwn8TyxQY6pgGT%2FJFwFaq5YzczXNsDjPEsDZ76u393480TtkPEqsEDYTO9kE8LgXN5x1GQVW6f3NT5dqcIAldt5JnHlp6frTPoZFpHSEnHzq00yOnvJ4aZihAoloo5Bgs8hK5qXmccxbXzfyqdxq7Xiw%2FUAWxoOBshMBO3PunfOdNigm7ctQqN9ftOcfFtN7dhaIMa0RjLG2Em3BSkVpkvxTZEjhM82mVQiOHyAZqy&X-Amz-Signature=4fd63223891b29ac203c616f718d03101423e39dd69bff6ffa2cb8607e7086f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626RHVHMH%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIG%2Bdd58iIlMXR7ONzuOcRxD0bU%2Bz8J%2F0l8IIIz7vdgS0AiBDji3TwQzA1wyK1yZx8tiAMgthEMLoYS7GAdlLEUlpvCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUdcbJRWLejS3duV9KtwD1FBVG189XF9sUAKAST7yvrWmo%2BohgH2LOWVDwxdju1kEQrJsp%2FBZO%2FDMwtY4SOgMfmthESJReCFhKPRh1Q8ujV2btwwPPhozRATqfS3ilqcoY65aokzumby%2FFYqcM9pUVubla52ckxf7it6asUbhyV6BbFRHG6R1ixDClFNAXAGD97XH1ZAUvK3vzoAeq2EZuMu%2Bj5AkqJ2LmNGorK%2BYELcLuLcgrd%2BjXAca%2FtxtmsOLfTtUz02UR5Md1wYdrBR%2B%2BslTaHyYnyJ6KmEyFNF6gYoUXsOUeHgGeLi3QBt0MmRPXQKTxDF9AMssa6xfdgZkkLz03SfoLbWU2bQ3c7WzAI6pZZ%2Bmn6x3b9b2fO0zlP28N3o2dT9snVJGLqCTVbU7YjGblm0RdeKxu5ntdhZXC9%2BZPqjpzEl5lwupmxOd7wJ5Csq8xwe4KhFPgtMlLC2W0X0telQUCtW%2BYfavKTqOzoVNpTu7dzlucV46vkJUHjXbBzMSmfGp%2Be8%2BJzaDu9YTFlsYR2h%2FlzwKFiDzERVqmxazpBZVDD6WUBHFLBVggxwWK%2B3Otk5uBQkgZtK6B02zYGrjG7rLoezYix5AOsK78u%2Bo43u3q9pIFChCAQDGrTLCwFSNPiOslJ0Z%2BKwwn8TyxQY6pgGT%2FJFwFaq5YzczXNsDjPEsDZ76u393480TtkPEqsEDYTO9kE8LgXN5x1GQVW6f3NT5dqcIAldt5JnHlp6frTPoZFpHSEnHzq00yOnvJ4aZihAoloo5Bgs8hK5qXmccxbXzfyqdxq7Xiw%2FUAWxoOBshMBO3PunfOdNigm7ctQqN9ftOcfFtN7dhaIMa0RjLG2Em3BSkVpkvxTZEjhM82mVQiOHyAZqy&X-Amz-Signature=e80c1fabdc834daf72ad8a71057dac33d1b39845863044148b9caa57d9d0587f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
