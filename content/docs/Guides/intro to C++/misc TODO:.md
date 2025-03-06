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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSPFP2J7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqRJgoTibU8W2u9LmkZI8VC5aa%2FbqSIPbNGJWKywFyGwIgNUdEWBPkgmHMKlReYAKOUqgUbjb%2BzVZpfZEaaEQXxSIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDjv3jX%2FN8pYXARGZyrcA3qY%2Fls0lNyc3zTiqx8nwhG1FoQfjciaW%2BSztoziSQY2jft6MB7D500fOuDcWqRsQekx6a1HI60FzA6IiScLf6LcY6sGk3vAeNkogfqmcN0EXasGbHiIk0k%2Fin9VU1I3i2HH0SQSRXonSggCGJH8MURTZFJdSi3s5eu%2FjoOC62Kk4TRf%2BlPRMd5Vh3zMAwFF1KFVIDK6%2BzrHvF0eQOEdMLBBUUW12QHl2xMVng0qIGAN4PhrYTbVgtLS1YOU8vOGqcs8a%2FkjaPDY554lgljHDPdOaa3S3JGvXqMos9eLb1WTWW14YOPX%2FkzQ8KD8hj3gGmVh2T%2FCf946Hzp2DwGdqh4GjqolSu7Cb1kx3jZ0YvEqiH4hqW4H4i6Yj0%2B3r5p4lz5%2FyYWWv8NRe9NnC7AbHpnrya%2BXHnGMqJYCn%2FOkSrRSwyh8naZcY%2BmXdpb169q5pOI2731%2FzGw%2Fqx0U5Y%2FkCdrTQLV4eVNl9vUVcqn8Z%2BTzhoY2N%2Bkp5UT0ZGrWxQFhOBTmd02s%2B3bbhIuR1KLAWa78vlLIWeIca8mCZBsXmxI5rfqRhi%2FfhL8LU%2FecUBrCY9VMptHUDovrObqfH4wvty9F2xgycJWOF0I0pcUhGkFm1rBlJxSeW4UEyUiqMPnNp74GOqUB0ox%2FfTMjFaxg1RyTnqrTMBOSOls93fDwSC4TauL4yMQFBjlyGYdcjnrmSTFtAuVMfdl4ViiaNuq8Y55IPSL1WiFDtKQhT2%2FLfRWhzsQ4S2oWmGps63mdujHqFDOVtziYpImHA%2FyU21Unl%2Bgy19VpLyMfuf3NT233g6%2FMiSLw8zr4nKbZqpR7p%2B5zrN%2FZOVk1YMQ%2BDb5fO9juBaT05UUAX27Qhs1%2B&X-Amz-Signature=5ca3eb0c5eff9ebb7c41f091ac339ea77e77d9f02976af3760ae534e5a4469c8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSPFP2J7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqRJgoTibU8W2u9LmkZI8VC5aa%2FbqSIPbNGJWKywFyGwIgNUdEWBPkgmHMKlReYAKOUqgUbjb%2BzVZpfZEaaEQXxSIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDjv3jX%2FN8pYXARGZyrcA3qY%2Fls0lNyc3zTiqx8nwhG1FoQfjciaW%2BSztoziSQY2jft6MB7D500fOuDcWqRsQekx6a1HI60FzA6IiScLf6LcY6sGk3vAeNkogfqmcN0EXasGbHiIk0k%2Fin9VU1I3i2HH0SQSRXonSggCGJH8MURTZFJdSi3s5eu%2FjoOC62Kk4TRf%2BlPRMd5Vh3zMAwFF1KFVIDK6%2BzrHvF0eQOEdMLBBUUW12QHl2xMVng0qIGAN4PhrYTbVgtLS1YOU8vOGqcs8a%2FkjaPDY554lgljHDPdOaa3S3JGvXqMos9eLb1WTWW14YOPX%2FkzQ8KD8hj3gGmVh2T%2FCf946Hzp2DwGdqh4GjqolSu7Cb1kx3jZ0YvEqiH4hqW4H4i6Yj0%2B3r5p4lz5%2FyYWWv8NRe9NnC7AbHpnrya%2BXHnGMqJYCn%2FOkSrRSwyh8naZcY%2BmXdpb169q5pOI2731%2FzGw%2Fqx0U5Y%2FkCdrTQLV4eVNl9vUVcqn8Z%2BTzhoY2N%2Bkp5UT0ZGrWxQFhOBTmd02s%2B3bbhIuR1KLAWa78vlLIWeIca8mCZBsXmxI5rfqRhi%2FfhL8LU%2FecUBrCY9VMptHUDovrObqfH4wvty9F2xgycJWOF0I0pcUhGkFm1rBlJxSeW4UEyUiqMPnNp74GOqUB0ox%2FfTMjFaxg1RyTnqrTMBOSOls93fDwSC4TauL4yMQFBjlyGYdcjnrmSTFtAuVMfdl4ViiaNuq8Y55IPSL1WiFDtKQhT2%2FLfRWhzsQ4S2oWmGps63mdujHqFDOVtziYpImHA%2FyU21Unl%2Bgy19VpLyMfuf3NT233g6%2FMiSLw8zr4nKbZqpR7p%2B5zrN%2FZOVk1YMQ%2BDb5fO9juBaT05UUAX27Qhs1%2B&X-Amz-Signature=58ff69becb7a706e414c7fc0dd353c38b5d57a6a6da056ba2631b3b12cf59c24&X-Amz-SignedHeaders=host&x-id=GetObject)

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
