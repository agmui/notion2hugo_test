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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M4P3F4W%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fhq0U29N%2FDwqC1kSI6egW6OlQ06vJO00KQDdmwWIGEQIhAIEadfa2bDbSDm2BB5fK3zNhOOsOy%2FuPi9AgEBfiNKpoKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgTgyPoNyIGpfS7wcq3AOTn1gT3Lus40gjRXU0jqgnyMHbD66pET2bbbBgr8nxDYvbdxMERkSF0DCvEkJulrW%2FGZOAdR9nHvRtRptkv1Gs2DSFV616S8oZkWm8h6%2BgOXTbFFrvZBtlvxJsbQrDDFic7MAJGPB6Y9IXelrFusZiwHPZAxHJDOMSvc%2By%2BCISwzRutJ4HGxOIY36Ck%2F0SISw3Llb6jiM14OOP6fhj2jDksapa69tKwYncCOiK6qUHBRdJxNvQdhQSgYuBJS50yw%2B6xzKC%2B3%2B2IppJlXadGonSp2%2FX8L1a6r7n%2F%2Fs%2B1huVV33TqFSVZnSvtikCKqae4lDmmXrZ%2Bi350KdGFrtL05igxFPV8y%2FGo42yeoiRLJxks4Rl1TbUUFmSIurTJmpxH91rGev5%2B%2Bs2QckzXRKpRcc9ieV76NysYMM0VpqHqrb6raZMndu5SOk07QV646C%2BxYIEeqQgdG6I%2Bu%2F0OB3qd4P8QiKq5x%2BIamBvVt7qnWQoWXjXai%2FqkOfrf2p5mBBpx3TyOkGX3K8jTprxTXa7ltCnZdPXfEnRrrp%2B0BUUc%2Foi5Fm3T8MnC41cbvuDgiIuTKx78ndkLU2uMLxOwKvjdM9Nlqo%2Fvvf0%2FHdeThKZ0cJX7Vqn2mCPsMnxMiaN8zDx1Z7CBjqkAaRnAKt7coIuF%2B7CEegpjNxCtC84lZ4YcYbvtBGOnHeFgFXrdSQEmdULYpHFJwgrCZ6oBHFlnfDpBYFX2zI0YhYdmDkJwWJxY0k1H%2Fr0Htt61B9JnWpz7RZUSQ59gX82uIlu95l5xyTdLqrhDcs61sb8NgPw%2F%2FpqKUNr3fWfiWbZUpGuLmA%2FRzVRix6%2F8UYRS9oHS3TSgPPHZo%2BKRlr0J4D74Xai&X-Amz-Signature=b3155fcf424672639ad8bbfcdddb530e9617be91134673d82b1ce9755eaebac5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M4P3F4W%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fhq0U29N%2FDwqC1kSI6egW6OlQ06vJO00KQDdmwWIGEQIhAIEadfa2bDbSDm2BB5fK3zNhOOsOy%2FuPi9AgEBfiNKpoKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgTgyPoNyIGpfS7wcq3AOTn1gT3Lus40gjRXU0jqgnyMHbD66pET2bbbBgr8nxDYvbdxMERkSF0DCvEkJulrW%2FGZOAdR9nHvRtRptkv1Gs2DSFV616S8oZkWm8h6%2BgOXTbFFrvZBtlvxJsbQrDDFic7MAJGPB6Y9IXelrFusZiwHPZAxHJDOMSvc%2By%2BCISwzRutJ4HGxOIY36Ck%2F0SISw3Llb6jiM14OOP6fhj2jDksapa69tKwYncCOiK6qUHBRdJxNvQdhQSgYuBJS50yw%2B6xzKC%2B3%2B2IppJlXadGonSp2%2FX8L1a6r7n%2F%2Fs%2B1huVV33TqFSVZnSvtikCKqae4lDmmXrZ%2Bi350KdGFrtL05igxFPV8y%2FGo42yeoiRLJxks4Rl1TbUUFmSIurTJmpxH91rGev5%2B%2Bs2QckzXRKpRcc9ieV76NysYMM0VpqHqrb6raZMndu5SOk07QV646C%2BxYIEeqQgdG6I%2Bu%2F0OB3qd4P8QiKq5x%2BIamBvVt7qnWQoWXjXai%2FqkOfrf2p5mBBpx3TyOkGX3K8jTprxTXa7ltCnZdPXfEnRrrp%2B0BUUc%2Foi5Fm3T8MnC41cbvuDgiIuTKx78ndkLU2uMLxOwKvjdM9Nlqo%2Fvvf0%2FHdeThKZ0cJX7Vqn2mCPsMnxMiaN8zDx1Z7CBjqkAaRnAKt7coIuF%2B7CEegpjNxCtC84lZ4YcYbvtBGOnHeFgFXrdSQEmdULYpHFJwgrCZ6oBHFlnfDpBYFX2zI0YhYdmDkJwWJxY0k1H%2Fr0Htt61B9JnWpz7RZUSQ59gX82uIlu95l5xyTdLqrhDcs61sb8NgPw%2F%2FpqKUNr3fWfiWbZUpGuLmA%2FRzVRix6%2F8UYRS9oHS3TSgPPHZo%2BKRlr0J4D74Xai&X-Amz-Signature=db643fdb4b63ba714c4bb37b617d2f50f3795ea27bf7189f3fa4986e98fdf4b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
