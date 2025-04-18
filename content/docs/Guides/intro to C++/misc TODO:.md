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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJQ3URBZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHF00yO8p3FKhKkJMd8ji%2FmvL5Un%2BTQkyFXB2s3H0%2BmAIhAOXN8Z4dzgtUe3gDFdZ7fE4Qh7VcBwKoT%2BnJH9Fm936dKv8DCHkQABoMNjM3NDIzMTgzODA1IgwdKyqh5jWG3846kIAq3AN911SI2N7mDdwtWOj6de5gWaBGvBH08vqRpK3wpmAQ%2FpmNuZfgwBWakXUT1TsbfCJVzZlfhcJ0aXCUqoyIYsXBSN3ZvMSv8CHAWGAjdFN7TT%2FbgkWyKqDpuO7YkNgdtyDtM8AXxjoqzzZevdOKjU%2BWMEU2iqyph%2B5HdL92YfJ0D8rmJKU9j7RN7fGmszYYykD%2FvDEN%2Bda3Z7eEv6BfHZ%2F%2BAI1nY4tckB3Duo26vg%2BOd1KCv81hgK6q5vTdMQ6RHBuy5Qwr3HVKYP9UWQsDtjmXonu%2FOyOXei%2FKFEN7B%2F5ETSjD36LjHjhbxZ%2BrDKCfVSCo8EwhXN7YAA8vt5%2Fh2m5OwCp6VDj%2BairKSNPwufZ4qVNP98F6uMsykk%2FGdNd2juhGIheiZma1EiGVo3ILyFYrroricfH6cNpiFqHWqCw78OWc4LDVqlxtFUL3i1A%2BGAw6q%2Fv5wPRoyE1zNx502wGppqLYv7edM2Olyw6GH29qAW3WwUwJN3Ofx2YYEHeru2VHTN9LFRIaGJgaABwTqVyb2qr6kBKpyhjWctoaP%2FE11GFJvbtdTnyXaGE6eNZft0S75jpOGhsnQvkxUH3uow%2FdJEA2zS1YmGFTGLRCFkhYOFW9l4jB2pN7tw%2BLgDCb%2BYnABjqkARlGAr7HWmu2QKSbBG%2BaQiTBKk%2B%2FijGSY5K1%2FwTFKffGZEMQYf84GrZQm5toDbzYWV%2BEBwNXB%2BMhnOgDkIkq%2FRdhLnoFRtV00EBD47Kw1YoKL08JBnxzxTp10fTsYBDZJwVyaxitVP9mf42H1yIdPG24zt%2BIFNMGT96g7UrWplU7KNQl76Co2fwtp0mvLlEGkv5meLr7RNnZD%2BCcvPYuHdVw7AJi&X-Amz-Signature=8d54d06e5981f90f641a765e219846d1136f49d862501a0ab884caf71c111c59&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJQ3URBZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHF00yO8p3FKhKkJMd8ji%2FmvL5Un%2BTQkyFXB2s3H0%2BmAIhAOXN8Z4dzgtUe3gDFdZ7fE4Qh7VcBwKoT%2BnJH9Fm936dKv8DCHkQABoMNjM3NDIzMTgzODA1IgwdKyqh5jWG3846kIAq3AN911SI2N7mDdwtWOj6de5gWaBGvBH08vqRpK3wpmAQ%2FpmNuZfgwBWakXUT1TsbfCJVzZlfhcJ0aXCUqoyIYsXBSN3ZvMSv8CHAWGAjdFN7TT%2FbgkWyKqDpuO7YkNgdtyDtM8AXxjoqzzZevdOKjU%2BWMEU2iqyph%2B5HdL92YfJ0D8rmJKU9j7RN7fGmszYYykD%2FvDEN%2Bda3Z7eEv6BfHZ%2F%2BAI1nY4tckB3Duo26vg%2BOd1KCv81hgK6q5vTdMQ6RHBuy5Qwr3HVKYP9UWQsDtjmXonu%2FOyOXei%2FKFEN7B%2F5ETSjD36LjHjhbxZ%2BrDKCfVSCo8EwhXN7YAA8vt5%2Fh2m5OwCp6VDj%2BairKSNPwufZ4qVNP98F6uMsykk%2FGdNd2juhGIheiZma1EiGVo3ILyFYrroricfH6cNpiFqHWqCw78OWc4LDVqlxtFUL3i1A%2BGAw6q%2Fv5wPRoyE1zNx502wGppqLYv7edM2Olyw6GH29qAW3WwUwJN3Ofx2YYEHeru2VHTN9LFRIaGJgaABwTqVyb2qr6kBKpyhjWctoaP%2FE11GFJvbtdTnyXaGE6eNZft0S75jpOGhsnQvkxUH3uow%2FdJEA2zS1YmGFTGLRCFkhYOFW9l4jB2pN7tw%2BLgDCb%2BYnABjqkARlGAr7HWmu2QKSbBG%2BaQiTBKk%2B%2FijGSY5K1%2FwTFKffGZEMQYf84GrZQm5toDbzYWV%2BEBwNXB%2BMhnOgDkIkq%2FRdhLnoFRtV00EBD47Kw1YoKL08JBnxzxTp10fTsYBDZJwVyaxitVP9mf42H1yIdPG24zt%2BIFNMGT96g7UrWplU7KNQl76Co2fwtp0mvLlEGkv5meLr7RNnZD%2BCcvPYuHdVw7AJi&X-Amz-Signature=cd1f88cf476ed550cd101a6b979be8b4adbb7adec5b3144dc9d834a3d7997b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
