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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI7NCALD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSJ1kCwv5izqhH7m7bpY7hTP2wG6JTU%2FEMdMXIgMFDPwIgWy4oyBKKw7Opr7w4WxxGSBbtcXJPOOsfEAIi5xbBBS8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHZoefd7kao3BnNjgircAy%2FRYblQwV9lAGli9G2WyUj%2FJGveGZEAkszGWzig9CDOg17bogmVqR2RF0GmAxNfNpokhOP5j7ObK0VwHMdgMjOQd4D%2BlyBnBfhgP55MX%2FfdnLc%2F6Bv8ectsYkd0c%2FhMT7OS0rHOS3tPnbhZTU%2BGHkDvGxtFl251pnWcCKCg2jxKVA709%2F0eLrB8RDmzQDaa72rgzecI4JvH%2F5YWfbS4GPmFS0H2CCrYu%2BQVI7sb0nHV2NB5aCmr0H7bxxl5YF%2FKxYwn8NshDrUQoLzZDSNG9DWTcInWK6SVssjSyVOZEmz4zq8%2Fpcqp%2BGiep0gJsQEZi2S96c9cnewa2QTVI0jvnxUD3BwXx1wjqEy7DtAbc3dfVp2DVbNXRruBfRrHEN1yVLAeM29UZGNHzIaLNnQv%2F5mkOAZ6cM%2BgOGEKjqeaUB0R7iCga3Tib42DwK136duaTZZaajy2iElVV0Z1t%2BVzTnji4oZGJacCQTCU8QJ2EhgcTuFpCXzbjDk%2B6%2FEuKQwxu%2B2JXyexPSGl7HLwNEZhTffr946rl893h6zT1yjzlCm8Bxdbb7l%2FxB89XI5PVO8XSM1BFTSYHey0h8KWwoLfCp%2B%2FeKAjJqoq798nVxt2pwcQuKwwWsDlsgtJQgRBMOX6gcAGOqUB1dmaMG77uXQBVylQVxO5UDu144fsAv54CpRJtMIijxB4jW8sCEtmdvFaeM0iF2lElJEeLyBhKK53xngCI1Q5NH%2BG%2BkZ7WLXc%2BrntbUuKCsgI9tc2HdKi1S8QCbXXnfd3oKTVnQvONlundAPmdWpF2BHE0AQyPd4u%2BZiyf8Egmkz62JaDbH8fwRnCjn8eP9IBE2EbRYZIkuEqcOQvH2WiVTiSwur3&X-Amz-Signature=60859c317f2c80749d133db9d06382e3b9f776e1d2cc601c5b466b1731463aae&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI7NCALD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSJ1kCwv5izqhH7m7bpY7hTP2wG6JTU%2FEMdMXIgMFDPwIgWy4oyBKKw7Opr7w4WxxGSBbtcXJPOOsfEAIi5xbBBS8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHZoefd7kao3BnNjgircAy%2FRYblQwV9lAGli9G2WyUj%2FJGveGZEAkszGWzig9CDOg17bogmVqR2RF0GmAxNfNpokhOP5j7ObK0VwHMdgMjOQd4D%2BlyBnBfhgP55MX%2FfdnLc%2F6Bv8ectsYkd0c%2FhMT7OS0rHOS3tPnbhZTU%2BGHkDvGxtFl251pnWcCKCg2jxKVA709%2F0eLrB8RDmzQDaa72rgzecI4JvH%2F5YWfbS4GPmFS0H2CCrYu%2BQVI7sb0nHV2NB5aCmr0H7bxxl5YF%2FKxYwn8NshDrUQoLzZDSNG9DWTcInWK6SVssjSyVOZEmz4zq8%2Fpcqp%2BGiep0gJsQEZi2S96c9cnewa2QTVI0jvnxUD3BwXx1wjqEy7DtAbc3dfVp2DVbNXRruBfRrHEN1yVLAeM29UZGNHzIaLNnQv%2F5mkOAZ6cM%2BgOGEKjqeaUB0R7iCga3Tib42DwK136duaTZZaajy2iElVV0Z1t%2BVzTnji4oZGJacCQTCU8QJ2EhgcTuFpCXzbjDk%2B6%2FEuKQwxu%2B2JXyexPSGl7HLwNEZhTffr946rl893h6zT1yjzlCm8Bxdbb7l%2FxB89XI5PVO8XSM1BFTSYHey0h8KWwoLfCp%2B%2FeKAjJqoq798nVxt2pwcQuKwwWsDlsgtJQgRBMOX6gcAGOqUB1dmaMG77uXQBVylQVxO5UDu144fsAv54CpRJtMIijxB4jW8sCEtmdvFaeM0iF2lElJEeLyBhKK53xngCI1Q5NH%2BG%2BkZ7WLXc%2BrntbUuKCsgI9tc2HdKi1S8QCbXXnfd3oKTVnQvONlundAPmdWpF2BHE0AQyPd4u%2BZiyf8Egmkz62JaDbH8fwRnCjn8eP9IBE2EbRYZIkuEqcOQvH2WiVTiSwur3&X-Amz-Signature=59b56b0e968276cd52a34f734003a75598d8368006e77200844c12dda22124b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
