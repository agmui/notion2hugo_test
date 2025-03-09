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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625JNAVFC%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCOGcx8Tz5q4aKkXAnbT%2Bf2eJzSZa9f857KfZkhb1HZ2QIhAIJ9FiuugGgNoleCa3okyHLF8nFyashto9uyejfDRGKCKv8DCHkQABoMNjM3NDIzMTgzODA1IgyrAEhEj4Hkyql6mbUq3APnpalw6AJOsR5v6t%2BOnVSyKrVt6QVP%2BrtgffUsLLdGzy9UoB%2BytLdurH%2F8t8eiBkeBuszY62%2BkvefrAVgXVC36hDZCDcVrEetkemcuG0jF88z23dURXD9%2Fk0GE6IiNsX3QOViP%2Fc8r7VBWiHlKOgdUjJzW9nmnDiKnMpuJXfpBxCQdJay7V44OtCz9MKWVocTyUgEaC3pnHIAVumnnvu%2BElzz4E4uLUPgbzqHRLyjxX1v4ClcqfzQTLkxZHqS9kFWKXQL%2BAdNjglAyI1w0WFR3KB%2FZXZGo54Xy8YirRqnuD1Rgslhhup2nCUae3H8zfWxGTkdTZG0DNrjZ8oYSG%2B%2FVz3QMKEzJBmguN2ZEYN%2F43s2BfXSegZLV3ETlEy81Nahov4Lth0SSK9Ly3kVqcVt%2FRkgBb0IfVcIY392SqSiljOQHSZfYhTBvCM30VyqkcOaSu0T%2FTDZGgiKMzrtCAg%2BdN8nM5GaVXk3VZPvR7gel316sI12F7Q5HvEPrjH6%2BKZOryrMqCyO2HmtKH5uePoH6PpIOuzS8lG0pfvkreHUXWKbayH6%2B6n7l9KcTF67aJXWFarhPSAH3n4JxUGSryBQ%2B0WUYdRhAddiTQ8TGJw9xbgXIjP6XlNkVIILnKjDv5ba%2BBjqkAUhpc0LOkGG76FCJdvCLi3kiliQML6RrKWJ8GwcQmSQq8LVjAk9U%2FJX3ON%2FL0s8Ef2Vfo59QWqtzZkImLVZdrvKzmepel2ud3GeLw9kYKk3aZTgP7retHN9RQb0x1Sjep9%2Fjb2xK7U4zIYg77KJwc0VYo%2BIBULW3BAegAGETuBpEVcgndxv%2FZWF50zdrHwAa1oOe4mzKmoys%2BQ9D6uReh5oLidxr&X-Amz-Signature=74cd3033e4bf33e073f9bfbbf8c3e35239b5e85ee2c6e61d01679d5925719bcf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625JNAVFC%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCOGcx8Tz5q4aKkXAnbT%2Bf2eJzSZa9f857KfZkhb1HZ2QIhAIJ9FiuugGgNoleCa3okyHLF8nFyashto9uyejfDRGKCKv8DCHkQABoMNjM3NDIzMTgzODA1IgyrAEhEj4Hkyql6mbUq3APnpalw6AJOsR5v6t%2BOnVSyKrVt6QVP%2BrtgffUsLLdGzy9UoB%2BytLdurH%2F8t8eiBkeBuszY62%2BkvefrAVgXVC36hDZCDcVrEetkemcuG0jF88z23dURXD9%2Fk0GE6IiNsX3QOViP%2Fc8r7VBWiHlKOgdUjJzW9nmnDiKnMpuJXfpBxCQdJay7V44OtCz9MKWVocTyUgEaC3pnHIAVumnnvu%2BElzz4E4uLUPgbzqHRLyjxX1v4ClcqfzQTLkxZHqS9kFWKXQL%2BAdNjglAyI1w0WFR3KB%2FZXZGo54Xy8YirRqnuD1Rgslhhup2nCUae3H8zfWxGTkdTZG0DNrjZ8oYSG%2B%2FVz3QMKEzJBmguN2ZEYN%2F43s2BfXSegZLV3ETlEy81Nahov4Lth0SSK9Ly3kVqcVt%2FRkgBb0IfVcIY392SqSiljOQHSZfYhTBvCM30VyqkcOaSu0T%2FTDZGgiKMzrtCAg%2BdN8nM5GaVXk3VZPvR7gel316sI12F7Q5HvEPrjH6%2BKZOryrMqCyO2HmtKH5uePoH6PpIOuzS8lG0pfvkreHUXWKbayH6%2B6n7l9KcTF67aJXWFarhPSAH3n4JxUGSryBQ%2B0WUYdRhAddiTQ8TGJw9xbgXIjP6XlNkVIILnKjDv5ba%2BBjqkAUhpc0LOkGG76FCJdvCLi3kiliQML6RrKWJ8GwcQmSQq8LVjAk9U%2FJX3ON%2FL0s8Ef2Vfo59QWqtzZkImLVZdrvKzmepel2ud3GeLw9kYKk3aZTgP7retHN9RQb0x1Sjep9%2Fjb2xK7U4zIYg77KJwc0VYo%2BIBULW3BAegAGETuBpEVcgndxv%2FZWF50zdrHwAa1oOe4mzKmoys%2BQ9D6uReh5oLidxr&X-Amz-Signature=a0af045237f9c0ed6e7fed5f14bc2c5fd111c8ebdd9fac5c099bb5f44fb50854&X-Amz-SignedHeaders=host&x-id=GetObject)

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
