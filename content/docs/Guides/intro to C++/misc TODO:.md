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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQS4KOD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBb5YaP2DFG6XuwrXXK9bfymierg88jNj8nxv7b6nuJ9AiBwLy%2FxomY5zGRwImpDE9Qaktbvgv4bfgicfk%2FJezqlfyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMUqGFycQnaP3OqtfYKtwDWkr5AoQdeQzCJkFzih6qHwguQL5sQGrJeGq37lh53UyXbdlVhJUhTbeH6nDsnljwYlmyIOnLZwPi1Ulg98dOl63fM85PhjGMpCZsCZ5PRkjxjOE%2F10Rp6TjnU6PYCqcW14OQPv%2BSWTyjPMBmWyLoSNaVWVMkIBS6YDdfOpePBDu1VB6hA%2FbROapWz4nnzODJ2mzwptq0B98rhmOxQHxQl1F3vTCr51jxgw8s%2FeaQlTWDYlZHfXWoAe5in4N5%2By%2BHuNpbtEEsVGWIZY%2BwosJNROmPWM17QiHQSh4Co7J%2FFN6hYykPOYdamIxvKgVOzxTRWYKWYW6p%2FqzfvJkKxSNVLRr1FwkWYzcEs7HTZzqE1Y9bXzxCvCIotDkDBHERyCoL45OvXnEUMK4RDk8cOQbPMWBwg%2BuqaAJvU8YRvcf1JM%2BOCyDv8wnn9yI%2BSrBmNtmmza0tOUqkshJjwBi%2FCMEWkyad4iX1V6bj7jX5ZPdoHcVfjgYbkKWS897ji%2B8wvWdzHopLZc63kOubX%2BJydxGFdQDqEn7NoUxkKGrpnv9QthLgSgPG1fn11dQZfc4za5FruJMaW0yDmFmzwm7NkQLQC6S1B8R5LYSG2UqD1Fd0EXkkX2wnPz7RxoJ2mfswpJfMxAY6pgHrrYwVN1bhF2g7NYdFfTOeZR%2FvkwHONnkWPHCo2F2l8fmH33rxkCuNe3BavGfRFagcCDN9pJV%2BxiLc2%2BFIFtrQViAcsYf4YJuAVPZegoEew04b8nXqYWLzw8dcA0tcZMnnNpKzn8efM1GTpaLulamKg2QaV96PISWZcbtEfgSuQqPMA6edsld2leLudZ6fYzavBYqQccRWCXjDpej5vP6myKrbeaws&X-Amz-Signature=473c115ddd1ec04359d1752e3151df1e2777b1f136ddd444ad8c5410ff8149e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQS4KOD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBb5YaP2DFG6XuwrXXK9bfymierg88jNj8nxv7b6nuJ9AiBwLy%2FxomY5zGRwImpDE9Qaktbvgv4bfgicfk%2FJezqlfyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMUqGFycQnaP3OqtfYKtwDWkr5AoQdeQzCJkFzih6qHwguQL5sQGrJeGq37lh53UyXbdlVhJUhTbeH6nDsnljwYlmyIOnLZwPi1Ulg98dOl63fM85PhjGMpCZsCZ5PRkjxjOE%2F10Rp6TjnU6PYCqcW14OQPv%2BSWTyjPMBmWyLoSNaVWVMkIBS6YDdfOpePBDu1VB6hA%2FbROapWz4nnzODJ2mzwptq0B98rhmOxQHxQl1F3vTCr51jxgw8s%2FeaQlTWDYlZHfXWoAe5in4N5%2By%2BHuNpbtEEsVGWIZY%2BwosJNROmPWM17QiHQSh4Co7J%2FFN6hYykPOYdamIxvKgVOzxTRWYKWYW6p%2FqzfvJkKxSNVLRr1FwkWYzcEs7HTZzqE1Y9bXzxCvCIotDkDBHERyCoL45OvXnEUMK4RDk8cOQbPMWBwg%2BuqaAJvU8YRvcf1JM%2BOCyDv8wnn9yI%2BSrBmNtmmza0tOUqkshJjwBi%2FCMEWkyad4iX1V6bj7jX5ZPdoHcVfjgYbkKWS897ji%2B8wvWdzHopLZc63kOubX%2BJydxGFdQDqEn7NoUxkKGrpnv9QthLgSgPG1fn11dQZfc4za5FruJMaW0yDmFmzwm7NkQLQC6S1B8R5LYSG2UqD1Fd0EXkkX2wnPz7RxoJ2mfswpJfMxAY6pgHrrYwVN1bhF2g7NYdFfTOeZR%2FvkwHONnkWPHCo2F2l8fmH33rxkCuNe3BavGfRFagcCDN9pJV%2BxiLc2%2BFIFtrQViAcsYf4YJuAVPZegoEew04b8nXqYWLzw8dcA0tcZMnnNpKzn8efM1GTpaLulamKg2QaV96PISWZcbtEfgSuQqPMA6edsld2leLudZ6fYzavBYqQccRWCXjDpej5vP6myKrbeaws&X-Amz-Signature=c634e2caf0b768b0309b4614bce4a980842850f453155945449a1c65606b5602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
