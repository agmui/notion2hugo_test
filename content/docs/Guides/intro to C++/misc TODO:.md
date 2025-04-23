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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSWGDJXO%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAGhKrhwmGnSgHCIcUZ2EVYOX54BG35Utqk8HqWiebApAiBcvCZ0pZVPDV1QFPMXI%2FkvFq7%2F9Xx9WGd4MBTHgkhe%2FCqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMluCLaYO0bgK9gFSUKtwDLwucRCZDBbdTNrxhr4YKtdZbbWicI1ZchmKzYa1iLS1lx8q0ny6jee%2FvOznyVtN7aUMoH8Vyj94eVFPKu64NRkhOX8ESKkLqNS%2FMAu7JYyLXjLe0W8hnajZS8YNj2Le%2BvfFBW9GUuC0wJDG3pp3ByKogRBQfbavziO6E8LqTN39%2FkErHXTSfwAcPm%2BUXVDC6YqEBNs5TOfQjtiwIdayozhOf7rnIvhxZ87%2BM6YmcsYsnBmOYsOARhUGOW22u2omxJx1Q%2B1cnMABriFLcZ6sBjQ9FHIzmgt0MlS9ywgB0OyOrH1PBI36LnIxb5oUDEylVHNmXpmcO8G5dUme1ufL%2B2fpXQ519jKQ1NM8uzDv2ZAaCrWGAOTIlsWHakkZPkljuteaTHpN%2F6egYGg%2FpZ1kWrCS45bDsCxP4efkXiOFYHWJBfqf8wu0JlOwWBOrvdiwf%2Fp5F7U5818fF6%2BhgWOdyaJD9qBErPx%2FzJDbSBGZxg6itrBLy4id%2F1gGkaMBS3w4gjrQhSFFNcZQiODK934RtmPKqRNYo5DYkGTU1Mcp3ssmN8kM7g8XUkkdFoley1YSui7x6mpDyNh8xifG37W7PKN4QDWOR5YyUs6R%2B82TXCBydbtmwsr2NzuHvmDMwusalwAY6pgGq%2BW%2BYbWOUoznJJmJoFBrmDC9yJfVY7sDTyEWJ1q%2BZCJxYwRRcxWmkbG3v2I9fOb17rRu67VYv594%2FHOH7RQ9O2GijtPfxvnUsWUNFI12rksJWN8tvxGsvL2pZe4E8ARd2DsL7KRN9Qu2HezdKBmRLQpJJDfMKrNkd5q2Pi92HB0Ub%2BKyb0JK1HLd%2Be9UY32IH4OB6Zz4uE8wN%2BxnXAlGUxr46Fv2V&X-Amz-Signature=aa08307b41c84ff7de2fc42c778297ec42d843a23bf3b6c6052f0cf73f65c391&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSWGDJXO%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAGhKrhwmGnSgHCIcUZ2EVYOX54BG35Utqk8HqWiebApAiBcvCZ0pZVPDV1QFPMXI%2FkvFq7%2F9Xx9WGd4MBTHgkhe%2FCqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMluCLaYO0bgK9gFSUKtwDLwucRCZDBbdTNrxhr4YKtdZbbWicI1ZchmKzYa1iLS1lx8q0ny6jee%2FvOznyVtN7aUMoH8Vyj94eVFPKu64NRkhOX8ESKkLqNS%2FMAu7JYyLXjLe0W8hnajZS8YNj2Le%2BvfFBW9GUuC0wJDG3pp3ByKogRBQfbavziO6E8LqTN39%2FkErHXTSfwAcPm%2BUXVDC6YqEBNs5TOfQjtiwIdayozhOf7rnIvhxZ87%2BM6YmcsYsnBmOYsOARhUGOW22u2omxJx1Q%2B1cnMABriFLcZ6sBjQ9FHIzmgt0MlS9ywgB0OyOrH1PBI36LnIxb5oUDEylVHNmXpmcO8G5dUme1ufL%2B2fpXQ519jKQ1NM8uzDv2ZAaCrWGAOTIlsWHakkZPkljuteaTHpN%2F6egYGg%2FpZ1kWrCS45bDsCxP4efkXiOFYHWJBfqf8wu0JlOwWBOrvdiwf%2Fp5F7U5818fF6%2BhgWOdyaJD9qBErPx%2FzJDbSBGZxg6itrBLy4id%2F1gGkaMBS3w4gjrQhSFFNcZQiODK934RtmPKqRNYo5DYkGTU1Mcp3ssmN8kM7g8XUkkdFoley1YSui7x6mpDyNh8xifG37W7PKN4QDWOR5YyUs6R%2B82TXCBydbtmwsr2NzuHvmDMwusalwAY6pgGq%2BW%2BYbWOUoznJJmJoFBrmDC9yJfVY7sDTyEWJ1q%2BZCJxYwRRcxWmkbG3v2I9fOb17rRu67VYv594%2FHOH7RQ9O2GijtPfxvnUsWUNFI12rksJWN8tvxGsvL2pZe4E8ARd2DsL7KRN9Qu2HezdKBmRLQpJJDfMKrNkd5q2Pi92HB0Ub%2BKyb0JK1HLd%2Be9UY32IH4OB6Zz4uE8wN%2BxnXAlGUxr46Fv2V&X-Amz-Signature=7dd113ec0de810f9bd00f107cfb70184341e9362bb4025e4c8bdb0e5326ae149&X-Amz-SignedHeaders=host&x-id=GetObject)

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
