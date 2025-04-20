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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFXELWJ6%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIGGlQx74z4n%2FtE%2FOI3wF9M965DjV5hphbp1lINZ0XaQ%2BAiEAwNQxHeXKJ8RTipZCUwgaFjIhj1fRsBPTO6pULYEiAHoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpciKYDIHqlxhgT0SrcAxyMQDwSHkP9olshWpN6yOwIsHV%2FRmNx8jMGQywKrxauIDWHpoj7RPfvfJ3Ga8L%2FhxwTqACjwoKUpcH8J3%2FugjfVDimd0jrDTSYQIkWf%2FQUcLgj5bLXGihkZ9Ulm8zWAtovlFoCqIHNR4iuMIpD0vVkNKr18U7XvFJtf%2FWlkRn6dKZ3Z6cc8rb4mF1%2FnveBijwxcaokocjf4J6cdJbAh1vnJTZWKhVFFl2gqmkJ%2FuWW9hpjQ04lZ7n%2FfuizHvv%2BJ1x59zXLtnLXTvIDa8tnFzOzlq9rQ8oywiz6ONttOJAZabc8QClpko%2FXuIcj%2BaEDGpCyZqZrpuH14iz1qvAnlFRzeRS1c73ChM%2BowlAC5pEnV58QyLZ7si7xuN0oE%2BHmlq9PjpLynBqSX6%2BLhlhJ2eAlDzvwkcr70or5JdHiYkZjEPpu%2BbEXHFi2Fn7FZbGBK9tNT%2BJoYfk3jhWrPh2mu0tneWHyKyT7IgKUbL3ORYSbkTCjagO41n%2F5uceRWPJeVOgcfSZIsWAr8h0HyFZaN2TltRlKJk3mQ9DfwqnkaEzWLiuSsS%2FyFT1bce1vjo2AwVUDelbSUwQtCzBmcgH9YeRIb1sltc1xFI0eHbsgE%2BHnjgbnoveIGZbv8T2nbMMqdksAGOqUBFPW1bkAi1pqNe9VXpWko4xF4jQoEKTPDeXetftkHK4rrU3yibMvT8ts5rmhKAXDRuBjoiMyDFJ27bk9u%2F4XkRIMBuPj9WxoRIGtaYy7M%2F8sRYNhTMKyDa92ZbHjZgzLyimNnSXAF6oVB4KOlpOmSUsY4C17h0jtj20oDX7lACeYTpJEPTjuWmXbddi1JDfR8Hv14oYbjqgJuWX%2FWFbnhU6MpvdUb&X-Amz-Signature=e645e1951535bae817ed68d69a91d2e1891bf99a113a93b61265070bd71f0f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFXELWJ6%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIGGlQx74z4n%2FtE%2FOI3wF9M965DjV5hphbp1lINZ0XaQ%2BAiEAwNQxHeXKJ8RTipZCUwgaFjIhj1fRsBPTO6pULYEiAHoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpciKYDIHqlxhgT0SrcAxyMQDwSHkP9olshWpN6yOwIsHV%2FRmNx8jMGQywKrxauIDWHpoj7RPfvfJ3Ga8L%2FhxwTqACjwoKUpcH8J3%2FugjfVDimd0jrDTSYQIkWf%2FQUcLgj5bLXGihkZ9Ulm8zWAtovlFoCqIHNR4iuMIpD0vVkNKr18U7XvFJtf%2FWlkRn6dKZ3Z6cc8rb4mF1%2FnveBijwxcaokocjf4J6cdJbAh1vnJTZWKhVFFl2gqmkJ%2FuWW9hpjQ04lZ7n%2FfuizHvv%2BJ1x59zXLtnLXTvIDa8tnFzOzlq9rQ8oywiz6ONttOJAZabc8QClpko%2FXuIcj%2BaEDGpCyZqZrpuH14iz1qvAnlFRzeRS1c73ChM%2BowlAC5pEnV58QyLZ7si7xuN0oE%2BHmlq9PjpLynBqSX6%2BLhlhJ2eAlDzvwkcr70or5JdHiYkZjEPpu%2BbEXHFi2Fn7FZbGBK9tNT%2BJoYfk3jhWrPh2mu0tneWHyKyT7IgKUbL3ORYSbkTCjagO41n%2F5uceRWPJeVOgcfSZIsWAr8h0HyFZaN2TltRlKJk3mQ9DfwqnkaEzWLiuSsS%2FyFT1bce1vjo2AwVUDelbSUwQtCzBmcgH9YeRIb1sltc1xFI0eHbsgE%2BHnjgbnoveIGZbv8T2nbMMqdksAGOqUBFPW1bkAi1pqNe9VXpWko4xF4jQoEKTPDeXetftkHK4rrU3yibMvT8ts5rmhKAXDRuBjoiMyDFJ27bk9u%2F4XkRIMBuPj9WxoRIGtaYy7M%2F8sRYNhTMKyDa92ZbHjZgzLyimNnSXAF6oVB4KOlpOmSUsY4C17h0jtj20oDX7lACeYTpJEPTjuWmXbddi1JDfR8Hv14oYbjqgJuWX%2FWFbnhU6MpvdUb&X-Amz-Signature=c61b7cdf80893c0b5e169880f2419bd792c69b946a2cf5dc04577e2603edad3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
