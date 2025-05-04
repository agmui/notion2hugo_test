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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCNR3SW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDXNPyWvdJW5xc%2FxmpLw2w%2BEGEEjxn3KOE%2B0AaBrDN0cAiEA70c7MKRB2lRdJFam9Q2ObJYzXeZj1QgQxLihpcr83wwq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOaKA3wWe9G548W8PircAyAFCaNNyY1%2B6mo3RUTt6GtA1%2Fqij1i7mmixbD3yNiM%2BBDYoD%2F8UcygB1Tsrxw%2BwksA38SN4pNW3wAZa9BL9qKc%2B5NIFmZQD9DlQYpC2RPImLdSa6B38Ud5PvPkQYwWuZdGihWrvuRrNfnhcjyI%2FYxNbQt56Pz9xiUSOPxOkaHGUipnstgpb0ct0q4S2rpXzemSxYPjJ%2Bb4GmCcCdXiWWREzPQw5Wc6n%2BKfJSFMkugIfMlrriJGzqWaPOpwGnv9eLA7tGKq8zh3TXXiGaetm7b0jO6yQdBLOEPOQMs0hTYoue6uMOALivQIHv%2BiHzR0wTpiBdnXg9l%2FdNG4vaAzl8F2soq76%2BhgEPhFMU%2Foql76FdER2UTc7oESdvbkGsHm3LxCjykWf1zohV8fdYUFGFrJPoOThsNxgJE7PyTEEkcs2lblsvVTrBwvUE7h86k5XMTsiMW2A2024d8CAG28HZa1TRHSkZ%2Fpb%2F95BdE0uiRL5qHhVuxTQGNR4qmFX3uLj85Kr%2F9oJksqWkA5piioMDcEKYDKMc3VrOfDCqN7SttC9ZxRLybU%2BoKL3wFZbWxuFpewaJp3Cu2l%2FZx29I5VP5k4mJqeyiwalzv9EGaFsshaSIs5DEsMFfAgKvSCzMPu63sAGOqUBmzcAIomNZUxmKJkmW%2FEPYTNfZgOmCjCCM7HzF0ORRbMosOQafdXtMbd0HqkWK4u1L7nn8SJRWWwsm5PPDpcdXQYe8rRI0KthiN6XPaTe5oXrXaJCmt0HuV3YjExRIV7UoZMoIWM4Eqh%2Fxo3nrmd%2B%2FDyJNPbifc%2BQWXpO1VRVjfJNcJIgjIAqM6wbnwfBrmljx2ekidOSJysg%2FDinZ0JIrt4%2FPl74&X-Amz-Signature=1c19ef5ddfeffc859ce31fc4eefc6bf206e334c18bf044dc52517d77dc8163a0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCNR3SW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDXNPyWvdJW5xc%2FxmpLw2w%2BEGEEjxn3KOE%2B0AaBrDN0cAiEA70c7MKRB2lRdJFam9Q2ObJYzXeZj1QgQxLihpcr83wwq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOaKA3wWe9G548W8PircAyAFCaNNyY1%2B6mo3RUTt6GtA1%2Fqij1i7mmixbD3yNiM%2BBDYoD%2F8UcygB1Tsrxw%2BwksA38SN4pNW3wAZa9BL9qKc%2B5NIFmZQD9DlQYpC2RPImLdSa6B38Ud5PvPkQYwWuZdGihWrvuRrNfnhcjyI%2FYxNbQt56Pz9xiUSOPxOkaHGUipnstgpb0ct0q4S2rpXzemSxYPjJ%2Bb4GmCcCdXiWWREzPQw5Wc6n%2BKfJSFMkugIfMlrriJGzqWaPOpwGnv9eLA7tGKq8zh3TXXiGaetm7b0jO6yQdBLOEPOQMs0hTYoue6uMOALivQIHv%2BiHzR0wTpiBdnXg9l%2FdNG4vaAzl8F2soq76%2BhgEPhFMU%2Foql76FdER2UTc7oESdvbkGsHm3LxCjykWf1zohV8fdYUFGFrJPoOThsNxgJE7PyTEEkcs2lblsvVTrBwvUE7h86k5XMTsiMW2A2024d8CAG28HZa1TRHSkZ%2Fpb%2F95BdE0uiRL5qHhVuxTQGNR4qmFX3uLj85Kr%2F9oJksqWkA5piioMDcEKYDKMc3VrOfDCqN7SttC9ZxRLybU%2BoKL3wFZbWxuFpewaJp3Cu2l%2FZx29I5VP5k4mJqeyiwalzv9EGaFsshaSIs5DEsMFfAgKvSCzMPu63sAGOqUBmzcAIomNZUxmKJkmW%2FEPYTNfZgOmCjCCM7HzF0ORRbMosOQafdXtMbd0HqkWK4u1L7nn8SJRWWwsm5PPDpcdXQYe8rRI0KthiN6XPaTe5oXrXaJCmt0HuV3YjExRIV7UoZMoIWM4Eqh%2Fxo3nrmd%2B%2FDyJNPbifc%2BQWXpO1VRVjfJNcJIgjIAqM6wbnwfBrmljx2ekidOSJysg%2FDinZ0JIrt4%2FPl74&X-Amz-Signature=2598f923920df5935168925bfe57c446886070ee49b49f76ce521e8f6b9ad828&X-Amz-SignedHeaders=host&x-id=GetObject)

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
