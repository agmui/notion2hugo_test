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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RNIFDO7%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4ebZAZI4JC3KTza9Sth3KcBlXqXCOGSgOw%2BVdm9VvBAiAXSikNIof0%2FaD8Fy0sH7rdTkBQ0KO%2BPd%2BzaEhkYlQ%2B3Cr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMSKLi08anm8p2XXIJKtwDY5ItoEz%2FvrvWgAKEX6UeqB20tm1Q4hYBHzObepccsVcQ0HXzB%2BwF%2FVkJ0geANbv%2FqjCwns4dh%2F7MasbgeomulLF3MLYc%2BY8d6OePihUoe6i1D3rPTgBt%2FfPgKiZ047DrGsqoswKllzwV7UQE%2FXpwTdnkGlQlRYoJotmXQbpfckiiyRiMvPON7x1HIWUbHHVWWYgL%2F%2FwQj9b6Z7vHRyB01yjgVW3xzZz9Tox5XqN%2F8i0vCNZ2VI5MqktN5HYCWN5Q0cZBSy%2BTPKvcObkFU%2FKe1dbqYCC%2FvhrPgBWdLPTUniTsQQWVuAB%2BQYFOctJns82ck0YxQg2iHlNezmxZCfKHJH7I1TcB0rEdvgBnRzOu5QP2%2Fh%2FRhcYpeae3MsmrwAWDroelIS1hrGbTB97fsZT5ZHxe01eOkKNwValEJoJstBLYYvREUHjnD5uesoFhZ1i%2B54G0PDBmijZVa%2F9o5OvkLYTSBzYqzzh3B%2BZ8Z4ie0rwS%2BKHZV%2B7Q1Hmb08uaUkkfcd1CvT%2BbemRl8d%2F3zAi%2BA36De23CECNWVCS0dsifa4hlTi0Qs4OjFNUuLgzWzEAiSM3cy0jJV65BvPdNblvc3QGP7rBaBKRDc6ax66p0txtkvGrAIfPqI9MOGEow9ZyvwAY6pgF7xwhcX6OyquMPJoxm6yqp9Zxp2UTH3bC23jokBzPcTJCit0MJ7uU%2FPYTaSslCGiWs3ZD9Wyl9J7BAPNZoUSPr2nOSkWfjkz1nai0bXqCFT%2Fgs1dVUwdrKoSv0H6I5RphNk0NqGcXmLuon5e7wg5tfGWmrhQfDScxHCtPJL6tSFs3nmRt9e%2FVs67Lfbjp6B9D7bWUIzxuLCaTwkN1ddNjJtRP8LgtX&X-Amz-Signature=4df3ed699b6d18ea900326679c9b2387e26f1e80155f89589c7fc2621d91b8c7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RNIFDO7%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4ebZAZI4JC3KTza9Sth3KcBlXqXCOGSgOw%2BVdm9VvBAiAXSikNIof0%2FaD8Fy0sH7rdTkBQ0KO%2BPd%2BzaEhkYlQ%2B3Cr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMSKLi08anm8p2XXIJKtwDY5ItoEz%2FvrvWgAKEX6UeqB20tm1Q4hYBHzObepccsVcQ0HXzB%2BwF%2FVkJ0geANbv%2FqjCwns4dh%2F7MasbgeomulLF3MLYc%2BY8d6OePihUoe6i1D3rPTgBt%2FfPgKiZ047DrGsqoswKllzwV7UQE%2FXpwTdnkGlQlRYoJotmXQbpfckiiyRiMvPON7x1HIWUbHHVWWYgL%2F%2FwQj9b6Z7vHRyB01yjgVW3xzZz9Tox5XqN%2F8i0vCNZ2VI5MqktN5HYCWN5Q0cZBSy%2BTPKvcObkFU%2FKe1dbqYCC%2FvhrPgBWdLPTUniTsQQWVuAB%2BQYFOctJns82ck0YxQg2iHlNezmxZCfKHJH7I1TcB0rEdvgBnRzOu5QP2%2Fh%2FRhcYpeae3MsmrwAWDroelIS1hrGbTB97fsZT5ZHxe01eOkKNwValEJoJstBLYYvREUHjnD5uesoFhZ1i%2B54G0PDBmijZVa%2F9o5OvkLYTSBzYqzzh3B%2BZ8Z4ie0rwS%2BKHZV%2B7Q1Hmb08uaUkkfcd1CvT%2BbemRl8d%2F3zAi%2BA36De23CECNWVCS0dsifa4hlTi0Qs4OjFNUuLgzWzEAiSM3cy0jJV65BvPdNblvc3QGP7rBaBKRDc6ax66p0txtkvGrAIfPqI9MOGEow9ZyvwAY6pgF7xwhcX6OyquMPJoxm6yqp9Zxp2UTH3bC23jokBzPcTJCit0MJ7uU%2FPYTaSslCGiWs3ZD9Wyl9J7BAPNZoUSPr2nOSkWfjkz1nai0bXqCFT%2Fgs1dVUwdrKoSv0H6I5RphNk0NqGcXmLuon5e7wg5tfGWmrhQfDScxHCtPJL6tSFs3nmRt9e%2FVs67Lfbjp6B9D7bWUIzxuLCaTwkN1ddNjJtRP8LgtX&X-Amz-Signature=4bb5bf78ff141ce4a6499486e4d0b0545a6e76f2cef0370dedb15cee0047feac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
