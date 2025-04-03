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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RO6ABKW%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkiLNneI1TT78OC4JLLO8U9ZmM1VVzMfL%2FN%2BomnNTqgIhAOhsvD%2Bo186V0hWLk1KolYq8zce8hX3kvjRRqRDUJftVKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVNl8luwhpjdI5CQkq3AMwLj94QSOz%2FkszITNNSG77ogRL1L6X5mTm2dcFb9mHu%2FkwClG7duTCuCbe4hhX7zuWbfSq1ydP9GZ0ZeUHdX9HK7uTsLgpHIERLxAqN6NvHeyH8POXX0iRoGIRnGVoSjtjTZWnGO5sdtJibDuKUKgclgeoraNtaDJprqtXXFOf8731C9YEW%2BchUPqt4Tz100%2F%2FEHzSr9I9CmamyelzeWODOe8DHpZ8JPceMFu9EPskU%2F0juTQaAqQcVmXMzIWf6m9UlzndMQBpTO2pGYPHiKP9IB%2BBZDdoleI%2B8f9h4NyGANi0v2rpSJCTS37LbJM2FdiqnvNqhSNY982Ikvb1AOO%2BE433l52MIcyB9%2ByLjj1Qup1HTy%2FROZl9cqiv6zj8PqxG5Cgfn7BVbERCLCixA0Zn0UkbnHKoIM9h7nBtw31k%2BAi%2FY5FSXOWq1Yj39k65zJepG%2FdmA4LlN5nHapdzYrnVuyPQdEGCv8xSrAIscJF9p%2BOcilwGQc%2FEqJmQtoeVC5CcdOBxbODLGZsMbqswg1ltc6fI41%2BGHndxJQ9f4ze2mz6iBMFmaciWwvb7cTYuLGS6laHeKWTZ9PU9HLJGG3NiPhqygHBrYocQx%2BODPQYFd%2FHQOcG7LxL%2BJsMwnzCi6ru%2FBjqkAbYkwpwTfENB2BxdX%2Buub8vlhb%2Fue29FDd80mPOZltAXnrLVJMrDVoEamPQcerAHwdpS327uFz8xIzxzRZVahDqk4lwSWHd6m6uvmizKxUsPPZ%2BmeKXGYi7stgu%2FLNRHf1FXHypn0bYWCZO0ISgjZSZErKwmFtwjok5s1KwIpCgSsjtUa8%2B1sucGEgtKXizu0YhvILbubok%2BgQejJCea%2BXAXorQD&X-Amz-Signature=43d1c047148fd3ad71af9db6550cea8d30001f2501cb1df0b861d3c10736df60&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RO6ABKW%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkiLNneI1TT78OC4JLLO8U9ZmM1VVzMfL%2FN%2BomnNTqgIhAOhsvD%2Bo186V0hWLk1KolYq8zce8hX3kvjRRqRDUJftVKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVNl8luwhpjdI5CQkq3AMwLj94QSOz%2FkszITNNSG77ogRL1L6X5mTm2dcFb9mHu%2FkwClG7duTCuCbe4hhX7zuWbfSq1ydP9GZ0ZeUHdX9HK7uTsLgpHIERLxAqN6NvHeyH8POXX0iRoGIRnGVoSjtjTZWnGO5sdtJibDuKUKgclgeoraNtaDJprqtXXFOf8731C9YEW%2BchUPqt4Tz100%2F%2FEHzSr9I9CmamyelzeWODOe8DHpZ8JPceMFu9EPskU%2F0juTQaAqQcVmXMzIWf6m9UlzndMQBpTO2pGYPHiKP9IB%2BBZDdoleI%2B8f9h4NyGANi0v2rpSJCTS37LbJM2FdiqnvNqhSNY982Ikvb1AOO%2BE433l52MIcyB9%2ByLjj1Qup1HTy%2FROZl9cqiv6zj8PqxG5Cgfn7BVbERCLCixA0Zn0UkbnHKoIM9h7nBtw31k%2BAi%2FY5FSXOWq1Yj39k65zJepG%2FdmA4LlN5nHapdzYrnVuyPQdEGCv8xSrAIscJF9p%2BOcilwGQc%2FEqJmQtoeVC5CcdOBxbODLGZsMbqswg1ltc6fI41%2BGHndxJQ9f4ze2mz6iBMFmaciWwvb7cTYuLGS6laHeKWTZ9PU9HLJGG3NiPhqygHBrYocQx%2BODPQYFd%2FHQOcG7LxL%2BJsMwnzCi6ru%2FBjqkAbYkwpwTfENB2BxdX%2Buub8vlhb%2Fue29FDd80mPOZltAXnrLVJMrDVoEamPQcerAHwdpS327uFz8xIzxzRZVahDqk4lwSWHd6m6uvmizKxUsPPZ%2BmeKXGYi7stgu%2FLNRHf1FXHypn0bYWCZO0ISgjZSZErKwmFtwjok5s1KwIpCgSsjtUa8%2B1sucGEgtKXizu0YhvILbubok%2BgQejJCea%2BXAXorQD&X-Amz-Signature=e3ebcdceb38c3ce7216a5536c3ad6d7b7167b05766f022a29315106ad499a157&X-Amz-SignedHeaders=host&x-id=GetObject)

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
