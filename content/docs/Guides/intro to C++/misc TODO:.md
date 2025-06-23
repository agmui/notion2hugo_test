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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKBGDAY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCp4vmubZHa4BNgxUyV1HNtqekrAbgewxfXe2UXh8FVnwIge2FMJFZ%2FW8Z3QFqQ%2Fza1l9vZ%2BLNfe9xpXqgGwItgIZsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDC23ViVYvPImSmaTgircA1Nlcf26Y%2BDV7SBNNobzYwZ7rs4lCkL%2FsHKN36YLlK9T3H8j7FGlbjrANpMhLSTNJn3epXeT%2BSAwayHAiI4qCnhejJa0WayUJelJmRASIZv6u3rGx%2B8pDC3wn%2B77pH1yabRQAt7JO%2FVCy9SfTM2BcvZuUYYhjJ8ipQqn4bkEHVm2UKe%2BRsJjsLLGQd5eFjJ00Lg6w%2FlhloHLZNXWQx8gFcbJwJkefVD%2F%2FEVZdluqUZarWYnrHTa5h6%2B%2Bww4LgXACIBs5%2FDY0d5A9KyB%2BeboJB%2FvCMTX3N1ZPuRocJ59mjZ3emk7KR6z7nW1%2Bv3QIM3yZjDUERzyHe4Kv4nqcCsqEHShKwOu3xBXKI%2BkyzAYLhFxJlDXF%2Fhw8jKf9MFZ%2FIqp5aIIhLOdQ%2FrCxGhmTSdFDXi2O%2FJ5TI5SlPRre8NoYhwKumJyw6ha7O1on08rzuB4B8L4RJgDGu3d76ycS%2BjA7gAYJD4kFCEObK6DxRj1oqyi3d7NtYqNz81Vku7wB4SzO0%2FXIteLKouVczAzjkB9SMBsxSE1QGcPwy8Z9vrYYO07b95CcRBcz8QzFo12Sb7DuH79sDHg4m0wA197ujfUExRu5UvhL6iwNigbmVipeicLclIfzNGX42Sc%2FGxPaMJn05MIGOqUBziBDabOPn1HiVIL032Di1dNCmAqa6tPXb771%2FFVCX4%2Bq658JHybRm0WA1rdeN0JIB6vQHzk9rFceenDwHmwiR1sum2wd1sgUu1y1IW%2FkXTj7VX%2B5bibpaatqfEfatyCHpkegFJMQ26GB2yMaabt%2BYmZenaSoKKDokoJXhGcqT4uLw2RIpMCUTjSkBTo%2BA0jvFqyKLisMZrpKXeCpXnh25FmL7Neb&X-Amz-Signature=b1bd413235d8c5a9c96b74e63642ab158d48db85e69ab6319550a55854c23fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKBGDAY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCp4vmubZHa4BNgxUyV1HNtqekrAbgewxfXe2UXh8FVnwIge2FMJFZ%2FW8Z3QFqQ%2Fza1l9vZ%2BLNfe9xpXqgGwItgIZsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDC23ViVYvPImSmaTgircA1Nlcf26Y%2BDV7SBNNobzYwZ7rs4lCkL%2FsHKN36YLlK9T3H8j7FGlbjrANpMhLSTNJn3epXeT%2BSAwayHAiI4qCnhejJa0WayUJelJmRASIZv6u3rGx%2B8pDC3wn%2B77pH1yabRQAt7JO%2FVCy9SfTM2BcvZuUYYhjJ8ipQqn4bkEHVm2UKe%2BRsJjsLLGQd5eFjJ00Lg6w%2FlhloHLZNXWQx8gFcbJwJkefVD%2F%2FEVZdluqUZarWYnrHTa5h6%2B%2Bww4LgXACIBs5%2FDY0d5A9KyB%2BeboJB%2FvCMTX3N1ZPuRocJ59mjZ3emk7KR6z7nW1%2Bv3QIM3yZjDUERzyHe4Kv4nqcCsqEHShKwOu3xBXKI%2BkyzAYLhFxJlDXF%2Fhw8jKf9MFZ%2FIqp5aIIhLOdQ%2FrCxGhmTSdFDXi2O%2FJ5TI5SlPRre8NoYhwKumJyw6ha7O1on08rzuB4B8L4RJgDGu3d76ycS%2BjA7gAYJD4kFCEObK6DxRj1oqyi3d7NtYqNz81Vku7wB4SzO0%2FXIteLKouVczAzjkB9SMBsxSE1QGcPwy8Z9vrYYO07b95CcRBcz8QzFo12Sb7DuH79sDHg4m0wA197ujfUExRu5UvhL6iwNigbmVipeicLclIfzNGX42Sc%2FGxPaMJn05MIGOqUBziBDabOPn1HiVIL032Di1dNCmAqa6tPXb771%2FFVCX4%2Bq658JHybRm0WA1rdeN0JIB6vQHzk9rFceenDwHmwiR1sum2wd1sgUu1y1IW%2FkXTj7VX%2B5bibpaatqfEfatyCHpkegFJMQ26GB2yMaabt%2BYmZenaSoKKDokoJXhGcqT4uLw2RIpMCUTjSkBTo%2BA0jvFqyKLisMZrpKXeCpXnh25FmL7Neb&X-Amz-Signature=ea892639ca637f95cf6ef0647452039a364e39323bdede33613b97631d9acc51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
