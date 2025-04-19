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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMDEEQI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIC02U8TfinVl4m2ngt2shsGlK%2BMu9UMLYn7rCT1qYd14AiBgvfncBotbV81YgNNyFpJXm0QTzsskDR%2FB5gthPoEB9SqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbtKCTNd19Jx1RmP7KtwDgFXoh2VKVvBcBDXdUEvxESL9weXe%2BR3Tl99B5U2hepo%2FnFddMuiodUIhSvGzAKZGUEZH8%2BoE4pN0GcrtejQMF3w3JPzS9IeXv4RxUk2puNb1x12NTzFdQz0TGx80%2BHNIoEkW454qfwZVn37zRYzDIFLehHX2bThVNf2M8sRCD6%2BclyC%2BSb0F5OpkqXhbbHVvMA6yWYmyjjYiH1yQERsyS3mXnj5ytoYtozo33RAgEfwxR5nUn4bxocdU586efuP7JldgbTtx0uQQ1CMlEk9RtU1phYVwmp6fmK7nolJagAal93MSHKpr%2BCnJxexLjPZZOvZAVggIjSplWVsLuEQ%2FUChAWEiVzoMWfCYZS9vd%2B4H4Kqk6xoQC4Sukbcv6v8MN4PAmJN5AS6RDDm%2BgeNFFBI2ia5rKMdire2jLmZY4Lpr28UV0NiLHT7m%2Fi5MiZoJRRpJakfuNAiEKT07LeD74to7GYXPLmOEG5aGLVz0UGnaA%2Fa5KT7JNeN9S9HDwUU2PPxqU9buAAl98ryrLt6nr7dQWSNZjaRVyeJ1NZ5ofokVxozj7S4yKKw%2BZSo%2Bp8hUfPGbmtewtH%2ByxWPvZOlWQJSpDAYXM5p1ctVN4n6PdDKsBrxD1HdbLYE7PyxMwiKCPwAY6pgGO54WUY%2F3QAkc1J9mZFhxW5uq%2B6smGPPdAgQQmAxIX6dzEyT5RIX3xXTvtfkheJmZm9qld0BFG8XCMEUa%2Fw5v3UgERSIWEQvtaL%2BfRerCQJZ2uDJ8SBYWRobI%2FfSe5mf3OdR9tZ6df2aU%2F4vBLQ1Md%2FhdhfXGy5Xs0A6qh1PF9wOqb1ZXQdLijfmyoxrLrRHduUD7ZvodnUNhvBpM9%2FMlWEITDqIz%2F&X-Amz-Signature=bac1154b8ebc1edffcb93fc3acb53d333b00d8cdf0d4dc449b658f331cbea133&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMDEEQI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIC02U8TfinVl4m2ngt2shsGlK%2BMu9UMLYn7rCT1qYd14AiBgvfncBotbV81YgNNyFpJXm0QTzsskDR%2FB5gthPoEB9SqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbtKCTNd19Jx1RmP7KtwDgFXoh2VKVvBcBDXdUEvxESL9weXe%2BR3Tl99B5U2hepo%2FnFddMuiodUIhSvGzAKZGUEZH8%2BoE4pN0GcrtejQMF3w3JPzS9IeXv4RxUk2puNb1x12NTzFdQz0TGx80%2BHNIoEkW454qfwZVn37zRYzDIFLehHX2bThVNf2M8sRCD6%2BclyC%2BSb0F5OpkqXhbbHVvMA6yWYmyjjYiH1yQERsyS3mXnj5ytoYtozo33RAgEfwxR5nUn4bxocdU586efuP7JldgbTtx0uQQ1CMlEk9RtU1phYVwmp6fmK7nolJagAal93MSHKpr%2BCnJxexLjPZZOvZAVggIjSplWVsLuEQ%2FUChAWEiVzoMWfCYZS9vd%2B4H4Kqk6xoQC4Sukbcv6v8MN4PAmJN5AS6RDDm%2BgeNFFBI2ia5rKMdire2jLmZY4Lpr28UV0NiLHT7m%2Fi5MiZoJRRpJakfuNAiEKT07LeD74to7GYXPLmOEG5aGLVz0UGnaA%2Fa5KT7JNeN9S9HDwUU2PPxqU9buAAl98ryrLt6nr7dQWSNZjaRVyeJ1NZ5ofokVxozj7S4yKKw%2BZSo%2Bp8hUfPGbmtewtH%2ByxWPvZOlWQJSpDAYXM5p1ctVN4n6PdDKsBrxD1HdbLYE7PyxMwiKCPwAY6pgGO54WUY%2F3QAkc1J9mZFhxW5uq%2B6smGPPdAgQQmAxIX6dzEyT5RIX3xXTvtfkheJmZm9qld0BFG8XCMEUa%2Fw5v3UgERSIWEQvtaL%2BfRerCQJZ2uDJ8SBYWRobI%2FfSe5mf3OdR9tZ6df2aU%2F4vBLQ1Md%2FhdhfXGy5Xs0A6qh1PF9wOqb1ZXQdLijfmyoxrLrRHduUD7ZvodnUNhvBpM9%2FMlWEITDqIz%2F&X-Amz-Signature=0c59a19db78fd2ae24e08d89f8bc4ba4d4deaae802cb70b69126ebcea90e96cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
