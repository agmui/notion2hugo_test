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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU2CZ5OR%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAj%2BPNEMKGQjpA7yhxY1XsBf4W2s01r%2F61lon9pzpm5gIhAPKz990GlNuLUl9XedTwSFyztqLFD8YdKJ13eHOiL%2BwAKv8DCCsQABoMNjM3NDIzMTgzODA1IgyAPgOx8ya6FFf3228q3AP9khQ6faJ6m9C8EOUe4jnfPD4Rzw%2B6j%2F1NMYE6jg%2B917WTEyAHjZYsErFhpMCXFcH1tou5OJ216ueBSfE63MzrUP6kUxaAowWVY02XqXV5BIk6ahm4jAPjkh26NSr3XRutvxIfg%2FXdxRi0Jb04Yv%2BSq1lUKVskfFLawJxKnwcW6hRIBC7Wpmm5llPgnwDc32KjqAc65c3xVgXnbk2zowhd1sqaYCjXioMwPXFdEouVuhs1LidA%2BKMhx57YSxJYTdyCe3jwsDg2J7XYRpVm9ryFDwwvO86O9sVHXR5sJLJNYJxtrxz0pOPTHf1dPMW%2FCi1vVzI4Sreh3HxAg5pWXC3Dh96JTMsTQ%2FBzl27BoHsx5gSyKuAiG5lStqQk9q19TZSu0BO6%2B%2BJAWmlTulNQyVb8xcg4kMUDOYxYBO9xkmzcF%2FmhmsycfxpTjTkcyV1k79Xo6qAATaQpojQyAoXSLoahGGmBmSi7QUY8ywPf91NLzKjv3nHtu4AEd8dzap%2BO0xAoshVDnsYYiQJWvKP03Wg5aj%2FJzIxoaqNmtYwqiqi0ngNwv%2BLALlyvYel9tisqZXeYktNkBY4WtDOtJXt5HnOJ95O%2FormrxXu%2Bd2z%2BZ%2FdeMYlc5Yig3%2BO%2FS63N9jCDluLABjqkASToKTDicGjuoxtIXlN4sR0bdufxDXLIZF6Hcg7NG%2F3bFipv1npIBVcq1sXBe1VCvQUsm93hNNiyGs%2BR7Y8UOt477t8LpqrrQ4gNc0cuNIVB1L3YRv3KBrroO0sthnvO0rjU92ENLpstyfqrNfTqelbouhp64YcXCe5XHd737nInQKpb3i7LjoQvO7g7aGPOcE3PbJ5DxkEFUeknDGB4d3IF9t03&X-Amz-Signature=555f37623f25b8dafd7e256b83729e6ad3704fa2f86993a99d4c324410d91f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU2CZ5OR%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAj%2BPNEMKGQjpA7yhxY1XsBf4W2s01r%2F61lon9pzpm5gIhAPKz990GlNuLUl9XedTwSFyztqLFD8YdKJ13eHOiL%2BwAKv8DCCsQABoMNjM3NDIzMTgzODA1IgyAPgOx8ya6FFf3228q3AP9khQ6faJ6m9C8EOUe4jnfPD4Rzw%2B6j%2F1NMYE6jg%2B917WTEyAHjZYsErFhpMCXFcH1tou5OJ216ueBSfE63MzrUP6kUxaAowWVY02XqXV5BIk6ahm4jAPjkh26NSr3XRutvxIfg%2FXdxRi0Jb04Yv%2BSq1lUKVskfFLawJxKnwcW6hRIBC7Wpmm5llPgnwDc32KjqAc65c3xVgXnbk2zowhd1sqaYCjXioMwPXFdEouVuhs1LidA%2BKMhx57YSxJYTdyCe3jwsDg2J7XYRpVm9ryFDwwvO86O9sVHXR5sJLJNYJxtrxz0pOPTHf1dPMW%2FCi1vVzI4Sreh3HxAg5pWXC3Dh96JTMsTQ%2FBzl27BoHsx5gSyKuAiG5lStqQk9q19TZSu0BO6%2B%2BJAWmlTulNQyVb8xcg4kMUDOYxYBO9xkmzcF%2FmhmsycfxpTjTkcyV1k79Xo6qAATaQpojQyAoXSLoahGGmBmSi7QUY8ywPf91NLzKjv3nHtu4AEd8dzap%2BO0xAoshVDnsYYiQJWvKP03Wg5aj%2FJzIxoaqNmtYwqiqi0ngNwv%2BLALlyvYel9tisqZXeYktNkBY4WtDOtJXt5HnOJ95O%2FormrxXu%2Bd2z%2BZ%2FdeMYlc5Yig3%2BO%2FS63N9jCDluLABjqkASToKTDicGjuoxtIXlN4sR0bdufxDXLIZF6Hcg7NG%2F3bFipv1npIBVcq1sXBe1VCvQUsm93hNNiyGs%2BR7Y8UOt477t8LpqrrQ4gNc0cuNIVB1L3YRv3KBrroO0sthnvO0rjU92ENLpstyfqrNfTqelbouhp64YcXCe5XHd737nInQKpb3i7LjoQvO7g7aGPOcE3PbJ5DxkEFUeknDGB4d3IF9t03&X-Amz-Signature=b395bc414917ca7f93e06c11d6a18183b92d6b29e94734eff7d7aa9751a115fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
