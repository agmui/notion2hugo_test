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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WK3LOYF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCUmhj8rmAc3qmyoaef8U2kriE6vyNlA8ttcH2GFoSSLQIgcdr3DngHdULRKuzPoxyE%2BZB6NR01337sOoM7drjYxwcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqlU0kamR%2FmX7S%2F6yrcA%2BeZSn4RRJ9zNY3lAmZRS%2FVYj0ebifBjgJk2RBfOKR5V64LgGFeMaGlUZy4smP01SoutroCuug9hUCd6WSij1grJD9pgO5UHl%2BJ4yO4gInkBBgoVfoX8qqmKhTy1AMrtqL8h1RO6b8awDj%2Bf6YxDetw1MNhb3Qypkx0D64uSLCtZsGJOtNJ8cT8lwdRjEZ6rqAHK482XfdZCOBHkW3X4klLIEittiWzwdU0f4O4g8oK1Yq%2BCcigs88lCLUq7WOMqMcD5XcbYO6KfMf%2Fnw7VwrCuCVJHWMkt7FNNURhu8SORNpcBpCYwZTXp11Zmb970%2BVdS%2BZpmHsuaFKJHj%2FIiC%2BKMqp%2FOl3x13Cg9LmQ1AFK05uBhp6IJqU90b3f4q4Vum8lSwIWwsiDJYhGht6SDOwR4sKtwxdkBMZ8IBrxHs3k5iO5ICuArC8DQHdTOJp%2Fr2vjqKmkEllUpmtBBkKTF93HLAN3k0e8HVF6OK4IckWBevIgog1ddZayinLwNEVUBu6GYICb3Q6Wc%2FRJ2GwtWLi6yVr%2B9BJejEyiUZRzGpe%2FWaBx7dlhYxjFMWH6PzwyRWGkjzn8vzUgLXmlyKZQx80afsY9VP3as2nzddNu4NQAagGjZxJeW1FzjY2jauMP6PnMQGOqUBmgDCvc332RYoc44cx4zUI%2FzAkSfkO77BI20%2BhMZUFk2jCyqEOFP59C75iZoITMbN3%2FLnsGfn28QoVOboc0KUumkT2tsd80e7HsQkYFUNpXLrs8D1nq6ORGOYSZITUE2sFU7rh8EDsD%2FY1OIWPf9XsobHHKj6OU3sNM941p2X15mdvV0hh%2FoU9Wu%2FEV9hvgljJja4W6RJKIHS77JYJIrYYSFIMYEK&X-Amz-Signature=2a4c96cccdb2c5f04d3b1d9d41b41356eba852f377d146f2d53f40960e985e0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WK3LOYF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCUmhj8rmAc3qmyoaef8U2kriE6vyNlA8ttcH2GFoSSLQIgcdr3DngHdULRKuzPoxyE%2BZB6NR01337sOoM7drjYxwcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqlU0kamR%2FmX7S%2F6yrcA%2BeZSn4RRJ9zNY3lAmZRS%2FVYj0ebifBjgJk2RBfOKR5V64LgGFeMaGlUZy4smP01SoutroCuug9hUCd6WSij1grJD9pgO5UHl%2BJ4yO4gInkBBgoVfoX8qqmKhTy1AMrtqL8h1RO6b8awDj%2Bf6YxDetw1MNhb3Qypkx0D64uSLCtZsGJOtNJ8cT8lwdRjEZ6rqAHK482XfdZCOBHkW3X4klLIEittiWzwdU0f4O4g8oK1Yq%2BCcigs88lCLUq7WOMqMcD5XcbYO6KfMf%2Fnw7VwrCuCVJHWMkt7FNNURhu8SORNpcBpCYwZTXp11Zmb970%2BVdS%2BZpmHsuaFKJHj%2FIiC%2BKMqp%2FOl3x13Cg9LmQ1AFK05uBhp6IJqU90b3f4q4Vum8lSwIWwsiDJYhGht6SDOwR4sKtwxdkBMZ8IBrxHs3k5iO5ICuArC8DQHdTOJp%2Fr2vjqKmkEllUpmtBBkKTF93HLAN3k0e8HVF6OK4IckWBevIgog1ddZayinLwNEVUBu6GYICb3Q6Wc%2FRJ2GwtWLi6yVr%2B9BJejEyiUZRzGpe%2FWaBx7dlhYxjFMWH6PzwyRWGkjzn8vzUgLXmlyKZQx80afsY9VP3as2nzddNu4NQAagGjZxJeW1FzjY2jauMP6PnMQGOqUBmgDCvc332RYoc44cx4zUI%2FzAkSfkO77BI20%2BhMZUFk2jCyqEOFP59C75iZoITMbN3%2FLnsGfn28QoVOboc0KUumkT2tsd80e7HsQkYFUNpXLrs8D1nq6ORGOYSZITUE2sFU7rh8EDsD%2FY1OIWPf9XsobHHKj6OU3sNM941p2X15mdvV0hh%2FoU9Wu%2FEV9hvgljJja4W6RJKIHS77JYJIrYYSFIMYEK&X-Amz-Signature=4573c618ba70598f41d54d59b347f0aedbc6f74c1e90590de2e711bb223742cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
