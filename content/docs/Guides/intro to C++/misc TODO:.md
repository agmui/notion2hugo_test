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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOP5YLBB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCKEPLRdemLk607ha4ua3Aoz6fciz35izxd03vr0SjrrQIgdc7EOfio9dmalJQBcfPNAQaqRGQj83DEPYHVUbSbvtMqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8H9gUQMiseOaLX%2BCrcA48cxJTfiExGtPQr%2FtkgTez8L%2BImIYYLvbgZyaWz8B9MZnjS6JQ8XwGyazZcAWezES0fbhFNdvMiJw5t8r3nmGpY4obdSFupf0NasybDgfiaL5xJ6cZD3tIYmUzpQubbcE4YVXSE21OY1zvrvZFgSwFAYsEfBFCVcT6xROkmwlzVbddTmF%2BLv7WmQd7mqA3UWNKcIlk%2BZw%2FPtF6KG%2BZU%2BUjVvbKA%2BLS1ZQNK3eeZwuD5zv%2FHeXe90Szvb7k5TCzbJaSlcYTyApMJ6gkEEgZ9nTcl1wQq0m0oC%2BECe2yj3dKgmsoDhiCx33ApAG8e41lq4EvfqqOoFx40LxHrnXcgVIFB8of2msiEti%2FhbblSrx5Kzc74%2B24R8%2BWW938AMlzeood%2BzbpruCLndj2yRdzMrwa0OX6p%2BtCL91vlgmyvbVC6UUDNU88nxKSOwHaiAMd4khOsv8QsIZBQ4InvTFanxNPVxibwXm9kp4gYa9LAgQdhixRXPMQlOyoBlTlGK%2BGyxY8MxCP2QhMD5mIUz3kbOXK%2FVUDHjXAuJWAaQVEOw%2FSj1VMLzkU%2FHhCVACB5ztn%2BNGw5JYp5DcnN8v%2FQ2T2geliIXmw7NAIUe63luwOdoNnnWDkNQ9hn2XMiDOH%2BMMPjz8AGOqUBn38sV7CZZyDc0%2BUpzKOyNKn%2FIvM0lYttyz7Zzeng6k%2BfbBG1%2F%2BTEr%2BhbTa9ePd74rtayla4REt4FbQ1FE31%2BuLm7djegnL0jJdSsmtacWdCBs7tdUWlSQxxsskw%2BjbIOxGIEnC2Jk7%2ByyqbMXbAWp04bZAp%2FkL3%2FLzjcRnHXdB%2F%2FDGXsnArVEP0L9SkrG%2FQ7uqgRT4rQSYSzPo0mJohuMX19jNGs&X-Amz-Signature=7a7b7273fff7222f617a652ec90899ad1196d8d4b3d952bbb892660ffb8f7da4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOP5YLBB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCKEPLRdemLk607ha4ua3Aoz6fciz35izxd03vr0SjrrQIgdc7EOfio9dmalJQBcfPNAQaqRGQj83DEPYHVUbSbvtMqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8H9gUQMiseOaLX%2BCrcA48cxJTfiExGtPQr%2FtkgTez8L%2BImIYYLvbgZyaWz8B9MZnjS6JQ8XwGyazZcAWezES0fbhFNdvMiJw5t8r3nmGpY4obdSFupf0NasybDgfiaL5xJ6cZD3tIYmUzpQubbcE4YVXSE21OY1zvrvZFgSwFAYsEfBFCVcT6xROkmwlzVbddTmF%2BLv7WmQd7mqA3UWNKcIlk%2BZw%2FPtF6KG%2BZU%2BUjVvbKA%2BLS1ZQNK3eeZwuD5zv%2FHeXe90Szvb7k5TCzbJaSlcYTyApMJ6gkEEgZ9nTcl1wQq0m0oC%2BECe2yj3dKgmsoDhiCx33ApAG8e41lq4EvfqqOoFx40LxHrnXcgVIFB8of2msiEti%2FhbblSrx5Kzc74%2B24R8%2BWW938AMlzeood%2BzbpruCLndj2yRdzMrwa0OX6p%2BtCL91vlgmyvbVC6UUDNU88nxKSOwHaiAMd4khOsv8QsIZBQ4InvTFanxNPVxibwXm9kp4gYa9LAgQdhixRXPMQlOyoBlTlGK%2BGyxY8MxCP2QhMD5mIUz3kbOXK%2FVUDHjXAuJWAaQVEOw%2FSj1VMLzkU%2FHhCVACB5ztn%2BNGw5JYp5DcnN8v%2FQ2T2geliIXmw7NAIUe63luwOdoNnnWDkNQ9hn2XMiDOH%2BMMPjz8AGOqUBn38sV7CZZyDc0%2BUpzKOyNKn%2FIvM0lYttyz7Zzeng6k%2BfbBG1%2F%2BTEr%2BhbTa9ePd74rtayla4REt4FbQ1FE31%2BuLm7djegnL0jJdSsmtacWdCBs7tdUWlSQxxsskw%2BjbIOxGIEnC2Jk7%2ByyqbMXbAWp04bZAp%2FkL3%2FLzjcRnHXdB%2F%2FDGXsnArVEP0L9SkrG%2FQ7uqgRT4rQSYSzPo0mJohuMX19jNGs&X-Amz-Signature=3668c52d992abe27bd425efa5928b9c2a25ec441e8b0755721c5d8ac66c3e834&X-Amz-SignedHeaders=host&x-id=GetObject)

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
