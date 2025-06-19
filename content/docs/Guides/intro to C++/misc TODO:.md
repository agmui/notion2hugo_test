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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEFKGPUY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWXPmJ79oI5mkUQ7Tv5oK8r%2BsuJCmjGT0pBxvQ7Jz50QIhANJeQOJI6X3KLPRGBa5xZG1r9MAheJu61vs1To8ZeWJsKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyemQSj4wMNqLTDzXUq3APDFM%2Bc8n3m8pFolPR0tH7EbZDbOkVNKNRBr%2FaRDvHkazA%2FuK7kOsZ7rBSECswcWxUtW0XVOPxODzRgA8UQuP3wBQlYTR9e6GqM4ccii8t4XR4fVv2Srhcv2o9b4VCN2iLKMHFO17TPpi%2B4ZqnT0kFEBos4FlGncn43o5tudfZuLouGYROU10TfPatCyjYjSH0ZTsCvr8wnhVd%2FJA3RgW4CbS6GJiEoh9KjIwdVLoAQSvjGrzxZ9HLuOs0Ue95R8O7BgI6OrhjlmAZ39vpqKX3S7yFW9W3UOaAfz4YtXiIo1xPFz1xII%2FK53CJ%2FS7Jz3%2Fv8AU3NLTW9rXB7AtaWOiKcHJ%2F9DeD8Ur4Qu9jaJxyrixFeZAs3YNHjIAvYBU5uhKVv2SWDJ5VTYTad0JVbSUMArInPe1xoPmtXp5DEGu7GUGKUYRj%2BNyAA2g8c0rv3MNL1lDPUPmgSlh0HOsH7U8vGZkeeLWoWNn55G4MqvsFgHA7WgBC1b1mxF4kdb8AHI5uIq5wLdUclwl2Ieai4eotjUgmhj79ERVVmRSQGc32E9K%2F98714kbVymMUA9iFrzhr7ozHU23tvoqNQrN%2Flj9FSs9c9QkMQnFB8U8RWQdEYTRvTt6UIamwwARI3XDD64tHCBjqkAebwzw5GAmtYIb5EobePWc3FBDafJsXV2IvGoIrbU5CNktm9ZfBCwTGelH39TOjhKcRLO3RGnabMP9W5jKX3utVtIIxy6oUBL6HO%2FOREcIEphAgzu%2BwZVAs%2BvA57WahbkupkHKVVuirYdmIwKchFglAeAT4982jadO0fbnWnEy5rCG4yA0DldB8RAp8y51XhXxqwsl23DiaHFXTLAERT%2F6BLhCW%2B&X-Amz-Signature=629163112d4e6858617cfd7a9daa65123f5be700f1637893bed9c78115384ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEFKGPUY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWXPmJ79oI5mkUQ7Tv5oK8r%2BsuJCmjGT0pBxvQ7Jz50QIhANJeQOJI6X3KLPRGBa5xZG1r9MAheJu61vs1To8ZeWJsKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyemQSj4wMNqLTDzXUq3APDFM%2Bc8n3m8pFolPR0tH7EbZDbOkVNKNRBr%2FaRDvHkazA%2FuK7kOsZ7rBSECswcWxUtW0XVOPxODzRgA8UQuP3wBQlYTR9e6GqM4ccii8t4XR4fVv2Srhcv2o9b4VCN2iLKMHFO17TPpi%2B4ZqnT0kFEBos4FlGncn43o5tudfZuLouGYROU10TfPatCyjYjSH0ZTsCvr8wnhVd%2FJA3RgW4CbS6GJiEoh9KjIwdVLoAQSvjGrzxZ9HLuOs0Ue95R8O7BgI6OrhjlmAZ39vpqKX3S7yFW9W3UOaAfz4YtXiIo1xPFz1xII%2FK53CJ%2FS7Jz3%2Fv8AU3NLTW9rXB7AtaWOiKcHJ%2F9DeD8Ur4Qu9jaJxyrixFeZAs3YNHjIAvYBU5uhKVv2SWDJ5VTYTad0JVbSUMArInPe1xoPmtXp5DEGu7GUGKUYRj%2BNyAA2g8c0rv3MNL1lDPUPmgSlh0HOsH7U8vGZkeeLWoWNn55G4MqvsFgHA7WgBC1b1mxF4kdb8AHI5uIq5wLdUclwl2Ieai4eotjUgmhj79ERVVmRSQGc32E9K%2F98714kbVymMUA9iFrzhr7ozHU23tvoqNQrN%2Flj9FSs9c9QkMQnFB8U8RWQdEYTRvTt6UIamwwARI3XDD64tHCBjqkAebwzw5GAmtYIb5EobePWc3FBDafJsXV2IvGoIrbU5CNktm9ZfBCwTGelH39TOjhKcRLO3RGnabMP9W5jKX3utVtIIxy6oUBL6HO%2FOREcIEphAgzu%2BwZVAs%2BvA57WahbkupkHKVVuirYdmIwKchFglAeAT4982jadO0fbnWnEy5rCG4yA0DldB8RAp8y51XhXxqwsl23DiaHFXTLAERT%2F6BLhCW%2B&X-Amz-Signature=017fa2822d99fb94acc8f45e145f137bd6e88bdff1150e1a4fa5e5d7f67babd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
