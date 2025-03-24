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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUG3J4SQ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEco3iq1m3uzVnNGnPxtxukMe54y%2FkXNlWMdIENs%2FW22AiBRFery0EF2YYwxftdzO0LgTVFg0WQEZG%2FwfziR0CCbVSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4OoqpqyxAzhwKjLzKtwDCaT9435RP6%2BfALBZhhsYtpMbphZ4Xl1g%2Ba9r%2B1ZZiJmnk1bVsJPb3RZb%2BHu7mgETOg6ZOOWF873X92uIohpQxgTCeJXqJzpx0SflWV30qT8MXBBqNNHZ58ckRHfcJoVxmO1VvofzfH34Lg8A3Wxlc2h1sm6TlojlqQfvdLN5PZblaJ%2FluhR3NCg29M2Vax2KJF0CAn35t23GHsOnNBvbLsOmWfACZqXq7qb7pJhDIS%2F66QLefVbSweFoRFsOq%2F%2F85BJKIYiSBCfCCU5OW%2FzZ%2FtCe1gpE26C%2B9LD890oNV9FAO4ls02slEUl2sWPZrRzl5g7vYMzCGlgcZI8CFZTWUZN1%2FeAIQ36mkSovfp7uyl3twHi0Ks95NaQGZ0M%2F4%2Btxp0GAuu8JtDDWpSENnlkmhNrzvytuK2PbjPY7TeOWv8woYWT5UNy5Ms36vENXlJKMPd1n3DzcawvnK%2BulSJQkWtVzq9kfOfS2e8U3RFwt0cTb733kTSUPCY1U73AXigcikWQMOFtuh%2BUVczyJmJfiItB8gx%2FwqfCgukb7bnnlQvSK%2BXp91gc%2FGk%2BeeoAiwZB7we5se6cyu2f6BhnBI47GNhlzBPJvXtacwe98oJqTTpOPhQkPwg8DAIqG824wy%2BODvwY6pgE24BRKswRKlYfnWNkcxFcPutmlYCra46G%2BjuxOdUJUiMecMwIgJzy3kUHFLI8DrS3vA4c3KeOoyRI%2FXtEzdef4NsEQrEo10yOFW5HwCDVrzZI858RC7VP8yvtOJOUdffYEbyOl%2FWd5VvtlRrS5rQXhf3UxEf5i0nH3%2FbJmh1z4pKHpiHjrsah5LmfwRqK7CJ6%2B67ixkMa3KpNocZpUN1Z%2FlMQutMqN&X-Amz-Signature=d6d602565a00db9f8e97450c14726ecc38f978f22498697518f2ccbeab4d4831&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUG3J4SQ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEco3iq1m3uzVnNGnPxtxukMe54y%2FkXNlWMdIENs%2FW22AiBRFery0EF2YYwxftdzO0LgTVFg0WQEZG%2FwfziR0CCbVSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4OoqpqyxAzhwKjLzKtwDCaT9435RP6%2BfALBZhhsYtpMbphZ4Xl1g%2Ba9r%2B1ZZiJmnk1bVsJPb3RZb%2BHu7mgETOg6ZOOWF873X92uIohpQxgTCeJXqJzpx0SflWV30qT8MXBBqNNHZ58ckRHfcJoVxmO1VvofzfH34Lg8A3Wxlc2h1sm6TlojlqQfvdLN5PZblaJ%2FluhR3NCg29M2Vax2KJF0CAn35t23GHsOnNBvbLsOmWfACZqXq7qb7pJhDIS%2F66QLefVbSweFoRFsOq%2F%2F85BJKIYiSBCfCCU5OW%2FzZ%2FtCe1gpE26C%2B9LD890oNV9FAO4ls02slEUl2sWPZrRzl5g7vYMzCGlgcZI8CFZTWUZN1%2FeAIQ36mkSovfp7uyl3twHi0Ks95NaQGZ0M%2F4%2Btxp0GAuu8JtDDWpSENnlkmhNrzvytuK2PbjPY7TeOWv8woYWT5UNy5Ms36vENXlJKMPd1n3DzcawvnK%2BulSJQkWtVzq9kfOfS2e8U3RFwt0cTb733kTSUPCY1U73AXigcikWQMOFtuh%2BUVczyJmJfiItB8gx%2FwqfCgukb7bnnlQvSK%2BXp91gc%2FGk%2BeeoAiwZB7we5se6cyu2f6BhnBI47GNhlzBPJvXtacwe98oJqTTpOPhQkPwg8DAIqG824wy%2BODvwY6pgE24BRKswRKlYfnWNkcxFcPutmlYCra46G%2BjuxOdUJUiMecMwIgJzy3kUHFLI8DrS3vA4c3KeOoyRI%2FXtEzdef4NsEQrEo10yOFW5HwCDVrzZI858RC7VP8yvtOJOUdffYEbyOl%2FWd5VvtlRrS5rQXhf3UxEf5i0nH3%2FbJmh1z4pKHpiHjrsah5LmfwRqK7CJ6%2B67ixkMa3KpNocZpUN1Z%2FlMQutMqN&X-Amz-Signature=98ab162b68ae1824100f67788931341fae0653363c8ad566e7957be8b8bfb30e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
