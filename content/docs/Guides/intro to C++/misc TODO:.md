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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5XIW4J%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdMv6TJ4y4byqkEq546qv90ac68SN2vQBvvHMeD4hCXAiB5wz8Lbk%2FmvNVQruaXckJtHIpaPrtxKCRsZRK6OuPvtCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMyNUMk7P6op3lpfbQKtwD9zmv3g%2BCECv1fxvETMY9%2FiMLDDZR5wOfbhMrnMQzFSeoX%2FFYcH8UR5e%2Bmt0%2BNF3m1Jd7h%2F4Flnz4Ksu%2F6RlUrwQ4k3K%2BimoIs%2BdZjrWS9qv2lrue08W5b90FMCaxz7qaw2LGgE3NBbqWLrLNp%2B34MEse7mI9pVSkFn2lKPXcXxjmIp7wpcqiIPhpSm%2F%2F4R8VjdWatRXL2vMI1ZlTHjfTZSvh8%2FTUFmCZYeirMKAGaxKYzQlExc5hX%2Fi675efLKt7ND7g3H18xI6WvAhrr%2FaSoqoq4Hsmm3iBTbaf8ExAZMRyD8Ipye%2FsjhCCir4j7YurrZWgeG17%2Bb3wm8JGbn1f%2FCvQ%2Fb1K%2F4ZmnPWtW5Kp6IDzafqsxsT4YEUeWJHqCjWiXA63kUF7fGMQiTrFL2B3ztv1A7exGc1Nhhp2DUrd0f4ZFShU%2B5xjwBl4fUUpfqwk3u6qwVFlCC78rKp%2FSP9J9l8h9N8EKg%2Fftcjnj1rEeyRKYO%2Bjaol7Kel4LhgqoEdwiCVLDVt5dwgNpYKQupW%2BI3ojoALFMu3PlCRf1p56TJLjGTYehoRtJ2NLI8j3Rj8O0Cf%2BaYQkxFbW%2BbtnC1JVIV5xh01zuECIK%2B0ZCGj9I%2Fh1EfkWvOHo8dcFsQUw4YC6xAY6pgE07XB%2BtA%2BEKaNw4LX2eEe1b%2Bmwzn%2FK%2FwQZdxBTKpnfRSwfd7FDC5VAPkM9rlG%2B0wRdpnJfVg0qOPT3U5OSa9Z7LTnPmHmW7KJwMTA61yuMBsDfLuPRbanx0T7V%2Bu6lrPK%2BvWk8BIf51J%2BWSBZ47Rnnjy0JmDYXs81kSstsNQdgcW10n3T04X1adUW4HV6jQS9HyfAr7w8t0FQvLJKAbO5fINQrPqPM&X-Amz-Signature=b28df1eef69d8d6e056f3a855c6b777c2673875546150f5f22040ccbd575a7a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5XIW4J%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdMv6TJ4y4byqkEq546qv90ac68SN2vQBvvHMeD4hCXAiB5wz8Lbk%2FmvNVQruaXckJtHIpaPrtxKCRsZRK6OuPvtCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMyNUMk7P6op3lpfbQKtwD9zmv3g%2BCECv1fxvETMY9%2FiMLDDZR5wOfbhMrnMQzFSeoX%2FFYcH8UR5e%2Bmt0%2BNF3m1Jd7h%2F4Flnz4Ksu%2F6RlUrwQ4k3K%2BimoIs%2BdZjrWS9qv2lrue08W5b90FMCaxz7qaw2LGgE3NBbqWLrLNp%2B34MEse7mI9pVSkFn2lKPXcXxjmIp7wpcqiIPhpSm%2F%2F4R8VjdWatRXL2vMI1ZlTHjfTZSvh8%2FTUFmCZYeirMKAGaxKYzQlExc5hX%2Fi675efLKt7ND7g3H18xI6WvAhrr%2FaSoqoq4Hsmm3iBTbaf8ExAZMRyD8Ipye%2FsjhCCir4j7YurrZWgeG17%2Bb3wm8JGbn1f%2FCvQ%2Fb1K%2F4ZmnPWtW5Kp6IDzafqsxsT4YEUeWJHqCjWiXA63kUF7fGMQiTrFL2B3ztv1A7exGc1Nhhp2DUrd0f4ZFShU%2B5xjwBl4fUUpfqwk3u6qwVFlCC78rKp%2FSP9J9l8h9N8EKg%2Fftcjnj1rEeyRKYO%2Bjaol7Kel4LhgqoEdwiCVLDVt5dwgNpYKQupW%2BI3ojoALFMu3PlCRf1p56TJLjGTYehoRtJ2NLI8j3Rj8O0Cf%2BaYQkxFbW%2BbtnC1JVIV5xh01zuECIK%2B0ZCGj9I%2Fh1EfkWvOHo8dcFsQUw4YC6xAY6pgE07XB%2BtA%2BEKaNw4LX2eEe1b%2Bmwzn%2FK%2FwQZdxBTKpnfRSwfd7FDC5VAPkM9rlG%2B0wRdpnJfVg0qOPT3U5OSa9Z7LTnPmHmW7KJwMTA61yuMBsDfLuPRbanx0T7V%2Bu6lrPK%2BvWk8BIf51J%2BWSBZ47Rnnjy0JmDYXs81kSstsNQdgcW10n3T04X1adUW4HV6jQS9HyfAr7w8t0FQvLJKAbO5fINQrPqPM&X-Amz-Signature=a007ad84d671357c6bf5ada43a4b826136b23682a4a32a9dff88872cc7adb72c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
