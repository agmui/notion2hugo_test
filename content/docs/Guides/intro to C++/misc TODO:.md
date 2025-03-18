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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWWAL3H%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGz492uVpHSezEA4xHE%2BXQkjzL5tqnYpOzB3J5YWFuyNAiEAvOgFMHBTHmCp5hlmRkTzKt3nINt1%2BKBFb%2FHbE9jALOcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHtVKCRBQs6%2Bf09lDyrcA0iC8LQqkyjHuMKE9aRZcM%2Fe%2FJ4Dwx5o3qDce%2B6oQfNW52aOw4iZlVpvW%2B9kc2eO%2BHierWPK6diUA6gY48QHXeERrpAX0iiq0r5fDJ77DLWbbaW4%2FIjws3IvmwmzSDWjUIyryZc9Gwl4pKOueVwgU4vpJ5nmPBQ0YM3QXAYZ%2B7GQbliaDnJkJ%2FnduN6E8qnIF73Iq1wP%2BJKwcjS8swWJ%2FKlwPZEpS2RCkIfCS%2B65cW0129LBeigsKx%2FF5B0ogD5wh3Jf6HucR2Bx0Kim9ocKFyFnKoaNmxSGCu9DsqEQzTXA50pnBGTA6R%2F0%2BsXemDG0WjAwMadMTJ65g3LpkQfJNReOhVD2FuMHp01IyPMw1i7U5sIGKocY7XjReMQBbzeP%2Be8RoSSg43hlGnNy%2FqENAJn9Yete7uRyLfw5QlsAVB%2FhaPMnsn8gFpJQ9ZaoPUERov%2Bcjmlw5ozazS3rfxtvTSS8xJ%2FNkvu3L8ku%2B%2F0DC26XFtck%2FdqVM1E9zTPpHdG8uF5onLCC6GgLSmRFiA5UiUYbBKxNVVEoojWHINr3kT1zV%2FHTxCW1bFPaRj4XQyjGBdus6V2FZXIIYghAHNfJ32C1%2B2NtBw0BxQLf6TNejUdPcnHIBAzbHD9yILONMO605r4GOqUB46F2WQ7hJBbNWSAgv%2B0F3PgIzm0Z3eljOxA0RGmA7jYsTUuW%2FqF6ekBGbMrPxS4veCNrUAxpQoHQ2wh7Q7xGLEgrBLq3AF6D9dOJ9BYRDi2YorEHV5pXFlSkyOVbciOAKgv2YZwj%2BI2bAaBbjHLWyKat0vXiEA9MYgA%2FspL9gvz6rPciDimlvhGeh9%2Fxbo1E4fgrIXHdHMtZh6ynth%2FGVaY8UPAd&X-Amz-Signature=ed42c8958dd41cfe68a67f8fbe7d5976813c9787c346a223eb63686b0313ff32&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWWAL3H%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGz492uVpHSezEA4xHE%2BXQkjzL5tqnYpOzB3J5YWFuyNAiEAvOgFMHBTHmCp5hlmRkTzKt3nINt1%2BKBFb%2FHbE9jALOcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHtVKCRBQs6%2Bf09lDyrcA0iC8LQqkyjHuMKE9aRZcM%2Fe%2FJ4Dwx5o3qDce%2B6oQfNW52aOw4iZlVpvW%2B9kc2eO%2BHierWPK6diUA6gY48QHXeERrpAX0iiq0r5fDJ77DLWbbaW4%2FIjws3IvmwmzSDWjUIyryZc9Gwl4pKOueVwgU4vpJ5nmPBQ0YM3QXAYZ%2B7GQbliaDnJkJ%2FnduN6E8qnIF73Iq1wP%2BJKwcjS8swWJ%2FKlwPZEpS2RCkIfCS%2B65cW0129LBeigsKx%2FF5B0ogD5wh3Jf6HucR2Bx0Kim9ocKFyFnKoaNmxSGCu9DsqEQzTXA50pnBGTA6R%2F0%2BsXemDG0WjAwMadMTJ65g3LpkQfJNReOhVD2FuMHp01IyPMw1i7U5sIGKocY7XjReMQBbzeP%2Be8RoSSg43hlGnNy%2FqENAJn9Yete7uRyLfw5QlsAVB%2FhaPMnsn8gFpJQ9ZaoPUERov%2Bcjmlw5ozazS3rfxtvTSS8xJ%2FNkvu3L8ku%2B%2F0DC26XFtck%2FdqVM1E9zTPpHdG8uF5onLCC6GgLSmRFiA5UiUYbBKxNVVEoojWHINr3kT1zV%2FHTxCW1bFPaRj4XQyjGBdus6V2FZXIIYghAHNfJ32C1%2B2NtBw0BxQLf6TNejUdPcnHIBAzbHD9yILONMO605r4GOqUB46F2WQ7hJBbNWSAgv%2B0F3PgIzm0Z3eljOxA0RGmA7jYsTUuW%2FqF6ekBGbMrPxS4veCNrUAxpQoHQ2wh7Q7xGLEgrBLq3AF6D9dOJ9BYRDi2YorEHV5pXFlSkyOVbciOAKgv2YZwj%2BI2bAaBbjHLWyKat0vXiEA9MYgA%2FspL9gvz6rPciDimlvhGeh9%2Fxbo1E4fgrIXHdHMtZh6ynth%2FGVaY8UPAd&X-Amz-Signature=7a66c49669e0262d4486914ce5204436120f17c92d79241a32c9fb3ad39e645b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
