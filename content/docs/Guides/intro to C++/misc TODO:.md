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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6QN2G27%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDQVWVZTIKe6fUU3%2FQUaAGasafrtmVqYE7lQ1aofWPVcgIhAJVr%2F9D4RUUp%2BKmOhUXlIHMmOmNvKOReSpReTOFZ6iEpKv8DCHcQABoMNjM3NDIzMTgzODA1Igzx4Qa4zdvW%2Bs14wGoq3ANU%2BF7fJowoOSQI3loQWIJz6VCi7%2FrixsZVlPBgte3I51fKMFl8mmDkKrRu8jBk6RKyuvL8DYWsIvVj%2FVEhwcjaeHq52WHP3jDgz9bFkL0vwE8cvPXZEdJqB10Dz%2B01%2F%2F8XA9FF6SjsILmjMdZhQ8cLVAc0TWN7z%2F5kv4IsecqFc6jMF%2FMybPKaiILMMOqbKkJwf4GmzAU8eXkaeLWIcipEbTV%2BOXkoVVZfoPxkNpBBfKpD%2FPrcTUH%2FIrGnmtNJb6UybICo%2BPXvyvqb1vCccURiwgXL8DVszQ9gIBL5ljcZgBxW%2B59C9lf9q%2Bwz%2FcqaRkQHl2sqxoJDDIwckVQzYqdxTzLd%2FutGkp%2Bz8P5aqrwpctFD%2BFZAGzI9c7zB7GZRTIIzus0cb9yKfWhZTFYEbFuj76wGAFiT1TYKslGCAf0KGslD3OdnnUGUgQQiF%2BDMWMU5XlxP3SO%2Bb43%2FXocG9WGMX33cjufwcuGL4mUsotuGAFPLEgUrUI%2Fg14hb3uq6lv6xXKQtUdeI5uCKBfzhJJAtjYgoREpGM9WtUZSmlmZqQzgh2HukzOVyuKdP0JMzR14FtZSzb4RlwSJ2qID6jQyaYrx722V%2B9Z8byvJtvmi8V%2FGL7C53nYVu9dH68DCr7YG%2BBjqkAURxoGGVRA7a3feCnO5dQckKSwf8XN%2BzmYbAdzSSV9HkQsc28qPOMS1SSBjk0BQRbFaie4tbFNouoRLGdEx2I6IpdewJErwhwKstifOyDi4G8QqYCGk0FnJbwJF1%2FBp2xrz%2F%2FFbBRBIRoV9Z0WtDL9NDA%2FBJhXX%2FSU2xV0ZP2A9e4Ua0Pmmob8v1kVQtJ2rVS8AlnQB%2FaHDTVnd7eINl54vEHU48&X-Amz-Signature=94aa653a73281aa71e639f58de53dee81ca6e7aeaa8d7a73c52284c17ec6cee9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6QN2G27%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDQVWVZTIKe6fUU3%2FQUaAGasafrtmVqYE7lQ1aofWPVcgIhAJVr%2F9D4RUUp%2BKmOhUXlIHMmOmNvKOReSpReTOFZ6iEpKv8DCHcQABoMNjM3NDIzMTgzODA1Igzx4Qa4zdvW%2Bs14wGoq3ANU%2BF7fJowoOSQI3loQWIJz6VCi7%2FrixsZVlPBgte3I51fKMFl8mmDkKrRu8jBk6RKyuvL8DYWsIvVj%2FVEhwcjaeHq52WHP3jDgz9bFkL0vwE8cvPXZEdJqB10Dz%2B01%2F%2F8XA9FF6SjsILmjMdZhQ8cLVAc0TWN7z%2F5kv4IsecqFc6jMF%2FMybPKaiILMMOqbKkJwf4GmzAU8eXkaeLWIcipEbTV%2BOXkoVVZfoPxkNpBBfKpD%2FPrcTUH%2FIrGnmtNJb6UybICo%2BPXvyvqb1vCccURiwgXL8DVszQ9gIBL5ljcZgBxW%2B59C9lf9q%2Bwz%2FcqaRkQHl2sqxoJDDIwckVQzYqdxTzLd%2FutGkp%2Bz8P5aqrwpctFD%2BFZAGzI9c7zB7GZRTIIzus0cb9yKfWhZTFYEbFuj76wGAFiT1TYKslGCAf0KGslD3OdnnUGUgQQiF%2BDMWMU5XlxP3SO%2Bb43%2FXocG9WGMX33cjufwcuGL4mUsotuGAFPLEgUrUI%2Fg14hb3uq6lv6xXKQtUdeI5uCKBfzhJJAtjYgoREpGM9WtUZSmlmZqQzgh2HukzOVyuKdP0JMzR14FtZSzb4RlwSJ2qID6jQyaYrx722V%2B9Z8byvJtvmi8V%2FGL7C53nYVu9dH68DCr7YG%2BBjqkAURxoGGVRA7a3feCnO5dQckKSwf8XN%2BzmYbAdzSSV9HkQsc28qPOMS1SSBjk0BQRbFaie4tbFNouoRLGdEx2I6IpdewJErwhwKstifOyDi4G8QqYCGk0FnJbwJF1%2FBp2xrz%2F%2FFbBRBIRoV9Z0WtDL9NDA%2FBJhXX%2FSU2xV0ZP2A9e4Ua0Pmmob8v1kVQtJ2rVS8AlnQB%2FaHDTVnd7eINl54vEHU48&X-Amz-Signature=cd1d5b2dbb8861899ec820700357bdc78bd9ef69773d0ad0ae175f2da2ddeb23&X-Amz-SignedHeaders=host&x-id=GetObject)

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
