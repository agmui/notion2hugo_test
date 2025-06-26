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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXEZKLUZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD8zcG20u7jTlQgS8LscThQevDOmuJCYzUeXnyv9b%2BrDQIhALdftt8c0cYoAr6oMUqIF9ySjLPU6vsz%2BIchBeoPsLgUKv8DCFsQABoMNjM3NDIzMTgzODA1IgzAP8dVGo32OOOvDywq3AOdq9o7hWq4S8ja3MiWXwo8Af9jEfg1Inx%2BoMbQl%2BRopTR%2BREqaBQ8G%2BXKpRLGtAyoarNbgVJCpTlSkMVSYgxjstv6XqCnvzlv93nVOY99pVwGzVZNdlf9py8viVuKEf6rPqtWQdx1UuOG7bCfgJg3pwi0%2B5Ahb5NFPKRm7SUVSaADFvTdNn2e4oZpyTCvZXHI6%2BKMjXptlKgW%2B%2BDZGFyUEvBNrIXQm%2BJ46Z1PhujNRIiF1mEx45xYQomEy1UsfZC7HNI3J6Q5MC7WITxn5BLp0Ai1ApHRmdY9iqyCF9%2BaEc77ik5gZBcqVweRxk8aONEBP6OjeIFMG%2BHa2yo55Amj6KsPajWvRepXUrU%2FZ0idEyamiEuvWAMKxUUiGhe%2FoXvwI1Zz3htaL%2FFFb6ym6MxTdwFkoSI9PjTRKFPk4mbfk%2Fj2lecGHD%2FQ5x%2FXEJuqxSKYkk%2BKpCGkXOPrkAMxfXsR3Qe9rRxZldcPeMFPLK4iXCQRQS4%2F8gG796MenJxeHdErtCyKIESjGTe94UOCwBNrHrjSgfehKKhtRI16i2C9IhzomRdbW09gQji651wMAC3VLNDxtCgGhelCTbmA70AHM6xO9n2h9H5WNa0F6AeEb50R5NDQ2Hsljfcnu8DCWwfTCBjqkAWKhej%2BTrogJjRhZObBHHFR5lUIy7Bmmt2f0exqXxxVk0eI09Xkix52cp%2Fjvuis%2Fjwt3RiVW6DVIOU4z1yim4YK4fl8znL1ki%2F5sscrZ%2Brdg7w4%2BaCL7DBvH95LkQ0EJGRfSkiSS2AIMFXlUCKYb8%2FifkyQM%2FhULDU0ZHRUS8TvghobSBo5pGNTCClHWVBBWb7X%2B4gJM2qZ94KOBp6Pids8E23Ib&X-Amz-Signature=0027f930988003ea7edaba3204ff1b8f65179c4b56294ae9988e46c45c54615a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXEZKLUZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD8zcG20u7jTlQgS8LscThQevDOmuJCYzUeXnyv9b%2BrDQIhALdftt8c0cYoAr6oMUqIF9ySjLPU6vsz%2BIchBeoPsLgUKv8DCFsQABoMNjM3NDIzMTgzODA1IgzAP8dVGo32OOOvDywq3AOdq9o7hWq4S8ja3MiWXwo8Af9jEfg1Inx%2BoMbQl%2BRopTR%2BREqaBQ8G%2BXKpRLGtAyoarNbgVJCpTlSkMVSYgxjstv6XqCnvzlv93nVOY99pVwGzVZNdlf9py8viVuKEf6rPqtWQdx1UuOG7bCfgJg3pwi0%2B5Ahb5NFPKRm7SUVSaADFvTdNn2e4oZpyTCvZXHI6%2BKMjXptlKgW%2B%2BDZGFyUEvBNrIXQm%2BJ46Z1PhujNRIiF1mEx45xYQomEy1UsfZC7HNI3J6Q5MC7WITxn5BLp0Ai1ApHRmdY9iqyCF9%2BaEc77ik5gZBcqVweRxk8aONEBP6OjeIFMG%2BHa2yo55Amj6KsPajWvRepXUrU%2FZ0idEyamiEuvWAMKxUUiGhe%2FoXvwI1Zz3htaL%2FFFb6ym6MxTdwFkoSI9PjTRKFPk4mbfk%2Fj2lecGHD%2FQ5x%2FXEJuqxSKYkk%2BKpCGkXOPrkAMxfXsR3Qe9rRxZldcPeMFPLK4iXCQRQS4%2F8gG796MenJxeHdErtCyKIESjGTe94UOCwBNrHrjSgfehKKhtRI16i2C9IhzomRdbW09gQji651wMAC3VLNDxtCgGhelCTbmA70AHM6xO9n2h9H5WNa0F6AeEb50R5NDQ2Hsljfcnu8DCWwfTCBjqkAWKhej%2BTrogJjRhZObBHHFR5lUIy7Bmmt2f0exqXxxVk0eI09Xkix52cp%2Fjvuis%2Fjwt3RiVW6DVIOU4z1yim4YK4fl8znL1ki%2F5sscrZ%2Brdg7w4%2BaCL7DBvH95LkQ0EJGRfSkiSS2AIMFXlUCKYb8%2FifkyQM%2FhULDU0ZHRUS8TvghobSBo5pGNTCClHWVBBWb7X%2B4gJM2qZ94KOBp6Pids8E23Ib&X-Amz-Signature=49e0c24426f3351bbc7ea6c36402f37dfa9e4698cda019d6beb2f55d4e14bb74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
