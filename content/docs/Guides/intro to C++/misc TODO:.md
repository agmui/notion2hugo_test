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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZB64WCD%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIBdzqCRG%2F5IeQ2kQEbqIMCqcr%2B9Zw7CJWODuSMF%2BqS4jAiA3sHNd%2F2o0cxEJg3DxJ9cBAky6%2BjKMGCK31UvCUlnLAyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM%2BFU4%2FcBdxSKvoAJ6KtwDmraDbeMYUVa2bwsPVWhGQwNNjqpbH9wd6maLYHIHtQvJJP0H%2BJX34X1my2RTXJjLFkOAfCdqIDwE8cK0YorrHr5A19zlue295tSW870fNH%2Fs%2BHcS%2Fm9ONBOBUqyelw3UStvhzGSa95J74ESTRf7DuSK2rI%2BIUtklKrjw3nytMQkHisthJccoiPSAKkBJLJqY5nxYALIchxN%2FQuJINaocdb2B%2Fmw%2BV5EoHb9lOmRLCuOjTOouD4s3L4Y3thAmz5dBa4o2fSzzPk0k4uqNjSGBPzuj24NB0H1W2ECuluK4oge%2F9hnPULaItziI3XoSAyjzU7AAzL0c8jClmdP7PD4A%2FPrldA%2BIZ7G%2BUi%2BkKZrs9b0bgx%2FhRMcb8Ve7xCGAkL%2F8PT%2FYw6lF1%2B3rVySrhDgpYuM87wRqt5wqGW7z4%2B4F4zpotYi%2FL2C9hiUDd259APsjq4LrdTa5POrPxmJDF%2BCObrty3DY%2FwUEFFdh67KA0IJKAK2I5ZD26%2F5KAABoAkAypTqciq%2FQpgWxg02lGRbVMDzIQVYAb34A6yyYLIW8749euxCjS7jRz9rNbDx24gMMiPRIV%2FulwXMNMQYEdjQgo1tcVXgpAlCbI6mhrDYC6MUoIMW%2FR2KQJvVkvhUcw97S5wgY6pgGfCRxoTRvr72z6jyvPkLaYxPMv22wLcOdOAnV4i%2BU%2FzNAlBjHK2lHW4xQWZIXQrcHmMQV8Op8eRUn%2BlczQ67KYlQijtUoWXS%2FFNdZBnWIO3a1ot6Hsm0xiAN6Ac5cvz03xvwj925htACo3y8SFki%2FnOWy1x6vOKG43MQPMIVKPmi03YSfWsLS1fzl647djfL7v01dXLTa7mmKCoRWhxukQ6kJaEg9u&X-Amz-Signature=db5fe60d04c871d4418d250bbda27e0ba17f328d266a4df9a969964f0423be98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZB64WCD%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIBdzqCRG%2F5IeQ2kQEbqIMCqcr%2B9Zw7CJWODuSMF%2BqS4jAiA3sHNd%2F2o0cxEJg3DxJ9cBAky6%2BjKMGCK31UvCUlnLAyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM%2BFU4%2FcBdxSKvoAJ6KtwDmraDbeMYUVa2bwsPVWhGQwNNjqpbH9wd6maLYHIHtQvJJP0H%2BJX34X1my2RTXJjLFkOAfCdqIDwE8cK0YorrHr5A19zlue295tSW870fNH%2Fs%2BHcS%2Fm9ONBOBUqyelw3UStvhzGSa95J74ESTRf7DuSK2rI%2BIUtklKrjw3nytMQkHisthJccoiPSAKkBJLJqY5nxYALIchxN%2FQuJINaocdb2B%2Fmw%2BV5EoHb9lOmRLCuOjTOouD4s3L4Y3thAmz5dBa4o2fSzzPk0k4uqNjSGBPzuj24NB0H1W2ECuluK4oge%2F9hnPULaItziI3XoSAyjzU7AAzL0c8jClmdP7PD4A%2FPrldA%2BIZ7G%2BUi%2BkKZrs9b0bgx%2FhRMcb8Ve7xCGAkL%2F8PT%2FYw6lF1%2B3rVySrhDgpYuM87wRqt5wqGW7z4%2B4F4zpotYi%2FL2C9hiUDd259APsjq4LrdTa5POrPxmJDF%2BCObrty3DY%2FwUEFFdh67KA0IJKAK2I5ZD26%2F5KAABoAkAypTqciq%2FQpgWxg02lGRbVMDzIQVYAb34A6yyYLIW8749euxCjS7jRz9rNbDx24gMMiPRIV%2FulwXMNMQYEdjQgo1tcVXgpAlCbI6mhrDYC6MUoIMW%2FR2KQJvVkvhUcw97S5wgY6pgGfCRxoTRvr72z6jyvPkLaYxPMv22wLcOdOAnV4i%2BU%2FzNAlBjHK2lHW4xQWZIXQrcHmMQV8Op8eRUn%2BlczQ67KYlQijtUoWXS%2FFNdZBnWIO3a1ot6Hsm0xiAN6Ac5cvz03xvwj925htACo3y8SFki%2FnOWy1x6vOKG43MQPMIVKPmi03YSfWsLS1fzl647djfL7v01dXLTa7mmKCoRWhxukQ6kJaEg9u&X-Amz-Signature=a11e33dd6b09fcba19ade1b082b4f47f8a3dbd3d90be7673d87349568214c72a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
