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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNUDWSR4%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPGlQjNU30OSKxkN1rEmqv%2F%2Bi5bvMExlisUCs81O52qAIhAP8MkPonWs5mmIQfv2DDjLaHenJnmVChi%2FUlpQMy6qJ6Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzbobdQgM0caR6Xio8q3ANkES6lHHDG2Xp07WjQhZrP%2BByBd4wMW5fR%2B5laVEm4tqVZsGkNKldYI5IjMy3SAXonNCCU4aJlz1RVumdoFVTioLTUEqPjyJh6CrHStwEG%2FNvcNFVx4EPSENJ7kKYI3I3wwizMSORyt6if%2BDe4DA9Qr0tUfrRnDOlYHkWKsUO9EOZWkToBGjcdmu0N8oit5UL73QaS5RxL2RxdwDk1m6bVvNGsQla%2FRXQLVZtTwyBdz1wdnd%2FGpgSOWg62fT781fAYOOff5omX4DlsKjrwJPQy0K6MoLIr6XTtl6dur78%2B5SsZAe1A8Inofo8glR1asvDtnHZxL4jcyUQU8ejUccJ2xveamNVsv7uKnYE8VuSzJZAMKj8t6Xg0aU0ghCtajaazhhfdSWUjTYCN7d%2BRdoJR8lGdg%2FUu09jI1xHzjXSfeAhNkK%2ByFxUvbGT%2Bmcb9xLRxG28jYHXK%2FlEhFWsy%2F7gH36qe69HAanfd%2F6S90%2FU%2BEpKi%2B9sbVARU4mR1sKzwG%2BODIUcVcbMMGoVu3KCyfrvvH9B0UPFmAZY4dKIn0YJAEC5SlGKqyHqi03aEsNxiNEFlp5eHKlLXXl3DIGpSQT1cy1N6IwYeJdC98sz5SlEVojlGLn3VCnXm4iZwcjCitqLBBjqkASvQM1Gn9GL95v8daVj4%2Bph%2FOE%2BJRYWxkOwjHNXdRtLH8mlZs%2BkFL90JlDUHJCVwb%2FURKBNvx8o8mVq%2F0rLuADJAoVDXymdk0l2dnCmXF6QwpyaS7%2BnFM5oiwvhFbUMToYdRKoFlmRVBHt0atH77T2%2B5s1Zhw5YE87cJVXkVJzRATiuf6l%2BnnAhHyT9ipKc%2B7oWKN77GbLBQDeca24K59%2BvwEd0%2F&X-Amz-Signature=f4cd673ad74a12d721e93d451bf440061668cfc214113fc740b491a2d95cf56e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNUDWSR4%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPGlQjNU30OSKxkN1rEmqv%2F%2Bi5bvMExlisUCs81O52qAIhAP8MkPonWs5mmIQfv2DDjLaHenJnmVChi%2FUlpQMy6qJ6Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzbobdQgM0caR6Xio8q3ANkES6lHHDG2Xp07WjQhZrP%2BByBd4wMW5fR%2B5laVEm4tqVZsGkNKldYI5IjMy3SAXonNCCU4aJlz1RVumdoFVTioLTUEqPjyJh6CrHStwEG%2FNvcNFVx4EPSENJ7kKYI3I3wwizMSORyt6if%2BDe4DA9Qr0tUfrRnDOlYHkWKsUO9EOZWkToBGjcdmu0N8oit5UL73QaS5RxL2RxdwDk1m6bVvNGsQla%2FRXQLVZtTwyBdz1wdnd%2FGpgSOWg62fT781fAYOOff5omX4DlsKjrwJPQy0K6MoLIr6XTtl6dur78%2B5SsZAe1A8Inofo8glR1asvDtnHZxL4jcyUQU8ejUccJ2xveamNVsv7uKnYE8VuSzJZAMKj8t6Xg0aU0ghCtajaazhhfdSWUjTYCN7d%2BRdoJR8lGdg%2FUu09jI1xHzjXSfeAhNkK%2ByFxUvbGT%2Bmcb9xLRxG28jYHXK%2FlEhFWsy%2F7gH36qe69HAanfd%2F6S90%2FU%2BEpKi%2B9sbVARU4mR1sKzwG%2BODIUcVcbMMGoVu3KCyfrvvH9B0UPFmAZY4dKIn0YJAEC5SlGKqyHqi03aEsNxiNEFlp5eHKlLXXl3DIGpSQT1cy1N6IwYeJdC98sz5SlEVojlGLn3VCnXm4iZwcjCitqLBBjqkASvQM1Gn9GL95v8daVj4%2Bph%2FOE%2BJRYWxkOwjHNXdRtLH8mlZs%2BkFL90JlDUHJCVwb%2FURKBNvx8o8mVq%2F0rLuADJAoVDXymdk0l2dnCmXF6QwpyaS7%2BnFM5oiwvhFbUMToYdRKoFlmRVBHt0atH77T2%2B5s1Zhw5YE87cJVXkVJzRATiuf6l%2BnnAhHyT9ipKc%2B7oWKN77GbLBQDeca24K59%2BvwEd0%2F&X-Amz-Signature=349f083510d69130dbbf767726dda21965922987d627ee3bdb0d78c4672d1805&X-Amz-SignedHeaders=host&x-id=GetObject)

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
