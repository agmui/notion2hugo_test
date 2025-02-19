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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SDHONFP%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCID2qWAvH%2FnXRLMe4wJW8HxuipIYiGKoFbkRTeIcr52OSAiEA3TZ8RLSwZp%2FLXYadZXbU%2BMYeuQ2famt74kk2obWUhwsqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAJTN1kxIi%2B%2FmFmmCrcA7gsKNzM3C4ITWwpodEWBn48TdRK0k8hIwqp53quv8wRgOvWJXlfY%2Ff7El284hYukBj1MW1KoJHXuNrCRJHzjh9CDR1CVIH8KF%2BiZ4Orl8CefEzsbZ16rhLDqlLXlD3IOZQgPz87nWP7GSOMr71JnEnf0ZUB2sZw%2B6zgPGk3U4gGV%2F5M%2BZB86TcAKjkGFt20vpZkCKbmFpT3lKqCRHkBKTt1IkAd%2FnJS1oTp06PiJrxxCLI9Ia6D7Xj%2FJbJV8DKTpyAM8MwBVdzgukaSmzXGBLvS5Yd4%2FQOYqi1ULsaGB51g%2FA%2BWFS0tHX5ULYITGQkiop%2FojC1fkScBy6HPjMLCfiW9Fl5jbLg6ye5Vx9RulUFUTvopz0%2Bql4rMdHavdllSqZ%2BC5ugu%2BtDVHAIXTWG8EABxATePasNA7UaRKHm%2BXy5hTLza5IwYZCUvpD6f8IXStMwFzSnuXUSWvnTG1%2FrI%2FRgQGhfILtLd1hDe%2B5pZ5X5yZi%2FQ7EngSwRX%2F8wVFxAGMZOmgSjGyz4PSilrTues%2B26N5HjFpNTCt1O%2FUaSDiafLNqlebCUxvQUtf0x7uluilEiUk384Yq0ywBFp4BX28IGv1juZv0sNYos2D5C1oNmHaZzLiDBAEHccP0IDMN361r0GOqUBflep0zaBUU9ni54PZrUVPyh0W5XLvgypGhDvzu%2FXfsxryJWyZ26Aq%2BDtr%2Fxwp4EdSOWEZxBl7L4k2YsaMAsQ3uy0cFlivMzxNFhi604A0%2B2a46lVN4G41rRTSFL8g1j04E8FngJcHKyY2AcQM1yyRCefjr6KqOZNd%2Bs61rVYb3%2BVZFQqteKHaCZuap3xf0DgItZPGatD8PXwcSPhbDjUuiuNfAuy&X-Amz-Signature=a149c4a512434a5664b03a80475621694aa24261512366b3e6a5fbc154f13f2b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SDHONFP%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCID2qWAvH%2FnXRLMe4wJW8HxuipIYiGKoFbkRTeIcr52OSAiEA3TZ8RLSwZp%2FLXYadZXbU%2BMYeuQ2famt74kk2obWUhwsqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAJTN1kxIi%2B%2FmFmmCrcA7gsKNzM3C4ITWwpodEWBn48TdRK0k8hIwqp53quv8wRgOvWJXlfY%2Ff7El284hYukBj1MW1KoJHXuNrCRJHzjh9CDR1CVIH8KF%2BiZ4Orl8CefEzsbZ16rhLDqlLXlD3IOZQgPz87nWP7GSOMr71JnEnf0ZUB2sZw%2B6zgPGk3U4gGV%2F5M%2BZB86TcAKjkGFt20vpZkCKbmFpT3lKqCRHkBKTt1IkAd%2FnJS1oTp06PiJrxxCLI9Ia6D7Xj%2FJbJV8DKTpyAM8MwBVdzgukaSmzXGBLvS5Yd4%2FQOYqi1ULsaGB51g%2FA%2BWFS0tHX5ULYITGQkiop%2FojC1fkScBy6HPjMLCfiW9Fl5jbLg6ye5Vx9RulUFUTvopz0%2Bql4rMdHavdllSqZ%2BC5ugu%2BtDVHAIXTWG8EABxATePasNA7UaRKHm%2BXy5hTLza5IwYZCUvpD6f8IXStMwFzSnuXUSWvnTG1%2FrI%2FRgQGhfILtLd1hDe%2B5pZ5X5yZi%2FQ7EngSwRX%2F8wVFxAGMZOmgSjGyz4PSilrTues%2B26N5HjFpNTCt1O%2FUaSDiafLNqlebCUxvQUtf0x7uluilEiUk384Yq0ywBFp4BX28IGv1juZv0sNYos2D5C1oNmHaZzLiDBAEHccP0IDMN361r0GOqUBflep0zaBUU9ni54PZrUVPyh0W5XLvgypGhDvzu%2FXfsxryJWyZ26Aq%2BDtr%2Fxwp4EdSOWEZxBl7L4k2YsaMAsQ3uy0cFlivMzxNFhi604A0%2B2a46lVN4G41rRTSFL8g1j04E8FngJcHKyY2AcQM1yyRCefjr6KqOZNd%2Bs61rVYb3%2BVZFQqteKHaCZuap3xf0DgItZPGatD8PXwcSPhbDjUuiuNfAuy&X-Amz-Signature=731c047df851bc2e4b1a90570aa957d964e8ab8e935505cb68b8f0475b575253&X-Amz-SignedHeaders=host&x-id=GetObject)

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
