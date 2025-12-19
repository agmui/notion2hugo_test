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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNZXCSPB%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKjHGdkxqdfMl83TPE9U1kz4gilJggz1G5p0BeBF4QLQIgMACrk8q44u5kmOBvYTKxqhhOdOpi7l40vAe2jb%2B%2BNa0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAw4%2FfQ7f%2BuaUM51%2BircA1Z%2BYl5AZDv7mQz35PsCm35xWOeqTV099uE2v2w4wdqMJUM9H89Bt0pxKTcm1HF%2F%2Bfx0m72skHbHlDf9%2B2nMVckP0%2BavGJfHHwmqUxFDM0LRvsLlV1Irnyi7h5J91rKbMoYjfpCwWULcmo6E8b2agmflM8Wy5U3t%2BRNreA1YLY0rILBYVkHRIc4XAK8sQP96p%2F7JkBl5ueSxpqJMo9xj4jWAEUd4i08%2Bx9ghcne7guG7E3QevIjuefiYts%2Bpe38mV8QcWVvhSYpWvPz0LViUGg%2BmPi71ISmdbE7PozUFuP6mDWcNgSduAsOFssP8epB9%2BptXXbmKUQZb%2Fij8tul1%2BqPX1yR7%2Frm1YxG1mgeZsA4ycC807pZAUoFFG6m%2FvQ9X8jm46nPqAMoxommlK3U4z9fiYbQQdDxU94c8Oo0IkTWqyvofUr9%2F%2FYtQcBQ6yje1qjxmcwwfwvWL3O5851VLgiwInpmPlItLkpIUrkUu6NSVW%2BgDRTUm1mi%2BTpy6WBPifegts9fhehRqCUcdgFQoClkBQ0ozQo0TDMaCo9URK5iTG%2BFfayJpDgVjMGPWc7BbXKd5fH2%2FAgrIf8CgFCE%2FCAIaw1r5%2BQkazDYeCFcpXVYtTUmXXfBsFgXPpLX9MKHHksoGOqUBhuMymTMEGevZQfj0Pt9cJF36KwUVSVAh24JgrUWCt15shTVcGSlLVPCt6JGnsEMIEXqZhhVJ%2BIiZLS3AC%2F2nl00rpnTq%2FvcLm3pmcdVYO4Tl7yCCWa3zvkZCDXKNvGE%2Fj66DaV66k26MpLHt2n8WMpjP2xZ6QwrCc%2FglM0oBvAfWeaoUoz1sM1eH6lqggA6PLZG4BqZfv%2FIyWYTXd7jxJxLWMiDe&X-Amz-Signature=883f8643ac95a9c3f1cf4d1423add44e70f7095cdce021ba8c9820586653e6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNZXCSPB%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKjHGdkxqdfMl83TPE9U1kz4gilJggz1G5p0BeBF4QLQIgMACrk8q44u5kmOBvYTKxqhhOdOpi7l40vAe2jb%2B%2BNa0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAw4%2FfQ7f%2BuaUM51%2BircA1Z%2BYl5AZDv7mQz35PsCm35xWOeqTV099uE2v2w4wdqMJUM9H89Bt0pxKTcm1HF%2F%2Bfx0m72skHbHlDf9%2B2nMVckP0%2BavGJfHHwmqUxFDM0LRvsLlV1Irnyi7h5J91rKbMoYjfpCwWULcmo6E8b2agmflM8Wy5U3t%2BRNreA1YLY0rILBYVkHRIc4XAK8sQP96p%2F7JkBl5ueSxpqJMo9xj4jWAEUd4i08%2Bx9ghcne7guG7E3QevIjuefiYts%2Bpe38mV8QcWVvhSYpWvPz0LViUGg%2BmPi71ISmdbE7PozUFuP6mDWcNgSduAsOFssP8epB9%2BptXXbmKUQZb%2Fij8tul1%2BqPX1yR7%2Frm1YxG1mgeZsA4ycC807pZAUoFFG6m%2FvQ9X8jm46nPqAMoxommlK3U4z9fiYbQQdDxU94c8Oo0IkTWqyvofUr9%2F%2FYtQcBQ6yje1qjxmcwwfwvWL3O5851VLgiwInpmPlItLkpIUrkUu6NSVW%2BgDRTUm1mi%2BTpy6WBPifegts9fhehRqCUcdgFQoClkBQ0ozQo0TDMaCo9URK5iTG%2BFfayJpDgVjMGPWc7BbXKd5fH2%2FAgrIf8CgFCE%2FCAIaw1r5%2BQkazDYeCFcpXVYtTUmXXfBsFgXPpLX9MKHHksoGOqUBhuMymTMEGevZQfj0Pt9cJF36KwUVSVAh24JgrUWCt15shTVcGSlLVPCt6JGnsEMIEXqZhhVJ%2BIiZLS3AC%2F2nl00rpnTq%2FvcLm3pmcdVYO4Tl7yCCWa3zvkZCDXKNvGE%2Fj66DaV66k26MpLHt2n8WMpjP2xZ6QwrCc%2FglM0oBvAfWeaoUoz1sM1eH6lqggA6PLZG4BqZfv%2FIyWYTXd7jxJxLWMiDe&X-Amz-Signature=9aa60b30856d6bc14e4b73bcb84648cfcc05658790c04ffbc6d06cd88bd74460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
