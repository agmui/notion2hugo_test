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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VL6GN6H%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIAU0i8hzXLFF%2Bds2NermbbMwRsQojJMvAum%2BbtMuaUFKAiBysgF40l%2FIWTKKjnzXmmMrcSy47aLnt6HXDwN07up2RiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdzqcbjhmBaOtGv6oKtwD%2FX0BH2squNJFXA0iT5PUjZQPzGKjuE2c97%2FMaoMJpDoKrMD93H1VGZNhQOFAkzenM9KWrms9RYaA%2FeHZjxAXUX%2FmlIVHqfTR4rvGIK7E5ApT5lYjvEkt0Jcwg3eNQql5JqZgnKL6haHcFx%2BmZRJCpsdV7isoJnLHKv3Iv9NbdoxeSHFtALwBu1P2gS2aRPdCMEhAqEJYMf633Qp9mO%2ByWgyUfE9koMzYKYGTFu7Hfxey7xK4Mnqx6F1L2VYyeZ1U%2Bof9kdCybNStIyluD5QMME8Ie7SVoTPBXQtCQjV3aENZE7Qv5CgzLmi8nQHye7iHsIYZblwkOB5Vkf9HN8ZeE9sx1u7GeBVcqFweX%2Ffv6U2LyUrhuHHUiPSggVtHSyPTfU060Nld2KMEw2vsfWIbH%2FNpT%2Fuz37wZkBoVcTz6QWuipunQ3Q8xE9hy3Yz1umKfPv6Sll%2FIZLiL0IW7xLIr4jEU4Vd22lBtYaLMzeCmJRGcRYiwOZ%2BeZm7CtyTM1tAVJTtnCSmxD460E7WdIEkWJRSlQf7d8hNoFYvlNv2FD7EEwJWurCunPRf9CSLQQpJ15Xt07GV1lqLL7aVVj1xthJ74qWp4sQGCyY533v6Y6irXBXA31DVBOE1i3EMw%2FeyjwAY6pgHgOYyhUdgWOTX3yLtthRhPcD8DTl7kXlnL0KogtI7OROWSOuWoYGQZ68lNhPExRVXloRJBPNJHJJ9h%2FgU0EW2cUKc8oJy2qAyNrF4%2FcxkkrH8kIi%2BxVXu64%2FOUDmY0kgLDva9I71hWtrV%2Fqs%2BzTwOG2%2BCBu6OZwV4bAb77rZyFEx4%2F9%2B%2FaQWHjeM6XSOC33iu%2BnJk%2FTHdKbK2A9BM%2B%2BudMdafeJLdk&X-Amz-Signature=eeaaaa07a52980f4b95b3372404335591c82caa1126ccc4b19bf9f6308194212&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VL6GN6H%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIAU0i8hzXLFF%2Bds2NermbbMwRsQojJMvAum%2BbtMuaUFKAiBysgF40l%2FIWTKKjnzXmmMrcSy47aLnt6HXDwN07up2RiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdzqcbjhmBaOtGv6oKtwD%2FX0BH2squNJFXA0iT5PUjZQPzGKjuE2c97%2FMaoMJpDoKrMD93H1VGZNhQOFAkzenM9KWrms9RYaA%2FeHZjxAXUX%2FmlIVHqfTR4rvGIK7E5ApT5lYjvEkt0Jcwg3eNQql5JqZgnKL6haHcFx%2BmZRJCpsdV7isoJnLHKv3Iv9NbdoxeSHFtALwBu1P2gS2aRPdCMEhAqEJYMf633Qp9mO%2ByWgyUfE9koMzYKYGTFu7Hfxey7xK4Mnqx6F1L2VYyeZ1U%2Bof9kdCybNStIyluD5QMME8Ie7SVoTPBXQtCQjV3aENZE7Qv5CgzLmi8nQHye7iHsIYZblwkOB5Vkf9HN8ZeE9sx1u7GeBVcqFweX%2Ffv6U2LyUrhuHHUiPSggVtHSyPTfU060Nld2KMEw2vsfWIbH%2FNpT%2Fuz37wZkBoVcTz6QWuipunQ3Q8xE9hy3Yz1umKfPv6Sll%2FIZLiL0IW7xLIr4jEU4Vd22lBtYaLMzeCmJRGcRYiwOZ%2BeZm7CtyTM1tAVJTtnCSmxD460E7WdIEkWJRSlQf7d8hNoFYvlNv2FD7EEwJWurCunPRf9CSLQQpJ15Xt07GV1lqLL7aVVj1xthJ74qWp4sQGCyY533v6Y6irXBXA31DVBOE1i3EMw%2FeyjwAY6pgHgOYyhUdgWOTX3yLtthRhPcD8DTl7kXlnL0KogtI7OROWSOuWoYGQZ68lNhPExRVXloRJBPNJHJJ9h%2FgU0EW2cUKc8oJy2qAyNrF4%2FcxkkrH8kIi%2BxVXu64%2FOUDmY0kgLDva9I71hWtrV%2Fqs%2BzTwOG2%2BCBu6OZwV4bAb77rZyFEx4%2F9%2B%2FaQWHjeM6XSOC33iu%2BnJk%2FTHdKbK2A9BM%2B%2BudMdafeJLdk&X-Amz-Signature=17490586d32dd62c5c9201aee634d530f83f9748f9887b7f398fb5ed468e8464&X-Amz-SignedHeaders=host&x-id=GetObject)

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
