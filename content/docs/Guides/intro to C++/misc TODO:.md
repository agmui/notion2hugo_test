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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VGOM5W2%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIB9UuGof7hZJihDsqGSLmghkr%2F5IW64gGviFvpM0nGjyAiEA4lS6HmSibdeGuN6yNlUBt0dUyC6i1ZPMqZ0K80d%2B%2BlUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIyXft94%2BjZvfTM4MCrcA7nNMcc77hDrXKS3JQtxwQ%2B9ldbBZrJa8J0yrrhdm35hvafWs3Etk3aPOW2HiyzTuNHLUIsuNOPLyhGYm9DfQKV6j6mu5V7pR2PT%2BV7E3R6Gs6AxCQoZX53%2FDhA%2F%2BjiwnB6q7%2BOwNbN%2FBZsjx3b8yiiZaphKX8ZEGCjiNulWVHbOeHRWNP625pre1hEw2chC%2BggxfhyGErMaRRhLswMos%2B14Jv4DULlnjy2ARQneVF3w9ObcbUYLclRejF5e9hxHD1xVGcgABTyLpOApvYmj5MBQZCF4qOgo8kava1cbdR2FRPVg1TAl7klNRKwgKQNMgmSDaFwmIFFj8T7VI99V%2BQyNcpuMZCI5tHPAhoJVBLR0G5ZOI5r3Nk8AAhXvn2IBJe%2FGKVoMzBTEncmJHhUdZHub2P8M5W%2FjDlxcoqnMzeYLSA1GLYPryMix0%2BOfORWwYzx3BE1LFCKtKTFsmFeUzDT0hzJoeqDBF6zHa7LmkGCE2vf29PAEtmiMzSQ3La13hR9y67KSj3xCYCu%2Br3r6iWk5uy30bY5XMJT%2F6qYjoTf7BUP7VdozeuHrIKn0pRh%2FQXzr9tawNmg8kNJcxjteko1gZp7mtTXLEcTdW18FsFEHXTQjFTJ5h0c1XsqJMO24wsIGOqUB8lmyK4DCner7j%2FdtY%2Bd%2BUDPO53%2BZ41YBeM446MMLC7bDugpiXkfC3v8xSCqEAqJGNEj%2FWxYrXuU43I5s79VV7zB29O5eZflLbJuasLgjPSMauK0AV2K9Aqbpov8UUS0V81NOU5mWML62cU0FfxbqfzBrXQ4dZAQh1EGf5IoO4ndmiMaiddXk76ZkoYL0ffwiqTDA6PWHkQ7eMHfx86Tqpu%2B36838&X-Amz-Signature=cfde298883719229125a662c3c76287693ae9898720a705eb73ca8c79f12f0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VGOM5W2%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIB9UuGof7hZJihDsqGSLmghkr%2F5IW64gGviFvpM0nGjyAiEA4lS6HmSibdeGuN6yNlUBt0dUyC6i1ZPMqZ0K80d%2B%2BlUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIyXft94%2BjZvfTM4MCrcA7nNMcc77hDrXKS3JQtxwQ%2B9ldbBZrJa8J0yrrhdm35hvafWs3Etk3aPOW2HiyzTuNHLUIsuNOPLyhGYm9DfQKV6j6mu5V7pR2PT%2BV7E3R6Gs6AxCQoZX53%2FDhA%2F%2BjiwnB6q7%2BOwNbN%2FBZsjx3b8yiiZaphKX8ZEGCjiNulWVHbOeHRWNP625pre1hEw2chC%2BggxfhyGErMaRRhLswMos%2B14Jv4DULlnjy2ARQneVF3w9ObcbUYLclRejF5e9hxHD1xVGcgABTyLpOApvYmj5MBQZCF4qOgo8kava1cbdR2FRPVg1TAl7klNRKwgKQNMgmSDaFwmIFFj8T7VI99V%2BQyNcpuMZCI5tHPAhoJVBLR0G5ZOI5r3Nk8AAhXvn2IBJe%2FGKVoMzBTEncmJHhUdZHub2P8M5W%2FjDlxcoqnMzeYLSA1GLYPryMix0%2BOfORWwYzx3BE1LFCKtKTFsmFeUzDT0hzJoeqDBF6zHa7LmkGCE2vf29PAEtmiMzSQ3La13hR9y67KSj3xCYCu%2Br3r6iWk5uy30bY5XMJT%2F6qYjoTf7BUP7VdozeuHrIKn0pRh%2FQXzr9tawNmg8kNJcxjteko1gZp7mtTXLEcTdW18FsFEHXTQjFTJ5h0c1XsqJMO24wsIGOqUB8lmyK4DCner7j%2FdtY%2Bd%2BUDPO53%2BZ41YBeM446MMLC7bDugpiXkfC3v8xSCqEAqJGNEj%2FWxYrXuU43I5s79VV7zB29O5eZflLbJuasLgjPSMauK0AV2K9Aqbpov8UUS0V81NOU5mWML62cU0FfxbqfzBrXQ4dZAQh1EGf5IoO4ndmiMaiddXk76ZkoYL0ffwiqTDA6PWHkQ7eMHfx86Tqpu%2B36838&X-Amz-Signature=fcfaf1d47cefc7b36b0c3d392d2691dd2480aabe1ee43a8ba4a0ee166b1f6605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
