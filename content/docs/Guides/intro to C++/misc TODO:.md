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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675EAFWPI%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCpJkQz30YPe9B%2BcWiXzrNM0%2FXYIGWX8jeVdTwY53rlAiEAvJ64IEr2Jhf7gS5D6MT3JMBtIEhNnFkrP7j4zMXDSFkqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRnRsrMpBeokPlprircA%2FmJUP7W1gFNv8jHDTJAWo5iuRBYVwMdWA7CgVESmxPyw86a385TcDzKu9zMLy8r%2BZoQ4dlAzAqb0MWGpaXOKNvFIN1ZUXQ%2BccTI3nmkQlBAWpUYYsJqWlLHLuakhwxnRspPhKupxsk2HPY0giX8ubmF9PqsBA1bV6Sv8PzJZK78g5B4RfJNhtZ5UklIg1ZjM60BICq0bdUReS003bmFfGgIF8drIdpAJUHyXpSjBNu2uR6PWgfvJN%2BXwa%2FI9JJvlheZU%2FSAbxVB1u9dxR%2FyOPryQ18wekOCT1M3QwkANOfFi6MFeT3xO8uMIm5BurvllykK6PBVQAeDxZ7nfgjx2HYAYd8bowAYkIC7VNp5wQJxICZu1RGr0zMvynWrk%2B3qbTSWz0Z8d87W5YuD9F8iXOnqGuJ32QAgCbOYqqcbDvWkDSm2gWQBog3vQU7C0hDYOWSjHPb4N1JUz5qf1NZUFrlh2%2FyVDiGQ0BS5Hsp7nnVOr67%2Bxb779Yi%2F%2B4r8xOE67BBNO834I%2FBw%2B2A1evjWALUDxMwHsyipsXaWeslS%2BrZHgIVZIecDNB%2B78uhfHSglf2VvYvZMBTHhcHKNBv893bD%2BBkfIOC%2FEUar7F%2BCRbRW2qx4s7UdojbXAop%2BzML2IkMMGOqUBr0GLr1wQN2ZCIoJhNupWqJWfLrBQrpwAMixPiZFRXD%2Bi7d4ahvDvouctcOaQZvz9Xgh0nq9NyC7pN1ZsI8%2F1mXpJnBdu3t9sHAoQjsBDbz6unKwyHKpS9u4Vzk8%2B19mqo%2FUNNAekdcSrB2wZSw0ZpaMFiixqjmx0B%2BaS7hPOTJsSh7zRY8cJcHwDTGkLJj8Em6upZSIQnzf0Q895UaGkojtIab6H&X-Amz-Signature=4000ced81e0de1856c7a5e7b5a5dd19d07164aa5ce0a109a2266a28bf2e380a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675EAFWPI%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCpJkQz30YPe9B%2BcWiXzrNM0%2FXYIGWX8jeVdTwY53rlAiEAvJ64IEr2Jhf7gS5D6MT3JMBtIEhNnFkrP7j4zMXDSFkqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRnRsrMpBeokPlprircA%2FmJUP7W1gFNv8jHDTJAWo5iuRBYVwMdWA7CgVESmxPyw86a385TcDzKu9zMLy8r%2BZoQ4dlAzAqb0MWGpaXOKNvFIN1ZUXQ%2BccTI3nmkQlBAWpUYYsJqWlLHLuakhwxnRspPhKupxsk2HPY0giX8ubmF9PqsBA1bV6Sv8PzJZK78g5B4RfJNhtZ5UklIg1ZjM60BICq0bdUReS003bmFfGgIF8drIdpAJUHyXpSjBNu2uR6PWgfvJN%2BXwa%2FI9JJvlheZU%2FSAbxVB1u9dxR%2FyOPryQ18wekOCT1M3QwkANOfFi6MFeT3xO8uMIm5BurvllykK6PBVQAeDxZ7nfgjx2HYAYd8bowAYkIC7VNp5wQJxICZu1RGr0zMvynWrk%2B3qbTSWz0Z8d87W5YuD9F8iXOnqGuJ32QAgCbOYqqcbDvWkDSm2gWQBog3vQU7C0hDYOWSjHPb4N1JUz5qf1NZUFrlh2%2FyVDiGQ0BS5Hsp7nnVOr67%2Bxb779Yi%2F%2B4r8xOE67BBNO834I%2FBw%2B2A1evjWALUDxMwHsyipsXaWeslS%2BrZHgIVZIecDNB%2B78uhfHSglf2VvYvZMBTHhcHKNBv893bD%2BBkfIOC%2FEUar7F%2BCRbRW2qx4s7UdojbXAop%2BzML2IkMMGOqUBr0GLr1wQN2ZCIoJhNupWqJWfLrBQrpwAMixPiZFRXD%2Bi7d4ahvDvouctcOaQZvz9Xgh0nq9NyC7pN1ZsI8%2F1mXpJnBdu3t9sHAoQjsBDbz6unKwyHKpS9u4Vzk8%2B19mqo%2FUNNAekdcSrB2wZSw0ZpaMFiixqjmx0B%2BaS7hPOTJsSh7zRY8cJcHwDTGkLJj8Em6upZSIQnzf0Q895UaGkojtIab6H&X-Amz-Signature=bae592cfc449490473eba9204ee265a4e93d4a77e0a03707516c61dff26ea03c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
