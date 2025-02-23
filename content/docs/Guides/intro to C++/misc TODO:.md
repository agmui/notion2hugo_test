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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZACVI5B7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUDliwMC9iaK9aM26xpq45EcVerehWWVbvXLednUhBkAiEAliJpn9Pzn%2Bnzp%2B7B4UwpxDeJ0xNXfr2Msp%2FakIU0qpsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BDLT6kcTaIJkC6MCrcA0k4ahxzR540lAz11b7X4oRkErodGUeqEUv1RzuiVyVA1s89KjOdWBdYdkjB6xicGv6%2F3l8IxhL%2BLjM5ynAfC0hFOzAo1OH68F0SRu0%2Fj48RnWr7NAOdG6ao8dS66z%2B826m%2Fu%2BkG%2BAByLt1HYIo6eH19f6AgAhO%2F2LYI5bSEYEorKSIOfm6u7RiHdkKVDD2FF2WlInZWOHgXekT7xO%2Fu4x%2B2ds%2BFt%2FnD2X4S933nGNczRh0%2FglLcRH9m2ZBX7NY4Si8LdEHLFhNI%2BCz4%2FZ0O7VMfoTGiFJj9Q32gu6AUVSsa3tcqlug9EHsDYVyVQ8IAOaOIMgvfThjtFHhVWjNmeMm89HpYtY%2FHw%2B4tOF%2BpuEOchu0TbEp3Su9ZyGCy8OeTynFPZb8uVutEnoxOfMw941vPvcZuBGZBXJ1IzklLsN19cctFpLTyvo2SIloEIkc5YqfiewBrunn3p8EUlAmOkAsOjVEkueYp5ZGGXzV5XbFR9VlqW9595o8rSY0W%2BihQjxVIEApASb2X2g80do%2Fmc4pl19Uh0S4Z6%2B4rCwhzaCycbP4xeGF3NasHj7xASdsHIDyuBkCOt6l1Cs6nH6hvJ0JFHu2OcLIkMLS50W2P7AiqLYroxYqgeDDMTBqSMKmm6b0GOqUBGZf52bVOstCMRdeM7F%2FBLzDIBf%2F1XNWvScETmB8lm%2FAZSkfQHwKkpZyWTcZO3wJmMYvYtr378qzTPlBFzuj%2Bu4YMFixx658wmHdPzmNd%2F32mBAk0tgitgXyEc2PbidbP8QlqwybRv4HEYFp2zZ%2FkDPut68NMuzZjKRRVr86V93iWCgq0azX0BU6Lf1yJO227zRkgf2j%2FQmKXDQOZhq%2BHHgb5o13c&X-Amz-Signature=cbcfb17e115786893f6efe49216067988ec67c157c42ae9648b3d8b4046c0193&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZACVI5B7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUDliwMC9iaK9aM26xpq45EcVerehWWVbvXLednUhBkAiEAliJpn9Pzn%2Bnzp%2B7B4UwpxDeJ0xNXfr2Msp%2FakIU0qpsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BDLT6kcTaIJkC6MCrcA0k4ahxzR540lAz11b7X4oRkErodGUeqEUv1RzuiVyVA1s89KjOdWBdYdkjB6xicGv6%2F3l8IxhL%2BLjM5ynAfC0hFOzAo1OH68F0SRu0%2Fj48RnWr7NAOdG6ao8dS66z%2B826m%2Fu%2BkG%2BAByLt1HYIo6eH19f6AgAhO%2F2LYI5bSEYEorKSIOfm6u7RiHdkKVDD2FF2WlInZWOHgXekT7xO%2Fu4x%2B2ds%2BFt%2FnD2X4S933nGNczRh0%2FglLcRH9m2ZBX7NY4Si8LdEHLFhNI%2BCz4%2FZ0O7VMfoTGiFJj9Q32gu6AUVSsa3tcqlug9EHsDYVyVQ8IAOaOIMgvfThjtFHhVWjNmeMm89HpYtY%2FHw%2B4tOF%2BpuEOchu0TbEp3Su9ZyGCy8OeTynFPZb8uVutEnoxOfMw941vPvcZuBGZBXJ1IzklLsN19cctFpLTyvo2SIloEIkc5YqfiewBrunn3p8EUlAmOkAsOjVEkueYp5ZGGXzV5XbFR9VlqW9595o8rSY0W%2BihQjxVIEApASb2X2g80do%2Fmc4pl19Uh0S4Z6%2B4rCwhzaCycbP4xeGF3NasHj7xASdsHIDyuBkCOt6l1Cs6nH6hvJ0JFHu2OcLIkMLS50W2P7AiqLYroxYqgeDDMTBqSMKmm6b0GOqUBGZf52bVOstCMRdeM7F%2FBLzDIBf%2F1XNWvScETmB8lm%2FAZSkfQHwKkpZyWTcZO3wJmMYvYtr378qzTPlBFzuj%2Bu4YMFixx658wmHdPzmNd%2F32mBAk0tgitgXyEc2PbidbP8QlqwybRv4HEYFp2zZ%2FkDPut68NMuzZjKRRVr86V93iWCgq0azX0BU6Lf1yJO227zRkgf2j%2FQmKXDQOZhq%2BHHgb5o13c&X-Amz-Signature=72e515f78f068a13d95c089ed341a85ba8534dcf1fb0819eb33547256a5070c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
