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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVKVV3CU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUac3RvM4qMe8kBKMjXHDHaTNtHvg9ntV%2FA%2BdrBof%2FDgIhAJieQJ8%2BcywXCy0uvq9uZx8g2l%2Fl2K3eDgNTofkM5WHpKv8DCG8QABoMNjM3NDIzMTgzODA1Igwv56ME3dHOmgXsbgMq3ANkQS2w2ruxSMIwVbL8NobdbMOOyUQvBTKoZRKE1o3gW8WaO9cNA8Klw021RtPDk2u4dqZfrk%2BM2FW2YST04S3zwk6qTCNB%2BPRR8f8L9doCwFv%2FnR1Jn5%2F8CovvThZJxUcf7GWVySNAbvAw9NB2b4IbhscC1Yx1fwBtQjD0xcrimuNFyDoZW96OjPvTrqx96ERAF5g9iWB5EHSoh8hOXJvDhIyfseXvo2kd9n1usZwjlszoqKGdFTkY0oAWHXI%2B%2FoXj0EEG7T4GIY%2FVWVB8Tj6l6hm9VBKODISeW4qEdZDIoJpD7NDPxKd1sYJOoFL%2B9hKaCoI%2BJac5Rg0mq8Krx9uoc0MIaTptIPlo0tSH4E1o9VoENmQ7l50M%2FqF0n6kFhpARSsomLQh4BT12%2Fda0pEJX6nNlL8Jy8OI%2B8Yo%2B6eEnP9s9K%2F2CNWUkGqdqzhB4WpvDuVsBwNm6ksEoJUZD8x%2Fq5foTadH%2FqmW%2FX2upSBT3eqK87L7K5ycZpe7kM3aD6xi9oHqsU2UG7ss3J56k4SDc9%2FWHT1knAKRFUpCLA57E41KbZKsqdmAKFWjfrg4p6wylPahmDoiLAOafyk2%2BJPIAaLN9zbvwklPxOqGeC5TAl56j%2F4UW2WnoAZXZJDC23ofABjqkASYQYnqJ6sBqfZySnk%2FCsPNa%2FG3SzlFl3RshdV69rEFKnDuI9V%2FdsyJCodJ93Dcr6kANGSEPHqV%2F22ORmGJOuOnJS0IVCCD3vvckZRILpzbRv2gepIz8yNI2f%2FdGeMsIKV5snpTjJzbojXe%2B1wlmvpPFxTONp9XCKR%2FQFyDe3iyD695SIVe5huDKuyWjFsHksOhkM2Wk98WshmAmZqxgsMWg8iKL&X-Amz-Signature=a5c68a4099cf9e00d86db06b106d708fc7704f69b471da7f89bf16951a7c466b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVKVV3CU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUac3RvM4qMe8kBKMjXHDHaTNtHvg9ntV%2FA%2BdrBof%2FDgIhAJieQJ8%2BcywXCy0uvq9uZx8g2l%2Fl2K3eDgNTofkM5WHpKv8DCG8QABoMNjM3NDIzMTgzODA1Igwv56ME3dHOmgXsbgMq3ANkQS2w2ruxSMIwVbL8NobdbMOOyUQvBTKoZRKE1o3gW8WaO9cNA8Klw021RtPDk2u4dqZfrk%2BM2FW2YST04S3zwk6qTCNB%2BPRR8f8L9doCwFv%2FnR1Jn5%2F8CovvThZJxUcf7GWVySNAbvAw9NB2b4IbhscC1Yx1fwBtQjD0xcrimuNFyDoZW96OjPvTrqx96ERAF5g9iWB5EHSoh8hOXJvDhIyfseXvo2kd9n1usZwjlszoqKGdFTkY0oAWHXI%2B%2FoXj0EEG7T4GIY%2FVWVB8Tj6l6hm9VBKODISeW4qEdZDIoJpD7NDPxKd1sYJOoFL%2B9hKaCoI%2BJac5Rg0mq8Krx9uoc0MIaTptIPlo0tSH4E1o9VoENmQ7l50M%2FqF0n6kFhpARSsomLQh4BT12%2Fda0pEJX6nNlL8Jy8OI%2B8Yo%2B6eEnP9s9K%2F2CNWUkGqdqzhB4WpvDuVsBwNm6ksEoJUZD8x%2Fq5foTadH%2FqmW%2FX2upSBT3eqK87L7K5ycZpe7kM3aD6xi9oHqsU2UG7ss3J56k4SDc9%2FWHT1knAKRFUpCLA57E41KbZKsqdmAKFWjfrg4p6wylPahmDoiLAOafyk2%2BJPIAaLN9zbvwklPxOqGeC5TAl56j%2F4UW2WnoAZXZJDC23ofABjqkASYQYnqJ6sBqfZySnk%2FCsPNa%2FG3SzlFl3RshdV69rEFKnDuI9V%2FdsyJCodJ93Dcr6kANGSEPHqV%2F22ORmGJOuOnJS0IVCCD3vvckZRILpzbRv2gepIz8yNI2f%2FdGeMsIKV5snpTjJzbojXe%2B1wlmvpPFxTONp9XCKR%2FQFyDe3iyD695SIVe5huDKuyWjFsHksOhkM2Wk98WshmAmZqxgsMWg8iKL&X-Amz-Signature=568b6d619ddd1367e2afb392ae2ace55586af8e21b036887b63b9195aec7e87d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
