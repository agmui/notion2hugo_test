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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DNQ4SDF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIECePwfSJKvdF2nKTBbymWBRHN38ezz%2FfW1gsCc0dMocAiEAm0ProNjIeqD5hGw%2FMUehXkPuL4jRp1gVcX%2BWlBaMEyMqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJAy0xXGKS5IoyYFAircA13I0AWpygWvp7dnWKRsv29NhKWkick7CH9UT9m5wOhOatSC%2Fvp6VRqsj0FajreK581fYYBCDV8frsThS81wCV6TwlnhecVxAHS4mAhd69GoDMl%2FswtgG2dVZHnHgcru8MqRRwP9ncTpHWhpStdyq%2FfEV%2BFPOua38LmENw0R253vtaqJyq4n2ypyjYRaWOTq12cz%2FEoiAMryJT1fI%2FDJkNlAKraPLbwj4GMzXvCH91zx2DdQRJyYQ6cAJb0LmS6XuMIHIK2Rkgj1l6QSZAed4Jn5bf743mpiYl3AvV0XbFF6ECl7dA%2BJUIrKjWhslGITPr4Lt7CgeL86JpPNFLgTyzfuxc5tCzBu3q%2BOBvISKiibWalhLoNzlzptjDKpsdIY%2B2ErdZ0eR1wEQ2Jelw%2FubhlMmHzCflFMp%2FflfC82xG2nd6HsrDHFm8c4fcMBPIx9BCBT1PK00KtAWl1Tj9lvDD2RL7RUz0VgfuL%2BxN9BYTXjUQC6OxirsHOKXkmd6SoavIG5NcVRLonbbI20vFBnavtrX7h0e3SdGPzcXt9jVw1dlmWQq6bm41XFzx6%2F3Ur7EZZYPkMR8Q0R3h1yj0VGUv%2FAwvKNFfTGh1il5hmpoEDu1o9xmxXvC6qry9u0MLejqr8GOqUBLj7lWXCl1yFfaDAsHVHKzgorm2OWD3zOXIWIIM%2BgWDbvlZzyzWnfNHkDGnryBTIkbXigAXY%2Fj89hp130roBKG%2FINppeMGkyTbI0IucUruWmmz%2FLX9Eg2bqQcp3LM97Y66B2RzKdQ09PpDni%2BDVJxAYjETqmMCpiCn4JHHkmhLrMU%2FGBvfv2Wzo%2Bnl77VQ1e2z13oHDWUoW04Fq0W%2F52jraU%2Bu62F&X-Amz-Signature=006312eb74a436d34960dcaaa22aeab46bbf5be9438763e5f5407b0b319534eb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DNQ4SDF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIECePwfSJKvdF2nKTBbymWBRHN38ezz%2FfW1gsCc0dMocAiEAm0ProNjIeqD5hGw%2FMUehXkPuL4jRp1gVcX%2BWlBaMEyMqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJAy0xXGKS5IoyYFAircA13I0AWpygWvp7dnWKRsv29NhKWkick7CH9UT9m5wOhOatSC%2Fvp6VRqsj0FajreK581fYYBCDV8frsThS81wCV6TwlnhecVxAHS4mAhd69GoDMl%2FswtgG2dVZHnHgcru8MqRRwP9ncTpHWhpStdyq%2FfEV%2BFPOua38LmENw0R253vtaqJyq4n2ypyjYRaWOTq12cz%2FEoiAMryJT1fI%2FDJkNlAKraPLbwj4GMzXvCH91zx2DdQRJyYQ6cAJb0LmS6XuMIHIK2Rkgj1l6QSZAed4Jn5bf743mpiYl3AvV0XbFF6ECl7dA%2BJUIrKjWhslGITPr4Lt7CgeL86JpPNFLgTyzfuxc5tCzBu3q%2BOBvISKiibWalhLoNzlzptjDKpsdIY%2B2ErdZ0eR1wEQ2Jelw%2FubhlMmHzCflFMp%2FflfC82xG2nd6HsrDHFm8c4fcMBPIx9BCBT1PK00KtAWl1Tj9lvDD2RL7RUz0VgfuL%2BxN9BYTXjUQC6OxirsHOKXkmd6SoavIG5NcVRLonbbI20vFBnavtrX7h0e3SdGPzcXt9jVw1dlmWQq6bm41XFzx6%2F3Ur7EZZYPkMR8Q0R3h1yj0VGUv%2FAwvKNFfTGh1il5hmpoEDu1o9xmxXvC6qry9u0MLejqr8GOqUBLj7lWXCl1yFfaDAsHVHKzgorm2OWD3zOXIWIIM%2BgWDbvlZzyzWnfNHkDGnryBTIkbXigAXY%2Fj89hp130roBKG%2FINppeMGkyTbI0IucUruWmmz%2FLX9Eg2bqQcp3LM97Y66B2RzKdQ09PpDni%2BDVJxAYjETqmMCpiCn4JHHkmhLrMU%2FGBvfv2Wzo%2Bnl77VQ1e2z13oHDWUoW04Fq0W%2F52jraU%2Bu62F&X-Amz-Signature=79b13154ae1273a40fffce61e2ed20728284565f42f3e01baa895f382f43a60e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
