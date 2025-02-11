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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMV5DERD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxS%2B4FKJFTSl3q6E4ESlUk3B7aookNwTtHoko96B8fcAIhAKzYJ3nAFHV68cFfHUfHikrf24uT6zfGxH4PrfjGIt89KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH9PZUzDEtYCPw4o8q3ANPGDfrYSAgGkxmmDZYVOZZxh0ZUsYCBp%2FLpqbuRyGpisjqiGW1x1g7meUiYFZrd0jUDYZodKonjzd4rzJyeCdINQSV%2F6NTuyc1X682Ejd7O50%2FCxbn4jnHdNZqb1%2BECRGhhi0SDRONLMwocFGeHUXQ801x6t7xP67qb3qT9vkHxxfi%2BWlGolye%2BYTMsiediqKE7nA47CtxOfTMNc1ZlLJhMPocagTtHsiNfxCvKGsLta2MHQa8BYjUBzE5YHbafgqERbZsU2vS0vOva2L1sY0CT%2BPk%2F8I96QuseA4fv2MucCupr2osAzTR015no4c%2B%2Fl1r%2F9jcZSydpgFq6Bhk83wXFpwTneiTS1UsR5p%2FVcV39SUrwMdPz7QtWqtmzuQr1rWX2jaztPQB64ferdJiCuaHvbdtMSwVDi7et%2BqhRqWvScQOKOxv5WS%2B1tVYaNjcfTQk824f3pza6Cs2pIogV7xe265%2BPqgFAbzhrQ5L1ddi%2FGXcrbnr6W8aZD3kDQ9M0GGdVeIj%2F4uQWGF30dr6qI1he3%2FwDNLGwI0sMvmK4Mxt5VphjNpMVk%2BpHfqZakUZzxkra4OTjnvaQkXJQ8Nm5L92Vg0aA7di%2BJsav9pgQplg3dP4TYXj6VBEw5NvxzCgi629BjqkAevtrcQgW8YOb0eo4KXRKYHbD7P8b2QCGIRntqlcJIvJqPAQv2GD3nhMy3JPGNEAmaSt112AEwyXrAgRWfVhcyxAT2mNvQ6NNlNZpWZ6mcrAVplIIb6oN4bxKJ0m0VWAs2vrdkaMHn%2Blb%2BwGdHD3o6NS5xIlMMcuPsf7gjzhQPicIi4MJ27WxjE6QqzxaueZiAlTxn6DWnBK8hq8tpXz4O03%2FHl4&X-Amz-Signature=bc14ccd944e595842961d15303fa9388960adf20349a2fefbe5bd9a5688b4e0b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMV5DERD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxS%2B4FKJFTSl3q6E4ESlUk3B7aookNwTtHoko96B8fcAIhAKzYJ3nAFHV68cFfHUfHikrf24uT6zfGxH4PrfjGIt89KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH9PZUzDEtYCPw4o8q3ANPGDfrYSAgGkxmmDZYVOZZxh0ZUsYCBp%2FLpqbuRyGpisjqiGW1x1g7meUiYFZrd0jUDYZodKonjzd4rzJyeCdINQSV%2F6NTuyc1X682Ejd7O50%2FCxbn4jnHdNZqb1%2BECRGhhi0SDRONLMwocFGeHUXQ801x6t7xP67qb3qT9vkHxxfi%2BWlGolye%2BYTMsiediqKE7nA47CtxOfTMNc1ZlLJhMPocagTtHsiNfxCvKGsLta2MHQa8BYjUBzE5YHbafgqERbZsU2vS0vOva2L1sY0CT%2BPk%2F8I96QuseA4fv2MucCupr2osAzTR015no4c%2B%2Fl1r%2F9jcZSydpgFq6Bhk83wXFpwTneiTS1UsR5p%2FVcV39SUrwMdPz7QtWqtmzuQr1rWX2jaztPQB64ferdJiCuaHvbdtMSwVDi7et%2BqhRqWvScQOKOxv5WS%2B1tVYaNjcfTQk824f3pza6Cs2pIogV7xe265%2BPqgFAbzhrQ5L1ddi%2FGXcrbnr6W8aZD3kDQ9M0GGdVeIj%2F4uQWGF30dr6qI1he3%2FwDNLGwI0sMvmK4Mxt5VphjNpMVk%2BpHfqZakUZzxkra4OTjnvaQkXJQ8Nm5L92Vg0aA7di%2BJsav9pgQplg3dP4TYXj6VBEw5NvxzCgi629BjqkAevtrcQgW8YOb0eo4KXRKYHbD7P8b2QCGIRntqlcJIvJqPAQv2GD3nhMy3JPGNEAmaSt112AEwyXrAgRWfVhcyxAT2mNvQ6NNlNZpWZ6mcrAVplIIb6oN4bxKJ0m0VWAs2vrdkaMHn%2Blb%2BwGdHD3o6NS5xIlMMcuPsf7gjzhQPicIi4MJ27WxjE6QqzxaueZiAlTxn6DWnBK8hq8tpXz4O03%2FHl4&X-Amz-Signature=fbf1c1b39d39a87cfe001d12362111052cee6d997c64a2ee7223b08f81b3d198&X-Amz-SignedHeaders=host&x-id=GetObject)

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
