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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTRVNVGN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGI78Af4apdEazoIDiKq%2FX6dMs8axOy%2BMQoRjUf0RsakAiEArrkjYxyd0wKcpkyGALOWMNoOfJiHBNs2IvU2lvAp0%2FYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAzAc7v2KPV5XZt31SrcA8BKqjikYG6WmNgKE1jA%2FyDMjZ9UCd89dGLyDQ%2Bagt4a7hKvPYfCjHTIWAdTdOfSlqp3cszqWiyPu3Qi9wIcY3sVS3sfzxSKjdHJYWrfQuciGqRinX4dPc1lTQh17yi4yUgAORfTNzryD0IouQ4kEpT3U1HkcipmocWrS%2Bgwb3%2F20uNM1UJrSbhp7NbP4Ci3JmR6o069L9KJkEpwdoBU4wITAavy%2BKbT21VdjoRBYjRgliOGtvq%2F%2FH6OaKY10%2BMdzPLdp5qr85kc3bXqiLIIMtxVbgJ9denptGamWr1g7ZruAmEOj7%2F19pHnLIWsUzGw1MQ02VbV3k0XDmbScZeEC4f5c6EIv%2FKkJcfQtEA590yIEftnG8rkTPctfGauC5juwaAn8N6lGSiIkwKgkdJSYs%2B53aN0LU38SWHZ4i7vXuSzysKW%2F8UG%2BScdoaOXifZlGyjh3LQ2rAICm7r%2F8%2FFAQVICsWOL7hy5A18RnojzMEPey9pxNDoyGXBZm8WQTQxKxPLMn7Ki90lTDX6uUA5i9pabYeOlBpkPyFTMiuZjy6jjwHRPwYeSz%2FDKCYvq0EHVGYf5i2AUSmpGSMSt9JVmCUs5qGixdW0fmaaQSRJhUCB%2BaXOMAekvo9lPzZO7MOGjzcMGOqUBC2sxQNHE4Ir%2BX%2FWWhrS49E68uolhJuSQoqI5soQyERueizoj2zP0IhoH8ZcVSzCLqHK0V4JIcrs%2FwwSK5GEAnj2VNi5g6BeAInoqe7EHGQor5Op0Xj6BjfsRYjr5gAMqpgTOEO9%2BeD1AnzSv1aWhqoF%2BGDH1pFeWpvBYCQdsopqQle4Dk%2F5B2ZMaLyCA8qR9vuIl2E3MHdx6z36X3rMk9EECJbcU&X-Amz-Signature=5014a6cfe6a94378c67ce988df32634f7146deecd3e842bf59b91407db5bf749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTRVNVGN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGI78Af4apdEazoIDiKq%2FX6dMs8axOy%2BMQoRjUf0RsakAiEArrkjYxyd0wKcpkyGALOWMNoOfJiHBNs2IvU2lvAp0%2FYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAzAc7v2KPV5XZt31SrcA8BKqjikYG6WmNgKE1jA%2FyDMjZ9UCd89dGLyDQ%2Bagt4a7hKvPYfCjHTIWAdTdOfSlqp3cszqWiyPu3Qi9wIcY3sVS3sfzxSKjdHJYWrfQuciGqRinX4dPc1lTQh17yi4yUgAORfTNzryD0IouQ4kEpT3U1HkcipmocWrS%2Bgwb3%2F20uNM1UJrSbhp7NbP4Ci3JmR6o069L9KJkEpwdoBU4wITAavy%2BKbT21VdjoRBYjRgliOGtvq%2F%2FH6OaKY10%2BMdzPLdp5qr85kc3bXqiLIIMtxVbgJ9denptGamWr1g7ZruAmEOj7%2F19pHnLIWsUzGw1MQ02VbV3k0XDmbScZeEC4f5c6EIv%2FKkJcfQtEA590yIEftnG8rkTPctfGauC5juwaAn8N6lGSiIkwKgkdJSYs%2B53aN0LU38SWHZ4i7vXuSzysKW%2F8UG%2BScdoaOXifZlGyjh3LQ2rAICm7r%2F8%2FFAQVICsWOL7hy5A18RnojzMEPey9pxNDoyGXBZm8WQTQxKxPLMn7Ki90lTDX6uUA5i9pabYeOlBpkPyFTMiuZjy6jjwHRPwYeSz%2FDKCYvq0EHVGYf5i2AUSmpGSMSt9JVmCUs5qGixdW0fmaaQSRJhUCB%2BaXOMAekvo9lPzZO7MOGjzcMGOqUBC2sxQNHE4Ir%2BX%2FWWhrS49E68uolhJuSQoqI5soQyERueizoj2zP0IhoH8ZcVSzCLqHK0V4JIcrs%2FwwSK5GEAnj2VNi5g6BeAInoqe7EHGQor5Op0Xj6BjfsRYjr5gAMqpgTOEO9%2BeD1AnzSv1aWhqoF%2BGDH1pFeWpvBYCQdsopqQle4Dk%2F5B2ZMaLyCA8qR9vuIl2E3MHdx6z36X3rMk9EECJbcU&X-Amz-Signature=7651ae886cb56c87e426aed8263d58e0528f8c94256e23125d279e35db7bb442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
