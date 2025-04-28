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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP64F7PY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLPj2wZlpal%2BIvGhJc9mYNXOcg6GnSjMbYpGvqo8Vo7AiArHMTlHNkGWLGXJiJc62nnTp1eYJmcnhmTbDaktknxoCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMagzVOgO0CdkX4jnLKtwDoypyTMoZMoihcdjqMmNeiFTneWEMcFru6EsWP6MWG72N6vR1pBxmW%2BwctKoJ1%2FP4YJcyaThwPpO6aL%2FSltftPCBzm6lZ7OVNawDHHH6XMair31wifVs%2BMFDhGONVz8isBJ1PrA%2BORMBCrLU0JxyKrr9lKyKodZfVTZ8ZAHXfTv%2Fs0d%2B0awewwhN84l26bov8TsK22%2FG6M4hB3y9DlLqBlA2wM4d%2FqXA16sQfaDh2Tk4%2BcPkRJ1r5IEfB77WxrXZI7ioo%2FxFHYco0WU9afuUb1FN8F75UX4z9kgYc9YLpmJroVc0WibQhyiio0fiYLk1QXfhbmMB4Z8%2FCZCC9q9CAvJLIsr71pA7cA7ksS8FtP4sI7yKV66UEo1z8S%2FqAHjs%2B7%2F6FsY0f41GkUlFAIm1TQW8ODWUaKA%2F5OHYMjdH%2FxhOmstCKOzWU7ncUOwBm0U0sEhQrOhfv4Gtctm20NLaq9uKpRY4x5FF3GZiLJmxp%2FTpfoCfuLw7Wz8NaVlHM8IMdrJUQ0m1Z53IgW6POsia7kXLPyNi8QRWm9s3w%2BBU6mr3D9%2Bps%2FRd40OP%2BLUB2%2FWGCQsjf%2B27ROtfsmSiJ5%2FcjmDCMG5wecRavAMN6XKVgZJE03PTKqrnxxKxy7DMw8aq9wAY6pgHwfc4wkYklcvordvqJPSklzPAa9Mp4CrFt%2B%2F03QWYjHj8cS0TcgSXacLE1S6dHUZGi5ZrIwuOmcdCSDPSY3XTf0reW57ndnLoB2jGPtoUuwvnOEuh1J9aq6i2BI8Yp8K%2B%2FOw7bW8FOP21wrKxfJBm54Hf0%2Be%2FR39uyQOpY2SWsSc%2FqrtwNRwxSXm0m%2Fkwz83XMjXLy%2FrFgybhkJHbXETfnTM%2FW2s9h&X-Amz-Signature=31088d63c64758a114a6446471e78b8e91102760f80f53c170f97340d38a76ea&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP64F7PY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLPj2wZlpal%2BIvGhJc9mYNXOcg6GnSjMbYpGvqo8Vo7AiArHMTlHNkGWLGXJiJc62nnTp1eYJmcnhmTbDaktknxoCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMagzVOgO0CdkX4jnLKtwDoypyTMoZMoihcdjqMmNeiFTneWEMcFru6EsWP6MWG72N6vR1pBxmW%2BwctKoJ1%2FP4YJcyaThwPpO6aL%2FSltftPCBzm6lZ7OVNawDHHH6XMair31wifVs%2BMFDhGONVz8isBJ1PrA%2BORMBCrLU0JxyKrr9lKyKodZfVTZ8ZAHXfTv%2Fs0d%2B0awewwhN84l26bov8TsK22%2FG6M4hB3y9DlLqBlA2wM4d%2FqXA16sQfaDh2Tk4%2BcPkRJ1r5IEfB77WxrXZI7ioo%2FxFHYco0WU9afuUb1FN8F75UX4z9kgYc9YLpmJroVc0WibQhyiio0fiYLk1QXfhbmMB4Z8%2FCZCC9q9CAvJLIsr71pA7cA7ksS8FtP4sI7yKV66UEo1z8S%2FqAHjs%2B7%2F6FsY0f41GkUlFAIm1TQW8ODWUaKA%2F5OHYMjdH%2FxhOmstCKOzWU7ncUOwBm0U0sEhQrOhfv4Gtctm20NLaq9uKpRY4x5FF3GZiLJmxp%2FTpfoCfuLw7Wz8NaVlHM8IMdrJUQ0m1Z53IgW6POsia7kXLPyNi8QRWm9s3w%2BBU6mr3D9%2Bps%2FRd40OP%2BLUB2%2FWGCQsjf%2B27ROtfsmSiJ5%2FcjmDCMG5wecRavAMN6XKVgZJE03PTKqrnxxKxy7DMw8aq9wAY6pgHwfc4wkYklcvordvqJPSklzPAa9Mp4CrFt%2B%2F03QWYjHj8cS0TcgSXacLE1S6dHUZGi5ZrIwuOmcdCSDPSY3XTf0reW57ndnLoB2jGPtoUuwvnOEuh1J9aq6i2BI8Yp8K%2B%2FOw7bW8FOP21wrKxfJBm54Hf0%2Be%2FR39uyQOpY2SWsSc%2FqrtwNRwxSXm0m%2Fkwz83XMjXLy%2FrFgybhkJHbXETfnTM%2FW2s9h&X-Amz-Signature=1e8ba020ca2663688efd7d962e8c5b63698b4c100111dc3a4279d759ceeca014&X-Amz-SignedHeaders=host&x-id=GetObject)

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
