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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTGYEMI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD1CGksmgU%2Futq7NLvMzGUyctt%2FiQ9d6Je61cjt%2BHWn4AIhAJeEEHyzkBiPQDw6WgX%2FIgbKI0HAo1X9KqIKCdm5OA28Kv8DCBwQABoMNjM3NDIzMTgzODA1IgxG%2BJdygTfcG%2BVFIJEq3ANAytTBTzWuPjQm8tjFL3kuvyYQdEVeqcIz2a6nG5zq2FUuRMttVKmu9CTUPO%2FFJ2fQCut2Dz%2FE0C3XOgY3FS%2FjF3pKuTDZUS%2BUPyNnoVOR0%2B9I%2BBJUdVIfcseTwAQjSLe90hn5cs6QEkOyH2Nf%2Bx9GIzndamUpk6DDk4W46trjo1ww1Cj5CEPKGBrUj1tpaPK7N3U69Xx2C2qe7G2zopkqRz4lQWiB68J5ySmY6Ie2xTPTnfa4ixyerntBGhNpGkkGedz6Fz6h7%2BE179sscIgFC5f9iAlX3P5zFJI3TlTKnnKaciP%2BsRiOAjV1p87p7Oxg6WuWaMbmC0nKWEp7Mq6aqgtNyDPfGeuyStdMEKP3Tb0HJCG2amAnnTUzfLr7Qob4VQIYwxvaGLu%2BZmBFHFZ8ITbzeKtD550y987WauILg%2FELymxA6OPZuYMhYHvh0gwMfTnfmrLwsq1OrlU2dojz%2BUS3t%2BV9VHBmSjsUznnde%2FPQp5vOrigS%2Bu%2FNGIra%2Fa970vY%2Fsae4ysuYK0yEBBMtR%2BlLGuIsktQYO%2F6kiJAS%2BzWjViReO2tMKWMJ3tA0txfxzw%2B62BmtMV%2BD6%2FnhnDzvz00H75npzZiBPp3Wlp0Xn2mG0TrZm0oCpDcvpTDDhf3BBjqkAeCvO6rtZ2NO4ezcftwkEbHMV09TbCGoYdueZOUBXJKD14UzhTHYSYpdkE2XilywxOC5mQF6R%2Biu6a5bReAP6n1CEfSrYuNYUx8a%2BVGr59yXtoifKYynr%2BfHj4oT1LcdUfUYur8gVjH7zL%2FFHU5%2FsdEp8oTW82i8bA%2BnXlLOAuaxzsOUnr%2BVIDm2Beudb1uhkhcNVNY%2BHhq%2FOW31h8GxvRUNsT%2FK&X-Amz-Signature=99bec5e1ad0301f7c25e84d1146b9771f1c67c1406138804871c6b6f67d26274&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTGYEMI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD1CGksmgU%2Futq7NLvMzGUyctt%2FiQ9d6Je61cjt%2BHWn4AIhAJeEEHyzkBiPQDw6WgX%2FIgbKI0HAo1X9KqIKCdm5OA28Kv8DCBwQABoMNjM3NDIzMTgzODA1IgxG%2BJdygTfcG%2BVFIJEq3ANAytTBTzWuPjQm8tjFL3kuvyYQdEVeqcIz2a6nG5zq2FUuRMttVKmu9CTUPO%2FFJ2fQCut2Dz%2FE0C3XOgY3FS%2FjF3pKuTDZUS%2BUPyNnoVOR0%2B9I%2BBJUdVIfcseTwAQjSLe90hn5cs6QEkOyH2Nf%2Bx9GIzndamUpk6DDk4W46trjo1ww1Cj5CEPKGBrUj1tpaPK7N3U69Xx2C2qe7G2zopkqRz4lQWiB68J5ySmY6Ie2xTPTnfa4ixyerntBGhNpGkkGedz6Fz6h7%2BE179sscIgFC5f9iAlX3P5zFJI3TlTKnnKaciP%2BsRiOAjV1p87p7Oxg6WuWaMbmC0nKWEp7Mq6aqgtNyDPfGeuyStdMEKP3Tb0HJCG2amAnnTUzfLr7Qob4VQIYwxvaGLu%2BZmBFHFZ8ITbzeKtD550y987WauILg%2FELymxA6OPZuYMhYHvh0gwMfTnfmrLwsq1OrlU2dojz%2BUS3t%2BV9VHBmSjsUznnde%2FPQp5vOrigS%2Bu%2FNGIra%2Fa970vY%2Fsae4ysuYK0yEBBMtR%2BlLGuIsktQYO%2F6kiJAS%2BzWjViReO2tMKWMJ3tA0txfxzw%2B62BmtMV%2BD6%2FnhnDzvz00H75npzZiBPp3Wlp0Xn2mG0TrZm0oCpDcvpTDDhf3BBjqkAeCvO6rtZ2NO4ezcftwkEbHMV09TbCGoYdueZOUBXJKD14UzhTHYSYpdkE2XilywxOC5mQF6R%2Biu6a5bReAP6n1CEfSrYuNYUx8a%2BVGr59yXtoifKYynr%2BfHj4oT1LcdUfUYur8gVjH7zL%2FFHU5%2FsdEp8oTW82i8bA%2BnXlLOAuaxzsOUnr%2BVIDm2Beudb1uhkhcNVNY%2BHhq%2FOW31h8GxvRUNsT%2FK&X-Amz-Signature=099743a9d72faf5d89c263d39c2b5e2876171abf11b8afbdc4e90c1458f04793&X-Amz-SignedHeaders=host&x-id=GetObject)

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
