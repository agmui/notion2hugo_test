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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYB67JDW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDBzhuqhC70M39vxjZUTwAgm1KovhALQRotAXOzIAMxGQIgYYT%2FkVFs1%2BJRJWBL4zrcNY0WFlUjAyNsRSGMLNnvHBQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAv1PFr98yaj%2F4f8QSrcA52QTZtver4FyZp1fl2lBLqd6t2ntEeshVNRWdg%2Bgzar7XzUnLi6R4jR1Ep%2B1TtH0%2F6iLpj8LAnbSA8mUYDOjEzGJ65%2FIYNT8IBBxAPDq%2BazVlbeGMtWRab%2FVsmQlGRfaNJtEbKRJ5M7VMo80wSAS0YkIOL8zOeIrUWasWrGXFqT%2B%2BJth8q3LYEufWeTDQtVluUsXVw955SaKj7KUnqePeUEnl3inn0gwAxFogvpwHQ6u2jRb9V2idEEpV4sEoqCd%2FIPTJMw6jwZLD8J0Pck7sBxwQuDyd%2FjQ7pyE%2Bht%2BAu5j0KWIHdyMAuceFlwXdcp7%2F%2BkkI5DIWgCuOmBjxpminVIOae6OhzICtxU%2F%2BT2wu%2Fve3blvYExADU2HX90SeJ09UbAYsemCRPHGh7yrHTGZ9mjXRQXwDnlR01hZiq0OBE7sRsBCBpEjnWPZmXrUPiw2mCLEUWtkZt4yvzbI%2BD2Y9rEAfWEjTkOAgMAHtnon3z5TenBUB821FxDAuZeaHQRx27BXus9XS488I4FOZdD7IjhpIEkBF44%2B2NWUfWJH4lIcnNrwudRVkIzOrSv5PTRj3dBcOd0bcguA06ClaUzrnQGVWdT1NdRJu7GFEHOvMD64UiTwBazy2Kd2187MMn31cMGOqUBdt2XMx69f8VaraQRItJBrCx29KiFdYfx1jqZRhI8RcOQOkKdGUeHHDImSBGrDmYEC4pffa0p7AFsfkH5w84o9G0pN7nzVJFWSzkTRAC5uFrrm1pSS%2Fgov1oZaozhbBhgTdf3a%2Bvk89Fp%2BfVYNkorHEcHwAXInHczXPxPZJuv4B4PR0jQvK9Zxev9tyhq1J2I%2BAvwSS76vkv5qdEZ3FQaKKSLOjG7&X-Amz-Signature=f6c19e5506a69ad5bbb38570d32baf7b0b24529dea0eeada61b5afc5f3b79587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYB67JDW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDBzhuqhC70M39vxjZUTwAgm1KovhALQRotAXOzIAMxGQIgYYT%2FkVFs1%2BJRJWBL4zrcNY0WFlUjAyNsRSGMLNnvHBQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAv1PFr98yaj%2F4f8QSrcA52QTZtver4FyZp1fl2lBLqd6t2ntEeshVNRWdg%2Bgzar7XzUnLi6R4jR1Ep%2B1TtH0%2F6iLpj8LAnbSA8mUYDOjEzGJ65%2FIYNT8IBBxAPDq%2BazVlbeGMtWRab%2FVsmQlGRfaNJtEbKRJ5M7VMo80wSAS0YkIOL8zOeIrUWasWrGXFqT%2B%2BJth8q3LYEufWeTDQtVluUsXVw955SaKj7KUnqePeUEnl3inn0gwAxFogvpwHQ6u2jRb9V2idEEpV4sEoqCd%2FIPTJMw6jwZLD8J0Pck7sBxwQuDyd%2FjQ7pyE%2Bht%2BAu5j0KWIHdyMAuceFlwXdcp7%2F%2BkkI5DIWgCuOmBjxpminVIOae6OhzICtxU%2F%2BT2wu%2Fve3blvYExADU2HX90SeJ09UbAYsemCRPHGh7yrHTGZ9mjXRQXwDnlR01hZiq0OBE7sRsBCBpEjnWPZmXrUPiw2mCLEUWtkZt4yvzbI%2BD2Y9rEAfWEjTkOAgMAHtnon3z5TenBUB821FxDAuZeaHQRx27BXus9XS488I4FOZdD7IjhpIEkBF44%2B2NWUfWJH4lIcnNrwudRVkIzOrSv5PTRj3dBcOd0bcguA06ClaUzrnQGVWdT1NdRJu7GFEHOvMD64UiTwBazy2Kd2187MMn31cMGOqUBdt2XMx69f8VaraQRItJBrCx29KiFdYfx1jqZRhI8RcOQOkKdGUeHHDImSBGrDmYEC4pffa0p7AFsfkH5w84o9G0pN7nzVJFWSzkTRAC5uFrrm1pSS%2Fgov1oZaozhbBhgTdf3a%2Bvk89Fp%2BfVYNkorHEcHwAXInHczXPxPZJuv4B4PR0jQvK9Zxev9tyhq1J2I%2BAvwSS76vkv5qdEZ3FQaKKSLOjG7&X-Amz-Signature=9a5b411a9954e738959a4628883d1b6a640a0b937f74a21815ec47e9b4b50a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
