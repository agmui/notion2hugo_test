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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTMRXCO6%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPdOMEmozjIsJPCczM2Soe0Nk8M6jH7LGOH1Eil0Lq5AiEAnkc6lIr%2Fm%2BnR1JQssw6GBhpV%2Bnh3Xpybk281m7ydB0Aq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDOvqyaqbWlh1yO1MPyrcA6sIVIwJT%2Brlb2twPlhfuvLBe%2B4Wxj8dyI1wcNycB8G4wTgsMv%2FNwLS%2FSSp4IFyvakqpwzOIdafMnEjx4BT0mwp%2FQz2wZs8dT0Ysxo5ynrJhAsVzSVHQnNdmZ4pojKpFhOXFyQtMVj5b5hSlpwJbqv4ww4%2FGqC5j0xieUmHBkb2CL8otOug51XSy5z1lrLwzKh8jspTmByjCWno4HIXP0lPMFXAQVXaJMay3EZFh2EW2tf9ItCnQosxSp5tmJ5AOEUIurA85S9RRmlpMCAi3EbI%2BAQMzXdKCrMnPugqJWp8rdUg0KLDbCiO3C6f3Ss847dQgIV5svUOOR1JxtVFulA6O3x9xoGeNHk9WqFICiXO8TYru4%2BqwInRJGu0cf9dF%2B11ZLvQaIqct3uQIi31nxSDstSdeQXkv0KXL7ezYnXauk%2BSKV5i8L2ctBrvTUTZjI8w9OGMIYmtmtCqQnT8f1dx%2FGeZ67410zhF1SxYEH8GNt0Mdv03ozRSYxkHzN13K87nslf%2F83Fycf1OaJGU7B6e6mTCoz9HkIPiN%2Ff0KVjpYi8X4HABe7CCwooLgR5lfhLeou76oJYuVYCe1bHAdHzMsz1pP8GQFkKkRRocs4pKAXkfdWkFl3F4cNpEgMJiuvr8GOqUBGTLVzzrGgLADR3FiLaa3EeWinq3Yy0V0wKCOETpvvARYJL7512QYkWnvq%2Bybn%2BrM6xl7aVZfI9HNrZUikGkPz%2FxAiGpevvxTtghegb62HGAYiIggxDIu4%2Bni2RXaYrgX9WF0zQuZeO39v9RVnc15SmsSywJlvIO7e5pGe33RDkcBw1y0a7fYa9dtqteCul28zCTw65Flx7S9qvQkAdPmpcRYe5Qj&X-Amz-Signature=25969ceb244cddad2b65f0d73ae43eb59f879700439fc9f80e5a368f61609494&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTMRXCO6%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPdOMEmozjIsJPCczM2Soe0Nk8M6jH7LGOH1Eil0Lq5AiEAnkc6lIr%2Fm%2BnR1JQssw6GBhpV%2Bnh3Xpybk281m7ydB0Aq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDOvqyaqbWlh1yO1MPyrcA6sIVIwJT%2Brlb2twPlhfuvLBe%2B4Wxj8dyI1wcNycB8G4wTgsMv%2FNwLS%2FSSp4IFyvakqpwzOIdafMnEjx4BT0mwp%2FQz2wZs8dT0Ysxo5ynrJhAsVzSVHQnNdmZ4pojKpFhOXFyQtMVj5b5hSlpwJbqv4ww4%2FGqC5j0xieUmHBkb2CL8otOug51XSy5z1lrLwzKh8jspTmByjCWno4HIXP0lPMFXAQVXaJMay3EZFh2EW2tf9ItCnQosxSp5tmJ5AOEUIurA85S9RRmlpMCAi3EbI%2BAQMzXdKCrMnPugqJWp8rdUg0KLDbCiO3C6f3Ss847dQgIV5svUOOR1JxtVFulA6O3x9xoGeNHk9WqFICiXO8TYru4%2BqwInRJGu0cf9dF%2B11ZLvQaIqct3uQIi31nxSDstSdeQXkv0KXL7ezYnXauk%2BSKV5i8L2ctBrvTUTZjI8w9OGMIYmtmtCqQnT8f1dx%2FGeZ67410zhF1SxYEH8GNt0Mdv03ozRSYxkHzN13K87nslf%2F83Fycf1OaJGU7B6e6mTCoz9HkIPiN%2Ff0KVjpYi8X4HABe7CCwooLgR5lfhLeou76oJYuVYCe1bHAdHzMsz1pP8GQFkKkRRocs4pKAXkfdWkFl3F4cNpEgMJiuvr8GOqUBGTLVzzrGgLADR3FiLaa3EeWinq3Yy0V0wKCOETpvvARYJL7512QYkWnvq%2Bybn%2BrM6xl7aVZfI9HNrZUikGkPz%2FxAiGpevvxTtghegb62HGAYiIggxDIu4%2Bni2RXaYrgX9WF0zQuZeO39v9RVnc15SmsSywJlvIO7e5pGe33RDkcBw1y0a7fYa9dtqteCul28zCTw65Flx7S9qvQkAdPmpcRYe5Qj&X-Amz-Signature=b4b02bf513b49e229137f3f9b22813b8a66ea31ad73c8445b24fc3a83a469e88&X-Amz-SignedHeaders=host&x-id=GetObject)

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
