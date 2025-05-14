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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY6MZ4E3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCbGlBcwR1hWnPRsioaHpY3R4VmHppRn%2FBJeOxWfpbvwgIgOirulA70Tz6%2BsucI5ZaBwEv4ElWfFXdF5Msf8QsDTCMq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDPcEgbBtKuaoNow2aSrcA3c74d3GAdsFvlvQz33bw7DUzVgchH51RGqDtjOvjhGLCbm%2FLtLYlfKFV1vS%2F7qmyORvtz0bLZIeJ1gvFBG1ccmTu43lQ6SlLATWLKoCjyK1fHCr37sv%2F0h4kY0ixdqAcLTyOyRh7DItZdlqdPj4duIRAXd45UunMyAivLEOJ3di1P9Y%2FRyTm5cTY9KqVuJS%2BoUtnZtAbiiRhxY%2BfCpL3vIFC8n%2BEEEI8CY2pgJ00b3GUx6EcSJy3Rfok13J%2FmwxB%2BltFB9sq1ZiKQwpzHBSnHtFiUjQpY50MHouLIlo0VV0W1DNzOrb52%2BUUudcsrZHcP0%2B7anxJvVv3wtXs1ob7oRCBtCZPx%2FJwg3GZt5PyoA8S0KmRJ1iP7fB6aijOBZvFIv8vk5U9FdR2pVt2S9vWpJmXgFSjxLhTRSnKpauIq4IPY0HYc0llT4Pii3aW6FnbIR%2Faoj4O1QkPrPUvaOaD9HgwSbYfHa%2F3fgwBLF67qNrNuR%2BduL5Nuk1N4lPRBMt%2Bo0VqMtOQjmw3XypZ0H%2B%2FmDJDOciQmqiFKqBf83mUOa2MMamL0OYkmCjM1oEOGceBjrdGB5r5qa6XUHY0DSrVeYYaobhrF90QlDzaGAM1mPW6nFi7yXSsQCRuUHBMKeHksEGOqUBKcSOASwBPf1Zz4UlAbhlxORI2ozygrtmHgbYM4ylqPog%2BVQ1CAmigqdIty15ypvgOJ4Nnn8WbhKM9%2FLe5EqQ7i4d78qrwcqFbr1WG%2Bi4L1kH%2Fpu9h1uBFpU70%2FkzCiYBeKlYUoha%2FG5mAaKZu6y%2B8p2wZOSiUv41r69byHGK88%2BK6AXPjQ61JQ3WAqqVdcbpaKJHukffsk9CZuCh1Wf5k7l6Qwnb&X-Amz-Signature=6a7787d28468258dd302494e2e2e8d4f7a5c74121a0e2f8817a400bb35e3d411&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY6MZ4E3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCbGlBcwR1hWnPRsioaHpY3R4VmHppRn%2FBJeOxWfpbvwgIgOirulA70Tz6%2BsucI5ZaBwEv4ElWfFXdF5Msf8QsDTCMq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDPcEgbBtKuaoNow2aSrcA3c74d3GAdsFvlvQz33bw7DUzVgchH51RGqDtjOvjhGLCbm%2FLtLYlfKFV1vS%2F7qmyORvtz0bLZIeJ1gvFBG1ccmTu43lQ6SlLATWLKoCjyK1fHCr37sv%2F0h4kY0ixdqAcLTyOyRh7DItZdlqdPj4duIRAXd45UunMyAivLEOJ3di1P9Y%2FRyTm5cTY9KqVuJS%2BoUtnZtAbiiRhxY%2BfCpL3vIFC8n%2BEEEI8CY2pgJ00b3GUx6EcSJy3Rfok13J%2FmwxB%2BltFB9sq1ZiKQwpzHBSnHtFiUjQpY50MHouLIlo0VV0W1DNzOrb52%2BUUudcsrZHcP0%2B7anxJvVv3wtXs1ob7oRCBtCZPx%2FJwg3GZt5PyoA8S0KmRJ1iP7fB6aijOBZvFIv8vk5U9FdR2pVt2S9vWpJmXgFSjxLhTRSnKpauIq4IPY0HYc0llT4Pii3aW6FnbIR%2Faoj4O1QkPrPUvaOaD9HgwSbYfHa%2F3fgwBLF67qNrNuR%2BduL5Nuk1N4lPRBMt%2Bo0VqMtOQjmw3XypZ0H%2B%2FmDJDOciQmqiFKqBf83mUOa2MMamL0OYkmCjM1oEOGceBjrdGB5r5qa6XUHY0DSrVeYYaobhrF90QlDzaGAM1mPW6nFi7yXSsQCRuUHBMKeHksEGOqUBKcSOASwBPf1Zz4UlAbhlxORI2ozygrtmHgbYM4ylqPog%2BVQ1CAmigqdIty15ypvgOJ4Nnn8WbhKM9%2FLe5EqQ7i4d78qrwcqFbr1WG%2Bi4L1kH%2Fpu9h1uBFpU70%2FkzCiYBeKlYUoha%2FG5mAaKZu6y%2B8p2wZOSiUv41r69byHGK88%2BK6AXPjQ61JQ3WAqqVdcbpaKJHukffsk9CZuCh1Wf5k7l6Qwnb&X-Amz-Signature=f6898d64db1a7f2462fc75daa1ba50ffb88247c8008650fd3b4d50ef0f26f5a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
