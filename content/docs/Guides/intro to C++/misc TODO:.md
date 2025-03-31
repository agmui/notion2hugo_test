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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLAQSEEW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD8T3N2BbM0KnDDyyyEO4p1t1vocWTF%2F5zOLaY4OtJqtgIhAOGHfAnV7fDaQdpQmM6vAdFdA8RtYwPnopV3gnKC%2F5nFKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwyt6iOaplYhop6eM8q3AOWZ%2BTp%2FwBhrZ533ZxnoRSoCMiOHZ8Fz%2FPjXDf%2F%2BIkDIW%2FPpwMqvsU9syWo04xckVDxdGgBsx6ugR2cVsVJVrUv9%2FgcaKgf1%2F1kAbcRcej1v9kg0naxsk4Y7fm4eZPqOC8CsW6a94FoW0mMp9IsEymbMXg06g5h0iFZNy%2BLoiNMBXLm15X77fQRp5mvsDQ%2FvTNnhD2n6wjykfWpDUJ0OBOAUAt%2FB5VL7oIRRveFlK1j9Q0I7DqPB4dhE1%2BxJ8UkdvXCEM4vqCnvANledaJnnU2sh4ekRRtiaUj3abKM3yKzSdNwD%2B8wf%2F4gXJJg03YkkoBC%2BvGEzIdyy%2Bo6EekZ2biBnaMWC3A%2BntJrv5%2Fk%2BmM36FVOrRwNJrRVVcpprj8LRFUMEvXprJZdGhP6zb7VVIgL9j%2FkqlEKDmTkOxHIgiA%2FRHnTZcB2g15O7L9abqFQnBZUOUrQuQO%2B75E7KqZVteq7CSTiDcJUTqGFMi%2F9%2FxaiDHaqB76XWFFkjYTqKYrcoBUl78QISrfAAajhhR98O%2BvQWY9%2BNfoKMwvUv%2BueLU5XDwpW5Sos9qwVkJ5Egjni44KP%2FWUhs%2FA3CLdO6wvTzOdYNdceJ403x5TnEUgDQ5wTS1EhvbFD57wdwGK8%2BzDFlai%2FBjqkAV%2BF66V9yFOFRZyAuL%2FxgWRXgQDOTjBGzJ7lMm1DQ62kRFWepXro5VuyoFUbSOQSZFyz3B%2F0iDUKerEtSli9eB9k6WtFXTx6dnsnP5OePc3Snl6fcvYKaS9lievavXFuXnO6ZBT0V3frM0yKIPsuioYgKyc6lmvUTcXLlhNgKGKYtDmcWtWEfjTrTO3WRHk%2F9O0VOzXvzYQm4sc45bnY%2FF0OjcMo&X-Amz-Signature=dee28c15593725a26f17cbe3d51767d212f332ef9d3f6b64734bf7bf233df5da&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLAQSEEW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD8T3N2BbM0KnDDyyyEO4p1t1vocWTF%2F5zOLaY4OtJqtgIhAOGHfAnV7fDaQdpQmM6vAdFdA8RtYwPnopV3gnKC%2F5nFKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwyt6iOaplYhop6eM8q3AOWZ%2BTp%2FwBhrZ533ZxnoRSoCMiOHZ8Fz%2FPjXDf%2F%2BIkDIW%2FPpwMqvsU9syWo04xckVDxdGgBsx6ugR2cVsVJVrUv9%2FgcaKgf1%2F1kAbcRcej1v9kg0naxsk4Y7fm4eZPqOC8CsW6a94FoW0mMp9IsEymbMXg06g5h0iFZNy%2BLoiNMBXLm15X77fQRp5mvsDQ%2FvTNnhD2n6wjykfWpDUJ0OBOAUAt%2FB5VL7oIRRveFlK1j9Q0I7DqPB4dhE1%2BxJ8UkdvXCEM4vqCnvANledaJnnU2sh4ekRRtiaUj3abKM3yKzSdNwD%2B8wf%2F4gXJJg03YkkoBC%2BvGEzIdyy%2Bo6EekZ2biBnaMWC3A%2BntJrv5%2Fk%2BmM36FVOrRwNJrRVVcpprj8LRFUMEvXprJZdGhP6zb7VVIgL9j%2FkqlEKDmTkOxHIgiA%2FRHnTZcB2g15O7L9abqFQnBZUOUrQuQO%2B75E7KqZVteq7CSTiDcJUTqGFMi%2F9%2FxaiDHaqB76XWFFkjYTqKYrcoBUl78QISrfAAajhhR98O%2BvQWY9%2BNfoKMwvUv%2BueLU5XDwpW5Sos9qwVkJ5Egjni44KP%2FWUhs%2FA3CLdO6wvTzOdYNdceJ403x5TnEUgDQ5wTS1EhvbFD57wdwGK8%2BzDFlai%2FBjqkAV%2BF66V9yFOFRZyAuL%2FxgWRXgQDOTjBGzJ7lMm1DQ62kRFWepXro5VuyoFUbSOQSZFyz3B%2F0iDUKerEtSli9eB9k6WtFXTx6dnsnP5OePc3Snl6fcvYKaS9lievavXFuXnO6ZBT0V3frM0yKIPsuioYgKyc6lmvUTcXLlhNgKGKYtDmcWtWEfjTrTO3WRHk%2F9O0VOzXvzYQm4sc45bnY%2FF0OjcMo&X-Amz-Signature=9652e3ff38ad6371947f3201641e1c9a79b259268a4ae90f7887e7857fd8e5ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
