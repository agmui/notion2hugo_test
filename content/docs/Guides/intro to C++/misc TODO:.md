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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2373ASB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICn17CuYtK6F%2Bk3EM4i4sh98L6MFEdohjdEo4pkXeGZBAiEAtoijLA4TPIpq5USA0DsincsRJIYOUbZfg84%2F%2F4t6r%2BAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuvxhRSiSv%2FSV06qyrcA9smtDkvgFPJuMZY5qy%2BZ0VsQ4uzuvfvhj9dDQW18oN8fW1DkihDuJKyGTseE56QUf085h9o9egdTNZpVn%2B5eo1Q4ihNoJ8S%2F1xgyc1bS1eZYWIslnnErNZeznrQZhHNPq%2Bi5VvfOmiBcTLaAJB6k0fqEXzoqWEdNf43hgf%2FP0zNt6U8aK5mp4yGCSUOn5sLkwsZ7dljYDFa%2BvN9MIEeqhw2y7sLVeli7%2BGaBa%2Bt%2F1m3tyLSAj9ly1a9JH1BASb0RQioBJb%2FkOxS9SDyEqzlMjMtsrke3oF7KFL7c5B3c77a16n0i9iK4ADCPQUJx%2BsVDdYG2gb%2BzHvlcVQHVW9VokMQlhmeaXPkQ2AyPiCHpHJnJX7NwRImv909yCabTPg3kaQABxfocWCec3xf%2FklMcvFXZZa%2Fa%2BZmel%2FfWqCzzGI%2BYgzwEqihT48tBoOy8vhqYM6z8XDIdwZgMONp09xXoPYKbFbBUlBkPSsg12zvNpUKArPuCFa%2FuNkJVz5S53vk5oiLmXMGp7BYTcozrISe548x2LAbGteQ4W5ibe9MFDuXJrDjAQrnOqfuCdGwNY%2B5I%2BCdw5ZR4IF5ToOhBMRTxTQAJJbtfKVjR39FmtolzjYhd76%2BHFTig1aNKHB1MP6wosQGOqUB4Tz4j9%2Byxhd4j8Ny9KpqwYXmfBPkuMkQreeV4ntQrzPFOo%2FShEHgJ0OuDzIlk2JcIHL75nG1fFvPxzhwaNty6UVr1YxkTdHrxnS71Rr9uOZvFuhBtE2A4icKRIIAOzVlJw8M%2BBCUAKuVJ4oLxPDHtCSIB5ieP6SDQe%2F2EnEB%2BGF0my7jT5u6oHVi%2FTUqGVjBGLtE9A3sHCBF5J25rYOEKrBOncVH&X-Amz-Signature=045cc062d51032f27bd479070afd22b3af70d5247dc7f4c3c2e4305254c755fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2373ASB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICn17CuYtK6F%2Bk3EM4i4sh98L6MFEdohjdEo4pkXeGZBAiEAtoijLA4TPIpq5USA0DsincsRJIYOUbZfg84%2F%2F4t6r%2BAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuvxhRSiSv%2FSV06qyrcA9smtDkvgFPJuMZY5qy%2BZ0VsQ4uzuvfvhj9dDQW18oN8fW1DkihDuJKyGTseE56QUf085h9o9egdTNZpVn%2B5eo1Q4ihNoJ8S%2F1xgyc1bS1eZYWIslnnErNZeznrQZhHNPq%2Bi5VvfOmiBcTLaAJB6k0fqEXzoqWEdNf43hgf%2FP0zNt6U8aK5mp4yGCSUOn5sLkwsZ7dljYDFa%2BvN9MIEeqhw2y7sLVeli7%2BGaBa%2Bt%2F1m3tyLSAj9ly1a9JH1BASb0RQioBJb%2FkOxS9SDyEqzlMjMtsrke3oF7KFL7c5B3c77a16n0i9iK4ADCPQUJx%2BsVDdYG2gb%2BzHvlcVQHVW9VokMQlhmeaXPkQ2AyPiCHpHJnJX7NwRImv909yCabTPg3kaQABxfocWCec3xf%2FklMcvFXZZa%2Fa%2BZmel%2FfWqCzzGI%2BYgzwEqihT48tBoOy8vhqYM6z8XDIdwZgMONp09xXoPYKbFbBUlBkPSsg12zvNpUKArPuCFa%2FuNkJVz5S53vk5oiLmXMGp7BYTcozrISe548x2LAbGteQ4W5ibe9MFDuXJrDjAQrnOqfuCdGwNY%2B5I%2BCdw5ZR4IF5ToOhBMRTxTQAJJbtfKVjR39FmtolzjYhd76%2BHFTig1aNKHB1MP6wosQGOqUB4Tz4j9%2Byxhd4j8Ny9KpqwYXmfBPkuMkQreeV4ntQrzPFOo%2FShEHgJ0OuDzIlk2JcIHL75nG1fFvPxzhwaNty6UVr1YxkTdHrxnS71Rr9uOZvFuhBtE2A4icKRIIAOzVlJw8M%2BBCUAKuVJ4oLxPDHtCSIB5ieP6SDQe%2F2EnEB%2BGF0my7jT5u6oHVi%2FTUqGVjBGLtE9A3sHCBF5J25rYOEKrBOncVH&X-Amz-Signature=84617e7fb64f7f254c45caa6bc6403883e5e52ac9a468ff79448b060731f0c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
