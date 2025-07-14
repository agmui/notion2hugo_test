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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBX3KXB3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICm7gFFovX99TzntS1J%2BToZp4hZUfyqwGVXRJYVzrHd3AiEA77%2BSLv9ExSLotOyMRR6FtjwkZUm0631EBjHThWFfPUUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDM5EYiVjRC9xxTQq6ircA4qKvHcstDppsTQVTbRI5QEjcBtum57wgghbA6gRrL%2By12bSnuI2DkddYsgLDuLS1GQfYi4wGHwZjt6Ax6s3Ekh4AFdmElpJpeJmndu0yXaykH7pQkCUDbHhq6f0qU1w4D3HzX5SJfN3mRzEp%2FtK%2BRgh5ykTU6jtiK6Pe1%2FEnPfLKof%2BzsERKD5QwhLZL5tdAPZFxi2vBKbaCFqzlS8anLs9k1eFb94TXkvndNv1pZj8omyr1U3ChNsmydsXO%2BxGCX0aikljtsnuCnTNyI%2BCrR0HqBJ4C28y0bU6E447cwWfH7vn22Rkx8tCHgI4hbsiGS%2F%2Fs2%2BlLSYQOzgxE49bKcf15OcpTZFJ1J6xSO6MhnEz7Wa0AqXIlTv2t8yv42GiJ9I9Cf3aU7IWPxZctcB8wqDEE0st%2FpZT2nZR7a830CIOXBI2pu1dp3W5f2WAuV33eDuYDLk6OjOsTuQwUlVXKYol3%2FHfvC7zVwxJWQsde6f8LHnF0S3%2FeU2uCRhkALDi%2B2l7XQIcALKYEuUDK2VQtmBqB8A0W1Jeq519NOZv9%2BXyDMEaBPDWGZVo01W6U5O67VWk3QV5TqdT%2Fwt55jsQtgwTrBVsbM3MbGKcy%2FpOsbi4i4KqTSun8zOJOnW9MID41cMGOqUB%2FdSKg7DjkhCCTb2YtsUqdYOBmVM%2FqE8TJWp9InV80SWg82MOfyUolRNt830UwThPaQdmMPaTWK9%2B2aF%2Fir2%2BK%2BwLBtE8mSC1wsfLx4gmINz%2FolSKDoi2CQq94rDbxR1gPYvErPqlCgrSrFvu9pZJkFxaBcs440LE4X8wkyr1Vb6Pv3HfrxEVCD774KtnBuLXb5HokIVs52F1LR8c7PN7aaVEamgs&X-Amz-Signature=a80b116ffa9f0382a1ba1936b7d315a7cf6efdadd454de1e485b1ab5b80d8da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBX3KXB3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICm7gFFovX99TzntS1J%2BToZp4hZUfyqwGVXRJYVzrHd3AiEA77%2BSLv9ExSLotOyMRR6FtjwkZUm0631EBjHThWFfPUUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDM5EYiVjRC9xxTQq6ircA4qKvHcstDppsTQVTbRI5QEjcBtum57wgghbA6gRrL%2By12bSnuI2DkddYsgLDuLS1GQfYi4wGHwZjt6Ax6s3Ekh4AFdmElpJpeJmndu0yXaykH7pQkCUDbHhq6f0qU1w4D3HzX5SJfN3mRzEp%2FtK%2BRgh5ykTU6jtiK6Pe1%2FEnPfLKof%2BzsERKD5QwhLZL5tdAPZFxi2vBKbaCFqzlS8anLs9k1eFb94TXkvndNv1pZj8omyr1U3ChNsmydsXO%2BxGCX0aikljtsnuCnTNyI%2BCrR0HqBJ4C28y0bU6E447cwWfH7vn22Rkx8tCHgI4hbsiGS%2F%2Fs2%2BlLSYQOzgxE49bKcf15OcpTZFJ1J6xSO6MhnEz7Wa0AqXIlTv2t8yv42GiJ9I9Cf3aU7IWPxZctcB8wqDEE0st%2FpZT2nZR7a830CIOXBI2pu1dp3W5f2WAuV33eDuYDLk6OjOsTuQwUlVXKYol3%2FHfvC7zVwxJWQsde6f8LHnF0S3%2FeU2uCRhkALDi%2B2l7XQIcALKYEuUDK2VQtmBqB8A0W1Jeq519NOZv9%2BXyDMEaBPDWGZVo01W6U5O67VWk3QV5TqdT%2Fwt55jsQtgwTrBVsbM3MbGKcy%2FpOsbi4i4KqTSun8zOJOnW9MID41cMGOqUB%2FdSKg7DjkhCCTb2YtsUqdYOBmVM%2FqE8TJWp9InV80SWg82MOfyUolRNt830UwThPaQdmMPaTWK9%2B2aF%2Fir2%2BK%2BwLBtE8mSC1wsfLx4gmINz%2FolSKDoi2CQq94rDbxR1gPYvErPqlCgrSrFvu9pZJkFxaBcs440LE4X8wkyr1Vb6Pv3HfrxEVCD774KtnBuLXb5HokIVs52F1LR8c7PN7aaVEamgs&X-Amz-Signature=407c48c0b0c917ebccab0bbe611555cf342f9a495cf8278331f5a6621450e25b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
