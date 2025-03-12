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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WVCQ3C%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCUvWgXx%2BkgkOLL1assWzzJEiASd%2Fg94dbE39woKJJp9gIhAJpTRdvWzFScmjl5%2Fo6vInHSZ14rqj%2FYa%2BwmK1aiO8f4KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdDXIO1DiGqUPu41kq3ANt4QJcUEh5wel8WU7EFfn3%2F0AE1BnXsyuJGLj6F2XN17JsgeVyhpn4EmOXyECBHpUp0%2FGHNh0ho3tPyIH57624JBdbo0tnAZPx12z%2BpTSDF8Xd2%2FfG%2BW306AAtNxKvOzxHGwgddPAriZEo1kiE2pCYlYVhkAHtlysGPv13kZFjLiTR62EM%2BD2QFhDjXoSmKFb6jz4mjr9hzBTvWq6IhUAWwmyIFLaWhkH%2BpNlI%2Bj87KL9%2B0l9HA72SDgG44eaxRGT0zBgPumjuo8VS2tYK3m1Bhofsj4FcrPi6s7jIymRGKJpX5P8aN9ifh9SNrbYCFENlM7OAkyjQk3hx%2F0N0p0X%2F5iSc8t5C1yblprARGARQSeBgNajSeiE71oT0YoZ4BpwMa6t3qL09HPIIB5mk3AbRlgy0ND9A%2BOXZhfq41WgggDYfVImphB5Ho5UgsPpjtJdtogV1ua4lMHtu3hnz62rseQVYnlKLXT33cJ8S07O52Co1mi57NgDWGjfc7DRDATYdV9fLa8aOqI5flyptF8cjAeQO3A65Vl1CAgXfrXlNKqUFWVewqtrzsfIsVPzsTGeUN8cv2fEamDZiS%2FgL6SWcuD3%2BcDgOJ9KYzQXDt1kVqzAsIOEWyTA9j5%2FZfjDd2sS%2BBjqkASrgahCSXhxkyRtVctHkWNzNGElLctzmZAiH4fANjlZ5lw5LOdC%2B2L23MKIQf66WnhJu9IDQw8C2t3BfRzFXjGo1wzjoWDWJ9ipOsw1eznaK5z2G4wvX6HatRNngUmahjz2UgzTi70wzoryeL%2BgMUdpdP%2F43lZ8w6wmKw%2FRmB7YRrP8r26wyH7r5FjvUQo3khUcv3pX2sVEycjtw00QeJWl5WI2H&X-Amz-Signature=8daa5ac04fd58d66a8906bc7d328f2a03aa04102504729625d50aa2407be852b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WVCQ3C%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCUvWgXx%2BkgkOLL1assWzzJEiASd%2Fg94dbE39woKJJp9gIhAJpTRdvWzFScmjl5%2Fo6vInHSZ14rqj%2FYa%2BwmK1aiO8f4KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdDXIO1DiGqUPu41kq3ANt4QJcUEh5wel8WU7EFfn3%2F0AE1BnXsyuJGLj6F2XN17JsgeVyhpn4EmOXyECBHpUp0%2FGHNh0ho3tPyIH57624JBdbo0tnAZPx12z%2BpTSDF8Xd2%2FfG%2BW306AAtNxKvOzxHGwgddPAriZEo1kiE2pCYlYVhkAHtlysGPv13kZFjLiTR62EM%2BD2QFhDjXoSmKFb6jz4mjr9hzBTvWq6IhUAWwmyIFLaWhkH%2BpNlI%2Bj87KL9%2B0l9HA72SDgG44eaxRGT0zBgPumjuo8VS2tYK3m1Bhofsj4FcrPi6s7jIymRGKJpX5P8aN9ifh9SNrbYCFENlM7OAkyjQk3hx%2F0N0p0X%2F5iSc8t5C1yblprARGARQSeBgNajSeiE71oT0YoZ4BpwMa6t3qL09HPIIB5mk3AbRlgy0ND9A%2BOXZhfq41WgggDYfVImphB5Ho5UgsPpjtJdtogV1ua4lMHtu3hnz62rseQVYnlKLXT33cJ8S07O52Co1mi57NgDWGjfc7DRDATYdV9fLa8aOqI5flyptF8cjAeQO3A65Vl1CAgXfrXlNKqUFWVewqtrzsfIsVPzsTGeUN8cv2fEamDZiS%2FgL6SWcuD3%2BcDgOJ9KYzQXDt1kVqzAsIOEWyTA9j5%2FZfjDd2sS%2BBjqkASrgahCSXhxkyRtVctHkWNzNGElLctzmZAiH4fANjlZ5lw5LOdC%2B2L23MKIQf66WnhJu9IDQw8C2t3BfRzFXjGo1wzjoWDWJ9ipOsw1eznaK5z2G4wvX6HatRNngUmahjz2UgzTi70wzoryeL%2BgMUdpdP%2F43lZ8w6wmKw%2FRmB7YRrP8r26wyH7r5FjvUQo3khUcv3pX2sVEycjtw00QeJWl5WI2H&X-Amz-Signature=b45a8ee4dedf6c7313ed14491355fa0dde426803f567042194ee6cc3c3d0b816&X-Amz-SignedHeaders=host&x-id=GetObject)

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
