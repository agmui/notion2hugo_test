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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CZZ6BE2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCDBNRkKUxt0t2RfB5SXbcadRX41zj%2F4QT94xob6hhjRwIgVZoqCuY7Guao9uRIMpXEDEvFPS3fWodxrtC5tiVjcPEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDGSUhEOBwXFAk9MVFyrcA4gAau40SON%2FLZDDmLWkKfnMYaa3zogzAp9d7oz%2F9vxMaDoUPiSiSjWaWYQajYrxl2%2B3mrPDGrDwWBhnjqUW6XmgJzqRDS2s2hblOocnbGTPK3SN0GMeiGnm%2BcTU6Dhjrf1wah8fVEoK3GPwRcaDMA8KgJjMOlhPbAdXK1LfKtN3NLf6IoMPl4QIn0txA%2F0HPNU%2FgQMmZrCuoa5sGpP3qOJqnnAaJn%2FuWnoPP99teaTvBHJRhrIbdFZNUnQJO6YNkd%2FdsT%2FW7p8F9hdv237WlJpkYKqoQyN%2B6TwlswJ9sDCjiq7DkXj2m8NCew%2FryMfhopRnh%2FvBwuTWow25xITu4vLZfg%2Bw348feRdydRCkUe%2BBK9wiuz8soMs0Otm%2FdrrNezpR17egRMrmQjXG28NI06KKvvJSbY4OynLExlIgA%2FCDbTaB%2B5zYuDnLVLMPEEgH1HU6AHgz3V%2Bu7ILucMUpi70NSvI2e29ePhyG6Re2svNgW8fFXBTcPancaIaDGL47e%2BvwYApOzfCOxD7b9Le2u415Hk24MW5VhGsPFzQdwPFH6zIeDDUmIkxUBrR1FGiyGQZzcJCZInwQ2ooLCa%2FwsuiYW4h9GqbGTdbdSTksmMy8E1xMNhRE8%2FvDS%2FIHMOmMs8IGOqUBf9YzJcZe9WNgUqYRlB9SUrrKq%2Ff6OxcY1nqQwXL2gAP2u5RxdBgzGZc3GcU1yRiybRdokDEjHsnrUaOkwIqjBZESDBL8cxkuepaIvmwOj0luD1MPJnKgvKtfZmxxwEi17Uu9qaS0R3OgS2WJcgIC%2FiUVDbNtK9bxW6taO1Xue3MquHipLjf7v2H%2BkK%2F3C6ZGo6KayiHZFgyM7aQlkHjJBg9t9BVF&X-Amz-Signature=59726570d7171eacad502e2188bcee0e35634328b249cf968a4661133dcc7232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CZZ6BE2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCDBNRkKUxt0t2RfB5SXbcadRX41zj%2F4QT94xob6hhjRwIgVZoqCuY7Guao9uRIMpXEDEvFPS3fWodxrtC5tiVjcPEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDGSUhEOBwXFAk9MVFyrcA4gAau40SON%2FLZDDmLWkKfnMYaa3zogzAp9d7oz%2F9vxMaDoUPiSiSjWaWYQajYrxl2%2B3mrPDGrDwWBhnjqUW6XmgJzqRDS2s2hblOocnbGTPK3SN0GMeiGnm%2BcTU6Dhjrf1wah8fVEoK3GPwRcaDMA8KgJjMOlhPbAdXK1LfKtN3NLf6IoMPl4QIn0txA%2F0HPNU%2FgQMmZrCuoa5sGpP3qOJqnnAaJn%2FuWnoPP99teaTvBHJRhrIbdFZNUnQJO6YNkd%2FdsT%2FW7p8F9hdv237WlJpkYKqoQyN%2B6TwlswJ9sDCjiq7DkXj2m8NCew%2FryMfhopRnh%2FvBwuTWow25xITu4vLZfg%2Bw348feRdydRCkUe%2BBK9wiuz8soMs0Otm%2FdrrNezpR17egRMrmQjXG28NI06KKvvJSbY4OynLExlIgA%2FCDbTaB%2B5zYuDnLVLMPEEgH1HU6AHgz3V%2Bu7ILucMUpi70NSvI2e29ePhyG6Re2svNgW8fFXBTcPancaIaDGL47e%2BvwYApOzfCOxD7b9Le2u415Hk24MW5VhGsPFzQdwPFH6zIeDDUmIkxUBrR1FGiyGQZzcJCZInwQ2ooLCa%2FwsuiYW4h9GqbGTdbdSTksmMy8E1xMNhRE8%2FvDS%2FIHMOmMs8IGOqUBf9YzJcZe9WNgUqYRlB9SUrrKq%2Ff6OxcY1nqQwXL2gAP2u5RxdBgzGZc3GcU1yRiybRdokDEjHsnrUaOkwIqjBZESDBL8cxkuepaIvmwOj0luD1MPJnKgvKtfZmxxwEi17Uu9qaS0R3OgS2WJcgIC%2FiUVDbNtK9bxW6taO1Xue3MquHipLjf7v2H%2BkK%2F3C6ZGo6KayiHZFgyM7aQlkHjJBg9t9BVF&X-Amz-Signature=28273538124bb707f2ba98525a31906506f54ca298f2171c2cfc66a21fb325c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
