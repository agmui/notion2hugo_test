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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OW5XBRP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7OrgB0yiJuY7bsgyBwwGvzatgasoLzOOwSwZKbnFGUAIhAO%2Fr8iKYNprxW%2BYGwh5cYWupRbqExcD9c%2FT20qH6bw6xKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJqlWarpKfkgzs8Y8q3APMw1EyA%2FKLeiut2kaF8Gh8xE%2FZHxCpSZ0G0hMltfIFn1yIrUTnAa5wVM7gGMvQCWR6DBdIBr9YeYMrqe%2Be62IRIuWoI4yB4Oj6tAXJfot77LzX9Nc6%2FVkIetO1calVWH1b5UxGtkZbBxSpcsXac%2Bq6hXZcy1FRfQQWZ0SlKjYebkr768dkLBeXs3hVI6b5ANPwBYzbBchiOMHpWdktby2e4tEn8F01frhLipPIPhHeFiWmcRBXLqI6oEa2U%2BI9JIUjiH1u4P0JNj%2F2jRfFqEdpOwRaovR9lTA84%2BL4HRdx5uHHEFga4vtsiOrmMHYEj%2BRR2p00dJsaAjlfbwgLTDg9NXnfZG6rY0YtZ%2Fu3mRErHWvKsV7uxtDY5gMbz9uu%2F%2FbZHjs4vCCytBclLCyVmAundK6MKfVtkuMONFTMorYt31WoU3kzFdRICgVnmomTb8LXUyJOfca27%2BpquvH26%2F06YWZCjgMUDJ%2BBSrrfTp4jJfCUAb9bN0cVBdOyb4p3LPhBuPeVeRnqGR1TN0wPzMj%2BHZzwMdg%2Bptx4JZ05PbyjwlvFlHMdoaoHb1TRqkmoSSonE3WZuLGQdRgIwfSkszkj%2BLoRZtNMO%2FuUVN%2BW2S5faKxMUGY6SLhgg3%2FxgjDA9LfDBjqkAQxnzznZHMwcyw8%2B2lWfsiZZ9x6moYLopJhAjaIJy2wZkb9nfw4f0RClQID7htkiD8EjdMA1e1wK%2Fja3xIIdiXO4mam263Sy7vbS99wx3Ca1Q3zIWMfZ42xOgTc8lrlJhI85o4FNqbehniiZH0b9bHnnm4LkN9Lhbgm%2BaIQmrC5qf3mw0o%2BqCx7pGZ%2BrB2dO9ck5dx%2FazPoYMfBSNaTYOeckgW77&X-Amz-Signature=d14e447a1a9c144064fc5ae98f62378709ac25e56e3fe0e377c6e7a2e19c6293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OW5XBRP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7OrgB0yiJuY7bsgyBwwGvzatgasoLzOOwSwZKbnFGUAIhAO%2Fr8iKYNprxW%2BYGwh5cYWupRbqExcD9c%2FT20qH6bw6xKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJqlWarpKfkgzs8Y8q3APMw1EyA%2FKLeiut2kaF8Gh8xE%2FZHxCpSZ0G0hMltfIFn1yIrUTnAa5wVM7gGMvQCWR6DBdIBr9YeYMrqe%2Be62IRIuWoI4yB4Oj6tAXJfot77LzX9Nc6%2FVkIetO1calVWH1b5UxGtkZbBxSpcsXac%2Bq6hXZcy1FRfQQWZ0SlKjYebkr768dkLBeXs3hVI6b5ANPwBYzbBchiOMHpWdktby2e4tEn8F01frhLipPIPhHeFiWmcRBXLqI6oEa2U%2BI9JIUjiH1u4P0JNj%2F2jRfFqEdpOwRaovR9lTA84%2BL4HRdx5uHHEFga4vtsiOrmMHYEj%2BRR2p00dJsaAjlfbwgLTDg9NXnfZG6rY0YtZ%2Fu3mRErHWvKsV7uxtDY5gMbz9uu%2F%2FbZHjs4vCCytBclLCyVmAundK6MKfVtkuMONFTMorYt31WoU3kzFdRICgVnmomTb8LXUyJOfca27%2BpquvH26%2F06YWZCjgMUDJ%2BBSrrfTp4jJfCUAb9bN0cVBdOyb4p3LPhBuPeVeRnqGR1TN0wPzMj%2BHZzwMdg%2Bptx4JZ05PbyjwlvFlHMdoaoHb1TRqkmoSSonE3WZuLGQdRgIwfSkszkj%2BLoRZtNMO%2FuUVN%2BW2S5faKxMUGY6SLhgg3%2FxgjDA9LfDBjqkAQxnzznZHMwcyw8%2B2lWfsiZZ9x6moYLopJhAjaIJy2wZkb9nfw4f0RClQID7htkiD8EjdMA1e1wK%2Fja3xIIdiXO4mam263Sy7vbS99wx3Ca1Q3zIWMfZ42xOgTc8lrlJhI85o4FNqbehniiZH0b9bHnnm4LkN9Lhbgm%2BaIQmrC5qf3mw0o%2BqCx7pGZ%2BrB2dO9ck5dx%2FazPoYMfBSNaTYOeckgW77&X-Amz-Signature=f20dd90fec6effe46422215e30f3a2c79449376544d034b7bd3c55e7cd6c16f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
