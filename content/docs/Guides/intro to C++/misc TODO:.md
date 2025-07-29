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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSZTRKEV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICpCOoBGkB5trrbi2otLwZ60%2BH3u8xknB2myhTHalTXlAiEA2y%2F4cLGNIBusGuDsiXTRKWTVpn%2BrmNMk%2FmUsq8jvpVYqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMz4FTa53OfnrZviQSrcA9S5oWSK8U5omEe7q44Aoe1iL%2BQstkF3LeUYiugSlrWesbQcMrbQg1aJbt5AAdQayYc9Ura8oUNsXNgP%2B%2FeQWbV8LNivRYdBXF4DKdglSRHaW1LkSyQxuxOgE5u8lRzDusFI1K7XS83hH1w1P9RdQp4x%2Fpt%2BqeME%2BWU62fHoc3MvN2QOl1DOnDmHAvTo0vEru%2Bcl0rvAaRJOG8zdhm3JZYVplSzHt6n1O6QfC1jQMVncRRF23qc%2F4yWggYV6FIeTH%2BaHu1HqZ2BrEj0w2pLQ%2F5xovMSstvBUCHmcxXbj%2BwTir4Bz6kLfm4G6wMyNXG2MGugktt2rborxmnTuf89HW4F7PIhH%2FlFn9U7UJRYg40yMoeP1TbUEhJOD5GiDqA%2BIXqto4PzmMFYNcj3wcoTj%2BSIBcUKeFKXbNei24UX8MqKqREsi0Hb80fCNRDVIKvoVsQQKW3cm1Eu44GhPyiU43SOmQeQCA8AnnQgosSv%2BVaZm4sAE4xKhxOD2UcH1BgKUYa1Rdf7mgzV0ZKNBFfW8dfMHPznSQyoz3uuD851CJlPQxKNpRqwvvjQ6HIa07qFYQnJzGWvWX%2F22etY7ujWBR7jXYv2Qr5%2BmgKHk%2F2RekXggEymZ30B6bfAV7CGIMLyxosQGOqUBr%2BrJbAPXYFl%2FrGammESSRyOxnQcb9zIH6xCmQbuJp7zYZNybhTu%2BGJMpc6tuQOfse85UmE2twjqF3Xnp07I95cWdBhOj1YWXFwXJVhHg0nVe%2FFN74rHUzHNGnAmfWQ2VrCoIcegb6Yiw5MEnURyepGnH%2BYkQzQWbdxSBQlre023%2BPs9euMvYWRw7ukCnUamy2sSEKFvTervEGsQqIpOSG8ZPxHHF&X-Amz-Signature=2ec0246b3f71679c810096a050324dfda0fbcef7e3528d108df60e0b2f17ceda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSZTRKEV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICpCOoBGkB5trrbi2otLwZ60%2BH3u8xknB2myhTHalTXlAiEA2y%2F4cLGNIBusGuDsiXTRKWTVpn%2BrmNMk%2FmUsq8jvpVYqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMz4FTa53OfnrZviQSrcA9S5oWSK8U5omEe7q44Aoe1iL%2BQstkF3LeUYiugSlrWesbQcMrbQg1aJbt5AAdQayYc9Ura8oUNsXNgP%2B%2FeQWbV8LNivRYdBXF4DKdglSRHaW1LkSyQxuxOgE5u8lRzDusFI1K7XS83hH1w1P9RdQp4x%2Fpt%2BqeME%2BWU62fHoc3MvN2QOl1DOnDmHAvTo0vEru%2Bcl0rvAaRJOG8zdhm3JZYVplSzHt6n1O6QfC1jQMVncRRF23qc%2F4yWggYV6FIeTH%2BaHu1HqZ2BrEj0w2pLQ%2F5xovMSstvBUCHmcxXbj%2BwTir4Bz6kLfm4G6wMyNXG2MGugktt2rborxmnTuf89HW4F7PIhH%2FlFn9U7UJRYg40yMoeP1TbUEhJOD5GiDqA%2BIXqto4PzmMFYNcj3wcoTj%2BSIBcUKeFKXbNei24UX8MqKqREsi0Hb80fCNRDVIKvoVsQQKW3cm1Eu44GhPyiU43SOmQeQCA8AnnQgosSv%2BVaZm4sAE4xKhxOD2UcH1BgKUYa1Rdf7mgzV0ZKNBFfW8dfMHPznSQyoz3uuD851CJlPQxKNpRqwvvjQ6HIa07qFYQnJzGWvWX%2F22etY7ujWBR7jXYv2Qr5%2BmgKHk%2F2RekXggEymZ30B6bfAV7CGIMLyxosQGOqUBr%2BrJbAPXYFl%2FrGammESSRyOxnQcb9zIH6xCmQbuJp7zYZNybhTu%2BGJMpc6tuQOfse85UmE2twjqF3Xnp07I95cWdBhOj1YWXFwXJVhHg0nVe%2FFN74rHUzHNGnAmfWQ2VrCoIcegb6Yiw5MEnURyepGnH%2BYkQzQWbdxSBQlre023%2BPs9euMvYWRw7ukCnUamy2sSEKFvTervEGsQqIpOSG8ZPxHHF&X-Amz-Signature=d6ae34c227fe3bdce59f5d2c255d6ea0b250d806a958d892ea2f8a0f32d6dbfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
