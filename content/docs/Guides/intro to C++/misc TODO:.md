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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666UI44HL%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzKFPVW9LNDrl1V3aAt1acBJJuVmqbiKvHPNGXbBqJsQIgS2lYoEJ8gLEt2Mf48TPigrh9qAR3MPtnqax6hNP7Sv4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMI1vzZ9eOx8YBlmCrcA9LVKt2zQsQNUHtVwBDxAPKZVs%2FU1EBmGap4svX9AU3dIgviZQC4N8VzfGv1Cl59vPW%2F5tPAMik4ghWZctGdgPhajFGqMSGY5dWtjtiJFvhiGh%2F1I0O0EZTF%2BZOq3M%2BBCF2vqPyGJR9YFwvj5fmoFgx7W8lfzFT%2B13MiN04NFYz0bcVPwiq3hSMJxefMiFeHJYqu7uW9Dj2z3KB4wTyRMvp6J%2BvXeq7vhha5zr43gmVdbmlP%2FVVR843ZICT2Ym6hkKi8IwfqFHKLzUG1PZo10%2FPcBklkCSmRxYMiEjiTEg%2FG8%2BgJQf1KNTecvhDvAJXIpdsHJOspJR2cu3X9e2xLcI9gqttdszvJIiEC6raZJhqghbQnuac8qTVPtHgu1CYP3KEq0aiAhTdLTBhPRX%2FR29Ew%2FruIIc9ZZsbQdl6D4sVvTuLa5h%2FisJZJEnwW6kLdcDOhOPsNu4RLtdJD7PN4j01RPq1tA7yoSEvh7MTy66bFpTP04NC9LasFNpTNCJrC4uDlITvz3DQpcqKkIU27xXCOjEva0jIX1SttS25JS%2BUA%2FWfQlqJ1uygqVW7MnLT%2BMEfw6GbaRVr%2F1ru4OuDS46c2MCTveYJrzlmmqnM%2B62Y%2B23NG%2BWl%2FvW3XyPfrMP3Ru78GOqUBD%2BqjbVjYp8U6UTTDJ136kZCjHbfT%2BlxEuyDCr4Rvy%2FLyxVkpO31aciLclpwyrlDai%2BoJ%2Fwn%2FdturVAUZI2wfi9g1KZRn1SEczzm5p%2B7G11RDzim5NlS%2BgRp3uL45x15kCu8Lq7j9cjITCvB5TxAqwZt5ra4lhppI0%2FluPyTW1M6TjhvmphGbZd1jAXdptVZSgjh9hFreUqit8DTia1%2F3qsxomJOn&X-Amz-Signature=bb9706d54e128790f79d135213d76edaa2d733c0a83ea4cf23b77d7338e1616e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666UI44HL%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzKFPVW9LNDrl1V3aAt1acBJJuVmqbiKvHPNGXbBqJsQIgS2lYoEJ8gLEt2Mf48TPigrh9qAR3MPtnqax6hNP7Sv4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMI1vzZ9eOx8YBlmCrcA9LVKt2zQsQNUHtVwBDxAPKZVs%2FU1EBmGap4svX9AU3dIgviZQC4N8VzfGv1Cl59vPW%2F5tPAMik4ghWZctGdgPhajFGqMSGY5dWtjtiJFvhiGh%2F1I0O0EZTF%2BZOq3M%2BBCF2vqPyGJR9YFwvj5fmoFgx7W8lfzFT%2B13MiN04NFYz0bcVPwiq3hSMJxefMiFeHJYqu7uW9Dj2z3KB4wTyRMvp6J%2BvXeq7vhha5zr43gmVdbmlP%2FVVR843ZICT2Ym6hkKi8IwfqFHKLzUG1PZo10%2FPcBklkCSmRxYMiEjiTEg%2FG8%2BgJQf1KNTecvhDvAJXIpdsHJOspJR2cu3X9e2xLcI9gqttdszvJIiEC6raZJhqghbQnuac8qTVPtHgu1CYP3KEq0aiAhTdLTBhPRX%2FR29Ew%2FruIIc9ZZsbQdl6D4sVvTuLa5h%2FisJZJEnwW6kLdcDOhOPsNu4RLtdJD7PN4j01RPq1tA7yoSEvh7MTy66bFpTP04NC9LasFNpTNCJrC4uDlITvz3DQpcqKkIU27xXCOjEva0jIX1SttS25JS%2BUA%2FWfQlqJ1uygqVW7MnLT%2BMEfw6GbaRVr%2F1ru4OuDS46c2MCTveYJrzlmmqnM%2B62Y%2B23NG%2BWl%2FvW3XyPfrMP3Ru78GOqUBD%2BqjbVjYp8U6UTTDJ136kZCjHbfT%2BlxEuyDCr4Rvy%2FLyxVkpO31aciLclpwyrlDai%2BoJ%2Fwn%2FdturVAUZI2wfi9g1KZRn1SEczzm5p%2B7G11RDzim5NlS%2BgRp3uL45x15kCu8Lq7j9cjITCvB5TxAqwZt5ra4lhppI0%2FluPyTW1M6TjhvmphGbZd1jAXdptVZSgjh9hFreUqit8DTia1%2F3qsxomJOn&X-Amz-Signature=be03e9410a0422f38872de6c16797c2fa82fbcfc9070c52300bfb20c84b895be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
