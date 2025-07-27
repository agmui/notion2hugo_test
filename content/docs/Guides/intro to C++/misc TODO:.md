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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJ2JHUL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFoWHzU6zUfhbluKsg75Rb9V%2BNDmtk1C2kQvHsjpUnahAiEAnFv6KM2K5YaPLakf499wMPSfK2VvRrnyhtqdf1bSv6oq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJd8swB%2Bde%2FYMmCFgCrcAwDfq3ZgwUOnWeOGYWTKF%2BrW4trl%2FrRQse%2F2arBCxTwDIeQ%2FC3O4M0ifOEHegW2TIj8A1XZs66PPAVzM9fhXVE5UcMU%2Fy0muYQHGa4zWhoU%2F7hdVu3%2BtVmNcPEQ1LFBeUISIIdwVNRiYkbhlSge4WN2PSQ%2FyAZ8tt93rka5qcQiQb2v88cKIGxVNr2wNSg4Agt2yJZT8cGFHJdilSOUgLTD%2Fgwc9bzlQ8DiEDDQCBjHo%2B7GbcXPW5mSyj9Yw1X0C9XtHl6NXzj1l87Z48GFgcsft%2Ba8n6rdpF%2Bhho3yCiFH084MiYYVUQ03xzD7PrsYc5hNZieHuTjSY9B0hYGue4tovQvgrWdXDN2oPDOHanNPtpQNLTwEzymTgu9PFSOMf8MjNTwPhQqM06R%2Fxg6KBKGD5aoh4W8mfIJUzLNkFq6%2BUOr6MdrVlOdAv8BsrvjpSGJJ%2FlQ2FlOQH9N4Ksg7wC8luf7r22wnSm%2BH0CmEMDPmYFsajKjuQo66nN%2BkEoDYV65bbxQCTnonR0F20lctFAM1AK%2FNRW4siIagta2vBRFAxNEoQF7C1axCDI04cugrr7GTTi8drx%2FiXDmzeooBAQg0J3xuH9a6IkUfxUMrJ1sYAaiX%2FeoQV7teAdU0HMJrgl8QGOqUBpY%2F1r6%2Bq4LYENJdnkGJzwFDtdwnwqm2uGoDYlCp0LRvpw8NfUvG8lj%2F7cxevc5tRANWvcsUDW2w1CYyY8baRbXB9kZ1hvgZFGG3efgdZVTbvNUMd3on5jpjObGu6FsULayUpkG%2BrjBVuwY6PDI6xkj0VIrFwDiECnNNWYsXBKaQjEspQRvAYCDdrljjB2WVai4D5o8L6nffmewwx3iqF%2F4uNn9Ge&X-Amz-Signature=cce28091063601511796754d999407afe32e6c4736af43c72004e5ee1ccf1dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJ2JHUL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFoWHzU6zUfhbluKsg75Rb9V%2BNDmtk1C2kQvHsjpUnahAiEAnFv6KM2K5YaPLakf499wMPSfK2VvRrnyhtqdf1bSv6oq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJd8swB%2Bde%2FYMmCFgCrcAwDfq3ZgwUOnWeOGYWTKF%2BrW4trl%2FrRQse%2F2arBCxTwDIeQ%2FC3O4M0ifOEHegW2TIj8A1XZs66PPAVzM9fhXVE5UcMU%2Fy0muYQHGa4zWhoU%2F7hdVu3%2BtVmNcPEQ1LFBeUISIIdwVNRiYkbhlSge4WN2PSQ%2FyAZ8tt93rka5qcQiQb2v88cKIGxVNr2wNSg4Agt2yJZT8cGFHJdilSOUgLTD%2Fgwc9bzlQ8DiEDDQCBjHo%2B7GbcXPW5mSyj9Yw1X0C9XtHl6NXzj1l87Z48GFgcsft%2Ba8n6rdpF%2Bhho3yCiFH084MiYYVUQ03xzD7PrsYc5hNZieHuTjSY9B0hYGue4tovQvgrWdXDN2oPDOHanNPtpQNLTwEzymTgu9PFSOMf8MjNTwPhQqM06R%2Fxg6KBKGD5aoh4W8mfIJUzLNkFq6%2BUOr6MdrVlOdAv8BsrvjpSGJJ%2FlQ2FlOQH9N4Ksg7wC8luf7r22wnSm%2BH0CmEMDPmYFsajKjuQo66nN%2BkEoDYV65bbxQCTnonR0F20lctFAM1AK%2FNRW4siIagta2vBRFAxNEoQF7C1axCDI04cugrr7GTTi8drx%2FiXDmzeooBAQg0J3xuH9a6IkUfxUMrJ1sYAaiX%2FeoQV7teAdU0HMJrgl8QGOqUBpY%2F1r6%2Bq4LYENJdnkGJzwFDtdwnwqm2uGoDYlCp0LRvpw8NfUvG8lj%2F7cxevc5tRANWvcsUDW2w1CYyY8baRbXB9kZ1hvgZFGG3efgdZVTbvNUMd3on5jpjObGu6FsULayUpkG%2BrjBVuwY6PDI6xkj0VIrFwDiECnNNWYsXBKaQjEspQRvAYCDdrljjB2WVai4D5o8L6nffmewwx3iqF%2F4uNn9Ge&X-Amz-Signature=ddf9310d52c6026de0bb5ec2169bfa4637d9665e059f566c24edec3abc27af64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
