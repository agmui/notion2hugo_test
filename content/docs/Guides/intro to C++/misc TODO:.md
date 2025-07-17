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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJGLINKE%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDtOmFEoqqjTJU3hHUNzpXZwNAXgWJV2UWF1FXCgKqVRAIhAK6udHTcVy0vkiv%2FBaYk8p%2FG3x9IMMfRWm6Byjx7Y24zKv8DCHAQABoMNjM3NDIzMTgzODA1Igz2i7pFyI9rcGjUJIUq3APXt8Mi%2FPJRu4dUKyHtjca7JER%2FXlqwYW8xj2puBhglkFIGgPJEf1krdagku8g%2FRgeg5mqgXfJo5FAzQlntOlZ2ibt%2F4Mxmt0TTvjL8tDWlr%2Bq9HLw4FaD0E9bFQcXDIzzhpdOglxE6%2BSI3aGJ3ZJmsTETHNWrrveVyCFnDFD9sVFE4%2BGidd7M%2FqPKMj7gT7j97jel0DGVOIAcwcKySm8tfkFjvj9T5pIKK2u4JllnvGHLscDpooomkD%2BKnyUNTp0FVYmJdOu%2FHx6wVJNUZlKe0EoZb8WWiK60JZLw2JOmMiCELHhT9UfeRdI8DXs%2Fje4GbjVt6M4Ku8zAR5eLjnSy3vuEwLXdZRucmECadskC0%2BMQbc%2BaEOEVODOhGVKpVRif%2B99tB6aAm6TXpqpq%2FidJE2Xi0F4sJkPhlDDeHIDC7TCNsHS6MrO48n16%2FYV3Dzz3LNpqMm4ZAqqpFJi5MmWwK3h%2BxLfD68n9sgLzISBmFOtxjcWD2hbbvTLdpkKXLAb7dHJblgSUe21pfrx6vnwYClOM4MNyYTAzlyGoTFBQRvrOyTxG%2Bg%2Bv0LXVibbbUsmzfFAuoX6kEPbiSSBsJGkGSjbJowlPX%2BPVPvc0DYR22yUx0zT00HzGwOW%2Bh1DDiwOLDBjqkAUK1DTnrGeqBvtqJXQxe95lCHGRSLJwsoMxOHutZzCrQ%2F6DTBYZNTI02YrEEPCKclbmIgB8KELjmKgt5QRMkYKfrM1qZYoZa65nR6MSis5RjALLI1DCKCmNWePJcBIOwGVY9Dv19cwWLzE9ss176d6Zs55LtFIzg%2BC9Q7fs4JwT53kA2k3ilak6hsfgop%2BDP66cFMzOOdS9T66armSflCkCOfQb6&X-Amz-Signature=4d8848e886e4409b08888d314b0364a071387a3ff9d39e5cbabc5dd61eae3446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJGLINKE%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDtOmFEoqqjTJU3hHUNzpXZwNAXgWJV2UWF1FXCgKqVRAIhAK6udHTcVy0vkiv%2FBaYk8p%2FG3x9IMMfRWm6Byjx7Y24zKv8DCHAQABoMNjM3NDIzMTgzODA1Igz2i7pFyI9rcGjUJIUq3APXt8Mi%2FPJRu4dUKyHtjca7JER%2FXlqwYW8xj2puBhglkFIGgPJEf1krdagku8g%2FRgeg5mqgXfJo5FAzQlntOlZ2ibt%2F4Mxmt0TTvjL8tDWlr%2Bq9HLw4FaD0E9bFQcXDIzzhpdOglxE6%2BSI3aGJ3ZJmsTETHNWrrveVyCFnDFD9sVFE4%2BGidd7M%2FqPKMj7gT7j97jel0DGVOIAcwcKySm8tfkFjvj9T5pIKK2u4JllnvGHLscDpooomkD%2BKnyUNTp0FVYmJdOu%2FHx6wVJNUZlKe0EoZb8WWiK60JZLw2JOmMiCELHhT9UfeRdI8DXs%2Fje4GbjVt6M4Ku8zAR5eLjnSy3vuEwLXdZRucmECadskC0%2BMQbc%2BaEOEVODOhGVKpVRif%2B99tB6aAm6TXpqpq%2FidJE2Xi0F4sJkPhlDDeHIDC7TCNsHS6MrO48n16%2FYV3Dzz3LNpqMm4ZAqqpFJi5MmWwK3h%2BxLfD68n9sgLzISBmFOtxjcWD2hbbvTLdpkKXLAb7dHJblgSUe21pfrx6vnwYClOM4MNyYTAzlyGoTFBQRvrOyTxG%2Bg%2Bv0LXVibbbUsmzfFAuoX6kEPbiSSBsJGkGSjbJowlPX%2BPVPvc0DYR22yUx0zT00HzGwOW%2Bh1DDiwOLDBjqkAUK1DTnrGeqBvtqJXQxe95lCHGRSLJwsoMxOHutZzCrQ%2F6DTBYZNTI02YrEEPCKclbmIgB8KELjmKgt5QRMkYKfrM1qZYoZa65nR6MSis5RjALLI1DCKCmNWePJcBIOwGVY9Dv19cwWLzE9ss176d6Zs55LtFIzg%2BC9Q7fs4JwT53kA2k3ilak6hsfgop%2BDP66cFMzOOdS9T66armSflCkCOfQb6&X-Amz-Signature=74d601f2156beb1a2799472d0202bc7599c6194cff84cb5cb1a60d91583431ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
