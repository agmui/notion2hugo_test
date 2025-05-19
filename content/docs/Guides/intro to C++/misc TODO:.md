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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITR5XOA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEH%2Bnr%2FyiJnPwY8Ijq9QZc4dx7gL73QUae4kSnyNtiiEAiEAqdCafgXRlHmLmONf%2BdX5HUDzOk69KPEOdKkCHAlPaY0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJyKHC%2FFjARQH8OUCrcAxtPtutBTIRwVZV6d2p1BEEnMdXqIpbTN0N8uHKArCtNYHHhYUdRTgpBPpDAatj0GH9Y8LSQ4%2F37JoDNmZ1DvnkZjGMCu0VfOJuRvcAKMqMKgcbG0XEsDYuEs5R%2BXVPJwmhgUTfb%2Bwug1uM%2BrhmyOsId%2BBed2QoaL6KUFhTjstshgKX6vC5M%2BVroF02a3dhuvuKXAy33x%2FL05%2BeXLVw%2B7RfQUPnohuMbRli%2FysEL6cP8UsNprXMigLZPkrjFimF%2BXlnDPe5wIDLwBWQg6dT29OHIXXX14k8rj921jqQyRmuJS7b%2FRCCpKuE8Rp%2FYwKE2k7g0gV3FZiIiBu7kQy6uWZQFOs3xfeAA%2FQdP5nrWOzVJx5iG%2BVou71T1LU5K%2BqIU2QdLEIne%2FGIX8riJ7tF6FP3Mk7X4aYUsnTp6Up0aPY2zBctS84pnswTnS0ACYbdC8IawCI7DdKrI%2BHnlw2XQrvRX72l2z02eenOaMn9V2IV2%2FgBc8CHUqF8da2EFqZRx%2FAUjwY66WMVKXTTH2PWoAzsPzH4NfluxkgYRqdHOL0r5B5aOlKeexYFYBezqP5kfL13RZH8dqsKa066QMCBjdXtep4BhLer%2F9UwA40dm0Y8Uts35HP607owYY3tqMOitrsEGOqUBcVPP24ERuoYnJGxysVebWeQnn8nGwAdCKv4Ufv4mrrNC1n3ycrChPOLLrInAXHz8o2Y5p2hnpucX2hpCjzGAFw5qTtyanEgY%2FkEL0icdELbtm6Ve%2Bh9o%2BTvr0XVxvrP%2BlsMIfkN3b0G0jUhUJY2is6gro5oJKnR965qprQPgn4M3dlajl5GKroN%2By4c7jSseJzCYyl9uuDSwrc1PB3iIpe5QYZre&X-Amz-Signature=d9c89f104b5d517846a3e5bbb2185de5aab8ea80414b6cadc96551e62c928f91&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITR5XOA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEH%2Bnr%2FyiJnPwY8Ijq9QZc4dx7gL73QUae4kSnyNtiiEAiEAqdCafgXRlHmLmONf%2BdX5HUDzOk69KPEOdKkCHAlPaY0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJyKHC%2FFjARQH8OUCrcAxtPtutBTIRwVZV6d2p1BEEnMdXqIpbTN0N8uHKArCtNYHHhYUdRTgpBPpDAatj0GH9Y8LSQ4%2F37JoDNmZ1DvnkZjGMCu0VfOJuRvcAKMqMKgcbG0XEsDYuEs5R%2BXVPJwmhgUTfb%2Bwug1uM%2BrhmyOsId%2BBed2QoaL6KUFhTjstshgKX6vC5M%2BVroF02a3dhuvuKXAy33x%2FL05%2BeXLVw%2B7RfQUPnohuMbRli%2FysEL6cP8UsNprXMigLZPkrjFimF%2BXlnDPe5wIDLwBWQg6dT29OHIXXX14k8rj921jqQyRmuJS7b%2FRCCpKuE8Rp%2FYwKE2k7g0gV3FZiIiBu7kQy6uWZQFOs3xfeAA%2FQdP5nrWOzVJx5iG%2BVou71T1LU5K%2BqIU2QdLEIne%2FGIX8riJ7tF6FP3Mk7X4aYUsnTp6Up0aPY2zBctS84pnswTnS0ACYbdC8IawCI7DdKrI%2BHnlw2XQrvRX72l2z02eenOaMn9V2IV2%2FgBc8CHUqF8da2EFqZRx%2FAUjwY66WMVKXTTH2PWoAzsPzH4NfluxkgYRqdHOL0r5B5aOlKeexYFYBezqP5kfL13RZH8dqsKa066QMCBjdXtep4BhLer%2F9UwA40dm0Y8Uts35HP607owYY3tqMOitrsEGOqUBcVPP24ERuoYnJGxysVebWeQnn8nGwAdCKv4Ufv4mrrNC1n3ycrChPOLLrInAXHz8o2Y5p2hnpucX2hpCjzGAFw5qTtyanEgY%2FkEL0icdELbtm6Ve%2Bh9o%2BTvr0XVxvrP%2BlsMIfkN3b0G0jUhUJY2is6gro5oJKnR965qprQPgn4M3dlajl5GKroN%2By4c7jSseJzCYyl9uuDSwrc1PB3iIpe5QYZre&X-Amz-Signature=4862fde016610e6e76cce2082f42d514135922080335bc9a32ab5f3ec3b81cad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
