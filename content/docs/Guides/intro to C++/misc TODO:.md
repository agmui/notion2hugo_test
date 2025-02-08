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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL3ER4MR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBx70YLIZjLXjRN8g9AM7dEt4rhwqUOgQyMvukz5DVzcAiEAoYJGSRxrR8P4Q%2FZ5sVTpO7oo3fzuajPOPEG0MzAtQDgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHi%2FYPLybyx8ITBBircA3Hj5SshM6Rs6PAI%2B4zfQbMcxI3bMBd8sXM4TgifkcMWg32C4GeimiFEM8T9Hdo1cpEyjjXGKBsNjDvWkzvC%2F6K1fPitty1ciMlDomE66LYEQ7LBCU%2BCSxu3RM9P9%2B14iqycBgwQGlrpQ45sUa4SkMCz7%2FJ5CKveq4h9aG4Uh%2B5pEuJu6BV8zaPI8TwI1UCCM%2Fk65D7HDXUPJiVV52Gtnthjx3ZqEA8BjWOUb8V%2BF9mnnhskgJ0mpussSs1z68NMI9h6cEBXNskMEzj6bpk9qj76RovOeUXPDerUNohTDAzm7ou1k9DjpQeR6HXwU%2Fdo%2BiGfKvkJF4Yog%2BOULI0gnU0qM3ffm75zQZgm6SKtB%2BumTfmVLsHNFbV2ZEc%2FzTTKsja%2B%2BVTse2aYJ36wNZbG81tZXWUpqWwVvHJYhVspWWQPcBsazVevpJ7pi%2FsikHAtWpl4KFJ4YTwpFF331igAgflkNnWCoGzeer1jSUdRlM4485y09vE4enuj5LGdQ863yOyPEKofETbmzSJCHAlILUlenZFKmrfz1%2BykaGs22eGejs5HCLPkpA0xYmbwyZdSD7aJcuRfz6fsePf57rdpk6HeOHB2ByvperVuHTtxH8%2FGGXpqMUwGE%2BN1ZJZxMPG%2Fmr0GOqUBUvCsBJGXlaLXXOAhEXXnERh3IBam8E4Dg1Qe7k1oyzj9RMFM8oRisQy3ymVWmt68m2b2nu7UDo75TuOC%2FxSAtERa0ReZS9THWnPyG5VsfYBD7zyV2JfqAdiM05sIeaNWvJ1%2F3f8e%2F%2FJRfIFMOTsU0Is43cGNRsRdbo%2BTY9iX4boA5QNK9fMeJsG%2FQn4Ywqlq52uDy64vFg4nOS51tw61Zca8%2BDGB&X-Amz-Signature=287f2d0490149b7e9ea96162596efe2f3fed0ccf250565887d3233145b0864ae&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL3ER4MR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBx70YLIZjLXjRN8g9AM7dEt4rhwqUOgQyMvukz5DVzcAiEAoYJGSRxrR8P4Q%2FZ5sVTpO7oo3fzuajPOPEG0MzAtQDgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHi%2FYPLybyx8ITBBircA3Hj5SshM6Rs6PAI%2B4zfQbMcxI3bMBd8sXM4TgifkcMWg32C4GeimiFEM8T9Hdo1cpEyjjXGKBsNjDvWkzvC%2F6K1fPitty1ciMlDomE66LYEQ7LBCU%2BCSxu3RM9P9%2B14iqycBgwQGlrpQ45sUa4SkMCz7%2FJ5CKveq4h9aG4Uh%2B5pEuJu6BV8zaPI8TwI1UCCM%2Fk65D7HDXUPJiVV52Gtnthjx3ZqEA8BjWOUb8V%2BF9mnnhskgJ0mpussSs1z68NMI9h6cEBXNskMEzj6bpk9qj76RovOeUXPDerUNohTDAzm7ou1k9DjpQeR6HXwU%2Fdo%2BiGfKvkJF4Yog%2BOULI0gnU0qM3ffm75zQZgm6SKtB%2BumTfmVLsHNFbV2ZEc%2FzTTKsja%2B%2BVTse2aYJ36wNZbG81tZXWUpqWwVvHJYhVspWWQPcBsazVevpJ7pi%2FsikHAtWpl4KFJ4YTwpFF331igAgflkNnWCoGzeer1jSUdRlM4485y09vE4enuj5LGdQ863yOyPEKofETbmzSJCHAlILUlenZFKmrfz1%2BykaGs22eGejs5HCLPkpA0xYmbwyZdSD7aJcuRfz6fsePf57rdpk6HeOHB2ByvperVuHTtxH8%2FGGXpqMUwGE%2BN1ZJZxMPG%2Fmr0GOqUBUvCsBJGXlaLXXOAhEXXnERh3IBam8E4Dg1Qe7k1oyzj9RMFM8oRisQy3ymVWmt68m2b2nu7UDo75TuOC%2FxSAtERa0ReZS9THWnPyG5VsfYBD7zyV2JfqAdiM05sIeaNWvJ1%2F3f8e%2F%2FJRfIFMOTsU0Is43cGNRsRdbo%2BTY9iX4boA5QNK9fMeJsG%2FQn4Ywqlq52uDy64vFg4nOS51tw61Zca8%2BDGB&X-Amz-Signature=f91cc3b0a2642668b12ed7b8ea164d98e06e1c6d2ca5080125175c4f20600da5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
