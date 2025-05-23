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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KYQDUK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFzfMw84F6zwj%2BaJ94RHnGN5CZ3biFC2KOXol7udE85gAiA48jq7o%2BOAMteM1FTe6n08JUUXRo07vThedO1W2OxKiiqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw6N6iu9uWxhWHbF8KtwDtJd8YK4CwkAtw8oQt%2F4pZtTj5yxtUAOQ8PgkzRwTxeouEiPszlax%2FXZuZMszQKs0sE2NvuPo4waglfVG96s5%2FXhWpyXp5cWtflvd8v4dbRbVpvH97WWA%2F5tI5XnG5cV5zTQFYOUier1AlOnUt5%2BmW3MVusExTnuoeUN7etpiKn7SF8KdvjSdy0nRofLcHzcxbIDYuzcUCz9yfzXFRTyMiBQUbAplfynV43HzZyW0GecyEq5QwKRhzg%2BHLlJzNV6KbNOXA4cfpxVMzp3EgeLHv9r2X0w7ozsaKliBks7uMzbU79gro6Mhy4wKy6tJGWIJOBclAkOQzNYCnaj5r0nI0AQdihFixftENujLFkOT2rUBWdF25TOBfvcX5WqA5Uv8CtYoT3d7dUs0M3HLv1SUcNk%2BQYyB1co1cINtDx8CwiXVc0N9ajquKoUVl%2F7sy1DLrudR3qotU3VJC60OVsBR1eRTC%2FTQ1b5uJopWpj3%2FoiCMI%2FztctnoPIIlWk7wUiIpOQbuWQHB3jQn%2Fn37svrbcVTg804JMdpOgunFvetX%2Bc5%2BB0DcwFd2G79ug55xLfDHNkLBvSnafG4uGMok2CmGMuXj1SnYGVslzCHPe%2Fbcx3Rb%2FH7Vl8B7j9768kUwhKfCwQY6pgEG9tYmtIwonZJquOM5NlobbRMX6HLghCvFHpYBTBDEptXnsE7h84notqbi3K0DhCWVtFU5oaSALU0kVA%2BHXNpL67yyyxb4yGb9RYKAPrYttD0eJiX6E5ZhvdGQnZSmk5UlfTM0xsfhDh7zoqn1xSors3SHW2DUtKZ3SXf3UwBZ%2BdPQbg5W9SwR5lITW9%2Bay80AnRtfNWHFA%2F5lAkgFf6g8gmaZ5%2Bgr&X-Amz-Signature=8f165364e3e3579ef16845bc6c5a97a979a4503831b346499fc7817d6a8f38cf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KYQDUK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFzfMw84F6zwj%2BaJ94RHnGN5CZ3biFC2KOXol7udE85gAiA48jq7o%2BOAMteM1FTe6n08JUUXRo07vThedO1W2OxKiiqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw6N6iu9uWxhWHbF8KtwDtJd8YK4CwkAtw8oQt%2F4pZtTj5yxtUAOQ8PgkzRwTxeouEiPszlax%2FXZuZMszQKs0sE2NvuPo4waglfVG96s5%2FXhWpyXp5cWtflvd8v4dbRbVpvH97WWA%2F5tI5XnG5cV5zTQFYOUier1AlOnUt5%2BmW3MVusExTnuoeUN7etpiKn7SF8KdvjSdy0nRofLcHzcxbIDYuzcUCz9yfzXFRTyMiBQUbAplfynV43HzZyW0GecyEq5QwKRhzg%2BHLlJzNV6KbNOXA4cfpxVMzp3EgeLHv9r2X0w7ozsaKliBks7uMzbU79gro6Mhy4wKy6tJGWIJOBclAkOQzNYCnaj5r0nI0AQdihFixftENujLFkOT2rUBWdF25TOBfvcX5WqA5Uv8CtYoT3d7dUs0M3HLv1SUcNk%2BQYyB1co1cINtDx8CwiXVc0N9ajquKoUVl%2F7sy1DLrudR3qotU3VJC60OVsBR1eRTC%2FTQ1b5uJopWpj3%2FoiCMI%2FztctnoPIIlWk7wUiIpOQbuWQHB3jQn%2Fn37svrbcVTg804JMdpOgunFvetX%2Bc5%2BB0DcwFd2G79ug55xLfDHNkLBvSnafG4uGMok2CmGMuXj1SnYGVslzCHPe%2Fbcx3Rb%2FH7Vl8B7j9768kUwhKfCwQY6pgEG9tYmtIwonZJquOM5NlobbRMX6HLghCvFHpYBTBDEptXnsE7h84notqbi3K0DhCWVtFU5oaSALU0kVA%2BHXNpL67yyyxb4yGb9RYKAPrYttD0eJiX6E5ZhvdGQnZSmk5UlfTM0xsfhDh7zoqn1xSors3SHW2DUtKZ3SXf3UwBZ%2BdPQbg5W9SwR5lITW9%2Bay80AnRtfNWHFA%2F5lAkgFf6g8gmaZ5%2Bgr&X-Amz-Signature=f2dcca20ec6b0164fcefa93207722021bb42db34a22be04b0ab1cf8feb8537e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
