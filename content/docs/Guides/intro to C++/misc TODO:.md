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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5N3TJS%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxLiaFYuBDKAHXYosNgfndV6JA3%2FZXgl%2FwD%2ByC7x4zGwIgNeXtyjk3cA5gI4FMMiELxPkm%2BvGE%2B%2BSoYUSj4w6fgisqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHE%2FE1ZcscFWZSi9CrcA1ayf78bXu9uCL5HA0EEnaX77GNrtJ6Xlj9MlerpbwSqP%2FR4x2ClakDWGRIEIXw1B1PUL0FIOyTSmolirGmb0SNwI7BELTa2%2FX5J3yPmwFYqq%2B9Fp2LP%2FFx0U9UAtnCQsbe9Bofb%2B4fT%2B2sHQILelu5QmOSR1gwetsYIv42F7CBmmC2qQn1D%2FuJkOt3iZ%2BwlYgt6xufKwUxkE6e9YFuIHy7EC6tVA8cXIyqewvBydwjmKHlNvho4qhWFtlA9erFXkS%2FBeKzcR0WDAe9gObNwzUM56%2Bikzk3YHfIyPWpNdv1hhWdjV9zOazzHAgeStO9iTBITysE7pfbrg%2FUHw3joECKdCiXtObk43XynWXiPh0cJatb9PDZozmhX5PGLZF4L2kO%2FApI4Fc2n5zBARL0uHqzyJdBlDhS6x6u%2Bn9jaDVBkU0MRnMpLJ4UEgD4XeSsttlLNVRUVnx0l8gE2Y8KQ2ij22kZvIdcVlsdamLqF0zgViTCxDEBN2m%2BmaF%2FAPYm20MBcBOzTHFo1ItN7btlyMwoVoTtYSncbnDevpYVd0PHkTP0Oot9IUhXK5nKq2VTO8J0EfK431YJ0RpfQ1IgLoqIvMdj09uAji%2Fhuoro39IKTB%2FnVTvV24OFs8pl2MPq5q8EGOqUBjIF2KqXaQbipw5GyvqHKS92Q5CHpJyjisQuvnwnacKbZvBgr1yMAu5bolXgXsdMrAMvpPbX4M7h%2Bj1XmsMY5UbH03GJ%2Bqoa%2Bee92s%2BUHuhxVFXY8vThrdA%2Fwfso5mgoOVKmksF88%2FSANmGC6Ezk0AJvzuqx6VLvslkJ1Wpq8NLpCfLo0r9rEAB2TAUnkYQHGTeWPFcQTDTQdvjCUDwoxjjKeP5qQ&X-Amz-Signature=13c29a2c016e47e2de53292b77d9fa9bdb9a9039b0bd18877694b208fbe7426a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5N3TJS%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxLiaFYuBDKAHXYosNgfndV6JA3%2FZXgl%2FwD%2ByC7x4zGwIgNeXtyjk3cA5gI4FMMiELxPkm%2BvGE%2B%2BSoYUSj4w6fgisqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHE%2FE1ZcscFWZSi9CrcA1ayf78bXu9uCL5HA0EEnaX77GNrtJ6Xlj9MlerpbwSqP%2FR4x2ClakDWGRIEIXw1B1PUL0FIOyTSmolirGmb0SNwI7BELTa2%2FX5J3yPmwFYqq%2B9Fp2LP%2FFx0U9UAtnCQsbe9Bofb%2B4fT%2B2sHQILelu5QmOSR1gwetsYIv42F7CBmmC2qQn1D%2FuJkOt3iZ%2BwlYgt6xufKwUxkE6e9YFuIHy7EC6tVA8cXIyqewvBydwjmKHlNvho4qhWFtlA9erFXkS%2FBeKzcR0WDAe9gObNwzUM56%2Bikzk3YHfIyPWpNdv1hhWdjV9zOazzHAgeStO9iTBITysE7pfbrg%2FUHw3joECKdCiXtObk43XynWXiPh0cJatb9PDZozmhX5PGLZF4L2kO%2FApI4Fc2n5zBARL0uHqzyJdBlDhS6x6u%2Bn9jaDVBkU0MRnMpLJ4UEgD4XeSsttlLNVRUVnx0l8gE2Y8KQ2ij22kZvIdcVlsdamLqF0zgViTCxDEBN2m%2BmaF%2FAPYm20MBcBOzTHFo1ItN7btlyMwoVoTtYSncbnDevpYVd0PHkTP0Oot9IUhXK5nKq2VTO8J0EfK431YJ0RpfQ1IgLoqIvMdj09uAji%2Fhuoro39IKTB%2FnVTvV24OFs8pl2MPq5q8EGOqUBjIF2KqXaQbipw5GyvqHKS92Q5CHpJyjisQuvnwnacKbZvBgr1yMAu5bolXgXsdMrAMvpPbX4M7h%2Bj1XmsMY5UbH03GJ%2Bqoa%2Bee92s%2BUHuhxVFXY8vThrdA%2Fwfso5mgoOVKmksF88%2FSANmGC6Ezk0AJvzuqx6VLvslkJ1Wpq8NLpCfLo0r9rEAB2TAUnkYQHGTeWPFcQTDTQdvjCUDwoxjjKeP5qQ&X-Amz-Signature=c9616834fc40ff0196ed71f7c2911f7b8e4b8ae8d77b9b1aa00850e91b36e0e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
