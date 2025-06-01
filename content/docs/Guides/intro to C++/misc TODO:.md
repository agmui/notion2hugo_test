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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ZGBGBS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIAnlhbR4wLYQJR%2B8ceEZFl96TxjTrMoeA6tKWIP9LxNDAiEApG3ZtVOIfkKoC9Vzo6hhzAjwNeXqWVwMDlQkkDurMT8qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8O46%2FMvAYKfNdTOyrcA2aE3YyrEwP3nv46oeKJ%2FgLk8y1%2FfHxDWhfUYS1G4AOKgn%2BI%2F9IfJGB6%2FfikqaBR3JYL3JBFD4odQxUqMo3H5bkjBeXPGzA2Etki4HPuxdNehypUFzGFGIdeIPNnc%2Fx30XU%2BOu7T2hIH722io7VF%2F6TmxydYqKENpjkVn6iVkWnQvSKZnJYJvHew6K2sWtkg9B38Oz4h6ruUaoTnoILOvC8A2gvhrzlAlPCE%2FQWVMsWJAHtoVPYQkn2BmJvD307LZiKd5mF4STh6flowI%2BBRUOjRxi%2F6MaJihZ8XGTVmf8KQFAJzGArIJf5mcHBFlZSfHrIGLz%2FmnGGuqZ9j3JrBiBS%2F3A4T32V%2BTat0jufcB24t8GlGDQ%2B5hTO%2FQuYf9NBjaYkZU8tdTTLT4TVZYDlBVNmnW3iJC80kqBv3fBuvnH%2BCEGI83QThTCZ%2BvDFbvQ3wDCo0pMR8eIgjDVGVxPQ%2FZPr%2F%2FR0sB7uq93EKeyZzYbOv3W0SUdALBNRbbW9Ii3M0QyPHCWOQAfSUbD3u8ZThitRnvFSuM1X9SXvt6q7vs7Q8UH%2FK%2BYRoA3Nnajjvhv%2FDfsIYuVe6CWh0K9lB7pbF3xhdm4SDdsZ2TYMvh3oa3bjr1WZj%2F2pcLTjS0aepMPq08sEGOqUBPGwcq41pjQFRZSu6h9TY6AQAOz293JZPrE%2Bp1OqLfvs2MJArZ3cckDpQp6jXUk7gVc19JhHY4mGkZVs2D7KoU5OTq6yoPc5514NqyIr8QQoFwi8%2Ftd53F%2BjS6d%2FmqWspgRgNWYmaBU7CMdT%2F3PxRCPDBOO%2FJUnaXid3xxr33DHrT01M%2BPxezjnOWpS8IIrkq9jCYb3Dy015%2F0e3dwRAlcrK10DHe&X-Amz-Signature=9fde393eeb862915c2c25c7b2d2995027055b2bf5b002d4f7e9bab4fc672e07e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ZGBGBS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIAnlhbR4wLYQJR%2B8ceEZFl96TxjTrMoeA6tKWIP9LxNDAiEApG3ZtVOIfkKoC9Vzo6hhzAjwNeXqWVwMDlQkkDurMT8qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8O46%2FMvAYKfNdTOyrcA2aE3YyrEwP3nv46oeKJ%2FgLk8y1%2FfHxDWhfUYS1G4AOKgn%2BI%2F9IfJGB6%2FfikqaBR3JYL3JBFD4odQxUqMo3H5bkjBeXPGzA2Etki4HPuxdNehypUFzGFGIdeIPNnc%2Fx30XU%2BOu7T2hIH722io7VF%2F6TmxydYqKENpjkVn6iVkWnQvSKZnJYJvHew6K2sWtkg9B38Oz4h6ruUaoTnoILOvC8A2gvhrzlAlPCE%2FQWVMsWJAHtoVPYQkn2BmJvD307LZiKd5mF4STh6flowI%2BBRUOjRxi%2F6MaJihZ8XGTVmf8KQFAJzGArIJf5mcHBFlZSfHrIGLz%2FmnGGuqZ9j3JrBiBS%2F3A4T32V%2BTat0jufcB24t8GlGDQ%2B5hTO%2FQuYf9NBjaYkZU8tdTTLT4TVZYDlBVNmnW3iJC80kqBv3fBuvnH%2BCEGI83QThTCZ%2BvDFbvQ3wDCo0pMR8eIgjDVGVxPQ%2FZPr%2F%2FR0sB7uq93EKeyZzYbOv3W0SUdALBNRbbW9Ii3M0QyPHCWOQAfSUbD3u8ZThitRnvFSuM1X9SXvt6q7vs7Q8UH%2FK%2BYRoA3Nnajjvhv%2FDfsIYuVe6CWh0K9lB7pbF3xhdm4SDdsZ2TYMvh3oa3bjr1WZj%2F2pcLTjS0aepMPq08sEGOqUBPGwcq41pjQFRZSu6h9TY6AQAOz293JZPrE%2Bp1OqLfvs2MJArZ3cckDpQp6jXUk7gVc19JhHY4mGkZVs2D7KoU5OTq6yoPc5514NqyIr8QQoFwi8%2Ftd53F%2BjS6d%2FmqWspgRgNWYmaBU7CMdT%2F3PxRCPDBOO%2FJUnaXid3xxr33DHrT01M%2BPxezjnOWpS8IIrkq9jCYb3Dy015%2F0e3dwRAlcrK10DHe&X-Amz-Signature=375b18d865dd3a7cdb1312a091499037ee5604c8cb2c60966f32231c5aa73eca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
