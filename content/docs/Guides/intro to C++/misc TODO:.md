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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNDDDDAB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDPOo0e1pvg05DTPeVx0%2BKVYTQVlb46tx4bGgMM4d1KsgIhAL0jzy6j9AxgYhNg%2BY3RgpTDrCqpMA%2B7wVjtgULqAZKGKv8DCDsQABoMNjM3NDIzMTgzODA1Igx2vnQ%2BoPQasA2nhNoq3AMI%2FCtXti9E5AbFnRQgmfjo6EgVh7HWRETSbHWzmTjES%2BjqYH2Ima3WX4NA6iOx83B6M6P%2By9OzuZQYJMeUEJMBFz03jplbu%2F8cnRujPAth%2B5ZamjAzhOcvQS5%2ByY1YWC318O%2Fc8j%2BBVHrf9C7jpK%2Fg9RKfu8AU0QtmkCbC3Hd5GFDp%2FQsN0Scrn4Ks5R1YrTp%2Fhin5aht2eqnsOvB22q9ucDZQny2SzF8CudMZsRsMCNyPg2EPeO7plXH9gz6AcEBOrfR6xrj0cUlUZ7VawQDzMJ7kqCF4cxZvjAjobsnsQIqq1U9XDj1pdniLV4eX4X%2Fxv0a3DPl4jCtQNlEXkQ1RT2qgG3EbGBT8xFuVDRURR%2BlhQkFm9gqsrHBBJJU8GSG4G5rdn2ngOKWvhMUoPQpTXI0NmTF00fctXFpOZUTDFiiLfF6xQGez8gh8TB69U%2FOi19dd%2Foz2o7GdzvAU986UfKnW1GQPR9%2Bd3aYb6t4bR3bwL6WGs723dqMdj%2BY1%2BL68JHma3A8SKqKbynjvzTcTnRD0PVNIGsOYcihU4UClJUdcQ7%2F2wbIRQ4bI5tiAeXtiwIjLLR%2Fak5dEwc9YIysv6U3HoDOyk3ZhnnwRgr5LEqOU1U%2BLrAnqdYV6VTC604vEBjqkAXsvQuhmTDqsUGoXAEgRMh9YgI%2FcJc4sW1OwbpiKJ%2F5tCyXRDLrGz3LNsbZi2FlQh%2F0HbqQeD83KDAhJqtHVylX5nfk5iU7pwLDGp2IJjgp4LF4seyJPvR0S0GXAT1WhshDq97YJ%2BBeriSGSsYXRLSZxrn3jZaIgfsGA7ra8%2FjIckIsGcNv%2Bcni6LC2GD5funQ7uS5AKu9BgbQNPY2XY%2BkD0C9Dp&X-Amz-Signature=bd7ab843f7f81c2ef64050ee109b071d0057a69cb6db4c5ec2f076e6c99f677c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNDDDDAB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDPOo0e1pvg05DTPeVx0%2BKVYTQVlb46tx4bGgMM4d1KsgIhAL0jzy6j9AxgYhNg%2BY3RgpTDrCqpMA%2B7wVjtgULqAZKGKv8DCDsQABoMNjM3NDIzMTgzODA1Igx2vnQ%2BoPQasA2nhNoq3AMI%2FCtXti9E5AbFnRQgmfjo6EgVh7HWRETSbHWzmTjES%2BjqYH2Ima3WX4NA6iOx83B6M6P%2By9OzuZQYJMeUEJMBFz03jplbu%2F8cnRujPAth%2B5ZamjAzhOcvQS5%2ByY1YWC318O%2Fc8j%2BBVHrf9C7jpK%2Fg9RKfu8AU0QtmkCbC3Hd5GFDp%2FQsN0Scrn4Ks5R1YrTp%2Fhin5aht2eqnsOvB22q9ucDZQny2SzF8CudMZsRsMCNyPg2EPeO7plXH9gz6AcEBOrfR6xrj0cUlUZ7VawQDzMJ7kqCF4cxZvjAjobsnsQIqq1U9XDj1pdniLV4eX4X%2Fxv0a3DPl4jCtQNlEXkQ1RT2qgG3EbGBT8xFuVDRURR%2BlhQkFm9gqsrHBBJJU8GSG4G5rdn2ngOKWvhMUoPQpTXI0NmTF00fctXFpOZUTDFiiLfF6xQGez8gh8TB69U%2FOi19dd%2Foz2o7GdzvAU986UfKnW1GQPR9%2Bd3aYb6t4bR3bwL6WGs723dqMdj%2BY1%2BL68JHma3A8SKqKbynjvzTcTnRD0PVNIGsOYcihU4UClJUdcQ7%2F2wbIRQ4bI5tiAeXtiwIjLLR%2Fak5dEwc9YIysv6U3HoDOyk3ZhnnwRgr5LEqOU1U%2BLrAnqdYV6VTC604vEBjqkAXsvQuhmTDqsUGoXAEgRMh9YgI%2FcJc4sW1OwbpiKJ%2F5tCyXRDLrGz3LNsbZi2FlQh%2F0HbqQeD83KDAhJqtHVylX5nfk5iU7pwLDGp2IJjgp4LF4seyJPvR0S0GXAT1WhshDq97YJ%2BBeriSGSsYXRLSZxrn3jZaIgfsGA7ra8%2FjIckIsGcNv%2Bcni6LC2GD5funQ7uS5AKu9BgbQNPY2XY%2BkD0C9Dp&X-Amz-Signature=94c4d4cec067d2304900c1a627495c5bce39af8fdadb73ad3d22375d794c79b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
