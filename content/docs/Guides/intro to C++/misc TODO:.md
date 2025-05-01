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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CRBWWO7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIG7BaxcH44ILeA7nMAFpKq4NDawvYfKhe88MtWvnydv8AiBI85SynJbUuCxNmFnOD7VVjBht3f7rmizJxHkjLOnf4yqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5MD2trdPxxAKnDpyKtwDluyVaEovfJV8hUl73QAINFF9k%2BQBBsNCU3mbzfYfLskFxgOtY1jlqsxxM9euC51tkCg4scjPTd%2BvD8igVtDXyE6UA4cueopzzoe3aUYrhgmMt9uyyxkZj9z8gDKu%2BKheKHlVUg91b1C2ZTLY0sdu9kdT%2FgdKIM4pexi6GSO20Wf9RGc%2BnE9ySI7q92uZR1f2BXpQxvgiVDZMaWInp9b3cTFMqrPBIkNkWd0ZoKKa90MAW0uRbyUuVTnEpqW4aQ946Vq4XgD82RQ3T9UHmFkk7lFFPbAKlQwhHvZJTkuUs2Mx3fiPOfGu1XtPKHHHEEUhis2A4f6r%2Fwi4AGsQMROjbpUbZtWdHzskfRkQI4r%2FX%2B5Ru0%2FzKL3OvA%2FOpgFwIyWIGFGakgnUgjf%2FpHagSS%2Flt8ZTIC78KVOS%2BOxdNOMvAcRGVjpm2hVGN9O6YwAAHB3OpVKQSQMrRFo4NDYXk7k0nu%2BQhcvx9k%2BwsvyEFuyzs6jLlqVY0JdAPZY%2FlBJp9Cy%2FqcegVv1amn1WkVmS5ug%2FUbrVTZ0VPBkPuNrtBjh2pEb22B0oNu2HPoQKP08UOaPP8sM095gu2PcHr8mfpbTnMMNWZ03UKZU6q2KW8yd%2BPO%2F73%2F2274hGdsU%2BPT4w%2F%2FXLwAY6pgHNc80%2F7MNEzKXWgK3t1JtEaHrjzvFPNDBd70PvqpcmTKo%2BiOYiNao4%2FbTr9zXF9adSH241d%2BhoeZE5iUHgJLmPjX4KtOMfCJ2OH71P%2BgYJMzYUsH7rtXDV63K6HW5G%2BNeSnih12spbxUGRFDU8GvoJi00HYaJSWxTbiwp3u2%2B1duEQbOD9qN7z0IwXRQ9ZZs%2B0KhEwKlAJJY3HUBVjYT%2FPAP4f8pfj&X-Amz-Signature=33e39961610292f4533e7f1510218bf42a6d029cbde854623f2a4425c191f9d4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CRBWWO7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIG7BaxcH44ILeA7nMAFpKq4NDawvYfKhe88MtWvnydv8AiBI85SynJbUuCxNmFnOD7VVjBht3f7rmizJxHkjLOnf4yqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5MD2trdPxxAKnDpyKtwDluyVaEovfJV8hUl73QAINFF9k%2BQBBsNCU3mbzfYfLskFxgOtY1jlqsxxM9euC51tkCg4scjPTd%2BvD8igVtDXyE6UA4cueopzzoe3aUYrhgmMt9uyyxkZj9z8gDKu%2BKheKHlVUg91b1C2ZTLY0sdu9kdT%2FgdKIM4pexi6GSO20Wf9RGc%2BnE9ySI7q92uZR1f2BXpQxvgiVDZMaWInp9b3cTFMqrPBIkNkWd0ZoKKa90MAW0uRbyUuVTnEpqW4aQ946Vq4XgD82RQ3T9UHmFkk7lFFPbAKlQwhHvZJTkuUs2Mx3fiPOfGu1XtPKHHHEEUhis2A4f6r%2Fwi4AGsQMROjbpUbZtWdHzskfRkQI4r%2FX%2B5Ru0%2FzKL3OvA%2FOpgFwIyWIGFGakgnUgjf%2FpHagSS%2Flt8ZTIC78KVOS%2BOxdNOMvAcRGVjpm2hVGN9O6YwAAHB3OpVKQSQMrRFo4NDYXk7k0nu%2BQhcvx9k%2BwsvyEFuyzs6jLlqVY0JdAPZY%2FlBJp9Cy%2FqcegVv1amn1WkVmS5ug%2FUbrVTZ0VPBkPuNrtBjh2pEb22B0oNu2HPoQKP08UOaPP8sM095gu2PcHr8mfpbTnMMNWZ03UKZU6q2KW8yd%2BPO%2F73%2F2274hGdsU%2BPT4w%2F%2FXLwAY6pgHNc80%2F7MNEzKXWgK3t1JtEaHrjzvFPNDBd70PvqpcmTKo%2BiOYiNao4%2FbTr9zXF9adSH241d%2BhoeZE5iUHgJLmPjX4KtOMfCJ2OH71P%2BgYJMzYUsH7rtXDV63K6HW5G%2BNeSnih12spbxUGRFDU8GvoJi00HYaJSWxTbiwp3u2%2B1duEQbOD9qN7z0IwXRQ9ZZs%2B0KhEwKlAJJY3HUBVjYT%2FPAP4f8pfj&X-Amz-Signature=eda659ac6decc419bc3b763a4aaabc9d84716af66e79f2b5a917cc94d29b05ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
