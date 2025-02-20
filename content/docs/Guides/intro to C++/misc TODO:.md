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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JNTE2WV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC50I3Cxto8DDalB3O9I2KBv4ybB4d5NebIlbbtotT%2BTQIgD94uLcv8I%2Fqa%2BT9feEXjng1VNOmYxKC7PTX41%2B9GHtsqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEay9OaDI8yIhwRl4CrcA5yobiFxuvnClsya01QPiVWcPSqLuAfvhQsEmLDtALYLpH9vL4gcZ32vrzKB5S5FWQz3R5nFeOx%2FVoED9L6o20XOVBfvL5iiSfK6%2BYVn2g13PED36BD7BuWKPBngP6Ryou7VfIUKaNRB8IHkT5mLVtEBhdxnuzD9ypjKXxCqivImyNWXvKma8%2FwU%2FSV%2B4wIV%2Fp5vk%2FZB5J0k2T3nA14Ii1EQpxwhTDhwmi8f%2Fb5JcV7XtEoM3Ev0jCqpYvdxwL0oaBNYM3vU97fvGBaChXaODs9RavGMU%2B7kjqSIPsCFaPHiUb2r1qe7gP9qvxck7kVQnjYiZ9ek19tHHs44eaOjCscRvKCfkseuBN86fS%2Flh9LX4MFbCpDvHFhU%2BQnK9k7aHTseiDWx5lLZQguTbPWQrh0bh8jGq53DD7Ks2Mt%2Fdeit7se20gizuuop7hamuyXX7L2Q%2FRywvh3SmWQOBTybZYXYLIv4xEjO51HUMIH7Ik9qzNYf3AOJngY8bFOYS2kUehUqwZhwGHhCg3QQeSq%2BeA%2FZXthSXafqjfh9uUnhMvtDWmoh6vB0oJWmxXfkVK%2F1VGYhqAkOIl9QL0OSDBEUPV%2BVVcLdBZbfWuaKlOkdvL8WTzZBA%2F8nBWFwUdkfMNi8270GOqUBzIyhNjg4JZKuPZXjpLtubM6fy2ZaJRA%2BX4f3uffS%2Fmp5FQhBZs4iHEWac%2BKO7RUYRXqaqNV4zD8KALkdFytFIpQVOlvpilKAJHCf8wxhSBlJwncLkJCaxySNzlFsuQxD%2BDKf5ktfJ3yAejk%2BPHLsoYEr3SYGe9VxG3p404z7GE6QkwaOjMXRWPPm%2FmS2pcDd8iUiVn5AAw9nSDOobRfbT3lJuCzI&X-Amz-Signature=455baec68f848cf3c3b70a7a480159b5f01badaf2cfe0abc5ae4983ebf8b567f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JNTE2WV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC50I3Cxto8DDalB3O9I2KBv4ybB4d5NebIlbbtotT%2BTQIgD94uLcv8I%2Fqa%2BT9feEXjng1VNOmYxKC7PTX41%2B9GHtsqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEay9OaDI8yIhwRl4CrcA5yobiFxuvnClsya01QPiVWcPSqLuAfvhQsEmLDtALYLpH9vL4gcZ32vrzKB5S5FWQz3R5nFeOx%2FVoED9L6o20XOVBfvL5iiSfK6%2BYVn2g13PED36BD7BuWKPBngP6Ryou7VfIUKaNRB8IHkT5mLVtEBhdxnuzD9ypjKXxCqivImyNWXvKma8%2FwU%2FSV%2B4wIV%2Fp5vk%2FZB5J0k2T3nA14Ii1EQpxwhTDhwmi8f%2Fb5JcV7XtEoM3Ev0jCqpYvdxwL0oaBNYM3vU97fvGBaChXaODs9RavGMU%2B7kjqSIPsCFaPHiUb2r1qe7gP9qvxck7kVQnjYiZ9ek19tHHs44eaOjCscRvKCfkseuBN86fS%2Flh9LX4MFbCpDvHFhU%2BQnK9k7aHTseiDWx5lLZQguTbPWQrh0bh8jGq53DD7Ks2Mt%2Fdeit7se20gizuuop7hamuyXX7L2Q%2FRywvh3SmWQOBTybZYXYLIv4xEjO51HUMIH7Ik9qzNYf3AOJngY8bFOYS2kUehUqwZhwGHhCg3QQeSq%2BeA%2FZXthSXafqjfh9uUnhMvtDWmoh6vB0oJWmxXfkVK%2F1VGYhqAkOIl9QL0OSDBEUPV%2BVVcLdBZbfWuaKlOkdvL8WTzZBA%2F8nBWFwUdkfMNi8270GOqUBzIyhNjg4JZKuPZXjpLtubM6fy2ZaJRA%2BX4f3uffS%2Fmp5FQhBZs4iHEWac%2BKO7RUYRXqaqNV4zD8KALkdFytFIpQVOlvpilKAJHCf8wxhSBlJwncLkJCaxySNzlFsuQxD%2BDKf5ktfJ3yAejk%2BPHLsoYEr3SYGe9VxG3p404z7GE6QkwaOjMXRWPPm%2FmS2pcDd8iUiVn5AAw9nSDOobRfbT3lJuCzI&X-Amz-Signature=ce9bf8017386a7d73f5e843b49b423da2d6ddf7550b3fb8d76c2ed72c8cfa70c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
