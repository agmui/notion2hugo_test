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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HERWPDK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHuy65JQ0hbTQjy5hK2MjDF2RcuSjsMk8s0x7O2X3BsoAiEAhP4r3%2F4Rg2yZlr%2FxsL4xXUHGp4aQU6M6iw5g0XuC9AIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgH0fKsZne7UZN5PyrcA7dfG2IxJe6xVEOtDsT5rhhVQMSk7exSY10U8ZnsQn4DnfmPbBes0em4QcyzeTwe09AYcpUteHEgoaGcg%2BmgBpSKINSZPTroBXyEBcdvYAuLgQhB8VVg1AVZ4y3xe7UmnZm4ncyjqm92tnncJmVuwqksrk2N%2FAE7XBj3ESWCjGEDO0eBEuJB8gT6CngwxjLM%2FiZPh%2F1q7yuOGM1MtIWnXb0qUh7vPl%2B0C59teZS%2Bo0iKnGq0UxPocNFUZH4gheMIfHTpi0a6LYH%2FS1%2BXGp8Sey4q1JDrZGPqbl%2BuSQPlRSoOCl07s5lTaD61VmEEui5E%2BzKxuW3sS7aZriKcisb0uMwLlY1mj5DLvKFdbLD8KYxGEEXlZmtq7IHzhXJ25aUYTIMEV6%2BwPj8grNmQHOVpoPLif9iAPMzF%2FXbZIJbCGI7ACykkZU7atSboaT2fF4IW7B0OUavwi%2B0FRsAF%2Bl24e2wOCKRAbWRM31CXJ0aXVdp6ew92c0JYUYYJx6KspcLBlahB%2Fkr7Updk3jEDp05W7%2FqSrQp6VJQLKwd8udNedq8EBcwBDZgAtAIEg%2F8KsbzJZQLh8e%2F6cRduCmnwzTyDbXLYFzDoQBNke6Q3r2fAtXE%2FutsS99jTkL8qgX%2FGMKfAxsAGOqUBcH%2BM%2BJoxAGZOQ8icVXxq1CaAS40HDVo1AttoUXJeNp4O3z%2Ba6WOhb5GZjHY3wE5X0BUL3tJsSsy5vnivpl%2BCPLinA%2B2hRbjALpmSCntTr4YCC8%2BoKXXG21X7p8jX8lF9kRk5rqqfaK328LHKVmswnLAgbGr0nfJkbLGeFTyYrrQsPNG0e2%2B1XiGJsp8a8ZV8kuFV4GDiqeKMfsQJscgGFy5L%2F5W4&X-Amz-Signature=ca9ec7f344f09619cce4a60a410f01c43a5e9aa9ca42eea4946193b7340da92b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HERWPDK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHuy65JQ0hbTQjy5hK2MjDF2RcuSjsMk8s0x7O2X3BsoAiEAhP4r3%2F4Rg2yZlr%2FxsL4xXUHGp4aQU6M6iw5g0XuC9AIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgH0fKsZne7UZN5PyrcA7dfG2IxJe6xVEOtDsT5rhhVQMSk7exSY10U8ZnsQn4DnfmPbBes0em4QcyzeTwe09AYcpUteHEgoaGcg%2BmgBpSKINSZPTroBXyEBcdvYAuLgQhB8VVg1AVZ4y3xe7UmnZm4ncyjqm92tnncJmVuwqksrk2N%2FAE7XBj3ESWCjGEDO0eBEuJB8gT6CngwxjLM%2FiZPh%2F1q7yuOGM1MtIWnXb0qUh7vPl%2B0C59teZS%2Bo0iKnGq0UxPocNFUZH4gheMIfHTpi0a6LYH%2FS1%2BXGp8Sey4q1JDrZGPqbl%2BuSQPlRSoOCl07s5lTaD61VmEEui5E%2BzKxuW3sS7aZriKcisb0uMwLlY1mj5DLvKFdbLD8KYxGEEXlZmtq7IHzhXJ25aUYTIMEV6%2BwPj8grNmQHOVpoPLif9iAPMzF%2FXbZIJbCGI7ACykkZU7atSboaT2fF4IW7B0OUavwi%2B0FRsAF%2Bl24e2wOCKRAbWRM31CXJ0aXVdp6ew92c0JYUYYJx6KspcLBlahB%2Fkr7Updk3jEDp05W7%2FqSrQp6VJQLKwd8udNedq8EBcwBDZgAtAIEg%2F8KsbzJZQLh8e%2F6cRduCmnwzTyDbXLYFzDoQBNke6Q3r2fAtXE%2FutsS99jTkL8qgX%2FGMKfAxsAGOqUBcH%2BM%2BJoxAGZOQ8icVXxq1CaAS40HDVo1AttoUXJeNp4O3z%2Ba6WOhb5GZjHY3wE5X0BUL3tJsSsy5vnivpl%2BCPLinA%2B2hRbjALpmSCntTr4YCC8%2BoKXXG21X7p8jX8lF9kRk5rqqfaK328LHKVmswnLAgbGr0nfJkbLGeFTyYrrQsPNG0e2%2B1XiGJsp8a8ZV8kuFV4GDiqeKMfsQJscgGFy5L%2F5W4&X-Amz-Signature=07e9a5dfb75f4d4a1471ede7e12cb052ab4f649bdc6c4e25312bee7965135a77&X-Amz-SignedHeaders=host&x-id=GetObject)

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
