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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWJTV5LQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIBgkWYhnisWDbGVBqauNHM0O79x7H33Gfc1GmFce%2FG9QAiEAmhgDN946P5EaH1qrp%2BY0q9n91pr5oTSQebWuKuQTCKsqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgEnrUmcx5s4I8CrCrcAzl%2F6A7djmduviIRM%2B%2FK87D20kqz9dkvC5WVBXIBTrBTkYIpJ1LW9LrvhPiOyWvE8Qdm2HBl1ViZMp2CTJQeTl8oYeuIEqQISo4AQO%2B5xKu2xsFgqb%2B0twr2kxHzH5p7yWCluhCKHs4LM4bTdkaEOezv47sXB4Z0fZeRmrk8Z%2Fw0LJXYAHfKUVTZm11EeD8PV50UOvF6obRFq9U434XjpxsD%2BZr7YF3eOXAEymvWNAYpg7XDjODnlQWInrOx%2BsV8E21obi0SCQBeGlss%2FVj%2BodB7DLxOdpQ4VoMyKY6euIeCTp%2BfrM12KRNFtPmV%2FZUcg%2BduA06dsChuOG17ZWbineDloRIZ%2F2X89z6FR%2FA3YiLKR7dxAiDCjaw7QsfoqxeXWeZKwdb1X69q6Qoeo1YeWwJWpCPgCa90J4NTTCi%2FnexkKpZpwFtNG7Y2ughCWRQo5ewm6vZrUtcefJMq99AjX%2BGoPfKEa1aXWWnsOM03Ho%2BGRN%2BG33DvkXTXrRXMK9nvGaRZg6b4LV4k32%2F1INu90t8rt6Z8e8XVPfPcXvNMHSHXYwPWV%2BBaq9ASfyNQ35Opft21cuTrMfWPCNULcd%2F7k9rENIKDSw6j7Y%2BZeFpAIteiMJQX3RrnodgymAsJMLPH4cIGOqUBgT%2BMItOsAPpWSyaHzPZkL9q3%2BiMzNiZceO1jsvtwnzjPiZD1bPl1HJMzBSfeFMkJVWoKmGzxrQOsSuxRIi4qOPMTsHAmyObRy8IUdwXKNvX43yInQVNLBTJ4QpEfz%2BfITcr6ZMsPlV%2BRpKk0jJ2u%2B0ZRmGdcnmjbghxYyhezeVv50F6n0lze95GbjLWJAEahXIkt%2F5JfWlrLYqZLEWTS16Tf9Q9o&X-Amz-Signature=5fba06a38773f27635f6970f8c932e96bdb45a3fb2428cf86f69879842a3f5e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWJTV5LQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIBgkWYhnisWDbGVBqauNHM0O79x7H33Gfc1GmFce%2FG9QAiEAmhgDN946P5EaH1qrp%2BY0q9n91pr5oTSQebWuKuQTCKsqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgEnrUmcx5s4I8CrCrcAzl%2F6A7djmduviIRM%2B%2FK87D20kqz9dkvC5WVBXIBTrBTkYIpJ1LW9LrvhPiOyWvE8Qdm2HBl1ViZMp2CTJQeTl8oYeuIEqQISo4AQO%2B5xKu2xsFgqb%2B0twr2kxHzH5p7yWCluhCKHs4LM4bTdkaEOezv47sXB4Z0fZeRmrk8Z%2Fw0LJXYAHfKUVTZm11EeD8PV50UOvF6obRFq9U434XjpxsD%2BZr7YF3eOXAEymvWNAYpg7XDjODnlQWInrOx%2BsV8E21obi0SCQBeGlss%2FVj%2BodB7DLxOdpQ4VoMyKY6euIeCTp%2BfrM12KRNFtPmV%2FZUcg%2BduA06dsChuOG17ZWbineDloRIZ%2F2X89z6FR%2FA3YiLKR7dxAiDCjaw7QsfoqxeXWeZKwdb1X69q6Qoeo1YeWwJWpCPgCa90J4NTTCi%2FnexkKpZpwFtNG7Y2ughCWRQo5ewm6vZrUtcefJMq99AjX%2BGoPfKEa1aXWWnsOM03Ho%2BGRN%2BG33DvkXTXrRXMK9nvGaRZg6b4LV4k32%2F1INu90t8rt6Z8e8XVPfPcXvNMHSHXYwPWV%2BBaq9ASfyNQ35Opft21cuTrMfWPCNULcd%2F7k9rENIKDSw6j7Y%2BZeFpAIteiMJQX3RrnodgymAsJMLPH4cIGOqUBgT%2BMItOsAPpWSyaHzPZkL9q3%2BiMzNiZceO1jsvtwnzjPiZD1bPl1HJMzBSfeFMkJVWoKmGzxrQOsSuxRIi4qOPMTsHAmyObRy8IUdwXKNvX43yInQVNLBTJ4QpEfz%2BfITcr6ZMsPlV%2BRpKk0jJ2u%2B0ZRmGdcnmjbghxYyhezeVv50F6n0lze95GbjLWJAEahXIkt%2F5JfWlrLYqZLEWTS16Tf9Q9o&X-Amz-Signature=c074c579fbab25f693505c4d672d9c5996c24ea2a797222f69989b755cba081f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
