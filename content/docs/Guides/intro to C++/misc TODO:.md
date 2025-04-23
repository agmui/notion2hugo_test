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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KK2GC6J%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCXDaQAwRyjYxeCFO8y1uZB7SN3BGdQA5WE1svY1e1gcwIgJsQcPUHWpt3nzvISGnYlT5K915Sc6g28e%2Fo1EzJ%2F3dwqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8la0tPqUq74DcuRircA9gxKGOK%2FksEka46LORoUJcA5HKpfdxRUXv%2FCgiGNSkPojW8kQO3L0LHSre2ydfMZ21wcUNC%2Fn4VlcB%2B7M%2BzONx56T8UTxyculJxIqCUNH1tsiE%2Bi5EKy%2BLUzGj772dzdQZ%2Ff0r4EIfmkxGOIu%2BQSfHodol4k2yFVkVL8X7K%2BtHsI7W7pXACXak5Gvs%2F1iddjCZr6uG9YlnwBiJsfrZg8aaBWbqqh%2F87PXjZ6Da%2FM60GVKE8YPxeVV8moDEA7E1c%2FlsTISM%2FW%2FdzJCdz4poy7ASXXIgqYbp%2FMnKZyIvUzeSrlJpOhr8dlaJ%2BJYSq%2FHCzfyTEUPOBkXuJ1EU1r5Z5qGwn1GMyNQrX02nVlfbhZNXUzArabWTs4JJBRXDnpB335nyDkNz6uVaSpXF6%2BtUae0AdRaAOerfQ5hclH7jyb41bZ2tFkcd9Zb43yI2kTJYCt0p23Ytm9%2FLoIAytMOU5HqDm0%2BRlPUPnZkSkIzUXTZrxmWH8rMOhPtsafnthxH3cICDJvlD7toDevkpu6CYg5%2B%2Fbdne2AmqZhAzEutJSuIliAfESDHkh1FMOi0%2Ft5XjjOrN51MicjQkw38JaZhj5WOxzxGOpafLbL5gO8tju7eSW%2F8Kn2iR5MQrlBaKGMJPXpMAGOqUBt2TkPAO8aGMEExgUjkOECIw%2Fo78EgF%2Fwp%2F%2B%2BPNR20ePwAiQw2fPob2zimuXTfvTjtCiWbZcDnKmPezfkWEcnWiB92Ttlxe%2BIIZwkhdOEv9inbXZy8mYF5cLQfQOl10jj2DSaeZSrjKZmIM%2F2aHBd6y5qtx3VgdLI8bh92%2FR12tHlbfgSWPcuhtTe24OzEHXBTUtQKzZ%2FlQJYG4qcuDOVhWqJvme2&X-Amz-Signature=9dd7934ca28cde129ee4e8fddaeb816573dd5411b764a61d987689874f292e18&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KK2GC6J%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCXDaQAwRyjYxeCFO8y1uZB7SN3BGdQA5WE1svY1e1gcwIgJsQcPUHWpt3nzvISGnYlT5K915Sc6g28e%2Fo1EzJ%2F3dwqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8la0tPqUq74DcuRircA9gxKGOK%2FksEka46LORoUJcA5HKpfdxRUXv%2FCgiGNSkPojW8kQO3L0LHSre2ydfMZ21wcUNC%2Fn4VlcB%2B7M%2BzONx56T8UTxyculJxIqCUNH1tsiE%2Bi5EKy%2BLUzGj772dzdQZ%2Ff0r4EIfmkxGOIu%2BQSfHodol4k2yFVkVL8X7K%2BtHsI7W7pXACXak5Gvs%2F1iddjCZr6uG9YlnwBiJsfrZg8aaBWbqqh%2F87PXjZ6Da%2FM60GVKE8YPxeVV8moDEA7E1c%2FlsTISM%2FW%2FdzJCdz4poy7ASXXIgqYbp%2FMnKZyIvUzeSrlJpOhr8dlaJ%2BJYSq%2FHCzfyTEUPOBkXuJ1EU1r5Z5qGwn1GMyNQrX02nVlfbhZNXUzArabWTs4JJBRXDnpB335nyDkNz6uVaSpXF6%2BtUae0AdRaAOerfQ5hclH7jyb41bZ2tFkcd9Zb43yI2kTJYCt0p23Ytm9%2FLoIAytMOU5HqDm0%2BRlPUPnZkSkIzUXTZrxmWH8rMOhPtsafnthxH3cICDJvlD7toDevkpu6CYg5%2B%2Fbdne2AmqZhAzEutJSuIliAfESDHkh1FMOi0%2Ft5XjjOrN51MicjQkw38JaZhj5WOxzxGOpafLbL5gO8tju7eSW%2F8Kn2iR5MQrlBaKGMJPXpMAGOqUBt2TkPAO8aGMEExgUjkOECIw%2Fo78EgF%2Fwp%2F%2B%2BPNR20ePwAiQw2fPob2zimuXTfvTjtCiWbZcDnKmPezfkWEcnWiB92Ttlxe%2BIIZwkhdOEv9inbXZy8mYF5cLQfQOl10jj2DSaeZSrjKZmIM%2F2aHBd6y5qtx3VgdLI8bh92%2FR12tHlbfgSWPcuhtTe24OzEHXBTUtQKzZ%2FlQJYG4qcuDOVhWqJvme2&X-Amz-Signature=b8ab9f6cec215dac4c51a7367f8abcab59cc745c5b375045674bad954078f895&X-Amz-SignedHeaders=host&x-id=GetObject)

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
