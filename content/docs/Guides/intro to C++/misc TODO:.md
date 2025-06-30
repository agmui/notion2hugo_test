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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IGOOL4Q%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDooh5RuijQirH1XvNPWA12Ti2PNqCgGWnhBGFZhi01XAiEA%2BRspQrad3n1UwDLpnoKOTIarEZr64Dndgq3FvIreaLkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAivIPf9Ilhafu05ircAwkDO6mD5N9jRmMYgGKr9M515mTBtmsxgkFR1T%2FPTgmGHjoA5L9TORINKjE4rcrvR%2Bj4ozPP2R%2F8JAaCvFLHfQoJ0yQIC15fWK7V9O2eZbsHsA%2BAgpWTlTdIju2jt0%2F4DYzmfroBvShJ9CEe6IWa6MlLdjO05k1gnLhrEB3qaHl3DphR%2FYrK%2B5IarHGO4fJ%2F0xnKXob7TfeZFLrraewtUNnNBEI1rlmsLzdH9r42nTBtNACoS84Tz0e0ODZ000yoweIcCmc1hJleCXHIKmTTmB3CXzUIDypenca4rFEihFXhxW2XfZlD3pR0eLKfi1JMQErY2PCgyAPAwOEby8P8u%2BbBubojXwviV1HiAcvNzG2E80BXeaAp5gWwj7pcD9hSZfPhw13AFsC89ncPKika36mHkL55eo5Q%2F9jZPIC0GSGVR2HljhonJ9NC2TqtJPkp%2F3opwNrSPSLZWHiRLgZSOKw5n8v6ytGDAjaJfjP3x1hiiKUV0%2FefDSfpDx2YP31ghSnIF1M72Mxt5s5pxeLq%2FsAdCkDcE4fgZ8rUuSwO8XJLif56v1%2FpDZv8KH6BBHuC97dqH%2FIny4c81UxXutONYnOF9KnXeF4g07AOceZzGfkBEZuFzOYM8dfILknxMMPNhsMGOqUBhLQ9RR2bBRb5whIW8Y4jUYuSmrVRuhmYIaMfOh5ou8i7wjV6tA%2BsZDWJwwh%2FSNgKBfZhUB3v34DC7ddrmttbmL2n7PbanvuuWJu%2FKhPfYnrImK5Cv7unerIjWE9y3HTsjqu%2FhsCzpG%2FoNoBdSawrbRze8Wncwgyof6kETLv5kUCb%2FDUYuUviW5JQNB4IrvX0NKEb06H3c8193elTHNo59Vw%2FLGDg&X-Amz-Signature=a39bc288c04385b23b66e8b84da71b7214f3622ac81a958fe1c105091c56cca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IGOOL4Q%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDooh5RuijQirH1XvNPWA12Ti2PNqCgGWnhBGFZhi01XAiEA%2BRspQrad3n1UwDLpnoKOTIarEZr64Dndgq3FvIreaLkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAivIPf9Ilhafu05ircAwkDO6mD5N9jRmMYgGKr9M515mTBtmsxgkFR1T%2FPTgmGHjoA5L9TORINKjE4rcrvR%2Bj4ozPP2R%2F8JAaCvFLHfQoJ0yQIC15fWK7V9O2eZbsHsA%2BAgpWTlTdIju2jt0%2F4DYzmfroBvShJ9CEe6IWa6MlLdjO05k1gnLhrEB3qaHl3DphR%2FYrK%2B5IarHGO4fJ%2F0xnKXob7TfeZFLrraewtUNnNBEI1rlmsLzdH9r42nTBtNACoS84Tz0e0ODZ000yoweIcCmc1hJleCXHIKmTTmB3CXzUIDypenca4rFEihFXhxW2XfZlD3pR0eLKfi1JMQErY2PCgyAPAwOEby8P8u%2BbBubojXwviV1HiAcvNzG2E80BXeaAp5gWwj7pcD9hSZfPhw13AFsC89ncPKika36mHkL55eo5Q%2F9jZPIC0GSGVR2HljhonJ9NC2TqtJPkp%2F3opwNrSPSLZWHiRLgZSOKw5n8v6ytGDAjaJfjP3x1hiiKUV0%2FefDSfpDx2YP31ghSnIF1M72Mxt5s5pxeLq%2FsAdCkDcE4fgZ8rUuSwO8XJLif56v1%2FpDZv8KH6BBHuC97dqH%2FIny4c81UxXutONYnOF9KnXeF4g07AOceZzGfkBEZuFzOYM8dfILknxMMPNhsMGOqUBhLQ9RR2bBRb5whIW8Y4jUYuSmrVRuhmYIaMfOh5ou8i7wjV6tA%2BsZDWJwwh%2FSNgKBfZhUB3v34DC7ddrmttbmL2n7PbanvuuWJu%2FKhPfYnrImK5Cv7unerIjWE9y3HTsjqu%2FhsCzpG%2FoNoBdSawrbRze8Wncwgyof6kETLv5kUCb%2FDUYuUviW5JQNB4IrvX0NKEb06H3c8193elTHNo59Vw%2FLGDg&X-Amz-Signature=8312f7ceed2c8b75eac351792ac961821e64c856ec180dc82392b962a7d43542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
