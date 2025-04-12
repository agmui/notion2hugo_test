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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OH3WUOZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIDN%2FveRWNR2t%2Bi7bPDaMNl%2F3OylnKKovHobQLIsmHdQcAiEApbcDoQtpA0lCyaH1BoB2RAyFrHepMYdRx4aPX16GCQkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInUbaB63Ty1wkcQISrcA56265nQhR2uHbnTiM1%2B4pUOV%2BnvnjdgRKoPW01nravFi5tNFYEjsYNv5fyqOlvrnBCuORMgPvdT93foV3wsxbv6j52adsoMcsbcCDZEoUiLS2hBDtGOOkCgjoVP%2Bd6y1dJB7zPAqJpAZ3fDiKwfGUG419ZKuL6pBEVUbOrHnbniMRG041SWP29MZlKAqFIb%2FlIXBK6G3ZSEjQKMUcTN9EzYKDZLy9ylUGcnD0ESXc0qcviisLz6Xr348wY%2F9fwUc%2FPyEfyBkJx6JDxq%2BK3VO%2BUxzmHaM5sXvZeOjL4LCCTW1QjRsS5VCpaX0BXIU7d9ykHcA6IjCQSpHxHlagsfUh7SmjZYTHYp%2FDGJhkh%2F3nK4K3IXh5%2BXFrNh5cxAiPZyLa5idzBB%2Bb68kHD1MSCrzYjOfftPVu1iuLUQWs4uDKxBwoxRHIbTXIBRdwXiE8%2FWOgTJy%2FS7j2FH9kEfVCvm2Cn5t3yv15qOGGn1cYuPRnbBeIAan%2Fv5DF65Crp04uRS25gROxC6urIs3McZTcqs%2F2BXpJKiqaD9CInhgMrp4IEdWCBOG95wEz4aWzWUOh78rMVrMIq9sFuQZTmDK2onj38IRSHTHMsDtGoc3cj0CHnhYFnk5L7el028EB8MMISn6L8GOqUB1F29Diewd5OMk2auTMgN3KOfCyq8sefgFumws88GGSUiMBR1KuqiGN8BoKu9iodZtRzS1wIL1A%2B9NTY9A%2B7l5EyMyRDTE02HS1ehq7B19h0qqWbFr3P9N9BmqJTECvE0%2B%2BL0oBvJHhAlkWvWx%2Bq%2FYtdYoZiCBUgBGc8BWzF%2FuavyJlo5jsOWw0ML0ud17tg%2BW%2F3ZHU9GXXyiqApB1iinR%2B4A%2FPYy&X-Amz-Signature=d21554e0b9f1c8319d44eb5ee06ea8539ef8e1d1af64908e7b763aa9cb1224bb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OH3WUOZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIDN%2FveRWNR2t%2Bi7bPDaMNl%2F3OylnKKovHobQLIsmHdQcAiEApbcDoQtpA0lCyaH1BoB2RAyFrHepMYdRx4aPX16GCQkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInUbaB63Ty1wkcQISrcA56265nQhR2uHbnTiM1%2B4pUOV%2BnvnjdgRKoPW01nravFi5tNFYEjsYNv5fyqOlvrnBCuORMgPvdT93foV3wsxbv6j52adsoMcsbcCDZEoUiLS2hBDtGOOkCgjoVP%2Bd6y1dJB7zPAqJpAZ3fDiKwfGUG419ZKuL6pBEVUbOrHnbniMRG041SWP29MZlKAqFIb%2FlIXBK6G3ZSEjQKMUcTN9EzYKDZLy9ylUGcnD0ESXc0qcviisLz6Xr348wY%2F9fwUc%2FPyEfyBkJx6JDxq%2BK3VO%2BUxzmHaM5sXvZeOjL4LCCTW1QjRsS5VCpaX0BXIU7d9ykHcA6IjCQSpHxHlagsfUh7SmjZYTHYp%2FDGJhkh%2F3nK4K3IXh5%2BXFrNh5cxAiPZyLa5idzBB%2Bb68kHD1MSCrzYjOfftPVu1iuLUQWs4uDKxBwoxRHIbTXIBRdwXiE8%2FWOgTJy%2FS7j2FH9kEfVCvm2Cn5t3yv15qOGGn1cYuPRnbBeIAan%2Fv5DF65Crp04uRS25gROxC6urIs3McZTcqs%2F2BXpJKiqaD9CInhgMrp4IEdWCBOG95wEz4aWzWUOh78rMVrMIq9sFuQZTmDK2onj38IRSHTHMsDtGoc3cj0CHnhYFnk5L7el028EB8MMISn6L8GOqUB1F29Diewd5OMk2auTMgN3KOfCyq8sefgFumws88GGSUiMBR1KuqiGN8BoKu9iodZtRzS1wIL1A%2B9NTY9A%2B7l5EyMyRDTE02HS1ehq7B19h0qqWbFr3P9N9BmqJTECvE0%2B%2BL0oBvJHhAlkWvWx%2Bq%2FYtdYoZiCBUgBGc8BWzF%2FuavyJlo5jsOWw0ML0ud17tg%2BW%2F3ZHU9GXXyiqApB1iinR%2B4A%2FPYy&X-Amz-Signature=beb15ac468b7aed08b253ade6a6bd2dcfb720291cab0bfec51e92d0a97133231&X-Amz-SignedHeaders=host&x-id=GetObject)

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
