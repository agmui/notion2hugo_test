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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZVZTSS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhJ8grTWiEIbqVssuwhQHKvhI2nsXeRyAR%2BKQpS0omRgIhAOafnm3oBUcWkQAGJ1YzPo9VkIlOSKUJIurj8j491T6ZKv8DCFYQABoMNjM3NDIzMTgzODA1IgxrfYtXNkmv5awNW4Mq3AOJ6xOINnHxy2jkdKS%2B54dZLFOEgbMWivq6GENzrO3XJTJQIZEkW4Xev3WNJ28HeI9RrG4w9y55lvHnx%2BCDs0EnH21K4F%2BUaSy6ISrS7%2BV5u8SukhfaZEIpCNEwAF7TrjoC9ps8F2GeyJOVmwdj%2BZpLX2RTJNDVnkh3h4arRwkTfnolNFHZbYVBWzqIjmWOI1hUNbyjhpbbahQzhz3K97PZjKWL1E7sPXSvI41KihJwBqTwOqZ0zqMJm3AzcMghC%2F9sqFEwnMLWFBgZ77LnnpTtJBC%2BIp4wNkwctZxb%2FjznS%2B6b%2FMNzCqAfquIaZNqZodY1foBzVJAr1Ytw6BeKv5CpAxPAfmculIOqfyWW%2BG7zpX2J21ydhcoIQqLCOhgWgSeLHyF3w3V0ZHZfvg0v1t2ywfWy%2FLvNjXylP1nHhzWdIpTipcgPRGpqxps2%2BhD70qgXTADSvBiMgBe6mSfBo42qtXUzxjqmNHt5v%2FLRmZw%2F3tnhvoec6uFhepr5wKoclnaeUDwfAYWbxa0KRZ38vyGTO3zwVSxSAK7IIWRcUJ8rXiLTrjx2uJStmWp7p33XRx8ZoDFAvlb%2FDOhF2bxntB8TUa6rCFoknsQTQyq%2BvuKl%2FcuHfy7r1YR%2Bm3vmbTDr7LbABjqkAZtECEtr%2BDF6HSZSwqy03U%2Fz4jSL%2FbWoqcjpx06Uhphfz0OND9yjWrWfvi1Yztzmz9NwIxo9JJcTqFtsFDFA1OaP1oYpOm6F4gLEdE%2F4wLQBgCv5RzjcxzKSslP5sI1I9wF5zwGUD7CnndD0qMukweaPrgYp223uZPovF0No4REhqGucURa0a0UzoCAdBK369vTsddnN%2BovK6yz7TOV89bfZAgfx&X-Amz-Signature=86813ba11779b603bc12b13c67230a02a9d95e566aae255df2013cbdb4d94a02&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZVZTSS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhJ8grTWiEIbqVssuwhQHKvhI2nsXeRyAR%2BKQpS0omRgIhAOafnm3oBUcWkQAGJ1YzPo9VkIlOSKUJIurj8j491T6ZKv8DCFYQABoMNjM3NDIzMTgzODA1IgxrfYtXNkmv5awNW4Mq3AOJ6xOINnHxy2jkdKS%2B54dZLFOEgbMWivq6GENzrO3XJTJQIZEkW4Xev3WNJ28HeI9RrG4w9y55lvHnx%2BCDs0EnH21K4F%2BUaSy6ISrS7%2BV5u8SukhfaZEIpCNEwAF7TrjoC9ps8F2GeyJOVmwdj%2BZpLX2RTJNDVnkh3h4arRwkTfnolNFHZbYVBWzqIjmWOI1hUNbyjhpbbahQzhz3K97PZjKWL1E7sPXSvI41KihJwBqTwOqZ0zqMJm3AzcMghC%2F9sqFEwnMLWFBgZ77LnnpTtJBC%2BIp4wNkwctZxb%2FjznS%2B6b%2FMNzCqAfquIaZNqZodY1foBzVJAr1Ytw6BeKv5CpAxPAfmculIOqfyWW%2BG7zpX2J21ydhcoIQqLCOhgWgSeLHyF3w3V0ZHZfvg0v1t2ywfWy%2FLvNjXylP1nHhzWdIpTipcgPRGpqxps2%2BhD70qgXTADSvBiMgBe6mSfBo42qtXUzxjqmNHt5v%2FLRmZw%2F3tnhvoec6uFhepr5wKoclnaeUDwfAYWbxa0KRZ38vyGTO3zwVSxSAK7IIWRcUJ8rXiLTrjx2uJStmWp7p33XRx8ZoDFAvlb%2FDOhF2bxntB8TUa6rCFoknsQTQyq%2BvuKl%2FcuHfy7r1YR%2Bm3vmbTDr7LbABjqkAZtECEtr%2BDF6HSZSwqy03U%2Fz4jSL%2FbWoqcjpx06Uhphfz0OND9yjWrWfvi1Yztzmz9NwIxo9JJcTqFtsFDFA1OaP1oYpOm6F4gLEdE%2F4wLQBgCv5RzjcxzKSslP5sI1I9wF5zwGUD7CnndD0qMukweaPrgYp223uZPovF0No4REhqGucURa0a0UzoCAdBK369vTsddnN%2BovK6yz7TOV89bfZAgfx&X-Amz-Signature=b754e0f7956c150f65baec3c9140dca899a8a669707b92695adb4a07ab317df4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
