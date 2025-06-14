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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIEUUAK4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAo3bDUXGk4NBxx8VNfp0i09YcQza4y1R8rFJOomGdQMAiAFHJ4%2FFNnQQZ4QAtiAXRiI2iHcOG6Mf8DqiBe09jBgUir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMGRKMmaDfHi2GBudvKtwDtuS0XqWaI0jFRG7iSMk9M2ORui7nZK%2BrWRUqZWpSuYERT2xCa0ukXmfBRN84Sir30S%2FIZU0g8leyga5OFIa7YdywsbYmDjGpP6oIbF9bjNuQpRxT3fw8AvlKrMT%2BqXciizDxdM4PewmVAs%2BbxnX3mSfVqynfA0LeRhuPjF2O8U01fRORVBLfRQ%2B%2FYcNJUC6Fjo1EuyS8BO6iB43BSr5DylfuQw8M82CJA0EC%2B0se1R%2FOBCCHFJ%2FwyhnsR6aV4XLeX4nH7XxFMp4hTkwKcCWUy9Awbl4g9u82t87XS4KOVJb6iUxsVFOZfF7ug6T7VHJM%2FergBzI%2BGAeP7A0vemxi4nN4KpdWYKXB2UYpqo6ch%2BZHmIzg46hnF545muIcrHTg%2F0J1J0YH9H6JOFhbVKfazvR%2FStgR9l3eTL3lmztqlkzXluHkaF3aWossTLRj1Pv9LYtq3298WChVB%2BQyYB%2FADXCb8AaZburwR0NZep5J%2BuQFU8FwJUqNJUkAw%2FMm6WgapKaVfsH68RJcrTnJ92b98ZcWlBR3SNq1eR32jnphFtpJsCennNSM0xTrVHkMBCGg0Jn407dCGztsUH%2BWO68slLhDG%2Buhd%2FjKP5tnPieJrD%2Bb%2FlosioRCmfflQ6Qw1eyzwgY6pgGPl1w4H7rZAWvjKvnA9miPu0cZKERM5SbQ9Xt1WRgF37g88hBb0qeyBP1gW4q18UsWu%2BAVYzh4Ad2o573v1e2KYXeA7%2BqT8s76bSAbaC2FzZsDw4xvyE%2B5ElUchCBZskQax7ejKcdL8zeCXJMNwtbrTcFtUUo2Ka015baMRGUgMn39ViMWP5GaGpTfTxdyGlOAErHXAdCI7Myas7A8xoeXQ0rWL4Jh&X-Amz-Signature=5f11e69ee9cec1893e4e4c1f49939d728de41a814393dbba8b783f1859e5d02d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIEUUAK4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAo3bDUXGk4NBxx8VNfp0i09YcQza4y1R8rFJOomGdQMAiAFHJ4%2FFNnQQZ4QAtiAXRiI2iHcOG6Mf8DqiBe09jBgUir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMGRKMmaDfHi2GBudvKtwDtuS0XqWaI0jFRG7iSMk9M2ORui7nZK%2BrWRUqZWpSuYERT2xCa0ukXmfBRN84Sir30S%2FIZU0g8leyga5OFIa7YdywsbYmDjGpP6oIbF9bjNuQpRxT3fw8AvlKrMT%2BqXciizDxdM4PewmVAs%2BbxnX3mSfVqynfA0LeRhuPjF2O8U01fRORVBLfRQ%2B%2FYcNJUC6Fjo1EuyS8BO6iB43BSr5DylfuQw8M82CJA0EC%2B0se1R%2FOBCCHFJ%2FwyhnsR6aV4XLeX4nH7XxFMp4hTkwKcCWUy9Awbl4g9u82t87XS4KOVJb6iUxsVFOZfF7ug6T7VHJM%2FergBzI%2BGAeP7A0vemxi4nN4KpdWYKXB2UYpqo6ch%2BZHmIzg46hnF545muIcrHTg%2F0J1J0YH9H6JOFhbVKfazvR%2FStgR9l3eTL3lmztqlkzXluHkaF3aWossTLRj1Pv9LYtq3298WChVB%2BQyYB%2FADXCb8AaZburwR0NZep5J%2BuQFU8FwJUqNJUkAw%2FMm6WgapKaVfsH68RJcrTnJ92b98ZcWlBR3SNq1eR32jnphFtpJsCennNSM0xTrVHkMBCGg0Jn407dCGztsUH%2BWO68slLhDG%2Buhd%2FjKP5tnPieJrD%2Bb%2FlosioRCmfflQ6Qw1eyzwgY6pgGPl1w4H7rZAWvjKvnA9miPu0cZKERM5SbQ9Xt1WRgF37g88hBb0qeyBP1gW4q18UsWu%2BAVYzh4Ad2o573v1e2KYXeA7%2BqT8s76bSAbaC2FzZsDw4xvyE%2B5ElUchCBZskQax7ejKcdL8zeCXJMNwtbrTcFtUUo2Ka015baMRGUgMn39ViMWP5GaGpTfTxdyGlOAErHXAdCI7Myas7A8xoeXQ0rWL4Jh&X-Amz-Signature=ce4f73226d275614ac62499dfc684750cdb25d927d6c9e0617af7f0bc802dd79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
