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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6WV2ZFL%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU1526ONprsTvdykDHFXoYwupecXsfpvAjBPNMDav43gIhAJnOQOZ9NyCZoCmu0IPfn6mFJT%2F3d8WGsyhMpqYgkLppKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw6MK8HINqsQzIJ%2Fcq3AOiMf7QM6baaMkqGU5I8FV1DMgJmPuXj87vTi1Xu81tPmD77AHtVt4ZiWk6tVkhobJ4opozoIAwzsBzAD1hn9LqoQplTESw%2F8X0AAnNnXBIwfHIbHLWPA9UEMeEZFu5mI%2BIE2Pozds63uLX%2B8MV%2BXrScqnSB3aCHDSQGmddlP5OrBItkudFzJzi1wZ3kooSFZAPDN4PFYEq6EgsQrXEyM8kgpUjs%2Fi2S9QLO95HNOuHqSMsTMvSx3nHMUh6qWMzy%2FZguXh5Km9BSDrZDnVMugEWnk8gg4bHYVP7y2LEN0R%2BAHWzhMvt0uYpdDk%2FHXAN7jmjZQrkhDQFWZjT30zns56wRzpl%2FM6P4kp1FY4%2F2I%2F6ZF6wkMdRsq4hASsWGvycnJhn4apaMKBDtVNdxiv5q3wuCuQcsC4a5FLVDwuxH6T8NZMApCp0XHqpyQ%2Bq8uyEJPQsWAxO3A3%2BZNzjy4uOQZz9abRr3zlEzFOybbiHZssoOOYMeLqibPeO4w2eoU2kXPYVDfT0dUCA95RW8I%2FBMMPl1C0gYZp3iETEWVNIsF%2BiKY6GZaq8QodEgAlbDQGaA8xqKRqvpKYyxG7QpEw9oL7DI46jHTn64vc4Q1CkrDgnDl0y9wcZhMqeHFyIZTD%2F%2FcLDBjqkAdHHItJHEkxrpl4B1qteOGupktfMEZ2P05WowZ6ln63a85elB3LxiJuWYE2to169JLbbvghNHLIyn07suhBzK8O3XJhKxJ92TCBxXBuXxQdLu9QLCMHyqZlBa4pT828dCl5TYGEdKHpvCxX8fTefWdcYHeoH7UEGopvbRq2%2Bm5nDqpu4lClS5m7aW8ivxEbSZOLOUSFU7Np7LOdWYMvoLa%2FGBA0y&X-Amz-Signature=8fe241ab906660ec8252f448d061c24286649eace95606077d2bd85aafce8439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6WV2ZFL%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU1526ONprsTvdykDHFXoYwupecXsfpvAjBPNMDav43gIhAJnOQOZ9NyCZoCmu0IPfn6mFJT%2F3d8WGsyhMpqYgkLppKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw6MK8HINqsQzIJ%2Fcq3AOiMf7QM6baaMkqGU5I8FV1DMgJmPuXj87vTi1Xu81tPmD77AHtVt4ZiWk6tVkhobJ4opozoIAwzsBzAD1hn9LqoQplTESw%2F8X0AAnNnXBIwfHIbHLWPA9UEMeEZFu5mI%2BIE2Pozds63uLX%2B8MV%2BXrScqnSB3aCHDSQGmddlP5OrBItkudFzJzi1wZ3kooSFZAPDN4PFYEq6EgsQrXEyM8kgpUjs%2Fi2S9QLO95HNOuHqSMsTMvSx3nHMUh6qWMzy%2FZguXh5Km9BSDrZDnVMugEWnk8gg4bHYVP7y2LEN0R%2BAHWzhMvt0uYpdDk%2FHXAN7jmjZQrkhDQFWZjT30zns56wRzpl%2FM6P4kp1FY4%2F2I%2F6ZF6wkMdRsq4hASsWGvycnJhn4apaMKBDtVNdxiv5q3wuCuQcsC4a5FLVDwuxH6T8NZMApCp0XHqpyQ%2Bq8uyEJPQsWAxO3A3%2BZNzjy4uOQZz9abRr3zlEzFOybbiHZssoOOYMeLqibPeO4w2eoU2kXPYVDfT0dUCA95RW8I%2FBMMPl1C0gYZp3iETEWVNIsF%2BiKY6GZaq8QodEgAlbDQGaA8xqKRqvpKYyxG7QpEw9oL7DI46jHTn64vc4Q1CkrDgnDl0y9wcZhMqeHFyIZTD%2F%2FcLDBjqkAdHHItJHEkxrpl4B1qteOGupktfMEZ2P05WowZ6ln63a85elB3LxiJuWYE2to169JLbbvghNHLIyn07suhBzK8O3XJhKxJ92TCBxXBuXxQdLu9QLCMHyqZlBa4pT828dCl5TYGEdKHpvCxX8fTefWdcYHeoH7UEGopvbRq2%2Bm5nDqpu4lClS5m7aW8ivxEbSZOLOUSFU7Np7LOdWYMvoLa%2FGBA0y&X-Amz-Signature=33ce2b7175b867db533b59a553d69572050cc03e3b433ebfda86adc797cf0749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
