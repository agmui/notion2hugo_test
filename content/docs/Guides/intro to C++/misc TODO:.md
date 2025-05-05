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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP67XQ5A%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMKJwuU88J4txCrA0Uke9%2FawATvXdjyqcFamDC%2FbQWTwIgF1PxmKcoeLsGELTnd8HB3dyK8bHSViWpjDkldN%2FYaVYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGXBN2yDUSivwEYyeCrcA7fRKWOBs5DOrFWvjDJv9shSTGHfivGTUCXGPaeMZAslLZlLEWDovEsTWv0C%2B6yYqZI9rq4jNpT7tQSayf9LqVZ7kKQcIF73hfEib5XzJmycnPwgr05Cwinj3vHSs60Ozur1LFGTHyeSxXUGCoZTIZuBhVueXqA7RD3%2By7Ayadc5K67vLAz%2F4uaRJw3HJbqAPS1j%2FVNKIW0Ky2sbm9fgzR9eO20zZOmMxjRK3TnyXMgxvk9F5XHe6c2gG4rVIsnxJOTPyi2fNVJaDgUIg4TDF0Dw3dWAK0lJ%2Bwoi0pAZ9J%2F0yqI5lZFoz8SI3hqgQI5KU5SujaEnsu2LUTVai90OFFBjPHd4MUD0WlLTqzJbhMYlTrtfxiE2TZkLXHBoS2v9z6S%2Fdmeee3Wxv8PahpimEXGFZsXZQ7khRcOK36ClOpAy8v5fe%2FcAPNnacDf1Qt4tqKv1%2Fg1XBDfnHO4kWYg7B5v%2FZNEyYMME8L5rABvAxehWrTFy0GkuaSQDNTj21108QvfPS%2BrFWLn1fFZAP9SROBuZKVmbYXJmBQNXM%2B0%2BaXZHycJZe1Jooj7uqflS0v2iZmxDpLI9g9g5BDo9wum%2FWwHZ86c5pZ4u0jPreVQMmnn9gBkneB84qBrIAUIGMO7M5MAGOqUBXvdJmG%2F6csPbc%2Bn8%2B28eWHW%2FSOMoNWIne9G7nANa6riZloWBwODPp0cEC5OJOY%2B82tnzUXulFDyZDfIS1qaB3eSHr2kcCX0VuLPltbrs2%2FC1PSqmNmHnFu05xAZHMMUm413UckrC8fz5Yoi2Z9PY2S07LXxYwbG9w6x0tsFFtRkUqY9Rwx9Qc%2F7etj4Ihp2F1ZEoya%2BvvTI3u6EqClIKKxZfNB%2BT&X-Amz-Signature=555d87b5effa166bfa4f8aa353e84f2a3d5f10b2d63a90c5e018036685e94914&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP67XQ5A%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMKJwuU88J4txCrA0Uke9%2FawATvXdjyqcFamDC%2FbQWTwIgF1PxmKcoeLsGELTnd8HB3dyK8bHSViWpjDkldN%2FYaVYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGXBN2yDUSivwEYyeCrcA7fRKWOBs5DOrFWvjDJv9shSTGHfivGTUCXGPaeMZAslLZlLEWDovEsTWv0C%2B6yYqZI9rq4jNpT7tQSayf9LqVZ7kKQcIF73hfEib5XzJmycnPwgr05Cwinj3vHSs60Ozur1LFGTHyeSxXUGCoZTIZuBhVueXqA7RD3%2By7Ayadc5K67vLAz%2F4uaRJw3HJbqAPS1j%2FVNKIW0Ky2sbm9fgzR9eO20zZOmMxjRK3TnyXMgxvk9F5XHe6c2gG4rVIsnxJOTPyi2fNVJaDgUIg4TDF0Dw3dWAK0lJ%2Bwoi0pAZ9J%2F0yqI5lZFoz8SI3hqgQI5KU5SujaEnsu2LUTVai90OFFBjPHd4MUD0WlLTqzJbhMYlTrtfxiE2TZkLXHBoS2v9z6S%2Fdmeee3Wxv8PahpimEXGFZsXZQ7khRcOK36ClOpAy8v5fe%2FcAPNnacDf1Qt4tqKv1%2Fg1XBDfnHO4kWYg7B5v%2FZNEyYMME8L5rABvAxehWrTFy0GkuaSQDNTj21108QvfPS%2BrFWLn1fFZAP9SROBuZKVmbYXJmBQNXM%2B0%2BaXZHycJZe1Jooj7uqflS0v2iZmxDpLI9g9g5BDo9wum%2FWwHZ86c5pZ4u0jPreVQMmnn9gBkneB84qBrIAUIGMO7M5MAGOqUBXvdJmG%2F6csPbc%2Bn8%2B28eWHW%2FSOMoNWIne9G7nANa6riZloWBwODPp0cEC5OJOY%2B82tnzUXulFDyZDfIS1qaB3eSHr2kcCX0VuLPltbrs2%2FC1PSqmNmHnFu05xAZHMMUm413UckrC8fz5Yoi2Z9PY2S07LXxYwbG9w6x0tsFFtRkUqY9Rwx9Qc%2F7etj4Ihp2F1ZEoya%2BvvTI3u6EqClIKKxZfNB%2BT&X-Amz-Signature=2100ec76448adf01990e63bf96520010fb60061f19fbb485d91724b0c51e930c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
