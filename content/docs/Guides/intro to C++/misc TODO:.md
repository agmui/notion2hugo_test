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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNFPLOOM%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIBizkXXQZbfIxMCo1aczkhazsmlK40%2FoX5FrXDOMBVlBAiAX6qy5Gkz5FuID7iohD7%2FkKEvuziqkkdAKgNTV9pl10yr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMWFhqAhq7zC%2FN2TZCKtwDA0FYiWfNi5xuP0cbal3wbu%2BhY8bZftIy0N5rrZq3iC%2F7m3SFaGceajnNj14GUxhJfSplNhxJsm230UFHj3bpI7EV8XKUmhmdc2PLIs5qrgdNuADrg1TK6MiowjYgls0c%2F1jw10LjGpNSl2%2BHntW%2FDqI%2FwlxJG9edKEFotLhTT8oqVFjoKewldQK1j%2FQyigbzZ9a%2BNMMXyJI4olwY4eTmbZLsbm9lRJFBljbf9EaWtTNxbccyVFtT3j%2FfIwGBMP5g5hNBPILgqy%2ByyaP7XazUxZjr65DoiuYqcvcPCSHL5hm9aX3ksrJA1takUqRgykvRNN7Su9ePct2G4P6ltfGXK4WMwDTAsYZIc8qMwXQ5AGJKLljNbjlKWQYaZmigyXGPkP6H6TO6de4fLsXQZiMZ5q98oGHO6Q7S5%2B%2FD7h1Di69pjlvWMsZUjteetAAAyo9LRMyrMaaNydbnQREkh%2BNRtXZz%2FWdolNyQ%2Bl%2Fog2Dy66j7ssQj3IFvCdQKbBTPe%2BplhDpwH8Eu3ltezu%2B5nScDlulwLdpRMUDJ5%2BS9TNWy3PhaWeCJ92h0BHZAd%2BGtoWHMVHv2GXJpGGRJFXVrPkKhl3kqILb557WFA2A1Lf%2By2d2yB%2F2avpCUjRAflgswve%2Fs0QY6pgErML2V9%2B1i%2BuO9kMnvYxw2MJFSsb15%2FrgL4chwEbZ6hvXvF%2FoY70yToDhIrjDszFRpUyhmUtztazGxmPhN6MBhu3fZZvM8cLPtKmDRnmkw6EzhcBoW7dEjbG7LO2MPAN8WuJIZ%2FfNuiloJ16GaTM3H2vQqEX01g%2FXC8L%2BFZi9dUDJaryAgABPySY7T2YZR7bY6Tt1gkbD9GwhFXMODPWG7JDY9lADl&X-Amz-Signature=34bc6310176165f4f35105e2979895662e5216e4d0430edc7b58fe9a1f740911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNFPLOOM%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIBizkXXQZbfIxMCo1aczkhazsmlK40%2FoX5FrXDOMBVlBAiAX6qy5Gkz5FuID7iohD7%2FkKEvuziqkkdAKgNTV9pl10yr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMWFhqAhq7zC%2FN2TZCKtwDA0FYiWfNi5xuP0cbal3wbu%2BhY8bZftIy0N5rrZq3iC%2F7m3SFaGceajnNj14GUxhJfSplNhxJsm230UFHj3bpI7EV8XKUmhmdc2PLIs5qrgdNuADrg1TK6MiowjYgls0c%2F1jw10LjGpNSl2%2BHntW%2FDqI%2FwlxJG9edKEFotLhTT8oqVFjoKewldQK1j%2FQyigbzZ9a%2BNMMXyJI4olwY4eTmbZLsbm9lRJFBljbf9EaWtTNxbccyVFtT3j%2FfIwGBMP5g5hNBPILgqy%2ByyaP7XazUxZjr65DoiuYqcvcPCSHL5hm9aX3ksrJA1takUqRgykvRNN7Su9ePct2G4P6ltfGXK4WMwDTAsYZIc8qMwXQ5AGJKLljNbjlKWQYaZmigyXGPkP6H6TO6de4fLsXQZiMZ5q98oGHO6Q7S5%2B%2FD7h1Di69pjlvWMsZUjteetAAAyo9LRMyrMaaNydbnQREkh%2BNRtXZz%2FWdolNyQ%2Bl%2Fog2Dy66j7ssQj3IFvCdQKbBTPe%2BplhDpwH8Eu3ltezu%2B5nScDlulwLdpRMUDJ5%2BS9TNWy3PhaWeCJ92h0BHZAd%2BGtoWHMVHv2GXJpGGRJFXVrPkKhl3kqILb557WFA2A1Lf%2By2d2yB%2F2avpCUjRAflgswve%2Fs0QY6pgErML2V9%2B1i%2BuO9kMnvYxw2MJFSsb15%2FrgL4chwEbZ6hvXvF%2FoY70yToDhIrjDszFRpUyhmUtztazGxmPhN6MBhu3fZZvM8cLPtKmDRnmkw6EzhcBoW7dEjbG7LO2MPAN8WuJIZ%2FfNuiloJ16GaTM3H2vQqEX01g%2FXC8L%2BFZi9dUDJaryAgABPySY7T2YZR7bY6Tt1gkbD9GwhFXMODPWG7JDY9lADl&X-Amz-Signature=506d52de210bbeca1594126118c2fd9ede33a4ec8872d4076f23c2e1bf3a22bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
