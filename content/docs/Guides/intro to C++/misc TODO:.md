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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIKV4PX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFTNhzW4UJBUQJ2%2Bcb12swYptkCn44mGufj768ddi1ZiAiAiRk2O6mdQP8VHQ32XqBhyKOCUGpHOY1rza5jVjk5AhyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSW2KLzwG%2Bits6JpDKtwDtvohAf3RcDiFScjLeBwxxAGauJNZa0SqojX%2B17eWiptLNs15Dm7uyQFatQAdcObhsBfiFkKI%2BZqGX8J1U8VLj7zY974hR%2FqM7UA6UfRpVXtbPBC48PHoiSahNnSKwGhHREVWazxOAeDw%2FhO4ONTDxWHtGT5xio1AlzWgf43pkZ5WPM0k4VtWRS1Bh7mUQ2%2F9dPRrMn2eUTF1fwu%2BelqhNEyxIvZ66HW3u9gM3PqxCQBaHfG80QqfbI7UuE9bKFZZpOD05Qa8llJOHDq8SNdHshaqs4zeqSi19FmQNEGYyllyuhPtzcvkDLkBWVlQVEZA4y05y1IvHr1RH%2Bro37%2BlxTRGv5J6%2FwIBosHnymqtVpO0mP%2BWqSZFylQb2I5NvKYPt45fZ9lT%2FPQMcCqjTBxL%2FOiId%2FGOENKMPnWZ%2BMg4il85zdIWQvNtHTvacrDjIVIp8nM2pdVR1mchdcBeItRTpZAkWtA0FLgXSp%2BlJl9OhbY3gpd39B0TRa8Y%2F8jDNbIKgIhqzk5rFOG1cKicuYywgeID7ZpTXs26mNMu%2F%2BpU8%2FShh8b10sUHAYadTeOhEGQRvyfbVBRO9VC0udrvAD3HZBp%2FZeVPTXdb3D2QbbCnfUA3kux%2B%2FAFkfBtghAkwx5CKvgY6pgFNx2x2TNZDCKv1PD9N0Hhi3ZEx58zA%2BR%2Foe%2FqRpbVSnSCt7x4mlQkYGoUhaPAX2cYYcFdg%2FXItn8q1DTMYIO1CmAIZpk7VON9z0eCVB5Wi%2BhKlJ73V6IRR8AUviZtED8aEHuepmaa3dS6pgi6eS2fDgs5QWexN6%2BtTltZAIUqSUnXxJXhtG0tlIog3k8cOMgg6oLMp8TGiJaYPc8g7RHZpw05BrfO6&X-Amz-Signature=1f35e1c874f28daf52eaea5ef9a493853e2c2e04645850837613bff4838f35c1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIKV4PX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFTNhzW4UJBUQJ2%2Bcb12swYptkCn44mGufj768ddi1ZiAiAiRk2O6mdQP8VHQ32XqBhyKOCUGpHOY1rza5jVjk5AhyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSW2KLzwG%2Bits6JpDKtwDtvohAf3RcDiFScjLeBwxxAGauJNZa0SqojX%2B17eWiptLNs15Dm7uyQFatQAdcObhsBfiFkKI%2BZqGX8J1U8VLj7zY974hR%2FqM7UA6UfRpVXtbPBC48PHoiSahNnSKwGhHREVWazxOAeDw%2FhO4ONTDxWHtGT5xio1AlzWgf43pkZ5WPM0k4VtWRS1Bh7mUQ2%2F9dPRrMn2eUTF1fwu%2BelqhNEyxIvZ66HW3u9gM3PqxCQBaHfG80QqfbI7UuE9bKFZZpOD05Qa8llJOHDq8SNdHshaqs4zeqSi19FmQNEGYyllyuhPtzcvkDLkBWVlQVEZA4y05y1IvHr1RH%2Bro37%2BlxTRGv5J6%2FwIBosHnymqtVpO0mP%2BWqSZFylQb2I5NvKYPt45fZ9lT%2FPQMcCqjTBxL%2FOiId%2FGOENKMPnWZ%2BMg4il85zdIWQvNtHTvacrDjIVIp8nM2pdVR1mchdcBeItRTpZAkWtA0FLgXSp%2BlJl9OhbY3gpd39B0TRa8Y%2F8jDNbIKgIhqzk5rFOG1cKicuYywgeID7ZpTXs26mNMu%2F%2BpU8%2FShh8b10sUHAYadTeOhEGQRvyfbVBRO9VC0udrvAD3HZBp%2FZeVPTXdb3D2QbbCnfUA3kux%2B%2FAFkfBtghAkwx5CKvgY6pgFNx2x2TNZDCKv1PD9N0Hhi3ZEx58zA%2BR%2Foe%2FqRpbVSnSCt7x4mlQkYGoUhaPAX2cYYcFdg%2FXItn8q1DTMYIO1CmAIZpk7VON9z0eCVB5Wi%2BhKlJ73V6IRR8AUviZtED8aEHuepmaa3dS6pgi6eS2fDgs5QWexN6%2BtTltZAIUqSUnXxJXhtG0tlIog3k8cOMgg6oLMp8TGiJaYPc8g7RHZpw05BrfO6&X-Amz-Signature=1f3b8a9a5a592eae074daa2be4ffaf4edb5ac8df9ec60551abedee3a3df58dda&X-Amz-SignedHeaders=host&x-id=GetObject)

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
