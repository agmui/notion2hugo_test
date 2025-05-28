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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CX5DV2B%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaxSL3wPbQNmH3QuT0ZIGvBlNvFgyJNtNEolW5XMH6MAiEAn3RVMciG6tx0EbE2xYj0YWE%2Bx36RZgkwUXRTmiwGHtYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDMa92V0w47i6vPcHLCrcA%2FZ4CNuRzao30GXZ2Xfm5QTC9ndk6OrPyhKoptuh9nSjfSWYvN90j4dCZSIjWpgp33lPSdcGpOTe%2BVb%2F4TE4o%2Bx%2BVq1hCG7FTClKHZ5s4j%2BCjiB5b8WYxQe%2FemksMo2f6ozvon9RsVn%2Fz8lRBO8DUfhHeyBiLKKP%2FnpqSDiDPnOAL7ozu%2Bu%2B9HlY%2Fj%2BieOWGHxMxZrGHrTvVKwXrcJNlYGYzABUXK8qTFz3vt2BpS0jH88aQZbkp2jKKAkLzSjpMNkGmCCaLzH7K12cGzq%2BhEc8pxpveSQqge6HDjJTmyxb5drDVqU53Ja43ApoA5eQelKZBUIemMKvWl%2BXxAeSSVsoKoawuXIXH3efDb59S5VkEEPJSwgNIhXMc20vDOC7KNsJOcMe0KmVYC3k7gUGZ61zDCJX9LaZFjmy4QjLbPRI%2BscFvJoEgy7OnO5MiZAR%2BhXd0TGSMLIaVAGiqPSAJrgW5Nbc%2FwhDQREdB23xgq79CIhOAsmut7TIVI45WiKwVB9sUB1uMvjx%2BigJAXPmDAprPs7jd6D69oZHBqFTBDSyUlfTcvP3QZ%2FCRJYIMpeDe2FLIEBhfCn45x9IHBopcX%2Bq3hhY3%2FsbEx%2B7JnDwlHpWxmqjAQlqLsE6YhjZQMMOk2cEGOqUBMB7TndFKzCxdnXlx%2BGAao69C0G5T4NmtdvbCzl7QeJmpZgk9%2BlhJY4%2BzGzIdJcyl4cNyTKx8%2BotJJzyu%2BWitTsut0jTSUV9JSFaQjHm2198WadcI6QG4AAVSSMxl%2Fbq8xbECgPMkJynD49ZCSOSo88f2k7jW35ezKuDalERaIYDsbVcJdTxZ8s2OvNO5P8kGpYxE8TuM0qq%2FHBfOGIXydjlmmjH0&X-Amz-Signature=d13f1b51626a56d7bd1ed8b370a47e311d7db7045a39ec64900e509e9f87bf08&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CX5DV2B%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaxSL3wPbQNmH3QuT0ZIGvBlNvFgyJNtNEolW5XMH6MAiEAn3RVMciG6tx0EbE2xYj0YWE%2Bx36RZgkwUXRTmiwGHtYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDMa92V0w47i6vPcHLCrcA%2FZ4CNuRzao30GXZ2Xfm5QTC9ndk6OrPyhKoptuh9nSjfSWYvN90j4dCZSIjWpgp33lPSdcGpOTe%2BVb%2F4TE4o%2Bx%2BVq1hCG7FTClKHZ5s4j%2BCjiB5b8WYxQe%2FemksMo2f6ozvon9RsVn%2Fz8lRBO8DUfhHeyBiLKKP%2FnpqSDiDPnOAL7ozu%2Bu%2B9HlY%2Fj%2BieOWGHxMxZrGHrTvVKwXrcJNlYGYzABUXK8qTFz3vt2BpS0jH88aQZbkp2jKKAkLzSjpMNkGmCCaLzH7K12cGzq%2BhEc8pxpveSQqge6HDjJTmyxb5drDVqU53Ja43ApoA5eQelKZBUIemMKvWl%2BXxAeSSVsoKoawuXIXH3efDb59S5VkEEPJSwgNIhXMc20vDOC7KNsJOcMe0KmVYC3k7gUGZ61zDCJX9LaZFjmy4QjLbPRI%2BscFvJoEgy7OnO5MiZAR%2BhXd0TGSMLIaVAGiqPSAJrgW5Nbc%2FwhDQREdB23xgq79CIhOAsmut7TIVI45WiKwVB9sUB1uMvjx%2BigJAXPmDAprPs7jd6D69oZHBqFTBDSyUlfTcvP3QZ%2FCRJYIMpeDe2FLIEBhfCn45x9IHBopcX%2Bq3hhY3%2FsbEx%2B7JnDwlHpWxmqjAQlqLsE6YhjZQMMOk2cEGOqUBMB7TndFKzCxdnXlx%2BGAao69C0G5T4NmtdvbCzl7QeJmpZgk9%2BlhJY4%2BzGzIdJcyl4cNyTKx8%2BotJJzyu%2BWitTsut0jTSUV9JSFaQjHm2198WadcI6QG4AAVSSMxl%2Fbq8xbECgPMkJynD49ZCSOSo88f2k7jW35ezKuDalERaIYDsbVcJdTxZ8s2OvNO5P8kGpYxE8TuM0qq%2FHBfOGIXydjlmmjH0&X-Amz-Signature=7fdb6bc53d70da2d5048ff9fd61743cbef7df764d26605c360b3125f6c475d2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
