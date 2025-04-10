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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7NJZYT5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEX6HIXfJwNEvjmCaYZVeK73LwcFZVWa48iErCgeKNN%2BAiEA1H2wW2H6U9bCP9ojuH1BeSphvetvf0pee72oShbZFSYqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkGid0eMNNoXCKfCSrcA8LNNvonk6cCD3axOjhvK5zP0Mcmu%2FlPPzwZjAnDR%2FN2imr9TbA1BxRtJqp25dNm1io4II9ig6L%2Fqx%2F5EReVF32qOS1k7FkGhdaNoGsHm9VxTHWfqrDJxEbS4gXVahJHgcF8lNsFTdESwjXpVQ9EEJjq6B2xfR786G6ImNtFstpSjMFHaO96BwKJ%2F2dXwt9L5RKdrKFbamkhhYIZHkr1Il2YbFTzueracux%2B9Qws81l93nw7EZ5IbfdXvZQSltbJ2sjB9K2x%2F%2B8X94kb0FMQm2hAok%2FWonpeppL%2FFkjy6PCe0Jp1YL8iABp%2FcUDgObBenX%2F7jFsgu3DUlBg3ZwhizTA6BJuDVcZlqtbbDy9P3uP6loN22SYC%2BH%2FIHYUzJiNl%2Bd7GOkLXznn45gtmho5mAeF9TL13r3jBe7a%2BG%2FPa6AgufxvAMjEADS%2B5WVqAnT7nBRq3w0KgVFOiLAYV6xz7ai2Brla5mf2ubSEHISz7ddCfJnJ%2Bg9cd5kZzEVGuS3joAbeievT3V8S%2FNbd8BHeYrLBj8BzzXKNljNtvjsHatHbj7lYK1U%2BYnLi267Ar4jgLchmotCfiq2aowkTv6kOOOM347WTBIohklXs6P7CxvrQUXr6uLzwob7Z3jIJeMPmo3b8GOqUBSND2dNZEvc0GLIhOB0DggrymoB0Fe93vIWNdE76wAMRHG3KTBswaJmHhwJam%2BZGLB0vTBh4t%2FDvpUcVaE0PT2md06nKsIdDLX1wC%2FlJAFZgIurq%2FXSzrsx6AswHbnyP5HKqs3DmSf4KsZCaDsLtni8m4iBBh9vZfCdwM5a%2BrAVwy6cwix54VBLNtrbsTTccKHFoTIs%2Fp2hkFaDtrO0mrALI9PJ%2BJ&X-Amz-Signature=172aa005f303f039ac848843ae5b859f9b71e09696fb8e12e1ba0bffefbc8ca7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7NJZYT5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEX6HIXfJwNEvjmCaYZVeK73LwcFZVWa48iErCgeKNN%2BAiEA1H2wW2H6U9bCP9ojuH1BeSphvetvf0pee72oShbZFSYqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkGid0eMNNoXCKfCSrcA8LNNvonk6cCD3axOjhvK5zP0Mcmu%2FlPPzwZjAnDR%2FN2imr9TbA1BxRtJqp25dNm1io4II9ig6L%2Fqx%2F5EReVF32qOS1k7FkGhdaNoGsHm9VxTHWfqrDJxEbS4gXVahJHgcF8lNsFTdESwjXpVQ9EEJjq6B2xfR786G6ImNtFstpSjMFHaO96BwKJ%2F2dXwt9L5RKdrKFbamkhhYIZHkr1Il2YbFTzueracux%2B9Qws81l93nw7EZ5IbfdXvZQSltbJ2sjB9K2x%2F%2B8X94kb0FMQm2hAok%2FWonpeppL%2FFkjy6PCe0Jp1YL8iABp%2FcUDgObBenX%2F7jFsgu3DUlBg3ZwhizTA6BJuDVcZlqtbbDy9P3uP6loN22SYC%2BH%2FIHYUzJiNl%2Bd7GOkLXznn45gtmho5mAeF9TL13r3jBe7a%2BG%2FPa6AgufxvAMjEADS%2B5WVqAnT7nBRq3w0KgVFOiLAYV6xz7ai2Brla5mf2ubSEHISz7ddCfJnJ%2Bg9cd5kZzEVGuS3joAbeievT3V8S%2FNbd8BHeYrLBj8BzzXKNljNtvjsHatHbj7lYK1U%2BYnLi267Ar4jgLchmotCfiq2aowkTv6kOOOM347WTBIohklXs6P7CxvrQUXr6uLzwob7Z3jIJeMPmo3b8GOqUBSND2dNZEvc0GLIhOB0DggrymoB0Fe93vIWNdE76wAMRHG3KTBswaJmHhwJam%2BZGLB0vTBh4t%2FDvpUcVaE0PT2md06nKsIdDLX1wC%2FlJAFZgIurq%2FXSzrsx6AswHbnyP5HKqs3DmSf4KsZCaDsLtni8m4iBBh9vZfCdwM5a%2BrAVwy6cwix54VBLNtrbsTTccKHFoTIs%2Fp2hkFaDtrO0mrALI9PJ%2BJ&X-Amz-Signature=82635886e6c2b01c72c2f07b5ae71f3bf585bca3c17e37f62d69e7419d38a1e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
