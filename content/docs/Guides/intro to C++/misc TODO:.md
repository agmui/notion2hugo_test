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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B5UC2KY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC%2FCV4pBYnMDfwbMkvsGSK4wV7D4Wy5ZaVxu0ZbLzY14QIhAOPoZN316min%2Fd8dg2hRpp8jYZmFBr6vozglrMFUGedzKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRVDEIqzkw%2FA0Ib%2FYq3ANbpwA%2FO%2B%2BKi4cMoLhVqcBQQrgbzSLZRoUgT%2Fu7WBO57cF6UgJQEky6Skd4WXBHkHosJGouolBVW7%2Fsh4kkhR1VEqLp%2BbOdrmtEMvQkxFUgpnD%2BbeYkzQdzzhcuJGXxBDYkaCfRPTsJ5WgjzV3i7MJq%2FOVoohv8%2BghyfzUPpmVN5epau%2FktN%2BnEHrxc1v2nYUymtOe9ZbLIlEfPf8hb%2F4U%2FtPzHj%2FfyajwbVW2NPftTfzhioGXd%2FowEpAbqOv3mIxY7YfEGScdRMN4RI6jf4jVHE0RIC%2BZjvDjyQVHFfqwYRip6vquDziHTqOwuvssLsS0Ejz5%2B6XzYbZoekE%2BkdNS%2F670G3tC7X6nPmcDH4Lk5d8%2BCdzD6H%2FPpiI2YSa3Upt8QIY1ARWl%2FRdYEJTVhhrRvUFbfZoZBLR%2BvKUszmfkDJdZG38fuCw2wFVkw%2FUPi0%2BFW6KK%2FUeg91aSjOPVw0zqR%2Frx5azngIhleXwvDofLWb4IOBi38j3RsA5CVEhPvLeRbbW1RX5ttnk8EP01d0NkvXeLH4PsX%2BqQOGQEV1xQaJ%2FmHmHeatwWwKsaQMKqd%2B1I2HML3H%2BDZZuEXH6OtqZo3dDcm1VN5qEBT52VCW0hvhw%2BEVRljDlY5kdFpajCu3pq9BjqkAcHvuXmqrQnmHuTKm5g2Y6dZ1a8RtgkSs81wyOrkCND3pblAhae0EoAv9DJPpYrR0vysooolzYlnht9s%2Fr%2FSX5aHfFlHmw%2Fa6tVJEs65JRYwDRwtQQSemGhgbXtN8cW3rkvs7z0kZcRKeSnbJJB5B8UUMC%2BgKkdiJmewAD67j6d0Q1aS9rZziPoSpssyS7JATvg2X5oLr0iVAGJeEseBoXiyeTNi&X-Amz-Signature=2bfad8c18f78f2079510750c92bf5a7dee7f0d9fc17f44100fc24679d3130b43&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B5UC2KY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC%2FCV4pBYnMDfwbMkvsGSK4wV7D4Wy5ZaVxu0ZbLzY14QIhAOPoZN316min%2Fd8dg2hRpp8jYZmFBr6vozglrMFUGedzKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRVDEIqzkw%2FA0Ib%2FYq3ANbpwA%2FO%2B%2BKi4cMoLhVqcBQQrgbzSLZRoUgT%2Fu7WBO57cF6UgJQEky6Skd4WXBHkHosJGouolBVW7%2Fsh4kkhR1VEqLp%2BbOdrmtEMvQkxFUgpnD%2BbeYkzQdzzhcuJGXxBDYkaCfRPTsJ5WgjzV3i7MJq%2FOVoohv8%2BghyfzUPpmVN5epau%2FktN%2BnEHrxc1v2nYUymtOe9ZbLIlEfPf8hb%2F4U%2FtPzHj%2FfyajwbVW2NPftTfzhioGXd%2FowEpAbqOv3mIxY7YfEGScdRMN4RI6jf4jVHE0RIC%2BZjvDjyQVHFfqwYRip6vquDziHTqOwuvssLsS0Ejz5%2B6XzYbZoekE%2BkdNS%2F670G3tC7X6nPmcDH4Lk5d8%2BCdzD6H%2FPpiI2YSa3Upt8QIY1ARWl%2FRdYEJTVhhrRvUFbfZoZBLR%2BvKUszmfkDJdZG38fuCw2wFVkw%2FUPi0%2BFW6KK%2FUeg91aSjOPVw0zqR%2Frx5azngIhleXwvDofLWb4IOBi38j3RsA5CVEhPvLeRbbW1RX5ttnk8EP01d0NkvXeLH4PsX%2BqQOGQEV1xQaJ%2FmHmHeatwWwKsaQMKqd%2B1I2HML3H%2BDZZuEXH6OtqZo3dDcm1VN5qEBT52VCW0hvhw%2BEVRljDlY5kdFpajCu3pq9BjqkAcHvuXmqrQnmHuTKm5g2Y6dZ1a8RtgkSs81wyOrkCND3pblAhae0EoAv9DJPpYrR0vysooolzYlnht9s%2Fr%2FSX5aHfFlHmw%2Fa6tVJEs65JRYwDRwtQQSemGhgbXtN8cW3rkvs7z0kZcRKeSnbJJB5B8UUMC%2BgKkdiJmewAD67j6d0Q1aS9rZziPoSpssyS7JATvg2X5oLr0iVAGJeEseBoXiyeTNi&X-Amz-Signature=6275fc357f64f8118ba95aadcb53e1f93cfb95ef9b2fcf9fe03d1768ad21ea6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
