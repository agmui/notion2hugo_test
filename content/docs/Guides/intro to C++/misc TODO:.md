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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI6QJ3MR%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbKfu9ubNDNdwkwhq6Lj5l76cMmPUgz8%2BgmYJ9jpPFgAiEArt7%2FySFQl25TLa9iDpSppvSuXQTQayz1LPUyUxXwboIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZvT3jSfHu1cLE84CrcAz08bjgXFRguq5lbIBuX2Mp0vNh%2BgPciB9oHSmaOhFgf4ci6y2ozahANR8NnxzJbZiuqdTpmffk0mqxwA7wi6cqXVHYUIiAQNwZ5XJ3WVjffPRTbTnBVZ7OTJ6KGT1SzsK4NiX%2Fsv3KHfb3XyZkGhQysmYf0V9xAXViCEFd%2BH663Owf4qfn%2Bp03UKpOu1NZ23NOzfn9yytnJCEDWxM70K0OCnMduBwuMGkbajXeNtKNiQfOHw04PxvxdkPfkmt6tBrKV9i72K%2FIVA3KOWjz076oveZGCr3TQ6cBswnL7ctrwU7dupmUUyp0NkDUTwhzFoW0AYYlIGg4LCGOxEuTKtBwnJB0Bbs%2Bc7KHNx5lcKHr1Ac51IQxWaepz5y%2FO7TbO7Zbm5GlTm4HUfh2EweDqkkh3OCo6Rq46XHUf0Agn%2BCqKOJhtkvCFEu9Mva%2BKZtnP39DrHOQYHXt%2FBKNi%2B9INrfJQPFinGHQKFpg2owZ5d6IQVasbTWSbGL%2BxzvI9Es%2FeN%2BZb4FyAQNO1VK7%2BXC7Dv0HtnM0nLonhnpI7egrypoB08XIprUfwx7IyaJWFkBvSDer7xFHpk3bAbGF%2BaYjLdIaspcZChin%2BdC0eLyZnidGvE5WDE85ATONtlnhvMPjXjMAGOqUB8z35j%2FeG6UUvzqvcVdnt7SnuKLr6LA%2B8uVC5QXkOPtrGMSF%2Fr9owRf%2F7wTYyuh0pdVQydZ2Qimv82QhvsLuLnx9fxqTIhamN26vLlP7q7PNilhiEwHYp3H20YR5GZfsTYLyJgW1nfUpyIVvp%2B4gXZzfSPnQpmux40MBx4UdZVb%2FoaqUZNcRRj%2BT14fKtqx%2FsHCQ5LsfCRFGO6LaISdvBrlqdbjBp&X-Amz-Signature=755ed5a76a327c27b0d581b909fac9c09c0a5cb1f5fc900ea20a611d89eba50a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI6QJ3MR%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbKfu9ubNDNdwkwhq6Lj5l76cMmPUgz8%2BgmYJ9jpPFgAiEArt7%2FySFQl25TLa9iDpSppvSuXQTQayz1LPUyUxXwboIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZvT3jSfHu1cLE84CrcAz08bjgXFRguq5lbIBuX2Mp0vNh%2BgPciB9oHSmaOhFgf4ci6y2ozahANR8NnxzJbZiuqdTpmffk0mqxwA7wi6cqXVHYUIiAQNwZ5XJ3WVjffPRTbTnBVZ7OTJ6KGT1SzsK4NiX%2Fsv3KHfb3XyZkGhQysmYf0V9xAXViCEFd%2BH663Owf4qfn%2Bp03UKpOu1NZ23NOzfn9yytnJCEDWxM70K0OCnMduBwuMGkbajXeNtKNiQfOHw04PxvxdkPfkmt6tBrKV9i72K%2FIVA3KOWjz076oveZGCr3TQ6cBswnL7ctrwU7dupmUUyp0NkDUTwhzFoW0AYYlIGg4LCGOxEuTKtBwnJB0Bbs%2Bc7KHNx5lcKHr1Ac51IQxWaepz5y%2FO7TbO7Zbm5GlTm4HUfh2EweDqkkh3OCo6Rq46XHUf0Agn%2BCqKOJhtkvCFEu9Mva%2BKZtnP39DrHOQYHXt%2FBKNi%2B9INrfJQPFinGHQKFpg2owZ5d6IQVasbTWSbGL%2BxzvI9Es%2FeN%2BZb4FyAQNO1VK7%2BXC7Dv0HtnM0nLonhnpI7egrypoB08XIprUfwx7IyaJWFkBvSDer7xFHpk3bAbGF%2BaYjLdIaspcZChin%2BdC0eLyZnidGvE5WDE85ATONtlnhvMPjXjMAGOqUB8z35j%2FeG6UUvzqvcVdnt7SnuKLr6LA%2B8uVC5QXkOPtrGMSF%2Fr9owRf%2F7wTYyuh0pdVQydZ2Qimv82QhvsLuLnx9fxqTIhamN26vLlP7q7PNilhiEwHYp3H20YR5GZfsTYLyJgW1nfUpyIVvp%2B4gXZzfSPnQpmux40MBx4UdZVb%2FoaqUZNcRRj%2BT14fKtqx%2FsHCQ5LsfCRFGO6LaISdvBrlqdbjBp&X-Amz-Signature=3d34afee2ac4b0bc50c8551ec19088be3c114703249e631214cefb8fe803bd81&X-Amz-SignedHeaders=host&x-id=GetObject)

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
