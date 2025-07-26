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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGOWPDFL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDgstJOX2WJHEAx304PUxFqKxI6m3QQq1gszgguqmWrpAiEA26aaI%2FVFPR2xfvWTavAZctDXsrOp2ITowrbTUUIjM6cq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDENHdxKj2KXxV%2BLbxyrcAx7z6x7xc5B7wU6l%2BBTufd%2BDLLj5ydO73UUT15HM27RbyTprpyzOyedGQg8lryVivew5jC8DauZ88mwTULDh3tuHEjsB7Fgiwnanxys57fFOdpuPoQDPWYSN6lI5yho5gf5MZpfOUPpvxTaVb1VDmjv7mj6fa8nSQPrFhOJP%2Fl6tXEURWdQNzNHUlBksD0KXZICY2LW6p7jcg66RA46sv%2F5L6qHbdc0amMZeeKVz1lEeKJ%2F6jcV4gm%2BY8GmmIMkiG4vrT5%2Brs9uXttteO67uwvZHLSC2lmYbkVrQIVSeLt6eKKkudXLT4gf6zmrtyge1ekmEZ6H5WU3mj%2BESBgMoPCC8C41Exhm%2Bp16%2FydH2P9UeioPLsn6qUAOKl9UOdK8%2BZzTjruDsnO%2FNlM5i%2Ff93mtONYcEwOs%2BdqKQdwIbewTl4E29QN%2FBmxt5D3B2riKCW3UlKvumTaOEhLfK5YVSMI5AS7zuyEGASQp4gIO77EUhF4s0s4DNioOGmgcs0P97Hy6Cq1F%2FzlaGrIyUov%2Ba%2BoYWPU26BQkxDcftLzkbz9doQ90uJ9397bkhrnANWLT65y%2FQoZFwYtUvUTUzNeAhaojU6o5XmIKyCo3vYL%2FlZ1RnDCTzScxgWxjXXypvzMKjCk8QGOqUBTzIA7kwlJOycghN%2BSV3tnv8Ja8axreI2mLfCJVNznJ0Baoff0CweVdjfTZCkm9xsMQtqSh8sTBDBbHgt7NEqsjwA9xOyD97enYPeFZyOJk5DXMnUc1PfMew1REhAxTUw07s0a6VScDKz%2BUil1iJXYzyPTjX%2Bbc0rensIN4mFALiEjyy5X8EqkwjEhL%2FBdq67Fwkd%2B%2FSwBClYPbnHerZlG%2Fc10wSQ&X-Amz-Signature=ef706e1c956ecb2b76012b8ef798c166e1f24a70eb3c090dd8b8372df36c87bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGOWPDFL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDgstJOX2WJHEAx304PUxFqKxI6m3QQq1gszgguqmWrpAiEA26aaI%2FVFPR2xfvWTavAZctDXsrOp2ITowrbTUUIjM6cq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDENHdxKj2KXxV%2BLbxyrcAx7z6x7xc5B7wU6l%2BBTufd%2BDLLj5ydO73UUT15HM27RbyTprpyzOyedGQg8lryVivew5jC8DauZ88mwTULDh3tuHEjsB7Fgiwnanxys57fFOdpuPoQDPWYSN6lI5yho5gf5MZpfOUPpvxTaVb1VDmjv7mj6fa8nSQPrFhOJP%2Fl6tXEURWdQNzNHUlBksD0KXZICY2LW6p7jcg66RA46sv%2F5L6qHbdc0amMZeeKVz1lEeKJ%2F6jcV4gm%2BY8GmmIMkiG4vrT5%2Brs9uXttteO67uwvZHLSC2lmYbkVrQIVSeLt6eKKkudXLT4gf6zmrtyge1ekmEZ6H5WU3mj%2BESBgMoPCC8C41Exhm%2Bp16%2FydH2P9UeioPLsn6qUAOKl9UOdK8%2BZzTjruDsnO%2FNlM5i%2Ff93mtONYcEwOs%2BdqKQdwIbewTl4E29QN%2FBmxt5D3B2riKCW3UlKvumTaOEhLfK5YVSMI5AS7zuyEGASQp4gIO77EUhF4s0s4DNioOGmgcs0P97Hy6Cq1F%2FzlaGrIyUov%2Ba%2BoYWPU26BQkxDcftLzkbz9doQ90uJ9397bkhrnANWLT65y%2FQoZFwYtUvUTUzNeAhaojU6o5XmIKyCo3vYL%2FlZ1RnDCTzScxgWxjXXypvzMKjCk8QGOqUBTzIA7kwlJOycghN%2BSV3tnv8Ja8axreI2mLfCJVNznJ0Baoff0CweVdjfTZCkm9xsMQtqSh8sTBDBbHgt7NEqsjwA9xOyD97enYPeFZyOJk5DXMnUc1PfMew1REhAxTUw07s0a6VScDKz%2BUil1iJXYzyPTjX%2Bbc0rensIN4mFALiEjyy5X8EqkwjEhL%2FBdq67Fwkd%2B%2FSwBClYPbnHerZlG%2Fc10wSQ&X-Amz-Signature=e187ad16a337461b9c2ddecfdc5ead0422bb322fe971282ea83271f190a0f965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
