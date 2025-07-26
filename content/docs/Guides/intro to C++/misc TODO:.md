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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U32GJQ6S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCNvOIARuvXaCk1%2Fiml4Hp1ZRBabwWhfoosMY8kPLnDbAIhANbMLpdonK3zoO7wyj%2B2%2BEaeaP7SIvb5UKiZndI72ldqKv8DCF0QABoMNjM3NDIzMTgzODA1IgwoWYep%2B%2FVT3TRDodoq3AOo%2Bz4Rh2zv%2BZIC13gRQNwXBIAMcx58n6cDZPR4v%2FT9YeHrJVpVz1OdRmIvrVfoqJZu6RifyRQ%2FVso2AqpQWaxOtRm17N7tj9HT%2F52kUp108hCIlw8khFX5ikv7%2FTWfGgOdhUTpFRZyjHUjh19plfIFI1aCQ9PV1KtRGNyH00M5L5yNSSdDsl4rCNwKq1aIDWJPA7FyW7pbRdKxE%2BM6%2FUPlD3YY%2B8uhRmg5yPT%2BBv%2Fr7JBiGn0%2B6etiehSRM3b2oP5QEGH5JVL8xB2pArgOcy7mKzsDcEPXCuRd67GW00rgTi4fT92sAAjEwNAXPAjjsGupKZ2W7wO%2BYPxGozQ6p19ABaoUG22Elh%2ByUVDR63KOzKES3taLqrFcpbpt7KAYuxDe5kO6f8%2Bm4HzX0pQ2bnUzcD7H%2FHvAzBN05aOxNsDrSqWacI7LUQpX2zkw1Li8y0E%2FvhsPSZGuGxHRJYKcyklz790iwu5eaCHxDDCXxDxZZrAq27hZr3O32vU3FC7RKEUsbS0q47ur5nUqA3XaeNn%2F68nShJNzH9FzYHLsvc1f3Ppzcn46%2FIqNdfENYW6ValJtWQvBZG6FcuqgRLAKhEshsWAbFOzsdjzY4B6IXlz1%2FSyYs9ZscE7gF8m78jCi%2BpLEBjqkAdhq0k0LDp7zs73Kb3NObyhZSJN2m6MJ0kIXoutFDm%2Bme%2BmtueTcrXcVTXd8ptKl2p6oBP0L4GNfBHwvm%2BFC1jca1HBjPOP3BSgm2rFHu47C05sRd55BGGYUCIXsAVlCMhp5cGVvcnUp3Zmq6GnCF3sADEh9%2BDkO5LQ357uV9XgdhiI8lMCMjYBgEKNNU7Z7oacm3uD9yfSU1%2FbpJLkGVC3kOV0x&X-Amz-Signature=e46e18ab41b3342bcb8338f1733feadcd3b9fc9e74df59d53996d92af2c443f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U32GJQ6S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCNvOIARuvXaCk1%2Fiml4Hp1ZRBabwWhfoosMY8kPLnDbAIhANbMLpdonK3zoO7wyj%2B2%2BEaeaP7SIvb5UKiZndI72ldqKv8DCF0QABoMNjM3NDIzMTgzODA1IgwoWYep%2B%2FVT3TRDodoq3AOo%2Bz4Rh2zv%2BZIC13gRQNwXBIAMcx58n6cDZPR4v%2FT9YeHrJVpVz1OdRmIvrVfoqJZu6RifyRQ%2FVso2AqpQWaxOtRm17N7tj9HT%2F52kUp108hCIlw8khFX5ikv7%2FTWfGgOdhUTpFRZyjHUjh19plfIFI1aCQ9PV1KtRGNyH00M5L5yNSSdDsl4rCNwKq1aIDWJPA7FyW7pbRdKxE%2BM6%2FUPlD3YY%2B8uhRmg5yPT%2BBv%2Fr7JBiGn0%2B6etiehSRM3b2oP5QEGH5JVL8xB2pArgOcy7mKzsDcEPXCuRd67GW00rgTi4fT92sAAjEwNAXPAjjsGupKZ2W7wO%2BYPxGozQ6p19ABaoUG22Elh%2ByUVDR63KOzKES3taLqrFcpbpt7KAYuxDe5kO6f8%2Bm4HzX0pQ2bnUzcD7H%2FHvAzBN05aOxNsDrSqWacI7LUQpX2zkw1Li8y0E%2FvhsPSZGuGxHRJYKcyklz790iwu5eaCHxDDCXxDxZZrAq27hZr3O32vU3FC7RKEUsbS0q47ur5nUqA3XaeNn%2F68nShJNzH9FzYHLsvc1f3Ppzcn46%2FIqNdfENYW6ValJtWQvBZG6FcuqgRLAKhEshsWAbFOzsdjzY4B6IXlz1%2FSyYs9ZscE7gF8m78jCi%2BpLEBjqkAdhq0k0LDp7zs73Kb3NObyhZSJN2m6MJ0kIXoutFDm%2Bme%2BmtueTcrXcVTXd8ptKl2p6oBP0L4GNfBHwvm%2BFC1jca1HBjPOP3BSgm2rFHu47C05sRd55BGGYUCIXsAVlCMhp5cGVvcnUp3Zmq6GnCF3sADEh9%2BDkO5LQ357uV9XgdhiI8lMCMjYBgEKNNU7Z7oacm3uD9yfSU1%2FbpJLkGVC3kOV0x&X-Amz-Signature=7996c5aa624d8bc0a65fdeba208e67e404ac9c93c67f48ac4408ed896c2043ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
