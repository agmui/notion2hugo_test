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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECLX675%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCgaYqF2qGwqjOeB9ADDwXoba2welalpo3HZXHAov5RBAIgXDqYkK5GFmV%2FnjKJQwfc7Dvp6qMF86iL%2F5Sj4tZE5sMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOg8iROwonpAQldlHyrcA%2BqHAx1FEfeiFwscJii%2Fl5DhlriKDHVVh6phfBQgUKDoU%2BKxcprFnhYFiOE%2Fuge7rWPVpJ2wp6oriItPn7F0%2FY7EA%2BNpiZtiI2MY9oXUTeOb3T2zKCIqrSvgXfRQwwS0S6SNMEKcJUy58uK%2FJuh7pyeiqENwYDes2ZplUULlo3RKksN2E%2BO4sf9hqukZkwk2pSjHguivriHotULC2JqUVd7pw6InDUfkVLCx96NsS9CPb7EV2qxR3qeYV9Zt%2FaPQgzrKY1tExhqfqFMy3Lr3m98Jx0z%2F78XzLeZpCJ5%2Bbku67GCkD9yUayWu%2BXAZe6B37pCDFlf%2FNBktf38Hrq2oranCCULwTRMMWKrkD%2FMUNQb1B9%2FtDR4%2BrTBZ%2FpSIHNY5Fn1r7N9R4UAUuEoYukvDTixmXas7xkDiOIyastx3jSdo%2BM10Ml1KAtPxWX9xewEdXJB16rRrOLCyOgByWXkmpk%2FW4xbraqCkM84Gtt2%2Fz6QwlSFVPRXJEg5aCO2kNBMzCAuad5bqfVwk7DUkQkMPE5yZMB8wOwxGAOIIDRAif0eDecizlt%2BNchHXz7a2CXpGHE0o8JwUOcASaFS2BwV3ZDzDM3GSMKLuV418LPWhdpzLZx2mDgASr9O8lKiaMLmC8b8GOqUBbXBuD4pUBWgGdA4TVd7Dvvx%2B4DcEL%2FglzjMvSu2ds8ZhSlgDzC6xIUZyEVv890pDIK80VhSlxhOZ8pdnhxKx6Cr847eYhLyYJhHAjX4QBSWyay8xAyN1FdNxp4OQMmdPLFyos8UGkUgLve1pmgcEBumOtaxuznm2GFJLJQYIUczU%2BZcMDlH0n%2BrLdPkneVk04rRetMKOyW1WWAkuDb%2F515%2B4Qhj7&X-Amz-Signature=5a0e1c5386897455eb6bd5084aff9e473348e053d7f8e7ee6bf287846feb3d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECLX675%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCgaYqF2qGwqjOeB9ADDwXoba2welalpo3HZXHAov5RBAIgXDqYkK5GFmV%2FnjKJQwfc7Dvp6qMF86iL%2F5Sj4tZE5sMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOg8iROwonpAQldlHyrcA%2BqHAx1FEfeiFwscJii%2Fl5DhlriKDHVVh6phfBQgUKDoU%2BKxcprFnhYFiOE%2Fuge7rWPVpJ2wp6oriItPn7F0%2FY7EA%2BNpiZtiI2MY9oXUTeOb3T2zKCIqrSvgXfRQwwS0S6SNMEKcJUy58uK%2FJuh7pyeiqENwYDes2ZplUULlo3RKksN2E%2BO4sf9hqukZkwk2pSjHguivriHotULC2JqUVd7pw6InDUfkVLCx96NsS9CPb7EV2qxR3qeYV9Zt%2FaPQgzrKY1tExhqfqFMy3Lr3m98Jx0z%2F78XzLeZpCJ5%2Bbku67GCkD9yUayWu%2BXAZe6B37pCDFlf%2FNBktf38Hrq2oranCCULwTRMMWKrkD%2FMUNQb1B9%2FtDR4%2BrTBZ%2FpSIHNY5Fn1r7N9R4UAUuEoYukvDTixmXas7xkDiOIyastx3jSdo%2BM10Ml1KAtPxWX9xewEdXJB16rRrOLCyOgByWXkmpk%2FW4xbraqCkM84Gtt2%2Fz6QwlSFVPRXJEg5aCO2kNBMzCAuad5bqfVwk7DUkQkMPE5yZMB8wOwxGAOIIDRAif0eDecizlt%2BNchHXz7a2CXpGHE0o8JwUOcASaFS2BwV3ZDzDM3GSMKLuV418LPWhdpzLZx2mDgASr9O8lKiaMLmC8b8GOqUBbXBuD4pUBWgGdA4TVd7Dvvx%2B4DcEL%2FglzjMvSu2ds8ZhSlgDzC6xIUZyEVv890pDIK80VhSlxhOZ8pdnhxKx6Cr847eYhLyYJhHAjX4QBSWyay8xAyN1FdNxp4OQMmdPLFyos8UGkUgLve1pmgcEBumOtaxuznm2GFJLJQYIUczU%2BZcMDlH0n%2BrLdPkneVk04rRetMKOyW1WWAkuDb%2F515%2B4Qhj7&X-Amz-Signature=cbfeacb8f26124b98f916e46de8944b84a6c7afaece3f3dec3f3a594c8fe9033&X-Amz-SignedHeaders=host&x-id=GetObject)

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
