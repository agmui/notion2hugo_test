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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MINBWEC%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQClTtAG6uQ6QRdai7kGKJOBci4Dx4qjgArWkRqrQ%2FytSAIgX9hnvjGXAgBcH1VkKiouN9FAiNQvjadU%2FZmSz3%2FwVIwqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFqeUXRbTFIcdkvEircA6NgxMkOi3qhLnMVmS7tYF1lgB0XNRf34rV9Hjj7NX3vtnczSefLfsWt7zDaDDumrR2zySp9U57IdwafIanvSzzL0VKyh%2BY7EygJKiBaMOeOxxRy8olQ0i6%2F5ly8aJp5Up4ttIcVz8i%2FiU0Fhy0JMoyfRfMZpLXkdvY6V54c%2F%2FnFGXU82sA%2Bd0XBwtju0oRHKAl1umv5Tc1AJNUp6VrXj8YjMiLQKfwkB6%2BDV9AAQe5jvqXaPG0aZBglDpVrVgZrYtcgoTrR8pzJE0r98uWv3JC6zyka3smwIqvcfWCRakVY43nP3%2FQsBRC%2BfWtm8mu67y3JT1tOWX2ql9ikwjq8Xw3n%2Bi34hg5R2JI8D39xNJc%2F26LoTF6pVtJ89GbIb%2B3AW2axJ0KmUaJoZ03v6isJmxdCqhP4EGpZ8KSK8zs6Ek2O62Maeyuw0Ok%2BfOkXSIUFVuxgumRaYdUtKOXcSTkbcg7DLbTeOfdBDFs1xbRhekLCHchbQn%2BNsDfJcqGhBkfvLrCOkA9xqobLw%2FVB9peawuOI6esDJyVISZ%2BLYZj7vjhpSH4BhSOC8NNt8HG5ctJoxdzLD0Func%2B18IOUJHSXV9DHLGC3vVovg%2F6%2By0qNCRmRVLm2I7p%2FYMiVFwhbMJPXpMAGOqUBh2Dqn7lks9ob6PD6DtcFhb%2FA%2FpIdIMfgZgMODl7xYXdZmR3kKhT3hccI%2FKGnWPHwarnSYTbL%2BlezVxXS8apmy8BHJlbvCb2iMO1wS%2BCHH5yjYbDX3sHdPTxqbeY%2BRRoU4WXkUjNnJMb2834elUXxIsGPgN1mjOeq1bicO6ORLTcq4Y8WjNLY1gMFuLkxBlSr6SrB0UHRJtlN2ZaXfT32SvezOHyy&X-Amz-Signature=f0e922fe18504901a2bcc9d85b5dffd4ef89fa3d5ac813c358bffdaa78fc7835&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MINBWEC%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQClTtAG6uQ6QRdai7kGKJOBci4Dx4qjgArWkRqrQ%2FytSAIgX9hnvjGXAgBcH1VkKiouN9FAiNQvjadU%2FZmSz3%2FwVIwqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFqeUXRbTFIcdkvEircA6NgxMkOi3qhLnMVmS7tYF1lgB0XNRf34rV9Hjj7NX3vtnczSefLfsWt7zDaDDumrR2zySp9U57IdwafIanvSzzL0VKyh%2BY7EygJKiBaMOeOxxRy8olQ0i6%2F5ly8aJp5Up4ttIcVz8i%2FiU0Fhy0JMoyfRfMZpLXkdvY6V54c%2F%2FnFGXU82sA%2Bd0XBwtju0oRHKAl1umv5Tc1AJNUp6VrXj8YjMiLQKfwkB6%2BDV9AAQe5jvqXaPG0aZBglDpVrVgZrYtcgoTrR8pzJE0r98uWv3JC6zyka3smwIqvcfWCRakVY43nP3%2FQsBRC%2BfWtm8mu67y3JT1tOWX2ql9ikwjq8Xw3n%2Bi34hg5R2JI8D39xNJc%2F26LoTF6pVtJ89GbIb%2B3AW2axJ0KmUaJoZ03v6isJmxdCqhP4EGpZ8KSK8zs6Ek2O62Maeyuw0Ok%2BfOkXSIUFVuxgumRaYdUtKOXcSTkbcg7DLbTeOfdBDFs1xbRhekLCHchbQn%2BNsDfJcqGhBkfvLrCOkA9xqobLw%2FVB9peawuOI6esDJyVISZ%2BLYZj7vjhpSH4BhSOC8NNt8HG5ctJoxdzLD0Func%2B18IOUJHSXV9DHLGC3vVovg%2F6%2By0qNCRmRVLm2I7p%2FYMiVFwhbMJPXpMAGOqUBh2Dqn7lks9ob6PD6DtcFhb%2FA%2FpIdIMfgZgMODl7xYXdZmR3kKhT3hccI%2FKGnWPHwarnSYTbL%2BlezVxXS8apmy8BHJlbvCb2iMO1wS%2BCHH5yjYbDX3sHdPTxqbeY%2BRRoU4WXkUjNnJMb2834elUXxIsGPgN1mjOeq1bicO6ORLTcq4Y8WjNLY1gMFuLkxBlSr6SrB0UHRJtlN2ZaXfT32SvezOHyy&X-Amz-Signature=c663d0a80aa7fbe3118858670f2d1ecb6ceb6e777c1c7ba501faaab7dadc2f67&X-Amz-SignedHeaders=host&x-id=GetObject)

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
