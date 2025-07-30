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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZMWB5YE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcGghrtJkL6c%2BkM8gvtpRYlmzivukc1UKfb2VnUs0ScAiEAg1RwUM8QGO%2FENfFYmPTz7m6tEq1lDiamkUKgGQ3o%2BLQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCy7TI7jhqyMnCqBuCrcAzbldw4aOM7YMJdNvZckrF4Nr7coM8y8bX0OG5NqlMSsaIKQ%2B9fgCN1%2FijEUiD3vsr2Xm33wW05nRJftPKFbigDHNrTFO64oIExl850Kwm5eMpdtYSENLw%2F6BjJnbv0gfuzbHKkEmzTwNwVO6SohhCeP0TgwhxTAFQepEh2%2Fvs5v2QdnJzPkasEz4b8cI%2F62NcwS9RGRa1Ir4aZtQa%2BOZz%2FuQIH6%2BavR9AiqudWeiG90u8HBvIRLEiI139O4SJaR8hR5KGUA6ZAd23zXRJPCTL%2Fx605bPkle7QSDZWPV2RDm08e2f6oQVxKVo7mHd%2BFZZ4ZUak8phCR4wDbFy%2BaNJ7qCr1XbhyC9zmjwxWKu4ART06MzvR1zjdhtXfpTRRj6fBP95Ow3Ql%2BycoM5XoTo1QoNPByeOHzs4UT1fd3rHpo7fPNIY8PIsgDU76R9TY0WGcX2VCsXliHMQJSYCiPJCPIN4qIQQipIID1NuGtw%2FHVACrIUkbPu1OlgU0IUEPz6ICSusJji86Wl9ukzHtkGkNgGZbZd3CB9TVaEZ6Pr2QmEwSaNWEeJjhletvok%2F9PYTwnKed6qtkCd8g3J65ifQ1vG9pHoEgQQMvWGwvX%2BrxKJ5e64qcjeVaLPi50qMP%2FoqcQGOqUBwkw9RcMdImZ5aKXS0r7p8Xs%2Fv%2FdpbY%2BJk%2FLik8CywO7pSeobiKGRF%2Bcmw2TCTlU8dgAXQbC7UyxHwK64usBsVblVC11leirbOLZEc6Ww9DdRMbsgvSfaPsf4eMEcSrvHmjDwcpJTl2OIAOu6w58znruSMywrK5l6jVK4dBymlRPvoXes3gXm1kApb96zDC1Ie%2Fl2p%2FZ6txFMKCEN%2B%2FaglgJN3gmx&X-Amz-Signature=705a35d3ef59fd98d1220bd3e1cbabad1ceb1c79632625857b81b795ede1efbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZMWB5YE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcGghrtJkL6c%2BkM8gvtpRYlmzivukc1UKfb2VnUs0ScAiEAg1RwUM8QGO%2FENfFYmPTz7m6tEq1lDiamkUKgGQ3o%2BLQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCy7TI7jhqyMnCqBuCrcAzbldw4aOM7YMJdNvZckrF4Nr7coM8y8bX0OG5NqlMSsaIKQ%2B9fgCN1%2FijEUiD3vsr2Xm33wW05nRJftPKFbigDHNrTFO64oIExl850Kwm5eMpdtYSENLw%2F6BjJnbv0gfuzbHKkEmzTwNwVO6SohhCeP0TgwhxTAFQepEh2%2Fvs5v2QdnJzPkasEz4b8cI%2F62NcwS9RGRa1Ir4aZtQa%2BOZz%2FuQIH6%2BavR9AiqudWeiG90u8HBvIRLEiI139O4SJaR8hR5KGUA6ZAd23zXRJPCTL%2Fx605bPkle7QSDZWPV2RDm08e2f6oQVxKVo7mHd%2BFZZ4ZUak8phCR4wDbFy%2BaNJ7qCr1XbhyC9zmjwxWKu4ART06MzvR1zjdhtXfpTRRj6fBP95Ow3Ql%2BycoM5XoTo1QoNPByeOHzs4UT1fd3rHpo7fPNIY8PIsgDU76R9TY0WGcX2VCsXliHMQJSYCiPJCPIN4qIQQipIID1NuGtw%2FHVACrIUkbPu1OlgU0IUEPz6ICSusJji86Wl9ukzHtkGkNgGZbZd3CB9TVaEZ6Pr2QmEwSaNWEeJjhletvok%2F9PYTwnKed6qtkCd8g3J65ifQ1vG9pHoEgQQMvWGwvX%2BrxKJ5e64qcjeVaLPi50qMP%2FoqcQGOqUBwkw9RcMdImZ5aKXS0r7p8Xs%2Fv%2FdpbY%2BJk%2FLik8CywO7pSeobiKGRF%2Bcmw2TCTlU8dgAXQbC7UyxHwK64usBsVblVC11leirbOLZEc6Ww9DdRMbsgvSfaPsf4eMEcSrvHmjDwcpJTl2OIAOu6w58znruSMywrK5l6jVK4dBymlRPvoXes3gXm1kApb96zDC1Ie%2Fl2p%2FZ6txFMKCEN%2B%2FaglgJN3gmx&X-Amz-Signature=0982c237bc65579b76219fcfe8213e9adfcb6a850ef5cb6e5272e69549e7d28e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
