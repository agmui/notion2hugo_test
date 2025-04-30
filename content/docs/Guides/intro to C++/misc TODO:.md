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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652I3GGOA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCICZJXPlOsj%2FmMt3pD7XnmV%2BZX7D32iwZ0iJEfl3dEvd2AiBczXSJG%2FergDDocKZJYNzpz3y6at3b9VxTFam%2BbDt0EyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVhRFT6Ow3pdBFFe1KtwDX%2FWU6H20bN%2FudKC4utN4RZmHQYj6%2B0Xd2QWF6yACipbFvwLCRC%2BMEkUqN78VEld9O1hn3zfrjUwVtdAxu%2F9WQl%2BB1fdRjvOFVwVL8bSaeV2oUEyZh7P8QAGh%2FnvxIme3HoIwPniAh7jbVHV9EUH7gM0%2BfSGYtVIA7EXJScVkJieoUZTyT0VZbKDeHprJGoGpvYGBAWP6b5kbc5Zu0Nk73rljxAVReXQeeBxvj4YtjoMzgDSaD6pawgAEwUABJNIxhEd84xC9TDlHsa9m9G34UpYaEFbtnVXPrJ91DPzGVO1JsHQ416fi1Y3jhOOpqCcGzmQBLrNePX%2BE6bRYWTLHf0ltpSP57sh4xPy3aVsUzeAkLezLEm8n0LW03IcMi64YixwzccjWqljTQjLm9TYa4tsDwMVkSj%2Bab5neJevmNoTRrM4NKSOZOuZOojFDFzY0djxQzzClWDMhRGUKZKj3W1MfzUkPrQauk2U0XUrzdecxpnfAUS23oMikAIohsMS7gw%2Fft4CGddswxc%2B0ENnMQRhxIioXWXpoTShcR8nI2GnsJtyYzshyqSiZT9jawot%2FVghLfVNRkbdeqPjbxCvMI61dHTwd%2F7Ynih8HyJ3IwwyuZpmrKMfQnQYNzdowgvrGwAY6pgEs9q9Q%2FniDnfmI2zBb5jVmfR4cYoiEFxx5e3GG2N1UUNILdHUmxPeYHFyxzBqg6p16O8V2VrqE9WZe3U7GXnvJMvVflcY1bGQ4dQ0OKHw4sn27z6%2B05bi0oR6WvyUPtHk9fy1acYKJCoVBrzfrp%2BW%2FarUgaMI4NdRJCC%2BWPooH416%2BxqppouP8WKsyy5g5qIpjk7OwswS0lmO22Hbozf7EN%2BpA4JpB&X-Amz-Signature=bd0f7c3184f1d9476502958b87f3a967a4a2da4911722608caabe45259e4f2ec&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652I3GGOA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCICZJXPlOsj%2FmMt3pD7XnmV%2BZX7D32iwZ0iJEfl3dEvd2AiBczXSJG%2FergDDocKZJYNzpz3y6at3b9VxTFam%2BbDt0EyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVhRFT6Ow3pdBFFe1KtwDX%2FWU6H20bN%2FudKC4utN4RZmHQYj6%2B0Xd2QWF6yACipbFvwLCRC%2BMEkUqN78VEld9O1hn3zfrjUwVtdAxu%2F9WQl%2BB1fdRjvOFVwVL8bSaeV2oUEyZh7P8QAGh%2FnvxIme3HoIwPniAh7jbVHV9EUH7gM0%2BfSGYtVIA7EXJScVkJieoUZTyT0VZbKDeHprJGoGpvYGBAWP6b5kbc5Zu0Nk73rljxAVReXQeeBxvj4YtjoMzgDSaD6pawgAEwUABJNIxhEd84xC9TDlHsa9m9G34UpYaEFbtnVXPrJ91DPzGVO1JsHQ416fi1Y3jhOOpqCcGzmQBLrNePX%2BE6bRYWTLHf0ltpSP57sh4xPy3aVsUzeAkLezLEm8n0LW03IcMi64YixwzccjWqljTQjLm9TYa4tsDwMVkSj%2Bab5neJevmNoTRrM4NKSOZOuZOojFDFzY0djxQzzClWDMhRGUKZKj3W1MfzUkPrQauk2U0XUrzdecxpnfAUS23oMikAIohsMS7gw%2Fft4CGddswxc%2B0ENnMQRhxIioXWXpoTShcR8nI2GnsJtyYzshyqSiZT9jawot%2FVghLfVNRkbdeqPjbxCvMI61dHTwd%2F7Ynih8HyJ3IwwyuZpmrKMfQnQYNzdowgvrGwAY6pgEs9q9Q%2FniDnfmI2zBb5jVmfR4cYoiEFxx5e3GG2N1UUNILdHUmxPeYHFyxzBqg6p16O8V2VrqE9WZe3U7GXnvJMvVflcY1bGQ4dQ0OKHw4sn27z6%2B05bi0oR6WvyUPtHk9fy1acYKJCoVBrzfrp%2BW%2FarUgaMI4NdRJCC%2BWPooH416%2BxqppouP8WKsyy5g5qIpjk7OwswS0lmO22Hbozf7EN%2BpA4JpB&X-Amz-Signature=88be7216cf6964b731bda8083aedc062ef51cd18e8034c4da2a1a95a4450d351&X-Amz-SignedHeaders=host&x-id=GetObject)

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
