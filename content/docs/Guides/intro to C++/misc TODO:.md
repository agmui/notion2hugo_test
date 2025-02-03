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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ESYK565%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHO8%2BhFP5hLePJL6ZiVABXCDg7Lo3%2FmAw2G7B78ndAynAiEA0TQ56X%2FyMryVNeII%2BYu6cl8enrrjVoMIZ9TNmZAdE2Iq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFWCvUASvJwc7BTFWircA2z9xVkmtHPt4SP5RrrXuqrPxHBUBUha3pLJm5JAWDagSgv3XoCNk9ovl2gnmC90q8moK84XE%2Fzbaji0dn7THOO%2B9bi4fB8d%2BU9kaYk2ljH8O%2FrM6VyP9SmTf3OJnP5jWEx84Tid7hhlAeLwpEWMUfFXM%2BME%2BmwvPBJn2OSMy%2FYttX6eLxef32wzhU27ZXO%2F7oQKNbLt8KZiZB81gv97gHIkt4cprmDtpxe0sAoHjShZMrjFR%2FQPXKoL4FdeAAhRTR1iQIqLZyYWMMB32aAe1%2F%2BBRLDrsUh9AuPvAyXIqyB5QTyq9M%2FF1URgSimq7VOhSCMH2p1xfuuCMOWnd4GrtMhN4mAN3%2BS4%2BbBA64DzLNccvLhhER9H2WUDMN%2F9lRaC64Lc4RWMbRn3SP%2BUB%2FOQB%2BdQDjOwpFxeK1v37l56Ge8jh2MlzTCWtgufirdZC5lKkCs%2BQKIBFJLh2ym5iDcUxm3%2BKqDmZKy%2FAf5kVWvIIW37oelnDqvFbDF8ZpawIHh0PbMSpgj0Zsnnn19mCjMD4OMKqIYVxKGM8FpeBcWFoGTt7ai%2BXXr9RUsJQzd07i3vnsFehtG4gmCu0PVGxI3bGVJOnWkud1W%2FQHDoAub9V4dn61Q6iUY5TbiQE5y9MMbZgb0GOqUBttxz%2BVW%2BrLU9AuBFSCIdJvWB8X%2FLi8kq9%2FLNYUi4W5Mkvge5%2FKHU%2BwV2MvEYNHk%2BxCKR6Dm%2BnyCIpr4rQZZCq3FhT9R7QN5HargneRzCNm1%2Bi%2BkoAqfG2lltBTPVZa%2Bsz3BfkxMoR7cQQBorPq4ZLR768AAbwcizVW%2F%2B9CJPfGHfZgEPLpLSI3o7tTE3H%2Bj0o8pYuUxx1eFbCZYODfl%2F8X1%2F17RG&X-Amz-Signature=9484b5605474896e6db056897d6e4236ac6326c15c01641ad23421e8a370baaa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ESYK565%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHO8%2BhFP5hLePJL6ZiVABXCDg7Lo3%2FmAw2G7B78ndAynAiEA0TQ56X%2FyMryVNeII%2BYu6cl8enrrjVoMIZ9TNmZAdE2Iq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFWCvUASvJwc7BTFWircA2z9xVkmtHPt4SP5RrrXuqrPxHBUBUha3pLJm5JAWDagSgv3XoCNk9ovl2gnmC90q8moK84XE%2Fzbaji0dn7THOO%2B9bi4fB8d%2BU9kaYk2ljH8O%2FrM6VyP9SmTf3OJnP5jWEx84Tid7hhlAeLwpEWMUfFXM%2BME%2BmwvPBJn2OSMy%2FYttX6eLxef32wzhU27ZXO%2F7oQKNbLt8KZiZB81gv97gHIkt4cprmDtpxe0sAoHjShZMrjFR%2FQPXKoL4FdeAAhRTR1iQIqLZyYWMMB32aAe1%2F%2BBRLDrsUh9AuPvAyXIqyB5QTyq9M%2FF1URgSimq7VOhSCMH2p1xfuuCMOWnd4GrtMhN4mAN3%2BS4%2BbBA64DzLNccvLhhER9H2WUDMN%2F9lRaC64Lc4RWMbRn3SP%2BUB%2FOQB%2BdQDjOwpFxeK1v37l56Ge8jh2MlzTCWtgufirdZC5lKkCs%2BQKIBFJLh2ym5iDcUxm3%2BKqDmZKy%2FAf5kVWvIIW37oelnDqvFbDF8ZpawIHh0PbMSpgj0Zsnnn19mCjMD4OMKqIYVxKGM8FpeBcWFoGTt7ai%2BXXr9RUsJQzd07i3vnsFehtG4gmCu0PVGxI3bGVJOnWkud1W%2FQHDoAub9V4dn61Q6iUY5TbiQE5y9MMbZgb0GOqUBttxz%2BVW%2BrLU9AuBFSCIdJvWB8X%2FLi8kq9%2FLNYUi4W5Mkvge5%2FKHU%2BwV2MvEYNHk%2BxCKR6Dm%2BnyCIpr4rQZZCq3FhT9R7QN5HargneRzCNm1%2Bi%2BkoAqfG2lltBTPVZa%2Bsz3BfkxMoR7cQQBorPq4ZLR768AAbwcizVW%2F%2B9CJPfGHfZgEPLpLSI3o7tTE3H%2Bj0o8pYuUxx1eFbCZYODfl%2F8X1%2F17RG&X-Amz-Signature=af6aef38034d355afcb5acc0e83ae97ccf0c432313ead1e37a8eebca18c4f591&X-Amz-SignedHeaders=host&x-id=GetObject)

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
