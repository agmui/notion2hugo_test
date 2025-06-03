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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R2DDY43%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDKZ%2BO9GcIDMVcEj0e2OUzNL0hCXmwXeVtHsPOp%2FMAZRwIgK46qZJZu3BqkQzbKXM1gRPpoTCw8IMFc4EveyCew%2Fv4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERF%2FXtkIj%2B3npXY%2ByrcA8OZZXC3LKll0hIltbrBbcKcbUBpC%2FhSPRDys4iVw9RqeiDbPZiLbFUenqAZlllfsWK%2BgB%2Fpnx%2BuQX%2Fv3rVRz6pjf4u0o0AP9%2B9AdrQT2yzOr8ifDnIAicRV0CB4BArvNBrszSGDHW8QSPHoOyTium9hQKEZ0pF4pIZW70ybsmeUOR3AOUQuDNci72h1jHRqyVDWxUDRRF3A2Z%2BXv3RSLymPduSLW%2BYxpZ3PauNQbtSOH2RPSpp%2Fbf9MzVl8oVdKNJiE1TG3r4SU86KQPCz4iXquslBquxmOIGrowQdSM2emaxvqLuSu4DDHwjQWSDhHRdnQ2qw0o%2B6e1XPzkUZEVr8eWmrig5P1Agfg07zsraymWfE%2FhiKCfE6IY1c8siFGkKCX%2BFXmZvEOkloGQFSOm%2FnTP7EFr99Ff69LNdVIJE5NHnFR1rXGB0OZL9F4%2F98dnbQl94wZkvlpHIk0dg992Y0guXcTeIoDnEcbTK8IUUSwjNL0lStafzNZLxQCyle8foKpERG3NHAbDkRZwKW2T6Qa08Q8XA3qGOId1oicoy7BbMsNsG6XnbWeb7zEfs%2FD8HZ%2FGhCMgL0l6sWz70upAl%2FYHOZN0L9mtJFDPGDN1YnzvY8N3z9oxtzTcY5GMNXn%2BMEGOqUBAPnhgyNtYyVkSloUXUZSoCvcq62Dp2PK3LyVRamBNB1Wg%2Bz%2BCDKmAwS5sqNfna%2BTitGchVDRzs1kWMqeHeApD%2FhgFC3qgKqjv7ZyyyfRlH2GFkqGj1YTGPRI7uvP7OFbV%2BCwX2%2B%2Fayk%2Flxw%2FbszRFAQm5VMsA9ZMc5Lwm0vGLN3YumugmDzimy7PDfstRyAQWQeLpvnVymHGJDfOyzFL01HApgm%2B&X-Amz-Signature=7d7edf97e0436bf5439b055d05278d0cb21084227d1c3ee0312cd40c2da6d3b5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R2DDY43%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDKZ%2BO9GcIDMVcEj0e2OUzNL0hCXmwXeVtHsPOp%2FMAZRwIgK46qZJZu3BqkQzbKXM1gRPpoTCw8IMFc4EveyCew%2Fv4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERF%2FXtkIj%2B3npXY%2ByrcA8OZZXC3LKll0hIltbrBbcKcbUBpC%2FhSPRDys4iVw9RqeiDbPZiLbFUenqAZlllfsWK%2BgB%2Fpnx%2BuQX%2Fv3rVRz6pjf4u0o0AP9%2B9AdrQT2yzOr8ifDnIAicRV0CB4BArvNBrszSGDHW8QSPHoOyTium9hQKEZ0pF4pIZW70ybsmeUOR3AOUQuDNci72h1jHRqyVDWxUDRRF3A2Z%2BXv3RSLymPduSLW%2BYxpZ3PauNQbtSOH2RPSpp%2Fbf9MzVl8oVdKNJiE1TG3r4SU86KQPCz4iXquslBquxmOIGrowQdSM2emaxvqLuSu4DDHwjQWSDhHRdnQ2qw0o%2B6e1XPzkUZEVr8eWmrig5P1Agfg07zsraymWfE%2FhiKCfE6IY1c8siFGkKCX%2BFXmZvEOkloGQFSOm%2FnTP7EFr99Ff69LNdVIJE5NHnFR1rXGB0OZL9F4%2F98dnbQl94wZkvlpHIk0dg992Y0guXcTeIoDnEcbTK8IUUSwjNL0lStafzNZLxQCyle8foKpERG3NHAbDkRZwKW2T6Qa08Q8XA3qGOId1oicoy7BbMsNsG6XnbWeb7zEfs%2FD8HZ%2FGhCMgL0l6sWz70upAl%2FYHOZN0L9mtJFDPGDN1YnzvY8N3z9oxtzTcY5GMNXn%2BMEGOqUBAPnhgyNtYyVkSloUXUZSoCvcq62Dp2PK3LyVRamBNB1Wg%2Bz%2BCDKmAwS5sqNfna%2BTitGchVDRzs1kWMqeHeApD%2FhgFC3qgKqjv7ZyyyfRlH2GFkqGj1YTGPRI7uvP7OFbV%2BCwX2%2B%2Fayk%2Flxw%2FbszRFAQm5VMsA9ZMc5Lwm0vGLN3YumugmDzimy7PDfstRyAQWQeLpvnVymHGJDfOyzFL01HApgm%2B&X-Amz-Signature=fc2e8a0255c77cf19f246ced6ba2dfc1dff37b0ad4ebb35153fd9836b0ef14a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
