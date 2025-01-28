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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YME2ACHF%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDw%2FYigydEWywqn%2BVpF41swkWUC9i030FpzFI7C0idflAIgZAhe9GLYJYJ4DAcGIsDa8JdgWJ%2B%2BsZWjFcSQqdtMhfwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJ4kq7HkXf6y6KBioCrcA4Yg3RxnH3PbrKDC8n%2BPEXFHGkD7KAmrEoDiMxd0o5mJkG9M%2FQQDbzrKFjfl0DaOeO6skwtHyRqaueG6UOcTfSRCuCXWF0pnCuYrHsrTtoJlyk9j35URxcRB81Ng6Ear4whusH8HUCVBG7BKpggan5Q4BD28iR77B3AzUwpp7KWrYnCFEMtCOubcfe8R4t31a%2F0%2F4RL5oyB%2BeFN8F%2BeyQYQYUp7pvMyG94BxmHlfABX5XkU2qGCbOEgbZjecwk58twAtOJaTOGgqqzw0H6ouNQ1%2B4pLt9v1MKbe%2FlOZmfUnkkn8sTEcQPv3f9aZdC6uwN1BmBYFsqJJT6nAkzcq5%2FAwVHpg9cChPcEiirjdNeMajnNPz%2BiipGTg1DWKk2JnkxF0WFiOJY9yJGRCTRap0VhWHdPaeEtSTZfQzjItmYIKhxeqFDhyNsngVV%2BBuNpFcqe3VVXc3Lv%2BlJm17ZI%2B6jEnLN2EhDogRySapC4h28hthtFgGG1WE%2BJPnFWckXcoxjK7l8ufAJh2RnKxDO6sztepm%2Blf%2B3vgcKvu%2FK3aMX95LnJmMFVK%2FCI1cVn7vDF9S4ejTmkbfz1Atnvu0sh8PBPfOsKOgwwmlHHEo54UNhrscKk9uFHezFMad3eoKMOvp5LwGOqUBtHN8fBJdbG5BhNsRuGRk5lbVx0xHAozQfv%2FlSlS%2B6HOr8h7RcPKlGxN4ViKb%2BkMPcKdgfwkI87x36bHJbBBe%2BFF4Ym1L2BrAhkvMmJlt%2BeulIRvwp6vCELYsItNuCs%2BrS1KzMBO3RnetLPwRUJ178CcM4TU1eUP8t3OhAaWLbRFtIQtgGTZHrf3r4de5V%2Fc1jVVVOYI2aXdwuGrEWPlNmVFiSICM&X-Amz-Signature=99d42c21c6b07a92bd76aa05759fb0c9a5178b6c18888eb53aba10be5e583425&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YME2ACHF%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDw%2FYigydEWywqn%2BVpF41swkWUC9i030FpzFI7C0idflAIgZAhe9GLYJYJ4DAcGIsDa8JdgWJ%2B%2BsZWjFcSQqdtMhfwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJ4kq7HkXf6y6KBioCrcA4Yg3RxnH3PbrKDC8n%2BPEXFHGkD7KAmrEoDiMxd0o5mJkG9M%2FQQDbzrKFjfl0DaOeO6skwtHyRqaueG6UOcTfSRCuCXWF0pnCuYrHsrTtoJlyk9j35URxcRB81Ng6Ear4whusH8HUCVBG7BKpggan5Q4BD28iR77B3AzUwpp7KWrYnCFEMtCOubcfe8R4t31a%2F0%2F4RL5oyB%2BeFN8F%2BeyQYQYUp7pvMyG94BxmHlfABX5XkU2qGCbOEgbZjecwk58twAtOJaTOGgqqzw0H6ouNQ1%2B4pLt9v1MKbe%2FlOZmfUnkkn8sTEcQPv3f9aZdC6uwN1BmBYFsqJJT6nAkzcq5%2FAwVHpg9cChPcEiirjdNeMajnNPz%2BiipGTg1DWKk2JnkxF0WFiOJY9yJGRCTRap0VhWHdPaeEtSTZfQzjItmYIKhxeqFDhyNsngVV%2BBuNpFcqe3VVXc3Lv%2BlJm17ZI%2B6jEnLN2EhDogRySapC4h28hthtFgGG1WE%2BJPnFWckXcoxjK7l8ufAJh2RnKxDO6sztepm%2Blf%2B3vgcKvu%2FK3aMX95LnJmMFVK%2FCI1cVn7vDF9S4ejTmkbfz1Atnvu0sh8PBPfOsKOgwwmlHHEo54UNhrscKk9uFHezFMad3eoKMOvp5LwGOqUBtHN8fBJdbG5BhNsRuGRk5lbVx0xHAozQfv%2FlSlS%2B6HOr8h7RcPKlGxN4ViKb%2BkMPcKdgfwkI87x36bHJbBBe%2BFF4Ym1L2BrAhkvMmJlt%2BeulIRvwp6vCELYsItNuCs%2BrS1KzMBO3RnetLPwRUJ178CcM4TU1eUP8t3OhAaWLbRFtIQtgGTZHrf3r4de5V%2Fc1jVVVOYI2aXdwuGrEWPlNmVFiSICM&X-Amz-Signature=8c8ebd257e1c1c1ccd6e3a60328ce2a5f4e91958a8a5164c6bd10ac02969c2fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
