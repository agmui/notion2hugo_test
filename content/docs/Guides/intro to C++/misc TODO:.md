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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QCF2HOM%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvGxofOuTjog5NGzgJRRjLe2WfsvYK0z2Z2OoszBOG5gIgIaZ5y0JBuQp9MJhnzHwhi1VOlE7yWk0aPoq0uJafP6Iq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJDd1tspeV%2FOcaqMRyrcA9BWHnogTqO01EIMmqyZkS1zp6TKZ4mdNvk1Jbo4jzeUG2GzGcQAa0sHFaj5tcp7l1XwGfDv9aeK7wj22uklI65xoiczpaWQhG7cJ41uk%2BBUmyV68Ti4igSNoWdX%2B43uPHZ7YJ7PL%2BkjYfg2VaagRyLX%2FQ3GP0dGDxDqZMsS8IRTj4TH%2B%2FEFDlEqlPIugIsj4utMHJ8m%2FA%2BzaSC3j50ztfDNKxeR5IAnyZo%2BEcKVSerdOqzvhABB3je%2BCEXgYLbzbhdzyZhSBpPNrCIfbVVeS7UlQexwVIwhk1dZAn0oRob1tpg7224D3ohrXaMb1YfqhxzaGXHqKujA01FeKY3jjQkIGZQckCcYRKzJUFmGyb5SjJ%2BjHJW9Y13kRSWreneYbMp7DOxKaOfSmj%2FcMnDk6W9iKSZolMX3lbKBoYC7VbbCT0jXe0PnPqzVhyPAAzuAy6Ra8lf6fgFyAxPGJJQsPAKq0XqYUzh0psHGC76QQc0aR%2Fm6emlkXBPeu48v0GmWSc0BErvZ7dccG4mLr29lD9Vm3QWbzw0QVhXX2E0AxULKK2JNQgP425Kgaa8VPPfYDAwA%2Bt1WLAceNIBltI8%2B4zFP94iDH7J57MdYtZjVlBzF%2BEvNPf1J8tESHh4JMPmQ3sEGOqUBhhHqdeBpKIsmUwgTwC%2FwCPtZ8Pv%2F4zDblOmz7w6oeTR%2BmSzNEhN2h0C%2FaIA2sFbMAfaNsVWCZB%2FBiDPcHumPYdltvU5wU263Vnp0tkBR94tYCY1Km83kZ91O7CQJ8wbMVzpoztHSgj9Gub7bbVeFkbkoy6ucKOO7ddI9kFyJWZCpqDtM2QT2xZB1%2BMr9k%2FygIvXs62uUkcDA6RmblVsAJzhHCT%2BO&X-Amz-Signature=2750ea2d33b4a46bb52c1737d2b41cf4ea455ed42be991baeafeb9d2e9944341&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QCF2HOM%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvGxofOuTjog5NGzgJRRjLe2WfsvYK0z2Z2OoszBOG5gIgIaZ5y0JBuQp9MJhnzHwhi1VOlE7yWk0aPoq0uJafP6Iq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJDd1tspeV%2FOcaqMRyrcA9BWHnogTqO01EIMmqyZkS1zp6TKZ4mdNvk1Jbo4jzeUG2GzGcQAa0sHFaj5tcp7l1XwGfDv9aeK7wj22uklI65xoiczpaWQhG7cJ41uk%2BBUmyV68Ti4igSNoWdX%2B43uPHZ7YJ7PL%2BkjYfg2VaagRyLX%2FQ3GP0dGDxDqZMsS8IRTj4TH%2B%2FEFDlEqlPIugIsj4utMHJ8m%2FA%2BzaSC3j50ztfDNKxeR5IAnyZo%2BEcKVSerdOqzvhABB3je%2BCEXgYLbzbhdzyZhSBpPNrCIfbVVeS7UlQexwVIwhk1dZAn0oRob1tpg7224D3ohrXaMb1YfqhxzaGXHqKujA01FeKY3jjQkIGZQckCcYRKzJUFmGyb5SjJ%2BjHJW9Y13kRSWreneYbMp7DOxKaOfSmj%2FcMnDk6W9iKSZolMX3lbKBoYC7VbbCT0jXe0PnPqzVhyPAAzuAy6Ra8lf6fgFyAxPGJJQsPAKq0XqYUzh0psHGC76QQc0aR%2Fm6emlkXBPeu48v0GmWSc0BErvZ7dccG4mLr29lD9Vm3QWbzw0QVhXX2E0AxULKK2JNQgP425Kgaa8VPPfYDAwA%2Bt1WLAceNIBltI8%2B4zFP94iDH7J57MdYtZjVlBzF%2BEvNPf1J8tESHh4JMPmQ3sEGOqUBhhHqdeBpKIsmUwgTwC%2FwCPtZ8Pv%2F4zDblOmz7w6oeTR%2BmSzNEhN2h0C%2FaIA2sFbMAfaNsVWCZB%2FBiDPcHumPYdltvU5wU263Vnp0tkBR94tYCY1Km83kZ91O7CQJ8wbMVzpoztHSgj9Gub7bbVeFkbkoy6ucKOO7ddI9kFyJWZCpqDtM2QT2xZB1%2BMr9k%2FygIvXs62uUkcDA6RmblVsAJzhHCT%2BO&X-Amz-Signature=232479f0ce48ffc4b32928d80d7f934a8e80a252f4d7d706a39378f3ad629ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
