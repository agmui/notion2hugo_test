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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFWYYVXD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDxLX%2BiE7wmcS377pixTvsacpHE%2BXfI2Ym9Js7ggyMgAiAhjCpKJpbRdcMXuw6vhPi4ttPdAhpEaF9emZsRa14UaSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVnkWgxixBRxdhiqEKtwDfrXIDqMEOLbv7cxJ42TS5BzjWvqrUI%2Fqr7%2B22owgWbEuyW7h39cY9hMsEbHPjv%2Ff6QvmlVGN%2F%2B6nAvrkVhUd13j%2FbuBpsAniPTFTKPRrKHfdMQggE6xQHrdjDhmC95iC7DLBpTLCAYsH%2FEGsas%2FV7wlX4A8PEgL%2FpiGWxF6AMv3GblpdqFir%2FKiQ2DNfPF5wkp%2Bq8k9v%2FnLYhBN0WGjMjNgNaaWf1pvHIpU%2F4cvjjUdihfXgS4BPD2h%2FfHE21BOe2f7vR4PxUB12iJ%2BoVr4B0%2BzNm8qr%2BjFafo1p9AvOpmlUOUjWLTBzVMgoyUni6ecVbBGlYZbVfsQzI29A6haUiC2%2BoVpT8l0%2BOCjT3vy3VIu%2BJpKq6qY6kaJICLi1TlWeiZJYvCiTI%2FWI6zlcZAwRZcZM0hoRWj2crbuqoOGm6Gn0ppG5qTWZYIu4aEohgt3Kejy6flyWYYlzNZdGS953hQM3UijnQYLGa6%2BgeunVJYAgHv%2FslFa4hMyiJ6Z7W7LRtV4TJPRkWZRgY0DWc0E415EZzhb8QVU9xnDc7TuC2t1oHyz77z7rDnPai%2FOB6mhqWT36rIu%2B4BCmb0dfxhAagycXn5vAhpO%2Bzaz7Y6BiQ4AsfQk3rVhxu8iku40wxZCkvQY6pgEl7EE2NMRfTPo7mE41LST%2Fc19dFDnUfi0o9FjA9xV3LCp0PTFHfMYOzVBzPD9JyYgBWTK3W2eC7udpdLa2cxfaDi%2BMx37fp21ZqfkT36R8AqC%2B30y63ts0dN3fokzqxWzIlUgbK7JnQh1QQCF0nJyvm59H82B2mRb2AWLC7t1AoUphD7thKaFs0ugK9GNYTR76m5ayA%2BDOhyTwWttIoKgTASeZux%2Fj&X-Amz-Signature=51c9345dbe682e2bf3688ca033305756ff9fa65cc59c43bf00e26de76d2c57fe&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFWYYVXD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDxLX%2BiE7wmcS377pixTvsacpHE%2BXfI2Ym9Js7ggyMgAiAhjCpKJpbRdcMXuw6vhPi4ttPdAhpEaF9emZsRa14UaSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVnkWgxixBRxdhiqEKtwDfrXIDqMEOLbv7cxJ42TS5BzjWvqrUI%2Fqr7%2B22owgWbEuyW7h39cY9hMsEbHPjv%2Ff6QvmlVGN%2F%2B6nAvrkVhUd13j%2FbuBpsAniPTFTKPRrKHfdMQggE6xQHrdjDhmC95iC7DLBpTLCAYsH%2FEGsas%2FV7wlX4A8PEgL%2FpiGWxF6AMv3GblpdqFir%2FKiQ2DNfPF5wkp%2Bq8k9v%2FnLYhBN0WGjMjNgNaaWf1pvHIpU%2F4cvjjUdihfXgS4BPD2h%2FfHE21BOe2f7vR4PxUB12iJ%2BoVr4B0%2BzNm8qr%2BjFafo1p9AvOpmlUOUjWLTBzVMgoyUni6ecVbBGlYZbVfsQzI29A6haUiC2%2BoVpT8l0%2BOCjT3vy3VIu%2BJpKq6qY6kaJICLi1TlWeiZJYvCiTI%2FWI6zlcZAwRZcZM0hoRWj2crbuqoOGm6Gn0ppG5qTWZYIu4aEohgt3Kejy6flyWYYlzNZdGS953hQM3UijnQYLGa6%2BgeunVJYAgHv%2FslFa4hMyiJ6Z7W7LRtV4TJPRkWZRgY0DWc0E415EZzhb8QVU9xnDc7TuC2t1oHyz77z7rDnPai%2FOB6mhqWT36rIu%2B4BCmb0dfxhAagycXn5vAhpO%2Bzaz7Y6BiQ4AsfQk3rVhxu8iku40wxZCkvQY6pgEl7EE2NMRfTPo7mE41LST%2Fc19dFDnUfi0o9FjA9xV3LCp0PTFHfMYOzVBzPD9JyYgBWTK3W2eC7udpdLa2cxfaDi%2BMx37fp21ZqfkT36R8AqC%2B30y63ts0dN3fokzqxWzIlUgbK7JnQh1QQCF0nJyvm59H82B2mRb2AWLC7t1AoUphD7thKaFs0ugK9GNYTR76m5ayA%2BDOhyTwWttIoKgTASeZux%2Fj&X-Amz-Signature=3f151eb20f5eb0b2c6739ea435ad4f22929be601755a22335a29b0b8fe1c4b89&X-Amz-SignedHeaders=host&x-id=GetObject)

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
